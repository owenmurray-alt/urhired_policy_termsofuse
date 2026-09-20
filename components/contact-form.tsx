'use client'

import { useState, type FormEvent } from 'react'

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [organisation, setOrganisation] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const subject = `Website enquiry from ${name || 'a visitor'}`
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      organisation ? `Organisation: ${organisation}` : null,
      '',
      message,
    ].filter((line) => line !== null)

    const mailto = `mailto:support@urhired.ie?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(bodyLines.join('\n'))}`

    window.location.href = mailto
  }

  const fieldClass =
    'w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30'
  const labelClass = 'text-sm font-500 text-foreground'

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className={labelClass}>
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          className={fieldClass}
          placeholder="Your name"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={fieldClass}
          placeholder="you@organisation.com"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="organisation" className={labelClass}>
          Organisation <span className="text-muted-foreground">(optional)</span>
        </label>
        <input
          id="organisation"
          name="organisation"
          type="text"
          value={organisation}
          onChange={(event) => setOrganisation(event.target.value)}
          className={fieldClass}
          placeholder="Your organisation"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className={`${fieldClass} resize-y`}
          placeholder="How can we help?"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-600 text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
      >
        Send message
      </button>
    </form>
  )
}
