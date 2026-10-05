import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { Mission } from '@/components/mission'
import { Impact } from '@/components/impact'
import { PartnerSteps } from '@/components/partner-steps'
import { Demo } from '@/components/demo'
import { ProductTour } from '@/components/product-tour'
import { Testimonial } from '@/components/testimonial'
import { Packages } from '@/components/packages'
import { Faq } from '@/components/faq'
import { Cta } from '@/components/cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <div className="border-y border-border bg-card">
          <div className="mx-auto w-full max-w-6xl px-6 py-6">
            <p className="text-center text-sm font-500 text-muted-foreground text-pretty">
              Deployed by employability programmes, education providers and community organisations
              worldwide.
            </p>
          </div>
        </div>
        <Mission />
        <Impact />
        <PartnerSteps />
        <Demo />
        <ProductTour />
        <Testimonial />
        <Packages />
        <Faq />
        <Cta />
      </main>
      <SiteFooter />
    </div>
  )
}
