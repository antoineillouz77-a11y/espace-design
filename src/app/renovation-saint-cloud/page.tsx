import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Saint-Cloud (92210) — Artisan Rénovateur | Espace Design',
  description:
    'Artisan rénovateur à Saint-Cloud (92210) — villas, maisons bourgeoises et appartements haut de gamme. Rénovation complète, décoration intérieure sur-mesure. Devis gratuit 48h.',
  keywords: [
    'rénovation Saint-Cloud',
    'artisan rénovation Saint-Cloud 92210',
    'rénovation appartement Saint-Cloud',
    'rénovation maison Saint-Cloud',
    'entreprise rénovation Saint-Cloud',
    'renovation 92210',
  ],
}

const schemaLocal = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Espace Design',
  description: 'Artisan rénovateur à Saint-Cloud — rénovation villas, maisons bourgeoises et appartements haut de gamme.',
  telephone: '+33611783867',
  email: 'espacedesign92@gmail.com',
  url: 'https://espacedesignparis.fr/renovation-saint-cloud',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Saint-Cloud',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Saint-Cloud',
    postalCode: '92210',
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
      name: 'Quel est le délai pour obtenir un devis à Saint-Cloud ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nous répondons à toutes les demandes de devis sous 48h. Le déplacement est gratuit et sans engagement à Saint-Cloud et dans toute la région.',
      },
    },
    {
      '@type': 'Question',
      name: "Quel est le prix d'une rénovation complète à Saint-Cloud ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le coût d'une rénovation complète à Saint-Cloud varie entre 800 et 1 500 €/m² selon l'état du bien et les matériaux choisis. Pour les villas et biens de prestige, le budget peut atteindre 2 000 à 3 000 €/m². Contactez-nous pour un devis personnalisé.",
      },
    },
    {
      '@type': 'Question',
      name: 'Avez-vous une assurance décennale ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, Espace Design est couvert par une assurance décennale et une assurance responsabilité civile professionnelle. Nos garanties vous protègent pendant 10 ans après la livraison des travaux.',
      },
    },
    {
      '@type': 'Question',
      name: 'Intervenez-vous sur les villas et maisons à Saint-Cloud ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, nous intervenons sur tous types de biens à Saint-Cloud : villas belle époque, maisons bourgeoises des années 1900-1930, appartements en résidence haut de gamme et pavillons récents. Devis gratuit sous 48h.",
      },
    },
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Hauts-de-Seine (92)', item: 'https://espacedesignparis.fr/renovation-hauts-de-seine' },
    { '@type': 'ListItem', position: 3, name: 'Saint-Cloud', item: 'https://espacedesignparis.fr/renovation-saint-cloud' },
  ],
}

export default function RenovationSaintCloud() {
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

      {/* Hero compact */}
      <section className="pt-28 sm:pt-36 pb-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Hauts-de-Seine — Saint-Cloud 92210</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Rénovation appartement<br className="hidden sm:block" /> Saint-Cloud
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Artisan rénovateur et décorateur intérieur à Saint-Cloud. Villas, maisons bourgeoises, appartements haut de gamme — rénovation complète, décoration sur-mesure, finitions soignées. Devis gratuit sous 48h.
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

      {/* Intro locale */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Votre artisan rénovateur à Saint-Cloud
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Nichée entre la forêt domaniale et les bords de Seine, <strong>Saint-Cloud</strong> est l'une des communes
            résidentielles les plus prisées des Hauts-de-Seine. Son patrimoine architectural exceptionnel — villas belle
            époque, maisons bourgeoises des années 1900 et 1930, grands appartements dans des résidences de standing —
            requiert un savoir-faire artisanal minutieux et des finitions à la hauteur des lieux.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Espace Design intervient à Saint-Cloud pour tous vos projets de rénovation : restructuration complète d'une
            villa, rénovation d'un appartement en duplex, mise aux normes électriques d'une maison ancienne, rénovation
            d'une salle de bain ou d'une cuisine sur-mesure. Chaque chantier est piloté par un seul artisan, du devis
            jusqu'à la livraison.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Notre connaissance des quartiers de Montretout, Bel-Air, Villeneuve et du Parc de Saint-Cloud nous permet
            d'intervenir avec réactivité sur l'ensemble de la commune, ainsi que dans les villes voisines de
            <Link href="/renovation-meudon" className="text-[#B8960C] hover:underline mx-1">Meudon</Link>,
            <Link href="/renovation-sevres" className="text-[#B8960C] hover:underline mx-1">Sèvres</Link> et
            <Link href="/renovation-garches" className="text-[#B8960C] hover:underline mx-1">Garches</Link>.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Devis gratuit sous 48h',
              'Assurance décennale',
              "15+ ans d'expérience",
              'Respect des délais',
              'Finitions haut de gamme',
              'Un seul interlocuteur',
            ].map((a) => (
              <div key={a} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[#F2F2EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10">
            Nos services à Saint-Cloud
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Rénovation complète',
                desc: "Du sol au plafond : gros œuvre, électricité, plomberie, cloisons, finitions. Un seul artisan coordonne l'ensemble du chantier dans votre villa ou appartement.",
              },
              {
                num: '02',
                title: 'Décoration intérieure',
                desc: "Valorisation du cachet saint-cloudien — moulures, parquets anciens, volumes généreux — avec une décoration sur-mesure qui respecte l'âme du bâti.",
              },
              {
                num: '03',
                title: 'Salle de bain & cuisine',
                desc: "Conception et réalisation clé en main : carrelage, faïence, robinetterie premium, menuiseries sur-mesure. Des espaces fonctionnels et esthétiques.",
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

      {/* Photo réalisation */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10">
            Une réalisation récente
          </h2>
          <div className="relative rounded-xl overflow-hidden h-72 sm:h-96">
            <Image
              src="/images/realisations/21-chambre-appliques-bois.jpg"
              alt="Chambre avec appliques bois — rénovation villa Saint-Cloud Hauts-de-Seine"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        </div>
      </section>

      {/* Atouts */}
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

      {/* FAQ */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-8">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'Quel est le délai pour obtenir un devis à Saint-Cloud ?',
                a: 'Nous répondons à toutes les demandes sous 48h. Le déplacement est gratuit et sans engagement à Saint-Cloud.',
              },
              {
                q: "Quel est le prix d'une rénovation complète à Saint-Cloud ?",
                a: "Le coût varie entre 800 et 1 500 €/m² selon l'état du bien et les matériaux. Pour les villas et biens de prestige, comptez 2 000 à 3 000 €/m². Devis personnalisé sous 48h.",
              },
              {
                q: 'Avez-vous une assurance décennale ?',
                a: 'Oui, Espace Design est couvert par une assurance décennale et une RC professionnelle. Vos travaux sont garantis 10 ans.',
              },
              {
                q: 'Intervenez-vous sur les villas et maisons à Saint-Cloud ?',
                a: "Oui, nous intervenons sur tous types de biens à Saint-Cloud : villas, maisons bourgeoises, appartements en résidence. Devis gratuit sous 48h.",
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
              { href: '/renovation-meudon', label: 'Meudon' },
              { href: '/renovation-sevres', label: 'Sèvres' },
              { href: '/renovation-garches', label: 'Garches' },
              { href: '/renovation-suresnes', label: 'Suresnes' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
              { href: '/renovation-versailles', label: 'Versailles' },
              { href: '/renovation-hauts-de-seine', label: 'Hauts-de-Seine (92)' },
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

      {/* Voir aussi — services */}
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

      {/* CTA */}
      <section className="py-20 bg-[#1C1C1C]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
            Votre projet à Saint-Cloud
          </h2>
          <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Décrivez votre projet et recevez un devis gratuit et détaillé sous 48h.
            Déplacement sans engagement à Saint-Cloud et dans tout le 92.
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
