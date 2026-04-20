import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Monceau Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-monceau-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: "Rénovation appartement Monceau Paris — Guide 2025",
  description: "Rénovation d'appartement dans le quartier Monceau à Paris 8e et 17e. Artisan qualifié, devis gratuit 48h, respect du patrimoine architectural.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15', dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-monceau-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quelles sont les spécificités de la rénovation dans le quartier Monceau ?",
      acceptedAnswer: { '@type': 'Answer', text: "Le quartier Monceau abrite principalement des immeubles haussmanniens de grand standing avec des éléments architecturaux remarquables : parquets anciens, cheminées en marbre, moulures et corniches. La rénovation doit concilier la préservation de ce patrimoine et l'intégration des équipements contemporains (domotique, climatisation discrète, isolation renforcée)." },
    },
    {
      '@type': 'Question',
      name: "Quel est le prix d'une rénovation de salle de bain près du parc Monceau ?",
      acceptedAnswer: { '@type': 'Answer', text: "Une rénovation de salle de bain dans le quartier Monceau coûte en moyenne entre 8 000 et 20 000 € selon la surface et les matériaux choisis. Nous proposons des finitions haut de gamme (carrelage grand format, robinetterie premium, douche italienne) en cohérence avec le standing des immeubles de ce secteur." },
    },
    {
      '@type': 'Question',
      name: "Intervenez-vous à la fois dans le 8e et le 17e arrondissement autour de Monceau ?",
      acceptedAnswer: { '@type': 'Answer', text: "Oui, Espace Design intervient dans l'ensemble du secteur Monceau, qu'il s'agisse de la partie 8e (avenue de Wagram, boulevard de Courcelles côté sud) ou de la partie 17e (boulevard de Courcelles côté nord, avenue de Villiers). Nos équipes locales se déplacent sans surcoût dans ce périmètre." },
    },
  ],
}

export const metadata: Metadata = {
  title: "Rénovation appartement Monceau Paris 8e/17e — Artisan local 2025",
  description: "Rénovation appartement quartier Monceau, Paris 8e et 17e. Artisan local, devis gratuit 48h. Haussmannien, cuisine, salle de bain, parquet.",
}

export default function MonceauPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#D4AF37] mb-3">
          Paris 8e / 17e — Quartier Monceau
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Rénovation Appartement<br />Quartier Monceau
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Spécialiste de la rénovation dans le secteur Monceau. Respect du patrimoine haussmannien,
          matériaux premium et finitions soignées. Devis gratuit sous 48h.
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
            Rénover son appartement près du parc Monceau : un secteur d'exception
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Le quartier Monceau, à cheval entre le 8e et le 17e arrondissement, est l'un des secteurs les plus
            prestigieux de Paris. Ses immeubles de rapport haussmanniens, érigés sous Napoléon III, se distinguent
            par des façades en pierre de taille, de grandes hauteurs sous plafond et des éléments décoratifs
            intérieurs d'une rare qualité. Rénover un appartement Monceau demande une expertise spécifique :
            préserver les parquets en point de Hongrie ou Versailles, restaurer les moulures et stucs, tout en
            intégrant une isolation thermique performante et une installation électrique aux normes actuelles.
          </p>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Espace Design accompagne propriétaires et investisseurs dans ce quartier depuis plusieurs années. Nous
            réalisons aussi bien des rénovations complètes que des travaux ponctuels (réfection de salle de bain,
            cuisine équipée, ouverture de cuisine sur salon) en respectant scrupuleusement les règlements de
            copropriété. Notre carnet d'adresses de fournisseurs locaux nous permet de sélectionner des matériaux
            haut de gamme parfaitement adaptés aux immeubles anciens.
          </p>

          <h3 className="text-xl font-semibold text-[#1C1C1C] mb-4">Nos prestations dans le secteur Monceau</h3>
          <ul className="space-y-3 mb-10">
            {[
              "Rénovation complète haussmannien — conservation moulures, cheminées et parquets anciens",
              "Réfection salle de bain haut de gamme — carrelage marbre, robinetterie premium",
              "Cuisine sur mesure ouverte ou fermée — menuiserie bois et laque",
              "Pose, ponçage et vitrification parquet massif point de Hongrie",
              "Isolation thermique et phonique sans altérer les volumes",
              "Mise aux normes électrique — tableau, prises RJ45, domotique discrète",
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
          <h2 className="text-2xl font-bold text-[#1C1C1C] mb-8">Questions fréquentes — Monceau</h2>
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
          Votre projet de rénovation quartier Monceau
        </h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Contactez-nous pour un devis gratuit sous 48h. Nous intervenons dans tout le secteur Monceau
          (8e et 17e arrondissements).
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
