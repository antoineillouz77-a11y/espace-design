import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Électricité Appartement Paris — Mise aux Normes, Prix & Devis | Espace Design',
  description:
    'Électricien rénovation à Paris. Mise aux normes NF C 15-100, tableau électrique, création de circuits. Prix : 3 000 à 12 000 €. Devis gratuit 48h.',
  keywords: [
    'électricité appartement Paris',
    'mise aux normes électriques Paris',
    'électricien Paris rénovation',
    'tableau électrique Paris prix',
    'installation électrique Paris',
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://espacedesignparis.fr/services' },
    { '@type': 'ListItem', position: 3, name: 'Électricité Paris', item: 'https://espacedesignparis.fr/electricite-paris' },
  ],
}

const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Électricité Appartement Paris',
  provider: {
    '@type': 'HomeAndConstructionBusiness',
    name: 'Espace Design',
    telephone: '+33611783867',
    url: 'https://espacedesignparis.fr',
  },
  priceRange: '3000-12000',
  areaServed: {
    '@type': 'City',
    name: 'Paris',
  },
  url: 'https://espacedesignparis.fr/electricite-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix d'une mise aux normes électriques à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La mise aux normes électriques coûte entre 3 000 et 5 000 € pour un studio, 4 000 à 8 000 € pour un 2-3 pièces et 8 000 à 12 000 € pour un grand appartement. Ces prix incluent le nouveau tableau de répartition, les circuits différentiels et la mise aux normes NF C 15-100.",
      },
    },
    {
      '@type': 'Question',
      name: "Mon appartement parisien a-t-il besoin d'une mise aux normes électriques ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui si vous avez un tableau à fusibles au lieu de disjoncteurs, des prises sans terre, des fils sans gaine ou si les disjoncteurs sautent régulièrement. Tout appartement construit avant 1970 est potentiellement hors normes. Un diagnostic électrique (obligatoire à la vente) peut le confirmer.",
      },
    },
    {
      '@type': 'Question',
      name: "Peut-on habiter dans son appartement pendant les travaux d'électricité ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour une réfection partielle (quelques circuits), oui. Pour une mise aux normes complète qui nécessite de refaire toutes les saignées et le tableau, il est préférable de libérer l'appartement 1 à 2 semaines pour éviter l'inconfort et accélérer le chantier.",
      },
    },
  ],
}

export default function ElectriciteParis() {
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

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Électricité & Sécurité</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Électricité appartement Paris
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Électricien rénovation à Paris. Mise aux normes NF C 15-100, remplacement tableau électrique, création de circuits. Devis gratuit sous 48h.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-[#1C1C1C] text-white px-7 py-3.5 rounded font-light text-sm tracking-wide hover:bg-[#B8960C] transition-colors duration-300"
            >
              Devis gratuit <ArrowRight size={13} />
            </Link>
            <a
              href="tel:+33611783867"
              className="flex items-center justify-center gap-2 border border-[#1C1C1C] text-[#1C1C1C] px-7 py-3.5 rounded font-light text-sm tracking-wide hover:bg-[#1C1C1C] hover:text-white transition-colors duration-300"
            >
              <Phone size={15} />
              06 11 78 38 67
            </a>
          </div>
        </div>
      </section>

      {/* Tableau prix */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-8">
            Prix des travaux électriques à Paris
          </h2>
          <div className="overflow-hidden rounded-lg border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#F2F2EE]">
                  <th className="text-left px-5 py-3 font-display font-semibold text-[#1C1C1C]">Prestation</th>
                  <th className="text-right px-5 py-3 font-display font-semibold text-[#1C1C1C]">Prix indicatif</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { label: 'Diagnostic électrique', price: '150 – 300 €' },
                  { label: 'Tableau électrique neuf', price: '800 – 2 000 €' },
                  { label: 'Mise aux normes studio', price: '3 000 – 5 000 €' },
                  { label: 'Mise aux normes 2-3 pièces', price: '4 000 – 8 000 €' },
                  { label: 'Mise aux normes 4 pièces et plus', price: '8 000 – 12 000 €' },
                ].map((row) => (
                  <tr key={row.label} className="bg-white hover:bg-[#FAFAF8] transition-colors">
                    <td className="px-5 py-3.5 text-gray-700 font-light">{row.label}</td>
                    <td className="px-5 py-3.5 text-right text-[#B8960C] font-semibold">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-400 text-xs font-light mt-3">Prix main-d'œuvre + fournitures. Variables selon configuration du logement et état de l'installation existante.</p>
        </div>
      </section>

      {/* Prestations */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-8">
            Nos prestations électricité à Paris
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Diagnostic et bilan électrique",
              "Remplacement tableau disjoncteurs",
              "Création circuits différentiels",
              "Mise à la terre",
              "Pose prises et interrupteurs",
              "Éclairage encastré et spots",
              "Motorisation stores et volets",
              "Domotique et home automation",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 border border-gray-100">
                <CheckCircle size={15} className="text-[#B8960C] flex-shrink-0" />
                <span className="text-gray-700 text-sm font-light">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-8">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Quel est le prix d'une mise aux normes électriques à Paris ?",
                a: "La mise aux normes électriques coûte entre 3 000 et 5 000 € pour un studio, 4 000 à 8 000 € pour un 2-3 pièces et 8 000 à 12 000 € pour un grand appartement. Ces prix incluent le nouveau tableau de répartition, les circuits différentiels et la mise aux normes NF C 15-100.",
              },
              {
                q: "Mon appartement parisien a-t-il besoin d'une mise aux normes électriques ?",
                a: "Oui si vous avez un tableau à fusibles au lieu de disjoncteurs, des prises sans terre, des fils sans gaine ou si les disjoncteurs sautent régulièrement. Tout appartement construit avant 1970 est potentiellement hors normes. Un diagnostic électrique (obligatoire à la vente) peut le confirmer.",
              },
              {
                q: "Peut-on habiter dans son appartement pendant les travaux d'électricité ?",
                a: "Pour une réfection partielle (quelques circuits), oui. Pour une mise aux normes complète qui nécessite de refaire toutes les saignées et le tableau, il est préférable de libérer l'appartement 1 à 2 semaines pour éviter l'inconfort et accélérer le chantier.",
              },
            ].map((item) => (
              <details key={item.q} className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-5 group">
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
              'Paris 6e',
              'Paris 7e',
              'Paris 8e',
              'Paris 15e',
              'Paris 16e',
              'Paris 17e',
              'Neuilly-sur-Seine',
              'Boulogne-Billancourt',
              'Levallois-Perret',
              'Versailles',
            ].map((z) => (
              <span
                key={z}
                className="text-xs text-[#1C1C1C] border border-gray-200 rounded px-3 py-1.5 font-light"
              >
                {z}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1C1C1C]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
            Un projet électricité à Paris ?
          </h2>
          <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Décrivez votre projet et recevez un devis gratuit et détaillé sous 48h. Déplacement sans engagement.
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
