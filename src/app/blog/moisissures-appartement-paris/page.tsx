import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: "Moisissures Appartement Paris", item: 'https://espacedesignparis.fr/blog/moisissures-appartement-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Moisissures Appartement Paris : causes, traitement & prévention 2025 | Espace Design",
  description: "Traiter les moisissures dans un appartement à Paris : ponts thermiques, ventilation, traitement anti-moisissures. Artisan Paris.",
  datePublished: '2025-04-20',
  dateModified: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/moisissures-appartement-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Les moisissures sont-elles dangereuses pour la santé ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, les moisissures peuvent avoir des effets sérieux sur la santé, en particulier pour les personnes asthmatiques, allergiques, les enfants et les personnes âgées. Elles libèrent des spores et des mycotoxines qui irritent les voies respiratoires, provoquent des rhinites, des toux chroniques et des bronchites à répétition. Certaines espèces comme Stachybotrys chartarum (moisissure noire) sont particulièrement toxiques. Il est recommandé de traiter les moisissures rapidement et de s'attaquer à la cause profonde (pont thermique, ventilation insuffisante) pour éviter leur réapparition.",
      },
    },
    {
      '@type': 'Question',
      name: "La peinture anti-moisissures suffit-elle à régler le problème ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Non, la peinture anti-moisissures est un traitement curatif qui élimine les moisissures existantes mais ne traite pas la cause. Si le pont thermique ou le manque de ventilation ne sont pas corrigés, les moisissures réapparaîtront dans les mois suivants. La solution durable consiste à corriger le pont thermique (isolation intérieure, ragréage thermique), à améliorer la ventilation (VMC hygro B ou double flux) et à traiter ensuite les surfaces avec une peinture anti-moisissures. Espace Design réalise un diagnostic avant toute intervention pour identifier les causes réelles.",
      },
    },
    {
      '@type': 'Question',
      name: "Le propriétaire est-il responsable des moisissures dans un appartement loué ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La responsabilité dépend de la cause des moisissures. Si elles proviennent d'un défaut structurel — pont thermique, infiltration, ventilation défaillante — la responsabilité incombe au propriétaire qui doit engager les travaux nécessaires. Si elles résultent du comportement du locataire — fenêtres jamais ouvertes, séchage du linge dans un espace non ventilé, cuisine sans hotte — la responsabilité est partagée. Un constat d'huissier ou un diagnostic humidité peut aider à déterminer la cause. La loi Alur impose que le logement soit exempt de toute humidité nuisible à la santé.",
      },
    },
    {
      '@type': 'Question',
      name: "Combien coûte le traitement des moisissures à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le coût dépend de l'étendue et de la cause. Un traitement curatif à la peinture anti-moisissures sur une surface limitée (SdB, angle de chambre) coûte entre 500 et 1 500 €. La correction d'un pont thermique (ragréage thermique + doublage partiel) est estimée entre 800 et 2 500 € par zone traitée. Une solution durable complète — isolation par l'intérieur d'un mur extérieur + installation d'une VMC hygro B — représente un budget de 3 000 à 8 000 € pour un appartement de 50 m². Ces travaux peuvent être partiellement financés par les aides MaPrimeRénov' et CEE si l'artisan est RGE.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Moisissures Appartement Paris : causes, traitement & prévention 2025 | Espace Design",
  description: "Traiter les moisissures dans un appartement à Paris : ponts thermiques, ventilation, traitement anti-moisissures. Artisan Paris.",
  keywords: ["moisissures appartement Paris", "traitement moisissures Paris", "humidité moisissures appartement", "artisan moisissures Paris"],
}

export default function ArticleMoisissuresAppartementParis() {
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
            Humidité &amp; Isolation
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Moisissures dans un Appartement Parisien : causes et solutions durables 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Les moisissures sont un problème très fréquent dans les appartements parisiens anciens. Angles de pièces humides, salle de bain sans VMC, sous-fenêtre noirci : les causes sont multiples et les solutions, si on ne traite que la surface, temporaires. Guide complet pour identifier, traiter et prévenir les moisissures durablement à Paris.
          </p>
        </div>
      </section>

      {/* Section 1 — Intro et contexte */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Pourquoi les appartements parisiens sont-ils si sujets aux moisissures ?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            Paris concentre un parc immobilier parmi les plus anciens de France. Plus de 60 % des appartements ont été construits avant 1948, une époque où l&apos;isolation thermique n&apos;existait pas et où la ventilation reposait uniquement sur la perméabilité à l&apos;air des constructions. Les murs en pierre de taille, en brique ou en moellons sont très conducteurs thermiquement : leur surface intérieure se refroidit fortement en hiver, ce qui provoque la condensation de la vapeur d&apos;eau produite par les occupants.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            À cela s&apos;ajoutent des configurations architecturales spécifiques aux immeubles parisiens — pignons aveugles exposés au nord, angles de pièces en contact avec l&apos;extérieur sur deux faces, dalles de béton entre étages créant des ponts thermiques importants. Les rénovations partielles des années 1970-1980 (double vitrage sans mise à jour de la ventilation) ont parfois aggravé le problème en rendant les logements plus étanches à l&apos;air sans traiter les causes d&apos;humidité.
          </p>
          <div className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-5">
            <div className="font-medium text-[#1C1C1C] text-sm mb-2">Le cercle vicieux de l&apos;humidité condensée</div>
            <p className="text-gray-600 text-sm font-light leading-relaxed">
              La condensation se produit quand l&apos;air chaud et humide entre en contact avec une surface froide. La température de rosée de l&apos;air intérieur d&apos;un appartement (20°C, 60 % d&apos;humidité relative) est d&apos;environ 12°C. Un angle de pièce en contact avec deux murs extérieurs non isolés peut descendre à 8-10°C en hiver — en dessous du point de rosée. L&apos;eau se condense, s&apos;accumule, et les moisissures se développent en quelques semaines.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 — Les causes */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Les causes des moisissures dans un appartement parisien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Identifier la cause réelle est indispensable avant d&apos;entreprendre tout traitement. Il existe quatre familles de causes, souvent combinées.
          </p>
          <div className="space-y-4">
            {[
              {
                cause: "Ponts thermiques structurels",
                detail: "Les ponts thermiques sont des zones de faiblesse thermique dans l'enveloppe du bâtiment : angles de pièces, liaisons entre la dalle de béton et les murs extérieurs, poutres et poteaux en béton intégrés dans la maçonnerie, tableaux de fenêtre non isolés. Ces zones se refroidissent plus vite que le reste du mur et condensent la vapeur d'eau en premier. Dans les immeubles parisiens haussmanniens, les joints entre les blocs de pierre sont des ponts thermiques fréquents.",
              },
              {
                cause: "Ventilation insuffisante ou inexistante",
                detail: "Un occupant produit en moyenne 10 à 15 litres de vapeur d'eau par jour (respiration, douche, cuisine, séchage du linge). Sans renouvellement d'air suffisant, l'humidité relative de l'appartement monte rapidement au-dessus de 70 %, condition idéale pour le développement des moisissures. Les appartements sans VMC (très fréquents à Paris dans les immeubles anciens) ou avec des bouches d'aération bouchées sont particulièrement exposés.",
              },
              {
                cause: "Humidité de construction et remontées capillaires",
                detail: "Dans les logements récemment rénovés ou construits, l'humidité résiduelle des matériaux (chape, enduit, béton) peut prendre 12 à 24 mois pour s'évacuer. Les moisissures qui apparaissent dans les premières années après travaux sont souvent liées à ce phénomène. Les remontées capillaires dans les murs depuis les fondations (cave humide, absence de coupure capillaire) créent une humidité permanente en partie basse des murs.",
              },
              {
                cause: "Comportement des occupants",
                detail: "Sécher le linge en intérieur sans ventilation, cuisiner sans hotte aspirante, prendre des douches avec la porte fermée, boucher les bouches de VMC pour réduire les courants d'air — ces habitudes augmentent significativement l'humidité intérieure. Ces causes peuvent être combinées avec des ponts thermiques : c'est souvent la conjonction des deux qui déclenche le développement de moisissures.",
              },
            ].map((el) => (
              <div key={el.cause} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.cause}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Zones à risque */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Les zones à risque dans un appartement parisien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Certaines configurations sont systématiquement exposées aux moisissures dans les appartements parisiens. Les identifier permet d&apos;agir de manière préventive.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                zone: "Salle de bain sans VMC",
                detail: "La salle de bain est la pièce la plus humide de l'appartement (douche quotidienne = 2 à 3 litres de vapeur d'eau). Sans extraction mécanique, l'humidité se condense sur les murs froids et les joints de carrelage. Les plafonds et les coins hauts sont les premiers touchés.",
              },
              {
                zone: "Angle de chambre contre pignon froid",
                detail: "Les angles de pièces en contact avec deux faces extérieures — notamment les pignons exposés au nord — sont les zones de pont thermique les plus prononcées. Le coin en angle de plafond/mur est souvent le premier point de condensation. Les moisissures y apparaissent sous forme de tache noire circulaire.",
              },
              {
                zone: "Sous-fenêtre et tableau de fenêtre",
                detail: "L'encadrement des fenêtres est une zone de pont thermique critique, notamment dans les immeubles anciens où le tableau n'est pas isolé. La surface du mur juste sous la fenêtre et sur les côtés reçoit en plus la condensation directe du simple ou double vitrage ancien. Les moisissures y forment souvent un liseré horizontal.",
              },
              {
                zone: "Placard contre mur extérieur",
                detail: "Les placards appuyés contre un mur extérieur non isolé réduisent la circulation d'air sur la surface du mur. La température de surface chute encore plus bas, favorisant la condensation. Les vêtements et les boîtes à l'intérieur absorbent l'humidité et noircissent. Ce problème est très fréquent dans les chambres parisiennes.",
              },
              {
                zone: "Partie basse des murs en rez-de-chaussée",
                detail: "Les appartements en rez-de-chaussée avec cave humide en dessous sont exposés aux remontées capillaires. L'humidité monte dans les murs par capillarité depuis les fondations. On observe des efflorescences salines (auréoles blanches) et des moisissures en partie basse des murs, souvent derrière les plinthes.",
              },
              {
                zone: "Cuisine sans hotte aspirante",
                detail: "La cuisine produit d'importantes quantités de vapeur d'eau lors de la cuisson. Sans hotte aspirante efficace et sans VMC, cette humidité se répand dans l'appartement et se condense sur les surfaces les plus froides. Les moisissures peuvent apparaître non seulement en cuisine mais aussi dans les pièces adjacentes.",
              },
            ].map((el) => (
              <div key={el.zone} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.zone}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Solutions de traitement */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Solutions de traitement des moisissures
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le traitement des moisissures doit toujours combiner une action curative (éliminer les moisissures présentes) et une action préventive (supprimer les conditions de leur développement). Traiter uniquement en surface sans s&apos;attaquer à la cause conduit à une réapparition dans les 6 à 18 mois.
          </p>
          <div className="space-y-4">
            {[
              {
                solution: "Traitement curatif : peinture anti-moisissures",
                type: "Curatif",
                detail: "Première étape : nettoyage des surfaces avec une solution fongicide (eau de Javel diluée ou produit professionnel). Séchage complet, puis application d'un primaire anti-moisissures suivi d'une peinture microporeuse avec agents fongicides. Cette intervention élimine les spores visibles et crée une barrière temporaire, mais ne règle pas la cause profonde. Durée d'efficacité : 2 à 5 ans si la cause n'est pas corrigée.",
              },
              {
                solution: "Correction du pont thermique par ragréage thermique",
                type: "Préventif partiel",
                detail: "Pour les angles de pièces et les tableaux de fenêtre, une correction ciblée est possible sans isolation complète du mur : application d'un enduit de ragréage thermique (mortier allégé à base de perlite ou de vermiculite) sur les zones de pont thermique. Gain de 2 à 4°C sur la surface traitée, ce qui repasse généralement au-dessus du point de rosée. Solution moins intrusive que le doublage complet, adaptée aux petites surfaces.",
              },
              {
                solution: "Amélioration de la ventilation : VMC hygro B",
                type: "Préventif",
                detail: "L'installation d'une VMC hygro B (ventilation mécanique contrôlée à débit auto-régulé selon l'humidité) est la solution la plus efficace pour les appartements sans ventilation mécanique. Les bouches s'ouvrent automatiquement quand l'humidité monte (salle de bain après la douche, cuisine pendant la cuisson) et se ferment quand l'air est sec. Installation en une journée, sans gros travaux. Consommation électrique très faible (30 à 50 kWh/an).",
              },
            ].map((el) => (
              <div key={el.solution} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2 flex-wrap">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.solution}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0 border border-[#B8960C]/30 rounded px-2 py-0.5">{el.type}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Solutions durables */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Solutions durables : isolation et ventilation combinées
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Pour les appartements sérieusement touchés par les moisissures récurrentes, la solution durable est l&apos;isolation par l&apos;intérieur des murs extérieurs couplée à une VMC performante. Cette combinaison supprime définitivement les conditions de condensation tout en améliorant le DPE du logement.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              {
                titre: "Doublage des murs extérieurs (laine de roche sur ossature)",
                detail: "Isolation par l'intérieur avec laine de roche 45 à 80 mm sur ossature métallique. La surface intérieure du nouveau mur reste au-dessus de 18°C en hiver (contre parfois 8-10°C sur un mur non isolé), supprimant toute condensation. Gain thermique important, réduction des charges de chauffage. Éligible MaPrimeRénov'.",
              },
              {
                titre: "VMC double flux avec récupération de chaleur",
                detail: "La VMC double flux extrait l'air vicié et insuffle de l'air frais filtré, en récupérant 85 à 90 % de la chaleur sur un échangeur. Renouvellement d'air permanent, humidité maîtrisée, suppression des courants d'air froid. Idéale dans les appartements après isolation des murs pour éviter toute accumulation d'humidité.",
              },
              {
                titre: "Traitement des remontées capillaires",
                detail: "Pour les murs de rez-de-chaussée avec humidité ascendante depuis les fondations, le traitement par injection de résine hydrophobe crée une coupure capillaire dans le mur. Intervention chirurgicale (forage + injection sous pression), efficacité durable. À combiner avec un enduit de décrépissage respirant et un réenduit à la chaux.",
              },
              {
                titre: "Choix des matériaux adaptés aux immeubles anciens",
                detail: "Dans les immeubles anciens parisiens (pierre, brique), les matériaux isolants doivent être hygroscopiques (capables d'absorber et de restituer la vapeur d'eau sans se dégrader) : laine de roche, ouate de cellulose, fibre de bois, chanvre. Éviter le polystyrène qui bloque la migration de vapeur et peut créer de la condensation en paroi.",
              },
            ].map((el) => (
              <div key={el.titre} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.titre}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Bonnes pratiques au quotidien pour limiter les moisissures
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Aérer chaque pièce 10 minutes par jour, même en hiver, pour renouveler l'air",
                "Ne jamais boucher les bouches de VMC ou d'aération",
                "Utiliser une hotte aspirante avec rejet vers l'extérieur (pas un modèle à recyclage)",
                "Éviter de sécher le linge dans les pièces sans ventilation",
                "Maintenir une température minimale de 18°C dans toutes les pièces, même les chambres",
                "Surveiller l'hygrométrie avec un hygromètre : objectif 40 à 60 %",
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

      {/* Section 6 — Prix */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix traitement moisissures Paris 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Tarifs indicatifs main d&apos;œuvre et matériaux inclus. Les prix varient selon l&apos;étendue du problème, l&apos;accessibilité et la configuration du logement.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Intervention</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Durabilité</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget estimatif</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { intervention: "Traitement curatif peinture anti-moisissures (petite surface)", duree: "2 à 5 ans", budget: "500 – 1 500 €" },
                  { intervention: "Correction pont thermique par ragréage thermique", duree: "Permanent", budget: "800 – 2 500 € par zone" },
                  { intervention: "Installation VMC hygro B (appartement 50 m²)", duree: "Permanent", budget: "1 500 – 3 000 €" },
                  { intervention: "Doublage mur extérieur laine de roche (par mur 20 m²)", duree: "Permanent", budget: "2 000 – 5 000 €" },
                  { intervention: "Solution complète : doublage + VMC (appartement 50 m²)", duree: "Permanent", budget: "3 000 – 8 000 €" },
                  { intervention: "Traitement remontées capillaires (injection résine, 5 ml)", duree: "Permanent", budget: "1 200 – 3 500 €" },
                ].map((row, i) => (
                  <tr key={row.intervention} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium text-sm">{row.intervention}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light text-sm">{row.duree}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium text-sm">{row.budget}</td>
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
              { href: '/blog/humidite-appartement-paris', title: "Humidité appartement Paris" },
              { href: '/blog/isolation-thermique-appartement-paris', title: "Isolation thermique appartement Paris" },
              { href: '/blog/renovation-energetique-appartement-paris', title: "Rénovation énergétique appartement Paris" },
              { href: '/blog/isolation-murs-appartement-paris', title: "Isolation murs appartement Paris" },
              { href: '/blog/renovation-salle-de-bain-paris', title: "Rénovation salle de bain Paris" },
              { href: '/blog/renovation-appartement-ancien-paris', title: "Rénovation appartement ancien Paris" },
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
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Nos zones d&apos;intervention</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-9e', label: 'Paris 9e' },
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-paris-18e', label: 'Paris 18e' },
              { href: '/renovation-levallois-perret', label: 'Levallois' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
              { href: '/renovation-saint-ouen', label: 'Saint-Ouen' },
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
          Moisissures à Paris : diagnostic et devis gratuit sous 48h
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic humidité, traitement curatif, isolation et VMC. Solutions durables pour appartements parisiens.
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
