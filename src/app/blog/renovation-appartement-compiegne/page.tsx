import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Compiègne', item: 'https://espacedesignparis.fr/blog/renovation-appartement-compiegne' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Compiègne (60) — Guide complet 2025",
  description: "Tout savoir sur la rénovation d'appartement à Compiègne : travaux, prix au m², artisans qualifiés. Devis gratuit sous 48h.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-compiegne' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation complète à Compiègne ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Le prix d\'une rénovation complète à Compiègne varie entre 850 et 1 200 € par m² selon l\'état du bien et les prestations choisies. Un appartement de 60 m² revient généralement entre 51 000 et 72 000 €.' },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte la rénovation d\'une salle de bain à Compiègne ?',
      acceptedAnswer: { '@type': 'Answer', text: 'La rénovation d\'une salle de bain à Compiègne est estimée entre 6 000 et 10 000 € pour une surface standard de 5 à 8 m², pose carrelage, sanitaires et plomberie inclus.' },
    },
    {
      '@type': 'Question',
      name: 'Faites-vous des devis pour des projets à Compiègne depuis Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, Espace Design intervient sur Compiègne et l\'Oise depuis Paris. Nous réalisons un devis gratuit sous 48h après visite ou échange visio pour les projets hors Paris.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Compiègne (60) — Prix & Artisans 2025 | Espace Design',
  description: 'Rénovation appartement à Compiègne : prix au m², salle de bain, cuisine, peinture. Artisan qualifié, devis gratuit sous 48h.',
}

export default function RenovationAppartementCompiegne() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement à Compiègne (60)</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Prix, conseils et artisans pour rénover votre appartement dans l&apos;Oise — ville historique aux immeubles anciens chargés de caractère.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Rénover à Compiègne : spécificités du parc immobilier</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Compiègne, préfecture de l&apos;Oise, dispose d&apos;un parc immobilier varié dominé par des immeubles anciens du centre-ville et des constructions plus récentes dans les quartiers périphériques. Les appartements haussmanniens et d&apos;après-guerre nécessitent souvent une remise aux normes électrique, un ravalement intérieur complet et la modernisation des installations sanitaires.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Proche de l&apos;Île-de-France (environ 80 km de Paris), Compiègne attire de nombreux acquéreurs souhaitant bénéficier d&apos;un cadre de vie plus accessible tout en restant bien connectés à la capitale. Rénover intelligemment un bien à Compiègne permet de valoriser rapidement son investissement dans un marché en progression.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Nos prestations de rénovation à Compiègne</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Rénovation complète clé en main',
              'Salle de bain & plomberie',
              'Cuisine équipée & agencement',
              'Peinture & revêtements muraux',
              'Parquet & sols stratifiés',
              'Électricité mise aux normes',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Tarifs Paris 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1C1C1C] text-white"><th className="p-3 text-left">Prestation</th><th className="p-3 text-right">Prix indicatif</th></tr></thead>
              <tbody>
                {[
                  ['Rénovation complète', '850 – 1 200 €/m²'],
                  ['Rénovation salle de bain', '6 000 – 10 000 €'],
                  ['Rénovation cuisine', '7 000 – 12 000 €'],
                  ['Peinture & finitions', '25 – 45 €/m²'],
                ].map(([label, price]) => (
                  <tr key={label} className="border-b border-gray-100"><td className="p-3 text-gray-600">{label}</td><td className="p-3 text-right font-medium">{price}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">FAQ</h2>
          <div className="space-y-4">
            {schemaFAQ.mainEntity.map((faq) => (
              <div key={faq.name} className="border border-gray-200 rounded p-4">
                <p className="font-semibold text-[#1C1C1C] mb-2">{faq.name}</p>
                <p className="text-sm text-gray-600">{faq.acceptedAnswer.text}</p>
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
              { href: '/blog', label: 'Tous les articles' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-xs border border-gray-200 rounded px-3 py-1.5 text-gray-600 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Paris</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
