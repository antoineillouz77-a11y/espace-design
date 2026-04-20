import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Saint-Denis', item: 'https://espacedesignparis.fr/blog/renovation-appartement-saint-denis' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Saint-Denis (93) — Guide complet 2025",
  description: "Guide complet pour rénover votre appartement à Saint-Denis : prix au m², artisans locaux, aides financières et conseils pratiques pour vos travaux en Seine-Saint-Denis.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-saint-denis' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien coûte une rénovation complète à Saint-Denis ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Le budget moyen pour une rénovation complète à Saint-Denis se situe entre 900 et 1 300 €/m². Pour un T2 de 45 m², prévoyez entre 40 000 et 58 000 € selon les finitions choisies.' },
    },
    {
      '@type': 'Question',
      name: 'La rénovation à Saint-Denis est-elle rentable ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, Saint-Denis bénéficie d\'un fort dynamisme lié aux projets du Grand Paris et à la proximité du Stade de France. Les prix immobiliers progressent régulièrement, rendant la rénovation particulièrement rentable pour les investisseurs.' },
    },
    {
      '@type': 'Question',
      name: 'Quelles aides pour la rénovation énergétique à Saint-Denis ?',
      acceptedAnswer: { '@type': 'Answer', text: 'MaPrimeRénov\', l\'Éco-PTZ et les certificats d\'économies d\'énergie (CEE) sont disponibles. La communauté Plaine Commune peut également proposer des aides locales spécifiques. Un audit énergétique préalable est souvent recommandé.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Saint-Denis (93) — Prix & Artisans 2025 | Espace Design',
  description: 'Guide complet pour rénover votre appartement à Saint-Denis : prix au m², artisans locaux, aides financières et conseils pratiques pour vos travaux en Seine-Saint-Denis.',
}

export default function RenovationSaintDenis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement à Saint-Denis (93)</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Saint-Denis se transforme profondément, portée par les projets du Grand Paris et l'héritage du Stade de France. Nos experts vous accompagnent pour rénover votre appartement au meilleur rapport qualité-prix.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Saint-Denis, une ville en pleine transformation</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Avec l'arrivée de nouvelles lignes de métro du Grand Paris Express et les investissements autour du Stade de France, Saint-Denis attire une population active jeune et des investisseurs à la recherche de biens à rénover. La ville propose un parc immobilier varié : immeubles haussmanniens, résidences des années 1970, anciens logements ouvriers reconvertis. Chaque type de bien nécessite une approche technique spécifique.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Espace Design intervient à Saint-Denis depuis plusieurs années et connaît les contraintes du bâti local : problèmes d'humidité dans les caves, planchers anciens à consolider, réseaux électriques à mettre aux normes. Nous établissons un diagnostic complet avant chaque chantier pour éviter les mauvaises surprises en cours de travaux.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Nos prestations de rénovation à Saint-Denis</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Rénovation complète clé en main',
              'Mise aux normes électriques',
              'Réfection salle de bain',
              'Rénovation cuisine équipée',
              'Pose de parquet toutes essences',
              'Isolation thermique et acoustique',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Prix rénovation Saint-Denis 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1C1C1C] text-white"><th className="p-3 text-left">Type de travaux</th><th className="p-3 text-right">Prix indicatif</th></tr></thead>
              <tbody>
                {[
                  ['Rénovation complète', '900 – 1 300 €/m²'],
                  ['Salle de bain', '6 000 – 12 000 €'],
                  ['Cuisine', '7 000 – 13 000 €'],
                  ['Parquet (pose comprise)', '55 – 80 €/m²'],
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
              { href: '/blog/prix-renovation-appartement-paris', label: 'Prix rénovation' },
              { href: '/blog', label: 'Tous les articles' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-xs border border-gray-200 rounded px-3 py-1.5 text-gray-600 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Saint-Denis</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
