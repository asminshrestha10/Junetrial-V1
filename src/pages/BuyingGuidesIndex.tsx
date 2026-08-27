import { getArticlesByCategory } from '../lib/articles'
import ArticleCard from '../components/ArticleCard'
import PageHeader from '../components/PageHeader'
import { useSeo } from '../lib/useSeo'

export default function BuyingGuidesIndex() {
  const articlesList = getArticlesByCategory('Buying Guides')
  useSeo('Buying Guides', 'Practical, engineering-informed buying guides for 4x4 gear.')

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <PageHeader
        eyebrow="Before you spend your money"
        title="Buying Guides"
        description="Useful information first, product pushing second."
      />
      {articlesList.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articlesList.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      ) : (
        <div className="border border-dashed border-[var(--color-ink-line)] p-12 text-center text-[var(--color-cream-dim)]">
          <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-amber)]">No guides yet</p>
          <p className="mt-2 text-sm">
            Add a markdown file with <code className="font-mono">category: Buying Guides</code> to{' '}
            <code className="font-mono">src/content/articles/buying-guides/</code>.
          </p>
        </div>
      )}
    </div>
  )
}
