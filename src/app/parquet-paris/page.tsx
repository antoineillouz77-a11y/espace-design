import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Parquet Paris — Pose, Rénovation & Vitrification | Artisan Espace Design',
  description:
    'Artisan parqueteur à Paris. Pose parquet massif ou contrecollé, ponçage, vitrification, huilage. Prix : 25 à 80 €/m². Devis gratuit 48h.',
  keywords: [
    'parquet Paris',
    'pose parquet Paris prix',
    'vitrification parquet Paris',
    'parquet massif Paris',
    'rénovation parquet Paris',
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://espacedesignparis.fr/services' },
    { '@type': 'ListItem', position: 3, name: 'Parquet Paris', item: 'https://espacedesignparis.fr/parquet-paris' },
  ],
}

const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Parquet Paris — Pose et Rénovation',
  provider: {
    '@type': 'HomeAndConstructionBusiness',
    name: 'Espace Design',
    telephone: '+33611783867',
    url: 'https://espacedesignparis.fr',
  },
  priceRange: '25-80 €/m²',
  areaServed: {
    '@type': 'City',
    name: 'Paris',
  },
  url: 'https://espacedesignparis.fr/parquet-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix de la pose de parquet à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La pose de parquet à Paris coûte entre 40 et 70 €/m² pour un parquet contrecollé (fourniture + pose incluse). Pour du parquet massif en chêne, comptez 60 à 120 €/m². Le ponçage et la vitrification d'un parquet existant reviennent à 25-45 €/m².",
      },
    },
    {
      '@type': 'Question',
      name: "Vaut-il mieux poncer ou remplacer un vieux parquet ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Si les lames font plus de 12 mm d'épaisseur, le ponçage est possible jusqu'à 2-3 fois sur la durée de vie du parquet. En dessous, ou si les lames sont très abîmées, le remplacement est préférable. Un artisan peut vous conseiller après inspection. Le ponçage coûte 2 à 3 fois moins cher que le remplacement.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelle finition choisir pour un parquet parisien : huile ou vernis ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le vernis offre une surface plus résistante et facile d'entretien, idéal pour les familles. L'huile donne un rendu plus naturel très apprécié dans les appartements haussmanniens, mais nécessite un ré-huilage tous les 2-3 ans. Le vernis mat est le compromis le plus courant à Paris actuellement.",
      },
    },
  ],
}

export default function ParquetParis() {
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

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Sols & Parquet</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Parquet Paris — pose,<br className="hidden sm:block" /> rénovation, vitrification
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Artisan parqueteur à Paris. Pose de parquet massif ou contrecollé, ponçage, vitrification, huilage. Devis gratuit sous 48h.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-[#1C1C1C] text-white px-7 py-3.5 rounded font-light text-sm tracking-wide hover:bg-[#B8960C] transition-colors duration-300"
            >
              Devis gratuit <ArrowRight size={13} />
            </Link>
            <a
              href="tel:+33611783867"
              className="flex items-center justify-center gap-2 border border-[#1C1C1C] text-[#1C1C1C] px-7 py-3.5 rounded font-light text-sm tracking-wide hover:bg-[#1C1C1C] hover:text-white transition-colors duration-300"
            >
              <Phone size={15} />
              06 11 78 38 67
            </a>
          </div>
        </div>
      </section>

      {/* Tableau prix */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-8">
            Prix du parquet à Paris
          </h2>
          <div className="overflow-hidden rounded-lg border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#F2F2EE]">
                  <th className="text-left px-5 py-3 font-display font-semibold text-[#1C1C1C]">Prestation</th>
                  <th className="text-right px-5 py-3 font-display font-semibold text-[#1C1C1C]">Prix indicatif</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { label: 'Ponçage + vitrification', price: '25 – 45 €/m²' },
                  { label: 'Pose parquet contrecollé', price: '40 – 70 €/m²' },
                  { label: 'Pose parquet massif chêne', price: '60 – 120 €/m²' },
                  { label: 'Parquet Point de Hongrie', price: '80 – 150 €/m²' },
                ].map((row) => (
                  <tr key={row.label} className="bg-white hover:bg-[#FAFAF8] transition-colors">
                    <td className="px-5 py-3.5 text-gray-700 font-light">{row.label}</td>
                    <td className="px-5 py-3.5 text-right text-[#B8960C] font-semibold">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-400 text-xs font-light mt-3">Prix fourniture + pose. Variables selon essence de bois et configuration du chantier.</p>
        </div>
      </section>

      {/* Prestations */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-8">
            Nos prestations parquet à Paris
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Dépose ancien revêtement",
              "Préparation du support",
              "Pose à la colle ou clouée",
              "Tous types (massif, contrecollé, stratifié)",
              "Parquet Point de Hongrie",
              "Ponçage et vitrification",
              "Huilage et traitement",
              "Réparation lames isolées",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 border border-gray-100">
                <CheckCircle size={15} className="text-[#B8960C] flex-shrink-0" />
                <span className="text-gray-700 text-sm font-light">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-8">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Quel est le prix de la pose de parquet à Paris ?",
                a: "La pose de parquet à Paris coûte entre 40 et 70 €/m² pour un parquet contrecollé (fourniture + pose incluse). Pour du parquet massif en chêne, comptez 60 à 120 €/m². Le ponçage et la vitrification d'un parquet existant reviennent à 25-45 €/m².",
              },
              {
                q: "Vaut-il mieux poncer ou remplacer un vieux parquet ?",
                a: "Si les lames font plus de 12 mm d'épaisseur, le ponçage est possible jusqu'à 2-3 fois sur la durée de vie du parquet. En dessous, ou si les lames sont très abîmées, le remplacement est préférable. Un artisan peut vous conseiller après inspection. Le ponçage coûte 2 à 3 fois moins cher que le remplacement.",
              },
              {
                q: "Quelle finition choisir pour un parquet parisien : huile ou vernis ?",
                a: "Le vernis offre une surface plus résistante et facile d'entretien, idéal pour les familles. L'huile donne un rendu plus naturel très apprécié dans les appartements haussmanniens, mais nécessite un ré-huilage tous les 2-3 ans. Le vernis mat est le compromis le plus courant à Paris actuellement.",
              },
            ].map((item) => (
              <details key={item.q} className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-5 group">
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

      {/* Voir aussi */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Voir aussi</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/tarifs', label: 'Nos tarifs 2025' },
              { href: '/faq', label: 'FAQ rénovation' },
              { href: '/blog/parquet-massif-paris', label: 'Guide parquet massif Paris' },
              { href: '/blog/parquet-chene-paris', label: 'Parquet chêne à Paris' },
              { href: '/blog/renovation-parquet-paris', label: 'Rénover son parquet' },
              { href: '/blog/sol-beton-cire-paris', label: 'Béton ciré Paris' },
              { href: '/carrelage-paris', label: 'Carrelage Paris' },
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
            Un projet parquet à Paris ?
          </h2>
          <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Décrivez votre projet et recevez un devis gratuit et détaillé sous 48h. Déplacement sans engagement.
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
