import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Isolation Phonique Paris', item: 'https://espacedesignparis.fr/blog/isolation-phonique-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Isolation Phonique Paris : bruits de voisins & solutions 2025 | Espace Design',
  description: 'Isoler son appartement des bruits à Paris : bruits aériens, d\'impact, de voisins. Solutions, matériaux et prix au m² 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/isolation-phonique-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix de l'isolation phonique dans un appartement parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le coût de l'isolation phonique varie selon la surface traitée et la solution choisie. Pour un mur mitoyen de 15 m² avec doublage désolidarisé et laine de roche : 900 à 1 800 €. Pour un faux-plafond acoustique de 20 m² (pièce de vie) : 1 600 à 3 000 €. Pour un sol avec sous-couche résiliente (20 m²) : 300 à 600 €. Pour une rénovation phonique complète d'un appartement de 50 m² (murs, plafond, sol) : 8 000 à 20 000 €. Les prix incluent la main d'œuvre et les matériaux.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelle est la meilleure solution pour isoler des bruits de voisins du dessus ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les bruits du dessus sont généralement des bruits d'impact (pas, chutes d'objets, chaises traînées) et des bruits aériens (voix, musique). La solution la plus efficace est le faux-plafond désolidarisé : ossature métallique sur suspentes anti-vibrations, laine de roche haute densité (100 à 150 mm), doublage plaque de plâtre haute densité. Gain attendu : 35 à 45 dB sur les bruits d'impact, 30 à 40 dB sur les bruits aériens. Coût : 80 à 150 €/m². Une sous-couche résiliente posée dans l'appartement du dessus (si accord du voisin) est plus efficace encore, mais difficile à obtenir en pratique.",
      },
    },
    {
      '@type': 'Question',
      name: "Combien de temps dure un chantier d'isolation phonique à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La durée dépend de la surface à traiter et du type d'intervention. Doublage d'un mur mitoyen (15 m²) : 1 à 2 jours. Faux-plafond acoustique d'une pièce (20 m²) : 2 à 3 jours. Isolation phonique complète d'un appartement de 50 m² : 2 à 3 semaines, travaux de plâtrerie et de finition inclus. Le séchage des enduits de finition peut allonger le délai de 5 à 10 jours. Prévoyez de pouvoir quitter le logement pendant les phases les plus poussiéreuses (dépose, perçages).",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Isolation Phonique Paris : bruits de voisins & solutions 2025 | Espace Design',
  description: "Isoler son appartement des bruits à Paris : bruits aériens, d'impact, de voisins. Solutions, matériaux et prix au m² 2025.",
}

export default function ArticleIsolationPhonique() {
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
            Isolation
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Isolation Phonique Paris : bruits de voisins &amp; solutions 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Bruits de pas du dessus, voix des voisins à travers les murs, chauffe-eau qui résonne la nuit : le bruit est l&apos;un des principaux problèmes de confort dans les appartements parisiens. Solutions techniques, matériaux et prix au m² — guide complet 2025 pour retrouver le calme chez vous.
          </p>
        </div>
      </section>

      {/* Section 1 — Types de bruits */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les trois types de bruits dans un appartement parisien
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Tous les bruits ne se traitent pas de la même manière. Identifier précisément le type de bruit dont vous souffrez est la première étape pour choisir la bonne solution. Une erreur de diagnostic peut conduire à des travaux coûteux mais peu efficaces.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Dans un appartement parisien, les bruits proviennent généralement de trois sources distinctes, chacune nécessitant une approche technique spécifique.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Bruits aériens (voix, musique, télévision)',
                  detail: "Les sons se propagent dans l'air et traversent les cloisons et planchers. Exemples : conversation des voisins, musique, aboiements de chiens. Traitement : augmenter la masse et l'amortissement des parois (doublage haute densité, laine de roche). La réglementation NRA (Nouvelle Réglementation Acoustique) impose un isolement de 53 dB minimum entre logements pour les immeubles construits depuis 1996 — beaucoup d'immeubles parisiens anciens n'atteignent pas ce niveau.",
                },
                {
                  enjeu: "Bruits d'impact (pas, chutes, chaises)",
                  detail: "Vibrations transmises par contact direct avec la structure de l'immeuble. Exemples : pas des voisins du dessus, enfants qui courent, chaises traînées, haltères posées au sol. Ces bruits sont les plus difficiles à traiter depuis votre propre appartement car ils se propagent dans la structure. Solution côté émetteur : sous-couche résiliente sous le sol. Solution côté récepteur : faux-plafond désolidarisé. Les deux combinées sont idéales.",
                },
                {
                  enjeu: "Bruits d'équipements (plomberie, VMC, chauffe-eau)",
                  detail: "Bruits solidiens transmis par les canalisations, les gaines de ventilation ou les appareils électroménagers vibrant contre la structure. Exemples : chasse d'eau des voisins, bourdonnement de la VMC, ronronnement du chauffe-eau. Traitement : désolidarisation des équipements (supports anti-vibrations, manchons souples), isolation des canalisations (coquilles isolantes, enrobage laine minérale).",
                },
                {
                  enjeu: "Bruits extérieurs (rue, circulation, chantiers)",
                  detail: "À Paris, la nuisance sonore extérieure est significative dans les appartements donnant sur des rues passantes. La principale voie de transmission : les fenêtres. Solution prioritaire : remplacement des fenêtres par du double vitrage acoustique (4/16/4 minimum, ou 8/12/44.2 pour les cas sévères). Amélioration possible : joint acoustique de périphérie, film acoustique sur vitrage existant (solution provisoire).",
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

      {/* Section 2 — Solutions plafond */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Solutions plafond : faux-plafond désolidarisé et laine de roche
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le traitement phonique du plafond est souvent le chantier le plus impactant dans un appartement parisien, car il traite à la fois les bruits d&apos;impact et les bruits aériens venant du dessus. Voici les solutions du plus simple au plus performant.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Faux-plafond désolidarisé sur suspentes anti-vibrations',
                solution: "Ossature métallique suspendue au plancher via des suspentes élastiques (type Isotrem ou Spring), remplissage par laine de roche haute densité (minimum 100 mm, idéalement 150 mm), doublage par 2 plaques de plâtre haute densité BA13. C'est la solution de référence. Gain : 35 à 50 dB en fonction des bruits. Perte de hauteur : 15 à 25 cm.",
                cout: '80 – 150 €/m²',
              },
              {
                titre: 'Faux-plafond collé (solution légère)',
                solution: "Plaques de plâtre haute densité collées directement au plafond existant avec bandes résilientes périphériques. Solution plus rapide et moins coûteuse mais moins efficace sur les bruits d'impact. Gain : 15 à 25 dB. Perte de hauteur : 3 à 5 cm seulement. Adaptée quand la hauteur sous plafond est limitée.",
                cout: '40 – 70 €/m²',
              },
              {
                titre: 'Laine de roche haute densité (90 kg/m³ et plus)',
                solution: "Isolant de référence pour les applications acoustiques. La densité est déterminante : une laine de roche légère (20 kg/m³) absorbe les sons mais ne les bloque pas ; la haute densité (90+ kg/m³) offre à la fois absorption et affaiblissement. Utilisée systématiquement dans les faux-plafonds désolidarisés.",
                cout: '8 – 20 €/m²',
              },
              {
                titre: 'Plaques de plâtre haute densité (BA18, BA25)',
                solution: "Les plaques lourdes (18 mm et 25 mm) améliorent significativement l'isolement acoustique par rapport aux plaques standard BA13. Leur masse plus importante réduit la transmission des bruits aériens. En multicouche (2 plaques croisées), l'effet est encore renforcé. Toujours coupler avec un isolant souple.",
                cout: '12 – 25 €/m²',
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

      {/* Section 3 — Solutions sol */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Solutions sol : sous-couche résiliente et parquet flottant
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le traitement phonique du sol réduit les bruits que vous transmettez à vos voisins du dessous et, dans une moindre mesure, les bruits que vous recevez de ceux du dessus. C&apos;est souvent l&apos;intervention la moins coûteuse et la plus rapide à réaliser.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Sous-couche résiliente sous revêtement de sol',
                prix: '15 – 30 €/m²',
                detail: "Posée entre le support et le revêtement (parquet flottant, stratifié, vinyle), la sous-couche résiliente amortit les bruits d'impact avant qu'ils ne se transmettent au plancher. Les meilleures sous-couches atteignent 20 à 25 dB de réduction sur les bruits d'impact. Choisir une sous-couche avec un indice Delta Lw d'au moins 20 dB. Simple à poser lors d'un changement de sol.",
              },
              {
                type: 'Parquet flottant + sous-couche haute performance',
                prix: '40 – 100 €/m² posé',
                detail: "Le parquet flottant (non collé, non cloué) associé à une sous-couche résiliente haute performance est l'une des meilleures combinaisons pour réduire les bruits d'impact. Le parquet ne doit pas être collé aux murs : prévoir un joint périphérique en silicone ou une plinthe souple pour éviter les ponts phoniques.",
              },
              {
                type: 'Moquette épaisse',
                prix: '20 – 60 €/m² posé',
                detail: "La moquette épaisse (velours ou bouclé, avec sous-couche mousse) est le revêtement le plus efficace pour réduire les bruits d'impact vers le bas. Réduction de 25 à 35 dB selon les modèles. Solution très abordable et rapide à poser. Moins appréciée esthétiquement dans les appartements parisiens contemporains, mais très efficace dans les chambres.",
              },
              {
                type: 'Chape acoustique (chape flottante)',
                prix: '60 – 120 €/m²',
                detail: "Chape coulée sur une sous-couche résiliente périphérique et sous-jacente, totalement désolidarisée des murs et du plancher. C'est la solution la plus performante pour les bruits d'impact (réduction de 30 à 40 dB) mais aussi la plus lourde et la plus coûteuse. Nécessite de vérifier la portance du plancher avant réalisation.",
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

      {/* Section 4 — Solutions murs */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Solutions murs : doublage indépendant et isolation acoustique
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le traitement phonique des murs mitoyens s&apos;impose lorsque les bruits aériens des voisins (voix, musique, télévision) traversent les cloisons. L&apos;efficacité dépend essentiellement de la masse et de la désolidarisation du doublage.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Doublage désolidarisé sur ossature métallique',
                solution: "Ossature métallique posée à 2 à 3 cm du mur existant (sans contact direct), remplissage par laine de roche 45 à 100 mm, doublage en doubles plaques de plâtre haute densité. C'est la solution de référence. Gain : 40 à 55 dB. Perte de surface : 7 à 12 cm de largeur.",
                cout: '60 – 120 €/m²',
              },
              {
                titre: 'Doublage collé (complexe phonique)',
                solution: "Complexe plâtre + laine de roche collé directement sur le mur. Moins encombrant (perte de 4 à 6 cm) mais moins performant car il y a un risque de pont phonique par les points de colle. Gain : 25 à 35 dB selon la densité de la laine. Solution acceptable pour les cloisons légères.",
                cout: '45 – 80 €/m²',
              },
              {
                titre: 'Mur double indépendant (solution maximale)',
                solution: "Construction d'un second mur en carreaux de plâtre ou en briques plâtrières, totalement indépendant du mur mitoyen, avec un vide d'air rempli de laine minérale. C'est la solution la plus performante (gain jusqu'à 65 dB) mais la plus encombrante (perte de 12 à 20 cm). Réservée aux cas sévères.",
                cout: '100 – 180 €/m²',
              },
              {
                titre: 'Traitement des points singuliers (prises, portes)',
                solution: "Les prises électriques dans les murs mitoyens, les gaines et les portes sont des points faibles qui réduisent l'efficacité d'un doublage. Solutions : boîtiers électriques étanches, gaines isolées, joints acoustiques sous porte, seuil de porte occultant. Souvent négligé, le traitement des points singuliers peut améliorer les performances de 5 à 15 dB.",
                cout: '200 – 800 €',
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

      {/* Section 5 — Budget */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Budget isolation phonique : prix au m² à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent main d&apos;œuvre et matériaux inclus, pour un appartement parisien standard.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Solution</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix/m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Gain dB</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Type de bruit</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    solution: 'Sous-couche résiliente sol',
                    prix: '15 – 30 €',
                    gain: '15 – 25 dB',
                    type: 'Impact',
                  },
                  {
                    solution: 'Doublage mur collé',
                    prix: '45 – 80 €',
                    gain: '25 – 35 dB',
                    type: 'Aérien',
                  },
                  {
                    solution: 'Doublage mur désolidarisé',
                    prix: '60 – 120 €',
                    gain: '40 – 55 dB',
                    type: 'Aérien',
                  },
                  {
                    solution: 'Faux-plafond désolidarisé',
                    prix: '80 – 150 €',
                    gain: '35 – 50 dB',
                    type: 'Impact + aérien',
                  },
                  {
                    solution: 'Mur double indépendant',
                    prix: '100 – 180 €',
                    gain: '55 – 65 dB',
                    type: 'Aérien',
                  },
                ].map((row, i) => (
                  <tr key={row.solution} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.solution}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prix}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.gain}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils pour maximiser l&apos;efficacité de votre isolation phonique
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Identifier précisément le type de bruit avant de choisir une solution — un diagnostic est indispensable",
                "Éviter les ponts phoniques : toute liaison rigide entre le doublage et la structure annule l'effet d'isolation",
                "Traiter tous les points singuliers (prises, gaines, joints de portes) sous peine de performances divisées par 2",
                "Combiner sol + mur + plafond pour un résultat global optimal — traiter une seule paroi a des limites",
                "Choisir des matériaux haute densité : la masse est le premier critère d'isolement aux bruits aériens",
                "Faire appel à un acousticien pour les cas sévères — le diagnostic préalable coûte 300 à 800 € mais évite les erreurs",
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

      {/* Voir aussi */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Voir aussi</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/renovation-bureau-paris', title: 'Rénovation bureau Paris' },
              { href: '/blog/isolation-thermique-appartement-paris', title: 'Isolation thermique appartement Paris' },
              { href: '/blog/faux-plafond-paris', title: 'Faux-plafond Paris' },
              { href: '/blog/renovation-chambre-paris', title: 'Rénovation chambre Paris' },
              { href: '/blog/parquet-flottant-vs-colle-paris', title: 'Parquet flottant vs collé Paris' },
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
          Retrouvez le calme dans votre appartement parisien
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic acoustique gratuit. Devis détaillé sous 48h. Artisans spécialisés en isolation phonique à Paris.
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
