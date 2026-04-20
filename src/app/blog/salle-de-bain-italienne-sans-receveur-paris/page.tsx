import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Douche Italienne sans Receveur Paris', item: 'https://espacedesignparis.fr/blog/salle-de-bain-italienne-sans-receveur-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Douche Italienne sans Receveur Paris : installation & prix 2025 | Espace Design",
  description: "Douche italienne sans receveur à Paris : chape hydrofuge, étanchéité SPEC, carrelage antidérapant. Contraintes copropriété, prix 2025.",
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/salle-de-bain-italienne-sans-receveur-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une douche italienne sans receveur à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le coût d\'une douche italienne sans receveur à Paris varie selon la superficie et les matériaux. Pour une douche de 90 × 90 cm : 1 800 à 3 500 € (chape, SPEC, carrelage standard, siphon de sol). Pour une douche de 120 × 80 cm avec carrelage premium : 2 500 à 5 000 €. Pour une grande douche à l\'italienne de 160 × 90 cm avec niche intégrée et paroi de douche : 4 000 à 8 000 €. Ces tarifs incluent la démolition, la chape hydrofuge, l\'étanchéité SPEC, la pose du carrelage antidérapant et le siphon de sol. Devis gratuit sous 48h.',
      },
    },
    {
      '@type': 'Question',
      name: 'La douche italienne est-elle autorisée en copropriété parisienne ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La douche italienne sans receveur est généralement autorisée en copropriété, mais elle impose des précautions importantes. La pente du sol (1,5 à 2%) modifie parfois la hauteur de la pièce par rapport aux appartements voisins. Le siphon de sol ne doit pas être placé au-dessus d\'une cavité ou d\'une gaine technique. L\'étanchéité (système SPEC) est obligatoire et doit être réalisée par un artisan qualifié. Certaines copropriétés imposent une déclaration de travaux au syndic, voire l\'accord de l\'assemblée générale si les travaux touchent des parties structurelles. Toujours vérifier le règlement de copropriété avant de lancer les travaux.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qu\'est-ce que l\'étanchéité SPEC pour une douche italienne ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le SPEC (Système de Protection à l\'Eau sous Carrelage) est la norme française d\'étanchéité obligatoire pour toute douche à l\'italienne sans receveur. Il consiste en l\'application d\'une membrane d\'étanchéité liquide (mortier-colle étanche ou membrane en feuille) sur toute la surface de la douche et remontée sur les murs à 20 cm minimum de hauteur. Cette étanchéité est réalisée avant la pose du carrelage. Sans SPEC, toute fuite peut entraîner des dégâts des eaux dans les appartements voisins — et une mise en cause de responsabilité du propriétaire. Le DTU 52.2 et la norme NF P 05-010 encadrent ces travaux.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quel carrelage choisir pour une douche italienne sans receveur ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pour une douche italienne sans receveur, le carrelage doit obligatoirement être antidérapant : classe R9 minimum (usage domestique), R10 ou R11 recommandé si la pente est importante. Le grand format (60 × 60 ou 80 × 80 cm) réduit le nombre de joints et donne un effet épuré, mais sa pose en pente est plus technique. Le carrelage 30 × 30 cm ou le mini-grès cérame (mosaïque) est plus facile à poser en pente mais donne un rendu plus traditionnel. Évitez le marbre poli (glissant mouillé) et les carreaux de ciment non traités (poreux). La pente minimale recommandée est de 1,5%, idéalement 2% vers le siphon central.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Douche Italienne sans Receveur Paris : installation & prix 2025 | Espace Design",
  description: "Douche italienne sans receveur à Paris : chape hydrofuge, étanchéité SPEC, carrelage antidérapant. Contraintes copropriété, prix 2025.",
}

export default function ArticleDoucheItalienneParis() {
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
            Douche Italienne sans Receveur Paris : installation et prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            La douche italienne sans receveur est devenue incontournable dans les rénovations de salles de bain parisiennes. Esthétique, accessible et facile d&apos;entretien, elle exige néanmoins une mise en oeuvre rigoureuse : chape, pente, étanchéité SPEC et carrelage adapté. Guide complet 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Principe technique */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Principe technique : chape, pente et siphon de sol
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Contrairement à une douche avec receveur (en résine ou en céramique), la douche à l&apos;italienne sans receveur est intégralement réalisée en maçonnerie humide. La zone de douche est créée en abaissant légèrement le niveau du sol ou en réalisant une chape inclinée, sans rebord apparent. L&apos;eau s&apos;écoule naturellement vers un siphon de sol.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Dans les appartements parisiens, la contrainte principale est la dalle béton existante : il est rarement possible de l&apos;abaisser (risque structurel, coût). L&apos;artisan crée donc une légère surélévation carrelée de la zone hors-douche, ou travaille avec un siphon extra-plat (hauteur 5 à 7 cm) pour minimiser la différence de niveaux.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'La chape hydrofuge : base de toute douche italienne',
                  detail: 'La chape (mortier ciment + adjuvant hydrofuge) constitue le support de la douche. Elle est réalisée avec une pente orientée vers le siphon de 1,5% à 2% (soit 1,5 à 2 cm de dénivelé par mètre). Sur plancher bois (immeuble haussmannien), une chape allégée (type anhydrite) est recommandée pour limiter le poids. La chape doit sécher 28 jours avant pose du carrelage — point souvent négligé qui peut entraîner des fissures.',
                },
                {
                  enjeu: 'Le siphon de sol : central ou linéaire',
                  detail: 'Deux options principales : le siphon carré central (130 × 130 mm ou 150 × 150 mm), discret et universel, ou le siphon linéaire en bord de douche (acier inox), plus design mais plus coûteux (150 à 400 €). Le siphon doit être positionnée au point le plus bas de la pente. Un débit minimum de 0,5 L/s est requis pour éviter toute stagnation d\'eau.',
                },
                {
                  enjeu: 'Pente et point zéro : la contrainte principale à Paris',
                  detail: 'Dans un appartement parisien avec dalle béton, créer une pente de 2% sans surélever excessivement le reste de la salle de bain est un défi. Les siphons ultra-plats (seulement 5 cm de hauteur totale) permettent de travailler avec des chapes très minces. Certains artisans utilisent des préformes en polystyrène expansé déjà inclinées (type Wedi ou Schulter-KERDI) qui simplifient la mise en oeuvre et accélèrent les délais.',
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

      {/* Section 2 — Étanchéité SPEC */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Étanchéité obligatoire : le système SPEC
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le SPEC (Système de Protection à l&apos;Eau sous Carrelage) est la norme française imposée par le DTU 52.2 pour toute douche à l&apos;italienne sans receveur. Son respect est obligatoire pour la conformité des travaux et la couverture de l&apos;assurance dommages-ouvrage.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Membrane liquide (étanchéité liquide)',
                solution: 'Application au rouleau d\'une membrane étanche en 2 couches croisées (type Mapelastic, Aquabead ou Schlüter-KERDI-DS). Chaque couche sèche 4h. La membrane remonte sur les murs à 20 cm minimum. Les angles sol/mur sont renforcés avec un joint silicone ou une bande de renfort. C\'est la méthode la plus courante et la plus fiable.',
                cout: '15 – 30 €/m²',
              },
              {
                titre: 'Membrane en feuille (système KERDI)',
                solution: 'Natte polyéthylène avec crochets d\'ancrage (type Schlüter-KERDI) collée au mortier flexible. Étanchéité parfaite, compatible plancher chauffant, séchage rapide. Idéale sur les préformes polystyrène. Plus rapide à poser qu\'une membrane liquide mais nécessite une maîtrise technique. Angles raccordés par des pièces en feuilles pré-formées.',
                cout: '20 – 40 €/m²',
              },
              {
                titre: 'Bande d\'étanchéité aux angles',
                solution: 'Quel que soit le système choisi, les jonctions sol/mur et mur/mur doivent être traitées avec une bande de renfort (bande à mailles non tissée noyée dans la membrane). Ces zones sont les points faibles les plus fréquents dans les douches qui fuient. Ne jamais combler uniquement au silicone — le silicone seul n\'est pas un système d\'étanchéité.',
                cout: 'Inclus SPEC',
              },
              {
                titre: 'Test d\'étanchéité avant carrelage',
                solution: 'Avant de poser le carrelage, un test d\'étanchéité (bouchage du siphon + remplissage d\'eau 24h à 48h) permet de détecter toute fuite. Ce test est recommandé par les DTU et indispensable en immeuble collectif parisien pour éviter les sinistres chez les voisins du dessous. Un artisan sérieux le propose systématiquement.',
                cout: 'Gratuit (bonne pratique)',
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

      {/* Section 3 — Carrelage adapté */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Carrelage adapté : antidérapant, grand format et contraintes parisiennes
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le carrelage d&apos;une douche italienne sans receveur doit répondre à des exigences techniques précises. La norme NF P 18-411 classe les carrelages par coefficient de friction (R9 à R13) — R9 minimum obligatoire en douche à usage domestique.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Petit format (20 × 20 cm, mosaïque)',
                prix: 'R10 – R11 naturel',
                detail: 'Les petits formats (20 × 20 ou mosaïque 5 × 5 cm) s\'adaptent facilement à la pente et aux courbes. Plus de joints = meilleure adhérence mais entretien plus important (joints à nettoyer régulièrement). La mosaïque en grès cérame non émaillé est la solution la plus antidérapante et la plus durable. Tendance actuelle : mosaïque blanc mat ou grès beige pour un rendu minimaliste.',
              },
              {
                type: 'Grand format (60 × 60, 80 × 80 cm)',
                prix: 'R9 minimum',
                detail: 'Les grands formats donnent un rendu épuré et contemporain très recherché. Leur pose en pente est plus technique (découpes précises, jointoiement soigné) et leur poids peut poser problème en appartement parisien (vérifier la capacité de la dalle). Choisir impérativement un grand format rectifié antidérapant (finition structurée, grip, ou lappato léger). Un joint de 2 mm minimum est recommandé.',
              },
              {
                type: 'Carreaux de ciment : usage limité',
                prix: 'Avec traitement hydrofuge',
                detail: 'Les carreaux de ciment (très tendance) sont naturellement poreux et absorbants. En douche, ils peuvent être utilisés uniquement s\'ils sont traités avec un hydrofuge minéral professionnel avant et après pose, et ré-appliqué tous les 2 à 3 ans. Un artisan recommande plutôt un grès cérame effet carreau de ciment (non poreux) pour les mêmes raisons esthétiques sans les inconvénients.',
              },
              {
                type: 'Paroi de douche : semi-frameless ou walk-in',
                prix: '300 – 1 200 €',
                detail: 'Pour délimiter la zone douche et protéger les murs, une paroi en verre trempé (8 ou 10 mm) est recommandée. Les modèles walk-in (une seule paroi droite) sont les plus minimalistes et les plus faciles à nettoyer. Les parois semi-frameless (sans cadre haut et bas) donnent un effet très aérien. Prévoir le calfeutrage périodique du joint bas entre paroi et sol.',
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

      {/* Section 4 — Prix et durée chantier */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix et durée de chantier à Paris : récapitulatif 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Tarifs indicatifs pour Paris intra-muros, main d&apos;oeuvre et matériaux inclus. Hors démolition si existant à déposer.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Poste</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Délai</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Note</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    traitement: 'Chape hydrofuge inclinée',
                    unite: '30 – 60 €/m²',
                    budget: '28 jours séchage',
                    duree: 'Obligatoire',
                  },
                  {
                    traitement: 'Étanchéité SPEC (membrane)',
                    unite: '15 – 40 €/m²',
                    budget: '1 journée',
                    duree: 'Obligatoire DTU',
                  },
                  {
                    traitement: 'Siphon de sol carré',
                    unite: '80 – 200 €',
                    budget: 'Posé avec chape',
                    duree: 'Standard',
                  },
                  {
                    traitement: 'Siphon linéaire inox',
                    unite: '150 – 400 €',
                    budget: 'Posé avec chape',
                    duree: 'Design',
                  },
                  {
                    traitement: 'Carrelage antidérapant posé (R9-R11)',
                    unite: '50 – 120 €/m²',
                    budget: '1 à 2 journées',
                    duree: 'Selon format',
                  },
                  {
                    traitement: 'Paroi douche verre trempé',
                    unite: '300 – 1 200 €',
                    budget: 'Après carrelage sec',
                    duree: 'Optionnel',
                  },
                ].map((row, i) => (
                  <tr key={row.traitement} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.traitement}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.unite}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.budget}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.duree}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Erreurs à éviter pour une douche italienne à Paris
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Ne pas négliger la pente : une pente insuffisante (<1,5%) crée des flaques d\'eau stagnante',
                'Ne pas poser le carrelage avant séchage complet de la chape (28 jours) — risque de fissures',
                'Ne pas utiliser de silicone seul comme étanchéité — non conforme DTU, risque de sinistre',
                'Ne pas choisir un carrelage poli ou émaillé lisse en douche — dangereux (R6 ou moins)',
                'Ne pas oublier de déclarer les travaux au syndic si modification du sol ou des évacuations',
                'Ne pas sous-dimensionner le siphon : débit minimum 0,5 L/s pour éviter les débordements',
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
              { href: '/blog/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain Paris' },
              { href: '/blog/carrelage-salle-de-bain-paris', title: 'Carrelage salle de bain Paris' },
              { href: '/blog/humidite-appartement-paris', title: "Traitement humidité Paris" },
              { href: '/blog/renovation-appartement-ancien-paris', title: 'Rénovation appartement ancien Paris' },
              { href: '/blog/isolation-phonique-paris', title: 'Isolation phonique Paris' },
              { href: '/blog/peinture-enduit-paris', title: 'Peinture et enduit Paris' },
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
          Créez votre douche italienne à Paris
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Artisan salle de bain Paris — devis gratuit sous 48h. Étanchéité SPEC, carrelage antidérapant, pose soignée.
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
