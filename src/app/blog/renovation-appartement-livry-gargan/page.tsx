import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Livry-Gargan', item: 'https://espacedesignparis.fr/blog/renovation-appartement-livry-gargan' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Livry-Gargan (93) — Guide complet 2025",
  description: "Rénovez votre appartement à Livry-Gargan avec Espace Design : cuisine, salle de bain, parquet, peinture. Devis gratuit sous 48h.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-livry-gargan' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel budget pour rénover un appartement à Livry-Gargan ?',
      acceptedAnswer: { '@type': 'Answer', text: "À Livry-Gargan, une rénovation complète coûte entre 700 et 1 100 €/m². Pour un T3 de 60 m², le budget varie entre 42 000 et 66 000 € selon l'état du logement et les matériaux choisis." },
    },
    {
      '@type': 'Question',
      name: 'Intervenez-vous pour des appartements en copropriété à Livry-Gargan ?',
      acceptedAnswer: { '@type': 'Answer', text: "Oui, Espace Design intervient dans tous les types de copropriétés à Livry-Gargan. Nous prenons en charge les démarches auprès du syndic et coordonnons tous les corps de métier pour un chantier fluide." },
    },
    {
      '@type': 'Question',
      name: 'Comment obtenir un devis à Livry-Gargan ?',
      acceptedAnswer: { '@type': 'Answer', text: "Remplissez notre formulaire en ligne ou appelez-nous directement. Nous intervenons à Livry-Gargan et dans tout le 93 pour un devis gratuit sous 48h." },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Livry-Gargan (93) | Espace Design',
  description: 'Rénovez votre appartement à Livry-Gargan avec Espace Design : cuisine, salle de bain, parquet, peinture. Devis gratuit sous 48h.',
}

export default function RenovationLivryGargan() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement à Livry-Gargan</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Ville verdoyante à l'est de la Seine-Saint-Denis, Livry-Gargan séduit par son cadre de vie résidentiel
          et ses prix immobiliers accessibles. Espace Design intervient à Livry-Gargan pour rénover votre appartement
          et en faire un espace qui vous ressemble, dans le respect de votre budget et de vos délais.
        </p>
      </section>
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Rénover à Livry-Gargan : un cadre résidentiel à valoriser</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Livry-Gargan se distingue dans le 93 par son caractère résidentiel marqué, avec une proportion
            élevée de maisons individuelles et de petites copropriétés. Le parc locatif y est moins saturé
            qu'ailleurs dans le département, ce qui en fait une destination appréciée des familles cherchant
            à acquérir un premier logement. La rénovation d'un appartement y est souvent synonyme d'un gain
            de confort immédiat et d'une valorisation sensible à la revente ou à la location.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Espace Design adapte ses prestations à chaque type de bien à Livry-Gargan : des studios à remettre
            entièrement à neuf pour la location aux grands appartements familiaux nécessitant une réorganisation
            des espaces. Nos artisans se déplacent sur site pour évaluer votre projet et vous proposer un devis
            détaillé, sans engagement, sous 48 heures.
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Livry-Gargan</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">
            Devis gratuit <ArrowRight size={16} />
          </Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors">
            <Phone size={16} />06 11 78 38 67
          </a>
        </div>
      </section>
    </>
  )
}
