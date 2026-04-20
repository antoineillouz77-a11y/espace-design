import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://espacedesignparis.fr'

  return [
    // Pages principales
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/realisations`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/renovation-appartement-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/tarifs`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },

    // Pages service par type de travaux
    { url: `${base}/renovation-salle-de-bain-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/renovation-cuisine-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/peinture-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/parquet-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/electricite-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/plomberie-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/carrelage-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/menuiserie-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/isolation-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/platrererie-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/decoration-interieure-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/amenagement-interieur-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },

    // Arrondissements parisiens — tous les 20
    { url: `${base}/renovation-paris-1er`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-paris-2e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-paris-3e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-paris-4e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-paris-5e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-paris-6e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-paris-7e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-paris-8e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-paris-9e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-paris-10e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-paris-11e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-paris-12e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-paris-13e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-paris-14e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-paris-15e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-paris-16e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-paris-17e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-paris-18e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-paris-19e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-paris-20e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Hauts-de-Seine (92)
    { url: `${base}/renovation-neuilly-sur-seine`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-levallois-perret`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-boulogne-billancourt`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-issy-les-moulineaux`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-saint-cloud`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-courbevoie`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-asnieres-sur-seine`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-suresnes`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-montrouge`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-malakoff`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-puteaux`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-nanterre`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-rueil-malmaison`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-meudon`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-clamart`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-chatillon`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-clichy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-vanves`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-colombes`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-meudon`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-chatillon`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-clamart`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-sevres`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-garches`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-antony`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-bagneux`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Yvelines (78)
    { url: `${base}/renovation-versailles`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-saint-germain-en-laye`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-le-vesinet`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-chatou`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Val-de-Marne (94)
    { url: `${base}/renovation-vincennes`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-fontenay-sous-bois`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-nogent-sur-marne`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-saint-maur-des-fosses`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-maisons-alfort`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-ivry-sur-seine`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-charenton-le-pont`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-joinville-le-pont`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-saint-mande`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-gentilly`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-charenton-le-pont`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-ivry-sur-seine`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Blog
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/blog/prix-renovation-appartement-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-appartement-haussmannien-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-salle-de-bain-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/choisir-artisan-renovation-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-cuisine-ouverte-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-parquet-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/isolation-acoustique-appartement-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/peinture-appartement-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-studio-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/carrelage-appartement-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/menuiserie-sur-mesure-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/decoration-interieure-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-appartement-ancien-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/isolation-thermique-appartement-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-2-pieces-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-3-pieces-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-4-pieces-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/electricite-appartement-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-avant-achat-appartement-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/investissement-locatif-renovation-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-maison-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/budget-renovation-paris-2025`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/verriere-interieure-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/parquet-massif-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/home-staging-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/peinture-decorative-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/devis-renovation-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-fenetre-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-escalier-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/domotique-appartement-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // Pages service spécialisées
    { url: `${base}/renovation-studio-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/renovation-maison-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/renovation-appartement-haussmannien-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },

    // Nouvelles villes — Seine-Saint-Denis (93)
    { url: `${base}/renovation-saint-denis`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-montreuil`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-pantin`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-aubervilliers`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-bagnolet`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Essonne (91)
    { url: `${base}/renovation-massy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-palaiseau`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-chatenay-malabry`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Val-d'Oise (95)
    { url: `${base}/renovation-argenteuil`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-cergy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-epinay-sur-seine`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Seine-et-Marne (93) / Est parisien
    { url: `${base}/renovation-noisy-le-grand`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ]
}
