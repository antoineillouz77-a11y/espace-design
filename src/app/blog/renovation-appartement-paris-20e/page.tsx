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
  headline: 'Rénovation Appartement Paris 20e : Père-Lachaise, Belleville & prix 2025 | Espace Design',
  description: 'Artisan rénovation Paris 20e arrondissement. Père-Lachaise, Belleville, Ménilmontant, gentrification forte. Prix 2025, devis sous 48h.',
  datePublished: '2025-01-15',
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
      name: 'Quel est le prix au m² pour rénover un appartement dans le 20e arrondissement de Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dans le 20e arrondissement, les prix de rénovation se situent entre 400 et 600 €/m² pour un rafraîchissement et 1 000 à 1 800 €/m² pour une rénovation complète. Le 20e est l\'un des arrondissements parisiens les plus accessibles à l\'achat (8 000–10 000 €/m² selon le secteur) avec un fort potentiel de valorisation post-rénovation, notamment dans les secteurs Père-Lachaise, Gambetta et Ménilmontant où la gentrification est la plus marquée.',
      },
    },
    {
      '@type': 'Question',
      name: 'Le 20e arrondissement est-il un bon secteur pour investir et rénover ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le 20e arrondissement est l\'un des meilleurs secteurs parisiens pour l\'investissement avec rénovation en 2025. Prix d\'achat encore accessibles (8 000–10 000 €/m²), gentrification en cours particulièrement forte autour du Père-Lachaise et de Ménilmontant, forte demande locative des jeunes actifs et créatifs, et immeubles souvent en mauvais état représentant des opportunités. Le différentiel entre prix à l\'achat dégradé et valeur post-rénovation est parmi les plus élevés de Paris.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quels sont les types de logements qu\'on trouve dans le 20e arrondissement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le 20e arrondissement présente une grande diversité de bâti : immeubles de faubourg populaires (3–5 étages, construits entre 1870 et 1930, souvent sans ascenseur), quelques haussmanniens tardifs autour du Père-Lachaise et de Gambetta, cités HLM dans les secteurs Réunion et Porte de Bagnolet, et des constructions récentes dans les opérations de renouvellement urbain. Les immeubles de faubourg constituent la majorité du parc privé et offrent les plus belles opportunités de rénovation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps faut-il pour rénover un appartement dans le 20e arrondissement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La durée d\'une rénovation dans le 20e dépend de l\'ampleur des travaux. Un rafraîchissement (peinture + sol) d\'un 40 m² prend 2 à 3 semaines. Une rénovation complète (cuisine + salle de bain + électricité + plomberie) d\'un 60 m² dure 8 à 11 semaines. Les délais peuvent s\'allonger en cas de présence d\'amiante ou de plomb nécessitant un désamiantage, ou si la copropriété impose des restrictions horaires strictes. Notre planning de chantier est fourni avec le devis.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Paris 20e : Père-Lachaise, Belleville & prix 2025 | Espace Design',
  description: 'Artisan rénovation Paris 20e arrondissement. Père-Lachaise, Belleville, Ménilmontant, gentrification forte, prix 2025. Devis sous 48h.',
  keywords: [
    'rénovation appartement paris 20e',
    'artisan rénovation 20e arrondissement',
    'rénovation père-lachaise paris',
    'travaux appartement ménilmontant',
    'prix rénovation paris 20e 2025',
    'rénovation belleville paris 20',
    'entrepreneur rénovation paris 20',
  ],
}

export default function ArticleRenovationParis20() {
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
            Paris 20e arrondissement
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Appartement Paris 20e : Père-Lachaise, Belleville &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Père-Lachaise, Belleville, Ménilmontant, Gambetta, Réunion : le 20e arrondissement est l&apos;un des quartiers parisiens en plus forte gentrification. Anciens logements ouvriers en cours de transformation, prix d&apos;achat encore accessibles, forte demande locative. Espace Design intervient dans tout le 20e avec une expertise reconnue sur les immeubles anciens de faubourg, devis sous 48h.
          </p>
        </div>
      </section>

      {/* Section 1 — Quartiers */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Le parc immobilier du 20e : anciens logements ouvriers en pleine gentrification
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le 20e arrondissement est l&apos;un des derniers arrondissements populaires de Paris intra-muros. Longtemps délaissé par les investisseurs, il connaît depuis 2015 une gentrification spectaculaire, portée par son cadre de vie (Père-Lachaise, Belleville, Ménilmontant), sa vie culturelle et ses prix encore accessibles. La rénovation y est un levier majeur de valorisation.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Père-Lachaise – Gambetta : le secteur le plus valorisé du 20e',
                  detail: 'Le secteur Père-Lachaise et Gambetta est le plus cher et le plus prisé du 20e. Les immeubles sont principalement des immeubles de rapport des années 1890–1930, avec des appartements familiaux en bon état général. La proximité du cimetière du Père-Lachaise (espace vert exceptionnel) et le dynamisme commercial de Gambetta attirent une clientèle CSP+. Les prix post-rénovation atteignent 10 000–12 000 €/m².',
                },
                {
                  enjeu: 'Ménilmontant – Belleville : gentrification accélérée',
                  detail: 'Ménilmontant et la partie 20e de Belleville sont en pleine transformation. Ce secteur attire artistes, bobos et jeunes actifs attirés par la vie de quartier, les bars et restaurants branchés et les loyers encore accessibles. Le parc immobilier mêle immeubles de faubourg populaires, maisons de ville atypiques et quelques lofts dans d\'anciens ateliers. C\'est le secteur où le potentiel de valorisation post-rénovation est le plus fort.',
                },
                {
                  enjeu: 'Réunion – Saint-Fargeau : le 20e résidentiel et familial',
                  detail: 'Le secteur Réunion et Saint-Fargeau, dans la partie est et nord du 20e, est plus calme et résidentiel. Les immeubles sont variés : faubourg populaire, HLM des années 60 et quelques constructions récentes. La demande locative y est forte, portée par les familles attirées par les nombreuses écoles et espaces verts. C\'est le secteur le plus abordable du 20e (8 000–9 500 €/m²) et celui offrant le meilleur rendement locatif brut (4 à 5 %).',
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
            Types de travaux les plus demandés dans le 20e arrondissement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le profil du 20e génère une forte demande de rénovation complète, portée par les investisseurs et les primo-accédants qui achètent des logements anciens dans leur jus.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Rénovation complète logement ouvrier dans son jus',
                solution: 'Le 20e regorge d\'appartements dans leur jus : plancher usé, peintures vieillies, cuisine des années 70, plomberie en plomb, électricité hors normes. Rénovation totale : dépose complète, remplacement réseaux, cuisine, salle de bain, sols, peinture. Livraison clé en main pour investisseur ou propriétaire occupant.',
                cout: '1 000 – 1 800 €/m²',
              },
              {
                titre: 'Transformation loft ou atelier en appartement',
                solution: 'Le 20e abrite de nombreux anciens ateliers d\'artistes ou locaux d\'activité reconvertibles en habitation. Création de l\'isolation thermique et phonique, cloisonnement des espaces (chambre, salle de bain, cuisine), mise aux normes électrique et plomberie, traitement du sol (béton ciré, parquet). Résultat : loft atypique très demandé.',
                cout: '1 200 – 2 200 €/m²',
              },
              {
                titre: 'Réfection complète plomberie et électricité',
                solution: 'Dans les immeubles anciens du 20e, le remplacement des réseaux vétustes est souvent incontournable : canalisations en plomb ou acier galvanisé, électricité sans terre ni disjoncteur différentiel. Ce "paquet" traité ensemble optimise le coût de main d\'œuvre et évite des reprises ultérieures.',
                cout: '8 000 – 20 000 €',
              },
              {
                titre: 'Rénovation salle de bain et création WC intérieur',
                solution: 'De nombreux petits immeubles du 20e ont encore des WC sur palier. Création d\'un WC intérieur, construction ou restructuration d\'une salle de bain fonctionnelle : carrelage, douche, vasque, ventilation. Transformation radicale de la valeur locative et du confort des occupants.',
                cout: '7 000 – 17 000 €',
              },
              {
                titre: 'Isolation pour mise aux normes DPE (F et G)',
                solution: 'Face à l\'interdiction progressive de location des logements G (depuis 2025) et F (2028), nos équipes proposent des solutions d\'isolation ciblées : doublage intérieur des murs, remplacement des fenêtres, installation d\'une pompe à chaleur. Accompagnement dans les démarches d\'aides MaPrimeRénov.',
                cout: '700 – 1 400 €/m²',
              },
              {
                titre: 'Rafraîchissement avant vente ou mise en location',
                solution: 'Peinture toutes pièces (teintes neutres adaptées à la mise en valeur), remplacement du sol usé (stratifié ou vinyle de qualité), nettoyage et rafraîchissement cuisine et sanitaires. Résultat : appartement présentable vendu ou loué plus vite et à meilleur prix.',
                cout: '400 – 600 €/m²',
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

      {/* Section 3 — Contraintes */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Contraintes et spécificités de la rénovation dans le 20e arrondissement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Rénover dans le 20e arrondissement demande une bonne connaissance des immeubles anciens de faubourg et des contraintes logistiques associées.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Immeubles sans ascenseur : logistique incontournable',
                prix: 'Surcoût 10 – 20 %',
                detail: 'La grande majorité des immeubles de faubourg du 20e (construits avant 1945) n\'ont pas d\'ascenseur. La montée des matériaux et la descente des gravats se font manuellement dans des escaliers souvent étroits et raides. Ce surcoût logistique — anticipé dans notre devis — est compensé par des prix d\'achat inférieurs au reste de Paris.',
              },
              {
                type: 'Plomb et amiante : diagnostics obligatoires',
                prix: '200 – 600 € (diagnostics)',
                detail: 'Les immeubles d\'avant 1949 du 20e sont très nombreux. Le diagnostic plomb (CREP) est obligatoire. Pour les bâtiments construits entre 1949 et 1997, le diagnostic amiante avant travaux est requis. La présence de plomb dans les peintures et canalisations est fréquente et doit être traitée selon les protocoles réglementaires avant toute démolition.',
              },
              {
                type: 'Configurations atypiques : anciens ateliers et entresols',
                prix: 'Étude technique préalable',
                detail: 'Le 20e compte de nombreuses configurations atypiques : anciens ateliers d\'artistes avec verrière, entresols de commerce transformés en habitation, appartements sous les toits avec chevrons apparents. Ces configurations sont des atouts esthétiques mais demandent une expertise technique spécifique pour la plomberie, l\'électricité et l\'isolation. Notre équipe réalise un relevé technique avant devis.',
              },
              {
                type: 'Copropriétés anciens syndicats bénévoles',
                prix: 'Délai variable',
                detail: 'Certains petits immeubles du 20e (4 à 10 lots) fonctionnent avec des syndics bénévoles peu disponibles. Les autorisations de travaux peuvent prendre plus de temps qu\'en grande copropriété. Notre coordinateur anticipe ces situations et guide les propriétaires dans leurs démarches.',
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
            Prix rénovation appartement Paris 20e : tableau récapitulatif 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Estimations main d&apos;œuvre et matériaux inclus, pour des appartements type du 20e arrondissement de Paris.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Niveau</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prestations</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Total 48 m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    niveau: 'Rafraîchissement',
                    prestations: 'Peinture + sol + petites réparations',
                    prixM2: '400 – 600 €',
                    total: '19 000 – 29 000 €',
                  },
                  {
                    niveau: 'Rénovation partielle',
                    prestations: 'Cuisine ou SDB + peinture + sol',
                    prixM2: '650 – 1 100 €',
                    total: '31 000 – 53 000 €',
                  },
                  {
                    niveau: 'Rénovation complète',
                    prestations: 'Cuisine + SDB + électricité + plomberie + sols',
                    prixM2: '1 000 – 1 700 €',
                    total: '48 000 – 82 000 €',
                  },
                  {
                    niveau: 'Haut de gamme / loft',
                    prestations: 'Tout compris + matériaux premium + isolation + atypique',
                    prixM2: '1 700 – 2 500 €',
                    total: '82 000 – 120 000 €',
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
              Checklist avant de démarrer une rénovation dans le 20e
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Commander le diagnostic plomb (avant 1949) et amiante (avant 1997)',
                'Anticiper le surcoût logistique pour les immeubles sans ascenseur',
                'Vérifier la présence de configurations atypiques (atelier, entresol)',
                'Identifier le syndic et obtenir l\'accord pour les travaux sur réseaux communs',
                'Vérifier la classe DPE et l\'éligibilité aux aides MaPrimeRénov',
                'Prévoir 15 % de budget pour les imprévus dans les immeubles de faubourg',
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
            Exemples de chantiers réalisés dans le 20e arrondissement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Quelques réalisations représentatives dans les différents secteurs du 20e.
          </p>
          <div className="space-y-4">
            {[
              {
                titre: '2 pièces 42 m² Ménilmontant — transformation investisseur',
                description: 'Rénovation complète d\'un appartement dans son jus : dépose complète, remplacement canalisations plomb, électricité aux normes, cuisine neuve ouverte, salle d\'eau créée (WC sur palier intégré), parquet flottant chêne, peinture. 3e étage sans ascenseur : monte-matériaux en façade. Budget : 54 000 €. Durée : 7 semaines.',
                highlight: 'Loyer +40 % — rentabilité brute 5,1 %',
              },
              {
                titre: 'Atelier 60 m² Gambetta — transformation en loft habitation',
                description: 'Transformation d\'un ancien atelier de couture (rez-de-chaussée sur cour) en loft 1 pièce avec mezzanine : cloisonnement chambre haute et salle de bain, cuisine ouverte, béton ciré au sol, verrière restaurée, électricité complète, plomberie. Configuration atypique très demandée. Budget : 98 000 €. Durée : 12 semaines.',
                highlight: 'Bien atypique — valorisé 25 % au-dessus du marché',
              },
              {
                titre: 'Famille 75 m² Père-Lachaise — rénovation haut de gamme',
                description: 'Rénovation haut de gamme pour propriétaires occupants : cuisine sur mesure avec îlot central, salle de bain principale en marbre, 2e salle d\'eau, parquet massif chêne, moulures conservées, domotique Somfy (volets + lumières). Budget : 165 000 €. Durée : 14 semaines.',
                highlight: 'Rénovation haut de gamme clé en main — satisfaction 10/10',
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
            Pourquoi choisir Espace Design pour rénover dans le 20e arrondissement ?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le 20e arrondissement est l&apos;un de nos terrains d&apos;expertise principaux. Nous y intervenons régulièrement pour des investisseurs, des primo-accédants et des propriétaires occupants dans des configurations très variées.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                titre: 'Expertise immeubles de faubourg sans ascenseur',
                detail: 'Nos équipes maîtrisent parfaitement la logistique des chantiers en immeuble de faubourg : monte-matériaux, protection escaliers, livraisons aux horaires autorisés. Le surcoût est anticipé et inclus dans le devis, sans mauvaise surprise.',
              },
              {
                titre: 'Rénovation de configurations atypiques',
                detail: 'Ateliers, entresols, sous-combles, duplex atypiques : nous avons réalisé des dizaines de conversions de locaux non habituels en logements dans le 20e. Notre équipe technique réalise une étude préalable approfondie avant toute proposition chiffrée.',
              },
              {
                titre: 'Accompagnement investisseurs ROI-centrique',
                detail: 'Notre approche investisseur : matériaux durables et esthétiques pour le prix, finitions soignées qui maximisent le loyer, délais tenus pour minimiser la vacance locative. Chiffrage pré-acquisition possible sur photo ou visite rapide.',
              },
              {
                titre: 'Suivi et communication en temps réel',
                detail: 'Photo du chantier chaque semaine, compte-rendu d\'avancement, alerte immédiate en cas d\'imprévu. Notre chef de projet est joignable 6j/7. Vous êtes informé sans avoir à vous déplacer sur le chantier.',
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
              { href: '/blog/renovation-appartement-paris-19e', title: 'Rénovation appartement Paris 19e' },
              { href: '/blog/renovation-appartement-paris-11e', title: 'Rénovation appartement Paris 11e' },
              { href: '/blog/renovation-appartement-paris-18e', title: 'Rénovation appartement Paris 18e' },
              { href: '/blog/renovation-appartement-ancien-paris', title: 'Rénovation appartement ancien Paris' },
              { href: '/blog/investissement-locatif-renovation-paris', title: 'Investissement locatif rénovation Paris' },
              { href: '/blog/renovation-loft-paris', title: 'Rénovation loft Paris' },
              { href: '/blog/prix-renovation-appartement-paris', title: 'Prix rénovation appartement Paris' },
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
              { href: '/renovation-paris-19e', label: 'Paris 19e' },
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-paris-12e', label: 'Paris 12e' },
              { href: '/renovation-montreuil', label: 'Montreuil' },
              { href: '/renovation-vincennes', label: 'Vincennes' },
              { href: '/renovation-bagnolet', label: 'Bagnolet' },
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
          Rénover votre appartement dans le 20e arrondissement
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis sous 48h. Expertise investisseurs et immeubles de faubourg.
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
