'use client'

import { ArrowRight } from 'lucide-react'

import { useLiveStats } from '@/lib/use-live-stats'

export function LiveTrackerLink() {
  const live = useLiveStats()

  return (
    <a
      href="#results"
      className="group inline-flex min-h-11 items-center gap-2.5 rounded-md text-sm font-600 text-foreground underline-offset-4 transition-colors hover:text-brand hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
    >
      {live ? <span aria-hidden="true" className="size-2.5 rounded-full bg-accent" /> : null}
      {live ? 'Watch Tessa’s impact tracker, live' : 'See Tessa’s impact tracker'}
      <ArrowRight
        aria-hidden="true"
        className="size-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none"
      />
    </a>
  )
}
