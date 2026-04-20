import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Convention Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-convention-paris' },
  ],
}
const schemaArticle = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: "Rénovation appartement Convention Paris — Guide 2025",
  description: "Rénover un appartement dans le quartier Convention à Paris 15e. Artisan qualifié, devis gratuit sous 48h.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15', dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-convention-paris' },
}
const schemaFAQ = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel budget pour rénover dans le quartier Convention ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Dans le quartier Convention (Paris 15e), une rénovation complète coûte entre 900 et 1 600 €/m² selon les matériaux et l\'état du logement. Pour une rénovation partielle (peinture, sol), le budget peut démarrer à 300 €/m².' },
    },
    {
      '@type': 'Question',
      name: 'Quel type d\'appartements trouve-t-on à Convention ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Le secteur Convention, dans le 15e arrondissement, présente un parc immobilier mixte : immeubles de rapport des années 1900-1930, résidences des années 1960-1980 et quelques constructions récentes. Les appartements sont souvent fonctionnels, avec de bonnes surfaces et des possibilités de réagencement.' },
    },
    {
      '@type': 'Question',
      name: 'Comment obtenir un devis à Convention ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Contactez Espace Design par formulaire ou téléphone — devis gratuit sous 48h, déplacement gratuit à Paris 15e.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Convention Paris 15e | Espace Design',
  description: 'Rénover un appartement dans le quartier Convention à Paris 15e. Artisan qualifié, devis gratuit sous 48h.',
}

export default function RenovationAppartementConventionParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
          Rénovation appartement Convention
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Quartier résidentiel et bien desservi du 15e arrondissement, Convention attire familles
          et investisseurs cherchant à rénover des appartements bien situés à prix encore
          accessibles pour Paris intra-muros.
        </p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Rénover dans le 15e : des appartements fonctionnels à moderniser
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Le secteur Convention, autour de la rue de la Convention et du métro éponyme, propose
            un parc immobilier varié : immeubles de rapport du début du XXe siècle, résidences
            des années 1970 avec de belles surfaces et quelques constructions plus récentes. Les
            appartements y sont souvent spacieux mais nécessitent une mise à jour des cuisines,
            salles de bain et installations électriques pour correspondre aux standards actuels.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Espace Design intervient dans tout le 15e arrondissement pour des rénovations sur
            mesure. Que vous souhaitiez rénover votre résidence principale ou valoriser un bien
            locatif, nous concevons un projet adapté à votre budget et vos contraintes de
            copropriété. Devis gratuit, déplacement sans engagement.
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Convention</h2>
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
