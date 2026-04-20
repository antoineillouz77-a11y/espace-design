import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Pose Parquet Paris', item: 'https://espacedesignparis.fr/blog/pose-parquet-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Pose Parquet Paris : massif, contrecollé & prix artisan 2025 | Espace Design",
  description: "Poser un parquet à Paris : parquet massif cloué, contrecollé collé, parquet flottant. Préparation, finitions, prix m² 2025.",
  datePublished: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/pose-parquet-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix de pose d'un parquet à Paris en 2025 ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix de pose d'un parquet à Paris (main d'œuvre + fourniture) varie selon le type : parquet flottant stratifié 20 à 35 €/m², parquet flottant contrecollé qualité 35 à 60 €/m², parquet contrecollé collé 50 à 90 €/m², parquet massif cloué sur lambourdes 80 à 150 €/m². Ces prix incluent la colle ou les fixations, les plinthes et la finition de base. La préparation du support (ragréage, dépose de l'ancien revêtement) est en supplément : 10 à 30 €/m² selon l'état du sol.",
      },
    },
    {
      '@type': 'Question',
      name: "Peut-on poser un parquet massif dans un appartement parisien haussmannien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, et c'est même la solution la plus adaptée aux planchers bois anciens des immeubles haussmanniens. Le parquet massif cloué (ou agrafé) sur les planchers bois existants est une technique traditionnelle parfaitement adaptée à ces structures. Les lames de chêne massif (16 à 22 mm d'épaisseur) se fixent directement sur les lambourdes ou le plancher existant sans colle. Contrairement à la colle sur dalle béton, cette technique ne risque pas de désolidariser les planchers bois. Prévoir une vérification préalable de l'état du plancher support (planéité, humidité, solidité).",
      },
    },
    {
      '@type': 'Question',
      name: "Quelle essence de parquet choisir pour un appartement à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le chêne est de loin l'essence la plus posée à Paris : polyvalent, solide (Janka 6,0 kN), disponible en version massif, contrecollé ou flottant, compatible avec le chauffage au sol. Le frêne est plus clair et moins cher. Le noyer apporte une teinte chaude très tendance dans les rénovations contemporaines. Pour des budgets plus élevés, les essences exotiques (teck, bambou, ipé) offrent une dureté supérieure mais nécessitent une attention particulière à l'acclimation et à la finition. Évitez les essences trop sensibles à l'humidité (certains exotiques) dans les appartements parisiens sans chauffage au sol.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelle finition de parquet choisir : vitrifié, huilé ou ciré ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Chaque finition a ses avantages. Le vitrifié (vernis polyuréthane) est le plus facile d'entretien : imperméable, résistant aux rayures, nettoyage simple. Aspect brillant ou satiné selon les modèles. Le huilé est plus naturel et répare facilement (re-huilage localisé d'une zone rayée), mais nécessite un entretien annuel (huile d'entretien). Le ciré est réservé aux parquets anciens à restaurer : aspect authentique, entretien plus régulier. Pour un appartement parisien à louer, le vitrifié satiné est recommandé pour sa durabilité. Pour un logement principal haut de gamme, le huilé brossé est plus tendance.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Pose Parquet Paris : massif, contrecollé & prix artisan 2025 | Espace Design",
  description: "Poser un parquet à Paris : parquet massif cloué, contrecollé collé, parquet flottant. Préparation, finitions, prix m² 2025.",
  keywords: "pose parquet Paris, parquet massif Paris, artisan parquet Paris, prix pose parquet",
}

export default function ArticlePoseParquetParis() {
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
            Parquet
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Pose Parquet Paris : massif, contrecollé &amp; prix artisan 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le parquet est le revêtement de sol incontournable des appartements parisiens. Entre le parquet massif cloué sur les planchers haussmanniens et le contrecollé collé sur chape béton, le choix de la technique de pose détermine la durabilité et le résultat final. Guide complet 2025 par Espace Design.
          </p>
        </div>
      </section>

      {/* Section 1 — Types de parquet comparatif */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Massif, contrecollé ou flottant : quel parquet choisir ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Les trois grandes familles de parquet ont des caractéristiques très différentes en termes de durabilité, de compatibilité avec le support et de budget. Le choix dépend du type de logement, du support existant et de l&apos;usage prévu.
            </p>
            <div className="space-y-4">
              {[
                {
                  type: "Parquet massif : la référence durable",
                  detail: "Fabriqué d'une seule essence de bois sur toute son épaisseur (16 à 23 mm), le parquet massif peut être poncé et rénové 4 à 6 fois au cours de sa vie. C'est la solution de référence dans les appartements haussmanniens parisiens (compatible avec les planchers bois). Sensible aux variations d'humidité : nécessite une humidité ambiante stable entre 45 et 65 %. Contre-indication : chauffage par le sol (sauf essences spécifiques).",
                },
                {
                  type: "Parquet contrecollé : polyvalence et stabilité",
                  detail: "Composé d'une couche d'usure en bois noble (2,5 à 6 mm) collée sur des couches croisées de bois (contreplaqué). Plus stable que le massif face aux variations hygrométriques. Compatible avec le chauffage par le sol. Peut être poncé 1 à 2 fois selon l'épaisseur de la couche d'usure. Solution idéale pour les appartements avec chape béton ou chauffage au sol.",
                },
                {
                  type: "Parquet flottant : accessibilité et facilité",
                  detail: "Pose sans colle ni clou, lames clipsées entre elles et posées sur une sous-couche résiliente. Le plus économique et le plus rapide à poser. Deux sous-catégories : stratifié (HPL, papier décor, non bois) et contrecollé flottant (vraie couche de bois en surface). Le flottant est réversible (démontable) et idéal pour les locataires. Moins durable que le massif ou le contrecollé collé.",
                },
              ].map((el) => (
                <div key={el.type} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.type}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Modes de pose */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Modes de pose : cloué, collé ou flottant — avantages et inconvénients
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le mode de pose est aussi important que le type de parquet. Il conditionne la compatibilité avec le support, la durabilité de l&apos;assemblage et la possibilité de rénovation future.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                mode: "Pose clouée (ou agrafée)",
                usage: "Parquet massif sur plancher bois",
                avantages: "Technique traditionnelle très solide, pas de colle, réparable lame par lame, compatible planchers anciens",
                inconvenients: "Réservé aux planchers bois, bruit d'impact plus élevé que le collé, nécessite un plancher solide et plan",
              },
              {
                mode: "Pose collée",
                usage: "Contrecollé sur dalle béton ou chape",
                avantages: "Solidarisation totale au support, très stable, idéal avec chauffage au sol, meilleure isolation phonique aux impacts",
                inconvenients: "Dépose difficile et destructive, colle à choisir selon le parquet (MS polymère, polyuréthane), support doit être parfaitement plan et sec",
              },
              {
                mode: "Pose flottante",
                usage: "Tous types de parquet sur sous-couche",
                avantages: "Pose rapide, réversible, économique, s'adapte à tous les supports (parquet sur carrelage possible), bonne isolation thermique",
                inconvenients: "Sensation plus creuse sous le pied, dilatation possible aux joints de pièce, moins durable que le collé, bruit de craquement possible",
              },
              {
                mode: "Pose en bâtons rompus ou Versailles",
                usage: "Parquet massif ou contrecollé collé",
                avantages: "Aspect très haut de gamme, typique des appartements haussmanniens parisiens, valorise fortement le bien",
                inconvenients: "Main d'œuvre qualifiée indispensable, prix de pose 2 à 3× supérieur à la pose droite, perte de matière (chutes) de 10 à 15 %",
              },
            ].map((el) => (
              <div key={el.mode} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-1">{el.mode}</div>
                <div className="text-[#B8960C] text-xs font-light mb-3">{el.usage}</div>
                <div className="text-gray-600 text-xs font-light leading-relaxed mb-2">
                  <span className="font-medium text-gray-700">Avantages : </span>{el.avantages}
                </div>
                <div className="text-gray-600 text-xs font-light leading-relaxed">
                  <span className="font-medium text-gray-700">Inconvénients : </span>{el.inconvenients}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Préparation du support */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Préparation du support : ragréage et planéité — la clé de la réussite
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La préparation du support est l&apos;étape la plus souvent négligée et pourtant la plus déterminante pour la qualité du résultat final. Un parquet collé sur un support non plan craquera, se désolidarisera ou se fissura dans les mois qui suivent la pose.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                etape: "Contrôle de planéité (tolérance ± 2 mm sous la règle de 2 m)",
                prix: "Gratuit (inclus dans le devis artisan)",
                detail: "Avant toute pose, l'artisan vérifie la planéité du support à la règle de 2 m. La tolérance admissible est de ± 2 mm pour une pose collée et ± 5 mm pour une pose flottante. Au-delà, un ragréage s'impose.",
              },
              {
                etape: "Ragréage autolissant (correction des irrégularités)",
                prix: "10 – 25 €/m²",
                detail: "Produit à base de ciment coulé liquide qui s'autolisse sous l'action de la gravité. Séchage : 24 à 48h avant pose du parquet. Indispensable sur les dalles béton irrégulières. Épaisseur minimale de 3 mm, maximale de 30 mm par couche.",
              },
              {
                etape: "Contrôle de l'humidité du support",
                prix: "Inclus dans le devis",
                detail: "Mesure au carbure ou à l'hygromètre électronique. Le taux d'humidité du support ne doit pas dépasser 2,5 % pour une pose collée (parquet massif ou contrecollé). Au-delà, risque de décollement et de gonflement du bois. Délai de séchage à respecter après ragréage.",
              },
              {
                etape: "Dépose de l'ancien revêtement",
                prix: "10 – 30 €/m²",
                detail: "Dépose et évacuation du carrelage, du parquet ancien, du lino ou de la moquette. Si présence d'amiante (colle de carrelage d'avant 1997), intervention d'un professionnel certifié SS3 obligatoire. Prix spécifique amiante : 30 à 60 €/m².",
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

      {/* Section 4 — Essences de bois */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Essences bois populaires à Paris : chêne, frêne, noyer et exotiques
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le choix de l&apos;essence détermine la teinte naturelle, la dureté (résistance aux rayures) et le prix du parquet. À Paris, les appartements haussmanniens privilégient le chêne pour sa compatibilité historique et sa polyvalence.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                essence: "Chêne",
                janka: "6,0 kN",
                teinte: "Beige à brun doré, veine prononcée",
                prix: "40 – 120 €/m² fourni",
                detail: "L'incontournable des parquets parisiens. Polyvalent, solide, disponible en massif, contrecollé et flottant. Compatible chauffage au sol (en contrecollé). Réagit bien aux teintures et lazures.",
              },
              {
                essence: "Frêne",
                janka: "8,3 kN",
                teinte: "Blanc crème à beige clair, veine fine",
                prix: "35 – 90 €/m² fourni",
                detail: "Plus clair que le chêne et moins cher. Très apprécié dans les rénovations contemporaines pour son aspect scandinave. Dureté supérieure au chêne. Moins disponible en massif ces dernières années (frênaies décimées par un champignon).",
              },
              {
                essence: "Noyer",
                janka: "4,8 kN",
                teinte: "Brun foncé à chocolat, veine droite",
                prix: "70 – 180 €/m² fourni",
                detail: "Essence noble et tendance dans les rénovations haut de gamme. Teinte chaude très appréciée. Légèrement moins dur que le chêne — déconseillé dans les pièces à fort trafic (couloir, salle de bain). Idéal pour les chambres et les salons.",
              },
              {
                essence: "Teck et exotiques",
                janka: "8,0 – 15,0 kN",
                teinte: "Du brun doré (teck) au presque noir (wengé)",
                prix: "80 – 250 €/m² fourni",
                detail: "Dureté supérieure, très résistants à l'humidité (teck en particulier). Acclimation obligatoire avant pose (2 à 3 semaines dans le logement). Vérifier la traçabilité (labels FSC ou PEFC) pour les essences tropicales.",
              },
            ].map((el) => (
              <div key={el.essence} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.essence}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.prix}</div>
                </div>
                <div className="flex gap-3 mb-2">
                  <span className="text-xs text-gray-500 font-light">Dureté Janka : {el.janka}</span>
                  <span className="text-xs text-gray-500 font-light">•</span>
                  <span className="text-xs text-gray-500 font-light">{el.teinte}</span>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Finitions */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Finitions parquet : vitrifié, huilé, ciré et brossé
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
            La finition protège le bois et détermine l&apos;aspect final. Elle conditionne aussi la fréquence et la facilité d&apos;entretien — un critère important dans un appartement parisien habité ou loué.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                finition: "Vitrifié (vernis polyuréthane)",
                entretien: "Facile — lavage à la serpillère",
                durabilite: "10 – 20 ans",
                detail: "La finition la plus répandue. Imperméable à l'eau et aux taches, résistante aux rayures, disponible en mat, satiné ou brillant. Facile à entretenir au quotidien (nettoyage humide). Lorsqu'elle est rayée profondément, une remise en état nécessite le ponçage intégral du parquet.",
              },
              {
                finition: "Huilé (huile dure naturelle)",
                entretien: "Entretien annuel à l'huile",
                durabilite: "Illimitée si entretenu",
                detail: "Pénètre dans les fibres du bois sans former de film en surface. Aspect naturel et mat, toucher chaleureux du bois. Réparable localement (re-huilage d'une zone rayée sans poncer tout le parquet). Nécessite un entretien annuel avec une huile de nettoyage et une couche d'huile d'entretien.",
              },
              {
                finition: "Ciré (cire naturelle)",
                entretien: "Régulier — cire 2 à 3 fois par an",
                durabilite: "Variable selon entretien",
                detail: "Finition traditionnelle des parquets anciens parisiens. Aspect brillant satiné très authentique. Sensible à l'eau et aux taches grasses. Réservé aux parquets massifs existants à restaurer dans les appartements haussmanniens, ou aux demandes esthétiques spécifiques.",
              },
              {
                finition: "Brossé (structuration de surface)",
                entretien: "Variable selon finition associée",
                durabilite: "Selon finition (huilé ou vitrifié)",
                detail: "Traitement mécanique qui creuse les fibres tendres du bois, accentuant la veine et le relief. Le brossé est toujours associé à une finition (huilé brossé ou vitrifié brossé). Très tendance dans les rénovations contemporaines parisiennes — masque les petites rayures du quotidien.",
              },
            ].map((el) => (
              <div key={el.finition} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-1">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.finition}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.durabilite}</div>
                </div>
                <div className="text-[#B8960C]/70 text-xs font-light mb-2">{el.entretien}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Tableau prix m² */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix pose parquet Paris 2025 : tableau fourni + posé par type
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Tarifs 2025 fourni + posé (matériaux + main d&apos;œuvre), hors dépose de l&apos;ancien revêtement et ragréage, pour un artisan parqueteur à Paris intramuros.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Type de parquet</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Mode de pose</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m² fourni + posé</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Durée de vie</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    type: "Stratifié (flottant)",
                    pose: "Flottant",
                    prix: "20 – 35 €/m²",
                    duree: "10 – 15 ans",
                  },
                  {
                    type: "Contrecollé flottant (vraie couche bois)",
                    pose: "Flottant",
                    prix: "35 – 60 €/m²",
                    duree: "20 – 30 ans",
                  },
                  {
                    type: "Contrecollé collé (chêne)",
                    pose: "Collé sur chape",
                    prix: "50 – 90 €/m²",
                    duree: "30 – 50 ans",
                  },
                  {
                    type: "Massif cloué (chêne, plancher bois)",
                    pose: "Cloué sur lambourdes",
                    prix: "80 – 130 €/m²",
                    duree: "50 – 100 ans",
                  },
                  {
                    type: "Massif exotique collé (teck, ipé)",
                    pose: "Collé sur chape",
                    prix: "120 – 200 €/m²",
                    duree: "50 – 80 ans",
                  },
                  {
                    type: "Parquet bâtons rompus ou Versailles",
                    pose: "Collé sur chape",
                    prix: "150 – 300 €/m²",
                    duree: "50 – 100 ans",
                  },
                ].map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.type}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.pose}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prix}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.duree}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Ce qu&apos;il faut vérifier avant de poser un parquet à Paris
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Laisser le parquet s'acclimater au moins 48h dans le logement avant la pose (régulation de l'humidité du bois)",
                "Vérifier le taux d'humidité du support — jamais au-dessus de 2,5 % pour une pose collée",
                "Prévoir 5 à 10 % de lames supplémentaires pour les chutes (angles, seuils, défauts)",
                "Installer des joints de dilatation en périphérie et sur les grandes surfaces (> 8 m dans un sens)",
                "Choisir une colle MS polymère ou polyuréthane adaptée au chauffage au sol si applicable",
                "Préserver au moins 3 mm de jeu aux murs pour absorber la dilatation du bois",
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
              { href: '/blog/renovation-appartement-ancien-paris', title: 'Rénovation appartement ancien Paris' },
              { href: '/blog/renovation-cuisine-ouverte-paris', title: 'Cuisine ouverte Paris' },
              { href: '/blog/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain Paris' },
              { href: '/blog/peinture-enduit-paris', title: 'Peinture et enduit Paris' },
              { href: '/blog/renovation-combles-paris', title: 'Rénovation combles Paris' },
              { href: '/blog/renovation-appartement-paris-10e', title: 'Rénovation appartement Paris 10e' },
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
          Pose de parquet à Paris : devis gratuit sous 48h
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Parqueteurs expérimentés. Massif cloué, contrecollé collé, bâtons rompus. Devis gratuit et précis sous 48h.
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
