import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Paris 20e', item: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-20e' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Paris 20e : artisan & prix 2025 | Espace Design',
  description: 'Rénovation appartement dans le 20e arrondissement de Paris : Père-Lachaise, Belleville, Ménilmontant. Artisan local, devis gratuit 48h.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-20e',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation dans le 20e arrondissement de Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dans le 20e arrondissement, le prix d'une rénovation varie entre 1 300 et 2 500 €/m² selon l'ampleur des travaux. Une rénovation légère (peinture, sol, salle de bain) se situe autour de 700 à 1 100 €/m². Une rénovation complète d'un appartement de 55 m² à Belleville ou Ménilmontant — incluant électricité NF C 15-100, plomberie, sol, peinture, cuisine — tourne autour de 60 000 à 100 000 €. Les ateliers reconvertis et les lofts peuvent nécessiter des surcoûts liés à la création de cloisons, à l'isolation thermique et à l'installation de systèmes de chauffage adaptés.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quels sont les travaux les plus courants dans le 20e arrondissement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le 20e arrondissement connaît une forte gentrification depuis une dizaine d'années, notamment dans les quartiers de Belleville, Ménilmontant et Gambetta. Les travaux les plus courants sont : la rénovation complète d'appartements populaires anciens (parquet, peinture, électricité, cuisine et salle de bain), la reconversion d'ateliers d'artistes en lofts ou appartements (création de cloisons, isolation, chauffage, éclairage), et l'amélioration énergétique (isolation des murs anciens, remplacement des fenêtres simple vitrage). Les copropriétés des années 1960-1980 de la périphérie du 20e font également l'objet de rénovations importantes liées aux nouvelles obligations DPE.",
      },
    },
    {
      '@type': 'Question',
      name: 'Faut-il des autorisations spéciales pour rénover dans le 20e arrondissement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La plupart des travaux intérieurs dans le 20e arrondissement ne nécessitent pas d'autorisation particulière (peinture, revêtements de sol, cuisine, salle de bain). En revanche, si votre appartement est situé à proximité d'un monument historique (comme le cimetière du Père-Lachaise ou certains bâtiments de Belleville), une déclaration préalable de travaux peut être exigée pour les modifications de façade ou de menuiseries extérieures. En copropriété, les travaux sur parties communes (cage d'escalier, façade) nécessitent un vote en assemblée générale.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Paris 20e : artisan & prix 2025 | Espace Design',
  description: 'Rénovation appartement dans le 20e arrondissement de Paris : Père-Lachaise, Belleville, Ménilmontant. Artisan local, devis gratuit 48h.',
}

export default function ArticleRenovationParis20e() {
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
            Rénovation Appartement Paris 20e : artisan &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Belleville, Ménilmontant, Père-Lachaise, Gambetta : le 20e arrondissement est l&apos;un des plus vivants et des plus populaires de Paris. Entre anciens ateliers reconvertis, immeubles des années 1960 et appartements ouvriers du 19e siècle, la rénovation dans le 20e réserve ses spécificités. Guide complet pour rénover dans le 20e arrondissement en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Spécificités du 20e */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Belleville, Ménilmontant, Père-Lachaise : les spécificités du 20e
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le 20e arrondissement est l&apos;un des arrondissements les plus hétérogènes de Paris. Son tissu urbain mêle immeubles ouvriers du 19e siècle, constructions des années 1960 à 1980 (notamment autour de la place Gambetta), anciens ateliers d&apos;artistes et artisans reconvertis en lofts ou appartements, et quelques opérations de logements sociaux récents.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              La gentrification progressive de Belleville et Ménilmontant depuis les années 2010 a largement stimulé la demande de rénovation. Les acquéreurs cherchent à valoriser des appartements populaires anciens ou à transformer des espaces atypiques. Les prix au m² restent inférieurs à ceux des arrondissements centraux, ce qui justifie souvent des budgets de rénovation ambitieux.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Ateliers reconvertis et lofts',
                  detail: "Les anciens ateliers d'artistes et d'artisans du 20e (nombreux autour de Ménilmontant et de la rue de Belleville) sont très recherchés. Leur reconversion en appartement nécessite la création de cloisons, l'installation d'un système de chauffage adapté, une isolation thermique et acoustique sérieuse, et la mise aux normes électrique et plomberie complète. Comptez un surcoût de 20 à 30 % par rapport à un appartement standard.",
                },
                {
                  enjeu: 'Immeubles populaires du 19e siècle',
                  detail: "Les immeubles ouvriers du 19e siècle, nombreux dans le 20e, ont des planchers en bois anciens, des murs en pierre ou en brique, et des distributions souvent exiguës. Les couloirs étroits et les escaliers sans ascenseur compliquent l'acheminement des matériaux. La mise aux normes électrique (tableau, prises de terre, câblage complet) est presque toujours nécessaire.",
                },
                {
                  enjeu: 'Copropriétés des années 1960-1980',
                  detail: "La périphérie du 20e (notamment autour de la porte de Montreuil et de la porte de Bagnolet) compte de nombreuses copropriétés de la période 1960-1980, souvent en mauvais état énergétique (DPE F ou G). Les propriétaires font face à des obligations croissantes liées aux nouvelles règles de location : ces appartements nécessitent une rénovation énergétique significative pour rester louables.",
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

      {/* Section 2 — Travaux populaires */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Travaux les plus demandés dans le 20e arrondissement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La forte dynamique immobilière du 20e se traduit par une demande soutenue pour des rénovations complètes et des transformations d&apos;espaces atypiques. Voici les chantiers les plus courants.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Rénovation complète appartement populaire',
                detail: "Les appartements ouvriers anciens du 20e nécessitent souvent une rénovation intégrale : électricité NF C 15-100, plomberie, carrelage ou parquet, peinture, cuisine et salle de bain. Ces chantiers tout corps d'état sont notre spécialité.",
                cout: '1 300 – 2 000 €/m²',
              },
              {
                titre: 'Reconversion atelier en appartement',
                detail: "Création de cloisons, isolation des murs et de la toiture, installation chauffage (radiateurs ou plancher chauffant), mise aux normes plomberie et électrique. Chantier complexe nécessitant une coordination de corps de métiers.",
                cout: '1 800 – 3 000 €/m²',
              },
              {
                titre: 'Rénovation salle de bain',
                detail: "Les salles de bain des appartements anciens du 20e sont souvent vétustes (carrelage années 1970, robinetterie usée). Une rénovation complète salle de bain (6 à 8 m²) inclut carrelage, faïence, sanitaires, robinetterie et plomberie.",
                cout: '6 000 – 12 000 €',
              },
              {
                titre: 'Mise aux normes électrique',
                detail: "Les appartements antérieurs à 1980 dans le 20e nécessitent presque systématiquement une remise aux normes NF C 15-100 : nouveau tableau électrique, prises de terre, circuit dédié cuisine et salle de bain, éclairage LED. Améliore aussi l'assurance habitation.",
                cout: '3 500 – 9 000 €',
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.titre}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.cout}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Gentrification et valorisation */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Belleville et Ménilmontant : rénover pour valoriser
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La gentrification de Belleville et Ménilmontant a transformé ces quartiers populaires en secteurs très prisés. Une rénovation bien menée permet une valorisation significative du bien, dans un marché où l&apos;offre de biens rénovés reste insuffisante.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Valorisation par la rénovation',
                prix: '+20 à +40 % de valeur',
                detail: "Un appartement de 50 m² entièrement rénové à Belleville ou Ménilmontant peut se vendre 30 à 40 % plus cher qu'un appartement dans son jus. Le marché du 20e récompense fortement les rénovations qualitatives (parquet, cuisine ouverte, salle de bain moderne) car l'offre de biens bien rénovés reste inférieure à la demande.",
              },
              {
                type: 'Tendances déco du 20e',
                prix: 'Style industriel et loft',
                detail: "Le style industriel — béton ciré, métal, bois brut, grandes hauteurs sous plafond — est particulièrement adapté aux ateliers reconvertis du 20e. Les cuisines ouvertes sur le salon, les verrières intérieures et les murs en brique apparente sont les éléments décoratifs les plus demandés dans ce quartier.",
              },
              {
                type: 'Impact DPE sur les prix',
                prix: 'DPE F/G : -10 à -20 %',
                detail: "De nombreux appartements du 20e affichent un DPE F ou G, en particulier dans les immeubles des années 1960. Depuis 2023, les logements notés G sont progressivement interdits à la location. Une rénovation énergétique (isolation, double vitrage, chauffage) permet de remonter à un DPE C ou D et de récupérer toute la valeur du bien.",
              },
            ].map((el) => (
              <div key={el.type} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.type}</div>
                  <div className="text-[#B8960C] text-sm font-medium flex-shrink-0">{el.prix}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Budget et prix */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix de rénovation dans le 20e arrondissement : budget 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent pour un appartement ancien du 20e arrondissement, main d&apos;oeuvre et matériaux inclus, hors mobilier.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Type de rénovation</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Travaux inclus</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix /m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget 50 m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    type: 'Légère',
                    travaux: 'Peinture + parquet + salle de bain',
                    prixM2: '700 – 1 100 €',
                    budget: '35 000 – 55 000 €',
                  },
                  {
                    type: 'Standard',
                    travaux: 'Peinture + sol + cuisine + électricité partielle',
                    prixM2: '1 100 – 1 600 €',
                    budget: '55 000 – 80 000 €',
                  },
                  {
                    type: 'Complète',
                    travaux: "Tout corps d'état : électricité NF C 15-100, plomberie, sol, murs, cuisine, salle de bain",
                    prixM2: '1 600 – 2 500 €',
                    budget: '80 000 – 125 000 €',
                  },
                  {
                    type: 'Atelier reconverti',
                    travaux: 'Complète + cloisons, isolation, chauffage, verrières',
                    prixM2: '2 000 – 3 500 €',
                    budget: '100 000 – 175 000 €',
                  },
                ].map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.type}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.travaux}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prixM2}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.budget}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils pour rénover dans le 20e arrondissement
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Vérifier le DPE avant d'acheter : un DPE G impose une rénovation énergétique obligatoire",
                "Pour un atelier reconverti, prévoir un budget chauffage et isolation suffisant dès le départ",
                "Anticiper les difficultés d'accès (escaliers étroits, absence d'ascenseur) dans le budget",
                "Conserver les éléments atypiques (poutres, brique apparente, verrière) qui ont une vraie valeur",
                "Se renseigner sur les aides MaPrimeRénov' pour les travaux d'isolation et de chauffage",
                "Choisir un artisan local connaissant le tissu immobilier du 20e et ses particularités",
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

      {/* Voir aussi */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Voir aussi</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/renovation-appartement-paris', title: 'Rénovation appartement Paris' },
              { href: '/blog/renovation-appartement-paris-19e', title: 'Rénovation appartement Paris 19e' },
              { href: '/blog/isolation-thermique-appartement-paris', title: 'Isolation thermique appartement Paris' },
              { href: '/blog/renovation-maison-ancienne-paris', title: 'Rénovation maison ancienne Paris' },
              { href: '/contact', title: 'Demander un devis gratuit' },
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

      {/* Zones */}
      <section className="py-10 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Nos zones d&apos;intervention</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-paris-12e', label: 'Paris 12e' },
              { href: '/renovation-paris-13e', label: 'Paris 13e' },
              { href: '/renovation-paris-19e', label: 'Paris 19e' },
              { href: '/renovation-montreuil', label: 'Montreuil' },
              { href: '/renovation-vincennes', label: 'Vincennes' },
              { href: '/renovation-pantin', label: 'Pantin' },
              { href: '/renovation-saint-denis', label: 'Saint-Denis' },
            ].map((z) => (
              <Link
                key={z.href}
                href={z.href}
                className="text-xs text-[#1C1C1C] border border-gray-200 rounded px-3 py-1.5 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light"
              >
                {z.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#D4AF37] text-center px-4">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-4">
          Rénovez votre appartement dans le 20e arrondissement
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Artisans spécialisés en rénovation et reconversion d&apos;ateliers à Belleville et Ménilmontant. Devis gratuit sous 48h.
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
