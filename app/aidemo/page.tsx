import type { Metadata } from 'next'
import { AiDemo } from '@/components/aidemo/ai-demo'

export const metadata: Metadata = {
  title: 'Try the AI Yourself — VividReach',
  description:
    'Enter a real estate listing and watch VividReach’s autonomous AI generate a launch-ready ad campaign in seconds.',
}

export default function AiDemoPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-neon/20 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full bg-cyan/15 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 h-[24rem] w-[24rem] rounded-full bg-neon/10 blur-[120px]" />
      </div>
      <AiDemo />
    </div>
  )
}
