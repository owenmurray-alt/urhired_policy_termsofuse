import Image from 'next/image'

const steps = [
  {
    num: '01',
    img: '/assets/tessa-head-2.png',
    title: 'Free masterclass',
    body: 'Your team or cohort joins a session on the 10 Laws of Interviewing, at no cost, so everyone sees Tessa in action first.',
  },
  {
    num: '02',
    img: '/assets/tessa-body-3.png',
    title: 'Six-week pilot',
    body: "We run a flat-fee pilot with a small group from your programme, with Tessa embedded into what you're already doing.",
  },
  {
    num: '03',
    img: '/assets/tessa-head-3.png',
    title: 'Joint review',
    body: 'At the six-week mark, we sit down together, look at what changed for your cohort, and decide on next steps together.',
  },
]

export function PartnerSteps() {
  return (
    <section id="partner" className="bg-secondary/40">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-700 tracking-tight text-foreground text-balance md:text-4xl">
            How we partner with you
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            A low-risk way to see the impact on your cohort before committing to anything.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative flex flex-col rounded-3xl border border-border bg-card p-8 shadow-sm"
            >
              <span className="font-heading text-4xl font-700 text-brand/35">{step.num}</span>
              <div className="mx-auto my-4 flex h-40 w-40 items-center justify-center rounded-full bg-brand-soft/40">
                <Image
                  src={step.img || '/placeholder.svg'}
                  alt=""
                  width={200}
                  height={200}
                  className="h-36 w-36 object-contain"
                />
              </div>
              <h3 className="font-heading text-xl font-600 text-foreground">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
