import { useMemo, useState } from 'react'
import { articles } from '../lib/articles'
import { products } from '../data/products'
import { vehicles } from '../data/vehicles'
import ArticleCard from '../components/ArticleCard'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { useSeo } from '../lib/useSeo'

export default function Search() {
  const [query, setQuery] = useState('')
  useSeo('Search', 'Search articles, products, and vehicles across JuneTrail.')

  const q = query.trim().toLowerCase()

  const matchedArticles = useMemo(
    () =>
      q
        ? articles.filter((a) =>
            [a.title, a.description, a.category, a.vehicle, ...a.tags].join(' ').toLowerCase().includes(q)
          )
        : [],
    [q]
  )

  const matchedProducts = useMemo(
    () => (q ? products.filter((p) => [p.name, p.brand, p.category].join(' ').toLowerCase().includes(q)) : []),
    [q]
  )

  const matchedVehicles = useMemo(
    () => (q ? vehicles.filter((v) => `${v.make} ${v.model}`.toLowerCase().includes(q)) : []),
    [q]
  )

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <PageHeader eyebrow="Search" title="Find articles, products & vehicles" />

      <input
        type="search"
        autoFocus
        placeholder="Search for a vehicle, product, brand, or topic…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border border-[var(--color-ink-line)] bg-[var(--color-ink-raised)] px-4 py-3 text-[var(--color-cream)] placeholder:text-[var(--color-cream-dim)] focus:border-[var(--color-amber)]"
      />

      {q && (
        <div className="mt-10 space-y-12">
          {matchedVehicles.length > 0 && (
            <section>
              <h2 className="mb-3 font-mono text-xs uppercase tracking-wider text-[var(--color-amber)]">Vehicles</h2>
              <ul className="space-y-2">
                {matchedVehicles.map((v) => (
                  <li key={v.slug}>
                    <Link to={`/vehicles/${v.slug}`} className="text-[var(--color-cream)] hover:text-[var(--color-amber)]">
                      {v.make} {v.model}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {matchedProducts.length > 0 && (
            <section>
              <h2 className="mb-3 font-mono text-xs uppercase tracking-wider text-[var(--color-amber)]">Products</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {matchedProducts.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </section>
          )}

          {matchedArticles.length > 0 && (
            <section>
              <h2 className="mb-3 font-mono text-xs uppercase tracking-wider text-[var(--color-amber)]">Articles</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {matchedArticles.map((a) => (
                  <ArticleCard key={a.slug} article={a} />
                ))}
              </div>
            </section>
          )}

          {matchedArticles.length === 0 && matchedProducts.length === 0 && matchedVehicles.length === 0 && (
            <p className="text-[var(--color-cream-dim)]">No results for "{query}".</p>
          )}
        </div>
      )}
    </div>
  )
}
