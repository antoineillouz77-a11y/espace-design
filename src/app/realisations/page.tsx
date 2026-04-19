import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Nos Réalisations — Portfolio Rénovation Appartement Paris | Espace Design',
  description:
    "Photos réelles de nos chantiers : rénovation d'appartements haussmanniens, décoration intérieure, cuisines sur-mesure, salles de bain, terrasses à Paris et Île-de-France.",
  keywords: [
    'réalisations rénovation Paris',
    'portfolio rénovation appartement Paris',
    'photos chantier rénovation Paris',
    'avant après rénovation Paris',
    'exemples rénovation intérieure Paris',
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Réalisations', item: 'https://espacedesignparis.fr/realisations' },
  ],
}

const schemaGallery = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'Portfolio Rénovation — Espace Design Paris',
  description: 'Photos de chantiers de rénovation et décoration intérieure à Paris et Île-de-France.',
  url: 'https://espacedesignparis.fr/realisations',
  author: { '@type': 'Organization', name: 'Espace Design' },
}

const projets = [
  {
    src: '/images/realisations/01-salon-parisien-bibliotheque.jpg',
    label: 'Salon & bibliothèque sur-mesure',
    lieu: 'Paris 7e · Avenue de Breteuil',
    type: 'Rénovation complète',
    tall: true,
  },
  {
    src: '/images/realisations/06-salon-eclairage-theatre.jpg',
    label: 'Salon — éclairage architectural',
    lieu: 'Paris 6e · Rue de Vaugirard',
    type: 'Rénovation complète',
    tall: false,
  },
  {
    src: '/images/realisations/04-terrasse-vue-paris.jpg',
    label: 'Terrasse — lames composite',
    lieu: 'Paris 9e · Rue La Fayette',
    type: 'Terrasse',
    tall: false,
  },
  {
    src: '/images/realisations/07-open-space-cuisine.jpg',
    label: 'Open space cuisine & séjour',
    lieu: 'Paris 12e · Avenue Daumesnil',
    type: 'Rénovation complète',
    tall: true,
  },
  {
    src: '/images/realisations/02-bibliotheque-led.jpg',
    label: 'Bibliothèque éclairée LED',
    lieu: 'Paris 16e · Rue de la Pompe',
    type: 'Sur-mesure',
    tall: false,
  },
  {
    src: '/images/realisations/09-chambre-tete-lit.jpg',
    label: 'Chambre — tête de lit & dressing',
    lieu: 'Paris 11e · Boulevard Voltaire',
    type: 'Chambre',
    tall: false,
  },
  {
    src: '/images/realisations/05-terrasse-ciel-bleu.jpg',
    label: 'Terrasse — vue dégagée',
    lieu: 'Paris 17e · Avenue des Ternes',
    type: 'Terrasse',
    tall: false,
  },
  {
    src: '/images/realisations/10-appartement-globe.jpg',
    label: 'Rénovation complète appartement',
    lieu: 'Paris 3e · Rue du Temple',
    type: 'Rénovation complète',
    tall: true,
  },
  {
    src: '/images/realisations/08-couloir-moderne.jpg',
    label: 'Couloir & aménagement global',
    lieu: 'Paris 15e · Rue de la Convention',
    type: 'Aménagement',
    tall: false,
  },
  {
    src: '/images/realisations/12-salle-bain.jpg',
    label: 'Salle de bain — carreaux de ciment',
    lieu: 'Paris 10e · Faubourg Saint-Denis',
    type: 'Salle de bain',
    tall: false,
  },
  {
    src: '/images/realisations/11-chambre-dressing.jpg',
    label: 'Chambre & dressing intégré',
    lieu: 'Paris 14e · Rue d\'Alésia',
    type: 'Chambre',
    tall: false,
  },
  {
    src: '/images/realisations/13-bureau-dressing.jpg',
    label: 'Bureau & dressing sur-mesure',
    lieu: 'Paris 13e · Avenue de Choisy',
    type: 'Sur-mesure',
    tall: false,
  },
  {
    src: '/images/realisations/03-buffet-led.jpg',
    label: 'Buffet sur-mesure & éclairage intégré',
    lieu: 'Paris 8e · Boulevard Haussmann',
    type: 'Sur-mesure',
    tall: false,
  },
  {
    src: '/images/realisations/14-meuble-tv-beton.jpg',
    label: 'Meuble TV effet béton ciré',
    lieu: 'Paris 5e · Rue Mouffetard',
    type: 'Décoration',
    tall: false,
  },
  {
    src: '/images/realisations/15-chambre-niche-led.jpg',
    label: 'Chambre — niche & rangement éclairé',
    lieu: 'Paris 4e · Île Saint-Louis',
    type: 'Chambre',
    tall: false,
  },
]

export default function RealisationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGallery) }}
      />
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Portfolio</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
          Nos réalisations
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Chaque projet est unique. Découvrez nos travaux réels à Paris et en Île-de-France —
          rénovation complète, décoration, sur-mesure.
        </p>
      </section>

      {/* Galerie masonry */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
            {projets.map((p, i) => (
              <div
                key={i}
                className="break-inside-avoid rounded-lg overflow-hidden relative group shadow-sm"
                style={{ height: p.tall ? '400px' : '280px' }}
              >
                <Image
                  src={p.src}
                  alt={`${p.label} — Rénovation ${p.type.toLowerCase()} ${p.lieu} | Espace Design`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/65 px-4 py-3">
                  <div className="text-white text-sm font-medium leading-tight">{p.label}</div>
                  <div className="text-[#D4AF37] text-xs mt-1">{p.lieu}</div>
                  <div className="text-gray-300 text-xs mt-0.5">{p.type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-xl font-semibold text-[#1C1C1C] mb-4">
            Nos interventions par arrondissement
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              { href: '/renovation-paris-1er', label: 'Paris 1er' },
              { href: '/renovation-paris-2e', label: 'Paris 2e' },
              { href: '/renovation-paris-3e', label: 'Paris 3e' },
              { href: '/renovation-paris-4e', label: 'Paris 4e' },
              { href: '/renovation-paris-5e', label: 'Paris 5e' },
              { href: '/renovation-paris-6e', label: 'Paris 6e' },
              { href: '/renovation-paris-7e', label: 'Paris 7e' },
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-9e', label: 'Paris 9e' },
              { href: '/renovation-paris-10e', label: 'Paris 10e' },
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-paris-12e', label: 'Paris 12e' },
              { href: '/renovation-paris-13e', label: 'Paris 13e' },
              { href: '/renovation-paris-14e', label: 'Paris 14e' },
              { href: '/renovation-paris-15e', label: 'Paris 15e' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-paris-17e', label: 'Paris 17e' },
              { href: '/renovation-paris-18e', label: 'Paris 18e' },
              { href: '/renovation-paris-19e', label: 'Paris 19e' },
              { href: '/renovation-paris-20e', label: 'Paris 20e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
              { href: '/renovation-levallois-perret', label: 'Levallois-Perret' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
              { href: '/renovation-versailles', label: 'Versailles' },
            ].map((z) => (
              <Link
                key={z.href}
                href={z.href}
                className="text-xs text-gray-600 bg-[#FAFAF8] border border-gray-200 px-3 py-1.5 rounded hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors"
              >
                {z.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center px-4">
        <h2 className="font-display text-3xl font-bold text-[#1C1C1C] mb-4">
          Votre réalisation sera la prochaine
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto text-sm">
          Parlez-nous de votre projet et obtenez un devis gratuit sous 48h.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 bg-[#1C1C1C] text-white px-8 py-4 rounded font-semibold hover:bg-[#B8960C] transition-colors"
          >
            Devis gratuit <ArrowRight size={16} />
          </Link>
          <a
            href="tel:+33611783867"
            className="flex items-center justify-center gap-2 border border-[#1C1C1C] text-[#1C1C1C] px-8 py-4 rounded font-medium hover:bg-[#1C1C1C] hover:text-white transition-colors"
          >
            <Phone size={16} />
            06 11 78 38 67
          </a>
        </div>
      </section>
    </>
  )
}
