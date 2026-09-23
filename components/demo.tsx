export function Demo() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-700 tracking-tight text-foreground text-balance md:text-4xl">
          See what your cohort would use.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
          A short look at real Tessa sessions — this is exactly what the people in your programme would go
          through, on their own time.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-4xl">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-lg ring-1 ring-brand-soft/30">
          <video
            src="/assets/tessa-client-demo.mp4"
            controls
            playsInline
            preload="metadata"
            className="aspect-video w-full bg-background object-cover"
          />
        </div>
      </div>
    </section>
  )
}
