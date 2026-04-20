import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Provins (77160) — Artisan Rénovateur | Espace Design',
  description: "Artisan rénovateur à Provins — rénovation appartement, salle de bain, cuisine, peinture, parquet. Devis gratuit sous 48h.",
  keywords: ['rénovation Provins', 'artisan rénovation Provins', 'rénovation appartement 77160'],
}
const schemaBreadcrumb = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' }, { '@type': 'ListItem', position: 2, name: 'Rénovation Provins', item: 'https://espacedesignparis.fr/renovation-provins' }] }
const schemaLocalBusiness = { '@context': 'https://schema.org', '@type': 'HomeAndConstructionBusiness', name: 'Espace Design', description: "Artisan rénovateur à Provins.", telephone: '+33611783867', email: 'espacedesign92@gmail.com', url: 'https://espacedesignparis.fr', address: { '@type': 'PostalAddress', addressLocality: 'Provins', postalCode: '77160', addressCountry: 'FR' }, aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '47' }, priceRange: '€€€' }
const schemaFAQ = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: "Quel délai pour un devis à Provins ?", acceptedAnswer: { '@type': 'Answer', text: "Devis sous 48h après visite gratuite à Provins." } }, { '@type': 'Question', name: "Quels travaux à Provins ?", acceptedAnswer: { '@type': 'Answer', text: "Rénovation complète, salle de bain, cuisine, peinture, parquet, carrelage, électricité, plomberie." } }, { '@type': 'Question', name: "Êtes-vous assurés ?", acceptedAnswer: { '@type': 'Answer', text: "Oui, assurance décennale et RC pro." } }, { '@type': 'Question', name: "Prix rénovation à Provins ?", acceptedAnswer: { '@type': 'Answer', text: "Rénovation légère dès 300€/m², complète 700-1200€/m²." } }] }
const services = [{ href: '/renovation-salle-de-bain-paris', label: 'Salle de bain' }, { href: '/renovation-cuisine-paris', label: 'Cuisine' }, { href: '/peinture-paris', label: 'Peinture' }, { href: '/parquet-paris', label: 'Parquet' }, { href: '/carrelage-paris', label: 'Carrelage' }, { href: '/electricite-paris', label: 'Électricité' }, { href: '/plomberie-paris', label: 'Plomberie' }, { href: '/menuiserie-paris', label: 'Menuiserie' }, { href: '/isolation-paris', label: 'Isolation' }, { href: '/platrererie-paris', label: 'Plâtrerie' }]

export default function ProvinsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Seine-et-Marne (77)</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation Provins</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Artisan rénovateur à Provins. Devis gratuit sous 48h.</p>
        <div className="flex items-center justify-center gap-1 mt-6">{[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-[#D4AF37] text-[#D4AF37]" />)}<span className="text-white text-sm ml-2">4,9/5 — 47 avis</span></div>
      </section>
      <section className="py-14 bg-white"><div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Artisan rénovateur à Provins</h2>
        <p className="text-gray-600 leading-relaxed mb-4">Provins, ville médiévale classée au Patrimoine mondial de l'UNESCO, possède un centre historique avec des maisons de caractère et une couronne pavillonnaire récente. Les rénovations y exigent souvent une attention particulière au patrimoine bâti.</p>
        <p className="text-gray-600 leading-relaxed mb-4">Espace Design intervient à Provins pour la rénovation respectueuse de l'habitat ancien et la modernisation des logements plus récents. Devis gratuit sous 48h, artisan qualifié.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">{['Devis gratuit sous 48h', 'Déplacement gratuit', 'Artisan qualifié, assurance décennale', 'Finitions soignées', 'Respect des délais', 'Tous corps de métier'].map(e => (<div key={e} className="flex items-start gap-2"><CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" /><span className="text-sm text-gray-600">{e}</span></div>))}</div>
      </div></section>
      <section className="py-12 bg-[#FAFAF8] border-t border-gray-100"><div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="font-display text-xl font-semibold text-[#1C1C1C] mb-6">Nos services à Provins</h2>
        <div className="flex flex-wrap gap-3">{services.map(s => <Link key={s.href} href={s.href} className="text-xs border border-gray-200 rounded px-3 py-1.5 text-gray-600 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light">{s.label}</Link>)}</div>
      </div></section>
      <section className="py-14 bg-white"><div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="font-display text-xl font-semibold text-[#1C1C1C] mb-6">Questions fréquentes</h2>
        <div className="space-y-4">{schemaFAQ.mainEntity.map(q => (<div key={q.name} className="border border-gray-100 rounded p-4"><p className="font-medium text-[#1C1C1C] text-sm mb-1">{q.name}</p><p className="text-gray-600 text-sm">{q.acceptedAnswer.text}</p></div>))}</div>
      </div></section>
      <section className="py-10 bg-[#FAFAF8] border-t border-gray-100"><div className="max-w-4xl mx-auto px-4 sm:px-6">
        <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Voir aussi</p>
        <div className="flex flex-wrap gap-3">{[{ href: '/renovation-seine-et-marne', label: 'Seine-et-Marne (77)' }, { href: '/renovation-appartement-paris', label: 'Paris' }, { href: '/tarifs', label: 'Tarifs' }, { href: '/faq', label: 'FAQ' }, { href: '/avis', label: 'Avis' }].map(l => <Link key={l.href} href={l.href} className="text-xs border border-gray-200 rounded px-3 py-1.5 text-gray-600 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light">{l.label}</Link>)}</div>
      </div></section>
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Provins</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
