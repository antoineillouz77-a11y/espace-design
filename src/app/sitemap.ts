import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://espacedesignparis.fr'

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/realisations`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/renovation-appartement-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/renovation-paris-6e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-paris-7e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-paris-8e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-paris-15e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-paris-16e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-paris-17e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    // Arrondissements parisiens nouvellement ajoutés
    { url: `${base}/renovation-paris-1er`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-paris-2e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-paris-3e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-paris-4e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-paris-5e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-paris-9e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-paris-10e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-paris-11e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-paris-12e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-paris-13e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-paris-14e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-paris-18e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-paris-19e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-paris-20e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    // Villes riches Île-de-France
    { url: `${base}/renovation-neuilly-sur-seine`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-levallois-perret`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-boulogne-billancourt`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-issy-les-moulineaux`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-saint-cloud`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-vincennes`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-versailles`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ]
}
