import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Salle de Bain Italienne Paris', item: 'https://espacedesignparis.fr/blog/renovation-salle-de-bain-italienne-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Salle de Bain Italienne Paris : douche à l'italienne & prix 2025 | Espace Design",
  description: "Installer une douche à l'italienne dans un appartement parisien : bac à douche, receveur extra-plat, paroi vitrée. Prix et contraintes 2025.",
  datePublished: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-salle-de-bain-italienne-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix d'une douche à l'italienne à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix d'une douche à l'italienne à Paris varie selon la surface et les finitions : pour une douche à l'italienne standard (80×80 cm, receveur extra-plat, paroi vitrée, faïence murale), comptez 2 500 à 5 000 € tout compris (fourniture et pose). Pour une douche à l'italienne de grande taille avec carrelage grand format, niche intégrée et paroi frameless, le budget monte à 5 000 à 10 000 €. La création d'une vraie douche de plain-pied (chape coulée) dans un appartement parisien nécessite un soin particulier à l'étanchéité et coûte 500 à 1 500 € de plus qu'un receveur extra-plat.",
      },
    },
    {
      '@type': 'Question',
      name: "Peut-on installer une douche à l'italienne dans un petit appartement parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, la douche à l'italienne est particulièrement adaptée aux petites salles de bain parisiennes (3 à 5 m²). Un receveur extra-plat de 80×80 ou 80×120 cm intégré au sol crée une sensation d'espace bien supérieure à une cabine de douche avec bac surélevé. La paroi vitrée (fixe ou coulissante) sans cadre (frameless) renforce cet effet. En revanche, dans un appartement en étage avec plancher bois, il faut vérifier la solidité du plancher et prévoir une étanchéité renforcée (Schlüter Kerdi ou équivalent) pour éviter tout risque de fuite vers les voisins du dessous.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelle est la différence entre receveur extra-plat et douche de plain-pied ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Un receveur extra-plat (hauteur 2,5 à 4 cm) est posé sur le sol existant avec un siphon de sol intégré. Simple à installer, adapté aux planchers bois ou béton sans modification structurelle majeure. La douche de plain-pied (zéro seuil) nécessite de creuser dans le plancher pour y intégrer le siphon et obtenir un sol parfaitement de niveau. Plus spectaculaire et accessible PMR, mais plus complexe en appartement parisien (épaisseur de plancher limitée, risques de percement). Le receveur extra-plat est la solution la plus adaptée à 80 % des appartements parisiens.",
      },
    },
    {
      '@type': 'Question',
      name: "Combien de temps dure l'installation d'une douche à l'italienne à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La rénovation complète d'une salle de bain avec installation d'une douche à l'italienne dure généralement 5 à 10 jours ouvrés pour un artisan seul : démolition (1 jour), plomberie et étanchéité (1 à 2 jours), carrelage (2 à 3 jours), menuiserie et finitions (1 à 2 jours). Si des travaux d'électricité (éclairage, VMC) ou de plâtrerie (cloison, niche) sont ajoutés, comptez 2 à 3 jours supplémentaires. Il est indispensable de ne pas utiliser la douche avant 48h après la pose du joint silicone et 28 jours après la pose de l'étanchéité sous carrelage.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Salle de Bain Italienne Paris : douche à l'italienne & prix 2025 | Espace Design",
  description: "Installer une douche à l'italienne dans un appartement parisien : bac à douche, receveur extra-plat, paroi vitrée. Prix et contraintes 2025.",
  keywords: "salle de bain italienne Paris, douche à l'italienne Paris, douche walk-in Paris, receveur extra-plat Paris, rénovation salle de bain Paris",
}

export default function ArticleSalleDeBainItalienne() {
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
            Salle de Bain Italienne Paris : douche à l&apos;italienne &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            La douche à l&apos;italienne est devenue la référence de la salle de bain contemporaine. Receveur extra-plat, paroi vitrée frameless, grande douche de plain-pied : comment installer ce type de douche dans un appartement parisien souvent petit et à plancher bois ? Contraintes techniques, matériaux, prix 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Types de douche italienne */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les 3 types de douche à l&apos;italienne pour appartement parisien
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Toutes les douches à l&apos;italienne ne se valent pas en termes de complexité d&apos;installation et de rendu final. Le choix dépend de la configuration de votre salle de bain, de l&apos;état du plancher et de votre budget.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Dans les appartements parisiens anciens (planchers bois), le receveur extra-plat est la solution la plus sûre. La douche de plain-pied est possible mais nécessite des vérifications structurelles préalables et une étanchéité renforcée. Dans les appartements modernes (dalle béton), toutes les options sont envisageables.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: "Receveur extra-plat (solution la plus courante)",
                  detail: "Hauteur 2,5 à 4 cm seulement. Posé sur le sol existant avec mortier ou pieds réglables. Siphon de sol intégré dans le receveur. Simple à installer dans tous types d'appartements, même avec plancher bois. Dimensions standard : 80×80, 80×120, 90×120, 100×100 cm. Prix receveur : 150 à 600 € selon la matière (acrylique, résine, pierre). Rendu propre et contemporain avec une entrée de douche basse.",
                },
                {
                  enjeu: "Douche de plain-pied (zéro seuil)",
                  detail: "Sol de la douche au même niveau que le reste de la salle de bain. Nécessite d'intégrer le siphon dans le plancher (percement et abaissement du sol sur 8 à 15 cm). Possible sur dalle béton ou plancher bois épais (min. 15 cm). Étanchéité sous carrelage impérative (membrane Schlüter, Mapei ProSound ou équivalent). Rendu premium, accessible PMR. Surcoût de 800 à 2 000 € par rapport au receveur extra-plat.",
                },
                {
                  enjeu: "Douche avec niche et siphon linéaire",
                  detail: "La tendance actuelle : siphon linéaire (caniveau de douche) le long d'un mur, sol en carrelage grand format incliné vers ce caniveau. Rendu ultra-épuré, pas de receveur visible. Idéal pour les grandes salles de bain (>7 m²). Niche intégrée dans un mur pour les flacons. Complexité de mise en œuvre plus élevée (pente précise, étanchéité sur toute la surface). Prix : 3 000 à 8 000 € pour la zone douche seule.",
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

      {/* Section 2 — Parois vitrées */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Parois vitrées : fixe, pivotante, coulissante ou frameless
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La paroi vitrée est l&apos;élément qui définit le style de la douche à l&apos;italienne. Le choix dépend de la configuration de l&apos;espace et des préférences esthétiques.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: "Paroi fixe (walk-in)",
                solution: "Une ou deux parois fixes en verre trempé 8 à 10 mm, sans porte. La douche est ouverte d'un côté. Idéal pour les grandes douches ou les salles de bain sans courant d'air. Entretien très facile (pas de rail). Rendu ultra-épuré. Inconvénient : légères projections d'eau possibles si la paroi est trop petite ou mal positionnée.",
                cout: "300 – 800 €",
              },
              {
                titre: "Paroi pivotante (porte battante)",
                solution: "Une porte vitrée qui s'ouvre vers l'intérieur ou l'extérieur. Étanche et pratique dans les petits espaces. Nécessite un dégagement d'ouverture suffisant. Profil aluminium (chrome, noir mat) visible. Prix intermédiaire. Bon compromis étanchéité / confort dans une salle de bain de 4 à 6 m².",
                cout: "400 – 1 200 €",
              },
              {
                titre: "Paroi coulissante",
                solution: "Porte qui coulisse sur un rail. Pratique dans les espaces réduits où une porte battante gênerait. Profil aluminium sur rail à entretenir. Moins étanche qu'une porte pivotante. Largeur mini recommandée : 70 cm pour une douche coulissante confortable. Standard dans les salles de bain de 3 à 4 m².",
                cout: "350 – 1 000 €",
              },
              {
                titre: "Frameless (sans cadre visible)",
                solution: "Verre trempé épais (10 mm) fixé directement dans la maçonnerie ou par des charnières en inox invisibles. Pas de profil aluminium apparent. Rendu haut de gamme et contemporain. Nettoyage plus simple (pas de rails et de profilés). Coût plus élevé mais rendu qui valorise immédiatement la salle de bain. Recommandé pour les projets premium.",
                cout: "800 – 2 500 €",
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

      {/* Section 3 — Carrelage et matériaux */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Carrelage et matériaux pour douche à l&apos;italienne à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le choix du carrelage influence autant l&apos;esthétique que la facilité d&apos;entretien. Quelques règles à connaître pour une salle de bain italienne parisienne réussie.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: "Grand format (60×60, 60×120, 120×120 cm)",
                prix: "25 – 80 €/m²",
                detail: "La tendance la plus demandée. Peu de joints, rendu minimaliste, impression d'espace. En grès cérame rectifié (résistant, non poreux, facile d'entretien). Réservé aux surfaces planes et d'aplomb — dans les appartements anciens, le support doit être parfaitement dressé avant pose. Pose plus longue (découpes complexes) mais rendu haut de gamme.",
              },
              {
                type: "Imitation béton ou pierre naturelle",
                prix: "20 – 60 €/m²",
                detail: "Le grès cérame imitation béton ciré ou pierre est très prisé dans les rénovations parisiennes contemporaines. Rendu industriel ou naturel, antidérapant dans les zones douche (classe A ou B). Attention aux carrelages imitation marbre en zone douche : vérifier le coefficient d'absorption (R11 minimum pour le sol de douche).",
              },
              {
                type: "Zellige et faïence artisanale",
                prix: "40 – 150 €/m²",
                detail: "Le zellige marocain (petits carreaux émaillés irréguliers) est très en vogue dans les salles de bain parisiennes tendance. Rendu artisanal et chaleureux, idéal pour une niche ou un pan de mur derrière la douche. Pose plus délicate (irrégularités à gérer), joints blancs ou colorés. Réservé aux murs (pas au sol de douche).",
              },
              {
                type: "Résine et béton ciré",
                prix: "60 – 120 €/m²",
                detail: "Le béton ciré et la résine offrent un rendu sans joint, très épuré. Adapté aux murs et au sol de douche (avec antidérapant). Nécessite un entretien annuel (protection hydrofuge) et un applicateur expérimenté. Sensible aux chocs et aux acides (produits ménagers). Prix à poser inclus la préparation du support.",
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

      {/* Section 4 — Budget récapitulatif */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Budget salle de bain italienne à Paris : prix 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Tous les tarifs ci-dessous s&apos;entendent fourniture et pose, pour un appartement parisien. Les prix incluent la démolition de l&apos;existant, la plomberie, l&apos;étanchéité, le carrelage et les sanitaires.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Prestation</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Entrée de gamme</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Milieu de gamme</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Haut de gamme</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    prestation: "Receveur extra-plat 80×80",
                    bas: "150 €",
                    milieu: "300 €",
                    haut: "600 €",
                  },
                  {
                    prestation: "Paroi vitrée",
                    bas: "300 €",
                    milieu: "600 €",
                    haut: "2 000 €",
                  },
                  {
                    prestation: "Carrelage murs + sol (pose incluse)",
                    bas: "800 €",
                    milieu: "1 500 €",
                    haut: "4 000 €",
                  },
                  {
                    prestation: "Étanchéité sous carrelage",
                    bas: "300 €",
                    milieu: "500 €",
                    haut: "800 €",
                  },
                  {
                    prestation: "Robinetterie + mitigeur thermostatique",
                    bas: "200 €",
                    milieu: "500 €",
                    haut: "1 500 €",
                  },
                  {
                    prestation: "SDB complète avec douche italienne (5 m²)",
                    bas: "4 000 €",
                    milieu: "7 000 €",
                    haut: "15 000 €",
                  },
                ].map((row, i) => (
                  <tr key={row.prestation} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.prestation}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.bas}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.milieu}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.haut}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Points de vigilance pour une douche italienne réussie
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Vérifier la solidité du plancher avant installation (surtout planchers bois anciens)",
                "Prévoir une VMC efficace : la douche italienne ouverte produit plus de vapeur",
                "Imperméabiliser systématiquement les angles et raccords (membrane ou kit d'étanchéité)",
                "Choisir un carrelage antidérapant R11 minimum pour le sol de douche",
                "Prévoir un vide sanitaire ou une trappe d'accès au siphon de douche",
                "Poser le joint silicone en dernière étape et attendre 48h avant utilisation",
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

      {/* Section 5 — Contraintes appartement parisien */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Contraintes spécifiques aux appartements parisiens anciens
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Installer une douche à l&apos;italienne dans un appartement parisien du XIXe ou début XXe siècle présente des défis techniques absents des constructions récentes.
          </p>
          <div className="space-y-4">
            {[
              {
                enjeu: "Plancher bois et risque de fuite",
                detail: "Dans les immeubles anciens à planchers bois, une étanchéité parfaite est indispensable. La moindre fuite sous carrelage peut traverser le plancher et causer des dégâts chez le voisin du dessous. Utiliser systématiquement une membrane d'étanchéité liquide (Schlüter Kerdi, Mapei Mapelastic) sur l'ensemble des murs et du sol de la zone douche, avant la pose du carrelage. Un test d'étanchéité (mise en eau 24h) est recommandé avant la pose des finitions.",
              },
              {
                enjeu: "Hauteur et inclinaison du plancher",
                detail: "Les planchers des immeubles anciens sont rarement parfaitement plans et horizontaux. Avant la pose d'un receveur extra-plat ou d'un carrelage de douche, le support doit être dressé au mortier de nivellement (ravoirage). Une différence de niveau de 1 cm sur 2 m peut compromettre l'écoulement correct de la douche. Prévoir 1 à 2 jours de préparation de support.",
              },
              {
                enjeu: "Évacuation et plomberie existante",
                detail: "Dans les immeubles anciens, les évacuations de salle de bain sont souvent situées en attente près des murs. L'installation d'une douche à l'italienne peut nécessiter de déplacer le siphon de sol, ce qui implique des travaux de plomberie dans le sol ou sous le plancher. Coût : 500 à 1 500 € selon l'accessibilité. À anticiper dès la conception du projet.",
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

      {/* Section 6 — Accessoires et finitions */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Accessoires et finitions pour une douche italienne premium
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
            Les détails font la différence entre une douche fonctionnelle et une salle de bain vraiment réussie. Voici les éléments qui valorisent le plus une douche à l&apos;italienne dans un appartement parisien :
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Niche murale intégrée : rangement flacons encastré dans le mur, carrelé en contraste (100 à 300 €)",
              "Robinetterie thermostatique : température constante et économie d'eau (150 à 600 €)",
              "Douchette à effet pluie (plafond ou mural) : expérience spa à domicile (80 à 400 €)",
              "Éclairage LED encastré waterproof IP65 dans la douche ou en périphérie (100 à 300 €)",
              "Porte-serviette chauffant (sèche-serviants électrique) intégré à la rénovation (200 à 600 €)",
              "Caniveau de douche design en inox noir mat : substitut tendance du siphon classique (150 à 500 €)",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
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
              { href: '/blog/renovation-appartement-ancien-paris', title: 'Rénovation appartement ancien Paris' },
              { href: '/blog/humidite-appartement-paris', title: 'Humidité appartement Paris' },
              { href: '/blog/isolation-phonique-paris', title: 'Isolation phonique Paris' },
              { href: '/blog/renovation-cuisine-ouverte-paris', title: 'Cuisine ouverte Paris' },
              { href: '/blog/renovation-cave-amenagee-paris', title: 'Cave aménagée Paris' },
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
          Installez votre douche à l&apos;italienne à Paris
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Artisan spécialisé salle de bain Paris. Étanchéité garantie. Devis gratuit sous 48h.
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
