import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: "Coût Rénovation Salle de Bain Paris", item: 'https://espacedesignparis.fr/blog/cout-renovation-salle-de-bain-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Coût Rénovation Salle de Bain Paris : prix & devis artisan 2025",
  description: "Quel est le coût d'une rénovation de salle de bain à Paris en 2025 ? Prix petite/grande SDB, carrelage, plomberie, douche italienne. Guide complet artisan.",
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/cout-renovation-salle-de-bain-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le coût d'une rénovation de salle de bain à Paris en 2025 ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le coût d'une rénovation de salle de bain à Paris varie de 4 000 € pour un relooking d'une petite SDB (3-4 m²) à 25 000 € et plus pour une rénovation complète d'une grande salle de bain (8 m² et plus) avec douche à l'italienne, double vasque et carrelage grand format. Le budget médian pour une salle de bain de 5-6 m² entièrement rénovée à Paris est de 8 000 à 15 000 €, main d'oeuvre et matériaux inclus.",
      },
    },
    {
      '@type': 'Question',
      name: "Combien coûte une douche à l'italienne à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le coût d'une douche à l'italienne à Paris (installation complète avec chape, étanchéité, carrelage et receveur extra-plat ou sans receveur) se situe entre 2 500 et 8 000 €. Pour une douche sans receveur avec carrelage grand format : 4 000 à 8 000 €. Pour une douche avec receveur extra-plat : 2 500 à 4 500 €. La pose est plus complexe qu'une douche classique (pente de sol, siphon de sol) et nécessite un artisan expérimenté pour garantir l'étanchéité.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel est le prix d'un carrelage salle de bain posé à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix du carrelage salle de bain à Paris (fourniture et pose complète : dépose ancien carrelage, ragréage, pose, joints) varie de 50 à 180 €/m² selon le format et la complexité. Carrelage standard (20x20, 30x60 cm) : 50-90 €/m² posé. Grand format (60x120 cm ou plus) : 80-150 €/m² posé. Carrelage effet marbre : 90-150 €/m². Zellige artisanal : 120-200 €/m². Pour une SDB de 5 m² (sol + murs jusqu'à 2,50 m), comptez 5 à 8 m² de sol et 20 à 25 m² de murs.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il vider entièrement la salle de bain pour la rénover ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pas nécessairement. Une rénovation partielle permet de transformer une salle de bain sans tout déposer. On peut remplacer uniquement les équipements sanitaires (baignoire, vasque, robinetterie) sans toucher au carrelage si ce dernier est en bon état. Budget d'un remplacement sanitaire seul : 1 500 à 4 000 €. Si le carrelage est en mauvais état ou si vous souhaitez changer la disposition (ex : remplacer baignoire par douche italienne), une dépose complète est préférable.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Coût Rénovation Salle de Bain Paris : prix & devis artisan 2025",
  description: "Quel est le coût d'une rénovation de salle de bain à Paris en 2025 ? Prix petite/grande SDB, carrelage, plomberie, douche italienne. Guide complet artisan.",
  keywords: [
    "coût rénovation salle de bain paris",
    "prix salle de bain paris",
    "douche italienne prix paris",
    "carrelage salle de bain paris prix",
    "artisan salle de bain paris",
    "devis salle de bain paris",
  ],
}

export default function ArticleCoutRenovationSalleDeBainParis() {
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
            Prix et Coût de Rénovation Salle de Bain à Paris en 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            La salle de bain est l&apos;une des pièces les plus complexes à rénover à Paris : plomberie, étanchéité, carrelage, sanitaires... Les postes de coût s&apos;accumulent rapidement. Ce guide vous présente les prix réels pratiqués en 2025 par un artisan parisien, avec des fourchettes claires selon la surface et le niveau de prestation.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-[#1C1C1C] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { val: '4 000 €', label: 'Budget mini petite SDB (3-4 m²)' },
              { val: '12 000 €', label: 'Coût médian rénovation complète' },
              { val: '30 000 €', label: 'Budget SDB premium haut de gamme' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-xl sm:text-2xl font-semibold text-[#D4AF37] mb-1">{s.val}</div>
                <div className="text-gray-500 text-[10px] uppercase tracking-wider font-light">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1 — Fourchettes selon la surface */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Coût de rénovation selon la surface de la salle de bain
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
            À Paris, les salles de bain sont souvent plus petites qu&apos;en province. La surface moyenne d&apos;une SDB dans un appartement parisien est de 4 à 7 m², mais les projets varient considérablement selon l&apos;ancienneté de l&apos;immeuble et les travaux envisagés.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Attention : le coût au m² d&apos;une petite salle de bain (3-4 m²) est proportionnellement plus élevé que celui d&apos;une grande (8-10 m²), car les postes fixes (plomberie, étanchéité, équipements) restent les mêmes quelle que soit la surface.
          </p>
          <div className="space-y-4">
            {[
              {
                enjeu: "Petite SDB (3-4 m²) — Budget 4 000 à 12 000 €",
                detail: "Typique des studios et deux-pièces parisiens. Configuration souvent en douche seule (pas de baignoire). Rénovation complète avec douche à l'italienne, meuble vasque, WC, carrelage sol et murs, robinetterie et plomberie : 7 000 à 12 000 €. Rénovation légère (remplacement sanitaires + peinture, sans toucher au carrelage) : 2 500 à 5 000 €. Le coût au m² est de 1 500 à 3 000 €.",
              },
              {
                enjeu: "SDB standard (5-7 m²) — Budget 8 000 à 20 000 €",
                detail: "La tranche la plus courante dans l'haussmannien parisien. Avec baignoire ou douche italienne, double ou simple vasque, carrelage complet sol et murs, robinetterie et plomberie mise à jour. Budget médian 10 000 à 15 000 € pour un niveau intermédiaire (carrelage 60x30 cm, robinetterie milieu de gamme, meuble vasque sur-mesure). Haut de gamme (marbre, grands formats, robinetterie Grohe ou Hansgrohe) : 18 000 à 25 000 €.",
              },
              {
                enjeu: "Grande SDB (8-12 m²) — Budget 15 000 à 40 000 €",
                detail: "Salle de bain parentale avec double vasque, baignoire îlot et douche à l'italienne séparées, radiateur sèche-serviettes, éclairage LED encastré, miroir avec éclairage intégré. Pour les appartements des beaux quartiers (7e, 8e, 16e). Carrelage grand format en marbre ou pierre naturelle (120x60 cm ou plus), robinetterie haut de gamme, meuble vasque sur-mesure laqué. Le coût au m² atteint 2 000 à 4 000 €.",
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

      {/* Section 2 — Prix par poste */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix de chaque poste — Salle de bain Paris 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Voici le détail des prix pratiqués à Paris en 2025 pour chaque poste d&apos;une rénovation de salle de bain. Fourniture et pose incluses.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: "Carrelage sol salle de bain",
                cout: "50 – 150 €/m² posé",
                detail: "Standard (30x30 cm) : 50-70 €/m². Grand format (60x60 cm) : 70-110 €/m². Très grand format (120x60 cm) : 100-150 €/m². Prix incluant dépose ancien carrelage, ragréage et pose avec joints époxy anti-moisissures.",
              },
              {
                titre: "Carrelage mural salle de bain",
                cout: "45 – 200 €/m² posé",
                detail: "Carrelage standard (20x40 cm) : 45-65 €/m². Faience grand format (30x90 cm) : 65-120 €/m². Zellige artisanal marocain : 120-200 €/m². Marbre tranché en plaquettes : 150-250 €/m². Pour une SDB de 5 m², la surface murale à carreler est de 20 à 25 m².",
              },
              {
                titre: "Douche à l'italienne complète",
                cout: "2 500 – 8 000 €",
                detail: "Avec receveur extra-plat (80x80 cm ou 90x90 cm) : 2 500-4 500 €. Sans receveur (bac à douche intégré dans la chape) : 4 000-8 000 €. Prix incluant chape, étanchéité SPEC, siphon de sol, carrelage et paroi de douche (vitre ou niche).",
              },
              {
                titre: "Remplacement baignoire",
                cout: "800 – 4 000 €",
                detail: "Baignoire acrylique standard (fourniture + pose + raccordement) : 800-1 500 €. Baignoire en fonte émaillée : 1 500-3 000 €. Baignoire îlot autoportante (design) : 2 000-6 000 €. La dépose de l'ancienne baignoire est facturée 200-500 € en supplément dans les étages sans ascenseur.",
              },
              {
                titre: "Meuble vasque + robinetterie",
                cout: "600 – 5 000 €",
                detail: "Meuble vasque suspendu standard (60-80 cm) avec robinetterie entrée de gamme : 600-1 200 €. Double vasque avec meuble 120-140 cm et robinetterie Grohe/Hansgrohe : 1 500-3 500 €. Vasque à poser en céramique ou pierre reconstituée sur plan bois : 2 000-5 000 €.",
              },
              {
                titre: "Plomberie salle de bain",
                cout: "800 – 4 000 €",
                detail: "Remplacement robinetterie seule (douche + vasque) : 400-800 €. Remplacement complet des réseaux (PER, cuivre) sans déplacement : 1 500-2 500 €. Déplacement des réseaux (repositionnement douche ou vasque) : 2 000-4 000 €. Dans les immeubles anciens, les colonnes en plomb peuvent nécessiter un remplacement complet (1 000-3 000 €).",
              },
              {
                titre: "Radiateur sèche-serviettes",
                cout: "400 – 1 800 €",
                detail: "Electrique seul (pose + fourniture) : 400-700 €. Hydraulique (branché sur le circuit de chauffage central) : 600-1 200 €. Sèche-serviettes design en acier ou inox avec régulateur de température : 900-1 800 €. Nécessite une intervention de plombier si hydraulique.",
              },
              {
                titre: "WC suspendu",
                cout: "700 – 2 500 €",
                detail: "WC suspendu standard avec bâti-support Geberit : 700-1 200 €. WC avec lavabo intégré (économiseur d'eau) : 900-1 600 €. WC japonais avec siège lavant (Geberit AquaClean ou Toto) : 1 500-3 000 €. Dans les anciens immeubles, l'isolation phonique du bâti-support est recommandée (+200-400 €).",
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

      {/* Section 3 — Douche italienne */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Douche à l&apos;italienne à Paris : détail du coût et contraintes techniques
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La douche à l&apos;italienne est l&apos;aménagement le plus demandé dans les rénovations de salle de bain parisiennes. Elle transforme visuellement l&apos;espace mais impose des contraintes techniques importantes dans les appartements anciens.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: "Contrainte principale : hauteur du sol",
                prix: "Point de vigilance",
                detail: "Une douche italienne sans receveur nécessite d'abaisser le sol d'environ 10 cm pour intégrer la pente d'écoulement et le siphon de sol. Dans les appartements haussmanniens avec parquet dans les pièces adjacentes, cette différence de niveau doit être soigneusement gérée. Une réhausse de sol peut être nécessaire, ajoutant 500 à 1 500 € au budget.",
              },
              {
                type: "Etanchéité : le poste critique",
                prix: "600 – 1 500 €",
                detail: "L'étanchéité d'une douche à l'italienne est réglementée par la norme DTU 52.2. Elle comprend une membrane d'étanchéité liquide (SPEC ou résine epoxy) appliquée sur la chape avant carrelage. Un défaut d'étanchéité peut provoquer des infiltrations dans l'appartement du dessous. Toujours exiger un artisan qualifié RGE ou avec expérience documentée sur ce type de chantier.",
              },
              {
                type: "Douche avec receveur extra-plat",
                prix: "2 500 – 4 500 €",
                detail: "Solution plus simple techniquement (pas de travaux de chape), le receveur extra-plat (4 cm de hauteur) simule l'effet douche italienne. Formats disponibles : 80x80, 80x120, 90x120 cm. Matériaux : résine composite (le plus courant), pierre reconstituée (plus cher mais effet minéral). Le siphon linéaire mural est un plus esthétique (180-350 € en fourniture).",
              },
              {
                type: "Paroi de douche : vitre ou niche ouverte",
                prix: "400 – 2 500 €",
                detail: "Paroi simple (70-90 cm) en verre trempé 8 mm : 400-800 €. Paroi double angle (L ou U) : 700-1 500 €. Niche ouverte sans paroi pour une douche 100 % italienne (avec rideau ou sans) : la solution la moins chère mais qui génère des éclaboussures hors de la douche si l'espace le permet. Un mitigeur thermostatique mural (Grohe, Hansgrohe) : 400-900 €.",
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

      {/* Section 4 — Tableau + conseils */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Tableau comparatif — Coût SDB Paris selon le niveau de prestation
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Surface / Prestation</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Entrée de gamme</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Milieu de gamme</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Haut de gamme</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { traitement: "SDB 3-4 m² complète", bas: "3 500 – 5 000 €", mid: "6 000 – 9 000 €", haut: "12 000 – 18 000 €" },
                  { traitement: "SDB 5-7 m² complète", bas: "6 000 – 9 000 €", mid: "10 000 – 16 000 €", haut: "20 000 – 30 000 €" },
                  { traitement: "SDB 8-12 m² complète", bas: "9 000 – 14 000 €", mid: "16 000 – 25 000 €", haut: "28 000 – 50 000 €" },
                  { traitement: "Douche italienne seule", bas: "2 500 – 3 500 €", mid: "3 500 – 5 500 €", haut: "6 000 – 10 000 €" },
                  { traitement: "Carrelage sol + murs (5 m²)", bas: "2 000 – 3 500 €", mid: "3 500 – 6 000 €", haut: "6 000 – 12 000 €" },
                  { traitement: "Plomberie complète", bas: "1 200 – 2 000 €", mid: "2 000 – 3 500 €", haut: "3 500 – 6 000 €" },
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
              Conseils pour maîtriser le coût de sa rénovation SDB à Paris
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Conserver la position des réseaux existants (douche, vasque, WC) : économie de 1 000 à 3 000 € sur la plomberie",
                "Choisir un receveur extra-plat plutôt qu'une douche italienne sans receveur si le sol est difficile à abaisser",
                "Opter pour un carrelage 60x30 cm plutôt que grand format (120x60 cm) : 30 à 40 % moins cher à la pose",
                "Grouper les achats sanitaires (vasque, robinetterie, douche) chez un même fournisseur pour obtenir des remises",
                "Éviter les niches murales en carrelage dans les petites SDB : elles alourdissent la pose et peuvent fragiliser l'étanchéité",
                "Demander à voir des références de chantiers similaires à votre artisan avant de signer le devis",
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
              { href: '/blog/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain Paris' },
              { href: '/blog/douche-italienne-paris', title: 'Douche italienne Paris' },
              { href: '/blog/carrelage-salle-de-bain-paris', title: 'Carrelage salle de bain Paris' },
              { href: '/blog/renovation-salle-de-bain-petite-surface-paris', title: 'Rénovation petite SDB Paris' },
              { href: '/blog/robinetterie-salle-de-bain-paris', title: 'Robinetterie salle de bain Paris' },
              { href: '/blog/prix-renovation-salle-de-bain-paris', title: 'Prix rénovation SDB Paris' },
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
          Devis gratuit pour votre salle de bain à Paris
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Visite sur place, devis détaillé poste par poste sous 48h. Artisan spécialisé salle de bain à Paris et Île-de-France.
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
