import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Villeneuve-Saint-Georges (94190) — Artisan Rénovateur | Espace Design',
  description:
    'Artisan rénovateur à Villeneuve-Saint-Georges (94190). Rénovation appartement, maison, salle de bain, cuisine. Devis gratuit 48h. Espace Design.',
  keywords: [
    'rénovation appartement Villeneuve-Saint-Georges',
    'artisan rénovation Villeneuve-Saint-Georges',
    'décoration intérieure Villeneuve-Saint-Georges',
    'renovation Villeneuve-Saint-Georges 94190',
    'entreprise renovation Villeneuve-Saint-Georges Val-de-Marne',
    'artisan Villeneuve-Saint-Georges 94',
  ],
}

const schemaLocal = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Espace Design',
  description: 'Artisan rénovateur et décorateur intérieur à Villeneuve-Saint-Georges.',
  telephone: '+33611783867',
  url: 'https://espacedesignparis.fr/renovation-villeneuve-saint-georges',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Villeneuve-Saint-Georges',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Villeneuve-Saint-Georges',
    postalCode: '94190',
    addressCountry: 'FR',
  },
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le délai pour obtenir un devis à Villeneuve-Saint-Georges ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nous répondons à toutes les demandes de devis sous 48h. Le déplacement est gratuit et sans engagement à Villeneuve-Saint-Georges et dans toute la région.',
      },
    },
    {
      '@type': 'Question',
      name: "Quel est le prix d'une rénovation complète à Villeneuve-Saint-Georges ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le coût d'une rénovation complète varie entre 800 et 1 500 €/m² selon l'état du bien et les matériaux choisis. Pour les finitions haut de gamme, le budget peut atteindre 2 000 à 3 000 €/m². Contactez-nous pour un devis personnalisé.",
      },
    },
    {
      '@type': 'Question',
      name: 'Avez-vous une assurance décennale ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, Espace Design est couvert par une assurance décennale et une assurance responsabilité civile professionnelle. Nos garanties vous protègent pendant 10 ans après la livraison des travaux.",
      },
    },
    {
      '@type': 'Question',
      name: 'Intervenez-vous à Villeneuve-Saint-Georges ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, nous intervenons régulièrement à Villeneuve-Saint-Georges et dans toute l'Île-de-France. Contactez-nous pour un devis gratuit sous 48h.",
      },
    },
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Rénovation Val-de-Marne', item: 'https://espacedesignparis.fr/renovation-val-de-marne' },
    { '@type': 'ListItem', position: 3, name: 'Villeneuve-Saint-Georges', item: 'https://espacedesignparis.fr/renovation-villeneuve-saint-georges' },
  ],
}

export default function RenovationVilleneuveStGeorges() {
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
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Villeneuve-Saint-Georges — 94190</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Rénovation Villeneuve-Saint-Georges
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Artisan rénovateur et décorateur intérieur à Villeneuve-Saint-Georges. Rénovation complète, salle de bain, cuisine, parquet et finitions soignées. Commune du Val-de-Marne proche Choisy-le-Roi, Vitry-sur-Seine et Ablon-sur-Seine. Devis gratuit sous 48h.
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
            Nos services à Villeneuve-Saint-Georges
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Rénovation complète', desc: "Rénovation intégrale de votre appartement ou maison à Villeneuve-Saint-Georges : second œuvre, finitions, agencement. Un projet clé en main avec un seul interlocuteur dédié." },
              { num: '02', title: 'Salle de bain & cuisine', desc: "Rénovation de salle de bain et de cuisine avec des matériaux durables et esthétiques. Faïence, robinetterie, plan de travail, meubles sur-mesure — qualité garantie." },
              { num: '03', title: 'Parquet, peinture & finitions', desc: "Pose de parquet, peinture décorative, plâtrerie, menuiserie intérieure. Des finitions soignées qui valorisent votre bien et améliorent votre cadre de vie." },
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
            Tous nos services
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/renovation-salle-de-bain-paris', label: 'Rénovation salle de bain' },
              { href: '/renovation-cuisine-paris', label: 'Rénovation cuisine' },
              { href: '/peinture-paris', label: 'Peinture' },
              { href: '/parquet-paris', label: 'Parquet' },
              { href: '/carrelage-paris', label: 'Carrelage' },
              { href: '/electricite-paris', label: 'Électricité' },
              { href: '/plomberie-paris', label: 'Plomberie' },
              { href: '/menuiserie-paris', label: 'Menuiserie' },
              { href: '/isolation-paris', label: 'Isolation' },
              { href: '/platrererie-paris', label: 'Plâtrerie' },
              { href: '/decoration-interieure-paris', label: 'Décoration intérieure' },
              { href: '/amenagement-interieur-paris', label: 'Aménagement intérieur' },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="text-xs text-[#1C1C1C] border border-gray-200 rounded px-3 py-1.5 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10">
            Une réalisation
          </h2>
          <div className="relative rounded-xl overflow-hidden h-72 sm:h-96">
            <Image src="/images/realisations/18-salon-renovation-complete.jpg" alt="Salon rénové avec finitions haut de gamme — rénovation appartement Villeneuve-Saint-Georges" fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
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

      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-8">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'Quel est le délai pour obtenir un devis à Villeneuve-Saint-Georges ?',
                a: 'Nous répondons à toutes les demandes sous 48h. Le déplacement est gratuit et sans engagement à Villeneuve-Saint-Georges.',
              },
              {
                q: "Quel est le prix d'une rénovation complète à Villeneuve-Saint-Georges ?",
                a: "Le coût varie entre 800 et 1 500 €/m² selon l'état du bien et les matériaux. Pour du haut de gamme, comptez 2 000 à 3 000 €/m².",
              },
              {
                q: 'Avez-vous une assurance décennale ?',
                a: 'Oui, Espace Design est couvert par une assurance décennale et une RC professionnelle. Vos travaux sont garantis 10 ans.',
              },
              {
                q: 'Intervenez-vous à Villeneuve-Saint-Georges ?',
                a: "Oui, nous intervenons régulièrement à Villeneuve-Saint-Georges et dans toute l'Île-de-France. Devis gratuit sous 48h.",
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
              { href: '/renovation-choisy-le-roi', label: 'Choisy-le-Roi' },
              { href: '/renovation-vitry-sur-seine', label: 'Vitry-sur-Seine' },
              { href: '/renovation-champigny-sur-marne', label: 'Champigny-sur-Marne' },
              { href: '/renovation-maisons-alfort', label: 'Maisons-Alfort' },
              { href: '/renovation-val-de-marne', label: 'Val-de-Marne (94)' },
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

      <section className="py-20 bg-[#1C1C1C]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
            Votre projet à Villeneuve-Saint-Georges
          </h2>
          <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Décrivez votre projet et recevez un devis gratuit et détaillé sous 48h. Déplacement sans engagement dans toute la commune de Villeneuve-Saint-Georges.
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
