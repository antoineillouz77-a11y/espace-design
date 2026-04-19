import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Menuiserie Sur Mesure Paris — Placards, Dressings & Bibliothèques | Espace Design',
  description:
    'Artisan menuisier à Paris. Placards et dressings sur mesure, bibliothèques, portes coulissantes, verrières. Prix dès 800 €/ml. Devis gratuit 48h.',
  keywords: [
    'menuiserie sur mesure Paris',
    'placard sur mesure Paris',
    'dressing sur mesure Paris prix',
    'bibliothèque sur mesure Paris',
    'menuisier Paris',
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://espacedesignparis.fr/services' },
    { '@type': 'ListItem', position: 3, name: 'Menuiserie Paris', item: 'https://espacedesignparis.fr/menuiserie-paris' },
  ],
}

const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Menuiserie Sur Mesure Paris',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Espace Design',
    telephone: '+33611783867',
    url: 'https://espacedesignparis.fr',
  },
  areaServed: {
    '@type': 'City',
    name: 'Paris',
  },
  priceRange: '800-2500 €/ml',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'un dressing sur mesure à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un dressing sur mesure à Paris coûte entre 800 et 1 200 €/ml en mélaminé standard, 1 200 à 1 800 €/ml en MDF laqué, et 1 800 à 2 500 €/ml en bois massif chêne ou noyer. Ces prix incluent la fabrication en atelier, la livraison et la pose.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quel délai pour une menuiserie sur mesure à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le délai total est de 5 à 10 semaines : 1-3 jours pour la prise de cotes, 1-2 semaines de conception, 3-6 semaines de fabrication en atelier, et 1-5 jours de pose. Prévoyez ce délai dans votre planification de rénovation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle différence entre mélaminé, MDF laqué et bois massif pour un placard ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le mélaminé est le plus économique : solide et disponible en centaines de couleurs. Le MDF laqué offre des finitions premium (mates ou brillantes) pour 30-40% de plus. Le bois massif est le plus noble et durable, idéal pour des bibliothèques ou dressings haut de gamme dans les appartements parisiens de prestige.',
      },
    },
  ],
}

export default function MenuiserieParis() {
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
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Menuiserie & Aménagement</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Menuiserie sur mesure Paris
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Artisan menuisier à Paris. Placards et dressings sur mesure, bibliothèques, portes coulissantes, verrières. Prix dès 800 €/ml. Devis gratuit sous 48h.
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

      {/* Tableau de prix */}
      <section className="py-20 bg-[#F2F2EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10">
            Tarifs menuiserie sur mesure Paris
          </h2>
          <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
            {[
              { label: 'Placard mélaminé', price: '800 – 1 200 €/ml' },
              { label: 'Dressing MDF laqué', price: '1 200 – 1 800 €/ml' },
              { label: 'Bibliothèque bois massif', price: '1 500 – 2 500 €/ml' },
              { label: 'Porte coulissante', price: '600 – 1 500 €/unité' },
              { label: 'Verrière intérieure', price: '1 500 – 4 000 €' },
            ].map((row, i) => (
              <div
                key={row.label}
                className={`flex items-center justify-between px-6 py-4 ${i !== 0 ? 'border-t border-gray-100' : ''}`}
              >
                <span className="text-sm text-gray-700 font-light">{row.label}</span>
                <span className="font-display text-sm font-semibold text-[#B8960C]">{row.price}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 font-light mt-3">Tarifs indicatifs fabrication + pose — devis personnalisé sous 48h.</p>
        </div>
      </section>

      {/* Prestations */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10">
            Nos prestations menuiserie
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Prise de cotes et plan 3D',
              'Placards et dressings intégrés',
              'Bibliothèques du sol au plafond',
              'Portes coulissantes et pivotantes',
              'Verrières et cloisons vitrées',
              'Mezzanines et soppalcos',
              'Têtes de lit et mobilier sur mesure',
              'Cuisine sur mesure',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-gray-600 font-light">
                <CheckCircle size={15} className="text-[#B8960C] flex-shrink-0" />
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
                q: 'Quel est le prix d\'un dressing sur mesure à Paris ?',
                a: 'Un dressing sur mesure à Paris coûte entre 800 et 1 200 €/ml en mélaminé standard, 1 200 à 1 800 €/ml en MDF laqué, et 1 800 à 2 500 €/ml en bois massif chêne ou noyer. Ces prix incluent la fabrication en atelier, la livraison et la pose.',
              },
              {
                q: 'Quel délai pour une menuiserie sur mesure à Paris ?',
                a: 'Le délai total est de 5 à 10 semaines : 1-3 jours pour la prise de cotes, 1-2 semaines de conception, 3-6 semaines de fabrication en atelier, et 1-5 jours de pose. Prévoyez ce délai dans votre planification de rénovation.',
              },
              {
                q: 'Quelle différence entre mélaminé, MDF laqué et bois massif pour un placard ?',
                a: 'Le mélaminé est le plus économique : solide et disponible en centaines de couleurs. Le MDF laqué offre des finitions premium (mates ou brillantes) pour 30-40% de plus. Le bois massif est le plus noble et durable, idéal pour des bibliothèques ou dressings haut de gamme dans les appartements parisiens de prestige.',
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
              { label: 'Paris 6e' },
              { label: 'Paris 7e' },
              { label: 'Paris 8e' },
              { label: 'Paris 15e' },
              { label: 'Paris 16e' },
              { label: 'Paris 17e' },
              { label: 'Neuilly-sur-Seine' },
              { label: 'Boulogne-Billancourt' },
              { label: 'Levallois-Perret' },
              { label: 'Versailles' },
            ].map((z) => (
              <span
                key={z.label}
                className="text-xs text-[#1C1C1C] border border-gray-200 rounded px-3 py-1.5 font-light"
              >
                {z.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1C1C1C]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
            Votre projet menuiserie à Paris
          </h2>
          <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Décrivez votre projet et recevez un devis gratuit et détaillé sous 48h. Déplacement sans engagement dans tout Paris et proche banlieue.
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
