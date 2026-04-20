import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Sartrouville', item: 'https://espacedesignparis.fr/blog/renovation-appartement-sartrouville' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Sartrouville (78) — Guide complet 2025",
  description: "Rénovez votre appartement à Sartrouville dans les Yvelines avec Espace Design. Devis gratuit, tarifs compétitifs, artisan qualifié pour rénovation complète, salle de bain et cuisine.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-sartrouville' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation appartement à Sartrouville ?',
      acceptedAnswer: { '@type': 'Answer', text: 'À Sartrouville, le prix d\'une rénovation complète oscille entre 1 000 et 1 400 €/m². Une salle de bain est rénovée entre 7 000 et 12 000 €, et une cuisine entre 8 000 et 14 000 €.' },
    },
    {
      '@type': 'Question',
      name: 'Espace Design intervient-il dans les Yvelines (78) ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, Espace Design intervient dans toute l\'Île-de-France, y compris dans les Yvelines. Sartrouville, Maisons-Laffitte, Argenteuil et les communes limitrophes font partie de notre zone d\'intervention habituelle.' },
    },
    {
      '@type': 'Question',
      name: 'Les appartements HLM rénovés à Sartrouville peuvent-ils bénéficier d\'aides ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Les travaux dans les logements sociaux relèvent généralement du bailleur social. Pour les propriétaires privés à Sartrouville, des aides comme MaPrimeRénov\' ou les certificats d\'économie d\'énergie (CEE) sont accessibles pour les travaux d\'isolation et de chauffage.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Sartrouville (78) — Espace Design',
  description: 'Rénovez votre appartement à Sartrouville dans les Yvelines avec Espace Design. Devis gratuit, tarifs compétitifs, artisan qualifié pour rénovation complète, salle de bain et cuisine.',
}

export default function RenovationAppartementSartrouville() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement à Sartrouville (78)</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Proche de Paris et bien desservie par le RER A, Sartrouville offre un marché immobilier mixte où la rénovation permet de valoriser son bien et d'améliorer le confort de vie.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Rénover à Sartrouville : contexte et enjeux</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Sartrouville (78500) est une commune des Yvelines située en bord de Seine, à quelques minutes d'Argenteuil et de Maisons-Laffitte. Son parc immobilier mélange résidences HLM des années 1970, petites maisons et appartements en résidences privées. La rénovation y est souvent motivée par la mise aux normes énergétiques ou la valorisation locative d'un bien ancien.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Espace Design accompagne les propriétaires de Sartrouville dans leurs projets de rénovation, qu'il s'agisse d'un studio à remettre en état avant mise en location ou d'un appartement familial à moderniser entièrement. Nos tarifs sont adaptés à ce marché tout en garantissant des prestations haut de gamme.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Nos prestations à Sartrouville</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Rénovation complète appartement',
              'Salle de bain moderne',
              'Cuisine équipée sur mesure',
              'Revêtements sols et murs',
              'Isolation thermique et phonique',
              'Plomberie et électricité',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Tarifs Paris 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1C1C1C] text-white"><th className="p-3 text-left">Prestation</th><th className="p-3 text-right">Prix indicatif</th></tr></thead>
              <tbody>
                {[
                  ['Rénovation complète', '1 000 – 1 400 €/m²'],
                  ['Salle de bain', '7 000 – 12 000 €'],
                  ['Cuisine', '8 000 – 14 000 €'],
                  ['Peinture et enduits', '15 – 35 €/m²'],
                ].map(([label, price]) => (
                  <tr key={label} className="border-b border-gray-100"><td className="p-3 text-gray-600">{label}</td><td className="p-3 text-right font-medium">{price}</td></tr>
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
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Voir aussi</p>
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Paris</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
