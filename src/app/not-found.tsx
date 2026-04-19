import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#FAFAF8] px-4">
      <div className="max-w-lg mx-auto text-center">
        <div className="font-display text-8xl font-bold text-[#D4AF37]/20 mb-4">404</div>
        <h1 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-3">
          Page introuvable
        </h1>
        <p className="text-gray-500 text-sm font-light mb-8 leading-relaxed">
          La page que vous cherchez n&apos;existe pas ou a été déplacée.
          Revenez à l&apos;accueil ou contactez-nous directement.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-[#1C1C1C] text-white px-6 py-3 rounded font-light text-sm tracking-wide hover:bg-[#B8960C] transition-colors duration-300"
          >
            Retour à l&apos;accueil <ArrowRight size={13} />
          </Link>
          <a
            href="tel:+33611783867"
            className="flex items-center justify-center gap-2 border border-[#1C1C1C] text-[#1C1C1C] px-6 py-3 rounded font-light text-sm tracking-wide hover:bg-[#1C1C1C] hover:text-white transition-colors duration-300"
          >
            <Phone size={13} />
            06 11 78 38 67
          </a>
        </div>
      </div>
    </section>
  )
}
