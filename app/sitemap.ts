import type { MetadataRoute } from 'next'
import { brand } from '@/content/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/features', '/pricing', '/about', '/contact']
  return pages.map((p) => ({
    url: `${brand.url}${p}`,
    changeFrequency: 'weekly' as const,
    priority: p === '' ? 1 : 0.7,
  }))
}
