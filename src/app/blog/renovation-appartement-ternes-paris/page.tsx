import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Ternes Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-ternes-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: "Rénovation appartement Ternes Paris — Guide 2025",
  description: "Tout savoir sur la rénovation d'appartement dans le quartier des Ternes à Paris 17e. Artisan local, devis gratuit, suivi complet du chantier.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15', dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-ternes-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel budget prévoir pour rénover un appartement aux Ternes ?",
      acceptedAnswer: { '@type': 'Answer', text: "Le budget moyen se situe entre 800 et 1 500 €/m² selon le niveau de finition souhaité. Une rénovation complète d'un 3 pièces aux Ternes (60-70 m²) est estimée entre 50 000 et 90 000 €. Nous établissons un devis précis et gratuit sous 48h." },
    },
    {
      '@type': 'Question',
      name: "Faut-il une autorisation de la copropriété pour rénover aux Ternes ?",
      acceptedAnswer: { '@type': 'Answer', text: "Oui, tout travaux touchant aux parties communes ou à la façade requiert l'accord de la copropriété. Pour les travaux strictement intérieurs (peinture, parquet, salle de bain), aucune autorisation n'est requise. Nous vous accompagnons dans les démarches si nécessaire." },
    },
    {
      '@type': 'Question',
      name: "Combien de temps dure un chantier de rénovation dans le quartier des Ternes ?",
      acceptedAnswer: { '@type': 'Answer', text: "Une rénovation partielle (cuisine ou salle de bain) dure 2 à 4 semaines. Une rénovation complète d'appartement prend généralement 6 à 10 semaines. Nous planifions les travaux pour minimiser les nuisances dans votre immeuble." },
    },
  ],
}

export const metadata: Metadata = {
  title: "Rénovation appartement Ternes Paris 17e — Artisan local 2025",
  description: "Rénovation appartement quartier des Ternes, Paris 17e. Artisan local, devis gratuit 48h. Cuisine, salle de bain, parquet, peinture.",
}

export default function TernesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#D4AF37] mb-3">
          Paris 17e — Quartier des Ternes
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Rénovation Appartement<br />Quartier des Ternes
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Artisan local spécialisé en rénovation dans le 17e arrondissement. Devis gratuit sous 48h,
          suivi personnalisé et finitions soignées pour votre appartement aux Ternes.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#D4AF37] text-black font-semibold px-6 py-3 rounded-lg hover:bg-[#c49d2e] transition-colors"
          >
            Devis gratuit <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:+33611783867"
            className="inline-flex items-center gap-2 border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-colors"
          >
            <Phone className="w-4 h-4" /> 06 11 78 38 67
          </a>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 bg-white px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1C1C1C] mb-6">
            Rénover son appartement aux Ternes : un quartier au charme haussmannien
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Le quartier des Ternes, situé dans le 17e arrondissement, est l'un des secteurs les plus prisés de Paris.
            Il se distingue par ses larges avenues bordées d'immeubles haussmanniens du XIXe siècle, ses commerces de
            bouche réputés et son ambiance résidentielle raffinée. Rénover un appartement aux Ternes, c'est souvent
            travailler sur des volumes généreux — hauts plafonds à moulures, parquets en point de Hongrie, cheminées
            en marbre — qui méritent une approche artisanale rigoureuse pour en préserver l'authenticité tout en
            apportant le confort moderne.
          </p>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Espace Design intervient régulièrement dans ce secteur et maîtrise les spécificités des bâtiments anciens :
            isolation thermique et phonique, mise aux normes électriques, ouverture de cloisons et création de cuisine
            ouverte, réfection complète de salle de bain. Nos équipes locales connaissent les contraintes des
            copropriétés ternes et s'adaptent aux horaires de chantier imposés par les syndics.
          </p>

          <h3 className="text-xl font-semibold text-[#1C1C1C] mb-4">Nos prestations aux Ternes</h3>
          <ul className="space-y-3 mb-10">
            {[
              "Rénovation complète appartement haussmannien — respect des éléments architecturaux",
              "Réfection salle de bain : douche italienne, baignoire îlot, carrelage grand format",
              "Rénovation cuisine : cuisine ouverte, cuisine équipée sur mesure",
              "Pose et ponçage parquet chêne massif ou contrecollé",
              "Peinture et enduits décoratifs — finitions premium",
              "Mise aux normes électrique et plomberie — garantie décennale",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#D4AF37] mt-0.5 shrink-0" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-[#FAFAF8] px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1C1C1C] mb-8">Questions fréquentes — Ternes</h2>
          <div className="space-y-6">
            {schemaFAQ.mainEntity.map((faq) => (
              <div key={faq.name} className="border-b border-gray-200 pb-6">
                <h3 className="font-semibold text-[#1C1C1C] mb-2">{faq.name}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Votre projet de rénovation aux Ternes
        </h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Contactez-nous pour un devis gratuit sous 48h. Nous intervenons dans tout le 17e arrondissement
          et les quartiers voisins.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#D4AF37] text-black font-semibold px-6 py-3 rounded-lg hover:bg-[#c49d2e] transition-colors"
          >
            Demander un devis <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:+33611783867"
            className="inline-flex items-center gap-2 border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-colors"
          >
            <Phone className="w-4 h-4" /> 06 11 78 38 67
          </a>
        </div>
      </section>
    </>
  )
}
