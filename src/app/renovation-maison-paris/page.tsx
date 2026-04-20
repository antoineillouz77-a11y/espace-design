import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Maison Paris & Île-de-France — Artisan Qualifié | Espace Design',
  description:
    "Rénovation de maison en Île-de-France. Façade, toiture, intérieur complet, extension. Artisan qualifié, devis gratuit 48h. Espace Design.",
  keywords: [
    'rénovation maison Paris',
    'rénovation maison Île-de-France',
    'travaux maison Paris',
    'artisan maison IDF',
    'rénovation maison prix',
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://espacedesignparis.fr/services' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Maison Paris', item: 'https://espacedesignparis.fr/renovation-maison-paris' },
  ],
}

const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Rénovation Maison Île-de-France',
  provider: {
    '@type': 'HomeAndConstructionBusiness',
    name: 'Espace Design',
    telephone: '+33611783867',
    url: 'https://espacedesignparis.fr',
  },
  areaServed: { '@type': 'State', name: 'Île-de-France' },
  priceRange: '20000-200000',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix d'une rénovation de maison en Île-de-France ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La rénovation d'une maison en Île-de-France coûte entre 700 et 1 500 €/m² pour une rénovation standard, et jusqu'à 2 500 €/m² pour du haut de gamme. Une maison de 100 m² complètement rénovée représente donc un budget de 70 000 à 150 000 €. Les maisons présentent souvent des postes supplémentaires vs appartement : toiture, façade, isolation des combles.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelles différences entre rénover une maison et un appartement ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La rénovation d'une maison implique souvent des travaux supplémentaires : toiture, façade, isolation des combles, système de chauffage central (chaudière ou PAC), jardin et extérieurs. Le coût est généralement plus élevé. En revanche, moins de contraintes de copropriété : travaux plus libres, horaires plus flexibles.",
      },
    },
    {
      '@type': 'Question',
      name: "Intervenez-vous dans toute l'Île-de-France pour les maisons ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, nous intervenons dans toute l'Île-de-France (75, 92, 93, 94, 78, 91, 95). Devis gratuit sans engagement. Nos équipes se déplacent à Versailles, Saint-Germain-en-Laye, Neuilly, Boulogne, Vincennes et partout en grande couronne.",
      },
    },
  ],
}

const travaux = [
  {
    num: '01',
    title: 'Rénovation intérieure complète',
    desc: "Cuisine, salles de bain, peinture, parquet, électricité, plomberie. Travaux tous corps d'état sous une seule direction.",
  },
  {
    num: '02',
    title: 'Isolation & chauffage',
    desc: "Isolation des combles, murs, planchers. Remplacement chaudière, installation PAC. Aides MaPrimeRénov' disponibles.",
  },
  {
    num: '03',
    title: 'Maçonnerie & extensions',
    desc: "Création d'ouverture, abattage de mur porteur, extension de plain-pied ou étage, véranda.",
  },
  {
    num: '04',
    title: 'Façade & toiture',
    desc: "Ravalement de façade, peinture extérieure, isolation par l'extérieur, réfection de toiture tuiles ou ardoises.",
  },
  {
    num: '05',
    title: 'Aménagement sous-sol',
    desc: 'Transformation cave en pièce de vie, salle de sport, bureau ou suite parentale. Étanchéité et ventilation.',
  },
  {
    num: '06',
    title: 'Jardin & extérieurs',
    desc: 'Terrasse bois ou carrelage, allée pavée, clôture, portail, local vélo ou poubelles.',
  },
]

export default function RenovationMaisonParis() {
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
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Rénovation Maison</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Rénovation maison Paris & Île-de-France
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Rénovation complète de maison en Île-de-France. Façade, toiture, intérieur, extension, isolation. Artisan qualifié. Devis gratuit sous 48h.
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

      {/* Types de travaux */}
      <section className="py-20 bg-[#F2F2EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10">
            Nos prestations rénovation maison
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {travaux.map((t) => (
              <div key={t.title} className="bg-white rounded-lg p-6 border border-gray-100">
                <div className="font-display text-3xl font-semibold text-[#D4AF37] mb-3">{t.num}</div>
                <div className="w-6 h-px bg-[#D4AF37]/50 mb-4" />
                <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-2">{t.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prestations */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-8">
            Ce que nous réalisons
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Rénovation intérieure complète clé en main',
              'Isolation thermique et acoustique',
              'Réfection toiture et zinguerie',
              'Ravalement de façade',
              "Création d'ouvertures et extensions",
              'Remplacement menuiseries extérieures',
              'Aménagement sous-sol et combles',
              'Terrassement et aménagements extérieurs',
            ].map((p) => (
              <div key={p} className="flex items-center gap-2 text-sm text-gray-600 font-light">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0" />
                {p}
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
                q: "Quel est le prix d'une rénovation de maison en Île-de-France ?",
                a: "La rénovation d'une maison en Île-de-France coûte entre 700 et 1 500 €/m² pour une rénovation standard, et jusqu'à 2 500 €/m² pour du haut de gamme. Une maison de 100 m² complètement rénovée représente donc un budget de 70 000 à 150 000 €. Les maisons présentent souvent des postes supplémentaires vs appartement : toiture, façade, isolation des combles.",
              },
              {
                q: "Quelles différences entre rénover une maison et un appartement ?",
                a: "La rénovation d'une maison implique souvent des travaux supplémentaires : toiture, façade, isolation des combles, système de chauffage central (chaudière ou PAC), jardin et extérieurs. Le coût est généralement plus élevé. En revanche, moins de contraintes de copropriété : travaux plus libres, horaires plus flexibles.",
              },
              {
                q: "Intervenez-vous dans toute l'Île-de-France pour les maisons ?",
                a: "Oui, nous intervenons dans toute l'Île-de-France (75, 92, 93, 94, 78, 91, 95). Devis gratuit sans engagement. Nos équipes se déplacent à Versailles, Saint-Germain-en-Laye, Neuilly, Boulogne, Vincennes et partout en grande couronne.",
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
              { href: '/renovation-versailles', label: 'Versailles' },
              { href: '/renovation-saint-germain-en-laye', label: 'Saint-Germain-en-Laye' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
              { href: '/renovation-rueil-malmaison', label: 'Rueil-Malmaison' },
              { href: '/renovation-saint-cloud', label: 'Saint-Cloud' },
              { href: '/renovation-meudon', label: 'Meudon' },
              { href: '/renovation-le-vesinet', label: 'Le Vésinet' },
              { href: '/renovation-garches', label: 'Garches' },
              { href: '/renovation-chatou', label: 'Chatou' },
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

      {/* Voir aussi */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Voir aussi</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/renovation-appartement-paris', label: 'Rénovation appartement Paris' },
              { href: '/isolation-paris', label: 'Isolation Paris' },
              { href: '/blog/renovation-maison-paris', label: 'Guide rénovation maison Paris' },
              { href: '/blog/budget-renovation-paris-2025', label: 'Budget rénovation 2025' },
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
            Votre projet de rénovation maison
          </h2>
          <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Rénovation intérieure, façade, toiture, extension — décrivez votre projet et recevez un devis gratuit sous 48h. Déplacement sans engagement dans toute l'Île-de-France.
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
