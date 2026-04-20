import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Pontoise — Artisan & Devis Gratuit | Espace Design',
  description:
    'Artisan rénovateur à Pontoise (95300), sous-préfecture du Val-d\'Oise : maisons de ville, immeubles anciens, pavillons. Devis gratuit sous 48h.',
  keywords: [
    'rénovation maison Pontoise',
    'artisan rénovation Pontoise',
    'décoration intérieure Pontoise',
    'renovation Pontoise 95300',
    'entreprise renovation Pontoise',
    'artisan Pontoise val-d-oise',
  ],
}

const schemaLocal = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Espace Design',
  description: 'Artisan rénovateur et décorateur intérieur à Pontoise.',
  telephone: '+33611783867',
  url: 'https://espacedesignparis.fr/renovation-pontoise',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '47',
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Pontoise',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Pontoise',
    postalCode: '95300',
    addressCountry: 'FR',
  },
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation à Pontoise ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le coût d\'une rénovation complète à Pontoise varie entre 700 et 1 400 €/m² selon l\'état du bien et les matériaux. Pour les maisons de ville du centre historique ou les pavillons récents, un devis personnalisé est recommandé. Contactez-nous pour un devis gratuit sous 48h.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment trouver un artisan de confiance à Pontoise ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Espace Design intervient régulièrement à Pontoise et dans le Val-d\'Oise pour des rénovations de maisons de ville, d\'immeubles anciens et de pavillons. Nous sommes assurés en décennale et responsabilité civile professionnelle.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment rénover une maison à Pontoise ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Après une visite gratuite sur place, nous établissons un devis détaillé et coordonnons tous les corps de métier : isolation, électricité, plomberie, peinture, parquet, salle de bain et cuisine.',
      },
    },
    {
      '@type': 'Question',
      name: 'Intervenez-vous à Pontoise ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, nous intervenons régulièrement à Pontoise et dans toute l\'Île-de-France. Déplacement gratuit et sans engagement, devis sous 48h.',
      },
    },
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Rénovation Val-d\'Oise', item: 'https://espacedesignparis.fr/renovation-val-d-oise' },
    { '@type': 'ListItem', position: 3, name: 'Pontoise', item: 'https://espacedesignparis.fr/renovation-pontoise' },
  ],
}

export default function RenovationPontoise() {
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
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Pontoise — 95300</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Rénovation maison<br className="hidden sm:block" /> Pontoise
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Artisan rénovateur et décorateur intérieur à Pontoise, sous-préfecture du Val-d&apos;Oise. Maisons de ville du centre historique, immeubles anciens, pavillons récents — rénovation sur-mesure et finitions soignées. Devis gratuit sous 48h.
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
            Nos services à Pontoise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Rénovation maison de ville', desc: 'Restauration et modernisation des maisons de ville du centre historique : pierre de taille, poutres apparentes, sols anciens. Respect du cachet architectural et confort moderne.' },
              { num: '02', title: 'Rénovation immeuble ancien', desc: 'Réhabilitation d&apos;appartements et d&apos;immeubles anciens : isolation, mise aux normes, redistribution des espaces, finitions contemporaines ou traditionnelles.' },
              { num: '03', title: 'Décoration intérieure', desc: 'Agencement sur-mesure, choix des matériaux, harmonie des couleurs — pour valoriser chaque bien, du pavillon récent à la maison de ville chargée d&apos;histoire.' },
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
            <Image src="/images/realisations/18-salon-renovation-complete.jpg" alt="Salon rénové avec finitions soignées — rénovation maison Pontoise" fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
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

      {/* Quartiers */}
      <section className="py-16 bg-[#F2F2EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-8">
            Quartiers et communes desservis autour de Pontoise
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              'Centre historique de Pontoise',
              'Les Cordeliers',
              'Saint-Martin-le-Beau',
              'Cergy',
              'Osny',
              'Jouy-le-Moutier',
              'Vauréal',
              'Conflans-Sainte-Honorine',
              "L'Isle-Adam",
              'Auvers-sur-Oise',
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
            Questions fréquentes — Rénovation à Pontoise
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">Quel est le prix d&apos;une rénovation maison à Pontoise ?</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">Le coût varie entre 700 et 1 400 €/m² selon l&apos;état du bien et les matériaux. Pour les maisons de ville du centre historique de Pontoise, comptez jusqu&apos;à 2 000 €/m² en finitions haut de gamme. Devis gratuit sous 48h.</p>
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">Comment trouver un artisan sérieux à Pontoise ?</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">Espace Design intervient régulièrement à Pontoise, sous-préfecture du Val-d&apos;Oise. Assurance décennale, RC pro, 15 ans d&apos;expérience et un seul interlocuteur du début à la fin du chantier.</p>
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">Comment rénover une maison ancienne à Pontoise ?</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">La rénovation d&apos;une maison ancienne nécessite un diagnostic préalable (isolation, électricité, plomberie). Espace Design coordonne tous les corps de métier pour une rénovation complète et sereine.</p>
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
              { href: '/renovation-val-d-oise', label: 'Val-d\'Oise (95)' },
              { href: '/renovation-cergy', label: 'Cergy' },
              { href: '/renovation-osny', label: 'Osny' },
              { href: '/renovation-herblay', label: 'Herblay' },
              { href: '/renovation-ermont', label: 'Ermont' },
              { href: '/renovation-sarcelles', label: 'Sarcelles' },
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
              { href: '/blog/renovation-salle-de-bain-prix-paris', label: 'Prix rénovation salle de bain' },
              { href: '/blog/budget-renovation-paris-2025', label: 'Budget rénovation 2025' },
              { href: '/blog/renovation-cuisine-studio-paris', label: 'Rénovation cuisine studio' },
              { href: '/blog/parquet-flottant-vs-colle-paris', label: 'Parquet flottant vs collé' },
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

      <section className="py-20 bg-[#1C1C1C]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
            Votre projet à Pontoise
          </h2>
          <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Décrivez votre projet et recevez un devis gratuit et détaillé sous 48h. Déplacement sans engagement dans toute la commune de Pontoise.
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
