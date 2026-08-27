import { useParams } from 'react-router-dom'
import { getProductBySlug } from '../data/products'
import { AffiliateButton } from '../components/ProductCard'
import EngineeringScore from '../components/EngineeringScore'
import SiteImage from '../components/SiteImage'
import { useSeo } from '../lib/useSeo'
import NotFound from './NotFound'

const sections = [
  'Product Overview',
  'Specifications',
  'Engineering Analysis',
  'Materials & Construction',
  'Design Analysis',
  'Installation',
  'Real-World Performance',
  'Alternatives',
]

export default function ReviewPage() {
  const { slug } = useParams()
  const product = slug ? getProductBySlug(slug) : undefined

  useSeo(product?.name ?? 'Product Review', product?.summary)

  if (!product) return <NotFound />

  return (
    <article className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-amber)]">
        {product.brand} &middot; {product.category}
      </p>
      <h1 className="mt-2 font-display text-4xl text-[var(--color-cream)]">{product.name}</h1>
      <p className="mt-4 max-w-2xl text-[var(--color-cream-dim)]">{product.summary}</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SiteImage src={product.image} alt={product.name} aspect="wide" />
        </div>
        <div className="space-y-4">
          <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-cream-dim)]">Buying Options</p>
          <div className="space-y-2">
            {product.retailers.map((r) => (
              <AffiliateButton key={r.retailer} retailer={r.retailer} url={r.url} />
            ))}
          </div>
          <p className="text-xs text-[var(--color-cream-dim)]">
            {product.priceAud ?? 'Price: information to be verified.'}
          </p>
        </div>
      </div>

      {product.score && (
        <div className="mt-10">
          <EngineeringScore score={product.score} />
        </div>
      )}

      <div className="prose prose-invert prose-headings:font-display prose-headings:text-[var(--color-cream)] prose-p:text-[var(--color-cream-dim)] mt-12 max-w-none space-y-10">
        {sections.map((section) => (
          <section key={section}>
            <h2>{section}</h2>
            <p>Write this section in the review's full write-up — see README.md for the content workflow.</p>
          </section>
        ))}

        <div className="grid gap-8 sm:grid-cols-2">
          <section>
            <h2>Pros</h2>
            <p>To be written.</p>
          </section>
          <section>
            <h2>Cons</h2>
            <p>To be written.</p>
          </section>
          <section>
            <h2>Who Should Buy It?</h2>
            <p>To be written.</p>
          </section>
          <section>
            <h2>Who Should Avoid It?</h2>
            <p>To be written.</p>
          </section>
        </div>

        <section>
          <h2>Verdict</h2>
          <p>To be written.</p>
        </section>
      </div>

      <p className="mt-10 border-t border-[var(--color-ink-line)] pt-6 text-xs text-[var(--color-cream-dim)]">
        This site may earn a commission from qualifying purchases made through the buying options above, at no
        extra cost to you. See our Affiliate Disclosure for details.
      </p>
    </article>
  )
}
