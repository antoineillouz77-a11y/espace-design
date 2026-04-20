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
  headline: "Isolation Phonique Paris : solutions, normes & prix artisan 2025 | Espace Design",
  description: "Améliorer l'isolation phonique d'un appartement parisien : plancher, murs mitoyens, plafond, normes NRA. Solutions et prix 2025.",
  datePublished: '2025-01-15',
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
      name: "Quel est le prix d'une isolation phonique d'appartement à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix d'une isolation phonique à Paris dépend du type de bruit et de la surface à traiter. Pour le sol (sous-couche acoustique sous parquet ou stratifié) : 8 à 25 €/m², soit 400 à 1 500 € pour un appartement de 50 m². Pour le doublage d'un mur mitoyen (placo + laine de roche) : 80 à 150 €/m², soit 1 200 à 2 500 € pour un mur de 15 m². Pour un plafond suspendu acoustique : 60 à 120 €/m², soit 3 000 à 6 000 € pour un appartement de 50 m². Une isolation phonique complète (sol + murs + plafond) d'un appartement de 50 m² coûte entre 8 000 et 20 000 €.",
      },
    },
    {
      '@type': 'Question',
      name: "La chape flottante est-elle la meilleure solution contre les bruits d'impact à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La chape flottante est la solution la plus efficace contre les bruits d'impact (chutes d'objets, pas, chaise qu'on tire). Elle consiste à couler une dalle de béton ou d'anhydrite sur une couche résiliente (laine de roche sol, caoutchouc), sans contact avec les murs (d'où 'flottante'). Elle réduit les bruits d'impact de 20 à 35 dB. Son inconvénient à Paris : elle ajoute 8 à 12 cm de hauteur de sol, ce qui pose problème dans les appartements aux plafonds déjà limités. Dans les haussmanniens, le plancher bois ancien ne supporte pas toujours le poids d'une chape. La sous-couche acoustique haute densité (solution légère, 5-8 mm) est souvent plus adaptée.",
      },
    },
    {
      '@type': 'Question',
      name: "Peut-on isoler phoniquement un appartement parisien sans perdre de surface ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Perdre de la surface est inévitable pour une isolation phonique efficace, mais on peut la minimiser. Pour les murs mitoyens : le doublage mince avec laine de roche haute densité 45 mm + placo 12,5 mm représente seulement 6 cm de perte par mur. Pour le sol : une sous-couche acoustique de 5 à 8 mm n'impacte pas significativement la hauteur sous plafond. Pour le plafond : un plafond suspendu perd 8 à 15 cm. Les solutions sans perte de surface (panneaux acoustiques décoratifs, tissu tendu) sont peu efficaces sur les bruits d'impact et structurels mais peuvent réduire la réverbération.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelles sont les normes acoustiques applicables en copropriété parisienne ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "En France, la norme NRA (Nouvelle Réglementation Acoustique) de 1994 s'applique aux constructions neuves et aux réhabilitations lourdes : isolement aux bruits aériens entre logements ≥ 53 dB (DnT,A), bruits d'impact ≤ 58 dB (Ln,w). Les appartements anciens ne sont pas soumis rétroactivement à ces normes, mais les règlements de copropriété imposent souvent des clauses acoustiques lors de tout changement de revêtement de sol. En pratique, toute pose de carrelage ou parquet dans un haussmannien sans sous-couche acoustique peut être contestée par le syndic si un voisin du dessous se plaint.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Isolation Phonique Paris : solutions, normes & prix artisan 2025 | Espace Design",
  description: "Améliorer l'isolation phonique d'un appartement parisien : plancher, murs mitoyens, plafond, normes NRA. Solutions et prix 2025.",
  keywords: "isolation phonique Paris, isolation acoustique appartement Paris, bruit voisins Paris",
}

export default function ArticleIsolationPhoniqueParis() {
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
            Isolation Phonique Paris : solutions, normes &amp; prix artisan 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le bruit des voisins est la première source de litige en copropriété parisienne. Bruits d&apos;impact (pas, chutes), bruits aériens (voix, musique), bruits d&apos;équipements (tuyauteries, VMC) — chaque type de bruit appelle une solution spécifique. Guide complet des solutions, matériaux et prix 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Types de bruit */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les 3 types de bruit dans un appartement parisien
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Avant de lancer des travaux d&apos;isolation phonique, il est indispensable d&apos;identifier précisément le type de bruit qui vous dérange. Chaque type a des voies de transmission et des solutions radicalement différentes. Une solution efficace contre les bruits d&apos;impact sera inefficace contre les bruits aériens.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              À Paris, les appartements haussmanniens avec planchers bois sont particulièrement sensibles aux bruits d&apos;impact (le bois transmet les vibrations mieux que le béton). Les immeubles des années 1960-1980 en béton ont souvent une meilleure isolation aux bruits d&apos;impact mais transmettent bien les bruits aériens par les cloisons légères.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: "Bruits aériens : voix, musique, télévision",
                  detail: "Les bruits aériens se propagent dans l'air et traversent les parois par vibration. Ils proviennent des murs mitoyens, des cloisons, des portes et des fenêtres. Solution principale : augmenter la masse des parois (doublage placo + laine de roche), désolidariser les cloisons des structures porteuses (montants antivibratiles), et traiter les points faibles (jonctions, prises électriques, passages de gaines).",
                },
                {
                  enjeu: "Bruits d'impact : pas, chaises, objets tombés",
                  detail: "Les bruits d'impact se transmettent par la structure solide du bâtiment (plancher, murs porteurs). Ils proviennent essentiellement des voisins du dessus. Solution principale : traiter le plancher à la source (sous-couche résiliente, chape flottante) chez les voisins du dessus, ou traiter le plafond par un plafond suspendu acoustique dans votre appartement. La deuxième option est plus réaliste car vous contrôlez vos propres travaux.",
                },
                {
                  enjeu: "Bruits d'équipements : tuyaux, VMC, ascenseur",
                  detail: "Les bruits d'équipements (chasse d'eau qui claque, tuyaux qui vibrent, moteur ascenseur, compresseur clim) se transmettent par la structure. Solutions : calorifugeage des canalisations, manchons antivibratiles sur les points de fixation, remplacement des robinets à clapet par des robinets à boisseau. Ces bruits sont souvent à la charge de la copropriété (équipements communs).",
                },
                {
                  enjeu: "Bruits extérieurs : rue, travaux, transports",
                  detail: "Les bruits extérieurs (trafic, klaxons, travaux de voirie) entrent principalement par les fenêtres et le vitrage. Solution principale : remplacement des fenêtres simple vitrage par du double vitrage acoustique (Rw ≥ 36 dB) ou pose d'un survitrage intérieur. Les façades en pierre épaisse des haussmanniens offrent déjà une bonne protection ; la faiblesse est toujours au niveau des menuiseries.",
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

      {/* Section 2 — Normes NRA et copropriété */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Normes NRA et obligations en copropriété parisienne
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Connaître le cadre réglementaire permet de se protéger en cas de litige avec un voisin ou le syndic, mais aussi de savoir ce qu&apos;on peut exiger lors d&apos;une rénovation dans l&apos;immeuble.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: "Norme NRA (Nouvelle Réglementation Acoustique 1994)",
                solution: "La NRA fixe des seuils minimaux pour les constructions neuves et réhabilitations lourdes : isolement aux bruits aériens DnT,A ≥ 53 dB entre logements, bruits d'impact Ln,w ≤ 58 dB, bruit des équipements ≤ 35 dB dans les pièces de vie. Les appartements anciens non réhabilités ne sont pas rétroactivement soumis à ces normes.",
                cout: 'Référence réglementaire',
              },
              {
                titre: "Clause acoustique dans les règlements de copropriété",
                solution: "La plupart des règlements de copropriété parisiens post-1995 imposent une clause acoustique lors de tout changement de revêtement de sol : sous-couche acoustique obligatoire, interdiction du carrelage sans isolation, parfois obligation d'informer le syndic. Violer cette clause expose à une mise en demeure et une obligation de remise en état à ses frais.",
                cout: 'Obligation contractuelle',
              },
              {
                titre: "Décibels : comprendre les niveaux sonores",
                solution: "0 dB : silence absolu. 30 dB : chuchotement. 40 dB : bibliothèque calme (seuil recommandé pour les chambres). 55 dB : conversation normale. 70 dB : aspirateur. 85 dB : trafic dense. Chaque 10 dB d'isolement divisent le bruit perçu par 2. Un isolement de 53 dB signifie que le bruit de 80 dB chez le voisin n'est perçu qu'à 27 dB chez vous.",
                cout: 'Données de référence',
              },
              {
                titre: "Recours en cas de nuisances sonores persistantes",
                solution: "Si un voisin génère des nuisances persistantes : (1) courrier recommandé au voisin, (2) saisine du syndic (parties communes impliquées), (3) plainte en mairie pour nuisances de voisinage, (4) constat d'huissier + mesures acoustiques par bureau d'étude, (5) procédure judiciaire. Une mesure acoustique par un acousticien agréé (300 à 800 €) objectivise la nuisance.",
                cout: '300 – 800 € (mesure)',
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

      {/* Section 3 — Solutions par type de bruit */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Solutions par type de bruit : plancher, murs, plafond
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
            Il n&apos;existe pas de solution universelle : chaque type de bruit nécessite un traitement spécifique ciblé sur sa voie de transmission. Un doublage de mur n&apos;agira pas sur les bruits d&apos;impact du voisin du dessus.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: "Sol : sous-couche acoustique haute densité",
                prix: '8 – 25 €/m²',
                detail: "La solution la plus simple et la moins coûteuse pour réduire les bruits d'impact transmis à vos voisins du dessous. La sous-couche en polyuréthane haute densité (5 à 8 mm, 15 à 25 kg/m³) ou en caoutchouc recyclé (4 à 6 mm) est posée sous le parquet flottant ou le stratifié. Réduction des bruits d'impact : 18 à 22 dB. Sous carrelage, utiliser des panneaux rigides de désolidarisation acoustique.",
              },
              {
                type: "Sol : chape flottante (solution maximale bruits d'impact)",
                prix: '40 – 80 €/m²',
                detail: "La chape flottante est la solution la plus efficace (réduction de 25 à 35 dB) mais la plus lourde : dalle de béton ou d'anhydrite de 5 à 8 cm coulée sur une couche résiliente (laine de roche sol 45 mm), sans contact avec les murs. Ajoute 10 à 15 cm de hauteur de sol. Dans un haussmannien, vérifier que le plancher bois supporte le poids (300 à 400 kg/m²) avant de s'engager.",
              },
              {
                type: "Murs mitoyens : doublage placo + laine de roche",
                prix: '80 – 150 €/m²',
                detail: "Le doublage intérieur est la solution standard pour les murs mitoyens avec un voisin bruyant. Montants en acier galvanisé (rails antivibratiles, désolidarisés de la structure), laine de roche 45 à 100 mm (densité ≥ 60 kg/m³), deux couches de placo 12,5 mm. Gain acoustique : 30 à 40 dB. Perte de surface : 6 à 12 cm par mur traité. Traiter aussi les jonctions mur-sol et mur-plafond.",
              },
              {
                type: "Plafond suspendu acoustique (bruits d'impact voisin dessus)",
                prix: '60 – 120 €/m²',
                detail: "Le plafond suspendu acoustique réduit les bruits d'impact provenant du voisin du dessus. Ossature acier suspendue par des suspentes antivibratiles (Résiflex ou similaire), laine de verre ou de roche 60 à 100 mm entre ossature et plancher existant, deux couches de placo. Gain : 8 à 15 dB sur les bruits d'impact, 10 à 20 dB sur les bruits aériens. Perte de hauteur : 10 à 15 cm.",
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

      {/* Section 4 — Matériaux */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Matériaux acoustiques : laine de roche, caoutchouc, mousse mélamine
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
            Tous les matériaux d&apos;isolation acoustique ne se valent pas. Le choix dépend du type de bruit à traiter (aérien vs impact), de la contrainte d&apos;épaisseur, et du budget. La densité est le facteur clé : un isolant acoustique doit être dense, pas léger.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: "Laine de roche haute densité (≥ 60 kg/m³)",
                solution: "Le matériau de référence pour l'isolation acoustique des murs et plafonds. Efficace sur les bruits aériens et les bruits d'impact (en version sol). Ne pas confondre avec la laine de roche d'isolation thermique (densité 25-35 kg/m³) qui est peu efficace en acoustique. Indispensable dans les doublages muraux et les plafonds suspendus.",
                cout: '8 – 20 €/m²',
              },
              {
                titre: "Caoutchouc recyclé (dalles et rouleaux)",
                solution: "Excellent pour l'isolation aux bruits d'impact sous carrelage ou comme sous-couche sous parquet. Le caoutchouc granulé ou en nattes (4 à 10 mm) a une résilience élevée qui absorbe les chocs. Utilisé aussi pour les manchons de tuyauterie et les supports de machines vibrantes (lave-linge, pompe à chaleur).",
                cout: '10 – 30 €/m²',
              },
              {
                titre: "Mousse mélamine (Basotect et équivalents)",
                solution: "La mousse mélamine (mousse grise alvéolaire) est très efficace pour réduire la réverbération intérieure d'une pièce (écho, réverbération longue dans les grandes pièces). En revanche, elle n'isole pas des bruits des voisins (aucune masse, donc aucun effet sur la transmission). Utile pour le confort acoustique intérieur (home studio, salle de réunion).",
                cout: '20 – 60 €/m²',
              },
              {
                titre: "Suspentes antivibratiles (plafonds acoustiques)",
                solution: "Les suspentes antivibratiles (Résiflex, Isotec ou équivalents) sont les éléments clés d'un plafond acoustique efficace. Elles désolidarisent mécaniquement le plafond suspendu du plancher du voisin du dessus, cassant la transmission directe des vibrations. Sans elles, un plafond suspendu classique n'apporte qu'un gain marginal sur les bruits d'impact.",
                cout: '3 – 8 €/unité',
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

      {/* Section 5 — Contraintes immeubles anciens + tableau prix */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Contraintes spécifiques aux immeubles anciens parisiens
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
            Les immeubles haussmanniens et les immeubles anciens parisiens présentent des spécificités structurelles qui limitent certaines solutions acoustiques courantes dans le neuf.
          </p>
          <div className="space-y-3 mb-8">
            {[
              "Ne pas couler de chape flottante sur un plancher bois ancien sans expertise structure préalable (risque de surcharge)",
              "Ne pas percer les planchers haussmanniens pour passer des gaines sans accord du syndic (parties communes)",
              "Les murs en pierre de taille (40 à 80 cm d'épaisseur) sont naturellement bons en acoustique : traiter en priorité les cloisons légères et les planchers",
              "Les conduits de cheminée existants transmettent les sons entre étages : les calorifuger ou les boucher hermétiquement",
              "Les planchers bois anciens résonnent plus que le béton : la sous-couche acoustique est absolument obligatoire sous tout nouveau revêtement de sol",
              "Les prises électriques en regard direct entre deux appartements sont des ponts acoustiques importants : les déporter ou les mousse-acoustique",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
          </div>

          <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
            Tableau des prix isolation phonique Paris 2025
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix s&apos;entendent pour un appartement parisien, main d&apos;œuvre + matériaux inclus.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Solution</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix unitaire</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Gain acoustique</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Type de bruit</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { solution: 'Sous-couche acoustique sol', prix: '8 – 25 €/m²', gain: '18 – 22 dB', type: 'Impact' },
                  { solution: 'Chape flottante', prix: '40 – 80 €/m²', gain: '25 – 35 dB', type: 'Impact' },
                  { solution: 'Doublage mur mitoyen', prix: '80 – 150 €/m²', gain: '30 – 40 dB', type: 'Aérien' },
                  { solution: 'Plafond suspendu acoustique', prix: '60 – 120 €/m²', gain: '8 – 15 dB', type: 'Impact + aérien' },
                  { solution: 'Survitrage acoustique', prix: '200 – 600 €/fen.', gain: '10 – 20 dB', type: 'Extérieur' },
                  { solution: "Joints de porte + calfeutrage", prix: '100 – 400 €', gain: '5 – 10 dB', type: 'Aérien' },
                  { solution: 'Isolation complète 50 m²', prix: '8 000 – 20 000 €', gain: 'Globale', type: 'Tous types' },
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
              { href: '/blog/isolation-thermique-appartement-paris', title: 'Isolation thermique appartement Paris' },
              { href: '/blog/humidite-appartement-paris', title: 'Humidité appartement Paris' },
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénovation appartement haussmannien Paris' },
              { href: '/blog/renovation-studio-paris', title: 'Rénovation studio Paris' },
              { href: '/blog/parquet-massif-paris', title: 'Parquet massif Paris' },
              { href: '/blog/faux-plafond-paris', title: 'Faux plafond Paris' },
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
          Améliorez l&apos;isolation phonique de votre appartement parisien
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Solutions sur-mesure selon votre configuration. Devis sous 48h.
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
