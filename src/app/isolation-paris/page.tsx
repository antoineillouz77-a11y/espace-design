import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Isolation Paris — Thermique, Acoustique & Prix | Artisan Espace Design',
  description:
    'Artisan isolation à Paris. Isolation thermique (murs, combles) et acoustique (planchers, cloisons). MaPrimeRénov\' accepté. Devis gratuit 48h.',
  keywords: [
    'isolation Paris',
    'isolation thermique Paris',
    'isolation acoustique Paris',
    'isolation appartement Paris prix',
    'artisan isolation Paris',
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://espacedesignparis.fr/services' },
    { '@type': 'ListItem', position: 3, name: 'Isolation Paris', item: 'https://espacedesignparis.fr/isolation-paris' },
  ],
}

const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Isolation Thermique et Acoustique Paris',
  provider: {
    '@type': 'HomeAndConstructionBusiness',
    name: 'Espace Design',
    telephone: '+33611783867',
    url: 'https://espacedesignparis.fr',
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '47', bestRating: '5', worstRating: '1' },
  },
  areaServed: { '@type': 'City', name: 'Paris' },
  priceRange: '30-150 €/m²',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix d'une isolation à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les prix d'isolation à Paris varient selon le type : isolation des murs par l'intérieur (ITI) 50-100 €/m², isolation acoustique de plancher 60-120 €/m², isolation combles 15-30 €/m², isolation acoustique de cloison 80-150 €/m². Ces prix incluent fourniture et pose.",
      },
    },
    {
      '@type': 'Question',
      name: "Peut-on bénéficier d'aides pour l'isolation à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui. MaPrimeRénov' finance jusqu'à 75 €/m² pour l'isolation des murs selon vos revenus. Les CEE (Certificats d'Économies d'Énergie) sont cumulables. La TVA est réduite à 5,5% pour les travaux d'isolation. Un artisan RGE est nécessaire pour bénéficier des aides.",
      },
    },
    {
      '@type': 'Question',
      name: "L'isolation par l'extérieur est-elle possible à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Non. Les règles d'urbanisme parisien et les Architectes des Bâtiments de France interdisent généralement l'isolation par l'extérieur (ITE). La seule solution pour les murs est l'isolation par l'intérieur (ITI), qui consiste à poser une contre-cloison isolante à l'intérieur, au prix de 8-12 cm de surface habitable.",
      },
    },
  ],
}

export default function IsolationParis() {
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
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Isolation & Énergie</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Isolation Paris
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Isolation thermique et acoustique à Paris. Murs par l'intérieur, combles, planchers, cloisons. MaPrimeRénov' accepté. Devis gratuit sous 48h.
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

      {/* Tableau prix */}
      <section className="py-20 bg-[#F2F2EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10">
            Prix indicatifs isolation à Paris
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg border border-gray-100 text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-6 py-4 font-display font-semibold text-[#1C1C1C]">Type d'isolation</th>
                  <th className="text-right px-6 py-4 font-display font-semibold text-[#1C1C1C]">Prix</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  { type: 'Isolation murs par l\'intérieur (ITI)', prix: '50-100 €/m²' },
                  { type: 'Isolation acoustique de plancher', prix: '60-120 €/m²' },
                  { type: 'Isolation combles soufflés', prix: '15-30 €/m²' },
                  { type: 'Isolation acoustique de cloison', prix: '80-150 €/m²' },
                ].map((row) => (
                  <tr key={row.type}>
                    <td className="px-6 py-4 text-gray-600 font-light">{row.type}</td>
                    <td className="px-6 py-4 text-right font-display font-semibold text-[#B8960C]">{row.prix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 font-light mt-3">Prix indicatifs TTC fourniture et pose. Devis personnalisé sous 48h.</p>
        </div>
      </section>

      {/* Prestations */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-8">
            Nos prestations isolation
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Isolation murs ITI',
              'Isolation combles soufflés',
              'Isolation acoustique planchers',
              'Isolation cloisons séparatives',
              'Remplacement fenêtres double vitrage',
              'VMC double flux',
              'Bilan thermique préalable',
              'Montage dossier MaPrimeRénov\'',
            ].map((p) => (
              <div key={p} className="flex items-center gap-2 text-sm text-gray-600 font-light">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0" />
                {p}
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
                q: "Quel est le prix d'une isolation à Paris ?",
                a: "Les prix d'isolation à Paris varient selon le type : isolation des murs par l'intérieur (ITI) 50-100 €/m², isolation acoustique de plancher 60-120 €/m², isolation combles 15-30 €/m², isolation acoustique de cloison 80-150 €/m². Ces prix incluent fourniture et pose.",
              },
              {
                q: "Peut-on bénéficier d'aides pour l'isolation à Paris ?",
                a: "Oui. MaPrimeRénov' finance jusqu'à 75 €/m² pour l'isolation des murs selon vos revenus. Les CEE (Certificats d'Économies d'Énergie) sont cumulables. La TVA est réduite à 5,5% pour les travaux d'isolation. Un artisan RGE est nécessaire pour bénéficier des aides.",
              },
              {
                q: "L'isolation par l'extérieur est-elle possible à Paris ?",
                a: "Non. Les règles d'urbanisme parisien et les Architectes des Bâtiments de France interdisent généralement l'isolation par l'extérieur (ITE). La seule solution pour les murs est l'isolation par l'intérieur (ITI), qui consiste à poser une contre-cloison isolante à l'intérieur, au prix de 8-12 cm de surface habitable.",
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
              { href: '/renovation-paris-15e', label: 'Paris 15e' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-paris-17e', label: 'Paris 17e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
              { href: '/renovation-levallois-perret', label: 'Levallois-Perret' },
              { href: '/renovation-versailles', label: 'Versailles' },
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
      <section className="py-20 bg-[#1C1C1C]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
            Votre projet d'isolation à Paris
          </h2>
          <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Décrivez votre projet et recevez un devis gratuit et détaillé sous 48h. MaPrimeRénov' pris en charge. Déplacement sans engagement.
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
