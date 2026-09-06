'use client'

import { Target, PenTool, Search } from 'lucide-react'

const SERVICES = [
  {
    icon: Target,
    title: 'Predictive Ad Bidding',
    summary:
      'Our AI forecasts auction dynamics and adjusts bids in real time, placing every dollar where it will convert best — faster and more accurately than any manual bidding strategy.',
    problem:
      'Traditional agencies bid on yesterday\u2019s data. An account manager logs in each morning, reads a report that is already stale, and makes a handful of manual adjustments based on gut feel. By the time they react to a shift in the auction, the opportunity is gone and the budget has already been wasted on impressions that were never going to convert.',
    solution:
      'Our engine ingests auction signals continuously and predicts the value of each impression before the bid is placed. It adjusts bids thousands of times a day across every audience and placement, pushing spend toward the moments most likely to convert and pulling back the instant efficiency drops. There is no morning report and no lag — just decisions made at machine speed, every second the campaign is live.',
  },
  {
    icon: PenTool,
    title: 'AI-Generated Content at Scale',
    summary:
      'It produces on-brand copy, creative variants, and landing pages by the thousands, then tests and iterates automatically to find the winners humans would never have time to try.',
    problem:
      'Human creative teams are a bottleneck by design. They can produce a handful of ad variants per week, so campaigns test three or four ideas and then run the least-bad one for months. Real winning angles stay undiscovered simply because no one had the hours to write, design, and test them.',
    solution:
      'Our model generates thousands of on-brand variations — headlines, body copy, creative, and full landing pages — then launches them into structured tests and reads the results as they come in. Winning angles are scaled automatically and fresh challengers are drafted continuously, so creative fatigue never sets in and the best-performing message is always the one running.',
  },
  {
    icon: Search,
    title: 'Algorithmic SEO',
    summary:
      'It maps search intent, identifies ranking gaps, and structures content around live SERP signals — compounding organic visibility while competitors guess.',
    problem:
      'Most SEO is still guesswork dressed up as strategy. Agencies chase keyword lists, publish generic articles, and wait months to see if anything moved — with no real model of why a page ranks or how intent is shifting underneath them.',
    solution:
      'Our engine maps the true intent behind every query, finds the exact gaps between what searchers want and what currently ranks, and structures content around live SERP signals. It prioritizes the pages that will move the most qualified traffic and updates its plan as the results change, so organic visibility compounds instead of stalling.',
  },
]

const FAQ = [
  {
    q: 'Do you really build your own AI, or is it a wrapper around a public model?',
    a: 'We build and own our engine end to end. It was trained on real marketing outcomes rather than the open web, which is why it understands conversion behavior and not just language. That ownership is exactly what lets us do things off-the-shelf tools cannot.',
  },
  {
    q: 'How quickly will we see results?',
    a: 'The engine begins optimizing from the first day it has data. Most clients see meaningful efficiency gains within the first few weeks as the model learns, with performance compounding steadily from there as it accumulates more signal on your specific audience.',
  },
  {
    q: 'Which channels and platforms do you support?',
    a: 'We operate across paid search, paid social, display, and organic search. The engine treats every channel as part of one budget, reallocating spend to wherever it is producing the best return rather than optimizing each platform in isolation.',
  },
  {
    q: 'Do we keep control and visibility over our campaigns?',
    a: 'Always. You get a live dashboard showing exactly what the engine is doing and why, and your accounts remain yours. We believe automation should make performance transparent, not hide it behind a black box.',
  },
  {
    q: 'What size of business is this built for?',
    a: 'Our approach scales from ambitious startups to established brands. Because the model builds a custom performance profile for each account, it adapts to your budget and goals rather than forcing you into a one-size-fits-all playbook.',
  },
]

export function ServicesView() {
  return (
    <div className="flex flex-col gap-20">
      <header className="max-w-2xl">
        <p className="mb-3 text-sm font-medium text-cyan">What we do</p>
        <h1 className="text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Services executed by <span className="text-gradient">custom intelligence.</span>
        </h1>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          Every service below is run by our own AI engine — outperforming human teams on speed,
          scale, and precision. Below each one, we lay out exactly where traditional agencies fall
          short and how our technology closes the gap.
        </p>
      </header>

      {/* Service deep-dives */}
      <div className="flex flex-col gap-8">
        {SERVICES.map(({ icon: Icon, title, summary, problem, solution }) => (
          <article
            key={title}
            className="glass flex flex-col gap-6 rounded-2xl p-7 transition-colors hover:border-neon/40 sm:p-9"
          >
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-neon to-cyan text-primary-foreground">
                <Icon className="h-6 w-6" />
              </span>
              <h2 className="font-display text-2xl font-semibold tracking-tight">{title}</h2>
            </div>
            <p className="text-pretty leading-relaxed text-muted-foreground">{summary}</p>
            <div className="grid gap-6 border-t border-border pt-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold text-foreground">The problem with traditional agencies</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{problem}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold text-cyan">How our AI solves it</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{solution}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* FAQ */}
      <section className="flex flex-col gap-8">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-medium text-cyan">Frequently asked</p>
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Questions we hear <span className="text-gradient">before every engagement.</span>
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          {FAQ.map(({ q, a }) => (
            <article key={q} className="glass flex flex-col gap-2 rounded-2xl p-6 sm:p-7">
              <p className="font-display text-lg font-semibold text-foreground">{q}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{a}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
