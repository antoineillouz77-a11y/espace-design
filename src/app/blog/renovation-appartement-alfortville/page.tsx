import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Alfortville', item: 'https://espacedesignparis.fr/blog/renovation-appartement-alfortville' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Alfortville (94) — Guide complet 2025",
  description: "Rénovez votre appartement à Alfortville avec Espace Design : cuisine, salle de bain, parquet, peinture. Devis gratuit sous 48h.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-alfortville' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel budget pour rénover un appartement à Alfortville ?',
      acceptedAnswer: { '@type': 'Answer', text: "À Alfortville, une rénovation complète coûte entre 750 et 1 350 €/m². Pour un appartement de 65 m², prévoyez entre 48 000 et 88 000 € selon l'état du bien et les matériaux." },
    },
    {
      '@type': 'Question',
      name: 'Quels travaux réalisez-vous à Alfortville ?',
      acceptedAnswer: { '@type': 'Answer', text: "Espace Design réalise à Alfortville tous types de travaux de rénovation : cuisine, salle de bain, parquet, peinture, isolation, électricité, plomberie et cloisons." },
    },
    {
      '@type': 'Question',
      name: 'Comment obtenir un devis à Alfortville ?',
      acceptedAnswer: { '@type': 'Answer', text: "Contactez-nous via le formulaire ou par téléphone. Nous proposons un devis gratuit sous 48h avec déplacement gratuit dans tout le Val-de-Marne (94)." },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Alfortville (94) | Espace Design',
  description: "Rénovez votre appartement à Alfortville avec Espace Design : cuisine, salle de bain, parquet, peinture. Devis gratuit sous 48h.",
}

export default function RenovationAlfortville() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement à Alfortville</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Alfortville, ville dynamique du Val-de-Marne aux portes de Paris, attire de nombreux propriétaires souhaitant moderniser leur logement. Espace Design accompagne vos projets de rénovation avec un savoir-faire artisanal reconnu.</p>
      </section>
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Rénover son appartement à Alfortville : un investissement rentable</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Alfortville (94140) est une commune prisée du Val-de-Marne, idéalement située au confluent de la Seine et de la Marne. Son parc immobilier mêle immeubles haussmanniens, résidences des années 70 et logements récents, offrant de nombreuses opportunités de rénovation pour revaloriser un bien avant revente ou pour améliorer son confort de vie au quotidien.</p>
          <p className="text-gray-600 leading-relaxed mb-6">Espace Design intervient régulièrement à Alfortville pour des rénovations complètes ou ciblées : refonte de cuisine, transformation de salle de bain, pose de parquet, peinture intérieure et redistribution de l'espace. Notre équipe se déplace gratuitement pour évaluer votre projet et vous remettre un devis détaillé sous 48 heures.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Rénovation complète ou partielle',
              'Cuisine et salle de bain sur mesure',
              'Parquet massif et stratifié',
              'Peinture et revêtements muraux',
              'Électricité et plomberie',
              'Devis gratuit sous 48h',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2"><CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" /><span className="text-sm text-gray-600">{p}</span></div>
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Alfortville</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
