import { parseFrontmatter } from './frontmatter'

export type Article = {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  featuredImage: string
  tags: string[]
  vehicle?: string
  readingTime: string
  content: string
}

// Eagerly loads every .md file placed anywhere under src/content/articles/**
// This is THE place your writing lives — see README.md for how to add a post.
const rawFiles = import.meta.glob('/src/content/articles/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

function estimateReadingTime(content: string): string {
  const words = content.trim().split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.round(words / 200))
  return `${minutes} min read`
}

function slugFromPath(path: string): string {
  const file = path.split('/').pop() ?? path
  return file.replace(/\.md$/, '')
}

export const articles: Article[] = Object.entries(rawFiles)
  .map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw)
    const asArray = (v: string | string[] | undefined): string[] =>
      Array.isArray(v) ? v : v ? [v] : []

    return {
      slug: (data.slug as string) || slugFromPath(path),
      title: (data.title as string) || 'Untitled article',
      description: (data.description as string) || '',
      date: (data.date as string) || '',
      author: (data.author as string) || 'JuneTrail Team',
      category: (data.category as string) || 'News',
      featuredImage: (data.featured_image as string) || '',
      tags: asArray(data.tags),
      vehicle: data.vehicle as string | undefined,
      readingTime: estimateReadingTime(content),
      content,
    }
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1))

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((a) => a.category.toLowerCase() === category.toLowerCase())
}

export const CATEGORIES = [
  '4x4 News',
  'Vehicle Reviews',
  'Product Reviews',
  'Engineering',
  'Buying Guides',
  'DIY & How-To',
  'Recovery',
  'Suspension',
  'Tyres & Wheels',
  'Towing',
  'Camping',
  'Travel',
  'Maintenance',
  '4x4 Modifications',
] as const
