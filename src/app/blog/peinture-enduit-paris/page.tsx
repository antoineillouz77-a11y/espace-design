import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Enduit Peinture Paris', item: 'https://espacedesignparis.fr/blog/peinture-enduit-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Enduit Peinture Paris : préparation murs & finitions 2025 | Espace Design',
  description: 'Enduits de finition à Paris : enduit de lissage, enduit à la chaux, ragréage. Prix, techniques, artisans. Guide complet 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/peinture-enduit-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Faut-il obligatoirement un enduit avant de peindre à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Non, pas systématiquement — mais dans la grande majorité des appartements parisiens anciens, l'enduit préalable est indispensable pour obtenir un résultat propre. Les murs en plâtre ancien présentent des irrégularités, des fissures, des zones de plâtre manquant ou des remontées d'humidité qui rendent la peinture directe impossible. Un peintre qualifié évalue l'état des murs en début de chantier et préconise les opérations nécessaires : rebouchage ponctuel, enduit de lissage ou ragréage complet selon l'état de surface.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle différence entre enduit à la chaux et enduit plâtre ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'enduit à la chaux est recommandé sur les murs humides, en pierre, ou exposés aux remontées capillaires — très fréquents dans les immeubles parisiens anciens et les rez-de-chaussée. Il est respirant et régulateur d'humidité. L'enduit plâtre traditionnel est adapté aux murs intérieurs secs, en briques ou parpaings. Il offre un lissé parfait mais n'est pas compatible avec l'humidité — s'il est appliqué sur un mur humide, il décollera en quelques mois. Le choix du bon enduit dépend du diagnostic du mur, pas uniquement du rendu esthétique souhaité.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'un ragréage mural à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix d'un ragréage mural (enduit de lissage complet sur un mur) à Paris varie selon l'état de surface et le produit utilisé : pour un ragréage léger (irrégularités mineures), comptez 15 à 30 €/m² main d'œuvre incluse. Pour un ragréage complet sur mur dégradé (fissures, plâtre friable, ancienne peinture à l'huile), le tarif monte à 35 à 60 €/m². Ces prix sont donnés hors peinture finale — la peinture représente généralement 15 à 30 €/m² supplémentaires selon le nombre de couches et la qualité de la peinture choisie.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Enduit Peinture Paris : préparation murs & finitions 2025 | Espace Design',
  description: 'Enduits de finition à Paris : enduit de lissage, enduit à la chaux, ragréage. Prix, techniques, artisans. Guide complet 2025.',
}

export default function ArticlePeintureEnduit() {
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
            Peinture
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Enduit Peinture Paris : préparation murs & finitions 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Dans les appartements parisiens anciens, la peinture ne s&apos;applique jamais directement sur un mur brut. Plâtre vieilli, irrégularités, fissures, humidité : la préparation des murs conditionne la qualité et la durabilité du résultat final. Enduit de lissage, chaux, tadelakt, béton ciré — guide complet avec prix 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Pourquoi les murs parisiens nécessitent un enduit */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Pourquoi les murs parisiens nécessitent souvent un enduit préalable
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              L&apos;état des murs dans les appartements parisiens anciens est rarement compatible avec une peinture directe. Les causes sont multiples et souvent combinées, rendant la préparation des supports l&apos;étape la plus déterminante d&apos;un chantier de peinture.
            </p>
            <div className="space-y-4">
              {[
                {
                  cause: 'Plâtre ancien et irrégularités',
                  detail: "Les appartements haussmanniens et d'avant-guerre sont enduits au plâtre traditionnel, posé à la main par des plâtriers artisans. Ce plâtre, même de qualité, présente des ondulations et des variations d'épaisseur que la peinture moderne ne peut pas masquer — au contraire, elle les révèle sous lumière rasante. Un enduit de lissage est systématiquement nécessaire avant toute peinture mate ou satinée dans ces logements.",
                },
                {
                  cause: 'Fissures de retrait et fissures structurelles',
                  detail: "Les mouvements thermiques et la dilatation différentielle des matériaux créent des microfissures dans les enduits anciens. Dans les immeubles parisiens en pierre de taille, les fissures de retrait (en cheveux) sont courantes et sans danger structurel — elles se traitent avec un enduit souple ou une résine de pontage avant peinture. Les fissures plus larges (> 1 mm) nécessitent un diagnostic préalable pour écarter toute cause structurelle.",
                },
                {
                  cause: 'Humidité et remontées capillaires',
                  detail: "Les appartements en rez-de-chaussée ou au premier étage de nombreux immeubles parisiens souffrent de remontées capillaires depuis les fondations. La peinture éclate, les enduits se décollent, des traces blanches (efflorescences de sels) apparaissent. Dans ces cas, la peinture seule est inutile : il faut traiter la cause (drainage, injection hydrofuge) et choisir un enduit compatible (chaux hydraulique naturelle).",
                },
                {
                  cause: 'Anciennes peintures à l\'huile ou au plomb',
                  detail: "De nombreux appartements parisiens anciens ont été peints à l'huile (glycéro) pendant des décennies. Ces peintures forment un film dur, brillant, non poreux sur lequel une peinture acrylique moderne n'adhère pas sans préparation. Il faut poncer mécaniquement, appliquer une couche d'impression accrochante et souvent recouvrir d'un enduit de ragréage avant de pouvoir peindre. La présence de plomb (immeuble d'avant 1949) impose un diagnostic plomb préalable.",
                },
              ].map((el) => (
                <div key={el.cause} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.cause}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Types d'enduits */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Types d&apos;enduits : lissage, chaux, plâtre, décoratif — prix et applications
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le choix de l&apos;enduit dépend de la nature du support, de l&apos;état de surface et du rendu souhaité. Voici les principales familles d&apos;enduits utilisés dans la rénovation d&apos;appartements parisiens.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Type d&apos;enduit</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix posé (€/m²)</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Support adapté</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Rendu</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'Enduit de lissage (ragréage fin)', prix: '15 – 35 €', support: 'Plâtre, placo', rendu: 'Lisse parfait' },
                  { type: 'Enduit à la chaux hydraulique', prix: '25 – 50 €', support: 'Mur humide, pierre', rendu: 'Mat et respirant' },
                  { type: 'Enduit plâtre (réparation)', prix: '20 – 40 €', support: 'Mur sec, brique', rendu: 'Lisse à graissé' },
                  { type: 'Enduit décoratif (chaux colorée)', prix: '40 – 80 €', support: 'Tous supports sains', rendu: 'Texture artisanale' },
                  { type: 'Tadelakt', prix: '80 – 150 €', support: 'Murs sains, pièces humides', rendu: 'Brillant, imperméable' },
                  { type: 'Béton ciré mural', prix: '70 – 120 €', support: 'Tous supports sains', rendu: 'Contemporain, lisse' },
                ].map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.type}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prix}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.support}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.rendu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-3">
            {[
              {
                titre: 'L\'enduit de lissage : le plus utilisé dans les rénovations parisiennes',
                texte: "L'enduit de lissage (ou finition) est appliqué en une ou deux passes fines (1 à 3 mm d'épaisseur) sur un support préalablement rebouché et poncé. Il permet d'obtenir une surface parfaitement plane, prête à recevoir n'importe quelle peinture. C'est la solution la plus polyvalente et la plus accessible. Produits courants : Knauf Finito, Siniat Prestofix, ou enduits de finition à base de plâtre en poudre.",
              },
              {
                titre: 'L\'enduit à la chaux : adapté aux murs humides et aux immeubles anciens',
                texte: "La chaux hydraulique naturelle (NHL) est le matériau traditionnel des maçons parisiens avant l'ère du plâtre industriel. Elle est vapoperméable (laisse respirer le mur), bactéricide naturellement, et compatible avec les remontées capillaires légères. Dans un immeuble en pierre de taille ou en briques, c'est souvent la seule option viable sur le long terme. Elle ne convient pas sur plaques de plâtre standard (placo) sans primaire adapté.",
              },
            ].map((el) => (
              <div key={el.titre} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.titre}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.texte}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Préparation murs */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Préparation des murs avant peinture : rebouchage, ponçage, impression
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La préparation des murs est la phase la plus chronophage d&apos;un chantier de peinture et la plus déterminante pour la qualité du résultat. Voici les étapes détaillées telles qu&apos;elles sont réalisées par nos plâtriers-peintres à Paris.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                etape: '1. Diagnostic du support',
                detail: "Évaluation de l'état des murs : type de support (plâtre, placo, béton, brique), présence de fissures, d'humidité, d'anciennes couches de peinture incompatibles. Cette étape conditionne le choix des matériaux et la méthode de préparation. Durée : 30 minutes à 2 heures selon la surface.",
              },
              {
                etape: '2. Rebouchage des fissures et trous',
                detail: "Les microfissures sont traitées avec un enduit de rebouchage souple (Polyfilla, Profhome). Les fissures plus larges (> 2 mm) sont reprises avec un tissu de verre (armature) collé à l'enduit avant d'être lissé. Les trous de fixation sont bouchés au plâtre de Paris ou à l'enduit fin. Séchage : 4 à 24h selon l'épaisseur.",
              },
              {
                etape: '3. Ponçage et nettoyage',
                detail: "Les zones rebouchées et les parties décollées sont ponçées à la machine (ponceuse à long manche) ou à la main. Les surfaces brillantes (ancienne peinture glycéro) sont dépoussiérées et poncées mécaniquement pour créer une accroche mécanique. Le support est ensuite dépoussiéré à l'aspirateur et passé à l'éponge humide.",
              },
              {
                etape: '4. Application de l\'impression',
                detail: "Un primaire d'accrochage (impression) est systématiquement appliqué avant l'enduit et avant la peinture finale. Il consolide le support, régule l'absorption et améliore l'adhérence. Selon le support : primaire universel, primaire fixateur (supports très absorbants), primaire anti-humidité. Séchage : 2 à 4h.",
              },
              {
                etape: '5. Application de l\'enduit de finition (si nécessaire)',
                detail: "L'enduit de lissage est appliqué à la spatule inox en passes croisées de 1 à 2 mm. Après séchage complet (12 à 24h), la surface est poncée au papier de verre fin (grain 120 à 180). Une deuxième passe peut être nécessaire pour les murs très irréguliers. Le support est alors prêt pour la peinture finale.",
              },
            ].map((el) => (
              <div key={el.etape} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.etape}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Enduits décoratifs */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Enduits décoratifs : béton ciré mural, tadelakt, chaux colorée
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Au-delà de la préparation technique, les enduits décoratifs s&apos;imposent comme finition à part entière dans les rénovations contemporaines parisiennes. Ils remplacent la peinture et apportent texture, profondeur et caractère aux intérieurs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                matiere: 'Béton ciré sur murs',
                prix: '70 – 120 €/m²',
                detail: "Application de 2 à 3 couches de béton ciré sur un support parfaitement plan (enduit de lissage obligatoire au préalable). Rendu contemporain, minéral, en niveaux de gris ou teinté. Protection par 2 couches de cire ou résine polyuréthane. Durée de pose : 3 à 5 jours pour une pièce standard. Très tendance dans les appartements haussmanniens rénovés.",
                tendance: 'Très demandé',
              },
              {
                matiere: 'Tadelakt',
                prix: '80 – 150 €/m²',
                detail: "Enduit à la chaux de Marrakech, poli à la pierre de rivière et traité au savon noir. Imperméable naturellement, idéal en salle de bain, douche ou cuisine. Rendu brillant, satiné, légèrement veiné. Application longue et technique — réservée à des artisans spécialisés. Colorable dans la masse (pigments naturels).",
                tendance: 'Haut de gamme',
              },
              {
                matiere: 'Chaux colorée (badigeon)',
                prix: '30 – 60 €/m²',
                detail: "Badigeon de chaux dilué et teinté aux pigments naturels. Rendu mat, légèrement irrégulier (effet 'habité'), respirant. Parfaitement adapté aux appartements anciens et aux styles déco contemporains (wabi-sabi, méditerranéen). Application au balai brosse ou à l'éponge. Compatible avec les murs en pierre, plâtre et béton.",
                tendance: 'Tendance 2025',
              },
              {
                matiere: 'Enduit à l\'argile',
                prix: '40 – 80 €/m²',
                detail: "Enduit naturel à base d'argile brute, sans liant chimique. Régulateur d'humidité et de température, qualités acoustiques appréciables. Rendu texturé mat, personnalisable. Moins imperméable que la chaux — à éviter dans les pièces très humides sans protection complémentaire.",
                tendance: 'Écologique',
              },
            ].map((el) => (
              <div key={el.matiere} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.matiere}</div>
                  <div className="text-[#B8960C] text-sm font-medium flex-shrink-0">{el.prix}</div>
                </div>
                <div className="text-xs text-gray-500 font-light italic mb-3">{el.tendance}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
          <div className="bg-[#1C1C1C] rounded-lg p-5">
            <div className="font-medium text-white text-sm mb-2">Le support : la clé du rendu décoratif</div>
            <div className="text-gray-400 text-sm font-light leading-relaxed">
              Quel que soit l&apos;enduit décoratif choisi, la qualité du rendu final dépend à 80 % de la préparation du support. Un mur irrégulier ou non lissé avant application de béton ciré donnera un résultat décevant — les imperfections transparaissent sous les couches fines. Nos plâtriers réalisent systématiquement un ragréage de mise à niveau avant toute finition décorative.
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Budget */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Budget complet : travaux de plâtrerie-peinture selon état des murs
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Tarifs 2025 à Paris pour la préparation des murs et la peinture, main d&apos;œuvre et matériaux inclus.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">État du mur</th>
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Prestations incluses</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget (€/m²)</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Durée (par pièce)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    etat: 'Bon état général',
                    prestations: 'Impression + 2 couches de peinture, rebouchage ponctuel',
                    budget: '20 – 35 €',
                    duree: '1 – 2 jours',
                  },
                  {
                    etat: 'Irrégularités légères',
                    prestations: 'Enduit de lissage 1 passe + ponçage + impression + 2 couches',
                    budget: '35 – 55 €',
                    duree: '2 – 3 jours',
                  },
                  {
                    etat: 'Mur dégradé (fissures, plâtre friable)',
                    prestations: 'Ragréage 2 passes + armature anti-fissures + ponçage + impression + peinture',
                    budget: '55 – 80 €',
                    duree: '3 – 5 jours',
                  },
                  {
                    etat: 'Mur humide ou peinture ancienne à l\'huile',
                    prestations: 'Traitement hydrofuge ou décapage + enduit chaux + impression + peinture',
                    budget: '60 – 100 €',
                    duree: '4 – 7 jours',
                  },
                  {
                    etat: 'Finition décorative (béton ciré, tadelakt)',
                    prestations: 'Ragréage + enduit décoratif 2–3 couches + protection/cire',
                    budget: '80 – 150 €',
                    duree: '3 – 6 jours',
                  },
                ].map((row, i) => (
                  <tr key={row.etat} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.etat}</td>
                    <td className="px-4 py-3 text-gray-600 font-light text-xs">{row.prestations}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.budget}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.duree}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mb-6">
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils pour optimiser votre chantier peinture-enduit
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Faites évaluer l\'état de vos murs avant d\'établir un budget — la préparation représente souvent 40 à 60 % du coût total d\'un chantier peinture',
                'Ne surchargez pas les murs en mauvais état avec des épaisseurs d\'enduit excessives — préférez un ragréage en deux passes fines avec séchage intermédiaire',
                'Choisissez une peinture acrylique de qualité professionnelle (Tollens, Zolpan, V33) — la différence de rendu et de durabilité est significative par rapport aux peintures grande surface',
                'Pour les plafonds, un plafond lissé et peint blanc mat reste le choix le plus valorisant et le moins susceptible de vieillir visuellement',
                'Prévoyez un séchage de 24h minimum entre chaque couche d\'enduit et entre l\'impression et la peinture — précipiter ces délais dégrade le résultat',
                'Avant toute rénovation d\'appartement d\'avant 1949, faites réaliser un diagnostic plomb — la présence de plomb dans les peintures impose des précautions réglementaires',
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
              { href: '/peinture-paris', title: 'Peinture Paris' },
              { href: '/platrererie-paris', title: 'Plâtrerie Paris' },
              { href: '/blog/peinture-appartement-paris', title: 'Peinture appartement Paris' },
              { href: '/blog/peinture-decorative-paris', title: 'Peinture décorative Paris' },
              { href: '/blog/sol-beton-cire-paris', title: 'Sol béton ciré Paris' },
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
              { href: '/renovation-paris-4e', label: 'Paris 4e' },
              { href: '/renovation-paris-5e', label: 'Paris 5e' },
              { href: '/renovation-paris-6e', label: 'Paris 6e' },
              { href: '/renovation-paris-7e', label: 'Paris 7e' },
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
          Des murs parfaitement préparés, une peinture qui dure
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Plâtriers et peintres parisiens spécialisés dans les appartements anciens. Diagnostic gratuit. Devis sous 48h.
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
