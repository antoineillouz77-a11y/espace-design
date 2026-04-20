import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Daumesnil Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-daumesnil-paris' },
  ],
}
const schemaArticle = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: "Rénovation appartement Daumesnil Paris — Guide 2025",
  description: "Rénover un appartement dans le quartier Daumesnil à Paris 12e. Artisan qualifié, devis gratuit sous 48h.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15', dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-daumesnil-paris' },
}
const schemaFAQ = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel budget pour rénover dans le quartier Daumesnil ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Dans le quartier Daumesnil (Paris 12e), une rénovation complète coûte entre 900 et 1 600 €/m² selon les matériaux et l\'état du logement. Une rénovation ciblée (salle de bain, cuisine) peut être envisagée à partir de 400 €/m².' },
    },
    {
      '@type': 'Question',
      name: 'Quel type d\'appartements trouve-t-on à Daumesnil ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Le secteur Daumesnil propose un bâti mixte : immeubles haussmanniens et de rapport du début du XXe siècle autour du boulevard Daumesnil, résidences des années 1960-1980 plus en retrait. Les appartements offrent souvent de belles surfaces et des jardins ou cours agréables.' },
    },
    {
      '@type': 'Question',
      name: 'Comment obtenir un devis à Daumesnil ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Contactez Espace Design par formulaire ou téléphone — devis gratuit sous 48h, déplacement gratuit à Paris 12e.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Daumesnil Paris 12e | Espace Design',
  description: 'Rénover un appartement dans le quartier Daumesnil à Paris 12e. Artisan qualifié, devis gratuit sous 48h.',
}

export default function RenovationAppartementDaumesnilParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
          Rénovation appartement Daumesnil
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Quartier verdoyant du 12e arrondissement longeant le lac Daumesnil et le bois de
          Vincennes, ce secteur prisé offre un cadre de vie rare à Paris, avec un bâti de qualité
          idéal pour une rénovation ambitieuse.
        </p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Rénover dans le 12e : un quartier vert à fort potentiel résidentiel
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Le quartier Daumesnil, autour du boulevard du même nom et du lac, bénéficie d'une
            situation exceptionnelle entre Bercy et le bois de Vincennes. Le parc immobilier y
            est varié : belles façades haussmanniennes, immeubles des années 1930 aux volumes
            généreux et résidences plus récentes. Les appartements anciens recèlent souvent des
            éléments de caractère — parquet massif, moulures, cheminées — qu'une rénovation
            experte saura mettre en valeur.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Espace Design intervient dans le 12e arrondissement pour des projets de rénovation
            complète ou par corps de métier. De la conception à la livraison, nous coordonnons
            menuisiers, plombiers, électriciens et peintres pour respecter vos délais et votre
            budget. Devis gratuit sous 48h, sans engagement.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Rénovation complète ou partielle',
              'Cuisine et salle de bain',
              'Parquet bois et stratifié',
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Daumesnil</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">
          Devis gratuit sous 48h — artisan qualifié, assurance décennale.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors"
          >
            Devis gratuit <ArrowRight size={16} />
          </Link>
          <a
            href="tel:+33611783867"
            className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"
          >
            <Phone size={16} />06 11 78 38 67
          </a>
        </div>
      </section>
    </>
  )
}
