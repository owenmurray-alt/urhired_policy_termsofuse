import Image from "next/image"

export function Mission() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 md:flex-row md:items-center md:gap-14">
        <figure className="mx-auto w-56 shrink-0 md:mx-0 md:w-72">
          <Image
            src="/assets/owen-murray.png"
            alt="Owen Murray, founder of URHired"
            width={796}
            height={790}
            sizes="(min-width: 768px) 288px, 224px"
            className="aspect-square w-full rounded-2xl object-cover shadow-lg"
          />
        </figure>
        <div className="flex-1">
          <h2 className="font-heading text-3xl font-700 leading-tight tracking-tight text-foreground text-balance md:text-4xl">
            Built by someone who&apos;s screened thousands of interviews.
          </h2>
          <div className="mt-8 flex flex-col gap-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              After 13 years hiring for companies like LinkedIn, TikTok, Meta, Accenture and HP, I saw the
              same problem from the inside: employability programmes pour real effort into CVs and workshops,
              then the part that actually decides the outcome — the interview itself — gets one afternoon of
              role-play, if that.
            </p>
            <p>
              Tessa gives your team a way to put every single person in your programme through real,
              repeatable interview practice — without adding another session to your staff&apos;s caseload.
            </p>
            <p className="font-heading text-base font-600 text-foreground">
              — Owen Murray, Founder, URHired
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
