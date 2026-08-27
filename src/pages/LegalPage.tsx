import { useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { useSeo } from '../lib/useSeo'
import NotFound from './NotFound'

const legalContent: Record<string, { title: string; body: string }> = {
  'privacy-policy': {
    title: 'Privacy Policy',
    body: 'Placeholder — replace with a privacy policy reviewed by a professional before publishing. It should cover what data this site collects (e.g. via analytics or the newsletter form), how it is used, and how visitors can request its removal.',
  },
  terms: {
    title: 'Terms & Conditions',
    body: 'Placeholder — replace with terms of use reviewed by a professional before publishing. It should cover acceptable use of the site, intellectual property, and limitation of liability.',
  },
  'affiliate-disclosure': {
    title: 'Affiliate Disclosure',
    body: 'JuneTrail participates in affiliate marketing programs, which means some links on this site may earn a commission on qualifying purchases, at no extra cost to you. This never affects our editorial opinions — engineering analysis and scoring are independent of whether a link is monetised. Replace this placeholder with the specific programs you actually join (e.g. Amazon Associates) once confirmed.',
  },
  disclaimer: {
    title: 'Disclaimer',
    body: 'Placeholder — the information on this site is for general informational purposes only. Vehicle specifications, product claims, and engineering analysis should be independently verified before making purchasing or modification decisions. Replace with a disclaimer reviewed by a professional before publishing.',
  },
  'cookie-policy': {
    title: 'Cookie Policy',
    body: 'Placeholder — describe any cookies set by analytics, advertising, or newsletter tools once those are connected. Until then, this site sets no tracking cookies beyond what your hosting or analytics provider requires.',
  },
  'editorial-policy': {
    title: 'Editorial Policy',
    body: 'JuneTrail\'s reviews and engineering analysis are independently written and are not paid for by manufacturers or retailers. Any sponsored content will be clearly labelled as such. Replace this placeholder with your specific editorial standards.',
  },
  'corrections-policy': {
    title: 'Corrections Policy',
    body: 'If you spot an error in an article — a specification, a claim, or a broken link — contact us and we will review and correct it. Significant corrections will be noted at the bottom of the affected article.',
  },
}

export default function LegalPage() {
  const { slug } = useParams()
  const entry = slug ? legalContent[slug] : undefined

  useSeo(entry?.title ?? 'Legal')

  if (!entry) return <NotFound />

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <PageHeader eyebrow="Legal" title={entry.title} />
      <p className="text-[var(--color-cream-dim)]">{entry.body}</p>
    </div>
  )
}
