import type { ReactNode } from 'react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'

type LegalPageProps = {
  title: string
  lastUpdated: string
  children: ReactNode
}

export function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <div className="min-h-dvh bg-background">
      <SiteNav />
      <main className="mx-auto w-full max-w-3xl px-6 py-16 md:py-24">
        <a
          href="/"
          className="text-sm font-500 text-muted-foreground transition-colors hover:text-foreground"
        >
          &larr; Back to home
        </a>
        <h1 className="mt-6 font-heading text-4xl font-700 tracking-tight text-balance md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
        <div className="legal-body mt-10">{children}</div>
      </main>
      <SiteFooter />
    </div>
  )
}
