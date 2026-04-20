import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Salle de bain style industriel à Paris', item: 'https://espacedesignparis.fr/blog/salle-de-bain-style-industriel-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Salle de bain style industriel à Paris : idées, matériaux et prix 2025",
  description: "Découvrez comment aménager une salle de bain style industriel à Paris : carrelage béton, tuyaux apparents, métal brut. Guide complet avec tarifs 2025.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/salle-de-bain-style-industriel-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel carrelage choisir pour une salle de bain style industriel ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Le carrelage imitation béton (60x60 ou grand format) est le choix phare du style industriel. On peut aussi opter pour des carreaux de ciment, des dalles en ardoise noire ou des carreaux métallisés. Les tons gris, anthracite et terracotta renforcent l\'ambiance brute recherchée.' },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte une salle de bain industrielle à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Le budget d\'une salle de bain style industriel à Paris varie entre 8 000 € et 18 000 € pour une rénovation complète (12 m²). Ce tarif inclut le carrelage béton, la robinetterie noire mat, les éléments métalliques et la main-d\'oeuvre. Un projet partiel (remplacement robinetterie + carrelage) peut se situer entre 3 000 € et 6 000 €.' },
    },
    {
      '@type': 'Question',
      name: 'Comment intégrer des tuyaux apparents dans une salle de bain ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Les tuyaux apparents sont une signature du style industriel. On utilise des tubes en cuivre ou en acier noir mat, laissés visibles et mis en valeur par un traitement de surface. Il faut s\'assurer que la plomberie est aux normes et que les matériaux sont adaptés à l\'humidité. Un artisan qualifié peut intégrer ces éléments dès la conception.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Salle de bain style industriel Paris — Idées & Prix 2025 | Espace Design',
  description: 'Aménagez votre salle de bain style industriel à Paris : carrelage béton, robinetterie noire, tuyaux apparents. Devis gratuit, artisan qualifié.',
}

export default function SalleDeBainStyleIndustrielParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Salle de bain style industriel à Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Carrelage béton, tuyaux apparents, métal brut : tout ce qu&apos;il faut savoir pour réussir une salle de bain au look industriel authentique dans votre appartement parisien.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Le style industriel en salle de bain : une tendance durable à Paris</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Né dans les lofts new-yorkais des années 90, le style industriel s&apos;est imposé comme une valeur sûre de la décoration intérieure parisienne. Dans la salle de bain, il se traduit par des surfaces brutes, des matériaux honnêtes — béton, acier, fonte — et une palette de couleurs sobres centrée sur les gris, les noirs et les tons rouille. Le résultat est une pièce à la fois masculine et raffinée, qui vieillit très bien.</p>
          <p className="text-gray-600 leading-relaxed mb-4">À Paris, où les appartements haussmanniens côtoient d&apos;anciens ateliers d&apos;artistes, le style industriel s&apos;intègre naturellement. Il valorise les volumes bruts, les hauteurs sous plafond et les détails architecturaux existants plutôt que de les masquer. Les artisans d&apos;Espace Design maîtrisent parfaitement cette esthétique exigeante et savent l&apos;adapter à chaque configuration.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Les éléments clés d&apos;une salle de bain industrielle réussie</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Carrelage imitation béton grand format (60x60 ou 80x80)',
              'Robinetterie noire mat ou en laiton vieilli',
              'Tuyaux apparents en cuivre ou acier noir',
              'Vasque à poser en béton ciré ou en fonte',
              'Miroir à cadre métallique et éclairage industriel',
              'Meubles en métal brut ou bois vieilli',
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
                  ['Rénovation salle de bain industrielle complète (12 m²)', '8 000 € – 18 000 €'],
                  ['Carrelage béton ou imitation béton (pose incluse)', '60 € – 90 €/m²'],
                  ['Robinetterie style industriel (noire mat ou laiton)', '200 € – 600 €/unité'],
                  ['Vasque en béton ciré ou fonte à poser', '350 € – 900 €'],
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
