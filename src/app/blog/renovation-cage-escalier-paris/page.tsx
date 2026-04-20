import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: "Rénovation Cage d'Escalier Paris", item: 'https://espacedesignparis.fr/blog/renovation-cage-escalier-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation Cage d'Escalier Paris : peinture, carrelage & éclairage 2025 | Espace Design",
  description: "Rénover la cage d'escalier d'un immeuble parisien : peinture, carrelage, rampe, éclairage. Démarches copropriété et prix 2025.",
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-cage-escalier-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Faut-il une autorisation en copropriété pour rénover la cage d'escalier ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, la cage d'escalier est une partie commune de l'immeuble. Tout travail de rénovation (peinture, carrelage, rampe, éclairage) nécessite un vote en assemblée générale de copropriété. La majorité requise dépend de la nature des travaux : majorité simple (article 24) pour les travaux d'entretien et de conservation, majorité absolue (article 25) pour les travaux plus importants comme le remplacement du carrelage ou de la rampe. Prévoyez la demande au syndic au moins 21 jours avant l'AG pour l'inscription à l'ordre du jour.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel est le prix pour rénover une cage d'escalier à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le coût de rénovation d'une cage d'escalier parisienne dépend du nombre d'étages, de la surface et des travaux réalisés. Pour un immeuble de 5 étages avec une cage de 60 à 100 m² de surface développée : peinture seule (toutes les parois) : 4 000 à 10 000 € ; carrelage sol des paliers + peinture : 8 000 à 20 000 € ; rénovation complète (sol, murs, plafond, rampe, éclairage LED) : 15 000 à 35 000 €. Ces montants sont répartis entre copropriétaires selon leurs tantièmes de parties communes.",
      },
    },
    {
      '@type': 'Question',
      name: "Combien de temps dure la rénovation d'une cage d'escalier parisienne ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La durée dépend de l'ampleur des travaux et du nombre d'étages. Pour une peinture seule (5 étages) : 3 à 5 jours. Pour un carrelage sol des paliers + peinture : 8 à 15 jours. Pour une rénovation complète : 3 à 5 semaines. Dans un immeuble occupé, le chantier est organisé étage par étage ou palier par palier pour maintenir l'accès permanent aux logements. Les travaux bruyants sont limités aux horaires réglementaires (8h – 20h en semaine en Île-de-France).",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Rénovation Cage d'Escalier Paris : peinture, carrelage & éclairage 2025 | Espace Design",
  description: "Rénover la cage d'escalier d'un immeuble parisien : peinture, carrelage, rampe, éclairage. Démarches copropriété et prix 2025.",
}

export default function ArticleRenovationCageEscalier() {
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
            Rénovation Cage d&apos;Escalier Paris : peinture, carrelage &amp; éclairage 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            La cage d&apos;escalier est l&apos;épine dorsale d&apos;un immeuble parisien : c&apos;est l&apos;espace que tous les résidents empruntent plusieurs fois par jour. Sa rénovation améliore l&apos;image de l&apos;immeuble, la sécurité des passages et valorise l&apos;ensemble des lots. Guide complet 2025 : travaux, démarches en copropriété et prix.
          </p>
        </div>
      </section>

      {/* Section 1 — Pourquoi rénover */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Pourquoi rénover la cage d&apos;escalier : valeur, sécurité et confort
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Une cage d&apos;escalier rénovée n&apos;est pas un luxe : c&apos;est un investissement collectif qui bénéficie à tous les copropriétaires. Elle améliore la première impression de l&apos;immeuble, facilite la revente des lots et garantit la sécurité des passages quotidiens.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              À Paris, de nombreuses cages d&apos;escalier n&apos;ont pas été rénovées depuis plusieurs décennies. Peinture écaillée, carrelage fissura, rampe rouillée, éclairage défaillant : les signaux d&apos;une rénovation nécessaire sont souvent visibles de tous mais difficiles à faire voter. Voici comment convaincre vos copropriétaires.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Valorisation de tous les lots',
                  detail: "Une cage d'escalier rénovée améliore l'image de l'immeuble et peut influencer positivement le prix de vente des appartements. Les agents immobiliers parisiens confirment qu'un hall et une cage d'escalier en bon état facilitent et accélèrent les transactions.",
                },
                {
                  enjeu: "Sécurité des passages",
                  detail: "Un carrelage fissuré ou décollé, une rampe instable, un éclairage insuffisant ou défaillant sont des sources d'accidents. La copropriété a une obligation légale d'entretien des parties communes en bon état de sécurité. Un accident dans une cage mal entretenue peut engager la responsabilité du syndicat.",
                },
                {
                  enjeu: 'Confort quotidien des résidents',
                  detail: "Passer chaque jour dans un espace propre, bien éclairé et esthétique améliore la qualité de vie. Les familles avec enfants apprécient particulièrement un espace bien entretenu, propre et sécurisé. C'est aussi un argument fort pour attirer de bons locataires dans un immeuble de rapport.",
                },
                {
                  enjeu: "Conformité réglementaire",
                  detail: "Depuis 2017, les immeubles sont soumis à des obligations renforcées en matière d'accessibilité (rampe d'accès, largeur de passage) et de sécurité incendie (portes coupe-feu, balisage lumineux, désenfumage). La rénovation de la cage est souvent l'occasion de se mettre en conformité.",
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

      {/* Section 2 — Travaux possibles */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Travaux possibles : peinture, carrelage, rampe et éclairage
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La rénovation d&apos;une cage d&apos;escalier parisienne peut être abordée poste par poste ou dans le cadre d&apos;une réfection globale. Voici les principaux travaux, leurs caractéristiques techniques et leurs coûts indicatifs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Enduit et peinture des parois',
                solution: "Décapage ou égrenage de l'ancienne peinture, rebouchage des fissures, application d'une sous-couche puis de deux couches de peinture lessivable résistante aux chocs. Dans les immeubles haussmanniens, mise en valeur des moulures et des corniches par un travail bi-ton.",
                cout: '40 – 80 €/m²',
              },
              {
                titre: 'Carrelage sol des paliers',
                solution: "Dépose de l'existant (carrelage, parquet, moquette), ragréage du support, pose d'un carrelage adapté aux zones de passage intensif (grès cérame antidérapant, pierre naturelle). Format grand carreaux pour les paliers spacieux, format classique 30×30 pour les paliers étroits.",
                cout: '80 – 180 €/m²',
              },
              {
                titre: 'Rampe et garde-corps',
                solution: "Rénovation de la rampe existante (décapage, peinture, remplacement des éléments abîmés) ou remplacement complet par une rampe en métal laqué, inox brossé ou bois massif. Vérification de la conformité aux normes de sécurité (hauteur min. 90 cm, pas de jours supérieurs à 18 cm).",
                cout: '150 – 400 €/mL',
              },
              {
                titre: 'Éclairage LED automatique',
                solution: "Remplacement de tous les luminaires par des LED à détecteur de présence et minuterie. Économies d'énergie immédiates (jusqu'à 80 %), meilleure qualité de lumière, maintenance réduite (durée de vie LED : 15 à 20 ans). Option : éclairage de sécurité balisage lumineux en cas de coupure de courant.",
                cout: '200 – 600 € par niveau',
              },
              {
                titre: 'Digicode et interphone de palier',
                solution: "Installation ou remplacement de la centrale d'interphone de cage avec combinés par appartement, digicode à l'entrée. Les systèmes connectés wifi permettent de recevoir les visiteurs depuis son smartphone. Renforce la sécurité et le confort de tous les résidents.",
                cout: '800 – 3 000 €',
              },
              {
                titre: 'Nettoyage et traitement des murs',
                solution: "Pour les cages d'escalier en pierre (immeubles anciens), nettoyage par projection de sable fin ou nettoyage chimique, traitement anti-salissures et consolidation des joints. Préserve le caractère authentique du bâtiment tout en l'assainissant et en le protégeant.",
                cout: '30 – 70 €/m²',
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

      {/* Section 3 — Contraintes chantier */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibond text-[#1C1C1C] mb-4">
            Contraintes d&apos;accès : chantier en immeuble occupé
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Rénover une cage d&apos;escalier en immeuble habité est l&apos;un des chantiers les plus contraignants techniquement. L&apos;accès aux logements doit être maintenu à tout moment, ce qui impose une organisation rigoureuse étage par étage.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Travail par demi-journées par palier',
                prix: 'Organisation standard',
                detail: "Pour les travaux de peinture : intervention palier par palier avec séchage rapide (peinture acrylique) permettant le passage des résidents après 2 à 3 heures. Les travaux de nuit sont proscrit, les matinées tôt (7h30) peuvent être autorisées avec accord préalable des résidents.",
              },
              {
                type: 'Protection anti-poussière et anti-salissures',
                prix: 'Inclus dans le devis',
                detail: "Pose de bâches de protection sur les paliers et les escaliers, protections sur les portes palières, aspiration continue des poussières lors du ponçage et de la découpe. Nettoyage quotidien des zones de passage en fin de journée.",
              },
              {
                type: "Gestion des nuisances sonores",
                prix: 'Horaires réglementaires',
                detail: "Les travaux bruyants (découpe carrelage, ponçage mécanique) sont limités aux horaires réglementaires : 8h – 20h en semaine, 9h – 12h le samedi. Un planning de chantier détaillé est communiqué aux résidents en amont. En cas de travaux particulièrement bruyants, un courrier préalable d'information est envoyé dans les boîtes.",
              },
              {
                type: 'Accès livraisons et évacuation gravats',
                prix: 'À prévoir',
                detail: "La logistique de livraison des matériaux (carrelage, enduits) et d'évacuation des gravats doit être coordonnée pour éviter l'encombrement du hall et de l'escalier. Benne extérieure si possible, évacuation par sacs étanches avec monte-charge si nécessaire.",
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

      {/* Section 4 — Copropriété et vote */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Démarches en copropriété : de l&apos;AG au chantier
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Voici les étapes clés pour faire voter et réaliser des travaux de rénovation de cage d&apos;escalier dans votre copropriété parisienne.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              "Contacter le syndic pour inscrire les travaux à l'ordre du jour de la prochaine AG (21 jours de délai minimum)",
              "Solliciter au moins 3 devis d'artisans qualifiés à soumettre lors de l'AG pour comparaison",
              "Préparer une note explicative pour les copropriétaires : pourquoi, quels travaux, quel coût par lot",
              "Voter les travaux en AG : majorité article 24 (entretien) ou article 25 (travaux importants)",
              "Signer le devis du prestataire retenu et définir le planning de chantier avec les artisans",
              "Informer les résidents du planning avant démarrage : dates, travaux par étage, accès",
              "Réceptionner les travaux avec le syndic et le représentant du conseil syndical",
              "Vérifier la garantie décennale pour les travaux structurants (rampe, carrelage)",
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

      {/* Voir aussi */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Voir aussi</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/renovation-hall-immeuble-paris', title: 'Rénovation hall immeuble Paris' },
              { href: '/blog/renovation-balcon-terrasse-immeuble-paris', title: 'Rénovation balcon terrasse Paris' },
              { href: '/blog/renovation-escalier-paris', title: 'Rénovation escalier Paris' },
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
          Rénovez la cage d&apos;escalier de votre immeuble parisien
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Devis gratuit pour copropriété. Présentation en AG sur demande. Chantier propre et organisé, immeuble occupé.
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
