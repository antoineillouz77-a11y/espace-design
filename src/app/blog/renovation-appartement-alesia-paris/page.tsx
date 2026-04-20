import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Alésia Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-alesia-paris' },
  ],
}
const schemaArticle = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: "Rénovation appartement Alésia Paris — Guide 2025",
  description: "Rénover un appartement dans le quartier Alésia à Paris 14e. Artisan qualifié, devis gratuit sous 48h.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15', dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-alesia-paris' },
}
const schemaFAQ = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel budget pour rénover dans le quartier Alésia ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Dans le quartier Alésia (Paris 14e), une rénovation complète coûte entre 900 et 1 600 €/m² selon les matériaux et l\'état du logement. Une rénovation partielle (peinture, parquet) peut démarrer à partir de 300 €/m².' },
    },
    {
      '@type': 'Question',
      name: 'Quel type d\'appartements trouve-t-on à Alésia ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Le secteur Alésia propose principalement des immeubles haussmanniens de la fin du XIXe siècle et des constructions des années 1930-1950. On y trouve de nombreux 3 et 4 pièces avec parquet ancien, moulures et hauteurs sous plafond généreuses, idéaux pour une rénovation soignée.' },
    },
    {
      '@type': 'Question',
      name: 'Comment obtenir un devis à Alésia ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Contactez Espace Design par formulaire ou téléphone — devis gratuit sous 48h, déplacement gratuit à Paris 14e.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Alésia Paris 14e | Espace Design',
  description: 'Rénover un appartement dans le quartier Alésia à Paris 14e. Artisan qualifié, devis gratuit sous 48h.',
}

export default function RenovationAppartementAlesiaParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
          Rénovation appartement Alésia
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Quartier calme et résidentiel du 14e arrondissement, Alésia séduit par la qualité de son
          bâti haussmannien et la tranquillité de ses rues. Rénover ici, c'est valoriser un
          patrimoine architectural rare au coeur du sud parisien.
        </p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Rénover dans le 14e : valoriser un bâti haussmannien de qualité
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Le secteur Alésia, entre la rue d'Alésia et l'avenue du Général Leclerc, concentre un
            bâti haussmannien remarquable : moulures, parquet point de Hongrie, hauteurs sous
            plafond de 2,80 m à 3,20 m. Ces appartements nécessitent souvent une remise aux normes
            électrique et une restauration soignée des éléments d'époque. Bien rénovés, ils
            atteignent des valeurs locatives et à la revente parmi les plus élevées du 14e.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Espace Design accompagne les propriétaires du quartier Alésia dans leurs projets de
            rénovation complète ou partielle. Nous prenons en charge la coordination de tous les
            corps de métier : menuiserie, plomberie, électricité, carrelage, peinture. Un
            interlocuteur unique du devis à la livraison.
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Alésia</h2>
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
