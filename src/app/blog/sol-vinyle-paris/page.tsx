import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: "Sol Vinyle Paris", item: 'https://espacedesignparis.fr/blog/sol-vinyle-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Sol Vinyle Paris : LVT, vinyle clipsable — pose & prix artisan 2025 | Espace Design",
  description: "Poser un sol vinyle à Paris : LVT, dalle adhésive, lames clipsables. Artisan Paris, prix au m², durée vie 2025.",
  datePublished: '2025-04-20',
  dateModified: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/sol-vinyle-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Le vinyle résiste-t-il à l'humidité en salle de bain ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le vinyle est imperméable à l'eau en surface, ce qui le rend adapté aux salles de bain. Cependant, la résistance à l'humidité dépend du type de pose. Le vinyle collé (dalle adhésive ou lame collée) est la solution la plus sûre : aucune infiltration possible sous le revêtement. Le vinyle clipsable (LVT flottant) est également étanche en surface mais peut laisser passer l'eau par les joints si ceux-ci ne sont pas parfaitement serrés ou si le plancher flotte beaucoup. Pour les salles de bain avec douche italienne, nous recommandons une pose collée ou une lame LVT avec traitement hydrofuge des joints.",
      },
    },
    {
      '@type': 'Question',
      name: "Peut-on poser du vinyle sur carrelage existant ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, c'est une des grandes forces du vinyle : il peut être posé directement sur un carrelage existant en bon état (pas de carrelage décollé, pas de différence de niveau supérieure à 3 mm entre les dalles). La lame LVT clipsable s'adapte très bien à ce cas de figure — elle compense les légères irrégularités grâce à sa rigidité. Si le carrelage présente des joints profonds (creux supérieurs à 2 mm), un ragréage des joints est recommandé avant pose. Cette solution évite le coût et les nuisances d'un décarrelage complet.",
      },
    },
    {
      '@type': 'Question',
      name: "Combien coûte la pose de LVT à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La pose de LVT (Luxury Vinyl Tile) à Paris coûte entre 35 et 70 €/m² main d'oeuvre et matériaux inclus, selon la qualité du produit, la surface à poser et la préparation du support nécessaire. Pour un appartement de 30 m² (salon + chambre), comptez un budget de 1 500 à 3 500 €. La pose de LVT premium (épaisseur 6 à 8 mm, couche d'usure 0,5 mm) est plus coûteuse en matériaux mais offre une durée de vie supérieure (20 à 25 ans) et une meilleure isolation phonique — intéressant pour les appartements parisiens en copropriété.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelle épaisseur de vinyle pour un appartement parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour un appartement parisien en usage résidentiel standard, une lame LVT de 4 à 5 mm d'épaisseur totale avec une couche d'usure de 0,3 mm est suffisante. Pour les logements locatifs à fort passage ou les espaces de vie principaux (salon, couloir), privilégiez une épaisseur de 5 à 6 mm avec une couche d'usure de 0,5 mm — elle résiste mieux aux rayures et à l'usure quotidienne. Pour les salles de bain et les cuisines, une dalle vinyle collée de 2 à 3 mm est une option économique et performante. L'épaisseur impacte aussi l'isolation acoustique : un LVT épais (6 à 8 mm) avec sous-couche intégrée atténue mieux les bruits d'impact — avantage important en copropriété parisienne.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Sol Vinyle Paris : LVT, vinyle clipsable — pose & prix artisan 2025 | Espace Design",
  description: "Poser un sol vinyle à Paris : LVT, dalle adhésive, lames clipsables. Artisan Paris, prix au m², durée vie 2025.",
  keywords: ["sol vinyle Paris", "LVT Paris", "pose vinyle Paris", "lames vinyle Paris artisan", "dalle vinyle collée Paris"],
}

export default function ArticleSolVinyleParis() {
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
            Sol Vinyle à Paris : LVT, dalles et lames vinyle — guide complet 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le sol vinyle s&apos;est imposé en quelques années comme une alternative crédible au parquet et au carrelage dans les appartements parisiens. Résistant à l&apos;humidité, facile à poser sur un support existant, imitation bois ou pierre très réaliste : tout ce qu&apos;il faut savoir sur le LVT, les dalles adhésives et les lames clipsables à Paris en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Tendance et avantages */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Pourquoi le vinyle s&apos;impose à Paris : tendance et avantages
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            Le sol vinyle représente aujourd&apos;hui plus de 30 % du marché des revêtements de sol en rénovation résidentielle en France. Cette progression s&apos;explique par plusieurs facteurs : le rapport qualité-prix excellent comparé au parquet massif, la résistance à l&apos;humidité qui en fait la solution idéale pour les cuisines et salles de bain, et la facilité de pose sur un support existant (carrelage, béton, ancien vinyle) qui réduit significativement le coût et la durée des travaux.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            Dans le marché locatif parisien, le vinyle LVT (Luxury Vinyl Tile) est particulièrement prisé des investisseurs : sa durée de vie de 15 à 25 ans, sa résistance aux rayures et aux taches, et la facilité de remplacement d&apos;une lame isolée en cas de dommage en font un choix très rationnel pour un appartement destiné à la location. Il est aussi apprécié pour son confort acoustique supérieur au carrelage — un avantage non négligeable en copropriété parisienne.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Résistance humidité", icon: "💧" },
              { label: "Pose sur existant", icon: "🔧" },
              { label: "Imitation parquet réaliste", icon: "🪵" },
              { label: "Durée 15-25 ans", icon: "⏳" },
            ].map((el) => (
              <div key={el.label} className="bg-[#FAFAF8] rounded-lg p-4 border border-gray-100 text-center">
                <div className="text-2xl mb-2">{el.icon}</div>
                <div className="text-xs text-gray-600 font-light">{el.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Les types de sol vinyle */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Les types de sol vinyle : dalle, lame clipsable et rouleau
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Il existe trois grandes familles de revêtements vinyle, chacune avec ses avantages et ses usages spécifiques. Le choix dépend du support, de l&apos;usage de la pièce et du budget.
          </p>
          <div className="space-y-4">
            {[
              {
                type: "Dalle vinyle auto-adhésive (ou collée)",
                format: "Format 30×30 cm ou 45×45 cm",
                detail: "La dalle vinyle est la solution la plus économique. Le modèle auto-adhésif se pose directement sur un support lisse et propre, sans colle supplémentaire. Très facile à poser soi-même, elle est idéale pour les petites surfaces (entrée, salle de bain, WC). Son épaisseur est généralement faible (2 à 3 mm), ce qui la rend moins confortable sous le pied que le LVT. En revanche, son étanchéité collée est parfaite pour les pièces humides. Durée de vie : 10 à 15 ans avec un entretien adapté.",
                prix: "8 – 18 €/m² fourni posé",
              },
              {
                type: "Lame vinyle clipsable (LVT flottant)",
                format: "Format 15×60 cm à 20×120 cm",
                detail: "La lame vinyle clipsable est la solution la plus populaire en rénovation d'appartement. Elle s'assemble par clipsage (système click, identique au parquet flottant) sans colle ni fixation. Pose rapide, possible sur un support légèrement irrégulier. Le LVT clipsable d'entrée de gamme fait 3 à 4 mm, le premium 5 à 8 mm avec sous-couche intégrée. La largeur de la lame influe sur le rendu visuel : plus la lame est large, plus l'imitation parquet est convaincante.",
                prix: "20 – 50 €/m² fourni posé",
              },
              {
                type: "Vinyle en rouleau (lé continu)",
                format: "Largeurs 2, 3 ou 4 mètres",
                detail: "Le vinyle en rouleau est la solution la plus économique pour les grandes surfaces et les couloirs. Un seul lé couvre toute la largeur d'une pièce sans joint — atout majeur pour l'étanchéité en salle de bain. Il se pose collé (sur sol béton ou carrelage) ou tendu (fixé aux extrémités). Moins esthétique que le LVT, il est souvent utilisé dans les cuisines, les couloirs et les appartements locatifs d'entrée de gamme. Épaisseur : 1,5 à 4 mm.",
                prix: "12 – 30 €/m² fourni posé",
              },
            ].map((el) => (
              <div key={el.type} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-1 flex-wrap">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.type}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.prix}</div>
                </div>
                <div className="text-gray-500 text-xs mb-3">{el.format}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — LVT premium */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            LVT : le premium du vinyle pour les appartements parisiens
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le LVT (Luxury Vinyl Tile) est la catégorie haut de gamme du vinyle. Il se distingue par son épaisseur (4 à 8 mm), la qualité de son décor (impression haute définition imitant le bois ou la pierre naturelle), et sa couche d&apos;usure épaisse (0,3 à 0,55 mm) qui garantit une résistance aux rayures et aux passages intensifs. C&apos;est la solution privilégiée dans les appartements de standing et les logements locatifs premium à Paris.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              {
                feature: "Structure du LVT",
                detail: "Le LVT est composé de plusieurs couches : couche de support (PVC rigide ou composite), couche de décor (impression haute résolution), couche d'usure (transparente, de 0,3 à 0,55 mm) et, selon les modèles, une sous-couche acoustique intégrée. La rigidité du support PVC garantit une stabilité dimensionnelle que les anciens vinyles souples n'avaient pas.",
              },
              {
                feature: "Stabilité dimensionnelle",
                detail: "Contrairement au parquet flottant qui se dilate avec les variations de température et d'humidité, le LVT est quasi indifférent aux variations hygrométriques. Il ne gonfle pas, ne se rétracte pas. C'est un avantage décisif dans les appartements parisiens qui alternent entre périodes de chauffage intense en hiver (air très sec) et été chaud.",
              },
              {
                feature: "Imitation bois et pierre",
                detail: "Les techniques d'impression actuelles permettent une reproduction très réaliste des essences de bois (chêne, noyer, pin) et des pierres naturelles (travertin, ardoise, béton ciré). Certains modèles de LVT sont pratiquement indiscernables du parquet à la vue — seul le toucher (plus souple et légèrement plus chaud) trahit la nature du matériau.",
              },
              {
                feature: "Confort acoustique",
                detail: "Le LVT de 5 à 8 mm avec sous-couche intégrée offre une atténuation des bruits d'impact de 15 à 22 dB — bien supérieure au carrelage et comparable à un parquet flottant avec sous-couche. En copropriété parisienne, où les obligations acoustiques entre logements sont strictes, c'est un critère important.",
              },
            ].map((el) => (
              <div key={el.feature} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.feature}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Pose sur existant */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Poser du vinyle sur un revêtement existant à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;un des principaux atouts du vinyle en rénovation parisienne est sa capacité à être posé directement sur le support existant, évitant le coût et les nuisances d&apos;un dépose complet. Mais certaines conditions doivent être respectées pour garantir un résultat durable.
          </p>
          <div className="space-y-4 mb-8">
            {[
              {
                cas: "Pose sur carrelage existant",
                conditions: "Carrelage bien collé (aucun carrelage décollé ou creux), joints de carrelage peu profonds (moins de 2 mm), planéité correcte (moins de 3 mm sous la règle de 2 m)",
                action: "Vérification carrelage par carrelage au marteau. Ragréage des joints si nécessaire. Pose LVT clipsable directement ou pose dalle adhésive sur carrelage propre et dégraissé.",
              },
              {
                cas: "Pose sur parquet flottant existant",
                conditions: "Parquet stable, sans craquements importants, planéité correcte, absence de déformation (gondolement, soulèvement)",
                action: "LVT clipsable posé flottant au-dessus. Attention à la hauteur cumulée avec les plinthes et les huisseries — vérifier que les portes passent toujours.",
              },
              {
                cas: "Pose sur béton ou chape",
                conditions: "Chape sèche (humidité résiduelle < 2,5 %), propre, sans fissures actives, planéité correcte",
                action: "Ragréage autolissant si irrégularités. Application d'un primaire d'accrochage avant dalle adhésive. Attendre 28 jours minimum après une chape neuve.",
              },
              {
                cas: "Pose sur ancien vinyle en rouleau",
                conditions: "Ancien vinyle bien collé, lisse, sans cloquage",
                action: "Possible en pose flottante LVT clipsable si l'ancien vinyle est parfaitement lisse. Sinon, dépose de l'ancien vinyle recommandée pour garantir la planéité.",
              },
            ].map((el) => (
              <div key={el.cas} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.cas}</div>
                <div className="flex gap-2 mb-2">
                  <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">Conditions :</span>
                  <span className="text-xs text-gray-600 font-light leading-relaxed">{el.conditions}</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-xs text-[#B8960C] font-medium uppercase tracking-wide flex-shrink-0">Action :</span>
                  <span className="text-xs text-gray-600 font-light leading-relaxed">{el.action}</span>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Règles de pose à respecter
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Laisser acclimaté le vinyle 24 à 48h dans la pièce avant pose (à plat, emballages ouverts)",
                "Toujours laisser un joint de dilatation de 8 à 10 mm en périphérie (recouvert par les plinthes)",
                "Vérifier la planéité du support : écart max 3 mm sous la règle de 2 m",
                "Contrôler l'humidité du support béton avant pose (hygromètre électronique)",
                "Ragréer les joints de carrelage profonds avant pose de dalle ou LVT clipsable",
                "Alterner les rangées de lames (décalage minimum 30 cm) pour un rendu naturel",
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

      {/* Section 5 — Prix */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix pose sol vinyle à Paris 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Tarifs indicatifs pour un appartement parisien, main d&apos;œuvre et matériaux inclus. Les prix varient selon la qualité du produit, la surface, la préparation du support et l&apos;accès au chantier.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Type de vinyle</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Surface de référence</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget total</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "Dalle vinyle adhésive", surface: "30 m²", budget: "600 – 1 500 €", prix: "20 – 50 €/m²" },
                  { type: "Lame LVT clipsable (entrée de gamme 4 mm)", surface: "30 m²", budget: "900 – 2 100 €", prix: "30 – 70 €/m²" },
                  { type: "Lame LVT premium (6-8 mm + sous-couche)", surface: "30 m²", budget: "1 500 – 3 500 €", prix: "50 – 115 €/m²" },
                  { type: "Vinyle en rouleau collé", surface: "30 m²", budget: "500 – 1 200 €", prix: "16 – 40 €/m²" },
                  { type: "Ragréage du support (si nécessaire)", surface: "30 m²", budget: "400 – 900 €", prix: "13 – 30 €/m²" },
                ].map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium text-sm">{row.type}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light text-sm">{row.surface}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium text-sm">{row.budget}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light text-sm">{row.prix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
            <div className="font-medium text-[#1C1C1C] text-sm mb-2">Ce qui influence le prix à Paris</div>
            <ul className="space-y-1">
              {[
                "La qualité du produit : un LVT de 0,55 mm de couche d'usure coûte 2 à 3 fois plus qu'un LVT à 0,3 mm, mais dure 2 à 3 fois plus longtemps",
                "La préparation du support : un ragréage complet ajoute 400 à 900 € pour 30 m²",
                "L'accès au chantier : immeuble sans ascenseur, étages élevés, difficulté de stationnement pour le matériel",
                "La dépose de l'ancien revêtement si nécessaire : 5 à 15 €/m² supplémentaires",
                "Les finitions : plinthes assorties, seuils de porte, joints de transition entre pièces",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                  <span className="text-[#B8960C] flex-shrink-0 mt-1">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 6 — Entretien et durée de vie */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Entretien et durée de vie du sol vinyle à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le sol vinyle est l&apos;un des revêtements les plus faciles à entretenir. Sa surface lisse ne retient pas les poussières et résiste aux taches courantes. Quelques précautions prolongent significativement sa durée de vie.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              {
                titre: "Nettoyage quotidien",
                detail: "Aspirateur (brosse douce) ou balai microfibre. Le vinyle ne supporte pas les abrasifs ni les produits acides (vinaigre blanc concentré). Éviter les lavettes trop mouillées qui peuvent s'infiltrer dans les joints d'une pose clipsable.",
              },
              {
                titre: "Nettoyage en profondeur",
                detail: "Serpillière légèrement humide avec un produit neutre dédié au vinyle. Éviter le nettoyeur vapeur sur les lames clipsables : la chaleur et la pression peuvent déformer les clips et soulever les lames. Le nettoyeur vapeur est déconseillé même sur les produits estampillés 'waterproof'.",
              },
              {
                titre: "Durée de vie réelle",
                detail: "Un LVT standard (0,3 mm d'usure) dure 12 à 18 ans en usage résidentiel modéré. Un LVT premium (0,55 mm) dure 20 à 25 ans. La dalle adhésive d'entrée de gamme : 8 à 12 ans. En logement locatif à fort passage, compter un coefficient de réduction de 20 à 30 % sur ces estimations.",
              },
              {
                titre: "Remplacement d'une lame endommagée",
                detail: "L'un des grands avantages du vinyle clipsable : une lame rayée ou tachée peut être remplacée indépendamment, sans retoucher tout le sol. Il suffit de démonter les lames depuis le bord de la pièce jusqu'à la lame endommagée, de la changer, puis de remonter. Conserver toujours quelques lames de réserve lors de la pose initiale.",
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
              { href: '/blog/sol-stratifie-paris', title: "Sol stratifié Paris" },
              { href: '/blog/pose-parquet-paris', title: "Pose parquet Paris" },
              { href: '/blog/revetement-sol-appartement-paris', title: "Revêtement sol appartement Paris" },
              { href: '/blog/parquet-flottant-vs-colle-paris', title: "Parquet flottant vs collé Paris" },
              { href: '/blog/carrelage-appartement-paris', title: "Carrelage appartement Paris" },
              { href: '/blog/renovation-salle-de-bain-paris', title: "Rénovation salle de bain Paris" },
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
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Nos zones d&apos;intervention</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-9e', label: 'Paris 9e' },
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-paris-15e', label: 'Paris 15e' },
              { href: '/renovation-levallois-perret', label: 'Levallois' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
              { href: '/renovation-vincennes', label: 'Vincennes' },
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
          Pose de sol vinyle à Paris : devis gratuit sous 48h
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          LVT, dalle adhésive, vinyle en rouleau. Pose sur support existant. Devis détaillé sous 48h, intervention rapide sur Paris.
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
