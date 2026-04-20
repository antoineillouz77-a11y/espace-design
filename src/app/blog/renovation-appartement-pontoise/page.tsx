import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Pontoise', item: 'https://espacedesignparis.fr/blog/renovation-appartement-pontoise' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Pontoise (95) — Guide complet 2025",
  description: "Rénovez votre appartement à Pontoise avec Espace Design : cuisine, salle de bain, parquet, peinture. Devis gratuit sous 48h.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-04-20',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-pontoise' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel budget pour rénover un appartement à Pontoise ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "À Pontoise, une rénovation complète coûte entre 700 et 1 200 €/m². Pour un T3 de 65 m², le budget varie entre 45 000 et 78 000 € selon l'état du logement et les matériaux choisis.",
      },
    },
    {
      '@type': 'Question',
      name: "Intervenez-vous à Pontoise pour des travaux partiels ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, Espace Design réalise des rénovations partielles à Pontoise : salle de bain, cuisine, revêtements de sol, peinture, cloisons. Chaque projet bénéficie d'un devis gratuit et personnalisé.",
      },
    },
    {
      '@type': 'Question',
      name: "Êtes-vous disponibles rapidement à Pontoise ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Nous intervenons à Pontoise avec un devis sous 48h et pouvons généralement démarrer les travaux dans un délai de 2 à 4 semaines selon la charge de l'équipe.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Pontoise (95) | Espace Design',
  description: "Rénovez votre appartement à Pontoise avec Espace Design : cuisine, salle de bain, parquet, peinture. Devis gratuit sous 48h.",
}

export default function RenovationPontoise() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
          Rénovation appartement à Pontoise
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Préfecture du Val-d&apos;Oise et ville au riche patrimoine médiéval, Pontoise attire de nombreux acquéreurs
          souhaitant rénover des appartements anciens pour les moderniser ou les mettre en valeur. Espace Design
          accompagne vos projets de rénovation intérieure à Pontoise et dans l&apos;agglomération de Cergy-Pontoise.
        </p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Rénover son appartement à Pontoise (95)
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Pontoise concentre un parc immobilier varié, mêlant immeubles des années 1970 issus du développement de
            la ville nouvelle et constructions plus récentes autour du centre historique. Les propriétaires y
            trouvent une opportunité réelle de valorisation : un appartement rénové avec soin peut voir sa valeur
            progresser significativement sur ce marché en mutation, porté par la proximité de CY Cergy Paris
            Université et du pôle d&apos;affaires de Cergy-Pontoise.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Espace Design intervient à Pontoise pour des rénovations complètes ou partielles, en pilotant
            l&apos;ensemble des corps de métier : plâtrerie, carrelage, parquet, peinture, électricité et
            plomberie. Un seul interlocuteur, une coordination centralisée et un rendu soigné. Devis gratuit
            remis sous 48h.
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Pontoise</h2>
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
