import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Baignoire Ilot Paris', item: 'https://espacedesignparis.fr/blog/baignoire-ilot-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Baignoire Ilot Paris : installation, prix & styles — guide artisan 2025",
  description: "Installer une baignoire ilot dans un appartement parisien : styles, matériaux, contraintes techniques et prix 2025. Guide complet par Espace Design.",
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/baignoire-ilot-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quelle taille minimum pour installer une baignoire ilot dans un appartement parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Une baignoire ilot nécessite un espace libre d'au moins 60 cm tout autour pour circuler confortablement. En pratique, dans un appartement parisien, il faut disposer d'une salle de bain d'au moins 8 m² pour accueillir une baignoire ilot de taille standard (170 x 80 cm) avec un dégagement suffisant. Les baignoires compactes (140 x 70 cm) peuvent s'installer dans 6 m², mais le rendu sera serré. Comptez toujours 60 cm de passage libre sur les quatre côtés pour un usage confortable et un entretien facilité.",
      },
    },
    {
      '@type': 'Question',
      name: "Combien coûte l'installation d'une baignoire ilot à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le budget total pour une baignoire ilot installée à Paris varie entre 3 000 et 12 000 euros selon le matériau et la robinetterie. Une baignoire acrylique d'entrée de gamme avec robinetterie sol standard revient à 2 500-4 500 euros (fourniture + pose). Une baignoire en fonte émaillée avec robinetterie colonne laiton se situe entre 5 000 et 8 000 euros. Une baignoire en pierre naturelle ou résine minérale avec robinetterie design dépasse souvent 8 000 euros. La main d'oeuvre représente 30 à 40% du budget total : raccordement plomberie, étanchéité sol et fixation.",
      },
    },
    {
      '@type': 'Question',
      name: "Fonte ou acrylique : quel matériau choisir pour une baignoire ilot ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La fonte émaillée est le matériau historique des baignoires ilot de prestige. Elle offre une excellente conservation de la chaleur de l'eau (30 minutes de plus que l'acrylique), une durabilité exceptionnelle (plusieurs décennies) et un rendu esthétique intemporel. Son principal inconvénient est le poids : 150 à 200 kg pour une baignoire en fonte, ce qui nécessite de vérifier la résistance du plancher. L'acrylique renforcé est 3 à 5 fois moins lourd, moins cher, plus facile à installer, mais moins chaleureux et moins résistant aux chocs. Pour un appartement parisien au plancher bois (immeubles anciens), l'acrylique ou la résine est souvent préférable pour des raisons structurelles.",
      },
    },
    {
      '@type': 'Question',
      name: "Peut-on installer une baignoire ilot dans un appartement parisien en copropriété ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, l'installation d'une baignoire ilot est techniquement possible dans la quasi-totalité des appartements parisiens en copropriété. Les contraintes principales sont : le poids de la baignoire (à vérifier avec un bureau d'études pour la fonte dans les immeubles anciens), le raccordement plomberie (arrivées d'eau chaude et froide, évacuation), et l'étanchéité parfaite du sol autour de la baignoire pour protéger l'appartement du dessous. Côté copropriété, aucune autorisation n'est généralement requise si les travaux restent à l'intérieur de votre lot privatif et ne touchent pas les murs porteurs ni les colonnes montantes communes.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Baignoire Ilot Paris : installation, prix & styles — guide artisan 2025 | Espace Design",
  description: "Installer une baignoire ilot dans un appartement parisien : styles, matériaux, contraintes techniques et prix 2025. Guide complet par Espace Design.",
  keywords: ["baignoire ilot Paris", "installation baignoire ilot Paris", "prix baignoire ilot Paris", "baignoire ilot appartement parisien", "artisan salle de bain Paris"],
}

export default function ArticleBaignoireIlotParis() {
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
            Salle de bain
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Baignoire Ilot Paris : guide complet pour votre projet
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            La baignoire ilot est l&apos;élément central des salles de bain haut de gamme à Paris. Styles ovale ou rectangulaire, matériaux (acrylique, fonte, pierre), contraintes d&apos;installation, robinetterie et prix 2025 — tout ce qu&apos;il faut savoir avant de se lancer.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-[#1C1C1C] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { val: '8 m²', label: 'Surface mini recommandée' },
              { val: '60 cm', label: 'Dégagement autour requis' },
              { val: '3 000 €', label: 'Budget de départ posé' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-xl sm:text-2xl font-semibold text-[#D4AF37] mb-1">{s.val}</div>
                <div className="text-gray-500 text-[10px] uppercase tracking-wider font-light">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1 — Styles */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Styles de baignoires ilot : ovale, rectangulaire, vintage et moderne
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La baignoire ilot se distingue de la baignoire encastrée par un détail fondamental : elle est visible sur les quatre côtés, posée librement au centre ou en retrait d&apos;un mur. Son esthétique est donc aussi importante que sa fonctionnalité — le choix du style conditionne l&apos;ambiance de toute la salle de bain.
          </p>
          <div className="space-y-4 mb-8">
            {[
              {
                style: "Ovale classique",
                ambiance: "Élégance intemporelle, haussmannien",
                description: "La silhouette ovale est la forme historique de la baignoire ilot. Associée aux salles de bain victoriennes et aux appartements haussmanniens, elle apporte une douceur et un mouvement qui contrastent agréablement avec les angles droits de la pièce. Les modèles contemporains conservent la forme ovale mais l'épurent : bords plus minces, surface intérieure plus profonde, pieds moins ouvragés. Dimensions standard : 165 x 75 cm à 180 x 85 cm.",
              },
              {
                style: "Rectangulaire contemporaine",
                ambiance: "Minimalisme, loft, style japandi",
                description: "La baignoire rectangulaire ilot est la réponse contemporaine à l'ovale classique. Ses angles vifs et sa géométrie stricte s'accordent parfaitement avec les intérieurs minimalistes, les salles de bain carrelées en grand format et les espaces au style japandi. Elle est généralement plus profonde (50 à 60 cm intérieur) et plus spacieuse que la version ovale à dimensions extérieures égales. Idéale pour les rénovations de lofts et d'appartements des années 1970 transformés.",
              },
              {
                style: "Vintage sur pieds",
                ambiance: "Style bohème, maison de maître, charme ancien",
                description: "La baignoire ilot sur pieds — pattes de lion en fonte ou pieds tubulaires chromés — est le clin d'oeil historique par excellence. Dans un appartement haussmannien avec moulures et parquet en chêne, elle crée une cohérence stylistique immédiate. Attention : les baignoires vintage authentiques (en fonte) peuvent peser 150 à 200 kg. La plupart des modèles contemporains reproduisant ce style utilisent de l'acrylique ou de la résine pour réduire le poids.",
              },
              {
                style: "Asymétrique ou en D",
                ambiance: "Design contemporain, originalité",
                description: "Les baignoires ilot asymétriques — en forme de D, à côté plat prévu pour être adossé à un mur, ou avec un côté plus haut que l'autre — permettent d'installer une baignoire ilot dans des espaces moins généreux. Le côté plat contre le mur réduit le dégagement requis de 60 cm à 15-20 cm sur ce côté. C'est souvent la solution retenue dans les appartements parisiens où la salle de bain fait 5 à 7 m².",
              },
            ].map((el) => (
              <div key={el.style} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.style}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.ambiance}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Matériaux */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Matériaux : acrylique, fonte, pierre et résine minérale
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le matériau de la baignoire ilot est le premier critère de choix — il détermine le poids, le budget, la durabilité, la conservation de la chaleur et l&apos;esthétique finale. Dans un appartement parisien (souvent avec plancher en bois), le poids est une contrainte réelle qui doit être évaluée en amont.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              {
                materiau: "Acrylique renforcé",
                poids: "30 – 60 kg",
                prix: "500 – 2 500 €",
                conservation: "Bonne (30 min)",
                avantages: ["Léger : compatible tous planchers", "Large gamme de formes et couleurs", "Facile à installer", "Prix accessible"],
                limites: ["Moins résistant aux chocs", "Se raye plus facilement", "Moins premium au toucher"],
              },
              {
                materiau: "Fonte émaillée",
                poids: "150 – 250 kg",
                prix: "2 000 – 6 000 €",
                conservation: "Excellente (45+ min)",
                avantages: ["Durabilité exceptionnelle", "Conservation de la chaleur supérieure", "Rendu et toucher premium", "Réémaillage possible"],
                limites: ["Très lourd (vérifier plancher)", "Prix élevé", "Choix de formes limité"],
              },
              {
                materiau: "Pierre naturelle (marbre, lave)",
                poids: "200 – 400 kg",
                prix: "4 000 – 15 000 €",
                conservation: "Moyenne (froide au départ)",
                avantages: ["Unicité absolue", "Rendu ultra-luxueux", "Très résistante", "Imputrescible"],
                limites: ["Extrêmement lourd", "Froid au toucher initialement", "Prix très élevé", "Entretien spécifique"],
              },
              {
                materiau: "Résine minérale (Corian, Solid Surface)",
                poids: "60 – 120 kg",
                prix: "1 500 – 5 000 €",
                conservation: "Bonne",
                avantages: ["Lisse et non poreux", "Réparable (égratignures)", "Formes sur-mesure possibles", "Bonne conservation de chaleur"],
                limites: ["Sensible aux chocs importants", "Prix moyen-haut", "Moins de caractère que la fonte"],
              },
            ].map((el) => (
              <div key={el.materiau} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-1">{el.materiau}</div>
                <div className="flex gap-4 text-xs mb-4">
                  <span className="text-gray-500 font-light">Poids : <span className="text-[#1C1C1C]">{el.poids}</span></span>
                  <span className="text-[#B8960C] font-medium">{el.prix}</span>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Points forts</div>
                    <ul className="space-y-1">
                      {el.avantages.map((a) => (
                        <li key={a} className="flex items-start gap-1.5 text-xs text-gray-600 font-light">
                          <CheckCircle size={11} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Limites</div>
                    <ul className="space-y-1">
                      {el.limites.map((l) => (
                        <li key={l} className="flex items-start gap-1.5 text-xs text-gray-500 font-light">
                          <span className="w-2 h-px bg-gray-300 flex-shrink-0 mt-2" />
                          {l}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Contraintes installation */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Contraintes d&apos;installation dans un appartement parisien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La baignoire ilot est techniquement plus exigeante à installer qu&apos;une baignoire encastrée : elle nécessite des arrivées d&apos;eau et une évacuation en milieu de pièce (ou quasi), ce qui implique de travailler dans le sol ou sous le plancher. Dans les appartements parisiens anciens, ce point est souvent la principale difficulté du chantier.
          </p>
          <div className="space-y-4 mb-8">
            {[
              {
                contrainte: "Espace minimum et dégagements",
                detail: "Une baignoire ilot requiert 60 cm de dégagement libre sur les quatre côtés pour circuler confortablement, nettoyer sous la baignoire et accéder à la robinetterie. En pratique, cela signifie que la baignoire elle-même (170 x 80 cm) occupe un espace effectif de 290 x 200 cm dans la pièce. Pour une salle de bain de 8 m² (280 x 290 cm), il reste environ 3,5 m² pour les autres éléments (vasque, WC séparé, rangements). En dessous de 7 m² de salle de bain, envisagez une baignoire ilot compacte (140 x 70 cm) ou asymétrique.",
              },
              {
                contrainte: "Plomberie : arrivées d'eau et évacuation centrale",
                detail: "C'est la contrainte technique principale. Pour une baignoire ilot positionnée au centre de la pièce, les arrivées d'eau froide et chaude et l'évacuation doivent passer dans le sol (sous chape) ou dans un faux-plancher. Dans les appartements parisiens sans dalle béton, cette mise en oeuvre nécessite la dépose du revêtement de sol, la création de saignées dans le plancher bois, et la pose d'une chape ou d'un faux-plancher technique. Budget supplémentaire : 800 à 2 000 € selon la complexité.",
              },
              {
                contrainte: "Poids et structure du plancher",
                detail: "Dans les immeubles parisiens anciens (XIXe, début XXe siècle), les planchers sont souvent en bois avec solives apparentes. La charge admissible est généralement de 150 à 250 kg/m². Une baignoire en fonte remplie d'eau et avec une personne peut dépasser 500 kg sur une surface de moins de 1 m². Un diagnostic structurel est fortement recommandé avant installation d'une baignoire en fonte dans un immeuble ancien. Pour les immeubles en béton (après 1950), ce problème ne se pose généralement pas.",
              },
              {
                contrainte: "Robinetterie : sol, colonne ou plafond",
                detail: "Avec une baignoire ilot, la robinetterie ne peut pas être fixée au mur (la baignoire est au centre). Trois options : robinetterie au sol (la plus classique, nécessite de cacher les tuyaux dans le sol), colonne de bain indépendante (solution la plus facile à installer, tuyaux apparents ou semi-encastrés), ou robinetterie plafond (douchette en pluie suspendue au-dessus de la baignoire, la plus design mais la plus coûteuse en plomberie — budget 500 à 1 500 € supplémentaires).",
              },
            ].map((el) => (
              <div key={el.contrainte} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.contrainte}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Prix Paris 2025 */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix baignoire ilot Paris 2025 : budget complet
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le budget d&apos;une baignoire ilot installée à Paris comprend trois postes : la baignoire elle-même, la robinetterie, et la main d&apos;oeuvre (plomberie, étanchéité, éventuels travaux de sol). Voici les fourchettes 2025 par niveau de prestation.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Niveau</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget total</th>
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Ce que comprend ce budget</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    niveau: 'Entrée de gamme',
                    budget: '2 500 – 4 000 €',
                    inclus: 'Baignoire acrylique ovale, robinetterie colonne chrome, raccordement plomberie standard',
                  },
                  {
                    niveau: 'Milieu de gamme',
                    budget: '4 000 – 7 000 €',
                    inclus: 'Baignoire résine minérale ou acrylique premium, robinetterie colonne laiton brossé, travaux de sol inclus',
                  },
                  {
                    niveau: 'Haut de gamme',
                    budget: '7 000 – 12 000 €',
                    inclus: 'Baignoire fonte émaillée, robinetterie thermostatique au sol ou plafond, travaux sol complets, étanchéité renforcée',
                  },
                  {
                    niveau: 'Prestige',
                    budget: '12 000 € et +',
                    inclus: 'Baignoire en pierre naturelle ou sur-mesure, robinetterie haut de gamme, faux-plancher technique, éclairage encastré',
                  },
                ].map((row, i) => (
                  <tr key={row.niveau} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.niveau}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium whitespace-nowrap">{row.budget}</td>
                    <td className="px-4 py-3 text-gray-600 font-light text-xs">{row.inclus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-[#1C1C1C] rounded-lg p-5">
            <div className="font-medium text-white text-sm mb-3">Ce qui peut faire varier le budget à Paris</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Plancher bois : prévoir 800 à 1 500 € supplémentaires pour la mise en oeuvre plomberie sous plancher",
                "Remplacement des canalisations vétustes (plomb ou galvanisé) : 500 à 1 200 € selon linéaire",
                "Robinetterie plafond (douche de tête) : +500 à 1 500 € par rapport à une colonne sol",
                "Étanchéité renforcée sol (immeuble ancien) : +300 à 600 €",
                "Accessibilité chantier : étage sans ascenseur peut majorer de 5 à 10 %",
                "Evacuation à créer ou à déplacer : +400 à 800 € selon distance avec colonne existante",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-400 font-light">
                  <CheckCircle size={14} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Robinetterie et entretien */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Robinetterie assortie et entretien de la baignoire ilot
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La robinetterie est souvent le poste que l&apos;on sous-estime dans le budget d&apos;une baignoire ilot. Pour une baignoire ilot, elle doit être choisie avec soin car elle est exposée sur les quatre côtés — aucun mur ne vient la cacher. Elle fait partie intégrante de l&apos;esthétique finale.
          </p>
          <div className="space-y-4 mb-8">
            {[
              {
                type: "Colonne de bain indépendante",
                prix: "300 – 1 200 €",
                detail: "Solution la plus répandue et la plus facile à installer. La colonne est un ensemble autonome (arrivées d'eau + mitigeur + bec verseur) fixé au sol à côté de la baignoire. Les tuyaux remontent dans la colonne, sans nécessiter de travailler dans le sol. Existe en chrome, laiton brossé, noir mat, or rose. Le laiton brossé est la finition la plus demandée dans les appartements parisiens en 2025.",
              },
              {
                type: "Robinetterie encastrée dans le sol",
                prix: "500 – 2 000 €",
                detail: "Les arrivées d'eau passent sous le sol (dans la chape ou le plancher) et sortent du sol au niveau de la baignoire. Le mitigeur peut être encastré dans la baignoire elle-même (solution la plus épurée) ou placé sur une plaque chromée au sol. Nécessite un travail de plomberie dans le sol — à planifier impérativement en amont du carrelage ou du parquet.",
              },
              {
                type: "Douche de tête au plafond",
                prix: "800 – 2 500 €",
                detail: "Une sortie de douche suspendue au plafond au-dessus de la baignoire ilot, alimentée par une canalisation encastrée dans le plafond. Rendu spectaculaire, particulièrement adapté aux salles de bain avec hauteur sous plafond suffisante (2,40 m minimum, idéalement 2,70 m). Combinée à une robinetterie colonne, elle crée une expérience bain / douche complète depuis la baignoire.",
              },
            ].map((el) => (
              <div key={el.type} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.type}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.prix}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>

          <div className="bg-[#1C1C1C] rounded-lg p-5">
            <div className="font-medium text-white text-sm mb-3">Entretien de la baignoire ilot : conseils d&apos;artisan</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Nettoyage quotidien à l'eau tiède et savon doux — jamais de produit abrasif ni de javel",
                "Fonte émaillée : éviter les chocs (outils, robinetterie métallique) qui peuvent émailler",
                "Acrylique : ne pas utiliser d'éponge grattante — les micro-rayures ternes l'aspect",
                "Résine minérale : une égratignure légère peut être poncée et redonnée par un artisan",
                "Joints silicone : à renouveler tous les 5 à 8 ans selon l'exposition à l'eau",
                "Robinetterie laiton : protéger avec une cire spéciale métal 2 fois par an pour éviter l'oxydation",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-400 font-light">
                  <CheckCircle size={14} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
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
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Guides connexes</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain Paris' },
              { href: '/blog/douche-italienne-paris', title: 'Douche italienne Paris' },
              { href: '/blog/carrelage-salle-de-bain-paris', title: 'Carrelage salle de bain Paris' },
              { href: '/blog/robinetterie-salle-de-bain-paris', title: 'Robinetterie salle de bain Paris' },
              { href: '/blog/prix-renovation-salle-de-bain-paris', title: 'Prix rénovation salle de bain Paris' },
              { href: '/blog/beton-cire-paris', title: 'Béton ciré Paris' },
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
          Faites installer votre baignoire ilot par un artisan parisien
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic technique sur place, conseil matériaux et style, devis détaillé sous 48h. Plomberie, étanchéité et pose soignée. Garantie décennale.
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
