import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: "Rénovation Montigny-le-Bretonneux (78180) — Artisan Rénovateur | Espace Design",
  description:
    "Artisan rénovateur à Montigny-le-Bretonneux (78180) : logements modernes des années 80-90, résidences ville nouvelle Saint-Quentin-en-Yvelines. Rénovation 800-2000€/m². Devis gratuit 48h.",
  keywords: [
    'rénovation appartement Montigny-le-Bretonneux',
    'artisan rénovation Montigny-le-Bretonneux',
    'rénovation logement Montigny-le-Bretonneux',
    'renovation Montigny-le-Bretonneux 78180',
    'entreprise renovation Montigny Yvelines',
    'artisan Montigny-le-Bretonneux 78',
    'rénovation ville nouvelle Saint-Quentin-en-Yvelines',
  ],
}

const schemaLocal = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Espace Design',
  description: "Artisan rénovateur et décorateur intérieur à Montigny-le-Bretonneux.",
  telephone: '+33611783867',
  url: 'https://espacedesignparis.fr/renovation-montigny-le-bretonneux',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Montigny-le-Bretonneux',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Montigny-le-Bretonneux',
    postalCode: '78180',
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
      name: "Quel est le prix d'une rénovation à Montigny-le-Bretonneux ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le coût d'une rénovation à Montigny-le-Bretonneux varie entre 800 et 1 500 €/m² pour une rénovation standard. Pour les résidences des années 80-90 nécessitant une rénovation complète avec isolation renforcée, comptez 1 200 à 2 000 €/m². Devis gratuit sous 48h.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel artisan contacter pour rénover un appartement à Montigny-le-Bretonneux ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Espace Design intervient régulièrement à Montigny-le-Bretonneux pour des rénovations dans les résidences de la ville nouvelle Saint-Quentin-en-Yvelines. Artisan assuré décennale, 15 ans d'expérience, devis gratuit sous 48h.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment rénover un logement des années 80 à Montigny-le-Bretonneux ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour les logements modernes des années 80-90 à Montigny-le-Bretonneux, nous recommandons une rénovation complète : isolation thermique et phonique, mise aux normes électrique, refonte salle de bain et cuisine, nouveau revêtement de sols.",
      },
    },
    {
      '@type': 'Question',
      name: "Avez-vous une assurance décennale pour les travaux à Montigny-le-Bretonneux ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, Espace Design est couvert par une assurance décennale et une RC professionnelle. Vos travaux à Montigny-le-Bretonneux sont garantis 10 ans après la livraison.",
      },
    },
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Rénovation Yvelines', item: 'https://espacedesignparis.fr/renovation-yvelines' },
    { '@type': 'ListItem', position: 3, name: 'Montigny-le-Bretonneux', item: 'https://espacedesignparis.fr/renovation-montigny-le-bretonneux' },
  ],
}

export default function RenovationMontignyLeBretonneux() {
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

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Montigny-le-Bretonneux — 78180</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Rénovation appartement<br className="hidden sm:block" /> Montigny-le-Bretonneux
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Artisan rénovateur à Montigny-le-Bretonneux (78180) : logements modernes des années 80-90, résidences de la ville nouvelle Saint-Quentin-en-Yvelines. Rénovation complète, isolation, décoration intérieure contemporaine. Devis gratuit sous 48h.
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

      {/* Services */}
      <section className="py-20 bg-[#F2F2EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10">
            Nos services à Montigny-le-Bretonneux
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Rénovation logements modernes',
                desc: "Rénovation des appartements et résidences des années 80-90 à Montigny-le-Bretonneux : refonte complète des pièces d'eau, nouveaux revêtements, redistribution des espaces pour un intérieur actuel.",
              },
              {
                num: '02',
                title: 'Isolation et performance énergétique',
                desc: "Isolation thermique et phonique renforcée pour les logements collectifs de la ville nouvelle. Amélioration du DPE, réduction des charges, confort optimisé toute l'année.",
              },
              {
                num: '03',
                title: 'Décoration contemporaine',
                desc: "Cuisine ouverte, salle de bain épurée, parquet stratifié ou vinyle de qualité, peinture soignée. Un style moderne et fonctionnel pour sublimer votre logement de Montigny.",
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

      {/* Pricing table */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-8">
            Prix rénovation à Montigny-le-Bretonneux
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
                  ['Peinture appartement', '30 - 70 €/m²'],
                  ['Rénovation salle de bain', '4 000 - 12 000 €'],
                  ['Rénovation cuisine', '4 000 - 15 000 €'],
                  ['Parquet / sol stratifié', '40 - 90 €/m²'],
                  ['Rénovation complète appartement', '800 - 1 500 €/m²'],
                  ['Rénovation avec isolation renforcée', '1 200 - 2 000 €/m²'],
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

      {/* Client quote */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <blockquote className="border-l-2 border-[#D4AF37] pl-6">
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light italic mb-4">
              "Nous avons confié la rénovation de notre appartement à Montigny-le-Bretonneux à Espace Design. Cuisine refaite, salle de bain modernisée, peinture impeccable. Un artisan sérieux, des prix honnêtes et un résultat au-delà de nos attentes."
            </p>
            <cite className="text-[#B8960C] text-xs font-light uppercase tracking-widest not-italic">
              Christelle D. — Montigny-le-Bretonneux, 78180
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Checkmarks */}
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
                q: "Quel est le prix d'une rénovation à Montigny-le-Bretonneux ?",
                a: "Le coût d'une rénovation à Montigny-le-Bretonneux varie entre 800 et 1 500 €/m² pour une rénovation standard. Avec isolation renforcée pour les résidences des années 80-90, comptez 1 200 à 2 000 €/m².",
              },
              {
                q: "Quel artisan contacter pour rénover un appartement à Montigny-le-Bretonneux ?",
                a: "Espace Design intervient régulièrement dans les résidences de Montigny-le-Bretonneux et de la ville nouvelle Saint-Quentin-en-Yvelines. Assuré décennale, devis gratuit sous 48h.",
              },
              {
                q: "Comment rénover un logement des années 80 à Montigny-le-Bretonneux ?",
                a: "Pour les logements modernes des années 80-90, nous recommandons isolation thermique et phonique, mise aux normes électrique, refonte des pièces d'eau et nouveau revêtement de sols.",
              },
              {
                q: "Avez-vous une assurance décennale pour les travaux à Montigny-le-Bretonneux ?",
                a: "Oui, Espace Design est couvert par une assurance décennale et une RC professionnelle. Vos travaux à Montigny-le-Bretonneux sont garantis 10 ans après la livraison.",
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

      {/* Nearby cities */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Zones voisines</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: '/renovation-yvelines', label: 'Yvelines (78)' },
              { href: '/renovation-guyancourt', label: 'Guyancourt' },
              { href: '/renovation-versailles', label: 'Versailles' },
              { href: '/renovation-meudon', label: 'Meudon' },
              { href: '/renovation-gif-sur-yvette', label: 'Gif-sur-Yvette' },
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

      {/* Service links */}
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
              { href: '/blog/budget-renovation-paris-2025', label: 'Budget rénovation 2025' },
              { href: '/blog/renovation-salle-de-bain-prix-paris', label: 'Prix salle de bain Paris' },
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

      {/* Dark CTA */}
      <section className="py-20 bg-[#1C1C1C]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
            Votre projet à Montigny-le-Bretonneux
          </h2>
          <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Décrivez votre projet et recevez un devis gratuit et détaillé sous 48h. Déplacement sans engagement dans toute la commune de Montigny-le-Bretonneux et les Yvelines.
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
