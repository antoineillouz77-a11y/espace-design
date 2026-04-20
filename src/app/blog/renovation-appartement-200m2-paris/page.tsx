import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: "Rénovation Appartement 200m² Paris", item: 'https://espacedesignparis.fr/blog/renovation-appartement-200m2-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation Appartement 200m² Paris : planning & prix artisan 2025",
  description: "Comment planifier et budgéter la rénovation d'un grand appartement de 200m² à Paris ? Planning, corps de métier, budget au m², phasage des travaux. Guide complet artisan 2025.",
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-200m2-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le budget pour rénover un appartement de 200m² à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La rénovation d'un appartement de 200m² à Paris représente un budget de 200 000 à 600 000 € selon l'état initial et le niveau de prestation. En rénovation légère (rafraichissement, peinture, parquet, sanitaires) : 800 à 1 200 €/m², soit 160 000 à 240 000 €. En rénovation complète (électricité, plomberie, doublage, cuisine et SDB refaites) : 1 500 à 2 500 €/m², soit 300 000 à 500 000 €. En rénovation haut de gamme (matériaux de prestige, sur-mesure) : 2 500 à 4 000 €/m² et au-delà.",
      },
    },
    {
      '@type': 'Question',
      name: "Combien de temps dure la rénovation d'un appartement de 200m² à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La durée d'une rénovation de 200m² à Paris est de 4 à 8 mois selon l'ampleur des travaux. Phase technique (électricité, plomberie, maçonnerie) : 6 à 10 semaines. Phase revêtements (parquet, carrelage) : 4 à 6 semaines. Phase finitions (peinture, menuiserie, cuisine, SDB) : 6 à 10 semaines. La coordination entre corps de métier et les contraintes de copropriété (bennes, accès chantier) allongent souvent les délais de 2 à 4 semaines.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il un architecte pour rénover un appartement de 200m² à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Un architecte n'est pas obligatoire en dessous de 150m² de surface de plancher créée. Pour un appartement de 200m² en rénovation sans extension, un artisan général ou un maitre d'oeuvre peut coordonner les travaux. Cependant, si l'appartement est dans un immeuble classé ou dans un secteur sauvegardé (Marais, Ile Saint-Louis), certaines modifications (devantures, balcons, façades) peuvent nécessiter un dossier architecte. Pour les projets de prestige, l'architecte d'intérieur apporte une vraie valeur ajoutée sur les sujets de conception et de coordination.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment phacer les travaux d'un appartement de 200m² à Paris pour minimiser les perturbations ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La règle d'or est de toujours commencer par les travaux les plus invasifs (démolition, électricité, plomberie, maçonnerie) avant d'entamer les finitions. Pour 200m², on privilégie un phasage par zone : traiter d'abord les pièces de service (cuisine, SDB, WC), puis les pièces de vie (salon, chambres). Cela permet de rendre habitables certaines parties de l'appartement plus tôt et d'éviter d'avoir tout en chantier simultanément. Un planning Gantt partagé avec tous les corps de métier est indispensable.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Rénovation Appartement 200m² Paris : planning & prix artisan 2025",
  description: "Comment planifier et budgéter la rénovation d'un grand appartement de 200m² à Paris ? Planning, corps de métier, budget au m², phasage des travaux. Guide complet artisan 2025.",
  keywords: [
    "rénovation appartement 200m2 paris",
    "rénovation grand appartement paris",
    "budget rénovation 200m paris",
    "artisan rénovation paris",
    "planning travaux appartement paris",
    "prix rénovation au m2 paris",
  ],
}

export default function ArticleRenovationAppartement200m2Paris() {
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
            Grand appartement
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénover un Grand Appartement de 200m² à Paris : guide complet 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            La rénovation d&apos;un appartement de 200m² à Paris est un projet ambitieux qui demande une organisation rigoureuse : coordination des corps de métier, planning serré, budget maîtrisé. Ce guide vous explique comment planifier les travaux, quels professionnels mobiliser, et quels budgets prévoir poste par poste.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-[#1C1C1C] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { val: '1 000 €/m²', label: 'Rénovation légère (rafraîchissement)' },
              { val: '2 000 €/m²', label: 'Rénovation complète tous corps état' },
              { val: '4 000 €/m²', label: 'Rénovation haut de gamme prestige' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-xl sm:text-2xl font-semibold text-[#D4AF37] mb-1">{s.val}</div>
                <div className="text-gray-500 text-[10px] uppercase tracking-wider font-light">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1 — Planification */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Planification des travaux : par où commencer ?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
            La rénovation d&apos;un appartement de 200m² à Paris nécessite une préparation méticuleuse avant le premier coup de marteau. Plusieurs étapes administratives et techniques précèdent le chantier proprement dit.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Pour un appartement haussmannien en copropriété — la situation la plus fréquente à Paris pour cette surface — l&apos;accord du syndic est nécessaire pour tous les travaux affectant les parties communes ou les gros-oeuvres. La demande doit être soumise en assemblée générale, ce qui peut représenter un délai de 3 à 6 mois supplémentaires si l&apos;AG n&apos;est pas programmée prochainement.
          </p>
          <div className="space-y-4">
            {[
              {
                enjeu: "Etape 1 — Diagnostic et état des lieux (J-90 à J-60)",
                detail: "Avant tout chiffrage, faites réaliser un diagnostic complet : état du tableau électrique, nature des réseaux d'eau (plomb, cuivre, PER), présence d'amiante (obligatoire avant travaux dans les logements construits avant 1997), état des planchers et plafonds. Ce diagnostic peut révéler des travaux obligatoires (mise aux normes électriques, désamiantage) qui augmenteront le budget de 5 à 20 %.",
              },
              {
                enjeu: "Etape 2 — Demande d'autorisation de travaux (J-90 à J-30)",
                detail: "Pour 200m², les travaux structurels (ouverture de mur porteur, modification de la façade) nécessitent une déclaration préalable de travaux ou un permis de construire selon l'ampleur. En secteur protégé (Marais, île Saint-Louis, Montmartre), l'avis de l'Architecte des Bâtiments de France est requis. La copropriété doit valider les travaux impactant les parties communes. Prévoyez 2 à 4 mois pour ces démarches.",
              },
              {
                enjeu: "Etape 3 — Sélection des artisans et devis (J-60 à J-15)",
                detail: "Pour un projet de 200m², vous aurez besoin a minima de : un électricien, un plombier, un maçon/plaquiste, un carreleur, un peintre, un menuisier, un parqueteur, un cuisiniste. Demandez 3 devis par corps de métier et vérifiez leurs assurances (RC décennale). Un maitre d'oeuvre ou un artisan général coordinateur peut gérer l'ensemble et simplifier votre suivi au quotidien.",
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

      {/* Section 2 — Corps de métier */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Les corps de métier pour 200m² et leur rôle
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Voici les différents professionnels intervenant sur un chantier de 200m² à Paris, avec leur périmètre et le budget à prévoir pour cette surface.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: "Electricien",
                cout: "15 000 – 35 000 €",
                detail: "Dépose du tableau existant, mise aux normes NF C 15-100, tirage de nouveaux câbles, pose des prises/interrupteurs, éclairage. Pour 200m², une rénovation électrique complète représente 15 à 35 k€ selon le nombre de pièces et le niveau d'équipement (domotique, volets électriques, prises USB).",
              },
              {
                titre: "Plombier / Sanitaire",
                cout: "12 000 – 28 000 €",
                detail: "Remplacement des colonnes d'alimentation et d'évacuation, pose des équipements sanitaires dans 2 à 4 SDB et WC, raccordement cuisine. Dans les appartements anciens avec colonnes en plomb, le remplacement des colonnes représente à lui seul 5 000 à 10 000 €.",
              },
              {
                titre: "Maçon / Plaquiste",
                cout: "10 000 – 25 000 €",
                detail: "Démolition de cloisons, création de nouvelles cloisons en Placo BA13, doublage des murs extérieurs pour isolation thermique et phonique, traitement des plafonds (boisseaux, rebouchage). Pour 200m², le gros-oeuvre représente souvent le 2e ou 3e poste en budget.",
              },
              {
                titre: "Carreleur",
                cout: "8 000 – 20 000 €",
                detail: "Pose du carrelage dans les salles de bain, WC, cuisine et éventuellement hall d'entrée. Pour 200m², la surface carrelée représente généralement 60 à 100 m². Prix moyen posé : 80 à 150 €/m². Les SDB avec douche italienne demandent une attention particulière à l'étanchéité.",
              },
              {
                titre: "Parqueteur",
                cout: "12 000 – 30 000 €",
                detail: "Dépose du sol existant, ragréage, pose d'un nouveau parquet (massif, contrecollé ou stratifié) dans les pièces de vie. Pour 200m², la surface à parqueter est de 120 à 160 m². Prix posé : 60 à 150 €/m² selon le type de parquet. Renovation du parquet existant (ponçage, vitrification) : 25 à 45 €/m².",
              },
              {
                titre: "Peintre",
                cout: "8 000 – 18 000 €",
                detail: "Préparation des murs (rebouchage, enduit, ponçage), application de 2 couches de peinture dans toutes les pièces. Pour 200m², la surface peinte (murs + plafonds) dépasse souvent 700 m². Prix moyen : 12 à 25 €/m². Les moulures et boiseries sont en supplément (enduit + peinture de qualité).",
              },
              {
                titre: "Menuisier",
                cout: "5 000 – 20 000 €",
                detail: "Remplacement ou rénovation des portes intérieures, fenêtres (double vitrage), placards sur-mesure. Pour un appartement haussmannien, la conservation et la rénovation des menuiseries d'origine (portes à double vantaux, boiseries) est préférable au remplacement. Restauration menuiserie : 200 à 600 €/porte selon l'état.",
              },
              {
                titre: "Cuisiniste / Artisan cuisine",
                cout: "10 000 – 50 000 €",
                detail: "Conception et pose de la cuisine. Budget très variable selon le niveau de gamme choisi (IKEA, marque française, sur-mesure). Ne pas oublier les postes connexes : électricité cuisine (circuits dédiés), plomberie, carrelage crédence et électroménager.",
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

      {/* Section 3 — Phasage des travaux */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Phasage recommandé pour 200m² à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;ordre des interventions est critique pour un chantier de cette envergure. Un mauvais séquençage peut forcer à reprendre des travaux déjà réalisés et générer des surcoûts importants.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: "Phase 1 — Démolition et gros-oeuvre (semaines 1-4)",
                prix: "Durée : 3-5 semaines",
                detail: "Dépose des revêtements existants (carrelage, parquet, papier peint), démolition des cloisons à abattre, création des ouvertures (fenêtres, portes). Si mur porteur : pose d'un IPN avec étaiement. Désamiantage si nécessaire. Cette phase génère beaucoup de déchets : prévoir les autorisations de benne dans la rue (copropriété + mairie).",
              },
              {
                type: "Phase 2 — Travaux techniques (semaines 4-10)",
                prix: "Durée : 5-8 semaines",
                detail: "Electricité complète (câblage, tableau), plomberie (colonnes, alimentations, évacuations), VMC si renovation de la ventilation, doublage thermique et phonique des murs. C'est la phase la plus critique : toute modification ultérieure des réseaux est très coûteuse. Bien valider les plans avant démarrage.",
              },
              {
                type: "Phase 3 — Revêtements lourds (semaines 10-15)",
                prix: "Durée : 4-6 semaines",
                detail: "Ragréage des sols, pose du carrelage dans les SDB et cuisine, chape pour la douche italienne. Simultanément : pose du parquet massif ou contrecollé dans les pièces de vie, ponçage et vitrification. Ces travaux demandent des temps de séchage incompressibles (chape : 3 à 4 semaines de séchage avant carrelage).",
              },
              {
                type: "Phase 4 — Finitions (semaines 14-20)",
                prix: "Durée : 5-8 semaines",
                detail: "Pose des équipements sanitaires (vasques, douches, baignoires, WC), cuisine, menuiseries intérieures (portes, placards). Peinture de toutes les pièces. Eclairage et appareillage électrique. Nettoyage de fin de chantier. Cette phase est souvent celle où les délais glissent : anticiper les livraisons de matériaux 4 à 6 semaines à l'avance.",
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

      {/* Section 4 — Budget estimatif */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Budget estimatif pour 200m² à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Estimation tous corps de métier pour un appartement haussmannien de 200m² à Paris, en rénovation complète.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Corps de métier</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Milieu de gamme</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Haut de gamme</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { traitement: "Démolition / gros-oeuvre", mid: "8 000 – 15 000 €", haut: "15 000 – 30 000 €" },
                  { traitement: "Electricité complète", mid: "15 000 – 22 000 €", haut: "22 000 – 40 000 €" },
                  { traitement: "Plomberie / sanitaires", mid: "12 000 – 20 000 €", haut: "20 000 – 35 000 €" },
                  { traitement: "Cloisons / doublage", mid: "8 000 – 15 000 €", haut: "14 000 – 25 000 €" },
                  { traitement: "Parquet (150 m²)", mid: "12 000 – 20 000 €", haut: "20 000 – 45 000 €" },
                  { traitement: "Carrelage SDB + cuisine", mid: "8 000 – 14 000 €", haut: "14 000 – 30 000 €" },
                  { traitement: "Peinture complète", mid: "8 000 – 14 000 €", haut: "14 000 – 25 000 €" },
                  { traitement: "Cuisine", mid: "10 000 – 20 000 €", haut: "25 000 – 60 000 €" },
                  { traitement: "Menuiseries intérieures", mid: "5 000 – 12 000 €", haut: "12 000 – 30 000 €" },
                  { traitement: "TOTAL ESTIMATIF", mid: "86 000 – 152 000 €", haut: "156 000 – 320 000 €" },
                ].map((row, i) => (
                  <tr key={row.traitement} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className={`px-4 py-3 text-sm ${row.traitement === "TOTAL ESTIMATIF" ? 'text-[#1C1C1C] font-bold' : 'text-[#1C1C1C] font-medium'}`}>{row.traitement}</td>
                    <td className={`px-4 py-3 text-center text-sm ${row.traitement === "TOTAL ESTIMATIF" ? 'text-[#B8960C] font-bold' : 'text-[#B8960C] font-medium'}`}>{row.mid}</td>
                    <td className={`px-4 py-3 text-center text-sm ${row.traitement === "TOTAL ESTIMATIF" ? 'text-gray-800 font-bold' : 'text-gray-600 font-light'}`}>{row.haut}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils pour bien piloter un chantier de 200m² à Paris
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Prévoir une réserve budgétaire de 10 à 15 % pour les imprévus de chantier (très fréquents dans les appartements anciens)",
                "Nommer un interlocuteur unique (maitre d'oeuvre ou artisan coordinateur) pour éviter les conflits entre corps de métier",
                "Réaliser un planning Gantt partagé avec toutes les entreprises avant le démarrage du chantier",
                "Photographier chaque étape des travaux : les réseaux encastrés (électricité, plomberie) avant fermeture des cloisons",
                "Vérifier les assurances de chaque intervenant (RC pro + décennale) avant signature du devis",
                "Anticiper les livraisons de matériaux lourds (parquet, carrelage, sanitaires) 4 à 6 semaines avant la phase de pose",
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
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénovation appartement haussmannien Paris' },
              { href: '/blog/budget-renovation-appartement-paris', title: 'Budget rénovation appartement Paris' },
              { href: '/blog/renovation-appartement-ancien-paris', title: 'Rénovation appartement ancien Paris' },
              { href: '/blog/mur-porteur-paris', title: 'Ouverture mur porteur Paris' },
              { href: '/blog/parquet-massif-paris', title: 'Parquet massif Paris' },
              { href: '/blog/devis-renovation-paris', title: 'Devis rénovation Paris' },
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
          Confiez la coordination de vos travaux à Espace Design
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Artisan coordinateur tous corps de métier à Paris. Devis complet sous 48h, suivi de chantier quotidien.
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
