import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Porte coulissante Paris', item: 'https://espacedesignparis.fr/blog/porte-coulissante-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Porte coulissante et galandage à Paris — Installation & Tarifs 2025",
  description: "Installation de portes coulissantes et galandage à Paris. Rail en saillie ou intégré dans le mur, portes vitrées ou bois. Devis gratuit, artisan qualifié.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/porte-coulissante-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une porte coulissante à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le prix d\'une porte coulissante à Paris varie entre 400 et 1 200 € (fourniture et pose) selon le type de rail (saillie ou galandage), le matériau du vantail (bois, verre, laqué) et la largeur de la baie. Le galandage (rail encastré dans le mur) est plus coûteux mais offre un rendu plus épuré.',
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on installer un galandage dans un mur porteur ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Il est possible d\'intégrer un galandage dans un mur porteur, mais cela nécessite une étude structurelle préalable et la création d\'un linteau adapté. Cette opération est réalisée par nos artisans qualifiés et peut représenter un surcoût de 500 à 1 500 € selon la configuration.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quel est le délai d\'installation d\'une porte coulissante ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Une porte coulissante sur rail en saillie s\'installe en une demi-journée à une journée. Un galandage intégré dans le mur nécessite 1 à 2 jours de travaux (maçonnerie, pose du caisson, finition plâtre, pose du vantail). Le délai global avec finitions est de 1 à 2 semaines.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Porte Coulissante Paris — Galandage & Installation | Espace Design',
  description: 'Installation de portes coulissantes et galandage à Paris. Rail saillie ou encastré, portes vitrées, finitions bois. Artisan qualifié, devis gratuit sous 48h.',
}

export default function PorteCoulissanteParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Porte coulissante à Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Installation de portes coulissantes et galandage à Paris. Gagnez de la place, améliorez la fluidité de votre intérieur avec des solutions sur mesure et des finitions premium.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">La porte coulissante : solution idéale pour les petits espaces parisiens</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Dans les appartements parisiens, la porte battante classique peut bloquer jusqu'à 0,7 m² de surface utilisable. La porte coulissante résout ce problème élégamment, que ce soit avec un rail en saillie (rapide à poser, réversible) ou un système galandage intégré dans le mur (rendu invisible, très haut de gamme). Nos artisans maîtrisent les deux techniques et vous conseillent selon la configuration de vos cloisons.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Pour le galandage, nous réalisons l'intégralité des travaux : ouverture du mur, pose du caisson métallique, finition plâtre et peinture, puis installation du vantail et du mécanisme. Résultat : une porte qui disparaît dans le mur et un espace gagné de façon permanente.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Nos solutions portes coulissantes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Gain de place immédiat (0,5 à 0,8 m² récupérés)',
              'Rail en saillie : pose rapide, sans travaux lourds',
              'Galandage encastré : rendu épuré et discret',
              'Portes vitrées (verre sécurit, dépoli, miroir)',
              'Finitions bois naturel, laqué mat ou stratifié',
              'Mécanismes silencieux à fermeture amortie',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Prix porte coulissante Paris 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1C1C1C] text-white"><th className="p-3 text-left">Prestation</th><th className="p-3 text-right">Tarif indicatif</th></tr></thead>
              <tbody>
                {[
                  ['Porte coulissante rail saillie (fourniture + pose)', '400 – 700 €'],
                  ['Porte coulissante vitrée rail saillie', '600 – 950 €'],
                  ['Galandage dans cloison légère (placo)', '700 – 1 100 €'],
                  ['Galandage dans mur porteur (avec linteau)', '1 200 – 2 500 €'],
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
              { href: '/blog/prix-renovation-appartement-paris', label: 'Prix rénovation Paris' },
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
