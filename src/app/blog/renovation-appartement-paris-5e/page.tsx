import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Paris 5e', item: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-5e' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Paris 5e : Latin, Contrescarpe & artisan 2025 | Espace Design',
  description: "Artisan rénovation Paris 5e arrondissement, Quartier Latin, Mouffetard, Contrescarpe. Vieux bâti, caves, prix 2025.",
  datePublished: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-5e',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix d'une rénovation d'appartement dans le 5e arrondissement de Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dans le 5e arrondissement, le prix d'une rénovation varie entre 1 200 et 2 800 €/m² selon l'ampleur des travaux et l'état du bien. Une rénovation légère (peinture, parquet ponçage, salle de bain partielle) tourne autour de 800 à 1 200 €/m². Une rénovation complète d'un appartement de 50 m² dans le Quartier Latin — incluant remise aux normes électrique NF C 15-100, plomberie, parquet, cuisine, salle de bain refaite et isolation des murs en pierre — se situe entre 70 000 et 120 000 €. Les contraintes des immeubles très anciens (17e-18e siècles) et les prescriptions des ABF peuvent allonger les délais et renchérir les coûts de 10 à 20 %.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelles sont les contraintes ABF pour rénover dans le 5e arrondissement ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Une grande partie du 5e arrondissement est couverte par le périmètre de protection des Monuments Historiques (Panthéon, Notre-Dame, Jardin des Plantes, Arènes de Lutèce). Les Architectes des Bâtiments de France doivent approuver tout changement visible depuis la rue : menuiseries extérieures, couleur de façade, volets, travaux sur balcons. La déclaration préalable de travaux est obligatoire et le délai d'instruction peut atteindre 2 mois. Pour les travaux intérieurs (peinture, sol, cuisine, salle de bain), aucune autorisation n'est nécessaire. Les copropriétés du secteur ont souvent des règlements stricts sur les horaires de chantier.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment isoler un appartement avec des murs en pierre de taille dans le 5e arrondissement ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'isolation d'un appartement en pierre de taille dans le 5e est délicate. La pierre a une bonne inertie thermique mais une très mauvaise résistance thermique (R très faible). L'isolation par l'intérieur (ITI) est la seule option possible en appartement : doublage sur ossature métallique avec laine de bois, chanvre ou liège expansé (matériaux respirants indispensables sur mur en pierre). Les matériaux synthétiques fermés (polystyrène, mousse polyuréthane) sont à proscrire : ils piègent l'humidité dans la paroi et provoquent des dégâts à moyen terme. Gain thermique : 50 à 60 % sur les déperditions par les murs pour un doublage de 8 à 10 cm. Perte de surface : 6 à 9 cm par mur traité.",
      },
    },
    {
      '@type': 'Question',
      name: "Peut-on rénover une cave dans un immeuble du 5e arrondissement de Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les caves des immeubles anciens du 5e sont souvent en pierre de taille, voûtées ou à plafond bas (1,80 à 2,20 m). Leur rénovation est possible pour des usages de rangement, de cave à vin ou de local technique. Attention : les caves parisiennes sont fréquemment soumises à des remontées capillaires (humidité structurelle) et à des problèmes de moisissures. Avant tout aménagement, un traitement anti-humidité par injection de résine est souvent nécessaire. Les caves situées sous le niveau de la nappe phréatique (fréquent dans le 5e près de la Seine) nécessitent des systèmes de cuvelage étanche. Coût de rénovation d'une cave : 500 à 1 500 €/m² selon les travaux.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Paris 5e : Latin, Contrescarpe & artisan 2025 | Espace Design',
  description: "Artisan rénovation Paris 5e arrondissement, Quartier Latin, Mouffetard, Contrescarpe. Vieux bâti, caves, prix 2025.",
  keywords: 'rénovation appartement Paris 5e, artisan Paris 5e, rénovation Quartier Latin',
}

export default function ArticleRenovationParis5e() {
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
            Arrondissements
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Appartement Paris 5e : Quartier Latin, Contrescarpe et artisan 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le 5e arrondissement est l&apos;un des plus anciens et des plus protégés de Paris. Panthéon, rue Mouffetard, place de la Contrescarpe, Jardin des Plantes : les immeubles des 17e et 18e siècles imposent leurs contraintes. Murs en pierre, parquets anciens, caves voûtées, ABF : guide complet pour rénover dans le Quartier Latin en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Portrait du 5e */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Portrait immobilier du 5e arrondissement : vieux bâti et contraintes patrimoniales
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le 5e arrondissement abrite le Quartier Latin, l&apos;un des quartiers les plus anciens de Paris. Son parc immobilier est dominé par des immeubles de rapport des 17e et 18e siècles, avec quelques constructions haussmanniennes du 19e siècle. La densité de bâtiments classés ou inscrits aux Monuments Historiques est parmi les plus élevées de Paris.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              On trouve dans le 5e une forte proportion de studios et petits appartements liés à la présence universitaire (Sorbonne, École normale supérieure, UPMC, Sciences Po). Ces biens, souvent peu rénovés depuis des décennies, offrent un fort potentiel de valorisation après travaux — à condition de maîtriser les contraintes du bâti ancien.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Immeubles des 17e-18e siècles : structure et contraintes',
                  detail: 'Les immeubles les plus anciens du 5e ont des murs porteurs en pierre de taille de 40 à 70 cm d\'épaisseur. Les planchers sont en bois sur lambourdes — souvent en bon état mais susceptibles d\'être fragilisés par l\'humidité. Les hauteurs sous plafond varient de 2,60 à 3,20 m. Les distributions intérieures peuvent être complexes (couloirs étroits, demi-niveaux, escaliers sans ascenseur). La plomberie et l\'électricité de ces immeubles sont souvent très anciennes.',
                },
                {
                  enjeu: 'Quartier Latin et Mouffetard : secteurs protégés',
                  detail: 'La rue Mouffetard, la place de la Contrescarpe et leurs abords sont classés dans le périmètre de protection de plusieurs Monuments Historiques. Les ABF ont un droit de regard sur tout changement visible depuis la rue. Les façades, devantures et menuiseries extérieures (fenêtres, volets) sont réglementées. Une déclaration préalable est obligatoire pour tout remplacement de fenêtres ou modification de balcon.',
                },
                {
                  enjeu: 'Secteur Panthéon et bords de Seine',
                  detail: 'Le secteur autour du Panthéon et des quais de Seine (boulevard Saint-Germain, quai de la Tournelle) concentre des immeubles haussmanniens de belle qualité. Les appartements y sont souvent grands (80 à 200 m²) avec de beaux parquets en point de Hongrie, des cheminées et des moulures. La rénovation de ces biens réclame un savoir-faire artisanal pointu pour préserver leur caractère patrimonial.',
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

      {/* Section 2 — Parquets anciens */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Parquets et planchers anciens du 5e : restaurer plutôt que remplacer
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les planchers bois des immeubles anciens du 5e sont souvent des pièces maîtresses de l&apos;appartement. Point de Hongrie, bâtons rompus, plancher à lames droites : ces parquets massifs anciens méritent d&apos;être préservés et restaurés plutôt que recouverts ou remplacés.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Parquet point de Hongrie',
                detail: 'Motif en chevrons caractéristique des appartements bourgeois parisiens des 17e-19e siècles. Les lames sont assemblées à 45 degrés. La rénovation nécessite un ponçage soigneux et directionnel pour respecter les angles. Coût : 40 à 80 €/m² pour ponçage + vitrification. Incompatible avec une pose par-dessus sans préparation spécifique.',
                cout: '40 – 80 €/m²',
              },
              {
                titre: 'Plancher bâtons rompus',
                detail: 'Lames droites posées en alternance décalée — le parquet le plus répandu dans les immeubles de la fin du 19e siècle. Souvent en chêne massif épais (22 à 28 mm), il supporte 3 à 4 ponçages successifs au cours de sa vie. Avant tout travaux, vérifier l\'état des lambourdes (poutrelles support) : fragilisation possible par l\'humidité ou les insectes xylophages.',
                cout: '35 – 70 €/m²',
              },
              {
                titre: 'Diagnostic parquet avant intervention',
                detail: 'Indispensable avant toute décision : sondage de l\'état des lambourdes et des lames, recherche de vrillette ou de moisissures en sous-face, vérification de l\'épaisseur résiduelle de bois après ponçages précédents. Certains parquets anciens ont déjà été poncés trop fin : un ponçage supplémentaire est impossible. Le parqueteur qualifié peut substituer des lames manquantes avec du bois de récupération assorti.',
                cout: 'Gratuit à 200 €',
              },
              {
                titre: 'Isolation acoustique sous parquet',
                detail: 'Les planchers anciens sur lambourdes laissent passer les bruits par les interstices. Une rénovation complète permet d\'intercaler une laine minérale ou du liège entre les lambourdes pour améliorer l\'isolation acoustique et thermique. Gain : 10 à 20 dB de réduction des bruits d\'impact. À mentionner au syndic de copropriété avant travaux.',
                cout: '20 – 40 €/m² en plus',
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

      {/* Section 3 — Murs en pierre */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Murs en pierre de taille : isolation thermique et finitions dans le 5e
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les murs en pierre de taille des immeubles anciens du 5e sont magnifiques mais thermiquement peu efficaces. Les traiter sans endommager le bâti ni créer de problèmes d&apos;humidité est un savoir-faire qui ne s&apos;improvise pas.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Isolation par l\'intérieur avec matériaux respirants',
                prix: '80 – 150 €/m²',
                detail: 'Seule option possible en appartement, l\'ITI consiste à poser un doublage isolant sur la face intérieure des murs en pierre. Sur un mur en pierre, les matériaux respirants sont impératifs : laine de bois (λ = 0,038), chanvre (λ = 0,040), liège expansé (λ = 0,037). Ces matériaux permettent à la vapeur d\'eau de migrer à travers la paroi sans se condenser. Le polystyrène et le polyuréthane sont à proscrire — ils créent un effet "bouchon" qui piège l\'humidité.',
              },
              {
                type: 'Enduits à la chaux et pierre apparente',
                prix: '30 – 60 €/m²',
                detail: 'Si vous souhaitez conserver l\'aspect pierre apparente (très prisé dans le 5e, grande valeur esthétique), un traitement à la chaux naturelle aérienne NHL3.5 assure l\'étanchéité à l\'eau tout en laissant le mur respirer. La chaux est le matériau traditionnel des immeubles parisiens anciens — compatible avec la pierre calcaire, elle régule l\'humidité et protège sans emprisonner.',
              },
              {
                type: 'Électricité dans les murs en pierre',
                prix: '30 – 60 €/ml de goulotte',
                detail: 'Passer des câbles électriques dans des murs en pierre de 40 à 70 cm impose soit des saignées dans les joints de mortier (jamais dans la pierre elle-même), soit des goulottes en saillie habillées en bois peint ou en PVC peint assorti. Dans les appartements en cours de rénovation complète, les câbles sont passés dans les nouveaux doublages isolants — solution la plus propre.',
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

      {/* Section 4 — Caves */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Caves et sous-sols du 5e arrondissement : humidité et potentiel d&apos;aménagement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les caves des immeubles anciens du 5e sont souvent voûtées en pierre de taille, remarquables et sous-exploitées. Leur aménagement en cave à vin, espace de rangement ou local technique peut ajouter de la valeur — à condition de traiter d&apos;abord l&apos;humidité structurelle.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              {
                titre: 'Remontées capillaires dans les caves',
                detail: 'Les caves des immeubles parisiens anciens sont exposées aux remontées capillaires : l\'eau du sol monte dans les murs en pierre par capillarité. Traitement : injection de résine hydrofuge sous pression dans les joints (150 à 300 €/ml de mur traité) + enduit assainissant à la chaux. Sans traitement de la source, tout aménagement sera dégradé en quelques années.',
                cout: '150 – 300 €/ml',
              },
              {
                titre: 'Cave à vin voûtée',
                detail: 'La cave voûtée en pierre du 5e offre des conditions naturellement favorables à la conservation du vin (température stable, hygrométrie naturelle). Après traitement anti-humidité, l\'aménagement en cave à vin consiste à poser des casiers bois ou métal, un éclairage LED basse chaleur et un système de ventilation passive. Coût : 2 000 à 8 000 €.',
                cout: '2 000 – 8 000 €',
              },
              {
                titre: 'Cuvelage contre la nappe phréatique',
                detail: 'Les caves situées près de la Seine (quais du 5e) peuvent être soumises à des infiltrations liées à la nappe phréatique. Le cuvelage (étanchéité par membranes drainantes + pompe de relevage) est la seule solution durable. Coût : 200 à 400 €/m² de surface traitée.',
                cout: '200 – 400 €/m²',
              },
              {
                titre: 'Extension de surface habitable',
                detail: 'Dans les immeubles du 5e avec des caves à hauteur suffisante (1,80 m minimum), il est parfois possible de transformer une cave en surface habitable (chambre de bonne déclassée, bureau, salle de sport). Cette opération nécessite un permis de construire si la surface est augmentée de plus de 20 m², et un traitement complet de l\'humidité et de l\'aération.',
                cout: 'Sur devis',
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

      {/* Section 5 — Budget */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix de rénovation dans le 5e arrondissement de Paris : budget 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent pour un appartement ancien du 5e arrondissement (immeuble 17e-19e siècle), main d&apos;œuvre et matériaux inclus, hors mobilier.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Type de rénovation</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Travaux inclus</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix /m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget 50 m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    type: 'Légère',
                    travaux: 'Peinture + parquet ponçage + salle de bain partielle',
                    prixM2: '800 – 1 200 €',
                    budget: '40 000 – 60 000 €',
                  },
                  {
                    type: 'Standard',
                    travaux: 'Peinture + parquet + cuisine + électricité partielle + SdB',
                    prixM2: '1 200 – 1 800 €',
                    budget: '60 000 – 90 000 €',
                  },
                  {
                    type: 'Complète',
                    travaux: "Tout corps d'état : électricité NF C 15-100, plomberie, sol, murs, cuisine, SdB, isolation",
                    prixM2: '1 800 – 2 500 €',
                    budget: '90 000 – 125 000 €',
                  },
                  {
                    type: 'Haut de gamme',
                    travaux: 'Complète + matériaux premium, parquet sur mesure, cuisine sur mesure, pierre apparente',
                    prixM2: '2 500 – 4 000 €',
                    budget: '125 000 – 200 000 €',
                  },
                ].map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.type}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.travaux}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prixM2}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.budget}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 6 — Conseils pratiques */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Conseils pratiques pour rénover dans le 5e arrondissement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le 5e est l&apos;un des arrondissements où les erreurs de rénovation coûtent le plus cher — à cause des contraintes du bâti ancien et des spécificités réglementaires. Quelques règles d&apos;or pour réussir son projet.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              'Vérifier si votre immeuble est dans un périmètre ABF avant de commander des fenêtres ou des volets — délais et contraintes supplémentaires',
              'Faire un diagnostic parquet avant toute décision : il vaut souvent mieux rénover que remplacer (30 à 80 €/m² de rénovation contre 120 à 200 €/m² de remplacement)',
              'Utiliser des matériaux respirants pour l\'isolation des murs en pierre (chaux, chanvre, liège) — jamais de polystyrène',
              'Traiter l\'humidité de la cave avant tout aménagement, même partiel : les remontées capillaires reviennent si la source n\'est pas colmatée',
              'Anticiper les délais de copropriété pour les travaux de parties communes : les AG dans le 5e ont souvent plusieurs mois d\'attente',
              'Prévoir une mise aux normes électrique complète (NF C 15-100) dans les appartements antérieurs à 1980 — investissement rentable à la vente',
              'Conserver absolument les éléments d\'authenticité : moulures, cheminées, chêne massif ancien. Ils ont une valeur marchande considérable dans le 5e',
              'Planifier les travaux hors période universitaire (juillet-août) pour faciliter les accès et minimiser les nuisances dans les copropriétés densément habitées',
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
              { href: '/blog/renovation-appartement-paris-4e', title: 'Rénovation appartement Paris 4e' },
              { href: '/blog/renovation-appartement-paris-6e', title: 'Rénovation appartement Paris 6e' },
              { href: '/blog/renovation-appartement-ancien-paris', title: 'Rénovation appartement ancien Paris' },
              { href: '/blog/humidite-appartement-paris', title: 'Humidité appartement Paris' },
              { href: '/blog/renovation-cave-paris', title: 'Rénovation cave Paris' },
              { href: '/blog/renovation-parquet-paris', title: 'Rénovation parquet Paris' },
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
          Rénovez votre appartement dans le 5e arrondissement
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Artisan spécialisé en immeubles anciens, bâti en pierre et Quartier Latin. Devis gratuit sous 48h.
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
