import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Balcon Terrasse Paris', item: 'https://espacedesignparis.fr/blog/renovation-balcon-terrasse-immeuble-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Balcon & Terrasse Paris : imperméabilisation et carrelage 2025 | Espace Design',
  description: 'Rénover balcon ou terrasse à Paris : étanchéité, carrelage, garde-corps. Parties privatives vs communes en copropriété. Prix 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-balcon-terrasse-immeuble-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Le balcon est-il une partie privative ou commune en copropriété ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "En copropriété parisienne, le balcon est généralement une partie commune à jouissance privative : vous l'utilisez comme si c'était le vôtre, mais la structure (dalle, poutre) appartient à la copropriété. Conséquence pratique : les travaux touchant la structure (étanchéité de la dalle, remplacement du garde-corps, travaux de maçonnerie) relèvent de la copropriété et nécessitent un vote en AG. En revanche, le revêtement de sol (carrelage, caillebotis) et le mobilier sont généralement à votre charge et ne requièrent pas d'accord collectif. Vérifiez systématiquement votre règlement de copropriété.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment traiter l'étanchéité d'un balcon parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'étanchéité d'un balcon parisien peut être réalisée par plusieurs méthodes selon l'état de la dalle et le budget. La résine d'étanchéité liquide (polyuréthane ou époxy) est la solution la plus rapide et économique : elle s'applique directement sur le support et forme un film imperméable continu. La membrane EPDM (caoutchouc synthétique) offre une meilleure durabilité (25 ans) mais est plus coûteuse à poser. Pour les terrasses accessibles avec carrelage, l'étanchéité sous carrelage (complexe multicouche) est la référence. Le coût varie de 50 à 150 €/m² selon la méthode et l'état du support.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel est le prix pour rénover un balcon à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le coût de rénovation d'un balcon parisien (typiquement 4 à 10 m²) dépend des travaux réalisés. Revêtement de sol seul (carrelage grès cérame ou caillebotis bois) : 800 à 2 500 €. Étanchéité seule (résine liquide) : 600 à 1 500 €. Étanchéité + carrelage : 1 500 à 4 000 €. Rénovation complète incluant garde-corps, étanchéité et carrelage : 3 000 à 8 000 €. Pour une terrasse de 20 à 30 m² avec complexe d'étanchéité et carrelage grand format : 8 000 à 20 000 €.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Balcon & Terrasse Paris : imperméabilisation et carrelage 2025 | Espace Design',
  description: 'Rénover balcon ou terrasse à Paris : étanchéité, carrelage, garde-corps. Parties privatives vs communes en copropriété. Prix 2025.',
}

export default function ArticleRenovationBalconTerrasse() {
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
            Extérieur
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Balcon &amp; Terrasse Paris : imperméabilisation et carrelage 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Balcon fissuré, terrasse qui fuit, carrelage décollé, garde-corps rouillé : les espaces extérieurs parisiens souffrent des alternances de gel et de pluie. Étanchéité, carrelage extérieur, garde-corps et règles de copropriété — guide complet 2025 pour rénover votre balcon ou terrasse en toute sérénité.
          </p>
        </div>
      </section>

      {/* Section 1 — Statut juridique */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Statut juridique du balcon en copropriété parisienne
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Avant de lancer des travaux sur votre balcon ou terrasse, il est impératif de comprendre son statut juridique dans votre copropriété. La répartition des responsabilités entre le copropriétaire et le syndicat dépend de ce statut — et des erreurs peuvent coûter cher.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              En règle générale, le règlement de copropriété distingue trois catégories d&apos;éléments sur un balcon. Vérifiez toujours votre règlement spécifique avant tout projet.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'La structure (dalle, poutres) : partie commune',
                  detail: "La structure portante du balcon (dalle béton, poutres métalliques) appartient à la copropriété, même si vous en avez la jouissance exclusive. Les travaux d'étanchéité de la dalle, de réparation des fissures structurelles ou de remplacement des éléments porteurs relèvent du syndicat et doivent être votés en AG. Si une infiltration depuis votre balcon cause des dégâts dans l'appartement du dessous, la copropriété est responsable.",
                },
                {
                  enjeu: 'Le garde-corps et la balustrade : souvent partie commune',
                  detail: "Le garde-corps est fréquemment classé comme partie commune car il contribue à l'aspect extérieur de l'immeuble et à la sécurité collective. Son remplacement nécessite généralement un vote en AG et doit respecter un style harmonisé avec l'ensemble de l'immeuble. Vérifiez impérativement votre règlement de copropriété.",
                },
                {
                  enjeu: 'Le revêtement de sol : souvent partie privative',
                  detail: "Le carrelage, le caillebotis ou tout autre revêtement posé sur la dalle est généralement à la charge du copropriétaire. Vous pouvez le remplacer librement, sous réserve de ne pas modifier la structure (notamment en posant un carrelage trop lourd sur une dalle fragilisée) et de respecter l'aspect général de l'immeuble.",
                },
                {
                  enjeu: 'Terrasse de toit (toiture-terrasse) : cas particulier',
                  detail: "La toiture-terrasse accessible est souvent une partie commune à jouissance privative. Son étanchéité est impérativement à la charge de la copropriété, car une fuite peut affecter plusieurs appartements en dessous. Le copropriétaire qui en a la jouissance n'a le droit d'y poser que des éléments non fixés (mobilier, bacs de fleurs, caillebotis démontables).",
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

      {/* Section 2 — Étanchéité */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Étanchéité : solutions et matériaux pour un balcon parisien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;étanchéité est la priorité absolue pour un balcon ou une terrasse parisien. Une dalle non étanche génère des infiltrations qui dégradent la structure, les plafonds des appartements inférieurs et les murs intérieurs. Plusieurs solutions existent selon l&apos;état du support et l&apos;usage final.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Résine d\'étanchéité liquide (polyuréthane)',
                solution: "Application par rouleau ou brosse directement sur le béton nettoyé et dépoussiéré. Forme un film imperméable continu sans joints. Idéale pour les petites surfaces et les formes complexes (angles, seuils). Durée de vie : 10 à 15 ans. Applicable sur un carrelage existant fissuré.",
                cout: '50 – 90 €/m²',
              },
              {
                titre: 'Membrane EPDM (caoutchouc synthétique)',
                solution: "Membrane en caoutchouc vulcanisé collée ou lestée sur le support. Excellente résistance aux UV, aux cycles gel-dégel et à l'ozonolyse. Durée de vie : 25 à 40 ans. Solution privilégiée pour les grandes terrasses. Nécessite un support propre, plan et solide.",
                cout: '80 – 140 €/m²',
              },
              {
                titre: 'Étanchéité sous carrelage (complexe multicouche)',
                solution: "Système d'étanchéité liquide appliqué avant la pose du carrelage, avec treillis de renfort aux angles et aux jonctions. Permet de poser le carrelage directement dessus. C'est la solution de référence pour les terrasses carrelées accessibles. Conforme DTU 43.1.",
                cout: '60 – 120 €/m²',
              },
              {
                titre: 'Traitement des relevés et joints de dilatation',
                solution: "Les points singuliers (relevés contre les murs, joints de dilatation, seuil de porte-fenêtre) sont les zones de faiblesse d'une étanchéité. Leur traitement soigné avec des bandes de renfort et des mastics adaptés est indispensable pour garantir l'imperméabilité sur la durée.",
                cout: 'Inclus dans le devis',
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

      {/* Section 3 — Carrelage extérieur */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Carrelage extérieur pour balcon et terrasse parisien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le choix du revêtement de sol extérieur conditionne l&apos;esthétique, la sécurité et la durabilité de votre balcon ou terrasse. À Paris, les matériaux doivent résister aux cycles de gel-dégel répétés, aux pluies intenses et aux UV. Voici les solutions les plus adaptées.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Grès cérame antidérapant extérieur',
                prix: '40 – 100 €/m² posé',
                detail: "Le grès cérame est le matériau de référence pour les terrasses et balcons en milieu urbain. Résistance au gel (classe C selon EN ISO 10545-12), absorption d'eau quasi nulle, entretien facile. Choisir un indice d'antidérapance R11 minimum pour les balcons exposés à la pluie. Large choix d'aspect : pierre, bois, béton, mosaïque.",
              },
              {
                type: 'Carrelage grand format (60×60, 80×80)',
                prix: '60 – 150 €/m² posé',
                detail: "Esthétique contemporaine et facile à entretenir. Nécessite un support parfaitement plan et une étanchéité préalable soignée. La pose requiert un professionnel expérimenté pour la coupe et la mise à niveau. Joints de dilatation obligatoires tous les 3 m². Effet visuel très soigné, valorise un appartement haut de gamme.",
              },
              {
                type: 'Caillebotis bois composite ou naturel',
                prix: '30 – 80 €/m²',
                detail: "Solution démontable ne nécessitant pas de colle ni de scellement. Idéale pour les terrasses en jouissance privative sans autorisation de travaux. Le bois composite (bois + plastique recyclé) est insensible aux variations hygrométriques et ne nécessite pas de traitement. Le bois naturel (teck, ipé) offre un aspect haut de gamme mais demande un entretien annuel.",
              },
              {
                type: 'Pierre naturelle (ardoise, travertin, grès)',
                prix: '70 – 180 €/m² posé',
                detail: "Aspect naturel et chaleureux, particulièrement adapté aux appartements haussmanniens et aux terrasses spacieuses. Vérifier obligatoirement la résistance au gel de la pierre choisie (indice d'absorption d'eau inférieur à 3 %). L'ardoise et le grès sont excellents ; le travertin et la pierre calcaire demandent un traitement hydrofuge préventif.",
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

      {/* Section 4 — Garde-corps et réglementation */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Garde-corps : sécurité, réglementation et travaux en copropriété
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le garde-corps est un élément de sécurité essentiel dont la réglementation est stricte. Voici ce qu&apos;il faut savoir avant d&apos;entreprendre des travaux.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              "Hauteur minimale réglementaire : 1 m pour les balcons à plus de 1 m du sol (norme NF P01-012)",
              "Pas de jours supérieurs à 18 cm dans le garde-corps (sécurité enfants)",
              "Les garde-corps en copropriété sont généralement des parties communes : accord AG souvent requis",
              "Remplacement : modèle harmonisé avec l'aspect général de l'immeuble, validé par la copropriété",
              "Matériaux courants : acier laqué, inox brossé, aluminium thermolaqué, verre feuilleté",
              "Vérification annuelle de l'état du garde-corps (corrosion, fixations) recommandée",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Budget */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Budget rénovation balcon et terrasse à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent main d&apos;œuvre et matériaux inclus, pour un balcon de 6 m² ou une terrasse de 20 m².
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Prestation</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Balcon 6 m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Terrasse 20 m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    prestation: 'Carrelage seul (grès cérame)',
                    balcon: '800 – 1 800 €',
                    terrasse: '2 500 – 6 000 €',
                  },
                  {
                    prestation: 'Étanchéité résine seule',
                    balcon: '400 – 800 €',
                    terrasse: '1 200 – 2 500 €',
                  },
                  {
                    prestation: 'Étanchéité + carrelage',
                    balcon: '1 200 – 3 000 €',
                    terrasse: '4 000 – 10 000 €',
                  },
                  {
                    prestation: 'Rénovation complète (étanchéité + carrelage + garde-corps)',
                    balcon: '2 500 – 6 000 €',
                    terrasse: '8 000 – 20 000 €',
                  },
                ].map((row, i) => (
                  <tr key={row.prestation} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.prestation}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.balcon}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.terrasse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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

      {/* Voir aussi */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Voir aussi</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/renovation-terrasse-paris', title: 'Rénovation terrasse Paris' },
              { href: '/blog/renovation-balcon-paris', title: 'Rénovation balcon Paris' },
              { href: '/blog/renovation-hall-immeuble-paris', title: 'Rénovation hall immeuble Paris' },
              { href: '/carrelage-paris', title: 'Carrelage Paris' },
              { href: '/blog/carrelage-grand-format-paris', title: 'Carrelage grand format Paris' },
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
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-9e', label: 'Paris 9e' },
              { href: '/renovation-paris-10e', label: 'Paris 10e' },
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-levallois-perret', label: 'Levallois' },
              { href: '/renovation-courbevoie', label: 'Courbevoie' },
              { href: '/renovation-saint-denis', label: 'Saint-Denis' },
              { href: '/renovation-pantin', label: 'Pantin' },
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
          Rénovez votre balcon ou terrasse à Paris
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis détaillé sous 48h. Spécialistes étanchéité et carrelage extérieur parisien.
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
