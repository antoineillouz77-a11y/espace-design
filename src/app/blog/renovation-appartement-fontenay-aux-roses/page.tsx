import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Fontenay-aux-Roses', item: 'https://espacedesignparis.fr/blog/renovation-appartement-fontenay-aux-roses' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Fontenay-aux-Roses (92) — Guide complet 2025",
  description: "Rénovez votre appartement à Fontenay-aux-Roses avec Espace Design : cuisine, salle de bain, parquet, peinture. Devis gratuit sous 48h.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-fontenay-aux-roses' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel budget pour rénover un appartement à Fontenay-aux-Roses ?',
      acceptedAnswer: { '@type': 'Answer', text: "À Fontenay-aux-Roses, une rénovation complète coûte entre 750 et 1 300 €/m². Pour un T3 de 65 m², prévoyez entre 48 000 et 85 000 € selon l'état du logement." },
    },
    {
      '@type': 'Question',
      name: 'Quels travaux réalisez-vous à Fontenay-aux-Roses ?',
      acceptedAnswer: { '@type': 'Answer', text: "Espace Design intervient à Fontenay-aux-Roses pour cuisine, salle de bain, parquet, peinture, cloisons, électricité, plomberie et isolation." },
    },
    {
      '@type': 'Question',
      name: 'Comment obtenir un devis à Fontenay-aux-Roses ?',
      acceptedAnswer: { '@type': 'Answer', text: "Contactez-nous par formulaire ou téléphone. Devis gratuit sous 48h, déplacement gratuit dans tout le 92." },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Fontenay-aux-Roses (92) | Espace Design',
  description: "Rénovez votre appartement à Fontenay-aux-Roses avec Espace Design : cuisine, salle de bain, parquet, peinture. Devis gratuit sous 48h.",
}

export default function RenovationFontenayAuxRoses() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement à Fontenay-aux-Roses</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Ville résidentielle du sud des Hauts-de-Seine, Fontenay-aux-Roses attire de nombreux propriétaires souhaitant moderniser leur appartement. Espace Design vous accompagne pour tous vos travaux de rénovation dans le 92.
        </p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Pourquoi rénover votre appartement à Fontenay-aux-Roses ?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Fontenay-aux-Roses dispose d'un parc immobilier varié, entre immeubles des années 70 et résidences récentes. De nombreux appartements nécessitent une remise au goût du jour : refonte de la cuisine, modernisation de la salle de bain, pose de parquet ou remplacement de la peinture. Un appartement rénové voit sa valeur augmenter significativement sur le marché des Hauts-de-Seine.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Espace Design intervient à Fontenay-aux-Roses avec des artisans qualifiés et assurés. Nous gérons chaque chantier de A à Z, du devis à la réception des travaux, en respectant vos délais et votre budget. Nos équipes sont habituées aux contraintes des copropriétés du 92.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Rénovation complète ou partielle',
              'Cuisine et salle de bain',
              'Parquet et carrelage',
              'Peinture et revêtements',
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Fontenay-aux-Roses</h2>
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
