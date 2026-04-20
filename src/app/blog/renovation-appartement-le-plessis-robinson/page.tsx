import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Le Plessis-Robinson', item: 'https://espacedesignparis.fr/blog/renovation-appartement-le-plessis-robinson' },
  ],
}
const schemaArticle = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: "Rénovation appartement Le Plessis-Robinson (92) — Guide complet 2025",
  description: "Rénovez votre appartement au Plessis-Robinson avec Espace Design : cuisine, salle de bain, parquet, peinture. Devis gratuit sous 48h.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15', dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-le-plessis-robinson' },
}
const schemaFAQ = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Quel budget pour rénover au Plessis-Robinson ?', acceptedAnswer: { '@type': 'Answer', text: 'Au Plessis-Robinson, comptez entre 750 et 1 350 euros/m² pour une rénovation complète.' } },
    { '@type': 'Question', name: 'Quels travaux réalisez-vous au Plessis-Robinson ?', acceptedAnswer: { '@type': 'Answer', text: 'Cuisine, salle de bain, parquet, peinture, cloisons, isolation, électricité, plomberie.' } },
    { '@type': 'Question', name: 'Comment obtenir un devis au Plessis-Robinson ?', acceptedAnswer: { '@type': 'Answer', text: 'Formulaire ou téléphone — devis gratuit sous 48h, déplacement gratuit.' } },
  ],
}
export const metadata: Metadata = {
  title: 'Rénovation appartement Le Plessis-Robinson (92) | Espace Design',
  description: 'Rénovez votre appartement au Plessis-Robinson avec Espace Design : cuisine, salle de bain, parquet, peinture. Devis gratuit sous 48h.',
}
export default function RenovationLePlessisRobinson() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement au Plessis-Robinson</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Artisan rénovation au Plessis-Robinson (92350) — cuisine, salle de bain, parquet, peinture. Devis gratuit sous 48h, déplacement sans frais.</p>
      </section>
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Entreprise de rénovation au Plessis-Robinson (92)</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Le Plessis-Robinson est une commune dynamique des Hauts-de-Seine, connue pour son renouvellement urbain et ses nombreuses résidences récentes et anciennes. La ville attire de nombreux propriétaires désireux de valoriser leur bien avant une vente ou une mise en location. Espace Design propose des prestations complètes de rénovation intérieure au Plessis-Robinson, adaptées aux budgets et aux contraintes de copropriété.</p>
          <p className="text-gray-600 leading-relaxed mb-6">Notre équipe prend en charge la totalité du chantier : ouverture de cuisine, pose de parquet flottant ou massif, rénovation de salle de bain avec douche italienne, peinture toutes pièces, isolation des murs et des combles, et mise aux normes électriques. Chaque projet débute par un devis gratuit remis sous 48h après une visite sur site.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {['Rénovation complète ou partielle','Cuisine et salle de bain','Parquet et carrelage','Peinture et revêtements','Électricité et plomberie','Devis gratuit sous 48h'].map((p) => (
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet au Plessis-Robinson</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
