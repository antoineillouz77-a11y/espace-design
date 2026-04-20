import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Débarras appartement Paris', item: 'https://espacedesignparis.fr/blog/debarras-appartement-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Débarras d'appartement avant rénovation à Paris : tarifs et conseils",
  description: "Vidage et débarras d'appartement avant rénovation à Paris : encombrants, tri sélectif, bennes. Studio dès 400 €. Devis gratuit sous 48h.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/debarras-appartement-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'un débarras d\'appartement à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Un débarras de studio coûte entre 400 et 800 €, un T2 entre 600 et 1 200 €, un T3 entre 900 et 1 800 €. Le prix dépend du volume d\'encombrants, de l\'accès (étage, ascenseur) et des délais d\'intervention.' },
    },
    {
      '@type': 'Question',
      name: 'Faut-il vider l\'appartement avant de commencer les travaux ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, un appartement vide permet aux artisans de travailler librement, d\'éviter les dommages sur les meubles et d\'accéder à tous les murs et sols. Le débarras est souvent la première étape d\'une rénovation bien organisée.' },
    },
    {
      '@type': 'Question',
      name: 'Que devient le mobilier lors d\'un débarras ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Nous effectuons un tri sélectif : les objets en bon état sont orientés vers des associations ou la revente, les encombrants sont acheminés en déchetterie agréée, et les matières recyclables (bois, métal, carton) sont séparées. Nous respectons les règles de valorisation des déchets.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Débarras Appartement Paris Avant Rénovation — Espace Design',
  description: 'Débarras professionnel d\'appartement à Paris avant rénovation : encombrants, tri sélectif, bennes. Studio dès 400 €. Devis gratuit sous 48h.',
}

export default function DebarrasAppartementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Débarras d&apos;appartement avant rénovation à Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Vidage complet, tri sélectif, evacuation des encombrants et bennes : nous préparons votre appartement pour que les travaux démarrent dans les meilleures conditions.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Le débarras, première étape de votre rénovation</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Avant d&apos;entamer des travaux de rénovation à Paris, vider l&apos;appartement est une étape indispensable. Meubles encombrants, vieux équipements, déchets de chantier préexistants : tout doit être évacué pour permettre aux artisans de travailler dans de bonnes conditions et d&apos;accéder à l&apos;ensemble des surfaces.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Notre équipe prend en charge le débarras complet de votre bien parisien, en appartement ou en cave. Nous assurons le portage jusqu&apos;au camion (même en étages sans ascenseur), le tri sélectif des matières, l&apos;orientation vers des associations pour les objets réutilisables et l&apos;évacuation en déchetterie agréée.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Ce que comprend notre débarras</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Vidage complet meubles et encombrants',
              'Portage en étages sans ascenseur',
              'Tri sélectif (bois, métal, carton)',
              'Don à associations pour objets réutilisables',
              'Évacuation déchetterie agréée',
              'Débarras cave et dépendances',
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
                  ['Débarras studio (jusqu\'à 30 m²)', '400 – 800 €'],
                  ['Débarras T2 (30 – 55 m²)', '600 – 1 200 €'],
                  ['Débarras T3 (55 – 80 m²)', '900 – 1 800 €'],
                  ['Débarras cave ou dépendance', '200 – 500 €'],
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
