import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.espacedesignparis.fr/blog' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Devis rénovation appartement Paris',
      item: 'https://www.espacedesignparis.fr/blog/devis-renovation-appartement-paris',
    },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Obtenir un devis de rénovation d\'appartement à Paris : guide complet 2025',
  description:
    'Comment obtenir et comparer des devis de rénovation d\'appartement à Paris : pièces à préparer, éléments à vérifier, prix moyens et pièges à éviter.',
  author: { '@type': 'Organization', name: 'Espace Design Paris' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design Paris',
    logo: { '@type': 'ImageObject', url: 'https://www.espacedesignparis.fr/logo.png' },
  },
  datePublished: '2025-04-01',
  dateModified: '2025-04-01',
  mainEntityOfPage: 'https://www.espacedesignparis.fr/blog/devis-renovation-appartement-paris',
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien de devis faut-il demander pour une rénovation à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Il est recommandé d\'obtenir au moins 3 devis de professionnels différents. Cela permet de comparer les prix, les délais et la qualité du projet proposé. Méfiez-vous des devis anormalement bas (moins de 500 €/m² pour une rénovation complète à Paris) qui peuvent cacher des impasses ou l\'absence d\'assurance décennale.',
      },
    },
    {
      '@type': 'Question',
      name: 'Que doit contenir un devis de rénovation d\'appartement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un devis sérieux doit mentionner : la désignation précise de chaque prestation, les quantités et unités, le prix unitaire HT et TTC, la TVA applicable (5,5 % ou 10 % selon les travaux), le délai d\'exécution, les conditions de paiement et les coordonnées complètes de l\'entreprise avec son numéro SIRET.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quel est le prix moyen d\'une rénovation complète à Paris en 2025 ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'À Paris, une rénovation complète (sol, peinture, cuisine, salle de bain, électricité) coûte entre 800 et 1 500 €/m² TTC selon l\'état initial du bien et le niveau de finition choisi. Une rénovation légère (peinture + sols) se situe entre 200 et 400 €/m².',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Devis rénovation appartement Paris 2025 – Guide complet | Espace Design Paris',
  description:
    'Comment obtenir un bon devis de rénovation d\'appartement à Paris : éléments à vérifier, prix 2025, erreurs à éviter. Demandez votre devis gratuit.',
}

export default function DevisRenovationAppartementParis() {
  const checks = [
    'Préparer les plans et la surface exacte de chaque pièce',
    'Lister précisément les travaux souhaités (sols, peinture, cuisine, etc.)',
    'Vérifier le numéro SIRET et l\'assurance décennale de l\'entreprise',
    'S\'assurer que le devis est détaillé poste par poste',
    'Confirmer le taux de TVA applicable (5,5 % ou 10 %)',
    'Exiger un planning prévisionnel avec les délais d\'intervention',
  ]

  const faqs = schemaFAQ.mainEntity

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
        <div className="max-w-3xl mx-auto">
          <p className="text-[#C8A97E] text-sm font-semibold uppercase tracking-widest mb-4">
            Guide devis
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Devis rénovation appartement à Paris
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comment préparer, lire et comparer vos devis pour éviter les mauvaises surprises et
            trouver le bon artisan parisien.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">
            Préparer sa demande de devis comme un professionnel
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            À Paris, le marché de la rénovation est dense et les prix très variables. Pour obtenir
            des devis comparables, il faut préparer un cahier des charges précis avant de
            contacter les entreprises. Notez la surface de chaque pièce, l'état actuel des
            revêtements, les équipements à remplacer et vos souhaits de matériaux. Plus votre
            demande est détaillée, plus les devis reçus seront fiables et comparables. Un devis
            établi sur une simple visite rapide sans documents est souvent sous-évalué.
          </p>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Vérifiez systématiquement que chaque devis liste les prestations poste par poste : la
            dépose de l'existant, la fourniture et pose des matériaux, les finitions et le
            nettoyage de fin de chantier. À Paris, la gestion des déchets de chantier (benne,
            évacuation) représente un surcoût non négligeable souvent omis dans les devis d'appel.
            Assurez-vous aussi que l'entreprise dispose d'une assurance décennale en cours de
            validité — demandez l'attestation, ne vous contentez pas d'une promesse verbale.
          </p>

          {/* Price table */}
          <h3 className="text-xl font-bold text-[#1C1C1C] mb-4">
            Prix indicatifs rénovation à Paris en 2025 (€/m²)
          </h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-[#1C1C1C] text-white">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold">Type de rénovation</th>
                  <th className="py-3 px-4 text-right font-semibold">Prix moyen (TTC/m²)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ['Rénovation légère (peinture + sols)', '200 – 400 €'],
                  ['Rénovation partielle (cuisine ou salle de bain)', '400 – 700 €'],
                  ['Rénovation complète standard', '800 – 1 100 €'],
                  ['Rénovation complète haut de gamme', '1 100 – 1 500 €'],
                  ['Rénovation totale avec restructuration', '1 500 – 2 500 €'],
                ].map(([label, price]) => (
                  <tr key={label} className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-700">{label}</td>
                    <td className="py-3 px-4 text-right font-medium text-[#1C1C1C]">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Checklist */}
          <h3 className="text-xl font-bold text-[#1C1C1C] mb-4">
            Ce qu'il faut vérifier dans chaque devis
          </h3>
          <ul className="space-y-3 mb-10">
            {checks.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="text-[#C8A97E] mt-0.5 shrink-0" size={20} />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

          {/* FAQ */}
          <h3 className="text-xl font-bold text-[#1C1C1C] mb-6">Questions fréquentes</h3>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.name} className="border-l-4 border-[#C8A97E] pl-4">
                <p className="font-semibold text-[#1C1C1C] mb-2">{faq.name}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Recevez un devis détaillé et transparent
          </h2>
          <p className="text-gray-300 mb-8">
            Espace Design Paris établit des devis complets poste par poste, avec planning
            et attestation d'assurance décennale inclus. Gratuit et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#C8A97E] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#b8976b] transition-colors"
            >
              Devis gratuit <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+33611783867"
              className="inline-flex items-center justify-center gap-2 border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#1C1C1C] transition-colors"
            >
              <Phone size={18} /> 06 11 78 38 67
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
