'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  Sparkles,
  Hexagon,
  Home,
  MapPin,
  DollarSign,
  BedDouble,
  Bath,
  Wand2,
  Loader2,
  RotateCcw,
} from 'lucide-react'
import { CampaignResult, type Campaign } from './campaign-result'

const PROPERTY_TYPES = [
  'Single-family home',
  'Luxury estate',
  'Condo',
  'Townhouse',
  'Multi-family',
  'New construction',
]

const EXAMPLE = {
  propertyType: 'Luxury estate',
  location: 'Scottsdale, AZ',
  price: '$2,450,000',
  beds: '5',
  baths: '6',
  features:
    'Modern desert contemporary, resort-style backyard with infinity pool, floor-to-ceiling glass, mountain views, smart-home throughout, 3-car garage.',
}

type FormState = typeof EXAMPLE

export function AiDemo() {
  const [form, setForm] = useState<FormState>({
    propertyType: 'Single-family home',
    location: '',
    price: '',
    beds: '',
    baths: '',
    features: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')
  const [campaign, setCampaign] = useState<Campaign | null>(null)
  const [error, setError] = useState('')

  const set = (key: keyof FormState, value: string) =>
    setForm((f) => ({ ...f, [key]: value }))

  async function generate(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setError('')
    setCampaign(null)
    try {
      const res = await fetch('/api/aidemo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Request failed')
      const data = (await res.json()) as Campaign
      setCampaign(data)
      setStatus('done')
    } catch {
      setError('The AI could not generate a campaign right now. Please try again.')
      setStatus('error')
    }
  }

  function reset() {
    setStatus('idle')
    setCampaign(null)
    setError('')
  }

  return (
    <div className="mx-auto w-full max-w-5xl px-5 py-8 sm:px-8">
      {/* top bar */}
      <div className="mb-10 flex items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          Back to site
        </Link>
        <Link href="/" className="flex items-center gap-2.5">
          <span className="relative grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-neon to-cyan glow-neon">
            <Hexagon className="h-5 w-5 text-primary-foreground" strokeWidth={2.25} />
            <Sparkles className="absolute h-2.5 w-2.5 text-primary-foreground" strokeWidth={2.5} />
          </span>
          <span className="font-display text-base font-bold tracking-tight">
            Vivid<span className="text-gradient">Reach</span>
          </span>
        </Link>
      </div>

      {/* hero */}
      <div className="mb-10 text-center">
        <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-cyan" />
          Live AI demo
        </span>
        <h1 className="font-display mt-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          Try the <span className="text-gradient">AI</span> yourself
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
          Drop in a real listing. In seconds, VividReach&apos;s autonomous engine builds a
          launch-ready ad campaign — targeting, creative, budget split, and projected results.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]">
        {/* form */}
        <form onSubmit={generate} className="glass h-fit rounded-2xl p-5 sm:p-6 lg:sticky lg:top-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-display text-lg font-semibold">Listing details</h2>
            <button
              type="button"
              onClick={() => setForm(EXAMPLE)}
              className="text-xs font-medium text-cyan transition-opacity hover:opacity-80"
            >
              Use example
            </button>
          </div>

          <div className="space-y-4">
            <Field label="Property type" icon={<Home className="h-4 w-4" />}>
              <select
                value={form.propertyType}
                onChange={(e) => set('propertyType', e.target.value)}
                className="w-full rounded-lg bg-secondary/60 px-3 py-2.5 text-sm outline-none ring-1 ring-inset ring-border transition focus:ring-2 focus:ring-ring"
              >
                {PROPERTY_TYPES.map((t) => (
                  <option key={t} value={t} className="bg-popover">
                    {t}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Location" icon={<MapPin className="h-4 w-4" />}>
              <input
                value={form.location}
                onChange={(e) => set('location', e.target.value)}
                placeholder="Austin, TX"
                className="w-full rounded-lg bg-secondary/60 px-3 py-2.5 text-sm outline-none ring-1 ring-inset ring-border transition placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-ring"
              />
            </Field>

            <Field label="List price" icon={<DollarSign className="h-4 w-4" />}>
              <input
                value={form.price}
                onChange={(e) => set('price', e.target.value)}
                placeholder="$725,000"
                className="w-full rounded-lg bg-secondary/60 px-3 py-2.5 text-sm outline-none ring-1 ring-inset ring-border transition placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-ring"
              />
            </Field>

            <div className="grid grid-cols-2 gap-3">
              <Field label="Beds" icon={<BedDouble className="h-4 w-4" />}>
                <input
                  value={form.beds}
                  onChange={(e) => set('beds', e.target.value)}
                  placeholder="4"
                  inputMode="numeric"
                  className="w-full rounded-lg bg-secondary/60 px-3 py-2.5 text-sm outline-none ring-1 ring-inset ring-border transition placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-ring"
                />
              </Field>
              <Field label="Baths" icon={<Bath className="h-4 w-4" />}>
                <input
                  value={form.baths}
                  onChange={(e) => set('baths', e.target.value)}
                  placeholder="3"
                  inputMode="numeric"
                  className="w-full rounded-lg bg-secondary/60 px-3 py-2.5 text-sm outline-none ring-1 ring-inset ring-border transition placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-ring"
                />
              </Field>
            </div>

            <Field label="Key features" icon={<Sparkles className="h-4 w-4" />}>
              <textarea
                value={form.features}
                onChange={(e) => set('features', e.target.value)}
                rows={4}
                placeholder="Renovated kitchen, walkable to downtown, large backyard, top school district…"
                className="w-full resize-none rounded-lg bg-secondary/60 px-3 py-2.5 text-sm leading-relaxed outline-none ring-1 ring-inset ring-border transition placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-ring"
              />
            </Field>
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="group mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-neon to-cyan px-5 py-3 text-sm font-semibold text-primary-foreground glow-neon transition-transform duration-200 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Generating campaign…
              </>
            ) : (
              <>
                <Wand2 className="h-4 w-4 transition-transform group-hover:rotate-12" />
                Generate my campaign
              </>
            )}
          </button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Powered by VividReach&apos;s live generative engine.
          </p>
        </form>

        {/* results */}
        <div className="min-h-[24rem]">
          {status === 'idle' && <EmptyState />}
          {status === 'loading' && <LoadingState />}
          {status === 'error' && (
            <div className="glass flex h-full min-h-[24rem] flex-col items-center justify-center rounded-2xl p-8 text-center">
              <p className="text-destructive">{error}</p>
              <button
                onClick={reset}
                className="mt-4 flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary/70"
              >
                <RotateCcw className="h-4 w-4" />
                Try again
              </button>
            </div>
          )}
          {status === 'done' && campaign && (
            <div className="animate-fade-up">
              <CampaignResult campaign={campaign} />
              <button
                onClick={reset}
                className="mt-6 flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary/70"
              >
                <RotateCcw className="h-4 w-4" />
                Run another listing
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function Field({
  label,
  icon,
  children,
}: {
  label: string
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
        <span className="text-cyan">{icon}</span>
        {label}
      </span>
      {children}
    </label>
  )
}

function EmptyState() {
  return (
    <div className="glass flex h-full min-h-[24rem] flex-col items-center justify-center rounded-2xl p-8 text-center">
      <div className="relative grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-neon/20 to-cyan/20">
        <Wand2 className="h-7 w-7 text-cyan" />
      </div>
      <h3 className="font-display mt-5 text-lg font-semibold">Your campaign appears here</h3>
      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        Fill in a listing on the left and hit generate. The AI will produce targeting, ad
        creative, a budget plan, and projected results — the same way it runs live campaigns.
      </p>
    </div>
  )
}

const STEPS = [
  'Analyzing listing & local market',
  'Modeling high-intent buyer audiences',
  'Writing scroll-stopping ad creative',
  'Allocating budget across channels',
  'Projecting performance',
]

function LoadingState() {
  return (
    <div className="glass flex h-full min-h-[24rem] flex-col justify-center rounded-2xl p-8">
      <div className="mb-6 flex items-center gap-3">
        <Loader2 className="h-5 w-5 animate-spin text-cyan" />
        <span className="font-display text-lg font-semibold">The engine is working…</span>
      </div>
      <ul className="space-y-3">
        {STEPS.map((step, i) => (
          <li
            key={step}
            className="animate-fade-up flex items-center gap-3 text-sm text-muted-foreground"
            style={{ animationDelay: `${i * 550}ms` }}
          >
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-to-br from-neon to-cyan text-[11px] font-bold text-primary-foreground">
              {i + 1}
            </span>
            {step}
          </li>
        ))}
      </ul>
    </div>
  )
}
