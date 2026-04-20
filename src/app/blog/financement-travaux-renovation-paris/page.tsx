import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Financement travaux rénovation Paris', item: 'https://espacedesignparis.fr/blog/financement-travaux-renovation-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Financer sa rénovation à Paris : prêts travaux, MaPrimeRénov et aides 2025",
  description: "Tour d'horizon complet des solutions de financement pour vos travaux de rénovation à Paris : prêt bancaire, PTZ, MaPrimeRénov', Anah, CEE et cumul des aides.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/financement-travaux-renovation-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Comment obtenir un prêt travaux pour une rénovation à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pour obtenir un prêt travaux, présentez à votre banque les devis signés des artisans, les justificatifs de revenus et le titre de propriété ou bail. Le montant empruntable varie généralement de 1 500 à 75 000 € selon les établissements, avec des taux entre 4 et 8 % en 2025. Comparez les offres via un courtier ou des comparateurs en ligne. Certaines banques proposent des prêts travaux verts à taux réduit pour les rénovations énergétiques.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quel est le montant de MaPrimeRénov\' en 2025 ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MaPrimeRénov\' est modulée selon les revenus du foyer. En 2025, les ménages aux revenus très modestes peuvent obtenir jusqu\'à 90 % des dépenses éligibles plafonnées. Les ménages modestes bénéficient de 75 %, les revenus intermédiaires de 60 % et les hauts revenus de 40 %. Les montants maximaux varient selon les travaux : isolation des combles (75 €/m²), pompe à chaleur (4 000 à 10 000 €), etc.',
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on cumuler plusieurs aides pour financer sa rénovation ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, le cumul est possible et même conseillé. MaPrimeRénov\' se cumule avec les CEE (Certificats d\'Economies d\'Energie), avec les aides de l\'Anah pour les ménages modestes, et avec certaines aides locales de la ville de Paris ou de l\'Île-de-France. En revanche, MaPrimeRénov\' et l\'éco-PTZ ne se cumulent pas systématiquement selon les conditions de ressources. Un conseiller France Rénov\' peut vous guider gratuitement.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Financement travaux rénovation Paris — Prêts, MaPrimeRénov et aides 2025 | Espace Design',
  description: "Tour d'horizon complet des solutions de financement pour vos travaux de rénovation à Paris : prêt bancaire, PTZ, MaPrimeRénov', Anah, CEE et cumul des aides.",
}

export default function FinancementTravauxRenovationParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Financer sa rénovation à Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Prêt travaux, MaPrimeRénov&apos;, Anah, CEE : toutes les solutions pour financer votre rénovation parisienne et cumuler les aides disponibles en 2025.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Les principaux dispositifs de financement pour votre rénovation</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Financer une rénovation à Paris peut sembler complexe face à la multiplicité des dispositifs existants. Le prêt travaux classique proposé par les banques reste la solution la plus accessible : sans hypothèque pour les montants inférieurs à 75 000 €, il s&apos;obtient rapidement sur présentation des devis. En 2025, les taux oscillent entre 4 et 8 % selon la durée et le profil emprunteur. Pour une rénovation énergétique, l&apos;éco-PTZ (Prêt à Taux Zéro) permet d&apos;emprunter jusqu&apos;à 50 000 € sans intérêts auprès des banques partenaires.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Les aides publiques constituent un levier majeur pour réduire le reste à charge. MaPrimeRénov&apos; est accessible à tous les propriétaires occupants et bailleurs, avec des montants progressifs selon les revenus. Les Certificats d&apos;Economies d&apos;Energie (CEE), proposés par les fournisseurs d&apos;énergie, viennent en complément. L&apos;Anah accompagne spécifiquement les ménages modestes avec des subventions pouvant atteindre 50 % des travaux. À Paris, des aides complémentaires de la Ville et de la Région Île-de-France peuvent s&apos;y ajouter.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Les aides et dispositifs à connaître en 2025</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Prêt travaux bancaire : jusqu\'à 75 000 € sans hypothèque, taux 4-8 %',
              'Éco-PTZ : jusqu\'à 50 000 € sans intérêts pour rénovation énergétique',
              'MaPrimeRénov\' : jusqu\'à 90 % des dépenses selon les revenus du foyer',
              'Anah : subventions jusqu\'à 50 % pour les ménages aux revenus modestes',
              'CEE : primes versées par les fournisseurs d\'énergie, cumulables avec MaPR',
              'Aides Ville de Paris et Région IDF : vérifier l\'éligibilité sur paris.fr',
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
