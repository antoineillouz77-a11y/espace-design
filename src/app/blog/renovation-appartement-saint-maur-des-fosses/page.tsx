import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Saint-Maur-des-Fossés', item: 'https://espacedesignparis.fr/blog/renovation-appartement-saint-maur-des-fosses' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Saint-Maur-des-Fossés : guide complet 2025",
  description: "Rénover son appartement à Saint-Maur-des-Fossés (94) : villas et appartements cossus sur la Marne. Prix 2025, artisan qualifié — Espace Design Val-de-Marne.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-saint-maur-des-fosses' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le coût d\'une rénovation haut de gamme à Saint-Maur-des-Fossés ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Saint-Maur-des-Fossés est une ville résidentielle prisée. Une rénovation complète haut de gamme y est estimée entre 1 100 et 1 600 €/m². Pour une villa ou un grand appartement avec matériaux nobles (parquet massif, faïences premium, cuisine sur mesure), le budget peut dépasser 1 800 €/m².' },
    },
    {
      '@type': 'Question',
      name: 'Espace Design intervient-il sur les villas de Saint-Maur-des-Fossés ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui. Espace Design rénove aussi bien les appartements que les maisons et villas de Saint-Maur-des-Fossés. Nous gérons l\'ensemble des corps de métier : maçonnerie, plomberie, électricité, carrelage, menuiserie et décoration intérieure, pour un résultat clé en main.' },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte la rénovation d\'une salle de bain à Saint-Maur-des-Fossés ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pour une salle de bain de standing à Saint-Maur-des-Fossés, comptez entre 8 000 et 15 000 € selon la superficie et les équipements choisis (douche à l\'italienne, baignoire îlot, double vasque, chauffage au sol). Espace Design vous propose plusieurs gammes de matériaux adaptées à votre budget.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Saint-Maur-des-Fossés (94) — Espace Design',
  description: 'Rénover son appartement à Saint-Maur-des-Fossés (94) : villas et appartements cossus sur la Marne. Prix 2025, artisan qualifié — Espace Design Val-de-Marne.',
}

export default function RenovationSaintMaurDesFosses() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement Saint-Maur-des-Fossés</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Ville résidentielle et verdoyante au bord de la Marne, Saint-Maur-des-Fossés abrite villas de caractère et appartements cossus. Espace Design propose des rénovations sur mesure adaptées aux exigences de cette commune prisée du Val-de-Marne.</p>
      </section>
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Un cadre résidentiel qui mérite une rénovation à la hauteur</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Saint-Maur-des-Fossés est l'une des villes les plus agréables à vivre du Val-de-Marne. Son parc immobilier est varié : maisons de ville, pavillons avec jardins, immeubles de standing et résidences en bord de Marne. Les propriétaires y investissent volontiers dans des rénovations soignées pour valoriser leur bien dans un marché immobilier dynamique.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Espace Design s'adapte aux exigences de ce secteur haut de gamme. Nous travaillons avec des matériaux de qualité, des artisans spécialisés et un suivi de chantier rigoureux pour garantir un résultat à la hauteur de vos attentes. Chaque projet est traité comme un projet unique.</p>
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Nos prestations de rénovation à Saint-Maur-des-Fossés</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Rénovation complète appartement et villa',
              'Salle de bain haut de gamme',
              'Cuisine sur mesure ou semi-sur mesure',
              'Parquet massif et stratifié haut de gamme',
              'Cloisons et aménagement intérieur',
              'Ravalement et isolation par l\'extérieur',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2"><CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" /><span className="text-sm text-gray-600">{p}</span></div>
            ))}
          </div>
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Prix rénovation Saint-Maur-des-Fossés 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1C1C1C] text-white"><th className="p-3 text-left">Type de travaux</th><th className="p-3 text-right">Prix indicatif</th></tr></thead>
              <tbody>{[
                ['Rénovation complète appartement', '1 100 – 1 600 €/m²'],
                ['Salle de bain haut de gamme', '8 000 – 15 000 €'],
                ['Cuisine équipée sur mesure', '10 000 – 17 000 €'],
                ['Parquet massif posé', '65 – 95 €/m²'],
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Saint-Maur-des-Fossés</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
