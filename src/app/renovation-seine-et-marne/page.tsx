import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Seine-et-Marne (77) — Artisan Rénovateur | Espace Design',
  description:
    'Artisan rénovateur en Seine-et-Marne (77) : Melun, Meaux, Chelles, Torcy, Pontault-Combault et toutes les communes. Devis gratuit 48h.',
  keywords: [
    'rénovation Seine-et-Marne',
    'rénovation appartement 77',
    'artisan rénovation Seine-et-Marne',
    'rénovation Melun Meaux Chelles',
    'entreprise rénovation 77',
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Seine-et-Marne (77)', item: 'https://espacedesignparis.fr/renovation-seine-et-marne' },
  ],
}

const schemaLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Espace Design',
  description: 'Artisan rénovateur en Seine-et-Marne (77) — rénovation appartement, salle de bain, cuisine, peinture, parquet.',
  telephone: '+33611783867',
  email: 'espacedesign92@gmail.com',
  url: 'https://espacedesignparis.fr',
  areaServed: { '@type': 'AdministrativeArea', name: 'Seine-et-Marne' },
  priceRange: '€€€',
}

const villes77 = [
  { href: '/renovation-melun', label: 'Melun' },
  { href: '/renovation-meaux', label: 'Meaux' },
  { href: '/renovation-chelles', label: 'Chelles' },
  { href: '/renovation-torcy', label: 'Torcy' },
  { href: '/renovation-lagny-sur-marne', label: 'Lagny-sur-Marne' },
  { href: '/renovation-noisiel', label: 'Noisiel' },
  { href: '/renovation-lognes', label: 'Lognes' },
  { href: '/renovation-pontault-combault', label: 'Pontault-Combault' },
  { href: '/renovation-ozoir-la-ferriere', label: 'Ozoir-la-Ferrière' },
  { href: '/renovation-savigny-le-temple', label: 'Savigny-le-Temple' },
  { href: '/renovation-combs-la-ville', label: 'Combs-la-Ville' },
  { href: '/renovation-brie-comte-robert', label: 'Brie-Comte-Robert' },
  { href: '/renovation-saint-thibault-des-vignes', label: 'Saint-Thibault-des-Vignes' },
  { href: '/renovation-mitry-mory', label: 'Mitry-Mory' },
  { href: '/renovation-roissy-en-brie', label: 'Roissy-en-Brie' },
  { href: '/renovation-moissy-cramayel', label: 'Moissy-Cramayel' },
  { href: '/renovation-emerainville', label: 'Émerainville' },
  { href: '/renovation-claye-souilly', label: 'Claye-Souilly' },
  { href: '/renovation-nangis', label: 'Nangis' },
  { href: '/renovation-coulommiers', label: 'Coulommiers' },
  { href: '/renovation-montereau-fault-yonne', label: 'Montereau-Fault-Yonne' },
  { href: '/renovation-provins', label: 'Provins' },
  { href: '/renovation-fontainebleau', label: 'Fontainebleau' },
  { href: '/renovation-nemours', label: 'Nemours' },
  { href: '/renovation-fontenay-en-brie', label: 'Fontenay-en-Brie' },
  { href: '/renovation-gretz-armainvilliers', label: 'Gretz-Armainvilliers' },
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

export default function SeineEtMarnePage() {
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
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Seine-et-Marne (77)</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
          Rénovation Seine-et-Marne
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Artisan rénovateur dans tout le 77 — Melun, Meaux, Chelles, Torcy, Pontault-Combault et
          toutes les communes de Seine-et-Marne. Devis gratuit sous 48h.
        </p>
      </section>

      {/* Intro */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Votre artisan rénovateur dans le 77
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Espace Design intervient dans toutes les communes de <strong>Seine-et-Marne</strong> pour
            vos projets de rénovation. Le 77 est un département à la diversité architecturale
            remarquable : les villes nouvelles de Marne-la-Vallée — Torcy, Lognes, Noisiel — regroupent
            des ensembles de logements collectifs des années 70-80 souvent demandeurs de rénovations
            complètes, tandis que les centres historiques de Melun et Meaux abritent des immeubles
            anciens aux volumes généreux, propices à des réaménagements de caractère.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Le long de la Marne et de la Seine, de Chelles à Lagny-sur-Marne, les propriétés
            riveraines — maisons de pêcheurs reconverties, pavillons de bord de rivière — nécessitent
            une attention particulière à l&apos;humidité et à l&apos;isolation. Dans les suburbs
            résidentielles de l&apos;est francilien comme Pontault-Combault et Ozoir-la-Ferrière,
            nous intervenons régulièrement sur des pavillons des années 80-90 à moderniser :
            salles de bain à repenser, cuisines à ouvrir, parquets à rénover et façades à
            rafraîchir. Quelle que soit la nature de votre bien, nous apportons les mêmes
            exigences de finition et le même respect de vos délais et de votre budget.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
            {[
              'Devis gratuit sous 48h sur tout le 77',
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
          <h2 className="font-display text-xl font-semibold text-[#1C1C1C] mb-6">Nos services dans le 77</h2>
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
            Communes de Seine-et-Marne où nous intervenons
          </h2>
          <div className="flex flex-wrap gap-2">
            {villes77.map((v) => (
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
              { href: '/renovation-val-de-marne', label: 'Val-de-Marne (94)' },
              { href: '/renovation-essonne', label: 'Essonne (91)' },
              { href: '/tarifs', label: 'Nos tarifs' },
              { href: '/faq', label: 'FAQ rénovation' },
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
          Votre projet dans le 77
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">
          Devis gratuit sous 48h — déplacement gratuit dans tout le Seine-et-Marne.
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
