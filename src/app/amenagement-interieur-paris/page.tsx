import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Aménagement Intérieur Paris — Sur Mesure, Mezzanine & Verrière | Espace Design',
  description:
    'Aménagement intérieur sur mesure à Paris. Mezzanine, verrière, optimisation espace, studio, Haussmannien. Devis gratuit 48h. Espace Design.',
  keywords: [
    'aménagement intérieur Paris',
    'mezzanine Paris prix',
    'verrière intérieure Paris',
    'optimisation espace Paris',
    'aménagement sur mesure Paris',
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://espacedesignparis.fr/services' },
    { '@type': 'ListItem', position: 3, name: 'Aménagement intérieur Paris', item: 'https://espacedesignparis.fr/amenagement-interieur-paris' },
  ],
}

const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Aménagement Intérieur Sur Mesure Paris',
  provider: {
    '@type': 'HomeAndConstructionBusiness',
    name: 'Espace Design',
    telephone: '+33611783867',
    url: 'https://espacedesignparis.fr',
  },
  areaServed: { '@type': 'City', name: 'Paris' },
  priceRange: '3000-30000',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix d'une verrière intérieure à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Une verrière intérieure (cloison vitrée style atelier) coûte entre 1 500 et 4 000 € selon la taille et le style. En acier noir avec vitrage clair, comptez 2 000 à 3 500 € pour une verrière standard. Les versions avec porte intégrée ou double vitrage phonique atteignent 3 500 à 6 000 €.",
      },
    },
    {
      '@type': 'Question',
      name: "Peut-on créer une mezzanine dans un appartement parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, si la hauteur sous plafond est supérieure à 3 mètres. La mezzanine occupe en général 40-60% de la surface au sol. Elle doit respecter une hauteur minimale de 1,80 m sous la mezzanine. Une déclaration préalable de travaux peut être nécessaire si la surface créée dépasse 5 m². Prix : 5 000 à 15 000 €.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment optimiser l'espace d'un appartement parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les solutions les plus efficaces : dressings et placards du sol au plafond (exploite la hauteur), lit mezzanine ou escamotable (libère le sol), cloison coulissante (flexibilité des espaces), cuisine ouverte (agrandit visuellement le séjour), sol continu sans transition (espace paraît plus grand).",
      },
    },
  ],
}

const amenagements = [
  {
    num: '01',
    title: 'Mezzanine',
    desc: 'Gagnez un niveau sans toucher les murs. Idéale dans les appartements avec hauteur sous plafond > 3 m. Prix : 5 000 à 15 000 €.',
  },
  {
    num: '02',
    title: 'Verrière intérieure',
    desc: 'Cloison vitrée style atelier en acier noir. Sépare les espaces sans couper la lumière. Prix : 1 500 à 4 000 €.',
  },
  {
    num: '03',
    title: 'Cuisine ouverte',
    desc: "Abattement ou réduction d'une cloison pour ouvrir la cuisine sur le séjour. Agrandit visuellement l'espace de vie.",
  },
  {
    num: '04',
    title: 'Dressing intégré',
    desc: 'Placards du sol au plafond, dressing en alcôve, niches sur-mesure. Exploite chaque centimètre de hauteur sous plafond.',
  },
  {
    num: '05',
    title: 'Studio optimisé',
    desc: 'Lit escamotable, cloison coulissante, rangements cachés. Transformer un petit espace en appartement fonctionnel.',
  },
  {
    num: '06',
    title: 'Cloisonnement flexible',
    desc: "Cloisons coulissantes ou amovibles pour moduler l'espace selon les usages. Jour comme nuit, bureau comme chambre.",
  },
]

export default function AmenagementInterieurParis() {
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
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Aménagement Sur Mesure</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Aménagement intérieur Paris
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Mezzanine, verrière, cuisine ouverte, dressing intégré, studio optimisé. Aménagement sur mesure pour tous les appartements parisiens. Devis gratuit sous 48h.
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

      {/* Types d'aménagement */}
      <section className="py-20 bg-[#F2F2EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10">
            Nos solutions d'aménagement
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenagements.map((a) => (
              <div key={a.title} className="bg-white rounded-lg p-6 border border-gray-100">
                <div className="font-display text-3xl font-semibold text-[#D4AF37] mb-3">{a.num}</div>
                <div className="w-6 h-px bg-[#D4AF37]/50 mb-4" />
                <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-2">{a.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{a.desc}</p>
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
              'Création de mezzanine sur mesure',
              'Pose de verrière intérieure acier',
              'Ouverture cuisine sur séjour',
              'Dressings et placards intégrés',
              'Lit escamotable et rangements cachés',
              'Cloisons coulissantes et amovibles',
              'Optimisation studio et petites surfaces',
              'Aménagement appartement haussmannien',
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
                q: "Quel est le prix d'une verrière intérieure à Paris ?",
                a: "Une verrière intérieure (cloison vitrée style atelier) coûte entre 1 500 et 4 000 € selon la taille et le style. En acier noir avec vitrage clair, comptez 2 000 à 3 500 € pour une verrière standard. Les versions avec porte intégrée ou double vitrage phonique atteignent 3 500 à 6 000 €.",
              },
              {
                q: "Peut-on créer une mezzanine dans un appartement parisien ?",
                a: "Oui, si la hauteur sous plafond est supérieure à 3 mètres. La mezzanine occupe en général 40-60% de la surface au sol. Elle doit respecter une hauteur minimale de 1,80 m sous la mezzanine. Une déclaration préalable de travaux peut être nécessaire si la surface créée dépasse 5 m². Prix : 5 000 à 15 000 €.",
              },
              {
                q: "Comment optimiser l'espace d'un appartement parisien ?",
                a: "Les solutions les plus efficaces : dressings et placards du sol au plafond (exploite la hauteur), lit mezzanine ou escamotable (libère le sol), cloison coulissante (flexibilité des espaces), cuisine ouverte (agrandit visuellement le séjour), sol continu sans transition (espace paraît plus grand).",
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
              { href: '/renovation-paris-6e', label: 'Paris 6e' },
              { href: '/renovation-paris-7e', label: 'Paris 7e' },
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-15e', label: 'Paris 15e' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-paris-17e', label: 'Paris 17e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
              { href: '/renovation-levallois-perret', label: 'Levallois-Perret' },
              { href: '/renovation-versailles', label: 'Versailles' },
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
              { href: '/menuiserie-paris', label: 'Menuiserie sur mesure' },
              { href: '/platrererie-paris', label: 'Plâtrerie & cloisons' },
              { href: '/decoration-interieure-paris', label: 'Décoration intérieure' },
              { href: '/blog/renovation-studio-paris', label: 'Guide rénovation studio Paris' },
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
            Votre projet d'aménagement à Paris
          </h2>
          <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Mezzanine, verrière, studio optimisé — décrivez votre projet et recevez un devis gratuit sous 48h. Déplacement sans engagement dans tout Paris.
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
