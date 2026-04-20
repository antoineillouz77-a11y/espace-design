import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Colombes', item: 'https://espacedesignparis.fr/blog/renovation-appartement-colombes' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Colombes (92) — Guide complet 2025",
  description: "Rénovez votre appartement à Colombes avec Espace Design. Artisan qualifié en Hauts-de-Seine, devis gratuit sous 48h. Prix rénovation complète, salle de bain, cuisine et parquet.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-colombes' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation appartement à Colombes ?',
      acceptedAnswer: { '@type': 'Answer', text: 'À Colombes, une rénovation complète coûte entre 1 100 et 1 600 €/m². La salle de bain est facturée entre 8 000 et 14 000 € et la cuisine entre 9 000 et 15 000 € selon le niveau de finition.' },
    },
    {
      '@type': 'Question',
      name: 'Colombes est-elle éligible aux aides à la rénovation ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui. Les propriétaires occupants peuvent bénéficier de MaPrimeRénov\' pour les travaux d\'isolation et de chauffage. Les travaux d\'amélioration de l\'habitat locatif peuvent également ouvrir droit à des dispositifs de défiscalisation.' },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps faut-il pour rénover un appartement à Colombes ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pour un appartement de 50 à 70 m², une rénovation complète prend 5 à 9 semaines. Une rénovation partielle (peinture et revêtements) peut être réalisée en 1 à 2 semaines.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Colombes (92) — Espace Design',
  description: 'Rénovez votre appartement à Colombes avec Espace Design. Artisan qualifié en Hauts-de-Seine, devis gratuit sous 48h. Prix rénovation complète, salle de bain, cuisine et parquet.',
}

export default function RenovationAppartementColombes() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement à Colombes (92)</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Ancienne ville industrielle reconvertie, Colombes concentre une forte demande locative et de nombreux projets de rénovation. Espace Design intervient pour valoriser votre bien avec soin.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Colombes, un marché locatif en pleine évolution</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Colombes (92700) est la troisième plus grande ville des Hauts-de-Seine. Son tissu immobilier se compose d'immeubles des années 1950-1980, d'anciennes maisons ouvrières reconverties et de quelques programmes récents. La ville attire de nombreux investisseurs souhaitant profiter de prix encore accessibles tout en étant à 20 minutes de Paris La Défense.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Rénover un appartement à Colombes, c'est souvent moderniser des logements construits avant les normes thermiques actuelles : simple vitrage, chauffage électrique vieillissant, salle de bain datée. Nos équipes maîtrisent ces chantiers et proposent des solutions adaptées au budget des propriétaires bailleurs comme des occupants.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Nos prestations à Colombes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Rénovation complète clé en main',
              'Salle de bain et salle d\'eau',
              'Cuisine aménagée et équipée',
              'Pose et rénovation de parquet',
              'Peinture et isolation intérieure',
              'Mise aux normes électriques',
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
                  ['Rénovation complète', '1 100 – 1 600 €/m²'],
                  ['Salle de bain', '8 000 – 14 000 €'],
                  ['Cuisine', '9 000 – 15 000 €'],
                  ['Parquet (pose)', '60 – 85 €/m²'],
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
