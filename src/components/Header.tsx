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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-sm border-b border-gray-100/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight">
            <span className="font-display text-lg sm:text-xl font-semibold tracking-[0.12em] text-[#1C1C1C]">
              ESPACE DESIGN
            </span>
            <span className="text-[10px] text-[#B8960C] tracking-[0.25em] uppercase font-light">
              Paris
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[13px] font-light tracking-wide text-gray-600 hover:text-[#B8960C] transition-colors duration-300"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA phone — bordure sobre */}
          <a
            href="tel:+33611783867"
            className="hidden md:flex items-center gap-2 border border-[#1C1C1C] text-[#1C1C1C] px-4 py-2 rounded text-[13px] font-light tracking-wide hover:bg-[#1C1C1C] hover:text-white transition-all duration-300"
          >
            <Phone size={13} />
            06 11 78 38 67
          </a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-light tracking-wide text-gray-700 py-1"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+33611783867"
            className="flex items-center gap-2 border border-[#1C1C1C] text-[#1C1C1C] px-4 py-3 rounded text-sm font-light justify-center mt-1"
          >
            <Phone size={14} />
            06 11 78 38 67
          </a>
        </div>
      )}
    </header>
  )
}
