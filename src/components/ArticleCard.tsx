import { Link } from 'react-router-dom'
import SiteImage from './SiteImage'
import type { Article } from '../lib/articles'

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      to={`/articles/${article.slug}`}
      className="group block overflow-hidden border border-[var(--color-ink-line)] bg-[var(--color-ink-raised)] transition hover:border-[var(--color-slate)]"
    >
      <SiteImage src={article.featuredImage} alt={article.title} />
      <div className="p-5">
        <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-amber)]">{article.category}</p>
        <h3 className="mt-2 font-display text-xl leading-snug text-[var(--color-cream)] group-hover:text-[var(--color-amber)]">
          {article.title}
        </h3>
        {article.description && (
          <p className="mt-2 line-clamp-2 text-sm text-[var(--color-cream-dim)]">{article.description}</p>
        )}
        <div className="mt-4 flex items-center gap-3 font-mono text-xs text-[var(--color-cream-dim)]">
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
      </div>
    </Link>
  )
}
