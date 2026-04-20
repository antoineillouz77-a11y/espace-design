import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Cuisine en bois à Paris', item: 'https://espacedesignparis.fr/blog/cuisine-bois-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Cuisine en bois à Paris : massif, plaqué ou mixte bois et blanc",
  description: "Cuisine bois massif ou plaqué à Paris : ambiance chaleureuse, durabilité et entretien. Comparatif des options et tarifs 2025 pour votre projet.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/cuisine-bois-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Bois massif ou plaqué bois pour une cuisine : quelle différence ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Le bois massif (chêne, hêtre, noyer) est plus robuste et se rénove facilement par ponçage et huilage. Il coûte plus cher mais dure des décennies. Le plaqué bois (feuille de bois naturel collée sur panneau) offre un rendu très proche à moindre coût, mais ne supporte pas bien l\'humidité prolongée et ne peut pas être reponcé. Pour une cuisine fréquemment utilisée, le bois massif ou le stratifié bois haute pression sont préférables.' },
    },
    {
      '@type': 'Question',
      name: 'Comment entretenir une cuisine en bois ?',
      acceptedAnswer: { '@type': 'Answer', text: 'L\'entretien d\'une cuisine bois dépend du traitement de surface. Un bois huilé doit être réhuilé tous les 1 à 2 ans et essuyé rapidement en cas de projections. Un bois verni résiste mieux à l\'humidité mais se raye plus facilement. Évitez les nettoyants abrasifs et les éponges grattantes. Un entretien régulier à l\'huile de lin protège le bois et ravive ses teintes.' },
    },
    {
      '@type': 'Question',
      name: 'Peut-on mélanger bois et blanc dans une cuisine à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'La combinaison bois et blanc est l\'une des plus populaires dans les cuisines parisiennes. Elle associe la chaleur du bois à la luminosité du blanc pour un résultat équilibré et intemporel. Typiquement : meubles du bas en bois, meubles du haut en blanc laqué. Cette association convient aussi bien aux petits appartements qu\'aux grandes cuisines ouvertes.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Cuisine Bois Paris — Massif, Plaqué, Bois et Blanc 2025 | Espace Design',
  description: 'Cuisine en bois à Paris : massif ou plaqué, chêne, noyer, bois et blanc. Chaleur, durabilité et tarifs 2025. Devis gratuit sous 48h.',
}

export default function CuisineBoisParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Cuisine en bois à Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Le bois reste la matière la plus chaleureuse et intemporelle pour une cuisine. Massif, plaqué ou combiné au blanc, il s&apos;adapte à tous les styles et tous les budgets parisiens.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Pourquoi choisir une cuisine en bois à Paris ?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Le bois est un matériau vivant qui apporte immédiatement chaleur et caractère à une pièce. Dans les cuisines parisiennes, souvent lumineuses grâce aux grandes fenêtres haussmanniennes, il crée une atmosphère conviviale qui tranche agréablement avec la modernité des équipements. Chêne naturel, noyer fumé, pin vieilli ou hêtre clair : chaque essence délivre une ambiance différente.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Contrairement aux idées reçues, le bois dans une cuisine n&apos;est pas fragile si on choisit le bon traitement. Un chêne massif huilé ou un meuble en bois avec facade stratifiée haute pression résiste parfaitement aux projections, à la vapeur et aux chocs du quotidien. Les artisans d&apos;Espace Design conseillent et installent des cuisines bois adaptées aux usages réels de leurs clients.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Les options bois pour votre cuisine parisienne</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Bois massif (chêne, noyer, hêtre) : robuste et réparable',
              'Plaqué bois naturel : rendu authentique à prix maîtrisé',
              'Stratifié décor bois : résistant aux chocs et à l\'humidité',
              'Combinaison bois et blanc laqué : classique et lumineux',
              'Bois teinté (gris, noir, naturel) pour personnaliser',
              'Plan de travail bois massif ou HPL imitation bois',
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
                  ['Cuisine bois massif complète (pose + équipement, hors électroménager)', '15 000 € – 30 000 €'],
                  ['Cuisine plaqué bois ou stratifié bois complète', '8 000 € – 18 000 €'],
                  ['Cuisine combinaison bois + blanc laqué', '10 000 € – 22 000 €'],
                  ['Plan de travail bois massif (fourni et posé)', '250 € – 600 €/m²'],
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
