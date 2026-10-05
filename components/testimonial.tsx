import { Star } from 'lucide-react'

export function Testimonial() {
  return (
    <section aria-labelledby="testimonial-heading" className="border-y border-border bg-card">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8 px-6 py-16 text-center md:py-24">
        <h2
          id="testimonial-heading"
          className="text-sm font-600 uppercase tracking-widest text-primary"
        >
          In their words
        </h2>

        <figure className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-1" role="img" aria-label="Rated 5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-5 fill-primary text-primary" aria-hidden="true" />
            ))}
          </div>

          <blockquote className="font-heading text-2xl font-600 leading-snug tracking-tight text-foreground text-balance md:text-3xl">
            {
              '“I wanted an app that could build my interview confidence and work with my neurodivergent communication style. Tessa did both, asking me great questions and preparing me for interviews. Loved the helpful job reminders too. The practice meant I got the job I wanted!”'
            }
          </blockquote>

          <figcaption className="flex flex-col items-center gap-1">
            <span className="font-600 text-foreground">Louise</span>
            <span className="text-sm text-muted-foreground">Tessa user, Google Play review</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
