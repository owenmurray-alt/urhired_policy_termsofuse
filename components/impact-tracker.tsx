'use client'

import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { Pause, Play } from 'lucide-react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  XAxis,
  YAxis,
} from 'recharts'

import { Button } from '@/components/ui/button'
import { ChartContainer, type ChartConfig } from '@/components/ui/chart'

const FIGURES_UPDATED = 'November 2026'
const HIRED_PERCENT = 78
const TOTALS_AXIS_MAX = 1500
const DRAW_DURATION_MS = 1800
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

const totals = [
  { label: 'Jobseekers helped', value: 628 },
  { label: 'Successful interviews', value: 1342 },
]

const chartConfig = {
  value: { label: 'Result', color: 'var(--primary)' },
  highlight: { label: 'Highlight', color: 'var(--accent)' },
} satisfies ChartConfig

function subscribeToMotionPreference(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION_QUERY)
  query.addEventListener('change', onChange)
  return () => query.removeEventListener('change', onChange)
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeToMotionPreference,
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false,
  )
}

function SweepGradient({ id, isSweeping }: { id: string; isSweeping: boolean }) {
  return (
    <linearGradient id={id} x1="0" y1="0" x2="1" y2="0" gradientTransform="translate(-0.7 0)">
      <stop offset="0.3" stopColor="var(--color-value)" />
      <stop offset="0.5" stopColor="var(--color-highlight)" />
      <stop offset="0.7" stopColor="var(--color-value)" />
      {isSweeping ? (
        <animateTransform
          attributeName="gradientTransform"
          type="translate"
          values="-0.7 0; 0.7 0; 0.7 0"
          keyTimes="0; 0.65; 1"
          dur="3.2s"
          repeatCount="indefinite"
        />
      ) : null}
    </linearGradient>
  )
}

export function ImpactTracker() {
  const panelRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const panel = panelRef.current
    if (!panel) return

    let frame = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        if (prefersReducedMotion) {
          setProgress(1)
          return
        }

        const start = performance.now()
        const tick = (now: number) => {
          const elapsed = Math.min((now - start) / DRAW_DURATION_MS, 1)
          setProgress(1 - Math.pow(1 - elapsed, 3))
          if (elapsed < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.3 },
    )
    observer.observe(panel)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [prefersReducedMotion])

  const isSweeping = progress === 1 && !isPaused && !prefersReducedMotion
  const hiredPercent = Math.round(HIRED_PERCENT * progress)
  const totalsData = totals.map((total) => ({
    label: total.label,
    value: total.value * progress,
    display: Math.round(total.value * progress).toLocaleString('en-IE'),
  }))

  return (
    <div ref={panelRef} className="overflow-hidden rounded-3xl border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-b border-border px-6 py-4 md:px-8">
        <p className="flex items-center gap-3 text-sm font-600 uppercase tracking-widest text-foreground">
          <span
            aria-hidden="true"
            className={`size-2.5 rounded-full bg-accent motion-reduce:animate-none ${
              isPaused ? '' : 'animate-pulse'
            }`}
          />
          Tessa impact tracker
        </p>
        <div className="flex items-center gap-4">
          <p className="text-sm text-muted-foreground">Updated {FIGURES_UPDATED}</p>
          {prefersReducedMotion ? null : (
            <Button
              variant="outline"
              size="sm"
              className="h-8 text-sm"
              aria-pressed={isPaused}
              onClick={() => setIsPaused((paused) => !paused)}
            >
              {isPaused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
              {isPaused ? 'Play animation' : 'Pause animation'}
            </Button>
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col gap-6 border-b border-border px-6 py-8 md:w-5/12 md:border-b-0 md:border-r md:px-8">
          <h3 className="font-heading text-lg font-600 text-foreground">Job outcomes</h3>
          <div className="grid flex-1 place-items-center *:col-start-1 *:row-start-1">
            <ChartContainer
              config={chartConfig}
              role="img"
              aria-label="Gauge chart showing that 78% of Tessa users got a job within 6 weeks."
              className="aspect-square w-full max-w-72"
            >
              <RadialBarChart
                accessibilityLayer={false}
                data={[{ name: 'hired', value: HIRED_PERCENT * progress }]}
                startAngle={210}
                endAngle={-30}
                innerRadius="78%"
                outerRadius="100%"
              >
                <defs>
                  <SweepGradient id="impact-gauge-sweep" isSweeping={isSweeping} />
                </defs>
                <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                <RadialBar
                  dataKey="value"
                  fill="url(#impact-gauge-sweep)"
                  background={{ fill: 'var(--muted)' }}
                  cornerRadius={999}
                  isAnimationActive={false}
                />
              </RadialBarChart>
            </ChartContainer>
            <p className="flex flex-col items-center gap-2 text-center">
              <span
                aria-hidden="true"
                className="font-heading text-6xl font-700 leading-none tracking-tight text-primary tabular-nums"
              >
                {hiredPercent}%
              </span>
              <span className="sr-only">{HIRED_PERCENT}%</span>
              <span className="max-w-36 text-sm leading-snug text-muted-foreground">
                of our users got a job within 6 weeks
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 px-6 py-8 md:flex-1 md:px-8">
          <h3 className="font-heading text-lg font-600 text-foreground">Totals to date</h3>
          <ChartContainer
            config={chartConfig}
            role="img"
            aria-label="Bar chart of totals to date: 628 jobseekers helped and 1,342 successful interviews."
            className="aspect-auto h-64 w-full text-sm"
          >
            <BarChart
              accessibilityLayer={false}
              data={totalsData}
              layout="vertical"
              barSize={32}
              margin={{ top: 16, right: 76, bottom: 0, left: 8 }}
            >
              <defs>
                <SweepGradient id="impact-totals-sweep" isSweeping={isSweeping} />
              </defs>
              <CartesianGrid horizontal={false} />
              <XAxis
                type="number"
                domain={[0, TOTALS_AXIS_MAX]}
                ticks={[0, 500, 1000, 1500]}
                interval={0}
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(tick: number) => tick.toLocaleString('en-IE')}
              />
              <YAxis type="category" dataKey="label" hide />
              <Bar
                dataKey="value"
                fill="url(#impact-totals-sweep)"
                radius={6}
                isAnimationActive={false}
              >
                <LabelList
                  dataKey="label"
                  content={({ x, y, value }) => (
                    <text x={Number(x)} y={Number(y) - 12} fontSize={14} className="fill-muted-foreground">
                      {value}
                    </text>
                  )}
                />
                <LabelList
                  dataKey="display"
                  position="right"
                  offset={12}
                  fontSize={22}
                  fontWeight={700}
                  className="fill-foreground font-heading"
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        </div>
      </div>
    </div>
  )
}
