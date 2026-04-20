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
  description: "Rénover un loft ou atelier parisien : style industriel, béton ciré, verrière atelier, acier noir, poutres apparentes. Artisan spécialisé, prix 2025.",
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
      name: "Quel est le prix d'une rénovation de loft à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La rénovation d'un loft parisien est généralement plus coûteuse qu'un appartement standard, du fait de la hauteur sous plafond, des surfaces de béton à traiter et des matériaux industriels (acier, verre, béton ciré). Comptez entre 1 200 et 2 500 €/m² pour une rénovation complète avec béton ciré au sol, verrière, cuisine ouverte sur-mesure et salles de bain de qualité. Pour un loft de 80 m², le budget total oscille entre 96 000 et 200 000 € selon le niveau de finition.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il un permis de construire pour rénover un loft parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Un loft issu d'une ancienne usine ou d'un entrepôt a souvent subi un changement de destination (activité vers habitation) qui nécessite un permis de construire. Si le changement de destination a déjà été réalisé, les travaux intérieurs de rénovation ne nécessitent généralement pas de permis, sauf si vous modifiez la façade, créez des fenêtres ou modifiez la structure porteuse. En revanche, si votre loft est en zone ABF (Architectes des Bâtiments de France) ou en secteur sauvegardé, toute modification extérieure requiert une autorisation spécifique.",
      },
    },
    {
      '@type': 'Question',
      name: "Le béton ciré est-il vraiment pratique dans un loft parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le béton ciré est esthétiquement très apprécié dans les lofts industriels mais impose quelques contraintes pratiques. Il est sensible aux taches acides (jus de citron, vin) si mal protégé, et peut fissuler sur des supports insuffisamment rigides. Bien réalisé avec un produit de protection adapté (cire ou résine époxy), il résiste bien à l'usage quotidien. Son principal avantage : continuité parfaite entre les pièces, sans joint, ce qui amplifie l'effet d'espace et de volume. Prix de pose : 80 à 180 €/m² selon l'épaisseur et la finition.",
      },
    },
    {
      '@type': 'Question',
      name: "Peut-on installer une verrière atelier dans n'importe quel loft parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Une verrière atelier peut s'installer dans la plupart des lofts, sous réserve que le mur ou cloison d'appui ne soit pas porteur (ou que la structure soit reprise par un ingénieur structure). Dans les lofts avec hauteur sous plafond de 3,50 m et plus, les verrières monumentales (2,50 m × 2,50 m et plus) sont particulièrement spectaculaires. En acier noir thermolaqué avec vitrage feuilleté, comptez 400 à 900 €/m² selon les dimensions et le profil choisi. La verrière doit respecter la réglementation thermique si elle remplace une paroi extérieure.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Rénovation Loft Paris : aménagement industriel & prix 2025 | Espace Design",
  description: "Rénover un loft ou atelier parisien : style industriel, béton ciré, verrière atelier, acier noir, poutres apparentes. Artisan spécialisé, prix 2025.",
  keywords: "rénovation loft Paris, aménagement loft Paris, loft industriel Paris",
}

export default function ArticleRenovationLoftParis() {
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
            Rénovation Loft Paris : aménagement industriel &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Anciens ateliers d&apos;artistes, entrepôts reconvertis, usines réhabilitées : le loft parisien incarne une esthétique industrielle unique. Béton ciré, poutres métalliques apparentes, verrière atelier, acier noir et bois massif — voici le guide complet pour rénover votre loft avec succès en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Qu'est-ce qu'un loft parisien */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Qu&apos;est-ce qu&apos;un loft à Paris ? Origines et spécificités
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              À Paris, le terme &quot;loft&quot; désigne généralement un espace initialement à usage industriel ou artisanal converti en logement : anciens ateliers d&apos;artistes (Montmartre, Belleville), entrepôts reconvertis (13e arrondissement, bords de Seine), manufactures (11e, 20e) ou même des combles industriels transformés.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Leurs caractéristiques communes : grande hauteur sous plafond (3 à 6 m), volumes ouverts sans cloisons intermédiaires, poutres ou structure métallique apparente, grandes baies vitrées (anciennement ateliers lumineux pour artisans) et béton ou tomettes au sol. Ces caractéristiques créent une architecture que l&apos;on ne peut pas recréer dans un appartement classique.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Hauteur sous plafond exceptionnelle (3 à 6 m)',
                  detail: "La hauteur sous plafond est le premier atout d'un loft parisien. Elle permet de créer des mezzanines habitables, d'exposer des poutres IPN ou des fermes métalliques, et de jouer sur des volumes que l'appartement classique ne permet pas. Elle impose aussi une isolation thermique et acoustique spécifique : la surface de mur à traiter est bien supérieure à la normale.",
                },
                {
                  enjeu: "Plan ouvert : l'espace comme matériau",
                  detail: "L'absence de cloisons dans un loft est à la fois son principal atout et sa principale difficulté. La rénovation doit créer des zones distinctes (cuisine, salon, chambre, bureau) sans fermer l'espace. Les outils : verrières intérieures, différences de niveau de sol ou de plafond, mobilier en îlot, claustra métallique ou en bois, rideau industriel.",
                },
                {
                  enjeu: 'Structure existante à conserver ou valoriser',
                  detail: "Les éléments structurels d'un loft (poutres IPN, piliers béton, plancher acier) sont souvent les éléments les plus intéressants architecturalement. Avant de les masquer, un artisan compétent évalue leur état, leur solidité, et les possibilités de mise en valeur : sablage, peinture noire mat, éclairage indirect rasant pour souligner les reliefs.",
                },
                {
                  enjeu: 'Isolation hors normes : toitures et murs non standard',
                  detail: "Dans un loft issu d'un entrepôt ou d'une usine, l'isolation thermique et phonique est rarement aux normes habitation. La toiture-terrasse, les murs épais en brique ou béton, les planchers industriels imposent des solutions spécifiques que tous les artisans ne maîtrisent pas. C'est souvent le poste le plus coûteux et le plus important pour le confort final.",
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
            Les éléments clés du style industriel dans un loft parisien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le style industriel n&apos;est pas un simple effet de mode : il est la conséquence naturelle de l&apos;origine des lofts. Bien exécuté, il tire parti des matériaux existants (béton, brique, métal) en les valorisant plutôt qu&apos;en les cachant.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Béton ciré : sol et murs en continuité',
                solution: "Le béton ciré est le matériau signature du loft industriel. Appliqué en 2 à 3 mm d'épaisseur sur le support existant, il crée une surface continue sans joint, en gris, blanc cassé ou coloré. Sur les murs, il remplace avantageusement le carrelage dans les salles de bain. Il nécessite un support rigide et une application par un artisan expérimenté.",
                cout: '80 – 180 €/m²',
              },
              {
                titre: 'Brique apparente : murs bruts mis en valeur',
                solution: "Les murs en brique rouge ou meulière sont fréquents dans les anciens entrepôts du 13e ou les manufactures du 11e. Plutôt que de les enduire, les nettoyer (sablage léger), consolider les joints dégradés et appliquer une résine de protection transparente permet de préserver l'authenticité du lieu.",
                cout: '25 – 60 €/m²',
              },
              {
                titre: 'Acier noir : menuiseries, verrières, bibliothèques',
                solution: "L'acier thermolaqué noir mat est l'élément unificateur du style industriel : cadres de verrières, bibliothèques sur-mesure, garde-corps de mezzanine, robinetterie industrielle, suspensions. Il se combine parfaitement avec le bois massif (chêne naturel ou en teinte fumée) pour réchauffer l'ambiance.",
                cout: '400 – 900 €/m² (verrière)',
              },
              {
                titre: 'Poutres et structure apparente',
                solution: "Les fermes ou poutres IPN existantes sont à conserver et valoriser autant que possible. Sablage pour retrouver l'acier brut, peinture noire pour unifier, ou acier Corten pour une patine rouille contrôlée. En cas de nécessité de structure supplémentaire (mezzanine), intégrer les nouvelles poutres dans la composition existante.",
                cout: '1 500 – 5 000 € (sablage + traitement)',
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.titre}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.cout}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.solution}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Verrière et volumes */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Verrière intérieure et optimisation des volumes en open space
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
            La verrière intérieure est la pièce maîtresse de l&apos;aménagement d&apos;un loft. Elle permet de délimiter des espaces (chambre, bureau, salle de bain) tout en préservant la circulation de la lumière naturelle et la sensation de volume propre au loft.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: "Verrière atelier fixe : séparation chambre ou bureau",
                prix: '400 – 700 €/m²',
                detail: "La verrière fixe (sans partie ouvrante) est la solution la plus économique et la plus graphique. En acier thermolaqué noir avec petits carreaux (style atelier d'artiste) ou en grand vitrage feuilleté, elle sépare visuellement deux espaces sans les isoler acoustiquement. Idéale pour séparer bureau/salon ou créer une entrée lumineuse.",
              },
              {
                type: "Verrière à la française avec parties ouvrantes",
                prix: '600 – 1 000 €/m²',
                detail: "Si l'espace séparé (chambre, bureau) nécessite une isolation acoustique et thermique, les parties ouvrantes (battantes ou à galandage) permettent de moduler la séparation. Le joint de vitrage doit être soigné pour garantir l'isolation. Pour une chambre, prévoir un vitrage feuilleté acoustique (Rw ≥ 38 dB) afin de garantir un sommeil correct.",
              },
              {
                type: "Mezzanine avec garde-corps acier",
                prix: '800 – 1 800 €/m²',
                detail: "Dans un loft avec hauteur sous plafond de 4 m et plus, la mezzanine crée un niveau supplémentaire habitable (chambre, bureau, bibliothèque) sans cloisonner le volume. Le garde-corps en acier noir avec câbles tendus ou verre feuilleté préserve la transparence visuelle. La structure de la mezzanine doit être calculée par un ingénieur structure (charge 250 kg/m² minimum).",
              },
              {
                type: "Différences de niveau et de matériaux pour zoner l'espace",
                prix: '60 – 150 €/m²',
                detail: "Sans cloison ni verrière, il est possible de créer des zones distinctes grâce aux matériaux de sol différents (béton ciré zone vie, parquet chêne zone nuit, carrelage grand format cuisine), à de légères variations de niveau (estrade de 10 à 15 cm), ou à des poutres au plafond qui délimitent les zones visuellement.",
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

      {/* Section 4 — Coûts spécifiques loft */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Coûts spécifiques à la rénovation d&apos;un loft parisien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
            La rénovation d&apos;un loft parisien comporte plusieurs postes de coûts qui n&apos;existent pas (ou peu) dans une rénovation classique. Ces spécificités expliquent pourquoi le budget au m² d&apos;un loft est systématiquement supérieur à celui d&apos;un appartement haussmannien de même surface.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Dalle béton existante à traiter ou reprendre',
                solution: "La dalle béton d'un entrepôt est souvent dégradée (fissures, huile de machine, peinture époxy industrielle). Avant de poser le béton ciré ou tout autre revêtement, elle doit être préparée : ragréage, renforcement des fissures, application d'une résine d'accrochage. Dans certains cas, une nouvelle dalle de 6 cm est nécessaire.",
                cout: '40 – 120 €/m²',
              },
              {
                titre: 'Isolation hors normes des murs industriels',
                solution: "Les murs d'entrepôt (brique pleine, parpaing, béton banché) ont une inertie thermique intéressante mais une isolation insuffisante. L'isolation par l'intérieur (laine de roche + placo) est souvent la seule option sans toucher à la façade. Sur des hauteurs de 4 à 5 m, le coût par m² de surface murale est significatif.",
                cout: '80 – 180 €/m² de mur',
              },
              {
                titre: 'Toiture-terrasse ou sheds à étancher',
                solution: "Les lofts issus de bâtiments industriels ont souvent des toitures-terrasses ou des sheds (toits en dents de scie) dont l'étanchéité est dégradée. La réfection d'étanchéité est un préalable indispensable avant tout aménagement intérieur. Selon la surface et l'accès, le budget peut représenter 15 à 25% du budget total.",
                cout: '80 – 200 €/m² toiture',
              },
              {
                titre: 'Électricité et plomberie entièrement à reprendre',
                solution: "Un ancien atelier ou entrepôt n'a pas de distribution électrique ni de plomberie adaptée à l'habitation. Tout est à créer : tableau électrique aux normes résidentiel, réseau triphasé à adapter, plomberie chauffage + eau sanitaire + VMC. Ce poste représente souvent 20 à 30% du budget total d'un loft.",
                cout: '20 000 – 60 000 €',
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.titre}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.cout}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.solution}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Tableau prix loft vs appartement */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix rénovation loft Paris 2025 : loft vs appartement classique
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Comparatif des coûts de rénovation par poste entre un loft industriel parisien et un appartement haussmannien de même surface. Les prix s&apos;entendent main d&apos;œuvre + matériaux inclus.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Poste de travaux</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Loft industriel</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Appartement classique</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { poste: 'Sol (béton ciré vs parquet)', loft: '80 – 180 €/m²', appart: '40 – 120 €/m²' },
                  { poste: 'Isolation murs et toiture', loft: '80 – 200 €/m²', appart: '40 – 100 €/m²' },
                  { poste: "Électricité complète", loft: '8 000 – 25 000 €', appart: '5 000 – 15 000 €' },
                  { poste: 'Plomberie + chauffage', loft: '10 000 – 30 000 €', appart: '6 000 – 18 000 €' },
                  { poste: 'Verrière(s) intérieure(s)', loft: '3 000 – 15 000 €', appart: '0 – 6 000 €' },
                  { poste: 'Cuisine ouverte sur-mesure', loft: '8 000 – 25 000 €', appart: '5 000 – 15 000 €' },
                  { poste: 'Budget total 80 m²', loft: '96 000 – 200 000 €', appart: '60 000 – 130 000 €' },
                ].map((row, i) => (
                  <tr key={row.poste} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.poste}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.loft}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.appart}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Les erreurs à éviter dans la rénovation d&apos;un loft
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Ne pas faire appel à un ingénieur structure avant de créer une mezzanine ou de percer la structure",
                "Ne pas négliger l'isolation phonique : un loft avec plancher béton brut transmet tous les bruits d'impact",
                "Ne pas poser du béton ciré sur un support non préparé : fissures et décollements garantis",
                "Ne pas oublier la VMC : un loft avec grande hauteur accumule l'humidité en partie haute",
                "Ne pas sous-estimer le budget électricité : tout est à reprendre depuis le tableau général",
                "Ne pas choisir uniquement sur critère esthétique : l'acoustique d'un loft ouvert peut être problématique",
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
              { href: '/blog/creation-verriere-interieure-paris', title: 'Création verrière intérieure Paris' },
              { href: '/blog/sol-beton-cire-paris', title: 'Sol béton ciré Paris' },
              { href: '/blog/renovation-studio-paris', title: 'Rénovation studio Paris' },
              { href: '/blog/isolation-phonique-paris', title: 'Isolation phonique Paris' },
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénovation appartement haussmannien Paris' },
              { href: '/blog/renovation-duplex-paris', title: 'Rénovation duplex Paris' },
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
          Rénovez votre loft parisien avec Espace Design
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Artisan spécialisé lofts et espaces atypiques. Diagnostic gratuit. Devis détaillé sous 48h.
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
