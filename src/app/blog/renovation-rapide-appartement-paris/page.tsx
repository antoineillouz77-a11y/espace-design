import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation rapide appartement Paris', item: 'https://espacedesignparis.fr/blog/renovation-rapide-appartement-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation rapide appartement Paris : délais réalistes et chantiers express",
  description: "Rénovation rapide à Paris : découvrez les délais réalistes par type de travaux — peinture, parquet, salle de bain express. Planning chantier week-end inclus.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-rapide-appartement-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le délai minimum pour une rénovation complète à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pour une rénovation complète d\'un appartement parisien (de 40 à 80 m²), il faut compter au minimum 4 à 8 semaines de travaux. Ce délai intègre la démolition, les travaux de second oeuvre (électricité, plomberie, cloisons) et les finitions. En dessous de ce délai, la qualité est compromise. Un chantier "express" bien organisé avec plusieurs corps de métier en parallèle peut viser 3 semaines pour un studio.',
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on faire une rénovation le week-end à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Techniquement oui, mais attention : le règlement de copropriété et le code de la construction interdisent souvent les travaux bruyants le samedi après 12h et le dimanche toute la journée. Les travaux légers (peinture, pose de parquet flottant) peuvent être réalisés le week-end sans nuisances sonores majeures. Pour tous travaux nécessitant perçage ou démolition, il faut se limiter aux jours ouvrés en semaine.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment établir un planning chantier express efficace ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un planning express efficace repose sur la coordination simultanée des corps de métier : pendant que l\'électricien pose les gaines, le plombier peut intervenir sur une autre zone. Ensuite viennent les cloisons, l\'isolation, les revêtements puis la peinture. Un conducteur de travaux expérimenté peut réduire la durée totale de 20 à 30 % par rapport à des intervenants travaillant en séquence.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation rapide appartement Paris — Délais et planning express | Espace Design',
  description: 'Rénovation rapide à Paris : découvrez les délais réalistes par type de travaux — peinture, parquet, salle de bain express. Planning chantier week-end inclus.',
}

export default function RenovationRapideAppartementParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation rapide appartement Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Peinture en 1 jour, parquet en 2 jours, salle de bain en une semaine : les vrais délais des chantiers express à Paris et comment optimiser votre planning.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Les travaux réalisables rapidement à Paris</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Tous les types de travaux ne nécessitent pas la même durée de chantier. Un rafraîchissement peinture d&apos;un appartement de 50 m² peut se faire en 1 à 2 jours avec une équipe de deux peintres professionnels. La pose d&apos;un parquet flottant dans un salon de 25 m² prend généralement 2 à 3 jours en incluant la préparation du sol. Ces travaux dits "de finitions" sont ceux qui offrent le meilleur ratio rapidité/impact visuel.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Pour une rénovation de salle de bain complète (remplacement de la baignoire, carrelage, sanitaires, robinetterie), comptez 5 à 7 jours ouvrés avec un artisan expérimenté. Une cuisine légère — remplacement des façades, plan de travail et crédence sans toucher à la plomberie — se réalise en 3 à 5 jours. Ces délais s&apos;entendent pour des chantiers bien préparés : matériaux commandés à l&apos;avance, accès au logement garanti et décisions de finitions arrêtées avant le début des travaux.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Délais types selon le type de travaux</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Peinture rafraîchissement : 1 à 2 jours pour un appartement 50 m²',
              'Pose parquet flottant : 2 à 3 jours pour un salon de 25 m²',
              'Salle de bain express complète : 5 à 7 jours ouvrés',
              'Rénovation cuisine légère (façades + plan de travail) : 3 à 5 jours',
              'Rénovation complète studio 30 m² : 3 semaines minimum',
              'Appartement 80 m² intégral : 6 à 10 semaines selon l\'état initial',
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
