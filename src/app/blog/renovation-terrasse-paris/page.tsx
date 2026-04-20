import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: "Rénovation Terrasse Paris : dalles, bardage, étanchéité — prix 2025",
  description: "Rénover une terrasse parisienne : dalles bois composite, carrelage, étanchéité, balcon. Prix artisan Paris 2025.",
  keywords: [
    "rénovation terrasse Paris",
    "dalles terrasse Paris",
    "étanchéité terrasse Paris",
    "artisan terrasse Paris",
    "bois composite terrasse Paris",
    "carrelage terrasse Paris",
    "prix rénovation terrasse Paris",
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation Terrasse Paris : guide complet matériaux & prix 2025",
  description: "Rénover une terrasse parisienne : dalles bois composite, carrelage, étanchéité, balcon. Prix artisan Paris 2025.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
  url: 'https://espacedesignparis.fr/blog/renovation-terrasse-paris',
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Faut-il une autorisation pour rénover une terrasse à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La simple pose d'un nouveau revêtement (lames composite, dalles sur plots) ne nécessite pas d'autorisation si elle ne modifie pas l'aspect extérieur de l'immeuble et n'affecte pas l'étanchéité commune. En revanche, une déclaration préalable en mairie est requise si les travaux modifient l'aspect extérieur visible depuis la rue (pergola, garde-corps, bardage). Dans les secteurs sauvegardés parisiens et en copropriété, l'accord de l'assemblée générale et parfois de l'ABF est nécessaire.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel revêtement choisir pour une terrasse parisienne ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour une terrasse en copropriété à Paris, les dalles bois composite sur plots sont la solution la plus adaptée : pose sans collage (préserve l'étanchéité), démontable, légère, sans entretien et résistante aux UV. Pour une terrasse de maison ou un rooftop privatif, le grès cérame grand format offre un rendu contemporain et une durabilité maximale. Le bois exotique (ipé, teck) est plébiscité pour son aspect naturel mais demande un traitement annuel.",
      },
    },
    {
      '@type': 'Question',
      name: "Combien coûte la rénovation d'une terrasse à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les prix varient selon les matériaux et l'état de la terrasse. Comptez 1 500 à 3 500 € pour des lames bois composite sur 10 m², 2 000 à 4 000 € pour du carrelage grès cérame sur 10 m². Si l'étanchéité est à reprendre, ajoutez 3 000 à 7 000 € pour 20 m². Une rénovation complète (dépose + étanchéité + revêtement) d'une terrasse de 20 m² à Paris se chiffre entre 6 000 et 14 000 €.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il refaire l'étanchéité avant de poser des dalles ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, si des fissures, des cloques sur la membrane, des traces d'infiltration en dessous ou des zones décollées sont détectées. L'inspection de l'étanchéité est recommandée avant tout projet de rénovation de terrasse à Paris, car une étanchéité défaillante peut causer des dégâts importants dans l'appartement du dessous. La pose de dalles sur plots préserve l'étanchéité existante et facilite les inspections futures.",
      },
    },
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: "Rénovation Terrasse Paris", item: 'https://espacedesignparis.fr/blog/renovation-terrasse-paris' },
  ],
}

export default function ArticleRenovationTerrasseParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-12 bg-[#1C1C1C]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#D4AF37] text-[10px] font-light uppercase tracking-[0.25em] mb-4">
            Extérieur
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Terrasse Paris : guide complet matériaux & prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            À Paris, une terrasse bien rénovée est un atout immobilier majeur. Revêtement, étanchéité,
            isolation phonique, contraintes de copropriété et règles du PLU : ce guide complet vous donne
            toutes les clés pour réussir la rénovation de votre terrasse parisienne, du choix des dalles
            à l&apos;enveloppe budgétaire finale.
          </p>
        </div>
      </section>

      {/* Section 1 — Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les terrasses parisiennes : enjeux et spécificités
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Paris concentre trois grandes typologies de terrasses : les terrasses en toiture-terrasse des immeubles
              haussmanniens (souvent accessibles depuis le dernier étage), les balcons filants ou terrasses
              de plain-pied des immeubles récents (années 1960-2000), et les rooftops privatifs des lofts
              et immeubles contemporains. Chacune présente des contraintes techniques spécifiques.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              L&apos;enjeu principal d&apos;une terrasse parisienne est double : l&apos;étanchéité (la terrasse est
              souvent la toiture de l&apos;appartement en dessous) et l&apos;isolation phonique (les bruits de pas
              sur un revêtement dur peuvent nuire à la tranquillité du voisinage). Ces deux contraintes
              conditionnent le choix des matériaux et la technique de pose.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Du point de vue immobilier, une terrasse rénovée augmente significativement la valeur d&apos;un bien
              parisien. En 2025, une terrasse de 20 m² en bon état peut représenter un supplément de valeur
              de 60 000 à 150 000 € selon l&apos;arrondissement. L&apos;investissement dans une rénovation soignée
              (6 000 à 14 000 €) est donc très vite amorti.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { stat: "Étanchéité", label: "Point de contrôle prioritaire avant tout revêtement" },
              { stat: "Phonique", label: "Isolation aux bruits de pas : critère de choix des matériaux" },
              { stat: "Copropriété", label: "Accord AG souvent requis pour travaux structurels" },
            ].map((el) => (
              <div key={el.stat} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100 text-center">
                <div className="font-display text-lg font-semibold text-[#D4AF37] mb-2">{el.stat}</div>
                <div className="text-gray-600 text-xs font-light leading-relaxed">{el.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Matériaux */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Les matériaux pour terrasse à Paris : comparatif 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Quatre grandes familles de revêtements s&apos;adaptent aux terrasses parisiennes, chacune avec
            ses avantages, ses limites et son coût :
          </p>
          <div className="space-y-5">
            <div>
              <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                Les dalles bois composite sur plots réglables
              </h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                Le composite (fibres de bois + résine) est devenu le choix numéro un pour les terrasses
                parisiennes en copropriété. La pose sur plots réglables est réversible, ne touche pas
                l&apos;étanchéité existante et permet les inspections futures sans dépose. Aucun entretien
                annuel, résistance aux UV garantie 15 à 25 ans selon les gammes. Largeur de lame : 14 cm
                (aspect traditionnel) à 24 cm (aspect contemporain). Couleurs : gris bois, chêne naturel,
                brun teck. Prix posé : <strong className="text-[#1C1C1C]">35 à 80 €/m²</strong> selon la gamme.
              </p>
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                Le carrelage grès cérame grand format
              </h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                Le grès cérame est la solution la plus durable et la plus hygiénique pour les terrasses
                exposées aux intempéries parisiennes. Les formats 60×60, 60×120 ou 80×80 cm offrent
                un rendu contemporain minimaliste. Pour une terrasse en copropriété, la pose sur plots
                est préférable au collage pour préserver l&apos;étanchéité. Indice antidérapant R11 ou R12
                recommandé en extérieur. Prix posé sur plots : <strong className="text-[#1C1C1C]">60 à 120 €/m²</strong>.
              </p>
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                La résine polyuréthane ou l&apos;époxy extérieur
              </h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                La résine appliquée en revêtement continu offre un rendu contemporain très épuré, idéal
                pour les rooftops ou les terrasses design. Elle est imperméable, facile à entretenir
                et accepte les motifs et les couleurs. En extérieur, il faut utiliser une résine spéciale
                UV avec granulats antidérapants intégrés. Durée de vie : 10 à 15 ans selon l&apos;exposition.
                Prix : <strong className="text-[#1C1C1C]">50 à 100 €/m²</strong> posé.
              </p>
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                Le béton désactivé et les dalles béton
              </h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                Pour les terrasses de plain-pied ou les jardins en terrasse, le béton désactivé (granulats
                apparents) ou les dalles en béton lavé offrent un aspect naturel et rustique. Compatible
                avec un drainage intégré et une étanchéité sous-jacente. Idéal pour les grandes surfaces
                (au-delà de 40 m²). Prix : <strong className="text-[#1C1C1C]">40 à 80 €/m²</strong> hors dalle support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Étanchéité */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            L&apos;étanchéité : le point essentiel de toute rénovation de terrasse
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            À Paris, la terrasse est dans la grande majorité des cas la toiture d&apos;un logement en dessous.
            Une étanchéité défaillante engendre des infiltrations graves et des recours en copropriété.
            Avant de choisir un revêtement, l&apos;inspection de l&apos;étanchéité existante est indispensable.
          </p>

          <div className="space-y-4 mb-8">
            <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-3">
              Types d&apos;étanchéité et leur inspection
            </h3>
            {[
              {
                type: "Membrane bitumineuse bicouche (asphalte)",
                detail: "La plus répandue dans les immeubles parisiens des années 1970-2000. Durée de vie nominale : 20 à 30 ans. Signes de dégradation : cloques, fissures, joints décollés au niveau des relevés, eau stagnante. Inspection : test visuel + test à l'eau. Reprise partielle possible si dégradation localisée. Reprise complète si membrane généralisée.",
                prix: "80 – 120 €/m²",
              },
              {
                type: "Membrane EPDM ou TPO (caoutchouc synthétique)",
                detail: "Étanchéité moderne, très souple et résistante aux UV. Durée de vie : 30 à 50 ans. Facilement reconnaissable à sa couleur grise ou noire homogène sans coutures. Les reprises se font par soudure à l'air chaud ou par collage de pièces EPDM. Solution recommandée pour les rénovations récentes.",
                prix: "60 – 100 €/m²",
              },
              {
                type: "Étanchéité liquide polyuréthane",
                detail: "Application à la brosse ou au rouleau, sans joints ni soudure. Idéale pour les formes complexes (relevés, siphons, angles) et les surfaces inférieures à 50 m². Compatible avec la majorité des revêtements. Inspection facile car tout défaut est visible à l'oeil nu. Durée de vie : 10 à 20 ans selon l'exposition.",
                prix: "50 – 90 €/m²",
              },
            ].map((el) => (
              <div key={el.type} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.type}</div>
                  <div className="text-[#B8960C] text-sm font-medium flex-shrink-0">{el.prix}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <div className="flex items-start gap-3">
              <CheckCircle size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-medium text-amber-900 text-sm mb-1">Inspection obligatoire recommandée</div>
                <div className="text-amber-800 text-sm font-light leading-relaxed">
                  Avant toute rénovation de terrasse, faites inspecter l&apos;étanchéité par un professionnel.
                  En copropriété, l&apos;étanchéité est souvent une partie commune : sa réfection est à la charge
                  de la copropriété, pas du propriétaire du lot. Vérifiez le règlement avant d&apos;engager
                  des travaux à votre compte.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Tableau des prix */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix rénovation terrasse Paris 2025 — tableau complet
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Prestation</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">10 m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">20 m²</th>
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Inclus</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    prestation: "Lames bois composite (pose sur plots existants)",
                    p10: "1 500 – 3 000 €",
                    p20: "2 500 – 5 500 €",
                    inclus: "Fourniture lames + plots + pose",
                  },
                  {
                    prestation: "Carrelage grès cérame (pose sur plots neufs)",
                    p10: "2 000 – 4 000 €",
                    p20: "3 500 – 7 000 €",
                    inclus: "Carrelage + plots réglables + pose",
                  },
                  {
                    prestation: "Résine extérieure antidérapante",
                    p10: "1 200 – 2 500 €",
                    p20: "2 000 – 4 500 €",
                    inclus: "Préparation support + résine + granulats",
                  },
                  {
                    prestation: "Étanchéité liquide seule",
                    p10: "1 500 – 2 500 €",
                    p20: "3 000 – 5 000 €",
                    inclus: "Application 2 couches + relevés + siphons",
                  },
                  {
                    prestation: "Étanchéité + dalles composite (rénovation complète)",
                    p10: "3 500 – 6 500 €",
                    p20: "6 000 – 12 000 €",
                    inclus: "Dépose, étanchéité, plots, revêtement",
                  },
                  {
                    prestation: "Rénovation complète haut de gamme (étanchéité + carrelage grand format)",
                    p10: "4 500 – 8 000 €",
                    p20: "8 000 – 14 000 €",
                    inclus: "Dépose, étanchéité, plots, grès cérame, finitions",
                  },
                ].map((row, i) => (
                  <tr key={row.prestation} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-light text-sm">{row.prestation}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium text-sm">{row.p10}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium text-sm">{row.p20}</td>
                    <td className="px-4 py-3 text-gray-600 font-light text-xs">{row.inclus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs font-light italic mt-3">
            Prix TTC Paris 2025. Variables selon état du support, accessibilité et choix des matériaux.
          </p>
        </div>
      </section>

      {/* Section 5 — Autorisations */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Autorisations nécessaires pour rénover une terrasse à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les obligations varient selon la nature des travaux, le statut de la terrasse (privative ou
            commune) et la localisation dans Paris :
          </p>
          <div className="space-y-4">
            {[
              {
                titre: "Copropriété : ce qui nécessite un vote en AG",
                detail: "La simple pose d'un revêtement (lames composite, dalles sur plots) ne modifiant pas l'étanchéité commune ne nécessite généralement pas d'accord. En revanche, la création d'une pergola, d'une véranda, d'un jardin sur dalle ou tout travaux modifiant la structure de la terrasse commune ou son aspect visible depuis l'extérieur doit être voté en assemblée générale. Vérifiez systématiquement le règlement de copropriété.",
              },
              {
                titre: "Déclaration préalable en mairie de Paris",
                detail: "Elle est obligatoire si les travaux modifient l'aspect extérieur de l'immeuble (pose d'un garde-corps visible depuis la rue, création d'un bardage, modification du débord de balcon). La déclaration préalable est à déposer à la mairie d'arrondissement. Délai d'instruction : 1 à 2 mois. Les travaux ne peuvent démarrer qu'après l'obtention du récépissé de non-opposition.",
              },
              {
                titre: "Règles PLU de Paris",
                detail: "Le Plan Local d'Urbanisme de Paris (PLU) impose des contraintes spécifiques pour les terrasses en toiture (hauteur maximale des éléments posés, emprise maximale de la terrasse habitable, couleurs autorisées pour les revêtements visibles depuis la voie publique). Vérifiez les règles applicables à votre zone PLU avant tout projet de pergola ou de jardin sur terrasse.",
              },
              {
                titre: "Secteurs sauvegardés et Architecte des Bâtiments de France",
                detail: "Le Marais (3e et 4e arrondissements), l'Île Saint-Louis, le quartier de Montmartre, Saint-Germain-des-Prés et plusieurs autres quartiers parisiens sont soumis à un Plan de Sauvegarde et de Mise en Valeur (PSMV). Dans ces secteurs, toute modification visible de l'aspect extérieur (y compris les terrasses visibles depuis la voie publique) nécessite l'accord préalable de l'ABF.",
              },
            ].map((el) => (
              <div key={el.titre} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="flex items-start gap-2 mb-2">
                  <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.titre}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed pl-5">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-6 text-center">Questions fréquentes</p>
          <div className="space-y-4">
            {schemaFAQ.mainEntity.map((q) => (
              <div key={q.name} className="bg-white rounded-lg p-5 border border-gray-100">
                <p className="font-medium text-[#1C1C1C] text-sm mb-2">{q.name}</p>
                <p className="text-gray-600 text-sm font-light leading-relaxed">{q.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voir aussi */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Voir aussi</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/renovation-balcon-paris', title: "Rénovation balcon Paris" },
              { href: '/blog/carrelage-grand-format-paris', title: "Carrelage grand format Paris" },
              { href: '/blog/renovation-appartement-paris-16e', title: "Rénovation appartement Paris 16e" },
              { href: '/blog/home-staging-paris', title: "Home staging Paris" },
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
              { href: '/renovation-paris-7e', label: 'Paris 7e' },
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-15e', label: 'Paris 15e' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-paris-17e', label: 'Paris 17e' },
              { href: '/renovation-paris-18e', label: 'Paris 18e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
              { href: '/renovation-levallois-perret', label: 'Levallois-Perret' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
              { href: '/renovation-versailles', label: 'Versailles' },
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
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
          Vous rénovez une terrasse à Paris ?
        </h2>
        <p className="text-gray-400 text-sm font-light mb-8">
          Devis gratuit et détaillé sous 48h. Déplacement sans engagement dans tout Paris et petite couronne.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors"
          >
            Devis gratuit <ArrowRight size={16} />
          </Link>
          <a
            href="tel:+33611783867"
            className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"
          >
            <Phone size={16} />
            06 11 78 38 67
          </a>
        </div>
      </section>
    </>
  )
}
