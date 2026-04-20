import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Versailles', item: 'https://espacedesignparis.fr/blog/renovation-appartement-versailles' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Versailles : guide et tarifs 2025",
  description: "Tout savoir pour rénover votre appartement à Versailles, ville du patrimoine UNESCO. Prix, contraintes ABF, conseils pour immeubles classés et résidences modernes.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-versailles' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation à Versailles en 2025 ?',
      acceptedAnswer: { '@type': 'Answer', text: 'À Versailles, la rénovation complète d\'un appartement coûte entre 1 200 et 1 700 €/m². Pour un appartement de 80 m², le budget total se situe entre 96 000 et 136 000 €. Les finitions haut de gamme ou les contraintes ABF peuvent faire varier ce budget à la hausse.' },
    },
    {
      '@type': 'Question',
      name: 'Y a-t-il des contraintes particulières pour rénover à Versailles ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Versailles est inscrite au patrimoine mondial de l\'UNESCO. Certains secteurs sont soumis à l\'avis de l\'Architecte des Bâtiments de France (ABF), notamment pour les façades, menuiseries et toitures. Les travaux intérieurs ne sont généralement pas concernés, sauf s\'ils affectent la structure du bâtiment.' },
    },
    {
      '@type': 'Question',
      name: 'Espace Design intervient-il à Versailles et dans les Yvelines ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, Espace Design réalise des projets de rénovation à Versailles et dans l\'ensemble des Yvelines (78). Nous connaissons les spécificités réglementaires locales et disposons d\'artisans qualifiés habitués aux chantiers en secteur patrimonial.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Versailles — Prix 2025 | Espace Design',
  description: 'Tout savoir pour rénover votre appartement à Versailles, ville du patrimoine UNESCO. Prix, contraintes ABF, conseils pour immeubles classés et résidences modernes.',
}

export default function RenovationVersaillesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement Versailles</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Ville royale inscrite au patrimoine UNESCO, Versailles offre un cadre immobilier unique. Découvrez nos conseils et tarifs 2025 pour rénover sereinement votre appartement.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Rénover à Versailles : un cadre patrimonial exceptionnel</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Versailles réunit un parc immobilier varié : appartements dans des immeubles classés du quartier Notre-Dame, résidences bourgeoises du quartier Saint-Louis, mais aussi des programmes plus modernes dans les quartiers périphériques. La proximité du château et des jardins confère à la ville un attrait patrimonial fort, et les propriétaires versaillais cherchent des finitions à la hauteur de cet environnement d'exception.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Espace Design accompagne les propriétaires versaillais dans leurs projets de rénovation en tenant compte des règles urbanistiques locales. Nos artisans qualifiés RGE et notre assurance décennale vous garantissent une rénovation conforme aux normes et aux attentes esthétiques de la ville.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Nos prestations à Versailles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Rénovation complète avec respect du cachet ancien',
              'Restauration parquets et boiseries d\'époque',
              'Salle de bain de caractère ou contemporaine',
              'Cuisine équipée fonctionnelle et esthétique',
              'Peinture à la chaux ou enduits décoratifs',
              'Isolation thermique et mise aux normes',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Prix rénovation Versailles 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1C1C1C] text-white"><th className="p-3 text-left">Type de travaux</th><th className="p-3 text-right">Prix indicatif</th></tr></thead>
              <tbody>
                {[
                  ['Rénovation complète appartement', '1 200 – 1 700 €/m²'],
                  ['Salle de bain rénovée', '8 000 – 14 000 €'],
                  ['Cuisine équipée', '10 000 – 16 000 €'],
                  ['Peinture intérieure', '40 – 60 €/m²'],
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Versailles</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
