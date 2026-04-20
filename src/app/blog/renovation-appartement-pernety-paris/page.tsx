import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Pernety Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-pernety-paris' },
  ],
}
const schemaArticle = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: "Rénovation appartement Pernety Paris — Guide 2025",
  description: "Rénover un appartement dans le quartier Pernety à Paris 14e. Artisan qualifié, devis gratuit sous 48h.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15', dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-pernety-paris' },
}
const schemaFAQ = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel budget pour rénover dans le quartier Pernety ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Dans le quartier Pernety (Paris 14e), une rénovation complète coûte entre 900 et 1 600 €/m² selon les matériaux et l\'état du logement. Pour une rénovation partielle (peinture, parquet), le budget démarre à environ 300 €/m².' },
    },
    {
      '@type': 'Question',
      name: 'Quel type d\'appartements trouve-t-on à Pernety ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Le secteur Pernety est caractérisé par des immeubles de rapport du XIXe et début XXe siècle, avec de nombreuses maisons de ville et petits immeubles atypiques. On y trouve beaucoup de 2 et 3 pièces avec cachet, des rez-de-chaussée sur courette et quelques duplex à rénover.' },
    },
    {
      '@type': 'Question',
      name: 'Comment obtenir un devis à Pernety ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Contactez Espace Design par formulaire ou téléphone — devis gratuit sous 48h, déplacement gratuit à Paris 14e.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Pernety Paris 14e | Espace Design',
  description: 'Rénover un appartement dans le quartier Pernety à Paris 14e. Artisan qualifié, devis gratuit sous 48h.',
}

export default function RenovationAppartementPernetyParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
          Rénovation appartement Pernety
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Village dans la ville, Pernety est l'un des quartiers les plus attachants du 14e
          arrondissement. Ses immeubles de caractère, ses maisons de ville et ses cours
          intérieures en font un terrain idéal pour des rénovations soignées et personnalisées.
        </p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Rénover à Pernety : du cachet à préserver, du confort à créer
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Le quartier Pernety, autour de la rue Raymond Losserand et de la rue Pernety, est
            connu pour son ambiance de village et son bâti atypique. On y trouve des immeubles
            de rapport du XIXe siècle, des maisons de ville sur courette, des ateliers
            reconvertis et quelques résidences plus modernes. Cette diversité architecturale
            appelle des solutions de rénovation sur mesure, capable de préserver le caractère
            des lieux tout en apportant tout le confort contemporain.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Espace Design accompagne les propriétaires de Pernety dans leurs projets : rénovation
            complète, refonte de salle de bain, création de cuisine ouverte, pose de parquet
            massif ou travaux d'isolation. Nous nous adaptons aux contraintes propres à chaque
            immeuble (copropriété, murs porteurs, réseaux anciens) et gérons l'ensemble des
            démarches administratives si nécessaire.
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Pernety</h2>
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
