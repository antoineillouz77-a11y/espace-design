import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Villiers-le-Bel', item: 'https://espacedesignparis.fr/blog/renovation-appartement-villiers-le-bel' },
  ],
}
const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Villiers-le-Bel (95) — Guide complet 2025",
  description: "Rénovez votre appartement à Villiers-le-Bel avec Espace Design : cuisine, salle de bain, parquet, peinture. Devis gratuit sous 48h.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-villiers-le-bel' },
}
const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Quel budget pour rénover un appartement à Villiers-le-Bel ?', acceptedAnswer: { '@type': 'Answer', text: "À Villiers-le-Bel, une rénovation complète coûte entre 700 et 1 200 €/m². Pour un T3 de 60 m², prévoyez entre 42 000 et 72 000 €." } },
    { '@type': 'Question', name: 'Quels travaux réalisez-vous à Villiers-le-Bel ?', acceptedAnswer: { '@type': 'Answer', text: "Espace Design réalise à Villiers-le-Bel tous types de travaux : cuisine, salle de bain, parquet, peinture, électricité, plomberie, cloisons et isolation." } },
    { '@type': 'Question', name: 'Comment obtenir un devis à Villiers-le-Bel ?', acceptedAnswer: { '@type': 'Answer', text: "Contactez-nous par formulaire ou téléphone. Devis gratuit sous 48h, déplacement gratuit dans tout le 95." } },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Villiers-le-Bel (95) | Espace Design',
  description: "Rénovez votre appartement à Villiers-le-Bel avec Espace Design : cuisine, salle de bain, parquet, peinture. Devis gratuit sous 48h.",
}

export default function RenovationVilliersLeBel() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement à Villiers-le-Bel</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Villiers-le-Bel, commune du Val-d'Oise en pleine transformation, présente un parc immobilier qui offre de belles opportunités de rénovation. Espace Design accompagne les propriétaires dans la modernisation de leur appartement pour une meilleure qualité de vie.
        </p>
      </section>
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Rénover son appartement à Villiers-le-Bel : nos expertises</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Villiers-le-Bel (95400), desservie par le RER D, attire des primo-accédants et des investisseurs sensibles au rapport qualité-prix de l'immobilier. Les logements y sont souvent de construction ancienne et bénéficient d'une rénovation pour répondre aux standards actuels de confort et d'efficacité énergétique.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Espace Design propose à Villiers-le-Bel une offre de rénovation complète : cuisine sur mesure, salle de bain contemporaine, pose de parquet, peinture, électricité et plomberie. Chaque chantier est suivi par un chef de projet dédié qui garantit le respect des délais et du budget convenu.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {['Rénovation complète ou partielle', 'Cuisine et salle de bain', 'Parquet et carrelage', 'Peinture et revêtements', 'Électricité et plomberie', 'Devis gratuit sous 48h'].map((p) => (
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Villiers-le-Bel</h2>
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
