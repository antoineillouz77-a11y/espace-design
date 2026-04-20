import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Peinture boiseries Paris', item: 'https://espacedesignparis.fr/blog/peinture-boiseries-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Peinture boiseries, volets et portes à Paris — Prix & méthodes 2025",
  description: "Décapage, préparation et laque pour boiseries, volets bois et portes à Paris. Prix par porte, fenêtre et paire de volets. Devis gratuit.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/peinture-boiseries-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Faut-il décaper les boiseries avant de les peindre ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Le décapage est recommandé lorsque l\'ancienne peinture est écaillée, craquelée ou trop épaisse. Il garantit une adhérence parfaite de la laque et un rendu lisse. Pour une simple remise en couleur sur boiseries en bon état, un ponçage léger et une sous-couche suffisent.' },
    },
    {
      '@type': 'Question',
      name: 'Quelle peinture choisir pour des boiseries à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Nous recommandons une laque alkyde ou glycéro pour les boiseries exposées (volets, fenêtres) et une laque acrylique satinée pour les portes intérieures et moulures. Ces finitions résistent mieux aux chocs, à l\'humidité et aux variations de température.' },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte la peinture d\'une porte intérieure à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'La peinture d\'une porte intérieure (deux faces, cadre et chambranle) coûte entre 80 et 200 € à Paris selon l\'état de la surface, le nombre de couches et les finitions choisies. Le décapage complet ajoute 50 à 100 € par porte.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Peinture boiseries, volets et portes Paris — Prix 2025 | Espace Design',
  description: 'Peinture boiseries à Paris : décapage, préparation, laque pour portes, fenêtres et volets bois. Prix de 60 à 250 €. Devis gratuit sous 48h.',
}

export default function PeintureBoisseriesParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Peinture boiseries, volets et portes à Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Décapage, ponçage, sous-couche et laque : notre méthode pour des boiseries parfaitement finies qui durent dans le temps.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">L&apos;importance d&apos;une bonne préparation des boiseries</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Les boiseries — portes, fenêtres, volets, plinthes, moulures — sont les éléments qui donnent du caractère à un appartement parisien. Leur entretien régulier et leur remise en peinture nécessitent une préparation rigoureuse : ponçage, rebouchage des fissures, sous-couche d&apos;accrochage avant application de la laque finale.</p>
          <p className="text-gray-600 leading-relaxed mb-4">À Paris, les immeubles haussmanniens présentent souvent des boiseries très travaillées avec moulures, filets et encadrements complexes. Nos artisans maîtrisent ces détails et utilisent des petits rouleaux et pinceaux adaptés pour un rendu impeccable, même sur les parties les plus ouvragées.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Nos prestations peinture boiseries</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Décapage chimique ou thermique',
              'Ponçage et préparation surfaces',
              'Sous-couche d\'accrochage',
              'Laque glycéro ou acrylique satinée',
              'Peinture portes intérieures & extérieures',
              'Volets bois, fenêtres & moulures',
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
                  ['Peinture porte intérieure (2 faces)', '80 – 200 €'],
                  ['Boiseries fenêtre (cadre + encadrement)', '60 – 150 €/fenêtre'],
                  ['Volets bois (paire)', '100 – 250 €/paire'],
                  ['Décapage complet (supplément)', '50 – 100 €/élément'],
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
