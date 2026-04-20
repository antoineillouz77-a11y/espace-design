import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Cuisine Ouverte Paris', item: 'https://espacedesignparis.fr/blog/renovation-cuisine-ouverte-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Cuisine Ouverte Paris : aménagement, verrière & prix 2025 | Espace Design",
  description: "Aménager une cuisine ouverte à Paris : cuisine en L, îlot central, verrière atelier, matériaux tendance. Artisan Paris, prix 2025.",
  datePublished: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-cuisine-ouverte-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Faut-il un permis de construire pour ouvrir une cuisine à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Non, ouvrir une cuisine sur le salon ne nécessite pas de permis de construire. Si vous abattez un mur porteur, une déclaration préalable de travaux en mairie est requise, accompagnée d'une étude structurelle par un bureau d'études. En copropriété, l'assemblée générale doit approuver les travaux touchant aux parties communes ou aux murs porteurs. En revanche, l'installation d'une verrière intérieure ou le déplacement de cloisons légères ne nécessitent aucune démarche administrative.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment gérer les odeurs et la ventilation dans une cuisine ouverte ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La ventilation est le point critique d'une cuisine ouverte. La solution la plus efficace est un extracteur déporté (moteur dans les combles ou en extérieur) avec un débit d'au moins 600 m³/h, couplé à un filtre à charbon actif si l'évacuation vers l'extérieur est impossible. En copropriété parisienne, le passage d'un conduit d'évacuation vers la façade ou la toiture doit être approuvé par le syndic. La VMC hygroréglable de type B complète le dispositif. Budget extracteur déporté : 800 à 2 500 €.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel est le prix d'une cuisine ouverte avec verrière à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le coût d'une cuisine ouverte avec verrière à Paris varie selon la configuration. Une cuisine ouverte simple (sans verrière, mur non porteur abattu + électroménager encastré) : 8 000 à 18 000 €. Avec verrière style atelier (acier + vitrage simple) : 3 000 à 8 000 € pour la verrière seule. Configuration complète cuisine en L avec îlot central, verrière et finitions haut de gamme : 25 000 à 45 000 €. Ces prix incluent la main d'œuvre, les matériaux et l'électroménager de milieu de gamme.",
      },
    },
    {
      '@type': 'Question',
      name: "Peut-on ouvrir une cuisine dans un appartement haussmannien parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, mais avec des précautions spécifiques. Les immeubles haussmanniens ont souvent des murs porteurs en pierre ou en brique de 40 à 60 cm d'épaisseur. Avant tout abattage, un bureau d'études structures doit déterminer si le mur est porteur et définir le type de linteau ou poutre à poser. Comptez 800 à 2 000 € pour l'étude structurelle, et 3 000 à 8 000 € pour la pose d'une IPN (poutre acier) si nécessaire. La hauteur sous plafond généreuse (2,70 à 3,20 m) des haussmanniens est un atout pour les verrières d'atelier.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Cuisine Ouverte Paris : aménagement, verrière & prix 2025 | Espace Design",
  description: "Aménager une cuisine ouverte à Paris : cuisine en L, îlot central, verrière atelier, matériaux tendance. Artisan Paris, prix 2025.",
  keywords: "cuisine ouverte Paris, aménagement cuisine Paris, cuisine îlot Paris, verrière cuisine Paris",
}

export default function ArticleCuisineOuverteParis() {
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
            Cuisine
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Cuisine Ouverte Paris : aménagement, verrière &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Ouvrir sa cuisine sur le salon est l&apos;une des transformations les plus demandées dans les appartements parisiens. Entre la cuisine en L, l&apos;îlot central, la verrière d&apos;atelier et le choix des matériaux, chaque projet requiert une approche technique et esthétique rigoureuse. Guide complet 2025 par Espace Design.
          </p>
        </div>
      </section>

      {/* Section 1 — 3 configurations */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              3 configurations de cuisine ouverte adaptées aux appartements parisiens
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le choix de la configuration dépend de la superficie disponible, de l&apos;orientation et de l&apos;usage prévu. Dans les appartements parisiens souvent compacts (40 à 80 m²), chaque configuration répond à des contraintes spécifiques d&apos;espace et de budget.
            </p>
            <div className="space-y-4">
              {[
                {
                  titre: "Cuisine en L : la plus adaptée aux petites surfaces",
                  detail: "La cuisine en L s'appuie sur deux murs adjacents et libère la zone centrale pour la circulation. Idéale pour les appartements de 40 à 60 m², elle permet d'intégrer lave-vaisselle, four encastré et réfrigérateur américain sans empiéter sur la pièce de vie. La longueur des plans de travail varie de 3 à 5 mètres linéaires. Prix fourni + posé : 6 000 à 15 000 €.",
                },
                {
                  titre: "Cuisine avec îlot central : convivialité et fonctionnalité",
                  detail: "L'îlot central transforme la cuisine en espace de vie partagé. Il intègre souvent la plaque de cuisson, un évier secondaire ou simplement un plan de travail convivial avec tabourets. Nécessite au minimum 12 m² de surface cuisine et une hauteur sous plafond de 2,50 m pour un extracteur efficace. Budget îlot seul : 2 000 à 8 000 €.",
                },
                {
                  titre: "Cuisine linéaire ouverte : sobriété parisienne",
                  detail: "Sur un seul mur, la cuisine linéaire convient aux studios et deux-pièces parisiens. Elle maximise la longueur disponible (souvent 3 à 4 m) avec un agencement : réfrigérateur / lave-vaisselle / évier / plaque / four. La plus discrète visuellement, elle se fond dans le salon sans le surcharger. Prix fourni + posé : 4 000 à 10 000 €.",
                },
              ].map((el) => (
                <div key={el.titre} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.titre}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Verrière intérieure */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Verrière intérieure cuisine-salon : styles et prix
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La verrière d&apos;atelier est la solution la plus tendance pour séparer visuellement la cuisine du salon tout en conservant la luminosité. Elle laisse passer la lumière, délimite les espaces sans les cloisonner et apporte un caractère industriel très prisé dans les appartements parisiens rénovés.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: "Verrière acier style atelier",
                prix: "3 000 – 6 000 €",
                detail: "Profilés acier noir mat ou thermolaqué, vitrage simple ou feuilleté. Le style atelier parisien par excellence. Fabrication sur mesure, pose incluse. Dimensions courantes : 1,80 à 2,50 m de hauteur.",
              },
              {
                titre: "Verrière aluminium thermolaquée",
                prix: "2 500 – 5 000 €",
                detail: "Plus légère que l'acier, déclinée en noir, blanc ou gris anthracite. Finition uniforme, entretien facile. Compatible avec double vitrage pour une meilleure isolation phonique.",
              },
              {
                titre: "Verrière avec porte coulissante",
                prix: "4 500 – 8 000 €",
                detail: "Intègre une porte coulissante (ou pivotante) dans la structure. Permet de fermer la cuisine lors de préparations intenses ou pour réduire les nuisances sonores. Très prisé dans les appartements familiaux.",
              },
              {
                titre: "Verrière bois et verre",
                prix: "3 500 – 7 000 €",
                detail: "Structure bois massif ou contreplaqué laqué. Style plus chaleureux que l'acier, intégration naturelle dans les appartements anciens. Traitement anti-humidité obligatoire côté cuisine.",
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.titre}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.prix}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
          <div className="bg-[#1C1C1C]/5 rounded-lg p-5 border border-gray-200">
            <p className="text-[#1C1C1C] text-sm font-medium mb-2">Conseil Espace Design</p>
            <p className="text-gray-600 text-sm font-light leading-relaxed">
              Dans les immeubles haussmanniens, la hauteur sous plafond (2,70 à 3,20 m) permet des verrières pleine hauteur spectaculaires. Prévoyez un vitrage feuilleté (sécurité) si la verrière est proche d&apos;une zone de passage. La verrière n&apos;est pas soumise à permis de construire mais peut nécessiter l&apos;accord du syndic si elle touche à un mur porteur.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 — Matériaux tendance */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Matériaux tendance pour une cuisine ouverte parisienne
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le choix des matériaux définit l&apos;ambiance et la durabilité de la cuisine. Dans une cuisine ouverte, les matériaux doivent être à la fois résistants (chaleur, humidité, chocs) et esthétiquement cohérents avec le reste de l&apos;appartement, puisqu&apos;ils sont visibles depuis le salon.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                matiere: "Béton ciré : industriel et intemporel",
                usage: "Plan de travail, crédence, sol",
                prix: "80 – 150 €/m²",
                detail: "Le béton ciré est imperméabilisé (résine époxy) et résiste aux taches, à la chaleur et à l'humidité. Disponible en 50 teintes, il unifie visuellement la cuisine et le salon. Entretien : simple dépoussiérage + crème protectrice 1 à 2 fois par an. Inconvénient : sensible aux impacts sur les angles.",
              },
              {
                matiere: "Carreaux de ciment : caractère et authenticité",
                usage: "Crédence, sol, façades meubles",
                prix: "60 – 120 €/m² posé",
                detail: "Très tendance dans les rénovations parisiennes de type loft ou appartement ancien. Les carreaux de ciment (20×20 cm) apportent couleur et motif sans alourdir l'espace. Exigent un traitement hydrofuge après pose. Recommandés en crédence plutôt qu'en plan de travail.",
              },
              {
                matiere: "Bois massif : chaleur naturelle",
                usage: "Plan de travail, façades meubles, îlot",
                prix: "300 – 800 €/ml (plan de travail)",
                detail: "Le chêne massif huilé reste l'incontournable des cuisines ouvertes parisiennes. Chaleureux, réparable (ponçage), il vieillit bien si entretenu. Entretien : huile naturelle 1 à 2 fois par an. Le noyer et le frêne offrent des alternatives plus sombres et précieuses.",
              },
              {
                matiere: "Inox alimentaire : professionnel et durable",
                usage: "Plan de travail, crédence, évier intégré",
                prix: "200 – 500 €/ml (plan de travail)",
                detail: "Inaltérable, antibactérien et facile à entretenir, l'inox est le matériau des cuisines professionnelles. Dans une cuisine ouverte, il confère un style industriel sobre. L'inox brossé (mat) est préférable à l'inox poli (traces de doigts visibles). Compatible avec plaque à induction encastrée.",
              },
            ].map((el) => (
              <div key={el.matiere} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-1">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.matiere}</div>
                  <div className="text-[#B8960C] text-sm font-medium flex-shrink-0">{el.prix}</div>
                </div>
                <div className="text-[#B8960C]/70 text-xs font-light mb-2">{el.usage}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Électroménager et extracteur */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Électroménager encastré et extracteur déporté
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Dans une cuisine ouverte, l&apos;électroménager encastré est indispensable pour préserver la cohérence visuelle avec le salon. L&apos;extracteur déporté est la solution technique incontournable pour maîtriser les odeurs et la vapeur sans nuire au confort du séjour.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: "Four encastré multifonction",
                prix: "400 – 1 200 €",
                detail: "Four encastré sous plan de travail ou en colonne. Préférer la pyrolyse pour une cuisine ouverte (nettoyage sans produits chimiques). Marques reconnues : Bosch, Siemens, De Dietrich.",
              },
              {
                titre: "Plaque à induction",
                prix: "300 – 900 €",
                detail: "L'induction est recommandée en cuisine ouverte : pas de flamme, chauffe rapide, surface froide en dehors des zones de cuisson. Les modèles full-surface permettent de positionner les casseroles librement.",
              },
              {
                titre: "Extracteur déporté (moteur distant)",
                prix: "800 – 2 500 €",
                detail: "Le moteur est déporté dans les combles, le palier ou en extérieur. Bruit réduit à moins de 35 dB dans la cuisine. Débit minimum recommandé : 600 m³/h. Filtre charbon actif si évacuation vers l'extérieur impossible.",
              },
              {
                titre: "Lave-vaisselle intégré",
                prix: "500 – 1 000 €",
                detail: "Totalement intégré sous plan de travail avec façade assortie aux meubles. Invisible depuis le salon. Indispensable pour maintenir l'ordre visuel dans une cuisine ouverte.",
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.titre}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.prix}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Contraintes copropriété */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Contraintes copropriété : VMC, murs porteurs et autorisations à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
            Plus de 70 % des logements parisiens sont en copropriété. Avant de lancer les travaux, plusieurs points doivent être validés pour éviter blocages et litiges :
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              "Vérifier que la VMC collective peut accueillir un débit supplémentaire pour la cuisine ouverte",
              "Obtenir l'accord écrit du syndic pour tout abattage de mur porteur ou modification de la structure",
              "Déclarer les travaux en mairie si abattage de mur porteur (déclaration préalable de travaux)",
              "Soumettre le projet en assemblée générale si les travaux affectent les parties communes",
              "Faire réaliser une étude de structure par un bureau d'études agréé avant tout abattage",
              "Prévoir une protection acoustique pour ne pas augmenter les nuisances sonores vers les voisins",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Tableau prix */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix cuisine ouverte Paris 2025 : tableau récapitulatif
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Tarifs indicatifs pour Paris intramuros, main d&apos;œuvre et matériaux inclus (hors électroménager haut de gamme).
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Configuration</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Surface type</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Durée chantier</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { config: "Linéaire ouverte simple", surface: "Studio / 2P", budget: "4 000 – 10 000 €", duree: "1 – 2 semaines" },
                  { config: "Cuisine en L sans verrière", surface: "2P – 3P", budget: "8 000 – 16 000 €", duree: "2 – 3 semaines" },
                  { config: "Cuisine en L + verrière acier", surface: "3P – 4P", budget: "14 000 – 25 000 €", duree: "3 – 4 semaines" },
                  { config: "Îlot central + verrière", surface: "3P+ (min. 50 m²)", budget: "20 000 – 35 000 €", duree: "4 – 6 semaines" },
                  { config: "Abattage mur porteur + IPN", surface: "Tous types", budget: "+ 5 000 – 12 000 €", duree: "+ 1 semaine" },
                  { config: "Extracteur déporté + VMC", surface: "Tous types", budget: "800 – 2 500 €", duree: "1 – 2 jours" },
                ].map((row, i) => (
                  <tr key={row.config} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.config}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.surface}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.budget}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.duree}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
              { href: '/blog/renovation-appartement-ancien-paris', title: 'Rénovation appartement ancien Paris' },
              { href: '/blog/pose-parquet-paris', title: 'Pose parquet Paris' },
              { href: '/blog/peinture-enduit-paris', title: 'Peinture et enduit Paris' },
              { href: '/blog/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain Paris' },
              { href: '/blog/isolation-phonique-paris', title: 'Isolation phonique Paris' },
              { href: '/blog/renovation-appartement-paris-10e', title: 'Rénovation appartement Paris 10e' },
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
          Votre cuisine ouverte sur mesure à Paris
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Étude de faisabilité technique. Devis détaillé sous 48h.
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
