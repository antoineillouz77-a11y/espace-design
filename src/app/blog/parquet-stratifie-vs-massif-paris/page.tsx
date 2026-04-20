import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Parquet stratifié vs massif Paris', item: 'https://espacedesignparis.fr/blog/parquet-stratifie-vs-massif-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Parquet stratifié vs parquet massif à Paris : lequel choisir en 2025 ?",
  description: "Comparatif complet parquet stratifié vs parquet massif à Paris : durabilité, entretien, prix de pose, avantages et inconvénients. Guide 2025 par Espace Design.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/parquet-stratifie-vs-massif-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quelle est la différence de prix entre parquet stratifié et parquet massif ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Le parquet stratifié coûte entre 25 et 60 €/m² fourni, contre 60 à 150 €/m² pour le parquet massif. La pose revient entre 25 et 45 €/m² dans les deux cas. Au total, un sol en parquet massif est 2 à 3 fois plus cher qu\'un stratifié.' },
    },
    {
      '@type': 'Question',
      name: 'Le parquet massif peut-il être posé dans un appartement parisien ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, le parquet massif est particulièrement adapté aux appartements haussmanniens parisiens. Il peut être poncé et vitrifié plusieurs fois sur 50 à 100 ans, ce qui en fait un investissement durable pour la valeur du bien.' },
    },
    {
      '@type': 'Question',
      name: 'Le parquet stratifié est-il adapté à une location à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Le parquet stratifié est une solution économique idéale pour les biens locatifs. Il résiste bien aux passages fréquents, est facile à remplacer et son coût d\'installation réduit maximise la rentabilité locative.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Parquet stratifié vs massif Paris — Quel choix en 2025 ? | Espace Design',
  description: "Comparatif complet parquet stratifié vs parquet massif à Paris : durabilité, entretien, prix de pose, avantages et inconvénients. Guide 2025 par Espace Design.",
}

export default function ParquetStratifieMassifPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Parquet stratifié vs parquet massif à Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Durabilité, entretien, budget, esthétique : tout ce qu'il faut savoir pour choisir votre parquet en Île-de-France en 2025.</p>
      </section>
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Stratifié ou massif : les différences essentielles</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Le parquet stratifié est composé d'un panneau HDF recouvert d'une couche décorative imitant le bois naturel, protégée par un vernis résistant. Son prix attractif (25 à 60 €/m²) et sa facilité de pose clipsée en font le choix privilégié pour les rénovations légères et les biens locatifs. Il ne peut cependant pas être poncé et doit être remplacé après 15 à 20 ans d'usure.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Le parquet massif, entièrement en bois plein (chêne, hêtre, noyer), offre une durée de vie incomparable : ponçable et revitrifié plusieurs fois, il peut traverser plusieurs générations. Son coût plus élevé (60 à 150 €/m²) est justifié par cette longévité et par la valeur qu'il apporte à un bien immobilier parisien, notamment dans les appartements haussmanniens.</p>
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Avantages de chaque solution</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Stratifié : prix d\'achat 2 à 3 fois moins cher',
              'Stratifié : pose rapide et sans colle',
              'Massif : ponçable et reconditionnable',
              'Massif : valeur ajoutée au bien immobilier',
              'Massif : aspect authentique sur 80 ans et plus',
              'Stratifié : idéal pour investissement locatif',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
          </div>
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Tarifs 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="p-3 text-left">Prestation</th>
                  <th className="p-3 text-right">Prix</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Parquet stratifié fourni', '25 – 60 €/m²'],
                  ['Parquet massif fourni', '60 – 150 €/m²'],
                  ['Pose parquet (stratifié ou massif)', '25 – 45 €/m²'],
                  ['Ponçage + vitrification parquet massif', '20 – 35 €/m²'],
                ].map(([l, p]) => (
                  <tr key={l} className="border-b border-gray-100">
                    <td className="p-3 text-gray-600">{l}</td>
                    <td className="p-3 text-right font-medium">{p}</td>
                  </tr>
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
