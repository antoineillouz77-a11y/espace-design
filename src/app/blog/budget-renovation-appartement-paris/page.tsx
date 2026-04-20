import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: "Budget Rénovation Appartement Paris : grilles de prix 2025 par pièce | Espace Design",
  description:
    "Combien coûte la rénovation d'un appartement à Paris en 2025 ? Grilles de prix détaillées par pièce (peinture, salle de bain, cuisine, parquet), budget au m² et conseils pour optimiser.",
  keywords: [
    "budget rénovation appartement Paris",
    "prix rénovation Paris 2025",
    "coût rénovation appartement",
    "prix au m2 rénovation Paris",
    "budget travaux appartement Paris",
  ],
}

const schemaArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Budget Rénovation Appartement Paris : grilles de prix 2025 par pièce",
  description: "Grilles de prix 2025 pour la rénovation d'appartement à Paris : par pièce, par type de travaux et par m². Conseils pour optimiser son budget.",
  author: { "@type": "Organization", name: "Espace Design" },
  publisher: {
    "@type": "Organization",
    name: "Espace Design",
    url: "https://espacedesignparis.fr",
  },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
}

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Combien coûte la rénovation d'un appartement de 50m² à Paris ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pour un appartement de 50 m² à Paris, comptez entre 15 000 et 25 000 € pour un rafraîchissement complet (peinture, sols, petits travaux) et entre 35 000 et 75 000 € pour une rénovation totale incluant salle de bain, cuisine, électricité et plomberie. Le budget final dépend de l'état initial du bien et du niveau de finition souhaité.",
      },
    },
    {
      "@type": "Question",
      name: "Comment obtenir plusieurs devis pour une rénovation à Paris ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pour obtenir des devis comparables, contactez au moins 3 artisans ou entreprises générales, demandez une visite sur place (jamais de devis par téléphone), et assurez-vous que chaque devis est détaillé poste par poste. Méfiez-vous des devis trop vagues ou trop bas, souvent synonymes de malfaçons ou de surcoûts en cours de chantier.",
      },
    },
    {
      "@type": "Question",
      name: "Y a-t-il des aides financières pour la rénovation d'un appartement à Paris ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, plusieurs aides existent : MaPrimeRénov' pour les travaux d'isolation ou de chauffage, l'éco-PTZ (prêt à taux zéro), les aides de l'Anah, et parfois des aides spécifiques de la Ville de Paris. Ces dispositifs concernent principalement les travaux d'amélioration énergétique, pas les rénovations décoratives.",
      },
    },
    {
      "@type": "Question",
      name: "Faut-il tout rénover d'un coup ou procéder par étapes ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tout rénover d'un coup est généralement plus économique : les artisans se déplacent une seule fois, les zones de travaux se coordonnent, et on évite de refaire deux fois le même poste. Par étapes, on étale la dépense mais on paye plus cher au total. Notre conseil : prioriser les travaux structurels (électricité, plomberie, isolation) en premier, puis les finitions.",
      },
    },
  ],
}

const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://espacedesignparis.fr" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://espacedesignparis.fr/blog" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Budget rénovation appartement Paris 2025",
      item: "https://espacedesignparis.fr/blog/budget-renovation-appartement-paris",
    },
  ],
}

export default function ArticleBudgetRenovation() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-12 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">
            Guide & Prix
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Budget Rénovation Appartement Paris : combien prévoir en 2025 ?
          </h1>
          <p className="text-gray-500 text-sm font-light leading-relaxed">
            Avant de lancer des travaux, la première question est toujours la même : combien ça va
            coûter ? À Paris, les prix de la rénovation varient considérablement selon l&apos;ampleur
            du chantier, l&apos;état initial du bien et les matériaux choisis. Ce guide vous donne les
            grilles de prix 2025 par type de travaux et par pièce, pour budgéter votre projet
            avec précision.
          </p>
        </div>
      </section>

      {/* Section 1 — Prix au m² par type de travaux */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">

          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Prix au m² par type de travaux à Paris en 2025
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Les tarifs ci-dessous sont des fourchettes observées sur le marché parisien en 2025,
              pose et fourniture comprises pour les revêtements. Ils constituent un point de
              départ — chaque chantier mérite une visite et un devis personnalisé.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1C1C1C] text-white">
                    <th className="text-left font-light px-4 py-3 text-xs uppercase tracking-widest">
                      Type de travaux
                    </th>
                    <th className="text-right font-light px-4 py-3 text-xs uppercase tracking-widest">
                      Fourchette de prix
                    </th>
                    <th className="text-right font-light px-4 py-3 text-xs uppercase tracking-widest">
                      Unité
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { travaux: "Peinture (murs + plafond)", prix: "20 – 40 €", unite: "m²" },
                    { travaux: "Enduit décoratif / béton ciré", prix: "60 – 120 €", unite: "m²" },
                    { travaux: "Parquet flottant (pose incluse)", prix: "35 – 60 €", unite: "m²" },
                    { travaux: "Parquet massif collé ou cloué", prix: "70 – 130 €", unite: "m²" },
                    { travaux: "Carrelage standard (60×60)", prix: "60 – 100 €", unite: "m²" },
                    { travaux: "Carrelage grand format (120×120)", prix: "90 – 160 €", unite: "m²" },
                    { travaux: "Carrelage salle de bain (faïence)", prix: "50 – 90 €", unite: "m²" },
                    { travaux: "Isolation thermique par l'intérieur", prix: "40 – 80 €", unite: "m²" },
                    { travaux: "Électricité (mise aux normes)", prix: "60 – 110 €", unite: "m²" },
                    { travaux: "Plomberie (rénovation complète)", prix: "50 – 100 €", unite: "m²" },
                  ].map((row, i) => (
                    <tr
                      key={row.travaux}
                      className={i % 2 === 0 ? "bg-white" : "bg-[#FAFAF8]"}
                    >
                      <td className="px-4 py-3 text-gray-700 font-light">{row.travaux}</td>
                      <td className="px-4 py-3 text-right font-medium text-[#1C1C1C]">{row.prix}</td>
                      <td className="px-4 py-3 text-right text-gray-500 font-light">{row.unite}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-gray-500 text-xs font-light mt-3 italic">
              Tarifs constatés à Paris en 2025, hors travaux structurels (mur porteur, trémie). TVA 10% incluse.
            </p>
          </div>

          {/* Section 2 — Prix par pièce */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Budget par pièce : salle de bain, cuisine, séjour
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Au-delà du prix au m², certaines pièces ont un poids budgétaire propre. Salle de bain
              et cuisine concentrent souvent 60 à 70 % du budget total d&apos;une rénovation complète.
            </p>

            <div className="space-y-5">
              {[
                {
                  piece: "Salle de bain",
                  fourchette: "8 000 – 15 000 €",
                  detail: "Pour une salle de bain standard de 4 à 6 m² : démolition, étanchéité, carrelage mural et sol, douche italienne ou baignoire, sanitaires, robinetterie, ventilation. Les matériaux haut de gamme (marbre, robinetterie design) peuvent porter la facture à 20 000 € et plus.",
                  color: "border-[#D4AF37]",
                },
                {
                  piece: "Cuisine",
                  fourchette: "10 000 – 20 000 €",
                  detail: "Fourniture et pose d'une cuisine équipée standard (meubles, plan de travail, électroménager de milieu de gamme) avec adaptation plomberie et électricité. Une cuisine sur-mesure ou haut de gamme démarre à 20 000 € et peut dépasser 40 000 €.",
                  color: "border-[#D4AF37]",
                },
                {
                  piece: "Séjour / pièce à vivre",
                  fourchette: "3 000 – 8 000 €",
                  detail: "Peinture, sol (parquet ou carrelage), éventuelles moulures, création d'une cloison ou ouverture vers la cuisine. Hors travaux électriques spécifiques.",
                  color: "border-[#D4AF37]",
                },
                {
                  piece: "Chambre",
                  fourchette: "2 000 – 5 000 €",
                  detail: "Peinture, parquet, placards sur-mesure si besoin. La chambre est généralement le poste le moins coûteux d'une rénovation complète.",
                  color: "border-[#D4AF37]",
                },
                {
                  piece: "WC séparé",
                  fourchette: "2 500 – 6 000 €",
                  detail: "Démolition, faïence, WC suspendu ou au sol, lave-mains, robinetterie, ventilation. Un WC suspendu avec bâti-support ajoute environ 800 à 1 200 € mais facilite l'entretien.",
                  color: "border-[#D4AF37]",
                },
              ].map((item) => (
                <div key={item.piece} className={`border-l-2 ${item.color} pl-5`}>
                  <div className="flex flex-wrap items-baseline gap-3 mb-2">
                    <h3 className="font-display text-lg font-semibold text-[#1C1C1C]">
                      {item.piece}
                    </h3>
                    <span className="text-[#B8960C] text-sm font-medium">{item.fourchette}</span>
                  </div>
                  <p className="text-gray-600 text-sm font-light leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3 — Rénovation complète */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Budget rénovation complète : 700 à 1 500 €/m² à Paris
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Une rénovation complète couvre l&apos;ensemble des corps de métier : démolition,
              électricité, plomberie, isolation, plâtrerie, carrelage, parquet, peinture, menuiserie
              et cuisine. À Paris en 2025, la fourchette de marché se situe entre 700 et 1 500 €/m²
              selon le niveau de finition.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {[
                {
                  label: "Entrée de gamme",
                  price: "700 – 900 €/m²",
                  desc: "Matériaux standards, finitions soignées mais sans sur-mesure. Idéal pour un investissement locatif ou une première rénovation.",
                },
                {
                  label: "Milieu de gamme",
                  price: "900 – 1 200 €/m²",
                  desc: "Carrelage grand format, parquet massif, cuisine équipée de qualité. Le choix le plus fréquent pour une résidence principale.",
                },
                {
                  label: "Haut de gamme",
                  price: "1 200 – 1 500 €/m²",
                  desc: "Matériaux premium, sur-mesure, finitions luxe. Adapté aux appartements haussmanniens ou aux projets d'exception.",
                },
              ].map((item) => (
                <div key={item.label} className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-5">
                  <div className="text-[#B8960C] text-xs font-light uppercase tracking-widest mb-1">
                    {item.label}
                  </div>
                  <div className="font-display text-lg font-semibold text-[#1C1C1C] mb-2">
                    {item.price}
                  </div>
                  <p className="text-gray-500 text-xs font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#FAFAF8] border border-gray-200 rounded-lg p-5">
              <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-3">
                Exemple : rénovation complète d&apos;un 50 m² à Paris
              </h3>
              <div className="space-y-1 text-sm">
                {[
                  { poste: "Démolition & débarras", budget: "2 500 €" },
                  { poste: "Électricité complète", budget: "5 500 €" },
                  { poste: "Plomberie", budget: "3 800 €" },
                  { poste: "Salle de bain", budget: "10 000 €" },
                  { poste: "Cuisine équipée", budget: "12 000 €" },
                  { poste: "Carrelage & parquet", budget: "8 000 €" },
                  { poste: "Peinture & enduits", budget: "5 500 €" },
                  { poste: "Menuiseries intérieures", budget: "2 700 €" },
                ].map((row) => (
                  <div key={row.poste} className="flex justify-between py-1.5 border-b border-gray-100">
                    <span className="text-gray-600 font-light">{row.poste}</span>
                    <span className="font-medium text-[#1C1C1C]">{row.budget}</span>
                  </div>
                ))}
                <div className="flex justify-between pt-2 text-[#1C1C1C] font-semibold">
                  <span>Total estimé (milieu de gamme)</span>
                  <span>50 000 €</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 — Facteurs influençant le prix */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Facteurs qui font varier le budget de rénovation à Paris
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              À surface égale, deux appartements parisiens peuvent avoir des budgets de rénovation
              très différents. Voici les principaux facteurs d&apos;écart de prix.
            </p>
            <ul className="space-y-4">
              {[
                {
                  title: "L'état initial du bien",
                  detail: "Un appartement non rénové depuis 30 ans nécessitera une mise aux normes électrique complète, souvent une réfection de la plomberie, et parfois un traitement contre l'humidité. Ces postes invisibles peuvent représenter 20 à 30 % du budget total.",
                },
                {
                  title: "L'étage et l'accessibilité",
                  detail: "Un 6e étage sans ascenseur ou un immeuble avec un couloir étroit complique l'acheminement des matériaux et rallonge les temps de chantier. Comptez une majoration de 5 à 15 % par rapport à un rez-de-chaussée accessible.",
                },
                {
                  title: "Les contraintes de copropriété",
                  detail: "Horaires de chantier restreints, protection des parties communes imposée, règlement intérieur strict sur les travaux en façade : ces contraintes allongent les délais et augmentent le coût logistique.",
                },
                {
                  title: "Le choix des matériaux",
                  detail: "Le carrelage varie de 15 à 200 €/m², le parquet de 30 à 250 €/m², la robinetterie de 80 à 2 000 € par poste. Sur l'ensemble d'un appartement, les matériaux représentent 30 à 50 % du budget total.",
                },
                {
                  title: "Les travaux structurels",
                  detail: "Ouverture d'un mur porteur (4 000 à 12 000 €), création d'une trémie pour escalier (5 000 à 15 000 €), déplacement de colonnes humides : ces postes nécessitent un bureau d'études et augmentent significativement le budget.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-3">
                  <CheckCircle size={16} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#1C1C1C] text-sm font-medium">{item.title} : </span>
                    <span className="text-gray-600 text-sm font-light">{item.detail}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 5 — Optimiser son budget */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Comment optimiser son budget de rénovation à Paris
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Rénover à Paris ne signifie pas forcément dépenser plus que nécessaire. Voici les
              leviers concrets pour maîtriser votre budget sans sacrifier la qualité.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  titre: "Prioriser les travaux structurels",
                  texte: "Électricité, plomberie, isolation : ces postes sont invisibles une fois les travaux terminés, mais leur qualité conditionne tout le reste. Ne pas les rogner au profit des finitions.",
                },
                {
                  titre: "Choisir un interlocuteur unique",
                  texte: "Une entreprise générale qui coordonne tous les corps de métier évite les surcoûts liés aux interfaces entre artisans et les délais de coordination.",
                },
                {
                  titre: "Tout rénover en une seule fois",
                  texte: "Regrouper les travaux sur un seul chantier coûte toujours moins cher que de multiplier les interventions. Les coûts fixes (installation, débarras, protection) sont mutualisés.",
                },
                {
                  titre: "Jouer sur les matériaux, pas sur la main-d'oeuvre",
                  texte: "Il vaut mieux choisir un carrelage de milieu de gamme posé par un bon carreleur que du marbre mal posé. La qualité de pose dure plus longtemps que le matériau.",
                },
                {
                  titre: "Anticiper les imprévus",
                  texte: "Prévoir une réserve de 10 à 15 % du budget pour les découvertes de chantier (humidité cachée, câblage non conforme, structure dégradée).",
                },
                {
                  titre: "Demander un devis détaillé",
                  texte: "Un devis poste par poste permet d'identifier les postes surdimensionnés et de les ajuster. Méfiez-vous des devis globaux sans détail.",
                },
              ].map((item) => (
                <div
                  key={item.titre}
                  className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-5"
                >
                  <h3 className="text-sm font-semibold text-[#1C1C1C] mb-2">{item.titre}</h3>
                  <p className="text-gray-500 text-xs font-light leading-relaxed">{item.texte}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-6">
              Questions fréquentes sur le budget de rénovation à Paris
            </h2>
            <div className="space-y-5">
              {[
                {
                  q: "Combien coûte la rénovation d'un appartement de 50 m² à Paris ?",
                  a: "Pour un appartement de 50 m² à Paris, comptez entre 15 000 et 25 000 € pour un rafraîchissement complet (peinture, sols, petits travaux) et entre 35 000 et 75 000 € pour une rénovation totale incluant salle de bain, cuisine, électricité et plomberie. Le budget final dépend de l'état initial du bien et du niveau de finition souhaité.",
                },
                {
                  q: "Comment obtenir plusieurs devis pour une rénovation à Paris ?",
                  a: "Contactez au moins 3 artisans ou entreprises générales, demandez une visite sur place (jamais de devis par téléphone), et assurez-vous que chaque devis est détaillé poste par poste. Méfiez-vous des devis trop vagues ou trop bas, souvent synonymes de malfaçons ou de surcoûts en cours de chantier.",
                },
                {
                  q: "Y a-t-il des aides financières pour la rénovation d'un appartement à Paris ?",
                  a: "Oui : MaPrimeRénov' pour les travaux d'isolation ou de chauffage, l'éco-PTZ, les aides de l'Anah et parfois des aides spécifiques de la Ville de Paris. Ces dispositifs concernent principalement les travaux d'amélioration énergétique, pas les rénovations décoratives.",
                },
                {
                  q: "Faut-il tout rénover d'un coup ou procéder par étapes ?",
                  a: "Tout rénover d'un coup est généralement plus économique : les artisans se déplacent une seule fois, les zones de travaux se coordonnent, et on évite de refaire deux fois le même poste. Notre conseil : prioriser les travaux structurels (électricité, plomberie, isolation) en premier, puis les finitions.",
                },
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-[#D4AF37] pl-5">
                  <h3 className="text-sm font-semibold text-[#1C1C1C] mb-2">{item.q}</h3>
                  <p className="text-gray-600 text-sm font-light leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Voir aussi */}
      <section className="py-12 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-xl font-semibold text-[#1C1C1C] mb-6">Voir aussi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/blog/prix-renovation-appartement-paris", title: "Prix rénovation appartement Paris 2025", tag: "Prix" },
              { href: "/blog/choisir-artisan-renovation-paris", title: "Comment choisir un artisan rénovateur à Paris ?", tag: "Conseils" },
              { href: "/blog/prix-renovation-salle-de-bain-paris", title: "Prix rénovation salle de bain Paris", tag: "Salle de bain" },
              { href: "/blog/prix-renovation-cuisine-paris", title: "Prix rénovation cuisine Paris", tag: "Cuisine" },
            ].map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="block p-4 bg-white border border-gray-100 rounded-lg hover:border-[#D4AF37]/40 transition-colors group"
              >
                <span className="text-[10px] uppercase tracking-widest text-[#B8960C] font-light">
                  {a.tag}
                </span>
                <p className="text-sm font-medium text-[#1C1C1C] mt-1 group-hover:text-[#B8960C] transition-colors leading-snug">
                  {a.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
          Estimez le budget de votre rénovation à Paris
        </h2>
        <p className="text-gray-400 text-sm font-light mb-8">
          Devis gratuit et détaillé sous 48h. Déplacement sans engagement dans tout Paris.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-7 py-3.5 rounded font-light text-sm tracking-wide hover:bg-[#c9a030] transition-colors"
          >
            Devis gratuit <ArrowRight size={13} />
          </Link>
          <a
            href="tel:+33611783867"
            className="flex items-center justify-center gap-2 border border-gray-600 text-gray-300 px-7 py-3.5 rounded font-light text-sm tracking-wide hover:border-white hover:text-white transition-colors"
          >
            <Phone size={14} />
            06 11 78 38 67
          </a>
        </div>
      </section>
    </>
  )
}
