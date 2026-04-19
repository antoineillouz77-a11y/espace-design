import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="font-display text-2xl font-bold text-white mb-1">
              ESPACE DESIGN
            </div>
            <div className="text-xs text-[#D4AF37] tracking-widest uppercase mb-4">
              Rénovation & Décoration
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Artisan rénovateur à Paris et en Île-de-France. Belles finitions, travail soigné.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/', label: 'Accueil' },
                { href: '/services', label: 'Services' },
                { href: '/realisations', label: 'Réalisations' },
                { href: '/renovation-appartement-paris', label: 'Rénovation Paris' },
                { href: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-[#D4AF37] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+33611783867"
                  className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
                >
                  <Phone size={14} />
                  06 11 78 38 67
                </a>
              </li>
              <li>
                <a
                  href="mailto:espacedesign92@gmail.com"
                  className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
                >
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
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-600">
          <span>© {new Date().getFullYear()} Espace Design — SIRET 904 728 268 00015</span>
          <span>Paris & Île-de-France</span>
        </div>
      </div>
    </footer>
  )
}
