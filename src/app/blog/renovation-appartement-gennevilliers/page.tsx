import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Gennevilliers', item: 'https://espacedesignparis.fr/blog/renovation-appartement-gennevilliers' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Gennevilliers (92) — Guide complet 2025",
  description: "Rénovez votre appartement à Gennevilliers avec Espace Design : cuisine, salle de bain, parquet, électricité. Devis gratuit sous 48h, artisan qualifié.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-gennevilliers' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel budget pour rénover un appartement à Gennevilliers ?',
      acceptedAnswer: { '@type': 'Answer', text: 'À Gennevilliers, les travaux de rénovation complète se situent entre 700 et 1 200 €/m². C\'est une ville où le rapport qualité-prix est favorable, notamment pour les investisseurs cherchant à valoriser un bien locatif.' },
    },
    {
      '@type': 'Question',
      name: 'Intervenez-vous dans les immeubles anciens et les cités de Gennevilliers ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, Espace Design intervient dans tous les types de logements à Gennevilliers : immeubles anciens, copropriétés des années 70-80 et bâtiments récents. Chaque projet fait l\'objet d\'un diagnostic complet avant démarrage.' },
    },
    {
      '@type': 'Question',
      name: 'Proposez-vous des travaux de rénovation énergétique à Gennevilliers ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, nous proposons des travaux d\'isolation thermique et de mise aux normes énergétiques éligibles aux aides de l\'État (MaPrimeRénov\'). Contactez-nous pour un bilan gratuit de votre logement.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Gennevilliers (92) | Espace Design',
  description: 'Rénovez votre appartement à Gennevilliers avec Espace Design : cuisine, salle de bain, parquet, électricité. Devis gratuit sous 48h, artisan qualifié.',
}

export default function RenovationGennevilliers() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement à Gennevilliers</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Ville en pleine reconversion dans les Hauts-de-Seine, Gennevilliers offre un parc immobilier varié avec un fort potentiel de valorisation. Nos artisans sont à votre service.</p>
      </section>
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Gennevilliers : une ville en mutation, des opportunités immobilières réelles</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Longtemps associée à son passé industriel et portuaire, Gennevilliers connaît depuis une décennie une profonde transformation urbaine. De nouveaux quartiers résidentiels émergent sur d'anciennes friches, tandis que les copropriétés existantes des années 60 à 90 font l'objet de nombreux projets de rénovation. Cette dynamique attire des primo-accédants et des investisseurs attirés par des prix d'achat encore compétitifs dans le 92.</p>
          <p className="text-gray-600 leading-relaxed mb-6">Espace Design accompagne propriétaires et bailleurs à Gennevilliers pour des rénovations qui allient modernité et praticité. Mise à niveau des installations électriques et de plomberie, réfection complète des cuisines et salles de bain, isolation thermique des murs et des combles, pose de nouveaux revêtements de sol — nous prenons en charge l'intégralité des travaux pour un résultat conforme à vos attentes et à votre budget.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Rénovation complète tous corps d\'état',
              'Cuisine fonctionnelle et moderne',
              'Salle de bain avec douche à l\'italienne',
              'Isolation thermique et phonique',
              'Électricité et plomberie mise aux normes',
              'Peinture, carrelage et revêtements de sol',
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Gennevilliers</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
