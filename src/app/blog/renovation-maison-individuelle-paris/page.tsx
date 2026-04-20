import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation maison individuelle Paris', item: 'https://espacedesignparis.fr/blog/renovation-maison-individuelle-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation maison individuelle à Paris et Île-de-France — Guide 2025",
  description: "Rénover une maison individuelle à Paris et en IDF : façade, toiture, cave, intérieur. Spécificités, étapes et prix par Espace Design. Devis gratuit sous 48h.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-maison-individuelle-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le budget pour rénover une maison de 100 m² à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'La rénovation complète d\'une maison de 100 m² à Paris ou en Île-de-France représente un budget compris entre 100 000 et 200 000 €. Une rénovation partielle (sans toucher à la structure ni à la façade) se situe entre 30 000 et 80 000 €.' },
    },
    {
      '@type': 'Question',
      name: 'Quelles sont les spécificités d\'une rénovation de maison par rapport à un appartement ?',
      acceptedAnswer: { '@type': 'Answer', text: 'La rénovation d\'une maison individuelle inclut des postes absents en appartement : façade, toiture, zinguerie, cave, vide sanitaire, jardin et accès. Elle nécessite souvent une coordination entre corps de métier plus importante et peut requérir un permis de construire pour les extensions ou modifications de façade.' },
    },
    {
      '@type': 'Question',
      name: 'Faut-il un permis de construire pour rénover sa maison en IDF ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Un permis de construire est requis pour toute extension de surface de plancher ou d\'emprise au sol dépassant 20 m² (ou 40 m² en zone U avec PLU). Les modifications de façade ou de toiture nécessitent au minimum une déclaration préalable. Espace Design vous guide dans les démarches administratives.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation maison individuelle Paris et IDF — Espace Design',
  description: 'Rénover une maison individuelle à Paris et en IDF : façade, toiture, cave, intérieur. Spécificités, étapes et prix par Espace Design. Devis gratuit sous 48h.',
}

export default function RenovationMaisonIndividuelleParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation maison individuelle à Paris et IDF</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Façade, toiture, cave, intérieur complet : rénover une maison individuelle est un projet global qui demande une coordination rigoureuse. Espace Design prend tout en charge.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Maison individuelle : une rénovation à part entière</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Contrairement à un appartement en copropriété, la maison individuelle donne au propriétaire la pleine maîtrise de son projet : façade, toiture, extension, aménagement des combles ou de la cave. Cette liberté s'accompagne d'une plus grande responsabilité dans la coordination des travaux et le respect des règles d'urbanisme locales.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Espace Design accompagne les propriétaires parisiens et franciliens pour des rénovations de maisons individuelles de toutes ampleurs. Nous intervenons aussi bien sur les corps de métier intérieurs (peinture, carrelage, électricité, plomberie) que sur le clos-couvert (toiture, façade, menuiseries).</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Ce que comprend une rénovation de maison</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Façade et ravalement',
              'Toiture et zinguerie',
              'Isolation combles et murs',
              'Aménagement cave et sous-sol',
              'Rénovation intérieure complète',
              'Extension et surélévation',
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
                  ['Rénovation complète maison 100 m²', '100 000 – 200 000 €'],
                  ['Rénovation partielle', '30 000 – 80 000 €'],
                  ['Ravalement de façade', '60 – 120 €/m²'],
                  ['Toiture (couverture)', '80 – 200 €/m²'],
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
