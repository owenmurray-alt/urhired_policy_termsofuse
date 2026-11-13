import { OutcomeGrid } from '@/components/outcome-grid'

export function Outcomes() {
  return (
    <section id="results" aria-labelledby="results-heading" className="bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16 md:flex-row md:items-center md:gap-16 md:py-24">
        <div className="flex flex-col gap-4 md:flex-1">
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
            Picture 100 people using Tessa. Within 6 weeks, 78 of them have got a job.
          </p>
        </div>
        <div className="md:flex-1">
          <OutcomeGrid />
        </div>
      </div>
    </section>
  )
}
