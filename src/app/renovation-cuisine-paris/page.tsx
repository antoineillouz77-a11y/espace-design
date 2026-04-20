import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Cuisine Paris — Artisan, Prix & Devis | Espace Design',
  description: 'Artisan spécialisé rénovation cuisine à Paris. Cuisine ouverte, sur mesure, îlot central — devis gratuit 48h. Prix : 6 000 à 30 000 €.',
  keywords: ['rénovation cuisine Paris', 'cuisine sur mesure Paris', 'artisan cuisine Paris', 'cuisine ouverte Paris prix', 'refaire cuisine Paris'],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://espacedesignparis.fr/services' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation cuisine Paris', item: 'https://espacedesignparis.fr/renovation-cuisine-paris' },
  ],
}

const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Rénovation Cuisine Paris',
  description: 'Rénovation et aménagement de cuisine à Paris : cuisine ouverte, sur mesure, îlot central, plan de travail, électroménager intégré.',
  provider: {
    '@type': 'HomeAndConstructionBusiness',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
    telephone: '+33611783867',
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '47', bestRating: '5', worstRating: '1' },
  },
  areaServed: { '@type': 'City', name: 'Paris' },
  offers: { '@type': 'Offer', priceRange: '6000-30000', priceCurrency: 'EUR' },
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation de cuisine à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Une cuisine rénovée à Paris coûte entre 6 000 et 10 000 € pour une cuisine standard équipée, 10 000 à 20 000 € pour une cuisine ouverte avec îlot sur mesure, et jusqu\'à 30 000 € pour une cuisine haut de gamme (plan de travail en marbre, électroménager Bosch ou Miele intégré).',
      },
    },
    {
      '@type': 'Question',
      name: 'Faut-il un permis pour ouvrir une cuisine sur Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Abattre un mur porteur nécessite une étude de structure (bureau d\'études) et une déclaration de travaux. Pour les murs non porteurs (cloisons), aucun permis n\'est requis. Dans les copropriétés, l\'accord de l\'assemblée générale peut être nécessaire selon le règlement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps dure la rénovation d\'une cuisine à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Une rénovation de cuisine à Paris prend généralement 3 à 4 semaines pour une cuisine standard et 4 à 8 semaines si des travaux de maçonnerie (abattage de cloison, ouverture) sont inclus.',
      },
    },
  ],
}

export default function RenovationCuisineParis() {
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
          {/* Breadcrumb */}
          <nav className="flex justify-center items-center gap-2 text-[10px] font-light text-gray-400 tracking-widest uppercase mb-6">
            <Link href="/" className="hover:text-[#B8960C] transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#B8960C] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#B8960C]">Rénovation cuisine Paris</span>
          </nav>
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Rénovation Cuisine</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Rénovation cuisine Paris
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Cuisine sur mesure, ouverte, îlot central — nous concevons et rénovons votre cuisine à Paris de A à Z. Devis gratuit sous 48h, déplacement sans engagement.
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

      {/* Section prix */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10">
            Prix d&apos;une rénovation de cuisine à Paris
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Cuisine équipée standard',
                price: '6 000 – 10 000 €',
                desc: 'Remplacement des meubles, plan de travail stratifié, crédence carrelage, électroménager standard intégré.',
              },
              {
                num: '02',
                title: 'Cuisine ouverte avec îlot',
                price: '10 000 – 20 000 €',
                desc: 'Abattage de cloison, cuisine ouverte sur le séjour, îlot central sur mesure, plan de travail en quartz.',
              },
              {
                num: '03',
                title: 'Cuisine haut de gamme',
                price: '20 000 – 30 000 €',
                desc: 'Plan de travail en marbre, électroménager Bosch ou Miele intégré, dressing cuisine, finitions premium.',
              },
            ].map((card) => (
              <div key={card.title} className="bg-[#FAFAF8] rounded-lg p-6 border border-gray-100">
                <div className="font-display text-3xl font-semibold text-[#D4AF37] mb-3">{card.num}</div>
                <div className="w-6 h-px bg-[#D4AF37]/50 mb-4" />
                <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-1">{card.title}</h3>
                <p className="text-[#B8960C] text-sm font-semibold mb-3">{card.price}</p>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section prestations */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10">
            Nos prestations cuisine à Paris
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Démolition et évacuation',
              'Plomberie et électricité',
              'Abattage de cloison (si besoin)',
              'Pose cuisine sur mesure ou meublée',
              'Plan de travail (stratifié, quartz, marbre)',
              'Crédence carrelage ou verre',
              'Hotte et électroménager intégré',
              'Finitions et peinture',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white rounded-lg px-5 py-4 border border-gray-100">
                <CheckCircle size={16} className="text-[#B8960C] flex-shrink-0" />
                <span className="text-[#1C1C1C] text-sm font-light">{item}</span>
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
                q: 'Quel est le prix d\'une rénovation de cuisine à Paris ?',
                a: 'Une cuisine rénovée à Paris coûte entre 6 000 et 10 000 € pour une cuisine standard équipée, 10 000 à 20 000 € pour une cuisine ouverte avec îlot sur mesure, et jusqu\'à 30 000 € pour une cuisine haut de gamme (plan de travail en marbre, électroménager Bosch ou Miele intégré).',
              },
              {
                q: 'Faut-il un permis pour ouvrir une cuisine sur Paris ?',
                a: 'Abattre un mur porteur nécessite une étude de structure (bureau d\'études) et une déclaration de travaux. Pour les murs non porteurs (cloisons), aucun permis n\'est requis. Dans les copropriétés, l\'accord de l\'assemblée générale peut être nécessaire selon le règlement.',
              },
              {
                q: 'Combien de temps dure la rénovation d\'une cuisine à Paris ?',
                a: 'Une rénovation de cuisine à Paris prend généralement 3 à 4 semaines pour une cuisine standard et 4 à 8 semaines si des travaux de maçonnerie (abattage de cloison, ouverture) sont inclus.',
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
      <section className="py-12 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Zones d&apos;intervention</p>
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
              { href: '/blog/renovation-cuisine-ouverte-paris', label: 'Guide cuisine ouverte Paris' },
              { href: '/carrelage-paris', label: 'Carrelage Paris' },
              { href: '/plomberie-paris', label: 'Plomberie Paris' },
              { href: '/menuiserie-paris', label: 'Menuiserie sur mesure' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-xs border border-gray-200 rounded px-3 py-1.5 text-gray-600 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-[#1C1C1C]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
            Votre cuisine à rénover à Paris ?
          </h2>
          <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Décrivez votre projet et recevez un devis gratuit et détaillé sous 48h. Déplacement sans engagement dans tout Paris et la proche banlieue.
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
