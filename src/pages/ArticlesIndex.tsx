import { articles, CATEGORIES } from '../lib/articles'
import ArticleCard from '../components/ArticleCard'
import { useSeo } from '../lib/useSeo'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

export default function ArticlesIndex() {
  useSeo('All Articles', 'Every JuneTrail article — reviews, engineering breakdowns, and buying guides.')

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <PageHeader eyebrow="Every post" title="Articles" />

      <div className="mb-8 flex flex-wrap gap-2">
        {CATEGORIES.map((c) => (
          <Link
            key={c}
            to={`/category/${c.toLowerCase().replace(/\s+&\s+|\s+/g, '-')}`}
            className="border border-[var(--color-ink-line)] px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-[var(--color-cream-dim)] hover:border-[var(--color-amber)] hover:text-[var(--color-amber)]"
          >
            {c}
          </Link>
        ))}
      </div>

      {articles.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      ) : (
        <div className="border border-dashed border-[var(--color-ink-line)] p-12 text-center text-[var(--color-cream-dim)]">
          <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-amber)]">Nothing published yet</p>
          <p className="mt-2 text-sm">
            Add your first article to <code className="font-mono">src/content/articles/</code> — see README.md.
          </p>
        </div>
      )}
    </div>
  )
}
