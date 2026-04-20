import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: "Zellige Paris : pose, prix & entretien — guide artisan 2025 | Espace Design",
  description: "Tout savoir sur le zellige à Paris : origines, caractéristiques, prix au m² 2025, pose crédence ou salle de bain, entretien et protection. Artisan poseur Paris.",
  keywords: [
    "zellige paris",
    "carrelage zellige paris",
    "pose zellige paris",
    "zellige salle de bain paris",
    "zellige cuisine paris",
    "zellige prix paris",
    "artisan zellige paris",
    "carrelage marocain paris",
    "zellige credence paris",
    "zellige sol paris",
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Zellige Paris : pose, prix & entretien — guide artisan 2025",
  description: "Tout savoir sur le zellige à Paris : origines, caractéristiques, prix au m² 2025, pose crédence ou salle de bain, entretien et protection. Artisan poseur Paris.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
  url: 'https://espacedesignparis.fr/blog/carrelage-zellige-paris',
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Peut-on mettre du zellige au sol ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, le zellige peut se poser au sol, mais avec précautions. Sa surface légèrement irrégulière et brillante le rend glissant en zone humide (salle de bain, cuisine). Pour un usage au sol, choisissez un zellige traité antidérapant ou optez pour un format plus grand (10×10 cm ou 15×15 cm) avec des joints plus larges qui augmentent le grip. En intérieur sec (entrée, couloir, salon), le zellige au sol est très esthétique et durable. Prévoyez une protection hydrofuge après pose pour faciliter l'entretien. Prix posé au sol à Paris : 100 à 200 €/m² selon format et coloris.",
      },
    },
    {
      '@type': 'Question',
      name: "Prix zellige Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix du zellige posé à Paris varie entre 80 et 220 €/m² fourniture et pose comprises. La fourniture seule coûte 30 à 80 €/m² selon la provenance (Maroc direct, importateurs français comme Bahya ou Mosaic del Sur) et le coloris. La pose artisanale représente 50 à 140 €/m² car elle exige un savoir-faire spécifique : jointement serré, gestion des irrégularités d'épaisseur, découpe délicate. Pour une crédence cuisine de 2 m², comptez 400 à 700 €. Pour une salle de bain de 5 m² entièrement en zellige, prévoyez 2 000 à 4 500 €.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment entretenir le zellige ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le zellige s'entretient simplement avec un chiffon microfibre légèrement humide et un nettoyant pH neutre. Evitez absolument les produits acides (vinaigre, citron, détartrants) qui attaquent la glaçure et ternissent définitivement les carreaux. En salle de bain ou cuisine, appliquez un produit hydrofuge tous les 2 à 3 ans sur les joints pour éviter les moisissures. En cas de tache grasse, un dégraissant doux suffit. Le zellige non traité absorbe les huiles et les graisses : un scellant de surface appliqué à la pose protège durablement l'émaillage.",
      },
    },
    {
      '@type': 'Question',
      name: "Zellige ou carrelage classique ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le zellige est un carrelage artisanal fabriqué à la main au Maroc, émaillé à la glaçure colorée, avec des légères variations de teinte et d'épaisseur qui créent un effet vivant unique. Le carrelage classique (grès cérame industriel) est uniforme, résistant et facile à poser. Le zellige apporte une âme et un caractère incomparables, idéal pour une crédence cuisine, un mur de douche ou un espace accent. Le carrelage classique est plus adapté aux grandes surfaces, aux pièces de vie ou aux zones à fort passage. Beaucoup de réalisations parisiennes combinent les deux : zellige en accent, grès cérame en fond.",
      },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />

      {/* Hero */}
      <section className="bg-[#1C1C1C] text-center pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#B8960C] text-xs font-medium uppercase tracking-widest mb-4">
            Guide artisan 2025
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-6 leading-tight">
            Zellige Paris : l&apos;art du carrelage marocain dans votre intérieur
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed font-light max-w-2xl mx-auto mb-8">
            Le zellige fascine par sa matière vivante, ses reflets et ses couleurs profondes. Crédence cuisine,
            mur de douche, sol d&apos;entrée — guide complet pose, prix et entretien à Paris.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#B8960C] text-white px-6 py-3 text-sm font-medium rounded hover:bg-[#9a7d0a] transition-colors"
            >
              Demander un devis <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+33611783867"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 text-sm font-medium rounded hover:bg-white/5 transition-colors"
            >
              <Phone className="w-4 h-4" /> 06 11 78 38 67
            </a>
          </div>
        </div>
      </section>

      {/* Section 1 — Origine et caractéristiques */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Qu&apos;est-ce que le zellige ? Origine et caractéristiques
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le zellige est un carrelage émaillé artisanal originaire du Maroc, fabriqué à la main depuis le
              XIVe siècle dans les ateliers de Fès. Chaque carreau est taillé à partir d&apos;une plaque d&apos;argile
              cuite, puis émaillé à la glaçure colorée avant d&apos;être recuit au four. C&apos;est ce processus
              entièrement manuel qui lui confère son caractère unique : légères variations de teinte, surface
              légèrement irrégulière, reflets changeants selon la lumière.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Ces &quot;imperfections&quot; ne sont pas des défauts mais la signature même du zellige. Deux salles de bain
              ou deux crédences cuisine en zellige ne se ressembleront jamais parfaitement — chaque réalisation
              est unique. C&apos;est précisément ce que recherchent les Parisiens qui en font poser depuis 2020 :
              une matière authentique, artisanale, impossible à reproduire industriellement.
            </p>
            <div className="space-y-4">
              {[
                {
                  titre: "Les irrégularités : signature du zellige authentique",
                  detail: "Un zellige de qualité présente des variations légères de teinte (nuances dans la même couleur), une surface légèrement bombée ou creusée, et une épaisseur qui varie de ±1 mm. Ces caractéristiques distinguent le zellige artisanal marocain des imitations industrielles. Un poseur expérimenté sait gérer ces irrégularités pour obtenir un résultat harmonieux : il trie les carreaux, joue sur l'orientation et règle l'épaisseur du lit de colle.",
                },
                {
                  titre: "Les couleurs : une palette infinie",
                  detail: "La glaçure marocaine traditionnelle propose des centaines de coloris, des plus sobres (blanc ivoire, noir mat, gris cendre) aux plus intenses (bleu de Fès, vert émeraude, jaune safran, terracotta). En 2025, les coloris les plus demandés à Paris sont le vert olive, le blanc cassé, le bleu nuit et le terracotta. Certains ateliers proposent des mélanges de teintes (degradé, bichromie) pour des effets encore plus personnalisés.",
                },
                {
                  titre: "La brillance : reflets changeants",
                  detail: "La glaçure du zellige crée une brillance particulière, différente du grès cérame poli : plus profonde, moins uniforme, avec des micro-variations qui capturent la lumière différemment selon l'angle. Cette propriété rend le zellige particulièrement efficace dans les petits espaces ou les cuisines peu lumineuses : la crédence en zellige blanc ou vert clair reflète et amplifie la lumière disponible.",
                },
              ].map((el) => (
                <div key={el.titre} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.titre}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Applications et poses conseillées */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Où poser du zellige à Paris : crédence, salle de bain, sol
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le zellige s&apos;adapte à de nombreux usages dans un appartement parisien. Chaque application a ses
            spécificités techniques et ses recommandations de format. Voici les poses les plus plébiscitées
            par les Parisiens et les conseils d&apos;Espace Design pour réussir chacune.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                usage: "Crédence cuisine",
                recommandation: "Format 10×10 cm, coloris uni ou mélangé. Surface à protéger : imperméabilisant avant et après pose. Le zellige résiste à la chaleur des plaques (pas en contact direct). Hauteur conseillée : 60 à 90 cm. Effet wahou maximal pour un budget modéré (2 à 4 m² en général).",
                budget: "400 – 900 €",
              },
              {
                usage: "Mur de douche",
                recommandation: "Zellige traité imperméabilisé obligatoire. Joint époxy hydrofuge recommandé. Format 5×5 cm ou 10×10 cm. Évitez la paroi directement sous le pommeau de douche pour limiter le calcaire visible. Nettoyage hebdomadaire avec un chiffon microfibre doux.",
                budget: "800 – 2 500 €",
              },
              {
                usage: "Mur salle de bain (hors douche)",
                recommandation: "Idéal en mur accent (mur de face ou niche de baignoire). Format 10×10 cm ou 7,5×15 cm. Moins exposé à l'eau que la douche, donc plus facile à entretenir. Combinaison fréquente : zellige en mur accent + grand format grès cérame pour le sol.",
                budget: "600 – 1 800 €",
              },
              {
                usage: "Sol intérieur sec",
                recommandation: "Entrée, couloir, salon : le zellige au sol apporte un caractère unique. Format 10×10 cm ou 15×15 cm pour limiter les irrégularités. Appliquer un scellant anti-tache avant utilisation. Evitez en cuisine ou salle de bain sol (humidité et risque de glisse).",
                budget: "100 – 200 €/m²",
              },
            ].map((el) => (
              <div key={el.usage} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.usage}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.budget}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.recommandation}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Prix au m² Paris 2025 */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix zellige Paris 2025 : fourniture et pose
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le prix du zellige posé à Paris dépend de trois facteurs : la qualité et la provenance du zellige
            (Maroc direct ou importateur français), le format et la couleur choisis, et la complexité de la pose
            (surface, découpes, préparation du support).
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left p-3 font-medium text-xs">Poste</th>
                  <th className="text-right p-3 font-medium text-xs">Prix bas</th>
                  <th className="text-right p-3 font-medium text-xs">Prix haut</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { poste: "Fourniture zellige (importateur français)", bas: "30 €/m²", haut: "80 €/m²" },
                  { poste: "Fourniture zellige (artisan direct Fès)", bas: "20 €/m²", haut: "50 €/m²" },
                  { poste: "Pose artisanale (mur)", bas: "50 €/m²", haut: "90 €/m²" },
                  { poste: "Pose artisanale (sol)", bas: "60 €/m²", haut: "110 €/m²" },
                  { poste: "Imperméabilisant / scellant", bas: "5 €/m²", haut: "15 €/m²" },
                  { poste: "Joint époxy (zone humide)", bas: "10 €/m²", haut: "25 €/m²" },
                  { poste: "Total posé mur Paris", bas: "85 €/m²", haut: "190 €/m²" },
                ].map((row, i) => (
                  <tr key={row.poste} className={i % 2 === 0 ? "bg-[#FAFAF8]" : "bg-white"}>
                    <td className="p-3 text-gray-700">{row.poste}</td>
                    <td className="p-3 text-right text-gray-600">{row.bas}</td>
                    <td className="p-3 text-right font-medium text-[#1C1C1C]">{row.haut}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            Attention : les devis en ligne sans visite chantier sont souvent sous-estimés. La préparation du
            support (ragréage, primaire, traitement humidité) représente parfois 30 % du budget total et ne peut
            être évaluée qu&apos;en visitant le chantier. Espace Design réalise systématiquement une visite gratuite
            avant tout devis zellige à Paris.
          </p>
        </div>
      </section>

      {/* Section 4 — Joint et pose technique */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Joint adapté et techniques de pose du zellige
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La pose du zellige ne s&apos;improvise pas. Les irrégularités d&apos;épaisseur et de planéité propres au
            zellige artisanal exigent un savoir-faire spécifique et des matériaux adaptés. Voici les points
            techniques incontournables que maîtrise un artisan expérimenté comme Espace Design.
          </p>
          <div className="space-y-4">
            {[
              {
                etape: "Choix du joint : largeur et matière",
                detail: "Le zellige se pose traditionnellement avec un joint serré (1 à 2 mm). Pour les zones humides (douche, cuisine), un joint époxy est fortement recommandé : imperméable, antifongique, résistant aux acides alimentaires. Pour les zones sèches, un joint ciment hydrofuge convient. La couleur du joint influence fortement le rendu final : joint blanc = effet graphique, joint gris clair = fondu, joint terracotta = authentique marocain.",
              },
              {
                etape: "Lit de colle : gérer les irrégularités d'épaisseur",
                detail: "Chaque zellige ayant une épaisseur légèrement différente, l'artisan doit ajuster l'épaisseur du lit de colle carreau par carreau pour maintenir la planéité de surface. Cette technique, dite &quot;pose à l'ancienne&quot;, est beaucoup plus chronophage qu'une pose de carrelage standard (+30 à 50 % de temps) mais est indispensable pour un résultat propre. Un ciment-colle déformable (C2 TE S1) est recommandé pour absorber les légères contraintes mécaniques.",
              },
              {
                etape: "Préparation du support : clé de la durabilité",
                detail: "Un support non plan aggrave les défauts naturels du zellige. Avant toute pose, le support doit être ragréé, dépoussiéré et primé. En cuisine, un primaire d'accrochage sur carrelage existant permet de poser le zellige sans déposer l'ancien carrelage (sous conditions : ancien carrelage solidement collé, pas de déformation thermique). En salle de bain, une membrane d'étanchéité (type Schlüter Kerdi) est recommandée en zone humide.",
              },
              {
                etape: "Finition : scellant et protection",
                detail: "Après jointement et séchage complet (48 à 72h), il est indispensable d'appliquer un scellant hydrofuge sur toute la surface. Ce traitement protège la glaçure des taches grasses (cuisine) et du calcaire (salle de bain), et facilite l'entretien quotidien. En cuisine, un scellant à base de résine polyuréthane est préférable pour sa résistance aux huiles et à la chaleur. À renouveler tous les 3 à 5 ans selon l'usage.",
              },
            ].map((el) => (
              <div key={el.etape} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.etape}</div>
                <div
                  className="text-gray-600 text-sm font-light leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: el.detail }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Entretien et protection */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Entretien du zellige : les bons gestes au quotidien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Bien entretenu, le zellige garde ses reflets et ses couleurs pendant des décennies. Les Riads marocains
            en témoignent : certains zelliges ont plus de 200 ans et sont encore magnifiques. À Paris, quelques
            gestes simples suffisent pour préserver votre investissement.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                geste: "Nettoyage quotidien",
                detail: "Chiffon microfibre légèrement humide. Nettoyant pH neutre (savon de Marseille dilué). Sécher après nettoyage en zone humide pour éviter les dépôts calcaires.",
              },
              {
                geste: "Ce qu'il faut éviter",
                detail: "Produits acides : vinaigre, citron, détartrants, acide chlorhydrique. Éponges abrasives ou éponge Jex. Haute pression (karcher). Produits chlorés concentrés sur les joints.",
              },
              {
                geste: "Traitement anti-calcaire",
                detail: "En zone de douche, appliquer un produit anti-calcaire neutre hebdomadairement. Essuyer les éclaboussures après chaque utilisation. Un adoucisseur d'eau réduit fortement les dépôts dans les appartements parisiens (eau très calcaire).",
              },
              {
                geste: "Renouvellement du scellant",
                detail: "Tous les 2 à 3 ans en zone humide, tous les 4 à 5 ans en zone sèche. Un zellige terne qui n'absorbe plus le scellant peut être traité par un cristalliseur pour retrouver son éclat d'origine. Espace Design propose un service d'entretien et de retraitement.",
              },
            ].map((el) => (
              <div key={el.geste} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.geste}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-8">
            Questions fréquentes sur le zellige à Paris
          </h2>
          <div className="space-y-4">
            {schemaFAQ.mainEntity.map((faq) => (
              <div key={faq.name} className="bg-white rounded-lg p-5 border border-gray-100">
                <h3 className="font-medium text-[#1C1C1C] text-sm mb-2">{faq.name}</h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1C1C1C] py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-2xl font-semibold text-white mb-4">
            Votre projet zellige à Paris
          </h2>
          <p className="text-gray-300 text-sm font-light leading-relaxed mb-8">
            Crédence cuisine, salle de bain, entrée — Espace Design vous accompagne dans le choix des coloris,
            la préparation du support et la pose soignée de votre zellige. Devis gratuit sur visite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#B8960C] text-white px-6 py-3 text-sm font-medium rounded hover:bg-[#9a7d0a] transition-colors"
            >
              Demander un devis <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+33611783867"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 text-sm font-medium rounded hover:bg-white/5 transition-colors"
            >
              <Phone className="w-4 h-4" /> 06 11 78 38 67
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
