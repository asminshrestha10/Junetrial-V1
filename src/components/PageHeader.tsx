export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description?: string
}) {
  return (
    <div className="mb-10">
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-amber)]">{eyebrow}</p>
      )}
      <h1 className="mt-2 font-display text-3xl text-[var(--color-cream)] sm:text-4xl">{title}</h1>
      {description && <p className="mt-3 max-w-2xl text-[var(--color-cream-dim)]">{description}</p>}
    </div>
  )
}
