import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Noisy-le-Grand', item: 'https://espacedesignparis.fr/blog/renovation-appartement-noisy-le-grand' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Noisy-le-Grand : guide complet 2025",
  description: "Rénover son appartement à Noisy-le-Grand (93) : ville moderne proche Marne-la-Vallée. Prix au m², salle de bain, cuisine — Espace Design, artisan qualifié Seine-Saint-Denis.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-noisy-le-grand' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation complète à Noisy-le-Grand ?',
      acceptedAnswer: { '@type': 'Answer', text: 'À Noisy-le-Grand, une rénovation complète est estimée entre 1 000 et 1 400 €/m² selon l\'état du logement et les finitions souhaitées. Les immeubles modernes des années 80-90 nécessitent souvent moins de gros œuvre mais une mise à jour des équipements de cuisine et salle de bain.' },
    },
    {
      '@type': 'Question',
      name: 'Espace Design intervient-il dans tout Noisy-le-Grand ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, Espace Design intervient dans tous les quartiers de Noisy-le-Grand : le Mont d\'Est, les Côteaux, le Champy, les Richardets et le centre-ville. Nous couvrons également les villes voisines comme Champs-sur-Marne, Bry-sur-Marne et Villiers-sur-Marne.' },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte la peinture intérieure à Noisy-le-Grand ?',
      acceptedAnswer: { '@type': 'Answer', text: 'La peinture intérieure à Noisy-le-Grand est facturée entre 40 et 60 €/m² de surface murale, préparation de surface et deux couches de peinture comprise. Ce tarif inclut la protection des sols et l\'application de sous-couche. Demandez un devis gratuit pour une estimation précise selon votre appartement.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Noisy-le-Grand (93) — Espace Design',
  description: 'Rénover son appartement à Noisy-le-Grand (93) : ville moderne proche Marne-la-Vallée. Prix au m², salle de bain, cuisine — Espace Design, artisan qualifié Seine-Saint-Denis.',
}

export default function RenovationNoisyLeGrand() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement Noisy-le-Grand</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Ville moderne aux portes de Marne-la-Vallée, Noisy-le-Grand offre un parc immobilier varié avec de nombreuses opportunités de rénovation. Espace Design intervient dans tout le secteur est de la Seine-Saint-Denis.</p>
      </section>
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Rénover à Noisy-le-Grand : une ville dynamique en développement</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Noisy-le-Grand bénéficie d'une position stratégique entre Paris et le bassin de Marne-la-Vallée. Desservie par le RER A et le RER E, la ville attire des actifs souhaitant accéder à la propriété à des prix plus abordables qu'à Paris. Son parc immobilier, principalement composé d'immeubles des années 1980 à 2000, est prêt pour une nouvelle génération de rénovations.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Espace Design accompagne les propriétaires noisyens dans la transformation de leur logement. Que ce soit pour un studio à moderniser ou un grand appartement familial à réaménager, nous proposons des solutions sur mesure adaptées à chaque budget.</p>
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Nos prestations de rénovation à Noisy-le-Grand</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Rénovation complète appartement',
              'Salle de bain et douche à l\'italienne',
              'Cuisine équipée ouverte ou fermée',
              'Peinture intérieure professionnelle',
              'Carrelage et revêtements de sol',
              'Électricité et plomberie aux normes',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2"><CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" /><span className="text-sm text-gray-600">{p}</span></div>
            ))}
          </div>
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Prix rénovation Noisy-le-Grand 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1C1C1C] text-white"><th className="p-3 text-left">Type de travaux</th><th className="p-3 text-right">Prix indicatif</th></tr></thead>
              <tbody>{[
                ['Rénovation complète appartement', '1 000 – 1 400 €/m²'],
                ['Salle de bain clé en main', '7 000 – 12 000 €'],
                ['Cuisine équipée complète', '8 000 – 14 000 €'],
                ['Peinture intérieure', '40 – 60 €/m²'],
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Noisy-le-Grand</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
