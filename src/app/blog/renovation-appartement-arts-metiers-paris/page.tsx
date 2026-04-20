import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Arts et Métiers Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-arts-metiers-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation Appartement Arts et Métiers Paris 3e : artisan & prix 2025 | Espace Design",
  description: "Rénover un appartement dans le quartier Arts et Métiers (Paris 3e) : bâti ancien, ateliers reconvertis, prix 2025 et artisan local.",
  datePublished: '2025-02-10',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-arts-metiers-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix d'une rénovation complète dans le quartier Arts et Métiers ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dans le quartier Arts et Métiers (Paris 3e), le prix d'une rénovation complète varie entre 900 et 1 900 €/m² selon l'état du logement et le niveau de finitions. Pour un appartement de 50 m², comptez entre 45 000 et 95 000 € en rénovation lourde. Le secteur attire des profils CSP+ et des investisseurs, ce qui justifie des budgets de rénovation soignés pour maximiser la valorisation.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelles sont les contraintes spécifiques des ateliers reconvertis dans le 3e arrondissement ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les anciens ateliers d'artisans reconvertis en lofts dans le 3e présentent des contraintes particulières : hauteur sous plafond importante (4 à 6 m) nécessitant des solutions de chauffage adaptées, planchers industriels en béton ou bois épais à rénover, façades sur cour à isoler, et souvent une électricité vétuste à refaire entièrement. Ces espaces offrent en revanche une grande liberté architecturale.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il une autorisation pour rénover dans le quartier Arts et Métiers ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les travaux intérieurs courants (peinture, sols, cloisons non porteuses) ne nécessitent pas de déclaration. En revanche, toute modification de façade (fenêtres, ravalement) dans le 3e arrondissement, souvent situé en secteur sauvegardé ou à proximité de bâtiments classés, impose une déclaration préalable. Si l'immeuble est en copropriété, les travaux sur parties communes ou murs porteurs requièrent l'accord de l'assemblée générale.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Rénovation Appartement Arts et Métiers Paris 3e : artisan & prix 2025 | Espace Design",
  description: "Rénover un appartement dans le quartier Arts et Métiers (Paris 3e) : bâti ancien, ateliers reconvertis, prix 2025 et artisan local.",
  keywords: "rénovation appartement Arts et Métiers, rénovation Paris 3e, artisan Paris Arts et Métiers, travaux appartement 3e arrondissement",
}

export default function ArticleRenovationArtsetMetiers() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }} />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#1C1C1C]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#D4AF37] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Guides</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Appartement Arts et Métiers Paris 3e : artisan &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le quartier Arts et Métiers, au coeur du 3e arrondissement, mêle ateliers d&apos;artisans reconvertis, immeubles du XIXe siècle et lofts contemporains. Rénover dans ce secteur demande de maîtriser les contraintes du bâti industriel et haussmannien. Guide complet 2025.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Rénover dans le quartier Arts et Métiers : enjeux et spécificités
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Autour du Conservatoire National des Arts et Métiers et de la rue Réaumur, le 3e arrondissement abrite un parc immobilier varié : immeubles haussmanniens aux façades soignées, anciens ateliers d&apos;artisans reconvertis en lofts atypiques, et quelques constructions plus récentes. La demande est soutenue de la part des créatifs, designers et jeunes actifs attirés par le dynamisme culturel du Marais proche.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Les rénovations dans ce quartier se distinguent par la valorisation des volumes : hauteurs sous plafond importantes, charpentes apparentes, briques et poutres à conserver. Les artisans doivent allier technicité (isolation, électricité, plomberie en bâti ancien) et sensibilité esthétique pour respecter le caractère unique de ces espaces.
            </p>
            <div className="space-y-3">
              {[
                "Hauteurs sous plafond de 3 à 6 m dans les anciens ateliers : solutions de chauffage et isolation adaptées",
                "Planchers bois et béton industriel à rénover en préservant l'authenticité",
                "Mise aux normes électriques obligatoire dans les immeubles d'avant 1970",
                "Isolation thermique et phonique renforcée pour les lofts sur cour",
                "Création de mezzanines et volumes modulables pour optimiser les grandes hauteurs",
                "Ravalement et fenêtres : déclaration préalable souvent requise dans ce secteur",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-gray-600 font-light">
                  <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-6 text-center">Questions fréquentes</p>
          <div className="space-y-6">
            {schemaFaq.mainEntity.map((q) => (
              <div key={q.name} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-3">{q.name}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{q.acceptedAnswer.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
          Votre projet de rénovation dans le 3e arrondissement
        </h2>
        <p className="text-gray-400 text-sm font-light mb-8">
          Artisan local Paris 3e. Devis gratuit sous 48h. Chantier soigné et respectueux du bâti ancien.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-7 py-3.5 rounded font-light text-sm tracking-wide hover:bg-[#c9a227] transition-colors"
          >
            Devis gratuit <ArrowRight size={13} />
          </Link>
          <a
            href="tel:+33611783867"
            className="flex items-center justify-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded font-light text-sm tracking-wide hover:border-white transition-colors"
          >
            <Phone size={14} />
            06 11 78 38 67
          </a>
        </div>
      </section>
    </>
  )
}
