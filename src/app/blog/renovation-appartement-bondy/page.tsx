import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Bondy', item: 'https://espacedesignparis.fr/blog/renovation-appartement-bondy' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Bondy (93) — Guide complet 2025",
  description: "Rénovez votre appartement ou pavillon à Bondy avec Espace Design : cuisine, salle de bain, parquet, peinture. Devis gratuit sous 48h, artisan qualifié Seine-Saint-Denis.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-bondy' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le coût d\'une rénovation d\'appartement à Bondy ?',
      acceptedAnswer: { '@type': 'Answer', text: 'À Bondy, le coût d\'une rénovation complète se situe entre 650 et 1 100 €/m². Le marché locatif actif de la ville rend les travaux de rénovation particulièrement rentables pour les investisseurs.' },
    },
    {
      '@type': 'Question',
      name: 'Rénovez-vous aussi des pavillons à Bondy ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, Espace Design intervient aussi bien dans les appartements que dans les pavillons et maisons à Bondy. Nous réalisons des rénovations complètes ou partielles adaptées à chaque type de bien.' },
    },
    {
      '@type': 'Question',
      name: 'Proposez-vous des devis rapides pour les propriétaires bailleurs à Bondy ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Absolument. Nous proposons des devis gratuits sous 48h pour les propriétaires bailleurs souhaitant remettre un bien en état entre deux locataires ou valoriser un investissement locatif à Bondy.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Bondy (93) | Espace Design',
  description: 'Rénovez votre appartement ou pavillon à Bondy avec Espace Design : cuisine, salle de bain, parquet, peinture. Devis gratuit sous 48h, artisan qualifié Seine-Saint-Denis.',
}

export default function RenovationBondy() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement à Bondy</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">En Seine-Saint-Denis, Bondy concentre pavillons, immeubles collectifs et une forte demande locative. Nos artisans rénovent votre bien avec soin et efficacité.</p>
      </section>
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Bondy : un marché immobilier dynamique en Seine-Saint-Denis</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Bondy est une ville de Seine-Saint-Denis en plein essor, desservie par le RER E et bientôt par le Grand Paris Express. Son tissu immobilier mêle pavillons de banlieue construits dans les années 50 à 70, copropriétés collectives et quelques résidences récentes. La forte demande locative liée à la proximité de Paris et des pôles d'emploi en fait un territoire privilégié pour les investisseurs immobiliers, qui cherchent à valoriser des biens souvent vieillissants par des travaux de rénovation ciblés.</p>
          <p className="text-gray-600 leading-relaxed mb-6">Espace Design intervient à Bondy pour des rénovations complètes ou partielles, que vous soyez propriétaire occupant ou bailleur. Nous réalisons la remise à neuf de cuisines et salles de bain, la pose de parquet et de carrelage, la réfection des peintures et des cloisons, ainsi que la mise aux normes des installations électriques et de plomberie. Notre objectif : un chantier propre, respectant les délais, pour un résultat à la hauteur de vos attentes.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Rénovation appartement et pavillon',
              'Cuisine équipée et salle de bain moderne',
              'Pose de parquet et carrelage',
              'Peinture et finitions soignées',
              'Mise aux normes électriques et plomberie',
              'Rénovation locative entre deux locataires',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2"><CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" /><span className="text-sm text-gray-600">{p}</span></div>
            ))}
          </div>
          <h2 className="font-display text-xl font-semibold text-[#1C1C1C] mt-6 mb-4">FAQ</h2>
          <div className="space-y-3">
            {schemaFAQ.mainEntity.map((faq) => (
              <div key={faq.name} className="border border-gray-200 rounded p-3">
                <p className="font-semibold text-[#1C1C1C] mb-1 text-sm">{faq.name}</p>
                <p className="text-xs text-gray-600">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Bondy</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
