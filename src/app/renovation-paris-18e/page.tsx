import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Appartement Paris 18e — Espace Design | Artisan Rénovateur',
  description:
    'Artisan rénovateur et décorateur intérieur dans le 18e arrondissement de Paris. Rénovation complète, décoration haut de gamme, sur-mesure. Devis gratuit 48h. Montmartre, Abbesses, Sacré-Cœur.',
  keywords: [
    'rénovation appartement Paris 18e',
    'artisan rénovation Paris 18ème',
    'décoration intérieure Paris 18e',
    'renovation Paris 18 arrondissement',
    'entreprise renovation Paris Montmartre',
    'artisan Paris 18e arrondissement',
  ],
}

const schemaLocal = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Espace Design',
  description: 'Artisan rénovateur et décorateur intérieur dans le 18e arrondissement de Paris.',
  telephone: '+33611783867',
  url: 'https://espacedesignparis.fr/renovation-paris-18e',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Paris 18e arrondissement',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Paris',
    postalCode: '75018',
    addressCountry: 'FR',
  },
}

export default function RenovationParis18e() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocal) }}
      />

      <section className="pt-28 sm:pt-36 pb-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Paris 18e arrondissement</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Rénovation appartement<br className="hidden sm:block" /> Paris 18e
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Artisan rénovateur et décorateur intérieur dans le 18e arrondissement. Rénovation complète, décoration sur-mesure, finitions haut de gamme. Devis gratuit sous 48h.
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
            Notre intervention dans le 18e arrondissement
          </h2>
          <div className="space-y-4 text-gray-500 text-sm leading-relaxed font-light">
            <p>
              Le 18e arrondissement est l&apos;un des plus iconiques de Paris. Montmartre et sa Butte, les Abbesses et leurs ruelles escarpées, le Sacré-Cœur dominant toute la ville, la Rue Lepic et ses marchés colorés — autant de lieux chargés d&apos;histoire et de charme qui attirent des propriétaires souhaitant rénover des appartements atypiques.
            </p>
            <p>
              Espace Design est particulièrement expérimenté dans la rénovation des appartements montmartrois, souvent nichés dans des immeubles anciens aux configurations atypiques : escaliers étroits, plafonds bas sous les combles, pentes de toiture, vues imprenables sur Paris. Ces contraintes sont pour nous autant d&apos;opportunités de créer des intérieurs uniques et créatifs.
            </p>
            <p>
              Nous intervenons dans tout le 18e : du quartier des Grandes Carrières autour de la Rue Ordener aux abords de la Place de Clichy, de la Rue Caulaincourt au Boulevard de Rochechouart. Notre équipe se déplace gratuitement pour un premier diagnostic, suivi d&apos;un devis clair et détaillé sous 48 heures.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F2F2EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10">
            Nos services dans le 18e
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Rénovation complète', desc: 'Du sol au plafond : gros œuvre, électricité, plomberie, cloisons, finitions. Maîtrise totale des contraintes des immeubles anciens.' },
              { num: '02', title: 'Aménagement sous combles', desc: 'Transformation d&apos;espaces sous pente en chambres, bureaux ou salles de bain — solutions créatives et techniques pour chaque configuration.' },
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
            <Image src="/images/realisations/22-couloir-led-bureau.jpg" alt="Couloir éclairage LED — rénovation Paris 18e" fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
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
            Votre projet dans le 18e
          </h2>
          <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Décrivez votre projet et recevez un devis gratuit et détaillé sous 48h. Déplacement sans engagement dans tout le 18e arrondissement.
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
