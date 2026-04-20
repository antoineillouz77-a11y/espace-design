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
      name: 'Rénovation appartement senior Paris',
      item: 'https://www.espacedesignparis.fr/blog/renovation-appartement-senior-paris',
    },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation appartement senior à Paris : accessibilité, sécurité et confort',
  description:
    'Guide complet pour adapter un appartement parisien aux besoins des seniors : portes larges, douche à l\'italienne, rampes, éclairage et aides financières MaPrimeAdapt\'.',
  author: { '@type': 'Organization', name: 'Espace Design Paris' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design Paris',
    logo: { '@type': 'ImageObject', url: 'https://www.espacedesignparis.fr/logo.png' },
  },
  datePublished: '2025-04-01',
  dateModified: '2025-04-01',
  mainEntityOfPage: 'https://www.espacedesignparis.fr/blog/renovation-appartement-senior-paris',
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quelle largeur de porte est recommandée pour un appartement senior à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Une largeur de passage utile d\'au moins 83 cm (porte de 90 cm) est recommandée pour permettre le passage d\'un fauteuil roulant ou d\'un déambulateur. Dans les appartements haussmanniens parisiens, les encadrements sont souvent larges, ce qui facilite les adaptations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelles aides financières existent pour adapter un logement senior à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MaPrimeAdapt\' (Anah) prend en charge jusqu\'à 70 % des travaux d\'adaptation pour les ménages modestes. L\'ANAH, les caisses de retraite (CNAV, AGIRC-ARRCO), l\'Action Logement et la Mairie de Paris proposent également des aides complémentaires. Le Crédit d\'Impôt pour l\'Adaptation du Logement (CILPA) est aussi mobilisable.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte l\'installation d\'une douche à l\'italienne pour senior à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le remplacement d\'une baignoire par une douche à l\'italienne adaptée (barres d\'appui, siège escamotable, bonde de sol) coûte entre 3 500 € et 8 000 € à Paris, pose et matériaux compris. Le prix varie selon la surface, les carreaux choisis et les contraintes de plomberie.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement senior Paris – Accessibilité & PMR | Espace Design Paris',
  description:
    'Adaptez votre appartement parisien pour bien vieillir chez vous : douche italienne, portes larges, barres d\'appui, éclairage adapté. Devis gratuit.',
}

export default function RenovationAppartementSeniorParis() {
  const checks = [
    'Élargissement des portes (passage utile 83 cm minimum)',
    'Douche à l\'italienne avec siège escamotable et barres d\'appui',
    'Suppression des ressauts et seuils de porte',
    'Éclairage automatique détection de mouvement',
    'Cuisine et salle de bain accessibles en position assise',
    'Revêtements de sol antidérapants dans les pièces humides',
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
            Guide senior
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Rénovation appartement senior à Paris
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Adapter votre logement pour vieillir sereinement chez vous : accessibilité, sécurité et
            confort sans sacrifier le style parisien.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">
            Pourquoi adapter son appartement parisien au vieillissement ?
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            La plupart des appartements parisiens, construits aux XIX<sup>e</sup> et XX<sup>e</sup>
            siècles, n'ont pas été conçus pour la mobilité réduite : baignoires hautes, couloirs
            étroits, interrupteurs mal placés. Pourtant, 85 % des seniors souhaitent rester chez
            eux le plus longtemps possible. Adapter son logement en amont — avant qu'une chute ou
            une perte d'autonomie ne l'impose — est bien plus économique et moins stressant qu'une
            rénovation d'urgence.
          </p>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Espace Design Paris accompagne les propriétaires parisiens dans la conception de
            travaux d'adaptation : remplacement de la baignoire par une douche à l'italienne de
            plain-pied, élargissement des portes à 90 cm, suppression des seuils, installation de
            barres d'appui discrètes, éclairage à détection de mouvement et revêtements antidérapants.
            Nous veillons à intégrer ces équipements dans une esthétique soignée, afin que votre
            appartement reste chaleureux et valorisé.
          </p>

          {/* Price table */}
          <h3 className="text-xl font-bold text-[#1C1C1C] mb-4">
            Budgets indicatifs – Travaux d'adaptation senior à Paris
          </h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-[#1C1C1C] text-white">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold">Travaux</th>
                  <th className="py-3 px-4 text-right font-semibold">Coût estimé (TTC)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ['Douche italienne à la place d\'une baignoire', '3 500 – 8 000 €'],
                  ['Élargissement d\'une porte (90 cm)', '800 – 1 800 €'],
                  ['Barres d\'appui WC + douche (kit)', '300 – 600 €'],
                  ['Suppression de seuils (par porte)', '150 – 400 €'],
                  ['Éclairage détecteur de mouvement (par pièce)', '200 – 500 €'],
                  ['Monte-escalier (si duplex)', '3 000 – 6 000 €'],
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
            Les 6 aménagements prioritaires
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
            Demandez votre devis gratuit
          </h2>
          <p className="text-gray-300 mb-8">
            Nous analysons votre appartement et vous proposons un plan d'adaptation sur mesure,
            avec prise en charge des démarches de subventions.
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
