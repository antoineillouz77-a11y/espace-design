import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Yvelines (78) — Artisan Rénovateur | Espace Design',
  description:
    'Artisan rénovateur dans les Yvelines (78) : Versailles, Saint-Germain-en-Laye, Le Vésinet, Chatou, Rueil. Devis gratuit 48h.',
  keywords: [
    'rénovation Yvelines',
    'rénovation appartement 78',
    'artisan rénovation Yvelines',
    'rénovation Versailles Saint-Germain',
    'entreprise rénovation 78',
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Yvelines (78)', item: 'https://espacedesignparis.fr/renovation-yvelines' },
  ],
}

const schemaLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Espace Design',
  description: 'Artisan rénovateur dans les Yvelines (78) — rénovation appartement, salle de bain, cuisine, peinture, parquet.',
  telephone: '+33611783867',
  email: 'espacedesign92@gmail.com',
  url: 'https://espacedesignparis.fr',
  areaServed: { '@type': 'AdministrativeArea', name: 'Yvelines' },
  priceRange: '€€€',
}

const villes78 = [
  { href: '/renovation-versailles', label: 'Versailles' },
  { href: '/renovation-saint-germain-en-laye', label: 'Saint-Germain-en-Laye' },
  { href: '/renovation-le-vesinet', label: 'Le Vésinet' },
  { href: '/renovation-chatou', label: 'Chatou' },
  { href: '/renovation-poissy', label: 'Poissy' },
  { href: '/renovation-conflans-sainte-honorine', label: 'Conflans-Sainte-Honorine' },
  { href: '/renovation-mantes-la-jolie', label: 'Mantes-la-Jolie' },
  { href: '/renovation-sartrouville', label: 'Sartrouville' },
  { href: '/renovation-houilles', label: 'Houilles' },
  { href: '/renovation-maisons-laffitte', label: 'Maisons-Laffitte' },
  { href: '/renovation-rambouillet', label: 'Rambouillet' },
  { href: '/renovation-mantes-la-ville', label: 'Mantes-la-Ville' },
  { href: '/renovation-meulan-en-yvelines', label: 'Meulan-en-Yvelines' },
  { href: '/renovation-les-mureaux', label: 'Les Mureaux' },
  { href: '/renovation-montigny-le-bretonneux', label: 'Montigny-le-Bretonneux' },
  { href: '/renovation-guyancourt', label: 'Guyancourt' },
  { href: '/renovation-velizy-villacoublay', label: 'Vélizy-Villacoublay' },
  { href: '/renovation-buc', label: 'Buc' },
  { href: '/renovation-le-chesnay-rocquencourt', label: 'Le Chesnay-Rocquencourt' },
  { href: '/renovation-fontenay-le-fleury', label: 'Fontenay-le-Fleury' },
  { href: '/renovation-trappes', label: 'Trappes' },
  { href: '/renovation-plaisir', label: 'Plaisir' },
  { href: '/renovation-elancourt', label: 'Élancourt' },
  { href: '/renovation-les-clayes-sous-bois', label: 'Les Clayes-sous-Bois' },
  { href: '/renovation-andresy', label: 'Andrésy' },
  { href: '/renovation-carrieres-sous-poissy', label: 'Carrières-sous-Poissy' },
  { href: '/renovation-acheres', label: 'Achères' },
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

export default function YvelinesPage() {
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
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Yvelines (78)</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
          Rénovation Yvelines
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Artisan rénovateur dans les Yvelines — Versailles, Saint-Germain-en-Laye, Le Vésinet,
          Chatou et toute la région. Devis gratuit sous 48h.
        </p>
      </section>

      {/* Intro */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Votre artisan rénovateur dans le 78
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Les Yvelines abritent certains des biens immobiliers les plus prestigieux d&apos;Île-de-France —
            grandes demeures bourgeoises à Versailles, élégantes villas à Saint-Germain-en-Laye et
            au Vésinet, maisons de maître dans la vallée de la Seine. Ces propriétés nécessitent
            souvent des travaux de rénovation délicats, respectueux du patrimoine architectural
            et des finitions haut de gamme.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Espace Design intervient dans tout le département des <strong>Yvelines</strong> pour vos
            projets de rénovation : rénovation complète d&apos;appartement, réfection de salle de bain,
            renovation de cuisine, peinture, parquet, carrelage. Notre savoir-faire en finitions
            soignées répond aux exigences des propriétés du 78.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
            {[
              'Devis gratuit sous 48h sur tout le 78',
              'Déplacement gratuit dans le département',
              'Artisan qualifié, assurance décennale',
              'Finitions haut de gamme garanties',
              'Respect des délais et du budget',
              'Un seul interlocuteur du début à la fin',
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
          <h2 className="font-display text-xl font-semibold text-[#1C1C1C] mb-6">Nos services dans le 78</h2>
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
            Communes des Yvelines où nous intervenons
          </h2>
          <div className="flex flex-wrap gap-2">
            {villes78.map((v) => (
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
              { href: '/tarifs', label: 'Nos tarifs' },
              { href: '/faq', label: 'FAQ rénovation' },
              { href: '/avis', label: 'Avis clients' },
              { href: '/blog/prix-renovation-appartement-paris', label: 'Prix rénovation' },
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
          Votre projet dans le 78
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">
          Devis gratuit sous 48h — déplacement gratuit dans tout le département des Yvelines.
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
