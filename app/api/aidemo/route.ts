import { generateObject } from 'ai'
import { z } from 'zod'

export const maxDuration = 30

const campaignSchema = z.object({
  campaignName: z
    .string()
    .describe('A short, punchy internal name for this ad campaign'),
  positioning: z
    .string()
    .describe(
      'One or two sentences describing the core angle the AI would lead with for this specific property',
    ),
  listingDescription: z
    .string()
    .describe(
      'A polished, emotionally compelling 3-4 sentence listing description ready to publish',
    ),
  headlines: z
    .array(z.string())
    .min(3)
    .max(3)
    .describe('Three distinct scroll-stopping ad headlines under 60 characters each'),
  primaryTexts: z
    .array(z.string())
    .min(2)
    .max(2)
    .describe('Two short ad body copies (2-3 sentences) for paid social'),
  audiences: z
    .array(
      z.object({
        name: z.string().describe('Name of the audience segment'),
        detail: z
          .string()
          .describe('Who they are and why they are a strong match for this listing'),
        matchScore: z
          .number()
          .min(60)
          .max(99)
          .describe('AI confidence match score for this segment, 60-99'),
      }),
    )
    .min(3)
    .max(3),
  budget: z
    .array(
      z.object({
        channel: z.string().describe('Ad channel, e.g. Meta, Google, YouTube'),
        percentage: z
          .number()
          .describe('Percentage of budget allocated, integer, all channels sum to 100'),
        rationale: z.string().describe('Why the AI weights this channel for this listing'),
      }),
    )
    .min(3)
    .max(4),
  projected: z.object({
    estimatedLeads: z
      .string()
      .describe('Estimated qualified leads per month as a range, e.g. "18-27"'),
    costPerLead: z.string().describe('Projected cost per lead, e.g. "$32"'),
    reach: z.string().describe('Estimated monthly reach, e.g. "45,000-60,000"'),
    timeToFirstLead: z.string().describe('Estimated time to first lead, e.g. "36 hours"'),
  }),
  autonomousActions: z
    .array(z.string())
    .min(3)
    .max(4)
    .describe(
      'Specific actions the AI would take autonomously over the first 7 days to optimize spend',
    ),
})

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Record<string, unknown>
    const propertyType = String(body.propertyType ?? 'Single-family home')
    const location = String(body.location ?? '').slice(0, 120)
    const price = String(body.price ?? '').slice(0, 40)
    const beds = String(body.beds ?? '')
    const baths = String(body.baths ?? '')
    const features = String(body.features ?? '').slice(0, 600)

    const { object } = await generateObject({
      model: 'openai/gpt-4.1-mini',
      schema: campaignSchema,
      system:
        'You are VividReach, an autonomous AI marketing engine built specifically for real estate agents. ' +
        'You generate high-performing, realistic paid-advertising campaigns to sell property listings fast. ' +
        'Your tone is confident, concrete, and professional. Budget percentages across all channels must sum to exactly 100. ' +
        'Base every recommendation on the specific listing details provided.',
      prompt:
        `Create a complete launch-ready advertising campaign for this real estate listing.\n\n` +
        `Property type: ${propertyType}\n` +
        `Location: ${location || 'Not specified'}\n` +
        `List price: ${price || 'Not specified'}\n` +
        `Bedrooms: ${beds || 'n/a'}\n` +
        `Bathrooms: ${baths || 'n/a'}\n` +
        `Key features / notes: ${features || 'None provided'}\n`,
    })

    return Response.json(object)
  } catch (err) {
    console.log('[v0] aidemo generation error:', err instanceof Error ? err.message : err)
    return Response.json(
      { error: 'The AI could not generate a campaign right now. Please try again.' },
      { status: 500 },
    )
  }
}
