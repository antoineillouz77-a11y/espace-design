import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Levallois-Perret', item: 'https://espacedesignparis.fr/blog/renovation-appartement-levallois' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Levallois-Perret : prix et conseils 2025",
  description: "Rénover son appartement à Levallois-Perret : tarifs 2025, étapes et conseils pour les immeubles anciens et modernes de cette commune dense des Hauts-de-Seine.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-levallois' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien coûte la rénovation d\'un appartement à Levallois-Perret ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Le budget d\'une rénovation complète à Levallois-Perret varie entre 1 400 et 1 900 €/m². Pour un appartement de 55 m², cela représente entre 77 000 et 104 500 €. Les travaux partiels (cuisine, salle de bain) sont accessibles dès 8 000 €.' },
    },
    {
      '@type': 'Question',
      name: 'Quelles contraintes pour rénover à Levallois-Perret ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Levallois-Perret est la commune la plus dense de France, ce qui implique des contraintes logistiques importantes : accès limité pour les bennes à gravats, règlements de copropriété stricts et horaires de chantier à respecter. Nos équipes sont habituées à gérer ces contraintes en milieu urbain dense.' },
    },
    {
      '@type': 'Question',
      name: 'Peut-on agrandir un appartement à Levallois-Perret ?',
      acceptedAnswer: { '@type': 'Answer', text: 'L\'agrandissement d\'un appartement (fusion de deux lots, création d\'une véranda) est possible sous réserve d\'autorisation de la copropriété et, le cas échéant, de la mairie. Espace Design vous accompagne dans les démarches administratives et réalise les travaux clés en main.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Levallois-Perret — Prix 2025 | Espace Design',
  description: 'Rénover son appartement à Levallois-Perret : tarifs 2025, étapes et conseils pour les immeubles anciens et modernes de cette commune dense des Hauts-de-Seine.',
}

export default function RenovationLevalloisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement Levallois-Perret</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Levallois-Perret, commune la plus dense de France, cumule appartements anciens et résidences modernes. Voici tout ce qu'il faut savoir pour rénover sereinement en 2025.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Levallois-Perret : rénovation en milieu urbain dense</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Avec plus de 27 000 habitants par km², Levallois-Perret est la commune la plus densément peuplée de France. Son parc immobilier mêle immeubles anciens des années 1900-1940, résidences des années 1960-1980 et constructions récentes. La rénovation y est particulièrement active, portée par un marché immobilier dynamique et des propriétaires désireux de valoriser leur bien.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Espace Design intervient à Levallois-Perret avec une logistique rodée : réservation du monte-charge ou du monte-matériaux à l'avance, coordination avec le syndic, protection des parties communes. Nous gérons les contraintes du chantier en milieu dense pour vous offrir une expérience de rénovation sans stress.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Nos interventions à Levallois</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Rénovation complète tous corps d\'état',
              'Ouverture de cloisons et création d\'espaces ouverts',
              'Salle de bain moderne et fonctionnelle',
              'Cuisine équipée aménagée sur mesure',
              'Parquet contrecollé ou carrelage format XXL',
              'Peinture décorative et revêtements muraux',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Prix rénovation Levallois-Perret 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1C1C1C] text-white"><th className="p-3 text-left">Type de travaux</th><th className="p-3 text-right">Prix indicatif</th></tr></thead>
              <tbody>
                {[
                  ['Rénovation complète appartement', '1 400 – 1 900 €/m²'],
                  ['Salle de bain rénovée', '8 000 – 15 000 €'],
                  ['Cuisine équipée', '12 000 – 18 000 €'],
                  ['Parquet (fourniture et pose)', '75 – 100 €/m²'],
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Levallois-Perret</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
