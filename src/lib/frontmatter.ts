// Minimal YAML-frontmatter parser. Handles the flat key: value and
// key: [a, b, c] shapes used in our article frontmatter — intentionally
// simple so the content system has no hidden dependencies.

export type Frontmatter = Record<string, string | string[]>

export function parseFrontmatter(raw: string): { data: Frontmatter; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { data: {}, content: raw }

  const [, block, content] = match
  const data: Frontmatter = {}

  for (const line of block.split('\n')) {
    if (!line.trim() || line.trim().startsWith('#')) continue
    const idx = line.indexOf(':')
    if (idx === -1) continue
    const key = line.slice(0, idx).trim()
    let value = line.slice(idx + 1).trim()

    if (value.startsWith('[') && value.endsWith(']')) {
      data[key] = value
        .slice(1, -1)
        .split(',')
        .map((v) => v.trim().replace(/^["']|["']$/g, ''))
        .filter(Boolean)
    } else {
      value = value.replace(/^["']|["']$/g, '')
      data[key] = value
    }
  }

  return { data, content: content.trim() }
}
