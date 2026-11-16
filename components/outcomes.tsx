import { ImpactTracker } from '@/components/impact-tracker'

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
            interviews. Within 6 weeks, 78% of our users have got a job.
          </p>
        </div>

        <ImpactTracker />
      </div>
    </section>
  )
}
