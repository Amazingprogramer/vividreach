'use client'

import { useState } from 'react'
import { Mail, Send, CheckCircle2 } from 'lucide-react'

const FIELDS = [
  { id: 'name', label: 'Name', type: 'text', placeholder: 'Jane Doe' },
  { id: 'email', label: 'Email', type: 'email', placeholder: 'jane@company.com' },
  { id: 'website', label: 'Website', type: 'url', placeholder: 'https://yourbrand.com' },
] as const

export function ContactView() {
  const [sent, setSent] = useState(false)

  return (
    <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.2fr]">
      <div className="flex flex-col gap-6">
        <div>
          <p className="mb-3 text-sm font-medium text-cyan">Contact</p>
          <h1 className="text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s put our AI to <span className="text-gradient">work for you.</span>
          </h1>
        </div>
        <p className="text-pretty leading-relaxed text-muted-foreground">
          Tell us about your goals and we&apos;ll show you exactly how our custom engine would
          approach your campaigns.
        </p>
        <a
          href="mailto:aarush@vividreach.org"
          className="glass inline-flex items-center gap-3 rounded-xl p-4 transition-colors hover:border-neon/40"
        >
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-neon to-cyan text-primary-foreground">
            <Mail className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-xs text-muted-foreground">Prefer email? Reach out directly</span>
            <span className="block font-medium text-foreground">aarush@vividreach.org</span>
          </span>
        </a>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          setSent(true)
        }}
        className="glass flex flex-col gap-5 rounded-2xl p-6 sm:p-8"
      >
        {FIELDS.map((f) => (
          <div key={f.id} className="flex flex-col gap-2">
            <label htmlFor={f.id} className="text-sm font-medium text-foreground">
              {f.label}
            </label>
            <input
              id={f.id}
              name={f.id}
              type={f.type}
              required={f.id !== 'website'}
              placeholder={f.placeholder}
              className="rounded-lg border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-neon/60 focus:ring-2 focus:ring-neon/20"
            />
          </div>
        ))}
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium text-foreground">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="What are you trying to achieve?"
            className="resize-none rounded-lg border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-neon/60 focus:ring-2 focus:ring-neon/20"
          />
        </div>

        <button
          type="submit"
          disabled={sent}
          className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-neon to-cyan px-6 py-3.5 text-sm font-semibold text-primary-foreground glow-neon transition-transform duration-200 hover:scale-[1.02] disabled:opacity-80"
        >
          {sent ? (
            <>
              <CheckCircle2 className="h-4 w-4" />
              Message sent
            </>
          ) : (
            <>
              Send message
              <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </>
          )}
        </button>
      </form>
    </div>
  )
}
