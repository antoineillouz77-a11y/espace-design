import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Maison Blanche Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-maison-blanche-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: "Rénovation appartement Maison Blanche Paris 13e — Espace Design",
  description: "Rénovation d'appartement à Maison Blanche (Paris 13e) : artisans locaux, devis gratuit, travaux toutes corps d'état. Espace Design intervient dans tout le quartier Maison Blanche.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15', dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-maison-blanche-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quels travaux réalisez-vous dans le quartier Maison Blanche ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Espace Design intervient pour tout type de travaux à Maison Blanche : rénovation complète, cuisine, salle de bain, parquet, peinture, cloisons, électricité et plomberie. Nous coordonnons l\'ensemble des corps de métier.' },
    },
    {
      '@type': 'Question',
      name: 'Les appartements à Maison Blanche nécessitent-ils des travaux spécifiques ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Le quartier Maison Blanche regroupe des immeubles des années 1960-1980 souvent construits en préfabriqué ou en béton. Ces logements nécessitent fréquemment une mise aux normes électrique, une amélioration de l\'isolation phonique et une rénovation des réseaux de plomberie.' },
    },
    {
      '@type': 'Question',
      name: 'Espace Design propose-t-il un service de maîtrise d\'oeuvre à Maison Blanche ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, Espace Design assure la coordination complète de votre chantier à Maison Blanche : un interlocuteur unique, un planning respecté et un suivi rigoureux jusqu\'à la réception des travaux.' },
    },
  ],
}

export const metadata: Metadata = {
  title: "Rénovation Appartement Maison Blanche Paris 13e | Espace Design",
  description: "Rénovation d'appartement à Maison Blanche, Paris 13e. Artisans qualifiés, devis gratuit sous 48h. Espace Design gère vos travaux de A à Z dans le quartier Maison Blanche.",
}

export default function MaisonBlanchePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#1C1C1C]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#C8A96E] uppercase tracking-widest text-sm mb-4">Paris 13e — Maison Blanche</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Rénovation Appartement à Maison Blanche
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Espace Design intervient dans le quartier Maison Blanche pour rénover votre appartement avec des artisans qualifiés, des matériaux durables et un suivi de chantier rigoureux.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1C1C1C] mb-6">
            Rénovation à Maison Blanche : comprendre les spécificités du bâti
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Le quartier Maison Blanche, situé au sud du 13e arrondissement entre la porte d'Italie et la porte de Gentilly, est composé en grande partie de constructions des années 1960 et 1970. Ces immeubles en béton ou en préfabriqué présentent des caractéristiques techniques particulières : dalles épaisses, cloisons légères, réseaux électriques vieillissants et fenêtres à simple vitrage. Notre équipe connaît parfaitement ces contraintes et adapte chaque projet en conséquence.
          </p>
          <p className="text-gray-700 text-lg mb-10">
            Au-delà des contraintes structurelles, les appartements de Maison Blanche offrent souvent de bons volumes et des luminosités intéressantes dès lors que l'aménagement intérieur est repensé. L'ouverture de la cuisine sur le salon, la réorganisation des cloisons ou l'optimisation du rangement permettent de gagner considérablement en confort de vie, pour un budget maîtrisé.
          </p>

          <h3 className="text-2xl font-bold text-[#1C1C1C] mb-6">Nos travaux dans le quartier Maison Blanche</h3>
          <ul className="space-y-4 mb-12">
            {[
              "Rénovation complète d'appartement avec coordination tous corps d'état",
              "Isolation phonique entre appartements mitoyens",
              "Remplacement des fenêtres et portes par du double vitrage",
              "Création de cuisine ouverte par suppression de cloison",
              "Réfection complète de salle de bain avec carrelage grand format",
              "Mise aux normes du tableau électrique et installation domotique",
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
            Questions fréquentes — Rénovation à Maison Blanche
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
            Votre projet de rénovation à Maison Blanche
          </h2>
          <p className="text-gray-300 mb-8">
            Devis gratuit et sans engagement sous 48h. Nos équipes se déplacent à Maison Blanche et dans tout le 13e arrondissement de Paris.
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
