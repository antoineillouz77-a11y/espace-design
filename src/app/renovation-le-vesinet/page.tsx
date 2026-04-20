import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Le Vésinet — Artisan & Devis Gratuit | Espace Design',
  description:
    'Artisan rénovateur au Vésinet (78110) : villas bourgeoises, pavillons, maisons de caractère. Rénovation complète, finitions soignées. Devis gratuit sous 48h.',
  keywords: [
    'rénovation Le Vésinet',
    'artisan Le Vésinet',
    'rénovation villa Le Vésinet',
    'prix rénovation Le Vésinet',
    'entreprise rénovation Le Vésinet 78110',
    'artisan rénovation Yvelines',
  ],
}

const schemaLocal = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Espace Design',
  description: 'Artisan rénovateur au Vésinet, commune haut de gamme des Yvelines.',
  telephone: '+33611783867',
  url: 'https://espacedesignparis.fr/renovation-le-vesinet',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '47',
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Le Vésinet',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Le Vésinet',
    postalCode: '78110',
    addressCountry: 'FR',
  },
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Rénovation Yvelines', item: 'https://espacedesignparis.fr/renovation-yvelines' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Le Vésinet', item: 'https://espacedesignparis.fr/renovation-le-vesinet' },
  ],
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation au Vésinet ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le prix d\'une rénovation au Vésinet varie entre 900 et 1 800 €/m² pour du standard, et jusqu\'à 3 000 €/m² pour du prestige. Le Vésinet est une commune haut de gamme des Yvelines réputée pour ses villas et maisons de caractère. Devis gratuit sous 48h.',
      },
    },
    {
      '@type': 'Question',
      name: 'Avez-vous un artisan disponible au Vésinet ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui. Espace Design intervient régulièrement au Vésinet et dans toutes les Yvelines. Déplacement gratuit et sans engagement, réponse sous 48h.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment rénover une villa au Vésinet ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La rénovation d\'une villa au Vésinet commence par un diagnostic sur place. Nous élaborons ensuite un plan de travaux complet : gros oeuvre, second oeuvre, finitions et décoration. Patrick vous accompagne de A à Z avec un seul interlocuteur.',
      },
    },
  ],
}

export default function RenovationLeVesinet() {
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
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Yvelines — Le Vésinet 78</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Rénovation Le Vésinet
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Artisan rénovateur au Vésinet. Rénovation complète de villas et appartements, salle de bain haut de gamme, cuisine sur mesure. Devis gratuit sous 48h.
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
            Nos services au Vésinet
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Rénovation complète', desc: 'Du sol au plafond : gros œuvre, électricité, plomberie, cloisons, finitions. Un seul artisan, un seul chantier.' },
              { num: '02', title: 'Salle de bain & cuisine', desc: 'Salle de bain haut de gamme et cuisine sur mesure. Conception, pose, plomberie et carrelage inclus.' },
              { num: '03', title: 'Finitions sur mesure', desc: 'Menuiserie, parquet massif, peinture décorative. Les détails qui transforment un intérieur en espace d\'exception.' },
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
                q: 'Quel est le prix d\'une rénovation au Vésinet ?',
                a: 'Le prix d\'une rénovation au Vésinet varie entre 900 et 1 800 €/m² pour du standard, et jusqu\'à 3 000 €/m² pour du prestige. Le Vésinet est une commune haut de gamme des Yvelines réputée pour ses villas et maisons de caractère. Devis gratuit sous 48h.',
              },
              {
                q: 'Espace Design intervient-il au Vésinet ?',
                a: 'Oui. Nous intervenons au Vésinet et dans les communes voisines : Chatou, Saint-Germain-en-Laye, Rueil-Malmaison. Déplacement gratuit et sans engagement.',
              },
              {
                q: 'Quels travaux réalisez-vous au Vésinet ?',
                a: 'Rénovation complète de villas et appartements, salle de bain haut de gamme, cuisine sur mesure, parquet massif, menuiserie, décoration intérieure.',
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
              { href: '/renovation-saint-germain-en-laye', label: 'Saint-Germain-en-Laye' },
              { href: '/renovation-chatou', label: 'Chatou' },
              { href: '/renovation-rueil-malmaison', label: 'Rueil-Malmaison' },
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
            Votre projet au Vésinet
          </h2>
          <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Décrivez votre projet et recevez un devis gratuit et détaillé sous 48h. Déplacement sans engagement au Vésinet et dans les Yvelines.
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
