import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Renovation Salon Paris', item: 'https://espacedesignparis.fr/blog/renovation-salon-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Renovation Salon Paris : idees, materiaux & prix artisan 2025",
  description: "Guide complet pour renover son salon a Paris : ouverture cloison, parquet, peinture/enduit, cheminee, eclairage. Prix au m² artisan 2025.",
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-salon-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Combien coute la renovation d'un salon a Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La renovation d'un salon a Paris coute entre 150 et 700 euros par m² selon le niveau de finition. Pour un salon de 20 m² : un rafraichissement (peinture + sol) revient a 3 000 - 5 000 euros, une renovation standard (parquet, peinture, electricite) a 6 000 - 10 000 euros, une renovation complete avec ouverture de cloison, cheminee et eclairage encastre peut atteindre 15 000 - 25 000 euros.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il une autorisation pour ouvrir une cloison dans un appartement parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'ouverture d'une cloison dans un appartement parisien depend de sa nature. Pour une cloison de distribution (non porteuse), aucune autorisation n'est requise. Pour un mur porteur, un permis de construire ou une declaration de travaux est obligatoire, accompagne d'un bureau d'etudes structure et d'une mise en place de linteau metallique. En copropriete, toute modification des parties communes ou de la structure du batiment necessite une autorisation de l'assemblee generale.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel parquet choisir pour un salon parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour un salon parisien, le parquet en chene massif (80 - 200 euros/m² pose) est la reference : durabilite exceptionnelle (50+ ans), compatible avec les planchers anciens et valorisant a la revente. Le parquet contrecolle (50 - 130 euros/m² pose) offre un tres bon rapport qualite/prix avec une stabilite superieure. Dans un appartement haussmannien avec parquet ancien, la restauration (ponçage + vitrification) a 25 - 50 euros/m² est souvent la meilleure option.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment renover une cheminee decorative dans un appartement parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La renovation d'une cheminee decorative (non fonctionnelle) dans un appartement parisien comprend : le nettoyage et la consolidation des pierres ou marbre existants (50 - 150 euros), la peinture ou la teinture du manteau (100 - 400 euros selon le materiau), la pose d'un insert bio-ethanol sans conduit (300 - 1 500 euros) ou d'une decoration interieure (briques, miroir, bois). Pour une cheminee fonctionnelle, l'entretien du conduit et un ramonage annuel sont obligatoires.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Renovation Salon Paris : idees, materiaux & prix artisan 2025 | Espace Design",
  description: "Guide complet renovation salon Paris : ouverture cloison, parquet, peinture/enduit, cheminee, eclairage. Prix artisan 2025.",
  keywords: [
    'renovation salon Paris',
    'artisan renovation salon Paris',
    'prix renovation salon Paris',
    'ouverture cloison salon Paris',
    'parquet salon Paris',
    'peinture salon Paris',
    'cheminee decorative Paris',
    'eclairage salon Paris',
  ],
}

export default function ArticleRenovationSalon() {
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
            Rénover son Salon à Paris : guide complet artisan 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le salon est le cœur de l&apos;appartement parisien — la pièce de vie par excellence. Ouverture de cloison pour gagner en luminosité, parquet en chêne massif, enduit à la chaux, cheminée décorative ou éclairage architectural : guide complet des travaux possibles et des prix artisan 2025 pour rénover un salon à Paris.
          </p>
        </div>
      </section>

      {/* Section 1 — Diagnostic et enjeux */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Diagnostic avant rénovation : ce qu&apos;il faut vérifier dans un salon parisien
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Avant de lancer la rénovation d&apos;un salon à Paris, un diagnostic complet permet d&apos;anticiper les travaux cachés et d&apos;éviter les mauvaises surprises en cours de chantier. Les appartements parisiens — en particulier les haussmanniens — présentent des spécificités techniques qui influencent directement le chiffrage des travaux.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'État du plancher et du parquet existant',
                  detail: "Un parquet en chêne massif des années 1880-1950 peut être ponçé et vitrifié 4 à 6 fois. Il est souvent plus économique et plus valorisant de le restaurer (25 – 50 €/m²) que de le remplacer. En revanche, un plancher vermoulu ou très bombé peut nécessiter une dépose complète et une pose de chape avant tout nouveau revêtement.",
                },
                {
                  enjeu: 'Nature des cloisons (porteuses ou non)',
                  detail: "En appartement parisien, la distinction entre mur porteur (en pierre ou brique pleine, épaisseur supérieure à 20 cm) et cloison de distribution (plâtre sur lattis bois ou placo, épaisseur 7 à 12 cm) est fondamentale. Seul un bureau d'études structure peut valider qu'un mur peut être ouvert et déterminer les dimensions du linteau.",
                },
                {
                  enjeu: 'Réseau électrique et mise aux normes',
                  detail: "Les appartements parisiens construits avant 1970 ont souvent des installations électriques non conformes aux normes NFC 15-100 actuelles. La rénovation du salon est le bon moment pour faire mettre le tableau, les prises et l'éclairage aux normes. Compter 1 500 à 4 000 € pour une remise aux normes complète d'un salon de 20 m².",
                },
                {
                  enjeu: 'Humidité et isolation thermique',
                  detail: "Les murs donnant sur l'extérieur dans les immeubles anciens présentent parfois des ponts thermiques et de l'humidité de condensation. Un doublage isolant (laine de roche + placo, 4 à 6 cm de profondeur) améliore le confort thermique et supprime les moisissures.",
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

      {/* Section 2 — Ouverture cloison et parquet */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Ouverture de cloison et revêtements de sol : les deux travaux structurants
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Dans la rénovation d&apos;un salon parisien, deux travaux sont particulièrement structurants : l&apos;ouverture d&apos;une cloison pour créer un espace plus lumineux et plus grand, et le choix du revêtement de sol qui conditionne toute l&apos;ambiance de la pièce.
          </p>

          <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-3">Ouverture de cloison : prix et faisabilité</h3>
          <div className="space-y-3 mb-8">
            {[
              {
                type: 'Dépose cloison plâtre / placo (non porteuse)',
                prix: '800 – 2 500 €',
                detail: "Dépose complète avec protection des pièces adjacentes, rebouchage des saignées, reprise sol et plafond. Délai : 1 à 2 jours de chantier. Aucune autorisation administrative requise pour les cloisons non porteuses.",
              },
              {
                type: 'Ouverture mur porteur avec linteau IPN',
                prix: '5 000 – 15 000 €',
                detail: "Étude structure obligatoire (500 – 1 500 €), permis ou déclaration de travaux, pose d'un linteau IPN, étaiement provisoire. Délai : 3 à 7 jours de chantier. Transformation radicale de l'espace mais investissement important.",
              },
              {
                type: 'Création verrière intérieure',
                prix: '3 000 – 8 000 €',
                detail: "Alternative à l'ouverture complète : une verrière atelier en acier vitrée conserve la structure tout en laissant passer la lumière. Très tendance dans les appartements parisiens, elle crée une séparation visuelle tout en ouvrant l'espace.",
              },
            ].map((el) => (
              <div key={el.type} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.type}</div>
                  <div className="text-[#B8960C] text-sm font-medium flex-shrink-0">{el.prix}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>

          <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-3">Revêtements de sol pour un salon parisien</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Revêtement</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix posé (€/m²)</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Durée de vie</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Valeur revente</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { mat: 'Parquet chêne massif', prix: '80 – 200 €', duree: '50+ ans', valeur: 'Excellente' },
                  { mat: 'Parquet contrecollé chêne', prix: '50 – 130 €', duree: '25 – 30 ans', valeur: 'Très bonne' },
                  { mat: 'Carrelage grand format 90×90', prix: '70 – 150 €', duree: '30+ ans', valeur: 'Bonne' },
                  { mat: 'Béton ciré', prix: '80 – 160 €', duree: '15 – 20 ans', valeur: 'Bonne' },
                  { mat: 'Restauration parquet existant', prix: '25 – 50 €', duree: '+20 ans', valeur: 'Excellente' },
                ].map((row, i) => (
                  <tr key={row.mat} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.mat}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.prix}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.duree}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.valeur}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 3 — Peinture, enduit et cheminée */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Peinture décorative, enduit & cheminée : l&apos;âme du salon parisien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Au-delà des travaux structurants, la rénovation d&apos;un salon parisien passe par le soin apporté aux finitions murales et aux éléments de caractère. La peinture, l&apos;enduit et la cheminée sont les trois postes qui confèrent au salon son identité esthétique.
          </p>
          <div className="space-y-4 mb-8">
            {[
              {
                type: 'Peinture murs et plafond',
                prix: '15 – 40 €/m²',
                detail: "La préparation des murs est déterminante : les murs en plâtre sur lattis bois des appartements anciens nécessitent un enduit de ragréage avant toute peinture de qualité (15 – 30 €/m² supplémentaires). Les finitions mates sur les murs et satinées sur les boiseries donnent un rendu haut de gamme. Les teintes sourdes (vert sauge, bleu ardoise, terracotta) sont très tendance en 2025.",
              },
              {
                type: 'Enduit à la chaux ou stuc vénitien',
                prix: '40 – 120 €/m²',
                detail: "L'enduit à la chaux apporte texture, chaleur et un effet légèrement mat qui absorbe la lumière de façon particulière. Le stuc vénitien poli donne un effet marbre lumineux très élégant. Ces techniques demandent un artisan qualifié et deux à trois jours de travail par mur. Très valorisant dans un salon haut de gamme.",
              },
              {
                type: 'Cheminée décorative — rénovation ou pose insert',
                prix: '800 – 4 000 €',
                detail: "La cheminée est l'élément signature du salon haussmannien. Sa rénovation comprend le nettoyage du marbre ou de la pierre, la réparation des fissures, éventuellement la peinture ou la teinture. Un insert bio-éthanol (sans conduit requis) redonne une âme à une cheminée décorative muselée. Budget insert : 300 – 1 500 € selon le modèle.",
              },
              {
                type: 'Moulures et corniches — restauration',
                prix: '50 – 150 €/ml',
                detail: "Les moulures et corniches en plâtre sont l'un des traits distinctifs de l'appartement haussmannien. Leur restauration (rebouchage, ragréage, repeinture) ou leur remplacement (moulures en polystyrène ou plâtre moulé) est souvent négligée mais déterminante pour le résultat final.",
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

      {/* Section 4 — Éclairage */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Éclairage du salon : plan lumineux et prix installation
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;éclairage est souvent le parent pauvre de la rénovation d&apos;un salon, alors qu&apos;il en conditionne l&apos;ambiance autant que les peintures ou le parquet. Un plan lumineux efficace combine toujours plusieurs sources à hauteurs différentes pour éviter l&apos;effet platfond central unique.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Spots encastrés LED (éclairage général)',
                solution: "Remplace avantageusement le plafonnier central unique. Spots orientables pour éclairer spécifiquement le coin salon, la salle à manger et les zones de circulation. Prévoir 1 spot par 2 à 3 m² de salon.",
                cout: '80 – 200 € / spot installé',
              },
              {
                titre: 'Suspension décorative (point focal)',
                solution: "Au-dessus d'une table ou d'un espace lecture, la suspension crée un point focal esthétique et fonctionnel. Dans un salon haussmannien avec moulures, une suspension en laiton ou en verre soufflé s'intègre parfaitement.",
                cout: '100 – 800 € matériel + pose',
              },
              {
                titre: 'Appliques murales (éclairage d\'ambiance)',
                solution: "De chaque côté d'un miroir, d'une cheminée ou en tête d'un canapé. Crée une lumière d'ambiance rasante qui valorise les textures murales (enduit, lambris). Idéal pour les soirées.",
                cout: '150 – 500 € / applique installée',
              },
              {
                titre: 'Ruban LED et variateurs (domotique)',
                solution: "Ruban LED sous les caissons de faux-plafond ou derrière les meubles TV pour un éclairage indirect doux. Couplé à des variateurs intelligents, il permet d'adapter instantanément l'ambiance au moment de la journée.",
                cout: '200 – 800 € selon surface',
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
            Budget complet : prix de rénovation d&apos;un salon à Paris par niveau
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent pour un salon de 20 m² à Paris, main d&apos;œuvre et matériaux inclus. L&apos;ouverture de cloison et la mise aux normes électrique sont comptées séparément car très variables selon l&apos;état du chantier.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Niveau</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prestations</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Total 20 m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    niveau: 'Rafraîchissement',
                    prestations: 'Peinture murs + plafond, restauration parquet',
                    prixM2: '150 – 250 €',
                    total: '3 000 – 5 000 €',
                  },
                  {
                    niveau: 'Rénovation standard',
                    prestations: 'Parquet contrecollé, peinture préparée, éclairage spots, mise aux normes électrique',
                    prixM2: '350 – 500 €',
                    total: '7 000 – 10 000 €',
                  },
                  {
                    niveau: 'Rénovation complète',
                    prestations: 'Parquet massif, enduit, cheminée, éclairage multicouche, moulures, éventuellement ouverture cloison',
                    prixM2: '500 – 700 €',
                    total: '10 000 – 14 000 €',
                  },
                  {
                    niveau: 'Haut de gamme',
                    prestations: 'Stuc vénitien, parquet massif, domotique, cheminée insert, menuiserie sur mesure',
                    prixM2: '700 – 1 000 €',
                    total: '14 000 – 20 000 €',
                  },
                ].map((row, i) => (
                  <tr key={row.niveau} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.niveau}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.prestations}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prixM2}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
            Conseils pour réussir la rénovation de son salon
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Commencer par les travaux les plus salissants (démolition, plâtrerie) avant les finitions",
              "Restaurer le parquet existant plutôt que le remplacer si l'épaisseur le permet (gain de 50 à 70%)",
              "Traiter l'électricité en même temps que la peinture pour limiter les saignées visibles",
              "Prévoir impérativement 3 niveaux d'éclairage : général, d'ambiance et d'accentuation",
              "Choisir la couleur de peinture après avoir posé le sol — et non avant",
              "Réserver un budget de 10 à 15% d'imprévus pour les murs anciens ou planchers dégradés",
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

      {/* Voir aussi */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Voir aussi</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/parquet-paris', title: 'Parquet Paris' },
              { href: '/peinture-paris', title: 'Peinture Paris' },
              { href: '/blog/ouverture-cuisine-salon-paris', title: 'Ouverture cuisine-salon Paris' },
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénovation appartement haussmannien' },
              { href: '/blog/creation-verriere-interieure-paris', title: 'Création verrière intérieure' },
              { href: '/blog/parquet-massif-paris', title: 'Parquet massif Paris' },
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
              { href: '/renovation-paris-6e', label: 'Paris 6e' },
              { href: '/renovation-paris-7e', label: 'Paris 7e' },
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne' },
              { href: '/renovation-versailles', label: 'Versailles' },
              { href: '/renovation-saint-germain-en-laye', label: 'Saint-Germain-en-Laye' },
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
          Votre salon mérite un espace de vie à la hauteur
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis détaillé sous 48h. Artisans spécialisés en rénovation parisienne.
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
