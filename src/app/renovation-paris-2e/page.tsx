import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Appartement Paris 2e — Espace Design | Artisan Rénovateur',
  description:
    'Artisan rénovateur et décorateur intérieur dans le 2e arrondissement de Paris. Rénovation complète, décoration haut de gamme, sur-mesure. Devis gratuit 48h. Opéra, Bourse, Montorgueil, Vivienne.',
  keywords: [
    'rénovation appartement Paris 2e',
    'artisan rénovation Paris 2ème',
    'décoration intérieure Paris 2e',
    'renovation Paris 2 arrondissement',
    'entreprise renovation Paris 2e',
    'artisan Paris 2e arrondissement',
  ],
}

const schemaLocal = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Espace Design',
  description: 'Artisan rénovateur et décorateur intérieur dans le 2e arrondissement de Paris.',
  telephone: '+33611783867',
  url: 'https://espacedesignparis.fr/renovation-paris-2e',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Paris 2e arrondissement',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Paris',
    postalCode: '75002',
    addressCountry: 'FR',
  },
}

export default function RenovationParis2e() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocal) }}
      />

      {/* Hero compact */}
      <section className="pt-28 sm:pt-36 pb-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Paris 2e arrondissement</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Rénovation appartement<br className="hidden sm:block" /> Paris 2e
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Artisan rénovateur et décorateur intérieur dans le 2e arrondissement. Rénovation complète, décoration sur-mesure, finitions haut de gamme. Devis gratuit sous 48h.
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

      {/* Notre intervention dans le 2e */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-6">
            Notre intervention dans le 2e arrondissement
          </h2>
          <div className="space-y-4 text-gray-500 text-sm leading-relaxed font-light">
            <p>
              Le 2e arrondissement est un quartier en pleine mutation, entre héritage commercial et résidentiel prisé. Entre la Rue Montorgueil animée, la Galerie Vivienne, la Place de la Bourse et les passages couverts historiques, le 2e recèle d&apos;appartements au charme unique — souvent des anciens immeubles de négoce convertis en lofts ou en appartements familiaux.
            </p>
            <p>
              Espace Design intervient dans tout le 2e arrondissement pour des projets de rénovation complète ou de rafraîchissement ciblé. Nous sommes habitués aux planchers anciens, aux façades classées et aux contraintes des copropriétés parisiennes historiques. Notre approche : respecter l&apos;architecture, sublimer l&apos;espace, apporter le confort du neuf.
            </p>
            <p>
              De la Rue d&apos;Aboukir à la Rue du Sentier, de la Rue Réaumur aux abords du Palais Brongniart, chaque chantier dans le 2e est traité avec la même exigence. Nous coordonnons l&apos;ensemble des corps de métier — électricité, plomberie, menuiserie, peinture — pour un résultat irréprochable.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[#F2F2EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10">
            Nos services dans le 2e
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Rénovation complète', desc: 'Du sol au plafond : gros œuvre, électricité, plomberie, cloisons, finitions. Un seul artisan, un seul chantier maîtrisé.' },
              { num: '02', title: 'Décoration intérieure', desc: 'Agencement sur-mesure, choix des matériaux, harmonie des couleurs — une signature esthétique adaptée à votre appartement.' },
              { num: '03', title: 'Sur-mesure & finitions', desc: 'Menuiserie, parquet, carrelage, peinture décorative. Les détails qui transforment un intérieur ordinaire en espace exceptionnel.' },
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


      {/* Photo */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10">
            Une réalisation
          </h2>
          <div className="relative rounded-xl overflow-hidden h-72 sm:h-96">
            <Image src="/images/realisations/20-entree-couloir-salon.jpg" alt="Entrée et couloir rénovés — Paris 2e" fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
          </div>
        </div>
      </section>

      {/* Atouts */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              'Devis gratuit sous 48h',
              'Assurance décennale',
              '15+ ans d\'expérience',
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

      {/* CTA */}
      <section className="py-20 bg-[#1C1C1C]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
            Votre projet dans le 2e
          </h2>
          <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Décrivez votre projet et recevez un devis gratuit et détaillé sous 48h. Déplacement sans engagement dans tout le 2e arrondissement.
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
