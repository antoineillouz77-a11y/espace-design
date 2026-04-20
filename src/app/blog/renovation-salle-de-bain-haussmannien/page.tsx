import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: "Rénover une Salle de Bain Haussmannienne", item: 'https://espacedesignparis.fr/blog/renovation-salle-de-bain-haussmannien' },
  ],
}

export const metadata: Metadata = {
  title: "Rénover une Salle de Bain Haussmannienne à Paris : guide & prix 2025 | Espace Design",
  description:
    "Rénovation salle de bain haussmannienne à Paris : défis techniques, styles conseillés, prix au m², démarches syndic. Artisan spécialisé appartements anciens. Devis gratuit.",
  keywords: [
    'rénovation salle de bain haussmannienne',
    'salle de bain appartement haussmannien',
    'rénovation salle de bain Paris',
    'artisan salle de bain haussmannien',
    'prix rénovation salle de bain Paris',
    'tuyauterie ancienne Paris',
    'carrelage grand format haussmannien',
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénover une Salle de Bain Haussmannienne à Paris : guide & prix 2025",
  description: "Guide complet pour rénover une salle de bain dans un appartement haussmannien à Paris : défis, styles, prix et démarches syndic.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
  url: 'https://espacedesignparis.fr/blog/renovation-salle-de-bain-haussmannien',
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Faut-il une autorisation du syndic pour rénover une salle de bain haussmannienne ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Cela dépend des travaux. Un simple remplacement de carrelage ou de sanitaires ne nécessite pas d'autorisation. En revanche, tout déplacement de colonne montante, modification du plancher ou ouverture de mur porteur requiert l'accord du syndic et parfois un passage en assemblée générale. Espace Design vous accompagne dans ces démarches.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel style choisir pour une salle de bain haussmannienne ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Deux approches fonctionnent particulièrement bien : le style classique avec robinetterie rétro, baignoire sur pieds et carreaux de mosaïque, qui prolonge l'esprit du bâtiment ; et le contraste contemporain avec grands formats de grès cérame, meuble vasque suspendu et robinetterie noire mat, qui met en valeur les volumes par opposition.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel est le prix d'une rénovation de salle de bain haussmannienne à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix varie entre 8 000 et 30 000 € selon la surface et le niveau de prestation. Une rénovation complète de 5 m² avec douche italienne et finitions intermédiaires se situe autour de 10 000 à 15 000 €. La contrainte technique des appartements anciens (plomberie à déplacer, plancher à traiter) peut majorer le coût de 15 à 25 % par rapport à un appartement neuf.",
      },
    },
    {
      '@type': 'Question',
      name: "Combien de temps dure la rénovation d'une salle de bain haussmannienne ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "En moyenne 2 à 4 semaines pour une rénovation complète. La complexité des installations anciennes (fonte, plomb, tuyaux encastrés dans les murs) allonge souvent les phases de plomberie et d'étanchéité. Comptez une semaine supplémentaire si des travaux de maçonnerie ou de déplacement de colonnes sont nécessaires.",
      },
    },
  ],
}

export default function ArticleSalleDeBainHaussmannien() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-12 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">
            Guide & Conseils
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Salle de Bain Haussmannienne Paris : rénovation avec caractère
          </h1>
          <p className="text-gray-500 text-sm font-light leading-relaxed">
            Rénover la salle de bain d&apos;un appartement haussmannien à Paris est un exercice
            particulier. Les volumes généreux, les plafonds à plus de 2,80 m, les moulures et
            les installations d&apos;époque imposent une approche technique et esthétique
            spécifique. Espace Design, artisan spécialisé dans la rénovation d&apos;appartements
            anciens à Paris, vous guide pas à pas.
          </p>
        </div>
      </section>

      {/* Section 1 — Défis spécifiques */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">

          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les défis spécifiques de la salle de bain haussmannienne
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              L&apos;appartement haussmannien cumule des contraintes techniques que l&apos;on ne
              retrouve pas dans un immeuble récent. La salle de bain en concentre la plupart.
            </p>

            <div className="space-y-5">
              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Plafonds hauts et moulures à préserver
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Les hauteurs sous plafond de 2,80 à 3,20 m sont un atout esthétique mais
                  compliquent l&apos;installation électrique (spots, ventilation) et la pose de
                  faïence murale. Les moulures, quand elles subsistent, doivent être
                  respectées — ou superbement mises en valeur par la décoration.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Tuyauterie ancienne : fonte, plomb et colonnes montantes
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Dans les immeubles construits avant 1950, les canalisations sont souvent en
                  fonte pour les évacuations et parfois encore en plomb pour les arrivées
                  d&apos;eau froide — un matériau interdit depuis 1995 qu&apos;il faut
                  impérativement remplacer. Les colonnes montantes, gaines techniques communes
                  à tous les appartements d&apos;un même immeuble, ne peuvent pas être
                  déplacées sans accord du syndic.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Planchers en bois et descente de siphon
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  La douche à l&apos;italienne est souvent souhaitée, mais elle impose une
                  descente de siphon encastrée. Dans un appartement haussmannien avec plancher
                  en bois, cela nécessite une chape sèche — ou une concertation avec le voisin
                  du dessous si l&apos;évacuation doit passer dans son plafond. Une solution
                  technique que nous maîtrisons et anticipons dès la conception.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Humidité et isolation phonique
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Les murs anciens (pierre, brique) sont souvent poreux. Une bonne étanchéité
                  (membrane, bande à joint) est indispensable autour de la douche et du bac.
                  L&apos;isolation phonique entre appartements — souvent insuffisante dans
                  l&apos;ancien — peut aussi être améliorée lors de la rénovation par
                  l&apos;ajout d&apos;une contre-cloison isolante.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 — Styles conseillés */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Quel style pour une salle de bain haussmannienne ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Deux grandes approches s&apos;opposent — et cohabitent parfois — dans les projets
              que nous réalisons sur des appartements haussmanniens.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {[
                {
                  label: 'Style classique & cohérent',
                  desc: "Robinetterie rétro en laiton brossé ou doré, baignoire sur pieds, mosaïque hexagonale blanche au sol, faïence métro en hauteur. Ce style s'inscrit naturellement dans l'esprit du bâtiment et valorise le bien à la revente.",
                },
                {
                  label: 'Contraste contemporain',
                  desc: "Grands formats de grès cérame gris ou beige, meuble vasque suspendu laqué, robinetterie noire mat, éclairage LED sous miroir. L'opposition entre le cadre ancien et le design actuel crée un effet saisissant qui plaît aux acheteurs parisiens.",
                },
              ].map((item) => (
                <div key={item.label} className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-5">
                  <div className="text-[#B8960C] text-xs font-light uppercase tracking-widest mb-2">
                    {item.label}
                  </div>
                  <p className="text-gray-500 text-xs font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Le choix dépend du reste de l&apos;appartement et des intentions du propriétaire.
              Lors de notre visite, nous présentons toujours des planches tendances pour aider
              à la décision — sans surcoût.
            </p>
          </div>

          {/* Section 3 — Carrelage */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Carrelage grands formats et mosaïque : ce qui fonctionne vraiment
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Le choix du carrelage est central dans une salle de bain haussmannienne, car
              il conditionne la perception de l&apos;espace et la cohérence du style.
            </p>
            <ul className="space-y-3 mb-5">
              {[
                "Grand format (60×60, 80×80, 120×60) : agrandit visuellement une petite pièce, réduit les joints, facilite l'entretien. Idéal en grès cérame effet pierre ou béton.",
                "Mosaïque hexagonale : en marbre blanc ou en céramique mate, elle apporte une touche artisanale cohérente avec l'époque haussmannienne. Utilisée au sol ou en niche de douche.",
                "Zellige marocain : en vogue dans les salles de bain parisiennes, il apporte du relief et des nuances uniques. Attention à la planéité du support — sa pose exige une main experte.",
                "Carreaux de ciment : authentiques ou en céramique imitation, ils créent un sol chaleureux et personnalisé. Nécessitent un traitement hydrofuge régulier.",
                "Faïence métro biseautée : classique indémodable en 7,5×15 cm, à joints contrastés gris foncé pour un effet graphique élégant.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-gray-600 font-light">
                  <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Quel que soit le format choisi, la qualité du ragréage du support est
              déterminante. Dans les appartements anciens, les sols sont rarement plans — une
              préparation minutieuse évite les carrelages qui se soulèvent et les joints
              inégaux.
            </p>
          </div>

          {/* Section 4 — Prix */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Prix au m² et budgets : rénovation salle de bain haussmannienne 2025
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Les tarifs ci-dessous sont indicatifs pour Paris intra-muros en 2025.
              La complexité des installations anciennes majore souvent le coût de 15 à 25 %
              par rapport à un appartement neuf de même superficie.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
              {[
                {
                  label: 'Rénovation partielle',
                  price: '5 000 – 9 000 €',
                  desc: "Remplacement des sanitaires, de la robinetterie et de la faïence. Sans toucher à la plomberie ni au carrelage de sol. Pour une salle de bain de 4-5 m².",
                },
                {
                  label: 'Rénovation complète',
                  price: '10 000 – 18 000 €',
                  desc: "Tout refaire : plomberie, électricité, carrelage sol et mur, douche italienne, meuble vasque, miroir rétroéclairé. Finitions intermédiaires.",
                },
                {
                  label: 'Rénovation haut de gamme',
                  price: '18 000 – 35 000 €',
                  desc: "Matériaux nobles (zellige, marbre, laiton massif), sur-mesure, baignoire îlot, plomberie apparente rétro. Pour les projets d'exception.",
                },
              ].map((item) => (
                <div key={item.label} className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-5">
                  <div className="text-[#B8960C] text-xs font-light uppercase tracking-widest mb-1">
                    {item.label}
                  </div>
                  <div className="font-display text-lg font-semibold text-[#1C1C1C] mb-2">
                    {item.price}
                  </div>
                  <p className="text-gray-500 text-xs font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Le prix au m² de pose de carrelage seul se situe entre 80 et 180 €/m²
              fourniture et pose à Paris, selon le format et la complexité. La plomberie
              représente souvent 2 500 à 5 000 € sur une rénovation complète.
            </p>
          </div>

          {/* Section 5 — Syndic */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Démarches syndic : ce qu&apos;il faut savoir avant de commencer
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Dans une copropriété parisienne, certains travaux de salle de bain requièrent
              une déclaration préalable, voire un vote en assemblée générale.
            </p>
            <ul className="space-y-3 mb-5">
              {[
                "Remplacement à l'identique (baignoire, WC, robinetterie) : aucune démarche syndic requise.",
                "Déplacement de sanitaires sans toucher aux colonnes montantes : en général, simple déclaration au syndic par courrier recommandé.",
                "Déplacement ou remplacement de colonne montante (partie commune) : accord obligatoire du syndic, souvent accompagné d'un passage en AG et d'une validation par un bureau d'études.",
                "Ouverture de plancher pour descente de siphon : accord du syndic et parfois du voisin du dessous requis.",
                "Modification de la façade ou ajout d'une ventilation externe : autorisation en copropriété et parfois déclaration en mairie.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-gray-600 font-light">
                  <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Espace Design vous aide à identifier les démarches nécessaires dès la phase de
              devis, et peut préparer les éléments techniques (plans, descriptif) à
              soumettre au syndic. Nous intervenons dans tout Paris et connaissons bien les
              exigences des copropriétés haussmanniennes.
            </p>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-8">
            Questions fréquentes
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Faut-il une autorisation du syndic pour rénover sa salle de bain ?",
                a: "Cela dépend des travaux. Remplacement de carrelage ou de sanitaires à l'identique : aucune démarche. Déplacement de colonne montante ou ouverture de plancher : accord syndic obligatoire, parfois vote en AG. Espace Design vous accompagne dans toutes ces démarches administratives.",
              },
              {
                q: "Quel style choisir pour une salle de bain haussmannienne ?",
                a: "Deux approches fonctionnent très bien : le style classique (robinetterie rétro en laiton, mosaïque hexagonale, baignoire sur pieds) qui prolonge l'esprit du bâtiment, et le contraste contemporain (grands formats, meuble suspendu, robinetterie noire mat) qui met en valeur les volumes par opposition. Nous vous aidons à choisir selon votre projet global.",
              },
              {
                q: "Quel est le prix d'une rénovation de salle de bain haussmannienne à Paris ?",
                a: "Entre 8 000 et 35 000 € selon la surface et les finitions. Une rénovation complète de 5 m² avec douche italienne et finitions intermédiaires se situe autour de 10 000 à 15 000 €. La complexité des installations anciennes peut majorer le coût de 15 à 25 % par rapport à un appartement neuf.",
              },
              {
                q: "Combien de temps dure la rénovation d'une salle de bain haussmannienne ?",
                a: "En moyenne 2 à 4 semaines pour une rénovation complète. La complexité des installations anciennes (fonte, plomb) allonge souvent la phase plomberie. Comptez une semaine supplémentaire si des travaux de maçonnerie ou de déplacement de colonnes sont nécessaires.",
              },
            ].map((faq) => (
              <div key={faq.q} className="border-b border-gray-100 pb-6">
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voir aussi */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Voir aussi</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/renovation-salle-de-bain-paris', label: 'Rénovation salle de bain Paris' },
              { href: '/carrelage-paris', label: 'Carrelage Paris' },
              { href: '/plomberie-paris', label: 'Plomberie Paris' },
              { href: '/renovation-appartement-haussmannien-paris', label: 'Rénovation appartement haussmannien' },
              { href: '/blog/renovation-salle-de-bain-paris', label: 'Guide rénovation SDB' },
              { href: '/blog/pose-carrelage-salle-de-bain-paris', label: 'Pose carrelage salle de bain' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-xs border border-gray-200 rounded px-3 py-1.5 text-gray-600 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
          Un projet de salle de bain haussmannienne ?
        </h2>
        <p className="text-gray-400 text-sm font-light mb-8">
          Devis gratuit et détaillé sous 48h. Artisan spécialisé appartements anciens à Paris.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-7 py-3.5 rounded font-light text-sm tracking-wide hover:bg-[#c9a030] transition-colors"
          >
            Devis gratuit <ArrowRight size={13} />
          </Link>
          <a
            href="tel:+33611783867"
            className="flex items-center justify-center gap-2 border border-gray-600 text-gray-300 px-7 py-3.5 rounded font-light text-sm tracking-wide hover:border-white hover:text-white transition-colors"
          >
            <Phone size={14} />
            06 11 78 38 67
          </a>
        </div>
      </section>
    </>
  )
}
