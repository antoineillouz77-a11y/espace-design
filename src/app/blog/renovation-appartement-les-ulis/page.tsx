import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Les Ulis', item: 'https://espacedesignparis.fr/blog/renovation-appartement-les-ulis' },
  ],
}
const schemaArticle = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: "Rénovation appartement Les Ulis (91) — Guide complet 2025",
  description: "Rénovez votre appartement aux Ulis avec Espace Design : cuisine, salle de bain, parquet, peinture. Devis gratuit sous 48h.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15', dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-les-ulis' },
}
const schemaFAQ = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Quel budget pour rénover aux Ulis ?', acceptedAnswer: { '@type': 'Answer', text: "Aux Ulis, une rénovation complète coûte entre 650 et 1 100 €/m². Pour un T3 de 65 m², prévoyez entre 42 000 et 72 000 €." } },
    { '@type': 'Question', name: 'Quels travaux réalisez-vous aux Ulis ?', acceptedAnswer: { '@type': 'Answer', text: "Espace Design intervient aux Ulis pour cuisine, salle de bain, parquet, peinture, cloisons, isolation, électricité et plomberie." } },
    { '@type': 'Question', name: 'Proposez-vous un déplacement gratuit aux Ulis ?', acceptedAnswer: { '@type': 'Answer', text: "Oui, le déplacement est gratuit dans tout l'Essonne (91). Devis gratuit sous 48h après votre demande." } },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Les Ulis (91) | Espace Design',
  description: 'Rénovez votre appartement aux Ulis avec Espace Design : cuisine, salle de bain, parquet, peinture. Devis gratuit sous 48h.',
}

export default function RenovationLesUlis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
          Rénovation appartement aux Ulis
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Artisan qualifié en Essonne — cuisine, salle de bain, parquet et peinture aux Ulis. Devis gratuit sous 48h, assurance décennale incluse.
        </p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Rénover son appartement aux Ulis : ce qu'il faut savoir
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Les Ulis est une ville nouvelle de l'Essonne caractérisée par un parc résidentiel dense construit principalement dans les années 1970 et 1980. Ces logements, souvent spacieux, nécessitent aujourd'hui une remise au goût du jour : isolation thermique, modernisation des salles de bain, remplacement des sols, mise aux normes électriques. Espace Design accompagne les propriétaires et investisseurs des Ulis dans tous leurs projets de rénovation.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Notre équipe prend en charge la totalité des travaux, du gros oeuvre aux finitions, en passant par la plomberie, l'électricité, le carrelage et la peinture. Nous intervenons aussi bien pour des rénovations légères que pour des transformations complètes avec redistribution des espaces. Le tarif moyen constaté aux Ulis est compris entre 650 et 1 100 €/m² selon l'ampleur du projet et la gamme des matériaux sélectionnés.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Rénovation complète ou partielle',
              'Cuisine et salle de bain',
              'Parquet et carrelage',
              'Peinture et revêtements',
              'Électricité et plomberie',
              'Devis gratuit sous 48h',
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

      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet aux Ulis</h2>
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
            <Phone size={16} />06 11 78 38 67
          </a>
        </div>
      </section>
    </>
  )
}
