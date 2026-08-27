import { Link } from 'react-router-dom'
import SiteImage from './SiteImage'
import EngineeringScore from './EngineeringScore'
import type { Product } from '../data/products'

export function AffiliateButton({ retailer, url }: { retailer: string; url: string }) {
  const isPlaceholder = url === 'AMAZON_AFFILIATE_URL' || url === '#'
  return (
    <a
      href={isPlaceholder ? undefined : url}
      target={isPlaceholder ? undefined : '_blank'}
      rel={isPlaceholder ? undefined : 'noopener noreferrer sponsored'}
      aria-disabled={isPlaceholder}
      className={`flex items-center justify-between border border-[var(--color-ink-line)] px-4 py-3 text-sm transition ${
        isPlaceholder
          ? 'cursor-not-allowed text-[var(--color-cream-dim)]'
          : 'text-[var(--color-cream)] hover:border-[var(--color-amber)]'
      }`}
    >
      <span>{retailer}</span>
      <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-amber)]">
        {isPlaceholder ? 'Link pending' : 'Check price \u2192'}
      </span>
    </a>
  )
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border border-[var(--color-ink-line)] bg-[var(--color-ink-raised)] p-5">
      <Link to={`/reviews/${product.slug}`}>
        <SiteImage src={product.image} alt={product.name} aspect="square" />
      </Link>
      <p className="mt-4 font-mono text-xs uppercase tracking-wider text-[var(--color-amber)]">
        {product.brand} &middot; {product.category}
      </p>
      <Link to={`/reviews/${product.slug}`}>
        <h3 className="mt-1 font-display text-lg text-[var(--color-cream)] hover:text-[var(--color-amber)]">
          {product.name}
        </h3>
      </Link>
      <p className="mt-2 text-sm text-[var(--color-cream-dim)]">
        {product.priceAud ?? 'Information to be verified.'}
      </p>
      {product.score && (
        <div className="mt-3">
          <EngineeringScore score={product.score} compact />
        </div>
      )}
      <div className="mt-4">
        <Link
          to={`/reviews/${product.slug}`}
          className="block bg-[var(--color-slate)] px-4 py-2 text-center font-mono text-xs uppercase tracking-wider text-[var(--color-ink)] hover:bg-[var(--color-slate-dim)]"
        >
          Read the review
        </Link>
      </div>
    </div>
  )
}
