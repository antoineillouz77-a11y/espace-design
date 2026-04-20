import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Tolbiac Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-tolbiac-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: "Rénovation appartement Tolbiac Paris 13e — Espace Design",
  description: "Rénovation d'appartement à Tolbiac (Paris 13e) : devis gratuit, artisans qualifiés, matériaux durables. Espace Design transforme votre logement dans le 13e arrondissement.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15', dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-tolbiac-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix moyen d\'une rénovation à Tolbiac ?',
      acceptedAnswer: { '@type': 'Answer', text: 'À Tolbiac (Paris 13e), le coût d\'une rénovation complète varie entre 800 et 1 500 €/m² selon l\'état du bien et les prestations choisies. Un devis gratuit et sans engagement est disponible chez Espace Design.' },
    },
    {
      '@type': 'Question',
      name: 'Faut-il une autorisation de travaux dans une copropriété à Tolbiac ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pour des travaux affectant les parties communes ou les façades, une autorisation de l\'assemblée générale de copropriété est requise. Espace Design vous accompagne dans toutes ces démarches administratives.' },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps dure une rénovation dans le 13e arrondissement ?',
      acceptedAnswer: { '@type': 'Answer', text: 'La durée dépend de l\'ampleur du chantier : de 2 à 4 semaines pour une rénovation partielle (cuisine ou salle de bain), et de 6 à 12 semaines pour une rénovation complète d\'appartement à Tolbiac.' },
    },
  ],
}

export const metadata: Metadata = {
  title: "Rénovation Appartement Tolbiac Paris 13e | Espace Design",
  description: "Rénovation d'appartement à Tolbiac, Paris 13e. Artisans qualifiés, devis gratuit sous 48h. Espace Design prend en charge tous vos travaux dans le quartier Tolbiac.",
}

export default function TolbiacPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#1C1C1C]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#C8A96E] uppercase tracking-widest text-sm mb-4">Paris 13e — Tolbiac</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Rénovation Appartement à Tolbiac
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Spécialiste de la rénovation dans le quartier Tolbiac, Espace Design regroupe des artisans qualifiés pour transformer votre appartement du 13e arrondissement de Paris.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1C1C1C] mb-6">
            Rénover son appartement à Tolbiac : spécificités du quartier
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Le quartier Tolbiac, coeur du 13e arrondissement, est marqué par une architecture contrastée : immeubles haussmanniens aux façades en pierre de taille, cités des années 1970 et constructions contemporaines issues de la ZAC Paris Rive Gauche. Cette diversité architecturale requiert une expertise pointue pour chaque type de rénovation. Nos artisans maîtrisent aussi bien la restauration de moulures et parquets anciens que l'aménagement d'appartements neufs aux volumes ouverts.
          </p>
          <p className="text-gray-700 text-lg mb-10">
            La mixité sociale et générationnelle du quartier Tolbiac génère des besoins variés : optimisation des petites surfaces pour les étudiants et jeunes actifs, valorisation pour les investisseurs locatifs, rénovation complète pour les familles. Espace Design adapte ses prestations à chaque contexte, avec une attention particulière aux contraintes de copropriété fréquentes dans ce secteur dense.
          </p>

          <h3 className="text-2xl font-bold text-[#1C1C1C] mb-6">Nos prestations à Tolbiac</h3>
          <ul className="space-y-4 mb-12">
            {[
              "Rénovation complète d'appartement clé en main à Tolbiac",
              "Refonte de cuisine ouverte avec îlot central sur mesure",
              "Rénovation de salle de bain avec douche à l'italienne",
              "Pose de parquet massif ou contrecollé sur planchers anciens",
              "Isolation thermique et phonique pour appartements mitoyens",
              "Mise aux normes électrique et plomberie dans les logements anciens",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="text-[#C8A96E] mt-1 shrink-0" size={20} />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1C1C1C] mb-10 text-center">
            Questions fréquentes — Rénovation à Tolbiac
          </h2>
          <div className="space-y-6">
            {schemaFAQ.mainEntity.map((item) => (
              <div key={item.name} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-[#1C1C1C] mb-3">{item.name}</h3>
                <p className="text-gray-700">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1C1C1C]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Votre projet de rénovation à Tolbiac
          </h2>
          <p className="text-gray-300 mb-8">
            Devis gratuit et sans engagement sous 48h. Nos artisans se déplacent à Tolbiac et dans tout le 13e arrondissement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#C8A96E] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#b8986a] transition-colors"
            >
              Demander un devis gratuit <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+33611783867"
              className="inline-flex items-center gap-2 border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#1C1C1C] transition-colors"
            >
              <Phone size={18} /> 06 11 78 38 67
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
