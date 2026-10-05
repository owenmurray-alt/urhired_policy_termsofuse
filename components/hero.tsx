import Image from 'next/image'

export function Hero() {
  return (
    <header id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-brand-soft/40 via-background to-background" />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 pb-12 pt-10 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:gap-12 md:py-24">
        <div>
          <div className="mb-6 hidden items-center gap-3 md:flex">
            <span className="inline-flex rounded-xl bg-white px-3 py-2">
              <Image
                src="/assets/urhired-wordmark.png"
                alt="ur hired"
                width={150}
                height={59}
                className="h-9 w-auto object-contain"
              />
            </span>
            <Image
              src="/assets/nd-symbol.png"
              alt="Neurodiversity infinity symbol"
              width={40}
              height={40}
              className="h-8 w-8 object-contain"
            />
          </div>
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-soft/60 px-4 py-1.5 text-xs font-700 uppercase tracking-[0.14em] text-brand">
            <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
            AI for good
          </span>
          <h1 className="font-heading text-[2.125rem] font-700 leading-[1.1] tracking-tight text-foreground text-balance sm:text-4xl md:text-5xl">
            We help organisations unlock neurodivergent talent — at scale.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg md:mt-6">
            Deploy Tessa, our AI interview coach, into your programme and give every single person
            real interview practice — the kind that actually changes lives.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="https://calendly.com/owen-murray-urhired/tessa-demo-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-6 py-3 text-base font-600 text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md sm:text-sm"
            >
              Book a demo
            </a>
            <a
              href="#partner"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-base font-600 text-foreground transition-colors hover:border-brand hover:text-brand sm:text-sm"
            >
              See how the pilot works
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5 border-t border-border pt-6">
            <p className="flex items-center gap-3">
              <span className="font-heading text-4xl font-700 leading-none text-brand">78%</span>
              <span className="max-w-[11rem] text-sm leading-snug text-muted-foreground">
                of our users got a job within 6 weeks
              </span>
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs font-600 uppercase tracking-[0.14em] text-muted-foreground">
                Backed by
              </span>
              <Image
                src="/assets/enterprise-ireland.png"
                alt="Enterprise Ireland"
                width={185}
                height={75}
                className="h-12 w-auto rounded-md object-contain"
              />
            </div>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute inset-0 -z-10 mx-auto my-auto h-64 w-64 rounded-full bg-brand-soft blur-3xl md:h-80 md:w-80" />
          <Image
            src="/assets/tessa-body-2.png"
            alt="Tessa, the URHired AI interview coach"
            width={520}
            height={520}
            priority
            sizes="(min-width: 768px) 320px, 240px"
            className="w-full max-w-[15rem] object-contain drop-shadow-2xl md:max-w-xs"
          />
        </div>
      </div>
    </header>
  )
}
