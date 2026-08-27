// Central product/affiliate data. Edit this file to add, update, or
// retire products and their retailer links — nothing else in the site
// needs to change. See README.md for the full walkthrough.

export type RetailerLink = {
  retailer: string
  url: string // Use the AMAZON_AFFILIATE_URL placeholder until you have a real link
}

export type EngineeringScore = {
  design: number
  material: number
  manufacturingQuality: number
  structuralStrength: number
  fitment: number
  installation: number
  weight: number
  durability: number
  practicality: number
  value: number
}

export type Product = {
  slug: string
  name: string
  brand: string
  category: string
  vehicle?: string
  image: string // leave '' to show the placeholder image block
  priceAud?: string // omit if unverified — the UI will show "Information to be verified."
  retailers: RetailerLink[]
  score?: EngineeringScore
  summary: string
}

export function overallScore(score: EngineeringScore): number {
  const values = Object.values(score)
  const avg = values.reduce((a, b) => a + b, 0) / values.length
  return Math.round(avg * 10) / 10
}

// Sample/demo entries only — replace with real products before publishing.
// AMAZON_AFFILIATE_URL is a placeholder; do not invent real affiliate IDs.
export const products: Product[] = [
  {
    slug: 'demo-3mm-bash-plate',
    name: '3mm Bash Plate (sample entry)',
    brand: 'Brand TBC',
    category: 'Bash Plates',
    vehicle: 'Toyota Hilux',
    image: '',
    retailers: [
      { retailer: 'Amazon Australia', url: 'AMAZON_AFFILIATE_URL' },
      { retailer: 'Manufacturer', url: '#' },
    ],
    score: {
      design: 8,
      material: 8,
      manufacturingQuality: 8,
      structuralStrength: 9,
      fitment: 8,
      installation: 7,
      weight: 7,
      durability: 8,
      practicality: 8,
      value: 8,
    },
    summary:
      'Sample product entry demonstrating the review data model. Replace with a real product before publishing — see README.md.',
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}
