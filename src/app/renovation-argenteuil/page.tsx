import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Argenteuil — Appartement & Maison (95) | Espace Design',
  description:
    'Artisan rénovateur à Argenteuil (95). Rénovation appartement, maison, salle de bain, cuisine. Devis gratuit 48h. Espace Design.',
}

const schemaLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Espace Design',
  description: 'Artisan rénovateur à Argenteuil (95).',
  telephone: '+33611783867',
  url: 'https://espacedesignparis.fr/renovation-argenteuil',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Argenteuil',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Argenteuil',
    postalCode: '95100',
    addressCountry: 'FR',
  },
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Rénovation Île-de-France', item: 'https://espacedesignparis.fr/renovation-appartement-paris' },
    { '@type': 'ListItem', position: 3, name: 'Argenteuil', item: 'https://espacedesignparis.fr/renovation-argenteuil' },
  ],
}

const services = [
  { label: 'Rénovation salle de bain', href: '/renovation-salle-de-bain-paris' },
  { label: 'Rénovation cuisine', href: '/renovation-cuisine-paris' },
  { label: 'Peinture intérieure', href: '/peinture-paris' },
  { label: 'Parquet', href: '/parquet-paris' },
  { label: 'Carrelage', href: '/carrelage-paris' },
  { label: 'Électricité', href: '/electricite-paris' },
  { label: 'Plomberie', href: '/plomberie-paris' },
  { label: 'Menuiserie', href: '/menuiserie-paris' },
  { label: 'Isolation', href: '/isolation-paris' },
  { label: 'Plâtrerie', href: '/platrererie-paris' },
  { label: 'Décoration intérieure', href: '/decoration-interieure-paris' },
  { label: 'Aménagement intérieur', href: '/amenagement-interieur-paris' },
]

const avantages = [
  { title: 'Grande ville, grande expérience', desc: 'Argenteuil est l\'une des villes les plus peuplées d\'Île-de-France. Nous intervenons sur tous types de logements : grands ensembles, maisons individuelles, immeubles anciens ou récents.' },
  { title: 'Travaux clés en main', desc: 'Salle de bain, cuisine, peinture, parquet : nos artisans qualifiés prennent en charge l\'intégralité du chantier. Vous gagnez du temps et évitez la coordination de multiples prestataires.' },
  { title: 'Devis gratuit sous 48h', desc: 'Nous nous déplaçons gratuitement à Argenteuil pour estimer votre projet. Vous recevez un devis détaillé et transparent sous 48 heures, sans engagement.' },
]

const voisines = [
  { href: '/renovation-clichy', label: 'Clichy' },
  { href: '/renovation-asnieres-sur-seine', label: 'Asnières-sur-Seine' },
  { href: '/renovation-colombes', label: 'Colombes' },
  { href: '/renovation-bois-colombes', label: 'Bois-Colombes' },
  { href: '/renovation-gennevilliers', label: 'Gennevilliers' },
  { href: '/renovation-sartrouville', label: 'Sartrouville' },
]

export default function RenovationArgenteuil() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Argenteuil — 95100</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Rénovation Argenteuil
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Artisan rénovateur à Argenteuil (95). Rénovation appartement, maison, salle de bain, cuisine. Devis gratuit sous 48h.
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

      {/* Nos services */}
      <section className="py-20 bg-[#F2F2EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10">
            Nos services à Argenteuil
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="flex items-center gap-3 bg-white rounded-lg px-5 py-4 border border-gray-100 hover:border-[#D4AF37] transition-colors group"
              >
                <CheckCircle size={16} className="text-[#B8960C] flex-shrink-0" />
                <span className="text-sm text-[#1C1C1C] font-light group-hover:text-[#B8960C] transition-colors">{s.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10">
            Pourquoi nous choisir pour votre rénovation à Argenteuil
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {avantages.map((a) => (
              <div key={a.title} className="bg-[#FAFAF8] rounded-lg p-6 border border-gray-100">
                <div className="w-6 h-px bg-[#D4AF37] mb-4" />
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">{a.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones voisines */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Zones voisines</p>
          <div className="flex flex-wrap justify-center gap-3">
            {voisines.map((z) => (
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
            Votre projet à Argenteuil
          </h2>
          <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Décrivez votre projet et recevez un devis gratuit et détaillé sous 48h. Déplacement sans engagement à Argenteuil et dans tout le Val-d'Oise.
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
