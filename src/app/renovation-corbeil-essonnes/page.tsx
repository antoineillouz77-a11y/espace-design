import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Corbeil-Essonnes (91100) — Artisan Rénovateur | Espace Design',
  description:
    "Artisan rénovateur à Corbeil-Essonnes (91100). Rénovation maison, appartement ancien, salle de bain, cuisine. Spécialiste logements des années 60-80 en Essonne. Devis gratuit 48h. Espace Design.",
  keywords: [
    'rénovation appartement Corbeil-Essonnes',
    'artisan rénovation Corbeil',
    'décoration intérieure Corbeil-Essonnes',
    'renovation Corbeil 91100',
    'entreprise renovation Corbeil-Essonnes',
    'artisan Corbeil Essonne',
  ],
}

const schemaLocal = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Espace Design',
  description: 'Artisan rénovateur et décorateur intérieur à Corbeil-Essonnes.',
  telephone: '+33611783867',
  url: 'https://espacedesignparis.fr/renovation-corbeil-essonnes',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '47',
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Corbeil-Essonnes',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Corbeil-Essonnes',
    postalCode: '91100',
    addressCountry: 'FR',
  },
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation à Corbeil-Essonnes ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le coût d\'une rénovation complète à Corbeil-Essonnes varie entre 700 et 1 400 €/m² selon l\'état du bien et les matériaux choisis. Pour les appartements anciens du centre ou les résidences des années 60-80, un devis personnalisé est recommandé. Contactez-nous pour un devis gratuit sous 48h.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment trouver un artisan sérieux à Corbeil-Essonnes ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Espace Design intervient régulièrement à Corbeil-Essonnes et dans toute l\'Essonne. Nous sommes couverts par une assurance décennale et une RC pro, avec plus de 15 ans d\'expérience en rénovation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment rénover un appartement à Corbeil-Essonnes ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Après une visite gratuite sur place, nous établissons un devis détaillé et coordonnons tous les corps de métier : peinture, parquet, salle de bain, cuisine, électricité et plomberie pour une rénovation clés en main.',
      },
    },
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Rénovation Essonne', item: 'https://espacedesignparis.fr/renovation-essonne' },
    { '@type': 'ListItem', position: 3, name: 'Corbeil-Essonnes', item: 'https://espacedesignparis.fr/renovation-corbeil-essonnes' },
  ],
}

export default function RenovationCorbeilEssonnes() {
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
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Corbeil-Essonnes — 91100 — Essonne</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Rénovation Corbeil-Essonnes
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Artisan rénovateur et décorateur intérieur à Corbeil-Essonnes (91100). Spécialiste de la rénovation de maisons individuelles, appartements anciens du centre et résidences des années 60-80 en Essonne. Rénovation complète, décoration sur-mesure, finitions haut de gamme. Devis gratuit sous 48h.
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

      {/* Services cards */}
      <section className="py-20 bg-[#F2F2EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10">
            Nos services à Corbeil-Essonnes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Rénovation complète', desc: "Du sol au plafond : gros œuvre, électricité, plomberie, cloisons, finitions. Expertise sur les maisons individuelles et appartements anciens typiques du centre de Corbeil-Essonnes." },
              { num: '02', title: 'Décoration intérieure', desc: "Agencement sur-mesure, choix des matériaux, harmonie des couleurs — une signature esthétique adaptée à votre appartement ou maison en Essonne." },
              { num: '03', title: 'Sur-mesure et finitions', desc: "Menuiserie, parquet, carrelage, peinture décorative. Les détails qui transforment un intérieur ordinaire en espace exceptionnel." },
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

      {/* All services links */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-8">
            Tous nos services
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/renovation-salle-de-bain-paris', label: 'Rénovation salle de bain' },
              { href: '/renovation-cuisine-paris', label: 'Rénovation cuisine' },
              { href: '/peinture-paris', label: 'Peinture' },
              { href: '/parquet-paris', label: 'Parquet' },
              { href: '/carrelage-paris', label: 'Carrelage' },
              { href: '/electricite-paris', label: 'Électricité' },
              { href: '/plomberie-paris', label: 'Plomberie' },
              { href: '/menuiserie-paris', label: 'Menuiserie' },
              { href: '/isolation-paris', label: 'Isolation' },
              { href: '/platrererie-paris', label: 'Plâtrerie' },
              { href: '/decoration-interieure-paris', label: 'Décoration intérieure' },
              { href: '/amenagement-interieur-paris', label: 'Aménagement intérieur' },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="text-xs text-[#1C1C1C] border border-gray-200 rounded px-3 py-1.5 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Image réalisation */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10">
            Une réalisation
          </h2>
          <div className="relative rounded-xl overflow-hidden h-72 sm:h-96">
            <Image src="/images/realisations/18-salon-renovation-complete.jpg" alt="Salon rénové avec finitions soignées — rénovation Corbeil-Essonnes" fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
          </div>
        </div>
      </section>

      {/* Quartiers */}
      <section className="py-16 bg-[#F2F2EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-8">
            Quartiers et communes desservis autour de Corbeil-Essonnes
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              'Centre-ville Corbeil',
              'Saint-Germain-lès-Corbeil',
              'Essonnes',
              'Évry-Courcouronnes',
              'Ris-Orangis',
              'Viry-Châtillon',
              'Morsang-sur-Orge',
              'Brunoy',
              'Tigery',
              'Saintry-sur-Seine',
            ].map((q) => (
              <span key={q} className="text-xs text-gray-600 border border-gray-200 rounded px-3 py-1.5 font-light bg-white">
                {q}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-8">
            Questions fréquentes — Rénovation à Corbeil-Essonnes
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">Quel est le prix d&apos;une rénovation à Corbeil-Essonnes ?</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">Le coût varie entre 700 et 1 400 €/m² selon l&apos;état du bien et les matériaux. Pour les appartements anciens du centre de Corbeil ou les résidences des années 60-80, comptez un devis personnalisé. Contactez-nous pour un devis gratuit sous 48h.</p>
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">Comment trouver un artisan sérieux à Corbeil ?</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">Espace Design intervient régulièrement à Corbeil-Essonnes et dans toute l&apos;Essonne. Assurance décennale, RC pro, 15 ans d&apos;expérience et un seul interlocuteur du début à la fin du chantier.</p>
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">Comment rénover un appartement à Corbeil-Essonnes ?</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">Après une visite gratuite sur place, nous établissons un devis détaillé. Cuisine, salle de bain, sols, peinture, électricité et plomberie : tout est coordonné par notre équipe pour une rénovation sereine et clés en main.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Zones voisines */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Zones voisines</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: '/renovation-essonne', label: 'Essonne (91)' },
              { href: '/renovation-evry-courcouronnes', label: 'Évry-Courcouronnes' },
              { href: '/renovation-massy', label: 'Massy' },
              { href: '/renovation-sainte-genevieve-des-bois', label: 'Sainte-Geneviève-des-Bois' },
              { href: '/renovation-hauts-de-seine', label: 'Hauts-de-Seine (92)' },
              { href: '/renovation-val-de-marne', label: 'Val-de-Marne (94)' },
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

      {/* Nos services */}
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
              { href: '/blog/renovation-salle-de-bain-prix-paris', label: 'Prix rénovation salle de bain' },
              { href: '/blog/budget-renovation-paris-2025', label: 'Budget rénovation 2025' },
              { href: '/blog/renovation-cuisine-studio-paris', label: 'Rénovation cuisine studio' },
              { href: '/blog/plomberie-renovation-paris', label: 'Plomberie rénovation Paris' },
              { href: '/blog/renovation-avant-vente-paris', label: 'Rénover avant de vendre' },
              { href: '/blog/renovation-appartement-investissement-paris', label: 'Rénover pour investir' },
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
            Votre projet à Corbeil-Essonnes
          </h2>
          <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Décrivez votre projet et recevez un devis gratuit et détaillé sous 48h. Déplacement sans engagement à Corbeil-Essonnes et dans toute l&apos;Essonne.
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
