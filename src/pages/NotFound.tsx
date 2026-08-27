import { Link } from 'react-router-dom'
import { useSeo } from '../lib/useSeo'

export default function NotFound() {
  useSeo('Page not found')

  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center sm:px-6">
      <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-amber)]">404</p>
      <h1 className="mt-3 font-display text-3xl text-[var(--color-cream)]">Track ends here</h1>
      <p className="mt-4 text-[var(--color-cream-dim)]">
        We couldn't find that page. It may have been moved, or the content hasn't been added yet.
      </p>
      <Link
        to="/"
        className="mt-8 inline-block bg-[var(--color-amber)] px-5 py-3 font-mono text-xs uppercase tracking-wider text-[var(--color-ink)] hover:bg-[var(--color-amber-dim)]"
      >
        Back to home
      </Link>
    </div>
  )
}
