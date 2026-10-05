import Image from 'next/image'

const screens = [
  {
    src: '/assets/tessa-app-practice.jpg',
    alt: 'Tessa app home screen showing an Interview practice button and an upcoming interview schedule.',
    title: 'Practise at their own pace',
    body: 'Candidates start a mock interview whenever they are ready, for the exact role they have applied for. They can answer by voice or text.',
  },
  {
    src: '/assets/tessa-app-feedback.jpg',
    alt: 'Tessa feedback screen titled Here’s how it went, with confidence, clarity and detail scores plus What worked and What to work on lists.',
    title: 'Clear feedback after every answer',
    body: 'Scores for confidence, clarity and detail, with plain-language notes on what worked and one specific thing to improve next time.',
  },
  {
    src: '/assets/tessa-app-progress.jpg',
    alt: 'Tessa progress screen showing confidence, clarity and detail scores and a list of saved practice interviews.',
    title: 'Progress they can see',
    body: 'Every session is saved, so candidates and programme staff can see confidence build over time on the way to feeling ready.',
  },
]

export function ProductTour() {
  return (
    <section id="product" aria-labelledby="product-heading" className="bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16 md:py-24">
        <div className="flex max-w-3xl flex-col gap-4">
          <p className="text-sm font-600 uppercase tracking-widest text-primary">Inside the app</p>
          <h2
            id="product-heading"
            className="font-heading text-3xl font-700 leading-tight tracking-tight text-foreground text-balance md:text-4xl"
          >
            What your cohort actually experiences.
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            Calm, low-clutter screens with one task at a time, designed neurodivergent-first so they
            work better for everyone.
          </p>
        </div>

        <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
          {screens.map((screen) => (
            <li key={screen.src} className="flex flex-col gap-5">
              <div className="overflow-hidden rounded-3xl border border-border ring-1 ring-primary/20">
                <Image
                  src={screen.src}
                  alt={screen.alt}
                  width={900}
                  height={1600}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="h-auto w-full"
                />
              </div>
              <div className="flex flex-col gap-2 border-t border-primary pt-4">
                <h3 className="font-heading text-lg font-600 text-foreground">{screen.title}</h3>
                <p className="leading-relaxed text-muted-foreground text-pretty">{screen.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <a
          href="https://play.google.com/store/apps/details?id=com.tessa.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="self-start text-sm font-500 text-foreground underline underline-offset-4 hover:text-primary"
        >
          See Tessa on Google Play
        </a>
      </div>
    </section>
  )
}
