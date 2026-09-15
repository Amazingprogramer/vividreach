'use client'

import { useState } from 'react'
import { Hexagon, Sparkles, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export type ViewId = 'home' | 'services' | 'proof' | 'contact'

const NAV: { id: ViewId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'proof', label: 'Proof' },
  { id: 'contact', label: 'Contact' },
]

export function SiteHeader({
  view,
  onNavigate,
}: {
  view: ViewId
  onNavigate: (v: ViewId) => void
}) {
  const [open, setOpen] = useState(false)

  const go = (v: ViewId) => {
    onNavigate(v)
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <div className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 sm:px-6">
        <button
          onClick={() => go('home')}
          className="group flex items-center gap-2.5"
          aria-label="Vivid Reach home"
        >
          <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-neon to-cyan glow-neon transition-transform duration-300 group-hover:scale-105">
            <Hexagon className="h-6 w-6 text-primary-foreground" strokeWidth={2.25} />
            <Sparkles className="absolute h-3 w-3 text-primary-foreground" strokeWidth={2.5} />
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            Vivid<span className="text-gradient">Reach</span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              aria-current={view === item.id ? 'page' : undefined}
              className={cn(
                'relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200',
                view === item.id
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {item.label}
              {view === item.id && (
                <span className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-neon to-cyan" />
              )}
            </button>
          ))}
        </nav>

        <button
          onClick={() => go('contact')}
          className="hidden rounded-lg bg-gradient-to-r from-neon to-cyan px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.03] md:block"
        >
          Get Started
        </button>

        <button
          className="grid h-9 w-9 place-items-center rounded-lg text-foreground md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="glass animate-fade-up mx-auto mt-2 max-w-6xl rounded-2xl p-2 md:hidden">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              aria-current={view === item.id ? 'page' : undefined}
              className={cn(
                'block w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors',
                view === item.id
                  ? 'bg-secondary text-foreground'
                  : 'text-muted-foreground hover:bg-secondary/60 hover:text-foreground',
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  )
}
