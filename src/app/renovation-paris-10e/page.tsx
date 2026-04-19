import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Appartement Paris 10e — Espace Design | Artisan Rénovateur',
  description:
    'Artisan rénovateur et décorateur intérieur dans le 10e arrondissement de Paris. Rénovation complète, décoration haut de gamme, sur-mesure. Devis gratuit 48h. Canal Saint-Martin, Gare du Nord.',
  keywords: [
    'rénovation appartement Paris 10e',
    'artisan rénovation Paris 10ème',
    'décoration intérieure Paris 10e',
    'renovation Paris 10 arrondissement',
    'entreprise renovation Canal Saint-Martin',
    'artisan Paris 10e arrondissement',
  ],
}

const schemaLocal = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Espace Design',
  description: 'Artisan rénovateur et décorateur intérieur dans le 10e arrondissement de Paris.',
  telephone: '+33611783867',
  url: 'https://espacedesignparis.fr/renovation-paris-10e',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Paris 10e arrondissement',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Paris',
    postalCode: '75010',
    addressCountry: 'FR',
  },
}

export default function RenovationParis10e() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocal) }}
      />

      <section className="pt-28 sm:pt-36 pb-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Paris 10e arrondissement</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Rénovation appartement<br className="hidden sm:block" /> Paris 10e
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Artisan rénovateur et décorateur intérieur dans le 10e arrondissement. Rénovation complète, décoration sur-mesure, finitions haut de gamme. Devis gratuit sous 48h.
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
            Notre intervention dans le 10e arrondissement
          </h2>
          <div className="space-y-4 text-gray-500 text-sm leading-relaxed font-light">
            <p>
              Le 10e arrondissement connaît une transformation spectaculaire depuis une décennie. Le Canal Saint-Martin et ses quais réhabilités, la Rue de Lancry, la Rue Beaurepaire et les abords de la Place de la République attirent une clientèle jeune et exigeante, avide de lofts et d&apos;appartements rénovés avec caractère. Espace Design accompagne cette dynamique avec des projets de rénovation ambitieux.
            </p>
            <p>
              Nous intervenons dans tous les profils d&apos;appartements du 10e : les immeubles haussmanniens du Boulevard de Magenta ou de la Rue du Faubourg Saint-Denis, les anciens ateliers d&apos;artisans transformés en lofts lumineux, les appartements du quartier de la Gare du Nord en pleine valorisation. Notre expertise en aménagement de volumes et en création de cuisines ouvertes est particulièrement appréciée dans ce secteur.
            </p>
            <p>
              Du côté de la Rue de la Grange aux Belles à la Rue des Vinaigriers, nos équipes maîtrisent les spécificités du bâti du 10e. Nous vous proposons un accompagnement complet : conception, suivi de chantier, coordination des artisans, livraison clés en main.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F2F2EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10">
            Nos services dans le 10e
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Rénovation complète', desc: 'Du sol au plafond : gros œuvre, électricité, plomberie, cloisons, finitions. Un seul artisan, un seul chantier maîtrisé.' },
              { num: '02', title: 'Transformation de lofts', desc: 'Création d&apos;espaces ouverts, optimisation des volumes, cloisons vitrées, cuisine ouverte — pour des intérieurs modernes et fonctionnels.' },
              { num: '03', title: 'Sur-mesure & finitions', desc: 'Menuiserie, parquet, béton ciré, carrelage. Les matériaux et les finitions qui donnent du caractère à votre intérieur.' },
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
              { src: '/images/realisations/12-salle-bain.jpg', alt: 'Salle de bain Paris 10e' },
              { src: '/images/realisations/07-open-space-cuisine.jpg', alt: 'Open space cuisine Paris 10e' },
              { src: '/images/realisations/01-salon-parisien-bibliotheque.jpg', alt: 'Salon bibliothèque Paris 10e' },
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
            &ldquo;Nous avons transformé un ancien atelier Quai de Valmy en appartement familial de 120m². Patrick a conçu l&apos;espace de A à Z : verrière industrielle, cuisine îlot central, mezzanine enfants. Un résultat qui dépasse largement nos attentes.&rdquo;
          </p>
          <div className="text-sm font-medium text-[#1C1C1C]">Sébastien & Agathe P.</div>
          <div className="text-xs text-gray-400 font-light mt-0.5">Paris 10e · Canal Saint-Martin</div>
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
            Votre projet dans le 10e
          </h2>
          <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Décrivez votre projet et recevez un devis gratuit et détaillé sous 48h. Déplacement sans engagement dans tout le 10e arrondissement.
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
