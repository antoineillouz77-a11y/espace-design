import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Sceaux (92330) — Artisan Rénovateur | Espace Design',
  description:
    'Artisan rénovateur à Sceaux (92330), Hauts-de-Seine : belles maisons bourgeoises, appartements de standing, commune résidentielle aisée proche du parc de Sceaux. Rénovation 900-3500€/m². Devis gratuit 48h.',
  keywords: [
    'rénovation Sceaux',
    'artisan rénovation Sceaux',
    'rénovation maison bourgeoise Sceaux',
    'renovation Sceaux 92330',
    'entreprise renovation Sceaux',
    'artisan Sceaux Hauts-de-Seine',
    'rénovation appartement standing Sceaux',
  ],
}

const schemaLocal = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Espace Design',
  description: 'Artisan rénovateur et décorateur intérieur à Sceaux.',
  telephone: '+33611783867',
  url: 'https://espacedesignparis.fr/renovation-sceaux',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Sceaux',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sceaux',
    postalCode: '92330',
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
      name: 'Quel est le prix d\'une rénovation à Sceaux ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'À Sceaux (92330), commune résidentielle aisée des Hauts-de-Seine, le coût d\'une rénovation varie entre 900 et 1 800 €/m² pour une rénovation standard. Pour les maisons bourgeoises et appartements de standing proches du parc, comptez 1 800 à 3 500 €/m². Devis gratuit sous 48h.',
      },
    },
    {
      '@type': 'Question',
      name: 'Espace Design intervient-il pour la rénovation d\'appartements de standing à Sceaux ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, Espace Design intervient régulièrement à Sceaux pour des rénovations haut de gamme dans les maisons bourgeoises et les appartements de standing. Matériaux nobles, finitions soignées, suivi personnalisé — chaque projet est traité avec exigence.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quels matériaux recommandez-vous pour rénover une maison bourgeoise à Sceaux ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pour les maisons bourgeoises à Sceaux, nous recommandons : parquet chêne massif ou point de Hongrie, marbre ou carreaux de ciment en salle de bain, peinture minérale à la chaux, boiseries sur mesure. Des matériaux durables qui valorisent le patrimoine architectural de ces belles demeures.',
      },
    },
    {
      '@type': 'Question',
      name: 'Avez-vous une assurance décennale pour les travaux à Sceaux ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, Espace Design est couvert par une assurance décennale et une RC professionnelle. Tous vos travaux à Sceaux sont garantis 10 ans après la livraison du chantier.',
      },
    },
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Rénovation Hauts-de-Seine', item: 'https://espacedesignparis.fr/renovation-hauts-de-seine' },
    { '@type': 'ListItem', position: 3, name: 'Sceaux', item: 'https://espacedesignparis.fr/renovation-sceaux' },
  ],
}

export default function RenovationSceaux() {
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
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Sceaux — 92330</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Rénovation maison<br className="hidden sm:block" /> Sceaux
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Artisan rénovateur à Sceaux (92330), Hauts-de-Seine : belles maisons bourgeoises, appartements de standing, commune résidentielle aisée proche du parc de Sceaux. Rénovation complète et finitions de prestige. Devis gratuit sous 48h.
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
            Nos services à Sceaux
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Rénovation maisons bourgeoises', desc: 'Restauration soignée des maisons bourgeoises sceaussiennes — préservation des moulures, parquets anciens et cheminées d\'époque, tout en apportant le confort et l\'élégance contemporaine.' },
              { num: '02', title: 'Appartements de standing', desc: 'Rénovation haut de gamme d\'appartements de standing à Sceaux. Matériaux nobles sélectionnés avec soin, agencement sur mesure, harmonie classique ou design — chaque projet est unique.' },
              { num: '03', title: 'Finitions de prestige', desc: 'Parquet chêne massif, marbre, boiseries laquées, peinture à la chaux, carreaux de ciment. L\'artisanat d\'excellence au service de votre bien dans cette commune résidentielle d\'exception.' },
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
            Prix rénovation à Sceaux
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
                  ['Peinture maison ou appartement', '35 - 80 €/m²'],
                  ['Rénovation salle de bain', '5 000 - 18 000 €'],
                  ['Rénovation cuisine', '6 000 - 25 000 €'],
                  ['Parquet chêne massif (pose + fourniture)', '60 - 130 €/m²'],
                  ['Rénovation partielle', '700 - 1 200 €/m²'],
                  ['Rénovation complète prestige', '900 - 3 500 €/m²'],
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
            <Image src="/images/realisations/19-sdb-mosaique-lavabo.jpg" alt="Rénovation salle de bain prestige — maison bourgeoise Sceaux 92330 Hauts-de-Seine" fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
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

      <section className="py-16 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <blockquote className="border-l-4 border-[#D4AF37] pl-6 italic text-gray-600 text-sm leading-relaxed font-light">
            "Patrick a entièrement rénové notre maison bourgeoise à Sceaux. Son sens du détail, sa capacité à valoriser les éléments d'époque tout en modernisant les espaces de vie est remarquable. Un artisan d'exception."
            <span className="block mt-3 not-italic text-gray-400 text-xs">— Nathalie, propriétaire à Sceaux (92330)</span>
          </blockquote>
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
                q: 'Quel est le prix d\'une rénovation à Sceaux ?',
                a: 'À Sceaux (92330), le coût d\'une rénovation varie entre 900 et 1 800 €/m² pour une rénovation standard. Pour les maisons bourgeoises et appartements de standing proches du parc, comptez 1 800 à 3 500 €/m².',
              },
              {
                q: 'Espace Design intervient-il pour la rénovation d\'appartements de standing à Sceaux ?',
                a: 'Oui, Espace Design intervient régulièrement à Sceaux pour des rénovations haut de gamme dans les maisons bourgeoises et les appartements de standing. Matériaux nobles, finitions soignées, suivi personnalisé.',
              },
              {
                q: 'Quels matériaux recommandez-vous pour rénover une maison bourgeoise à Sceaux ?',
                a: 'Pour les maisons bourgeoises à Sceaux, nous recommandons : parquet chêne massif ou point de Hongrie, marbre ou carreaux de ciment en salle de bain, peinture minérale à la chaux, boiseries sur mesure.',
              },
              {
                q: 'Avez-vous une assurance décennale pour les travaux à Sceaux ?',
                a: 'Oui, Espace Design est couvert par une assurance décennale et une RC professionnelle. Tous vos travaux à Sceaux sont garantis 10 ans après la livraison du chantier.',
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
              { href: '/renovation-fontenay-aux-roses', label: 'Fontenay-aux-Roses' },
              { href: '/renovation-chatenay-malabry', label: 'Châtenay-Malabry' },
              { href: '/renovation-bagneux', label: 'Bagneux' },
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
              { href: '/blog/renovation-salle-de-bain-prix-paris', label: 'Prix salle de bain' },
              { href: '/blog/renovation-avant-vente-paris', label: 'Rénover avant vente' },
              { href: '/blog/parquet-flottant-vs-colle-paris', label: 'Parquet flottant vs collé' },
              { href: '/blog/travaux-electricite-appartement-paris', label: 'Travaux électricité' },
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
            Votre projet à Sceaux
          </h2>
          <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Décrivez votre projet et recevez un devis gratuit et détaillé sous 48h. Déplacement sans engagement dans toute la commune de Sceaux et ses environs dans les Hauts-de-Seine.
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
