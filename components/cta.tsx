export function Cta() {
  return (
    <section id="book" className="mx-auto w-full max-w-6xl px-6 pb-16 md:pb-24">
      <div className="flex flex-col items-start gap-6 rounded-3xl bg-gradient-to-br from-brand to-brand-2 p-10 text-primary-foreground md:flex-row md:items-center md:justify-between md:p-14">
        <div className="max-w-xl">
          <h2 className="font-heading text-3xl font-700 tracking-tight text-balance md:text-4xl">
            Ready to see Tessa in your programme?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-primary-foreground/85 text-pretty">
            Book a free discovery call and we&apos;ll walk through what a pilot would look like for your
            cohort.
          </p>
        </div>
        <a
          href="https://calendly.com/owen-murray-urhired/meeting-with-owen-murray-clone-1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-background px-7 py-3.5 text-sm font-600 text-brand shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
        >
          Book a discovery call
        </a>
      </div>
    </section>
  )
}
