import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Plomberie Paris — Rénovation, Remplacement Canalisations & Devis | Espace Design',
  description:
    'Plombier rénovation à Paris. Remplacement canalisations, plomberie salle de bain et cuisine, mise aux normes. Devis gratuit 48h.',
  keywords: [
    'plomberie Paris',
    'plombier rénovation Paris',
    'remplacement canalisations Paris',
    'plomberie salle de bain Paris prix',
    'tuyauterie Paris appartement',
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://espacedesignparis.fr/services' },
    { '@type': 'ListItem', position: 3, name: 'Plomberie Paris', item: 'https://espacedesignparis.fr/plomberie-paris' },
  ],
}

const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Plomberie Paris — Rénovation Appartement',
  provider: {
    '@type': 'HomeAndConstructionBusiness',
    name: 'Espace Design',
    telephone: '+33611783867',
    url: 'https://espacedesignparis.fr',
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '47', bestRating: '5', worstRating: '1' },
  },
  areaServed: {
    '@type': 'City',
    name: 'Paris',
  },
  priceRange: '2000-15000',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation plomberie à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le remplacement complet de la plomberie d\'un appartement parisien coûte entre 3 000 et 6 000 € pour un studio, 5 000 à 10 000 € pour un 2-3 pièces. La rénovation de la plomberie d\'une salle de bain seule revient à 1 500 à 4 000 €. Ces prix incluent fourniture et pose des nouvelles canalisations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Les appartements parisiens anciens ont-ils des canalisations en plomb ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Les immeubles construits avant 1948 peuvent avoir des canalisations en plomb, interdites depuis 1995. La loi impose de les remplacer. Un diagnostic plomb (état des risques) est obligatoire à la vente. Lors d\'une rénovation, c\'est le moment idéal pour remplacer toute la tuyauterie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Faut-il vider l\'eau avant des travaux de plomberie à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, l\'eau de l\'appartement doit être coupée pendant les travaux. Dans les immeubles collectifs parisiens, c\'est le syndic ou le gardien qui gère la vanne générale. Les travaux se font en général en une journée pour une intervention ponctuelle, 1 à 2 semaines pour un remplacement complet.',
      },
    },
  ],
}

export default function PlomberieParis() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
      />

      {/* Hero compact */}
      <section className="pt-28 sm:pt-36 pb-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Plomberie & Sanitaires</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Plomberie Paris —<br className="hidden sm:block" /> rénovation appartement
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Plombier rénovation à Paris. Remplacement canalisations, plomberie salle de bain et cuisine, mise aux normes. Devis gratuit sous 48h.
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

      {/* Tableau de prix */}
      <section className="py-20 bg-[#F2F2EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10">
            Tarifs plomberie Paris
          </h2>
          <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
            {[
              { label: 'Intervention ponctuelle', price: '150 – 400 €' },
              { label: 'Plomberie salle de bain', price: '1 500 – 4 000 €' },
              { label: 'Remplacement canalisations studio', price: '3 000 – 6 000 €' },
              { label: 'Remplacement complet 3 pièces', price: '5 000 – 10 000 €' },
            ].map((row, i) => (
              <div
                key={row.label}
                className={`flex items-center justify-between px-6 py-4 ${i !== 0 ? 'border-t border-gray-100' : ''}`}
              >
                <span className="text-sm text-gray-700 font-light">{row.label}</span>
                <span className="font-display text-sm font-semibold text-[#B8960C]">{row.price}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 font-light mt-3">Tarifs indicatifs — devis personnalisé sous 48h.</p>
        </div>
      </section>

      {/* Prestations */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10">
            Nos prestations plomberie
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Diagnostic canalisations',
              'Remplacement tuyauterie cuivre ou PER',
              'Évacuations et chutes',
              'Installation douche à l\'italienne',
              'Pose baignoire et vasque',
              'Alimentation cuisine et lave-linge',
              'Traitement canalisations en plomb',
              'Robinetterie haut de gamme',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-gray-600 font-light">
                <CheckCircle size={15} className="text-[#B8960C] flex-shrink-0" />
                {item}
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
                q: 'Quel est le prix d\'une rénovation plomberie à Paris ?',
                a: 'Le remplacement complet de la plomberie d\'un appartement parisien coûte entre 3 000 et 6 000 € pour un studio, 5 000 à 10 000 € pour un 2-3 pièces. La rénovation de la plomberie d\'une salle de bain seule revient à 1 500 à 4 000 €. Ces prix incluent fourniture et pose des nouvelles canalisations.',
              },
              {
                q: 'Les appartements parisiens anciens ont-ils des canalisations en plomb ?',
                a: 'Les immeubles construits avant 1948 peuvent avoir des canalisations en plomb, interdites depuis 1995. La loi impose de les remplacer. Un diagnostic plomb (état des risques) est obligatoire à la vente. Lors d\'une rénovation, c\'est le moment idéal pour remplacer toute la tuyauterie.',
              },
              {
                q: 'Faut-il vider l\'eau avant des travaux de plomberie à Paris ?',
                a: 'Oui, l\'eau de l\'appartement doit être coupée pendant les travaux. Dans les immeubles collectifs parisiens, c\'est le syndic ou le gardien qui gère la vanne générale. Les travaux se font en général en une journée pour une intervention ponctuelle, 1 à 2 semaines pour un remplacement complet.',
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

      {/* Zones */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Zones d'intervention</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'Paris 6e', href: '/renovation-paris-6e' },
              { label: 'Paris 7e', href: '/renovation-paris-7e' },
              { label: 'Paris 8e', href: '/renovation-paris-8e' },
              { label: 'Paris 15e', href: '/renovation-paris-15e' },
              { label: 'Paris 16e', href: '/renovation-paris-16e' },
              { label: 'Paris 17e', href: '/renovation-paris-17e' },
              { label: 'Neuilly-sur-Seine', href: '/renovation-neuilly-sur-seine' },
              { label: 'Boulogne-Billancourt', href: '/renovation-boulogne-billancourt' },
              { label: 'Levallois-Perret', href: '/renovation-levallois-perret' },
              { label: 'Versailles', href: '/renovation-versailles' },
            ].map((z) => (
              <Link
                key={z.label}
                href={z.href}
                className="text-xs text-[#1C1C1C] border border-gray-200 rounded px-3 py-1.5 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light"
              >
                {z.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1C1C1C]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
            Votre projet plomberie à Paris
          </h2>
          <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Décrivez votre projet et recevez un devis gratuit et détaillé sous 48h. Déplacement sans engagement dans tout Paris et proche banlieue.
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
