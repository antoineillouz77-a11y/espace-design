import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Appartement Paris 15e — Espace Design | Artisan Rénovateur',
  description:
    'Artisan rénovateur et décorateur intérieur dans le 15e arrondissement de Paris. Rénovation complète, décoration, sur-mesure. Devis gratuit 48h. Convention, Grenelle, Lecourbe, Vaugirard.',
  keywords: [
    'rénovation appartement Paris 15e',
    'artisan rénovation Paris 15ème',
    'décoration intérieure Paris 15e',
    'renovation Paris 15 arrondissement',
    'entreprise renovation Paris 15',
    'artisan Paris 15e arrondissement',
  ],
}

const schemaLocal = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Espace Design',
  description: 'Artisan rénovateur et décorateur intérieur dans le 15e arrondissement de Paris.',
  telephone: '+33611783867',
  url: 'https://espacedesignparis.fr/renovation-paris-15e',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Paris 15e arrondissement',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Paris',
    postalCode: '75015',
    addressCountry: 'FR',
  },
}

export default function RenovationParis15e() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocal) }}
      />

      {/* Hero compact */}
      <section className="pt-28 sm:pt-36 pb-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Paris 15e arrondissement</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Rénovation appartement<br className="hidden sm:block" /> Paris 15e
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Artisan rénovateur et décorateur intérieur dans le 15e arrondissement. Rénovation complète, décoration sur-mesure, finitions haut de gamme. Devis gratuit sous 48h.
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

      {/* Notre intervention dans le 15e */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-6">
            Notre intervention dans le 15e arrondissement
          </h2>
          <div className="space-y-4 text-gray-500 text-sm leading-relaxed font-light">
            <p>
              Le 15e arrondissement est l&apos;arrondissement le plus peuplé de Paris. Entre la Rue de la Convention, le Boulevard de Grenelle, la Rue Lecourbe, la Rue Vaugirard et La Motte-Piquet, on y trouve une grande diversité d&apos;appartements : des haussmanniens traditionnels, des immeubles des années 70 et de nombreuses copropriétés récentes. Espace Design intervient régulièrement dans ce secteur pour tous types de projets de rénovation.
            </p>
            <p>
              Que vous habitiez dans le quartier de la Motte-Picquet, autour du Parc André-Citroën, dans le secteur Beaugrenelle ou le long du Boulevard Pasteur, nous nous déplaçons dans tout le 15e sans frais supplémentaires. Notre connaissance du quartier nous permet d&apos;anticiper les contraintes techniques propres aux différents types de bâtiments.
            </p>
            <p>
              Dans le 15e, nous intervenons aussi bien pour la rénovation d&apos;une salle de bain ou d&apos;une cuisine que pour la transformation complète d&apos;un appartement familial. Notre approche : un chantier soigné, propre, dans le respect de vos voisins et de votre quotidien.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[#F2F2EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10">
            Nos services dans le 15e
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Rénovation complète', desc: 'Du sol au plafond : gros œuvre, électricité, plomberie, cloisons, finitions. Un seul artisan, un seul chantier.' },
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

      {/* Photos */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10">
            Quelques réalisations
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {[
              { src: '/images/realisations/07-open-space-cuisine.jpg', alt: 'Open space cuisine Paris 15e' },
              { src: '/images/realisations/12-salle-bain.jpg', alt: 'Salle de bain Paris 15e' },
              { src: '/images/realisations/08-couloir-moderne.jpg', alt: 'Couloir moderne Paris 15e' },
            ].map((img) => (
              <div key={img.src} className="relative rounded-lg overflow-hidden h-44 sm:h-60">
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="33vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignage */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex justify-center gap-0.5 mb-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={13} className="fill-[#D4AF37] text-[#D4AF37]" />
            ))}
          </div>
          <p className="text-gray-600 text-sm leading-relaxed font-light italic mb-6">
            &ldquo;Patrick a rénové notre salon et notre cuisine. Un travail exceptionnel, des finitions parfaites. Je recommande sans hésiter à tous les habitants du 15e.&rdquo;
          </p>
          <div className="text-sm font-medium text-[#1C1C1C]">Sophie M.</div>
          <div className="text-xs text-gray-400 font-light mt-0.5">Paris 15e · Rue de la Convention</div>
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
            Votre projet dans le 15e
          </h2>
          <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Décrivez votre projet et recevez un devis gratuit et détaillé sous 48h. Déplacement sans engagement dans tout le 15e arrondissement.
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
