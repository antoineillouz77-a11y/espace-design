import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Cave Aménagée Paris', item: 'https://espacedesignparis.fr/blog/renovation-cave-amenagee-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Cave Aménagée Paris : sous-sol, rangement & prix 2025 | Espace Design",
  description: "Aménager une cave ou sous-sol parisien : sécurisation humidité, isolation, électricité, usages possibles. Prix et artisan 2025.",
  datePublished: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-cave-amenagee-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Peut-on aménager une cave en chambre ou en bureau à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "En théorie, transformer une cave en espace habitable (chambre, bureau) est possible si la hauteur sous plafond est supérieure à 2,20 m et si les conditions de ventilation, d'éclairage et d'humidité sont réunies. En pratique, à Paris, une cave en sous-sol est rarement habitable au sens réglementaire (absence de lumière naturelle directe). Elle peut en revanche servir d'espace de travail, de salle de jeux, de home-cinema ou de cave à vin, sans être déclarée comme surface habitable. Une déclaration en mairie est nécessaire si les travaux modifient la surface de plancher ou la destination du local.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel est le prix d'un aménagement de cave à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix d'un aménagement de cave à Paris varie selon l'état de départ et les usages visés. Pour un assainissement et rangements basiques (traitement humidité, étagères, électricité), comptez 3 000 à 8 000 €. Pour une cave entièrement aménagée (isolation, cloisons, sol, éclairage, ventilation), le budget monte à 10 000 à 30 000 € selon la surface (10 à 30 m²). Une cave à vin climatisée ou un home-cinema nécessite des équipements spécifiques et peut atteindre 15 000 à 40 000 € pour une réalisation soignée.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment traiter l'humidité dans une cave parisienne avant de l'aménager ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le traitement de l'humidité est la première étape indispensable avant tout aménagement. Selon le type d'humidité : remontées capillaires (injection de résine hydrofuge dans les murs, 150 à 300 €/ml + enduit assainissant), infiltrations par le sol ou les murs (drainage périphérique, drain français, membrane d'étanchéité), condensation (ventilation mécanique, déhumidificateur). Ne jamais aménager (sol, cloisons, isolation) avant d'avoir traité la source de l'humidité, sous peine de voir les finitions se dégrader rapidement.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il une autorisation pour aménager sa cave à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les travaux d'aménagement intérieur (isolation, sol, cloisons légères, électricité) ne nécessitent généralement pas d'autorisation administrative si la surface de plancher ne change pas et si l'usage reste non habitable. En revanche, si vous créez une surface habitable supplémentaire (hauteur >1,80 m, fenêtre sur rue) ou modifiez la façade (création d'un accès, soupirail), une déclaration préalable de travaux est nécessaire. En copropriété, tout aménagement d'une cave privative nécessite l'accord du syndic et le respect du règlement de copropriété.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Cave Aménagée Paris : sous-sol, rangement & prix 2025 | Espace Design",
  description: "Aménager une cave ou sous-sol parisien : sécurisation humidité, isolation, électricité, usages possibles. Prix et artisan 2025.",
  keywords: "cave aménagée Paris, aménagement sous-sol Paris, cave rénovation Paris, cave à vin Paris, home cinema cave Paris",
}

export default function ArticleCaveAmenageeParis() {
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
            Cave Aménagée Paris : sous-sol, rangement &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Dans les immeubles parisiens, les caves et sous-sols représentent souvent des surfaces inexploitées de 10 à 30 m². Bien aménagées, elles deviennent des espaces de rangement optimisés, des caves à vin, des home-cinemas ou des ateliers. Mais l&apos;humidité, la ventilation et la réglementation exigent une approche rigoureuse. Guide complet 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Usages possibles */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Quels usages pour une cave aménagée à Paris ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              La cave parisienne n&apos;est plus seulement un espace de stockage. Bien traité et aménagé, ce volume peut apporter une réelle valeur d&apos;usage, voire financière, au bien immobilier. La clé est d&apos;adapter l&apos;aménagement aux contraintes du lieu : hauteur, humidité, luminosité.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Le 11e, le 10e, le 18e ou le 20e arrondissement concentrent de nombreux immeubles avec des caves de 10 à 25 m² souvent utilisées comme débarras. Ces espaces méritent d&apos;être repensés, notamment dans un marché immobilier parisien où chaque mètre carré compte.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: "Espace de rangement optimisé",
                  detail: "L'usage le plus fréquent et le plus simple à réaliser. Rayonnages métalliques ou bois (200 à 600 €), meubles bas pour outillage, crochets muraux pour vélos. Si l'humidité est traitée, on peut y stocker des cartons, des archives ou des équipements saisonniers. Un bon éclairage LED (détecteur de présence) et un sol traité (résine ou carrelage) transforment une cave sombre en espace pratique.",
                },
                {
                  enjeu: "Cave à vin climatisée",
                  detail: "Paris compte de nombreux amateurs de vin désireux d'optimiser leurs conditions de conservation. Une cave à vin aménagée (climatiseur de cave 200 à 800 W, casiers à bouteilles en bois ou métal, isolation thermique) maintient une température constante de 12 à 14°C et un taux d'humidité de 60 à 70 %. Surface minimale : 5 m². Investissement total : 3 000 à 12 000 € selon la capacité. La valeur ajoutée pour un bien avec cave à vin est réelle lors de la revente.",
                },
                {
                  enjeu: "Home-cinema ou salle de jeux",
                  detail: "Une cave sans lumière naturelle est idéale pour un espace home-cinema (obscurité totale). Isolation acoustique des murs et du plafond (laine de roche, placo phonique), revêtement de sol absorbant (moquette, parquet), éclairage d'ambiance LED, prises électriques dédiées écran et système son. Ventilation mécanique indispensable (VMC hygroréglable). Budget : 5 000 à 15 000 € pour une cave de 12 à 20 m² bien finie.",
                },
                {
                  enjeu: "Atelier ou espace de travail",
                  detail: "Pour les artistes, artisans ou professionnels en télétravail, la cave offre l'isolement sonore et l'espace de travail manquants dans un appartement parisien. Points clés : ventilation renforcée (surtout si peinture ou travaux manuels), éclairage artificiel puissant (1 000 lux minimum), isolation thermique pour l'hiver, accès électrique suffisant (tableau indépendant recommandé). Ne pas oublier la réglementation si activité commerciale.",
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

      {/* Section 2 — Traitement humidité */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Traitement de l&apos;humidité : étape indispensable avant tout aménagement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La quasi-totalité des caves parisiennes souffre d&apos;un problème d&apos;humidité. Commencer l&apos;aménagement sans traiter la source conduit à des dégradations rapides des finitions et des matériaux. L&apos;humidité doit être traitée en premier, impérativement.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: "Diagnostic : identifier la source",
                solution: "Test du film plastique collé 48h sur le mur : condensation côté mur = remontées capillaires ou infiltration ; condensation côté cave = condensation atmosphérique. Hygromètre : taux >70% = problème actif. Traces blanches (salpêtre) sur les murs = signe de remontées capillaires avancées.",
                cout: "Gratuit",
              },
              {
                titre: "Injection de résine (remontées capillaires)",
                solution: "Perforations horizontales dans le mur tous les 10 cm, injection de résine hydrofuge sous pression créant une barrière permanente. Puis démolition des enduits contaminés et application d'un enduit assainissant respirant (chaux hydraulique ou ciment blanc). Technique la plus durable.",
                cout: "150 – 300 €/ml",
              },
              {
                titre: "Drainage périphérique (infiltrations par le sol)",
                solution: "Création d'un drain en périphérie du sol de cave, collectant les eaux d'infiltration et les évacuant vers un puisard ou un réseau. Pose d'une membrane d'étanchéité sur les murs. Solution radicale pour les caves touchées par des infiltrations d'eaux souterraines. Nécessite un artisan spécialisé.",
                cout: "5 000 – 15 000 €",
              },
              {
                titre: "Ventilation (condensation atmosphérique)",
                solution: "Installation d'une VMC simple flux ou d'un extracteur hygroréglable dans la cave. Amélioration des soupiraux existants (grilles, ventilation naturelle). Dans les cas sévères, déhumidificateur électrique programmable (150 à 500 €) en complément. Maintien du taux d'humidité sous 65%.",
                cout: "300 – 1 500 €",
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

      {/* Section 3 — Travaux d'aménagement */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Les travaux d&apos;aménagement d&apos;une cave parisienne
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Une fois l&apos;humidité maîtrisée, les travaux d&apos;aménagement suivent une logique bien définie : sol, murs, isolation, électricité, puis finitions.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: "Sol : résine, carrelage ou béton ciré",
                prix: "30 – 80 €/m²",
                detail: "Le sol de cave doit être résistant à l'humidité résiduelle, facile à nettoyer et antidérapant. Les options les plus adaptées : résine époxy (imperméable, brillant ou mat, 40 à 70 €/m² posé), carrelage grès cérame (résistant, nombreux formats, 30 à 60 €/m² posé), béton ciré (rendu esthétique, protection obligatoire, 60 à 100 €/m² posé). Éviter le parquet bois massif qui supporte mal l'humidité résiduelle d'une cave.",
              },
              {
                type: "Isolation thermique et phonique des murs",
                prix: "20 – 60 €/m²",
                detail: "Pour un usage bureau, home-cinema ou cave à vin, l'isolation des murs et du plafond est indispensable. Options : doublage laine de roche + placo BA13 (isolation thermique et phonique, 25 à 45 €/m²), isolation projetée en sous-face du plancher (laine de verre soufflée), panneaux isolants rigides polyuréthane (haute performance, 40 à 70 €/m²). L'isolation doit être réalisée côté intérieur après traitement de l'humidité.",
              },
              {
                type: "Électricité : tableau indépendant et éclairage",
                prix: "1 500 – 5 000 €",
                detail: "Tout aménagement de cave nécessite une alimentation électrique adaptée. La pose d'un tableau électrique secondaire dans la cave (départ depuis le tableau principal de l'appartement) permet une gestion indépendante. Prises 16A et 20A selon les usages, prises dédiées (climatiseur de cave à vin, congélateur, écran home-cinema). Éclairage LED encastré IP44 minimum (résistant à l'humidité). Câblage en gaine ICTA obligatoire.",
              },
              {
                type: "Cloisons légères et aménagement intérieur",
                prix: "50 – 150 €/m²",
                detail: "Pour délimiter des zones (rangement, cave à vin, bureau), des cloisons légères en plaques de plâtre hydrofuges (placo vert ou aquapanel) ou en maçonnerie légère (carreaux de plâtre hydrofuge) sont utilisées. Préférer les plaques hydrofuges en cave même traitée. Des portes bois ou métal permettent de séparer les espaces et d'améliorer l'isolation thermique.",
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
            Budget cave aménagée à Paris : récapitulatif 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Estimations pour une cave parisienne de 10 à 20 m², main d&apos;œuvre et matériaux inclus.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Usage / Prestation</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget min</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget max</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Durée chantier</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { usage: "Assainissement humidité seul", min: "2 000 €", max: "8 000 €", duree: "3 – 7 jours" },
                  { usage: "Rangements optimisés (sol + étagères + éclairage)", min: "3 000 €", max: "8 000 €", duree: "4 – 8 jours" },
                  { usage: "Cave à vin climatisée (15 m²)", min: "5 000 €", max: "15 000 €", duree: "1 – 2 sem." },
                  { usage: "Home-cinema / salle de jeux (15 m²)", min: "8 000 €", max: "20 000 €", duree: "2 – 3 sem." },
                  { usage: "Bureau / atelier (20 m²)", min: "8 000 €", max: "18 000 €", duree: "2 – 3 sem." },
                  { usage: "Cave entièrement aménagée haut de gamme", min: "15 000 €", max: "40 000 €", duree: "4 – 6 sem." },
                ].map((row, i) => (
                  <tr key={row.usage} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.usage}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.min}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.max}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.duree}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Les erreurs à éviter lors de l&apos;aménagement d&apos;une cave parisienne
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Ne pas aménager avant d'avoir traité l'humidité : les finitions se dégraderont rapidement",
                "Ne pas poser de parquet bois massif ou stratifié en cave, même traitée",
                "Ne pas oublier la ventilation : une cave fermée accumule CO2 et moisissures",
                "Ne pas négliger l'accès : une cave trop encombrée à l'entrée perd tout son usage pratique",
                "Ne pas isoler avant de traiter l'humidité : l'isolation piège l'humidité résiduelle",
                "Ne pas omettre de vérifier le règlement de copropriété avant tous travaux",
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

      {/* Section 5 — Réglementation */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Réglementation et autorisations pour aménager une cave à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;aménagement d&apos;une cave à Paris est encadré par plusieurs réglementations qu&apos;il convient de respecter pour éviter des conflits ou des obligations de remise en état.
          </p>
          <div className="space-y-4">
            {[
              {
                enjeu: "Travaux sans autorisation administrative",
                detail: "Les travaux intérieurs n'affectant pas la surface habitable ni la structure : sol (résine, carrelage), peinture, installation d'étagères, éclairage, prise de courant. Aucune démarche en mairie n'est nécessaire. En copropriété, informer le syndic par lettre est une bonne pratique.",
              },
              {
                enjeu: "Déclaration préalable de travaux",
                detail: "Nécessaire si les travaux créent une surface de plancher supplémentaire (agrandissement de l'espace existant), modifient la façade (création d'une fenêtre, nouveau soupirail, porte extérieure), ou changent la destination du local (activité commerciale). À déposer en mairie d'arrondissement, délai d'instruction 1 mois.",
              },
              {
                enjeu: "Règlement de copropriété",
                detail: "Le règlement de copropriété définit les usages autorisés des caves privatives. Certains règlements interdisent les activités artisanales, commerciales ou la création d'espaces habitables. Avant tout projet d'envergure, relire le règlement de copropriété et, si nécessaire, soumettre le projet au syndic et à l'assemblée générale.",
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

      {/* Section 6 — Valorisation immobilière */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Cave aménagée et valorisation immobilière à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
            Une cave bien aménagée peut significativement valoriser un bien parisien lors de la revente ou de la mise en location. Dans un marché immobilier parisien tendu, tout mètre carré additionnel exploitable est un argument de valeur.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Cave à vin aménagée : argument de prestige pour les acheteurs CSP+, valorisation estimée 5 000 à 20 000 €",
              "Espace de rangement optimisé : réduit l'encombrement des pièces de vie, valorisation indirecte du bien",
              "Cave traitée contre l'humidité : rassure les acheteurs, réduit les négociations de prix",
              "Accès cave depuis l'appartement (escalier intérieur) : rare à Paris, très valorisant (+10 à +20% sur la cave)",
              "Cave convertie en bureau : en période de télétravail, forte demande pour les espaces de travail séparés",
              "Cave sèche et isolée thermiquement : possibilité de vendre le bien avec label énergétique amélioré",
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
              { href: '/blog/humidite-appartement-paris', title: 'Humidité appartement Paris' },
              { href: '/blog/isolation-phonique-paris', title: 'Isolation phonique Paris' },
              { href: '/blog/renovation-appartement-ancien-paris', title: 'Rénovation appartement ancien Paris' },
              { href: '/blog/renovation-appartement-paris-11e-bastille', title: 'Rénovation Paris 11e Bastille' },
              { href: '/blog/renovation-salle-de-bain-italienne-paris', title: 'Douche à l\'italienne Paris' },
              { href: '/blog/renovation-cuisine-ouverte-paris', title: 'Cuisine ouverte Paris' },
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
          Aménagez votre cave parisienne
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Traitement humidité, isolation, électricité, finitions. Devis gratuit sous 48h.
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
