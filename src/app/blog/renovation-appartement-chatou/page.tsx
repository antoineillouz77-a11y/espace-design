import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Chatou', item: 'https://espacedesignparis.fr/blog/renovation-appartement-chatou' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Chatou (78) — Guide complet 2025",
  description: "Rénovez votre appartement à Chatou avec Espace Design : cuisine, salle de bain, parquet, peinture. Devis gratuit sous 48h.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-chatou' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel budget pour rénover un appartement à Chatou ?',
      acceptedAnswer: { '@type': 'Answer', text: "À Chatou, une rénovation complète coûte entre 650 et 1 100 €/m². Les prix sont légèrement inférieurs à Paris intra-muros, ce qui représente un avantage pour les investisseurs et les propriétaires des Yvelines." },
    },
    {
      '@type': 'Question',
      name: 'Intervenez-vous à Chatou pour tous types de travaux ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, Espace Design réalise à Chatou tous les travaux de rénovation : cuisine, salle de bain, parquet, peinture, cloisons, isolation, électricité et plomberie.' },
    },
    {
      '@type': 'Question',
      name: 'Êtes-vous disponibles rapidement pour un chantier à Chatou ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Nous vous proposons un devis gratuit sous 48h et intervenons dans tout le département des Yvelines (78) avec déplacement gratuit. Les délais de démarrage varient entre 2 et 6 semaines selon notre planning.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Chatou (78) | Espace Design',
  description: "Rénovez votre appartement à Chatou avec Espace Design : cuisine, salle de bain, parquet, peinture. Devis gratuit sous 48h.",
}

export default function RenovationChatou() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement à Chatou</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Chatou, charmante commune des Yvelines aux portes de Paris, séduit par ses bords de Seine et son cadre de vie agréable. Espace Design accompagne les propriétaires chatotins dans leurs projets de rénovation intérieure.</p>
      </section>
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Votre artisan rénovation à Chatou (78)</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Espace Design intervient à Chatou et dans tout le département 78 pour des rénovations complètes ou partielles d'appartements. Proche de Paris, Chatou offre un parc immobilier attractif où chaque rénovation bien menée génère une forte plus-value à la revente.</p>
          <p className="text-gray-600 leading-relaxed mb-6">Notre équipe qualifiée gère l'ensemble des travaux de A à Z : démolition, plomberie, électricité, doublage, carrelage, parquet, peinture et aménagement. Nous établissons un devis gratuit sous 48h après visite sur place, sans aucun engagement.</p>
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Chatou</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
