import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Carrelage Paris — Pose, Salle de Bain & Cuisine | Artisan Espace Design',
  description:
    'Artisan carreleur à Paris. Pose carrelage salle de bain, cuisine, sol. Grand format, zellige, carreaux de ciment. Prix : 40 à 150 €/m². Devis gratuit 48h.',
  keywords: [
    'carrelage Paris',
    'pose carrelage Paris prix',
    'carreleur Paris',
    'carrelage salle de bain Paris',
    'grand format Paris appartement',
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://espacedesignparis.fr/services' },
    { '@type': 'ListItem', position: 3, name: 'Carrelage Paris', item: 'https://espacedesignparis.fr/carrelage-paris' },
  ],
}

const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Carrelage Paris — Pose Appartement',
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
  priceRange: '40-150 €/m²',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix de la pose de carrelage à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La pose de carrelage à Paris coûte entre 40 et 70 €/m² pour un carrelage sol standard (fourniture + pose incluse). Le grand format (80×80 ou 120×60) revient à 70-120 €/m². La dépose de l\'ancien carrelage ajoute 15 à 30 €/m². Les carreaux de ciment ou zellige atteignent 80-150 €/m².',
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on poser du carrelage dans un appartement parisien avec plancher bois ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, mais cela nécessite de rigidifier le support. Une chape sèche ou liquide est indispensable avant la pose dans les immeubles haussmanniens avec planchers en bois sur solives. Sans cette étape, les carreaux fissureront rapidement. Le coût de cette préparation est de 20 à 40 €/m² supplémentaires.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelles sont les tendances carrelage à Paris en 2025 ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Les tendances les plus demandées dans les appartements parisiens : grand format sans joints apparents (120×60), zellige et carreaux artisanaux dans les cuisines et salles de bain, terrazzo en sol continu, et carreaux métro ou faïence blanche dans les cuisines ouvertes.',
      },
    },
  ],
}

export default function CarrelageParis() {
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
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Carrelage & Revêtements</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Carrelage Paris —<br className="hidden sm:block" /> pose appartement
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Artisan carreleur à Paris. Pose carrelage salle de bain, cuisine, sol. Grand format, zellige, carreaux de ciment. Prix de 40 à 150 €/m². Devis gratuit sous 48h.
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
            Tarifs carrelage Paris
          </h2>
          <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
            {[
              { label: 'Carrelage sol standard', price: '40 – 70 €/m²' },
              { label: 'Carrelage mural', price: '50 – 90 €/m²' },
              { label: 'Grand format 80×80', price: '70 – 120 €/m²' },
              { label: 'Zellige / carreaux de ciment', price: '80 – 150 €/m²' },
              { label: 'Dépose ancien carrelage', price: '15 – 30 €/m²' },
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
          <p className="text-xs text-gray-400 font-light mt-3">Tarifs indicatifs fourniture + pose — devis personnalisé sous 48h.</p>
        </div>
      </section>

      {/* Prestations */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10">
            Nos prestations carrelage
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Ragréage et préparation support',
              'Chape pour planchers bois',
              'Pose grès cérame grand format',
              'Carreaux de ciment et zellige',
              'Carrelage salle de bain intégral',
              'Pose en diagonale ou motif complexe',
              'Étanchéité douche à l\'italienne',
              'Jointoiement époxy haut de gamme',
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
                q: 'Quel est le prix de la pose de carrelage à Paris ?',
                a: 'La pose de carrelage à Paris coûte entre 40 et 70 €/m² pour un carrelage sol standard (fourniture + pose incluse). Le grand format (80×80 ou 120×60) revient à 70-120 €/m². La dépose de l\'ancien carrelage ajoute 15 à 30 €/m². Les carreaux de ciment ou zellige atteignent 80-150 €/m².',
              },
              {
                q: 'Peut-on poser du carrelage dans un appartement parisien avec plancher bois ?',
                a: 'Oui, mais cela nécessite de rigidifier le support. Une chape sèche ou liquide est indispensable avant la pose dans les immeubles haussmanniens avec planchers en bois sur solives. Sans cette étape, les carreaux fissureront rapidement. Le coût de cette préparation est de 20 à 40 €/m² supplémentaires.',
              },
              {
                q: 'Quelles sont les tendances carrelage à Paris en 2025 ?',
                a: 'Les tendances les plus demandées dans les appartements parisiens : grand format sans joints apparents (120×60), zellige et carreaux artisanaux dans les cuisines et salles de bain, terrazzo en sol continu, et carreaux métro ou faïence blanche dans les cuisines ouvertes.',
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
            Votre projet carrelage à Paris
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
