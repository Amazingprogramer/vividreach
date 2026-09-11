'use client'

import { useState } from 'react'
import { SiteHeader, type ViewId } from './site-header'
import { SiteFooter } from './site-footer'
import { HomeView } from './vivid-reach/home-view'
import { ServicesView } from './vivid-reach/services-view'
import { CaseStudiesView } from './vivid-reach/case-studies-view'
import { ContactView } from './contact-view'

export default function Page() {
  const [view, setView] = useState<ViewId>('home')

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* ambient background glow */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-neon/20 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full bg-cyan/15 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 h-[24rem] w-[24rem] rounded-full bg-neon/10 blur-[120px]" />
      </div>

      <SiteHeader view={view} onNavigate={setView} />

      <main className="mx-auto w-full max-w-6xl px-5 pb-24 pt-28 sm:px-8">
        {/* key forces remount so the fade-in replays on every view change */}
        <div key={view} className="animate-fade-up">
          {view === 'home' && <HomeView onNavigate={setView} />}
          {view === 'services' && <ServicesView />}
          {view === 'proof' && <CaseStudiesView />}
          {view === 'contact' && <ContactView />}
        </div>
      </main>

      <SiteFooter onNavigate={setView} />
    </div>
  )
}