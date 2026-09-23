import type { Metadata } from 'next'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contact us | ur hired',
  description:
    'Get in touch with the ur hired team to talk about deploying Tessa, our AI interview coach, across your programme.',
}

export default function ContactPage() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteNav />
      <main className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        <a
          href="/"
          className="text-sm font-500 text-muted-foreground transition-colors hover:text-foreground"
        >
          &larr; Back to home
        </a>
        <h1 className="mt-6 font-heading text-4xl font-700 tracking-tight text-balance md:text-5xl">
          Get in touch
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
          Whether you want to deploy Tessa across your programme, explore a pilot, or just have a
          question, we&apos;d love to hear from you. Reach out and we&apos;ll get back to you as soon
          as we can.
        </p>

        <div className="mt-14 grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
          <ContactForm />

          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-heading text-sm font-600 uppercase tracking-wider text-foreground">
                Book a call
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                The fastest way to get started is a 30-minute discovery call.
              </p>
              <a
                href="https://calendly.com/owen-murray-urhired/meeting-with-owen-murray-clone-1"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center rounded-full bg-brand px-5 py-2.5 text-sm font-600 text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
              >
                Book a demo
              </a>
            </div>

            <div>
              <h2 className="font-heading text-sm font-600 uppercase tracking-wider text-foreground">
                Email
              </h2>
              <div className="mt-3 flex flex-col gap-2 text-muted-foreground">
                <a
                  href="mailto:support@urhired.ie"
                  className="transition-colors hover:text-foreground"
                >
                  support@urhired.ie
                </a>
                <a
                  href="mailto:privacy@urhired.ie"
                  className="transition-colors hover:text-foreground"
                >
                  privacy@urhired.ie
                </a>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-sm font-600 uppercase tracking-wider text-foreground">
                Phone
              </h2>
              <a
                href="tel:+353838046428"
                className="mt-3 inline-block text-muted-foreground transition-colors hover:text-foreground"
              >
                +353 83 804 6428
              </a>
            </div>

            <div>
              <h2 className="font-heading text-sm font-600 uppercase tracking-wider text-foreground">
                Address
              </h2>
              <address className="mt-3 not-italic leading-relaxed text-muted-foreground">
                URHired Limited
                <br />
                6 Fern Road, Sandyford
                <br />
                Dublin, D18 FP98, Ireland
              </address>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
