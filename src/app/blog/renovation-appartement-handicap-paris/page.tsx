import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Appartement PMR Paris 2025 — Accessibilité Handicap | Espace Design',
  description:
    "Adapter un appartement aux normes PMR à Paris : douche plain-pied, barres d'appui, largeurs de passage. Tarifs 2025 et aides financières. Devis gratuit sous 48h.",
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Rénovation appartement handicap Paris',
      item: 'https://espacedesignparis.fr/blog/renovation-appartement-handicap-paris',
    },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation appartement accessibilité PMR à Paris en 2025',
  description:
    "Adapter un appartement aux normes PMR à Paris : douche plain-pied, barres d'appui, largeurs de passage, aides financières.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
    logo: { '@type': 'ImageObject', url: 'https://espacedesignparis.fr/images/hero.jpg' },
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-handicap-paris',
  datePublished: '2025-02-10',
  dateModified: '2025-04-19',
  inLanguage: 'fr-FR',
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quelles aides financières pour adapter un appartement PMR à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Plusieurs aides sont cumulables : MaPrimeAdapt' (jusqu'à 70 % des travaux), l'aide ANAH, la TVA réduite à 5,5 % sur les travaux d'accessibilité, et certaines aides de la ville de Paris. Un artisan RGE ou certifié Handibat est souvent requis pour débloquer ces subventions.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelle est la largeur minimale de porte pour un appartement PMR ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les normes PMR exigent une largeur de passage utile de 77 cm minimum (idéalement 90 cm) pour les portes intérieures. Dans les appartements anciens parisiens aux couloirs étroits, des portes coulissantes ou à galandage sont souvent la solution la plus adaptée.",
      },
    },
    {
      '@type': 'Question',
      name: "Peut-on installer une douche plain-pied dans un appartement haussmannien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, sous conditions. Il faut créer une bonde de sol suffisamment basse et vérifier la hauteur sous dalle pour le caniveau. Dans les immeubles haussmanniens avec planchers en bois, une surélévation partielle peut être nécessaire. Comptez 4 000 à 8 000 € pour une douche plain-pied PMR complète à Paris.",
      },
    },
  ],
}

export default function RenovationAppartementHandicapParis() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">
          Accessibilité &amp; PMR
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
          Rénovation appartement PMR à Paris
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Adapter votre logement au handicap ou au vieillissement : douche plain-pied, barres
          d&apos;appui, élargissement des portes et aides financières pour vos travaux
          d&apos;accessibilité à Paris.
        </p>
      </section>

      {/* Contenu */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">

          {/* Section 1 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Qu&apos;est-ce qu&apos;une rénovation PMR dans un appartement parisien ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              PMR signifie Personnes à Mobilité Réduite. Une rénovation PMR vise à adapter un
              logement existant pour qu&apos;il reste habitable et confortable malgré une mobilité
              réduite, qu&apos;elle soit due à un handicap physique, une maladie ou simplement
              au vieillissement. À Paris, ces travaux sont fréquents dans les appartements anciens
              où les espaces sont souvent exigus, les portes trop étroites et les salles de bain
              non adaptées.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Contrairement aux bâtiments neufs soumis à des obligations légales, les logements
              existants ne sont pas techniquement contraints, mais leurs propriétaires peuvent
              bénéficier d&apos;aides substantielles pour financer ces adaptations. Les travaux les
              plus courants concernent la salle de bain (remplacement de la baignoire par une
              douche plain-pied, pose de barres d&apos;appui), les portes (élargissement, remplacement
              par des systèmes coulissants) et la cuisine (plans de travail abaissés, rangements
              accessibles).
            </p>

            {/* Tableau tarifs */}
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1C1C1C] text-white">
                    <th className="text-left p-3 font-medium">Travaux PMR</th>
                    <th className="text-right p-3 font-medium">Fourchette Paris</th>
                    <th className="text-right p-3 font-medium">Aide possible</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Douche plain-pied PMR', '4 000 – 8 000 €', "Jusqu'à 70 %"],
                    ["Élargissement de porte (par porte)", '800 – 1 800 €', 'TVA 5,5 %'],
                    ['Barres appui + siège douche', '300 – 900 €', 'ANAH'],
                    ['Monte-escalier (privatif)', '3 500 – 6 000 €', "MaPrimeAdapt'"],
                    ['Plan de travail cuisine adapté', '1 500 – 4 000 €', 'TVA 5,5 %'],
                    ['Rampe accès + seuil suppression', '600 – 2 000 €', 'Ville de Paris'],
                  ].map(([item, price, aide], i) => (
                    <tr key={item} className={i % 2 === 0 ? 'bg-[#FAFAF8]' : 'bg-white'}>
                      <td className="p-3 text-gray-700 font-light">{item}</td>
                      <td className="p-3 text-right text-[#1C1C1C] font-medium">{price}</td>
                      <td className="p-3 text-right text-[#B8960C] font-light text-xs">{aide}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les contraintes spécifiques des immeubles parisiens anciens
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Paris concentre un parc immobilier parmi les plus anciens de France : immeubles
              haussmanniens du XIXe siècle, immeubles d&apos;entre-deux-guerres, constructions des
              années 1950-1970. Chacun présente des contraintes particulières pour les travaux
              d&apos;accessibilité. Les planchers en bois des haussmanniens nécessitent des études
              spécifiques avant d&apos;installer une douche plain-pied ; les couloirs de 80 cm
              imposent des solutions sur mesure pour les portes ; les règlements de copropriété
              peuvent encadrer les modifications de parties communes.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Espace Design travaille régulièrement sur ces problématiques dans tous les
              arrondissements parisiens. Notre expérience du bâti ancien nous permet d&apos;anticiper
              les contraintes structurelles et de proposer des solutions adaptées, sans compromettre
              ni l&apos;esthétique du logement, ni les performances techniques des équipements.
            </p>
            <ul className="space-y-3">
              {[
                {
                  title: 'Épaisseur de dalle insuffisante',
                  detail:
                    "Dans les immeubles anciens, la hauteur disponible sous plancher est souvent limitée. Nous étudions systématiquement la faisabilité d'une douche encastrée avant de vous proposer un devis.",
                },
                {
                  title: 'Colonnes montantes et colonnes humides',
                  detail:
                    "Déplacer un point d'eau dans un appartement parisien implique de vérifier la position des colonnes humides. Un déplacement trop important peut nécessiter une autorisation de copropriété.",
                },
                {
                  title: 'Couloirs étroits et surfaces réduites',
                  detail:
                    "Les appartements parisiens sont souvent plus petits que la moyenne nationale. Des solutions comme les portes coulissantes encastrées ou les équipements à commande électrique permettent de gagner de l'espace tout en améliorant l'accessibilité.",
                },
                {
                  title: 'Règlements de copropriété',
                  detail:
                    "Certains travaux (élargissement de baie en façade, modification des parties communes) nécessitent une autorisation de l'assemblée générale. Nous vous accompagnons dans la constitution du dossier.",
                },
                {
                  title: 'Revêtements de sol antidérapants',
                  detail:
                    "Le choix des matériaux est capital en PMR : carrelage antidérapant R11 minimum, béton ciré avec traitement antidérapant, parquet huilé. Nous sélectionnons les revêtements selon les normes en vigueur.",
                },
                {
                  title: 'Éclairage adapté',
                  detail:
                    "Un éclairage suffisant et bien positionné réduit les risques de chute. Détecteurs de mouvement, éclairage de nuit au sol, interrupteurs à hauteur accessible : ces détails font une vraie différence au quotidien.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-3">
                  <CheckCircle size={16} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#1C1C1C] text-sm font-medium">{item.title} : </span>
                    <span className="text-gray-600 text-sm font-light">{item.detail}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3 — FAQ */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-6">
              Questions fréquentes sur la rénovation PMR à Paris
            </h2>
            <div className="space-y-5">
              {schemaFAQ.mainEntity.map((q) => (
                <div key={q.name} className="border-l-2 border-[#D4AF37] pl-5">
                  <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                    {q.name}
                  </h3>
                  <p className="text-gray-600 text-sm font-light leading-relaxed">
                    {q.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Voir aussi */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-xl font-semibold text-[#1C1C1C] mb-6">Voir aussi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain à Paris', tag: 'Salle de bain' },
              { href: '/blog/douche-italienne-paris', title: 'Douche italienne à Paris : prix et pose', tag: 'Douche' },
              { href: '/blog/artisan-agree-paris', title: 'Pourquoi choisir un artisan agréé à Paris', tag: 'Conseils' },
              { href: '/blog/renovation-appartement-ancien-paris', title: 'Rénovation appartement ancien Paris', tag: 'Ancien' },
            ].map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="block p-4 bg-[#FAFAF8] border border-gray-100 rounded-lg hover:border-[#D4AF37]/40 transition-colors group"
              >
                <span className="text-[10px] uppercase tracking-widest text-[#B8960C] font-light">
                  {a.tag}
                </span>
                <p className="text-sm font-medium text-[#1C1C1C] mt-1 group-hover:text-[#B8960C] transition-colors leading-snug">
                  {a.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-xs font-light uppercase tracking-[0.25em] mb-4">
          Devis gratuit
        </p>
        <h2 className="font-display text-3xl font-semibold text-white mb-4">
          Adapter votre appartement à Paris
        </h2>
        <p className="text-gray-400 text-sm font-light max-w-xl mx-auto mb-8">
          Espace Design vous accompagne dans vos travaux d&apos;accessibilité PMR à Paris, de
          l&apos;étude de faisabilité jusqu&apos;aux finitions, en vous aidant à mobiliser toutes les
          aides disponibles.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-7 py-3 text-sm font-medium hover:bg-[#C9A227] transition-colors"
          >
            Demander un devis gratuit
            <ArrowRight size={16} />
          </Link>
          <a
            href="tel:+33142000000"
            className="inline-flex items-center gap-2 border border-white/20 text-white px-7 py-3 text-sm font-light hover:border-[#D4AF37]/60 transition-colors"
          >
            <Phone size={16} />
            Appeler Espace Design
          </a>
        </div>
      </section>
    </>
  )
}
