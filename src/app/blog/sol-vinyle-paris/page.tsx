import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Sol Vinyle Paris', item: 'https://espacedesignparis.fr/blog/sol-vinyle-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Sol Vinyle Paris : pose, prix & conseils — artisan 2025',
  description: "Choisir et poser un sol vinyle à Paris : LVT, dalle, lame, prix au m², pose collée ou flottante, entretien. Guide artisan 2025.",
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
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
      name: 'Quel sol vinyle choisir pour un appartement parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour un appartement parisien en location ou à usage intensif, le LVT (Luxury Vinyl Tile) en lame rigide à clipser est la solution la plus recommandée. Sa couche d'usure épaisse (0,3 à 0,55 mm) résiste aux rayures et aux talons. La dalle vinyle collée est préférable pour les grandes surfaces sans dilatation. Pour une salle de bain ou une cuisine, le vinyle est idéal car totalement imperméable — contrairement au parquet ou au stratifié. Choisissez une épaisseur minimale de 5 mm pour un bon confort acoustique et une bonne planéité sur un sol légèrement irrégulier.",
      },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte la pose de sol vinyle à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix d'un sol vinyle posé à Paris varie selon la gamme et le mode de pose. Comptez 25 à 45 euros par m² fourniture et pose pour un vinyle lame à clipser d'entrée de gamme, 40 à 70 euros par m² pour un LVT haut de gamme avec couche d'usure 0,55 mm. La pose collée (dalle ou lame) est légèrement plus chère en main-d'oeuvre : 30 à 55 euros par m². La préparation du support (ragréage) est facturée en supplément : 15 à 30 euros par m² selon l'état du sol existant.",
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on poser du vinyle sur carrelage existant ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, dans la plupart des cas il est possible de poser du vinyle directement sur un carrelage existant, à condition que celui-ci soit en bon état — pas de carreaux décollés, pas de joints creux, surface plane. Avantage : gain de temps et économie sur la dépose. Le vinyle flottant à clipser peut être posé directement si les joints ne sont pas trop profonds (moins de 2 mm). Pour les joints marqués, un ragréage fin ou une feuille de désolidarisation est nécessaire avant la pose. La hauteur de sol augmente de 4 à 8 mm selon l'épaisseur du vinyle choisi.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelle épaisseur de sol vinyle choisir ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'épaisseur totale du vinyle influence le confort acoustique, la résistance aux irrégularités du sol et la durabilité. Pour une chambre ou un bureau : 4 mm minimum. Pour un séjour, une cuisine ou un couloir à trafic intensif : 5 à 6 mm. La couche d'usure (ou couche de protection) est distincte de l'épaisseur totale : 0,2 mm pour un usage léger, 0,3 mm pour un usage résidentiel standard, 0,5 mm et plus pour un usage intensif ou locatif. Dans un appartement parisien en copropriété, vérifiez si le règlement impose une sous-couche acoustique séparée — certains vinyles intègrent une mousse acoustique, d'autres non.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Sol Vinyle Paris : pose, prix & conseils — artisan 2025 | Espace Design',
  description: "Choisir et poser un sol vinyle à Paris : LVT, dalle, lame, prix au m², pose collée ou flottante, entretien. Guide artisan 2025.",
  keywords: [
    'sol vinyle Paris',
    'pose sol vinyle Paris',
    'LVT Paris',
    'vinyle lame Paris',
    'prix sol vinyle Paris',
    'artisan sol vinyle Paris',
    'dalle vinyle Paris',
  ],
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
            Revêtement de sol
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Sol Vinyle Paris : choisir, poser et entretenir
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le sol vinyle a considérablement évolué ces dernières années. Loin des anciens vinyles en rouleau des années 1980, les LVT (Luxury Vinyl Tile) actuels imitent à s&apos;y méprendre le bois, la pierre ou le béton — avec une imperméabilité totale et un entretien minimal. Guide complet pour choisir et poser un sol vinyle dans un appartement parisien en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Types de sol vinyle */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les types de sol vinyle : LVT, dalle et lame
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Le marché du sol vinyle a explosé ces dix ans avec l&apos;apparition des LVT (Luxury Vinyl Tile), des vinyles rigides à couche d&apos;usure épaisse. Il existe trois grandes familles, chacune adaptée à des usages et des configurations différents.
            </p>
            <div className="space-y-4">
              {[
                {
                  type: 'LVT lame rigide à clipser (SPC ou WPC)',
                  detail: "Le LVT rigide (SPC : Stone Plastic Composite ou WPC : Wood Plastic Composite) est la référence actuelle pour les appartements parisiens. Un noyau rigide en PVC mélangé à de la pierre calcaire (SPC) ou de la mousse (WPC) lui confère une excellente planéité et une grande stabilité dimensionnelle. Pose flottante à clipser sans colle, sur quasiment tous les supports. Imperméabilité totale, couche d'usure jusqu'à 0,55 mm. Idéal pour les cuisines, salles de bain et pièces à vivre.",
                  usage: 'Usage universel',
                },
                {
                  type: 'Dalle vinyle souple collée',
                  detail: "La dalle vinyle souple (généralement 30×30 cm ou 45×45 cm) se pose collée sur le support. Plus fine que le LVT rigide (1,5 à 3 mm), elle épouse parfaitement les irrégularités légères du sol. Moins résistante aux chocs ponctuels (pied de chaise, talon) que le LVT rigide, mais moins chère à l'achat. Adaptée aux grandes surfaces planes (loft, studio, couloirs larges). Le remplacement d'une dalle abîmée isolée est facile.",
                  usage: 'Grandes surfaces planes',
                },
                {
                  type: 'Lame vinyle souple à clipser ou collée',
                  detail: "La lame vinyle souple (format bois, environ 15×90 cm) existe en version collée ou clipsée. Plus flexible que le LVT rigide, elle s'adapte mieux aux sols présentant de légères irrégularités. Sa couche d'usure (0,2 à 0,3 mm) est généralement moins épaisse que le LVT. Moins stable dimensionnellement sur de grandes surfaces (dilatation en cas de chaleur). Bon rapport qualité-prix pour les chambres et pièces peu exposées.",
                  usage: 'Chambres, budget serré',
                },
                {
                  type: 'Vinyle en rouleau',
                  detail: "Le sol vinyle en rouleau (ou lino vinyle, à ne pas confondre avec le linoléum naturel) est posé collé sur toute la surface. Absence de joints — avantage majeur pour l'hygiène (cuisine, salle de bain, cuisine collective). Nécessite un support parfaitement plan. Gamme de prix large, de l'entrée de gamme à des produits haut de gamme avec impression haute résolution. Durée de vie inférieure aux LVT rigides si le support n'est pas parfait.",
                  usage: 'Hygiène, cuisine, SdB',
                },
              ].map((el) => (
                <div key={el.type} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="flex items-start justify-between gap-2 mb-2 flex-wrap">
                    <div className="font-medium text-[#1C1C1C] text-sm">{el.type}</div>
                    <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.usage}</div>
                  </div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Avantages */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Avantages du sol vinyle dans un appartement parisien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le sol vinyle s&apos;est imposé comme une alternative sérieuse au parquet et au carrelage dans les appartements parisiens, notamment pour la rénovation et les investissements locatifs. Voici ses principaux atouts.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              {
                avantage: 'Imperméabilité totale',
                detail: "Contrairement au parquet et au stratifié, le vinyle est 100 % imperméable — il peut être posé en salle de bain, cuisine et pièces humides sans risque de gonflement. Les LVT rigides ne craignent pas les projections d'eau ni les robinets qui fuient. Avantage considérable dans les appartements parisiens anciens où les remontées d'humidité sont fréquentes.",
              },
              {
                avantage: 'Confort acoustique',
                detail: "Les LVT rigides épais (5 à 8 mm) avec couche de mousse intégrée offrent un bon confort acoustique aux bruits d'impact — crucial en copropriété parisienne. Certains produits haut de gamme atteignent 19 à 22 dB de réduction des bruits d'impact (delta Lw), ce qui peut suffire à satisfaire le règlement de copropriété sans sous-couche supplémentaire.",
              },
              {
                avantage: "Facilité d'entretien",
                detail: "L'entretien du vinyle est minimal : balai ou aspirateur quotidien, serpillière légèrement humide hebdomadaire. Pas de cire, pas de vitrifiant, pas de ponçage tous les 5 ans. La couche de protection polyuréthane ne nécessite pas de traitement particulier. Les taches (café, vin, graisses) partent facilement à l'eau savonneuse. Idéal pour les appartements locatifs.",
              },
              {
                avantage: 'Pose sur support existant',
                detail: "L'un des grands avantages du vinyle pour la rénovation d'appartements parisiens : il peut être posé directement sur un carrelage existant en bon état, sur un parquet abîmé après ragréage léger, ou sur un béton brut. Pas besoin de déposer le sol existant dans la plupart des cas — gain de temps, d'argent et de nuisances de chantier.",
              },
              {
                avantage: 'Résistance aux rayures',
                detail: "La couche d'usure polyuréthane des LVT résiste mieux aux rayures quotidiennes (pattes d'animaux, pieds de chaises) que la plupart des parquets huilés. Un LVT avec couche d'usure 0,5 mm supporte sans marque un usage intensif pendant 15 à 25 ans. Recommandé pour les appartements avec enfants, animaux de compagnie ou usage locatif intensif.",
              },
              {
                avantage: 'Large gamme de décors',
                detail: "Les technologies d'impression haute résolution permettent aux LVT d'imiter de manière très convaincante le bois (chêne, noyer, pin), la pierre (ardoise, travertin, marbre) ou le béton ciré. Des textures en relief (grain du bois, irrégularités de la pierre) renforcent encore le réalisme. Le rendu visuel est souvent indiscernable du matériau naturel imité.",
              },
            ].map((el) => (
              <div key={el.avantage} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.avantage}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Prix */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix sol vinyle Paris 2025 : fourniture et pose
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Tarifs indicatifs pour un appartement parisien, sur support sain (carrelage existant ou béton plan). La préparation du support (ragréage, dépose, ponçage) est facturée en supplément selon l&apos;état du sol.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Produit</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Gamme</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Fourniture</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Pose artisan</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    produit: 'LVT rigide SPC (4 mm, couche usure 0,3 mm)',
                    gamme: 'Entrée de gamme',
                    fourniture: '15 – 25 €/m²',
                    pose: '18 – 25 €/m²',
                  },
                  {
                    produit: 'LVT rigide SPC (5 mm, couche usure 0,5 mm)',
                    gamme: 'Standard',
                    fourniture: '25 – 40 €/m²',
                    pose: '20 – 28 €/m²',
                  },
                  {
                    produit: 'LVT haut de gamme (6-8 mm, couche usure 0,55 mm)',
                    gamme: 'Premium',
                    fourniture: '40 – 65 €/m²',
                    pose: '22 – 30 €/m²',
                  },
                  {
                    produit: 'Dalle vinyle souple collée',
                    gamme: 'Standard',
                    fourniture: '8 – 18 €/m²',
                    pose: '20 – 30 €/m²',
                  },
                  {
                    produit: 'Vinyle rouleau collé',
                    gamme: 'Économique',
                    fourniture: '10 – 25 €/m²',
                    pose: '20 – 28 €/m²',
                  },
                  {
                    produit: 'Ragréage autonivelant (support irrégulier)',
                    gamme: 'Préparation',
                    fourniture: '—',
                    pose: '15 – 30 €/m²',
                  },
                ].map((row, i) => (
                  <tr key={row.produit} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium text-sm">{row.produit}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light text-sm">{row.gamme}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium text-sm">{row.fourniture}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light text-sm">{row.pose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 4 — Techniques de pose */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Techniques de pose : collé, flottant ou à clipser
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le mode de pose conditionne la durabilité, le comportement acoustique et la facilité de remplacement du sol. Voici les trois techniques et leurs conditions d&apos;utilisation dans un appartement parisien.
          </p>
          <div className="space-y-4 mb-8">
            {[
              {
                methode: 'Pose flottante à clipser (LVT rigide)',
                pour: 'Rénovation rapide, pose sur carrelage existant',
                detail: "Les lames s'assemblent entre elles par un système de clic sans colle sur le support. Le sol repose librement sur le support et peut se dilater. Pose rapide (50 à 60 m² par jour pour un artisan). Idéale pour les rénovations où l'on souhaite conserver le sol existant en dessous. Exige un sol support plan (tolérance : 3 mm sous la règle de 2 m). Les variations thermiques peuvent provoquer de légers craquements si les joints de dilatation en périphérie ne sont pas respectés.",
              },
              {
                methode: 'Pose collée (dalle ou lame, colle adaptée)',
                pour: 'Grande surface, zones humides, plancher chauffant',
                detail: "Application d'une colle acrylique ou polyuréthane sur le support avant la pose des lames ou dalles. Avantage : aucun mouvement du sol, pas de craquement, meilleure isolation acoustique. Obligatoire sur plancher chauffant (le LVT flottant ne convient pas en général à cause des variations de température). Inconvénient : dépose plus difficile et risque d'endommager le support lors du remplacement.",
              },
              {
                methode: "Pose semi-collée (périphérie collée, centre flottant)",
                pour: "Pièces de taille moyenne, compromis stabilité/flexibilité",
                detail: "La colle n'est appliquée qu'en périphérie de la pièce et aux joints de dilatation. Le centre du sol reste flottant. Technique utilisée pour les vinyles souples en lame qui ont une tendance à se soulever sur les grands espaces. Moins courante pour les LVT rigides qui ont une stabilité dimensionnelle suffisante pour une pose 100 % flottante.",
              },
            ].map((el) => (
              <div key={el.methode} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-1">{el.methode}</div>
                <div className="text-[#B8960C] text-xs font-medium mb-3">{el.pour}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Points de vigilance avant la pose
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Vérifier la planéité du support : tolérance maximale 3 mm sous la règle de 2 m pour une pose flottante",
                "Laisser le vinyle s'acclimater 48h à température ambiante (18 à 22°C) avant la pose",
                "Prévoir des joints de dilatation en périphérie (5 à 10 mm) et couvrir avec des plinthes ou baguettes",
                "Vérifier le règlement de copropriété : sous-couche acoustique souvent obligatoire",
                "Ne pas poser sur un support humide (teneur en humidité du béton < 2,5 %)",
                "Prévoir 10 % de chutes pour les coupes, les angles et les assemblages complexes",
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

      {/* Section 5 — Entretien */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Entretien et longévité d&apos;un sol vinyle à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
            Le sol vinyle est l&apos;un des revêtements les plus faciles à entretenir — un atout décisif pour les propriétaires bailleurs parisiens. Voici les bonnes pratiques pour maximiser la durée de vie de votre sol.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                frequence: 'Entretien quotidien',
                detail: "Balai microfibre ou aspirateur sans brosse rotative dure. Ramasse les poussières et grains de sable qui rayeraient la surface si traînés sous les semelles.",
              },
              {
                frequence: 'Entretien hebdomadaire',
                detail: "Serpillière microfibre légèrement humidifiée avec eau tiède ou nettoyant pH neutre spécial vinyle. Ne jamais utiliser de détergent agressif, d'eau de Javel ou de produits à base d'acétone qui attaquent la couche de protection.",
              },
              {
                frequence: 'Protection des meubles',
                detail: "Poser des feutres protecteurs sous les pieds des meubles lourds. Utiliser des roulettes en caoutchouc souple sous les chaises de bureau. Les pieds métalliques ou en plastique dur rayent la couche d'usure même épaisse.",
              },
              {
                frequence: 'Protection de la chaleur',
                detail: "Le vinyle est sensible à la chaleur directe : ne pas poser de radiateur électrique portatif directement sur le sol vinyle, éviter l'exposition directe et prolongée au soleil par une grande baie sans protection (stores, rideaux). La dilatation thermique est maîtrisée si les joints de dilatation ont été respectés à la pose.",
              },
            ].map((el) => (
              <div key={el.frequence} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.frequence}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
          <div className="bg-[#1C1C1C] rounded-lg p-5 text-white">
            <div className="font-medium text-[#D4AF37] text-sm mb-2">Durée de vie d&apos;un sol vinyle</div>
            <p className="text-gray-300 text-sm font-light leading-relaxed">
              Un LVT rigide haut de gamme (couche d&apos;usure 0,55 mm) bien entretenu dure 20 à 30 ans dans un appartement résidentiel. Un vinyle souple d&apos;entrée de gamme (couche 0,2 mm) aura une durée de vie de 8 à 12 ans en usage standard. Dans un appartement locatif parisien à fort turn-over, investir dans un LVT 0,5 mm minimum est rentable sur la durée.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-6 text-center">Questions fréquentes</p>
          <div className="space-y-6">
            {schemaFaq.mainEntity.map((q) => (
              <div key={q.name} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-3">{q.name}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{q.acceptedAnswer.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides connexes */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Voir aussi</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/sol-stratifie-paris', title: 'Sol stratifié Paris' },
              { href: '/blog/parquet-flottant-vs-colle-paris', title: 'Parquet flottant vs collé Paris' },
              { href: '/blog/pose-parquet-paris', title: 'Pose parquet Paris' },
              { href: '/blog/revetement-sol-appartement-paris', title: 'Revêtement sol appartement Paris' },
              { href: '/blog/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain Paris' },
              { href: '/contact', title: 'Demander un devis gratuit' },
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
      <section className="py-10 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Nos zones d&apos;intervention</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { href: '/renovation-appartement-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-appartement-paris-9e', label: 'Paris 9e' },
              { href: '/renovation-appartement-paris-10e', label: 'Paris 10e' },
              { href: '/renovation-appartement-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-appartement-paris-15e', label: 'Paris 15e' },
              { href: '/renovation-appartement-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-appartement-paris-17e', label: 'Paris 17e' },
              { href: '/renovation-appartement-paris-18e', label: 'Paris 18e' },
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
          Pose de sol vinyle à Paris : devis gratuit
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Fourniture et pose de LVT, dalle ou lame vinyle par artisan qualifié. Devis détaillé sous 48h.
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
