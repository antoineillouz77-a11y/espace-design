import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Devis Gratuit Rénovation Paris | Espace Design',
  description:
    'Contactez Espace Design pour un devis gratuit en 48h. Artisan rénovateur à Paris et Île-de-France. Déplacement gratuit et sans engagement. ☎ 06 11 78 38 67',
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://espacedesignparis.fr/contact' },
  ],
}

const schemaContact = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Devis gratuit — Espace Design',
  url: 'https://espacedesignparis.fr/contact',
  description: 'Demandez votre devis gratuit à Espace Design, artisan rénovateur à Paris.',
  mainEntity: {
    '@type': 'HomeAndConstructionBusiness',
    name: 'Espace Design',
    telephone: '+33611783867',
    email: 'espacedesign92@gmail.com',
    url: 'https://espacedesignparis.fr',
    openingHours: 'Mo-Sa 08:00-19:00',
    areaServed: { '@type': 'City', name: 'Paris' },
  },
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaContact) }}
      />
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

      {/* Google Maps */}
      <section className="bg-white">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d167952.24919173858!2d2.182604!3d48.85888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C+France!5e0!3m2!1sfr!2sfr!4v1713000000000!5m2!1sfr!2sfr"
          width="100%"
          height="320"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Zone d'intervention Espace Design — Paris & Île-de-France"
        />
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
