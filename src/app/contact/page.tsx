import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Devis Gratuit Rénovation Paris',
  description:
    'Contactez Espace Design pour un devis gratuit. Rénovation et décoration intérieure à Paris et Île-de-France. Réponse sous 24h.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Contactez-nous</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
          Devis gratuit sous 48h
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto text-base">
          Décrivez votre projet et nous vous recontactons rapidement pour organiser une visite gratuite.
        </p>
      </section>

      <section className="py-20 bg-[#FAFAF8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="font-display text-2xl font-bold text-[#1C1C1C] mb-6">
                Parlons de votre projet
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Que ce soit pour une rénovation complète, une pièce à rafraîchir, ou un conseil en
                décoration, nous sommes à votre écoute. Le premier contact est toujours gratuit.
              </p>

              <div className="space-y-5 mb-10">
                <a
                  href="tel:+33611783867"
                  className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-100 hover:border-[#D4AF37]/40 transition-colors group"
                >
                  <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#1C1C1C] transition-colors">
                    <Phone size={16} className="text-[#1C1C1C] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">Téléphone</div>
                    <div className="font-semibold text-[#1C1C1C]">06 11 78 38 67</div>
                  </div>
                </a>

                <a
                  href="mailto:espacedesign92@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-100 hover:border-[#D4AF37]/40 transition-colors group"
                >
                  <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#1C1C1C] transition-colors">
                    <Mail size={16} className="text-[#1C1C1C] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">Email</div>
                    <div className="font-semibold text-[#1C1C1C]">espacedesign92@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-100">
                  <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-[#1C1C1C]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">Zone d&apos;intervention</div>
                    <div className="font-semibold text-[#1C1C1C]">Paris & Île-de-France</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-100">
                  <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock size={16} className="text-[#1C1C1C]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">Disponibilité</div>
                    <div className="font-semibold text-[#1C1C1C]">Lun–Sam, 8h–19h</div>
                  </div>
                </div>
              </div>

              <div className="bg-[#1C1C1C] rounded-lg p-5 text-white">
                <p className="font-semibold mb-1">Visite et devis toujours gratuits</p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Nous nous déplaçons gratuitement pour évaluer votre projet et établir un devis précis et détaillé. Aucun engagement.
                </p>
              </div>
            </div>

            {/* Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
