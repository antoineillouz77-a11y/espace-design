import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Paris 18e Montmartre', item: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-18e-montmartre' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation Appartement Paris 18e Montmartre : artisan & prix 2025 | Espace Design",
  description: "Rénovation appartement dans le 18e arrondissement de Paris : Montmartre, Pigalle, Château Rouge, Clignancourt. Artisan local, devis 48h.",
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-18e-montmartre',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation appartement dans le 18e arrondissement de Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dans le 18e arrondissement de Paris, le prix d'une rénovation appartement varie entre 900 et 2 800 €/m² selon le secteur et le niveau de finition. Montmartre (secteur sauvegardé) est plus cher en raison des contraintes architecturales et de l'accès difficile (ruelles en pente). Pigalle et Barbès proposent des appartements souvent plus abordables à rénover. Un appartement de 50 m² entièrement rénové représente entre 45 000 et 90 000 € selon l'état initial et les prestations choisies.",
      },
    },
    {
      '@type': 'Question',
      name: 'Y a-t-il des contraintes particulières pour rénover à Montmartre ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, Montmartre est un secteur sauvegardé avec des règles architecturales strictes pour l'extérieur (façades, fenêtres, lucarnes). Les travaux intérieurs restent libres, mais la logistique peut être complexe : rues étroites et en pente, passages voûtés, immeubles sans ascenseur jusqu'au 5e ou 6e étage. Le transport des matériaux et l'évacuation des gravats nécessitent une organisation spécifique. Comptez 10 à 15% de surcoût logistique pour un chantier en hauteur à Montmartre.",
      },
    },
    {
      '@type': 'Question',
      name: 'Comment rénover un appartement sous les toits dans le 18e ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les appartements sous les toits dans le 18e (combles aménagées, chambres de bonne) présentent des défis spécifiques : isolation thermique et acoustique renforcée (toiture directement au-dessus), hauteur sous plafond limitée (parfois 1,80 m), problèmes d'humidité fréquents (toitures vieillissantes), et installations électriques souvent vétustes. Le potentiel est néanmoins fort : vue sur Paris, charme des volumes mansardés. Budget : 1 500 à 3 000 €/m² pour une rénovation complète.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quels sont les quartiers les plus demandés pour rénover dans le 18e ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dans le 18e arrondissement, trois secteurs concentrent la demande de rénovation en 2025 : Montmartre (côté abbesses/Lamarck) pour le charme du village parisien et les appartements avec vue, Pigalle/South Pigalle (So Pi) pour les appartements à fort potentiel à des prix encore accessibles, et la Goutte d'Or/Barbès en pleine gentrification avec des surfaces généreuses pour des prix au m² encore attractifs. Chaque secteur a ses spécificités architecturales et logistiques.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Rénovation Appartement Paris 18e Montmartre : artisan & prix 2025 | Espace Design",
  description: "Rénovation appartement dans le 18e arrondissement de Paris : Montmartre, Pigalle, Château Rouge, Clignancourt. Artisan local, devis 48h.",
}

export default function ArticleRenovation18eMontmartre() {
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
            Paris
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Appartement Paris 18e : Montmartre, Pigalle et prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le 18e arrondissement est l&apos;un des plus contrastés de Paris : du village de Montmartre aux quartiers populaires de Barbès et Château Rouge, en passant par le dynamique So Pi (South Pigalle). Ce brassage architectural — maisons de ville, immeubles anciens, immeubles des années 30-50 — offre des opportunités de rénovation uniques. Guide complet 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Quartiers */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les quartiers du 18e et leurs spécificités pour la rénovation
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le 18e arrondissement s&apos;étend des pentes de Montmartre jusqu&apos;au boulevard périphérique au nord. Sa géographie vallonnée et sa diversité sociale créent des micro-marchés immobiliers aux caractéristiques très différentes.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              La butte Montmartre, avec ses ruelles pavées et ses maisons de ville, contraste avec les grands boulevards de Clichy et Rochechouart. Cette diversité architecturale implique des approches de rénovation radicalement différentes selon le secteur.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Montmartre — village dans la ville',
                  detail: 'Secteur sauvegardé avec contraintes extérieures. Appartements en étages élevés sans ascenseur, maisons de ville avec jardin, studios mansardés avec vue sur Paris. L\'accès difficile (ruelles étroites, pentes) génère un surcoût logistique de 10 à 15%. Prix de rénovation : 1 500 à 3 000 €/m². Fort potentiel de valorisation après rénovation.',
                },
                {
                  enjeu: 'So Pi (Pigalle, abbesses) — quartier en plein essor',
                  detail: 'Quartier très actif depuis 2015, avec une forte demande de rénovation d\'appartements des années 1880-1930. Parquet chêne, moulures, cheminées décoratices. Accès plus facile que Montmartre. Prix de rénovation : 1 200 à 2 500 €/m². Les appartements rénovés avec soin se valorisent très rapidement dans ce secteur.',
                },
                {
                  enjeu: 'Goutte d\'Or, Barbès — grand potentiel',
                  detail: 'Quartier en gentrification progressive. Appartements souvent spacieux (3 à 5 pièces), peu coûteux à l\'achat, mais nécessitant une rénovation complète. Architecture des années 1900-1950. Prix de rénovation : 900 à 1 800 €/m². Rapport qualité/prix excellent pour les investisseurs qui anticipent la valorisation du secteur.',
                },
                {
                  enjeu: 'Clignancourt, Jules Joffrin — résidentiel tranquille',
                  detail: 'Secteur plus résidentiel, moins touristique. Immeubles des années 1960-1980 côtoyant le bâti ancien. Appartements de taille moyenne (40 à 80 m²). Rénovations souvent plus classiques (peinture, cuisine, salle de bain). Prix de rénovation : 1 000 à 2 000 €/m².',
                },
              ].map((el) => (
                <div key={el.enjeu} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.enjeu}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Défis spécifiques */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Défis spécifiques de la rénovation dans le 18e arrondissement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Rénover dans le 18e présente des spécificités techniques et logistiques que les artisans non habitués à ce secteur sous-estiment souvent. Espace Design, artisan parisien local, connaît parfaitement ces contraintes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Accès et logistique Montmartre',
                solution: 'Ruelles étroites, escaliers raides, immeubles sans ascenseur jusqu\'au 6e étage. Transport des matériaux en petits conditionnements, monte-charge extérieur parfois nécessaire. Organisation préalable du stationnement pour les livraisons.',
                cout: '+10 – 15% surcoût',
              },
              {
                titre: 'Installations vétustes',
                solution: 'Les immeubles anciens du 18e ont souvent des colonnes de plomberie en plomb (à remplacer), des tableaux électriques sous-dimensionnés, et des ventilations inexistantes. Anticiper la mise aux normes électrique (obligatoire lors de vente) : 3 000 à 8 000 € selon la surface.',
                cout: '3 000 – 8 000 €',
              },
              {
                titre: 'Isolation des combles et toitures',
                solution: 'Les appartements du dernier étage et les combles aménagés du 18e souffrent souvent de ponts thermiques importants (toiture non isolée, zinc vieillissant). Priorité à l\'isolation par l\'intérieur (sarking impossible en secteur sauvegardé).',
                cout: '35 – 80 €/m²',
              },
              {
                titre: 'Restauration des éléments d\'époque',
                solution: 'Parquet point de Hongrie, moulures en staff, cheminées en marbre, portes d\'époque : ces éléments ont une valeur patrimoniale forte et doivent être restaurés plutôt que remplacés. Un appartement restauré avec soin à Montmartre se valorise nettement plus qu\'une rénovation contemporaine.',
                cout: '30 – 80 €/ml',
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.titre}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.cout}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.solution}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Budget */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Budget rénovation appartement Paris 18e : prix 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent pour un appartement de 50 m² dans le 18e arrondissement, main d&apos;œuvre et matériaux inclus.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Niveau</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prestations</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Total 50 m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    niveau: 'Rafraîchissement',
                    prestations: 'Peinture + parquet ponçage + petites réparations',
                    prixM2: '300 – 600 €',
                    total: '15 000 – 30 000 €',
                  },
                  {
                    niveau: 'Standard',
                    prestations: 'Peinture + sol + SDB rénovée + cuisine refaite',
                    prixM2: '900 – 1 500 €',
                    total: '45 000 – 75 000 €',
                  },
                  {
                    niveau: 'Complet',
                    prestations: 'Tout compris + isolation + électricité + plomberie',
                    prixM2: '1 500 – 2 200 €',
                    total: '75 000 – 110 000 €',
                  },
                  {
                    niveau: 'Haut de gamme',
                    prestations: 'Rénovation totale + restauration patrimoine + menuiseries sur mesure',
                    prixM2: '2 200 – 3 000 €',
                    total: '110 000 – 150 000 €',
                  },
                ].map((row, i) => (
                  <tr key={row.niveau} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.niveau}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.prestations}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prixM2}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Nos interventions dans le 18e arrondissement
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Rénovation complète appartements Montmartre (gestion logistique incluse)',
                'Restauration parquet et moulures d\'époque',
                'Mise aux normes électrique et plomberie',
                'Isolation thermique appartements sous les toits',
                'Rénovation cuisine et salle de bain haut de gamme',
                'Devis sous 48h avec visite sur site dans le 18e',
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

      {/* Guides connexes */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Guides connexes</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/renovation-appartement-paris-18e', title: 'Rénovation appartement Paris 18e' },
              { href: '/blog/renovation-appartement-montmartre-paris', title: 'Rénovation appartement Montmartre' },
              { href: '/blog/renovation-appartement-paris-9e', title: 'Rénovation appartement Paris 9e' },
              { href: '/blog/renovation-appartement-paris-19e', title: 'Rénovation appartement Paris 19e' },
              { href: '/blog/amenagement-combles-perdus-paris', title: 'Aménagement combles Paris' },
              { href: '/blog/isolation-thermique-appartement-paris', title: 'Isolation thermique appartement Paris' },
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
          Rénovez votre appartement dans le 18e arrondissement
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Artisan local, habitué à Montmartre et ses contraintes. Devis détaillé sous 48h.
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
