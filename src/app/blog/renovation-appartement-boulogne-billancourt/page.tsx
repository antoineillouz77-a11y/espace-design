import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Boulogne-Billancourt', item: 'https://espacedesignparis.fr/blog/renovation-appartement-boulogne-billancourt' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Boulogne-Billancourt : tarifs et guide 2025",
  description: "Guide complet pour rénover votre appartement à Boulogne-Billancourt : prix au m², travaux courants, conseils d'artisans qualifiés. Devis gratuit.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-boulogne-billancourt' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le coût d\'une rénovation complète à Boulogne-Billancourt ?',
      acceptedAnswer: { '@type': 'Answer', text: 'À Boulogne-Billancourt, le prix d\'une rénovation complète se situe entre 1 400 et 2 000 €/m² selon les matériaux choisis et l\'état du logement. Pour un appartement de 75 m², le budget total varie entre 105 000 et 150 000 €.' },
    },
    {
      '@type': 'Question',
      name: 'Quels types d\'appartements trouve-t-on à Boulogne-Billancourt ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Boulogne-Billancourt offre un parc immobilier très varié : immeubles haussmanniens en bordure de Paris, résidences des années 1970-1980 dans le quartier du Pont-de-Sèvres, et programmes récents dans le secteur Trapèze. Chaque époque de construction implique des contraintes de rénovation spécifiques.' },
    },
    {
      '@type': 'Question',
      name: 'Quelle durée prévoir pour des travaux à Boulogne ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Une rénovation complète d\'un appartement de 60 à 90 m² à Boulogne-Billancourt nécessite entre 8 et 14 semaines. Les travaux partiels (salle de bain, cuisine) sont réalisés en 3 à 5 semaines. Nos équipes respectent scrupuleusement les horaires d\'intervention autorisés par le règlement de copropriété.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Boulogne-Billancourt — Prix 2025 | Espace Design',
  description: 'Guide complet pour rénover votre appartement à Boulogne-Billancourt : prix au m², travaux courants, conseils d\'artisans qualifiés. Devis gratuit.',
}

export default function RenovationBoulognePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement Boulogne-Billancourt</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Boulogne-Billancourt, deuxième ville d'Île-de-France, accueille un parc immobilier éclectique. Découvrez nos tarifs 2025 et nos conseils pour réussir votre rénovation.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Rénover à Boulogne-Billancourt : entre tradition et modernité</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Boulogne-Billancourt est la deuxième ville la plus peuplée d'Île-de-France, juste après Paris. Son tissu urbain mêle immeubles haussmanniens proches du boulevard Jean Jaurès, résidences des années 1970 et programmes neufs dans le secteur Trapèze. Cette diversité architecturale rend chaque projet de rénovation unique et nécessite une expertise pointue.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Espace Design intervient régulièrement à Boulogne-Billancourt pour des projets de rénovation de toutes envergures. Que vous souhaitiez simplement rafraîchir vos peintures ou engager une restructuration complète de votre appartement, notre équipe vous propose un accompagnement sur mesure, du chiffrage initial jusqu'à la remise des clés.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Travaux les plus demandés à Boulogne</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Rénovation complète et redistribution des pièces',
              'Salle de bain contemporaine',
              'Cuisine ouverte sur séjour',
              'Peinture intérieure et enduits décoratifs',
              'Parquet massif ou carrelage grand format',
              'Isolation phonique entre appartements',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Prix rénovation Boulogne-Billancourt 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1C1C1C] text-white"><th className="p-3 text-left">Type de travaux</th><th className="p-3 text-right">Prix indicatif</th></tr></thead>
              <tbody>
                {[
                  ['Rénovation complète appartement', '1 400 – 2 000 €/m²'],
                  ['Salle de bain rénovée', '9 000 – 16 000 €'],
                  ['Cuisine équipée', '12 000 – 20 000 €'],
                  ['Peinture intérieure', '45 – 70 €/m²'],
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Boulogne-Billancourt</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
