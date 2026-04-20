import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Bezons (95870) — Artisan Rénovateur | Espace Design',
  description:
    'Artisan rénovateur à Bezons (95870) : logements collectifs, pavillons bords de Seine, rénovation complète. Devis gratuit sous 48h. Espace Design intervient dans tout le Val-d\'Oise.',
  keywords: [
    'rénovation appartement Bezons',
    'artisan rénovation Bezons',
    'rénovation Bezons 95870',
    'entreprise renovation Bezons',
    'artisan Bezons Val-d\'Oise',
    'rénovation logement collectif Bezons',
    'rénovation pavillon Bezons bords de Seine',
  ],
}

const schemaLocal = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Espace Design',
  description: 'Artisan rénovateur et décorateur intérieur à Bezons (Val-d\'Oise).',
  telephone: '+33611783867',
  url: 'https://espacedesignparis.fr/renovation-bezons',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Bezons',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bezons',
    postalCode: '95870',
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
      name: 'Quel est le prix d\'une rénovation à Bezons ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'À Bezons, le coût d\'une rénovation varie entre 700 et 1 200 €/m² pour une rénovation standard d\'appartement ou de pavillon. Pour une rénovation complète avec finitions haut de gamme, comptez 1 200 à 2 500 €/m². Devis gratuit sous 48h.',
      },
    },
    {
      '@type': 'Question',
      name: 'Intervenez-vous dans les logements collectifs à Bezons ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, Espace Design intervient régulièrement dans les résidences et logements collectifs de Bezons. Nous gérons tous les corps de métier : peinture, carrelage, salle de bain, cuisine, électricité et plomberie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Rénover un pavillon bords de Seine à Bezons, quelles spécificités ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Les pavillons proches de la Seine à Bezons peuvent présenter des problématiques d\'humidité ou de fondations spécifiques. Espace Design réalise un diagnostic complet avant toute rénovation pour adapter les matériaux et techniques au contexte local.',
      },
    },
    {
      '@type': 'Question',
      name: 'Avez-vous une assurance décennale pour les travaux à Bezons ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, Espace Design est couvert par une assurance décennale et une RC professionnelle. Vos travaux à Bezons sont garantis 10 ans après la livraison.',
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
    { '@type': 'ListItem', position: 3, name: 'Bezons', item: 'https://espacedesignparis.fr/renovation-bezons' },
  ],
}

export default function RenovationBezons() {
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
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Bezons — 95870 — Val-d'Oise</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Rénovation appartement<br className="hidden sm:block" /> Bezons
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Artisan rénovateur à Bezons (95870) : logements collectifs, pavillons bords de Seine, ville ouvrière en pleine mutation. Rénovation complète, second œuvre et finitions soignées. Devis gratuit sous 48h.
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
            Nos services à Bezons
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Rénovation logements collectifs', desc: 'Appartements en résidence, studios, T2 à T5 dans les immeubles de Bezons : remise à neuf complète, peinture, revêtements sols, salle de bain et cuisine.' },
              { num: '02', title: 'Rénovation pavillons', desc: 'Maisons individuelles et pavillons bords de Seine : extension, aménagement combles, rénovation façade, isolation thermique et modernisation des intérieurs.' },
              { num: '03', title: 'Second œuvre & finitions', desc: 'Carrelage, parquet, peinture, électricité mise aux normes, plomberie, menuiseries. Tout le second œuvre géré par un seul artisan de confiance à Bezons.' },
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
            Prix rénovation à Bezons
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
                  ['Peinture appartement', '25 - 60 €/m²'],
                  ['Rénovation salle de bain', '3 500 - 12 000 €'],
                  ['Rénovation cuisine', '4 000 - 15 000 €'],
                  ['Parquet (pose + fourniture)', '45 - 100 €/m²'],
                  ['Rénovation complète appartement', '700 - 1 200 €/m²'],
                  ['Rénovation complète pavillon', '900 - 2 000 €/m²'],
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

      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <blockquote className="border-l-2 border-[#D4AF37] pl-6">
            <p className="text-gray-600 text-base font-light italic leading-relaxed mb-4">
              "Patrick a rénové notre appartement dans une résidence de Bezons de A à Z. Salle de bain, cuisine, peinture — tout est impeccable. Délais respectés, prix annoncé respecté. Je recommande sans hésiter."
            </p>
            <cite className="text-[#B8960C] text-xs font-light uppercase tracking-widest not-italic">Karim M. — Bezons (95870)</cite>
          </blockquote>
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
                q: 'Quel est le prix d\'une rénovation à Bezons ?',
                a: 'À Bezons, le coût d\'une rénovation varie entre 700 et 1 200 €/m² pour un appartement standard. Pour une rénovation complète avec finitions soignées, comptez 1 200 à 2 500 €/m².',
              },
              {
                q: 'Intervenez-vous dans les logements collectifs à Bezons ?',
                a: 'Oui, Espace Design intervient régulièrement dans les résidences et logements collectifs de Bezons. Nous gérons tous les corps de métier : peinture, carrelage, salle de bain, cuisine, électricité et plomberie.',
              },
              {
                q: 'Rénover un pavillon bords de Seine à Bezons, quelles spécificités ?',
                a: 'Les pavillons proches de la Seine à Bezons peuvent présenter des problématiques d\'humidité. Espace Design réalise un diagnostic complet avant toute rénovation pour adapter les matériaux et techniques au contexte local.',
              },
              {
                q: 'Avez-vous une assurance décennale pour les travaux à Bezons ?',
                a: 'Oui, Espace Design est couvert par une assurance décennale et une RC professionnelle. Vos travaux à Bezons sont garantis 10 ans après la livraison.',
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
              { href: '/renovation-val-d-oise', label: 'Val-d\'Oise (95)' },
              { href: '/renovation-argenteuil', label: 'Argenteuil' },
              { href: '/renovation-cergy', label: 'Cergy' },
              { href: '/renovation-epinay-sur-seine', label: 'Épinay-sur-Seine' },
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
              { href: '/blog/budget-renovation-paris-2025', label: 'Budget rénovation 2025' },
              { href: '/blog/renovation-salle-de-bain-prix-paris', label: 'Prix salle de bain' },
              { href: '/blog/renovation-avant-vente-paris', label: 'Rénovation avant vente' },
              { href: '/blog/parquet-flottant-vs-colle-paris', label: 'Parquet flottant vs collé' },
              { href: '/blog/travaux-electricite-appartement-paris', label: 'Électricité appartement' },
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
            Votre projet à Bezons
          </h2>
          <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Décrivez votre projet et recevez un devis gratuit et détaillé sous 48h. Déplacement sans engagement dans toute la commune de Bezons et le Val-d'Oise.
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
