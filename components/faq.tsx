import Link from 'next/link'

const faqs = [
  {
    question: 'Is Tessa GDPR compliant? How is participant data handled?',
    answer:
      'Yes. URHired is based in Dublin and operates under the GDPR. We never sell data and never share it for advertising. Our processors are bound by written data processing agreements and do not train their models on participant data. Any transfers outside the EU rely on the EU-US Data Privacy Framework, with encryption in transit. Participants can delete their account in the app at any time, and their data is deleted straight away.',
    link: { href: '/privacy-policy', label: 'Read our Privacy Policy' },
  },
  {
    question: 'How do you handle information about neurodivergence?',
    answer:
      'Information such as a diagnosis or support needs counts as special category (health) data under Article 9 of the GDPR. Sharing it is always optional, and we ask for explicit consent before using it to tailor practice. It is never required to use Tessa.',
  },
  {
    question: 'Is Tessa accessible for neurodivergent and anxious interviewees?',
    answer:
      'Tessa was designed for neurodivergent, anxious and first-time interviewees, and for participants at every reading and confidence level. People practise privately, at their own pace and as often as they like, with clear and specific feedback after each session. If anyone in your cohort has particular access needs, tell us during the demo call and we will work through them with you.',
  },
  {
    question: 'How long does a pilot run?',
    answer:
      'Six weeks. It starts with a complimentary masterclass on the 10 Laws of Interviewing so your team and cohort see Tessa in action first. A small group then uses Tessa for six weeks, and at the end we sit down together to review what changed and decide on next steps.',
  },
  {
    question: 'What do our staff need to do?',
    answer:
      'Very little. Tessa fits into the programmes you already run and needs no extra staff hours to deliver a session. Participants practise on their own time, including outside session hours. Your team mainly helps us introduce Tessa to the cohort and joins the review at the end of the pilot.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'The masterclass is complimentary. The pilot is a flat fee set according to the size of your cohort, so you know the full cost before you start. We share exact pricing on a demo call once we understand your programme.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

export function Faq() {
  return (
    <section id="faq" className="mx-auto w-full max-w-3xl px-6 py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <div className="text-center">
        <h2 className="font-heading text-3xl font-700 tracking-tight text-foreground text-balance md:text-4xl">
          Frequently asked questions
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
          The questions programme leads ask us most often.
        </p>
      </div>

      <div className="mt-12 flex flex-col gap-3">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-2xl border border-border bg-card px-6 shadow-sm transition-shadow open:shadow-md"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-heading text-lg font-600 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-xl [&::-webkit-details-marker]:hidden">
              <span className="text-pretty">{faq.question}</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="shrink-0 text-brand transition-transform group-open:rotate-45"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </summary>
            <div className="pb-6">
              <p className="leading-relaxed text-muted-foreground text-pretty">{faq.answer}</p>
              {faq.link ? (
                <Link
                  href={faq.link.href}
                  className="mt-3 inline-block text-sm font-600 text-brand underline-offset-4 hover:underline"
                >
                  {faq.link.label}
                </Link>
              ) : null}
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
