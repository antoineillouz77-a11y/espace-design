import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Sartrouville — Artisan & Devis Gratuit | Espace Design',
  description:
    'Artisan rénovateur à Sartrouville (78500) : maisons individuelles, pavillons, immeubles collectifs. Rénovation 800-2500€/m². Devis gratuit 48h.',
  keywords: [
    'rénovation maison Sartrouville',
    'artisan rénovation Sartrouville',
    'décoration intérieure Sartrouville',
    'renovation Sartrouville 78500',
    'entreprise renovation Sartrouville',
    'artisan Sartrouville Yvelines',
    'rénovation appartement Sartrouville',
  ],
}

const schemaLocal = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Espace Design',
  description: 'Artisan rénovateur et décorateur intérieur à Sartrouville.',
  telephone: '+33611783867',
  url: 'https://espacedesignparis.fr/renovation-sartrouville',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Sartrouville',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sartrouville',
    postalCode: '78500',
    addressCountry: 'FR',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '41',
  },
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation à Sartrouville ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le coût d\'une rénovation à Sartrouville varie entre 800 et 1 500 €/m² pour une rénovation standard de maison ou pavillon. Pour des finitions premium ou un appartement en immeuble collectif, comptez 1 200 à 2 500 €/m². Devis gratuit sous 48h.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quel artisan contacter pour rénover à Sartrouville ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Espace Design intervient régulièrement à Sartrouville pour des rénovations de maisons individuelles, pavillons et appartements en immeuble collectif. Artisan assuré décennale, 15 ans d\'expérience, devis gratuit sous 48h.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment rénover une maison à Sartrouville ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pour une maison à Sartrouville, nous intervenons sur l\'ensemble des corps de métier : peinture, sols, salle de bain, cuisine, électricité et plomberie. Un seul interlocuteur gère votre chantier de bout en bout.',
      },
    },
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Rénovation Yvelines', item: 'https://espacedesignparis.fr/renovation-yvelines' },
    { '@type': 'ListItem', position: 3, name: 'Sartrouville', item: 'https://espacedesignparis.fr/renovation-sartrouville' },
  ],
}

export default function RenovationSartrouville() {
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
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Sartrouville — 78500</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Rénovation maison<br className="hidden sm:block" /> Sartrouville
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Artisan rénovateur à Sartrouville (78500) : maisons individuelles, pavillons, immeubles collectifs. Rénovation complète tous corps de métier. Devis gratuit sous 48h.
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
            Nos services à Sartrouville
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Rénovation maison et pavillon', desc: 'Rénovation complète de maisons individuelles et pavillons à Sartrouville : peinture, sols, cuisine, salle de bain, électricité et isolation. Un seul artisan pour tout gérer.' },
              { num: '02', title: 'Rénovation appartement', desc: 'Travaux de rénovation dans les immeubles collectifs de Sartrouville : rafraîchissement, mise aux normes, aménagement optimisé pour les petites et grandes surfaces.' },
              { num: '03', title: 'Finitions et décoration', desc: 'Parquet, carrelage, peinture tendance, faïence salle de bain. Des finitions durables pour valoriser votre bien immobilier à Sartrouville et ses environs.' },
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
            Prix rénovation à Sartrouville
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
                  ['Peinture maison / appartement', '30 - 65 €/m²'],
                  ['Rénovation salle de bain', '4 000 - 12 000 €'],
                  ['Rénovation cuisine', '5 000 - 18 000 €'],
                  ['Parquet (pose + fourniture)', '45 - 100 €/m²'],
                  ['Rénovation complète maison', '800 - 1 500 €/m²'],
                  ['Rénovation appartement complet', '800 - 2 500 €/m²'],
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
            <Image src="/images/realisations/19-sdb-mosaique-lavabo.jpg" alt="Rénovation salle de bain — maison Sartrouville 78500" fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
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
                q: 'Quel est le prix d\'une rénovation à Sartrouville ?',
                a: 'Le coût d\'une rénovation à Sartrouville varie entre 800 et 1 500 €/m² pour une rénovation standard de maison ou pavillon. Pour des finitions premium ou un appartement en immeuble collectif, comptez 1 200 à 2 500 €/m².',
              },
              {
                q: 'Quel artisan contacter pour rénover à Sartrouville ?',
                a: 'Espace Design intervient régulièrement à Sartrouville pour des rénovations de maisons individuelles, pavillons et appartements. Assuré décennale, devis gratuit sous 48h.',
              },
              {
                q: 'Comment rénover une maison à Sartrouville ?',
                a: 'Pour une maison à Sartrouville, nous intervenons sur l\'ensemble des corps de métier : peinture, sols, salle de bain, cuisine, électricité et plomberie. Un seul interlocuteur gère votre chantier de bout en bout.',
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
              { href: '/renovation-yvelines', label: 'Yvelines (78)' },
              { href: '/renovation-houilles', label: 'Houilles' },
              { href: '/renovation-conflans-sainte-honorine', label: 'Conflans-Sainte-Honorine' },
              { href: '/renovation-maisons-laffitte', label: 'Maisons-Laffitte' },
              { href: '/renovation-versailles', label: 'Versailles' },
              { href: '/renovation-saint-germain-en-laye', label: 'Saint-Germain-en-Laye' },
              { href: '/renovation-le-vesinet', label: 'Le Vésinet' },
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
              { href: '/blog/renovation-salle-de-bain-prix-paris', label: 'Prix rénovation salle de bain' },
              { href: '/blog/budget-renovation-paris-2025', label: 'Budget rénovation 2025' },
              { href: '/blog/renovation-cuisine-studio-paris', label: 'Rénovation cuisine' },
              { href: '/blog/parquet-flottant-vs-colle-paris', label: 'Parquet flottant vs collé' },
              { href: '/blog/renovation-avant-vente-paris', label: 'Rénover avant de vendre' },
              { href: '/blog/travaux-electricite-appartement-paris', label: 'Électricité appartement' },
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
            Votre projet à Sartrouville
          </h2>
          <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Décrivez votre projet et recevez un devis gratuit et détaillé sous 48h. Déplacement sans engagement dans toute la commune de Sartrouville.
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
