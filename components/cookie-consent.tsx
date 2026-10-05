'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'urhired-cookie-consent'
const CONSENT_DAYS = 180

type ConsentValue = 'all' | 'necessary'

type StoredConsent = {
  value: ConsentValue
  expires: number
}

function readConsent(): StoredConsent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as StoredConsent
    if (!parsed?.expires || Date.now() > parsed.expires) {
      localStorage.removeItem(STORAGE_KEY)
      return null
    }
    return parsed
  } catch {
    return null
  }
}

function writeConsent(value: ConsentValue) {
  const record: StoredConsent = {
    value,
    expires: Date.now() + CONSENT_DAYS * 24 * 60 * 60 * 1000,
  }
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(record))
  } catch {
    // storage unavailable — banner simply reappears next visit
  }
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!readConsent()) {
      setVisible(true)
    }
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (visible) {
      root.dataset.cookieBanner = 'open'
    } else {
      delete root.dataset.cookieBanner
    }
    return () => {
      delete root.dataset.cookieBanner
    }
  }, [visible])

  function handleChoice(value: ConsentValue) {
    writeConsent(value)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-border bg-secondary/95 backdrop-blur supports-[backdrop-filter]:bg-secondary/80"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-4 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-6 md:py-6">
        <div className="max-w-3xl">
          <h2
            id="cookie-consent-title"
            className="font-heading text-base font-600 text-foreground md:text-lg"
          >
            Cookies on this site
          </h2>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground md:mt-2">
            <span className="md:hidden">
              We use cookies to make this site work and to understand how it&apos;s used. Consent
              lasts 180 days. See our{' '}
            </span>
            <span className="hidden md:inline">
              Cookies are small text files placed on your device by websites you visit. They are
              widely used to make sites work, or work more efficiently, as well as to provide
              information to the site owners. If you give consent it will last for 180 days. More
              information is available in our{' '}
            </span>
            <a
              href="/privacy-policy"
              className="font-500 text-foreground underline underline-offset-4 transition-colors hover:text-primary"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>

        <div className="grid shrink-0 grid-cols-2 gap-3 md:flex md:flex-col lg:flex-row">
          <button
            type="button"
            onClick={() => handleChoice('all')}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-4 py-2.5 text-sm font-600 text-primary-foreground transition-colors hover:bg-primary/90 md:px-6 md:py-3"
          >
            Accept all
          </button>
          <button
            type="button"
            onClick={() => handleChoice('necessary')}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-border bg-transparent px-4 py-2.5 text-sm font-600 text-foreground transition-colors hover:bg-foreground/10 md:px-6 md:py-3"
          >
            <span className="md:hidden">Necessary only</span>
            <span className="hidden md:inline">Only strictly necessary</span>
          </button>
        </div>
      </div>
    </div>
  )
}
