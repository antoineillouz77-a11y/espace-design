import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: "Peinture Intérieure Paris", item: 'https://espacedesignparis.fr/blog/peinture-interieure-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Peinture Intérieure Paris : types, finitions & prix artisan 2025",
  description: "Guide complet peinture intérieure à Paris : types de peinture (mat, satin, brillant), marques, préparation des murs, prix au m² artisan, finitions décoratives 2025.",
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/peinture-interieure-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix de la peinture intérieure posée par un artisan à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix d'une peinture intérieure à Paris posée par un artisan professionnel varie de 15 à 35 €/m² (surface peinte) selon la préparation requise et le niveau de finition. Peinture standard 2 couches sur murs propres : 15-20 €/m². Peinture avec enduit de rebouchage et ponçage léger : 20-28 €/m². Peinture complète avec enduit de lissage intégral (pour les murs très abimés) : 28-40 €/m². Pour un appartement de 80 m² avec 250 m² de surfaces peintes, comptez 4 000 à 8 000 € de main d'oeuvre et matériaux.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelle différence entre peinture mate, satinée et brillante ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La peinture mate (réflexion lumineuse inférieure à 5 %) absorbe la lumière et masque les imperfections des murs : idéale pour les chambres et les pièces à vivre. La peinture satinée (réflexion 5-35 %) est lavable et résistante à l'humidité : recommandée pour cuisine, salle de bain et couloir. La peinture brillante (réflexion supérieure à 35 %) est très dure et lavable, utilisée principalement sur les boiseries, portes et radiateurs. Dans les appartements parisiens, la combinaison mate (murs) + satinée (plafond) + brillante (boiseries) est la plus courante.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment bien préparer les murs avant de peindre à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La préparation est la clé d'une peinture durable. Dans un appartement parisien ancien, les murs sont souvent en plâtre avec des fissures et des traces d'humidité. Les étapes indispensables : 1) Traitement des fissures (enduit de rebouchage, filet armé si fissure large), 2) Ponçage des irrégularités, 3) Application d'une couche d'impression sur les murs poreux ou tachés, 4) Enduit de lissage si les murs sont très irréguliers. Négliger la préparation entraîne une mauvaise adhérence et un rendu final décevant, même avec une peinture de qualité.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelles sont les meilleures marques de peinture pour un appartement parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour une peinture intérieure de qualité à Paris, les marques recommandées par les artisans professionnels sont : Tollens (gamme Intégrale, disponible en négoce professionnel), Farrow & Ball pour les teintes recherchées (coût élevé : 90-120 €/litre), Little Greene pour les couleurs historiques et les peintures à l'eau hautes performances, Dulux Valentine (gamme Architecture) pour un bon rapport qualité/prix, et Ressource pour des peintures à la chaux et effets décoratifs. Les peintures vendues en grandes surfaces bricolage (Ambiance Bâti, V33) sont d'un niveau inférieur en termes de résistance et de couvrance.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Peinture Intérieure Paris : types, finitions & prix artisan 2025",
  description: "Guide complet peinture intérieure à Paris : types de peinture (mat, satin, brillant), marques, préparation des murs, prix au m² artisan, finitions décoratives 2025.",
  keywords: [
    "peinture intérieure paris",
    "prix peinture appartement paris",
    "artisan peintre paris",
    "peinture mat satin brillant",
    "préparation murs paris",
    "devis peinture paris",
  ],
}

export default function ArticlePeintureInterieureParis() {
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
            Peinture
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Peinture Intérieure à Paris : guide complet artisan 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            La peinture intérieure est l&apos;un des travaux les plus fréquents à Paris, mais aussi l&apos;un des plus sous-estimés dans sa complexité. Choix de la finition (mat, satin, brillant), préparation des murs, sélection des marques, prix au m² artisan : ce guide vous donne toutes les clés pour réussir votre chantier peinture à Paris en 2025.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-[#1C1C1C] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { val: '15 €/m²', label: 'Prix mini peinture standard (2 couches)' },
              { val: '25 €/m²', label: 'Prix moyen avec préparation murs' },
              { val: '45 €/m²', label: 'Prix max avec enduit lissage intégral' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-xl sm:text-2xl font-semibold text-[#D4AF37] mb-1">{s.val}</div>
                <div className="text-gray-500 text-[10px] uppercase tracking-wider font-light">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1 — Types de peinture */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Types de peinture intérieure : mat, satin, brillant — lequel choisir ?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
            Le choix de la finition de peinture est déterminant pour l&apos;esthétique et la durabilité du résultat. Chaque finition a ses propriétés et ses usages recommandés dans un appartement parisien.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La brillance d&apos;une peinture est mesurée par son niveau de réflexion de la lumière. Plus la peinture est brillante, plus elle est résistante et lavable, mais plus elle révèle les imperfections du mur. Dans les appartements parisiens anciens aux murs souvent irréguliers, une finition mate ou velours est généralement préférée pour les surfaces importantes.
          </p>
          <div className="space-y-4">
            {[
              {
                enjeu: "Peinture mate (brillance < 5 %)",
                detail: "La finition mate absorbe la lumière et crée un rendu velouté très contemporain. Elle masque les imperfections des murs (irrégularités, fissures rebouchées, traces de salpêtre traité). Recommandée pour : chambres, séjour, salon, couloir dans les pièces sèches. Moins lavable que les finitions brillantes, elle ne convient pas aux pièces humides. Les peintures mates de qualité (Farrow & Ball, Tollens Intégrale) offrent une bonne résistance aux frottements légers.",
              },
              {
                enjeu: "Peinture velours / satinée (brillance 5-35 %)",
                detail: "La finition satinée est le choix polyvalent par excellence. Elle allie un rendu esthétique proche du mat avec une résistance à l'humidité et à l'entretien supérieure. Idéale pour : cuisine, salle de bain (si ventilation suffisante), couloir, entrée. Elle se nettoie à l'éponge humide sans dégrader la surface. Dans les appartements parisiens modernes, le satiné est souvent choisi pour toutes les pièces, les boiseries incluses.",
              },
              {
                enjeu: "Peinture brillante / laquée (brillance > 35 %)",
                detail: "La finition brillante est réservée aux boiseries, portes, fenêtres, radiateurs et plinthes. Elle crée un effet « laqué » très chic sur les boiseries haussmanniennes (chambranles, portes à panneaux). Elle révèle cependant toutes les imperfections : un lissage soigneux des boiseries avant application est indispensable. Les peintures alkydes (glycérophtaliques) sont plus durables sur les boiseries que les acryliques, mais dégagent plus de solvants.",
              },
              {
                enjeu: "Peinture à la chaux (finition minérale)",
                detail: "La peinture à la chaux est un revêtement naturel qui respire et régule l'humidité ambiante. Très prisée dans les appartements haussmanniens pour son aspect authentique (légères variations de teinte, effet naturel), elle est recommandée sur les murs en plâtre ancien. Son application est plus technique (une couche de lait de chaux puis une ou deux couches de finition). Budget : 25 à 50 €/m² posé. Marques : Tollens Chaux, Ressource, Lena Designs.",
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

      {/* Section 2 — Préparation des murs */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Préparation des murs : l&apos;étape clé avant de peindre
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Dans les appartements parisiens, les murs sont souvent en plâtre ancien (avant 1970) ou en ciment, avec des années de couches de peinture superposées. Une préparation rigoureuse conditionne 80 % du résultat final.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: "Dépose du papier peint",
                cout: "3 – 8 €/m²",
                detail: "Le papier peint ancien (parfois en plusieurs couches) doit être intégralement décollé avant peinture. Imbibition à la vapeur ou à l'eau savonneuse, dépose manuelle, nettoyage des colles résiduelles. Dans certains appartements, le plâtre sous le papier peint est très fragile et peut exiger une réparation complète.",
              },
              {
                titre: "Rebouchage des fissures",
                cout: "Inclus dans la préparation",
                detail: "Fissures fines (< 1 mm) : rebouchage à l'enduit de finition. Fissures larges (1-5 mm) : saignée, pose d'un filet armé en fibre de verre, enduitage. Fissures structurelles (> 5 mm) : diagnostic obligatoire avant toute intervention. Le rebouchage est facteur essentiel de longévité de la peinture.",
              },
              {
                titre: "Enduit de lissage",
                cout: "10 – 20 €/m² supplémentaires",
                detail: "Pour les murs très irréguliers ou les plâtres anciens abimés, un enduit de lissage intégral (projection ou talochage) est nécessaire avant peinture. Ce travail, souvent réalisé par un plâtrier, peut doubler le coût de la peinture mais garantit un résultat parfaitement plat.",
              },
              {
                titre: "Impression et primaire",
                cout: "3 – 6 €/m²",
                detail: "Une couche d'impression est indispensable sur les murs neufs ou très poreux (plâtre neuf, enduit de lissage), sur les taches (humidité, salpêtre, nicotine) ou lors d'un changement radical de couleur (foncée vers claire). L'impression améliore l'adhérence et réduit la consommation de peinture finale.",
              },
              {
                titre: "Traitement humidité et salpêtre",
                cout: "8 – 15 €/m²",
                detail: "Dans les appartements parisiens du rez-de-chaussée ou en sous-sol, des remontées capillaires peuvent produire du salpêtre et des auréoles d'humidité. Traitement : peinture anti-humidité après séchage, anti-salpêtre, puis impression adaptée. Sans traitement de la cause, le problème réapparaît en quelques mois.",
              },
              {
                titre: "Protection et mise en place chantier",
                cout: "Inclus",
                detail: "Protection des sols (film plastique ou papier kraft), des portes et fenêtres (scotch de masquage professionnel), du mobilier si non évacué. Un artisan professionnel inclut systématiquement cette étape dans son devis. Les bâches et protections représentent 2 à 4 % du coût total.",
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

      {/* Section 3 — Marques et finitions */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Meilleures marques de peinture pour appartement parisien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le choix de la marque de peinture influence directement la qualité du rendu et la durabilité dans le temps. Voici le comparatif des marques utilisées par les artisans parisiens professionnels.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: "Tollens — La référence des professionnels",
                prix: "30 – 50 €/litre",
                detail: "Marque professionnelle française distribuée en négoce (pas en grande surface), Tollens est la référence des peintres parisiens pour sa couvrance exceptionnelle (souvent 1 seule couche suffisante avec le fond Intégrale) et la richesse de ses coloris (plus de 1 400 teintes). La gamme Intégrale est idéale pour les appartements haussmanniens. Disponible uniquement via artisan ou négoce professionnel.",
              },
              {
                type: "Farrow & Ball — La marque tendance",
                prix: "90 – 120 €/litre",
                detail: "La marque anglaise est devenue incontournable dans les rénovations parisiennes de standing. Ses pigments naturels produisent des teintes profondes et subtiles que les peintures industrielles ne peuvent pas reproduire. L'esthétique est incomparable mais le prix est élevé. Utilisée principalement pour les pièces de réception (salon, chambre principale) dans les appartements haussmanniens des beaux quartiers.",
              },
              {
                type: "Little Greene — Alternative premium à la pigmentation naturelle",
                prix: "50 – 80 €/litre",
                detail: "Marque anglaise comparable à Farrow & Ball avec une gamme inspirée des peintures historiques anglaises et françaises. Ses teintes chaudes et terreuses s'accordent parfaitement avec les matériaux naturels (parquet chêne, pierre de Bourgogne, stuc). Légèrement moins chère que F&B pour un résultat similaire.",
              },
              {
                type: "Ressource — Le choix déco haut de gamme français",
                prix: "45 – 70 €/litre",
                detail: "Marque française premium dont les peintures à la chaux, enduits décoratifs et faux-finis sont appréciés pour leur caractère artisanal. Idéale pour les appartements qui souhaitent un rendu plus naturel et moins uniforme que les peintures industrielles. Gamme de chaux aérienne pour murs anciens, enduit à la chaux pour les effets décoratifs.",
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

      {/* Section 4 — Tableau des prix */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Tableau des prix peinture intérieure Paris 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Prix artisan parisien, fourniture et pose incluses (2 couches de peinture + préparation standard).
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Prestation</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix bas</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix moyen</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix haut</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { traitement: "Peinture murs (2 couches, prep légère)", bas: "12 – 18 €/m²", mid: "18 – 25 €/m²", haut: "25 – 35 €/m²" },
                  { traitement: "Peinture plafond", bas: "15 – 20 €/m²", mid: "20 – 28 €/m²", haut: "28 – 40 €/m²" },
                  { traitement: "Peinture boiseries (portes, plinthes)", bas: "80 – 120 €/ml", mid: "120 – 200 €/ml", haut: "200 – 350 €/ml" },
                  { traitement: "Enduit de lissage intégral", bas: "12 – 18 €/m²", mid: "18 – 28 €/m²", haut: "28 – 45 €/m²" },
                  { traitement: "Dépose papier peint + peinture", bas: "22 – 30 €/m²", mid: "30 – 42 €/m²", haut: "42 – 60 €/m²" },
                  { traitement: "Appartement complet 50 m² (250 m² peints)", bas: "3 000 – 4 500 €", mid: "4 500 – 7 000 €", haut: "7 000 – 12 000 €" },
                  { traitement: "Appartement complet 80 m² (400 m² peints)", bas: "5 000 – 7 500 €", mid: "7 500 – 11 000 €", haut: "11 000 – 18 000 €" },
                ].map((row, i) => (
                  <tr key={row.traitement} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium text-sm">{row.traitement}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light text-sm">{row.bas}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium text-sm">{row.mid}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light text-sm">{row.haut}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              6 conseils pour réussir sa peinture intérieure à Paris
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Ne jamais négliger la préparation des murs : elle conditionne 80 % du résultat final et la durée de vie de la peinture",
                "Opter pour une marque professionnelle (Tollens, Farrow & Ball) : une couche de plus couvre que deux couches de peinture grand public",
                "Combiner finition mate (murs) + satinée (plafond) + brillante (boiseries) pour un résultat professionnel équilibré",
                "Dans les appartements anciens, toujours tester l'humidité des murs avant application : un mur humide ne retient pas la peinture",
                "Peindre les plafonds avant les murs et les murs avant les plinthes : l'ordre évite les reprises et raccords",
                "Demander à l'artisan d'utiliser un blanc légèrement chaud (teinte RAL 9010 ou 9001) plutôt que blanc pur pour les plafonds parisiens aux moulures",
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
              { href: '/blog/peinture-appartement-paris', title: 'Peinture appartement Paris' },
              { href: '/blog/choisir-peinture-appartement-paris', title: 'Choisir sa peinture à Paris' },
              { href: '/blog/peinture-decorative-paris', title: 'Peinture décorative Paris' },
              { href: '/blog/peinture-cuisine-paris', title: 'Peinture cuisine Paris' },
              { href: '/blog/peinture-plafond-paris', title: 'Peinture plafond Paris' },
              { href: '/blog/peinture-beton-cire-paris', title: 'Peinture béton ciré Paris' },
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
          Devis peinture intérieure à Paris
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Peintre artisan professionnel à Paris. Devis gratuit en 48h, marques professionnelles, finitions soignées.
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
