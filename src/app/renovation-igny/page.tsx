import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: "Rénovation Igny (91430) — Artisan Rénovateur | Espace Design",
  description: "Artisan rénovateur à Igny (91430) — rénovation appartement, salle de bain, cuisine, peinture, parquet. Devis gratuit sous 48h.",
  keywords: ["rénovation Igny", "artisan rénovation Igny", "rénovation appartement 91430"],
}
const schemaBreadcrumb = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' }, { '@type': 'ListItem', position: 2, name: "Rénovation Igny", item: "https://espacedesignparis.fr/renovation-igny" }] }
const schemaLocalBusiness = { '@context': 'https://schema.org', '@type': 'HomeAndConstructionBusiness', name: 'Espace Design', description: "Artisan rénovateur à Igny.", telephone: '+33611783867', email: 'espacedesign92@gmail.com', url: 'https://espacedesignparis.fr', address: { '@type': 'PostalAddress', addressLocality: 'Igny', postalCode: '91430', addressCountry: 'FR' }, aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '47' }, priceRange: '€€€' }
const schemaFAQ = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: "Délai devis à Igny ?", acceptedAnswer: { '@type': 'Answer', text: "Devis gratuit sous 48h à Igny." } }, { '@type': 'Question', name: "Quels travaux à Igny ?", acceptedAnswer: { '@type': 'Answer', text: "Rénovation complète, salle de bain, cuisine, peinture, parquet, carrelage." } }] }
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
export default function IgnyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Essonne (91)</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation Igny</h1>
        <p className="text-gray-400 max-w-xl mx-auto text-sm">Artisan rénovateur à Igny — devis gratuit sous 48h.</p>
      </section>
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Votre artisan à Igny</h2>
          <p className="text-gray-600 leading-relaxed mb-6">Igny est une commune paisible de l'Essonne, appréciée pour sa qualité de vie à proximité du plateau de Saclay. Espace Design accompagne les habitants dans leurs projets de rénovation, qu'il s'agisse d'une remise à neuf complète ou de travaux ciblés dans la salle de bain ou la cuisine.</p>
          <div className="flex flex-wrap gap-3 mb-8">{services.map(s => <Link key={s.href} href={s.href} className="text-xs border border-gray-200 rounded px-3 py-1.5 text-gray-600 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors">{s.label}</Link>)}</div>
          <div className="grid grid-cols-2 gap-2">{['Devis gratuit 48h', 'Artisan qualifié', 'Assurance décennale', 'Finitions soignées'].map(e => <div key={e} className="flex items-center gap-2"><CheckCircle size={13} className="text-[#B8960C]" /><span className="text-xs text-gray-600">{e}</span></div>)}</div>
        </div>
      </section>
      <section className="py-10 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 mb-4">{[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-[#D4AF37] text-[#D4AF37]" />)}<span className="text-sm text-gray-600 ml-1">4,9/5 · 47 avis clients</span></div>
          <p className="text-gray-600 text-sm italic">"Excellent travail, très professionnel et respectueux des délais. Je recommande vivement Espace Design."</p>
        </div>
      </section>
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Igny</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
