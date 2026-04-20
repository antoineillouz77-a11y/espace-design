import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: "Rénovation Appartement Haussmannien Paris", item: 'https://espacedesignparis.fr/blog/renovation-appartement-haussmannien-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation Appartement Haussmannien Paris : parquet, moulures & prix 2025 | Espace Design",
  description: "Rénover un appartement haussmannien à Paris : restaurer parquets point de Hongrie, moulures plâtre, cheminées, contraintes ABPS. Prix et artisan 2025.",
  datePublished: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-haussmannien-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Peut-on modifier la disposition des pièces dans un appartement haussmannien parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, mais avec précautions. Les murs porteurs d'un haussmannien sont en pierre de taille épaisse (40 à 60 cm) ou en moellons, et ne peuvent pas être supprimés sans reprise de structure par un ingénieur (étude de stabilité + déclaration préalable mairie). Les cloisons légères (briques plâtrières, plâtre sur lattis) peuvent être déplacées librement. L'ouverture de la cuisine sur le salon est très fréquente : elle nécessite souvent de déplacer la colonne d'eau (accord syndic) et d'assurer la ventilation de la cuisine (conduit existant ou hotte à recyclage).",
      },
    },
    {
      '@type': 'Question',
      name: "Quel est le prix de la restauration d'un parquet point de Hongrie à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La restauration d'un parquet point de Hongrie (ponçage, rebouchage, vitrification) coûte entre 15 et 35 €/m² selon l'état du parquet et le nombre de passes. Si certaines lames sont trop dégradées ou manquantes, le remplacement partiel avec des lames anciennesassortie (récupération ou stocks de parquetiers spécialisés) coûte 40 à 80 €/m². Évitez de remplacer un parquet ancien par du parquet neuf standard : l'authenticité du point de Hongrie est un critère de valeur immobilière majeur dans l'haussmannien parisien.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il passer par un architecte pour rénover un appartement haussmannien à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Un architecte est obligatoire uniquement si la surface totale après travaux dépasse 150 m² ou si un permis de construire est requis. Pour la plupart des rénovations haussmanniennes (abattement de cloisons non porteuses, rénovation cuisine/salle de bain, parquet, peinture), un artisan qualifié suffit. En revanche, si l'appartement est dans un immeuble classé ou situé en périmètre de protection d'un monument historique (ABPS), toute modification de façade ou de menuiseries extérieures nécessite l'avis de l'Architecte des Bâtiments de France.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment rénover les moulures en plâtre d'un appartement haussmannien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La restauration des moulures en plâtre (corniches, rosaces, frises) fait appel à des techniques artisanales spécialisées. Pour les moulures en bon état : grattage des couches de peinture accumulées, enduit de lissage dans les micro-fissures, peinture mate (la peinture brillante accentue les imperfections). Pour les moulures endommagées ou manquantes : moulage par empreinte d'une section existante, coulage d'un nouveau plâtre fin, collage et finition. Coût : 30 à 80 €/ml selon la complexité du profil.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Rénovation Appartement Haussmannien Paris : parquet, moulures & prix 2025 | Espace Design",
  description: "Rénover un appartement haussmannien à Paris : restaurer parquets point de Hongrie, moulures plâtre, cheminées, contraintes ABPS. Prix et artisan 2025.",
  keywords: "rénovation appartement haussmannien Paris, restauration moulures Paris, parquet point de Hongrie Paris",
}

export default function ArticleRenovationHaussmannien() {
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
            Guides
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Appartement Haussmannien Paris : parquet, moulures &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            L&apos;appartement haussmannien est le joyau du parc immobilier parisien : plafonds à 3 m et plus, parquet point de Hongrie, moulures en plâtre, cheminées en marbre, caves voûtées. Sa rénovation exige un artisan qui connaît les contraintes de l&apos;immeuble ancien et les exigences de l&apos;ABPS. Guide complet 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Caractéristiques haussmannien */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Caractéristiques de l&apos;appartement haussmannien parisien
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Les immeubles haussmanniens ont été construits entre 1853 et 1900 sous la direction du baron Haussmann, préfet de Paris. Ils représentent environ 60% du bâti des 1er, 2e, 7e, 8e et 16e arrondissements. Leurs caractéristiques architecturales sont codifiées et constituent à la fois leur charme et leurs contraintes de rénovation.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              La valeur immobilière d&apos;un haussmannien est directement liée à la préservation de ses éléments d&apos;origine. Masquer le parquet point de Hongrie sous un vinyle, peindre les moulures en couleur criarde ou démolir une cheminée fonctionnelle sont des erreurs qui déprécient durablement le bien.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: "Plafonds hauts (2,80 m à 3,50 m selon l'étage)",
                  detail: "Les plafonds à la française (poutres bois avec plâtre entre les solives) ou à voûte plâtrée offrent une hauteur sous plafond remarquable. Le dernier étage (ancien appartement de domestiques) a souvent des plafonds plus bas (2,20 à 2,50 m). La hauteur permet des cloisons sur-mesure, des bibliothèques pleine hauteur et des luminaires suspension spectaculaires.",
                },
                {
                  enjeu: "Parquet point de Hongrie et parquet Versailles",
                  detail: "Le parquet point de Hongrie (lames posées en V à 45°) est le revêtement de sol emblématique de l'haussmannien. Dans les appartements de grand standing, on trouve aussi le parquet Versailles (caissons de petites lamelles). Ces parquets en chêne massif de 20 à 22 mm d'épaisseur peuvent être poncés et vitrifiés de nombreuses fois — certains ont été posés il y a plus de 150 ans.",
                },
                {
                  enjeu: 'Moulures, corniches et rosaces en plâtre',
                  detail: "Les moulures en plâtre (corniches en périmètre de plafond, rosaces centrales, frises de lambris) sont réalisées à la main ou au calibre par des artisans plâtriers spécialisés. Sous des couches successives de peinture, elles perdent leur finesse. La restauration vise à retrouver le profil d'origine en enlevant les couches accumulées et en reprenant les parties manquantes.",
                },
                {
                  enjeu: 'Cheminées en marbre et conduits existants',
                  detail: "Chaque pièce principale d'un haussmannien dispose d'une cheminée en marbre de carrare, en breccia ou en marbre noir, avec glace de trumeau au-dessus. Même condamnées (depuis l'interdiction de chauffage au bois en copropriété sans conduit isolé), elles constituent un élément décoratif majeur. Leur suppression est rarement conseillée.",
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

      {/* Section 2 — Contraintes ABPS et copropriété */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Contraintes ABPS, copropriété et permis dans l&apos;haussmannien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La rénovation d&apos;un appartement haussmannien parisien est encadrée par plusieurs niveaux de réglementation. Ignorer ces contraintes expose à des amendes, des ordres de remise en état et des conflits en copropriété.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'ABPS : zones de protection des monuments historiques',
                solution: "La plupart des immeubles haussmanniens sont situés dans le périmètre de protection d'un monument historique (dans un rayon de 500 m). Toute modification de la façade (remplacement de fenêtres, ajout d'un store, modification des volets) nécessite l'accord de l'Architecte des Bâtiments de France. Les travaux intérieurs ne sont pas concernés par l'ABPS.",
                cout: 'Délai 2 à 4 mois',
              },
              {
                titre: "AG copropriété pour les parties communes",
                solution: "Les caves, couloirs, cages d'escalier, façades et toitures sont des parties communes. Tout travail les affectant (même partiellement) nécessite un vote en assemblée générale. Le percement d'un mur porteur partagé avec un couloir ou un voisin, ou le remplacement d'une fenêtre côté cour commune, sont concernés.",
                cout: 'Délai 1 à 6 mois selon AG',
              },
              {
                titre: 'Déclaration préalable pour ouvertures et verrières',
                solution: "La création d'une nouvelle fenêtre, l'agrandissement d'une ouverture existante ou la pose d'une verrière en toiture-terrasse nécessitent une déclaration préalable de travaux en mairie. Délai d'instruction : 1 mois (2 mois en secteur ABF). Le non-respect peut entraîner une remise en état forcée.",
                cout: 'Gratuit + délai 1-2 mois',
              },
              {
                titre: 'Rénovation électrique dans les murs en pierre',
                solution: "La mise aux normes électrique (norme NF C 15-100) dans un appartement haussmannien est complexifiée par les murs épais en pierre (50 à 80 cm). Le passage des gaines est souvent réalisé en faux-plafond ou en saignée dans les plâtres d'habillage, en préservant la pierre. Un électricien expérimenté en bâti ancien est indispensable.",
                cout: '8 000 – 20 000 €',
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

      {/* Section 3 — Restaurer vs remplacer */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Restaurer ou remplacer les éléments d&apos;origine : quelle stratégie ?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
            La règle d&apos;or de la rénovation haussmannienne : conserver et restaurer plutôt que remplacer. Les éléments d&apos;origine (parquet, moulures, cheminées, menuiseries bois) ont une valeur esthétique et immobilière que les équivalents modernes ne peuvent pas reproduire.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Parquet point de Hongrie : restauration ou remplacement',
                prix: '15 – 80 €/m²',
                detail: "Restauration (ponçage + vitrification) : 15 à 35 €/m², recommandée si les lames ont encore 5 mm d'épaisseur minimum au-dessus des rainures. Remplacement partiel avec lames d'occasion assorties : 40 à 80 €/m². Remplacement total par du parquet point de Hongrie neuf : 80 à 180 €/m² posé. Jamais de parquet flottant clipsable sur un haussmannien : bruit de creux, dévalorise le bien.",
              },
              {
                type: 'Moulures en plâtre : restauration sur place',
                prix: '30 – 80 €/ml',
                detail: "La restauration des moulures en place (sans dépose) est la méthode la moins intrusive et la plus fidèle. Elle comprend le décapage des couches de peinture (parfois 10 à 15 couches sur 150 ans), la consolidation des fissures à la colle PVA + plâtre de Paris, et la finition peinture mate. Les parties manquantes sont reconstituées par moulage. Une rosace de plafond endommagée peut être refaite à l'identique par un plâtrier ornemaniste.",
              },
              {
                type: 'Cheminées en marbre : conserver et rénover le foyer',
                prix: '500 – 3 000 €',
                detail: "Même condamnée (conduit bouché), une cheminée haussmannienne doit être conservée. Le tablier en marbre peut être nettoyé et poli (marbrerie), les tablettes en bois brossées et teintées, le miroir de trumeau remplacé si cassé. Si le conduit est en bon état et la copropriété le permet, une cheminée éthanol ou bioéthanol (sans conduit) peut être installée dans le foyer existant.",
              },
              {
                type: 'Menuiseries bois : conserver avec double vitrage en applique',
                prix: '200 – 600 €/fenêtre',
                detail: "Les fenêtres en bois à 2 vantaux d'un haussmannien sont souvent en bon état structurel mais simple vitrage. Plutôt que de les remplacer (souvent interdit en ABF), la pose d'un double vitrage en applique (survitrage) côté intérieur améliore significativement l'isolation thermique et phonique. Le bois est poncé et repeint à l'huile-glycéro. Budget : 200 à 600 €/fenêtre selon dimensions.",
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

      {/* Section 4 — SDB et cuisine dans haussmannien */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Salle de bain et cuisine dans un haussmannien : défis et solutions
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
            Les appartements haussmanniens n&apos;avaient pas de salle de bain à l&apos;origine (ajoutée au XXe siècle souvent dans une chambre de bonne reconvertie) et les cuisines étaient minuscules (cuisine de domestiques). Ces deux pièces sont souvent les plus délicates à rénover.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: "Salle de bain créée dans une ancienne chambre",
                solution: "Lorsque la SDB occupe une ancienne chambre, les murs en plâtre sur lattis bois ne sont pas hydrofuges. Il faut impérativement appliquer un système d'étanchéité sous carrelage (SET) ou opter pour le béton ciré avec traitement étanche. La VMC doit évacuer dans un conduit existant (jamais dans les combles).",
                cout: '6 000 – 15 000 €',
              },
              {
                titre: 'Plomberie dans les murs en pierre épaisse',
                solution: "Le passage des gaines d'eau chaude, froide et évacuation dans les murs en pierre de 50 à 80 cm est délicat. Solution : faux-murs en placo devant la pierre pour intégrer la plomberie, ou plancher technique surélevé dans la SDB. Le raccordement aux colonnes communes (fonte ancienne souvent en bon état) nécessite l'autorisation du syndic.",
                cout: '3 000 – 8 000 €',
              },
              {
                titre: "Cuisine ouverte sur le salon (suppression cloison)",
                solution: "La tendance cuisine ouverte est très populaire dans l'haussmannien. La cloison entre cuisine et salon est généralement une cloison légère (brique plâtrière, plâtre sur lattis) facilement supprimable. À vérifier : présence de la colonne de ventilation (à conserver), déplacement éventuel du gaz (plombier agréé gaz).",
                cout: '1 500 – 5 000 €',
              },
              {
                titre: 'Carrelage grand format dans un haussmannien',
                solution: "Le carrelage grand format (60×60 ou 80×80) peut être posé dans les cuisines et salles de bain d'un haussmannien, à condition que le plancher bois soit suffisamment rigide. Une dalle de désolidarisation (chape allégée ou plaque de désolidarisation) est souvent nécessaire pour éviter les fissurations. Évitez les carreaux de faïence blancs glossy : trop froids pour l'atmosphère haussmannienne.",
                cout: '60 – 140 €/m²',
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

      {/* Section 5 — Tableau prix par poste */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix rénovation appartement haussmannien Paris 2025 : par poste
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Tarifs indicatifs pour un appartement haussmannien à Paris, main d&apos;œuvre + matériaux inclus. Les prix varient selon l&apos;état initial, les arrondissements (accessibilité) et le niveau de finition souhaité.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Poste de travaux</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix unitaire</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget type (80 m²)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { poste: 'Restauration parquet point de Hongrie', unite: '15 – 35 €/m²', budget: '1 200 – 2 800 €' },
                  { poste: 'Restauration moulures en plâtre', unite: '30 – 80 €/ml', budget: '3 000 – 8 000 €' },
                  { poste: 'Peinture (lissage + 2 couches)', unite: '25 – 60 €/m²', budget: '2 500 – 6 000 €' },
                  { poste: 'Salle de bain complète (8 m²)', unite: '6 000 – 15 000 €', budget: '6 000 – 15 000 €' },
                  { poste: 'Cuisine sur-mesure (10 m²)', unite: '8 000 – 25 000 €', budget: '8 000 – 25 000 €' },
                  { poste: 'Électricité mise aux normes', unite: '8 000 – 20 000 €', budget: '8 000 – 20 000 €' },
                  { poste: 'Survitrage fenêtres bois', unite: '200 – 600 €/fen.', budget: '2 000 – 6 000 €' },
                  { poste: 'Rénovation complète (80 m²)', unite: '800 – 1 500 €/m²', budget: '64 000 – 120 000 €' },
                ].map((row, i) => (
                  <tr key={row.poste} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.poste}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.unite}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.budget}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Les règles d&apos;or de la rénovation haussmannienne
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Conserver et restaurer le parquet point de Hongrie plutôt que le couvrir",
                "Ne jamais démolir une cheminée en marbre d'origine, même condamnée",
                "Préserver les moulures en plâtre : leur restauration valorise le bien",
                "Consulter l'ABPS avant tout remplacement de fenêtres côté rue",
                "Faire appel à un artisan expérimenté en bâti ancien pour l'électricité",
                "Utiliser des peintures mates pour respecter l'atmosphère haussmannienne",
                "Vérifier le règlement de copropriété avant tout déplacement de cloison",
                "Prévoir un délai de 2 à 4 mois pour les autorisations ABPS si nécessaire",
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
              { href: '/blog/renovation-parquet-paris', title: 'Rénovation parquet Paris' },
              { href: '/blog/moulures-paris', title: 'Restauration moulures Paris' },
              { href: '/blog/renovation-appartement-ancien-paris', title: 'Rénovation appartement ancien Paris' },
              { href: '/blog/isolation-phonique-paris', title: 'Isolation phonique Paris' },
              { href: '/blog/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain Paris' },
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
          Rénovez votre haussmannien avec un artisan spécialisé
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Restauration parquet, moulures, cheminées. Devis gratuit sous 48h. Patrick — Espace Design.
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
