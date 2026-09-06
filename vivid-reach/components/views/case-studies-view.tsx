'use client'

import { TrendingUp, Users, DollarSign, Zap } from 'lucide-react'

const STUDIES = [
  {
    icon: TrendingUp,
    client: 'E-Commerce Brand',
    metric: '300%',
    label: 'Return on ad spend',
    challenge:
      'A fast-growing consumer brand had hit a ceiling. They were spending aggressively across dozens of audiences, but returns were flat and their team could not tell which segments were carrying the account and which were quietly draining it. Every scaling attempt just raised costs without raising revenue.',
    strategy:
      'We deployed predictive bidding across all 40-plus audiences and let the engine value each impression in real time. It continuously shifted budget toward the segments and moments most likely to convert, throttled the ones that were not pulling their weight, and rebalanced the entire account thousands of times a day.',
    impact:
      'Within a single quarter, return on ad spend tripled to 300%. Just as important, the brand finally understood its own account — the dashboard made it obvious which audiences drove profit, giving them the confidence to scale spend without fear.',
  },
  {
    icon: Users,
    client: 'B2B SaaS Startup',
    metric: '5.2x',
    label: 'Qualified pipeline',
    challenge:
      'A B2B SaaS startup was generating plenty of traffic but almost none of it turned into qualified pipeline. Their content ranked for vanity keywords that never converted, and their sales team was buried in leads that would never buy.',
    strategy:
      'Our algorithmic SEO mapped the true buying intent behind their category and rebuilt their content around the queries that high-value prospects actually search. AI-generated assets filled the ranking gaps competitors had left wide open, and every page was structured to attract decision-makers rather than tire-kickers.',
    impact:
      'Qualified pipeline grew 5.2x as high-intent search traffic replaced empty clicks. The sales team spent their time on prospects who were ready to talk, and customer acquisition finally scaled in step with traffic.',
  },
  {
    icon: DollarSign,
    client: 'DTC Subscription',
    metric: '−47%',
    label: 'Cost per acquisition',
    challenge:
      'A direct-to-consumer subscription business was watching acquisition costs climb month over month. Their small creative team could only produce a few ads at a time, so the same tired variants ran until they burned out — and CAC crept upward with every refresh.',
    strategy:
      'The engine generated thousands of on-brand creative variants and ran them through structured, statistically-sound tests. It scaled the winners the moment they proved out, retired fatigued creative automatically, and kept a constant stream of fresh challengers in rotation so performance never went stale.',
    impact:
      'Cost per acquisition fell 47% — nearly cut in half — while volume held steady. The brand escaped the creative bottleneck entirely and now has a self-renewing library of proven, high-converting ads.',
  },
  {
    icon: Zap,
    client: 'Marketplace App',
    metric: '2.8M',
    label: 'New installs',
    challenge:
      'A marketplace app needed to scale installs across multiple regions fast, but every previous push to grow volume had sent cost per install soaring. Manual management simply could not keep up with the number of markets, languages, and placements involved.',
    strategy:
      'The engine ran 24/7 optimization across paid social in every target region simultaneously, tailoring creative and bids to each market and reallocating spend the instant efficiency shifted. It managed a level of complexity that would have required a small army of human managers.',
    impact:
      'The app reached 2.8 million new installs while holding cost per install flat, even as it expanded into new regions. Growth and efficiency stopped being a trade-off and started working together.',
  },
]

export function CaseStudiesView() {
  return (
    <div className="flex flex-col gap-12">
      <header className="max-w-2xl">
        <p className="mb-3 text-sm font-medium text-cyan">Proof</p>
        <h1 className="text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Results our AI <span className="text-gradient">actually delivered.</span>
        </h1>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          Numbers are easy to claim and hard to earn. Here is the full story behind four of them —
          the challenge each client faced, the strategy our engine ran, and the impact it produced.
        </p>
      </header>

      <div className="flex flex-col gap-8">
        {STUDIES.map(({ icon: Icon, client, metric, label, challenge, strategy, impact }) => (
          <article
            key={client}
            className="glass flex flex-col gap-6 rounded-2xl p-7 transition-colors hover:border-cyan/40 sm:p-9"
          >
            <div className="flex flex-col gap-6 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-border bg-secondary/50 text-cyan">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="font-display text-xl font-semibold text-foreground">{client}</span>
              </div>
              <div className="sm:text-right">
                <p className="font-display text-4xl font-bold text-gradient">{metric}</p>
                <p className="text-sm font-medium text-muted-foreground">{label}</p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold text-foreground">The challenge</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{challenge}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold text-cyan">The AI strategy</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{strategy}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold text-foreground">The impact</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{impact}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
