import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Meudon', item: 'https://espacedesignparis.fr/blog/renovation-appartement-meudon' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Meudon (92) : tarifs et conseils 2025",
  description: "Rénovation d'appartement et de maison à Meudon (92) : prix 2025, prestations, artisans qualifiés dans les Hauts-de-Seine. Devis gratuit sous 48h.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-meudon' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation complète à Meudon ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pour un appartement ou une maison à Meudon, le budget de rénovation complète se situe entre 1 100 et 1 600 €/m², reflet du marché résidentiel haut de gamme des Hauts-de-Seine (92).' },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte la rénovation d\'une salle de bain à Meudon ?',
      acceptedAnswer: { '@type': 'Answer', text: 'La rénovation d\'une salle de bain à Meudon coûte généralement entre 8 000 et 14 000 € pour une surface standard de 5 à 8 m², matériaux haut de gamme inclus.' },
    },
    {
      '@type': 'Question',
      name: 'Espace Design rénove-t-il aussi les maisons individuelles à Meudon ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, Espace Design intervient pour les maisons individuelles comme pour les appartements à Meudon et dans tout le département 92. Extension, rénovation complète ou partielle, notre équipe s\'adapte à tous les types de biens.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Meudon (92) — Tarifs 2025 | Espace Design',
  description: "Rénovation d'appartement et de maison à Meudon (92) : prix 2025, prestations, artisans qualifiés dans les Hauts-de-Seine. Devis gratuit sous 48h.",
}

export default function RenovationMeudonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement Meudon</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Artisan rénovation à Meudon (92) — ville résidentielle verdoyante des Hauts-de-Seine. Appartements, maisons, rénovation clé en main. Devis gratuit sous 48h.</p>
      </section>
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Rénover à Meudon : un marché haut de gamme</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Meudon est l'une des villes les plus verdoyantes des Hauts-de-Seine (92), appréciée pour son cadre de vie calme à proximité immédiate de Paris. Son parc immobilier mêle maisons bourgeoises, villas avec jardin et appartements dans des immeubles de standing, dont beaucoup datent des années 1970 à 2000 et méritent une mise à jour complète.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Espace Design intervient régulièrement à Meudon pour des rénovations soignées adaptées aux exigences d'un marché résidentiel exigeant : matériaux nobles, finitions irréprochables, respect des délais. Qu'il s'agisse d'une rénovation complète d'appartement, d'une cuisine haut de gamme ou d'une salle de bain de prestige, nous vous accompagnons de A à Z.</p>
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Nos prestations à Meudon</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Rénovation complète appartement et maison',
              'Cuisine haut de gamme sur mesure',
              'Salle de bain prestige clé en main',
              'Parquet massif chêne, pose et vitrification',
              'Peinture décorative et enduits béton',
              'Extension et réaménagement de combles',
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
                  ['Rénovation complète appartement', '1 100 – 1 600 €/m²'],
                  ['Rénovation salle de bain', '8 000 – 14 000 €'],
                  ['Rénovation cuisine', '10 000 – 16 000 €'],
                  ['Peinture + parquet (hors fourniture)', '180 – 380 €/m²'],
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
