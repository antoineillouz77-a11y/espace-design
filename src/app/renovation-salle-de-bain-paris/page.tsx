import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Salle de Bain Paris — Artisan, Prix & Devis | Espace Design',
  description: 'Artisan spécialisé rénovation salle de bain à Paris. Douche italienne, carrelage, plomberie, faïence — devis gratuit sous 48h. Prix : 5 000 à 25 000 €.',
  keywords: ['rénovation salle de bain Paris', 'salle de bain Paris prix', 'artisan salle de bain Paris', 'douche italienne Paris', 'carrelage salle de bain Paris'],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://espacedesignparis.fr/services' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation salle de bain Paris', item: 'https://espacedesignparis.fr/renovation-salle-de-bain-paris' },
  ],
}

const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Rénovation Salle de Bain Paris',
  description: 'Rénovation complète de salle de bain à Paris : douche à l\'italienne, carrelage, plomberie, faïence, mobilier sur mesure.',
  provider: { '@type': 'HomeAndConstructionBusiness', name: 'Espace Design', url: 'https://espacedesignparis.fr', telephone: '+33611783867', aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '47', bestRating: '5', worstRating: '1' } },
  areaServed: { '@type': 'City', name: 'Paris' },
  offers: { '@type': 'Offer', priceRange: '5000-25000', priceCurrency: 'EUR' },
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation de salle de bain à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Une rénovation de salle de bain à Paris coûte entre 5 000 et 8 000 € pour une remise à neuf simple, 8 000 à 15 000 € pour une rénovation complète avec douche italienne et carrelage haut de gamme, et jusqu\'à 25 000 € pour une salle de bain de luxe avec marbre et mobilier sur mesure.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps dure la rénovation d\'une salle de bain à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Une rénovation de salle de bain prend généralement 2 à 3 semaines pour une petite salle de bain (4-6 m²) et 3 à 5 semaines pour une salle de bain plus grande ou avec des travaux de plomberie importants.',
      },
    },
    {
      '@type': 'Question',
      name: 'Faut-il un plombier séparé pour rénover une salle de bain à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Non. Espace Design coordonne l\'ensemble du chantier : plomberie, carrelage, électricité, peinture. Un seul artisan gère tout, ce qui évite les délais entre corps de métier et réduit les coûts de coordination.',
      },
    },
  ],
}

export default function RenovationSalleDeBainParis() {
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
          <nav className="flex justify-center items-center gap-2 text-[11px] text-gray-400 font-light mb-6">
            <Link href="/" className="hover:text-[#B8960C] transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#B8960C] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#B8960C]">Rénovation salle de bain Paris</span>
          </nav>
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Rénovation Salle de Bain</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Rénovation salle de bain<br className="hidden sm:block" /> Paris
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Artisan spécialisé en rénovation de salle de bain à Paris. Douche italienne, carrelage, plomberie, faïence — un seul interlocuteur pour tout votre chantier. Devis gratuit sous 48h.
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

      {/* Prix */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10 text-center">
            Prix d'une rénovation de salle de bain à Paris
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: 'Remise à neuf',
                desc: 'Peinture, faïence, remplacement des équipements existants. Salle de bain fonctionnelle et modernisée.',
                price: '5 000 – 8 000 €',
              },
              {
                title: 'Rénovation complète',
                desc: 'Dépose totale, douche italienne, carrelage haut de gamme, nouveau mobilier, plomberie refaite.',
                price: '8 000 – 15 000 €',
              },
              {
                title: 'Haut de gamme',
                desc: 'Marbre, mosaïque, mobilier sur mesure, robinetterie de luxe, éclairage architectural intégré.',
                price: '15 000 – 25 000 €',
              },
            ].map((card) => (
              <div key={card.title} className="bg-[#FAFAF8] rounded-lg p-6 border border-gray-100 flex flex-col">
                <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-2">{card.title}</h3>
                <div className="w-6 h-px bg-[#D4AF37]/50 mb-4" />
                <p className="text-gray-500 text-sm leading-relaxed font-light flex-1 mb-5">{card.desc}</p>
                <div className="font-display text-2xl font-semibold text-[#D4AF37]">{card.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prestations */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10">
            Ce que comprend notre rénovation de salle de bain
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Démolition complète',
              'Travaux de plomberie',
              'Pose carrelage sol et mural',
              'Douche à l\'italienne',
              'Faïence et joint époxy',
              'Mobilier et vasque',
              'Miroir et éclairage',
              'Ventilation VMC',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white rounded-lg px-5 py-4 border border-gray-100">
                <CheckCircle size={16} className="text-[#B8960C] flex-shrink-0" />
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
                q: 'Quel est le prix d\'une rénovation de salle de bain à Paris ?',
                a: 'Une rénovation de salle de bain à Paris coûte entre 5 000 et 8 000 € pour une remise à neuf simple, 8 000 à 15 000 € pour une rénovation complète avec douche italienne et carrelage haut de gamme, et jusqu\'à 25 000 € pour une salle de bain de luxe avec marbre et mobilier sur mesure.',
              },
              {
                q: 'Combien de temps dure la rénovation d\'une salle de bain à Paris ?',
                a: 'Une rénovation de salle de bain prend généralement 2 à 3 semaines pour une petite salle de bain (4-6 m²) et 3 à 5 semaines pour une salle de bain plus grande ou avec des travaux de plomberie importants.',
              },
              {
                q: 'Faut-il un plombier séparé pour rénover une salle de bain à Paris ?',
                a: 'Non. Espace Design coordonne l\'ensemble du chantier : plomberie, carrelage, électricité, peinture. Un seul artisan gère tout, ce qui évite les délais entre corps de métier et réduit les coûts de coordination.',
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
              { href: '/blog/renovation-salle-de-bain-paris', label: 'Guide rénovation salle de bain Paris' },
              { href: '/blog/renovation-salle-de-bain-petite-surface-paris', label: 'Petite salle de bain Paris' },
              { href: '/blog/carrelage-appartement-paris', label: 'Carrelage appartement Paris' },
              { href: '/blog/carrelage-grand-format-paris', label: 'Carrelage grand format' },
              { href: '/blog/douche-italienne-paris', label: 'Douche italienne Paris' },
              { href: '/blog/robinetterie-salle-de-bain-paris', label: 'Robinetterie salle de bain' },
              { href: '/carrelage-paris', label: 'Nos services carrelage' },
              { href: '/plomberie-paris', label: 'Nos services plomberie' },
              { href: '/tarifs', label: 'Nos tarifs 2025' },
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
            Votre salle de bain à rénover à Paris ?
          </h2>
          <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Devis gratuit sous 48h — déplacement sans engagement dans tout Paris.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-7 py-3.5 rounded font-light text-sm tracking-wide hover:bg-[#c9a030] transition-colors duration-300"
            >
              Demander un devis <ArrowRight size={13} />
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
