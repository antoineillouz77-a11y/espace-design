import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Aubervilliers', item: 'https://espacedesignparis.fr/blog/renovation-appartement-aubervilliers' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Aubervilliers (93) : prix et travaux 2025",
  description: "Rénovation d'appartement à Aubervilliers (93) : tarifs 2025, travaux courants, artisans sérieux en Seine-Saint-Denis. Devis gratuit sous 48h.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-aubervilliers' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation complète à Aubervilliers ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pour un appartement à Aubervilliers, le budget de rénovation complète varie entre 900 et 1 300 €/m², un tarif légèrement inférieur à Paris intramuros grâce à des coûts de déplacement réduits.' },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte une rénovation de salle de bain à Aubervilliers ?',
      acceptedAnswer: { '@type': 'Answer', text: 'La rénovation d\'une salle de bain à Aubervilliers coûte entre 6 000 et 12 000 € selon la surface et les matériaux. Une petite salle de bain de 4 m² peut être rénovée à partir de 6 000 € tout compris.' },
    },
    {
      '@type': 'Question',
      name: 'Les artisans d\'Espace Design interviennent-ils à Aubervilliers ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, Aubervilliers fait partie de notre zone d\'intervention habituelle en petite couronne (93). Nos équipes interviennent pour des devis gratuits sous 48h et des chantiers de rénovation complète ou partielle.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Aubervilliers (93) — Tarifs 2025 | Espace Design',
  description: "Rénovation d'appartement à Aubervilliers (93) : tarifs 2025, travaux courants, artisans sérieux en Seine-Saint-Denis. Devis gratuit sous 48h.",
}

export default function RenovationAubervilliersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement Aubervilliers</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Artisan rénovation à Aubervilliers (93) — ville en transformation rapide, projets neufs et réhabilitation. Devis gratuit sous 48h, assurance décennale.</p>
      </section>
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Aubervilliers : une ville en pleine mutation</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Aubervilliers (93) est l'une des villes d'Île-de-France qui connaît la transformation la plus rapide grâce aux grands projets urbains du Grand Paris Express et à l'arrivée de nouveaux habitants. Son parc immobilier ancien offre de nombreuses opportunités de rénovation, notamment pour les investisseurs et les primo-accédants cherchant à valoriser un bien.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Espace Design intervient à Aubervilliers pour des rénovations complètes ou partielles d'appartements : remise aux normes électriques, réfection des salles de bain et cuisines, pose de sols, peintures et isolation. Nous connaissons bien les contraintes des immeubles anciens du secteur et proposons des solutions adaptées à chaque budget.</p>
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Nos prestations à Aubervilliers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Rénovation complète tous corps d\'état',
              'Mise aux normes électriques et plomberie',
              'Pose carrelage, parquet, stratifié',
              'Réfection salle de bain clé en main',
              'Rénovation cuisine équipée',
              'Peinture et revêtements muraux',
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
                  ['Rénovation complète appartement', '900 – 1 300 €/m²'],
                  ['Rénovation salle de bain', '6 000 – 12 000 €'],
                  ['Rénovation cuisine', '7 000 – 13 000 €'],
                  ['Rafraîchissement peinture + sols', '120 – 280 €/m²'],
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
