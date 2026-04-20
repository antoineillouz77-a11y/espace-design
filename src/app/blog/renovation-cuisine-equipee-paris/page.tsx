import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: "Rénovation Cuisine Équipée Paris : prix, étapes & artisan 2025 | Espace Design",
  description: "Guide complet rénovation cuisine équipée Paris 2025 : diagnostic, dépose, choix de cuisine, pose et raccordements, finitions. Prix, délais et conseils artisan Paris.",
  keywords: [
    "renovation cuisine equipee paris",
    "renovation cuisine paris",
    "cuisine equipee paris",
    "pose cuisine paris",
    "prix renovation cuisine paris",
    "artisan cuisine paris",
    "installation cuisine paris",
    "devis renovation cuisine paris",
    "renovation cuisine appartement paris",
    "cuisine equipee prix paris 2025",
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation Cuisine Équipée Paris : prix, étapes & artisan 2025",
  description: "Guide complet rénovation cuisine équipée Paris 2025 : diagnostic, dépose, choix de cuisine, pose et raccordements, finitions. Prix, délais et conseils artisan Paris.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
  url: 'https://espacedesignparis.fr/blog/renovation-cuisine-equipee-paris',
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Combien coûte une rénovation cuisine à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix d'une rénovation cuisine complète à Paris dépend de la surface, du niveau de gamme de la cuisine et des travaux annexes (plomberie, électricité, revêtements). Pour une cuisine de 6 à 8 m² : entrée de gamme (Ikea, Conforama) 3 000 à 6 000 € tout compris, gamme intermédiaire (Schmidt, Cuisinella) 6 000 à 12 000 €, haut de gamme (SieMatic, Bulthaup) 15 000 à 40 000 €. Ces budgets incluent la dépose de l'ancienne cuisine, la fourniture et la pose de la nouvelle cuisine, les raccordements plomberie et électricité, et les finitions (crédence, sol). Hors gros oeuvre (déplacement de cloisons, création d'ouverture).",
      },
    },
    {
      '@type': 'Question',
      name: "Peut-on rénover sans tout changer ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, une rénovation partielle est souvent possible et économique. Si la structure des meubles est en bon état, on peut changer uniquement les façades de meubles (150 à 400 € par meuble), le plan de travail (50 à 300 €/ml), la crédence, et l'électroménager. Cette solution de rafraîchissement coûte 2 000 à 5 000 € pour une cuisine de 8 m² et permet un résultat visuel proche d'une cuisine neuve. Espace Design évalue toujours l'état de la structure existante lors de la visite pour recommander la solution la plus adaptée.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il refaire la plomberie ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pas systématiquement. Si le logement est récent (moins de 20 ans) et que la plomberie est en cuivre ou PER en bon état, les raccordements peuvent être réutilisés avec un simple déplacement des arrivées d'eau si le plan de cuisine change. Dans les appartements parisiens anciens (avant 1970), les tuyaux en plomb ou galvanisé doivent être remplacés lors de la rénovation : profitez-en pour passer en cuivre ou multicouche. Le remplacement de la plomberie cuisine coûte 500 à 2 000 € selon la configuration et la longueur des passages.",
      },
    },
    {
      '@type': 'Question',
      name: "Durée travaux rénovation cuisine ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Une rénovation cuisine complète dure en général 5 à 15 jours ouvrés à Paris. Dépose ancienne cuisine : 1 jour. Travaux préparatoires (plomberie, électricité, ragréage) : 2 à 4 jours. Pose nouvelle cuisine et électroménager : 2 à 3 jours. Finitions (crédence, peinture, sol) : 2 à 4 jours. Pendant les travaux, la cuisine est inutilisable. Prévoyez une kitchenette de fortune (micro-ondes, bouilloire) dans une autre pièce. Espace Design planifie les travaux pour minimiser la durée d'indisponibilité et intervient avec une équipe complète (menuisier, plombier, électricien, carreleur).",
      },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />

      {/* Hero */}
      <section className="bg-[#1C1C1C] text-center pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#B8960C] text-xs font-medium uppercase tracking-widest mb-4">
            Guide artisan 2025
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-6 leading-tight">
            Rénovation Cuisine Équipée Paris : guide complet 2025
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed font-light max-w-2xl mx-auto mb-8">
            Diagnostic, dépose, choix de votre cuisine, pose et raccordements, finitions — tout ce qu&apos;il
            faut savoir pour rénover votre cuisine équipée à Paris avec un artisan qualifié.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#B8960C] text-white px-6 py-3 text-sm font-medium rounded hover:bg-[#9a7d0a] transition-colors"
            >
              Demander un devis <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+33611783867"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 text-sm font-medium rounded hover:bg-white/5 transition-colors"
            >
              <Phone className="w-4 h-4" /> 06 11 78 38 67
            </a>
          </div>
        </div>
      </section>

      {/* Section 1 — Diagnostic */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Étape 1 — Diagnostic de la cuisine existante
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Avant de commander une nouvelle cuisine ou de lancer quelque travaux que ce soit, un diagnostic
              technique de la cuisine existante est indispensable. C&apos;est cette étape qui détermine le budget
              réel de votre rénovation et évite les mauvaises surprises en cours de chantier.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Espace Design réalise ce diagnostic lors de la visite gratuite avant devis. Voici les quatre
              points systématiquement vérifiés dans les cuisines parisiennes.
            </p>
            <div className="space-y-4">
              {[
                {
                  point: "Installation électrique : normes et capacité",
                  detail: "Une cuisine moderne consomme beaucoup d'électricité (plaque, four, lave-vaisselle, réfrigérateur, hotte). La norme NF C 15-100 impose un circuit dédié pour chaque gros appareil (plaque : 32 A, four : 20 A, lave-vaisselle : 16 A). Dans les appartements parisiens anciens, le tableau est souvent sous-dimensionné. Coût d'une mise aux normes électrique cuisine : 800 à 2 500 € selon la configuration.",
                },
                {
                  point: "Plomberie : arrivées d'eau et évacuations",
                  detail: "L'évier, le lave-vaisselle et parfois le réfrigérateur américain nécessitent une arrivée d'eau froide et une évacuation. Si le plan de cuisine change (déplacement de l'évier), il faut déplacer les alimentations. Les appartements parisiens avant 1980 ont souvent des tuyaux en plomb (toxiques) ou en acier galvanisé (corrosion) à remplacer obligatoirement.",
                },
                {
                  point: "Ventilation : VMC et hotte",
                  detail: "Une cuisine mal ventilée produit humidité, odeurs et condensation. La hotte doit évacuer les vapeurs soit vers l'extérieur (conduit dédié, souvent absent dans les appartements haussmanniens), soit recirculer l'air avec un filtre à charbon. Vérifier la présence d'une VMC (ventilation mécanique contrôlée) dans l'appartement. En l'absence de VMC, une grille de ventilation haute est obligatoire.",
                },
                {
                  point: "État du support : murs et sol",
                  detail: "Les murs et le sol de la cuisine doivent être sains avant toute installation. Dans les appartements parisiens anciens, les problèmes d'humidité (remontées capillaires, condensation), de salpêtre ou de moisissures derrière l'ancien carrelage doivent être traités avant la pose de la nouvelle cuisine. Un sol irrégulier peut empêcher l'alignement des meubles bas (ragréage 15 à 25 €/m²).",
                },
              ].map((el) => (
                <div key={el.point} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.point}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Dépose et préparation */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Étape 2 — Dépose de l&apos;ancienne cuisine et préparation du chantier
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La dépose de l&apos;ancienne cuisine est une étape technique qui doit être réalisée avec méthode pour
            ne pas endommager les cloisons, le sol ou les réseaux encastrés. Elle précède systématiquement la
            préparation des supports avant la pose de la nouvelle cuisine.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                etape: "Coupure des réseaux",
                detail: "Couper l'alimentation électrique au disjoncteur, fermer les robinets d'arrêt eau chaude et froide, déconnecter le gaz si applicable. Débrancher tous les électroménagers. Cette étape est réalisée par un professionnel qualifié.",
                cout: "Inclus dans la dépose",
              },
              {
                etape: "Dépose des meubles hauts et bas",
                detail: "Dévisser les meubles hauts en premier (risque de chute), puis les meubles bas. Les meubles bas sont souvent vissés entre eux et fixés au mur. Dépose soigneuse pour ne pas arracher le carrelage mural ou abîmer le plan de travail si réutilisé.",
                cout: "150 – 400 €",
              },
              {
                etape: "Dépose plan de travail et évier",
                detail: "Le plan de travail est découpé en sections pour l'évacuation. L'évier est déconnecté (siphon, alimentation). Si le plan de travail est en pierre ou en granit, prévoir deux personnes pour la manipulation (poids 30 à 60 kg).",
                cout: "Inclus dans la dépose",
              },
              {
                etape: "Préparation des supports",
                detail: "Après dépose : reboucher les trous de fixation, ragréer le sol si besoin, traiter les problèmes d'humidité détectés, appliquer un primaire sur les murs si peinture ou carrelage prévu. Un sol plan au mm est indispensable pour l'alignement parfait des meubles bas.",
                cout: "200 – 800 €",
              },
            ].map((el) => (
              <div key={el.etape} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.etape}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.cout}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Choix cuisine et budget */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Étape 3 — Choisir sa nouvelle cuisine : marques et budgets
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le choix de la cuisine équipée est déterminant pour le budget total de la rénovation. Le marché
            propose trois grandes gammes, avec des différences importantes de qualité, de personnalisation et
            de durabilité. Voici ce qu&apos;Espace Design observe sur les chantiers parisiens en 2025.
          </p>
          <div className="space-y-4 mb-8">
            {[
              {
                gamme: "Entrée de gamme — 1 500 à 4 000 € (fourniture seule)",
                marques: "Ikea Metod/Sektion, Conforama, Brico Dépôt",
                pour: "Budget contraint, location meublée, cuisine temporaire. Très personnalisable via les façades tierces (Semihandmade, Reform). Structure en panneaux de particules — durabilité 10 à 15 ans.",
                contre: "Finitions moins soignées, pas de sur-mesure, profondeur standard 60 cm uniquement. Pose plus rapide mais souvent moins précise si auto-montage.",
              },
              {
                gamme: "Gamme intermédiaire — 4 000 à 12 000 € (fourniture seule)",
                marques: "Schmidt, Cuisinella, Leroy Merlin Elitis, But Cuisines",
                pour: "Large choix de façades, plans de travail, finitions. Accompagnement design inclus. Fabrication française pour certaines marques. Durabilité 20 à 25 ans.",
                contre: "Délais de livraison longs (6 à 12 semaines). Nécessite une pose professionnelle — les SAV sont complexes en cas de malfaçon.",
              },
              {
                gamme: "Haut de gamme — 12 000 à 50 000 € et plus (fourniture seule)",
                marques: "SieMatic, Bulthaup, Poggenpohl, Valcucine, Arclinea",
                pour: "Sur-mesure absolu, matériaux premium (laqué piano, chêne massif, inox, béton), électroménager Gaggenau ou Miele intégré. Durabilité 30 à 40 ans. Investissement patrimonial.",
                contre: "Budget élevé, délais 10 à 20 semaines, pose par techniciens certifiés de la marque.",
              },
            ].map((el) => (
              <div key={el.gamme} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-1">{el.gamme}</div>
                <div className="text-[#B8960C] text-xs font-medium mb-2">{el.marques}</div>
                <p className="text-gray-600 text-sm font-light leading-relaxed mb-1">
                  <span className="font-medium text-gray-700">Adapté pour :</span> {el.pour}
                </p>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  <span className="font-medium text-gray-700">Points de vigilance :</span> {el.contre}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-[#1C1C1C] rounded-lg p-5 text-white">
            <p className="text-sm font-light leading-relaxed">
              <span className="font-medium">Note :</span> Espace Design pose tous types de cuisines, quelle que
              soit la marque. Nous intervenons également pour des achats Ikea (montage et raccordements) ou pour
              des cuisines sur mesure en tant que menuisier. Chaque chantier fait l&apos;objet d&apos;un devis détaillé
              incluant la pose, les raccordements et les finitions.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 — Pose et raccordements */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Étape 4 — Pose et raccordements : le coeur du chantier
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La pose de la cuisine est l&apos;étape la plus technique. Un artisan qualifié garantit l&apos;aplomb des
            meubles, l&apos;étanchéité des raccordements et le bon fonctionnement de chaque équipement.
            Voici le déroulé type d&apos;une pose de cuisine à Paris par Espace Design.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                phase: "Tracé et calepinage",
                detail: "Report du plan cuisine sur les murs et le sol. Repérage des hauteurs (plan de travail à 90 cm standard), des emplacements de meubles hauts (50 à 55 cm au-dessus du plan de travail), des passages de gaines et des sorties de ventilation. Vérification de l'aplomb des murs.",
                duree: "1/2 journée",
              },
              {
                phase: "Pose des meubles bas",
                detail: "Fixation des meubles bas sur rails ou directement au sol selon le système. Mise à niveau à l'aide des pieds réglables. Les meubles sont vissés entre eux pour former un bloc rigide. Découpes des passages de plomberie et électricité dans les fonds de meubles.",
                duree: "1 journée",
              },
              {
                phase: "Raccordements plomberie",
                detail: "Connexion des alimentations eau froide et chaude à l'évier et au lave-vaisselle. Pose du siphon et raccordement à l'évacuation. Test d'étanchéité avant la pose du plan de travail (accès impossible après). En appartement parisien : vérifier impérativement la pression d'eau (souvent faible aux étages élevés).",
                duree: "1/2 journée",
              },
              {
                phase: "Raccordements électriques",
                detail: "Connexion des circuits dédiés (plaque, four, lave-vaisselle) au tableau. Pose des prises de courant selon plan (norme : 1 prise tous les 60 cm dans une cuisine). Installation de l'éclairage sous meuble (LED). Test de toutes les protections différentielles.",
                duree: "1/2 journée",
              },
              {
                phase: "Pose du plan de travail",
                detail: "Découpe sur mesure du plan de travail (encastrement évier, plaque). Collage au silicone sur les meubles bas. Joint silicone entre plan de travail et mur (imperméabilité). Pour les plans en pierre ou stratifié post-formé, la découpe se fait in situ à la défonceuse.",
                duree: "1 journée",
              },
              {
                phase: "Pose des meubles hauts",
                detail: "Fixation sur rail mural (hauteur réglable) ou directement cheville/vis selon le poids et le support mural. Dans les murs en plâtre parisien (cloisons légères), renforcement par platine de fixation. Mise à niveau et alignement avec les meubles bas.",
                duree: "1/2 journée",
              },
            ].map((el) => (
              <div key={el.phase} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.phase}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.duree}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Finitions et prix global */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Étape 5 — Finitions et prix global Paris 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les finitions font la différence entre une cuisine posée et une cuisine rénovée. Carrelage ou
            béton ciré au sol, crédence en zellige ou verre, peinture des murs et plafond, éclairage design
            sous meubles — chaque détail compte pour un résultat final à la hauteur de vos attentes.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left p-3 font-medium text-xs">Poste</th>
                  <th className="text-right p-3 font-medium text-xs">Prix bas</th>
                  <th className="text-right p-3 font-medium text-xs">Prix haut</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { poste: "Dépose ancienne cuisine", bas: "300 €", haut: "800 €" },
                  { poste: "Travaux préparatoires (électricité, plomberie)", bas: "800 €", haut: "3 000 €" },
                  { poste: "Fourniture cuisine entrée de gamme (6 à 8 m²)", bas: "1 500 €", haut: "4 000 €" },
                  { poste: "Fourniture cuisine gamme intermédiaire", bas: "4 000 €", haut: "12 000 €" },
                  { poste: "Pose et raccordements artisan Paris", bas: "1 500 €", haut: "4 000 €" },
                  { poste: "Crédence (carrelage ou zellige)", bas: "200 €", haut: "800 €" },
                  { poste: "Sol cuisine (carrelage, vinyle ou béton ciré)", bas: "300 €", haut: "1 500 €" },
                  { poste: "Peinture murs et plafond", bas: "200 €", haut: "600 €" },
                  { poste: "Total rénovation cuisine Paris (entrée de gamme)", bas: "4 800 €", haut: "9 000 €" },
                  { poste: "Total rénovation cuisine Paris (gamme intermédiaire)", bas: "8 000 €", haut: "18 000 €" },
                ].map((row, i) => (
                  <tr key={row.poste} className={i % 2 === 0 ? "bg-[#FAFAF8]" : "bg-white"}>
                    <td className="p-3 text-gray-700">{row.poste}</td>
                    <td className="p-3 text-right text-gray-600">{row.bas}</td>
                    <td className="p-3 text-right font-medium text-[#1C1C1C]">{row.haut}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs leading-relaxed">
            Tarifs artisan Paris 2025 — prix indicatifs pour une cuisine de 6 à 8 m². Hors gros oeuvre
            (déplacement de cloisons, création d&apos;ouverture), électroménager et déménagement de mobilier.
            Un devis précis nécessite une visite sur site gratuite.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-8">
            Questions fréquentes : rénovation cuisine Paris
          </h2>
          <div className="space-y-4">
            {schemaFAQ.mainEntity.map((faq) => (
              <div key={faq.name} className="bg-white rounded-lg p-5 border border-gray-100">
                <h3 className="font-medium text-[#1C1C1C] text-sm mb-2">{faq.name}</h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1C1C1C] py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-2xl font-semibold text-white mb-4">
            Rénover votre cuisine à Paris
          </h2>
          <p className="text-gray-300 text-sm font-light leading-relaxed mb-8">
            Espace Design coordonne tous les corps de métier pour votre rénovation cuisine : menuisier,
            plombier, électricien, carreleur. Un seul interlocuteur, un seul devis, un résultat garanti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#B8960C] text-white px-6 py-3 text-sm font-medium rounded hover:bg-[#9a7d0a] transition-colors"
            >
              Demander un devis <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+33611783867"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 text-sm font-medium rounded hover:bg-white/5 transition-colors"
            >
              <Phone className="w-4 h-4" /> 06 11 78 38 67
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
