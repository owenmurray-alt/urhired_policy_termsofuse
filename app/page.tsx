import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { Mission } from '@/components/mission'
import { PartnerSteps } from '@/components/partner-steps'
import { Demo } from '@/components/demo'
import { Packages } from '@/components/packages'
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
        <PartnerSteps />
        <Demo />
        <Packages />
        <Cta />
      </main>
      <SiteFooter />
    </div>
  )
}
