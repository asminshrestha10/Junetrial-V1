import { Link } from 'react-router-dom'
import { overallScore } from '../data/products'
import type { Product } from '../data/products'

export default function ComparisonTable({ products }: { products: Product[] }) {
  if (products.length === 0) return null

  const rows: { label: string; value: (p: Product) => React.ReactNode }[] = [
    { label: 'Brand', value: (p) => p.brand },
    { label: 'Price', value: (p) => p.priceAud ?? 'Information to be verified.' },
    { label: 'Category', value: (p) => p.category },
    { label: 'Engineering Score', value: (p) => (p.score ? overallScore(p.score).toFixed(1) : '—') },
  ]

  return (
    <div className="table-scroll border border-[var(--color-ink-line)]">
      <table className="w-full min-w-[560px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-[var(--color-ink-line)] bg-[var(--color-ink-raised)]">
            <th className="px-4 py-3 font-mono text-xs uppercase tracking-wider text-[var(--color-cream-dim)]">
              &nbsp;
            </th>
            {products.map((p) => (
              <th key={p.slug} className="px-4 py-3 font-display text-base text-[var(--color-cream)]">
                {p.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-[var(--color-ink-line)]">
              <th className="px-4 py-3 font-mono text-xs uppercase tracking-wider text-[var(--color-cream-dim)]">
                {row.label}
              </th>
              {products.map((p) => (
                <td key={p.slug} className="px-4 py-3 text-[var(--color-cream)]">
                  {row.value(p)}
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <td className="px-4 py-3" />
            {products.map((p) => (
              <td key={p.slug} className="px-4 py-3">
                <Link
                  to={`/reviews/${p.slug}`}
                  className="inline-block bg-[var(--color-amber)] px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-[var(--color-ink)] hover:bg-[var(--color-amber-dim)]"
                >
                  View product
                </Link>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}
