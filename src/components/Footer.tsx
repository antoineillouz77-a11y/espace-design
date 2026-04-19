import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

const arrondissements = [
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
]

const villes = [
  { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
  { href: '/renovation-levallois-perret', label: 'Levallois-Perret' },
  { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
  { href: '/renovation-issy-les-moulineaux', label: 'Issy-les-Moulineaux' },
  { href: '/renovation-saint-cloud', label: 'Saint-Cloud' },
  { href: '/renovation-vincennes', label: 'Vincennes' },
  { href: '/renovation-versailles', label: 'Versailles' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="font-display text-2xl font-bold text-white mb-1">
              ESPACE DESIGN
            </div>
            <div className="text-xs text-[#D4AF37] tracking-widest uppercase mb-4">
              Rénovation & Décoration
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Artisan rénovateur à Paris et en Île-de-France. Belles finitions, travail soigné.
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+33611783867" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
                  <Phone size={14} />
                  06 11 78 38 67
                </a>
              </li>
              <li>
                <a href="mailto:espacedesign92@gmail.com" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
                  <Mail size={14} />
                  espacedesign92@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span>Paris & Île-de-France</span>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/', label: 'Accueil' },
                { href: '/services', label: 'Services' },
                { href: '/realisations', label: 'Réalisations' },
                { href: '/renovation-appartement-paris', label: 'Rénovation Paris' },
                { href: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-[#D4AF37] transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>

            <h3 className="text-white font-semibold mt-8 mb-4 text-sm uppercase tracking-wider">Île-de-France</h3>
            <ul className="space-y-2 text-sm">
              {villes.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-[#D4AF37] transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Arrondissements col 1 */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Paris 1er–10e</h3>
            <ul className="space-y-2 text-sm">
              {arrondissements.slice(0, 10).map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-[#D4AF37] transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Arrondissements col 2 */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Paris 11e–20e</h3>
            <ul className="space-y-2 text-sm">
              {arrondissements.slice(10).map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-[#D4AF37] transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-600">
          <span>© {new Date().getFullYear()} Espace Design — SIRET 904 728 268 00015</span>
          <span>Rénovation & Décoration Intérieure · Paris & Île-de-France</span>
        </div>
      </div>
    </footer>
  )
}
