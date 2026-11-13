import { CountUp } from '@/components/count-up'
import { OutcomeGrid } from '@/components/outcome-grid'

const totals = [
  { value: 600, suffix: '+', label: 'jobseekers helped' },
  { value: 1342, suffix: '', label: 'successful interviews' },
]

export function Outcomes() {
  return (
    <section id="results" aria-labelledby="results-heading" className="bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16 md:flex-row md:items-center md:gap-16 md:py-24">
        <div className="flex flex-col gap-8 md:flex-1">
          <div className="flex flex-col gap-4">
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

          <ul className="flex flex-wrap gap-x-12 gap-y-6 border-t border-border pt-8">
            {totals.map((total) => (
              <li key={total.label} className="flex flex-col gap-1">
                <p className="font-heading text-4xl font-700 leading-none tracking-tight text-foreground md:text-5xl">
                  <CountUp value={total.value} suffix={total.suffix} />
                </p>
                <p className="text-sm text-muted-foreground">{total.label}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:flex-1">
          <OutcomeGrid />
        </div>
      </div>
    </section>
  )
}
