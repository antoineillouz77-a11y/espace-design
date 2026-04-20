import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Isolation Thermique Paris', item: 'https://espacedesignparis.fr/blog/isolation-thermique-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Isolation Thermique Paris : combles, murs & prix artisan 2025 | Espace Design',
  description: "Améliorer l'isolation thermique d'un appartement parisien : combles, murs, fenêtres, DPE, MaPrimeRénov', prix 2025.",
  datePublished: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/isolation-thermique-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix d'une isolation thermique à Paris en 2025 ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix d'une isolation thermique à Paris varie selon le poste traité. L'isolation des combles perdus coûte entre 20 et 50 €/m², celle des murs par l'intérieur (ITI) entre 40 et 100 €/m², et par l'extérieur (ITE) entre 100 et 200 €/m². Le remplacement des fenêtres double vitrage revient à 600–1 500 € par fenêtre. Pour un appartement parisien de 60 m², comptez entre 3 000 et 15 000 € selon l'ampleur des travaux. MaPrimeRénov' peut couvrir 25 à 70 % du montant selon les revenus.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment améliorer son DPE à Paris sans gros travaux ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Plusieurs actions permettent d'améliorer son DPE rapidement : calfeutrer les fenêtres et portes (joints, boudins), installer des rideaux thermiques épais, poser des films isolants sur les vitres, traiter les ponts thermiques visibles (angle des murs, tableaux de fenêtres) avec un enduit isolant. Ces actions coûtent entre 200 et 2 000 € et peuvent faire gagner une demi-lettre DPE. Pour passer de F/G à D/E, des travaux plus importants (isolation murs, remplacement VMC) sont nécessaires.",
      },
    },
    {
      '@type': 'Question',
      name: "Puis-je bénéficier de MaPrimeRénov' pour isoler mon appartement parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, MaPrimeRénov' finance l'isolation thermique des appartements parisiens sous conditions. Le logement doit avoir plus de 15 ans, être votre résidence principale, et les travaux doivent être réalisés par un artisan RGE (Reconnu Garant de l'Environnement). Le montant de l'aide varie de 25 à 75 % du coût des travaux selon les revenus du foyer. L'éco-PTZ (prêt à taux zéro) peut compléter l'aide jusqu'à 50 000 €. Un accompagnateur Mon Projet Rénov' est obligatoire pour les projets dépassant 5 000 € d'aides.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelle isolation choisir pour un appartement haussmannien à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dans un appartement haussmannien, l'isolation par l'intérieur (ITI) est généralement la seule option autorisée (façades classées ou protégées). On privilégie des matériaux minces mais performants : panneau de laine de roche (R = 2,5 à 3,5), doublage en plaque de plâtre avec lame d'air, ou enduit isolant à la chaux pour les murs en pierre (respirant, compatible avec le bâti ancien). Il faut éviter les isolants synthétiques étanches (polystyrène) sur les murs en pierre : ils créent des pathologies d'humidité en bloquant la vapeur d'eau.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Isolation Thermique Paris : combles, murs & prix artisan 2025 | Espace Design",
  description: "Améliorer l'isolation thermique d'un appartement parisien : combles, murs, fenêtres, DPE, MaPrimeRénov', prix 2025.",
  keywords: "isolation thermique Paris, isolation appartement Paris, DPE Paris",
}

export default function ArticleIsolationThermique() {
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
            Isolation
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Isolation Thermique Paris : combles, murs et prix artisan 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Un appartement parisien mal isolé peut perdre jusqu&apos;à 30 % de sa chaleur par les murs et 25 % par les combles. Améliorer son isolation thermique, c&apos;est réduire ses factures, gagner en confort et valoriser son bien — tout en bénéficiant d&apos;aides comme MaPrimeRénov&apos;. Guide complet 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Enjeux isolation */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Pourquoi isoler son appartement parisien en 2025
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Paris concentre un parc immobilier ancien parmi les plus importants d&apos;Europe. Plus de 60 % des logements parisiens ont été construits avant 1970, sans isolation thermique normalisée. Résultat : des DPE souvent classés E, F ou G, des charges de chauffage élevées et un inconfort thermique en hiver comme en été.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Depuis la loi Climat et Résilience, les logements classés G sont progressivement interdits à la location (dès 2025), suivis des F (2028) et des E (2034). Pour les propriétaires bailleurs, l&apos;isolation thermique n&apos;est plus une option — c&apos;est une obligation qui protège aussi la valeur du patrimoine.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Économies sur les factures de chauffage',
                  detail: "Une isolation complète (murs + combles + fenêtres) peut réduire les factures de chauffage de 30 à 60 % selon l'état de départ. Pour un appartement de 60 m² à Paris chauffé au gaz, l'économie annuelle peut atteindre 800 à 1 500 €.",
                },
                {
                  enjeu: 'Amélioration du DPE et valeur verte',
                  detail: "Gagner deux lettres de DPE (ex: F → D) augmente la valeur d'un bien parisien de 5 à 15 % selon les études notariales. Un logement classé D se loue plus facilement et plus cher qu'un logement classé E ou F.",
                },
                {
                  enjeu: 'Confort thermique et acoustique',
                  detail: "Un appartement bien isolé thermiquement est aussi mieux isolé phoniquement. Les laines minérales (roche, verre) utilisées en isolation thermique absorbent également les bruits aériens. Double bénéfice fréquent dans les immeubles parisiens à planchers bois.",
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

      {/* Section 2 — Diagnostic DPE */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Audit énergétique et DPE : par où commencer
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Avant tout travaux d&apos;isolation, un diagnostic précis permet d&apos;identifier les postes les plus énergivores et de prioriser les interventions. C&apos;est aussi la condition pour accéder aux aides publiques.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'DPE (Diagnostic de Performance Énergétique)',
                detail: "Obligatoire depuis 2021 pour toute vente ou location. Évalue la consommation d'énergie (kWh/m²/an) et les émissions de CO2. Coût : 100 à 250 € chez un diagnostiqueur certifié. Valable 10 ans.",
                cout: '100 – 250 €',
              },
              {
                titre: "Audit énergétique réglementaire",
                detail: "Obligatoire depuis 2023 pour la vente de maisons classées F ou G. Non obligatoire pour les appartements mais fortement recommandé. Plus complet que le DPE : propose un parcours de rénovation chiffré. Coût : 500 à 1 500 €.",
                cout: '500 – 1 500 €',
              },
              {
                titre: 'Thermographie infrarouge',
                detail: "Une caméra thermique révèle les ponts thermiques, les zones mal isolées et les déperditions invisibles à l'oeil nu. Réalisée par l'artisan lors du diagnostic. Particulièrement utile dans les combles et sur les murs anciens.",
                cout: 'Gratuit sur devis',
              },
              {
                titre: 'Test de perméabilité à l\'air (blower door)',
                detail: "Mesure les infiltrations d'air parasites dans le logement. Pertinent pour les rénovations ambitieuses BBC ou passives. Met en évidence les joints défaillants, les traversées non calfeutrées, les defauts d'étanchéité.",
                cout: '300 – 500 €',
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

      {/* Section 3 — Types isolation */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Isolation des combles, murs et fenêtres : solutions et prix
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Chaque poste de déperdition thermique a sa solution. Voici les interventions les plus efficaces dans un appartement parisien, par ordre de rentabilité.
          </p>
          <div className="space-y-4 mb-8">
            {[
              {
                type: "Isolation des combles (perdus ou aménagés)",
                prix: "20 – 60 €/m²",
                detail: "Les combles représentent jusqu'à 30 % des déperditions. En combles perdus, le soufflage de ouate de cellulose ou de laine minérale est la solution la plus rapide et la moins coûteuse. En combles aménagés, on pose des rouleaux entre les chevrons. L'objectif est d'atteindre une résistance thermique R ≥ 7 m².K/W, ce qui correspond à 30 cm de laine de verre.",
              },
              {
                type: "Isolation des murs par l'intérieur (ITI)",
                prix: "40 – 100 €/m²",
                detail: "Solution adaptée aux appartements en copropriété (pas de modification façade). On colle ou visse un doublage isolant (laine de roche + plaque de plâtre) contre les murs extérieurs. Perte de surface habitable de 8 à 12 cm par mur traité. Obligatoire de traiter les ponts thermiques aux angles pour éviter la condensation.",
              },
              {
                type: "Isolation des murs par l'extérieur (ITE)",
                prix: "100 – 200 €/m²",
                detail: "Plus performante que l'ITI (pas de pont thermique, surface habitable préservée), mais nécessite l'accord de la copropriété et parfois de l'ABF (Architecte des Bâtiments de France) pour les façades sur rue. Réservée aux immeubles dont la façade n'est pas protégée.",
              },
              {
                type: "Remplacement des fenêtres (double ou triple vitrage)",
                prix: "600 – 1 500 €/unité",
                detail: "Les fenêtres simple vitrage d'un appartement haussmannien représentent 10 à 15 % des déperditions. Le double vitrage 4/16/4 (argon) divise par 2 à 3 les pertes de chaleur par rapport au simple vitrage. Le triple vitrage est réservé aux rénovations très ambitieuses (surcoût de 30 % pour un gain marginal à Paris).",
              },
              {
                type: "Isolation du plancher bas (sur cave ou vide sanitaire)",
                prix: "20 – 50 €/m²",
                detail: "Souvent négligée, l'isolation du plancher bas représente 7 à 10 % des déperditions. On projette de la mousse polyuréthane ou pose des panneaux rigides (PIR) sous le plancher depuis la cave. Travaux rapides et peu coûteux, très efficaces en termes de confort au sol.",
              },
              {
                type: "Traitement des ponts thermiques",
                prix: "50 – 150 €/ml",
                detail: "Les ponts thermiques (angles de murs, tableaux de fenêtres, rupteurs de balcon) peuvent représenter 5 à 20 % des déperditions selon la configuration. On les traite par des enduits isolants spécifiques ou des rupteurs de ponts thermiques intégrés lors de la rénovation. Indispensable pour atteindre un bon niveau de performance.",
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
            Budget isolation thermique Paris 2025 : tableau des prix
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Prix indicatifs pour un appartement parisien, main d&apos;oeuvre et matériaux inclus. Les aides (MaPrimeRénov&apos;, CEE) peuvent réduire significativement le reste à charge.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Poste</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix unitaire</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget 60 m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Gain DPE</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    poste: 'Combles perdus (soufflage)',
                    unite: '20 – 35 €/m²',
                    budget: '1 200 – 2 100 €',
                    gain: '0,5 – 1 lettre',
                  },
                  {
                    poste: 'Combles aménagés',
                    unite: '40 – 60 €/m²',
                    budget: '2 400 – 3 600 €',
                    gain: '0,5 – 1 lettre',
                  },
                  {
                    poste: 'Murs ITI (doublage intérieur)',
                    unite: '40 – 100 €/m²',
                    budget: '4 000 – 10 000 €',
                    gain: '1 – 2 lettres',
                  },
                  {
                    poste: 'Murs ITE (isolation extérieure)',
                    unite: '100 – 200 €/m²',
                    budget: '10 000 – 20 000 €',
                    gain: '2 – 3 lettres',
                  },
                  {
                    poste: 'Fenêtres double vitrage',
                    unite: '600 – 1 500 €/u',
                    budget: '3 000 – 7 500 €',
                    gain: '0,5 lettre',
                  },
                  {
                    poste: 'Plancher bas',
                    unite: '20 – 50 €/m²',
                    budget: '1 200 – 3 000 €',
                    gain: '0,3 lettre',
                  },
                ].map((row, i) => (
                  <tr key={row.poste} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.poste}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.unite}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.budget}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.gain}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              MaPrimeRénov&apos; et aides à l&apos;isolation en 2025
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "MaPrimeRénov' : 25 à 70 % du montant des travaux selon les revenus du foyer",
                "Certificats d'Économies d'Énergie (CEE) : cumulables avec MaPrimeRénov'",
                "Éco-PTZ : prêt à taux zéro jusqu'à 50 000 € sur 20 ans",
                "TVA à 5,5 % sur les travaux d'isolation (au lieu de 10 %)",
                "Aide Paris Rénov' : complément possible pour les Parisiens éligibles",
                "Artisan RGE obligatoire pour déclencher les aides MaPrimeRénov'",
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

      {/* Section 5 — Matériaux */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Choisir son isolant : laine minérale, ouate ou enduit isolant
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le choix de l&apos;isolant dépend du poste traité, de la configuration du logement et des contraintes (épaisseur disponible, perméabilité à la vapeur, allergies). Dans le bâti parisien ancien, la compatibilité avec les matériaux existants (pierre, plâtre) est primordiale.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                mat: 'Laine de verre',
                usage: 'Combles, doublage murs',
                lambda: '0,030 – 0,040 W/m.K',
                note: "Économique, léger, bonne tenue au feu. Sensible à l'humidité.",
              },
              {
                mat: 'Laine de roche',
                usage: 'Murs, plancher, plafond',
                lambda: '0,033 – 0,045 W/m.K',
                note: "Excellente résistance au feu (incombustible), bonnes performances acoustiques. Plus lourd que la laine de verre.",
              },
              {
                mat: 'Ouate de cellulose',
                usage: 'Combles perdus (soufflage)',
                lambda: '0,038 – 0,042 W/m.K',
                note: "Matériau recyclé (papier journal), très bon déphasage thermique (confort été), respirant. Idéal en combles perdus.",
              },
              {
                mat: 'Enduit isolant à la chaux',
                usage: 'Murs en pierre anciens',
                lambda: '0,06 – 0,12 W/m.K',
                note: "Moins performant mais compatible avec les murs anciens (respirant). Évite les pathologies liées aux condensations internes.",
              },
              {
                mat: 'Panneaux PIR (polyisocyanurate)',
                usage: 'Plancher, sous toiture',
                lambda: '0,022 – 0,026 W/m.K',
                note: "Très performant pour des épaisseurs réduites. Rigide, facile à poser en sous-face de plancher ou sous toiture.",
              },
              {
                mat: 'Laine de mouton / chanvre',
                usage: 'Isolation écologique',
                lambda: '0,035 – 0,045 W/m.K',
                note: "Matériaux biosourcés, bon déphasage, respirants. Coût plus élevé que les laines minérales mais durabilité supérieure.",
              },
            ].map((el) => (
              <div key={el.mat} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.mat}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.usage}</div>
                </div>
                <div className="text-xs text-gray-500 font-light mb-2">Lambda : {el.lambda}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Cas Paris */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Spécificités de l&apos;isolation dans le bâti parisien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;isolation thermique à Paris présente des contraintes spécifiques liées au bâti ancien, aux règles de copropriété et aux protections patrimoniales. Ce sont des paramètres à anticiper dès la conception du projet.
          </p>
          <div className="space-y-4">
            {[
              {
                titre: 'Immeubles haussmanniens (1850–1914)',
                contenu: "Façades sur rue protégées par l'ABF dans de nombreux arrondissements : l'ITE est interdite. Seule l'ITI est possible. Les murs en pierre de taille (35 à 60 cm) offrent une inertie thermique notable mais une résistance thermique faible (R ≈ 0,3 m².K/W). Eviter le polystyrène contre la pierre — préférer la laine de roche ou les enduits à la chaux (respirants).",
              },
              {
                titre: 'Immeubles des années 1960–1980 (béton)',
                contenu: "Ponts thermiques nombreux aux dalles et refends. Isolation prioritaire des murs pignons exposés (nord, est). Les doublages intérieurs en laine de roche ou PIR sont efficaces et rapides. Attention à l'étanchéité à l'air pour éviter les condensations internes dans les parois.",
              },
              {
                titre: 'Copropriété : autorisations nécessaires',
                contenu: "Tout travaux affectant les parties communes (toiture, façade, plancher) nécessite un vote en AG. L'isolation des combles collectifs requiert l'accord de la copropriété. L'isolation des murs extérieurs par l'intérieur (surfaces privatives) peut être faite sans autorisation. Vérifier le règlement de copropriété avant tout projet.",
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.titre}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.contenu}</div>
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
              { href: '/blog/humidite-appartement-paris', title: "Humidité appartement Paris" },
              { href: '/blog/isolation-phonique-paris', title: 'Isolation phonique Paris' },
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénovation appartement haussmannien Paris' },
              { href: '/blog/renovation-appartement-ancien-paris', title: 'Rénovation appartement ancien Paris' },
              { href: '/blog/renovation-studio-paris', title: 'Rénovation studio Paris' },
              { href: '/blog/renovation-loft-paris', title: 'Rénovation loft Paris' },
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
          Améliorez l&apos;isolation thermique de votre appartement parisien
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Artisan RGE. Aide au montage des dossiers MaPrimeRénov&apos;. Devis sous 48h.
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
