import { CountUp } from '@/components/count-up'
import { OutcomeGrid } from '@/components/outcome-grid'

const FIGURES_UPDATED = 'November 2026'

const totals = [
  { value: 600, suffix: '+', label: 'jobseekers helped' },
  { value: 1342, suffix: '', label: 'successful interviews' },
]

export function Outcomes() {
  return (
    <section id="results" aria-labelledby="results-heading" className="bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 md:py-24">
        <div className="flex max-w-3xl flex-col gap-4">
          <p className="text-sm font-600 uppercase tracking-widest text-primary">
            Tessa&apos;s impact
          </p>
          <h2
            id="results-heading"
            className="font-heading text-3xl font-700 leading-tight tracking-tight text-foreground text-balance md:text-4xl"
          >
            From practice to a job offer.
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            More than 600 jobseekers have prepared with Tessa, going on to 1,342 successful
            interviews. Picture 100 of them: within 6 weeks, 78 have got a job.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border bg-card">
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-border px-6 py-4 md:px-8">
            <p className="flex items-center gap-3 text-sm font-600 uppercase tracking-widest text-foreground">
              <span
                aria-hidden="true"
                className="size-2.5 animate-pulse rounded-full bg-accent motion-reduce:animate-none"
              />
              Tessa impact tracker
            </p>
            <p className="text-sm text-muted-foreground">Updated {FIGURES_UPDATED}</p>
          </div>

          <div className="flex flex-col md:flex-row">
            <ul className="flex flex-col border-b border-border md:flex-1 md:border-b-0 md:border-r">
              {totals.map((total) => (
                <li
                  key={total.label}
                  className="flex flex-1 flex-col justify-center gap-2 border-b border-border px-6 py-8 last:border-b-0 md:px-8 md:py-10"
                >
                  <p className="font-heading text-5xl font-700 leading-none tracking-tight text-foreground md:text-6xl">
                    <CountUp value={total.value} suffix={total.suffix} />
                  </p>
                  <p className="text-base text-muted-foreground">{total.label}</p>
                </li>
              ))}
            </ul>
            <div className="px-6 py-8 md:flex-1 md:px-8 md:py-10">
              <OutcomeGrid />
            </div>
          </div>

          <p className="border-t border-border px-6 py-4 text-sm leading-relaxed text-muted-foreground md:px-8">
            Figures as of {FIGURES_UPDATED}. Each dot is 1 in every 100 Tessa users; the dot
            animation illustrates the 78% result.
          </p>
        </div>
      </div>
    </section>
  )
}
