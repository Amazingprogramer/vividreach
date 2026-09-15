'use client'

import Image from 'next/image'
import { ArrowRight, Cpu, Gauge, LineChart, Database, ShieldCheck, Sparkles } from 'lucide-react'
import type { ViewId } from '@/components/site-header'

const FEATURES = [
  {
    icon: Cpu,
    title: 'Proprietary model',
    body: 'Engineered in-house and tuned specifically to client campaign objectives, not generic chat prompts. It learns your brand DNA.',
  },
  {
    icon: Gauge,
    title: 'Millisecond decisions',
    body: 'Reads live market trends, analyzes auction dynamics, and reallocates ad spend faster than any human team could ever react.',
  },
  {
    icon: LineChart,
    title: '24/7 optimization',
    body: 'Continuously learns from live performance. It never sleeps, meaning your ROI compounds every single hour of the day.',
  },
]

const WHY = [
  {
    icon: Database,
    title: 'Trained on real marketing data',
    body: 'Our model was not scraped from the open internet. It was trained on billions of impressions, clicks, and conversions from real campaigns — so it understands buyer psychology, not just language patterns. Every prediction is grounded in outcomes that actually moved revenue.',
  },
  {
    icon: ShieldCheck,
    title: 'An edge nobody can rent',
    body: 'When every agency plugs into the same off-the-shelf tools, they all produce the same mediocre results. Because we own our engine end to end, we can build capabilities that simply do not exist anywhere else on the market — and that gap widens every day it runs on your account.',
  },
  {
    icon: Sparkles,
    title: 'Creative and quantitative in one',
    body: 'Most systems are good at either numbers or words. Ours fuses predictive math with generative creative, so the message, the audience, and the bid are optimized together as a single decision instead of three disconnected guesses.',
  },
]

const STEPS = [
  {
    step: '01',
    title: 'Ingest & understand',
    body: 'We connect your ad accounts, analytics, and CRM. Within hours the engine has mapped your funnel, your best customers, and the exact points where spend is leaking. You get a full diagnostic before a single dollar changes hands.',
  },
  {
    step: '02',
    title: 'Model & deploy',
    body: 'The AI builds a custom performance model for your business, generates the creative and audience variants to test, and launches campaigns across every relevant channel — all structured for rapid, statistically-sound learning.',
  },
  {
    step: '03',
    title: 'Compound & scale',
    body: 'From there it never stops. Every hour it reallocates budget toward winners, kills losers, and drafts new variants to test. Performance does not plateau — it compounds, and you watch it all in a live dashboard.',
  },
]

export function HomeView({ onNavigate }: { onNavigate: (v: ViewId) => void }) {
  return (
    <div className="flex flex-col gap-28">
      {/* Hero */}
      <section className="flex flex-col items-center pt-6 text-center">
        <span className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan glow-neon" />
          Our own AI engine — not a licensed model
        </span>
        <h1 className="max-w-4xl text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
          Marketing Precision, <span className="text-gradient">Powered by Our Own AI.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          We didn&apos;t license someone else&apos;s model. We engineered our own marketing AI to
          turn raw data into superhuman campaign performance — reading market signals in
          milliseconds and optimizing every dollar of spend around the clock.
        </p>
        <button
          onClick={() => onNavigate('contact')}
          className="group mt-9 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-neon to-cyan px-7 py-3.5 text-sm font-semibold text-primary-foreground glow-neon transition-transform duration-200 hover:scale-[1.03]"
        >
          Book a Demo
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </section>

      {/* The Vivid Reach Advantage */}
      <section className="grid items-center gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-medium text-cyan">The Vivid Reach Advantage</p>
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            A custom engine, <span className="text-gradient">built for performance.</span>
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Most agencies rent the same off-the-shelf tools, run the same playbooks, and hope for
            the best. We took a different path and built our AI from the ground up — trained strictly
            on real marketing data so it reads market signals in milliseconds and optimizes around
            the clock.
          </p>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            When everyone uses the same generic software, no one has an edge. Our proprietary engine
            gives you intelligence your competitors simply cannot access, because it does not exist
            anywhere else. It is not a wrapper around a public model — it is a purpose-built system
            that treats your budget like it is its own, making thousands of small, compounding
            decisions that a human team could never keep pace with.
          </p>
        </div>

        <div className="glass relative overflow-hidden rounded-2xl p-2">
          <Image
            src="/ai-dashboard.png"
            alt="Vivid Reach AI marketing dashboard showing live campaign analytics"
            width={900}
            height={700}
            className="h-full w-full rounded-xl object-cover"
            priority
          />
        </div>
      </section>

      {/* Why Choose Custom AI */}
      <section className="flex flex-col gap-10">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-medium text-cyan">Why choose custom AI</p>
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            The difference between renting a tool and{' '}
            <span className="text-gradient">owning an advantage.</span>
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Anyone can buy a subscription to the same platforms your competitors use. That is not a
            strategy — it is parity. Here is what changes when the intelligence running your
            campaigns was built specifically to win them.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {WHY.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="glass flex flex-col gap-4 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-neon/40"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-secondary/50 text-cyan">
                <Icon className="h-5 w-5" />
              </span>
              <p className="font-display text-lg font-semibold text-foreground">{title}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="flex flex-col gap-10">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-medium text-cyan">Under the hood</p>
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Three capabilities that <span className="text-gradient">compound daily.</span>
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="glass group flex flex-col gap-4 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-secondary/50 text-cyan transition-colors group-hover:text-neon">
                <Icon className="h-5 w-5" />
              </span>
              <p className="font-display text-lg font-semibold text-foreground">{title}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* How It Works timeline */}
      <section className="flex flex-col gap-10">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-medium text-cyan">How it works</p>
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            From raw data to <span className="text-gradient">compounding growth.</span>
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Getting started is fast, and the engine does the heavy lifting from day one. Here is the
            path from your first conversation with us to campaigns that improve themselves every
            hour.
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
          Ready to give your budget an <span className="text-gradient">unfair advantage?</span>
        </h2>
        <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
          See exactly how our engine would approach your campaigns before you commit to anything.
        </p>
        <button
          onClick={() => onNavigate('contact')}
          className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-neon to-cyan px-7 py-3.5 text-sm font-semibold text-primary-foreground glow-neon transition-transform duration-200 hover:scale-[1.03]"
        >
          Book a Demo
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </section>
    </div>
  )
}
