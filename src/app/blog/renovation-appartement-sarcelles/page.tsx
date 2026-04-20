import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Sarcelles', item: 'https://espacedesignparis.fr/blog/renovation-appartement-sarcelles' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Sarcelles (95) — Guide complet 2025",
  description: "Rénovez votre appartement à Sarcelles avec Espace Design : cuisine, salle de bain, isolation, parquet. Devis gratuit sous 48h, artisan qualifié Val-d'Oise.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-sarcelles' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel prix pour rénover un appartement à Sarcelles ?',
      acceptedAnswer: { '@type': 'Answer', text: 'À Sarcelles, une rénovation complète coûte entre 650 et 1 100 €/m². Les immeubles des années 60-80 nécessitent souvent une mise aux normes électrique et de plomberie en plus des finitions, ce qui peut augmenter le budget total.' },
    },
    {
      '@type': 'Question',
      name: 'Les logements des grands ensembles de Sarcelles sont-ils rénovables ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, les appartements des grands ensembles de Sarcelles sont tout à fait rénovables. Nous intervenons régulièrement dans ces bâtiments et connaissons leurs spécificités : hauteur sous plafond, gaines techniques, contraintes de copropriété.' },
    },
    {
      '@type': 'Question',
      name: 'Êtes-vous éligibles aux aides MaPrimeRénov\' pour Sarcelles ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Nos artisans sont qualifiés RGE, ce qui vous permet d\'accéder aux aides MaPrimeRénov\' et aux CEE pour vos travaux d\'isolation et de chauffage à Sarcelles. Nous vous guidons dans les démarches.' },
    },
  ],
}

export const metadata: Metadata = {
  title: "Rénovation appartement Sarcelles (95) | Espace Design",
  description: "Rénovez votre appartement à Sarcelles avec Espace Design : cuisine, salle de bain, isolation, parquet. Devis gratuit sous 48h, artisan qualifié Val-d'Oise.",
}

export default function RenovationSarcelles() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement à Sarcelles</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Grande ville du Val-d'Oise avec un parc immobilier majoritairement composé d'immeubles des années 60 à 80, Sarcelles est un marché porteur pour la rénovation. Nos équipes interviennent sur place.</p>
      </section>
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Rénover à Sarcelles : grands ensembles et immeubles collectifs</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Sarcelles est l'une des plus grandes villes du Val-d'Oise, connue pour ses grands ensembles emblématiques construits dans les années 1960. Ces logements, aujourd'hui vieillissants, présentent un fort potentiel de revalorisation : une rénovation bien conduite permet d'améliorer significativement le confort de vie, de réduire les charges énergétiques et d'augmenter la valeur du bien. Les appartements de type F3 à F5 sont particulièrement nombreux et font l'objet d'une forte demande de la part des familles souhaitant se réapproprier leur logement.</p>
          <p className="text-gray-600 leading-relaxed mb-6">Espace Design intervient à Sarcelles pour des rénovations complètes adaptées aux contraintes des bâtiments collectifs : respect du règlement de copropriété, coordination avec le syndic pour les travaux impactant les parties communes, gestion des délais et des nuisances sonores pour le voisinage. Nos artisans qualifiés prennent en charge tous les corps de métier, de la démolition à la finition, pour un résultat clé en main.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Rénovation complète F2, F3, F4, F5',
              'Cuisine équipée et fonctionnelle',
              'Salle de bain moderne et carrelage',
              'Isolation thermique et phonique',
              'Mise aux normes électricité NF C 15-100',
              'Peinture et revêtements de sol durables',
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Sarcelles</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
