import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Arcueil', item: 'https://espacedesignparis.fr/blog/renovation-appartement-arcueil' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Arcueil (94) — Guide complet 2025",
  description: "Rénovez votre appartement à Arcueil avec Espace Design : cuisine, salle de bain, parquet, peinture. Devis gratuit sous 48h.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-arcueil' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel budget pour rénover un appartement à Arcueil ?',
      acceptedAnswer: { '@type': 'Answer', text: "À Arcueil, une rénovation complète coûte entre 700 et 1 300 €/m². Pour un appartement de 65 m², prévoyez entre 45 500 et 84 500 € selon l'état du bien et les matériaux sélectionnés." },
    },
    {
      '@type': 'Question',
      name: 'Quels travaux réalisez-vous à Arcueil ?',
      acceptedAnswer: { '@type': 'Answer', text: "Espace Design réalise à Arcueil tous types de travaux de rénovation : cuisine, salle de bain, parquet, peinture, isolation, électricité, plomberie et cloisons." },
    },
    {
      '@type': 'Question',
      name: 'Comment obtenir un devis à Arcueil ?',
      acceptedAnswer: { '@type': 'Answer', text: "Contactez-nous via le formulaire ou par téléphone. Nous proposons un devis gratuit sous 48h avec déplacement gratuit dans tout le Val-de-Marne (94)." },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Arcueil (94) | Espace Design',
  description: "Rénovez votre appartement à Arcueil avec Espace Design : cuisine, salle de bain, parquet, peinture. Devis gratuit sous 48h.",
}

export default function RenovationArcueil() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement à Arcueil</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Arcueil, ville populaire et bien desservie du Val-de-Marne, séduit par ses prix immobiliers accessibles et sa proximité avec le 14e arrondissement de Paris. Espace Design y réalise des rénovations soignées pour transformer votre appartement.</p>
      </section>
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Rénovation d'appartement à Arcueil : modernisez votre intérieur</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Arcueil (94110) est une commune attrayante pour les primo-accédants et les investisseurs, grâce à des prix au m² plus accessibles que dans les communes voisines tout en bénéficiant d'une excellente connexion à Paris via le RER B et le tramway T6. Beaucoup d'appartements anciens y offrent un fort potentiel de rénovation pour gagner en confort et en valeur patrimoniale.</p>
          <p className="text-gray-600 leading-relaxed mb-6">Espace Design intervient à Arcueil pour des chantiers de rénovation complets ou ciblés : refonte de cuisine aménagée, transformation de salle de bain, pose de parquet flottant ou massif, travaux de peinture et de mise aux normes électriques. Notre approche personnalisée garantit un résultat adapté à vos goûts et à votre budget.</p>
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Arcueil</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
