import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Clamart', item: 'https://espacedesignparis.fr/blog/renovation-appartement-clamart' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Clamart — Guide complet 2025",
  description: "Rénovez votre appartement ou maison à Clamart avec Espace Design : cuisine, salle de bain, parquet, peinture. Devis gratuit sous 48h, artisan RGE.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-clamart' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel budget prévoir pour rénover un appartement à Clamart ?',
      acceptedAnswer: { '@type': 'Answer', text: 'À Clamart, une rénovation complète coûte en moyenne entre 750 et 1 400 €/m². Pour un appartement de 60 m², prévoyez entre 45 000 et 85 000 € selon les matériaux et l\'état du logement.' },
    },
    {
      '@type': 'Question',
      name: 'Intervenez-vous aussi pour les maisons à Clamart ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, Espace Design réalise des travaux de rénovation dans les appartements et les maisons à Clamart. Nous intervenons pour des rénovations complètes ou partielles, avec devis personnalisé et gratuit.' },
    },
    {
      '@type': 'Question',
      name: 'Quels sont les délais pour une rénovation à Clamart ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Selon l\'ampleur des travaux, comptez 3 à 8 semaines pour une rénovation standard à Clamart. Une rénovation partielle (salle de bain ou cuisine) peut être réalisée en 2 à 4 semaines.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Clamart (92) | Espace Design',
  description: 'Rénovez votre appartement ou maison à Clamart avec Espace Design : cuisine, salle de bain, parquet, peinture. Devis gratuit sous 48h, artisan RGE.',
}

export default function RenovationClamart() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement à Clamart</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Ville verdoyante et résidentielle des Hauts-de-Seine, Clamart offre un cadre de vie apprécié. Valorisez votre bien immobilier avec nos experts en rénovation.</p>
      </section>
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Rénovation à Clamart : un marché résidentiel exigeant</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Clamart est une ville résidentielle prisée du 92, connue pour ses espaces verts, sa forêt et son calme à deux pas de Paris. Le parc immobilier y est diversifié : pavillons des années 50-70, copropriétés de standing et quelques immeubles récents autour des axes principaux. Les propriétaires qui souhaitent rénover leur bien font généralement face à des logements bien situés mais nécessitant une remise à niveau en cuisine, salle de bain et revêtements.</p>
          <p className="text-gray-600 leading-relaxed mb-6">Espace Design accompagne les propriétaires et investisseurs de Clamart dans tous leurs projets de rénovation. Que vous souhaitiez rafraîchir un appartement avant une mise en location, réaménager une maison pour votre famille ou créer une cuisine ouverte lumineuse, nos équipes sont à votre service. Nous assurons la coordination complète du chantier, de la dépose à la finition.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Rénovation complète ou partielle',
              'Cuisine sur mesure et aménagement',
              'Salle de bain moderne avec douche à l\'italienne',
              'Parquet, carrelage et revêtements de sol',
              'Peinture et isolation des murs',
              'Mise aux normes électriques et sanitaires',
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Clamart</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
