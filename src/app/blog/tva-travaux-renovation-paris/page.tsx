import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'TVA travaux rénovation Paris', item: 'https://espacedesignparis.fr/blog/tva-travaux-renovation-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "TVA à 10 % sur les travaux de rénovation à Paris : conditions et attestation",
  description: "Tout comprendre sur la TVA réduite à 10 % pour les travaux de rénovation à Paris : conditions d'éligibilité, différence avec le taux à 5,5 %, attestation propriétaire H1 obligatoire.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/tva-travaux-renovation-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Dans quels cas la TVA est-elle à 10 % pour des travaux à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La TVA réduite à 10 % s\'applique aux travaux d\'amélioration, de transformation, d\'aménagement et d\'entretien des logements achevés depuis plus de 2 ans, qu\'ils soient résidences principales ou secondaires. Sont concernés : peinture, revêtements de sol, plomberie, électricité, isolation, ravalement, etc. Le logement doit être à usage d\'habitation. L\'artisan applique ce taux sur présentation de l\'attestation signée par le propriétaire ou le locataire.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle est la différence entre la TVA à 10 % et la TVA à 5,5 % ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La TVA à 5,5 % s\'applique spécifiquement aux travaux de rénovation énergétique : isolation thermique, installation de chaudières à condensation ou de pompes à chaleur, double vitrage, etc. Elle concerne des travaux qui améliorent la performance énergétique du logement. La TVA à 10 % couvre un spectre plus large (tous travaux de rénovation sur logement de plus de 2 ans). Les deux taux ne peuvent pas se combiner sur un même poste de travaux.',
      },
    },
    {
      '@type': 'Question',
      name: 'L\'attestation propriétaire H1 est-elle obligatoire pour la TVA à 10 % ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, l\'attestation (formulaire Cerfa 13947) est obligatoire. Le client (propriétaire ou locataire) la remet signée à l\'artisan avant le début des travaux. Elle certifie que le logement est achevé depuis plus de 2 ans et qu\'il est à usage d\'habitation. Sans ce document, l\'artisan est tenu d\'appliquer la TVA à 20 %. En cas de fausse déclaration, c\'est le client qui est responsable des rappels fiscaux.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'TVA 10 % travaux rénovation Paris — Conditions et attestation | Espace Design',
  description: "Tout comprendre sur la TVA réduite à 10 % pour les travaux de rénovation à Paris : conditions d'éligibilité, différence avec le taux à 5,5 %, attestation propriétaire H1 obligatoire.",
}

export default function TvaTravauxRenovationParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">TVA à 10 % sur les travaux de rénovation à Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Conditions d&apos;application, différence avec le taux à 5,5 %, attestation propriétaire : tout ce qu&apos;il faut savoir pour bénéficier de la TVA réduite sur vos travaux parisiens.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Quand la TVA à 10 % s&apos;applique-t-elle à Paris ?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            La TVA réduite à 10 % est l&apos;un des avantages fiscaux les plus concrets pour les propriétaires parisiens qui font rénover leur logement. Elle s&apos;applique à tous les travaux d&apos;amélioration, de transformation, d&apos;aménagement et d&apos;entretien réalisés dans des locaux à usage d&apos;habitation achevés depuis au moins 2 ans. Cela couvre un spectre très large : peinture, parquet, carrelage, électricité, plomberie, isolation, menuiseries, ravalement de façade, etc. À Paris, où les chantiers sont souvent importants, cette réduction de TVA représente une économie significative par rapport au taux normal de 20 %.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            En revanche, les constructions neuves et les travaux assimilés à une reconstruction sont soumis au taux de 20 %. C&apos;est pourquoi la nature exacte des travaux doit être précisée dans le devis : un artisan appliquant la TVA à 10 % sur des travaux qui n&apos;y sont pas éligibles s&apos;expose à un redressement fiscal. Pour les travaux de rénovation énergétique spécifiques (isolation, pompe à chaleur, chaudière à condensation), le taux peut descendre à 5,5 % sous certaines conditions.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Les conditions et démarches pour la TVA à 10 %</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Logement de plus de 2 ans : condition principale d\'éligibilité à la TVA 10 %',
              'TVA à 20 % si construction neuve ou travaux assimilés à une reconstruction',
              'Attestation Cerfa 13947 signée par le client remise à l\'artisan avant travaux',
              'TVA à 5,5 % pour les travaux de rénovation énergétique éligibles',
              'Logement à usage d\'habitation uniquement (résidence principale ou secondaire)',
              'Responsabilité du client en cas de fausse déclaration sur l\'attestation',
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
