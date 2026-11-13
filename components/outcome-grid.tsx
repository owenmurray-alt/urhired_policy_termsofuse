'use client'

import { useEffect, useRef, useState } from 'react'

const TOTAL_USERS = 100
const HIRED_USERS = 78
const FILL_DELAY_MS = 28
const SWAP_DELAY_MS = 650

function pickRandom(indices: number[]) {
  return indices[Math.floor(Math.random() * indices.length)]
}

export function OutcomeGrid() {
  const panelRef = useRef<HTMLDivElement>(null)
  const litRef = useRef<boolean[]>(Array(TOTAL_USERS).fill(false))
  const [lit, setLit] = useState<boolean[]>(litRef.current)
  const [freshIndex, setFreshIndex] = useState<number | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const panel = panelRef.current
    if (!panel) return
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.25,
    })
    observer.observe(panel)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const settled = Array.from({ length: TOTAL_USERS }, (_, index) => index < HIRED_USERS)
      litRef.current = settled
      setLit(settled)
      return
    }

    let timeout: number

    const step = () => {
      const litIndices: number[] = []
      const unlitIndices: number[] = []
      litRef.current.forEach((isLit, index) => (isLit ? litIndices : unlitIndices).push(index))

      const next = [...litRef.current]
      const turnedOn = pickRandom(unlitIndices)
      next[turnedOn] = true

      const isFilling = litIndices.length < HIRED_USERS
      if (!isFilling) {
        next[pickRandom(litIndices)] = false
      }

      litRef.current = next
      setLit(next)
      setFreshIndex(turnedOn)
      timeout = window.setTimeout(step, isFilling ? FILL_DELAY_MS : SWAP_DELAY_MS)
    }

    timeout = window.setTimeout(step, FILL_DELAY_MS)
    return () => window.clearTimeout(timeout)
  }, [inView])

  const litCount = lit.filter(Boolean).length

  return (
    <div
      ref={panelRef}
      className="mx-auto flex w-full max-w-sm flex-col gap-6"
    >
      <div className="flex items-end gap-4">
        <p
          aria-hidden="true"
          className="font-heading text-6xl font-700 leading-none tracking-tight text-primary tabular-nums md:text-7xl"
        >
          {litCount}%
        </p>
        <p className="max-w-[12rem] pb-1 text-sm leading-snug text-muted-foreground">
          <span className="sr-only">78% </span>
          of our users got a job within 6 weeks
        </p>
      </div>

      <div
        role="img"
        aria-label="A grid of 100 dots, one for each of 100 Tessa users. 78 dots are lit, showing the 78% who got a job within 6 weeks."
        className="grid grid-cols-10 gap-1.5 sm:gap-2"
      >
        {lit.map((isLit, index) => (
          <span
            key={index}
            data-lit={isLit}
            className={`aspect-square rounded-full transition-[background-color,transform] duration-500 ${
              isLit
                ? index === freshIndex
                  ? 'scale-110 bg-accent'
                  : 'scale-100 bg-primary'
                : 'scale-75 bg-foreground/10'
            }`}
          />
        ))}
      </div>

      <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground">
        <li className="flex items-center gap-2">
          <span aria-hidden="true" className="size-3 rounded-full bg-primary" />
          78 got a job within 6 weeks
        </li>
        <li className="flex items-center gap-2">
          <span aria-hidden="true" className="size-3 rounded-full bg-foreground/10" />
          22 other users
        </li>
      </ul>
    </div>
  )
}
