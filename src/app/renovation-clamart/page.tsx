import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Clamart (92140) — Artisan Rénovateur | Espace Design',
  description:
    'Artisan rénovateur à Clamart (92140) — nombreuses maisons individuelles et copropriétés à rénover dans cette ville pavillonnaire du sud des Hauts-de-Seine. Rénovation complète, salle de bain, cuisine. Devis gratuit 48h.',
  keywords: [
    'rénovation Clamart',
    'artisan rénovation Clamart 92140',
    'rénovation maison Clamart',
    'rénovation appartement Clamart',
    'entreprise rénovation Clamart',
    'renovation 92140 Hauts-de-Seine',
  ],
}

const schemaLocal = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Espace Design',
  description: 'Artisan rénovateur à Clamart (92140) — rénovation maisons individuelles, pavillons et copropriétés dans le sud des Hauts-de-Seine.',
  telephone: '+33611783867',
  email: 'espacedesign92@gmail.com',
  url: 'https://espacedesignparis.fr/renovation-clamart',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Clamart',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Clamart',
    postalCode: '92140',
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
      name: "Quel est le prix d'une rénovation à Clamart ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix d'une rénovation à Clamart varie entre 700 et 1 400 €/m² pour une rénovation standard, et jusqu'à 2 000 €/m² pour des finitions haut de gamme. Clamart compte de nombreuses maisons individuelles nécessitant souvent une mise aux normes et une modernisation. Devis gratuit personnalisé sous 48h.",
      },
    },
    {
      '@type': 'Question',
      name: 'Espace Design intervient-il à Clamart ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, nous intervenons à Clamart et dans toute la zone sud des Hauts-de-Seine : Meudon, Montrouge, Malakoff, Châtillon, Issy-les-Moulineaux. Déplacement gratuit et sans engagement.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quels travaux réalisez-vous à Clamart ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Rénovation complète de maison ou appartement, salle de bain, cuisine, peinture, parquet, carrelage, électricité, plomberie, menuiserie sur-mesure, isolation thermique. Un seul interlocuteur du début à la fin.",
      },
    },
    {
      '@type': 'Question',
      name: 'Avez-vous une assurance décennale ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, Espace Design est couvert par une assurance décennale et une RC professionnelle. Vos travaux sont garantis 10 ans.',
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
    { '@type': 'ListItem', position: 3, name: 'Clamart', item: 'https://espacedesignparis.fr/renovation-clamart' },
  ],
}

export default function RenovationClamart() {
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
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Hauts-de-Seine — Clamart 92140</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Rénovation appartement<br className="hidden sm:block" /> Clamart
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Artisan rénovateur à Clamart — ville pavillonnaire avec de nombreuses maisons individuelles et copropriétés à rénover. Rénovation complète, salle de bain, cuisine, décoration sur-mesure. Devis gratuit sous 48h.
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
            Votre artisan rénovateur à Clamart
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Ville à dominante pavillonnaire du <strong>sud des Hauts-de-Seine</strong>, Clamart est réputée pour ses
            nombreuses maisons individuelles et ses quartiers résidentiels calmes. Le parc immobilier est varié : pavillons
            des années 1950-1970 à rénover en profondeur, copropriétés des années 1980 à moderniser, maisons de ville
            nécessitant une mise aux normes électrique ou une isolation thermique renforcée.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Espace Design accompagne les propriétaires clamartois dans la rénovation et la valorisation de leurs biens.
            Que vous souhaitiez rénover entièrement une maison avant d'y emménager, moderniser votre cuisine et salle
            de bain, refaire les peintures et poser un nouveau parquet, ou isoler votre habitation, nous vous proposons
            une solution complète avec un seul artisan référent sur l'ensemble du projet.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Notre zone d'intervention couvre également
            <Link href="/renovation-meudon" className="text-[#B8960C] hover:underline mx-1">Meudon</Link>,
            <Link href="/renovation-chatillon" className="text-[#B8960C] hover:underline mx-1">Châtillon</Link>,
            <Link href="/renovation-malakoff" className="text-[#B8960C] hover:underline mx-1">Malakoff</Link> et
            <Link href="/renovation-issy-les-moulineaux" className="text-[#B8960C] hover:underline mx-1">Issy-les-Moulineaux</Link>,
            permettant une intervention rapide sur tout le sud des Hauts-de-Seine.
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
            Nos services à Clamart
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Rénovation complète',
                desc: "Du sol au plafond à Clamart : gros œuvre, électricité, plomberie, cloisons, isolation, finitions. Idéal pour les maisons et pavillons des années 50-70 qui retrouvent une seconde vie.",
              },
              {
                num: '02',
                title: 'Salle de bain & cuisine',
                desc: "Conception et réalisation de salles de bain et cuisines sur-mesure. Carrelage, faïence, robinetterie, menuiseries, plans de travail. Des espaces modernes adaptés à votre maison.",
              },
              {
                num: '03',
                title: 'Isolation & finitions',
                desc: "Isolation thermique et acoustique, parquet, peinture, menuiseries intérieures. Amélioration du confort et de la performance énergétique pour vos maisons et appartements à Clamart.",
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
                q: "Quel est le prix d'une rénovation à Clamart ?",
                a: "Le prix d'une rénovation à Clamart varie entre 700 et 1 400 €/m² pour une rénovation standard, et jusqu'à 2 000 €/m² pour des finitions haut de gamme. Devis gratuit sous 48h.",
              },
              {
                q: 'Espace Design intervient-il à Clamart ?',
                a: "Oui, nous intervenons à Clamart et dans toute la zone sud des Hauts-de-Seine : Meudon, Montrouge, Malakoff, Issy-les-Moulineaux. Déplacement gratuit et sans engagement.",
              },
              {
                q: 'Quels travaux réalisez-vous à Clamart ?',
                a: "Rénovation complète, salle de bain, cuisine, peinture, parquet, carrelage, électricité, plomberie, menuiserie sur-mesure, isolation. Un seul interlocuteur du début à la fin.",
              },
              {
                q: 'Avez-vous une assurance décennale ?',
                a: 'Oui, Espace Design est couvert par une assurance décennale et une RC professionnelle. Vos travaux sont garantis 10 ans.',
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
              { href: '/renovation-chatillon', label: 'Châtillon' },
              { href: '/renovation-malakoff', label: 'Malakoff' },
              { href: '/renovation-issy-les-moulineaux', label: 'Issy-les-Moulineaux' },
              { href: '/renovation-montrouge', label: 'Montrouge' },
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
            Votre projet à Clamart
          </h2>
          <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Décrivez votre projet et recevez un devis gratuit et détaillé sous 48h.
            Déplacement sans engagement à Clamart et dans le sud des Hauts-de-Seine.
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
