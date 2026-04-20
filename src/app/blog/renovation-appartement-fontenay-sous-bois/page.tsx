import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Fontenay-sous-Bois', item: 'https://espacedesignparis.fr/blog/renovation-appartement-fontenay-sous-bois' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Fontenay-sous-Bois : tarifs et conseils 2025",
  description: "Tout savoir sur la rénovation d'appartement à Fontenay-sous-Bois (94) : coûts, travaux courants, artisans qualifiés. Devis gratuit sous 48h.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-fontenay-sous-bois' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation complète à Fontenay-sous-Bois ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pour un appartement des années 60-90 à Fontenay-sous-Bois, comptez entre 1 000 et 1 500 €/m² pour une rénovation complète incluant sols, peintures, électricité et plomberie.' },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte la rénovation d\'une salle de bain à Fontenay-sous-Bois ?',
      acceptedAnswer: { '@type': 'Answer', text: 'La rénovation d\'une salle de bain à Fontenay-sous-Bois coûte généralement entre 7 000 et 13 000 € selon la surface, les matériaux choisis et l\'ampleur des travaux de plomberie.' },
    },
    {
      '@type': 'Question',
      name: 'Faut-il un permis de construire pour rénover un appartement à Fontenay-sous-Bois ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pour les travaux intérieurs sans modification de façade ni de structure, aucun permis de construire n\'est nécessaire. Une déclaration préalable peut être requise en cas d\'agrandissement ou de changement d\'usage.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Fontenay-sous-Bois (94) — Tarifs 2025 | Espace Design',
  description: "Tout savoir sur la rénovation d'appartement à Fontenay-sous-Bois (94) : coûts, travaux courants, artisans qualifiés. Devis gratuit sous 48h.",
}

export default function RenovationFontenayPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement Fontenay-sous-Bois</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Artisan rénovation dans le Val-de-Marne (94) — devis gratuit sous 48h, assurance décennale, 15 ans d'expérience en Île-de-France.</p>
      </section>
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Rénover à Fontenay-sous-Bois : contexte et enjeux</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Fontenay-sous-Bois est une ville résidentielle du Val-de-Marne (94) dont le parc immobilier est principalement composé d'immeubles construits entre les années 1960 et 1990. Ces logements, bien que solides, présentent souvent des installations vieillissantes — électricité non mise aux normes, isolation thermique insuffisante, salles de bain et cuisines datées — qui nécessitent une rénovation complète ou partielle.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Espace Design intervient régulièrement à Fontenay-sous-Bois pour des rénovations d'appartements du T2 au T5. Notre équipe prend en charge l'intégralité du chantier : démolition, maçonnerie légère, plomberie, électricité, carrelage, parquet, peinture et menuiseries. Un interlocuteur unique, un planning respecté, un résultat soigné.</p>
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Prestations incluses dans nos rénovations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Remise aux normes électriques (NF C 15-100)',
              'Réfection complète de salle de bain',
              'Pose de parquet ou carrelage',
              'Rénovation cuisine équipée',
              'Peinture et enduits muraux',
              'Isolation phonique et thermique',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
          </div>
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Tarifs 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="p-3 text-left">Prestation</th>
                  <th className="p-3 text-right">Prix</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Rénovation complète appartement', '1 000 – 1 500 €/m²'],
                  ['Rénovation salle de bain', '7 000 – 13 000 €'],
                  ['Rénovation cuisine', '9 000 – 15 000 €'],
                  ['Peinture + sols (hors mobilier)', '150 – 350 €/m²'],
                ].map(([l, p]) => (
                  <tr key={l} className="border-b border-gray-100">
                    <td className="p-3 text-gray-600">{l}</td>
                    <td className="p-3 text-right font-medium">{p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">FAQ</h2>
          <div className="space-y-4">
            {schemaFAQ.mainEntity.map((faq) => (
              <div key={faq.name} className="border border-gray-200 rounded p-4">
                <p className="font-semibold text-[#1C1C1C] mb-2">{faq.name}</p>
                <p className="text-sm text-gray-600">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/renovation-appartement-paris', label: 'Rénovation Paris' },
              { href: '/blog', label: 'Tous les articles' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-xs border border-gray-200 rounded px-3 py-1.5 text-gray-600 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
