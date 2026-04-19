import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Peinture Appartement Paris — Artisan Peintre, Prix & Devis | Espace Design',
  description:
    'Artisan peintre à Paris. Peinture appartement, préparation murs, enduit lissé, effets décoratifs. Prix : 25 à 80 €/m². Devis gratuit 48h.',
  keywords: [
    'peinture appartement Paris',
    'peintre Paris prix',
    'artisan peintre Paris',
    'peinture intérieure Paris',
    'enduit lissé Paris',
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://espacedesignparis.fr/services' },
    { '@type': 'ListItem', position: 3, name: 'Peinture Paris', item: 'https://espacedesignparis.fr/peinture-paris' },
  ],
}

const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Peinture Appartement Paris',
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
  url: 'https://espacedesignparis.fr/peinture-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix d'une peinture d'appartement à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La peinture d'appartement à Paris coûte entre 25 et 45 €/m² pour une peinture standard 2 couches (fourniture + pose). Pour une préparation soignée avec enduit lissé, comptez 45 à 80 €/m². Les effets décoratifs (béton ciré, stucco vénitien) atteignent 80 à 200 €/m².",
      },
    },
    {
      '@type': 'Question',
      name: "Combien de temps faut-il pour peindre un appartement à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Un studio ou 2 pièces : 3 à 5 jours. Un 3-4 pièces : 1 à 2 semaines. La préparation des surfaces (rebouchage, enduit, ponçage) représente environ la moitié du temps de chantier.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il vider l'appartement pour la peinture ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Non. L'artisan peut travailler pièce par pièce en protégeant sols et meubles. Il est conseillé de libérer les murs (tableaux, étagères) mais pas de tout vider. Pour une rénovation complète, la peinture se fait en dernier, après tous les travaux qui salissent.",
      },
    },
  ],
}

export default function PeintureParis() {
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
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Peinture & Finitions</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Peinture appartement Paris
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Artisan peintre à Paris. Préparation soignée des murs, peinture 2 couches, enduit lissé et effets décoratifs. Devis gratuit sous 48h.
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
            Prix de la peinture à Paris
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
                  { label: 'Peinture standard 2 couches', price: '25 – 45 €/m²' },
                  { label: 'Avec enduit lissé', price: '45 – 80 €/m²' },
                  { label: 'Effets décoratifs (béton ciré, stucco)', price: '80 – 200 €/m²' },
                  { label: 'Plafond seul', price: '20 – 35 €/m²' },
                ].map((row) => (
                  <tr key={row.label} className="bg-white hover:bg-[#FAFAF8] transition-colors">
                    <td className="px-5 py-3.5 text-gray-700 font-light">{row.label}</td>
                    <td className="px-5 py-3.5 text-right text-[#B8960C] font-semibold">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-400 text-xs font-light mt-3">Prix fourniture + pose. Variables selon état des murs et type de peinture.</p>
        </div>
      </section>

      {/* Prestations */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-8">
            Nos prestations peinture à Paris
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Protection sols et meubles',
              'Rebouchage et ponçage des murs',
              'Impression et sous-couche',
              'Peinture 2 couches (murs + plafond)',
              'Enduit lissé finition',
              'Effets décoratifs sur demande',
              'Pose de papier peint',
              'Nettoyage final',
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
                q: "Quel est le prix d'une peinture d'appartement à Paris ?",
                a: "La peinture d'appartement à Paris coûte entre 25 et 45 €/m² pour une peinture standard 2 couches (fourniture + pose). Pour une préparation soignée avec enduit lissé, comptez 45 à 80 €/m². Les effets décoratifs (béton ciré, stucco vénitien) atteignent 80 à 200 €/m².",
              },
              {
                q: "Combien de temps faut-il pour peindre un appartement à Paris ?",
                a: "Un studio ou 2 pièces : 3 à 5 jours. Un 3-4 pièces : 1 à 2 semaines. La préparation des surfaces (rebouchage, enduit, ponçage) représente environ la moitié du temps de chantier.",
              },
              {
                q: "Faut-il vider l'appartement pour la peinture ?",
                a: "Non. L'artisan peut travailler pièce par pièce en protégeant sols et meubles. Il est conseillé de libérer les murs (tableaux, étagères) mais pas de tout vider. Pour une rénovation complète, la peinture se fait en dernier, après tous les travaux qui salissent.",
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

      {/* CTA */}
      <section className="py-20 bg-[#1C1C1C]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
            Un projet peinture à Paris ?
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
