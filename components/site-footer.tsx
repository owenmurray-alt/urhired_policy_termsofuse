import Image from 'next/image'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="inline-flex rounded-lg bg-white px-2.5 py-1.5">
              <Image
                src="/assets/urhired-wordmark.png"
                alt="ur hired"
                width={120}
                height={47}
                className="h-7 w-auto object-contain"
              />
            </span>
            <Image
              src="/assets/nd-symbol.png"
              alt="Neurodiversity infinity symbol"
              width={28}
              height={28}
              className="h-6 w-6 object-contain"
            />
          </div>
          <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">
            AI-powered interview coaching, deployed through the organisations already supporting your
            community.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-sm font-600 uppercase tracking-wider text-foreground">
            Company
          </h4>
          <div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
            <a href="#about" className="transition-colors hover:text-foreground">
              About
            </a>
            <a href="#who" className="transition-colors hover:text-foreground">
              Who we work with
            </a>
            <a href="/contact" className="transition-colors hover:text-foreground">
              Contact
            </a>
            <a
              href="https://calendly.com/owen-murray-urhired/meeting-with-owen-murray-clone-1"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              Book a call
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-sm font-600 uppercase tracking-wider text-foreground">
            Contact
          </h4>
          <address className="mt-4 text-sm not-italic leading-relaxed text-muted-foreground">
            Owen Murray
            <br />
            6 Fern Road, Sandyford
            <br />
            Dublin, D18 FP98, Ireland
            <br />
            +353 83 804 6428
          </address>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>URhired.ie · Company No. 722170, registered in Ireland</span>
          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="transition-colors hover:text-foreground">
              Privacy Policy
            </a>
            <a href="/terms-of-use" className="transition-colors hover:text-foreground">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
