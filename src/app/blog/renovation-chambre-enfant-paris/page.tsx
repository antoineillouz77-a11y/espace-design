import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    {
      '@type': 'ListItem',
      position: 3,
      name: "Rénovation chambre enfant Paris",
      item: 'https://espacedesignparis.fr/blog/renovation-chambre-enfant-paris',
    },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation chambre enfant à Paris : idées, conseils et prix 2025",
  description:
    "Créer une chambre enfant fonctionnelle et inspirante à Paris : rangements sur mesure, lit mezzanine, peinture non toxique, revêtements durables. Guide complet avec tarifs.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  datePublished: '2025-02-10',
  dateModified: '2025-06-01',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://espacedesignparis.fr/blog/renovation-chambre-enfant-paris',
  },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quelles peintures choisir pour une chambre enfant à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Privilégiez des peintures labellisées A+ (émissions de COV très faibles), sans plomb ni solvants. Les peintures à l'eau acrylique de classe lavable sont idéales : faciles à nettoyer et sans odeur persistante. Évitez les peintures glycéro dans une pièce de vie enfant.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment optimiser l'espace dans une petite chambre enfant parisienne ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dans les appartements parisiens souvent compacts, le lit mezzanine avec bureau intégré en dessous est la solution reine pour une chambre de 9 à 12 m². Les placards sur mesure du sol au plafond maximisent le rangement sans empiéter sur la surface au sol. Les étagères murales flottantes et les tiroirs sous le lit complètent l'optimisation.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel revêtement de sol choisir pour une chambre enfant ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le parquet stratifié ou le vinyle LVT (Luxury Vinyl Tile) sont les choix les plus adaptés : résistants aux chocs, faciles à nettoyer, chauds sous les pieds et abordables. Le parquet massif est possible mais demande plus d'entretien. Évitez la moquette qui retient les allergènes, surtout à Paris où la pollution est élevée.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Rénovation chambre enfant Paris | Espace Design",
  description:
    "Rénovation de chambre enfant à Paris : peinture saine, rangements sur mesure, lit mezzanine, parquet. Artisan qualifié, devis gratuit 48h. Espace Design.",
}

export default function RenovationChambreEnfantParis() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">
          Blog Rénovation
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
          Rénovation chambre enfant à Paris
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Concevoir une chambre enfant qui grandira avec lui : sécurité des matériaux, optimisation
          de l&apos;espace, rangements malins et ambiance inspirante — dans les contraintes des
          appartements parisiens.
        </p>
      </section>

      {/* Content */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Une chambre pensée pour évoluer avec votre enfant
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            À Paris, les chambres enfants mesurent rarement plus de 12 m². L&apos;enjeu est donc
            double : créer un espace de sommeil confortable et un coin jeux ou étude fonctionnel,
            sans que la pièce ne soit encombrée. La clé réside dans une conception verticale — lit
            mezzanine, étagères en hauteur, placards jusqu&apos;au plafond — et dans le choix de
            matériaux durables qui résisteront aux années de croissance de votre enfant.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            La santé de votre enfant guide chacun de nos choix : peintures labellisées A+, colles
            sans solvants, bois certifiés FSC, revêtements de sol sans phtalates. Espace Design
            sélectionne des produits testés et certifiés pour les espaces où vivent les enfants.
            Notre équipe conçoit des plans 3D avant le début des travaux pour vous permettre de
            visualiser le résultat final et d&apos;ajuster chaque détail.
          </p>

          <h2 className="font-display text-xl font-semibold text-[#1C1C1C] mb-4">
            Les tendances chambre enfant à Paris en 2025
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Les familles parisiennes plébiscitent actuellement les chambres modulables à thème
            naturel : bois clair, teintes terracotta ou vert sauge, décoration inspirée des forêts
            et de la nature. Le lit cabane avec claustra en bois crée un espace cosy et sécurisant
            pour les plus petits. Pour les enfants scolarisés, le coin bureau intégré dans la
            structure du lit mezzanine est devenu incontournable, surtout depuis le développement du
            travail à domicile qui a réduit la surface dédiée aux enfants dans certains
            appartements.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            L&apos;éclairage est un élément souvent négligé mais essentiel : prévoir un plafonnier
            général, une applique de chevet à intensité variable et un éclairage dédié au bureau
            (lampe articulée ou réglette LED). Penser également aux prises électriques avec
            sécurité enfant, intégrées dès la rénovation pour éviter les extensions de câble
            dangereuses.
          </p>

          {/* Price table */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="px-4 py-2 text-left font-medium">Prestation</th>
                  <th className="px-4 py-2 text-left font-medium">Prix indicatif</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { p: 'Peinture complète chambre (murs + plafond, peinture A+)', v: '600 – 1 400 €' },
                  { p: 'Pose parquet stratifié ou vinyle LVT (fourni + posé)', v: '40 – 80 €/m²' },
                  { p: 'Lit mezzanine avec bureau intégré sur mesure', v: '2 500 – 5 500 €' },
                  { p: 'Placard sur mesure sol au plafond', v: '800 – 2 500 € selon dimensions' },
                  { p: 'Papier peint enfant (pose incluse)', v: '25 – 60 €/m²' },
                  { p: 'Rénovation complète chambre 10 m² (clé en main)', v: '5 000 – 12 000 €' },
                ].map((r, i) => (
                  <tr key={r.p} className={i % 2 === 0 ? 'bg-[#FAFAF8]' : 'bg-white'}>
                    <td className="px-4 py-2 text-gray-700">{r.p}</td>
                    <td className="px-4 py-2 text-gray-600">{r.v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Matériaux certifiés sains (A+, FSC)',
              'Peintures sans COV ni solvants',
              'Conception 3D incluse dans le devis',
              'Rangements sur mesure optimisés',
              'Artisans spécialisés chambre enfant',
              'Chantier propre et protégé',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-xl font-semibold text-[#1C1C1C] mt-6 mb-4">FAQ</h2>
          <div className="space-y-3">
            {schemaFAQ.mainEntity.map((faq) => (
              <div key={faq.name} className="border border-gray-200 rounded p-3">
                <p className="font-semibold text-[#1C1C1C] mb-1 text-sm">{faq.name}</p>
                <p className="text-xs text-gray-600">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-3xl font-bold text-white mb-4">
          Créons la chambre dont votre enfant rêve
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">
          Devis gratuit sous 48h — artisan qualifié, assurance décennale.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors"
          >
            Devis gratuit <ArrowRight size={16} />
          </Link>
          <a
            href="tel:+33611783867"
            className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"
          >
            <Phone size={16} />
            06 11 78 38 67
          </a>
        </div>
      </section>
    </>
  )
}
