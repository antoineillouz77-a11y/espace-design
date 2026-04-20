import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Val-d\'Oise (95) — Artisan Rénovateur | Espace Design',
  description:
    'Artisan rénovateur dans le Val-d\'Oise (95) : Argenteuil, Cergy, Épinay-sur-Seine et toutes les communes. Devis gratuit 48h.',
  keywords: [
    'rénovation Val-d\'Oise',
    'rénovation appartement 95',
    'artisan rénovation Val-d\'Oise',
    'rénovation Argenteuil Cergy',
    'entreprise rénovation 95',
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Val-d\'Oise (95)', item: 'https://espacedesignparis.fr/renovation-val-d-oise' },
  ],
}

const schemaLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Espace Design',
  description: 'Artisan rénovateur dans le Val-d\'Oise (95) — rénovation appartement, salle de bain, cuisine, peinture, parquet.',
  telephone: '+33611783867',
  email: 'espacedesign92@gmail.com',
  url: 'https://espacedesignparis.fr',
  areaServed: { '@type': 'AdministrativeArea', name: 'Val-d\'Oise' },
  priceRange: '€€€',
}

const villes95 = [
  { href: '/renovation-argenteuil', label: 'Argenteuil' },
  { href: '/renovation-cergy', label: 'Cergy' },
  { href: '/renovation-epinay-sur-seine', label: 'Épinay-sur-Seine' },
]

const services = [
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
]

export default function ValDOisePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Val-d&apos;Oise (95)</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
          Rénovation Val-d&apos;Oise
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Artisan rénovateur dans le Val-d&apos;Oise — Argenteuil, Cergy, Épinay-sur-Seine et toutes
          les communes du 95. Devis gratuit sous 48h.
        </p>
      </section>

      {/* Intro */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Votre artisan rénovateur dans le 95
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Espace Design intervient dans le <strong>Val-d&apos;Oise</strong> pour vos projets de
            rénovation d&apos;appartement, de maison ou de locaux. Le département offre une grande
            variété de biens : pavillons des années 60-80 à Argenteuil et Épinay-sur-Seine,
            logements récents à Cergy-Pontoise, résidences en bordure de Seine. Chaque type de bien
            présente ses propres enjeux techniques que notre équipe maîtrise.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Notre zone d&apos;intervention couvre l&apos;ensemble des communes du 95 accessibles depuis
            Paris, avec une attention particulière aux secteurs en développement comme Cergy, dont
            le parc immobilier neuf et ancien se rénovent à un rythme soutenu.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
            {[
              'Devis gratuit sous 48h sur tout le 95',
              'Déplacement gratuit dans le département',
              'Artisan qualifié, assurance décennale',
              'Finitions soignées garanties',
              'Respect des délais et du budget',
              'Travaux tous corps de métier',
            ].map((e) => (
              <div key={e} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{e}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-xl font-semibold text-[#1C1C1C] mb-6">Nos services dans le 95</h2>
          <div className="flex flex-wrap gap-3">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="text-xs border border-gray-200 rounded px-3 py-1.5 text-gray-600 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Villes */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-xl font-semibold text-[#1C1C1C] mb-6">
            Communes du Val-d&apos;Oise où nous intervenons
          </h2>
          <div className="flex flex-wrap gap-2">
            {villes95.map((v) => (
              <Link
                key={v.href}
                href={v.href}
                className="text-xs text-gray-600 bg-[#FAFAF8] border border-gray-200 px-3 py-1.5 rounded hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors"
              >
                {v.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Voir aussi */}
      <section className="py-10 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Voir aussi</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/renovation-appartement-paris', label: 'Rénovation Paris' },
              { href: '/renovation-hauts-de-seine', label: 'Hauts-de-Seine (92)' },
              { href: '/renovation-seine-saint-denis', label: 'Seine-Saint-Denis (93)' },
              { href: '/tarifs', label: 'Nos tarifs' },
              { href: '/faq', label: 'FAQ rénovation' },
              { href: '/avis', label: 'Avis clients' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-xs border border-gray-200 rounded px-3 py-1.5 text-gray-600 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-3xl font-bold text-white mb-4">
          Votre projet dans le 95
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">
          Devis gratuit sous 48h — déplacement gratuit dans tout le Val-d&apos;Oise.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors"
          >
            Devis gratuit <ArrowRight size={16} />
          </Link>
          <a
            href="tel:+33611783867"
            className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"
          >
            <Phone size={16} />
            06 11 78 38 67
          </a>
        </div>
      </section>
    </>
  )
}
