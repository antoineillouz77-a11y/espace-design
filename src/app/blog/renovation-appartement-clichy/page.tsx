import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Clichy', item: 'https://espacedesignparis.fr/blog/renovation-appartement-clichy' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Clichy (92) — Guide complet 2025",
  description: "Rénovez votre appartement à Clichy avec Espace Design : lofts, espaces ouverts, cuisine, salle de bain. Devis gratuit sous 48h, artisan qualifié.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-clichy' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le coût d\'une rénovation de loft à Clichy ?',
      acceptedAnswer: { '@type': 'Answer', text: 'La rénovation d\'un loft à Clichy varie entre 900 et 1 800 €/m² selon les finitions et l\'état initial. Les projets incluent souvent des travaux de structure, de plomberie et d\'électricité en plus des finitions.' },
    },
    {
      '@type': 'Question',
      name: 'Gérez-vous les contraintes des copropriétés à Clichy ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, Espace Design maîtrise la réglementation des copropriétés. Nous vous accompagnons dans les démarches de déclaration préalable si des travaux en parties communes ou des modifications de façade sont nécessaires.' },
    },
    {
      '@type': 'Question',
      name: 'Rénovez-vous aussi des appartements en vue d\'une mise en location à Clichy ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Absolument. Clichy attire de nombreux locataires grâce à sa proximité avec Paris. Nous proposons des formules de rénovation locative optimisées pour maximiser le rendement tout en maîtrisant les coûts.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Clichy (92) | Espace Design',
  description: 'Rénovez votre appartement à Clichy avec Espace Design : lofts, espaces ouverts, cuisine, salle de bain. Devis gratuit sous 48h, artisan qualifié.',
}

export default function RenovationClichy() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement à Clichy</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Aux portes des 17e et 18e arrondissements, Clichy se transforme rapidement. Lofts industriels, appartements haussmanniens : nous rénovons tous les profils de biens.</p>
      </section>
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Clichy, ville en pleine transformation immobilière</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Clichy bénéficie d'une position stratégique en limite du boulevard périphérique, juste au nord de Paris. La ville connaît depuis plusieurs années une mutation profonde de son tissu urbain : d'anciens entrepôts et bâtiments industriels se convertissent en lofts et appartements atypiques, pendant que des résidences neuves sortent de terre le long des berges de Seine. Ce dynamisme attire une population jeune et active, soucieuse d'un habitat moderne et fonctionnel.</p>
          <p className="text-gray-600 leading-relaxed mb-6">Espace Design intervient régulièrement à Clichy pour des projets ambitieux : ouverture de cloisons pour créer des espaces de vie aérés, rénovation de salles de bain avec douche à l'italienne, pose de parquet en chêne massif, réfection complète des installations électriques et de plomberie. Notre équipe s'adapte aux contraintes des bâtiments anciens comme aux exigences des résidences récentes en copropriété.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Transformation de loft et espace industriel',
              'Ouverture de cloisons et création d\'espaces',
              'Cuisine ouverte sur séjour',
              'Salle de bain design et fonctionnelle',
              'Parquet chêne massif et stratifié',
              'Rénovation locative clé en main',
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Clichy</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
