import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Plâtrerie Paris — Cloisons, Faux Plafonds & Enduits | Artisan Espace Design',
  description:
    'Artisan plâtrier à Paris. Pose cloisons placo, faux plafonds, enduit lissé, moulures. Prix : 40 à 120 €/m². Devis gratuit 48h.',
  keywords: [
    'plâtrerie Paris',
    'cloison placo Paris prix',
    'faux plafond Paris',
    'enduit lissé Paris',
    'plâtrier Paris appartement',
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://espacedesignparis.fr/services' },
    { '@type': 'ListItem', position: 3, name: 'Plâtrerie Paris', item: 'https://espacedesignparis.fr/platrererie-paris' },
  ],
}

const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Plâtrerie Paris — Cloisons et Enduits',
  provider: {
    '@type': 'HomeAndConstructionBusiness',
    name: 'Espace Design',
    telephone: '+33611783867',
    url: 'https://espacedesignparis.fr',
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '47', bestRating: '5', worstRating: '1' },
  },
  areaServed: { '@type': 'City', name: 'Paris' },
  priceRange: '40-120 €/m²',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix d'une cloison en placo à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La pose d'une cloison en plâtre (placo BA13) à Paris coûte entre 50 et 90 €/m² (fourniture + pose). Pour une cloison avec isolation phonique renforcée, comptez 80 à 120 €/m². Le doublage d'un mur existant revient à 40-70 €/m².",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il une autorisation pour poser ou abattre une cloison à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour les cloisons légères (non porteuses), aucune autorisation n'est requise. Pour les murs porteurs, une étude de structure est obligatoire et une déclaration de travaux peut être nécessaire. En copropriété, vérifiez votre règlement — certains imposent une information à l'assemblée générale.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment savoir si un mur est porteur dans un appartement parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Un artisan ou un bureau d'études peut déterminer si un mur est porteur. Les indices : mur perpendiculaire à la façade, épais (>15 cm), en maçonnerie (brique ou béton) plutôt qu'en carreaux de plâtre. Dans le doute, ne jamais abattre sans vérification — les conséquences peuvent être graves.",
      },
    },
  ],
}

export default function PlatrererieParis() {
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
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Plâtrerie & Cloisons</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Plâtrerie Paris
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Artisan plâtrier à Paris. Cloisons placo, faux plafonds, enduit lissé, moulures haussmanniennes. Prix : 40 à 120 €/m². Devis gratuit sous 48h.
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
            Prix indicatifs plâtrerie à Paris
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg border border-gray-100 text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-6 py-4 font-display font-semibold text-[#1C1C1C]">Prestation</th>
                  <th className="text-right px-6 py-4 font-display font-semibold text-[#1C1C1C]">Prix</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  { type: 'Cloison placo BA13', prix: '50-90 €/m²' },
                  { type: 'Cloison phonique renforcée', prix: '80-120 €/m²' },
                  { type: 'Faux plafond BA13', prix: '40-80 €/m²' },
                  { type: 'Enduit lissé murs', prix: '20-40 €/m²' },
                  { type: 'Moulures haussmanniennes', prix: '60-150 €/ml' },
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
            Nos prestations plâtrerie
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Pose cloisons Placo',
              'Faux plafonds avec spots',
              'Isolation phonique renforcée',
              'Doublage murs extérieurs',
              'Enduit lissé finition',
              'Rebouchage et réparations',
              'Restauration moulures',
              'Création niches et arches',
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
                q: "Quel est le prix d'une cloison en placo à Paris ?",
                a: "La pose d'une cloison en plâtre (placo BA13) à Paris coûte entre 50 et 90 €/m² (fourniture + pose). Pour une cloison avec isolation phonique renforcée, comptez 80 à 120 €/m². Le doublage d'un mur existant revient à 40-70 €/m².",
              },
              {
                q: "Faut-il une autorisation pour poser ou abattre une cloison à Paris ?",
                a: "Pour les cloisons légères (non porteuses), aucune autorisation n'est requise. Pour les murs porteurs, une étude de structure est obligatoire et une déclaration de travaux peut être nécessaire. En copropriété, vérifiez votre règlement — certains imposent une information à l'assemblée générale.",
              },
              {
                q: "Comment savoir si un mur est porteur dans un appartement parisien ?",
                a: "Un artisan ou un bureau d'études peut déterminer si un mur est porteur. Les indices : mur perpendiculaire à la façade, épais (>15 cm), en maçonnerie (brique ou béton) plutôt qu'en carreaux de plâtre. Dans le doute, ne jamais abattre sans vérification — les conséquences peuvent être graves.",
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
            Votre projet de plâtrerie à Paris
          </h2>
          <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Cloisons, faux plafonds, enduits — décrivez votre projet et recevez un devis gratuit sous 48h. Déplacement sans engagement dans tout Paris.
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
