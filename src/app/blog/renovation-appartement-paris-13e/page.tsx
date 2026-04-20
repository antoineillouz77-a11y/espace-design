import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Paris 13e', item: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-13e' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Paris 13e : Butte-aux-Cailles, Olympiades & prix 2025 | Espace Design',
  description: 'Artisan rénovation Paris 13e arrondissement. Butte-aux-Cailles, Olympiades, quartier asiatique. Prix 2025, devis gratuit sous 48h.',
  datePublished: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-13e',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix au m² pour rénover un appartement dans le 13e arrondissement de Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dans le 13e arrondissement, les prix varient selon le type de bâti. Pour un haussmannien (Butte-aux-Cailles, Maison-Blanche) : 1 400 à 2 200 €/m² pour une rénovation complète. Pour un appartement dans les tours modernes des années 70 (Olympiades, place d\'Italie) : 1 100 à 1 800 €/m², les structures béton étant plus simples à traiter. Un rafraîchissement coûte 400–650 €/m² dans les deux cas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelles sont les spécificités de la rénovation dans les tours des Olympiades ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Les appartements dans les tours des Olympiades (construits dans les années 1970–1980) ont des cloisons légères faciles à déplacer, des faux-plafonds existants dissimulant les réseaux, et des dalles béton. Les rénovations consistent souvent à ouvrir les espaces, moderniser cuisines et salles de bain, refaire les sols et améliorer l\'isolation phonique. Avantage : pas d\'amiante friable dans les parties courantes en général (mais diagnostics individuels obligatoires).',
      },
    },
    {
      '@type': 'Question',
      name: 'La Butte-aux-Cailles est-elle un bon secteur pour investir avec rénovation ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La Butte-aux-Cailles est le quartier le plus prisé du 13e, avec des prix post-rénovation atteignant 11 000–13 000 €/m². Les appartements dégradés y sont rares et partent rapidement. La demande locative est forte et la valorisation post-rénovation excellente. Pour un investisseur, acheter un bien à rénover dans ce secteur est l\'une des meilleures stratégies du 13e.',
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on rénover un appartement occupé par un locataire dans le 13e ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pour une rénovation légère (peinture, sol, sanitaires simples), il est possible de travailler avec le locataire en place, pièce par pièce. En revanche, une rénovation complète (électricité, plomberie, cuisine, salle de bain) nécessite que le bien soit libéré. Le locataire peut alors prétendre à un relogement provisoire. Notre équipe conseille les propriétaires-bailleurs sur la stratégie adaptée à leur situation.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Paris 13e : Butte-aux-Cailles, Olympiades & prix 2025 | Espace Design',
  description: 'Artisan rénovation Paris 13e arrondissement. Butte-aux-Cailles, Olympiades, quartier asiatique, prix 2025. Devis gratuit sous 48h.',
  keywords: [
    'rénovation appartement paris 13e',
    'artisan rénovation 13e arrondissement',
    'rénovation butte-aux-cailles',
    'travaux appartement olympiades paris',
    'prix rénovation paris 13e 2025',
    'rénovation place italie paris',
    'entrepreneur rénovation paris 13',
  ],
}

export default function ArticleRenovationParis13() {
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
            Paris 13e arrondissement
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Appartement Paris 13e : Butte-aux-Cailles, Olympiades &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Butte-aux-Cailles, Olympiades, quartier asiatique, Maison-Blanche, place d&apos;Italie : le 13e arrondissement est l&apos;un des plus contrastés de Paris, mêlant haussmannien de caractère et immeubles modernes des années 70. Espace Design intervient dans tout le 13e avec une expertise adaptée à chaque type de bâti, devis sous 48h.
          </p>
        </div>
      </section>

      {/* Section 1 — Quartiers */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Le parc immobilier du 13e : mix haussmannien et tours modernes des années 70
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le 13e arrondissement présente une dualité architecturale unique à Paris. Le nord et l&apos;ouest (Butte-aux-Cailles, Gobelins, Maison-Blanche) conservent leur tissu haussmannien et leurs maisons de faubourg. L&apos;est (Olympiades, Ivry) a été profondément transformé dans les années 1960–1980, avec des tours et barres donnant naissance au célèbre quartier asiatique. Cette diversité exige des approches de rénovation bien distinctes.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Butte-aux-Cailles : haussmannien et maisons de ville atypiques',
                  detail: 'La Butte-aux-Cailles est le quartier le plus recherché du 13e. Son tissu dense mêle immeubles haussmanniens, maisons de faubourg sur 2–3 étages et quelques maisons individuelles avec jardin. La rénovation y préserve le cachet (poutres apparentes, tomettes, pierres) tout en modernisant les équipements. Les prix post-rénovation atteignent 11 000–13 000 €/m², justifiant des rénovations complètes ambitieuses.',
                },
                {
                  enjeu: 'Olympiades – Quartier asiatique : tours des années 70',
                  detail: 'Construites dans les années 1970, les tours des Olympiades abritent des appartements souvent spacieux (60–120 m²) aux finitions vieillissantes. La structure béton est saine mais les installations méritent une remise à niveau : plomberie en acier, électricité insuffisante, isolation phonique faible. La rénovation est souvent moins contraignante que les haussmanniens (cloisons facilement déplaçables) mais peut révéler des surprises sur les réseaux.',
                },
                {
                  enjeu: 'Gobelins – Maison-Blanche : secteur en mutation post-Grand Paris',
                  detail: 'Le secteur Gobelins et Maison-Blanche est en pleine gentrification depuis l\'arrivée du Grand Paris Express (ligne 15). Les immeubles sont principalement haussmanniens et de rapport. Les appartements souvent dans leur jus depuis des décennies représentent une opportunité : prix d\'achat encore modérés (8 500–10 500 €/m²) et fort potentiel de valorisation après rénovation complète.',
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
            Types de travaux les plus demandés dans le 13e arrondissement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La diversité du bâti dans le 13e génère des demandes très variées, des haussmanniens à restaurer aux appartements modernes à transformer en profondeur.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Rénovation complète appartement haussmannien',
                solution: 'Remise à neuf totale : dépose anciens revêtements, remplacement électricité et plomberie, nouvelle cuisine et salle de bain, restauration parquet, peinture. Approche patrimoniale : conservation des moulures, cheminées et parquets anciens typiques des haussmanniens de la Butte-aux-Cailles.',
                cout: '1 400 – 2 200 €/m²',
              },
              {
                titre: 'Ouverture des espaces dans les tours (années 70)',
                solution: 'Suppression des couloirs, cuisine ouverte sur salon, création de suites parentales dans les appartements des tours du 13e. Les cloisons légères (carreaux de plâtre) sont faciles à abattre et cette transformation modernise profondément ces appartements pour un coût maîtrisé.',
                cout: '8 000 – 20 000 €',
              },
              {
                titre: 'Rénovation salle de bain et cuisine complète',
                solution: 'Transformation des cuisines et salles de bain vieillissantes dans les appartements modernes du 13e. Dépose anciens équipements, reconfiguration, équipements contemporains. Impact immédiat sur la valeur locative et la qualité de vie des occupants.',
                cout: '9 000 – 25 000 € (cuisine) / 8 000 – 20 000 € (SDB)',
              },
              {
                titre: 'Studio et 2 pièces pour investissement locatif',
                solution: 'Optimisation pour la location : agencement intelligent, rangements intégrés, cuisine compacte équipée, salle d\'eau fonctionnelle. Dans le 13e, les petites surfaces bien rénovées se louent très facilement grâce à la proximité des universités et hôpitaux.',
                cout: '18 000 – 45 000 €',
              },
              {
                titre: 'Isolation phonique entre appartements',
                solution: 'Les tours des années 70 sont souvent peu isolées phoniquement. Mise en œuvre de doublages acoustiques sur les cloisons mitoyennes, traitement des planchers (dalle flottante), menuiseries double vitrage performant. Amélioration significative du confort et de la valeur du bien.',
                cout: '50 – 120 €/m² de paroi traitée',
              },
              {
                titre: 'Mise aux normes électrique et réseaux',
                solution: 'Remplacement du tableau électrique vétuste, mise aux normes NF C 15-100, création des circuits dédiés cuisine et salle de bain, passage fibre optique, préglaçage domotique. Obligatoire pour tout projet de rénovation complète, dans l\'ancien comme dans le moderne.',
                cout: '4 500 – 12 000 €',
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
            Contraintes et spécificités de la rénovation dans le 13e
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Selon le secteur et le type de bâti, les contraintes varient considérablement dans le 13e arrondissement. Voici les points de vigilance essentiels.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Diagnostics amiante dans les immeubles des années 70',
                prix: '200 – 500 € (diagnostics)',
                detail: 'Les immeubles construits entre 1960 et 1997 peuvent contenir de l\'amiante dans certains matériaux (colles de carrelage, joints de fenêtres). Un diagnostic amiante avant travaux est obligatoire. En cas de présence, le désamiantage est confié à une entreprise certifiée. Les tours des Olympiades ont souvent fait l\'objet de travaux de mise en sécurité sur parties communes, mais les privatifs nécessitent un diagnostic individuel.',
              },
              {
                type: 'Copropriétés des tours : règles strictes',
                prix: 'Délai +3 à 6 semaines',
                detail: 'Les grandes copropriétés des tours du 13e ont des règles précises sur les horaires de travaux, la protection des parties communes et les livraisons de matériaux. Les modifications de cloisonnement et les travaux sur réseaux collectifs (colonnes montantes) nécessitent une autorisation du syndic et parfois un vote en AG. Notre coordinateur de travaux gère ces démarches.',
              },
              {
                type: 'Logistique dans les tours (monte-charge, gravats)',
                prix: 'Variable selon étage',
                detail: 'Dans les tours des Olympiades (jusqu\'à 17 étages), la logistique est un point clé : réservation des ascenseurs de service, bennes à gravats dans les parkings, coordination avec les voisins. Notre équipe établit un plan logistique détaillé avant tout démarrage de chantier.',
              },
              {
                type: 'Plomb et réseaux dans les haussmanniens d\'avant 1949',
                prix: '3 000 – 10 000 € (remplacement)',
                detail: 'Les immeubles haussmanniens de la Butte-aux-Cailles construits avant 1949 peuvent avoir des canalisations en plomb. Le diagnostic CREP est obligatoire avant travaux. Le remplacement est fortement conseillé (obligatoire pour la mise en location) et améliore la qualité de l\'eau et la valeur du bien.',
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
            Prix rénovation appartement Paris 13e : tableau récapitulatif 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Estimations main d&apos;œuvre et matériaux inclus. Les fourchettes varient selon le type de bâti (haussmannien vs. tour moderne).
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Niveau</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prestations</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Total 65 m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    niveau: 'Rafraîchissement',
                    prestations: 'Peinture + sol + petites réparations',
                    prixM2: '400 – 650 €',
                    total: '26 000 – 42 000 €',
                  },
                  {
                    niveau: 'Rénovation partielle',
                    prestations: 'Cuisine ou SDB + peinture + sol',
                    prixM2: '750 – 1 200 €',
                    total: '49 000 – 78 000 €',
                  },
                  {
                    niveau: 'Rénovation complète',
                    prestations: 'Cuisine + SDB + électricité + plomberie + sols',
                    prixM2: '1 100 – 2 000 €',
                    total: '72 000 – 130 000 €',
                  },
                  {
                    niveau: 'Haut de gamme',
                    prestations: 'Tout compris + matériaux premium + isolation phonique',
                    prixM2: '2 000 – 2 800 €',
                    total: '130 000 – 182 000 €',
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
              Checklist avant de démarrer une rénovation dans le 13e
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Commander le diagnostic amiante avant tout commencement (obligatoire si avant 1997)',
                'Vérifier les canalisations en plomb pour les immeubles d\'avant 1949',
                'Consulter le règlement de copropriété pour les restrictions de travaux',
                'Obtenir l\'accord du syndic pour les modifications de cloisons ou réseaux',
                'Planifier la logistique de benne à gravats selon les règles de la résidence',
                'Anticiper 10 à 15 % de budget pour les imprévus selon l\'état initial',
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
            Exemples de chantiers réalisés dans le 13e arrondissement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Quelques réalisations représentatives dans les différents secteurs du 13e.
          </p>
          <div className="space-y-4">
            {[
              {
                titre: 'Haussmannien 80 m² Butte-aux-Cailles — rénovation patrimoniale',
                description: 'Rénovation complète pour un couple de primo-accédants : cuisine ouverte sur salon, salle de bain restructurée avec douche italienne, remplacement plomberie (tuyaux en plomb), électricité aux normes, restauration parquet en chêne, peinture. Plafonds et moulures conservés. Budget : 148 000 €. Durée : 11 semaines.',
                highlight: 'Valorisation du patrimoine — plus-value estimée à 35 000 € post-travaux',
              },
              {
                titre: 'Tour Olympiades 65 m² — transformation investisseur',
                description: 'Ouverture cuisine/salon, création suite parentale, remplacement salle de bain et WC, nouveau sol vinyle grande lame, peinture, électricité mise à jour. Le bien transformé a été mis en location à un loyer supérieur de 25 % au précédent. Budget : 62 000 €. Durée : 8 semaines.',
                highlight: 'Rendement locatif optimisé — loyer +25 % post-travaux',
              },
              {
                titre: 'Studio 32 m² Gobelins — location étudiante optimisée',
                description: 'Rénovation complète pour investisseur LMNP : création salle d\'eau, mini-cuisine équipée, lit escamotable mural, rangements intégrés, peinture, sol stratifié. Optimisation de chaque centimètre carré. Budget : 28 000 €. Durée : 4 semaines.',
                highlight: 'Optimisation surface — rendement brut 6,2 % post-rénovation',
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
            Pourquoi choisir Espace Design pour votre rénovation dans le 13e ?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le 13e arrondissement est l&apos;un de nos secteurs d&apos;intervention principaux. Notre équipe maîtrise aussi bien la rénovation patrimoniale des haussmanniens que la réhabilitation des appartements modernes des tours des années 70.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                titre: 'Double expertise haussmannien / moderne',
                detail: 'Restauration patrimoniale (moulures, parquet ancien, plâtre) et transformation d\'espaces contemporains (cloisons légères, faux-plafonds, béton). Cette double compétence est rare et précieuse dans le 13e où les deux types de bâti coexistent.',
              },
              {
                titre: 'Connaissance des copropriétés du 13e',
                detail: 'Nous travaillons régulièrement dans les grandes copropriétés et tours du 13e. Nos dossiers d\'autorisation sont complets et traités rapidement. Nos équipes connaissent les contraintes logistiques spécifiques à ces bâtiments.',
              },
              {
                titre: 'Accompagnement investisseurs',
                detail: 'Chiffrage pré-acquisition sur photo ou visite rapide, devis global avec délai et planning, suivi à distance possible. Notre objectif : maximiser votre retour sur investissement dans le 13e.',
              },
              {
                titre: 'Garanties et assurances',
                detail: 'Assurance décennale et garantie de parfait achèvement sur tous nos chantiers. Nos devis sont fermes et définitifs. En cas d\'imprévu, nous vous informons immédiatement et proposons des solutions concrètes.',
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
              { href: '/blog/renovation-appartement-paris-12e', title: 'Rénovation appartement Paris 12e' },
              { href: '/blog/renovation-appartement-paris-14e', title: 'Rénovation appartement Paris 14e' },
              { href: '/blog/renovation-appartement-paris-5e', title: 'Rénovation appartement Paris 5e' },
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénovation haussmannien Paris' },
              { href: '/blog/investissement-locatif-renovation-paris', title: 'Investissement locatif rénovation Paris' },
              { href: '/blog/isolation-phonique-paris', title: 'Isolation phonique appartement Paris' },
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
              { href: '/renovation-paris-5e', label: 'Paris 5e' },
              { href: '/renovation-paris-12e', label: 'Paris 12e' },
              { href: '/renovation-paris-14e', label: 'Paris 14e' },
              { href: '/renovation-ivry-sur-seine', label: 'Ivry-sur-Seine' },
              { href: '/renovation-gentilly', label: 'Gentilly' },
              { href: '/renovation-kremlin-bicetre', label: 'Le Kremlin-Bicêtre' },
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
          Rénover votre appartement dans le 13e arrondissement
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis sous 48h. Expertise haussmannien et tours modernes.
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
