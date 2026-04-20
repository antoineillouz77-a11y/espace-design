import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Hall Immeuble Paris', item: 'https://espacedesignparis.fr/blog/renovation-hall-immeuble-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Hall Immeuble Paris : parties communes & copropriété 2025 | Espace Design',
  description: 'Rénover le hall et les parties communes d\'un immeuble à Paris : démarches en AG, devis, travaux autorisés. Guide copropriété 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-hall-immeuble-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Comment voter des travaux en copropriété pour rénover le hall ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les travaux de rénovation du hall d'entrée sont des travaux sur parties communes, ils nécessitent donc un vote en assemblée générale de copropriété. La majorité requise dépend de la nature des travaux : majorité simple (article 24) pour les travaux d'entretien courant comme la peinture ou le remplacement d'ampoules ; majorité absolue (article 25) pour des travaux plus importants comme le remplacement du carrelage, l'installation d'un digicode ou la réfection complète du hall. Pour inscrire les travaux à l'ordre du jour, la demande doit être faite au syndic au moins 21 jours avant la date de l'AG.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment financer les travaux de parties communes en copropriété ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Depuis la loi ALUR de 2014, toutes les copropriétés de plus de 10 lots ont l'obligation de constituer un fonds de travaux, alimenté par une cotisation annuelle d'au moins 5 % du budget prévisionnel. Ce fonds peut financer en tout ou partie les travaux votés en AG. Pour les travaux importants non couverts par le fonds, la copropriété peut : voter un appel de fonds exceptionnel réparti entre copropriétaires selon leurs tantièmes, contracter un emprunt collectif (éco-PTZ collectif), ou solliciter des subventions ANAH (Agence Nationale de l'Habitat) pour les travaux d'économies d'énergie.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel est le prix pour rénover le hall d'un immeuble parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le coût de rénovation d'un hall d'immeuble à Paris dépend fortement de la surface, de l'état initial et du niveau de finition souhaité. Pour un hall de 20 à 30 m² dans un immeuble parisien : rénovation légère (peinture + éclairage LED) : 3 000 à 8 000 € ; rénovation complète (carrelage + peinture + éclairage + boîtes aux lettres + digicode) : 12 000 à 25 000 € ; rénovation haut de gamme (marbre, interphone vidéo, éclairage design, miroirs) : 25 000 à 50 000 €. Ces montants sont répartis entre les copropriétaires selon leurs tantièmes de parties communes.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Hall Immeuble Paris : parties communes & copropriété 2025 | Espace Design',
  description: "Rénover le hall et les parties communes d'un immeuble à Paris : démarches en AG, devis, travaux autorisés. Guide copropriété 2025.",
}

export default function ArticleRenovationHallImmeuble() {
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
            Copropriété
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Hall Immeuble Paris : parties communes &amp; copropriété 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le hall d&apos;entrée est la première impression que donne un immeuble parisien. Un hall rénové valorise le bâtiment, améliore la sécurité et le confort de tous les résidents. Démarches en AG, travaux autorisés, financement et prix — guide complet pour rénover les parties communes de votre copropriété en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Qui décide */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Qui décide des travaux en copropriété et comment voter ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Dans une copropriété, les parties communes (hall, couloirs, escaliers, façade) appartiennent à l&apos;ensemble des copropriétaires. Aucun copropriétaire seul ne peut y réaliser des travaux sans l&apos;accord collectif. Toute décision passe par l&apos;assemblée générale (AG).
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              La majorité requise pour voter les travaux dépend de leur nature et de leur importance. Il existe trois niveaux de majorité en droit de la copropriété, chacun adapté à un type de décision.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Majorité simple — article 24',
                  detail: "Majorité des voix exprimées parmi les copropriétaires présents et représentés. Applicable aux travaux d'entretien courant : remplacement des ampoules par des LED, petites réparations, entretien des espaces verts. Les travaux urgents peuvent parfois être réalisés sans vote préalable par le syndic.",
                },
                {
                  enjeu: 'Majorité absolue — article 25',
                  detail: "Majorité des voix de tous les copropriétaires (présents, représentés et absents). Requise pour les travaux plus structurants : remplacement du carrelage du hall, installation d'un digicode ou interphone, réfection complète de la peinture des parties communes, création d'un local vélos. C'est la majorité la plus couramment requise pour les rénovations de hall.",
                },
                {
                  enjeu: 'Double majorité — article 26',
                  detail: "Majorité des membres du syndicat représentant au moins les deux tiers des voix. Réservée aux travaux affectant la structure ou l'aspect extérieur de l'immeuble : ravalement de façade, remplacement des fenêtres communes, installation d'un ascenseur. Difficile à atteindre, nécessite une bonne mobilisation des copropriétaires.",
                },
                {
                  enjeu: 'Rôle du syndic dans la préparation des travaux',
                  detail: "Le syndic est chargé de recueillir les devis, de les soumettre en AG et de suivre l'exécution des travaux votés. Pour les travaux importants, il est recommandé de solliciter au moins 3 devis comparatifs d'artisans qualifiés avant l'AG. Le syndic peut faire appel à un maître d'œuvre pour coordonner un chantier complexe.",
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

      {/* Section 2 — Travaux courants */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Travaux courants de rénovation du hall d&apos;immeuble à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Un hall d&apos;immeuble parisien se rénove par étapes ou dans le cadre d&apos;une réfection globale. Voici les travaux les plus fréquemment réalisés, avec leurs coûts indicatifs pour un hall de 20 à 30 m².
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Peinture et enduit des murs',
                solution: "Préparation des supports (rebouchage, ponçage), application d'une sous-couche et de deux couches de peinture lessivable. Pour un hall haussmannien, la mise en valeur des moulures et corniches par un travail en deux tons apporte un cachet supplémentaire.",
                cout: '2 000 – 6 000 €',
              },
              {
                titre: 'Carrelage sol et parties basses',
                solution: "Dépose de l'ancien revêtement, ragréage du sol, pose d'un carrelage résistant au passage (grès cérame, pierre reconstituée). Le soubassement en faïence ou en pierre protège la partie basse des murs des chocs et de l'humidité des manteaux mouillés.",
                cout: '4 000 – 12 000 €',
              },
              {
                titre: 'Éclairage LED et minuteries',
                solution: "Remplacement des ampoules incandescentes ou halogènes par des LED à détecteur de présence. Économies d'énergie immédiates (jusqu'à 80 % de réduction de la consommation) et meilleure qualité de lumière. Installation possible sans vote AG si simple remplacement à l'identique.",
                cout: '1 500 – 4 000 €',
              },
              {
                titre: 'Boîtes aux lettres normalisées',
                solution: "Remplacement des boîtes aux lettres vétustes par des modèles conformes à la norme NF D27-404. Les boîtes sécurisées avec serrure individuelle améliorent la sécurité des courriers. Modèles encastrés ou en applique selon la configuration du hall.",
                cout: '1 200 – 3 500 €',
              },
              {
                titre: 'Digicode et interphone vidéo',
                solution: "Installation d'un digicode à code ou à badge, couplé à un interphone audio ou vidéo. Renforce la sécurité de l'immeuble tout en améliorant l'accueil des visiteurs. Les systèmes wifi permettent de répondre depuis son smartphone depuis n'importe où.",
                cout: '800 – 3 000 €',
              },
              {
                titre: 'Réfection du plafond',
                solution: "Traitement des fissures, application d'un enduit de finition, peinture blanche ou teintée. Pour les halls haussmanniens avec moulures en stuc, restauration ou remplacement des éléments décoratifs abîmés. Le plafond est souvent le poste le plus technique par l'accès en hauteur.",
                cout: '1 500 – 5 000 €',
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

      {/* Section 3 — Financement */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Financement des travaux de parties communes : fonds ALUR et aides
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La question du financement est souvent l&apos;obstacle principal à la rénovation des parties communes. Plusieurs mécanismes permettent d&apos;étaler ou de réduire la charge financière pour les copropriétaires.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Fonds de travaux loi ALUR (obligatoire depuis 2017)',
                prix: 'Min. 5 % du budget annuel',
                detail: "Toutes les copropriétés de plus de 10 lots doivent alimenter un fonds de travaux par une cotisation annuelle d'au moins 5 % du budget prévisionnel. Ce fonds est affecté au financement de travaux votés en AG. Il est incessible (reste attaché au lot en cas de vente) et ne peut pas être repris par les copropriétaires.",
              },
              {
                type: "Appel de fonds exceptionnel",
                prix: 'Selon tantièmes',
                detail: "Pour les travaux dont le coût dépasse le fonds disponible, l'AG peut voter un appel de fonds exceptionnel réparti entre les copropriétaires selon leurs tantièmes de parties communes. Le paiement peut être échelonné sur plusieurs appels de fonds trimestriels pour limiter l'impact financier.",
              },
              {
                type: "Éco-PTZ collectif (prêt à taux zéro)",
                prix: "Jusqu'à 50 000 €/lot",
                detail: "Pour les travaux d'économies d'énergie votés en AG (isolation, remplacement du système de chauffage, LED), la copropriété peut contracter un éco-PTZ collectif. Chaque copropriétaire peut bénéficier d'un prêt à taux zéro à titre individuel, sans condition de ressources.",
              },
              {
                type: "Subventions ANAH (MaPrimeRénov' Copropriété)",
                prix: "Jusqu'à 45 % du montant des travaux",
                detail: "Pour les copropriétés fragiles ou en difficulté réalisant des travaux de rénovation énergétique, MaPrimeRénov' Copropriété peut couvrir jusqu'à 45 % du montant des travaux. Un accompagnateur rénov' est obligatoire pour les dossiers importants. Renseignez-vous auprès de votre syndic.",
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

      {/* Section 4 — Organisation chantier */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Organisation du chantier en immeuble occupé
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Rénover un hall d&apos;immeuble tout en maintenant l&apos;accès pour les résidents exige une organisation rigoureuse. Un chantier mal géré génère des tensions et des nuisances évitables. Voici les bonnes pratiques que nous appliquons systématiquement.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              "Planifier les travaux bruyants (découpe carrelage, ponçage) en semaine aux horaires réglementaires (8h – 20h en IDF)",
              "Protéger systématiquement les zones de passage avec des bâches de chantier et des panneaux de signalisation",
              "Maintenir l'accès aux boîtes aux lettres et aux parties communes à tout moment du chantier",
              "Informer les résidents par courrier avant le démarrage : dates, nature des travaux, contraintes d'accès",
              "Prévoir un accès sécurisé pour les livraisons et l'évacuation des gravats sans encombrement du hall",
              "Nettoyer chaque soir les zones de passage pour laisser un accès propre aux résidents",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Budget */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Budget global : prix de rénovation d&apos;un hall parisien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent pour un hall d&apos;immeuble de 20 à 30 m², main d&apos;œuvre et matériaux inclus, hors syndic et maîtrise d&apos;œuvre éventuels.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Niveau</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prestations</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Total estimé</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    niveau: 'Entretien courant',
                    prestations: 'Peinture + éclairage LED + petites réparations',
                    total: '3 000 – 8 000 €',
                  },
                  {
                    niveau: 'Rénovation partielle',
                    prestations: 'Peinture + carrelage sol + éclairage + boîtes aux lettres',
                    total: '10 000 – 18 000 €',
                  },
                  {
                    niveau: 'Rénovation complète',
                    prestations: 'Sol + murs + plafond + éclairage + digicode + interphone',
                    total: '18 000 – 30 000 €',
                  },
                  {
                    niveau: 'Haut de gamme',
                    prestations: 'Marbre, boiseries, éclairage design, interphone vidéo, miroirs',
                    total: '30 000 – 60 000 €',
                  },
                ].map((row, i) => (
                  <tr key={row.niveau} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.niveau}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.prestations}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.total}</td>
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

      {/* Voir aussi */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Voir aussi</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/renovation-cage-escalier-paris', title: "Rénovation cage d'escalier Paris" },
              { href: '/blog/renovation-sous-sol-paris', title: 'Aménagement sous-sol Paris' },
              { href: '/blog/ravalement-facade-copropriete-paris', title: 'Ravalement façade copropriété Paris' },
              { href: '/peinture-paris', title: 'Peinture Paris' },
              { href: '/carrelage-paris', title: 'Carrelage Paris' },
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
      <section className="py-10 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Nos zones d&apos;intervention</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-9e', label: 'Paris 9e' },
              { href: '/renovation-paris-10e', label: 'Paris 10e' },
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-levallois-perret', label: 'Levallois' },
              { href: '/renovation-courbevoie', label: 'Courbevoie' },
              { href: '/renovation-saint-denis', label: 'Saint-Denis' },
              { href: '/renovation-pantin', label: 'Pantin' },
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
          Rénovez le hall de votre immeuble parisien
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Devis gratuit pour copropriété. Présentation en AG possible. Artisans habitués aux chantiers en immeuble occupé.
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
