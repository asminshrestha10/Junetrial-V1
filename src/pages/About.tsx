import PageHeader from '../components/PageHeader'
import { useSeo } from '../lib/useSeo'

export default function About() {
  useSeo('About', 'What JuneTrail is, and how we approach 4x4 reviews and engineering analysis.')

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <PageHeader eyebrow="Who we are" title="About JuneTrail" />
      <div className="space-y-5 text-[var(--color-cream-dim)]">
        <p>
          JuneTrail looks at 4x4 products from an engineering and real-world perspective. We're not here to tell
          you a product is "revolutionary" — we're here to tell you what actually matters: the material, the
          load path, the fitment, and where the design does or doesn't hold up in Australian conditions.
        </p>
        <p>
          Every review works through the same questions: what problem does this solve, how is it built, what are
          its strengths and weaknesses, and is it worth the money. We label sample or demonstration content
          clearly, and we mark anything we haven't verified as "information to be verified" rather than guessing.
        </p>
        <p>
          This is an independent publication. Some links on the site are affiliate links — see our{' '}
          <a href="/legal/affiliate-disclosure" className="text-[var(--color-amber)] underline">
            Affiliate Disclosure
          </a>{' '}
          for how that works. Content comes first; monetisation follows trust, not the other way around.
        </p>
        <p className="font-mono text-sm uppercase tracking-wider text-[var(--color-amber)]">
          Replace this page's copy with your own bio and story — see README.md.
        </p>
      </div>
    </div>
  )
}
