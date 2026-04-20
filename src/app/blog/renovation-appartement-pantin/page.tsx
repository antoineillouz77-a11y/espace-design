import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Pantin', item: 'https://espacedesignparis.fr/blog/renovation-appartement-pantin' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Pantin (93) : prix, lofts et conseils 2025",
  description: "Rénovation d'appartement et de loft à Pantin (93) : tarifs 2025, spécificités des anciens entrepôts convertis, artisans qualifiés en Seine-Saint-Denis.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-pantin' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le coût de rénovation d\'un loft à Pantin ?',
      acceptedAnswer: { '@type': 'Answer', text: 'La rénovation d\'un loft (ancien entrepôt converti) à Pantin coûte entre 1 300 et 1 800 €/m² en raison des spécificités techniques : hauteur sous plafond, création de mezzanines, isolation renforcée et mise aux normes électriques.' },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte la rénovation d\'un appartement standard à Pantin ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pour un appartement classique à Pantin, le budget de rénovation complète se situe entre 1 000 et 1 500 €/m², incluant sols, peintures, salle de bain et électricité.' },
    },
    {
      '@type': 'Question',
      name: 'Espace Design intervient-il rapidement à Pantin ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, Pantin étant limitrophe de Paris, nos équipes interviennent en moins de 48h pour un devis et peuvent démarrer un chantier sous 2 à 4 semaines selon le planning.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Pantin (93) — Loft et réno 2025 | Espace Design',
  description: "Rénovation d'appartement et de loft à Pantin (93) : tarifs 2025, spécificités des anciens entrepôts convertis, artisans qualifiés en Seine-Saint-Denis.",
}

export default function RenovationPantinPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement Pantin</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Artisan rénovation à Pantin (93) — lofts, appartements, anciens entrepôts convertis. Devis gratuit sous 48h, assurance décennale.</p>
      </section>
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Pantin : une ville en pleine transformation</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Pantin connaît depuis une décennie une gentrification rapide qui en fait l'un des marchés immobiliers les plus dynamiques de Seine-Saint-Denis (93). D'anciens entrepôts industriels sont reconvertis en lofts et résidences contemporaines, tandis que les immeubles haussmanniens et les cités de logements sociaux coexistent dans un tissu urbain en pleine mutation.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Espace Design accompagne propriétaires et investisseurs sur leurs projets de rénovation à Pantin, qu'il s'agisse d'un appartement classique à rafraîchir ou d'un loft industriel à transformer entièrement. Nous maîtrisons les contraintes spécifiques aux grandes hauteurs sous plafond, aux dalles béton et aux installations électriques industrielles à remplacer.</p>
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Ce que nous réalisons à Pantin</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Rénovation complète de loft industriel',
              'Création de mezzanine et cloisonnement',
              'Mise aux normes électriques NF C 15-100',
              'Pose de béton ciré et parquet massif',
              'Réfection de salle de bain et cuisine',
              'Isolation thermique et acoustique renforcée',
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
                  ['Rénovation appartement standard', '1 000 – 1 500 €/m²'],
                  ['Rénovation loft industriel', '1 300 – 1 800 €/m²'],
                  ['Rénovation salle de bain', '7 000 – 13 000 €'],
                  ['Rénovation cuisine', '9 000 – 15 000 €'],
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
