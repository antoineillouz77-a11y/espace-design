import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Chennevières-sur-Marne (94) — Artisan Rénovateur | Espace Design',
  description: 'Artisan rénovateur à Chennevières-sur-Marne (94) : rénovation appartement, salle de bain, cuisine, peinture, parquet. Devis gratuit 48h.',
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Val-de-Marne (94)', item: 'https://espacedesignparis.fr/renovation-val-de-marne' },
    { '@type': 'ListItem', position: 3, name: 'Chennevières-sur-Marne', item: 'https://espacedesignparis.fr/renovation-chennevieres-sur-marne' },
  ],
}

const schemaLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Espace Design',
  description: 'Artisan rénovateur à Chennevières-sur-Marne — rénovation appartement, salle de bain, cuisine, peinture, parquet.',
  telephone: '+33611783867',
  email: 'espacedesign92@gmail.com',
  url: 'https://espacedesignparis.fr',
  areaServed: { '@type': 'City', name: 'Chennevières-sur-Marne' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '47', bestRating: '5' },
  priceRange: '€€€',
}

export default function RenovationChennevieresSurMarne() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness) }} />
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Val-de-Marne (94)</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation Chennevières-sur-Marne</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Artisan rénovateur à Chennevières-sur-Marne — rénovation appartement, salle de bain, cuisine. Devis gratuit sous 48h.</p>
      </section>
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Rénovation appartement à Chennevières-sur-Marne</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Chennevières-sur-Marne séduit par son cadre résidentiel verdoyant en bord de Marne, avec un parc immobilier composé majoritairement de pavillons et d'appartements des années 70-80 à fort potentiel de rénovation. Nous intervenons sur l'ensemble des travaux — salle de bain, cuisine, peinture, parquet — pour valoriser votre bien dans ce secteur prisé du Val-de-Marne.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {['Devis gratuit sous 48h','Déplacement gratuit','Artisan qualifié, assurance décennale','Finitions soignées','Respect des délais','Tous corps de métier'].map((e) => (
              <div key={e} className="flex items-start gap-2"><CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" /><span className="text-sm text-gray-600">{e}</span></div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Voir aussi</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/renovation-val-de-marne', label: 'Val-de-Marne (94)' },
              { href: '/renovation-appartement-paris', label: 'Rénovation Paris' },
              { href: '/tarifs', label: 'Nos tarifs' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-xs border border-gray-200 rounded px-3 py-1.5 text-gray-600 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Chennevières-sur-Marne</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
