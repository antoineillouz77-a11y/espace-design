import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Antony', item: 'https://espacedesignparis.fr/blog/renovation-appartement-antony' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Antony (92) — Guide complet 2025",
  description: "Rénovez votre appartement à Antony avec Espace Design : cuisine, salle de bain, parquet, peinture. Devis gratuit sous 48h.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-antony' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel budget pour rénover un appartement à Antony ?',
      acceptedAnswer: { '@type': 'Answer', text: "À Antony, comptez entre 750 et 1 300 €/m² pour une rénovation complète. Pour un T3 de 65 m², le budget total se situe généralement entre 50 000 et 85 000 €." },
    },
    {
      '@type': 'Question',
      name: 'Quels travaux réalisez-vous à Antony ?',
      acceptedAnswer: { '@type': 'Answer', text: "Espace Design intervient à Antony pour tous types de travaux : rénovation complète, cuisine, salle de bain, parquet, peinture, plomberie, électricité, cloisons et isolation." },
    },
    {
      '@type': 'Question',
      name: 'Comment obtenir un devis à Antony ?',
      acceptedAnswer: { '@type': 'Answer', text: "Contactez-nous via notre formulaire en ligne ou par téléphone. Nous vous proposons un devis gratuit sous 48h avec déplacement gratuit dans tout le 92." },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Antony (92) | Espace Design',
  description: "Rénovez votre appartement à Antony avec Espace Design : cuisine, salle de bain, parquet, peinture. Devis gratuit sous 48h.",
}

export default function RenovationAntony() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement à Antony</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Antony est une ville dynamique du sud des Hauts-de-Seine, réputée pour sa qualité de vie et son excellent réseau de transports. Espace Design intervient à Antony pour transformer vos espaces et moderniser votre appartement de A à Z.</p>
      </section>
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Rénover à Antony : moderniser un parc immobilier varié</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Antony (92160) est une ville résidentielle attractive, desservie par le RER B et le tramway T10, à moins de 15 km de Paris. Son parc immobilier mêle pavillons, copropriétés des années 1970-1980 et résidences récentes. De nombreux propriétaires souhaitent rénover leur appartement pour améliorer leur confort thermique, moderniser les équipements et valoriser leur patrimoine dans un marché immobilier soutenu.</p>
          <p className="text-gray-600 leading-relaxed mb-6">Espace Design gère l'intégralité de vos travaux à Antony : création de cuisine ouverte, rénovation de salle de bain, remplacement de parquet, isolation des murs, mise aux normes électriques. Nos artisans qualifiés interviennent dans les délais convenus et vous tiennent informé à chaque étape du chantier, pour une expérience sans stress.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Rénovation complète ou partielle',
              'Cuisine et salle de bain sur mesure',
              'Parquet massif et stratifié',
              'Peinture et revêtements muraux',
              'Électricité et plomberie',
              'Devis gratuit sous 48h',
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Antony</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
