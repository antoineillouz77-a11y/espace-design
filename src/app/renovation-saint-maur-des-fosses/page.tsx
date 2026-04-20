import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Appartement Saint-Maur-des-Fossés — Artisan & Devis | Espace Design',
  description:
    'Artisan rénovateur à Saint-Maur-des-Fossés (94100). Rénovation complète, maison, salle de bain, cuisine. Devis gratuit 48h. Espace Design.',
  keywords: [
    'rénovation appartement Saint-Maur-des-Fossés',
    'artisan rénovation Saint-Maur 94',
    'renovation Saint-Maur 94100',
    'artisan Saint-Maur Val-de-Marne',
  ],
}

const schemaLocal = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Espace Design',
  description: 'Artisan rénovateur à Saint-Maur-des-Fossés (94100). Rénovation complète, maison, salle de bain, cuisine.',
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
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Rénovation Paris', item: 'https://espacedesignparis.fr/renovation-appartement-paris' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Saint-Maur-des-Fossés', item: 'https://espacedesignparis.fr/renovation-saint-maur-des-fosses' },
  ],
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation à Saint-Maur-des-Fossés ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le coût d\'une rénovation à Saint-Maur-des-Fossés varie entre 800 et 1 600 €/m² pour une rénovation standard. Saint-Maur est l\'une des communes les plus résidentielles et verdoyantes du Val-de-Marne, avec beaucoup de maisons et pavillons à rénover. Devis gratuit sous 48h.',
      },
    },
    {
      '@type': 'Question',
      name: 'Espace Design intervient-il à Saint-Maur-des-Fossés ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui. Nous intervenons à Saint-Maur-des-Fossés (Adamville, La Varenne, Chennevières) et dans les communes voisines : Nogent, Maisons-Alfort, Joinville. Déplacement gratuit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quels travaux réalisez-vous à Saint-Maur ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rénovation complète maison ou appartement, salle de bain, cuisine, peinture, parquet, carrelage, électricité, plomberie, isolation, menuiserie sur mesure.',
      },
    },
    {
      '@type': 'Question',
      name: 'Avez-vous une assurance décennale ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, assurance décennale et RC professionnelle. Travaux garantis 10 ans.',
      },
    },
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

      {/* Hero compact */}
      <section className="pt-28 sm:pt-36 pb-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Val-de-Marne — Saint-Maur-des-Fossés 94</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Rénovation Saint-Maur-des-Fossés
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Artisan rénovateur à Saint-Maur-des-Fossés. Rénovation complète maison ou appartement, salle de bain, cuisine. Devis gratuit sous 48h.
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
              { num: '01', title: 'Rénovation complète', desc: 'Du sol au plafond : gros œuvre, électricité, plomberie, cloisons, finitions. Un seul artisan pour maison ou appartement.' },
              { num: '02', title: 'Salle de bain & cuisine', desc: 'Conception et rénovation complète de votre salle de bain et cuisine. Carrelage, plomberie, menuiserie, électricité.' },
              { num: '03', title: 'Sur-mesure & isolation', desc: 'Menuiserie, parquet, isolation, peinture décorative. Les détails qui transforment un intérieur ordinaire en espace exceptionnel.' },
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

      {/* Atouts */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              'Devis gratuit sous 48h',
              'Assurance décennale',
              '15+ ans d\'expérience',
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
                q: 'Quel est le prix d\'une rénovation à Saint-Maur-des-Fossés ?',
                a: 'Le coût d\'une rénovation à Saint-Maur-des-Fossés varie entre 800 et 1 600 €/m² pour une rénovation standard. Saint-Maur est l\'une des communes les plus résidentielles et verdoyantes du Val-de-Marne, avec beaucoup de maisons et pavillons à rénover. Devis gratuit sous 48h.',
              },
              {
                q: 'Espace Design intervient-il à Saint-Maur-des-Fossés ?',
                a: 'Oui. Nous intervenons à Saint-Maur-des-Fossés (Adamville, La Varenne, Chennevières) et dans les communes voisines : Nogent, Maisons-Alfort, Joinville. Déplacement gratuit.',
              },
              {
                q: 'Quels travaux réalisez-vous à Saint-Maur ?',
                a: 'Rénovation complète maison ou appartement, salle de bain, cuisine, peinture, parquet, carrelage, électricité, plomberie, isolation, menuiserie sur mesure.',
              },
              {
                q: 'Avez-vous une assurance décennale ?',
                a: 'Oui, assurance décennale et RC professionnelle. Travaux garantis 10 ans.',
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

      {/* Zones voisines */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Zones voisines</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: '/renovation-nogent-sur-marne', label: 'Nogent-sur-Marne' },
              { href: '/renovation-maisons-alfort', label: 'Maisons-Alfort' },
              { href: '/renovation-vincennes', label: 'Vincennes' },
              { href: '/renovation-joinville-le-pont', label: 'Joinville-le-Pont' },
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

      {/* CTA */}
      <section className="py-20 bg-[#1C1C1C]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
            Votre projet à Saint-Maur-des-Fossés
          </h2>
          <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Décrivez votre projet et recevez un devis gratuit et détaillé sous 48h. Déplacement sans engagement à Saint-Maur-des-Fossés et dans tout le Val-de-Marne.
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
