import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Meudon (92190) — Artisan Rénovateur | Espace Design',
  description:
    'Artisan rénovateur à Meudon (92190) — maisons pavillonnaires, appartements dans un cadre verdoyant au bord de la forêt. Rénovation complète, salle de bain, cuisine, finitions soignées. Devis gratuit 48h.',
  keywords: [
    'rénovation Meudon',
    'artisan rénovation Meudon 92190',
    'rénovation maison Meudon',
    'rénovation appartement Meudon',
    'entreprise rénovation Meudon',
    'renovation 92190 Hauts-de-Seine',
  ],
}

const schemaLocal = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Espace Design',
  description: 'Artisan rénovateur à Meudon (92190) — rénovation maisons pavillonnaires et appartements dans un cadre verdoyant.',
  telephone: '+33611783867',
  email: 'espacedesign92@gmail.com',
  url: 'https://espacedesignparis.fr/renovation-meudon',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Meudon',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Meudon',
    postalCode: '92190',
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
      name: "Quel est le prix d'une rénovation à Meudon ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le coût d'une rénovation à Meudon varie entre 800 et 1 500 €/m² pour une rénovation standard, et jusqu'à 2 500 €/m² pour du haut de gamme. Meudon est une commune résidentielle prisée avec de nombreuses maisons et appartements de caractère. Devis gratuit sous 48h.",
      },
    },
    {
      '@type': 'Question',
      name: 'Espace Design intervient-il à Meudon ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui. Nous intervenons à Meudon (Meudon-la-Forêt, Bellevue, Meudon-sur-Seine) et dans les communes voisines : Clamart, Issy-les-Moulineaux, Sèvres, Boulogne-Billancourt. Déplacement gratuit.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quels travaux réalisez-vous à Meudon ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Rénovation complète de maison ou appartement, salle de bain, cuisine, peinture, parquet, carrelage, électricité, plomberie, isolation. Un seul artisan pour tout coordonner.",
      },
    },
    {
      '@type': 'Question',
      name: 'Avez-vous une assurance décennale ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, Espace Design est couvert par une assurance décennale et une RC professionnelle. Vos travaux sont garantis 10 ans après livraison.',
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
    { '@type': 'ListItem', position: 3, name: 'Meudon', item: 'https://espacedesignparis.fr/renovation-meudon' },
  ],
}

export default function RenovationMeudon() {
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
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Hauts-de-Seine — Meudon 92190</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Rénovation appartement<br className="hidden sm:block" /> Meudon
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Artisan rénovateur à Meudon — maisons pavillonnaires, appartements en cadre verdoyant, biens de caractère au bord de la forêt. Rénovation complète, salle de bain, cuisine, finitions soignées. Devis gratuit sous 48h.
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
            Votre artisan rénovateur à Meudon
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Ville résidentielle aux portes de la forêt de Meudon, <strong>Meudon</strong> offre un cadre de vie recherché
            dans les Hauts-de-Seine. Son parc immobilier est varié : maisons pavillonnaires des années 1950-1980 dans les
            quartiers de Meudon-la-Forêt et Vélizy, appartements haut de gamme avec vue sur la Seine à Bellevue, ou encore
            maisons de charme dans le vieux Meudon. Ces biens ont souvent besoin d'une remise à niveau complète pour
            retrouver tout leur potentiel.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Espace Design intervient à Meudon pour tous types de projets de rénovation : réhabilitation d'une maison
            ancienne, rénovation complète d'un appartement, isolation thermique, mise aux normes électriques, ou encore
            transformation d'une salle de bain vieillissante en espace contemporain. Chaque chantier est piloté de A à Z
            par un seul artisan qualifié, avec un engagement fort sur la qualité des finitions et le respect des délais.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Nous intervenons aussi dans les communes voisines de
            <Link href="/renovation-clamart" className="text-[#B8960C] hover:underline mx-1">Clamart</Link>,
            <Link href="/renovation-issy-les-moulineaux" className="text-[#B8960C] hover:underline mx-1">Issy-les-Moulineaux</Link>,
            <Link href="/renovation-sevres" className="text-[#B8960C] hover:underline mx-1">Sèvres</Link> et
            <Link href="/renovation-boulogne-billancourt" className="text-[#B8960C] hover:underline mx-1">Boulogne-Billancourt</Link>.
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
            Nos services à Meudon
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Rénovation complète',
                desc: "Du sol au plafond à Meudon : gros œuvre, électricité, plomberie, cloisons, isolation, finitions. Un seul artisan pilote l'ensemble du chantier, maison ou appartement.",
              },
              {
                num: '02',
                title: 'Salle de bain & cuisine',
                desc: "Conception et réalisation de salles de bain et cuisines personnalisées. Carrelage, faïence, robinetterie, menuiseries sur-mesure adaptées aux biens de caractère meudonnais.",
              },
              {
                num: '03',
                title: 'Isolation & finitions',
                desc: "Isolation thermique et acoustique, parquet, peinture, menuiseries. Un savoir-faire artisanal pour améliorer le confort et la valeur de votre bien à Meudon.",
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
                q: "Quel est le prix d'une rénovation à Meudon ?",
                a: "Le coût d'une rénovation à Meudon varie entre 800 et 1 500 €/m² pour une rénovation standard, et jusqu'à 2 500 €/m² pour du haut de gamme. Devis gratuit sous 48h.",
              },
              {
                q: 'Espace Design intervient-il à Meudon ?',
                a: "Oui. Nous intervenons à Meudon (Meudon-la-Forêt, Bellevue, Meudon-sur-Seine) et dans les communes voisines : Clamart, Issy-les-Moulineaux, Sèvres, Boulogne. Déplacement gratuit.",
              },
              {
                q: 'Quels travaux réalisez-vous à Meudon ?',
                a: "Rénovation complète de maison ou appartement, salle de bain, cuisine, peinture, parquet, carrelage, électricité, plomberie, isolation. Un seul artisan pour tout coordonner.",
              },
              {
                q: 'Avez-vous une assurance décennale ?',
                a: 'Oui, Espace Design est couvert par une assurance décennale et une RC professionnelle. Vos travaux sont garantis 10 ans après livraison.',
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
              { href: '/renovation-clamart', label: 'Clamart' },
              { href: '/renovation-issy-les-moulineaux', label: 'Issy-les-Moulineaux' },
              { href: '/renovation-sevres', label: 'Sèvres' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
              { href: '/renovation-saint-cloud', label: 'Saint-Cloud' },
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
      {/* Articles liés */}
      <section className="py-10 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Guides utiles</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/blog/renovation-appartement-copropriete-paris', label: 'Rénover en copropriété' },
              { href: '/blog/prix-renovation-appartement-paris', label: 'Prix rénovation Paris' },
              { href: '/blog/renovation-maison-paris', label: 'Rénovation maison Paris' },
              { href: '/blog/parquet-chene-paris', label: 'Parquet chêne Paris' },
              { href: '/blog/isolation-thermique-appartement-paris', label: 'Isolation thermique' },
              { href: '/blog/home-staging-paris', label: 'Home staging Paris' },
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
            Votre projet à Meudon
          </h2>
          <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Décrivez votre projet et recevez un devis gratuit et détaillé sous 48h.
            Déplacement sans engagement à Meudon et dans les communes voisines.
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
