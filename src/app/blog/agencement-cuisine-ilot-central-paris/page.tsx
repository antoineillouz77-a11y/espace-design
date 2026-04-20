import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Cuisine avec îlot central Paris', item: 'https://espacedesignparis.fr/blog/agencement-cuisine-ilot-central-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Cuisine avec îlot central à Paris — Conception, matériaux et prix 2025",
  description: "Tout savoir sur l'agencement d'une cuisine avec îlot central à Paris : dimensions idéales, matériaux, plomberie, prix. Devis gratuit.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/agencement-cuisine-ilot-central-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quelle surface minimum pour installer un îlot central dans une cuisine parisienne ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Il faut prévoir au minimum 12 à 15 m² de cuisine pour intégrer un îlot central confortable. L\'îlot lui-même mesure généralement 90 × 120 cm minimum, avec 90 cm de dégagement tout autour pour circuler librement.' },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte un îlot central avec plomberie à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Un îlot central avec évier et plomberie intégrée coûte entre 3 000 et 7 000 € à Paris, pose comprise. Pour un îlot entièrement sur mesure avec plan de travail en marbre ou granit, comptez 5 000 à 12 000 €.' },
    },
    {
      '@type': 'Question',
      name: 'Peut-on intégrer une plaque de cuisson dans l\'îlot central ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, l\'intégration d\'une plaque de cuisson dans l\'îlot central est possible mais nécessite une hotte centrale (îlot suspendu). Prévoyez un budget supplémentaire de 800 à 2 500 € pour la hotte seule, hors installation électrique.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Cuisine avec îlot central Paris — Conception & Prix 2025 | Espace Design',
  description: 'Agencement cuisine avec îlot central à Paris : dimensions, matériaux, plomberie intégrée. Prix de 1 500 à 12 000 €. Devis gratuit sous 48h.',
}

export default function AgencementCuisineIlotCentralParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Cuisine avec îlot central à Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Conception, dimensions, matériaux et plomberie : tout ce qu&apos;il faut savoir pour créer la cuisine ouverte idéale dans votre appartement parisien.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Pourquoi opter pour un îlot central dans une cuisine parisienne ?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">L&apos;îlot central est devenu le symbole de la cuisine ouverte moderne. À Paris, où les espaces sont souvent contraints, il joue un rôle double : surface de travail supplémentaire et séparation visuelle entre cuisine et séjour. Bien conçu, il transforme radicalement la fluidité de votre appartement tout en ajoutant une valeur patrimoniale significative.</p>
          <p className="text-gray-600 leading-relaxed mb-4">La réussite d&apos;un îlot central dépend avant tout des dimensions de la pièce, de l&apos;emplacement des arrivées d&apos;eau (si évier intégré) et du choix des matériaux. Nos équipes réalisent une étude de faisabilité complète avant chaque projet pour garantir un résultat fonctionnel et esthétique.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Ce que comprend notre prestation îlot central</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Conception 3D et plan d\'implantation',
              'Fabrication sur mesure ou kit',
              'Plan de travail : bois, marbre, quartz',
              'Intégration plomberie (évier, lave-verre)',
              'Intégration plaque de cuisson',
              'Éclairage sous îlot et hotte centrale',
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
                  ['Îlot central simple (meuble + plan)', '1 500 – 4 000 €'],
                  ['Îlot avec plomberie intégrée', '3 000 – 7 000 €'],
                  ['Îlot sur mesure (marbre / quartz)', '5 000 – 12 000 €'],
                  ['Hotte centrale suspendue (pose incluse)', '800 – 2 500 €'],
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
