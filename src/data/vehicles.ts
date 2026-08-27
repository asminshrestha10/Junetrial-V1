// Vehicle database. Add a new vehicle by adding an entry here — its page
// is generated automatically at /vehicles/<slug>/

export type Vehicle = {
  slug: string
  make: string
  model: string
  generation?: string
  modelYears?: string
  image: string // leave '' for the placeholder block
  specs: {
    engine?: string
    transmission?: string
    gvmKg?: string
    gcmKg?: string
    towingCapacityKg?: string
    payloadKg?: string
    kerbWeightKg?: string
    groundClearanceMm?: string
    wheelbaseMm?: string
    factoryTyreSize?: string
  }
  commonModifications?: string[]
  knownProblems?: string[]
  recommendedUpgrades?: string[]
}

export const vehicleGroups: { make: string; models: string[] }[] = [
  { make: 'Toyota', models: ['Hilux', 'LandCruiser 70', 'LandCruiser 79', 'LandCruiser 300', 'Prado'] },
  { make: 'Nissan', models: ['Navara', 'Patrol', 'X-Trail'] },
  { make: 'Ford', models: ['Ranger', 'Everest'] },
  { make: 'Isuzu', models: ['D-MAX', 'MU-X'] },
  { make: 'Mitsubishi', models: ['Triton', 'Pajero Sport'] },
  { make: 'Mazda', models: ['BT-50'] },
]

function slugify(make: string, model: string): string {
  return `${make}-${model}`.toLowerCase().replace(/\s+/g, '-')
}

// Demo entry — specification fields left blank/TBC where not yet verified.
// Add more full entries here as you confirm real specs.
export const vehicles: Vehicle[] = [
  {
    slug: 'toyota-hilux',
    make: 'Toyota',
    model: 'Hilux',
    generation: 'Information to be verified',
    modelYears: 'Information to be verified',
    image: '',
    specs: {},
    commonModifications: [],
    knownProblems: [],
    recommendedUpgrades: [],
  },
]

export function getVehicleBySlug(slug: string): Vehicle | undefined {
  return vehicles.find((v) => v.slug === slug)
}

export { slugify as vehicleSlug }
