import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Appartement Neuilly-sur-Seine — Espace Design | Artisan Rénovateur',
  description:
    'Artisan rénovateur et décorateur intérieur à Neuilly-sur-Seine. Rénovation complète, décoration haut de gamme, sur-mesure. Devis gratuit 48h. Avenue Charles de Gaulle, Roule, Sablons, Bagatelle.',
  keywords: [
    'rénovation appartement Neuilly-sur-Seine',
    'artisan rénovation Neuilly',
    'décoration intérieure Neuilly-sur-Seine',
    'renovation Neuilly 92200',
    'entreprise renovation Neuilly-sur-Seine',
    'artisan Neuilly-sur-Seine hauts-de-seine',
  ],
}

const schemaLocal = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Espace Design',
  description: 'Artisan rénovateur et décorateur intérieur à Neuilly-sur-Seine.',
  telephone: '+33611783867',
  url: 'https://espacedesignparis.fr/renovation-neuilly-sur-seine',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Neuilly-sur-Seine',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Neuilly-sur-Seine',
    postalCode: '92200',
    addressCountry: 'FR',
  },
}

export default function RenovationNeuilly() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocal) }}
      />

      <section className="pt-28 sm:pt-36 pb-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Neuilly-sur-Seine — 92200</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Rénovation appartement<br className="hidden sm:block" /> Neuilly-sur-Seine
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Artisan rénovateur et décorateur intérieur à Neuilly-sur-Seine. Rénovation complète, décoration sur-mesure, finitions haut de gamme. Devis gratuit sous 48h.
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

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-6">
            Notre intervention à Neuilly-sur-Seine
          </h2>
          <div className="space-y-4 text-gray-500 text-sm leading-relaxed font-light">
            <p>
              Neuilly-sur-Seine est l&apos;une des communes les plus prestigieuses de France. Limitrophe du 17e arrondissement de Paris, elle concentre un parc immobilier résidentiel d&apos;exception : hôtels particuliers autour du Parc de Bagatelle, grands appartements Avenue Charles de Gaulle, immeubles de standing du quartier des Sablons et du Roule. Espace Design intervient dans ce secteur ultra-exigeant avec le niveau de qualité qu&apos;il mérite.
            </p>
            <p>
              Les appartements de Neuilly se distinguent par leurs volumes généreux, leurs finitions soignées d&apos;origine et leur clientèle attachée à l&apos;excellence. Notre approche correspond parfaitement à ces attentes : matériaux nobles, artisanat de qualité, délais respectés, un seul interlocuteur pour l&apos;ensemble du chantier. Nous intervenons aussi bien pour des rénovations complètes que pour des travaux ciblés — salle de bain de prestige, cuisine sur-mesure, parquet en chêne massif.
            </p>
            <p>
              De l&apos;Avenue du Roule à la Rue de Chartres, de l&apos;Avenue du Château à la Rue Perronet, nous couvrons l&apos;ensemble de Neuilly-sur-Seine. Notre réputation dans ce secteur est fondée sur des années de chantiers menés avec rigueur et passion pour le beau travail.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F2F2EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10">
            Nos services à Neuilly-sur-Seine
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Rénovation haut de gamme', desc: 'Rénovation complète de prestige avec des matériaux nobles : marbre, parquet massif, boiseries sur-mesure. L&apos;excellence à chaque étape.' },
              { num: '02', title: 'Décoration intérieure', desc: 'Agencement sur-mesure, choix des matériaux, harmonie des couleurs — une signature esthétique d&apos;exception pour des intérieurs d&apos;exception.' },
              { num: '03', title: 'Sur-mesure & finitions', desc: 'Menuiserie haut de gamme, parquet point de Hongrie, salle de bain en marbre, peinture décorative. Chaque détail compte.' },
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

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10">
            Quelques réalisations
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {[
              { src: '/images/realisations/03-buffet-led.jpg', alt: 'Buffet LED Neuilly-sur-Seine' },
              { src: '/images/realisations/01-salon-parisien-bibliotheque.jpg', alt: 'Salon bibliothèque Neuilly' },
              { src: '/images/realisations/11-chambre-dressing.jpg', alt: 'Chambre dressing Neuilly-sur-Seine' },
            ].map((img) => (
              <div key={img.src} className="relative rounded-lg overflow-hidden h-44 sm:h-60">
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="33vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex justify-center gap-0.5 mb-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={13} className="fill-[#D4AF37] text-[#D4AF37]" />
            ))}
          </div>
          <p className="text-gray-600 text-sm leading-relaxed font-light italic mb-6">
            &ldquo;Notre appartement Avenue Charles de Gaulle a été entièrement rénové par Patrick et son équipe. Travaux remarquables : parquet en chêne massif, salle de bain en marbre de Carrare, cuisine sur-mesure. Le niveau de finition est digne des meilleures maisons parisiennes. Nous recommandons vivement.&rdquo;
          </p>
          <div className="text-sm font-medium text-[#1C1C1C]">Isabelle & Philippe M.</div>
          <div className="text-xs text-gray-400 font-light mt-0.5">Neuilly-sur-Seine · Avenue Charles de Gaulle</div>
        </div>
      </section>

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

      <section className="py-20 bg-[#1C1C1C]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
            Votre projet à Neuilly-sur-Seine
          </h2>
          <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Décrivez votre projet et recevez un devis gratuit et détaillé sous 48h. Déplacement sans engagement dans toute la commune de Neuilly-sur-Seine.
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
