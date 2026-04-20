import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Argenteuil', item: 'https://espacedesignparis.fr/blog/renovation-appartement-argenteuil' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Argenteuil (95) — Guide complet 2025",
  description: "Tout savoir sur la rénovation d'appartement à Argenteuil : prix 2025, artisans qualifiés Val-d'Oise, conseils et aides pour réussir vos travaux dans la plus grande ville du 95.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-argenteuil' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le coût d\'une rénovation d\'appartement à Argenteuil ?',
      acceptedAnswer: { '@type': 'Answer', text: 'À Argenteuil, une rénovation complète coûte entre 1 000 et 1 400 €/m². Les travaux ciblés (salle de bain, cuisine) permettent d\'augmenter significativement la valeur d\'un bien avec un investissement plus limité.' },
    },
    {
      '@type': 'Question',
      name: 'Argenteuil est-elle bien desservie par les transports ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, Argenteuil bénéficie du RER C, du Transilien H et de plusieurs lignes de bus. La future ligne 15 du Grand Paris Express renforcera encore la desserte et valorisera l\'immobilier local dans les prochaines années.' },
    },
    {
      '@type': 'Question',
      name: 'Quelles aides financières pour rénover à Argenteuil ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Les propriétaires éligibles peuvent bénéficier de MaPrimeRénov\', de l\'Éco-PTZ, des aides de l\'Anah et des CEE (certificats d\'économies d\'énergie). La ville d\'Argenteuil peut également proposer des aides locales spécifiques aux rénovations énergétiques.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Argenteuil (95) — Prix & Artisans 2025 | Espace Design',
  description: "Tout savoir sur la rénovation d'appartement à Argenteuil : prix 2025, artisans qualifiés Val-d'Oise, conseils et aides pour réussir vos travaux dans la plus grande ville du 95.",
}

export default function RenovationArgenteuil() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement à Argenteuil (95)</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Première ville du Val-d'Oise par sa population, Argenteuil offre un marché immobilier accessible avec un fort potentiel de valorisation. Espace Design vous accompagne pour des travaux de qualité au meilleur prix.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Pourquoi investir dans la rénovation à Argenteuil ?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Avec plus de 110 000 habitants, Argenteuil est la deuxième ville d'Île-de-France hors Paris et la plus grande ville du Val-d'Oise. Son marché immobilier propose des appartements à des prix nettement inférieurs à ceux de la proche banlieue ouest, avec des rendements locatifs attractifs. La rénovation d'un appartement ancien permet de se constituer un patrimoine solide tout en profitant des perspectives offertes par le Grand Paris Express.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Espace Design intervient régulièrement sur Argenteuil et ses quartiers (Val-Notre-Dame, Orgemont, Coteaux). Nous connaissons les spécificités du bâti local — souvent construit dans les années 1950 à 1980 — et adaptons notre approche pour garantir des résultats durables dans le respect de votre budget.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Nos prestations de rénovation à Argenteuil</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Rénovation complète tous corps d\'état',
              'Salle de bain clé en main',
              'Cuisine équipée et aménagée',
              'Peinture et décoration intérieure',
              'Remplacement fenêtres et menuiseries',
              'Électricité et plomberie',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Prix rénovation Argenteuil 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1C1C1C] text-white"><th className="p-3 text-left">Type de travaux</th><th className="p-3 text-right">Prix indicatif</th></tr></thead>
              <tbody>
                {[
                  ['Rénovation complète', '1 000 – 1 400 €/m²'],
                  ['Salle de bain', '7 000 – 12 000 €'],
                  ['Cuisine', '8 000 – 14 000 €'],
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
              { href: '/blog/prix-renovation-appartement-paris', label: 'Prix rénovation' },
              { href: '/blog', label: 'Tous les articles' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-xs border border-gray-200 rounded px-3 py-1.5 text-gray-600 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Argenteuil</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
