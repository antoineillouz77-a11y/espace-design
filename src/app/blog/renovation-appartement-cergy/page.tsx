import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Cergy', item: 'https://espacedesignparis.fr/blog/renovation-appartement-cergy' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Cergy (95) — Guide complet 2025",
  description: "Rénovez votre appartement à Cergy avec Espace Design : cuisine, salle de bain, parquet, peinture. Devis gratuit sous 48h.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-cergy' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel budget pour rénover un appartement à Cergy ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "À Cergy, une rénovation complète coûte entre 700 et 1 200 €/m². Pour un T3 de 65 m², le budget varie entre 45 000 et 78 000 € selon les matériaux et l'état du logement.",
      },
    },
    {
      '@type': 'Question',
      name: "Intervenez-vous à Cergy pour des travaux partiels ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, Espace Design réalise des rénovations partielles à Cergy : salle de bain, cuisine, revêtements de sol, peinture, cloisons. Chaque projet bénéficie d'un devis gratuit et personnalisé.",
      },
    },
    {
      '@type': 'Question',
      name: "Êtes-vous disponibles rapidement à Cergy ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Nous intervenons à Cergy avec un devis sous 48h et pouvons généralement démarrer les travaux dans un délai de 2 à 4 semaines selon la charge de l'équipe.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Cergy (95) | Espace Design',
  description: "Rénovez votre appartement à Cergy avec Espace Design : cuisine, salle de bain, parquet, peinture. Devis gratuit sous 48h.",
}

export default function RenovationCergy() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
          Rénovation appartement à Cergy
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Ville nouvelle du Val-d'Oise et pôle économique majeur de l'Île-de-France, Cergy concentre un vaste parc
          immobilier en constante évolution. Espace Design y accompagne propriétaires et bailleurs pour leurs projets
          de rénovation intérieure.
        </p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Rénover son appartement à Cergy (95)
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Construite dans les années 1970 dans le cadre de la politique des villes nouvelles, Cergy abrite une grande
            proportion de logements collectifs qui nécessitent aujourd'hui une modernisation en profondeur. Les
            propriétaires soucieux de valoriser leur patrimoine y trouvent un marché porteur, notamment grâce à la
            présence de CY Cergy Paris Université et de nombreuses entreprises du secteur tertiaire.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Espace Design intervient à Cergy et dans toute la Cergy-Pontoise pour des rénovations complètes ou
            ponctuelles. Nos artisans qualifiés traitent l'ensemble des corps de métier du bâtiment — plâtrerie,
            carrelage, parquet, peinture, électricité, plomberie — avec une coordination centralisée et un rendu
            soigné. Devis remis sous 48h.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Rénovation complète ou partielle',
              'Cuisine et salle de bain sur mesure',
              'Parquet massif et stratifié',
              'Peinture et revêtements muraux',
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Cergy</h2>
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
