import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Gagny', item: 'https://espacedesignparis.fr/blog/renovation-appartement-gagny' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Gagny : guide complet 2025",
  description: "Rénover son appartement ou pavillon à Gagny (93) : prix au m², salle de bain, cuisine, parquet. Artisan qualifié Seine-Saint-Denis — Espace Design, devis gratuit 48h.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-gagny' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation complète à Gagny ?',
      acceptedAnswer: { '@type': 'Answer', text: 'À Gagny, une rénovation complète est estimée entre 950 et 1 350 €/m². La ville étant résidentielle avec un mix de pavillons et d\'appartements, les coûts varient selon la nature du bien. Les pavillons nécessitent souvent des travaux d\'isolation complémentaires qui s\'ajoutent au budget de base.' },
    },
    {
      '@type': 'Question',
      name: 'Espace Design rénove-t-il les pavillons à Gagny ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, Espace Design intervient aussi bien sur les appartements que sur les pavillons à Gagny. Nous gérons l\'ensemble des travaux : gros œuvre léger, plomberie, électricité, isolation, menuiseries et décoration intérieure. Un coordinateur de chantier est dédié à votre projet du début à la livraison.' },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte une salle de bain rénovée à Gagny ?',
      acceptedAnswer: { '@type': 'Answer', text: 'La rénovation d\'une salle de bain à Gagny est estimée entre 6 000 et 12 000 €, pose et fournitures comprises. Ce budget inclut la dépose de l\'ancienne installation, la plomberie, le carrelage, la robinetterie et les équipements sanitaires. Des options de douche à l\'italienne ou baignoire balnéo sont disponibles selon votre budget.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Gagny (93) — Espace Design',
  description: 'Rénover son appartement ou pavillon à Gagny (93) : prix au m², salle de bain, cuisine, parquet. Artisan qualifié Seine-Saint-Denis — Espace Design, devis gratuit 48h.',
}

export default function RenovationGagny() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement Gagny</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Ville résidentielle de Seine-Saint-Denis, Gagny mêle pavillons avec jardins et immeubles d'appartements. Espace Design rénove aussi bien les appartements que les maisons individuelles, avec un résultat clé en main garanti.</p>
      </section>
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Gagny : une commune résidentielle aux multiples visages</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Gagny est une ville résidentielle de Seine-Saint-Denis qui offre un cadre de vie agréable à quelques minutes de Paris. La commune est connue pour ses nombreux pavillons avec jardins, mais également pour ses immeubles d'appartements dans des quartiers comme la Tour-Blanche ou la Forestière. Ce parc immobilier varié nécessite régulièrement des travaux de rénovation.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Espace Design intervient à Gagny pour tous types de rénovations, du simple rafraîchissement peinture à la transformation complète d'un appartement. Notre approche est toujours personnalisée : nous analysons votre logement, identifions les priorités et vous proposons un planning et un budget transparents.</p>
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Nos prestations de rénovation à Gagny</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Rénovation complète appartement et pavillon',
              'Salle de bain moderne et fonctionnelle',
              'Cuisine équipée sur mesure',
              'Pose de parquet et revêtements de sol',
              'Peinture et enduits décoratifs',
              'Isolation thermique et phonique',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2"><CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" /><span className="text-sm text-gray-600">{p}</span></div>
            ))}
          </div>
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Prix rénovation Gagny 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1C1C1C] text-white"><th className="p-3 text-left">Type de travaux</th><th className="p-3 text-right">Prix indicatif</th></tr></thead>
              <tbody>{[
                ['Rénovation complète appartement', '950 – 1 350 €/m²'],
                ['Salle de bain clé en main', '6 000 – 12 000 €'],
                ['Cuisine équipée complète', '7 000 – 13 000 €'],
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Gagny</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
