import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: "Rénovation Appartement Haussmannien Paris — Moulures & Parquet | Espace Design",
  description:
    "Rénovation d'appartement haussmannien à Paris. Restauration moulures, parquet, cheminée, modernisation respectueuse. Devis gratuit 48h. Espace Design.",
  keywords: [
    'rénovation haussmannien Paris',
    'appartement haussmannien Paris',
    'rénovation parquet haussmannien',
    'moulures rénovation Paris',
    'rénovation immeuble haussmannien',
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://espacedesignparis.fr/services' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Haussmannien Paris', item: 'https://espacedesignparis.fr/renovation-appartement-haussmannien-paris' },
  ],
}

const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Rénovation Appartement Haussmannien Paris',
  provider: {
    '@type': 'HomeAndConstructionBusiness',
    name: 'Espace Design',
    telephone: '+33611783867',
    url: 'https://espacedesignparis.fr',
  },
  areaServed: { '@type': 'City', name: 'Paris' },
  priceRange: '15000-100000',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Combien coûte la rénovation d'un appartement haussmannien à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La rénovation d'un haussmannien coûte entre 800 et 2 000 €/m² selon les prestations. Un 3 pièces de 70 m² entièrement rénové représente 60 000 à 120 000 €. La restauration des éléments d'époque (moulures, parquet, cheminée) représente un surcoût de 10-20% mais valorise fortement le bien.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment rénover un appartement haussmannien en conservant son cachet ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les clés : conserver ou restaurer le parquet d'origine (ne pas couvrir), remettre en état les moulures (ragréage ou remplacement en staff), préserver les cheminées même si elles ne fonctionnent plus, choisir des teintes compatibles avec l'époque (blancs cassés, gris perle). Moderniser discrètement (électricité, plomberie, isolation phonique).",
      },
    },
    {
      '@type': 'Question',
      name: "Peut-on modifier la structure d'un appartement haussmannien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui avec précaution. Les murs porteurs (généralement en pierre de taille) peuvent être percés après étude d'un ingénieur structure. Certains immeubles haussmanniens classés imposent des contraintes de façade. En copropriété, toute modification des parties communes requiert un vote en assemblée générale.",
      },
    },
  ],
}

const prestations = [
  {
    num: '01',
    title: 'Restauration parquet',
    desc: 'Ponçage, vitrification ou huilage du parquet ancien (point de Hongrie, Versailles, lames larges). Conservation du patrimoine.',
  },
  {
    num: '02',
    title: 'Moulures & corniches',
    desc: 'Rénovation des moulures en plâtre, remplacement en staff ou polyuréthane peint. Rosaces de plafond restaurées.',
  },
  {
    num: '03',
    title: 'Cheminées',
    desc: 'Restoration des manteaux de cheminée (marbre, bois sculpté), adaptation en foyer éthanol ou décoratif.',
  },
  {
    num: '04',
    title: "Menuiserie d'époque",
    desc: "Portes à deux vantaux, parquets cloutés, volets intérieurs — restauration ou reproduction à l'identique.",
  },
  {
    num: '05',
    title: 'Modernisation invisible',
    desc: 'Électricité aux normes cachée dans les moulures, plomberie silencieuse, isolation phonique des planchers.',
  },
  {
    num: '06',
    title: 'Salle de bain & cuisine',
    desc: "Intégration moderne dans le respect du style haussmannien. Zellige, marbre, boiseries — l'élégance parisienne.",
  },
]

export default function RenovationHaussmannienParis() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
      />

      {/* Hero compact */}
      <section className="pt-28 sm:pt-36 pb-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Rénovation Haussmannien</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Rénovation appartement haussmannien Paris
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Restauration moulures, parquet ancien, cheminées, modernisation discrète. Rénovation respectueuse du patrimoine haussmannien parisien. Devis gratuit sous 48h.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+33611783867"
              className="flex items-center justify-center gap-2 bg-[#1C1C1C] text-white px-7 py-3.5 rounded font-light text-sm tracking-wide hover:bg-[#B8960C] transition-colors duration-300"
            >
              <Phone size={15} />
              06 11 78 38 67
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 border border-[#1C1C1C] text-[#1C1C1C] px-7 py-3.5 rounded font-light text-sm tracking-wide hover:bg-[#1C1C1C] hover:text-white transition-colors duration-300"
            >
              Devis gratuit <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* Prestations haussmannien */}
      <section className="py-20 bg-[#F2F2EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10">
            Nos spécialités haussmanniennes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {prestations.map((p) => (
              <div key={p.title} className="bg-white rounded-lg p-6 border border-gray-100">
                <div className="font-display text-3xl font-semibold text-[#D4AF37] mb-3">{p.num}</div>
                <div className="w-6 h-px bg-[#D4AF37]/50 mb-4" />
                <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ce que nous réalisons */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-8">
            Ce que nous réalisons
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Ponçage et vitrification parquet ancien',
              'Restauration moulures et corniches',
              'Rénovation cheminées et manteaux',
              'Réfection menuiseries intérieures',
              'Mise aux normes électricité discrète',
              'Salle de bain style haussmannien',
              'Cuisine intégrée respectueuse du style',
              'Isolation phonique planchers et murs',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-gray-600 font-light">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-8">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Combien coûte la rénovation d'un appartement haussmannien à Paris ?",
                a: "La rénovation d'un haussmannien coûte entre 800 et 2 000 €/m² selon les prestations. Un 3 pièces de 70 m² entièrement rénové représente 60 000 à 120 000 €. La restauration des éléments d'époque (moulures, parquet, cheminée) représente un surcoût de 10-20% mais valorise fortement le bien.",
              },
              {
                q: "Comment rénover un appartement haussmannien en conservant son cachet ?",
                a: "Les clés : conserver ou restaurer le parquet d'origine (ne pas couvrir), remettre en état les moulures (ragréage ou remplacement en staff), préserver les cheminées même si elles ne fonctionnent plus, choisir des teintes compatibles avec l'époque (blancs cassés, gris perle). Moderniser discrètement (électricité, plomberie, isolation phonique).",
              },
              {
                q: "Peut-on modifier la structure d'un appartement haussmannien ?",
                a: "Oui avec précaution. Les murs porteurs (généralement en pierre de taille) peuvent être percés après étude d'un ingénieur structure. Certains immeubles haussmanniens classés imposent des contraintes de façade. En copropriété, toute modification des parties communes requiert un vote en assemblée générale.",
              },
            ].map((item) => (
              <details key={item.q} className="bg-white border border-gray-100 rounded-lg p-5 group">
                <summary className="font-display text-base font-semibold text-[#1C1C1C] cursor-pointer list-none flex justify-between items-center">
                  {item.q}
                  <span className="text-[#D4AF37] text-lg ml-4 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-gray-500 text-sm leading-relaxed font-light">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Zones */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Zones d'intervention</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: '/renovation-paris-6e', label: 'Paris 6e' },
              { href: '/renovation-paris-7e', label: 'Paris 7e' },
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-paris-17e', label: 'Paris 17e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
              { href: '/renovation-versailles', label: 'Versailles' },
              { href: '/renovation-saint-germain-en-laye', label: 'Saint-Germain-en-Laye' },
              { href: '/renovation-le-vesinet', label: 'Le Vésinet' },
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

      {/* Voir aussi */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Voir aussi</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/blog/renovation-appartement-haussmannien-paris', label: 'Guide haussmannien Paris' },
              { href: '/parquet-paris', label: 'Parquet Paris' },
              { href: '/platrererie-paris', label: 'Plâtrerie & corniches' },
              { href: '/decoration-interieure-paris', label: 'Décoration intérieure Paris' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-xs border border-gray-200 rounded px-3 py-1.5 text-gray-600 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1C1C1C]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
            Votre haussmannien rénové avec soin
          </h2>
          <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Parquet, moulures, cheminées, modernisation discrète — décrivez votre projet et recevez un devis gratuit sous 48h. Déplacement sans engagement dans tout Paris.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-7 py-3.5 rounded font-light text-sm tracking-wide hover:bg-[#c9a030] transition-colors duration-300"
            >
              Devis gratuit <ArrowRight size={13} />
            </Link>
            <a
              href="tel:+33611783867"
              className="flex items-center justify-center gap-2 border border-gray-600 text-gray-300 px-7 py-3.5 rounded font-light text-sm tracking-wide hover:border-white hover:text-white transition-colors duration-300"
            >
              <Phone size={14} />
              06 11 78 38 67
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
