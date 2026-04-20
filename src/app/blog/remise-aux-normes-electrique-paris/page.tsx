import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Remise aux Normes Électrique Paris', item: 'https://espacedesignparis.fr/blog/remise-aux-normes-electrique-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Remise aux Normes Électrique Paris : diagnostic, travaux & prix 2025',
  description: "Mise en conformité électrique d'un appartement parisien : NF C 15-100, tableau électrique, mise à la terre, prix par pièce. Cas spécifiques des immeubles haussmanniens 2025.",
  datePublished: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/remise-aux-normes-electrique-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix d'une remise aux normes électriques à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix d'une remise aux normes électriques à Paris dépend de la surface du logement et de l'état de l'installation existante. Pour un studio ou 2 pièces (20 – 35 m²) : 1 500 à 4 000 €. Pour un 3 pièces (50 – 65 m²) : 3 000 à 7 000 €. Pour un appartement haussmannien de 80 à 120 m² : 5 000 à 15 000 €. Ces prix incluent le nouveau tableau électrique, le remplacement du câblage, la mise à la terre et les prises conformes. Une installation ancienne sans mise à la terre dans un immeuble haussmannien peut nécessiter un budget plus élevé si les travaux de saignées dans les murs en pierre sont importants.",
      },
    },
    {
      '@type': 'Question',
      name: "Le diagnostic électrique est-il obligatoire à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, le diagnostic électrique (état de l'installation intérieure d'électricité) est obligatoire lors de la vente d'un logement dont l'installation électrique date de plus de 15 ans — ce qui concerne la très grande majorité des appartements parisiens anciens. Il est réalisé par un diagnostiqueur certifié et a une durée de validité de 3 ans. Il n'est pas obligatoire pour une location mais est fortement recommandé (le propriétaire est responsable de la sécurité électrique du logement mis en location).",
      },
    },
    {
      '@type': 'Question',
      name: "Qu'est-ce que la norme NF C 15-100 et s'applique-t-elle à mon appartement parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La norme NF C 15-100 est la norme française qui régit les installations électriques dans les bâtiments d'habitation. Elle définit le nombre minimal de circuits, de prises, de points d'éclairage et d'interrupteurs par pièce, ainsi que les équipements de protection (disjoncteur différentiel, parafoudre). Elle est obligatoire pour toute installation neuve ou rénovée. Les installations anciennes ne sont pas rétroactivement obligatoires de la respecter, sauf lors d'une vente ou d'une rénovation globale. Pour un appartement parisien ancien, la mise en conformité NF C 15-100 est recommandée pour la sécurité et la valeur du bien.",
      },
    },
    {
      '@type': 'Question',
      name: "La mise à la terre est-elle possible dans un immeuble haussmannien parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La mise à la terre est possible dans un appartement haussmannien, bien que techniquement plus complexe que dans un immeuble récent. Deux solutions existent : raccordement au réseau de terre collectif de l'immeuble (si présent et conforme) ou création d'un piquet de terre individuel. Dans les immeubles anciens sans réseau de terre collectif, l'électricien peut créer une liaison de terre en descendant un conducteur de protection depuis le tableau jusqu'au sol (cave ou sous-sol). Cette démarche est indispensable pour protéger les occupants et alimenter les prises avec terre (obligatoires depuis 1968).",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Remise aux Normes Électrique Paris : diagnostic, travaux & prix 2025 | Espace Design',
  description: "Mise en conformité électrique d'un appartement parisien : NF C 15-100, tableau électrique, mise à la terre, prix par pièce. Cas spécifiques des immeubles haussmanniens 2025.",
  keywords: ['remise aux normes électrique Paris', 'mise en conformité électrique Paris', 'tableau électrique Paris', 'NF C 15-100 Paris', 'installation électrique Paris'],
}

export default function ArticleRemiseNormesElectriqueParis() {
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
            Électricité
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Remise aux Normes Électrique Paris : diagnostic, travaux et prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            L&apos;installation électrique de nombreux appartements parisiens est vieillissante, non conforme à la norme NF C 15-100 et souvent dangereuse. Tableau électrique insuffisant, absence de mise à la terre, câblage en tissu : voici le guide complet pour comprendre les travaux de mise en conformité, les prix à Paris et les spécificités des immeubles haussmanniens.
          </p>
        </div>
      </section>

      {/* Section 1 — Signes d'une installation à remettre aux normes */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Comment savoir si votre installation électrique est à remettre aux normes ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              À Paris, une grande partie des appartements anciens (haussmanniens, immeubles des années 1930 à 1960) ont des installations électriques vieilles de 30 à 80 ans. Ces installations peuvent fonctionner sans incident apparent, mais présentent des risques réels d&apos;incendie, d&apos;électrocution ou de surtension.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Le diagnostic électrique obligatoire lors de la vente (installations de plus de 15 ans) identifie les anomalies et classe l&apos;installation. Mais même sans vente, plusieurs signes visibles alertent sur la nécessité d&apos;une remise aux normes.
            </p>
            <div className="space-y-4">
              {[
                {
                  signe: 'Tableau électrique vétuste ou sous-dimensionné',
                  description: "Tableau à fusibles en fil de plomb (à remplacer impérativement), tableau avec disjonteurs mais sans différentiels 30 mA, tableau insuffisant pour l'usage actuel (pas assez de circuits, disjoncteur général qui saute régulièrement). Tout tableau de plus de 25 ans mérite une inspection.",
                  risque: 'Risque incendie élevé',
                },
                {
                  signe: 'Absence de prise de terre',
                  description: "Les prises sans trou de terre (2 alvéoles au lieu de 3) signalent une absence de mise à la terre. C'est obligatoire depuis 1968 pour toutes les nouvelles installations. Sans terre, les appareils électroménagers (lave-linge, réfrigérateur, four...) ne sont pas protégés et peuvent être dangereux en cas de défaut d'isolation.",
                  risque: "Risque d'électrocution",
                },
                {
                  signe: 'Câblage en tissu ou en aluminium',
                  description: "Dans les appartements parisiens anciens, le câblage d'origine peut être en fil tissu (isolant en coton vieilli, très inflammable) ou en aluminium (résistance plus élevée, connexions oxydées). Ces câbles doivent être remplacés intégralement.",
                  risque: 'Risque incendie très élevé',
                },
                {
                  signe: 'Manque de prises et circuits insuffisants',
                  description: "La norme NF C 15-100 impose un nombre minimal de prises par pièce : 3 prises minimum dans un salon, 4 à 6 en cuisine (dont un circuit dédié plaque de cuisson), 2 en chambre. Un appartement ancien avec 1 à 2 prises par pièce ne répond plus aux besoins.",
                  risque: 'Surcharge, incendie',
                },
              ].map((el) => (
                <div key={el.signe} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="font-medium text-[#1C1C1C] text-sm">{el.signe}</div>
                    <div className="text-red-500 text-xs font-medium flex-shrink-0">{el.risque}</div>
                  </div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Norme NF C 15-100 */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            La norme NF C 15-100 : ce qu&apos;elle impose concrètement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La norme NF C 15-100 définit les règles minimales d&apos;une installation électrique sûre dans un logement. Voici les exigences principales pièce par pièce, pour un appartement parisien type.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                piece: 'Séjour / Salon',
                exigences: "5 prises minimum (dont 1 dédiée TV), 1 point d'éclairage commandé, 1 circuit 16A ou 2 circuits 16A selon surface. Prises avec terre obligatoires.",
                circuit: '1 à 2 circuits 16A',
              },
              {
                piece: 'Cuisine',
                exigences: "6 prises minimum dont 2 circuits spécialisés 20A (réfrigérateur, four). Circuit dédié 32A pour plaque de cuisson électrique. 1 circuit 20A lave-vaisselle. Prises à 1,20 m au-dessus du plan de travail.",
                circuit: '4 à 6 circuits dédiés',
              },
              {
                piece: 'Chambre',
                exigences: "3 prises minimum (dont 1 prise rasoir ou 2 prises), 1 point d'éclairage commandé. Circuit partagé avec d'autres pièces possible.",
                circuit: '1 circuit 16A partagé',
              },
              {
                piece: 'Salle de bain',
                exigences: "Volumes réglementés (0, 1, 2) définissant les équipements autorisés. Différentiel 30 mA obligatoire. Liaison équipotentielle entre toutes les parties métalliques. Prise rasoir en volume 2 uniquement (transformateur d'isolement).",
                circuit: '1 circuit dédié 20A',
              },
            ].map((el) => (
              <div key={el.piece} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.piece}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.circuit}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.exigences}</div>
              </div>
            ))}
          </div>

          <div className="bg-[#1C1C1C] rounded-lg p-5">
            <h3 className="font-display text-base font-semibold text-white mb-3">
              Tableau électrique conforme NF C 15-100 : ce qu&apos;il doit contenir
            </h3>
            <div className="space-y-2">
              {[
                "Disjoncteur général de branchement (calibre adapté à l'abonnement EDF)",
                "Interrupteurs différentiels 30 mA (au moins 2 : éclairage/prises + salle de bain + cuisine)",
                "Disjoncteurs de protection par circuit (1 disjoncteur par circuit : salon, chambres, cuisine, SDB...)",
                "Parafoudre recommandé en zone exposée (toiture terrasse, appartements en attique)",
                "Repérage des circuits : étiquettes lisibles sur chaque disjoncteur",
                "Espace suffisant pour ajout de circuits futurs (ex. borne de recharge véhicule électrique)",
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

      {/* Section 3 — Spécificités Haussmannien */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Remise aux normes dans un immeuble haussmannien : les défis spécifiques
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les appartements haussmanniens parisiens posent des défis particuliers lors d&apos;une remise aux normes électriques. Les murs en pierre de taille de 40 à 60 cm, les hauteurs sous plafond de 3 m et les ornements architecturaux (moulures, rosaces) imposent des solutions techniques adaptées.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                defi: 'Saignées dans les murs en pierre',
                solution: "Les saignées pour passer les câbles dans des murs en pierre épaisse (35 à 60 cm) sont plus longues et coûteuses qu'en cloison légère. Deux options : saignées cachées sous enduit (invisible, coût plus élevé) ou gaines apparentes en moulures PVC peintes (moins coûteux, moins esthétique). Pour préserver les enduits anciens, certains électriciens optent pour des chemins de câbles discrets en plinthe ou en corniche.",
              },
              {
                defi: "Absence de mise à la terre dans l'immeuble",
                solution: "Dans les immeubles haussmanniens sans réseau de terre collectif, l'électricien crée une liaison de terre individuelle — soit en descendant un conducteur PE depuis le tableau jusqu'à un piquet de terre en cave ou sous-sol, soit en se raccordant à l'alimentation Enedis (si le câble d'entrée inclut un conducteur PE). Cette démarche est systématique dans les immeubles parisiens anciens.",
              },
              {
                defi: 'Préservation des moulures et ornements',
                solution: "Les appartements haussmanniens sont souvent protégés ou valorisés par leurs éléments décoratifs (moulures en plâtre, rosaces, parquets...). L'électricien doit travailler avec précision pour ne pas les endommager. Les encastrements de boîtes de dérivation doivent être réalisés avec des outils adaptés à la pierre.",
              },
              {
                defi: 'Hauteur sous plafond de 3 m et plus',
                solution: "Les grandes hauteurs augmentent la longueur des saignées et des câbles. Les tableaux électriques sont souvent déplacés dans l'entrée (plus accessible) lors d'une rénovation complète. Les plafonds hauts permettent en revanche une meilleure discrétion des chemin de câbles en partie haute des murs.",
              },
            ].map((el) => (
              <div key={el.defi} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.defi}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.solution}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Budget */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix remise aux normes électrique Paris 2025 : tableau récapitulatif
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Tarifs observés à Paris, main d&apos;œuvre et matériaux inclus (câblage, tableau, prises, interrupteurs). Hors travaux de finition (enduit, peinture, carrelage après saignées).
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Appartement</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Surface</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Nb circuits</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'Studio / T1', surface: '15 – 30 m²', circuits: '6 – 8', prix: '1 500 – 3 500 €' },
                  { type: 'T2', surface: '35 – 50 m²', circuits: '8 – 12', prix: '2 500 – 5 500 €' },
                  { type: 'T3', surface: '55 – 70 m²', circuits: '10 – 14', prix: '3 500 – 7 500 €' },
                  { type: 'T4', surface: '75 – 100 m²', circuits: '12 – 18', prix: '5 000 – 10 000 €' },
                  { type: 'Appartement haussmannien (T4–T5)', surface: '90 – 150 m²', circuits: '14 – 22', prix: '7 000 – 18 000 €' },
                  { type: 'Tableau seul (remplacement)', surface: 'Tous types', circuits: '—', prix: '800 – 2 500 €' },
                ].map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.type}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.surface}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.circuits}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Ce qui peut faire varier le prix à Paris
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Murs en pierre épaisse (haussmannien) : saignées plus longues, surcoût 20 à 40%",
                "Absence de mise à la terre : création du réseau de terre, surcoût 500 – 1 500 €",
                "Câblage en fil tissu à remplacer intégralement : surcoût 30 à 60%",
                "Appartement en copropriété avec contraintes d'accès au vide-sanitaire : surcoût variable",
                "Finitions après saignées (enduit, peinture) : 1 500 – 5 000 € selon surface",
                "Certification CONSUEL obligatoire pour une installation neuve ou rénovée : 150 – 300 €",
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

      {/* Section 5 — Étapes des travaux */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Les étapes d&apos;une remise aux normes électrique à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Une remise aux normes électrique complète dans un appartement parisien suit un processus structuré. Voici les étapes type, du diagnostic à la certification finale.
          </p>
          <div className="space-y-4">
            {[
              {
                etape: "1 — Diagnostic de l'installation existante",
                detail: "Inspection complète : état du tableau, type et section des câbles, présence ou absence de terre, nombre de circuits, conformité des prises et interrupteurs, état des boîtes de dérivation. Le diagnostiqueur certifié établit un rapport avec classement des anomalies (sécurité immédiate, à risque, observation).",
                duree: '2 à 4 heures',
              },
              {
                etape: '2 — Établissement du programme de travaux',
                detail: "Sur la base du diagnostic, l'électricien établit un plan de câblage : nombre de circuits, emplacement du nouveau tableau, passage des câbles (saignées, goulottes, plinthes), position des nouvelles prises et points d'éclairage. Le devis détaille chaque poste.",
                duree: '1 à 3 jours (devis)',
              },
              {
                etape: "3 — Travaux d'électricité (phase principale)",
                detail: "Coupure générale, démontage de l'ancien câblage, saignées dans les murs et plafonds, passage des nouveaux câbles, pose des boîtes d'encastrement, raccordement du nouveau tableau électrique, pose des prises et interrupteurs. Dans un appartement haussmannien de 80 m², compter 5 à 10 jours de travaux.",
                duree: '3 à 12 jours selon surface',
              },
              {
                etape: '4 — Finitions après travaux électriques',
                detail: "Rebouchage des saignées (plâtre, enduit), reprise de peinture sur les zones touchées. Idéalement, les travaux électriques sont coordonnés avec la rénovation générale de l'appartement pour limiter les dégâts apparents.",
                duree: '2 à 5 jours',
              },
              {
                etape: '5 — Test et certification CONSUEL',
                detail: "Après travaux, une vérification complète de l'installation est effectuée (test des différentiels, mesure de la terre, vérification de la continuité). La certification CONSUEL est obligatoire pour remettre en service un logement dont l'installation a été entièrement refaite. Enedis en a besoin pour se raccorder ou modifier l'abonnement.",
                duree: '1 jour (inspection + certificat)',
              },
            ].map((el) => (
              <div key={el.etape} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.etape}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.duree}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Aides et obligations */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Aides, obligations et cas particuliers pour les Parisiens
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La remise aux normes électrique peut bénéficier d&apos;aides fiscales et d&apos;accompagnements spécifiques. Elle est parfois obligatoire dans certaines situations.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                titre: 'TVA réduite à 10%',
                detail: "Les travaux d'électricité dans un logement de plus de 2 ans bénéficient d'une TVA à 10% (au lieu de 20%). Condition : le logement doit être à usage d'habitation et les travaux réalisés par un professionnel. La TVA à 5,5% s'applique si les travaux s'inscrivent dans une rénovation énergétique globale.",
              },
              {
                titre: "MaPrimeRénov' (si travaux combinés)",
                detail: "La mise aux normes électrique seule n'est pas éligible à MaPrimeRénov'. En revanche, si elle est couplée à des travaux d'isolation ou de chauffage dans le cadre d'une rénovation globale, la rénovation globale peut être éligible.",
              },
              {
                titre: "Obligation lors d'une vente",
                detail: "Le diagnostic électrique (installation de plus de 15 ans) est obligatoire en annexe du compromis de vente. S'il révèle des anomalies de type 1 (sécurité immédiate), l'acquéreur peut s'en prévaloir lors de la négociation du prix.",
              },
              {
                titre: 'Obligation du propriétaire bailleur',
                detail: "Le propriétaire doit mettre à disposition un logement décent avec une installation électrique conforme. Si un locataire signale une anomalie électrique grave, le propriétaire est tenu d'intervenir. Le non-respect peut entraîner une réduction de loyer ou une injonction judiciaire.",
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
              { href: '/blog/electricite-appartement-paris', title: 'Électricité appartement Paris' },
              { href: '/blog/travaux-electricite-appartement-paris', title: 'Travaux électricité appartement Paris' },
              { href: '/blog/domotique-appartement-paris', title: 'Domotique appartement Paris' },
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénovation appartement haussmannien Paris' },
              { href: '/blog/diagnostic-amiante-paris', title: 'Diagnostic amiante Paris' },
              { href: '/blog/budget-renovation-paris-2025', title: 'Budget rénovation Paris 2025' },
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
          Mettre votre installation électrique aux normes à Paris ?
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Tableau électrique, câblage, mise à la terre. Devis sous 48h.
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
