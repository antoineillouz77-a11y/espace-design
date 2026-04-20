import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tarifs Rénovation Paris 2025 — Prix au m² par Type de Travaux | Espace Design',
  description:
    'Prix et tarifs de rénovation à Paris en 2025 : peinture, parquet, salle de bain, cuisine, électricité, plomberie. Grilles tarifaires claires et devis gratuit.',
  keywords: [
    'tarifs rénovation Paris',
    'prix rénovation appartement Paris',
    'coût travaux Paris',
    'prix peinture appartement Paris',
    'tarif artisan rénovation Paris 2025',
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Tarifs', item: 'https://espacedesignparis.fr/tarifs' },
  ],
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation complète à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Une rénovation complète à Paris coûte entre 1 000 et 3 000 €/m² selon le niveau de finition. Pour un appartement de 50 m², prévoyez 50 000 à 150 000 €. Le prix dépend de l\'état de départ, des matériaux choisis et des travaux à réaliser (électricité, plomberie, isolation).',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte la peinture d\'un appartement à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La peinture d\'un appartement à Paris coûte entre 20 et 45 €/m² de surface peinte, préparation incluse. Pour un T3 de 70 m², comptez 5 000 à 10 000 € pour une rénovation peinture complète (murs, plafonds, boiseries). Tarif variable selon l\'état des murs et la qualité des peintures.',
      },
    },
    {
      '@type': 'Question',
      name: 'Prix d\'une rénovation de salle de bain à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La rénovation d\'une salle de bain à Paris coûte entre 5 000 et 20 000 € selon la surface et les prestations. Une salle de bain de 5 m² avec douche italienne, carrelage et meuble vasque : 7 000 à 12 000 €. Budget main d\'œuvre seule : 2 000 à 6 000 €.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quel est le tarif d\'un parqueteur à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La pose de parquet à Paris coûte entre 25 et 80 €/m² main d\'œuvre selon le type de pose (flottant, collé, cloué). La vitrification d\'un parquet ancien coûte 15 à 30 €/m². Pour 50 m² de parquet massif posé et vitrifié, prévoyez 3 500 à 7 000 € de main d\'œuvre.',
      },
    },
  ],
}

const prestations = [
  {
    categorie: 'Peinture & Enduits',
    items: [
      { label: 'Peinture murs (2 couches)', prix: '20–35 €/m²', detail: 'Préparation incluse' },
      { label: 'Peinture plafond', prix: '25–40 €/m²', detail: 'Lessivage + 2 couches' },
      { label: 'Enduit de finition', prix: '30–55 €/m²', detail: 'Toile de verre ou enduit lissé' },
      { label: 'Béton ciré mural', prix: '80–150 €/m²', detail: 'Application 3 couches + cire' },
      { label: 'Tadelakt', prix: '120–200 €/m²', detail: 'Finition artisanale' },
    ],
  },
  {
    categorie: 'Sols',
    items: [
      { label: 'Parquet flottant posé', prix: '25–45 €/m²', detail: 'Main d\'œuvre uniquement' },
      { label: 'Parquet massif posé + vitrifié', prix: '50–90 €/m²', detail: 'Main d\'œuvre uniquement' },
      { label: 'Vitrification parquet ancien', prix: '15–30 €/m²', detail: 'Ponçage + 3 couches' },
      { label: 'Carrelage standard posé', prix: '40–70 €/m²', detail: 'Joints inclus' },
      { label: 'Carrelage grand format', prix: '70–120 €/m²', detail: 'Format 60×60 et plus' },
      { label: 'Béton ciré sol', prix: '90–160 €/m²', detail: '5 couches + protection' },
    ],
  },
  {
    categorie: 'Salle de bain',
    items: [
      { label: 'Rénovation complète (5–7 m²)', prix: '7 000–15 000 €', detail: 'Fournitures standard incluses' },
      { label: 'Douche italienne à la place baignoire', prix: '3 500–7 000 €', detail: 'Plomberie + carrelage + receveur' },
      { label: 'Pose sanitaires (WC, lavabo)', prix: '500–1 200 € pièce', detail: 'Main d\'œuvre seule' },
      { label: 'Carrelage salle de bain', prix: '50–100 €/m²', detail: 'Sol + murs, joints inclus' },
    ],
  },
  {
    categorie: 'Cuisine',
    items: [
      { label: 'Rénovation cuisine (pose)', prix: '2 500–6 000 €', detail: 'Main d\'œuvre pose meuble + plan de travail' },
      { label: 'Crédence carrelage', prix: '60–120 €/m²', detail: 'Pose sur support existant' },
      { label: 'Plan de travail béton ciré', prix: '200–400 €/ml', detail: 'Application sur plan existant' },
      { label: 'Abattage mur non porteur', prix: '500–1 500 €', detail: 'Démolition + rebouchage' },
    ],
  },
  {
    categorie: 'Électricité',
    items: [
      { label: 'Réfection électrique complète (50 m²)', prix: '4 000–8 000 €', detail: 'Tableau + prises + éclairage NF C 15-100' },
      { label: 'Tableau électrique neuf', prix: '800–1 800 €', detail: 'Pose + raccordement' },
      { label: 'Point lumineux installé', prix: '80–200 €', detail: 'Pose + câblage' },
      { label: 'Prise ou interrupteur', prix: '50–150 €', detail: 'Main d\'œuvre' },
    ],
  },
  {
    categorie: 'Plomberie',
    items: [
      { label: 'Réfection plomberie complète (50 m²)', prix: '5 000–12 000 €', detail: 'Colonnes + distribution' },
      { label: 'Chauffe-eau posé', prix: '400–900 €', detail: 'Main d\'œuvre seule' },
      { label: 'Remplacement robinetterie', prix: '150–400 € pièce', detail: 'Main d\'œuvre' },
    ],
  },
  {
    categorie: 'Cloisons & Plâtrerie',
    items: [
      { label: 'Cloison placo posée', prix: '40–80 €/m²', detail: 'Double plaque, bande et enduit' },
      { label: 'Faux-plafond avec spot', prix: '60–120 €/m²', detail: 'Ossature + plaques + finition' },
      { label: 'Enduit de lissage mur', prix: '20–40 €/m²', detail: 'Préparation fine' },
    ],
  },
  {
    categorie: 'Menuiserie sur mesure',
    items: [
      { label: 'Dressing sur mesure', prix: '600–1 500 €/ml', detail: 'Corps + portes coulissantes' },
      { label: 'Placard intégré', prix: '400–900 €/ml', detail: 'Rangements intérieurs inclus' },
      { label: 'Verrière intérieure', prix: '3 000–8 000 €', detail: 'Acier + vitrage + pose' },
      { label: 'Porte coulissante', prix: '500–1 500 €', detail: 'Fourniture + pose' },
    ],
  },
]

const forfaits = [
  {
    label: 'Rafraîchissement',
    desc: 'Peinture, petites réparations, remplacement revêtements de sol',
    prix: '500–800 €/m²',
    color: '#FAFAF8',
  },
  {
    label: 'Rénovation partielle',
    desc: 'Cuisine ou salle de bain + peinture + sols',
    prix: '800–1 500 €/m²',
    color: '#F2F2EE',
  },
  {
    label: 'Rénovation complète',
    desc: 'Tous corps de métier : électricité, plomberie, cloisons, finitions',
    prix: '1 500–2 500 €/m²',
    color: '#FAFAF8',
  },
  {
    label: 'Rénovation haut de gamme',
    desc: 'Matériaux premium, sur-mesure intégral, supervision décoratrice',
    prix: '2 500–4 000 €/m²',
    color: '#F2F2EE',
  },
]

export default function TarifsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Transparence tarifaire</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
          Tarifs rénovation Paris 2025
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Prix au m² par type de travaux — peinture, sols, salle de bain, cuisine, électricité, plomberie.
          Grilles indicatives mises à jour 2025.
        </p>
      </section>

      {/* Intro */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Comment sont calculés nos tarifs ?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Les prix de rénovation à Paris varient selon plusieurs facteurs : l&apos;état de départ du logement,
            la surface à traiter, les matériaux choisis, et l&apos;accessibilité du chantier. Nos tarifs
            incluent toujours la main d&apos;œuvre qualifiée et la protection des zones non rénovées.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Les grilles ci-dessous représentent nos fourchettes de prix <strong>main d&apos;œuvre uniquement</strong>,
            sauf mention contraire. Les fournitures (carrelage, parquet, peinture, sanitaires) sont
            facturées en plus selon vos choix.
          </p>
          <div className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-5 mt-6">
            <div className="flex items-start gap-3">
              <CheckCircle size={16} className="text-[#B8960C] mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-600">
                <strong>Devis gratuit et sans engagement</strong> sous 48h après visite — le seul moyen
                d&apos;obtenir un prix précis pour votre projet spécifique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Forfaits au m² */}
      <section className="py-14 bg-[#FAFAF8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-2">
            Prix global au m² selon le niveau de rénovation
          </h2>
          <p className="text-gray-500 text-sm mb-8 font-light">Fournitures + main d&apos;œuvre, toutes taxes incluses</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {forfaits.map((f) => (
              <div key={f.label} className="bg-white rounded-lg border border-gray-100 p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-[#1C1C1C] text-base">{f.label}</h3>
                  <span className="text-[#B8960C] font-semibold text-sm ml-4 text-right">{f.prix}</span>
                </div>
                <p className="text-gray-500 text-sm font-light leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tableau détaillé par prestation */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-8">
            Tarifs détaillés par prestation
          </h2>
          <div className="space-y-10">
            {prestations.map((cat) => (
              <div key={cat.categorie}>
                <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4 pb-2 border-b border-gray-100">
                  {cat.categorie}
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left">
                        <th className="text-gray-500 font-light text-xs uppercase tracking-wider pb-3 pr-6">Prestation</th>
                        <th className="text-gray-500 font-light text-xs uppercase tracking-wider pb-3 pr-6 text-right">Prix indicatif</th>
                        <th className="text-gray-500 font-light text-xs uppercase tracking-wider pb-3">Détail</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {cat.items.map((item) => (
                        <tr key={item.label}>
                          <td className="py-3 pr-6 text-gray-700 font-medium">{item.label}</td>
                          <td className="py-3 pr-6 text-[#B8960C] font-semibold text-right whitespace-nowrap">{item.prix}</td>
                          <td className="py-3 text-gray-500 font-light">{item.detail}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-8">Questions fréquentes sur nos tarifs</h2>
          <div className="space-y-4">
            {schemaFaq.mainEntity.map((item) => (
              <div key={item.name} className="bg-white rounded-lg border border-gray-100 p-6">
                <h3 className="font-semibold text-[#1C1C1C] mb-2 text-sm">{item.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liens vers articles blog */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Guides prix détaillés</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/blog/prix-renovation-appartement-paris', label: 'Prix rénovation appartement Paris' },
              { href: '/blog/renovation-salle-de-bain-paris', label: 'Prix salle de bain' },
              { href: '/blog/peinture-appartement-paris', label: 'Prix peinture appartement' },
              { href: '/blog/renovation-parquet-paris', label: 'Prix parquet Paris' },
              { href: '/blog/carrelage-appartement-paris', label: 'Prix carrelage appartement' },
              { href: '/blog/electricite-appartement-paris', label: 'Prix électricité appartement' },
              { href: '/blog/renovation-2-pieces-paris', label: 'Budget 2 pièces Paris' },
              { href: '/blog/renovation-3-pieces-paris', label: 'Budget 3 pièces Paris' },
              { href: '/blog/budget-renovation-paris-2025', label: 'Budget rénovation 2025' },
              { href: '/blog/menuiserie-sur-mesure-paris', label: 'Prix menuiserie sur mesure' },
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
          Obtenez votre devis personnalisé
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">
          Les tarifs ci-dessus sont indicatifs. Contactez-nous pour un devis précis
          adapté à votre projet, gratuit et sans engagement.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors"
        >
          Devis gratuit sous 48h <ArrowRight size={16} />
        </Link>
      </section>
    </>
  )
}
