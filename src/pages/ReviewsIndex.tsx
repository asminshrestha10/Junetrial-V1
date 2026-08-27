import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import ComparisonTable from '../components/ComparisonTable'
import PageHeader from '../components/PageHeader'
import { useSeo } from '../lib/useSeo'

export default function ReviewsIndex() {
  useSeo('Product Reviews', 'Engineering-led reviews of 4x4 products, tested and scored against real criteria.')

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <PageHeader
        eyebrow="Engineering-led reviews"
        title="Product Reviews"
        description="Every review is scored against the same ten engineering criteria — not just how it looks in a photo."
      />

      {products.length > 0 ? (
        <>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>

          {products.length > 1 && (
            <div className="mt-16">
              <h2 className="mb-4 font-display text-2xl text-[var(--color-cream)]">Compare</h2>
              <ComparisonTable products={products} />
            </div>
          )}
        </>
      ) : (
        <div className="border border-dashed border-[var(--color-ink-line)] p-12 text-center text-[var(--color-cream-dim)]">
          <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-amber)]">No reviews yet</p>
          <p className="mt-2 text-sm">
            Add a product to <code className="font-mono">src/data/products.ts</code> to see it here.
          </p>
        </div>
      )}
    </div>
  )
}
