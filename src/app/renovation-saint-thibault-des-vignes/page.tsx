import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: "Rénovation Saint-Thibault-des-Vignes (77400) — Artisan Rénovateur | Espace Design",
  description:
    "Artisan rénovateur à Saint-Thibault-des-Vignes (77400) : maisons individuelles et pavillons proche Lagny-sur-Marne, commune résidentielle calme. Rénovation 800-2500€/m². Devis gratuit 48h.",
  keywords: [
    'rénovation maison Saint-Thibault-des-Vignes',
    'artisan rénovation Saint-Thibault-des-Vignes',
    'décoration intérieure Saint-Thibault-des-Vignes',
    'renovation Saint-Thibault-des-Vignes 77400',
    'entreprise renovation Saint-Thibault-des-Vignes',
    'artisan Saint-Thibault Seine-et-Marne',
    'rénovation pavillon Lagny-sur-Marne',
  ],
}

const schemaLocal = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Espace Design',
  description: 'Artisan rénovateur et décorateur intérieur à Saint-Thibault-des-Vignes.',
  telephone: '+33611783867',
  url: 'https://espacedesignparis.fr/renovation-saint-thibault-des-vignes',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Saint-Thibault-des-Vignes',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Saint-Thibault-des-Vignes',
    postalCode: '77400',
    addressCountry: 'FR',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '47',
  },
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix d'une rénovation à Saint-Thibault-des-Vignes ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le coût d'une rénovation à Saint-Thibault-des-Vignes varie entre 800 et 1 500 €/m² pour une rénovation standard. Pour les maisons individuelles et pavillons de cette commune résidentielle proche Lagny, comptez 1 500 à 2 500 €/m² en haut de gamme. Devis gratuit sous 48h.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel artisan contacter pour rénover une maison à Saint-Thibault-des-Vignes ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Espace Design intervient régulièrement à Saint-Thibault-des-Vignes pour des rénovations de pavillons et maisons individuelles proches de Lagny-sur-Marne. Artisan assuré décennale, 15 ans d'expérience, devis gratuit sous 48h.",
      },
    },
    {
      '@type': 'Question',
      name: "Intervenez-vous à Lagny-sur-Marne et dans les communes voisines ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, Espace Design intervient à Saint-Thibault-des-Vignes et dans les communes voisines : Lagny-sur-Marne, Torcy, Chelles. Déplacement gratuit pour l'établissement du devis dans toute la Seine-et-Marne.",
      },
    },
    {
      '@type': 'Question',
      name: "Avez-vous une assurance décennale ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, Espace Design est couvert par une assurance décennale et une RC professionnelle. Vos travaux sont garantis 10 ans après la livraison.",
      },
    },
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Rénovation Seine-et-Marne', item: 'https://espacedesignparis.fr/renovation-seine-et-marne' },
    { '@type': 'ListItem', position: 3, name: 'Saint-Thibault-des-Vignes', item: 'https://espacedesignparis.fr/renovation-saint-thibault-des-vignes' },
  ],
}

export default function RenovationSaintThibault() {
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
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Saint-Thibault-des-Vignes — 77400</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Rénovation maison<br className="hidden sm:block" /> Saint-Thibault-des-Vignes
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Artisan rénovateur à Saint-Thibault-des-Vignes (77400) : commune pavillonnaire résidentielle proche Lagny-sur-Marne, maisons individuelles dans un cadre calme. Rénovation complète et finitions soignées. Devis gratuit sous 48h.
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
            Nos services à Saint-Thibault-des-Vignes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Rénovation pavillons', desc: "Rénovation complète des maisons individuelles et pavillons de Saint-Thibault-des-Vignes — modernisation, isolation, redistribution des espaces de vie." },
              { num: '02', title: 'Décoration intérieure', desc: "Aménagement sur mesure dans le respect du caractère résidentiel et calme de la commune — matériaux nobles, finitions précises, harmonie des espaces." },
              { num: '03', title: 'Salle de bain & cuisine', desc: "Rénovation complète salle de bain et cuisine pour les maisons de Saint-Thibault-des-Vignes. Carrelage, plomberie, menuiserie, tout en une intervention." },
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

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-8">
            Prix rénovation à Saint-Thibault-des-Vignes
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border border-gray-100 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#F2F2EE]">
                  <th className="px-5 py-3 font-semibold text-[#1C1C1C] font-display">Type de travaux</th>
                  <th className="px-5 py-3 font-semibold text-[#1C1C1C] font-display">Prix indicatif</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ['Peinture maison', '25 - 65 €/m²'],
                  ['Rénovation salle de bain', '3 500 - 12 000 €'],
                  ['Rénovation cuisine', '4 500 - 15 000 €'],
                  ['Parquet (pose + fourniture)', '45 - 100 €/m²'],
                  ['Rénovation complète', '800 - 1 500 €/m²'],
                  ['Rénovation haut de gamme', '1 500 - 2 500 €/m²'],
                ].map(([label, price]) => (
                  <tr key={label} className="bg-white hover:bg-[#FAFAF8] transition-colors">
                    <td className="px-5 py-3 text-gray-700 font-light">{label}</td>
                    <td className="px-5 py-3 text-[#B8960C] font-semibold">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-400 text-xs font-light mt-3">Tarifs indicatifs — devis gratuit personnalisé sous 48h.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10">
            Une réalisation
          </h2>
          <div className="relative rounded-xl overflow-hidden h-72 sm:h-96">
            <Image src="/images/realisations/19-sdb-mosaique-lavabo.jpg" alt="Rénovation salle de bain — maison Saint-Thibault-des-Vignes 77400" fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
          </div>
        </div>
      </section>

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

      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-8">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Quel est le prix d'une rénovation à Saint-Thibault-des-Vignes ?",
                a: "Le coût d'une rénovation à Saint-Thibault-des-Vignes varie entre 800 et 1 500 €/m² pour une rénovation standard. Pour les maisons individuelles et pavillons, comptez 1 500 à 2 500 €/m² en finitions haut de gamme.",
              },
              {
                q: "Quel artisan contacter pour rénover une maison à Saint-Thibault-des-Vignes ?",
                a: "Espace Design intervient régulièrement à Saint-Thibault-des-Vignes pour des rénovations de pavillons et maisons individuelles proches de Lagny-sur-Marne. Assuré décennale, devis gratuit sous 48h.",
              },
              {
                q: "Intervenez-vous à Lagny-sur-Marne et dans les communes voisines ?",
                a: "Oui, Espace Design intervient à Saint-Thibault-des-Vignes et dans les communes voisines : Lagny-sur-Marne, Torcy, Chelles. Déplacement gratuit pour l'établissement du devis.",
              },
              {
                q: "Avez-vous une assurance décennale ?",
                a: "Oui, Espace Design est couvert par une assurance décennale et une RC professionnelle. Vos travaux sont garantis 10 ans après la livraison.",
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

      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Zones voisines</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: '/renovation-seine-et-marne', label: 'Seine-et-Marne (77)' },
              { href: '/renovation-lagny-sur-marne', label: 'Lagny-sur-Marne' },
              { href: '/renovation-torcy', label: 'Torcy' },
              { href: '/renovation-chelles', label: 'Chelles' },
              { href: '/renovation-appartement-paris', label: 'Paris' },
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

      <section className="py-10 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Guides utiles</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/blog/renovation-appartement-haussmannien-paris', label: 'Appartement de standing' },
              { href: '/blog/renovation-appartement-copropriete-paris', label: 'Rénover en copropriété' },
              { href: '/blog/renovation-immeuble-ancien-paris', label: 'Immeuble ancien Paris' },
              { href: '/blog/parquet-chene-paris', label: 'Parquet chêne Paris' },
              { href: '/blog/menuiserie-sur-mesure-paris', label: 'Menuiserie sur mesure' },
              { href: '/blog/prix-renovation-appartement-paris', label: 'Prix rénovation Paris' },
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
            Votre projet à Saint-Thibault-des-Vignes
          </h2>
          <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Décrivez votre projet et recevez un devis gratuit et détaillé sous 48h. Déplacement sans engagement dans toute la commune de Saint-Thibault-des-Vignes et les environs de Lagny.
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
