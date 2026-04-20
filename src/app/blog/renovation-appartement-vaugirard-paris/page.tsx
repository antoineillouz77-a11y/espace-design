import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Vaugirard Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-vaugirard-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: "Rénovation appartement Vaugirard Paris 15e — Espace Design",
  description: "Rénovation d'appartement à Vaugirard (Paris 15e) : artisans qualifiés, devis gratuit, tous corps d'état. Espace Design transforme votre logement dans le quartier Vaugirard.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15', dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-vaugirard-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel budget prévoir pour rénover un appartement à Vaugirard ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Dans le quartier Vaugirard (Paris 15e), le budget de rénovation varie selon l\'ampleur des travaux. Comptez entre 600 et 900 €/m² pour une rénovation légère (peinture, parquet, cuisine) et entre 1 000 et 1 500 €/m² pour une rénovation complète. Espace Design fournit un devis détaillé gratuit.' },
    },
    {
      '@type': 'Question',
      name: 'Les immeubles haussmanniens de Vaugirard ont-ils des contraintes particulières ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, les immeubles haussmanniens du quartier Vaugirard imposent souvent de conserver les éléments décoratifs d\'origine (moulures, parquet point de Hongrie, cheminées). Espace Design maîtrise la restauration de ces éléments patrimoniaux tout en intégrant les équipements modernes.' },
    },
    {
      '@type': 'Question',
      name: 'Proposez-vous la rénovation de caves et de combles à Vaugirard ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Absolument. De nombreux immeubles de Vaugirard disposent de caves ou de combles aménageables. Espace Design réalise ces transformations en chambre, bureau ou espace de rangement, dans le respect des règles de la copropriété.' },
    },
  ],
}

export const metadata: Metadata = {
  title: "Rénovation Appartement Vaugirard Paris 15e | Espace Design",
  description: "Rénovation d'appartement à Vaugirard, Paris 15e. Artisans qualifiés, devis gratuit sous 48h. Espace Design prend en charge tous vos travaux dans le quartier Vaugirard.",
}

export default function VaugirardPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#1C1C1C]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#C8A96E] uppercase tracking-widest text-sm mb-4">Paris 15e — Vaugirard</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Rénovation Appartement à Vaugirard
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Espace Design est votre partenaire de rénovation dans le quartier Vaugirard, au coeur du 15e arrondissement. Artisans qualifiés, matériaux premium, respect des délais.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1C1C1C] mb-6">
            Rénover à Vaugirard : entre tradition haussmannienne et modernité
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Le quartier Vaugirard, le plus peuplé de Paris, offre une palette architecturale remarquablement variée. On y trouve des immeubles haussmanniens aux moulures soigneusement travaillées, des résidences Art déco des années 1930, des ensembles des Trente Glorieuses et des constructions contemporaines. Cette diversité est une richesse pour les propriétaires qui souhaitent valoriser leur bien, à condition de faire appel à des artisans maîtrisant les techniques propres à chaque époque.
          </p>
          <p className="text-gray-700 text-lg mb-10">
            La popularité croissante du 15e arrondissement comme arrondissement familial entraîne une forte demande en rénovation de qualité. Agrandir un séjour en abattant une cloison, créer une deuxième salle d'eau, moderniser une cuisine tout en préservant le charme de l'ancien : voilà les projets que nos équipes réalisent au quotidien à Vaugirard, avec rigueur et créativité.
          </p>

          <h3 className="text-2xl font-bold text-[#1C1C1C] mb-6">Nos interventions à Vaugirard</h3>
          <ul className="space-y-4 mb-12">
            {[
              "Rénovation d'appartements haussmanniens avec restauration des éléments d'époque",
              "Pose de parquet point de Hongrie, chevrons et bois massif",
              "Création de verrière intérieure pour apporter de la lumière",
              "Rénovation complète de salle de bain avec baignoire îlot",
              "Aménagement de combles et caves en espaces habitables",
              "Rénovation énergétique avec isolation et remplacement des menuiseries",
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
            Questions fréquentes — Rénovation à Vaugirard
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
            Votre projet de rénovation à Vaugirard
          </h2>
          <p className="text-gray-300 mb-8">
            Devis gratuit et sans engagement sous 48h. Nos artisans interviennent à Vaugirard et dans tout le 15e arrondissement.
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
