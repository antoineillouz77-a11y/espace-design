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
    { url: `${base}/avis`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/mentions-legales`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
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

    // Blog
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
    { url: `${base}/blog/renovation-loft-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/plomberie-appartement-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/amenagement-studio-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/chauffage-appartement-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-cave-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-appartement-marais-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-appartement-saint-germain-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-appartement-montmartre-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-appartement-bastille-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-duplex-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/parquet-chene-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-terrasse-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-balcon-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/isolation-phonique-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-chambre-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/sol-beton-cire-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-salle-de-jeux-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-wc-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/douche-italienne-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-bureau-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-entree-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/peinture-cuisine-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/peinture-enduit-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-combles-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/diagnostic-amiante-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/moulures-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-cage-escalier-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-parquet-abime-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/robinetterie-salle-de-bain-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/carrelage-grand-format-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-cave-parking-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-sous-sol-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-fenetre-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/faux-plafond-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-hall-immeuble-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/creation-verriere-interieure-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-cuisine-ouverte-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/peinture-plafond-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-parquet-contrecolle-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/amenagement-combles-perdus-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/nettoyage-apres-travaux-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-salle-de-bain-petite-surface-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/domotique-renovation-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-balcon-terrasse-immeuble-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/pose-parquet-sur-carrelage-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/isolation-combles-subvention-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/peinture-beton-cire-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-appartement-copropriete-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-cuisine-studio-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-immeuble-ancien-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/ravalement-facade-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/ravalement-facade-copropriete-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-appartement-mise-en-location-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/carrelage-salle-de-bain-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/devis-renovation-en-ligne-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-avant-vente-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/travaux-electricite-appartement-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/plomberie-renovation-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-4-pieces-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/creation-cloison-separation-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/parquet-flottant-vs-colle-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-salle-de-bain-prix-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-couloir-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-appartement-loue-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-appartement-investissement-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-appartement-neuf-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-urgence-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/sol-stratifie-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-appartement-paris-5e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-appartement-paris-13e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-appartement-paris-9e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-appartement-paris-15e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-appartement-paris-17e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-appartement-paris-19e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-appartement-paris-20e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-appartement-paris-1er`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-maison-ancienne-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-appartement-paris-2e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/choisir-carrelage-salle-de-bain`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-parquet-massif-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-cuisine-americaine-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-appartement-paris-4e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-appartement-paris-11e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-appartement-paris-3e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-appartement-paris-14e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-appartement-paris-6e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-appartement-paris-7e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/renovation-gagny`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-montfermeil`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-rambouillet`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-neuilly-plaisance`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-villeparisis`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-goussainville`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-deuil-la-barre`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-mantes-la-ville`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog/renovation-appartement-paris-8e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-appartement-paris-10e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-appartement-paris-18e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/prix-renovation-salle-de-bain-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-appartement-paris-12e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/devis-travaux-renovation-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/renovation-yerres`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-viry-chatillon`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-fresnes`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-l-hay-les-roses`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-clichy-sous-bois`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog/renovation-appartement-paris-16e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-appartement-bailleur-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-terrasse-bois-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/renovation-la-garenne-colombes`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-sevran`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-le-raincy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-rungis`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-villeneuve-la-garenne`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-ablon-sur-seine`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-marnes-la-coquette`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-villepinte`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog/humidite-appartement-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/pose-carrelage-grand-format-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/renovation-brunoy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-enghien-les-bains`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-vaucresson`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-juvisy-sur-orge`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-vaujours`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Seine-Saint-Denis (93) — le-blanc-mesnil, pierrefitte, stains
    { url: `${base}/renovation-le-blanc-mesnil`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-pierrefitte-sur-seine`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-stains`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-la-courneuve`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Yvelines (78) — autres villes
    { url: `${base}/renovation-sartrouville`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-houilles`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-maisons-laffitte`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Essonne (91) — nouvelles villes
    { url: `${base}/renovation-corbeil-essonnes`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-sainte-genevieve-des-bois`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Val-d'Oise (95) — Cergy-Pontoise
    { url: `${base}/renovation-cergy-pontoise`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

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
    { url: `${base}/renovation-evry-courcouronnes`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Val-d'Oise (95)
    { url: `${base}/renovation-argenteuil`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-cergy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-epinay-sur-seine`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Seine-Saint-Denis (93) — petites communes
    { url: `${base}/renovation-noisy-le-grand`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-noisy-le-sec`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-romainville`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-les-lilas`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Val-de-Marne (94) — nouvelles villes
    { url: `${base}/renovation-vitry-sur-seine`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-champigny-sur-marne`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-villeneuve-saint-georges`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Seine-Saint-Denis (93) — villes
    { url: `${base}/renovation-bobigny`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-aulnay-sous-bois`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-tremblay-en-france`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-rosny-sous-bois`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-drancy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-bondy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Val-de-Marne (94) — villes supplémentaires
    { url: `${base}/renovation-choisy-le-roi`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-le-kremlin-bicetre`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Yvelines (78) — nouvelles villes
    { url: `${base}/renovation-poissy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Essonne (91) — nouvelles villes
    { url: `${base}/renovation-orsay`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-gif-sur-yvette`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-longjumeau`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Val-de-Marne (94) — nouvelles villes
    { url: `${base}/renovation-creteil`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-alfortville`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-sucy-en-brie`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-thiais`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-boissy-saint-leger`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-orly`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Seine-Saint-Denis (93) — nouvelles villes
    { url: `${base}/renovation-saint-ouen`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-villemomble`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-livry-gargan`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Yvelines (78) — nouvelles villes
    { url: `${base}/renovation-fontenay-le-fleury`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-plaisir`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-elancourt`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-conflans-sainte-honorine`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-mantes-la-jolie`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Val-d'Oise (95) — nouvelles villes
    { url: `${base}/renovation-pontoise`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-ermont`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-sarcelles`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-osny`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Yvelines (78) — nouvelles villes
    { url: `${base}/renovation-meulan-en-yvelines`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Essonne (91) — nouvelles villes
    { url: `${base}/renovation-montgeron`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Seine-Saint-Denis (93) — nouvelles villes
    { url: `${base}/renovation-coubron`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Val-de-Marne (94) — nouvelles villes
    { url: `${base}/renovation-villeneuve-le-roi`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Essonne (91) — nouvelles villes
    { url: `${base}/renovation-ris-orangis`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-grigny`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-morsang-sur-orge`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-bruyeres-le-chatel`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Yvelines (78) — nouvelles villes
    { url: `${base}/renovation-les-mureaux`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-montigny-le-bretonneux`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-guyancourt`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Val-de-Marne (94) — nouvelles villes
    { url: `${base}/renovation-le-perreux-sur-marne`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-bonneuil-sur-marne`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Yvelines (78) — nouvelles villes
    { url: `${base}/renovation-velizy-villacoublay`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-buc`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-le-chesnay-rocquencourt`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Essonne (91) — nouvelles villes
    { url: `${base}/renovation-savigny-sur-orge`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-athis-mons`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Val-de-Marne (94) — nouvelles villes
    { url: `${base}/renovation-valenton`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Blog — nouveaux articles
    { url: `${base}/blog/mur-porteur-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-appartement-copropriete-travaux-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-appartement-paris-18e-montmartre`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/ouverture-cuisine-salon-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/revetement-sol-appartement-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-immeuble-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/remise-aux-normes-electrique-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // Seine-et-Marne (77) — nouvelles villes
    { url: `${base}/renovation-melun`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-meaux`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-chelles`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-torcy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-lagny-sur-marne`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-noisiel`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-lognes`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-draveil`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-crosne`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-epinay-sur-orge`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-pontault-combault`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-ozoir-la-ferriere`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-trappes`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-savigny-le-temple`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-combs-la-ville`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-mitry-mory`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-roissy-en-brie`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-lieusaint`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-saint-thibault-des-vignes`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-les-clayes-sous-bois`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-andresy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-carrieres-sous-poissy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-acheres`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-brie-comte-robert`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Hauts-de-Seine (92) — nouvelles villes
    { url: `${base}/renovation-le-plessis-robinson`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-fontenay-aux-roses`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-sceaux`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Blog — nouvel article
    { url: `${base}/blog/isolation-thermique-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-appartement-paris-11e-bastille`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-salle-de-bain-italienne-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-cave-amenagee-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/prix-renovation-cuisine-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/pose-parquet-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-parquet-chene-blanc-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/peinture-decoration-appartement-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/verriere-interieure-atelier-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/salle-de-bain-italienne-sans-receveur-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/isolation-murs-appartement-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/cloison-separation-appartement-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/amenagement-petite-salle-de-bain-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/choisir-peinture-appartement-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // Val-de-Marne (94) — nouvelles villes
    { url: `${base}/renovation-villejuif`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-arcueil`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-cachan`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Seine-Saint-Denis (93) — nouvelles villes
    { url: `${base}/renovation-neuilly-sur-marne`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-gournay-sur-marne`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-vaires-sur-marne`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Val-d'Oise (95) — nouvelles villes
    { url: `${base}/renovation-saint-gratien`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-villiers-le-bel`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-franconville`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-soisy-sous-montmorency`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-montmorency`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-gonesse`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-herblay-sur-seine`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-bezons`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-taverny`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Val-de-Marne (94) — nouvelles villes
    { url: `${base}/renovation-limeil-brevannes`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Hauts-de-Seine (92) — nouvelles villes
    { url: `${base}/renovation-bois-colombes`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-gennevilliers`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Essonne (91) — vague 6
    { url: `${base}/renovation-arpajon`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-saint-michel-sur-orge`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-bretigny-sur-orge`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Seine-et-Marne (77) — vague 6
    { url: `${base}/renovation-moissy-cramayel`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-marines`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-emerainville`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-claye-souilly`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-nangis`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Val-d'Oise (95) — vague 7
    { url: `${base}/renovation-ecouen`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Yvelines (78) — vague 7
    { url: `${base}/renovation-triel-sur-seine`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-aubergenville`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-limay`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Blog — vague 3
    { url: `${base}/blog/escalier-interieur-renovation-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // Paris arrondissements — vague 8
    { url: `${base}/renovation-appartement-paris-5e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/renovation-appartement-paris-6e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/renovation-appartement-paris-7e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/renovation-paris-9e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/renovation-paris-10e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/renovation-paris-12e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/renovation-appartement-paris-9e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/renovation-appartement-paris-10e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/renovation-appartement-paris-12e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },

    // Seine-Saint-Denis (93) — vague 9
    { url: `${base}/renovation-livry-gargan`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-tremblay-en-france`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-aulnay-sous-bois`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Val-de-Marne (94) — vague 9
    { url: `${base}/renovation-fontenay-sous-bois`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-orly`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-rungis`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Yvelines (78) — vague 8
    { url: `${base}/renovation-buchelay`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Seine-et-Marne (77) — vague 10
    { url: `${base}/renovation-coulommiers`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-montereau-fault-yonne`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-provins`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Val-d'Oise (95) — vague 14
    { url: `${base}/renovation-sannois`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Yvelines (78) — vague 14-15
    { url: `${base}/renovation-croissy-sur-seine`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-jouy-en-josas`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-saint-quentin-en-yvelines`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Paris arrondissements — vague 17
    { url: `${base}/renovation-appartement-paris-2e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-appartement-paris-3e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-appartement-paris-4e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-appartement-paris-8e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-appartement-paris-11e`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Val-de-Marne (94) — vague 18
    { url: `${base}/renovation-ormesson-sur-marne`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-santeny`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/renovation-noiseau`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Essonne (91) — vague 19
    { url: `${base}/renovation-saint-germain-les-arpajon`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Blog — vague 14
    { url: `${base}/blog/tendances-deco-appartement-paris-2025`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // Blog — vague 13 (suite)
    { url: `${base}/blog/travaux-renovation-locatif-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // Blog — vague 13
    { url: `${base}/blog/budget-renovation-appartement-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // Yvelines (78) — vague 16
    { url: `${base}/renovation-andrezy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Seine-et-Marne (77) — vague 16
    { url: `${base}/renovation-fontenay-en-brie`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Blog — vague 11
    { url: `${base}/blog/installation-cuisine-ikea-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/isolation-phonique-appartement-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // Blog — vague 10
    { url: `${base}/blog/renovation-salle-de-bain-haussmannien`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/pose-carrelage-salle-de-bain-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // Essonne (91) — vague 14
    { url: `${base}/renovation-vigneux-sur-seine`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Seine-et-Marne (77) — vague 14
    { url: `${base}/renovation-nemours`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Yvelines (78) — vague 13
    { url: `${base}/renovation-bougival`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Essonne (91) — vague 13
    { url: `${base}/renovation-etampes`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Seine-et-Marne (77) — vague 13
    { url: `${base}/renovation-fontainebleau`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Blog — vague 9
    { url: `${base}/blog/renovation-energetique-appartement-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/moisissures-appartement-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/sol-vinyle-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // Blog — vague 4-5
    { url: `${base}/blog/beton-cire-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/robinetterie-salle-de-bain-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-wc-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-studio-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-loft-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-immeuble-ancien-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/renovation-maison-ancienne-paris`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // Pages hub département
    { url: `${base}/renovation-hauts-de-seine`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/renovation-val-de-marne`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/renovation-seine-saint-denis`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/renovation-yvelines`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/renovation-val-d-oise`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/renovation-essonne`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/renovation-seine-et-marne`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },

  ]
}
