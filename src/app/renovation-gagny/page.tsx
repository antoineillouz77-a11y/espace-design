import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Gagny (93220) — Artisan Rénovateur | Espace Design',
  description:
    'Artisan rénovateur à Gagny (93220) : pavillons en meulière, maisons individuelles, résidences en lisière de forêt. Rénovation 800-2500€/m². Devis gratuit 48h.',
  keywords: [
    'rénovation appartement Gagny',
    'artisan rénovation Gagny',
    'rénovation maison Gagny',
    'renovation Gagny 93220',
    'entreprise renovation Gagny',
    'artisan Gagny Seine-Saint-Denis',
    'rénovation pavillon meulière Gagny',
  ],
}

const schemaLocal = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Espace Design',
  description: 'Artisan rénovateur et décorateur intérieur à Gagny.',
  telephone: '+33611783867',
  url: 'https://espacedesignparis.fr/renovation-gagny',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Gagny',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Gagny',
    postalCode: '93220',
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
      name: "Quel est le prix d'une rénovation à Gagny ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le coût d'une rénovation à Gagny varie entre 800 et 1 500 €/m² pour une rénovation standard. Pour les pavillons en meulière et les maisons individuelles avec des finitions soignées, comptez 1 500 à 2 500 €/m². Devis gratuit sous 48h.",
      },
    },
    {
      '@type': 'Question',
      name: 'Rénovez-vous les pavillons en meulière à Gagny ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, Espace Design intervient régulièrement dans les pavillons en meulière et les maisons individuelles de Gagny. Nous respectons le caractère de ces biens anciens tout en modernisant l'intérieur : isolation, électricité, salle de bain, cuisine, peinture.",
      },
    },
    {
      '@type': 'Question',
      name: "Intervenez-vous dans les résidences en lisière de forêt à Gagny ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, nous couvrons l'ensemble du territoire de Gagny, y compris les résidences situées en lisière de forêt. Chaque projet est traité sur mesure avec un devis détaillé et un suivi rigoureux.",
      },
    },
    {
      '@type': 'Question',
      name: 'Avez-vous une assurance décennale ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, Espace Design est couvert par une assurance décennale et une RC professionnelle. Vos travaux sont garantis 10 ans après la livraison.',
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
    { '@type': 'ListItem', position: 3, name: 'Gagny', item: 'https://espacedesignparis.fr/renovation-gagny' },
  ],
}

export default function RenovationGagny() {
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
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Gagny — 93220</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Rénovation maison &amp; pavillon<br className="hidden sm:block" /> à Gagny
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Artisan rénovateur à Gagny (93220) : pavillons en meulière, maisons individuelles et résidences en lisière de forêt en Seine-Saint-Denis. Rénovation intérieure complète et finitions sur mesure. Devis gratuit sous 48h.
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
            Nos services à Gagny
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Rénovation salle de bain',
                desc: "Réfection complète de votre salle de bain : douche à l'italienne, faïence, carrelage, meuble vasque, robinetterie. Résultat clé en main dans les maisons individuelles et pavillons de Gagny.",
              },
              {
                num: '02',
                title: 'Rénovation cuisine',
                desc: "Modernisation de votre cuisine dans un pavillon ou une maison de Gagny : crédence, plan de travail, carrelage, peinture. Devis détaillé, travaux dans les délais.",
              },
              {
                num: '03',
                title: 'Peinture & finitions',
                desc: "Peinture intérieure, enduits décoratifs, parquet, carrelage — nous intervenons dans toutes les pièces de votre maison ou pavillon à Gagny pour un résultat soigné et durable.",
              },
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
            Prix rénovation à Gagny
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border border-gray-100 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#F2F2EE]">
                  <th className="px-5 py-3 font-semibold text-[#1C1C1C] font-display">Petit travaux</th>
                  <th className="px-5 py-3 font-semibold text-[#1C1C1C] font-display">Moyen travaux</th>
                  <th className="px-5 py-3 font-semibold text-[#1C1C1C] font-display">Grand travaux</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-white hover:bg-[#FAFAF8] transition-colors">
                  <td className="px-5 py-3 text-gray-700 font-light">Peinture pièce : 300–800 €</td>
                  <td className="px-5 py-3 text-gray-700 font-light">Salle de bain : 4 000–10 000 €</td>
                  <td className="px-5 py-3 text-gray-700 font-light">Rénovation complète : 800–1 500 €/m²</td>
                </tr>
                <tr className="bg-white hover:bg-[#FAFAF8] transition-colors">
                  <td className="px-5 py-3 text-gray-700 font-light">Pose parquet : 45–100 €/m²</td>
                  <td className="px-5 py-3 text-gray-700 font-light">Cuisine : 5 000–15 000 €</td>
                  <td className="px-5 py-3 text-gray-700 font-light">Rénovation pavillon meulière : 1 500–2 500 €/m²</td>
                </tr>
                <tr className="bg-white hover:bg-[#FAFAF8] transition-colors">
                  <td className="px-5 py-3 text-gray-700 font-light">Carrelage : 45–90 €/m²</td>
                  <td className="px-5 py-3 text-gray-700 font-light">Électricité maison : 4 000–9 000 €</td>
                  <td className="px-5 py-3 text-gray-700 font-light">Maison entière : sur devis</td>
                </tr>
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
            <Image
              src="/images/realisations/19-sdb-mosaique-lavabo.jpg"
              alt="Rénovation salle de bain — pavillon meulière Gagny 93220"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
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
                q: "Quel est le prix d'une rénovation à Gagny ?",
                a: "Le coût d'une rénovation à Gagny varie entre 800 et 1 500 €/m² pour une rénovation standard. Pour les pavillons en meulière et les maisons individuelles avec finitions soignées, comptez 1 500 à 2 500 €/m².",
              },
              {
                q: 'Rénovez-vous les pavillons en meulière à Gagny ?',
                a: "Oui, Espace Design intervient régulièrement dans les pavillons en meulière et les maisons individuelles de Gagny. Nous respectons le caractère de ces biens anciens tout en modernisant l'intérieur.",
              },
              {
                q: "Intervenez-vous dans les résidences en lisière de forêt à Gagny ?",
                a: "Oui, nous couvrons l'ensemble du territoire de Gagny, y compris les résidences situées en lisière de forêt. Chaque projet est traité sur mesure avec un devis détaillé.",
              },
              {
                q: 'Avez-vous une assurance décennale ?',
                a: 'Oui, Espace Design est couvert par une assurance décennale et une RC professionnelle. Vos travaux sont garantis 10 ans après la livraison.',
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
              { href: '/renovation-seine-saint-denis', label: 'Seine-Saint-Denis (93)' },
              { href: '/renovation-noisy-le-grand', label: 'Noisy-le-Grand' },
              { href: '/renovation-rosny-sous-bois', label: 'Rosny-sous-Bois' },
              { href: '/renovation-villemomble', label: 'Villemomble' },
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
              { href: '/blog/budget-renovation-paris-2025', label: 'Budget rénovation 2025' },
              { href: '/blog/renovation-salle-de-bain-prix-paris', label: 'Prix salle de bain Paris' },
              { href: '/blog/renovation-avant-vente-paris', label: 'Rénover avant de vendre' },
              { href: '/blog/parquet-flottant-vs-colle-paris', label: 'Parquet flottant vs collé' },
              { href: '/blog/travaux-electricite-appartement-paris', label: 'Électricité appartement' },
              { href: '/blog/renovation-appartement-investissement-paris', label: 'Rénovation investissement' },
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
            Votre projet à Gagny
          </h2>
          <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Décrivez votre projet et recevez un devis gratuit et détaillé sous 48h. Déplacement sans engagement dans toute la commune de Gagny et alentours en Seine-Saint-Denis.
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
