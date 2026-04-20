import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Paris 2e', item: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-2e' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Paris 2e : Bourse, Montorgueil & artisan 2025 | Espace Design',
  description: "Artisan rénovation Paris 2e arrondissement, quartier Bourse, Montorgueil, Sentier. Petits appartements, beaux plafonds, prix 2025.",
  datePublished: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-2e',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix d'une rénovation d'appartement dans le 2e arrondissement de Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dans le 2e arrondissement, le prix d'une rénovation varie entre 1 500 et 3 500 €/m² selon l'ampleur des travaux et l'état du bien. Une rénovation légère (peinture, parquet ponçage, salle de bain partielle) tourne autour de 900 à 1 400 €/m². Une rénovation complète d'un appartement de 55 m² dans le quartier Montorgueil — incluant électricité NF C 15-100, plomberie, parquet, cuisine ouverte et salle de bain refaite — se situe entre 80 000 et 140 000 €. Les anciens ateliers du Sentier nécessitent souvent un surcoût lié à la création de cloisons et à la mise en place d'un système de chauffage (souvent inexistant dans les anciens plateaux industriels).",
      },
    },
    {
      '@type': 'Question',
      name: "Quelles sont les contraintes pour rénover un appartement autour de Montorgueil dans le 2e ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La rue Montorgueil et ses abords sont soumis à une protection particulière au titre du Plan Local d'Urbanisme de Paris. Toute modification de l'aspect extérieur (fenêtres, volets, balcons) nécessite une déclaration préalable et peut être soumise à l'avis de l'Architecte des Bâtiments de France. Pour les appartements en étages, les travaux intérieurs restent libres. Les copropriétés du secteur sont souvent exigeantes sur les horaires de chantier et les nuisances. Les appartements en rez-de-chaussée surélevé ou en entresol (typiques du quartier) ont parfois des contraintes de hauteur sous plafond.",
      },
    },
    {
      '@type': 'Question',
      name: "Quels sont les travaux les plus courants dans les appartements du 2e arrondissement parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le 2e arrondissement concentre une demande forte sur trois types de chantiers : la rénovation complète d'appartements haussmanniens autour de la Bourse (parquet point de Hongrie, moulures, cuisine ouverte), la reconversion d'anciens ateliers du Sentier en lofts contemporains (cloisons, isolation acoustique, chauffage, mise aux normes), et la remise aux normes énergétiques pour améliorer le DPE de biens classés F ou G — nombreux dans le parc immobilier antérieur à 1970 du 2e arrondissement.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment rénover un loft dans un ancien atelier du Sentier dans le 2e arrondissement ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La reconversion d'un ancien atelier de confection textile du Sentier en appartement ou loft est un chantier complet qui implique : la création des cloisons (chambre, salle de bain, éventuellement cuisine fermée), l'installation d'un chauffage (souvent absent ou insuffisant dans les anciens plateaux), une isolation acoustique sérieuse (activité commerciale ou bureaux aux étages inférieurs fréquents), une mise aux normes électrique et plomberie complète, et parfois une isolation thermique par l'intérieur si les grandes verrières sont peu isolantes. Budget : 2 000 à 3 500 €/m². Les hauteurs sous plafond (3 à 5 m) permettent des mezzanines qui maximisent la surface habitable.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Paris 2e : Bourse, Montorgueil & artisan 2025 | Espace Design',
  description: "Artisan rénovation Paris 2e arrondissement, quartier Bourse, Montorgueil, Sentier. Petits appartements, beaux plafonds, prix 2025.",
  keywords: 'rénovation appartement Paris 2e, artisan Paris 2e, rénovation Bourse Montorgueil',
}

export default function ArticleRenovationParis2e() {
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
            Arrondissements
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Appartement Paris 2e : Bourse, Montorgueil et artisan 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le 2e arrondissement est le plus petit de Paris mais l&apos;un des plus dynamiques et des plus atypiques. Ancien quartier du textile reconverti en hub créatif, appartements haussmanniens de la Bourse, lofts dans des ateliers du Sentier, rue Montorgueil très prisée : guide complet pour rénover dans le 2e en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Quartiers et spécificités */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Bourse, Sentier, Montorgueil : portrait immobilier du 2e arrondissement
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le 2e arrondissement (moins de 22 000 habitants) est le plus petit arrondissement de Paris. Son parc immobilier est très hétérogène : immeubles haussmanniens autour de la Bourse et de la place des Victoires, immeubles de rapport du 19e siècle dans le Sentier, quelques constructions modernes et une concentration exceptionnelle d&apos;anciens locaux commerciaux et d&apos;ateliers reconvertis.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              La gentrification du 2e a été rapide depuis les années 2010, tirée par l&apos;essor du Sentier comme pôle tech et start-up. Les prix au m² ont fortement progressé, faisant de la rénovation un investissement très rentable.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Quartier de la Bourse : haussmannien de prestige',
                  detail: 'Les appartements du secteur Bourse – place des Victoires sont de construction haussmannienne classique : parquet en point de Hongrie, cheminées en marbre, moulures au plafond, hauteur sous plafond de 3 à 3,5 m, cours intérieures avec loges de gardien. Ces biens ont une valeur patrimoniale forte et leur rénovation réclame un savoir-faire spécifique pour préserver l\'authenticité tout en modernisant le confort.',
                },
                {
                  enjeu: 'Quartier Sentier : ateliers reconvertis et lofts',
                  detail: 'Les anciens ateliers de confection textile du Sentier (actuelle French Tech Paris-Saclay) sont progressivement reconvertis en appartements, lofts et espaces hybrides. Grandes hauteurs sous plafond (3 à 5 m), structures métalliques apparentes, verrières en toiture : ces espaces atypiques plaisent aux acheteurs cherchant un logement hors normes. La reconversion nécessite un chantier complet (cloisons, chauffage, isolation, normes).',
                },
                {
                  enjeu: 'Rue Montorgueil : le quartier le plus prisé du 2e',
                  detail: 'La rue Montorgueil et ses abords (rue Montmartre, rue du Nil, rues des Petits-Carreaux) concentrent une des plus fortes demandes locatives de Paris. Les appartements en étages au-dessus des commerces sont souvent de petite surface (30 à 50 m²) et anciens. Une rénovation qualitative transforme ces petits espaces en biens recherchés. Attention aux nuisances sonores : l\'isolation phonique est indispensable.',
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

      {/* Section 2 — Travaux courants */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Travaux les plus demandés dans le 2e arrondissement en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La diversité du parc immobilier du 2e génère une gamme large de chantiers, des rénovations légères d&apos;appartements haussmanniens aux transformations complètes d&apos;ateliers industriels.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              {
                titre: 'Rénovation appartement haussmannien',
                detail: 'Parquet point de Hongrie à poncer et vitrifier, moulures à restaurer ou reproduire, cheminée à remettre en état, cuisine ouverte à créer (parfois mur porteur à franchir), salle de bain à refaire. L\'objectif : conserver le cachet tout en modernisant le confort.',
                cout: '1 500 – 2 500 €/m²',
              },
              {
                titre: 'Reconversion atelier en loft',
                detail: 'Création de cloisons (chambre, salle de bain), installation d\'un chauffage (poêle à granulés, pompe à chaleur réversible, plancher chauffant), isolation acoustique et thermique des grandes verrières, mise aux normes électrique et plomberie complète. Résultat : un logement unique et très valorisé.',
                cout: '2 000 – 3 500 €/m²',
              },
              {
                titre: 'Cuisine ouverte sur le salon',
                detail: 'Démolition de la cloison séparatrice (parfois mur porteur — étude structure obligatoire), création du plan de travail et raccordements plomberie et électricité, pose de la hotte et du réseau d\'extraction. Une cuisine ouverte transforme la luminosité et la convivialité de l\'appartement.',
                cout: '8 000 – 20 000 €',
              },
              {
                titre: 'Isolation phonique',
                detail: 'Priorité absolue dans le 2e, surtout autour de Montorgueil et dans les anciens ateliers au-dessus de locaux commerciaux. Les solutions : doublage des murs sur ossature avec laine minérale, complexe de plancher acoustique sous parquet, fenêtres acoustiques en double ou triple vitrage.',
                cout: '50 – 120 €/m²',
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

      {/* Section 3 — Petits appartements */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Rénover un petit appartement dans le 2e : optimiser chaque mètre carré
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le 2e arrondissement concentre de nombreux petits appartements (20 à 45 m²), notamment autour de Montorgueil et dans le Sentier. Bien rénovés, ils atteignent des prix au m² parmi les plus élevés de Paris.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Cloisons intelligentes et rangements intégrés',
                prix: '2 000 – 8 000 €',
                detail: 'Dans un studio ou 2 pièces du 2e, chaque centimètre compte. Les cloisons coulissantes (placard intégré sur toute la hauteur, lit escamotable avec bureau intégré) permettent de créer des espaces multifonctions sans perdre de surface. Les plafonds hauts haussmanniens autorisent des mezzanines ou des rangements en hauteur inaccessibles dans les appartements modernes.',
              },
              {
                type: 'Salle de bain compacte à l\'italienne',
                prix: '5 000 – 12 000 €',
                detail: 'Une douche à l\'italienne dans une petite salle de bain (3 à 5 m²) donne une impression d\'espace bien supérieure à une douche avec receveur. Carrelage grand format pour agrandir visuellement, niche de rangement dans la cloison, vasque à poser sur console plutôt qu\'un meuble volumineux : autant de choix qui maximisent le rendu dans peu de surface.',
              },
              {
                type: 'Cuisine compacte et ergonomique',
                prix: '4 000 – 10 000 €',
                detail: 'Dans les petits appartements du 2e, la cuisine est souvent fermée dans un couloir ou un réduit. La supprimer au profit d\'une kitchenette intégrée dans le mur du salon (meuble cuisine sur mesure de 180 cm) libère 3 à 6 m² et transforme radicalement l\'espace. À combiner avec une table à manger escamotable fixée au mur.',
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

      {/* Section 4 — Budget */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix de rénovation dans le 2e arrondissement de Paris : budget 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent pour un appartement ancien du 2e arrondissement, main d&apos;œuvre et matériaux inclus, hors mobilier et décoration.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Type de rénovation</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Travaux inclus</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix /m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget 45 m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    type: 'Légère',
                    travaux: 'Peinture + parquet ponçage + salle de bain partielle',
                    prixM2: '900 – 1 400 €',
                    budget: '40 500 – 63 000 €',
                  },
                  {
                    type: 'Standard',
                    travaux: 'Peinture + sol + cuisine + électricité partielle + SdB',
                    prixM2: '1 400 – 2 000 €',
                    budget: '63 000 – 90 000 €',
                  },
                  {
                    type: 'Complète',
                    travaux: "Tout corps d'état : électricité NF C 15-100, plomberie, sol, murs, cuisine ouverte, salle de bain",
                    prixM2: '2 000 – 3 000 €',
                    budget: '90 000 – 135 000 €',
                  },
                  {
                    type: 'Loft / Atelier reconverti',
                    travaux: 'Complète + cloisons, isolation acoustique et thermique, chauffage, verrières',
                    prixM2: '2 500 – 4 000 €',
                    budget: '112 500 – 180 000 €',
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
        </div>
      </section>

      {/* Section 5 — Valorisation et tendances */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Rénover dans le 2e pour valoriser : tendances et retour sur investissement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le marché du 2e arrondissement récompense fortement les rénovations de qualité, en particulier autour de Montorgueil et dans les anciens ateliers du Sentier où la demande reste très soutenue.
          </p>
          <div className="space-y-4">
            {[
              {
                enjeu: 'Style industriel-chic : le style signature du 2e',
                detail: 'Le mélange métal peint, béton ciré, bois brut et verrières intérieures est particulièrement adapté aux anciens ateliers du Sentier et très demandé dans le 2e. Les cuisines ouvertes avec îlot central en béton ou en bois, les salles de bain en terrazzo et les bibliothèques intégrées sol-plafond font partie des éléments les plus valorisants.',
              },
              {
                enjeu: 'Mezzanine dans les grandes hauteurs',
                detail: 'Les hauteurs sous plafond des anciens ateliers (3,5 à 5 m) permettent la création de mezzanines dormantes ou de bureaux suspendus sans empiéter sur la surface au sol. Une mezzanine bien conçue peut ajouter 10 à 20 m² de surface habitable et transformer un studio en appartement 2 pièces. Budget : 8 000 à 20 000 € selon la configuration.',
              },
              {
                enjeu: 'Valorisation immobilière dans le 2e',
                detail: 'Un appartement bien rénové dans le 2e, notamment autour de Montorgueil, peut se valoriser de 20 à 35 % par rapport au même bien dans son état d\'origine. Les acheteurs du 2e sont prêts à payer le prix fort pour un logement clé-en-main avec des prestations de qualité dans ce quartier très demandé.',
              },
              {
                enjeu: 'DPE et rénovation énergétique',
                detail: 'Nombreux appartements du 2e classés F ou G (anciens, peu isolés). Une rénovation énergétique (isolation des murs par l\'intérieur, remplacement des fenêtres en double vitrage, chauffage performant) permet de passer en classe C ou D. Depuis 2023, les logements classés G sont interdits à la location — la mise aux normes est urgente pour les bailleurs.',
              },
            ].map((el) => (
              <div key={el.enjeu} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.enjeu}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Conseils pratiques */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Conseils pratiques pour rénover dans le 2e arrondissement
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              'Pour un atelier du Sentier : budget isolation acoustique conséquent — le bruit urbain et commercial est important dans ce quartier',
              'Conserver les éléments industriels authentiques (poutres métalliques, piliers fonte, briques) : ils ont une vraie valeur patrimoniale et décorative',
              'Vérifier les contraintes ABF avant de modifier les menuiseries extérieures autour de Montorgueil',
              'La cuisine ouverte est incontournable dans le 2e — prévoir l\'extraction d\'air vers l\'extérieur et les raccordements plomberie dès la conception',
              'Anticiper la mise aux normes électrique complète dans les biens antérieurs à 1980 — souvent nécessaire et rentable à la revente',
              'Préférer des matériaux durables : le marché du 2e récompense les prestations haut de gamme (parquet massif, carrelage grand format, robinetterie de marque)',
              'Penser aux mezzanines dans les grandes hauteurs pour créer de la surface sans modifier la structure',
              'Prévoir une bonne isolation des fenêtres donnant sur des artères commerçantes animées (Montorgueil, Montmartre)',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
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

      {/* Guides connexes */}
      <section className="py-12 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Guides connexes</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/renovation-appartement-paris-1er', title: 'Rénovation appartement Paris 1er' },
              { href: '/blog/renovation-appartement-paris-3e', title: 'Rénovation appartement Paris 3e' },
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénovation appartement haussmannien Paris' },
              { href: '/blog/renovation-loft-paris', title: 'Rénovation loft Paris' },
              { href: '/blog/isolation-phonique-paris', title: 'Isolation phonique Paris' },
              { href: '/blog/creation-verriere-interieure-paris', title: 'Création verrière intérieure Paris' },
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
          Rénovez votre appartement dans le 2e arrondissement
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Artisan spécialisé en lofts, ateliers reconvertis et appartements haussmanniens. Devis gratuit sous 48h.
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
