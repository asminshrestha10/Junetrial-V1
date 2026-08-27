import { getArticlesByCategory } from '../lib/articles'
import ArticleCard from '../components/ArticleCard'
import PageHeader from '../components/PageHeader'
import { useSeo } from '../lib/useSeo'

export default function EngineeringIndex() {
  const articlesList = getArticlesByCategory('Engineering')
  useSeo('Engineering', 'How 4x4 products actually work — load paths, materials, and design trade-offs explained.')

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <PageHeader
        eyebrow="The differentiator"
        title="Engineering"
        description="We look at 4x4 products from an engineering and real-world perspective — load paths, materials, and design trade-offs, explained plainly."
      />
      {articlesList.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articlesList.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      ) : (
        <div className="border border-dashed border-[var(--color-ink-line)] p-12 text-center text-[var(--color-cream-dim)]">
          <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-amber)]">No articles yet</p>
          <p className="mt-2 text-sm">
            Add a markdown file with <code className="font-mono">category: Engineering</code> to{' '}
            <code className="font-mono">src/content/articles/engineering/</code>.
          </p>
        </div>
      )}
    </div>
  )
}
