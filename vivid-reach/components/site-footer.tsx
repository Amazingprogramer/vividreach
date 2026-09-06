'use client'

import { Hexagon, Sparkles, Share2, MessageCircle, Globe, Mail } from 'lucide-react'
import type { ViewId } from '@/components/site-header'

export function SiteFooter({ onNavigate }: { onNavigate: (v: ViewId) => void }) {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center gap-2.5">
          <span className="relative grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-neon to-cyan">
            <Hexagon className="h-5 w-5 text-primary-foreground" strokeWidth={2.25} />
            <Sparkles className="absolute h-2.5 w-2.5 text-primary-foreground" strokeWidth={2.5} />
          </span>
          <span className="font-display text-base font-bold tracking-tight">
            Vivid<span className="text-gradient">Reach</span>
          </span>
        </div>

        <a
          href="mailto:aarush@vividreach.org"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <Mail className="h-4 w-4 text-cyan" />
          aarush@vividreach.org
        </a>

        <div className="flex items-center gap-2">
          {[
            { icon: MessageCircle, label: 'X / Twitter' },
            { icon: Globe, label: 'LinkedIn' },
            { icon: Share2, label: 'Share' },
          ].map(({ icon: Icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground transition-all duration-200 hover:border-neon/50 hover:text-foreground"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-5 py-4 text-xs text-muted-foreground sm:px-8">
          © {new Date().getFullYear()} Vivid Reach. Powered by custom intelligence.
        </p>
      </div>
    </footer>
  )
}
