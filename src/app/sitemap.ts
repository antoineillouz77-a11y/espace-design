import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://espacedesignparis.fr'

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/realisations`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/renovation-appartement-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  ]
}
