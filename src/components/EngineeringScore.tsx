import type { EngineeringScore as ScoreType } from '../data/products'
import { overallScore } from '../data/products'

const labels: Record<keyof ScoreType, string> = {
  design: 'Design',
  material: 'Material',
  manufacturingQuality: 'Manufacturing Quality',
  structuralStrength: 'Structural Strength',
  fitment: 'Fitment',
  installation: 'Installation',
  weight: 'Weight',
  durability: 'Durability',
  practicality: 'Practicality',
  value: 'Value',
}

function Bar({ value }: { value: number }) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-[var(--color-ink-line)]">
      <div
        className="h-full rounded-full bg-[var(--color-amber)]"
        style={{ width: `${(value / 10) * 100}%` }}
      />
    </div>
  )
}

export default function EngineeringScore({ score, compact = false }: { score: ScoreType; compact?: boolean }) {
  const overall = overallScore(score)

  if (compact) {
    return (
      <div className="inline-flex items-center gap-2 border border-[var(--color-ink-line)] bg-[var(--color-ink-raised)] px-3 py-1.5">
        <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-cream-dim)]">
          Engineering Score
        </span>
        <span className="font-display text-lg text-[var(--color-amber)]">{overall.toFixed(1)}</span>
      </div>
    )
  }

  return (
    <div className="border border-[var(--color-ink-line)] bg-[var(--color-ink-raised)] p-6">
      <div className="mb-5 flex items-center justify-between">
        <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-cream-dim)]">
          Engineering Score
        </p>
        <p className="font-display text-3xl text-[var(--color-amber)]">{overall.toFixed(1)}<span className="text-base text-[var(--color-cream-dim)]">/10</span></p>
      </div>
      <div className="space-y-3">
        {(Object.keys(labels) as (keyof ScoreType)[]).map((key) => (
          <div key={key} className="grid grid-cols-[1fr_2fr_2ch] items-center gap-3">
            <span className="text-sm text-[var(--color-cream-dim)]">{labels[key]}</span>
            <Bar value={score[key]} />
            <span className="text-right font-mono text-sm text-[var(--color-cream)]">{score[key]}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
