import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Haussmannien Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-haussmannien-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation Appartement Haussmannien Paris : parquet, moulures & prix 2025 | Espace Design",
  description: "Rénover un appartement haussmannien à Paris : restaurer les parquets, moulures, cheminées. Contraintes patrimoniales, prix 2025.",
  datePublished: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-haussmannien-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix de rénovation d'un appartement haussmannien à Paris en 2025 ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La rénovation d'un appartement haussmannien à Paris coûte en moyenne entre 600 et 1 800 €/m² selon l'ampleur des travaux et le niveau de restauration des éléments d'époque. Une rénovation légère (peinture, parquet rénové, mise aux normes électrique partielle) revient à 400 à 600 €/m². Une rénovation complète avec restauration des moulures, parquet point de Hongrie rénové, cheminée restaurée et salle de bain contemporaine coûte 800 à 1 500 €/m². Pour un 3 pièces de 80 m², comptez entre 48 000 et 120 000 € selon le niveau de prestations.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment restaurer les moulures d'un appartement haussmannien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La restauration des moulures en plâtre d'un appartement haussmannien passe par plusieurs étapes : nettoyage et dégraissage des moulures existantes, rebouchage des fissures et lacunes avec un enduit de plâtre à la chaux, reconstitution des éléments manquants (moulures préfabriquées en plâtre ou polyuréthane pour les profils courants, plâtre coulé pour les éléments complexes), ponçage et finition à la peinture mat. Les moulures en très mauvais état peuvent être remplacées par des reproductions fidèles en polyuréthane expansé (moins coûteux, imputrescibles). Coût : 30 à 80 €/ml selon le profil.",
      },
    },
    {
      '@type': 'Question',
      name: "Peut-on ouvrir la cuisine sur le salon dans un appartement haussmannien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, à condition que la cloison n'est pas porteuse. Dans un appartement haussmannien typique, les cloisons entre cuisine et salon sont souvent des cloisons de distribution légères (carreaux de plâtre, briques plâtrières) non porteuses, que l'on peut abattre sans étude de structure. En revanche, les murs en pierre de taille ou les refends en brique sont porteurs : leur ouverture nécessite une étude de structure et la pose d'un linteau ou d'un IPN. Un bureau d'études ou un architecte peut valider la faisabilité avant travaux.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment rénover le parquet point de Hongrie d'un appartement haussmannien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le parquet point de Hongrie (ou à bâtons rompus) est l'emblème de l'appartement haussmannien. Sa rénovation comprend : ponçage à la ponceuse à bandes (3 passages : gros grain, moyen, fin), rebouchage des fentes avec du parquet souple ou de la cire à bois teintée, vitrification à l'huile dure ou au vernis mat (plus résistant), et finition à la cire pour un rendu plus authentique. Coût : 20 à 50 €/m² selon l'état de départ. Un parquet très abîmé peut nécessiter un remplacement partiel des lames (parquet chêne massif à denicher chez les spécialistes).",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Rénovation Appartement Haussmannien Paris : parquet, moulures & prix 2025 | Espace Design",
  description: "Rénover un appartement haussmannien à Paris : restaurer les parquets, moulures, cheminées. Contraintes patrimoniales, prix 2025.",
  keywords: "rénovation appartement haussmannien Paris, restauration moulures Paris, parquet haussmannien Paris",
}

export default function ArticleRenovationHaussmannien() {
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
            Guides
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Appartement Haussmannien Paris : parquet, moulures et prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            L&apos;appartement haussmannien concentre ce que Paris a de plus beau : parquets point de Hongrie, moulures au plafond, cheminées en marbre, hauts plafonds, doubles portes. Le rénover, c&apos;est concilier la restauration du patrimoine et les exigences du confort contemporain. Guide complet 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Caractéristiques */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les caractéristiques de l&apos;appartement haussmannien : ce qu&apos;il faut préserver
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Construit entre 1850 et 1914 sous la direction du baron Haussmann, l&apos;immeuble haussmannien se reconnaît à sa façade en pierre de taille, ses balcons filants, ses bow-windows, ses étages identiques et ses toits en zinc à 45°. À l&apos;intérieur, il offre des caractéristiques architecturales précieuses que la rénovation doit mettre en valeur plutôt qu&apos;effacer.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              La valeur d&apos;un appartement haussmannien bien rénové est intimement liée à la qualité de la restauration de ses éléments d&apos;époque. Un appartement haussmannien dont on a supprimé les moulures, bouché les cheminées et recouvert le parquet de carrelage perd 15 à 30 % de sa valeur marchande par rapport à un appartement identique avec éléments préservés.
            </p>
            <div className="space-y-4">
              {[
                {
                  elem: "Parquet point de Hongrie ou à bâtons rompus",
                  detail: "Le parquet en chêne massif, posé en point de Hongrie ou en bâtons rompus (chevrons), est le sol emblématique de l'appartement haussmannien. Souvent recouvert de moquette ou de carrelage lors de rénovations des années 1970-1990, il peut généralement être retrouvé sous ces revêtements et restauré. Vérifier son état (lames saines, humidité, parasites) avant de lancer une rénovation.",
                },
                {
                  elem: "Moulures, corniches et rosaces au plafond",
                  detail: "Les moulures en plâtre (corniches, frises, médaillons, rosaces de lustre) sont réalisées artisanalement. Elles se fissurent et s'effritent avec le temps. Leur restauration est un travail de spécialiste : rebouchage, reconstitution des éléments manquants, finition. Ne jamais les recouvrir de polystyrène ou de faux plafond — elles sont l'âme de la pièce.",
                },
                {
                  elem: "Cheminées en marbre ou en pierre",
                  detail: "Les cheminées haussmanniennes (manteau en marbre ou en pierre moulurée, âtre en briques) ne fonctionnent plus dans la plupart des appartements (conduits murés ou bouchés). Elles constituent néanmoins un élément décoratif et patrimonial majeur à préserver. Leur restauration (nettoyage du marbre, rejointoiement, éventuelle réfection de l'âtre) coûte 500 à 3 000 € selon l'état.",
                },
                {
                  elem: "Doubles portes et boiseries",
                  detail: "Les doubles portes intérieures (salon/salle à manger) avec imposte vitrée, les portes-fenêtres, les moulures de portes, les parcloses et les lambris sont des éléments de menuiserie précieux. Ils peuvent être décapés, rebouchés et repeinéts à l'identique ou peints dans une teinte contemporaine (gris anthracite, vert foncé) pour un rendu modernisé respectueux.",
                },
              ].map((el) => (
                <div key={el.elem} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.elem}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Contraintes */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Contraintes patrimoniales et réglementaires à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La rénovation d&apos;un appartement haussmannien à Paris est encadrée par des règles patrimoniales et de copropriété qu&apos;il est indispensable de connaître avant de commencer les travaux.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                titre: "Façades protégées (ABF)",
                detail: "À Paris, de nombreux immeubles haussmanniens sont classés ou situés dans des secteurs sauvegardés. Toute modification de la façade (nouvelles fenêtres, changement de couleur des volets, isolation extérieure) nécessite l'accord de l'Architecte des Bâtiments de France. Délai d'instruction : 2 à 4 mois.",
              },
              {
                titre: "Règlement de copropriété",
                detail: "Le règlement de copropriété peut interdire certaines modifications : changement du type de fenêtres (double vitrage vs simple vitrage d'époque), modification des volets, travaux en façade. Toujours consulter le règlement avant tout projet touchant aux parties communes ou à l'aspect extérieur.",
              },
              {
                titre: "Murs porteurs en pierre",
                detail: "Les murs en pierre de taille des immeubles haussmanniens sont tous porteurs. Toute ouverture (création d'une porte, agrandissement d'une fenêtre, percement) nécessite une étude de structure par un bureau d'études agréé et la pose d'un linteau ou d'un IPN. Ne jamais percer sans étude préalable.",
              },
              {
                titre: "Amiante (avant 1997)",
                detail: "Les appartements haussmanniens rénovés entre les années 1950 et 1997 peuvent contenir de l'amiante dans les colles de carrelage, les enduits, les faux plafonds ou les isolants. Un diagnostic amiante est obligatoire avant tout chantier de démolition ou de rénovation lourde.",
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.titre}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Restauration parquet */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Restauration du parquet haussmannien : ponçage, vitrification et remplacement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le parquet en chêne massif d&apos;un appartement haussmannien peut traverser plusieurs siècles s&apos;il est correctement entretenu. La rénovation d&apos;un parquet ancien est presque toujours préférable au remplacement, tant sur le plan économique que patrimonial.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                etape: "Diagnostic et préparation",
                prix: "Gratuit sur devis",
                detail: "Avant de poncer, évaluer l'état du parquet : planéité (creux, bosses), humidité (gonflement, noircissement), parasites (vrillettes, termites), épaisseur résiduelle (minimum 3 mm au-dessus des rainures pour supporter un ponçage). Un parquet très fin ou très abîmé peut nécessiter un remplacement partiel ou total.",
              },
              {
                etape: "Ponçage à la bande (3 passages)",
                prix: "8 – 20 €/m²",
                detail: "Le ponçage à la ponceuse à bandes enlève les anciennes couches de vitrification, les taches et les imperfections. Trois passages sont nécessaires : grain 40 (dégrossissage), grain 80 (lissage), grain 120 (finition). Le ponçage à la vibrante (bord à bord) traite les zones inaccessibles à la bande.",
              },
              {
                etape: "Rebouchage des fentes et lacunes",
                prix: "5 – 15 €/m²",
                detail: "Les fentes entre les lames (inévitables dans un parquet ancien) sont rebouchées avec une pâte à bois teintée (mélange de sciure + colle) ou du mastic parquet souple. Pour les fentes importantes (>3 mm), on insère des liteaux de chêne. Les lames manquantes sont remplacées par du parquet chêne massif identique (neuf ou récupération).",
              },
              {
                etape: "Vitrification ou huilage",
                prix: "10 – 25 €/m²",
                detail: "Deux finitions sont possibles. La vitrification (vernis polyuréthane mat ou satiné) est plus résistante et facile d'entretien — idéale pour les appartements locatifs ou les zones de passage. L'huilage (huile dure naturelle) donne un rendu plus authentique, mat et chaud, plus proche de l'aspect d'origine — idéal pour les propriétaires occupants. L'huilage nécessite un entretien annuel (huile d'entretien).",
              },
            ].map((el) => (
              <div key={el.etape} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.etape}</div>
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
            Budget rénovation appartement haussmannien Paris 2025 : tableau des prix
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Prix indicatifs pour un appartement haussmannien de 60 à 100 m², main d&apos;oeuvre et matériaux inclus. La restauration des éléments d&apos;époque est comprise dans ces estimations.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Poste</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix unitaire</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget 80 m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { poste: 'Ponçage + vitrification parquet', unite: '20 – 50 €/m²', budget: '1 600 – 4 000 €' },
                  { poste: 'Restauration moulures (corniche + rosace)', unite: '30 – 80 €/ml', budget: '2 000 – 6 000 €' },
                  { poste: 'Restauration cheminée marbre', unite: 'Forfait', budget: '500 – 3 000 €' },
                  { poste: 'Peinture à la chaux + enduits', unite: '30 – 70 €/m²', budget: '2 400 – 5 600 €' },
                  { poste: 'Électricité (mise aux normes)', unite: 'Forfait', budget: '5 000 – 15 000 €' },
                  { poste: 'Plomberie (salle de bain + cuisine)', unite: 'Forfait', budget: '6 000 – 18 000 €' },
                  { poste: 'Isolation thermique (murs ITI)', unite: '40 – 100 €/m²', budget: '4 000 – 10 000 €' },
                  { poste: 'Fenêtres double vitrage (à l\'identique)', unite: '1 000 – 2 000 €/u', budget: '5 000 – 10 000 €' },
                ].map((row, i) => (
                  <tr key={row.poste} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.poste}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.unite}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.budget}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Ce qu&apos;il ne faut pas faire dans un appartement haussmannien
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Ne jamais recouvrir les moulures de polystyrène ou faux plafond tendu — perte de valeur patrimoniale immédiate",
                "Ne pas supprimer le parquet d'époque pour poser du carrelage — irréversible et préjudiciable à la valeur",
                "Ne pas boucher les cheminées avec du plâtre — les conserver même si elles ne fonctionnent plus",
                "Ne pas remplacer les doubles portes par des portes modernes — faire décaper et restaurer à l'identique",
                "Ne pas isoler les murs en pierre avec du polystyrène — risque de condensation et pathologies d'humidité",
                "Ne pas peindre les moulures en plâtre avec une peinture épaisse non diluée — elles perdent leur finesse",
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

      {/* Section 5 — Cuisine et salle de bain */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Cuisine et salle de bain contemporaines dans un cadre haussmannien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;un des défis de la rénovation haussmannienne est d&apos;intégrer des pièces humides modernes (cuisine ouverte, salle de bain lumineuse) sans trahir l&apos;esprit du lieu. La clé : des matériaux nobles et des couleurs en accord avec la palette haussmannienne.
          </p>
          <div className="space-y-4">
            {[
              {
                piece: "Cuisine ouverte sur le salon",
                detail: "L'ouverture de la cuisine sur le salon est très demandée dans les appartements haussmanniens. Si la cloison est non porteuse, la création d'une large baie avec comptoir est simple. La cuisine s'intègre dans le salon avec des façades de meubles à panneaux moulurés (style shaker), une crédence en carrelage de métro, et un plan de travail en marbre blanc — un vocabulaire cohérent avec l'architecture d'époque.",
              },
              {
                piece: "Salle de bain : marbre, or et vert anglais",
                detail: "La salle de bain contemporaine d'un appartement haussmannien joue sur les codes d'époque revisités : carrelage en marbre blanc de Carrare (sol ou mur), robinetterie en laiton doré, meuble vasque en marbre, baignoire sur pattes (fonte ou acrylique). La couleur de prédilection : vert anglais mat (British Racing Green) ou bleu de Prusse pour les boiseries et le mobilier.",
              },
              {
                piece: "Toilettes à part : sublimer 3 m²",
                detail: "Les appartements haussmanniens ont souvent des WC séparés avec un couloir d'entrée. Ces 2 à 3 m² peuvent devenir une pièce raffinée : lambris peint en couleur soutenue, carrelage à motifs géométriques (zellige, carreaux de ciment), applique murale dorée, plante grasse. Un investissement de 1 500 à 3 000 € pour un rendu très impactant.",
              },
            ].map((el) => (
              <div key={el.piece} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.piece}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Peinture et couleurs */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Peinture et couleurs pour un appartement haussmannien : les bonnes associations
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La peinture est l&apos;intervention la moins coûteuse et la plus transformatrice dans un appartement haussmannien. Le choix des couleurs doit s&apos;accorder avec les proportions des pièces, la hauteur des plafonds et la lumière.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                choix: "Blanc cassé (tradition haussmannienne)",
                detail: "Le blanc cassé (blanc de craie, lin pâle) est la valeur sûre. Il met en valeur les moulures, s'accorde avec le parquet chêne et les cheminées en marbre. Finition mat obligatoire pour éviter l'effet plastique sur les moulures.",
              },
              {
                choix: "Couleurs profondes en salon (vert, bleu, gris anthracite)",
                detail: "Dans un salon avec 3,20 m sous plafond, une peinture couleur profonde (vert bouteille, bleu canard, gris anthracite) est magnifique. Les moulures sont peintes dans la même teinte pour un rendu enveloppant et raffiné. Associer avec un plafond blanc et des boiseries légèrement plus claires.",
              },
              {
                choix: "Bi-ton murs / plafond",
                detail: "La technique bi-ton (murs en couleur, plafond + moulures en blanc cassé) est très efficace pour mettre en valeur la hauteur sous plafond. La ligne de séparation suit la corniche, valorisant ce détail architectural. Un classique de la rénovation haussmannienne.",
              },
              {
                choix: "Peinture à la chaux pour murs en pierre",
                detail: "Sur les murs en pierre de taille (cave, cage d'escalier, certains murs d'appartement), la peinture à la chaux (badigeon) est le revêtement le plus adapté : respirante, antibactérienne, compatible avec les supports anciens. Finition naturellement irrégulière, très esthétique.",
              },
            ].map((el) => (
              <div key={el.choix} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.choix}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
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
              { href: '/blog/renovation-parquet-paris', title: 'Rénovation parquet Paris' },
              { href: '/blog/moulures-paris', title: 'Restauration moulures Paris' },
              { href: '/blog/isolation-thermique-paris', title: 'Isolation thermique Paris' },
              { href: '/blog/renovation-appartement-ancien-paris', title: 'Rénovation appartement ancien Paris' },
              { href: '/blog/renovation-studio-paris', title: 'Rénovation studio Paris' },
              { href: '/blog/humidite-appartement-paris', title: "Humidité appartement Paris" },
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
          Restaurez le cachet de votre appartement haussmannien
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Artisan spécialisé dans le bâti ancien parisien. Diagnostic gratuit. Devis détaillé sous 48h.
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
