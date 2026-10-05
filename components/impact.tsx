const stats = [
  {
    value: '15–20%',
    label: 'of the population is estimated to be neurodivergent.',
    source: 'Doyle, British Medical Bulletin (2020)',
    href: 'https://academic.oup.com/bmb/article/135/1/108/5907018',
  },
  {
    value: '3 in 10',
    label: 'working-age autistic people are in employment — one of the lowest rates of any group.',
    source: 'The Buckland Review of Autism Employment (2024)',
    href: 'https://www.gov.uk/government/publications/the-buckland-review-of-autism-employment-report-and-recommendations',
  },
  {
    value: '50%',
    label: 'of managers say they would be uncomfortable hiring or managing a neurodivergent person.',
    source: 'Institute of Leadership & Management (2020)',
    href: 'https://www.institutelm.com/',
  },
]

const responses = [
  {
    title: 'Practice without pressure',
    body: 'Candidates rehearse as many times as they need, at their own pace, with no audience and no judgement — so the real interview feels familiar.',
  },
  {
    title: 'Feedback that is clear and specific',
    body: 'Tessa gives direct, structured feedback on every answer, so candidates know exactly what to improve instead of guessing at unwritten rules.',
  },
  {
    title: 'Scale for every participant',
    body: 'Programmes can give every person real interview practice, not just the few who get a one-to-one session with staff.',
  },
]

export function Impact() {
  return (
    <section
      id="impact"
      aria-labelledby="impact-heading"
      className="border-y border-border bg-card"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16 md:py-24">
        <div className="flex max-w-3xl flex-col gap-4">
          <p className="text-sm font-600 uppercase tracking-widest text-primary">Why it matters</p>
          <h2
            id="impact-heading"
            className="font-heading text-3xl font-700 leading-tight tracking-tight text-foreground text-balance md:text-4xl"
          >
            Talent isn&apos;t the barrier. The interview often is.
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            Neurodivergent people are hugely under-represented in work. Traditional interviews reward
            reading unspoken cues under pressure, rather than the skills the job actually needs.
          </p>
        </div>

        <ul className="grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <li
              key={stat.value}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-background p-6"
            >
              <p className="font-heading text-4xl font-700 tracking-tight text-primary md:text-5xl">
                {stat.value}
              </p>
              <p className="leading-relaxed text-foreground text-pretty">{stat.label}</p>
              <a
                href={stat.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
              >
                Source: {stat.source}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-6">
          <h3 className="font-heading text-2xl font-600 tracking-tight text-foreground text-balance">
            How Tessa helps close the gap
          </h3>
          <ul className="grid gap-6 md:grid-cols-3">
            {responses.map((item) => (
              <li key={item.title} className="flex flex-col gap-2 border-t border-primary pt-4">
                <p className="font-heading text-lg font-600 text-foreground">{item.title}</p>
                <p className="leading-relaxed text-muted-foreground text-pretty">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
