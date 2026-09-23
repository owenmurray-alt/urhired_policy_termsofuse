import Image from 'next/image'

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a href="#top" className="flex items-center">
          <span className="inline-flex rounded-lg bg-white px-2.5 py-1.5">
            <Image
              src="/assets/urhired-wordmark.png"
              alt="ur hired"
              width={110}
              height={43}
              className="h-6 w-auto object-contain"
            />
          </span>
        </a>

        <div className="hidden items-center gap-8 text-sm font-500 text-muted-foreground md:flex">
          <a href="#partner" className="transition-colors hover:text-foreground">
            How we partner
          </a>
          <a href="#who" className="transition-colors hover:text-foreground">
            Who we work with
          </a>
          <a href="#about" className="transition-colors hover:text-foreground">
            About
          </a>
          <a href="/contact" className="transition-colors hover:text-foreground">
            Contact
          </a>
        </div>

        <a
          href="https://calendly.com/owen-murray-urhired/meeting-with-owen-murray-clone-1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-brand px-5 py-2.5 text-sm font-600 text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
        >
          Book a demo
        </a>
      </div>
    </nav>
  )
}
