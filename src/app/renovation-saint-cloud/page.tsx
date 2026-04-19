import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Appartement Saint-Cloud — Espace Design | Artisan Rénovateur',
  description:
    'Artisan rénovateur et décorateur intérieur à Saint-Cloud. Rénovation complète, décoration haut de gamme, sur-mesure. Devis gratuit 48h. Parc de Saint-Cloud, Montretout, Bel-Air.',
  keywords: [
    'rénovation appartement Saint-Cloud',
    'artisan rénovation Saint-Cloud',
    'décoration intérieure Saint-Cloud',
    'renovation Saint-Cloud 92210',
    'entreprise renovation Saint-Cloud',
    'artisan Saint-Cloud hauts-de-seine',
  ],
}

const schemaLocal = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Espace Design',
  description: 'Artisan rénovateur et décorateur intérieur à Saint-Cloud.',
  telephone: '+33611783867',
  url: 'https://espacedesignparis.fr/renovation-saint-cloud',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Saint-Cloud',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Saint-Cloud',
    postalCode: '92210',
    addressCountry: 'FR',
  },
}

export default function RenovationSaintCloud() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocal) }}
      />

      <section className="pt-28 sm:pt-36 pb-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Saint-Cloud — 92210</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Rénovation appartement<br className="hidden sm:block" /> Saint-Cloud
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Artisan rénovateur et décorateur intérieur à Saint-Cloud. Rénovation complète, décoration sur-mesure, finitions haut de gamme. Devis gratuit sous 48h.
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
            Notre intervention à Saint-Cloud
          </h2>
          <div className="space-y-4 text-gray-500 text-sm leading-relaxed font-light">
            <p>
              Saint-Cloud est une ville résidentielle d&apos;exception, nichée entre le Parc de Saint-Cloud — l&apos;un des plus beaux de France — et la Seine. Ses quartiers résidentiels comme Montretout, Bel-Air ou les abords du Parc de Montretout proposent des appartements et des maisons de standing avec souvent des vues panoramiques sur Paris. Espace Design intervient dans cette commune prisée avec le niveau d&apos;exigence qu&apos;elle mérite.
            </p>
            <p>
              Les propriétaires de Saint-Cloud ont des attentes élevées en matière de qualité et d&apos;esthétisme. Notre approche de la rénovation — matériaux nobles, finitions soignées, respect de l&apos;architecture — correspond parfaitement à cette clientèle exigeante. Nous avons réalisé de nombreux projets dans les maisons individuelles des coteaux et les appartements des résidences de standing de la ville.
            </p>
            <p>
              De la Rue Dailly à la Rue du Calvaire, des avenues du Parc aux rues du centre-ville, nous couvrons l&apos;ensemble de Saint-Cloud. Notre intervention est propre, rapide et soignée, avec un suivi personnalisé à chaque étape du chantier.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F2F2EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10">
            Nos services à Saint-Cloud
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Rénovation complète', desc: 'Du sol au plafond : gros œuvre, électricité, plomberie, cloisons, finitions. Un seul artisan, un seul chantier maîtrisé.' },
              { num: '02', title: 'Décoration intérieure', desc: 'Agencement sur-mesure, choix des matériaux nobles, harmonie des couleurs — une signature esthétique d&apos;exception.' },
              { num: '03', title: 'Sur-mesure & finitions', desc: 'Menuiserie, parquet en chêne massif, salle de bain de prestige, peinture décorative. L&apos;excellence artisanale.' },
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
            Votre projet à Saint-Cloud
          </h2>
          <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Décrivez votre projet et recevez un devis gratuit et détaillé sous 48h. Déplacement sans engagement dans toute la commune de Saint-Cloud.
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
