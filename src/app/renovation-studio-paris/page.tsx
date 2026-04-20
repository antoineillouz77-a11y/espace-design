import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Studio Paris — Optimisation Espace & Sur Mesure | Espace Design',
  description:
    'Rénovation de studio à Paris. Lit escamotable, mezzanine, cloisons coulissantes, optimisation 15-35 m². Devis gratuit 48h. Espace Design.',
  keywords: [
    'rénovation studio Paris',
    'studio Paris prix',
    'optimisation studio Paris',
    'petit appartement Paris',
    'lit escamotable Paris',
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://espacedesignparis.fr/services' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Studio Paris', item: 'https://espacedesignparis.fr/renovation-studio-paris' },
  ],
}

const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Rénovation Studio Paris',
  provider: {
    '@type': 'HomeAndConstructionBusiness',
    name: 'Espace Design',
    telephone: '+33611783867',
    url: 'https://espacedesignparis.fr',
  },
  areaServed: { '@type': 'City', name: 'Paris' },
  priceRange: '5000-25000',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix d'une rénovation de studio à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La rénovation d'un studio parisien (15-35 m²) coûte entre 8 000 et 30 000 € selon l'ampleur des travaux. Une rénovation complète avec mezzanine ou lit escamotable représente 15 000 à 25 000 €. Un simple rafraîchissement (peinture, sol, salle de bain) revient à 5 000-12 000 €.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment optimiser un studio parisien de 20 m² ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les solutions les plus efficaces : lit mezzanine (libère 8-12 m² au sol), lit escamotable avec canapé intégré, cloison coulissante pour séparer chambre et séjour, rangements du sol au plafond, cuisine équipée compacte, miroirs pour agrandir visuellement.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il un permis pour rénover un studio à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Non pour les travaux intérieurs standard. Une déclaration préalable de travaux est nécessaire si vous créez une mezzanine de plus de 5 m² (surface plancher créée). Pas de permis pour la peinture, le sol, la salle de bain, la cuisine, les cloisons légères.",
      },
    },
  ],
}

const solutions = [
  {
    num: '01',
    title: 'Lit mezzanine',
    desc: 'Gagnez un niveau de rangement ou créer un espace nuit. Nécessite 3 m de hauteur sous plafond. Prix : 3 000 à 8 000 €.',
  },
  {
    num: '02',
    title: 'Lit escamotable',
    desc: 'Lit mural rabattable avec canapé intégré. Se replie en 30 secondes. Libère 8 m² de jour. Prix : 2 500 à 6 000 €.',
  },
  {
    num: '03',
    title: 'Cloison coulissante',
    desc: "Sépare le coin nuit du séjour sans mur fixe. Ouverte le jour, fermée la nuit. Prix : 800 à 2 500 €.",
  },
  {
    num: '04',
    title: 'Rangements intégrés',
    desc: 'Placards du sol au plafond, niches sur mesure, rangements sous mezzanine. Exploite chaque centimètre.',
  },
  {
    num: '05',
    title: 'Cuisine compacte',
    desc: 'Cuisine équipée en L ou en ligne, optimisée pour 3-5 m². Avec lave-vaisselle et lave-linge intégrés.',
  },
  {
    num: '06',
    title: 'Salle de bain optimisée',
    desc: 'Douche italienne (sans receveur), WC suspendu, vasque sur meuble. Gain de place maximal en moins de 4 m².',
  },
]

export default function RenovationStudioParis() {
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
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Rénovation Studio</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Rénovation studio Paris
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Lit escamotable, mezzanine, cloisons coulissantes, rangements sur mesure. Optimisation complète de votre studio parisien 15-35 m². Devis gratuit sous 48h.
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

      {/* Solutions d'optimisation */}
      <section className="py-20 bg-[#F2F2EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10">
            Nos solutions pour studio parisien
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s) => (
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

      {/* Prestations */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-8">
            Ce que nous réalisons
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Conception et plans d'optimisation 3D",
              'Création de mezzanine sur mesure',
              'Pose lit escamotable et mobilier intégré',
              'Rénovation salle de bain compacte',
              'Installation cuisine équipée compacte',
              'Cloisons coulissantes et amovibles',
              'Peinture et revêtements de sol',
              'Électricité et éclairage optimisé',
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
                q: "Quel est le prix d'une rénovation de studio à Paris ?",
                a: "La rénovation d'un studio parisien (15-35 m²) coûte entre 8 000 et 30 000 € selon l'ampleur des travaux. Une rénovation complète avec mezzanine ou lit escamotable représente 15 000 à 25 000 €. Un simple rafraîchissement (peinture, sol, salle de bain) revient à 5 000-12 000 €.",
              },
              {
                q: "Comment optimiser un studio parisien de 20 m² ?",
                a: "Les solutions les plus efficaces : lit mezzanine (libère 8-12 m² au sol), lit escamotable avec canapé intégré, cloison coulissante pour séparer chambre et séjour, rangements du sol au plafond, cuisine équipée compacte, miroirs pour agrandir visuellement.",
              },
              {
                q: "Faut-il un permis pour rénover un studio à Paris ?",
                a: "Non pour les travaux intérieurs standard. Une déclaration préalable de travaux est nécessaire si vous créez une mezzanine de plus de 5 m² (surface plancher créée). Pas de permis pour la peinture, le sol, la salle de bain, la cuisine, les cloisons légères.",
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
              { href: '/renovation-paris-5e', label: 'Paris 5e' },
              { href: '/renovation-paris-10e', label: 'Paris 10e' },
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-paris-18e', label: 'Paris 18e' },
              { href: '/renovation-paris-19e', label: 'Paris 19e' },
              { href: '/renovation-paris-20e', label: 'Paris 20e' },
              { href: '/renovation-montreuil', label: 'Montreuil' },
              { href: '/renovation-vincennes', label: 'Vincennes' },
              { href: '/renovation-bagnolet', label: 'Bagnolet' },
              { href: '/renovation-pantin', label: 'Pantin' },
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
              { href: '/blog/renovation-studio-paris', label: 'Guide rénovation studio Paris' },
              { href: '/amenagement-interieur-paris', label: 'Aménagement intérieur Paris' },
              { href: '/menuiserie-paris', label: 'Menuiserie sur mesure' },
              { href: '/blog/prix-renovation-appartement-paris', label: 'Prix rénovation Paris' },
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
            Votre studio parisien optimisé
          </h2>
          <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Lit escamotable, mezzanine, cloisons coulissantes — décrivez votre projet et recevez un devis gratuit sous 48h. Déplacement sans engagement dans tout Paris.
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
