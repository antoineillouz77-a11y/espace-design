import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Villemomble — Artisan & Devis Gratuit | Espace Design',
  description:
    'Artisan rénovateur à Villemomble (93250) : maisons individuelles, pavillons, résidences résidentielles. Devis gratuit sous 48h, artisan de confiance en Seine-Saint-Denis.',
  keywords: [
    'rénovation maison Villemomble',
    'artisan rénovation Villemomble',
    'décoration intérieure Villemomble',
    'renovation Villemomble 93250',
    'entreprise renovation Villemomble',
    'artisan Villemomble seine-saint-denis',
  ],
}

const schemaLocal = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Espace Design',
  description: 'Artisan rénovateur et décorateur intérieur à Villemomble.',
  telephone: '+33611783867',
  url: 'https://espacedesignparis.fr/renovation-villemomble',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '47',
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Villemomble',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Villemomble',
    postalCode: '93250',
    addressCountry: 'FR',
  },
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation à Villemomble ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le coût d\'une rénovation complète à Villemomble varie entre 700 et 1 300 €/m² selon l\'état du bien et les matériaux. Pour une maison individuelle ou un pavillon, comptez un budget adapté à la surface et à la nature des travaux. Devis gratuit sous 48h.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment trouver un artisan de confiance à Villemomble ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Espace Design intervient régulièrement à Villemomble pour des rénovations de maisons et de pavillons. Nous sommes assurés en décennale et responsabilité civile professionnelle, avec plus de 15 ans d\'expérience.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment rénover une maison à Villemomble ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La rénovation d\'une maison à Villemomble commence par une visite sur place et un devis détaillé. Nous coordonnons tous les corps de métier : peinture, parquet, salle de bain, cuisine, électricité, plomberie et isolation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Intervenez-vous à Villemomble ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, nous intervenons régulièrement à Villemomble et dans toute l\'Île-de-France. Déplacement gratuit et sans engagement, devis sous 48h.',
      },
    },
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Rénovation Seine-Saint-Denis', item: 'https://espacedesignparis.fr/renovation-seine-saint-denis' },
    { '@type': 'ListItem', position: 3, name: 'Villemomble', item: 'https://espacedesignparis.fr/renovation-villemomble' },
  ],
}

export default function RenovationVillemomble() {
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

      <section className="pt-28 sm:pt-36 pb-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Villemomble — 93250</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Rénovation maison<br className="hidden sm:block" /> Villemomble
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Artisan rénovateur et décorateur intérieur à Villemomble. Maisons individuelles, pavillons, résidences résidentielles — rénovation sur-mesure, finitions soignées et respect des délais. Devis gratuit sous 48h.
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

      <section className="py-20 bg-[#F2F2EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10">
            Nos services à Villemomble
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Rénovation maison complète', desc: 'Transformation totale de votre maison individuelle ou pavillon : redistribution des pièces, isolation, modernisation des installations, finitions haut de gamme.' },
              { num: '02', title: 'Décoration intérieure', desc: 'Agencement sur-mesure, choix des matériaux et coordination des couleurs pour des intérieurs harmonieux et personnalisés, du salon à la chambre.' },
              { num: '03', title: 'Cuisine, salle de bain, finitions', desc: 'Rénovation de cuisine et salle de bain clés en main, peinture décorative, pose de parquet et carrelage, menuiserie intérieure. Artisan unique, un seul interlocuteur.' },
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

      {/* Photo */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10">
            Une réalisation
          </h2>
          <div className="relative rounded-xl overflow-hidden h-72 sm:h-96">
            <Image src="/images/realisations/18-salon-renovation-complete.jpg" alt="Salon rénové avec finitions soignées — rénovation maison Villemomble" fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
          </div>
        </div>
      </section>

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
                q: 'Quel est le prix d\'une rénovation à Villemomble ?',
                a: 'Le coût varie entre 700 et 1 300 €/m² selon l\'état du bien et les matériaux. Pour une maison individuelle, un devis personnalisé est recommandé.',
              },
              {
                q: 'Comment trouver un artisan de confiance à Villemomble ?',
                a: 'Espace Design intervient régulièrement à Villemomble avec assurance décennale et 15 ans d\'expérience. Devis gratuit sous 48h.',
              },
              {
                q: 'Comment rénover une maison à Villemomble ?',
                a: 'Après une visite sur place, nous établissons un devis détaillé et coordonnons tous les corps de métier pour une rénovation complète et sereine.',
              },
              {
                q: 'Intervenez-vous à Villemomble ?',
                a: 'Oui, nous intervenons régulièrement à Villemomble et dans toute l\'Île-de-France. Déplacement gratuit et sans engagement.',
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
              { href: '/renovation-seine-saint-denis', label: 'Seine-Saint-Denis (93)' },
              { href: '/renovation-rosny-sous-bois', label: 'Rosny-sous-Bois' },
              { href: '/renovation-montreuil', label: 'Montreuil' },
              { href: '/renovation-noisy-le-grand', label: 'Noisy-le-Grand' },
              { href: '/renovation-le-raincy', label: 'Le Raincy' },
              { href: '/renovation-gagny', label: 'Gagny' },
              { href: '/renovation-appartement-paris', label: 'Rénovation Paris' },
              { href: '/contact', label: 'Nous contacter' },
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

      {/* Guides utiles */}
      <section className="py-10 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Guides utiles</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/blog/renovation-appartement-copropriete-paris', label: 'Rénover en copropriété' },
              { href: '/blog/prix-renovation-appartement-paris', label: 'Prix rénovation Paris' },
              { href: '/blog/isolation-acoustique-appartement-paris', label: 'Isolation acoustique' },
              { href: '/blog/renovation-2-pieces-paris', label: 'Budget 2 pièces Paris' },
              { href: '/blog/peinture-appartement-paris', label: 'Peinture appartement Paris' },
              { href: '/blog/renovation-cuisine-ouverte-paris', label: 'Cuisine ouverte Paris' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-xs border border-gray-200 rounded px-3 py-1.5 text-gray-600 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1C1C1C]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
            Votre projet à Villemomble
          </h2>
          <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Décrivez votre projet et recevez un devis gratuit et détaillé sous 48h. Déplacement sans engagement dans toute la commune de Villemomble.
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
