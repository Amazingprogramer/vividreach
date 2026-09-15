'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Sparkles,
  Home as HomeIcon,
  Gauge,
  LineChart,
  Radar,
  Clock,
  Users,
  Check,
  X,
} from 'lucide-react'
import type { ViewId } from '@/components/site-header'

const FEATURES = [
  {
    icon: Radar,
    title: 'Hyper-local targeting',
    body: 'The engine reads your market at the ZIP-code level — pricing shifts, inventory, search demand — and puts each listing in front of the buyers most likely to close in that neighborhood.',
  },
  {
    icon: Gauge,
    title: 'Millisecond bid control',
    body: 'It analyzes live auction dynamics and reallocates ad spend across Meta, Google, and YouTube faster than any human media buyer could ever react.',
  },
  {
    icon: LineChart,
    title: '24/7 self-optimization',
    body: 'Every hour it kills underperforming creative, scales the winners, and drafts new variants to test — so your cost per lead drops while you sleep.',
  },
]

const STEPS = [
  {
    step: '01',
    title: 'Connect your listings',
    body: 'Link your ad accounts, CRM, and MLS feed. Within hours the engine has mapped your farm area, your best past buyers, and exactly where your current spend is leaking.',
  },
  {
    step: '02',
    title: 'Launch autonomously',
    body: 'The AI generates listing creative, writes the copy, builds buyer and seller audiences, and launches campaigns across every channel — structured for fast, statistically-sound learning.',
  },
  {
    step: '03',
    title: 'Compound your pipeline',
    body: 'From there it never stops. Budget flows toward the ads producing real showings and offers, and your cost per qualified lead compounds downward — all visible in a live dashboard.',
  },
]

const COMPARE = [
  { label: 'Optimizes campaigns', ai: 'Every hour, autonomously', human: 'Weekly, if the account manager remembers' },
  { label: 'Reaction to market shifts', ai: 'Milliseconds', human: 'Days to weeks' },
  { label: 'Creative testing', ai: 'Continuous, AI-generated variants', human: 'A handful of manual mockups' },
  { label: 'Working hours', ai: '24 / 7 / 365', human: '9 to 5, minus holidays' },
  { label: 'Cost structure', ai: 'One flat engine, no bloated retainer', human: 'Retainer + ad spend markup' },
  { label: 'Reporting', ai: 'Live, self-serve dashboard', human: 'A PDF at month end' },
]

export function HomeView({ onNavigate }: { onNavigate: (v: ViewId) => void }) {
  return (
    <div className="flex flex-col gap-28">
      {/* Hero */}
      <section className="flex flex-col items-center pt-6 text-center">
        <span className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan glow-neon" />
          Autonomous marketing engine — built for real estate
        </span>
        <h1 className="max-w-4xl text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
          Your listings, marketed by an <span className="text-gradient">AI that never sleeps.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          VividReach is an autonomous marketing engine that runs real estate ad campaigns for you —
          reading your local market in milliseconds and optimizing every dollar of spend around the
          clock. No retainers, no account managers, no waiting on a human to log in.
        </p>

        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/aidemo"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-neon to-cyan px-7 py-3.5 text-sm font-semibold text-primary-foreground glow-neon transition-transform duration-200 hover:scale-[1.03]"
          >
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full bg-white/25 transition-transform duration-500 ease-out group-hover:translate-x-full"
            />
            <Sparkles className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
            Try the AI Yourself
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
          <button
            onClick={() => onNavigate('contact')}
            className="glass inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-cyan/40"
          >
            Talk to us
          </button>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-cyan" /> Live in under 48 hours
          </span>
          <span className="inline-flex items-center gap-1.5">
            <HomeIcon className="h-3.5 w-3.5 text-cyan" /> Built for agents &amp; teams
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Gauge className="h-3.5 w-3.5 text-cyan" /> No long-term contract
          </span>
        </div>

        <div className="glass relative mt-14 w-full overflow-hidden rounded-2xl p-2">
          <Image
            src="/ai-dashboard.png"
            alt="VividReach autonomous marketing dashboard showing live real estate campaign analytics"
            width={1200}
            height={760}
            className="h-full w-full rounded-xl object-cover"
            priority
          />
        </div>
      </section>

      {/* Advantage */}
      <section className="grid items-center gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-medium text-cyan">The VividReach advantage</p>
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            A custom engine, <span className="text-gradient">built to sell homes.</span>
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Most agents either burn hours boosting posts by hand or hand a fat retainer to an agency
            that logs into their account once a week. VividReach took a different path: we engineered
            an autonomous engine, trained strictly on real estate marketing data, that treats your ad
            budget like its own.
          </p>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            It reads local buyer demand, generates the creative, sets the bids, and reallocates spend
            thousands of times a day — decisions no human media buyer could keep pace with. You get
            the output of an entire marketing department, running every hour, for a fraction of the
            cost.
          </p>
        </div>

        <div className="glass flex flex-col gap-4 rounded-2xl p-7">
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <article key={title} className="flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-secondary/50 text-cyan">
                <Icon className="h-5 w-5" />
              </span>
              <div className="flex flex-col gap-1">
                <p className="font-display text-base font-semibold text-foreground">{title}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Autonomous AI vs manual agency */}
      <section className="flex flex-col gap-10">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-medium text-cyan">Autonomous AI vs. manual agencies</p>
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            The same budget, working <span className="text-gradient">infinitely harder.</span>
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            A traditional agency is a group of people doing their best a few times a week. VividReach
            is a system making optimal decisions every hour. Here is what that difference looks like
            for your listings.
          </p>
        </div>

        <div className="glass overflow-hidden rounded-2xl">
          <div className="grid grid-cols-3 border-b border-border/60 bg-secondary/30 text-sm font-semibold">
            <div className="p-4 sm:p-5" />
            <div className="flex items-center gap-2 p-4 text-gradient sm:p-5">
              <Sparkles className="h-4 w-4 text-cyan" /> VividReach AI
            </div>
            <div className="flex items-center gap-2 p-4 text-muted-foreground sm:p-5">
              <Users className="h-4 w-4" /> Manual agency
            </div>
          </div>
          {COMPARE.map(({ label, ai, human }, i) => (
            <div
              key={label}
              className={`grid grid-cols-3 text-sm ${
                i % 2 === 1 ? 'bg-secondary/10' : ''
              }`}
            >
              <div className="p-4 font-medium text-foreground sm:p-5">{label}</div>
              <div className="flex items-start gap-2 p-4 text-muted-foreground sm:p-5">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                <span>{ai}</span>
              </div>
              <div className="flex items-start gap-2 p-4 text-muted-foreground sm:p-5">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/60" />
                <span>{human}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="flex flex-col gap-10">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-medium text-cyan">How it works</p>
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            From listing to <span className="text-gradient">closed deal.</span>
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Getting started is fast, and the engine does the heavy lifting from day one. Here is the
            path from setup to campaigns that improve themselves every hour.
          </p>
        </div>
        <ol className="flex flex-col gap-6">
          {STEPS.map(({ step, title, body }) => (
            <li
              key={step}
              className="glass flex flex-col gap-4 rounded-2xl p-7 transition-colors hover:border-cyan/40 sm:flex-row sm:items-start sm:gap-8"
            >
              <span className="font-display text-4xl font-bold text-gradient sm:w-24 sm:shrink-0">
                {step}
              </span>
              <div className="flex flex-col gap-2">
                <p className="font-display text-xl font-semibold text-foreground">{title}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Closing CTA */}
      <section className="glass flex flex-col items-center gap-6 rounded-2xl p-10 text-center sm:p-14">
        <h2 className="max-w-2xl text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
          See what the engine would do with <span className="text-gradient">your listings.</span>
        </h2>
        <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Run the AI on a real scenario and watch it build a campaign in real time — before you
          commit to anything.
        </p>
        <Link
          href="/aidemo"
          className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-neon to-cyan px-7 py-3.5 text-sm font-semibold text-primary-foreground glow-neon transition-transform duration-200 hover:scale-[1.03]"
        >
          <Sparkles className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
          Try the AI Yourself
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </section>
    </div>
  )
}
