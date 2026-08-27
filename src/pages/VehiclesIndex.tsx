import { Link } from 'react-router-dom'
import { vehicleGroups } from '../data/vehicles'
import PageHeader from '../components/PageHeader'
import { useSeo } from '../lib/useSeo'

export default function VehiclesIndex() {
  useSeo('Vehicle Hub', 'Specs, common modifications, and related gear for Australia\u2019s popular 4x4s and utes.')

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <PageHeader
        eyebrow="Vehicle Hub"
        title="Vehicles"
        description="Specs, common modifications and known issues for Australia's popular utes, SUVs and 4x4s."
      />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {vehicleGroups.map((group) => (
          <div key={group.make} className="border border-[var(--color-ink-line)] bg-[var(--color-ink-raised)] p-6">
            <p className="mb-3 font-display text-xl text-[var(--color-cream)]">{group.make}</p>
            <ul className="space-y-2">
              {group.models.map((model) => (
                <li key={model}>
                  <Link
                    to={`/vehicles/${`${group.make}-${model}`.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-[var(--color-cream-dim)] hover:text-[var(--color-amber)]"
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
  )
}
