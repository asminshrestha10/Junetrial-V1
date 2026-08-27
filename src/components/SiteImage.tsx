type Props = {
  src?: string
  alt: string
  className?: string
  aspect?: 'video' | 'square' | 'portrait' | 'wide'
  caption?: string
  credit?: string
}

const aspectClass: Record<NonNullable<Props['aspect']>, string> = {
  video: 'aspect-video',
  square: 'aspect-square',
  portrait: 'aspect-[3/4]',
  wide: 'aspect-[21/9]',
}

// Drop your real photo's path into `src` (e.g. "/images/articles/my-photo.jpg")
// once it's in the /public/images/ folder — see README.md. Until then this
// renders a clearly-labelled placeholder so nothing looks broken.
export default function SiteImage({ src, alt, className = '', aspect = 'video', caption, credit }: Props) {
  return (
    <figure className={className}>
      <div
        className={`relative ${aspectClass[aspect]} w-full overflow-hidden rounded-sm border border-[var(--color-ink-line)] bg-[var(--color-ink-raised)]`}
      >
        {src ? (
          <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-[var(--color-cream-dim)]">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="1" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
            <span className="font-mono text-xs uppercase tracking-wider">Image placeholder</span>
          </div>
        )}
      </div>
      {(caption || credit) && (
        <figcaption className="mt-2 font-mono text-xs text-[var(--color-cream-dim)]">
          {caption}
          {caption && credit && ' — '}
          {credit && <span>Credit: {credit}</span>}
        </figcaption>
      )}
    </figure>
  )
}
