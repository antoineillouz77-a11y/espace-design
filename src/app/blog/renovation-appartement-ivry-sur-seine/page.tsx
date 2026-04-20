import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Ivry-sur-Seine', item: 'https://espacedesignparis.fr/blog/renovation-appartement-ivry-sur-seine' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Ivry-sur-Seine : guide complet 2025",
  description: "Rénover son appartement à Ivry-sur-Seine (94) : prix, délais, artisans qualifiés. Lofts industriels, studios, T2/T3 — Espace Design intervient dans tout le Val-de-Marne.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-ivry-sur-seine' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix moyen d\'une rénovation complète à Ivry-sur-Seine ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pour une rénovation complète à Ivry-sur-Seine, comptez entre 1 000 et 1 500 €/m² selon l\'état du bien et les matériaux choisis. Un loft industriel reconverti peut nécessiter un budget de 1 300 à 1 800 €/m² en raison des contraintes structurelles spécifiques.' },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps dure une rénovation d\'appartement à Ivry-sur-Seine ?',
      acceptedAnswer: { '@type': 'Answer', text: 'La durée dépend de l\'ampleur des travaux. Une rénovation légère (peinture, revêtements) prend 2 à 4 semaines. Une rénovation complète d\'un T3 dure généralement 6 à 10 semaines. Espace Design planifie chaque chantier pour limiter les délais et vous informer à chaque étape.' },
    },
    {
      '@type': 'Question',
      name: 'Faut-il un permis de construire pour rénover son appartement à Ivry-sur-Seine ?',
      acceptedAnswer: { '@type': 'Answer', text: 'La plupart des rénovations intérieures ne nécessitent pas de permis de construire. Une déclaration préalable est requise en cas de modification de façade ou d\'ouverture en mur porteur. Notre équipe vous accompagne dans les démarches administratives auprès de la mairie d\'Ivry-sur-Seine.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Ivry-sur-Seine (94) — Espace Design',
  description: 'Rénover son appartement à Ivry-sur-Seine (94) : prix, délais, artisans qualifiés. Lofts industriels, studios, T2/T3 — Espace Design intervient dans tout le Val-de-Marne.',
}

export default function RenovationIvrySurSeine() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement Ivry-sur-Seine</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Ivry-sur-Seine (94) : une ville en plein essor où anciens lofts industriels et immeubles modernes offrent un fort potentiel de rénovation. Espace Design intervient sur mesure dans tout le Val-de-Marne.</p>
      </section>
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Pourquoi rénover à Ivry-sur-Seine ?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Ivry-sur-Seine connaît une mutation urbaine remarquable : anciens ateliers reconvertis en lofts, programmes neufs en bord de Seine, immeubles haussmanniens rénovés. La ville attire une clientèle active qui cherche à optimiser son espace tout en valorisant son patrimoine immobilier dans un marché en hausse constante.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Espace Design accompagne les propriétaires ivryens depuis la conception jusqu'à la livraison clé en main. Notre équipe maîtrise les spécificités locales : contraintes des bâtiments industriels reconvertis, règles d'urbanisme de la commune, et accès chantier en zone dense.</p>
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Nos prestations de rénovation à Ivry-sur-Seine</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Rénovation complète loft et appartement',
              'Aménagement salle de bain et cuisine',
              'Création et suppression de cloisons',
              'Peinture, parquet et revêtements',
              'Électricité et plomberie aux normes',
              'Isolation thermique et phonique',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2"><CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" /><span className="text-sm text-gray-600">{p}</span></div>
            ))}
          </div>
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Prix rénovation Ivry-sur-Seine 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1C1C1C] text-white"><th className="p-3 text-left">Type de travaux</th><th className="p-3 text-right">Prix indicatif</th></tr></thead>
              <tbody>{[
                ['Rénovation complète appartement', '1 000 – 1 500 €/m²'],
                ['Rénovation loft industriel', '1 300 – 1 800 €/m²'],
                ['Salle de bain clé en main', '7 000 – 13 000 €'],
                ['Peinture intérieure', '40 – 65 €/m²'],
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Ivry-sur-Seine</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
