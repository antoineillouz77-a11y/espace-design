import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Vitry-sur-Seine', item: 'https://espacedesignparis.fr/blog/renovation-appartement-vitry-sur-seine' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Vitry-sur-Seine : guide complet 2025",
  description: "Rénover son appartement à Vitry-sur-Seine (94) : prix au m², salle de bain, cuisine, parquet. Artisan qualifié Val-de-Marne — Espace Design, devis gratuit 48h.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-vitry-sur-seine' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel budget prévoir pour rénover un appartement des années 70 à Vitry-sur-Seine ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Les immeubles des années 60-80 à Vitry-sur-Seine nécessitent souvent une remise aux normes électrique et une isolation phonique. Comptez 950 à 1 400 €/m² pour une rénovation complète, avec une enveloppe supplémentaire de 3 000 à 6 000 € pour la mise en conformité électrique selon la surface.' },
    },
    {
      '@type': 'Question',
      name: 'Peut-on bénéficier d\'aides pour rénover à Vitry-sur-Seine ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui. MaPrimeRénov\', l\'éco-PTZ et les aides de l\'Anah sont accessibles aux propriétaires de Vitry-sur-Seine sous conditions de ressources et de type de travaux (isolation, fenêtres, chauffage). Espace Design vous oriente vers les dispositifs adaptés à votre projet.' },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte la rénovation d\'une cuisine à Vitry-sur-Seine ?',
      acceptedAnswer: { '@type': 'Answer', text: 'La rénovation d\'une cuisine à Vitry-sur-Seine est estimée entre 8 000 et 14 000 € fournitures et pose comprises, selon la superficie et les matériaux. Ce tarif inclut plomberie, électricité, carrelage et installation du mobilier. Un devis gratuit vous donnera une estimation précise.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Vitry-sur-Seine (94) — Espace Design',
  description: 'Rénover son appartement à Vitry-sur-Seine (94) : prix au m², salle de bain, cuisine, parquet. Artisan qualifié Val-de-Marne — Espace Design, devis gratuit 48h.',
}

export default function RenovationVitrySurSeine() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement Vitry-sur-Seine</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Grande ville du Val-de-Marne, Vitry-sur-Seine concentre de nombreux immeubles des années 60-80 à fort potentiel de rénovation. Espace Design vous accompagne pour transformer votre appartement dans les meilleures conditions.</p>
      </section>
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Rénover à Vitry-sur-Seine : enjeux et opportunités</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Vitry-sur-Seine est l'une des plus grandes villes du Val-de-Marne avec plus de 90 000 habitants. Son parc immobilier, majoritairement constitué d'immeubles construits entre 1960 et 1985, offre de nombreuses opportunités pour les propriétaires souhaitant mettre leur logement au goût du jour tout en améliorant ses performances énergétiques.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Espace Design intervient régulièrement à Vitry-sur-Seine pour des rénovations complètes, des rafraîchissements ciblés et des aménagements de pièces. Notre connaissance du bâti local nous permet d'anticiper les contraintes et de proposer des solutions adaptées à chaque configuration.</p>
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Nos prestations de rénovation à Vitry-sur-Seine</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Rénovation complète appartement',
              'Salle de bain et douche à l\'italienne',
              'Cuisine ouverte ou fermée',
              'Pose de parquet contrecollé et stratifié',
              'Peinture et revêtements muraux',
              'Mise aux normes électricité et plomberie',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2"><CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" /><span className="text-sm text-gray-600">{p}</span></div>
            ))}
          </div>
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Prix rénovation Vitry-sur-Seine 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1C1C1C] text-white"><th className="p-3 text-left">Type de travaux</th><th className="p-3 text-right">Prix indicatif</th></tr></thead>
              <tbody>{[
                ['Rénovation complète appartement', '950 – 1 400 €/m²'],
                ['Salle de bain clé en main', '7 000 – 12 000 €'],
                ['Cuisine équipée complète', '8 000 – 14 000 €'],
                ['Parquet contrecollé posé', '55 – 80 €/m²'],
              ].map(([l, p]) => (
                <tr key={l} className="border-b border-gray-100"><td className="p-3 text-gray-600">{l}</td><td className="p-3 text-right font-medium">{p}</td></tr>
              ))}</tbody>
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Vitry-sur-Seine</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
