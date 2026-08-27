import { useState } from 'react'

// No external service is wired up yet. This just confirms the submission
// locally — connect it to Mailchimp / Brevo / ConvertKit / Beehiiv etc.
// by replacing handleSubmit below. See README.md.
export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <div className="border-b border-[var(--color-ink-line)] bg-[var(--color-ink-raised)]">
      <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6">
        <h2 className="font-display text-3xl text-[var(--color-cream)] sm:text-4xl">
          Get the good stuff. Skip the BS.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[var(--color-cream-dim)]">
          Weekly 4x4 reviews, engineering breakdowns, buying guides and off-road knowledge.
        </p>

        {submitted ? (
          <p className="mt-6 font-mono text-sm text-[var(--color-amber)]">
            Thanks — you're on the list once the newsletter service is connected.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto mt-6 flex max-w-sm flex-col gap-3 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">Your email</label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-[var(--color-ink-line)] bg-[var(--color-ink)] px-4 py-3 text-sm text-[var(--color-cream)] placeholder:text-[var(--color-cream-dim)] focus:border-[var(--color-amber)]"
            />
            <button
              type="submit"
              className="whitespace-nowrap bg-[var(--color-amber)] px-5 py-3 font-mono text-xs uppercase tracking-wider text-[var(--color-ink)] transition hover:bg-[var(--color-amber-dim)]"
            >
              Join the community
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
