import {
  Target,
  Megaphone,
  PieChart,
  TrendingUp,
  Bot,
  FileText,
  Compass,
} from 'lucide-react'

export type Campaign = {
  campaignName: string
  positioning: string
  listingDescription: string
  headlines: string[]
  primaryTexts: string[]
  audiences: { name: string; detail: string; matchScore: number }[]
  budget: { channel: string; percentage: number; rationale: string }[]
  projected: {
    estimatedLeads: string
    costPerLead: string
    reach: string
    timeToFirstLead: string
  }
  autonomousActions: string[]
}

export function CampaignResult({ campaign }: { campaign: Campaign }) {
  const projected = [
    { label: 'Est. leads / mo', value: campaign.projected.estimatedLeads },
    { label: 'Cost per lead', value: campaign.projected.costPerLead },
    { label: 'Monthly reach', value: campaign.projected.reach },
    { label: 'First lead in', value: campaign.projected.timeToFirstLead },
  ]

  return (
    <div className="space-y-5">
      {/* header */}
      <div className="glass rounded-2xl p-5 sm:p-6">
        <div className="flex items-center gap-2 text-xs font-medium text-cyan">
          <Compass className="h-4 w-4" />
          Campaign strategy
        </div>
        <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-balance">
          {campaign.campaignName}
        </h2>
        <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
          {campaign.positioning}
        </p>
      </div>

      {/* projected results */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {projected.map((m) => (
          <div key={m.label} className="glass rounded-xl p-4 text-center">
            <div className="font-display text-xl font-bold text-gradient sm:text-2xl">
              {m.value}
            </div>
            <div className="mt-1 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
              {m.label}
            </div>
          </div>
        ))}
      </div>

      {/* listing description */}
      <Section icon={<FileText className="h-4 w-4" />} title="Polished listing copy">
        <p className="text-sm leading-relaxed text-foreground/90">
          {campaign.listingDescription}
        </p>
      </Section>

      {/* creative */}
      <Section icon={<Megaphone className="h-4 w-4" />} title="Ad creative">
        <div className="space-y-4">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Headlines
            </p>
            <div className="flex flex-wrap gap-2">
              {campaign.headlines.map((h, i) => (
                <span
                  key={i}
                  className="rounded-lg bg-secondary/60 px-3 py-1.5 text-sm ring-1 ring-inset ring-border"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Primary text
            </p>
            {campaign.primaryTexts.map((t, i) => (
              <p
                key={i}
                className="rounded-lg border-l-2 border-cyan/60 bg-secondary/40 px-3 py-2 text-sm leading-relaxed text-foreground/90"
              >
                {t}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* audiences */}
      <Section icon={<Target className="h-4 w-4" />} title="Targeted audiences">
        <div className="space-y-3">
          {campaign.audiences.map((a) => (
            <div key={a.name} className="rounded-xl bg-secondary/40 p-3.5 ring-1 ring-inset ring-border">
              <div className="flex items-center justify-between gap-3">
                <span className="font-medium">{a.name}</span>
                <span className="shrink-0 rounded-full bg-gradient-to-r from-neon to-cyan px-2.5 py-0.5 text-xs font-bold text-primary-foreground">
                  {a.matchScore}% match
                </span>
              </div>
              <p className="mt-1.5 text-sm text-muted-foreground">{a.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* budget */}
      <Section icon={<PieChart className="h-4 w-4" />} title="Autonomous budget allocation">
        <div className="space-y-4">
          {campaign.budget.map((b) => (
            <div key={b.channel}>
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span className="font-medium">{b.channel}</span>
                <span className="text-cyan">{b.percentage}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-neon to-cyan"
                  style={{ width: `${Math.min(100, Math.max(0, b.percentage))}%` }}
                />
              </div>
              <p className="mt-1.5 text-xs text-muted-foreground">{b.rationale}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* autonomous actions */}
      <Section icon={<Bot className="h-4 w-4" />} title="What the AI does next — on its own">
        <ul className="space-y-2.5">
          {campaign.autonomousActions.map((action, i) => (
            <li key={i} className="flex gap-3 text-sm text-foreground/90">
              <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
              {action}
            </li>
          ))}
        </ul>
      </Section>
    </div>
  )
}

function Section({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="glass rounded-2xl p-5 sm:p-6">
      <div className="mb-3.5 flex items-center gap-2">
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-neon/20 to-cyan/20 text-cyan">
          {icon}
        </span>
        <h3 className="font-display font-semibold">{title}</h3>
      </div>
      {children}
    </div>
  )
}
