import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: "Rénovation Saint-Maur-des-Fossés (94100) — Artisan Rénovateur | Espace Design",
  description:
    "Artisan rénovateur à Saint-Maur-des-Fossés (94100) : belles maisons bourgeoises, villas bords de Marne, pavillons résidentiels aisés. Rénovation 800-2500€/m². Devis gratuit 48h.",
  keywords: [
    'rénovation appartement Saint-Maur-des-Fossés',
    'artisan rénovation Saint-Maur-des-Fossés',
    'rénovation maison Saint-Maur-des-Fossés',
    'renovation Saint-Maur 94100',
    'entreprise renovation Saint-Maur Val-de-Marne',
    'artisan Saint-Maur-des-Fossés 94',
    'rénovation villa bourgeoise Saint-Maur-des-Fossés',
  ],
}

const schemaLocal = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Espace Design',
  description: "Artisan rénovateur et décorateur intérieur à Saint-Maur-des-Fossés.",
  telephone: '+33611783867',
  url: 'https://espacedesignparis.fr/renovation-saint-maur-des-fosses',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Saint-Maur-des-Fossés',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Saint-Maur-des-Fossés',
    postalCode: '94100',
    addressCountry: 'FR',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '47',
  },
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix d'une rénovation à Saint-Maur-des-Fossés ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le coût d'une rénovation à Saint-Maur-des-Fossés varie entre 800 et 1 500 €/m² pour une rénovation standard. Pour les maisons bourgeoises et villas bords de Marne, comptez 1 500 à 2 500 €/m². Devis gratuit sous 48h.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel artisan contacter pour rénover une maison bourgeoise à Saint-Maur-des-Fossés ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Espace Design intervient régulièrement à Saint-Maur-des-Fossés pour des rénovations de maisons bourgeoises, villas et pavillons résidentiels. Artisan assuré décennale, 15 ans d'expérience, devis gratuit sous 48h.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment rénover une belle maison à Saint-Maur-des-Fossés ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour les maisons de caractère de Saint-Maur-des-Fossés, nous valorisons les éléments architecturaux d'origine tout en modernisant le confort. Isolation, cuisine, salle de bain, décoration intérieure sur mesure.",
      },
    },
    {
      '@type': 'Question',
      name: "Avez-vous une assurance décennale pour les travaux à Saint-Maur-des-Fossés ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, Espace Design est couvert par une assurance décennale et une RC professionnelle. Vos travaux à Saint-Maur-des-Fossés sont garantis 10 ans après la livraison.",
      },
    },
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Rénovation Val-de-Marne', item: 'https://espacedesignparis.fr/renovation-val-de-marne' },
    { '@type': 'ListItem', position: 3, name: 'Saint-Maur-des-Fossés', item: 'https://espacedesignparis.fr/renovation-saint-maur-des-fosses' },
  ],
}

export default function RenovationSaintMaurDesFosses() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocal) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Saint-Maur-des-Fossés — 94100</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Rénovation maison<br className="hidden sm:block" /> Saint-Maur-des-Fossés
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Artisan rénovateur à Saint-Maur-des-Fossés (94100) : belles maisons bourgeoises, villas bords de Marne, pavillons résidentiels dans l'une des communes les plus aisées du Val-de-Marne. Rénovation complète et finitions haut de gamme. Devis gratuit sous 48h.
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

      {/* Services */}
      <section className="py-20 bg-[#F2F2EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10">
            Nos services à Saint-Maur-des-Fossés
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Maisons bourgeoises',
                desc: "Rénovation et valorisation des belles maisons bourgeoises de Saint-Maur-des-Fossés. Restauration des éléments architecturaux d'époque, modernisation du confort thermique et sanitaire.",
              },
              {
                num: '02',
                title: 'Villas bords de Marne',
                desc: "Rénovation des villas et propriétés riveraines à Saint-Maur : extension, aménagement des espaces de vie, terrasses, salles de bain premium. Un savoir-faire adapté aux biens de caractère.",
              },
              {
                num: '03',
                title: 'Décoration intérieure haut de gamme',
                desc: "Parquet en chêne massif, carrelage grand format, peinture à la chaux, boiseries sur mesure. Des finitions raffinées qui correspondent aux exigences des propriétaires saint-mauriens.",
              },
            ].map((s) => (
              <div key={s.title} className="bg-white rounded-lg p-6 border border-gray-100">
                <div className="font-display text-3xl font-semibold text-[#D4AF37] mb-3">{s.num}</div>
                <div className="w-6 h-px bg-[#D4AF37]/50 mb-4" />
                <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing table */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-8">
            Prix rénovation à Saint-Maur-des-Fossés
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border border-gray-100 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#F2F2EE]">
                  <th className="px-5 py-3 font-semibold text-[#1C1C1C] font-display">Type de travaux</th>
                  <th className="px-5 py-3 font-semibold text-[#1C1C1C] font-display">Prix indicatif</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ['Peinture maison / appartement', '30 - 70 €/m²'],
                  ['Rénovation salle de bain', '4 000 - 15 000 €'],
                  ['Rénovation cuisine', '5 000 - 20 000 €'],
                  ['Parquet (pose + fourniture)', '50 - 110 €/m²'],
                  ['Rénovation complète', '800 - 1 500 €/m²'],
                  ['Rénovation maison bourgeoise', '1 500 - 2 500 €/m²'],
                ].map(([label, price]) => (
                  <tr key={label} className="bg-white hover:bg-[#FAFAF8] transition-colors">
                    <td className="px-5 py-3 text-gray-700 font-light">{label}</td>
                    <td className="px-5 py-3 text-[#B8960C] font-semibold">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-400 text-xs font-light mt-3">Tarifs indicatifs — devis gratuit personnalisé sous 48h.</p>
        </div>
      </section>

      {/* Client quote */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <blockquote className="border-l-2 border-[#D4AF37] pl-6">
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light italic mb-4">
              "Espace Design a rénové notre maison bourgeoise à Saint-Maur-des-Fossés de fond en comble. La qualité des finitions est irréprochable, les délais ont été respectés. Un artisan de confiance que nous recommandons sans hésiter."
            </p>
            <cite className="text-[#B8960C] text-xs font-light uppercase tracking-widest not-italic">
              Alain & Nathalie B. — Saint-Maur-des-Fossés, 94100
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Checkmarks */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              'Devis gratuit sous 48h',
              'Assurance décennale',
              "15+ ans d'expérience",
              'Respect des délais',
              'Finitions haut de gamme',
              'Un seul interlocuteur',
            ].map((a) => (
              <div key={a} className="flex items-center gap-2 text-sm text-gray-600 font-light">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0" />
                {a}
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
                q: "Quel est le prix d'une rénovation à Saint-Maur-des-Fossés ?",
                a: "Le coût d'une rénovation à Saint-Maur-des-Fossés varie entre 800 et 1 500 €/m² pour une rénovation standard. Pour les maisons bourgeoises et villas bords de Marne, comptez 1 500 à 2 500 €/m².",
              },
              {
                q: "Quel artisan contacter pour rénover une maison bourgeoise à Saint-Maur-des-Fossés ?",
                a: "Espace Design intervient régulièrement à Saint-Maur-des-Fossés pour des rénovations de maisons bourgeoises et villas. Assuré décennale, devis gratuit sous 48h, un seul interlocuteur du début à la fin.",
              },
              {
                q: "Comment rénover une belle maison à Saint-Maur-des-Fossés ?",
                a: "Pour les maisons de caractère de Saint-Maur, nous préservons les éléments architecturaux d'origine tout en modernisant le confort. Isolation, cuisine, salle de bain, décoration intérieure sur mesure selon votre budget.",
              },
              {
                q: "Avez-vous une assurance décennale pour les travaux à Saint-Maur-des-Fossés ?",
                a: "Oui, Espace Design est couvert par une assurance décennale et une RC professionnelle. Vos travaux à Saint-Maur-des-Fossés sont garantis 10 ans après la livraison.",
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

      {/* Nearby cities */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Zones voisines</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: '/renovation-val-de-marne', label: 'Val-de-Marne (94)' },
              { href: '/renovation-joinville-le-pont', label: 'Joinville-le-Pont' },
              { href: '/renovation-nogent-sur-marne', label: 'Nogent-sur-Marne' },
              { href: '/renovation-creteil', label: 'Créteil' },
              { href: '/renovation-vincennes', label: 'Vincennes' },
              { href: '/renovation-appartement-paris', label: 'Paris' },
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

      {/* Service links */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Nos services</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/renovation-salle-de-bain-paris', label: 'Salle de bain' },
              { href: '/renovation-cuisine-paris', label: 'Cuisine' },
              { href: '/peinture-paris', label: 'Peinture' },
              { href: '/parquet-paris', label: 'Parquet' },
              { href: '/carrelage-paris', label: 'Carrelage' },
              { href: '/electricite-paris', label: 'Électricité' },
              { href: '/plomberie-paris', label: 'Plomberie' },
              { href: '/menuiserie-paris', label: 'Menuiserie' },
              { href: '/isolation-paris', label: 'Isolation' },
              { href: '/platrererie-paris', label: 'Plâtrerie' },
              { href: '/decoration-interieure-paris', label: 'Décoration' },
              { href: '/amenagement-interieur-paris', label: 'Aménagement' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-xs border border-gray-200 rounded px-3 py-1.5 text-gray-600 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Guides utiles */}
      <section className="py-10 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Guides utiles</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/blog/budget-renovation-paris-2025', label: 'Budget rénovation 2025' },
              { href: '/blog/renovation-salle-de-bain-prix-paris', label: 'Prix salle de bain Paris' },
              { href: '/blog/renovation-avant-vente-paris', label: 'Rénovation avant vente' },
              { href: '/blog/parquet-flottant-vs-colle-paris', label: 'Parquet flottant vs collé' },
              { href: '/blog/travaux-electricite-appartement-paris', label: 'Électricité appartement' },
              { href: '/blog/renovation-appartement-investissement-paris', label: 'Rénovation investissement' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-xs border border-gray-200 rounded px-3 py-1.5 text-gray-600 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="py-20 bg-[#1C1C1C]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
            Votre projet à Saint-Maur-des-Fossés
          </h2>
          <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Décrivez votre projet et recevez un devis gratuit et détaillé sous 48h. Déplacement sans engagement dans toute la commune de Saint-Maur-des-Fossés et le Val-de-Marne.
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
