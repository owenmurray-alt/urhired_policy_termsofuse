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

const cvSteps = [
  {
    title: 'Add the CV and the job ad',
    body: 'Candidates upload their current CV and paste in the advert for the role they actually want.',
  },
  {
    title: 'Get a match score',
    body: 'Tessa checks the CV against that job ad the way employer screening software and recruiters do, and shows what is already working.',
  },
  {
    title: 'Fix the quick wins',
    body: 'Specific, tickable fixes, such as adding numbers to show impact or naming the exact skills the ad asks for. No vague advice.',
  },
]

const comparison = [
  {
    generic: 'Rewrites a CV with buzzwords that sound like every other application.',
    tessa: 'Checks the CV against the actual job ad and flags the exact keywords and evidence missing.',
  },
  {
    generic: 'Generic interview questions with no sense of what hiring managers listen for.',
    tessa: 'Questions and feedback shaped by what recruiters actually shortlist and reject on.',
  },
  {
    generic: 'Long, dense replies that can overwhelm.',
    tessa: 'One clear step at a time, designed neurodivergent-first.',
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

        <div
          aria-labelledby="cv-heading"
          className="flex flex-col gap-10 rounded-3xl border border-primary/40 p-6 md:flex-row md:items-center md:gap-14 md:p-10"
        >
          <div className="mx-auto w-full max-w-xs shrink-0 overflow-hidden rounded-3xl border border-border ring-1 ring-primary/30 md:mx-0">
            <Image
              src="/assets/tessa-app-cv.jpg"
              alt="Tessa Curriculum Vitae screen showing a score of 78, Excellent, checked against the job ad, with 9 things already working, 3 to fix and a list of quick wins."
              width={900}
              height={1600}
              sizes="(min-width: 768px) 320px, 100vw"
              className="h-auto w-full"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-600 uppercase tracking-widest text-primary">Tailor your CV</p>
              <h3
                id="cv-heading"
                className="font-heading text-2xl font-700 leading-tight tracking-tight text-foreground text-balance md:text-3xl"
              >
                A CV built for the exact job, not every job.
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
                Most CVs are rejected before a person ever reads them. Tessa shows candidates
                exactly what a recruiter would change for this specific role.
              </p>
            </div>
            <ol className="flex flex-col gap-5">
              {cvSteps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-sm font-700 text-primary-foreground"
                  >
                    {index + 1}
                  </span>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-heading text-base font-600 text-foreground">{step.title}</h4>
                    <p className="leading-relaxed text-muted-foreground text-pretty">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
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

        <div className="flex flex-col gap-8 rounded-3xl border border-border p-6 md:p-10">
          <div className="flex max-w-3xl flex-col gap-3">
            <p className="text-sm font-600 uppercase tracking-widest text-primary">Not generic AI</p>
            <h3 className="font-heading text-2xl font-700 leading-tight tracking-tight text-foreground text-balance md:text-3xl">
              Built on 13 years of real recruitment experience.
            </h3>
            <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
              General-purpose chatbots guess at what employers want. Tessa is built on more than a
              decade of hiring, screening and placing candidates, so every CV check and practice
              question reflects how recruiters actually decide who gets an interview.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
            <div className="flex flex-col gap-4 bg-background p-6">
              <p className="font-heading text-base font-600 text-muted-foreground">Generic AI tools</p>
              <ul className="flex flex-col gap-4">
                {comparison.map((row) => (
                  <li key={row.generic} className="leading-relaxed text-muted-foreground text-pretty">
                    {row.generic}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4 bg-background p-6">
              <p className="font-heading text-base font-600 text-primary">Tessa</p>
              <ul className="flex flex-col gap-4">
                {comparison.map((row) => (
                  <li key={row.tessa} className="leading-relaxed text-foreground text-pretty">
                    {row.tessa}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

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
