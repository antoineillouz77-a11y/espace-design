import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Appartement Issy-les-Moulineaux — Espace Design | Artisan Rénovateur',
  description:
    'Artisan rénovateur et décorateur intérieur à Issy-les-Moulineaux. Rénovation complète, décoration haut de gamme, sur-mesure. Devis gratuit 48h. Corentin Celton, Fort, Manufacture.',
  keywords: [
    'rénovation appartement Issy-les-Moulineaux',
    'artisan rénovation Issy',
    'décoration intérieure Issy-les-Moulineaux',
    'renovation Issy 92130',
    'entreprise renovation Issy-les-Moulineaux',
    'artisan Issy-les-Moulineaux hauts-de-seine',
  ],
}

const schemaLocal = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Espace Design',
  description: 'Artisan rénovateur et décorateur intérieur à Issy-les-Moulineaux.',
  telephone: '+33611783867',
  url: 'https://espacedesignparis.fr/renovation-issy-les-moulineaux',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Issy-les-Moulineaux',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Issy-les-Moulineaux',
    postalCode: '92130',
    addressCountry: 'FR',
  },
}

export default function RenovationIssy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocal) }}
      />

      <section className="pt-28 sm:pt-36 pb-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Issy-les-Moulineaux — 92130</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Rénovation appartement<br className="hidden sm:block" /> Issy-les-Moulineaux
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Artisan rénovateur et décorateur intérieur à Issy-les-Moulineaux. Rénovation complète, décoration sur-mesure, finitions haut de gamme. Devis gratuit sous 48h.
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
            Notre intervention à Issy-les-Moulineaux
          </h2>
          <div className="space-y-4 text-gray-500 text-sm leading-relaxed font-light">
            <p>
              Issy-les-Moulineaux est une ville en plein essor, prisée par les cadres et les familles qui recherchent un cadre de vie de qualité à proximité de Paris. Entre le quartier Corentin Celton avec ses nombreuses résidences récentes, le quartier du Fort d&apos;Issy en renouvellement urbain, et la Manufacture historique, la ville offre une grande diversité de biens résidentiels.
            </p>
            <p>
              Espace Design intervient à Issy-les-Moulineaux pour des projets de rénovation dans toutes les typologies d&apos;appartements : des résidences des années 1980 autour de la Rue Camille Desmoulins aux programmes neufs en bord de Seine, en passant par les appartements haussmanniens du centre-ville. Notre équipe est habituée aux exigences des résidences sécurisées et des copropriétés modernes.
            </p>
            <p>
              De la Rue Ernest Renan à la Rue de Paris, de l&apos;Avenue de Verdun au Boulevard Gallieni, nous couvrons toute la commune d&apos;Issy-les-Moulineaux. Devis gratuit sous 48h, intervention rapide et soignée.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F2F2EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10">
            Nos services à Issy-les-Moulineaux
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

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10">
            Quelques réalisations
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {[
              { src: '/images/realisations/15-chambre-niche-led.jpg', alt: 'Chambre niche LED Issy' },
              { src: '/images/realisations/08-couloir-moderne.jpg', alt: 'Couloir moderne Issy-les-Moulineaux' },
              { src: '/images/realisations/06-salon-eclairage-theatre.jpg', alt: 'Salon éclairage Issy' },
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
            &ldquo;Appartement remis à neuf Rue Camille Desmoulins : parquet en chêne, nouvelle salle de bain, cuisine ouverte créée. Patrick a su gérer les contraintes de notre résidence (pas de travaux bruyants le matin) tout en tenant ses engagements. Excellent professionnel.&rdquo;
          </p>
          <div className="text-sm font-medium text-[#1C1C1C]">Pierre & Margaux D.</div>
          <div className="text-xs text-gray-400 font-light mt-0.5">Issy-les-Moulineaux · Quartier Corentin Celton</div>
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
            Votre projet à Issy-les-Moulineaux
          </h2>
          <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Décrivez votre projet et recevez un devis gratuit et détaillé sous 48h. Déplacement sans engagement dans toute la commune d&apos;Issy-les-Moulineaux.
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
