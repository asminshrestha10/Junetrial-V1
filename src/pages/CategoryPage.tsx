import { useParams } from 'react-router-dom'
import { articles, CATEGORIES } from '../lib/articles'
import ArticleCard from '../components/ArticleCard'
import PageHeader from '../components/PageHeader'
import { useSeo } from '../lib/useSeo'

export default function CategoryPage() {
  const { slug } = useParams()
  const category = CATEGORIES.find((c) => c.toLowerCase().replace(/\s+&\s+|\s+/g, '-') === slug) ?? slug
  const filtered = articles.filter((a) => a.category.toLowerCase() === String(category).toLowerCase())

  useSeo(String(category), `Articles in ${category}`)

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <PageHeader eyebrow="Category" title={String(category)} />
      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      ) : (
        <div className="border border-dashed border-[var(--color-ink-line)] p-12 text-center text-[var(--color-cream-dim)]">
          <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-amber)]">No articles yet</p>
          <p className="mt-2 text-sm">
            Add a markdown file with <code className="font-mono">category: {String(category)}</code> in its
            frontmatter.
          </p>
        </div>
      )}
    </div>
  )
}
