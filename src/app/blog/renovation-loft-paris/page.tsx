import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Loft Paris', item: 'https://espacedesignparis.fr/blog/renovation-loft-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation Loft Paris : aménagement industriel & prix 2025 | Espace Design",
  description: "Rénover un loft ou atelier parisien : style industriel, béton ciré, verrière, acier noir. Artisan spécialisé, prix 2025.",
  datePublished: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-loft-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix de rénovation d'un loft à Paris en 2025 ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La rénovation d'un loft parisien coûte en moyenne entre 800 et 2 500 €/m² selon l'état de départ et le niveau de finition. Un loft brut de 100 m² à rénover complètement (électricité, plomberie, isolation, sols, cloisons vitrées) représente un budget de 80 000 à 200 000 €. Les postes les plus coûteux sont la création de verrières (2 000 à 8 000 € l'unité), les sols en béton ciré (60 à 120 €/m²) et la cuisine ouverte sur-mesure (10 000 à 30 000 €).",
      },
    },
    {
      '@type': 'Question',
      name: "Comment chauffer et isoler un loft parisien à hauts plafonds ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Un loft avec des plafonds de 3,50 m ou plus présente un défi thermique important : le volume d'air à chauffer est bien supérieur à un appartement standard. Les solutions les plus adaptées sont le plancher chauffant hydraulique (idéal sous béton ciré, répartition homogène), les radiateurs à inertie en acier (design cohérent avec le style industriel), ou le poêle à bois (appoint décoratif efficace). L'isolation doit porter sur le toit (30 à 40 cm de laine minérale) et les murs si ce sont des parois extérieures. Un VMC double flux est indispensable dans les grands volumes.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il un permis de construire pour créer des cloisons dans un loft parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La création de cloisons intérieures légères dans un loft ne nécessite pas de permis de construire, sauf si elles modifient la structure du bâtiment (murs porteurs) ou la façade (nouvelles ouvertures). En revanche, un changement de destination (d'entrepôt ou local commercial en logement) nécessite un permis de construire et peut requérir l'accord de la copropriété. Pour les lofts en immeubles classés ou situés dans des secteurs sauvegardés parisiens, l'avis de l'Architecte des Bâtiments de France peut être requis.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment créer une chambre dans un loft open space sans perdre l'esprit industriel ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La cloison vitrée style atelier (acier noir + verre clair ou dépoli) est la solution la plus cohérente avec l'esthétique industrielle. Elle sépare la chambre du séjour sans fermer l'espace et laisse passer la lumière. Autres options : la mezzanine métallique (lit en hauteur, séjour en bas), le rideau industriel sur rail plafond (velours épais ou cuir), ou le dressing ouvert en acier comme séparateur. Éviter les cloisons en plaque de plâtre banales qui cassent l'esprit du loft.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Rénovation Loft Paris : aménagement industriel & prix 2025 | Espace Design",
  description: "Rénover un loft ou atelier parisien : style industriel, béton ciré, verrière, acier noir. Artisan spécialisé, prix 2025.",
  keywords: "rénovation loft Paris, aménagement loft Paris, loft industriel Paris",
}

export default function ArticleRenovationLoft() {
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
            Aménagement
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Loft Paris : aménagement industriel et prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Les lofts et ateliers parisiens ont une âme unique : hauts plafonds, béton brut, grandes baies vitrées, volumes ouverts. Rénover un loft, c&apos;est préserver ce caractère tout en y intégrant le confort d&apos;un logement moderne. Béton ciré, verrières, acier noir, cuisine ouverte : guide complet 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Spécificités */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les spécificités d&apos;un loft parisien : volume, lumière et contraintes
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Un loft parisien est généralement un ancien espace industriel (atelier, entrepôt, imprimerie) ou commercial reconverti en logement. Il se caractérise par des plafonds hauts (3 à 5 m), un plan ouvert, des matériaux bruts (béton, acier, brique) et de grandes ouvertures. Rénover un loft, c&apos;est gérer des défis spécifiques que les appartements standard n&apos;ont pas.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              À Paris, les lofts se concentrent dans certains arrondissements : 10e, 11e, 13e, 19e, 20e (anciennes zones industrielles), ainsi que dans certains quartiers du 18e (Goutte d&apos;Or, La Chapelle) et du 9e. Les prix de rénovation sont souvent plus élevés que pour un appartement standard, en raison des volumes à traiter et de la complexité des installations techniques.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: "Volume et thermique : un défi spécifique",
                  detail: "Un loft de 100 m² avec 4 m de hauteur représente 400 m³ d'air à chauffer — soit presque le double d'un appartement standard de même surface. La stratification thermique (l'air chaud monte) est un problème réel : les pieds ont froid, les têtes ont chaud. Solution : plancher chauffant + VMC double flux pour homogénéiser la température.",
                },
                {
                  enjeu: "Acoustique : absorber le son dans les grands volumes",
                  detail: "Les surfaces dures (béton, acier, verre) créent une réverbération importante dans les lofts. L'acoustique doit être traitée avec des matériaux absorbants : tapis épais, rideaux lourds, panneaux acoustiques décoratifs, mobilier rembourré. Ne pas négliger l'isolation des murs mitoyens : les voisins sont souvent dans des espaces similaires (peu absorbants).",
                },
                {
                  enjeu: "Technique : gaines, colonnes et normes logement",
                  detail: "Un ancien local industriel n'est pas équipé pour un logement : il faut créer l'ensemble de la distribution électrique (tableau, circuits, prises, éclairage), la plomberie (eau chaude, évacuations, VMC), et parfois installer une chaudière ou une pompe à chaleur. Ces travaux représentent souvent 30 à 40 % du budget total.",
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

      {/* Section 2 — Style industriel */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Le style industriel parisien : matériaux, couleurs et codes esthétiques
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le style industriel ne se résume pas à des canalisations apparentes et de l&apos;acier brut. À Paris, il s&apos;est considérablement affiné : on parle aujourd&apos;hui d&apos;un style &quot;loft parisien&quot; qui mêle brut et raffinement, matière et lumière.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                elem: "Béton ciré (sols et murs)",
                detail: "Le béton ciré est le sol de référence du loft industriel. Continu, sans joint, il unifie l'espace et s'accorde avec tous les matériaux. Il peut s'appliquer aussi en mural (cuisine, salle de bain) pour un effet monolithique. Entretien : cirer tous les 2 à 3 ans.",
                prix: "60 – 120 €/m²",
              },
              {
                elem: "Acier noir mat (verrières, portes, mobilier)",
                detail: "L'acier noir est l'élément signature du loft parisien contemporain. Il structure l'espace (verrières, garde-corps de mezzanine, portes coulissantes) sans l'alourdir. Sa finition mate évite les reflets et s'harmonise avec le béton et le bois brut.",
                prix: "200 – 400 €/ml",
              },
              {
                elem: "Brique apparente",
                detail: "La brique apparente (rouge, beige, blanche) apporte chaleur et texture dans un loft. Elle peut être existante (nettoyage + traitement) ou créée avec des briques de placage collées. Effet garanti sur un seul pan de mur, sans excès.",
                prix: "30 – 80 €/m²",
              },
              {
                elem: "Bois massif et métal rouillé",
                detail: "La juxtaposition du bois massif brut (chêne, pin vieilli) avec le métal rouillé ou patiné crée la tension visuelle propre au style industriel. Plateaux de tables en bois massif, étagères sur cornières métal, tabourets en fonte : un vocabulaire cohérent.",
                prix: "Variable selon mobilier",
              },
              {
                elem: "Luminaires industriels",
                detail: "Les suspensions en métal brossé ou noir mat (style usine, cage, abat-jour émaillé) sont indispensables dans un loft. Préférer des ampoules à filament Edison (2700K) pour une lumière chaude et ambrée qui contraste avec le béton froid. Rails de spots orientables pour les zones de travail.",
                prix: "50 – 500 €/pièce",
              },
              {
                elem: "Palette de couleurs",
                detail: "La palette du loft industriel parisien : gris béton, noir mat, blanc cassé, bois naturel. Les touches de couleur vive (vert anglais, bleu de Prusse, terracotta) s'utilisent en accents sur les portes, la crédence ou un meuble. Éviter les couleurs pastels qui s'accordent mal avec l'esprit du lieu.",
                prix: "—",
              },
            ].map((el) => (
              <div key={el.elem} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.elem}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.prix}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Verrières */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Verrières et cloisons vitrées : créer des zones sans fermer l&apos;espace
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Dans un loft open space, la question de la délimitation des espaces (chambre, bureau, salon, cuisine) est centrale. La verrière intérieure est la solution qui respecte le mieux l&apos;esprit du lieu : elle sépare sans fermer, laisse passer la lumière et structure visuellement le volume.
          </p>
          <div className="space-y-4">
            {[
              {
                type: "Verrière fixe (cloison vitrée pleine hauteur)",
                prix: "2 000 – 6 000 €",
                detail: "La verrière fixe pleine hauteur (du sol au plafond) avec profils acier noir et verre clair 6 mm est la solution la plus impressionnante. Elle sépare parfaitement deux espaces (chambre/séjour, bureau/séjour) tout en maintenant la continuité visuelle. L'entretien est simple : nettoyage au chiffon humide.",
              },
              {
                type: "Verrière avec porte coulissante",
                prix: "3 000 – 8 000 €",
                detail: "La verrière avec porte coulissante intégrée permet d'ouvrir ou de fermer l'espace à la demande. La porte coulisse sur un rail plafond (apparent, finition métal brossé) et disparaît dans le pan de la verrière. Solution idéale pour une chambre qui peut s'ouvrir sur le séjour.",
              },
              {
                type: "Cloison mixte acier-verre-bois",
                prix: "2 500 – 7 000 €",
                detail: "Pour adoucir l'effet 100 % industriel, on intègre des panneaux de bois dans la cloison (soubassement, remplissage partiel). L'alliance acier noir + bois massif + verre crée un rendu plus chaleureux, très prisé dans les lofts parisiens rénovés avec goût.",
              },
              {
                type: "Verrière de toit (fenêtre de toit style atelier)",
                prix: "3 000 – 10 000 €",
                detail: "Dans les lofts en dernier étage, une verrière de toit (lanterneau) ou une fenêtre de toit grande dimension apporte une lumière zénithale incomparable. Les modèles à ouverture motorisée permettent de ventiler naturellement les grands volumes. Nécessite l'accord de la copropriété.",
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
            Budget rénovation loft Paris 2025 : tableau des prix par poste
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Prix indicatifs pour un loft parisien de 80 à 120 m², main d&apos;oeuvre et matériaux inclus. Un loft brut nécessite généralement des travaux plus importants qu&apos;un appartement habité.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Poste</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix unitaire</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget 100 m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { poste: 'Électricité complète (tableau + distribution)', unite: 'Forfait', budget: '8 000 – 20 000 €' },
                  { poste: 'Plomberie (cuisine + salle de bain)', unite: 'Forfait', budget: '6 000 – 15 000 €' },
                  { poste: 'Chauffage (PAC ou plancher chauffant)', unite: 'Forfait', budget: '8 000 – 20 000 €' },
                  { poste: 'Sol béton ciré', unite: '60 – 120 €/m²', budget: '6 000 – 12 000 €' },
                  { poste: 'Verrières intérieures', unite: '2 000 – 8 000 €/u', budget: '4 000 – 16 000 €' },
                  { poste: 'Isolation (murs + toit)', unite: '40 – 100 €/m²', budget: '6 000 – 15 000 €' },
                  { poste: 'Cuisine ouverte sur-mesure', unite: 'Forfait', budget: '10 000 – 30 000 €' },
                  { poste: 'Salle de bain industrielle', unite: 'Forfait', budget: '5 000 – 15 000 €' },
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
              Points de vigilance avant d&apos;acheter un loft parisien
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Vérifier le changement de destination : est-il légalement un logement ou encore un local commercial ?",
                "Contrôler l'état de la toiture et des verrières existantes : fuite = chantier coûteux",
                "Vérifier la présence d'amiante (avant 1997) avant tout travaux de démolition",
                "S'assurer que le DPE a bien été fait (les lofts bruts sont souvent mal isolés, DPE F ou G)",
                "Anticiper les travaux de plomberie : les évacuations d'un local industriel ne correspondent pas à un logement",
                "Vérifier les autorisations de copropriété pour les modifications envisagées (verrière de toit, façade)",
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

      {/* Section 5 — Cuisine loft */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Cuisine de loft : l&apos;îlot central comme pièce maîtresse
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Dans un loft open space, la cuisine n&apos;est pas cachée : elle est exposée, elle fait partie du décor. L&apos;îlot central est l&apos;élément fédérateur autour duquel s&apos;organisent le séjour et la salle à manger. Il doit être à la fois fonctionnel et beau.
          </p>
          <div className="space-y-4">
            {[
              {
                option: "Îlot central en béton ciré ou pierre de lave",
                prix: "5 000 – 15 000 €",
                detail: "Le plan de travail en béton ciré ou en pierre de lave (Pyrolave émaillée) est le must du loft industriel. Résistant à la chaleur, imperméable, il s'adapte à toutes les configurations. L'évier sous-encastré en inox brossé complète parfaitement l'ensemble.",
              },
              {
                option: "Façades de meubles en métal brossé ou bois massif",
                prix: "3 000 – 10 000 €",
                detail: "Les façades en acier inoxydable brossé (esprit restauration professionnelle) ou en bois massif (chêne, noyer) s'associent idéalement avec les plans de travail en béton. Éviter les façades laquées brillantes qui jurent avec l'ambiance industrielle.",
              },
              {
                option: "Hotte de chef suspendue",
                prix: "1 500 – 5 000 €",
                detail: "Dans un loft open space, l'aspiration des odeurs est un enjeu crucial. La hotte de chef suspendue (cylindrique en acier, cubique en verre) ou la hotte à recyclage (sans évacuation extérieure) sont les solutions adaptées. Choisir un modèle silencieux (< 45 dB) pour le confort du séjour.",
              },
            ].map((el) => (
              <div key={el.option} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.option}</div>
                  <div className="text-[#B8960C] text-sm font-medium flex-shrink-0">{el.prix}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Mezzanine */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Mezzanine métallique : gagner un niveau dans votre loft
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Dans un loft avec des plafonds de plus de 3,50 m, la mezzanine métallique est l&apos;une des options les plus efficaces pour créer une chambre ou un bureau supplémentaire sans partition fermée.
          </p>
          <div className="space-y-4">
            {[
              {
                point: "Structure acier : robuste et esthétique",
                detail: "La mezzanine est portée par une structure en acier soudé (poutres IPN, colonnes HEA) reposant sur le plancher existant, sans perçage de dalle porteuse dans la plupart des cas. La finition métal noir mat ou acier brut verni est la plus cohérente avec le style industriel. Un plancher en chêne massif ou en grille caillebotis complète la structure.",
              },
              {
                point: "Garde-corps : sécurité et design",
                detail: "Le garde-corps de mezzanine est un élément décoratif fort : câbles inox tendus (esprit naval), barres acier horizontales, verre trempé (pour la transparence) ou grille en métal laqué. Hauteur réglementaire : 1 mètre minimum. C'est aussi l'élément qui finit le caractère du lieu.",
              },
              {
                point: "Escalier : droit, quart tournant ou colimaçon",
                detail: "L'escalier droit à crémaillère métal (marches bois + limon acier) est la solution la plus compacte et la plus design. L'escalier colimaçon (diamètre 120 cm) convient aux espaces plus contraints. Un escalier-rangement (tiroirs intégrés sous les marches) maximise l'utilisation de l'espace.",
              },
            ].map((el) => (
              <div key={el.point} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.point}</div>
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
              { href: '/blog/renovation-studio-paris', title: 'Rénovation studio Paris' },
              { href: '/blog/creation-verriere-interieure-paris', title: 'Verrière intérieure Paris' },
              { href: '/blog/sol-beton-cire-paris', title: 'Sol béton ciré Paris' },
              { href: '/blog/renovation-appartement-ancien-paris', title: 'Rénovation appartement ancien Paris' },
              { href: '/blog/isolation-thermique-paris', title: 'Isolation thermique Paris' },
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénovation appartement haussmannien Paris' },
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
          Rénovez votre loft parisien avec un artisan spécialisé
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Visite du lieu gratuite. Conception du projet incluse. Devis détaillé sous 48h.
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
