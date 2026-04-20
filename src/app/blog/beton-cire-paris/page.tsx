import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Béton Ciré Paris', item: 'https://espacedesignparis.fr/blog/beton-cire-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Béton Ciré Paris : pose, prix & entretien — guide artisan 2025",
  description: "Béton ciré à Paris : sol, mur, salle de bain. Pose artisan Paris, prix au m², entretien 2025. Devis gratuit 48h.",
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/beton-cire-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Le béton ciré convient-il à la salle de bain ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, le béton ciré est parfaitement adapté à la salle de bain à condition d'utiliser une finition hydrofuge adaptée aux zones humides. On applique généralement 2 à 3 couches de cire ou de résine de protection après le ponçage. Il est impératif de traiter également les joints entre le mur et le sol avec un mastic silicone pour éviter toute infiltration. Un béton ciré bien protégé dans une salle de bain peut durer 15 à 20 ans sans problème, à condition de l'entretenir avec des produits neutres et de recharger la cire tous les 2 à 3 ans selon l'usage.",
      },
    },
    {
      '@type': 'Question',
      name: "Combien coûte la pose de béton ciré à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix de pose du béton ciré à Paris varie selon le support et la surface : comptez 80 à 150 €/m² pour un sol (fourniture et pose comprises), 120 à 220 €/m² pour un mur de salle de bain (zones humides exigeant une protection renforcée), et 200 à 350 €/ml pour un plan de travail de cuisine. La préparation du support (ragréage, ponçage) peut ajouter 15 à 30 €/m². Un salon de 30 m² revient ainsi entre 2 400 et 4 500 € pose comprise. Ces tarifs incluent les couches de béton ciré, le ponçage intermédiaire et la finition cire ou résine.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelle durée de vie pour le béton ciré ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Un béton ciré bien posé et bien entretenu dure entre 15 et 25 ans. Sa durée de vie dépend essentiellement de l'entretien : utiliser uniquement des produits de nettoyage neutres (pH 7), éviter les produits acides ou abrasifs, et recharger la couche de protection (cire ou résine) tous les 2 à 5 ans selon le trafic. Contrairement à d'autres revêtements, le béton ciré peut être rénové sans dépose complète : un ponçage léger et un rechargement de la finition lui redonnent son aspect d'origine.",
      },
    },
    {
      '@type': 'Question',
      name: "Peut-on poser du béton ciré sur carrelage existant ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, il est possible de poser du béton ciré sur un carrelage existant, à condition que tous les carreaux soient bien collés (aucun son creux) et que le support soit propre et dégraissé. Les joints du carrelage doivent être bouchés avec un enduit de ragréage avant application du béton ciré pour éviter que les joints n'apparaissent en surface au fil du temps. Cette technique permet d'éviter la dépose du carrelage (8 à 15 €/m²) et est très répandue dans les rénovations parisiennes. Épaisseur totale du béton ciré sur carrelage : environ 3 à 5 mm.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Béton Ciré Paris : pose, prix & entretien — guide artisan 2025 | Espace Design",
  description: "Béton ciré à Paris : sol, mur, salle de bain. Pose artisan Paris, prix au m², entretien 2025. Devis gratuit 48h.",
  keywords: ["béton ciré Paris", "pose béton ciré Paris", "prix béton ciré Paris", "artisan béton ciré Paris"],
}

export default function ArticleBetonCireParis() {
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
            Sol &amp; Revêtements
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Béton Ciré à Paris : tout savoir sur ce revêtement tendance 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le béton ciré s&apos;est imposé comme l&apos;un des revêtements les plus plébiscités dans les appartements parisiens. Sol, mur, salle de bain, cuisine, plan de travail, escalier — il s&apos;adapte à presque tous les supports. Guide complet sur la pose, les prix et l&apos;entretien du béton ciré à Paris en 2025.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-[#1C1C1C] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { val: '80 €/m²', label: 'Prix mini béton ciré sol posé' },
              { val: '150 €/m²', label: 'Prix médian mur salle de bain' },
              { val: '20 ans', label: 'Durée de vie moyenne' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-xl sm:text-2xl font-semibold text-[#D4AF37] mb-1">{s.val}</div>
                <div className="text-gray-500 text-[10px] uppercase tracking-wider font-light">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1 — Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C]">
            Le béton ciré à Paris : un revêtement devenu incontournable
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            Apparu dans le monde du design industriel et des lofts new-yorkais dans les années 1990, le béton ciré a conquis les appartements parisiens au fil des deux dernières décennies. Aujourd&apos;hui, il figure parmi les cinq revêtements les plus demandés dans les projets de rénovation à Paris, aussi bien pour les sols que pour les murs, les salles de bain ou les cuisines.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            Son succès tient à une combinaison unique : esthétique épurée, continuité visuelle (aucun joint saillant), adaptabilité à tous les styles d&apos;intérieur, et compatibilité avec les appartements anciens comme contemporains. À Paris, où la majorité des appartements ont des surfaces réduites, l&apos;absence de joints crée une impression d&apos;espace particulièrement appréciée.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            Cependant, le béton ciré reste un revêtement technique qui exige une pose rigoureuse. Une mauvaise préparation du support ou une finition insuffisante peut conduire à des fissures, des taches permanentes ou un décollement prématuré. Faire appel à un artisan spécialisé parisien est indispensable pour garantir un résultat durable.
          </p>
        </div>
      </section>

      {/* Section 2 — Qu'est-ce que le béton ciré */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Qu&apos;est-ce que le béton ciré ?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Contrairement à ce que son nom laisse entendre, le béton ciré n&apos;est pas du béton coulé. C&apos;est un revêtement de finition composé de ciment, de résines, de pigments et d&apos;agrégats très fins, appliqué en couches minces (2 à 5 mm) sur un support existant. Sa composition le rend à la fois léger, adhérent et esthétiquement proche du béton brut — avec une finition lisse et une légère brillance caractéristique.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: "Béton ciré vs béton coulé",
                detail: "Le béton coulé (dalle) est un matériau de structure épais (10 à 20 cm) qui constitue le plancher lui-même. Le béton ciré est un revêtement de finition (2 à 5 mm) appliqué par-dessus un support existant — carrelage, béton, parquet. Il ne peut pas remplacer une dalle et n'a aucune fonction structurelle.",
              },
              {
                titre: "Composition du béton ciré",
                detail: "Le béton ciré professionnel se compose d'un liant ciment-résine, de charges minérales très fines (calcaire ou quartz broyé), de pigments naturels ou synthétiques, et d'un agent de flexibilité (latex ou résine acrylique) qui lui permet de supporter de légères vibrations sans se fissurer.",
              },
              {
                titre: "Pourquoi le béton ciré séduit les Parisiens",
                detail: "Dans un appartement parisien, le béton ciré permet de créer une continuité visuelle entre les pièces (salon, couloir, cuisine), d'éliminer les joints disgracieux, et d'obtenir un rendu contemporain ou industriel qui s'accorde aussi bien avec l'architecture haussmannienne qu'avec les immeubles modernes.",
              },
              {
                titre: "Les limites à connaître",
                detail: "Le béton ciré est sensible aux acides (jus de citron, vinaigre, produits ménagers non neutres) qui peuvent attaquer la finition. Il nécessite un entretien régulier (recharge de cire ou résine) et une protection adaptée selon la zone (salle de bain, cuisine). Mal posé, il peut présenter des fissures, des taches ou des différences de teinte (effet nuage).",
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

      {/* Section 3 — Applications */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Applications du béton ciré à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le béton ciré s&apos;adapte à de nombreuses surfaces dans un appartement parisien. Chaque application a ses spécificités techniques et ses contraintes de finition.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: "Sol — salon, entrée, couloir",
                prix: "80 – 150 €/m²",
                detail: "L'application la plus courante du béton ciré à Paris. En sol, il crée une continuité visuelle entre les pièces et s'accorde avec tous les styles de mobilier. Pour un sol en béton ciré, la préparation du support est cruciale : le plancher doit être plan (tolérance 3 mm sous la règle de 2 m), propre et sec. Une primaire d'accrochage est appliquée avant les 2 couches de béton ciré. Le ponçage intermédiaire garantit la planéité finale. Finition : cire (aspect mat naturel) ou résine (plus résistante aux taches, aspect légèrement brillant).",
              },
              {
                type: "Mur — salle de bain, cuisine",
                prix: "120 – 220 €/m²",
                detail: "En mur, le béton ciré apporte un rendu minimaliste très recherché dans les salles de bain et cuisines parisiennes. En zone humide (douche, pourtour baignoire), la protection hydrofuge est renforcée : 3 à 4 couches de résine polyuréthane ou époxy sont appliquées après le ponçage. Cette finition est indispensable pour éviter les moisissures et l'infiltration d'eau dans le mur. Le béton ciré mural s'applique également sur des supports en plâtre ou en OSB après une primaire adaptée.",
              },
              {
                type: "Plan de travail — cuisine",
                prix: "200 – 350 €/ml",
                detail: "Le plan de travail en béton ciré est l'un des éléments les plus demandés dans les cuisines rénovées à Paris. Il est réalisé sur un support en béton cellulaire, en aggloméré hydrofuge ou sur l'ancien plan de travail existant. La finition est systématiquement en résine époxy alimentaire (résistante à la chaleur modérée, aux produits ménagers et aux couteaux si un verre de protection est ajouté). Durée de vie : 10 à 15 ans avec entretien annuel.",
              },
              {
                type: "Escalier",
                prix: "150 – 300 €/marche",
                detail: "Le béton ciré sur escalier est techniquement plus complexe car il doit résister aux impacts (chute d'objets, talons) et aux frottements répétés. La finition doit être antiglisse (ajout de granulats ou de silice dans la résine). Il est appliqué sur un escalier en béton ou en bois recouvert d'un support en OSB. L'effet final est spectaculaire dans les appartements en duplex parisiens, créant une continuité parfaite avec le sol des paliers.",
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

      {/* Section 4 — Étapes de pose */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Pose du béton ciré : les étapes clés
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La qualité d&apos;un béton ciré dépend à 80 % de la qualité de la préparation. Un artisan sérieux consacre autant de temps à préparer le support qu&apos;à appliquer le béton ciré lui-même. Voici les étapes incontournables.
          </p>
          <div className="space-y-4 mb-8">
            {[
              {
                etape: "1 — Préparation du support",
                detail: "C'est l'étape la plus importante. Le support doit être plan, propre, sec et solide. Pour un sol, un ragréage autonivelant est appliqué si les irrégularités dépassent 3 mm. Pour un mur, les fissures sont rebouchées et un enduit de ragréage est appliqué si nécessaire. Tout ancien revêtement décollé, poussieux ou gras doit être traité avant la pose. Durée : 1 à 2 jours pour un appartement type.",
              },
              {
                etape: "2 — Application de la primaire d'accrochage",
                detail: "Une primaire spéciale béton ciré est appliquée au rouleau sur le support propre et sec. Elle favorise l'adhérence du béton ciré et régule l'absorption du support. En zone humide, une membrane d'étanchéité sous-carrelage (type SPEC) est posée avant la primaire pour garantir l'imperméabilité du mur. Temps de séchage : 4 à 12 heures selon la température et l'humidité ambiante.",
              },
              {
                etape: "3 — Application des couches de béton ciré",
                detail: "Le béton ciré est appliqué en 2 à 3 couches minces à la spatule inox ou à la taloche en plastique souple. Chaque couche (environ 1 mm d'épaisseur) doit sécher avant l'application de la suivante (4 à 6 heures). La gestuelle de l'artisan est déterminante : les traces de spatule créent l'aspect caractéristique du béton ciré. Les teintes sont obtenues par mélange de pigments dans la masse.",
              },
              {
                etape: "4 — Ponçage intermédiaire et final",
                detail: "Entre les couches et après la dernière couche, un ponçage à la ponceuse orbitale (grain 80 puis 120) permet d'obtenir une surface parfaitement lisse et homogène. Le ponçage final (grain 180 à 240) prépare le support à recevoir la finition. L'aspiration des poussières est impérative avant l'application de la cire ou de la résine.",
              },
              {
                etape: "5 — Finition : cire ou résine",
                detail: "Deux options de finition : la cire naturelle (aspect mat doux, nécessite un rechargement tous les 2 à 3 ans, moins résistante aux taches) ou la résine polyuréthane ou époxy (aspect satiné à brillant, très résistante, idéale pour la salle de bain et la cuisine, rechargement tous les 5 à 10 ans). En zone sèche, les deux options sont valables. En zone humide ou sur un plan de travail, la résine est impérative.",
              },
            ].map((el) => (
              <div key={el.etape} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.etape}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Prix */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix béton ciré Paris 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Prix tous compris (fourniture + pose + finition) par un artisan parisien spécialisé. Hors ragréage si nécessaire.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Surface / Application</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix estimé</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Finition recommandée</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    surface: "Sol salon 30 m²",
                    prix: "2 400 – 4 500 €",
                    finition: "Cire ou résine PU",
                  },
                  {
                    surface: "Sol entrée / couloir 10 m²",
                    prix: "800 – 1 500 €",
                    finition: "Résine PU (trafic)",
                  },
                  {
                    surface: "Mur salle de bain",
                    prix: "120 – 220 €/m²",
                    finition: "Résine époxy hydrofuge",
                  },
                  {
                    surface: "Douche intégrale",
                    prix: "1 800 – 3 500 €",
                    finition: "Résine époxy 4 couches",
                  },
                  {
                    surface: "Plan de travail cuisine",
                    prix: "200 – 350 €/ml",
                    finition: "Résine époxy alimentaire",
                  },
                  {
                    surface: "Escalier (par marche)",
                    prix: "150 – 300 €/marche",
                    finition: "Résine antiglisse",
                  },
                  {
                    surface: "Ragréage préalable",
                    prix: "15 – 30 €/m²",
                    finition: "Si support irrégulier",
                  },
                ].map((row, i) => (
                  <tr key={row.surface} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.surface}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prix}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.finition}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
            <div className="font-medium text-[#1C1C1C] text-sm mb-3">Ce qui influence le prix à Paris</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "L'état du support : un support en mauvais état nécessite un ragréage, qui peut représenter 20 à 30 % du coût total",
                "La surface : plus la surface est grande, plus le coût au m² baisse (économies d'échelle sur le déplacement et la préparation)",
                "La finition choisie : la résine époxy coûte 20 à 30 % plus cher que la cire, mais dure 2 à 3 fois plus longtemps",
                "L'accessibilité du chantier : un appartement en étage sans ascenseur peut majorer le prix de 5 à 10 %",
                "La teinte : les teintes standards sont incluses dans le prix ; les teintes sur-mesure (RAL) peuvent être facturées en supplément",
                "Le délai : une intervention urgente peut être majorée de 10 à 20 % à Paris selon la disponibilité des artisans",
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

      {/* Section 6 — Entretien */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Entretien du béton ciré : conseils d&apos;artisan
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le béton ciré est un revêtement qui se patine avec le temps, mais son entretien conditionne directement sa durée de vie. Un mauvais entretien peut dégrader la finition en quelques mois, quand un entretien adapté préserve le revêtement pendant 20 ans.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: "Nettoyage quotidien",
                detail: "Utiliser uniquement un savon au pH neutre dilué dans de l'eau tiède. Éviter à tout prix les produits acides (vinaigre blanc, citron, détartrant), les produits basiques (javel, soude), les nettoyants abrasifs et les éponges rugueuses. Pour les sols, un balai microfibre humide est suffisant au quotidien. Le béton ciré ne doit pas être frotté vigoureusement — un essuyage doux suffit.",
              },
              {
                type: "Entretien de la couche de protection (cire)",
                detail: "Si votre béton ciré est fini à la cire, une recharge annuelle est recommandée (tous les 2 à 3 ans selon le trafic). Il suffit de nettoyer le sol à fond, de le laisser sécher complètement, puis d'appliquer une nouvelle couche de cire d'entretien au chiffon doux. Cette opération prend 2 à 3 heures pour un appartement standard et redonne immédiatement l'éclat d'origine au revêtement.",
              },
              {
                type: "Entretien de la couche de protection (résine)",
                detail: "La résine polyuréthane ou époxy est bien plus résistante que la cire et ne nécessite pas de rechargement annuel. Un entretien tous les 5 à 10 ans est généralement suffisant. Si la résine commence à se ternir ou à présenter des micro-rayures, un artisan peut la polir et appliquer une nouvelle couche par-dessus sans dépose. Coût : 30 à 50 €/m² selon l'état.",
              },
              {
                type: "Taches et réparations",
                detail: "Les taches récentes (huile, vin, café) doivent être essuyées immédiatement avec un chiffon doux — le béton ciré absorbe les liquides rapidement si la protection est insuffisante ou ancienne. Pour les taches anciennes incrustées, un artisan peut procéder à un ponçage localisé et à une réapplication du béton ciré sur la zone concernée, suivi d'une nouvelle finition. Le résultat est quasi invisible si la teinte d'origine est bien reproduite.",
              },
            ].map((el) => (
              <div key={el.type} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.type}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>

          <div className="bg-[#1C1C1C] rounded-lg p-5">
            <div className="font-medium text-white text-sm mb-3">Ce qu&apos;il ne faut jamais faire avec du béton ciré</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Nettoyer avec du vinaigre blanc ou du citron — acides qui attaquent irrémédiablement la cire",
                "Utiliser un nettoyant haute pression (karcher) sur un sol en béton ciré",
                "Poser des objets très chauds directement sur un plan de travail en béton ciré sans dessous-de-plat",
                "Laisser de l'eau stagner longtemps sur une zone non protégée ou dont la cire est ancienne",
                "Frotter les taches avec une éponge abrasive (côté vert) qui raye la surface de finition",
                "Utiliser de la javel pour nettoyer — produit basique qui dégrade la cire en quelques utilisations",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-400 font-light">
                  <span className="text-red-400 flex-shrink-0 mt-0.5">✕</span>
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
              { href: '/blog/sol-beton-cire-paris', title: 'Sol béton ciré Paris' },
              { href: '/blog/peinture-beton-cire-paris', title: 'Peinture béton ciré Paris' },
              { href: '/blog/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain Paris' },
              { href: '/blog/renovation-cuisine-ouverte-paris', title: 'Rénovation cuisine ouverte Paris' },
              { href: '/blog/revetement-sol-appartement-paris', title: 'Revêtement sol appartement Paris' },
              { href: '/blog/prix-renovation-appartement-paris', title: 'Prix rénovation appartement Paris' },
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
          Faites poser votre béton ciré par un artisan parisien
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Conseil personnalisé, devis détaillé sous 48h. Pose soignée sol, mur, salle de bain et cuisine. Garantie décennale.
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
