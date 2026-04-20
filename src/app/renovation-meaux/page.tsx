import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Meaux (77100) — Artisan Rénovateur | Espace Design',
  description:
    'Artisan rénovateur à Meaux (77100), Seine-et-Marne : centre historique médiéval, pavillons, résidences. Rénovation 700-2500€/m². Devis gratuit 48h.',
  keywords: [
    'rénovation appartement Meaux',
    'artisan rénovation Meaux',
    'décoration intérieure Meaux',
    'renovation Meaux 77100',
    'entreprise renovation Meaux',
    'artisan Meaux Seine-et-Marne',
    'rénovation maison Meaux 77',
    'rénovation pavillon Meaux',
  ],
}

const schemaLocal = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Espace Design',
  description: 'Artisan rénovateur et décorateur intérieur à Meaux, ville historique de Seine-et-Marne.',
  telephone: '+33611783867',
  url: 'https://espacedesignparis.fr/renovation-meaux',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Meaux',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Meaux',
    postalCode: '77100',
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
      name: 'Quel est le prix d\'une rénovation à Meaux ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'À Meaux, le coût d\'une rénovation varie entre 700 et 1 200 €/m² pour une rénovation standard. Pour les maisons de ville du centre historique ou les pavillons en développement, comptez 1 200 à 2 500 €/m² selon les finitions. Devis gratuit sous 48h.',
      },
    },
    {
      '@type': 'Question',
      name: 'Intervenez-vous dans les nouveaux quartiers de Meaux en développement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, Espace Design intervient dans toute la ville de Meaux, des maisons de ville du centre médiéval aux résidences neuves ou récentes en périphérie. Nous travaillons aussi à Lagny-sur-Marne, Chelles et Torcy à proximité.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment rénover une maison de ville dans le centre historique de Meaux ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pour les maisons de ville du centre historique de Meaux, nous recommandons une approche respectueuse du bâti ancien : conservation des éléments d\'origine, peinture à la chaux, parquet massif, menuiseries en bois. Devis personnalisé sous 48h.',
      },
    },
    {
      '@type': 'Question',
      name: 'Avez-vous une assurance décennale pour les travaux à Meaux ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, Espace Design est couvert par une assurance décennale et une RC professionnelle. Tous vos travaux à Meaux sont garantis 10 ans après la livraison.',
      },
    },
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Rénovation Seine-et-Marne', item: 'https://espacedesignparis.fr/renovation-appartement-paris' },
    { '@type': 'ListItem', position: 3, name: 'Meaux', item: 'https://espacedesignparis.fr/renovation-meaux' },
  ],
}

export default function RenovationMeaux() {
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
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Meaux — 77100 — Seine-et-Marne</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Rénovation appartement<br className="hidden sm:block" /> Meaux
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Artisan rénovateur à Meaux (77100) : maisons de ville du centre historique médiéval, pavillons résidentiels, résidences en développement. Rénovation complète, finitions soignées. Devis gratuit sous 48h.
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
            Nos services à Meaux
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Rénovation maisons historiques', desc: 'Restauration des maisons de ville du centre médiéval de Meaux : conservation des éléments anciens, peinture à la chaux, parquet massif, menuiseries en bois. Respect du caractère historique du bâti.' },
              { num: '02', title: 'Rénovation résidences neuves', desc: 'Aménagement et personnalisation des appartements et pavillons des quartiers en développement : revêtements, salles de bain, cuisines équipées, cloisonnement sur-mesure.' },
              { num: '03', title: 'Finitions & décoration', desc: 'Harmonie des matériaux, carrelage, enduits, peinture décorative. Nous apportons à votre intérieur à Meaux une identité propre, élégante et durable.' },
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
            Prix rénovation à Meaux
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
                  ['Rénovation maison de ville', '900 - 2 500 €/m²'],
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

      <section className="py-14 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <blockquote className="border-l-2 border-[#D4AF37] pl-6">
            <p className="text-gray-600 text-base font-light italic leading-relaxed mb-4">
              "Patrick a entièrement rénové notre maison de ville près de la cathédrale de Meaux. Travail soigné, respect du cachet ancien, aucune mauvaise surprise. Nous sommes ravis du résultat et du sérieux de l'artisan."
            </p>
            <cite className="text-[#B8960C] text-xs font-light uppercase tracking-widest not-italic">M. et Mme Garnier — Meaux centre (77100)</cite>
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
                q: 'Quel est le prix d\'une rénovation à Meaux ?',
                a: 'À Meaux, le coût d\'une rénovation varie entre 700 et 1 200 €/m² pour une rénovation standard. Pour les maisons de ville du centre historique ou les pavillons en développement, comptez 1 200 à 2 500 €/m² selon les finitions.',
              },
              {
                q: 'Intervenez-vous dans les nouveaux quartiers de Meaux en développement ?',
                a: 'Oui, Espace Design intervient dans toute la ville de Meaux, des maisons de ville du centre médiéval aux résidences récentes en périphérie. Nous travaillons aussi à Lagny-sur-Marne, Chelles et Torcy à proximité.',
              },
              {
                q: 'Comment rénover une maison de ville dans le centre historique de Meaux ?',
                a: 'Pour les maisons de ville du centre historique de Meaux, nous recommandons une approche respectueuse du bâti ancien : conservation des éléments d\'origine, peinture à la chaux, parquet massif, menuiseries en bois.',
              },
              {
                q: 'Avez-vous une assurance décennale pour les travaux à Meaux ?',
                a: 'Oui, Espace Design est couvert par une assurance décennale et une RC professionnelle. Tous vos travaux à Meaux sont garantis 10 ans après la livraison.',
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
              { href: '/renovation-appartement-paris', label: 'Paris' },
              { href: '/renovation-chelles', label: 'Chelles' },
              { href: '/renovation-lagny-sur-marne', label: 'Lagny-sur-Marne' },
              { href: '/renovation-torcy', label: 'Torcy' },
              { href: '/renovation-melun', label: 'Melun' },
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
              { href: '/blog/renovation-avant-vente-paris', label: 'Rénover avant de vendre' },
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
            Votre projet à Meaux
          </h2>
          <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Décrivez votre projet et recevez un devis gratuit et détaillé sous 48h. Déplacement sans engagement dans toute la commune de Meaux et ses environs (Lagny-sur-Marne, Chelles, Torcy).
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
