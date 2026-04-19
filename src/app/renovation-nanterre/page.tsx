import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Appartement Nanterre — Artisan Rénovateur & Devis | Espace Design',
  description:
    'Artisan rénovateur à Nanterre (92000). Rénovation complète, salle de bain, cuisine, décoration haut de gamme. Devis gratuit 48h. Espace Design.',
  keywords: [
    'rénovation appartement Nanterre',
    'artisan rénovation Nanterre 92',
    'entreprise rénovation Nanterre',
    'renovation Nanterre 92000',
    'artisan Nanterre',
  ],
}

const schemaLocal = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Espace Design',
  description: 'Artisan rénovateur à Nanterre (92000). Rénovation complète, salle de bain, cuisine, décoration haut de gamme.',
  telephone: '+33611783867',
  url: 'https://espacedesignparis.fr/renovation-nanterre',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Nanterre',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nanterre',
    postalCode: '92000',
    addressCountry: 'FR',
  },
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Rénovation Paris', item: 'https://espacedesignparis.fr/renovation-appartement-paris' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Nanterre', item: 'https://espacedesignparis.fr/renovation-nanterre' },
  ],
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation à Nanterre ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le coût d\'une rénovation à Nanterre varie entre 700 et 1 300 €/m² pour une rénovation standard, et jusqu\'à 2 000 €/m² pour des finitions haut de gamme. Devis gratuit personnalisé sous 48h.',
      },
    },
    {
      '@type': 'Question',
      name: 'Espace Design intervient-il à Nanterre ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, nous intervenons à Nanterre et dans toute la zone Hauts-de-Seine. Puteaux, Courbevoie, Rueil-Malmaison, La Défense — notre équipe se déplace sans frais de déplacement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quels travaux réalisez-vous à Nanterre ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rénovation complète, cuisine, salle de bain, peinture, parquet, carrelage, électricité, plomberie, menuiserie sur mesure. Un seul interlocuteur du début à la fin.',
      },
    },
    {
      '@type': 'Question',
      name: 'Avez-vous une assurance décennale ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, Espace Design est couvert par une assurance décennale et une RC professionnelle. Vos travaux sont garantis 10 ans après livraison.',
      },
    },
  ],
}

export default function RenovationNanterre() {
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
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Hauts-de-Seine — Nanterre 92</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Rénovation appartement<br className="hidden sm:block" /> Nanterre
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Artisan rénovateur à Nanterre et dans les Hauts-de-Seine. Rénovation complète, salle de bain, cuisine, finitions haut de gamme. Devis gratuit sous 48h.
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
            Nos services à Nanterre
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Rénovation complète', desc: 'Du sol au plafond à Nanterre : gros œuvre, électricité, plomberie, cloisons, finitions. Un seul artisan, un seul chantier.' },
              { num: '02', title: 'Salle de bain & cuisine', desc: 'Conception et réalisation de salles de bain et cuisines adaptées à votre budget. Carrelage, faïence, robinetterie, aménagement sur mesure.' },
              { num: '03', title: 'Finitions sur mesure', desc: 'Parquet, peinture, menuiseries, carrelage. Un savoir-faire artisanal au service de votre appartement à Nanterre.' },
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
                q: 'Quel est le prix d\'une rénovation à Nanterre ?',
                a: 'Le coût d\'une rénovation à Nanterre varie entre 700 et 1 300 €/m² pour une rénovation standard, et jusqu\'à 2 000 €/m² pour des finitions haut de gamme. Devis gratuit sous 48h.',
              },
              {
                q: 'Espace Design intervient-il à Nanterre ?',
                a: 'Oui, nous intervenons à Nanterre et dans toute la zone Hauts-de-Seine. Puteaux, Courbevoie, Rueil-Malmaison, La Défense — notre équipe se déplace sans frais de déplacement.',
              },
              {
                q: 'Quels travaux réalisez-vous à Nanterre ?',
                a: 'Rénovation complète, cuisine, salle de bain, peinture, parquet, carrelage, électricité, plomberie, menuiserie sur mesure. Un seul interlocuteur du début à la fin.',
              },
              {
                q: 'Avez-vous une assurance décennale ?',
                a: 'Oui, Espace Design est couvert par une assurance décennale et une RC professionnelle. Vos travaux sont garantis 10 ans après livraison.',
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
              { href: '/renovation-puteaux', label: 'Puteaux' },
              { href: '/renovation-courbevoie', label: 'Courbevoie' },
              { href: '/renovation-rueil-malmaison', label: 'Rueil-Malmaison' },
              { href: '/renovation-paris-17e', label: 'Paris 17e' },
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
            Votre projet à Nanterre
          </h2>
          <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Décrivez votre projet et recevez un devis gratuit et détaillé sous 48h. Déplacement sans engagement à Nanterre et dans tout le secteur des Hauts-de-Seine.
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
