import { Link } from 'react-router-dom'
import Newsletter from './Newsletter'

const legalLinks = [
  { label: 'Privacy Policy', to: '/legal/privacy-policy' },
  { label: 'Terms & Conditions', to: '/legal/terms' },
  { label: 'Affiliate Disclosure', to: '/legal/affiliate-disclosure' },
  { label: 'Disclaimer', to: '/legal/disclaimer' },
  { label: 'Cookie Policy', to: '/legal/cookie-policy' },
  { label: 'Editorial Policy', to: '/legal/editorial-policy' },
  { label: 'Corrections Policy', to: '/legal/corrections-policy' },
  { label: 'Contact', to: '/contact' },
]

const socials = [
  { label: 'Instagram', href: '#' },
  { label: 'YouTube', href: '#' },
  { label: 'TikTok', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'Pinterest', href: '#' },
]

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-ink-line)]">
      <Newsletter />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="JuneTrail" className="mb-4 h-12 w-auto" />
            <p className="max-w-xs text-sm text-[var(--color-cream-dim)]">
              4x4 knowledge, engineering insight, real-world gear — independent reviews and analysis for
              Australian off-road conditions.
            </p>
          </div>

          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-wider text-[var(--color-amber)]">Explore</p>
            <ul className="space-y-2 text-sm text-[var(--color-cream-dim)]">
              <li><Link to="/vehicles" className="hover:text-[var(--color-cream)]">Vehicles</Link></li>
              <li><Link to="/reviews" className="hover:text-[var(--color-cream)]">Product Reviews</Link></li>
              <li><Link to="/engineering" className="hover:text-[var(--color-cream)]">Engineering</Link></li>
              <li><Link to="/buying-guides" className="hover:text-[var(--color-cream)]">Buying Guides</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-wider text-[var(--color-amber)]">Legal</p>
            <ul className="space-y-2 text-sm text-[var(--color-cream-dim)]">
              {legalLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-[var(--color-cream)]">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-wider text-[var(--color-amber)]">Follow</p>
            <ul className="space-y-2 text-sm text-[var(--color-cream-dim)]">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="hover:text-[var(--color-cream)]">{s.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-[var(--color-ink-line)] pt-6 text-xs text-[var(--color-cream-dim)] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} JuneTrail. All rights reserved.</p>
          <p>
            Some links on this site are affiliate links. See our{' '}
            <Link to="/legal/affiliate-disclosure" className="underline hover:text-[var(--color-cream)]">
              Affiliate Disclosure
            </Link>.
          </p>
        </div>
      </div>
    </footer>
  )
}
