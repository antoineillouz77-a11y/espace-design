import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: "Rénovation Paris 12e — Artisan Rénovateur Nation, Bercy, Daumesnil | Espace Design",
  description: "Artisan rénovateur Paris 12e — Nation, Bercy, Daumesnil. Rénovation appartement, salle de bain, cuisine, peinture, parquet. Devis gratuit sous 48h.",
  keywords: ['rénovation Paris 12e', 'artisan rénovation Nation Bercy', 'rénovation appartement Paris 12', 'entreprise rénovation Paris 12e'],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Rénovation Paris', item: 'https://espacedesignparis.fr/renovation-appartement-paris' },
    { '@type': 'ListItem', position: 3, name: 'Paris 12e', item: 'https://espacedesignparis.fr/renovation-appartement-paris-12e' },
  ],
}

const schemaLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Espace Design',
  description: "Artisan rénovateur Paris 12e (Nation, Bercy, Daumesnil) — rénovation appartement, salle de bain, cuisine, peinture, parquet.",
  telephone: '+33611783867',
  email: 'espacedesign92@gmail.com',
  url: 'https://espacedesignparis.fr',
  address: { '@type': 'PostalAddress', addressLocality: 'Paris', postalCode: '75012', addressCountry: 'FR' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '47' },
  priceRange: '€€€',
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: "Quel est le prix d'une rénovation Paris 12e ?", acceptedAnswer: { '@type': 'Answer', text: "Rénovation légère dès 350€/m², rénovation complète entre 800 et 1400€/m² selon prestations." } },
    { '@type': 'Question', name: "Combien de temps pour rénover un appartement Paris 12e ?", acceptedAnswer: { '@type': 'Answer', text: "Studio : 2-4 semaines. 3 pièces : 6-10 semaines. Rénovation complète : 3-4 mois." } },
    { '@type': 'Question', name: "Faut-il des autorisations en copropriété Paris 12e ?", acceptedAnswer: { '@type': 'Answer', text: "Oui pour les travaux modifiant les parties communes ou l'aspect extérieur. Nous vous accompagnons dans les démarches." } },
    { '@type': 'Question', name: "Intervenez-vous pour tous types de travaux Paris 12e ?", acceptedAnswer: { '@type': 'Answer', text: "Oui : rénovation complète, salle de bain, cuisine, peinture, parquet, carrelage, électricité, plomberie." } },
  ],
}

const services = [
  { href: '/renovation-salle-de-bain-paris', label: 'Salle de bain' },
  { href: '/renovation-cuisine-paris', label: 'Cuisine' },
  { href: '/peinture-paris', label: 'Peinture' },
  { href: '/parquet-paris', label: 'Parquet' },
  { href: '/carrelage-paris', label: 'Carrelage' },
  { href: '/electricite-paris', label: 'Électricité' },
  { href: '/plomberie-paris', label: 'Plomberie' },
  { href: '/menuiserie-paris', label: 'Menuiserie' },
  { href: '/isolation-paris', label: 'Isolation' },
  { href: '/platrererie-paris', label: 'Plâtrerie' },
]

export default function Paris12ePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Paris 12e arrondissement</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation Paris 12e</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Artisan rénovateur dans le 12e arrondissement de Paris — Nation, Bercy, Daumesnil. Devis gratuit sous 48h.
        </p>
        <div className="flex items-center justify-center gap-1 mt-6">
          {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-[#D4AF37] text-[#D4AF37]" />)}
          <span className="text-white text-sm ml-2">4,9/5 — 47 avis clients</span>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Artisan rénovateur Paris 12e</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Le 12e arrondissement de Paris, entre Nation, Bercy Village et les bords de Seine, propose un tissu immobilier diversifié. Aux côtés des haussmanniens du cours de Vincennes, on trouve des immeubles récents côté Bercy et des logements des années 60-80 en cœur d&apos;îlot.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Espace Design rénove dans le 12e tous types de logements : rénovation complète pour investissement locatif, réfection de salle de bain, cuisine ouverte, peinture de qualité. Devis gratuit sous 48h, artisan qualifié assurance décennale.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
            {['Devis gratuit sous 48h', 'Déplacement gratuit', 'Artisan qualifié, assurance décennale', 'Finitions soignées garanties', 'Respect des délais et du budget', 'Expérience appartements parisiens'].map(e => (
              <div key={e} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{e}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-xl font-semibold text-[#1C1C1C] mb-6">Nos services Paris 12e</h2>
          <div className="flex flex-wrap gap-3">
            {services.map(s => (
              <Link key={s.href} href={s.href} className="text-xs border border-gray-200 rounded px-3 py-1.5 text-gray-600 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light">{s.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-xl font-semibold text-[#1C1C1C] mb-6">Questions fréquentes — Paris 12e</h2>
          <div className="space-y-4">
            {schemaFAQ.mainEntity.map(q => (
              <div key={q.name} className="border border-gray-100 rounded p-4">
                <p className="font-medium text-[#1C1C1C] text-sm mb-1">{q.name}</p>
                <p className="text-gray-600 text-sm">{q.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Voir aussi</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/renovation-appartement-paris', label: 'Rénovation Paris' },
              { href: '/renovation-salle-de-bain-paris', label: 'Salle de bain Paris' },
              { href: '/renovation-cuisine-paris', label: 'Cuisine Paris' },
              { href: '/tarifs', label: 'Nos tarifs' },
              { href: '/avis', label: 'Avis clients' },
            ].map(l => (
              <Link key={l.href} href={l.href} className="text-xs border border-gray-200 rounded px-3 py-1.5 text-gray-600 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet Paris 12e</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — déplacement gratuit dans tout Paris.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
