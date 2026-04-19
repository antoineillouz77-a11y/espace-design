import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Phone, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Appartement Paris — Artisan Qualifié & Devis Gratuit',
  description:
    'Rénovation d\'appartement à Paris : Espace Design intervient dans tous les arrondissements. Artisan qualifié, belles finitions, devis gratuit sous 48h. ☎ 06 11 78 38 67',
}

const arrondissements = [
  '1er', '2e', '3e', '4e', '5e', '6e', '7e', '8e', '9e', '10e',
  '11e', '12e', '13e', '14e', '15e', '16e', '17e', '18e', '19e', '20e',
]

const faq = [
  {
    q: 'Quel est le coût d\'une rénovation d\'appartement à Paris ?',
    a: 'Le coût varie selon l\'état du bien et la nature des travaux : de 500 à 1 500 €/m² pour une rénovation partielle, et de 1 500 à 3 000 €/m² pour une rénovation complète. Nous établissons un devis gratuit et précis après visite.',
  },
  {
    q: 'Combien de temps dure une rénovation d\'appartement ?',
    a: 'Pour un appartement de 50 m², comptez 3 à 6 semaines selon l\'ampleur des travaux. Nous respectons les délais convenus et vous informons à chaque étape.',
  },
  {
    q: 'Intervenez-vous dans toute la région parisienne ?',
    a: 'Oui, nous intervenons dans tous les arrondissements de Paris ainsi que dans toute l\'Île-de-France : Hauts-de-Seine, Seine-Saint-Denis, Val-de-Marne et au-delà.',
  },
  {
    q: 'Avez-vous une assurance décennale ?',
    a: 'Oui, Espace Design est couvert par une assurance décennale et une assurance responsabilité civile professionnelle. Tous nos travaux sont garantis.',
  },
  {
    q: 'Proposez-vous un accompagnement en décoration ?',
    a: 'Absolument. En plus des travaux, nous vous conseillons sur les couleurs, matériaux, et l\'aménagement pour un résultat harmonieux et personnalisé.',
  },
]

export default function RenovationParis() {
  return (
    <>
      {/* Hero SEO */}
      <section className="pt-32 pb-20 bg-[#1C1C1C] px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} className="fill-[#D4AF37] text-[#D4AF37]" />
            ))}
            <span className="text-gray-400 text-xs ml-2">40+ avis clients</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Rénovation d&apos;appartement à Paris
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Artisan qualifié, 15+ ans d&apos;expérience, belles finitions garanties.
            Devis gratuit sous 48h dans tous les arrondissements de Paris.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+33611783867"
              className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors"
            >
              <Phone size={18} />
              06 11 78 38 67
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"
            >
              Devis gratuit en ligne <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Intro SEO */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-[#1C1C1C] mb-4">
            Votre artisan rénovateur à Paris
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Espace Design est une entreprise de rénovation et décoration intérieure basée en
            Île-de-France. Nous intervenons sur tous types de projets : rénovation complète d&apos;appartements,
            rafraîchissement de pièces, aménagement sur mesure, ou simple remise en état.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Notre signature : des <strong>finitions haut de gamme</strong> à chaque chantier.
            Un artisan minutieux, à l&apos;écoute, qui traite votre logement comme le sien.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Que vous habitiez dans le <strong>15e, 16e, 17e, 8e arrondissement</strong> de Paris
            ou en banlieue, nous nous déplaçons gratuitement pour évaluer votre projet
            et vous remettre un devis détaillé sans engagement.
          </p>
        </div>
      </section>

      {/* Nos engagements */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-[#1C1C1C] mb-8 text-center">
            Nos engagements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Devis gratuit et détaillé sous 48h',
              'Artisan qualifié, assurance décennale',
              'Respect des délais et du budget',
              'Belles finitions sur chaque chantier',
              'Propreté du chantier garantie',
              'Un seul interlocuteur du début à la fin',
              'Matériaux de qualité sélectionnés',
              'Photos avant/après pour chaque projet',
              'Disponible 6j/7, réponse rapide',
            ].map((e) => (
              <div key={e} className="flex items-start gap-3 bg-white rounded p-4 border border-gray-100">
                <CheckCircle size={15} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{e}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Arrondissements */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl font-bold text-[#1C1C1C] mb-3">
            Rénovation dans tous les arrondissements
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            Nous intervenons dans tout Paris, sans supplément de déplacement.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {arrondissements.map((arr) => (
              <span
                key={arr}
                className="border border-gray-200 rounded-full px-4 py-1.5 text-sm text-gray-700 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors cursor-default"
              >
                Paris {arr}
              </span>
            ))}
          </div>
          <p className="text-gray-400 text-xs mt-6">
            + toute l&apos;Île-de-France : 92, 93, 94, 78, 91, 95, 77
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-[#1C1C1C] mb-8 text-center">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <div key={i} className="bg-white rounded-lg border border-gray-100 p-6">
                <h3 className="font-semibold text-[#1C1C1C] mb-2 text-sm">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-3xl font-bold text-white mb-4">
          Prêt à rénover votre appartement ?
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">
          Contactez-nous aujourd&apos;hui pour un devis gratuit. Nous nous déplaçons dans tout Paris et sa couronne.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+33611783867"
            className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors"
          >
            <Phone size={18} />
            06 11 78 38 67
          </a>
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"
          >
            Formulaire de contact <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
