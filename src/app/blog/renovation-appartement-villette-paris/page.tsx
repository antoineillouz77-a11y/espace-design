import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement La Villette Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-villette-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: "Rénovation appartement La Villette Paris — Guide 2025",
  description: "Rénovation d'appartement dans le quartier de La Villette à Paris 19e. Artisan local, devis gratuit 48h, travaux clé en main.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15', dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-villette-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quels types d'appartements trouve-t-on à La Villette ?",
      acceptedAnswer: { '@type': 'Answer', text: "La Villette mélange des immeubles anciens en briques du XIXe siècle, des logements sociaux des années 1970 et des constructions récentes liées aux opérations de réhabilitation urbaine. On y trouve des appartements allant du studio au 5 pièces, avec des configurations variées qui nécessitent des approches de rénovation adaptées à chaque époque de construction." },
    },
    {
      '@type': 'Question',
      name: "Est-il rentable de rénover un appartement à La Villette pour le louer ?",
      acceptedAnswer: { '@type': 'Answer', text: "Oui, La Villette est un secteur en forte valorisation grâce à la proximité du parc et des équipements culturels (Cité des Sciences, Philharmonie). Une rénovation soignée permet d'obtenir un loyer significativement plus élevé et d'attirer des locataires stables. Le rendement locatif après travaux dépasse souvent 4 % brut dans ce secteur." },
    },
    {
      '@type': 'Question',
      name: "Quels travaux sont les plus demandés à La Villette ?",
      acceptedAnswer: { '@type': 'Answer', text: "Dans le 19e arrondissement autour de La Villette, les demandes les plus fréquentes concernent la rénovation complète avant mise en location, la réfection de salle de bain et cuisine, l'isolation thermique des logements anciens peu performants, et l'optimisation des petites surfaces (studios, 2 pièces). Nous proposons des formules clé en main adaptées à ces besoins." },
    },
  ],
}

export const metadata: Metadata = {
  title: "Rénovation appartement La Villette Paris 19e — Artisan local 2025",
  description: "Rénovation appartement quartier La Villette, Paris 19e. Artisan local, devis gratuit 48h. Cuisine, salle de bain, parquet, isolation.",
}

export default function VillettePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#D4AF37] mb-3">
          Paris 19e — Quartier de La Villette
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Rénovation Appartement<br />Quartier de La Villette
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Artisan local intervenant dans tout le 19e arrondissement. Rénovation complète ou partielle,
          devis gratuit sous 48h, chantier propre et respectueux des voisins.
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
            Rénover son appartement à La Villette : un quartier en pleine transformation
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Le quartier de La Villette, dans le 19e arrondissement, a connu une métamorphose spectaculaire depuis la
            création du parc éponyme dans les années 1980. Aujourd'hui, il attire de nombreux propriétaires et
            investisseurs séduits par ses prix encore accessibles et son dynamisme culturel (Cité des Sciences,
            Philharmonie de Paris, Grande Halle). Le parc immobilier y est varié : immeubles en briques du début
            du XXe siècle, constructions des Trente Glorieuses et programmes neufs réhabilitant d'anciens entrepôts
            industriels. Chaque configuration nécessite une expertise adaptée.
          </p>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Espace Design accompagne les propriétaires de La Villette dans tous leurs projets de rénovation :
            remise à neuf avant mise en location, réhabilitation complète d'un appartement ancien, optimisation
            d'un studio ou aménagement d'un loft dans une ancienne friche industrielle. Notre approche clé en main
            couvre toutes les étapes, du diagnostic initial jusqu'à la livraison des clés, avec un interlocuteur
            unique et un planning respecté.
          </p>

          <h3 className="text-xl font-semibold text-[#1C1C1C] mb-4">Nos prestations à La Villette</h3>
          <ul className="space-y-3 mb-10">
            {[
              "Rénovation complète appartement avant vente ou location — devis transparent",
              "Réfection salle de bain — douche italienne, carrelage, robinetterie",
              "Cuisine ouverte ou équipée — optimisation des petites surfaces",
              "Isolation thermique et phonique — logements anciens ou mal isolés",
              "Parquet flottant, contrecollé ou massif — pose et finition",
              "Peinture intérieure et enduits décoratifs — finitions soignées",
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
          <h2 className="text-2xl font-bold text-[#1C1C1C] mb-8">Questions fréquentes — La Villette</h2>
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
          Votre projet de rénovation à La Villette
        </h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Contactez-nous pour un devis gratuit sous 48h. Nous intervenons dans tout le 19e arrondissement
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
