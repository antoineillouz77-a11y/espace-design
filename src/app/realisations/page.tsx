import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Nos Réalisations — Portfolio Rénovation Paris',
  description:
    'Découvrez nos réalisations : rénovation d\'appartements, décoration intérieure, cuisines, salles de bain, à Paris et en Île-de-France. Photos avant/après.',
}

const projets = [
  { label: 'Rénovation salon — Paris 15e', type: 'Rénovation complète' },
  { label: 'Cuisine ouverte — Boulogne-Billancourt', type: 'Cuisine' },
  { label: 'Chambre sur mesure — Paris 8e', type: 'Décoration' },
  { label: 'Salle de bain — Paris 16e', type: 'Salle de bain' },
  { label: 'Appartement haussmannien — Paris 17e', type: 'Rénovation complète' },
  { label: 'Studio optimisé — Paris 11e', type: 'Aménagement' },
  { label: 'Bureau à domicile — Levallois', type: 'Aménagement' },
  { label: 'Entrée & Couloir — Neuilly', type: 'Décoration' },
  { label: 'Peinture décorative — Paris 6e', type: 'Finitions' },
]

export default function RealisationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Portfolio</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
          Nos réalisations
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Chaque projet est unique. Découvrez quelques exemples de notre travail à Paris et en Île-de-France.
        </p>
      </section>

      {/* Galerie */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
            {projets.map((p, i) => (
              <div
                key={i}
                className="break-inside-avoid bg-gray-100 rounded-lg overflow-hidden relative group"
                style={{ height: i % 3 === 0 ? '320px' : i % 3 === 1 ? '240px' : '280px' }}
              >
                <div className="w-full h-full flex items-center justify-center text-gray-300 text-xs">
                  {/* Photos de Patrick à ajouter ici */}
                  Photo à venir
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                  <div className="text-white text-sm font-semibold">{p.label}</div>
                  <div className="text-[#D4AF37] text-xs mt-1">{p.type}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-lg p-6 text-center">
            <p className="text-[#1C1C1C] text-sm font-medium mb-1">
              📸 Les photos de nos réalisations seront ajoutées très prochainement.
            </p>
            <p className="text-gray-500 text-xs">
              En attendant, appelez-nous pour voir nos travaux en photos sur notre téléphone.
            </p>
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
