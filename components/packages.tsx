const packages = [
  {
    tier: 'Education & training',
    title: 'Schools, colleges & universities',
    body: 'Give every learner scalable, real interview practice — not just the ones who make it to a workshop.',
    bullets: [
      'Complements existing careers and employability workshops',
      'Every learner practises, not just those who show up',
      'Useful signal for outcomes and destinations reporting',
    ],
  },
  {
    tier: 'Employment & skills',
    title: 'Employability & workforce programmes',
    body: 'Add a practical, repeatable layer to job-readiness support without adding to caseworker hours.',
    bullets: [
      'Works alongside existing case management',
      'Designed for anxious and first-time interviewees',
      'Participants can practise outside session hours',
    ],
  },
  {
    tier: 'Community & pathways',
    title: 'Foundations, charities & community organisations',
    body: 'Support the people in your programmes as they move into their first roles or their next chapter.',
    bullets: [
      'Fits alongside the pathways and pastoral support you already run',
      'Built for participants at every reading and confidence level',
      'No extra staff hours to run a session',
    ],
  },
]

export function Packages() {
  return (
    <section id="who" className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-700 tracking-tight text-foreground text-balance md:text-4xl">
          Who we work with
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
          Tessa slots into programmes that are already running — it&apos;s not another platform for your
          team to manage from scratch.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {packages.map((pkg) => (
          <div
            key={pkg.title}
            className="flex flex-col rounded-3xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
          >
            <p className="text-xs font-600 uppercase tracking-wider text-brand">{pkg.tier}</p>
            <h3 className="mt-3 font-heading text-xl font-600 text-foreground">{pkg.title}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{pkg.body}</p>
            <ul className="mt-6 space-y-3 border-t border-border pt-6">
              {pkg.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-foreground">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-brand"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Pricing is set per pilot and cohort size — details on a discovery call.
      </p>
    </section>
  )
}
