import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Rosny-sous-Bois', item: 'https://espacedesignparis.fr/blog/renovation-appartement-rosny-sous-bois' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Rosny-sous-Bois : guide complet 2025",
  description: "Rénover son appartement à Rosny-sous-Bois (93) : immeubles récents et anciens, proche Fontenay-sous-Bois. Prix 2025, artisan qualifié — Espace Design Seine-Saint-Denis.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-rosny-sous-bois' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel budget prévoir pour rénover un appartement à Rosny-sous-Bois ?',
      acceptedAnswer: { '@type': 'Answer', text: 'À Rosny-sous-Bois, une rénovation complète est estimée entre 1 000 et 1 400 €/m² selon le type de bien et les matériaux choisis. La ville dispose d\'un parc immobilier mixte entre immeubles anciens nécessitant une remise à niveau complète et immeubles récents nécessitant principalement des travaux de finition et de modernisation.' },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte la rénovation d\'une cuisine à Rosny-sous-Bois ?',
      acceptedAnswer: { '@type': 'Answer', text: 'La rénovation d\'une cuisine à Rosny-sous-Bois est estimée entre 8 000 et 14 000 €, pose et fournitures comprises. Ce budget couvre la dépose de l\'ancienne cuisine, la plomberie, l\'électricité, le carrelage ou revêtement de sol, et l\'installation du nouveau mobilier équipé. Nous travaillons avec plusieurs gammes de fabricants pour s\'adapter à tous les budgets.' },
    },
    {
      '@type': 'Question',
      name: 'Espace Design propose-t-il un service clé en main à Rosny-sous-Bois ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, Espace Design propose un service clé en main complet à Rosny-sous-Bois. Nous coordonnons l\'ensemble des corps de métier (plomberie, électricité, menuiserie, carrelage, peinture) pour vous éviter la gestion de multiples artisans. Un seul interlocuteur, un seul contrat, une garantie décennale sur tous les travaux structurels.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Rosny-sous-Bois (93) — Espace Design',
  description: 'Rénover son appartement à Rosny-sous-Bois (93) : immeubles récents et anciens, proche Fontenay-sous-Bois. Prix 2025, artisan qualifié — Espace Design Seine-Saint-Denis.',
}

export default function RenovationRosnySousBois() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement Rosny-sous-Bois</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Aux portes de Fontenay-sous-Bois et bien connectée à Paris via le RER E, Rosny-sous-Bois est une ville en développement avec un parc immobilier diversifié. Espace Design rénove vos espaces avec exigence et transparence.</p>
      </section>
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Rosny-sous-Bois : un marché immobilier en pleine évolution</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Rosny-sous-Bois bénéficie d'une localisation avantageuse à l'est de Paris, entre Fontenay-sous-Bois et Noisy-le-Grand. La ville est desservie par le RER E et le futur Grand Paris Express (ligne 11), ce qui renforce son attractivité pour les investisseurs et les primo-accédants. Son parc immobilier mêle immeubles anciens des années 60-70 et résidences plus récentes des années 2000.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Espace Design intervient à Rosny-sous-Bois pour répondre à ces deux profils de biens : mise à niveau complète pour les immeubles anciens (électricité, isolation, plomberie) et modernisation des finitions pour les logements plus récents (cuisine, salle de bain, revêtements de sol). Dans tous les cas, nous garantissons un suivi rigoureux et des finitions soignées.</p>
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Nos prestations de rénovation à Rosny-sous-Bois</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Rénovation complète appartement',
              'Salle de bain et douche à l\'italienne',
              'Cuisine équipée ouverte ou fermée',
              'Peinture intérieure et enduits',
              'Carrelage et revêtements de sol',
              'Électricité et plomberie aux normes',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2"><CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" /><span className="text-sm text-gray-600">{p}</span></div>
            ))}
          </div>
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Prix rénovation Rosny-sous-Bois 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1C1C1C] text-white"><th className="p-3 text-left">Type de travaux</th><th className="p-3 text-right">Prix indicatif</th></tr></thead>
              <tbody>{[
                ['Rénovation complète appartement', '1 000 – 1 400 €/m²'],
                ['Salle de bain clé en main', '7 000 – 12 000 €'],
                ['Cuisine équipée complète', '8 000 – 14 000 €'],
                ['Peinture intérieure', '40 – 60 €/m²'],
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Rosny-sous-Bois</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
