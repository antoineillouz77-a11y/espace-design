import type { MetadataRoute } from 'next'
import { readdirSync, statSync } from 'fs'
import { join } from 'path'

const base = 'https://espacedesignparis.fr'

function getDirs(dir: string): string[] {
  try {
    return readdirSync(dir).filter((f) => {
      try { return statSync(join(dir, f)).isDirectory() } catch { return false }
    })
  } catch { return [] }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = join(process.cwd(), 'src', 'app')

  // Pages principales
  const mainPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/realisations`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/tarifs`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/avis`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/mentions-legales`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]

  // Pages service par métier
  const servicePages: MetadataRoute.Sitemap = [
    'renovation-appartement-paris',
    'renovation-salle-de-bain-paris',
    'renovation-cuisine-paris',
    'renovation-studio-paris',
    'renovation-maison-paris',
    'renovation-appartement-haussmannien-paris',
    'peinture-paris',
    'parquet-paris',
    'electricite-paris',
    'plomberie-paris',
    'carrelage-paris',
    'menuiserie-paris',
    'isolation-paris',
    'platrererie-paris',
    'decoration-interieure-paris',
    'amenagement-interieur-paris',
  ].map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  // Pages hub département
  const deptPages: MetadataRoute.Sitemap = [
    'renovation-hauts-de-seine',
    'renovation-val-de-marne',
    'renovation-seine-saint-denis',
    'renovation-yvelines',
    'renovation-val-d-oise',
    'renovation-essonne',
    'renovation-seine-et-marne',
  ].map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  // Exclusions (pages non-ville dans src/app)
  const excluded = new Set([
    'blog', 'services', 'realisations', 'contact', 'tarifs', 'faq', 'avis',
    'mentions-legales', 'renovation-appartement-paris', 'renovation-salle-de-bain-paris',
    'renovation-cuisine-paris', 'renovation-studio-paris', 'renovation-maison-paris',
    'renovation-appartement-haussmannien-paris', 'peinture-paris', 'parquet-paris',
    'electricite-paris', 'plomberie-paris', 'carrelage-paris', 'menuiserie-paris',
    'isolation-paris', 'platrererie-paris', 'decoration-interieure-paris',
    'amenagement-interieur-paris', 'renovation-hauts-de-seine', 'renovation-val-de-marne',
    'renovation-seine-saint-denis', 'renovation-yvelines', 'renovation-val-d-oise',
    'renovation-essonne', 'renovation-seine-et-marne',
  ])

  // Toutes les pages ville (renovation-*) lues dynamiquement
  const villePages: MetadataRoute.Sitemap = getDirs(appDir)
    .filter((d) => !excluded.has(d) && !d.startsWith('_') && !d.startsWith('('))
    .map((slug) => ({
      url: `${base}/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    }))

  // Tous les articles blog lus dynamiquement
  const blogDir = join(appDir, 'blog')
  const blogPages: MetadataRoute.Sitemap = getDirs(blogDir)
    .map((slug) => ({
      url: `${base}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

  return [...mainPages, ...servicePages, ...deptPages, ...villePages, ...blogPages]
}
