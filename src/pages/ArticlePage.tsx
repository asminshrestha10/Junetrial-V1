import { useParams, Link } from 'react-router-dom'
import { marked } from 'marked'
import { getArticleBySlug, articles } from '../lib/articles'
import SiteImage from '../components/SiteImage'
import ArticleCard from '../components/ArticleCard'
import { useSeo } from '../lib/useSeo'
import NotFound from './NotFound'

export default function ArticlePage() {
  const { slug } = useParams()
  const article = slug ? getArticleBySlug(slug) : undefined

  useSeo(article?.title ?? 'Article', article?.description)

  if (!article) return <NotFound />

  const html = marked.parse(article.content, { async: false }) as string
  const related = articles.filter((a) => a.slug !== article.slug && a.category === article.category).slice(0, 3)

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-amber)]">{article.category}</p>
      <h1 className="mt-3 font-display text-3xl leading-tight text-[var(--color-cream)] sm:text-4xl">
        {article.title}
      </h1>
      {article.description && (
        <p className="mt-4 text-lg text-[var(--color-cream-dim)]">{article.description}</p>
      )}
      <div className="mt-5 flex flex-wrap items-center gap-3 border-y border-[var(--color-ink-line)] py-3 font-mono text-xs text-[var(--color-cream-dim)]">
        <span>{article.author}</span>
        {article.date && (
          <>
            <span aria-hidden>&middot;</span>
            <span>{article.date}</span>
          </>
        )}
        <span aria-hidden>&middot;</span>
        <span>{article.readingTime}</span>
      </div>

      <div className="mt-8">
        <SiteImage src={article.featuredImage} alt={article.title} aspect="wide" />
      </div>

      <div
        className="prose prose-invert prose-headings:font-display prose-headings:text-[var(--color-cream)] prose-p:text-[var(--color-cream-dim)] prose-a:text-[var(--color-amber)] prose-strong:text-[var(--color-cream)] prose-table:text-sm mt-10 max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {article.tags.length > 0 && (
        <div className="mt-10 flex flex-wrap gap-2 border-t border-[var(--color-ink-line)] pt-6">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="border border-[var(--color-ink-line)] px-2.5 py-1 font-mono text-xs text-[var(--color-cream-dim)]"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-10 border-t border-[var(--color-ink-line)] pt-6">
        <p className="text-xs text-[var(--color-cream-dim)]">
          Some articles include affiliate links. See our{' '}
          <Link to="/legal/affiliate-disclosure" className="text-[var(--color-amber)] underline">
            Affiliate Disclosure
          </Link>{' '}
          for details.
        </p>
      </div>

      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="mb-6 font-display text-2xl text-[var(--color-cream)]">Related articles</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      )}
    </article>
  )
}
