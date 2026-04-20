import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Tendances Déco Appartement Paris 2025', item: 'https://espacedesignparis.fr/blog/tendances-deco-appartement-paris-2025' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Tendances Déco Appartement Paris 2025 : styles & couleurs de l'année",
  description: "Quelles tendances déco pour votre appartement parisien en 2025 ? Couleurs, japandi, matériaux naturels, moulures revisitées : guide complet par Espace Design.",
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/tendances-deco-appartement-paris-2025',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quelles couleurs sont tendance en 2025 pour un appartement parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "En 2025, les couleurs phares pour les appartements parisiens sont le terracotta (teinte argile chaude, idéale pour un salon ou une chambre), le vert sauge (sobre et apaisant, parfait dans une cuisine ou une salle de bain), et le bleu canard (profond et élégant, très recherché pour les pièces de nuit ou les bibliothèques). Ces teintes se marient avec des tons neutres comme le blanc cassé, le grège ou le lin. On abandonne le blanc pur et les gris froids au profit de palettes plus chaleureuses et organiques.",
      },
    },
    {
      '@type': 'Question',
      name: "C'est quoi le style japandi et comment l'adopter dans un appartement parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le japandi est la fusion entre l'esthétique japonaise (wabi-sabi, imperfection et sobriété) et le design scandinave (fonctionnalité, matériaux naturels, lignes épurées). Dans un appartement parisien, il se traduit par des meubles bas aux lignes simples en bois clair ou noyer, des textiles en lin et coton brut, une palette de couleurs neutres (blanc cassé, beige, taupe, vert kaki), l'absence de bibelots superflus et une priorité donnée à la lumière naturelle. Le japandi fonctionne très bien dans les haussmanniens car il équilibre le volume des pièces sans les surcharger.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment moderniser un appartement haussmannien avec les tendances 2025 ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La rénovation d'un haussmannien en 2025 repose sur un dialogue entre l'existant (moulures, parquet point de Hongrie, hauteur sous plafond) et les tendances contemporaines. On ne supprime plus les moulures mais on les met en valeur avec une peinture bi-ton (moulure en blanc satiné sur mur en vert sauge par exemple). On conserve le parquet en chêne qu'on rénove plutôt que de le remplacer. On intègre des arches maçonnées pour créer des transitions douces entre les pièces. Les matériaux naturels comme le rotin, le travertin et le lin s'accordent parfaitement avec l'architecture ancienne.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il un décorateur pour suivre les tendances déco à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Un décorateur n'est pas indispensable mais peut être très utile pour éviter les erreurs coûteuses. Son intervention est particulièrement pertinente pour définir une palette de couleurs cohérente sur l'ensemble de l'appartement, sélectionner les matériaux (revêtements de sol, faïence, enduits) qui s'accordent dans la durée, et concevoir les aménagements sur-mesure (bibliothèques, dressings, cuisine). Pour une rénovation complète à Paris, un architecte d'intérieur facture généralement 8 à 15 % du budget total des travaux. Pour une décoration seule (sans travaux importants), un décorateur peut intervenir à la journée (400 à 800 € la journée) ou au forfait.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Tendances Déco Appartement Paris 2025 : styles & couleurs de l'année | Espace Design",
  description: "Quelles tendances déco pour votre appartement parisien en 2025 ? Couleurs, japandi, matériaux naturels, moulures revisitées : guide complet par Espace Design.",
  keywords: ["tendances déco appartement Paris 2025", "couleurs tendance 2025", "style japandi Paris", "décoration appartement parisien 2025", "tendances intérieur Paris"],
}

export default function ArticleTendancesDecoParis2025() {
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
            Décoration intérieure
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Tendances Déco Appartement Paris 2025 : ce qui est en vogue
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Couleurs terracotta et vert sauge, style japandi, arches maçonnées, matériaux naturels et moulures revisitées — le point complet sur les tendances déco qui transforment les appartements parisiens en 2025. Et comment les intégrer à votre projet de rénovation.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-[#1C1C1C] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { val: 'Japandi', label: 'Style phare 2025' },
              { val: 'Terracotta', label: 'Couleur de l\'année' },
              { val: 'Travertin', label: 'Matière incontournable' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-xl sm:text-2xl font-semibold text-[#D4AF37] mb-1">{s.val}</div>
                <div className="text-gray-500 text-[10px] uppercase tracking-wider font-light">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1 — Couleurs */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Couleurs tendance 2025 : terracotta, vert sauge et bleu canard
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La grande rupture de 2025 dans la déco parisienne, c&apos;est l&apos;abandon définitif des palettes froides et monochromes — blanc pur, gris souris, greige industriel — au profit de teintes organiques, chaleureuses et profondément ancrées dans la nature. Ce virage s&apos;est amorcé dès 2022, mais c&apos;est en 2025 qu&apos;il atteint son plein développement dans les projets de rénovation d&apos;appartements parisiens.
          </p>
          <div className="space-y-4 mb-8">
            {[
              {
                couleur: 'Terracotta',
                hex: '#C9714A',
                usage: 'Salon, chambre, entrée',
                description: "Le terracotta est la grande couleur de 2025. Cette teinte argile, oscillant du rose saumon au rouille chaud, apporte une chaleur immédiate à n'importe quelle pièce. À Paris, elle fonctionne particulièrement bien dans les salons qui manquent de lumière naturelle — elle compense l'absence de soleil par une chaleur visuelle. En mur de fond (derrière un canapé ou un lit), elle crée un point focal puissant sans alourdir l'espace. Elle se marie avec le blanc cassé, le beige, le vert sauge et les bois clairs.",
              },
              {
                couleur: 'Vert sauge',
                hex: '#8FA688',
                usage: 'Cuisine, salle de bain, chambre',
                description: "Le vert sauge — ce vert grisé, presque poussiéreux — est devenu la couleur de référence des cuisines et salles de bain rénovées à Paris. Il s'impose comme une alternative au vert forêt (trop sombre) et au vert pistache (trop vif). Dans une cuisine, appliqué sur les façades des meubles bas avec des poignées en laiton, il crée un rendu artisanal très recherché. Dans une salle de bain, en carrelage métro ou en enduit, il apporte une fraîcheur végétale sans agresser l'espace.",
              },
              {
                couleur: 'Bleu canard',
                hex: '#1F6B7C',
                usage: 'Bureau, chambre, bibliothèque',
                description: "Le bleu canard — profond, presque pétrole — est la couleur des espaces de nuit et de travail en 2025. Utilisé en peinture murale dans une chambre ou un bureau, il crée une atmosphère intime et concentrée. À Paris, dans les appartements avec de belles hauteurs sous plafond (type haussmannien), il peut couvrir l'intégralité des murs et du plafond sans écraser l'espace — une technique dite de la 'enveloppe colorée' très prisée chez les architectes d'intérieur.",
              },
            ].map((el) => (
              <div key={el.couleur} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-8 h-8 rounded flex-shrink-0 border border-gray-200" style={{ backgroundColor: el.hex }} />
                  <div>
                    <div className="font-medium text-[#1C1C1C] text-sm">{el.couleur}</div>
                    <div className="text-[#B8960C] text-xs font-light">{el.usage}</div>
                  </div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.description}</div>
              </div>
            ))}
          </div>
          <div className="bg-[#1C1C1C] rounded-lg p-5">
            <div className="font-medium text-white text-sm mb-3">Comment associer ces couleurs dans un appartement parisien</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Terracotta + blanc cassé + rotin : trio chaleureux parfait pour un salon",
                "Vert sauge + laiton + marbre blanc : cuisine haut de gamme intemporelle",
                "Bleu canard + lin naturel + bois de noyer : chambre cocooning et apaisante",
                "Ne jamais associer vert sauge et terracotta dans la même pièce — trop chargé",
                "Utiliser la même couleur de base (blanc cassé) dans les zones de transition (couloir, entrée)",
                "Limiter les couleurs saturées à une pièce maximum — le reste en tons neutres",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-400 font-light">
                  <CheckCircle size={14} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Style japandi */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Le style japandi : la tendance dominante des appartements parisiens
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Si une seule tendance devait résumer la déco intérieure parisienne de 2025, ce serait le japandi. Contraction de &quot;japonais&quot; et &quot;scandinave&quot;, ce style fusionne deux philosophies du design qui partagent des valeurs communes : la sobriété, le rapport à la nature, le refus du superflu et le goût pour les matériaux authentiques.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              {
                titre: "Les codes du japandi",
                detail: "Mobilier bas (plateaux de sol, tables basses, futons), bois clair (chêne, hêtre, bambou) ou bois foncé (noyer, ébène), textiles bruts (lin, coton lavé, laine naturelle), céramique artisanale, plantes vertes simples (figuier, monstera, graminées), absence totale de décoration superflue.",
              },
              {
                titre: "La palette de couleurs japandi",
                detail: "Blanc cassé, beige chaud, taupe, vert kaki, noir mat. Les couleurs sont toujours désaturées, jamais vives. L'objectif est de créer une atmosphère apaisante où chaque élément trouve sa place sans concurrencer les autres. La nature entre dans le logement via les plantes et les matières brutes.",
              },
              {
                titre: "Japandi dans un haussmannien parisien",
                detail: "L'architecture haussmannienne (moulures, parquet en chêne, volumes généreux) se marie naturellement avec le japandi. On conserve les moulures mais on les peint dans le ton du mur pour les intégrer sans les effacer. Le parquet en chêne devient l'élément central — on le rénove plutôt que de le remplacer. Les meubles japonisants (bas, aux lignes simples) équilibrent la hauteur des plafonds.",
              },
              {
                titre: "Les erreurs à éviter",
                detail: "Le japandi n'est pas le minimalisme extrême — il y a de la chaleur et du confort. Évitez les surfaces trop froides (acier brossé, verre miroir, blanc pur), les pièces vides de tout textile, et le mélange de trop de bois différents (choisissez une essence dominante). La clé est l'équilibre entre vide et plein, entre naturel et épuré.",
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.titre}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Arches et voûtes */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Arches et voûtes maçonnées : l&apos;élément architectural phare de 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les arches et les ouvertures en plein cintre sont l&apos;une des tendances les plus marquantes de la déco intérieure parisienne en 2025. Longtemps absentes des rénovations contemporaines qui favorisaient les lignes droites et les angles vifs, elles reviennent en force — non pas comme un retour au passé, mais comme un geste architectural doux qui humanise les espaces.
          </p>
          <div className="space-y-4 mb-8">
            {[
              {
                type: "Arche de transition entre deux pièces",
                detail: "La plus populaire des applications : transformer une ouverture rectangulaire existante en arche en plein cintre. Dans un appartement haussmannien, cela peut signifier arrondir le haut d'une ouverture entre le salon et la salle à manger, ou entre la cuisine et le couloir. Techniquement, c'est un travail de plâtrier qui nécessite la réalisation d'un coffrage cintre en plaque de plâtre ou en enduit. Coût : 300 à 800 € selon la taille.",
              },
              {
                type: "Niche en arche dans un mur",
                detail: "Une niche en arche creusée dans un mur intérieur (non porteur) permet de créer un espace de rangement ou d'exposition élégant sans mobilier supplémentaire. Dans les appartements parisiens aux murs épais, ces niches ont souvent existé historiquement et ont été bouchées lors de rénovations passées. Rouvrir ou créer une niche arrondie : 400 à 1 200 € selon la profondeur et la finition.",
              },
              {
                type: "Arche de séparation cuisine/salon",
                detail: "Plutôt qu'une cloison droite ou une ouverture rectangle, l'arche en plein cintre délimite élégamment la cuisine ouverte du salon. Elle peut être réalisée en plâtre enduit (peint dans le même ton que les murs ou dans une couleur contrastante), en brique de parement ou en béton ciré. Le résultat est architecturalement fort sans être massif.",
              },
            ].map((el) => (
              <div key={el.type} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.type}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Matériaux naturels */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Matériaux naturels : travertin, rotin, lin et bois brut
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La tendance aux matériaux naturels n&apos;est pas nouvelle, mais elle s&apos;impose en 2025 avec une intensité inédite dans les projets de rénovation parisiens. Face à l&apos;uniformisation des intérieurs (parquet stratifié gris, carrelage blanc, plan de travail stratifié), les propriétaires et locataires parisiens réclament du caractère, de l&apos;imperfection, de l&apos;authenticité.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              {
                matiere: "Travertin",
                usage: "Sol, mur, vasque salle de bain",
                description: "Revenu en force depuis 2023, le travertin est la pierre naturelle de 2025. Ses veines beige-or, ses alvéoles caractéristiques et sa chaleur en font un matériau à la fois luxueux et naturel. À Paris, il s'utilise en carrelage de sol (salle de bain, entrée), en revêtement mural partiel, ou en vasque taillée dans la masse. Le prix est plus accessible que le marbre : 40 à 90 €/m² pour le matériau.",
              },
              {
                matiere: "Rotin et osier",
                usage: "Mobilier, luminaires, miroirs",
                description: "Le rotin est revenu massivement dans la déco des appartements parisiens après avoir été boudé pendant vingt ans. Chaises, luminaires en suspension, miroirs à bordure tressée, têtes de lit — le rotin s'intègre dans presque tous les styles (japandi, bohème, contemporain). Il apporte une texture organique qui compense la froideur des surfaces lisses (marbre, métal, verre).",
              },
              {
                matiere: "Lin et coton brut",
                usage: "Rideaux, linge de lit, coussins",
                description: "Le lin naturel (non teint ou teint dans des tons neutres) est devenu le textile de référence de l'appartement parisien tendance. Rideaux en lin à la broche (qui tombent au sol), linge de lit en percale lavée, coussins en coton brut — ces textiles apportent une légèreté et une profondeur de texture que les synthétiques ne peuvent pas imiter.",
              },
              {
                matiere: "Bois massif brut",
                usage: "Étagères, plan de travail, escalier",
                description: "Le bois massif brut (non verni, huilé ou simplement brossé) fait son retour dans les cuisines et les bibliothèques parisiennes. Plan de travail en chêne massif huilé, étagères en bois de récupération, escalier en pin traité — l'imperfection du bois (nœuds, veines, variations de teinte) est désormais recherchée plutôt qu'évitée.",
              },
            ].map((el) => (
              <div key={el.matiere} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-1">{el.matiere}</div>
                <div className="text-[#B8960C] text-xs font-light mb-3">{el.usage}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Moulures et mobilier sur-mesure */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Moulures revisitées et mobilier sur-mesure vs catalogues
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Deux tendances de fond caractérisent la rénovation des appartements parisiens en 2025 : la réhabilitation des éléments architecturaux anciens (moulures, corniches, parquets) que les décennies précédentes avaient supprimé, et le retour en grâce du mobilier fabriqué sur-mesure face aux catalogues industriels.
          </p>
          <div className="space-y-4 mb-8">
            {[
              {
                sujet: "Moulures : ne plus les cacher, les sublimer",
                detail: "Dans les appartements haussmanniens, la tendance est désormais à la mise en valeur des moulures plutôt qu'à leur suppression. La technique la plus répandue : peindre les moulures dans un ton légèrement contrasté par rapport au mur (blanc satiné sur fond vert sauge, ou ton sur ton dans une nuance plus profonde). Certains architectes d'intérieur parisiens vont plus loin en ajoutant des moulures modernes dans des appartements qui en ont perdu, recréant un caractère architectural à moindre coût (40 à 80 €/ml posé).",
              },
              {
                sujet: "Wainscoting et lambris revisités",
                detail: "Le wainscoting — ou boiserie de lambris en mi-hauteur — revient en force dans les entrées, couloirs et salles de bain parisiennes. Ce revêtement mural en panneau MDF (peint dans un ton contrasté ou laqué) crée une séparation visuelle élégante entre la partie basse du mur (souvent exposée aux coups et à l'usure) et la partie haute. Il apporte un caractère classique modernisé qui fonctionne aussi bien dans un haussmannien que dans un appartement des années 1970 refait à neuf.",
              },
              {
                sujet: "Mobilier sur-mesure : pourquoi ça gagne du terrain",
                detail: "La principale limite du mobilier de catalogue (IKEA, But, Maisons du Monde) dans les appartements parisiens est l'inadaptation aux volumes atypiques : couloirs étroits, recoins, faux aplombs, niches, alcôves. Le mobilier sur-mesure — bibliothèques sol-plafond, dressings sous pente, cuisines ajustées au centimètre — permet d'exploiter chaque centimètre carré d'un appartement parisien sans compromis. Son coût est plus élevé (×2 à ×3 par rapport au catalogue) mais justifié dans les rénovations patrimoniales ou les appartements avec fort potentiel locatif.",
              },
            ].map((el) => (
              <div key={el.sujet} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.sujet}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>

          <div className="bg-[#1C1C1C] rounded-lg p-5">
            <div className="font-medium text-white text-sm mb-3">Sur-mesure ou catalogue : comment arbitrer ?</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="text-[#D4AF37] text-xs uppercase tracking-wider mb-2">Privilégiez le sur-mesure pour…</div>
                <ul className="space-y-1">
                  {[
                    "La cuisine (volumes atypiques, angles, hotte intégrée)",
                    "Les dressings et armoires sous pente",
                    "Les bibliothèques sol-plafond en alcôve",
                    "Les aménagements de couloir ou d'entrée étroite",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-400 font-light">
                      <CheckCircle size={11} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-[#D4AF37] text-xs uppercase tracking-wider mb-2">Le catalogue suffit pour…</div>
                <ul className="space-y-1">
                  {[
                    "La chambre (lit, chevet, commode)",
                    "La salle à manger (table, chaises)",
                    "La décoration accessoire (luminaires, miroirs)",
                    "Le mobilier de salle de bain dans les configurations standard",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-400 font-light">
                      <CheckCircle size={11} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
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
              { href: '/blog/decoration-interieure-paris', title: 'Décoration intérieure Paris' },
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénovation appartement haussmannien Paris' },
              { href: '/blog/moulures-paris', title: 'Moulures Paris' },
              { href: '/blog/peinture-decoration-appartement-paris', title: 'Peinture décoration appartement Paris' },
              { href: '/blog/beton-cire-paris', title: 'Béton ciré Paris' },
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

      {/* CTA */}
      <section className="py-16 bg-[#D4AF37] text-center px-4">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-4">
          Intégrez les tendances 2025 dans votre appartement parisien
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Conseil déco, sélection matériaux, travaux clé en main. Devis gratuit et détaillé sous 48h. Garantie décennale.
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
