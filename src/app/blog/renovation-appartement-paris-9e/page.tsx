import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Paris 9e', item: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-9e' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Paris 9e : Opéra, Pigalle & artisan 2025 | Espace Design',
  description: 'Artisan rénovation Paris 9e arrondissement, quartiers Opéra, Notre-Dame-de-Lorette, Pigalle. Prix 2025, devis gratuit sous 48h.',
  datePublished: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-9e',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix au m² pour rénover un appartement dans le 9e arrondissement de Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dans le 9e arrondissement, les prix de rénovation varient de 400 à 650 €/m² pour un simple rafraîchissement (peinture, sol, petites réparations) et de 1 400 à 2 500 €/m² pour une rénovation complète incluant cuisine, salle de bain, électricité et plomberie. Les appartements haussmanniens avec moulures et parquet d\'époque requièrent une attention particulière qui peut faire monter la facture à 2 500–3 000 €/m² pour une rénovation haut de gamme avec préservation du patrimoine.',
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on conserver les moulures et parquets anciens lors d\'une rénovation dans le 9e ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, et c\'est même fortement recommandé dans le 9e arrondissement où les haussmanniens avec moulures, parquet point de Hongrie et cheminées d\'époque ont une forte valeur patrimoniale et marchande. La restauration des moulures (ragréage, peinture) coûte 40–80 €/ml. Le ponçage et vitrification d\'un parquet ancien revient à 25–45 €/m². Ces travaux de restauration sont systématiquement valorisés à la revente et permettent de justifier un prix au m² supérieur.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps dure une rénovation complète dans le 9e arrondissement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La durée dépend de l\'ampleur des travaux. Un rafraîchissement d\'un 50 m² prend 2 à 3 semaines. Une rénovation complète (cuisine + salle de bain + électricité + plomberie + sols) d\'un 70 m² dure typiquement 8 à 12 semaines. Les délais peuvent s\'allonger en cas d\'amiante ou de plomb détecté, ou si la copropriété impose des restrictions horaires. Notre planning de chantier est fourni avec le devis.',
      },
    },
    {
      '@type': 'Question',
      name: 'Le quartier Pigalle est-il intéressant pour un investissement avec rénovation ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pigalle et South Pigalle (SoPi) sont parmi les quartiers parisiens offrant le meilleur potentiel de valorisation post-rénovation. Les prix d\'achat restent inférieurs à ceux de l\'Opéra ou des Martyrs (9 000–11 000 €/m² contre 12 000–14 000 €/m²) tandis que la demande locative explose grâce à la mixité culturelle et la vie de quartier. Un investisseur qui achète un appartement dégradé à 9 000 €/m² et investit 1 800 €/m² en rénovation peut espérer une valorisation à 13 000–14 000 €/m² post-travaux.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Paris 9e : Opéra, Pigalle & artisan 2025 | Espace Design',
  description: 'Artisan rénovation Paris 9e arrondissement, quartiers Opéra, Notre-Dame-de-Lorette, Pigalle, prix 2025. Devis gratuit sous 48h.',
  keywords: [
    'rénovation appartement paris 9e',
    'artisan rénovation 9e arrondissement',
    'rénovation haussmannien opéra',
    'travaux appartement pigalle',
    'prix rénovation paris 9e 2025',
    'rénovation notre-dame-de-lorette',
    'entrepreneur rénovation paris 9',
  ],
}

export default function ArticleRenovationParis9() {
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
            Paris 9e arrondissement
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Appartement Paris 9e : Opéra, Pigalle &amp; artisan 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Opéra, Notre-Dame-de-Lorette, Pigalle, Saint-Georges : le 9e arrondissement concentre certains des plus beaux haussmanniens de Paris, avec leurs hauts plafonds, moulures travaillées et parquets point de Hongrie. Espace Design intervient dans tout le 9e avec une expertise reconnue sur la rénovation du bâti ancien et la préservation du patrimoine architectural, devis sous 48h.
          </p>
        </div>
      </section>

      {/* Section 1 — Quartiers */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Le parc immobilier du 9e : haussmannien typique et immeubles de rapport
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le 9e arrondissement est l&apos;un des plus homogènes de Paris sur le plan architectural. Le tissu urbain est dominé par les immeubles haussmanniens de la seconde moitié du XIXe siècle, avec leurs façades en pierre de taille, leurs balcons filants au 2e et 5e étage et leurs appartements aux distributions classiques. Cette cohérence architecturale est une richesse — et une contrainte à bien maîtriser lors d&apos;une rénovation.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Opéra – Chaussée-d\'Antin : haussmannien premium',
                  detail: 'Le secteur Opéra concentre les immeubles les plus valorisés du 9e, avec des appartements familiaux spacieux (70–150 m²), des plafonds de 3,20 m minimum et des éléments de décoration intérieure (moulures, parquets, cheminées) en excellent état ou à restaurer. La clientèle est souvent propriétaire occupant ou investisseur haut de gamme. Les rénovations visent à préserver le cachet tout en modernisant les équipements (cuisine, salle de bain, domotique).',
                },
                {
                  enjeu: 'Notre-Dame-de-Lorette – Saint-Georges : le 9e résidentiel',
                  detail: 'Ce secteur, entre la rue des Martyrs et la place Saint-Georges, est le plus résidentiel du 9e. Les immeubles de rapport construits entre 1850 et 1900 abritent des appartements de taille intermédiaire (40–80 m²) très demandés à la location. Les moulures et parquets d\'origine y sont souvent en bon état. La demande porte principalement sur la rénovation des cuisines et salles de bain vieillissantes et la mise aux normes électrique.',
                },
                {
                  enjeu: 'Pigalle – South Pigalle (SoPi) : gentrification et lofts',
                  detail: 'Le secteur Pigalle est en pleine transformation depuis une décennie. Les immeubles d\'origine populaire et les anciens commerces convertis en lofts attirent une clientèle jeune et les investisseurs. Les configurations atypiques (rez-de-chaussée transformés, appartements en duplex) nécessitent une approche sur mesure. C\'est le secteur où la valeur post-rénovation est la plus forte par rapport au prix d\'acquisition.',
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
            Types de travaux les plus fréquents dans le 9e arrondissement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La forte proportion d&apos;immeubles haussmanniens dans le 9e génère une demande spécifique que notre équipe maîtrise parfaitement, de la restauration des éléments anciens à la modernisation complète des équipements.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Restauration moulures et éléments d\'époque',
                solution: 'Ragréage et remise en état des moulures au plâtre, des rosaces de plafond et des corniches. Préservation ou réfection des cheminées décoratives. Ces travaux de restauration patrimoniale valorisent significativement le bien à la revente et sont systématiquement recommandés dans le 9e.',
                cout: '40 – 80 €/ml de moulure',
              },
              {
                titre: 'Rénovation cuisine haussmannienne',
                solution: 'Transformation de l\'ancienne cuisine de service en cuisine moderne ouverte ou semi-ouverte, en conservant les volumes généreux des appartements haussmanniens. Traitement des contraintes (ventilation, hauteur sous plafond, réseau plomberie en fonte à remplacer).',
                cout: '12 000 – 28 000 €',
              },
              {
                titre: 'Ponçage et vitrification parquet ancien',
                solution: 'Le parquet point de Hongrie ou en chêne massif est omniprésent dans le 9e. Ponçage professionnel, rebouchage des lames manquantes ou abîmées, vitrification ou huilage selon le rendu souhaité. Un parquet ancien bien restauré est un argument de vente majeur.',
                cout: '25 – 45 €/m²',
              },
              {
                titre: 'Mise aux normes électrique complète',
                solution: 'La quasi-totalité des immeubles du 9e construits avant 1945 ont des installations électriques non conformes (fils en coton, absence de mise à la terre, tableaux obsolètes). Remplacement complet du circuit, pose d\'un tableau général aux normes NF C 15-100, création des circuits cuisine et salle de bain.',
                cout: '5 000 – 14 000 €',
              },
              {
                titre: 'Rénovation salle de bain complète',
                solution: 'Transformation de l\'ancienne salle de bain (souvent petite et mal éclairée dans les haussmanniens) en salle d\'eau contemporaine. Dépose carrelage ancien, ragréage, reconfiguration si possible, douche à l\'italienne, robinetterie haut de gamme. Gestion des contraintes de ventilation dans les immeubles anciens.',
                cout: '9 000 – 22 000 €',
              },
              {
                titre: 'Rénovation complète appartement pour mise en location',
                solution: 'Rénovation globale d\'un appartement du 9e pour optimiser le rendement locatif : cuisine équipée, salle de bain neuve, électricité aux normes, peinture, parquet. Résultat : loyer maximisé, locataire de qualité, entretien réduit. Devis global avec planning de chantier inclus.',
                cout: '1 200 – 2 200 €/m²',
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

      {/* Section 3 — Contraintes pratiques */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Contraintes spécifiques à la rénovation dans le 9e arrondissement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Rénover dans un immeuble haussmannien du 9e arrondissement demande une connaissance précise des contraintes réglementaires, techniques et logistiques propres à ce type de bâti.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Plafonds hauts et moulures : contraintes techniques',
                prix: 'Surcoût 10 – 20 %',
                detail: 'Les hauts plafonds (3,20 à 3,50 m) des haussmanniens du 9e nécessitent des échafaudages intérieurs pour l\'ensemble des travaux de plafond (moulures, peinture, pose de luminaires). Cela allonge les délais et augmente le coût de main d\'œuvre. La pose d\'un faux-plafond est déconseillée car elle dénature le caractère du bien. Nos artisans sont formés à ces configurations spécifiques.',
              },
              {
                type: 'Copropriété : règles et autorisations',
                prix: 'Délai +4 à 8 semaines',
                detail: 'Dans les copropriétés haussmanniennes du 9e, les travaux impactant les parties communes (colonnes montantes, façade, planchers porteurs) nécessitent un vote en AG. Les règlements de copropriété imposent souvent des horaires de travaux stricts (8h–17h30 du lundi au vendredi) et une protection systématique des parties communes. Notre coordinateur de travaux vous accompagne dans ces démarches.',
              },
              {
                type: 'Amiante et plomb dans les immeubles anciens',
                prix: '200 – 500 € (diagnostics)',
                detail: 'Tous les immeubles du 9e construits avant 1997 (soit la quasi-totalité) sont soumis au diagnostic amiante avant travaux. Ceux d\'avant 1949 nécessitent également un diagnostic plomb (CREP). En cas de présence d\'amiante ou de plomb, des procédures spécifiques s\'imposent (désamiantage par entreprise certifiée, évacuation des déchets dangereux), avec un surcoût de 20 à 40 %.',
              },
              {
                type: 'Livraison des matériaux en centre-ville',
                prix: 'Surcoût 5 – 10 %',
                detail: 'Les rues du 9e arrondissement sont étroites et la circulation y est réglementée (zones à faibles émissions, livraisons uniquement le matin). L\'évacuation des gravats nécessite une autorisation de benne en voirie. Nos équipes maîtrisent parfaitement la logistique de chantier en centre-ville dense et prévoient ces contraintes dans le planning.',
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
            Prix rénovation appartement Paris 9e : tableau récapitulatif 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Estimations main d&apos;œuvre et matériaux inclus, pour des appartements haussmanniens du 9e arrondissement de Paris.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Niveau</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prestations</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Total 60 m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    niveau: 'Rafraîchissement',
                    prestations: 'Peinture + parquet ponçage + petites réparations',
                    prixM2: '400 – 650 €',
                    total: '24 000 – 39 000 €',
                  },
                  {
                    niveau: 'Rénovation partielle',
                    prestations: 'Cuisine ou SDB + peinture + parquet + électricité partielle',
                    prixM2: '800 – 1 300 €',
                    total: '48 000 – 78 000 €',
                  },
                  {
                    niveau: 'Rénovation complète',
                    prestations: 'Cuisine + SDB + électricité + plomberie + sols + moulures',
                    prixM2: '1 400 – 2 200 €',
                    total: '84 000 – 132 000 €',
                  },
                  {
                    niveau: 'Haut de gamme',
                    prestations: 'Tout compris + restauration patrimoniale + matériaux premium',
                    prixM2: '2 200 – 3 000 €',
                    total: '132 000 – 180 000 €',
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
              Points de vigilance avant de démarrer dans le 9e
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Commander les diagnostics amiante et plomb avant tout commencement',
                'Vérifier le règlement de copropriété pour les horaires et restrictions de travaux',
                'Prévoir un dossier AG si les travaux impactent les parties communes',
                'Ne pas dissimuler les moulures derrière un faux-plafond (dévalorisation)',
                'Vérifier la conformité du tableau électrique avant tout autre travail',
                'Prévoir 15 à 20 % de budget pour les imprévus dans les immeubles anciens',
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

      {/* Section 5 — Exemples chantiers */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Exemples de chantiers réalisés dans le 9e arrondissement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Chaque chantier est unique. Voici quelques réalisations représentatives de notre activité dans le 9e arrondissement.
          </p>
          <div className="space-y-4">
            {[
              {
                titre: 'Haussmannien 75 m² — rue des Martyrs (Paris 9e)',
                description: 'Rénovation complète pour primo-accédants : cuisine ouverte, salle de bain principale + salle d\'eau, remplacement complet de l\'électricité, ponçage et vitrification du parquet point de Hongrie, restauration des moulures au plâtre, peinture toutes pièces. Durée : 10 semaines. Budget total : 132 000 €.',
                highlight: 'Moulures et parquet conservés — valorisation patrimoine',
              },
              {
                titre: 'Studio 30 m² à Pigalle — investissement locatif',
                description: 'Rénovation complète en vue de mise en location meublée courte durée : dépose revêtements, création salle de bain, cuisine équipée compacte, électricité aux normes, isolation phonique des cloisons, peinture. Résultat : bien reclassé, loyer mensuel optimisé. Budget total : 42 000 €.',
                highlight: 'Rendement locatif optimisé — loyer +40 % post-travaux',
              },
              {
                titre: '3 pièces 65 m² — quartier Saint-Georges',
                description: 'Rénovation partielle pour investisseur : cuisine neuve avec plan de travail en quartz, salle de bain complète avec douche italienne, remplacement du tableau électrique et mise aux normes, peinture toutes pièces. Parquet conservé et remis en valeur. Durée : 7 semaines. Budget : 58 000 €.',
                highlight: 'Rénovation ciblée sur les pièces à fort impact locatif',
              },
            ].map((ex) => (
              <div key={ex.titre} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{ex.titre}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed mb-3">{ex.description}</div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={13} className="text-[#B8960C] flex-shrink-0" />
                  <span className="text-[#B8960C] text-xs font-medium">{ex.highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Avantages artisan local */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Pourquoi choisir un artisan local pour rénover dans le 9e arrondissement ?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La rénovation dans le 9e arrondissement ne s&apos;improvise pas. Les spécificités du bâti haussmannien, les contraintes de copropriété et la logistique de chantier en centre-ville dense exigent une expertise locale irremplaçable.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                titre: 'Connaissance du bâti local',
                detail: 'Nos artisans connaissent parfaitement les haussmanniens du 9e : structure des planchers en bois, réseaux en fonte, configurations de cuisines de service. Cette connaissance évite les mauvaises surprises en cours de chantier.',
              },
              {
                titre: 'Relations avec les syndics et copropriétés',
                detail: 'Nous travaillons régulièrement avec les principaux syndics du 9e arrondissement. Nos dossiers de demande d\'autorisation de travaux sont conformes et traités rapidement, ce qui raccourcit les délais d\'attente.',
              },
              {
                titre: 'Réactivité et suivi de chantier',
                detail: 'Basés à Paris, nous pouvons intervenir rapidement en cas d\'imprévu sur chantier. Un chef de projet dédié assure le suivi quotidien et vous tient informé de l\'avancement par photo et compte-rendu hebdomadaire.',
              },
              {
                titre: 'Devis transparent et planning détaillé',
                detail: 'Notre devis détaille chaque poste de travaux avec le coût associé. Le planning de chantier est fourni avant le démarrage. Pas de surcoût caché : les imprévus sont gérés et communiqués immédiatement.',
              },
            ].map((a) => (
              <div key={a.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{a.titre}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{a.detail}</div>
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
              { href: '/blog/renovation-appartement-paris-10e', title: 'Rénovation appartement Paris 10e' },
              { href: '/blog/renovation-appartement-paris-17e', title: 'Rénovation appartement Paris 17e' },
              { href: '/blog/renovation-appartement-paris-18e', title: 'Rénovation appartement Paris 18e' },
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénovation haussmannien Paris' },
              { href: '/blog/prix-renovation-salle-de-bain-paris', title: 'Prix rénovation salle de bain Paris' },
              { href: '/blog/devis-travaux-renovation-paris', title: 'Devis travaux rénovation Paris' },
              { href: '/blog/moulures-paris', title: 'Restauration moulures Paris' },
              { href: '/renovation-paris', title: 'Rénovation appartement Paris' },
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
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Nos zones d&apos;intervention proches</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-10e', label: 'Paris 10e' },
              { href: '/renovation-paris-17e', label: 'Paris 17e' },
              { href: '/renovation-paris-18e', label: 'Paris 18e' },
              { href: '/renovation-paris-2e', label: 'Paris 2e' },
              { href: '/renovation-clichy', label: 'Clichy' },
              { href: '/renovation-levallois', label: 'Levallois-Perret' },
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
          Rénover votre appartement dans le 9e arrondissement
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis sous 48h. Expertise haussmannien et rénovation patrimoniale.
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
