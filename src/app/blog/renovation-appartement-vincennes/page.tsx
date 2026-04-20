import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Vincennes', item: 'https://espacedesignparis.fr/blog/renovation-appartement-vincennes' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Vincennes : guide complet et tarifs 2025",
  description: "Prix et conseils pour rénover votre appartement à Vincennes (94). Proche Paris 12e, artisans qualifiés, devis gratuit sous 48h.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-vincennes' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel budget prévoir pour rénover un appartement à Vincennes ?',
      acceptedAnswer: { '@type': 'Answer', text: 'À Vincennes, le budget d\'une rénovation complète varie entre 1 400 et 1 900 €/m². Pour un appartement de 60 m², comptez entre 84 000 et 114 000 €. Une rénovation partielle (cuisine ou salle de bain seule) démarre autour de 8 000 €.' },
    },
    {
      '@type': 'Question',
      name: 'Espace Design intervient-il à Vincennes ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, Espace Design réalise des projets de rénovation à Vincennes et dans tout le Val-de-Marne. Nos équipes interviennent rapidement, avec un délai de démarrage généralement inférieur à 3 semaines après signature du devis.' },
    },
    {
      '@type': 'Question',
      name: 'Quelles sont les spécificités des appartements à Vincennes ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Vincennes possède un parc immobilier varié : appartements des années 1930-1960 proches du fort, immeubles haussmanniens en bordure de Paris et résidences modernes. Chaque type requiert une approche différente, notamment pour les revêtements sol et la mise aux normes électrique.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Vincennes — Prix 2025 | Espace Design',
  description: 'Prix et conseils pour rénover votre appartement à Vincennes (94). Proche Paris 12e, artisans qualifiés, devis gratuit sous 48h.',
}

export default function RenovationVincennesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement Vincennes</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Vous envisagez de rénover votre appartement à Vincennes ? Découvrez nos tarifs 2025, les étapes clés et les conseils d'Espace Design pour mener votre projet sereinement.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Vincennes, une ville dynamique aux portes de Paris</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Située à l'est de Paris, en limite du 12e arrondissement, Vincennes bénéficie d'un cadre de vie privilégié grâce au bois et au fort éponymes. La ville attire une population active qui investit massivement dans la rénovation de son parc immobilier vieillissant. Appartements des années 1930, immeubles d'après-guerre ou résidences plus récentes : chaque logement demande une approche sur mesure.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Espace Design accompagne les propriétaires vincennois dans tous leurs projets de rénovation : de la simple remise en peinture à la rénovation complète avec redistribution des espaces. Nos artisans qualifiés connaissent les particularités des immeubles locaux et garantissent des finitions soignées dans les délais convenus.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Nos prestations de rénovation à Vincennes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Rénovation complète tous corps d\'état',
              'Cuisine équipée sur mesure',
              'Salle de bain et salle d\'eau',
              'Pose de parquet massif ou stratifié',
              'Peinture intérieure et ravalement',
              'Électricité et plomberie mise aux normes',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Prix rénovation Vincennes 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1C1C1C] text-white"><th className="p-3 text-left">Type de travaux</th><th className="p-3 text-right">Prix indicatif</th></tr></thead>
              <tbody>
                {[
                  ['Rénovation complète appartement', '1 400 – 1 900 €/m²'],
                  ['Salle de bain rénovée', '8 000 – 15 000 €'],
                  ['Cuisine équipée', '10 000 – 18 000 €'],
                  ['Parquet (fourniture et pose)', '80 – 100 €/m²'],
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
              { href: '/blog/prix-renovation-appartement-paris', label: 'Prix rénovation Paris' },
              { href: '/blog/renovation-appartement-haussmannien-paris', label: 'Appartement haussmannien' },
              { href: '/blog', label: 'Tous les articles' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-xs border border-gray-200 rounded px-3 py-1.5 text-gray-600 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Vincennes</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
