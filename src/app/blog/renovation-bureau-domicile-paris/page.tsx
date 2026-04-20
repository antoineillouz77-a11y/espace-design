import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Bureau à domicile Paris', item: 'https://espacedesignparis.fr/blog/renovation-bureau-domicile-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Aménager un bureau à domicile à Paris : cloison, acoustique et éclairage",
  description: "Créez un bureau professionnel chez vous à Paris : cloison modulable, éclairage de travail, prises intégrées, traitement acoustique. Devis gratuit.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-bureau-domicile-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel budget pour aménager un bureau à domicile à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Un bureau basique (peinture, bureau sur mesure, éclairage) coûte entre 1 500 et 3 000 €. Avec une cloison de séparation, le budget passe à 3 000-6 000 €. Un bureau premium avec traitement acoustique et domotique atteint 6 000 à 12 000 €.' },
    },
    {
      '@type': 'Question',
      name: 'Faut-il un permis pour poser une cloison dans un appartement ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Non, les cloisons non porteuses ne nécessitent pas de permis de construire. Une déclaration préalable peut être requise dans certaines copropriétés. Nos artisans vérifient le règlement de copropriété avant de commencer.' },
    },
    {
      '@type': 'Question',
      name: 'Comment améliorer l\'acoustique de mon bureau à domicile ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Plusieurs solutions existent : panneaux absorbants au mur, moquette ou parquet épais, cloison double plaque avec laine de roche, faux plafond désolidarisé. Le budget acoustique varie entre 500 et 3 000 € selon le niveau de traitement souhaité.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Bureau à Domicile Paris — Aménagement & Cloison — Espace Design',
  description: 'Aménagez votre bureau à domicile à Paris : cloison, éclairage de travail, prises RJ45, acoustique. Artisan qualifié, devis gratuit sous 48h.',
}

export default function BureauDomicilePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Aménager un bureau à domicile à Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Cloison acoustique, éclairage de travail, prises intégrées : créez un espace professionnel efficace dans votre appartement parisien.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Le bureau à domicile, un investissement durable</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Le télétravail s&apos;est installé durablement dans les habitudes parisiennes. Avoir un bureau séparé du reste de l&apos;appartement améliore la concentration, réduit les distractions et professionnalise vos visioconférences. À Paris, où les mètres carrés sont précieux, l&apos;aménagement intelligent est la clé.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Nos équipes interviennent pour poser des cloisons légères ou en placo, installer un éclairage de travail adapté (lumière froide 4000K, éclairage indirect), multiplier les prises électriques et RJ45, et traiter l&apos;acoustique pour des appels sans écho. Chaque projet est étudié en fonction de la configuration de votre logement.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Ce que nous réalisons</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Cloison placo ou vitrée sur mesure',
              'Éclairage de travail 4000K anti-reflets',
              'Prises électriques et RJ45 encastrées',
              'Traitement acoustique (panneaux, laine)',
              'Bureau et rangements sur mesure',
              'Peinture et finitions haut de gamme',
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
                  ['Bureau basique (peinture, éclairage, bureau)', '1 500 – 3 000 €'],
                  ['Bureau avec cloison de séparation', '3 000 – 6 000 €'],
                  ['Bureau premium (acoustique, domotique)', '6 000 – 12 000 €'],
                  ['Traitement acoustique seul', '500 – 3 000 €'],
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
