import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Drancy', item: 'https://espacedesignparis.fr/blog/renovation-appartement-drancy' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Drancy (93) — Guide complet 2025",
  description: "Rénovez votre appartement à Drancy avec Espace Design : cuisine, salle de bain, parquet, peinture. Devis gratuit sous 48h.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-drancy' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel budget pour rénover un appartement à Drancy ?',
      acceptedAnswer: { '@type': 'Answer', text: "À Drancy, une rénovation complète coûte entre 700 et 1 200 €/m². Pour un T3 de 60 m², le budget varie entre 42 000 et 72 000 € selon l'état du logement et les matériaux choisis." },
    },
    {
      '@type': 'Question',
      name: 'Intervenez-vous pour des appartements en copropriété à Drancy ?',
      acceptedAnswer: { '@type': 'Answer', text: "Oui, Espace Design intervient dans tous les types de copropriétés à Drancy, des grands ensembles des années 60 aux résidences plus récentes. Nous gérons les démarches et coordonnons tous les corps de métier." },
    },
    {
      '@type': 'Question',
      name: 'Comment obtenir un devis à Drancy ?',
      acceptedAnswer: { '@type': 'Answer', text: "Remplissez notre formulaire en ligne ou appelez-nous directement. Nous intervenons à Drancy et dans tout le 93 pour un devis gratuit sous 48h." },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Drancy (93) | Espace Design',
  description: 'Rénovez votre appartement à Drancy avec Espace Design : cuisine, salle de bain, parquet, peinture. Devis gratuit sous 48h.',
}

export default function RenovationDrancy() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement à Drancy</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Ville dynamique du nord-est parisien, Drancy attire de nombreux primo-accédants et investisseurs locatifs
          qui souhaitent moderniser leur logement. Espace Design vous propose un accompagnement clé en main pour
          rénover votre appartement à Drancy, du diagnostic initial à la livraison du chantier.
        </p>
      </section>
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Pourquoi rénover votre appartement à Drancy ?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Drancy compte un parc immobilier principalement composé d'immeubles collectifs construits entre les années 50 et 80.
            Ces logements, souvent bien situés à proximité du RER B et des transports en commun, nécessitent des mises à niveau
            pour répondre aux standards actuels de confort et d'efficacité énergétique. Une rénovation bien menée permet
            de valoriser significativement le bien tout en améliorant le quotidien des occupants.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Espace Design intervient à Drancy pour tous types de travaux : rénovation complète d'appartement, transformation
            de cuisine ouverte, modernisation de salle de bain, pose de parquet flottant ou massif, travaux d'électricité
            et de plomberie. Nous coordonnons l'ensemble des corps de métier et vous tenons informé à chaque étape du chantier.
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Drancy</h2>
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
