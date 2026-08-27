import { Link } from 'react-router-dom'
import { articles } from '../lib/articles'
import { products } from '../data/products'
import { vehicleGroups } from '../data/vehicles'
import ArticleCard from '../components/ArticleCard'
import ProductCard from '../components/ProductCard'
import SiteImage from '../components/SiteImage'
import { useSeo } from '../lib/useSeo'

const engineeringTopics = [
  'How does a towbar actually handle a 3,500 kg trailer?',
  'What does steel thickness really mean for a bash plate?',
  'Does a thicker bash plate always mean better protection?',
  'What happens to suspension geometry after a 50mm lift?',
  'How wheel offset changes vehicle loading',
  'Understanding towbar tongue loads',
]

export default function Home() {
  useSeo(
    'JuneTrail — 4x4 Knowledge, Engineering Insight, Real-World Gear',
    'Independent 4x4 reviews, engineering analysis, buying guides and off-road knowledge for Australian enthusiasts.'
  )

  const latest = articles.slice(0, 6)
  const engineeringArticles = articles.filter((a) => a.category.toLowerCase() === 'engineering').slice(0, 3)
  const guideArticles = articles.filter((a) => a.category.toLowerCase() === 'buying guides').slice(0, 3)
  const newsArticles = articles.filter((a) => a.category.toLowerCase() === '4x4 news').slice(0, 3)

  return (
    <div>
      {/* Hero */}
      <section className="contour-field border-b border-[var(--color-ink-line)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-amber)]">
              Australian 4x4 engineering &amp; reviews
            </p>
            <h1 className="mt-4 font-display text-4xl leading-[1.05] text-[var(--color-cream)] sm:text-5xl lg:text-6xl">
              Engineered for the track.
              <br />
              Tested for real life.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-[var(--color-cream-dim)]">
              Independent 4x4 reviews, engineering analysis, buying guides and off-road knowledge for Australian
              enthusiasts.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/articles"
                className="bg-[var(--color-amber)] px-6 py-3 font-mono text-xs uppercase tracking-wider text-[var(--color-ink)] transition hover:bg-[var(--color-amber-dim)]"
              >
                Read the latest
              </Link>
              <Link
                to="/reviews"
                className="border border-[var(--color-ink-line)] px-6 py-3 font-mono text-xs uppercase tracking-wider text-[var(--color-cream)] transition hover:border-[var(--color-slate)]"
              >
                Explore product reviews
              </Link>
            </div>
          </div>
          <SiteImage alt="Featured 4x4 hero image" aspect="wide" />
        </div>
      </section>

      {/* Latest articles */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-2xl text-[var(--color-cream)] sm:text-3xl">Latest Articles</h2>
          <Link to="/articles" className="font-mono text-xs uppercase tracking-wider text-[var(--color-amber)]">
            View all &rarr;
          </Link>
        </div>
        {latest.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        ) : (
          <EmptyArticlesNote />
        )}
      </section>

      {/* Engineering Explained */}
      <section className="border-y border-[var(--color-ink-line)] bg-[var(--color-ink-raised)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-amber)]">Differentiator</p>
          <h2 className="mt-2 font-display text-2xl text-[var(--color-cream)] sm:text-3xl">Engineering Explained</h2>
          <p className="mt-3 max-w-2xl text-[var(--color-cream-dim)]">
            We look at 4x4 products from an engineering and real-world perspective — not just whether it looks good.
          </p>

          {engineeringArticles.length > 0 ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {engineeringArticles.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          ) : (
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {engineeringTopics.map((topic) => (
                <li
                  key={topic}
                  className="border border-[var(--color-ink-line)] bg-[var(--color-ink)] px-4 py-3 text-sm text-[var(--color-cream-dim)]"
                >
                  {topic}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Featured product reviews */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-2xl text-[var(--color-cream)] sm:text-3xl">Featured Product Reviews</h2>
          <Link to="/reviews" className="font-mono text-xs uppercase tracking-wider text-[var(--color-amber)]">
            View all &rarr;
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* Vehicle hub */}
      <section className="border-y border-[var(--color-ink-line)] bg-[var(--color-ink-raised)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl text-[var(--color-cream)] sm:text-3xl">Vehicle Hub</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {vehicleGroups.map((group) => (
              <div key={group.make}>
                <p className="mb-3 font-mono text-xs uppercase tracking-wider text-[var(--color-amber)]">
                  {group.make}
                </p>
                <ul className="space-y-2">
                  {group.models.map((model) => (
                    <li key={model}>
                      <Link
                        to={`/vehicles/${`${group.make}-${model}`.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-[var(--color-cream-dim)] hover:text-[var(--color-cream)]"
                      >
                        {model}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buying guides + news */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 flex items-end justify-between">
              <h2 className="font-display text-2xl text-[var(--color-cream)]">Buying Guides</h2>
              <Link to="/buying-guides" className="font-mono text-xs uppercase tracking-wider text-[var(--color-amber)]">
                View all &rarr;
              </Link>
            </div>
            {guideArticles.length > 0 ? (
              <div className="space-y-4">
                {guideArticles.map((a) => (
                  <ArticleCard key={a.slug} article={a} />
                ))}
              </div>
            ) : (
              <EmptyArticlesNote compact />
            )}
          </div>
          <div>
            <div className="mb-6 flex items-end justify-between">
              <h2 className="font-display text-2xl text-[var(--color-cream)]">Latest 4x4 News</h2>
              <Link to="/category/4x4-news" className="font-mono text-xs uppercase tracking-wider text-[var(--color-amber)]">
                View all &rarr;
              </Link>
            </div>
            {newsArticles.length > 0 ? (
              <div className="space-y-4">
                {newsArticles.map((a) => (
                  <ArticleCard key={a.slug} article={a} />
                ))}
              </div>
            ) : (
              <EmptyArticlesNote compact />
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

function EmptyArticlesNote({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`border border-dashed border-[var(--color-ink-line)] text-center text-[var(--color-cream-dim)] ${
        compact ? 'p-6' : 'p-12'
      }`}
    >
      <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-amber)]">No articles yet</p>
      <p className="mt-2 text-sm">
        Add a markdown file to <code className="font-mono">src/content/articles/</code> to see it appear here.
      </p>
    </div>
  )
}
