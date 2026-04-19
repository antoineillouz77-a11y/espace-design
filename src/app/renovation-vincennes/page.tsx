import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Appartement Vincennes — Espace Design | Artisan Rénovateur',
  description:
    'Artisan rénovateur et décorateur intérieur à Vincennes. Rénovation complète, décoration haut de gamme, sur-mesure. Devis gratuit 48h. Château de Vincennes, Fontenay, Île de France.',
  keywords: [
    'rénovation appartement Vincennes',
    'artisan rénovation Vincennes',
    'décoration intérieure Vincennes',
    'renovation Vincennes 94300',
    'entreprise renovation Vincennes',
    'artisan Vincennes val-de-marne',
  ],
}

const schemaLocal = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Espace Design',
  description: 'Artisan rénovateur et décorateur intérieur à Vincennes.',
  telephone: '+33611783867',
  url: 'https://espacedesignparis.fr/renovation-vincennes',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Vincennes',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Vincennes',
    postalCode: '94300',
    addressCountry: 'FR',
  },
}

export default function RenovationVincennes() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocal) }}
      />

      <section className="pt-28 sm:pt-36 pb-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Vincennes — 94300</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Rénovation appartement<br className="hidden sm:block" /> Vincennes
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Artisan rénovateur et décorateur intérieur à Vincennes. Rénovation complète, décoration sur-mesure, finitions haut de gamme. Devis gratuit sous 48h.
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
            Notre intervention à Vincennes
          </h2>
          <div className="space-y-4 text-gray-500 text-sm leading-relaxed font-light">
            <p>
              Vincennes est une ville particulièrement prisée, à deux pas de Paris via la ligne 1 du métro. Son marché immobilier est l&apos;un des plus actifs de la proche banlieue est, attirant des familles et des jeunes propriétaires séduits par la qualité de vie qu&apos;elle offre : le Bois de Vincennes, le Château historique, des commerces de qualité et un tissu résidentiel agréable autour de la Rue de Fontenay et de l&apos;Avenue de Paris.
            </p>
            <p>
              Espace Design intervient régulièrement à Vincennes pour des projets de rénovation variés. Les appartements haussmanniens du centre-ville, les immeubles des années 50-60 autour du Avenue de Paris et les programmes neufs vers la Porte de Vincennes représentent autant de typologies différentes que notre équipe maîtrise parfaitement. Nous gérons l&apos;ensemble du chantier avec une coordination rigoureuse de tous les corps de métiers.
            </p>
            <p>
              De la Rue de la Tourelle à l&apos;Avenue de la République, de la Rue de Fontenay au Boulevard des Maréchaux, nous couvrons toute la commune de Vincennes. Devis gratuit sous 48h, déplacement sans engagement.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F2F2EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10">
            Nos services à Vincennes
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
              { src: '/images/realisations/11-chambre-dressing.jpg', alt: 'Chambre dressing Vincennes' },
              { src: '/images/realisations/04-terrasse-vue-paris.jpg', alt: 'Terrasse Vincennes' },
              { src: '/images/realisations/09-chambre-tete-lit.jpg', alt: 'Chambre Vincennes' },
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
            &ldquo;Notre appartement Rue de Fontenay a été entièrement rénové par Espace Design. Gros travail sur la cuisine ouverte, la salle de bain et le séjour. Patrick a respecté notre délai impératif (emménagement avant les vacances scolaires) et le résultat est exactement ce qu&apos;on souhaitait.&rdquo;
          </p>
          <div className="text-sm font-medium text-[#1C1C1C]">Guillaume & Stéphanie R.</div>
          <div className="text-xs text-gray-400 font-light mt-0.5">Vincennes · Rue de Fontenay</div>
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
            Votre projet à Vincennes
          </h2>
          <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Décrivez votre projet et recevez un devis gratuit et détaillé sous 48h. Déplacement sans engagement dans toute la commune de Vincennes.
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
