import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
  ],
}

export const metadata: Metadata = {
  title: 'Blog Rénovation Paris — Conseils, Prix & Guides | Espace Design',
  description:
    'Guides et conseils pour rénover votre appartement à Paris : prix au m², types de travaux, choix des matériaux, choisir un artisan. Articles rédigés par Espace Design.',
}

const articles = [
  {
    href: '/blog/prix-renovation-appartement-paris',
    title: 'Prix d\'une rénovation d\'appartement à Paris en 2025',
    desc: 'Tarifs au m², exemples de budgets pour studio, 2 pièces, 3 pièces. Tous les facteurs qui font varier le coût.',
    tag: 'Prix & Budgets',
  },
  {
    href: '/blog/renovation-appartement-haussmannien-paris',
    title: 'Rénover un appartement haussmannien à Paris',
    desc: 'Parquet, moulures, cheminées, hauteur sous plafond… comment préserver le cachet tout en modernisant.',
    tag: 'Guides',
  },
  {
    href: '/blog/renovation-salle-de-bain-paris',
    title: 'Rénovation salle de bain à Paris : guide complet 2025',
    desc: 'Prix, matériaux, durée des travaux, erreurs à éviter. Tout pour rénover votre salle de bain à Paris.',
    tag: 'Salle de bain',
  },
  {
    href: '/blog/choisir-artisan-renovation-paris',
    title: 'Comment choisir un artisan rénovateur à Paris ?',
    desc: 'Les 8 critères clés pour ne pas se tromper : assurance, devis, références, garanties. Conseils d\'expert.',
    tag: 'Conseils',
  },
  {
    href: '/blog/renovation-cuisine-ouverte-paris',
    title: 'Créer une cuisine ouverte à Paris : tout savoir',
    desc: 'Abattre un mur porteur, aménager une cuisine ouverte, prix et réglementations à Paris.',
    tag: 'Cuisine',
  },
  {
    href: '/blog/renovation-parquet-paris',
    title: 'Parquet à Paris : pose, rénovation, vitrification',
    desc: 'Parquet massif, contrecollé, stratifié — lequel choisir ? Prix et conseils pour les appartements parisiens.',
    tag: 'Sols & Parquet',
  },
  {
    href: '/blog/isolation-acoustique-appartement-paris',
    title: 'Isolation acoustique d\'un appartement à Paris — guide 2025',
    desc: 'Bruits de voisins, de rue, d\'impact — solutions, prix et démarches pour isoler phoniquement votre appartement parisien.',
    tag: 'Isolation',
  },
  {
    href: '/blog/peinture-appartement-paris',
    title: 'Peinture appartement Paris : prix, délais et conseils 2025',
    desc: 'Tarifs au m², préparation des murs, choix des couleurs pour appartements parisiens. Guide complet par Espace Design.',
    tag: 'Peinture',
  },
  {
    href: '/blog/renovation-studio-paris',
    title: 'Rénovation studio Paris : prix, astuces & guide 2025',
    desc: 'Comment rénover un studio parisien de 15 à 35 m² — optimisation de l\'espace, budget réaliste, matériaux adaptés.',
    tag: 'Studios',
  },
  {
    href: '/blog/carrelage-appartement-paris',
    title: 'Carrelage appartement Paris : prix, pose & conseils 2025',
    desc: 'Prix au m², types de carreaux, salle de bain, cuisine — tout sur la pose de carrelage dans les appartements parisiens.',
    tag: 'Sols & Carrelage',
  },
  {
    href: '/blog/menuiserie-sur-mesure-paris',
    title: 'Menuiserie sur mesure Paris : prix, types & artisan 2025',
    desc: 'Placards, dressings, bibliothèques, portes coulissantes sur mesure à Paris. Prix au ml, matériaux et délais.',
    tag: 'Menuiserie',
  },
  {
    href: '/blog/decoration-interieure-paris',
    title: 'Décoration intérieure Paris : décorateur, prix & tendances 2025',
    desc: 'Styles tendance, tarifs d\'un décorateur parisien, conseils pour transformer votre appartement. Guide complet.',
    tag: 'Décoration',
  },
  {
    href: '/blog/renovation-appartement-ancien-paris',
    title: 'Rénovation appartement ancien Paris : guide & contraintes 2025',
    desc: 'Haussmannien, Art déco, immeuble d\'avant 1948 — contraintes, prix, amiante, mise aux normes. Guide expert.',
    tag: 'Appartement ancien',
  },
  {
    href: '/blog/isolation-thermique-appartement-paris',
    title: 'Isolation thermique appartement Paris : prix & aides 2025',
    desc: 'Combles, murs, fenêtres — solutions, prix au m², aides MaPrimeRénov\' et contraintes pour appartements parisiens.',
    tag: 'Isolation thermique',
  },
  {
    href: '/blog/renovation-2-pieces-paris',
    title: 'Rénovation 2 pièces Paris : prix, délais & guide 2025',
    desc: 'Budget par scénario, détail des postes de travaux et exemple concret de rénovation complète d\'un 2 pièces à Paris.',
    tag: 'Prix & Budgets',
  },
  {
    href: '/blog/renovation-3-pieces-paris',
    title: 'Rénovation 3 pièces Paris : prix, budget & guide 2025',
    desc: 'De 60 000 à 120 000 € selon les finitions — guide complet avec tableau de postes et exemple clé en main.',
    tag: 'Prix & Budgets',
  },
  {
    href: '/blog/renovation-4-pieces-paris',
    title: 'Rénovation 4 pièces Paris : prix, budget & guide 2025',
    desc: 'Budget de 80 000 à 160 000 € selon les finitions — guide complet pour rénover un 4 pièces à Paris.',
    tag: 'Prix & Budgets',
  },
  {
    href: '/blog/electricite-appartement-paris',
    title: 'Électricité appartement Paris : prix, mise aux normes & guide 2025',
    desc: 'Remise aux normes NF C 15-100, tableau électrique, prix au m² — tout pour la rénovation électrique dans les appartements parisiens.',
    tag: 'Électricité',
  },
  {
    href: '/blog/renovation-avant-achat-appartement-paris',
    title: 'Rénovation avant achat appartement Paris : guide & budget 2025',
    desc: 'Estimer les travaux avant d\'acheter, négocier le prix, éviter les pièges — guide complet pour l\'achat-rénovation à Paris.',
    tag: 'Guides',
  },
  {
    href: '/blog/investissement-locatif-renovation-paris',
    title: 'Investissement locatif & rénovation Paris : guide 2025',
    desc: 'Rénover pour louer à Paris — rentabilité, travaux prioritaires, DPE, fiscalité. Guide complet pour les investisseurs.',
    tag: 'Investissement',
  },
  {
    href: '/blog/renovation-maison-paris',
    title: 'Rénovation Maison Paris & Île-de-France : prix & guide 2025',
    desc: 'Rénover une maison en Île-de-France : prix au m², types de travaux, spécificités vs appartement. Guide complet Espace Design.',
    tag: 'Guides',
  },
  {
    href: '/blog/budget-renovation-paris-2025',
    title: 'Budget Rénovation Paris 2025 : estimez votre projet au m²',
    desc: "Comment établir un budget rénovation à Paris en 2025 ? Coûts par poste, marges d'erreur, aides disponibles. Guide pratique.",
    tag: 'Prix & Budgets',
  },
  {
    href: '/blog/verriere-interieure-paris',
    title: 'Verrière Intérieure Paris : prix, styles acier & pose 2025',
    desc: "Verrière intérieure (cloison vitrée style atelier) à Paris — prix, dimensions, acier noir, pose et réglementation. Guide complet.",
    tag: 'Aménagement',
  },
  {
    href: '/blog/parquet-massif-paris',
    title: 'Parquet Massif Paris : prix, essences, pose & entretien 2025',
    desc: "Parquet massif à Paris — chêne, noyer, hêtre. Prix au m², pose, vitrification, rénovation des parquets anciens. Guide complet.",
    tag: 'Sols & Parquet',
  },
  {
    href: '/blog/home-staging-paris',
    title: 'Home Staging Paris : valoriser son bien avant vente 2025',
    desc: "Home staging à Paris : travaux de valorisation avant vente. Peinture, sol, cuisines, salles de bain — augmentez votre prix de vente.",
    tag: 'Conseils',
  },
  {
    href: '/blog/peinture-decorative-paris',
    title: 'Peinture Décorative Paris : enduit, béton ciré, tadelakt 2025',
    desc: "Peinture décorative à Paris : enduit à la chaux, béton ciré, tadelakt, badigeon. Prix, applications, artisans. Guide complet.",
    tag: 'Peinture',
  },
  {
    href: '/blog/devis-renovation-paris',
    title: 'Devis Rénovation Paris : obtenir et comparer 3 devis 2025',
    desc: "Comment obtenir un bon devis de rénovation à Paris ? Que comparer, les pièges à éviter, les garanties à demander. Guide pratique.",
    tag: 'Conseils',
  },
  {
    href: '/blog/renovation-fenetre-paris',
    title: 'Rénovation Fenêtres Paris : double vitrage, PVC, aluminium 2025',
    desc: "Changer ses fenêtres à Paris : double vitrage, PVC, aluminium, bois. Prix, aides MaPrimeRénov', démarches copropriété. Guide complet.",
    tag: 'Rénovation',
  },
  {
    href: '/blog/renovation-escalier-paris',
    title: 'Rénovation Escalier Paris : prix, bois, carrelage & garde-corps 2025',
    desc: 'Rénover un escalier à Paris : peinture, remplacement marches, garde-corps design. Prix selon matériaux. Guide complet et artisans 2025.',
    tag: 'Menuiserie',
  },
  {
    href: '/blog/domotique-appartement-paris',
    title: 'Domotique Appartement Paris : prix, installation & marques 2025',
    desc: "Domotique dans un appartement parisien : volets automatiques, éclairage connecté, thermostat, interphone vidéo. Prix et installation. Guide 2025.",
    tag: 'Aménagement',
  },
  {
    href: '/blog/renovation-loft-paris',
    title: 'Rénovation Loft Paris : prix, aménagement industriel & guide 2025',
    desc: "Rénover un loft à Paris : style industriel, béton ciré, verrière, mezzanine. Prix au m², artisans spécialisés. Guide complet 2025.",
    tag: 'Guides',
  },
  {
    href: '/blog/plomberie-appartement-paris',
    title: 'Plomberie Appartement Paris : prix, réfection & urgence 2025',
    desc: "Rénovation plomberie Paris : remplacement colonnes, salle de bain, prix au m², délais. Plombier agréé Paris et Île-de-France. Guide complet 2025.",
    tag: 'Plomberie',
  },
  {
    href: '/blog/amenagement-studio-paris',
    title: 'Aménagement Studio Paris : optimiser l\'espace & décoration 2025',
    desc: "Aménager un studio parisien de 15 à 35 m² : lit escamotable, cloisons coulissantes, mobilier sur-mesure, rangements. Idées et prix 2025.",
    tag: 'Studios',
  },
  {
    href: '/blog/chauffage-appartement-paris',
    title: 'Chauffage Appartement Paris : remplacement, prix & aides 2025',
    desc: "Changer son chauffage à Paris : radiateurs à inertie, plancher chauffant, pompe à chaleur. Prix, aides MaPrimeRénov', copropriété. Guide 2025.",
    tag: 'Rénovation',
  },
  {
    href: '/blog/renovation-cave-paris',
    title: 'Rénovation Cave Paris : aménagement, humidité & prix 2025',
    desc: "Rénover sa cave à Paris : traitement humidité, isolation, aménagement bureau ou chambre. Prix, réglementation copropriété. Guide complet 2025.",
    tag: 'Guides',
  },
  {
    href: '/blog/renovation-appartement-marais-paris',
    title: 'Rénovation Appartement Marais Paris : guide & artisans 2025',
    desc: "Rénover un appartement dans le Marais (Paris 3e-4e) : contraintes Bâtiments de France, prix, artisans spécialisés. Guide complet 2025.",
    tag: 'Guides',
  },
]

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Conseils & Guides</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
          Blog Rénovation Paris
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Prix, matériaux, artisans, réglementations — tout ce qu&apos;il faut savoir pour rénover
          votre appartement à Paris en 2025.
        </p>
      </section>

      {/* Articles grid */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="bg-white rounded-lg p-6 border border-gray-100 hover:border-[#D4AF37]/40 hover:shadow-md transition-all group"
              >
                <span className="inline-block text-[10px] uppercase tracking-widest text-[#B8960C] font-light mb-3">
                  {a.tag}
                </span>
                <h2 className="font-display text-lg font-semibold text-[#1C1C1C] leading-snug mb-3 group-hover:text-[#B8960C] transition-colors">
                  {a.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed font-light mb-4">{a.desc}</p>
                <span className="flex items-center gap-1 text-[#B8960C] text-xs font-light">
                  Lire l&apos;article <ArrowRight size={11} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center px-4">
        <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-3">
          Votre projet de rénovation à Paris
        </h2>
        <p className="text-gray-500 text-sm font-light mb-6 max-w-lg mx-auto">
          Devis gratuit sous 48h — nous intervenons dans tout Paris et l&apos;Île-de-France.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#1C1C1C] text-white px-7 py-3.5 rounded font-light text-sm tracking-wide hover:bg-[#B8960C] transition-colors duration-300"
        >
          Demander un devis <ArrowRight size={13} />
        </Link>
      </section>
    </>
  )
}
