import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Ouverture Cuisine Salon Paris', item: 'https://espacedesignparis.fr/blog/ouverture-cuisine-salon-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Ouvrir Cuisine sur Salon Paris : travaux, coût & artisan 2025',
  description: "Ouvrir la cuisine sur le salon à Paris : abattre une cloison, poser un IPN sur mur porteur, verrière intérieure. Permis, prix et artisan 2025.",
  datePublished: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/ouverture-cuisine-salon-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix pour ouvrir la cuisine sur le salon à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix pour ouvrir la cuisine sur le salon à Paris varie selon la nature de la cloison et la solution choisie. Abattage d'une cloison légère non porteuse avec finitions : 800 à 2 500 €. Ouverture partielle avec bar ou passe-plat : 1 500 à 4 000 €. Pose d'une verrière d'intérieur : 2 500 à 6 000 €. Abattage d'un mur porteur avec pose d'IPN et bureau d'études structure : 5 000 à 12 000 €. Ces tarifs s'entendent main d'œuvre et matériaux, hors travaux de cuisine associés.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il une autorisation de copropriété pour abattre une cloison à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour une cloison non porteuse, aucune déclaration de travaux ni permis de construire n'est en principe nécessaire. En revanche, si la cloison est porteuse, certaines copropriétés exigent une autorisation préalable de l'assemblée générale. Dans les secteurs sauvegardés (Marais, Île Saint-Louis, Saint-Germain-des-Prés) ou à proximité d'un monument historique, même des travaux intérieurs peuvent nécessiter un accord ABF (Architecte des Bâtiments de France). Consultez toujours votre règlement de copropriété avant de commencer.",
      },
    },
    {
      '@type': 'Question',
      name: 'Comment savoir si la cloison entre ma cuisine et mon salon est porteuse ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Plusieurs indices permettent de suspecter un mur porteur : épaisseur supérieure à 15 cm, continuité sur plusieurs étages, appui visible d'un plancher ou de poutres. Dans les immeubles haussmanniens parisiens, les murs en pierre de taille de 30 à 50 cm sont toujours porteurs. Les cloisons en carreaux de plâtre de 5 à 7 cm sont en général non porteuses. En cas de doute, un artisan expérimenté ou un bureau d'études structure peut confirmer lors d'une visite gratuite.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment gérer les odeurs de cuisine après l'ouverture sur le salon ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'ouverture de la cuisine sur le salon oblige à soigner la ventilation. La solution indispensable est une hotte aspirante à évacuation vers l'extérieur (et non à recyclage) avec un débit minimum de 300 m³/h. Si l'évacuation directe est impossible, une hotte à recyclage avec filtre à charbon actif haute performance peut suffire pour un usage modéré. L'installation d'une VMC double flux améliore aussi significativement le renouvellement d'air. Ce point doit être anticipé avant les travaux de démolition.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Ouvrir Cuisine sur Salon Paris : travaux, coût & artisan 2025 | Espace Design',
  description: "Ouvrir la cuisine sur le salon à Paris : abattre une cloison, poser un IPN sur mur porteur, verrière intérieure. Permis, prix et artisan 2025.",
  keywords: ['ouverture cuisine salon Paris', 'abattre cloison Paris', 'cuisine ouverte Paris', 'IPN mur porteur Paris', 'verrière intérieure Paris'],
}

export default function ArticleOuvertureCuisineSalonParis() {
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
            Ouvrir Cuisine sur Salon Paris : travaux, coût et artisan 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Ouvrir la cuisine sur le salon est l&apos;un des travaux les plus demandés dans les appartements parisiens. Il agrandit visuellement l&apos;espace, améliore la luminosité et modernise le logement en profondeur. Cloison non porteuse, mur porteur avec IPN, ou verrière d&apos;intérieur : guide complet 2025 avec les coûts réels constatés à Paris.
          </p>
        </div>
      </section>

      {/* Section 1 — Les 3 solutions */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les 3 solutions pour ouvrir la cuisine sur le salon
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Selon la nature de la cloison (porteuse ou non), les contraintes de la copropriété et le résultat souhaité, trois grandes solutions existent. Elles peuvent être combinées — par exemple une ouverture partielle avec verrière sur la partie haute — pour un effet sur mesure.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              À Paris, la majorité des appartements haussmanniens disposent de cloisons en carreaux de plâtre entre la cuisine et le séjour : non porteuses, elles peuvent être abattues sans étude de structure. En revanche, les murs en pierre de taille ou les murs de refend en béton nécessitent un diagnostic préalable obligatoire.
            </p>
            <div className="space-y-4">
              {[
                {
                  solution: 'Abattage complet de la cloison non porteuse',
                  description: "Solution la plus radicale : la cloison en plâtre ou en brique plâtrière est entièrement démolie. La cuisine et le salon ne forment plus qu'un seul espace fluide. Idéale pour les appartements compacts (40 à 70 m²) où chaque m² compte. Nécessite de repenser l'agencement de la cuisine (îlot central, plan de travail en continuité) et la gestion des odeurs.",
                  idealPour: 'Appartements 2 et 3 pièces, style contemporain ou minimaliste, séjour peu lumineux',
                  prix: '800 – 2 500 €',
                },
                {
                  solution: 'Ouverture partielle avec bar ou passe-plat',
                  description: "On conserve une partie basse de la cloison et on crée une large ouverture (120 à 200 cm) dans la partie haute, avec un plan de travail formant un bar ou passe-plat. Permet de conserver une séparation visuelle légère tout en créant une communication pratique. Moins invasif que l'abattage total.",
                  idealPour: 'Familles avec enfants, cuisiniers amateurs, appartements de 3 pièces et plus',
                  prix: '1 500 – 4 000 €',
                },
                {
                  solution: "Verrière d'intérieur",
                  description: "Structure métallique vitrée posée à la place de la cloison. Laisse passer la lumière tout en conservant une barrière contre les odeurs et le bruit de cuisson. Très prisée dans les appartements parisiens (style atelier, industriel, haussmannien revisité). Peut intégrer une porte coulissante ou pivotante.",
                  idealPour: "Style atelier ou haussmannien, cuisine dédiée, appartements avec forte contrainte acoustique",
                  prix: '2 500 – 6 000 €',
                },
              ].map((el) => (
                <div key={el.solution} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="font-medium text-[#1C1C1C] text-sm">{el.solution}</div>
                    <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.prix}</div>
                  </div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed mb-2">{el.description}</div>
                  <div className="text-gray-500 text-xs font-light">
                    <span className="font-medium text-[#1C1C1C]">Idéal pour : </span>{el.idealPour}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Abattre cloison : étapes */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Abattre une cloison à Paris : les étapes du chantier
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;abattage d&apos;une cloison non porteuse semble simple, mais comporte plusieurs étapes techniques à ne pas négliger — particulièrement dans les immeubles anciens parisiens où les gaines électriques et les tuyaux peuvent être dissimulés dans les cloisons intérieures.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                etape: '1 — Repérage des réseaux',
                detail: "Avant toute démolition, identifier les réseaux dissimulés : câbles électriques, gaines de ventilation, tuyaux de plomberie. Un détecteur de câbles ou une caméra thermique permet de les localiser. Les réseaux doivent être déplacés avant l'abattage — prévoir les travaux d'électricité et de plomberie associés.",
                cout: '0 – 500 € (déplacement réseaux)',
              },
              {
                etape: '2 — Démolition et évacuation des gravats',
                detail: "La démolition d'une cloison en carreaux de plâtre (7 à 10 cm) génère une quantité importante de gravats (200 à 400 kg pour 10 m²). L'évacuation en benne ou en sacs dans un immeuble parisien représente une part significative du coût. Prévoir la protection des sols et meubles adjacents.",
                cout: '200 – 800 € (démolition + évacuation)',
              },
              {
                etape: '3 — Reprises de sol',
                detail: "Le sol sous la cloison abattue présente une discontinuité qu'il faut combler : ragréage, pose de carrelage ou de parquet pour raccorder les deux zones. Dans les appartements avec parquet ancien, certains propriétaires choisissent de refaire entièrement le sol du séjour + cuisine pour un résultat homogène.",
                cout: '200 – 1 200 € (sol)',
              },
              {
                etape: '4 — Finitions murs et plafond',
                detail: "Les murs latéraux et le plafond laissent apparaître des traces après dépose (saignées, chevilles, différences d'enduit). Il faut reboucher, réenduire et repeindre — voire refaire entièrement la peinture des deux pièces pour un résultat homogène.",
                cout: '300 – 900 € (enduit + peinture)',
              },
            ].map((el) => (
              <div key={el.etape} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.etape}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.cout}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Mur porteur et IPN */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Ouverture sur mur porteur : IPN et bureau d&apos;études structure
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Dans les appartements parisiens — particulièrement les haussmanniens et les immeubles des années 1950–1970 — la cloison entre cuisine et séjour peut être un mur porteur. L&apos;abattage sans précaution structurelle peut provoquer des fissures ou un effondrement partiel du plancher. La pose d&apos;un IPN (poutre acier) est alors obligatoire.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: "Bureau d'études structure",
                detail: "Toute ouverture sur un mur porteur nécessite une note de calcul établie par un BET structure. Il détermine le dimensionnement de la poutre (IPE 160 à IPE 300 selon portée et charges) et les conditions d'exécution.",
                cout: '500 – 1 200 €',
              },
              {
                titre: 'Étaiement du plancher',
                detail: "Avant démolition, le plancher au-dessus doit être étayé par des étais provisoires. Cette phase est indispensable pour éviter tout mouvement de structure pendant les travaux.",
                cout: '300 – 800 €',
              },
              {
                titre: "Pose de l'IPN",
                detail: "L'IPN acier est posé en tête de l'ouverture, reposant sur des potelets scellés dans les murs latéraux. Sa pose nécessite un équipement de levage et deux personnes. L'IPN peut rester apparent (effet industriel) ou être habillé (plâtre, bois, métal).",
                cout: '800 – 2 500 €',
              },
              {
                titre: 'Finitions et raccords',
                detail: "Après la pose de l'IPN : reprise d'enduit sur les piédroits et plafond, raccord de sol, habillage optionnel de la poutre. Les finitions représentent 20 à 30% du budget total mais déterminent la qualité perçue du résultat.",
                cout: '500 – 2 000 €',
              },
            ].map((el) => (
              <div key={el.titre} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.titre}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.cout}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>

          <div className="bg-[#1C1C1C] rounded-lg p-5">
            <h3 className="font-display text-base font-semibold text-white mb-3">
              Copropriété : ce qu&apos;il faut vérifier avant les travaux
            </h3>
            <div className="space-y-2">
              {[
                "Vérifier le règlement de copropriété : certains immeubles parisiens interdisent les travaux porteurs sans accord en AG",
                "En secteur sauvegardé (Marais, Île Saint-Louis, Saint-Germain) : consulter l'ABF avant tout travail",
                "Si le mur est porteur : notifier le syndic et fournir la note de calcul du BET en amont",
                "Conserver tous les documents (note BET, photos avant/pendant/après) pour la revente du bien",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-300 font-light">
                  <CheckCircle size={14} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Verrière */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Verrière intérieure : styles, dimensions et prix Paris 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La verrière d&apos;intérieur est devenue un classique de la rénovation parisienne. Elle s&apos;adapte à tous les styles — de l&apos;atelier industriel au haussmannien classique — et offre une solution élégante entre ouverture totale et cloison fermée.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              {
                parametre: 'Dimensions',
                detail: "Verrière standard (120 × 210 cm) : 1 800 à 3 500 €. Grande verrière pleine hauteur (240 × 240 cm+) : 4 000 à 8 000 €. Les appartements haussmanniens (hauteur 2,80 à 3,20 m) permettent des verrières imposantes très valorisantes.",
              },
              {
                parametre: 'Style et finition',
                detail: "Verrière atelier noire mate : la plus demandée à Paris. Laquée RAL couleur sur mesure : +10 à 20%. Avec porte pivotante intégrée : +800 à 1 500 €. Avec porte coulissante : +1 000 à 2 000 €.",
              },
              {
                parametre: 'Vitrage',
                detail: "Verre clair 6 mm : standard. Verre dépoli ou sablé (limiter la visibilité) : +15%. Double vitrage acoustique : +20 à 30%. Verre feuilleté sécurité (si enfants) : +10%.",
              },
              {
                parametre: 'Pose et délai',
                detail: "La pose inclut dépose partielle de la cloison, ancrage de la structure dans les murs et le plafond, pose du vitrage et reprises d'enduit autour. Délai : 2 à 4 jours selon dimensions.",
              },
            ].map((el) => (
              <div key={el.parametre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.parametre}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Budget récapitulatif */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Budget : coût ouverture cuisine sur salon à Paris 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Tarifs constatés à Paris, main d&apos;œuvre et matériaux inclus. Hors travaux de cuisine associés (électricité, plomberie, meuble).
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Projet</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Durée chantier</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Coût</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { projet: 'Abattage cloison non porteuse + finitions', duree: '1 – 2 jours', cout: '800 – 2 500 €' },
                  { projet: 'Ouverture partielle avec bar ou passe-plat', duree: '2 – 3 jours', cout: '1 500 – 4 000 €' },
                  { projet: "Verrière d'intérieur standard (120 × 210 cm)", duree: '2 – 3 jours', cout: '2 500 – 4 500 €' },
                  { projet: 'Grande verrière pleine hauteur (240 × 240 cm+)', duree: '3 – 5 jours', cout: '4 500 – 8 000 €' },
                  { projet: 'Mur porteur : IPN 4 m + bureau études + finitions', duree: '5 – 7 jours', cout: '5 000 – 12 000 €' },
                  { projet: "Mur porteur + verrière d'intérieur", duree: '6 – 9 jours', cout: '6 000 – 14 000 €' },
                ].map((row, i) => (
                  <tr key={row.projet} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.projet}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.duree}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.cout}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Points clés à anticiper avant d&apos;ouvrir la cuisine
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Installer une hotte à évacuation (minimum 300 m³/h) — indispensable pour les odeurs",
                "Réorganiser les circuits électriques (prises, hotte, éclairage) pendant la démolition",
                "Vérifier la présence de réseaux dans la cloison avant d'abattre (câbles, tuyaux, gaines)",
                "Prévoir un plan de cuisine adapté à l'espace ouvert : îlot, bar, plan de travail continu",
                "Anticiper le raccord de sol entre la cuisine et le séjour — souvent visible si non traité",
                "Vérifier les règles de copropriété et le règlement de lot avant de commencer",
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

      {/* Section 6 — Avant/Après */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Avant / après : ce que l&apos;ouverture change vraiment
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;ouverture de la cuisine sur le salon transforme radicalement la perception de l&apos;espace dans un appartement parisien. Voici trois exemples concrets réalisés par Espace Design à Paris.
          </p>
          <div className="space-y-4">
            {[
              {
                avant: 'Appartement 50 m² en 3 pièces — cuisine fermée de 8 m² sombre',
                apres: "Après abattage de la cloison non porteuse (1 200 €) : cuisine ouverte intégrée au séjour de 28 m², lumière naturelle dans toute la pièce. Impression de 10 m² supplémentaires sans toucher aux murs extérieurs.",
              },
              {
                avant: "Appartement haussmannien 75 m² — cuisine de 12 m² isolée, séjour peu lumineux",
                apres: "Après pose d'une grande verrière noire (4 800 €) : cuisine semi-ouverte avec porte coulissante, style atelier préservé. Lumière traversante du séjour vers la cuisine. Bien revalorisé de 5 à 8%.",
              },
              {
                avant: "Appartement des années 1970 — mur porteur entre cuisine et séjour",
                apres: "Après ouverture IPN 4,50 m avec bureau d'études (8 500 €) : salon-séjour de 32 m² avec cuisine américaine intégrée. Transformation complète de l'appartement.",
              },
            ].map((el) => (
              <div key={el.avant} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Avant</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed mb-3">{el.avant}</div>
                <div className="text-xs font-medium text-[#B8960C] uppercase tracking-wider mb-2">Après</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.apres}</div>
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
              { href: '/blog/mur-porteur-paris', title: 'Mur porteur Paris' },
              { href: '/blog/creation-verriere-interieure-paris', title: 'Verrière intérieure Paris' },
              { href: '/blog/renovation-cuisine-ouverte-paris', title: 'Rénovation cuisine ouverte Paris' },
              { href: '/blog/revetement-sol-appartement-paris', title: 'Revêtement sol appartement Paris' },
              { href: '/blog/isolation-phonique-paris', title: 'Isolation phonique Paris' },
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénovation appartement haussmannien Paris' },
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
          Ouvrir votre cuisine sur le salon à Paris ?
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Verrière, IPN, abattage de cloison. Devis détaillé sous 48h.
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
