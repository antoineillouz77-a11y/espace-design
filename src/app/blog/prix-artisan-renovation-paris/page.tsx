import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Prix artisan rénovation Paris', item: 'https://espacedesignparis.fr/blog/prix-artisan-renovation-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Prix artisan rénovation Paris : tarifs 2025 et grille des coûts",
  description: "Découvrez les tarifs réels des artisans de rénovation à Paris en 2025 : prix horaire, devis au m², TVA applicable et conseils pour éviter les arnaques.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/prix-artisan-renovation-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien coûte un artisan à Paris en 2025 ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un artisan qualifié à Paris facture généralement entre 45 et 80 € de l\'heure selon le corps de métier. Un plombier ou électricien se situe plutôt entre 60 et 80 €/h, un peintre entre 40 et 60 €/h. Le taux journalier moyen oscille entre 350 et 600 € hors fournitures.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle est la différence entre un auto-entrepreneur et une société de rénovation ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un auto-entrepreneur a un plafond de chiffre d\'affaires limité (77 700 € en 2025) et peut ne pas disposer d\'une assurance décennale complète. Une société (SARL, SAS) est généralement soumise à des obligations plus strictes : assurance décennale, garantie de parfait achèvement et responsabilité civile professionnelle. Pour des travaux importants, préférez une entreprise assurée.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment éviter les arnaques avec les artisans à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Demandez toujours au moins 3 devis détaillés, vérifiez le numéro SIRET sur societe.com, exigez la copie de l\'assurance décennale et de la RC pro, ne versez jamais plus de 30 % d\'acompte avant le démarrage, et méfiez-vous des prix anormalement bas qui cachent souvent des surcoûts en cours de chantier.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Prix artisan rénovation Paris 2025 — Tarifs et grille des coûts | Espace Design',
  description: 'Découvrez les tarifs réels des artisans de rénovation à Paris en 2025 : prix horaire, devis au m², TVA applicable et conseils pour éviter les arnaques.',
}

export default function PrixArtisanRenovationParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Prix artisan rénovation Paris : tarifs 2025</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Tout ce qu&apos;il faut savoir sur les tarifs des artisans parisiens : prix horaire, devis au m² et comment comparer les offres sans mauvaise surprise.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Comprendre les tarifs horaires des artisans à Paris</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            À Paris, les tarifs des artisans sont naturellement plus élevés qu&apos;en province : loyers des locaux, coûts de stationnement, charges sociales et salaires du personnel qualifié pèsent sur les prix. En 2025, un artisan rénovation facture entre 45 et 80 € de l&apos;heure selon sa spécialité. Un électricien ou un plombier se situe plutôt en haut de cette fourchette (60-80 €/h), un peintre ou un sol tend vers le bas (40-60 €/h).
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Pour des travaux plus importants, les artisans proposent souvent un devis global au m² plutôt qu&apos;un taux horaire. La rénovation complète d&apos;un appartement parisien se négocie généralement entre 800 et 1 500 €/m² TTC selon le niveau de finitions. Ce prix inclut main-d&apos;oeuvre, fournitures et TVA à 10 % (applicable aux logements de plus de 2 ans). N&apos;oubliez pas de distinguer le prix HT du prix TTC dans les devis : certains artisans habituent leurs clients à des prix HT qui paraissent plus attractifs.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Ce qui influence le prix final de votre chantier</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Prix horaire artisan entre 45 et 80 €/h selon le corps de métier',
              'Devis au m² entre 800 et 1 500 € pour une rénovation complète',
              'TVA à 10 % sur les travaux dans un logement de plus de 2 ans',
              'Artisan indépendant souvent moins cher mais garanties limitées',
              'Entreprise multi-corps de métier : coordination incluse, coût optimisé',
              'Garantie décennale obligatoire : vérifiez la validité avant de signer',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Questions fréquentes</h2>
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
              { href: '/blog/devis-renovation-paris', label: 'Devis rénovation' },
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
