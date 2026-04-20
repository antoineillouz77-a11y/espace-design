import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Renovation appartement Montfermeil', item: 'https://espacedesignparis.fr/blog/renovation-appartement-montfermeil' },
  ],
}
const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Renovation appartement Montfermeil (93) — Guide complet 2025",
  description: "Renovez votre appartement a Montfermeil avec Espace Design : cuisine, salle de bain, parquet, peinture. Devis gratuit sous 48h.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-montfermeil' },
}
const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel budget pour renover un appartement a Montfermeil ?',
      acceptedAnswer: { '@type': 'Answer', text: 'A Montfermeil, une renovation complete coute entre 650 et 1 100 euros/m2. Pour un T3 de 60 m2, comptez entre 39 000 et 66 000 euros.' },
    },
    {
      '@type': 'Question',
      name: 'Intervenez-vous en Seine-Saint-Denis pour tous les travaux ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, Espace Design realise dans tout le 93 : cuisine, salle de bain, parquet, peinture, cloisons, isolation, electricite et plomberie.' },
    },
    {
      '@type': 'Question',
      name: 'Comment obtenir un devis a Montfermeil ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Contactez-nous par formulaire ou telephone. Devis gratuit sous 48h, deplacement gratuit dans tout le 93.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Renovation appartement Montfermeil (93) | Espace Design',
  description: 'Renovez votre appartement a Montfermeil avec Espace Design : cuisine, salle de bain, parquet, peinture. Devis gratuit sous 48h.',
}

export default function RenovationMontfermeil() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Renovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Renovation appartement a Montfermeil</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Artisan renovation en Seine-Saint-Denis — cuisine, salle de bain, parquet, peinture. Espace Design intervient a Montfermeil avec devis gratuit sous 48h.
        </p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Renovation d'appartement a Montfermeil : ce qu'il faut savoir</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Montfermeil, situee en bordure de la foret de Bondy, connait un renouveau immobilier notable. De nombreux proprietaires font le choix de renover leur appartement pour profiter d'un cadre de vie ameliore ou pour valoriser leur patrimoine avant une mise en location ou une vente. Espace Design accompagne ces projets avec rigueur et transparence.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Notre societe intervient sur tout type de travaux : refection complete d'une salle de bain, creation d'une nouvelle cuisine ouverte, pose de parquet massif ou contrecolle, isolation thermique et acoustique, mise aux normes electriques. Nous etablissons un devis detaille et gratuit, sans engagement, sous 48 heures apres visite de votre logement a Montfermeil.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Renovation complete ou partielle',
              'Cuisine et salle de bain',
              'Parquet et carrelage',
              'Peinture et revetements',
              'Electricite et plomberie',
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet a Montfermeil</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifie, assurance decennale.</p>
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
