import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Renovation appartement Romainville', item: 'https://espacedesignparis.fr/blog/renovation-appartement-romainville' },
  ],
}
const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Renovation appartement Romainville (93) — Guide complet 2025",
  description: "Renovez votre appartement a Romainville avec Espace Design : cuisine, salle de bain, parquet, peinture. Devis gratuit sous 48h.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-romainville' },
}
const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel budget pour renover un appartement a Romainville ?',
      acceptedAnswer: { '@type': 'Answer', text: 'A Romainville, une renovation complete coute entre 650 et 1 100 euros/m2. Pour un T3 de 60 m2, comptez entre 39 000 et 66 000 euros.' },
    },
    {
      '@type': 'Question',
      name: 'Intervenez-vous en Seine-Saint-Denis pour tous les travaux ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, Espace Design realise dans tout le 93 : cuisine, salle de bain, parquet, peinture, cloisons, isolation, electricite et plomberie.' },
    },
    {
      '@type': 'Question',
      name: 'Comment obtenir un devis a Romainville ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Contactez-nous par formulaire ou telephone. Devis gratuit sous 48h, deplacement gratuit dans tout le 93.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Renovation appartement Romainville (93) | Espace Design',
  description: 'Renovez votre appartement a Romainville avec Espace Design : cuisine, salle de bain, parquet, peinture. Devis gratuit sous 48h.',
}

export default function RenovationRomainville() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Renovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Renovation appartement a Romainville</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Artisan renovation en Seine-Saint-Denis — cuisine, salle de bain, parquet, peinture. Espace Design intervient a Romainville avec devis gratuit sous 48h.
        </p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Renovation d'appartement a Romainville : le bon moment d'investir</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Romainville connat une transformation urbaine remarquable portee par le Grand Paris Express et l'arrivee de nouvelles populations. Cette evolution soutient la demande locative et la valorisation des biens immobiliers. Renover son appartement a Romainville, c'est capitaliser sur cette dynamique tout en ameliorant son confort de vie ou la rentabilite de son investissement locatif.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Espace Design realise tous types de travaux de renovation a Romainville : amenagement de cuisine sur mesure, refection complete de salle de bain, pose de parquet ou carrelage, travaux de peinture et enduits, isolation thermique et phonique. Notre methode de travail garantit un chantier propre, un planning respecte et un resultat conforme a vos attentes. Devis gratuit sous 48h.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Renovation complete ou partielle',
              'Cuisine et salle de bain',
              'Parquet et carrelage',
              'Peinture et revetements',
              'Electricite et plomberie',
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet a Romainville</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifie, assurance decennale.</p>
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
