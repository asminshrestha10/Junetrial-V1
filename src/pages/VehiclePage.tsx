import { useParams } from 'react-router-dom'
import { getVehicleBySlug } from '../data/vehicles'
import { articles } from '../lib/articles'
import SiteImage from '../components/SiteImage'
import ArticleCard from '../components/ArticleCard'
import { useSeo } from '../lib/useSeo'

const specLabels: Record<string, string> = {
  engine: 'Engine',
  transmission: 'Transmission',
  gvmKg: 'GVM (kg)',
  gcmKg: 'GCM (kg)',
  towingCapacityKg: 'Towing Capacity (kg)',
  payloadKg: 'Payload (kg)',
  kerbWeightKg: 'Kerb Weight (kg)',
  groundClearanceMm: 'Ground Clearance (mm)',
  wheelbaseMm: 'Wheelbase (mm)',
  factoryTyreSize: 'Factory Tyre Size',
}

export default function VehiclePage() {
  const { slug } = useParams()
  const vehicle = slug ? getVehicleBySlug(slug) : undefined

  useSeo(vehicle ? `${vehicle.make} ${vehicle.model}` : 'Vehicle')

  if (!vehicle) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-amber)]">Coming soon</p>
        <h1 className="mt-3 font-display text-3xl text-[var(--color-cream)]">This vehicle page hasn't been built yet</h1>
        <p className="mt-4 text-[var(--color-cream-dim)]">
          Add an entry to <code className="font-mono">src/data/vehicles.ts</code> to generate this page.
        </p>
      </div>
    )
  }

  const related = articles.filter((a) => a.vehicle === `${vehicle.make} ${vehicle.model}`).slice(0, 3)
  const specEntries = Object.entries(vehicle.specs).filter(([, v]) => v)

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-amber)]">
        {vehicle.generation ?? 'Vehicle Overview'}
      </p>
      <h1 className="mt-2 font-display text-4xl text-[var(--color-cream)]">
        {vehicle.make} {vehicle.model}
      </h1>
      {vehicle.modelYears && <p className="mt-2 text-[var(--color-cream-dim)]">{vehicle.modelYears}</p>}

      <div className="mt-8">
        <SiteImage src={vehicle.image} alt={`${vehicle.make} ${vehicle.model}`} aspect="wide" />
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="mb-4 font-display text-xl text-[var(--color-cream)]">Specifications</h2>
          {specEntries.length > 0 ? (
            <div className="table-scroll border border-[var(--color-ink-line)]">
              <table className="w-full min-w-[420px] border-collapse text-left text-sm">
                <tbody>
                  {specEntries.map(([key, value]) => (
                    <tr key={key} className="border-b border-[var(--color-ink-line)] last:border-0">
                      <th className="w-1/2 bg-[var(--color-ink-raised)] px-4 py-3 font-mono text-xs uppercase tracking-wider text-[var(--color-cream-dim)]">
                        {specLabels[key] ?? key}
                      </th>
                      <td className="px-4 py-3 text-[var(--color-cream)]">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-[var(--color-cream-dim)]">Information to be verified.</p>
          )}

          {['commonModifications', 'knownProblems', 'recommendedUpgrades'].map((key) => {
            const list = vehicle[key as 'commonModifications' | 'knownProblems' | 'recommendedUpgrades'] ?? []
            const heading =
              key === 'commonModifications'
                ? 'Common Modifications'
                : key === 'knownProblems'
                  ? 'Known Problems'
                  : 'Recommended Upgrades'
            return (
              <div key={key} className="mt-10">
                <h2 className="mb-3 font-display text-xl text-[var(--color-cream)]">{heading}</h2>
                {list.length > 0 ? (
                  <ul className="list-inside list-disc space-y-1 text-[var(--color-cream-dim)]">
                    {list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[var(--color-cream-dim)]">Information to be verified.</p>
                )}
              </div>
            )
          })}
        </div>

        <aside>
          <h2 className="mb-4 font-display text-xl text-[var(--color-cream)]">Related Articles</h2>
          {related.length > 0 ? (
            <div className="space-y-4">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          ) : (
            <p className="text-sm text-[var(--color-cream-dim)]">
              No articles tagged for this vehicle yet — add{' '}
              <code className="font-mono">vehicle: {vehicle.make} {vehicle.model}</code> to an article's frontmatter.
            </p>
          )}
        </aside>
      </div>
    </div>
  )
}
