'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/realisations', label: 'Réalisations' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight">
            <span className="font-display text-xl sm:text-2xl font-bold tracking-wide text-[#1C1C1C]">
              ESPACE DESIGN
            </span>
            <span className="text-xs text-[#B8960C] tracking-widest uppercase font-medium">
              Rénovation & Décoration
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-gray-700 hover:text-[#B8960C] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA phone */}
          <a
            href="tel:+33611783867"
            className="hidden md:flex items-center gap-2 bg-[#1C1C1C] text-white px-4 py-2.5 rounded text-sm font-medium hover:bg-[#B8960C] transition-colors"
          >
            <Phone size={15} />
            06 11 78 38 67
          </a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-gray-800 py-1"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+33611783867"
            className="flex items-center gap-2 bg-[#1C1C1C] text-white px-4 py-3 rounded text-sm font-medium justify-center mt-2"
          >
            <Phone size={15} />
            06 11 78 38 67
          </a>
        </div>
      )}
    </header>
  )
}
