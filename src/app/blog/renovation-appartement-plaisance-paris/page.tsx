import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Plaisance Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-plaisance-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Plaisance Paris 14e : guide & prix 2025 | Espace Design',
  description: 'Rénover un appartement dans le quartier Plaisance (Paris 14e) : immeubles de caractère, ateliers d\'artistes, prix artisan 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-plaisance-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quels types d\'appartements trouve-t-on dans le quartier Plaisance à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le quartier Plaisance (Paris 14e) propose une grande variété de biens : immeubles haussmanniens le long des grandes artères, maisons de ville et ateliers d'artistes dans les ruelles (villa d'Alésia, rue des Thermopyles), petits collectifs des années 1930-1950 et quelques ensembles des années 1960-1970. Les ateliers d'artistes sont particulièrement recherchés pour leur hauteur sous plafond (souvent 3,5 à 5 m) et leur orientation nord lumineuse.",
      },
    },
    {
      '@type': 'Question',
      name: 'Comment rénover un atelier d\'artiste dans le 14e arrondissement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La rénovation d'un atelier d'artiste dans le quartier Plaisance demande une approche spécifique : préserver la double hauteur et les grandes baies vitrées nord, créer une mezzanine pour optimiser l'espace, isoler phoniquement et thermiquement (toiture et murs peu isolés dans les constructions légères des années 1920-1940), moderniser les installations tout en conservant le caractère industriel. Budget typique : 2 000 à 3 500 €/m² selon l'état de départ.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quel budget prévoir pour rénover un appartement dans le 14e arrondissement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dans le 14e arrondissement, les prix de rénovation se situent dans la moyenne parisienne : rafraîchissement entre 400 et 750 €/m², rénovation d'une pièce (cuisine ou salle de bain) entre 850 et 1 600 €/m², rénovation complète entre 1 600 et 2 600 €/m². Pour un atelier d'artiste avec création de mezzanine, comptez 2 500 à 3 500 €/m² en raison de la complexité des travaux en hauteur et des spécificités structurelles.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Plaisance Paris 14e : guide & prix 2025 | Espace Design',
  description: "Rénover un appartement dans le quartier Plaisance (Paris 14e) : immeubles de caractère, ateliers d'artistes, prix artisan 2025.",
}

export default function ArticlePlaisance() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
      />

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-12 bg-[#1C1C1C]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#D4AF37] text-[10px] font-light uppercase tracking-[0.25em] mb-4">
            Quartiers
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Appartement Plaisance Paris 14e : guide &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le quartier Plaisance, dans le 14e arrondissement, est l&apos;un des plus attachants de Paris. Entre ses ruelles pittoresques, ses ateliers d&apos;artistes et ses immeubles de caractère, il concentre une grande diversité de biens à rénover. Ce guide vous présente les spécificités de ce quartier et les travaux les plus courants.
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Plaisance : ateliers d&apos;artistes, villas et immeubles haussmanniens
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le quartier Plaisance tire son charme de sa topographie variée : les grandes artères (rue Raymond Losserand, rue d&apos;Alésia) bordées d&apos;immeubles haussmanniens côtoient des ruelles et villas aux maisons basses — villa d&apos;Alésia, rue des Thermopyles, impasse Florimont — qui rappellent la vocation artistique du 14e au début du XXe siècle. Nombreux peintres et sculpteurs y avaient établi leurs ateliers.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Cette diversité architecturale se traduit par des enjeux de rénovation très différents selon le type de bien. Un atelier d&apos;artiste des années 1920 requiert une approche totalement différente d&apos;un appartement haussmannien : structure légère, grandes baies vitrées nord, double hauteur, isolation souvent inexistante. À chaque bien son diagnostic.
            </p>
            <div className="space-y-3">
              {[
                'Ateliers d\'artistes : double hauteur, grandes baies nord, mezzanine possible',
                'Villas et maisons de ville : jardins, façades à entretenir, isolation thermique prioritaire',
                'Immeubles haussmanniens : moulures, parquet, cheminées à restaurer',
                'Petits collectifs années 1930-1950 : plomberie et électricité souvent à refaire entièrement',
                'Ruelles pavées : accès difficile pour livraisons matériaux — délai chantier à anticiper',
                'Copropriétés récentes : règlement strict sur les modifications extérieures et les nuisances',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                  <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section prix */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix de rénovation dans le quartier Plaisance en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le 14e arrondissement affiche des prix de rénovation dans la moyenne parisienne. Les ateliers d&apos;artistes, très demandés, justifient des budgets plus élevés en raison de leur spécificité structurelle et du potentiel de valorisation.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Type de bien</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Travaux</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { niveau: 'Appartement standard', prestations: 'Rénovation complète', prixM2: '1 600 – 2 600 €' },
                  { niveau: 'Atelier d\'artiste', prestations: 'Rénovation + mezzanine', prixM2: '2 500 – 3 500 €' },
                  { niveau: 'Maison de ville', prestations: 'Rénovation + isolation', prixM2: '1 800 – 2 800 €' },
                  { niveau: 'Rafraîchissement', prestations: 'Peinture, sol, luminaires', prixM2: '400 – 750 €' },
                ].map((row, i) => (
                  <tr key={row.niveau} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.niveau}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.prestations}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prixM2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-6 text-center">Questions fréquentes</p>
          <div className="space-y-6">
            {schemaFaq.mainEntity.map((q) => (
              <div key={q.name} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-3">{q.name}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{q.acceptedAnswer.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voir aussi */}
      <section className="py-12 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Voir aussi</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/renovation-appartement-paris', title: 'Rénovation appartement Paris' },
              { href: '/blog/renovation-appartement-paris-14e', title: 'Rénovation appartement Paris 14e' },
              { href: '/blog/renovation-appartement-montparnasse-paris', title: 'Rénovation appartement Montparnasse Paris' },
              { href: '/blog/renovation-loft-paris', title: 'Rénovation loft Paris' },
              { href: '/blog/amenagement-combles-paris', title: 'Aménagement combles Paris' },
            ].map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="bg-white border border-gray-100 rounded-lg p-4 hover:border-[#D4AF37]/40 transition-colors group"
              >
                <span className="text-sm text-[#1C1C1C] font-light group-hover:text-[#B8960C] transition-colors">{a.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#D4AF37] text-center px-4">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-4">
          Vous rénovez un appartement dans le quartier Plaisance ?
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Devis gratuit et détaillé sous 48h. Déplacement sans engagement dans le 14e arrondissement.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 bg-[#1C1C1C] text-white px-7 py-3.5 rounded font-light text-sm tracking-wide hover:bg-black transition-colors"
          >
            Devis gratuit <ArrowRight size={13} />
          </Link>
          <a
            href="tel:+33611783867"
            className="flex items-center justify-center gap-2 border border-[#1C1C1C]/30 text-[#1C1C1C] px-7 py-3.5 rounded font-light text-sm tracking-wide hover:border-[#1C1C1C] transition-colors"
          >
            <Phone size={14} />
            06 11 78 38 67
          </a>
        </div>
      </section>
    </>
  )
}
