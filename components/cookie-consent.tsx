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
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-3xl">
          <h2
            id="cookie-consent-title"
            className="font-heading text-lg font-600 text-foreground"
          >
            Cookies on this site
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Cookies are small text files placed on your device by websites you visit. They are
            widely used to make sites work, or work more efficiently, as well as to provide
            information to the site owners. If you give consent it will last for 180 days. More
            information is available in our{' '}
            <a
              href="/privacy-policy"
              className="font-500 text-foreground underline underline-offset-4 transition-colors hover:text-primary"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
          <button
            type="button"
            onClick={() => handleChoice('all')}
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-600 text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Accept all
          </button>
          <button
            type="button"
            onClick={() => handleChoice('necessary')}
            className="inline-flex items-center justify-center rounded-full border border-border bg-transparent px-6 py-3 text-sm font-600 text-foreground transition-colors hover:bg-foreground/10"
          >
            Only strictly necessary
          </button>
        </div>
      </div>
    </div>
  )
}
