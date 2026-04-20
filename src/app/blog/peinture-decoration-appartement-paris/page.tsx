import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: "Peinture Décoration Appartement Paris", item: 'https://espacedesignparis.fr/blog/peinture-decoration-appartement-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Peinture & Décoration Appartement Paris : couleurs, finitions & prix 2025 | Espace Design",
  description: "Peinture appartement Paris 2025 : tendances couleurs, finitions mat/velours/satin, peinture spéciale pièces humides. Artisan peintre Paris, prix et délais.",
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/peinture-decoration-appartement-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix d'une peinture d'appartement à Paris par un artisan ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "À Paris, le prix d'une peinture d'appartement par un artisan professionnel varie de 15 à 35 €/m² de surface peinte (murs + plafond), main d'œuvre et fournitures comprises. Pour un deux-pièces de 40 m² (environ 120 m² de surfaces murales et plafonds), comptez 1 800 à 4 200 €. Ce prix inclut la préparation (enduit, rebouchage des fissures), la sous-couche et deux couches de finition. Les peintures spéciales (résistante à l'humidité, lessivable renforcée, haute couverture) impliquent un surcoût de 10 à 25 % sur le prix des fournitures.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelle finition de peinture choisir dans un appartement parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le choix de la finition dépend de la pièce et de l'usage. Mat absolu : idéal pour les chambres et salons, masque les imperfections des murs parisiens anciens, mais ne supporte pas le lessivage. Velours (mat satiné) : polyvalent, utilisable partout, facile à lessiver légèrement, le meilleur compromis pour la vie quotidienne. Satin : pour les couloirs, halls et pièces à fort passage — résistant aux frottements. Brillant : uniquement pour les boiseries, huisseries et radiateurs. En salle de bain et cuisine, utiliser impérativement une peinture hydrofuge spécifique (finition velours ou satin avec additif antifongique).",
      },
    },
    {
      '@type': 'Question',
      name: "Combien de temps faut-il pour peindre un appartement parisien de 60 m² ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour un appartement parisien de 60 m² (3 pièces principales + cuisine + salle de bain + couloir), un artisan peintre professionnel a besoin de 5 à 8 jours ouvrés, selon l'état des murs. Répartition type : 1 à 2 jours de préparation (rebouchage, enduit, ponçage), 1 jour de sous-couche, 2 à 3 jours de finition (2 couches). Si les murs présentent des imperfections importantes (vieux papier peint à décoller, fissures profondes, tâches de nicotine) : ajouter 1 à 2 jours de préparation supplémentaires. L'enduit de lissage complet ajoute 2 à 4 jours.",
      },
    },
    {
      '@type': 'Question',
      name: "Peut-on utiliser une peinture normale en salle de bain à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Non, une peinture standard n'est pas adaptée à la salle de bain. L'humidité permanente (taux d'humidité souvent supérieur à 70 %) provoque le cloquage et la formation de moisissures noires sous une peinture non hydrofuge en moins de 2 ans. Il faut impérativement utiliser une peinture spéciale salle de bain avec un additif antifongique et une résine hydrofuge (marques : V33, Zinsser, Tollens Nuances). Ces peintures sont 30 à 60 % plus chères que les peintures standard mais durent 2 à 3 fois plus longtemps dans les pièces humides. La ventilation (VMC) reste indispensable : aucune peinture ne compense une ventilation défaillante.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Peinture & Décoration Appartement Paris : couleurs, finitions & prix 2025 | Espace Design",
  description: "Peinture appartement Paris 2025 : tendances couleurs, finitions mat/velours/satin, peinture spéciale pièces humides. Artisan peintre Paris, prix et délais.",
}

export default function ArticlePeintureDecorationAppartementParis() {
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
            Peinture et Décoration Appartement Paris : couleurs, finitions et prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            La peinture est le levier le plus rapide pour transformer un appartement parisien. Choix des couleurs, des finitions, préparation des murs anciens, peintures spéciales pour les pièces humides : ce guide complet 2025 vous donne toutes les clés pour réussir votre projet avec un artisan peintre parisien.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-[#1C1C1C] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { val: '15 €/m²', label: 'Prix mini peinture posée' },
              { val: '22 €/m²', label: 'Prix médian 2 couches finition' },
              { val: '35 €/m²', label: 'Prix max enduit + finition premium' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-xl sm:text-2xl font-semibold text-[#D4AF37] mb-1">{s.val}</div>
                <div className="text-gray-500 text-[10px] uppercase tracking-wider font-light">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1 — Tendances couleurs 2025 */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Tendances couleurs peinture appartement Paris 2025
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Après des années de blanc et de gris dominants, les tendances 2025 s&apos;orientent vers des teintes chaudes et naturelles, inspirées de la terre et des paysages méditerranéens. Paris reste une ville de contrastes : le blanc cassé coexiste avec des murs accent en couleurs profondes.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Dans les appartements haussmanniens, les couleurs s&apos;adaptent à la hauteur sous plafond (souvent 2,80 à 3,20 m) : les teintes sombres sont plus accessibles en hauteur et créent un effet cocooning sans écraser la pièce comme dans un appartement aux plafonds bas.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: "Terracotta et ocre — la chaleur de la terre",
                  detail: "La teinte terracotta (orange brique désaturé) est la couleur de l'année en décoration intérieure. Elle réchauffe les espaces orientés nord, souvent froids dans les appartements parisiens. Utilisée en mur accent (un seul mur) dans un salon ou une chambre, elle dialogue bien avec le parquet chêne et le laiton brossé. Marques phares : Farrow & Ball 'Orangery', Little Greene 'Terracotta', Flamant 'Sienne'. Tarif : 80 à 140 €/L pour les peintures de luxe.",
                },
                {
                  enjeu: "Vert sauge — la nature dans l'appartement",
                  detail: "Le vert sauge (vert grisé, désaturé) est en vogue depuis 2023 et continue sa progression en 2025. Il apporte une note végétale sans agressivité visuelle. Particulièrement réussi dans les cuisines et les salles à manger. S'associe avec le marbre blanc, le bois naturel et les textiles en lin. Variations : vert eucalyptus (plus chaud), vert cèdre (plus profond). Farrow & Ball 'Mizzle', 'Cooking Apple Green', Little Greene 'Mid Azure Green'.",
                },
                {
                  enjeu: "Bleu pétrole — la profondeur élégante",
                  detail: "Le bleu pétrole (entre bleu nuit et vert canard) habille les salons et bibliothèques des appartements parisiens avec une élégance intemporelle. Dans les pièces hautes de plafond, il crée un effet de velours enveloppant. Associé à des boiseries blanches ou crème, il rappelle les intérieurs des hôtels particuliers. Farrow & Ball 'Inchyra Blue', 'Hague Blue', Ressource 'Bleu Crépuscule'.",
                },
                {
                  enjeu: "Blanc cassé et crème — le classique indémodable",
                  detail: "Le blanc pur est dépassé en 2025 : le blanc cassé (blanc avec une pointe de gris, jaune ou rose) est plus chaleureux et masque mieux les imperfections des murs parisiens anciens. Pour les appartements à louer ou à vendre, le blanc cassé reste la valeur sûre qui plaît au plus grand nombre. Références : Farrow & Ball 'All White', 'Pointing', Dulux 'Timeless', Tollens 'Blanc Coquille d'Oeuf'.",
                },
                {
                  enjeu: "Gris chaud — le contemporain intemporel",
                  detail: "Contrairement aux gris froids des années 2010, les gris chauds 2025 ont une dominante beige ou rose qui s'accorde avec tous les styles d'appartements. Ils restent une valeur sûre pour les pièces à vivre et les couloirs. Le gris chaud foncé (anthracite doux) est très utilisé pour les plafonds tendance en 2025 : peindre le plafond dans une teinte de 2 à 3 nuances plus foncée que les murs crée un effet cocooning.",
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

      {/* Section 2 — Finitions */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Finitions de peinture : mat, velours, satin, brillant
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La finition est aussi importante que la couleur. Elle détermine la résistance, l&apos;entretien et l&apos;ambiance de la pièce. Voici un guide pratique des finitions disponibles chez un artisan parisien.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Mat absolu',
                solution: "Rendu velouté, zéro réflexion. Masque très bien les imperfections des murs parisiens anciens (fissures, creux, inégalités). Recommandé pour les chambres et les salons. Ne supporte pas le lessivage : idéal dans les pièces peu fréquentées. Tendance 2025 : très utilisé en couleur profonde (vert, bleu, terracotta) pour créer un effet pigmenté intense.",
                cout: 'Chambres, salons',
              },
              {
                titre: 'Velours (satiné mat)',
                solution: "Le meilleur compromis : aspect légèrement satiné, très doux au toucher, facile à essuyer. Utilisable dans toutes les pièces y compris les cuisines légères. Résiste aux frottements modérés. C'est la finition la plus demandée par les artisans parisiens pour les rénovations complètes d'appartements. Prix similaire au mat.",
                cout: 'Universel — toutes pièces',
              },
              {
                titre: 'Satin',
                solution: "Brillance modérée, très résistant aux frottements et au lessivage. Recommandé pour les couloirs, halls d'entrée et pièces à fort passage. Reflect la lumière : attention à bien préparer les murs car il révèle les imperfections. Excellente durabilité (8 à 12 ans avant retouche). Également utilisé pour les plinthes et boiseries.",
                cout: 'Couloirs, halls, cuisine',
              },
              {
                titre: 'Brillant',
                solution: "Haute résistance aux chocs et au lessivage agressif. Réservé aux boiseries (portes, fenêtres, plinthes, radiateurs) et aux pièces très humides. En 2025, le brillant laqué blanc ou noir est très tendance sur les menuiseries dans les appartements haussmanniens rénovés. Ne jamais utiliser sur des murs texturés ou imparfaits.",
                cout: 'Boiseries, radiateurs',
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

      {/* Section 3 — Préparation et peintures spéciales */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Préparation des murs et peintures spéciales
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La préparation représente 40 à 60 % du temps d&apos;un chantier de peinture professionnel. C&apos;est elle qui conditionne la durabilité et la qualité du résultat final. Dans un appartement parisien ancien, la préparation est souvent plus longue que la peinture elle-même.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: "Enduit, rebouchage et ponçage",
                prix: '5 – 15 €/m²',
                detail: "Avant toute peinture, les fissures sont rebouchées (enduit de lissage), les trous comblés et les aspérités poncées. Un enduit de lissage complet (sur tout le mur) est nécessaire pour obtenir une surface parfaitement lisse — indispensable avec les finitions satinées ou brillantes. Durée séchage : 4 à 24h selon le produit. Ne jamais sauter cette étape sur du bâti ancien.",
              },
              {
                type: "Impression (sous-couche)",
                prix: '3 – 8 €/m²',
                detail: "La sous-couche améliore l'adhérence et couvre les tâches profondes (humidité ancienne, nicotine, traces de moisissures traitées). Pour les murs très absorbants (plâtre neuf, enduit), une sous-couche acrylique est indispensable pour éviter l'effet mat inégal dit 'œil de perdrix'. Une bonne sous-couche réduit la quantité de peinture de finition nécessaire et améliore la couvrance.",
              },
              {
                type: "Peinture spéciale salle de bain et cuisine",
                prix: '+20 à +40 % vs standard',
                detail: "Les peintures pour pièces humides intègrent des résines hydrofuges et des additifs antifongiques qui empêchent le développement de moisissures. Elles résistent à des taux d'humidité supérieurs à 70 % sans cloquer. Marques recommandées : V33 Salle de bain, Tollens Expert+, Ronseal. Finition velours ou satin uniquement. Appliquer en 2 couches croisées minimum. Séchage complet : 48 à 72h.",
              },
              {
                type: "Peinture couloir et fort passage",
                prix: 'Satin ou velours renforcé',
                detail: "Les couloirs parisiens sont souvent étroits et fréquemment frottés (sacs, vêtements, enfants). Une peinture haute résistance aux frottements (norme EN 13300 classe 1 ou 2) est indispensable. Les références professionnelles (Tollens Pro, Ripolin Expert, Dulux Valentine Pro) durent 2 à 3 fois plus longtemps que les peintures standard dans les zones à fort passage.",
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

      {/* Section 4 — Tableau de prix */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Tableau des prix de peinture à Paris 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Prix par m² de surface peinte (murs + plafond), main d&apos;œuvre et fournitures comprises, pour un artisan parisien qualifié.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Prestation</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Nb couches</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Délai séchage</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    traitement: 'Peinture 2 couches (sans enduit)',
                    unite: '15 – 22 €/m²',
                    budget: '2 couches',
                    duree: '4–6h entre couches',
                  },
                  {
                    traitement: 'Enduit + peinture 2 couches',
                    unite: '22 – 30 €/m²',
                    budget: '3 passes',
                    duree: '24h après enduit',
                  },
                  {
                    traitement: 'Lissage complet + peinture',
                    unite: '28 – 40 €/m²',
                    budget: '4–5 passes',
                    duree: '48h après lissage',
                  },
                  {
                    traitement: 'Peinture salle de bain spéciale',
                    unite: '20 – 30 €/m²',
                    budget: '2 couches min',
                    duree: '72h séchage complet',
                  },
                  {
                    traitement: 'Boiseries (portes, plinthes)',
                    unite: '25 – 50 €/ml',
                    budget: '2 couches laqué',
                    duree: '6–12h entre couches',
                  },
                  {
                    traitement: 'Peinture décorative (effet)',
                    unite: '40 – 80 €/m²',
                    budget: 'Variable',
                    duree: 'Variable selon effet',
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
              Conseils pour réussir sa peinture d&apos;appartement à Paris
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Toujours demander des échantillons sur le mur réel — la couleur change radicalement selon l'orientation (nord/sud) et la lumière artificielle",
                "Ne jamais sauter l'étape d'impression (sous-couche) : elle double la durée de vie de la peinture de finition",
                "Dans un appartement à louer : choisir une peinture velours lessivable — la facilité d'entretien vaut l'investissement",
                "Pour un mur accent en couleur profonde : 3 couches minimum sont nécessaires pour obtenir un résultat uniforme",
                "Grouper la peinture avec d'autres travaux (parquet, plomberie) réduit les frais fixes de déplacement et de protection",
                "Les peintures de luxe (Farrow & Ball, Little Greene) couvrent moins bien mais ont une densité pigmentaire supérieure : prévoir 3 couches au lieu de 2",
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
              { href: '/blog/peinture-appartement-paris', title: 'Peinture appartement Paris' },
              { href: '/blog/peinture-enduit-paris', title: 'Peinture et enduit Paris' },
              { href: '/blog/peinture-decorative-paris', title: 'Peinture décorative Paris' },
              { href: '/blog/peinture-cuisine-paris', title: 'Peinture cuisine Paris' },
              { href: '/blog/peinture-plafond-paris', title: 'Peinture plafond Paris' },
              { href: '/blog/decoration-interieure-paris', title: "Décoration intérieure Paris" },
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
          Faites peindre votre appartement parisien par un artisan
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Conseil couleurs inclus. Devis détaillé sous 48h. Artisan peintre Paris et Île-de-France.
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
