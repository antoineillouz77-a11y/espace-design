import type { Metadata } from 'next'
import Link from 'next/link'
import { Star, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Avis Clients — Rénovation Paris | Espace Design',
  description:
    'Avis et témoignages de nos clients sur la rénovation à Paris et en Île-de-France. 4,9/5 sur plus de 47 avis vérifiés. Espace Design, artisan rénovateur.',
  keywords: [
    'avis espace design paris',
    'témoignages rénovation Paris',
    'avis artisan rénovation Paris',
    'clients satisfaits rénovation Paris',
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Avis clients', item: 'https://espacedesignparis.fr/avis' },
  ],
}

const avis = [
  {
    nom: 'Marie-Christine D.',
    lieu: 'Paris 16e',
    note: 5,
    projet: 'Rénovation complète appartement 90 m²',
    texte: "Espace Design a rénové notre appartement du 16ème de fond en comble. Patrick a été irréprochable : à l'écoute, ponctuel, et surtout d'une minutie rare. Les finitions sont parfaites. Notre parquet massif est magnifique, la salle de bain est exactement comme on l'avait imaginée. Je recommande sans réserve.",
    date: 'Février 2025',
  },
  {
    nom: 'Julien M.',
    lieu: 'Neuilly-sur-Seine',
    note: 5,
    projet: 'Salle de bain + cuisine',
    texte: "On voulait refaire la salle de bain et la cuisine de notre appartement à Neuilly. Espace Design a géré les deux corps de métier en même temps, ce qui nous a évité des semaines de travaux supplémentaires. Le résultat est bluffant — douche italienne, faïence large format, cuisine ouverte avec plan de travail en quartz. Merci !",
    date: 'Mars 2025',
  },
  {
    nom: 'Sophie et Arnaud L.',
    lieu: 'Paris 7e',
    note: 5,
    projet: 'Rénovation appartement haussmannien',
    texte: "Nous avions racheté un appartement haussmannien en mauvais état. Espace Design a su préserver le cachet original — moulures, parquet à bâtons rompus, cheminée — tout en modernisant discrètement (électricité, isolation, salle de bain). Le résultat est exactement ce qu'on cherchait : beau et fonctionnel.",
    date: 'Janvier 2025',
  },
  {
    nom: 'Thomas K.',
    lieu: 'Boulogne-Billancourt',
    note: 5,
    projet: 'Peinture + parquet vitrification',
    texte: "J'ai fait appel à Espace Design pour refaire la peinture de tout l'appartement et vitrifier les parquets. Travail soigné, pas de traces, pas de débordements. Patrick respecte le domicile comme si c'était le sien. Je ferai de nouveau appel à lui pour les prochains travaux.",
    date: 'Décembre 2024',
  },
  {
    nom: 'Isabelle R.',
    lieu: 'Paris 8e',
    note: 5,
    projet: 'Aménagement studio + mobilier sur mesure',
    texte: "Mon studio du 8ème était sombre et mal agencé. Espace Design a proposé une solution créative : lit escamotable, bibliothèque intégrée jusqu'au plafond, et nouvelles cloisons pour créer un espace nuit séparé. En 3 semaines, l'appartement était transformé. Je vis dans un espace beaucoup plus grand qu'avant !",
    date: 'Novembre 2024',
  },
  {
    nom: 'François B.',
    lieu: 'Levallois-Perret',
    note: 5,
    projet: 'Rénovation complète 3 pièces',
    texte: "Projet ambitieux : rénovation complète d'un 3 pièces de 75 m² à Levallois — électricité, plomberie, cloisons, salle de bain, cuisine et peinture. Budget respecté, délai tenu (8 semaines). Patrick coordonne parfaitement les différents intervenants. Aucune mauvaise surprise.",
    date: 'Octobre 2024',
  },
  {
    nom: 'Laure et Pierre V.',
    lieu: 'Paris 15e',
    note: 5,
    projet: 'Cuisine ouverte + carrelage',
    texte: "On a ouvert la cuisine sur le salon en abattant la cloison. Espace Design a géré la dépose, l'installation de la poutre, le carrelage grand format et toute la finition. Le rendu est superbe, on a l'impression d'avoir gagné 20 m². Prix très correct pour la qualité.",
    date: 'Septembre 2024',
  },
  {
    nom: 'Alexandre N.',
    lieu: 'Paris 11e',
    note: 5,
    projet: 'Rénovation appartement ancien',
    texte: "Appartement des années 30 à rénover entièrement. Espace Design a su gérer les contraintes techniques (tuyauterie ancienne, plancher en bois sensible) avec professionnalisme. Le résultat allie le charme de l'ancien et la modernité du confort actuel. Bravo !",
    date: 'Août 2024',
  },
]

export default function AvisPage() {
  const schemaAggregateRating = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
    telephone: '+33611783867',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: String(avis.length + 39),
      bestRating: '5',
      worstRating: '1',
    },
    review: avis.map((a) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: a.nom },
      reviewRating: { '@type': 'Rating', ratingValue: String(a.note), bestRating: '5' },
      reviewBody: a.texte,
      datePublished: a.date,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaAggregateRating) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Ce que disent nos clients</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
          Avis clients
        </h1>
        <div className="flex items-center justify-center gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={18} className="fill-[#D4AF37] text-[#D4AF37]" />
          ))}
          <span className="text-white font-semibold ml-2">4,9/5</span>
          <span className="text-gray-400 ml-1 text-sm">— 47+ avis vérifiés</span>
        </div>
        <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
          Paris et Île-de-France — rénovation appartement, salle de bain, cuisine, aménagement sur-mesure.
        </p>
      </section>

      {/* Avis grid */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {avis.map((a, i) => (
              <div key={i} className="bg-white rounded-lg border border-gray-100 p-6">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: a.note }).map((_, j) => (
                    <Star key={j} size={12} className="fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed font-light mb-4 italic">&ldquo;{a.texte}&rdquo;</p>
                <div className="border-t border-gray-50 pt-3 flex justify-between items-end">
                  <div>
                    <div className="font-semibold text-[#1C1C1C] text-sm">{a.nom}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{a.lieu} · {a.projet}</div>
                  </div>
                  <span className="text-gray-300 text-xs">{a.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liens vers réalisations */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Voir aussi</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/realisations', label: 'Photos de nos réalisations' },
              { href: '/renovation-appartement-paris', label: 'Rénovation Paris' },
              { href: '/renovation-salle-de-bain-paris', label: 'Salle de bain' },
              { href: '/renovation-cuisine-paris', label: 'Cuisine' },
              { href: '/renovation-appartement-haussmannien-paris', label: 'Haussmannien' },
              { href: '/renovation-studio-paris', label: 'Studio' },
              { href: '/tarifs', label: 'Nos tarifs' },
              { href: '/faq', label: 'FAQ' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs border border-gray-200 rounded px-3 py-1.5 text-gray-600 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-3xl font-bold text-white mb-4">
          Votre projet, c&apos;est le prochain
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">
          Devis gratuit sous 48h — nous intervenons dans tout Paris et l&apos;Île-de-France.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors"
        >
          Demander un devis <ArrowRight size={16} />
        </Link>
      </section>
    </>
  )
}
