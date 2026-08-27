import PageHeader from '../components/PageHeader'
import { useSeo } from '../lib/useSeo'

export default function Contact() {
  useSeo('Contact', 'Get in touch with JuneTrail.')

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <PageHeader eyebrow="Get in touch" title="Contact" />
      <p className="text-[var(--color-cream-dim)]">
        Replace this with your preferred contact method — an email address, a contact form service, or a link to
        your social accounts. A plain mailto link is the simplest option for a static GitHub Pages site:
      </p>
      <a
        href="mailto:hello@example.com"
        className="mt-6 inline-block border border-[var(--color-ink-line)] px-5 py-3 font-mono text-sm text-[var(--color-cream)] hover:border-[var(--color-amber)]"
      >
        hello@example.com
      </a>
    </div>
  )
}
