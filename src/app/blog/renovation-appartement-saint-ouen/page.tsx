import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Saint-Ouen', item: 'https://espacedesignparis.fr/blog/renovation-appartement-saint-ouen' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Saint-Ouen (93) — Guide complet 2025",
  description: "Rénovez votre appartement à Saint-Ouen avec Espace Design : cuisine, salle de bain, parquet, peinture. Devis gratuit sous 48h.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-saint-ouen' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel budget pour rénover un appartement à Saint-Ouen ?',
      acceptedAnswer: { '@type': 'Answer', text: "À Saint-Ouen, une rénovation complète coûte entre 800 et 1 400 €/m² en raison de la forte demande liée au Grand Paris Express. Pour un T3 de 60 m², le budget varie entre 48 000 et 84 000 € selon l'état du logement et les matériaux choisis." },
    },
    {
      '@type': 'Question',
      name: 'Intervenez-vous pour des appartements en copropriété à Saint-Ouen ?',
      acceptedAnswer: { '@type': 'Answer', text: "Oui, Espace Design intervient dans tous les types de copropriétés à Saint-Ouen, des anciens immeubles haussmanniens aux programmes neufs du quartier des Puces. Nous gérons les démarches et coordonnons tous les corps de métier." },
    },
    {
      '@type': 'Question',
      name: 'Comment obtenir un devis à Saint-Ouen ?',
      acceptedAnswer: { '@type': 'Answer', text: "Remplissez notre formulaire en ligne ou appelez-nous directement. Nous intervenons à Saint-Ouen et dans tout le 93 pour un devis gratuit sous 48h." },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Saint-Ouen (93) | Espace Design',
  description: 'Rénovez votre appartement à Saint-Ouen avec Espace Design : cuisine, salle de bain, parquet, peinture. Devis gratuit sous 48h.',
}

export default function RenovationSaintOuen() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement à Saint-Ouen</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Saint-Ouen connaît une transformation urbaine accélérée grâce au Grand Paris Express et à l'essor
          du quartier des Puces. Dans ce contexte de forte valorisation immobilière, rénover votre appartement
          est un investissement particulièrement stratégique. Espace Design vous accompagne pour sublimer votre bien.
        </p>
      </section>
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Saint-Ouen, un marché immobilier en plein essor</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Limitrophe du 17e arrondissement de Paris, Saint-Ouen attire une nouvelle population de jeunes actifs et
            d'investisseurs attirés par ses prix encore abordables et sa desserte en transports (ligne 13, future ligne 14).
            Le parc immobilier mêle immeubles anciens du début du XXe siècle et programmes neufs issus des grands projets
            de rénovation urbaine. Rénover un appartement ici peut doubler sa valeur locative en quelques semaines.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Espace Design est habitué aux chantiers à Saint-Ouen : rénovation complète d'appartements anciens,
            ouverture de cuisine sur séjour, refonte totale de salles de bain, reprise d'électricité aux normes,
            isolation phonique entre deux logements. Nos artisans qualifiés interviennent dans le respect des
            règlements de copropriété et des délais convenus.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Rénovation complète ou partielle',
              'Cuisine et salle de bain sur mesure',
              'Parquet massif et stratifié',
              'Peinture et revêtements muraux',
              'Électricité et plomberie',
              'Devis gratuit sous 48h',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Saint-Ouen</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">
            Devis gratuit <ArrowRight size={16} />
          </Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors">
            <Phone size={16} />06 11 78 38 67
          </a>
        </div>
      </section>
    </>
  )
}
