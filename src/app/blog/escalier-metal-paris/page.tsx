import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Escalier Métal Paris', item: 'https://espacedesignparis.fr/blog/escalier-metal-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Escalier métal et acier à Paris — limon central, marches bois, garde-corps 2025",
  description: "Fabrication et pose d'escalier métal à Paris : limon central, marches bois, garde-corps acier. Tarifs 2025 et conseils pour votre projet d'escalier design.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/escalier-metal-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'un escalier métal à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Un escalier métal standard (limon central, marches bois, garde-corps simple) coûte entre 4 000 et 8 000 € posé à Paris. Pour un escalier design sur mesure avec garde-corps vitrés ou en acier corten, le budget monte de 8 000 à 15 000 € selon la complexité et les matériaux choisis.' },
    },
    {
      '@type': 'Question',
      name: 'Quels sont les délais pour un escalier métal sur mesure ?',
      acceptedAnswer: { '@type': 'Answer', text: 'De la prise de côtes à la pose, comptez 4 à 8 semaines pour un escalier métal sur mesure à Paris. La fabrication en atelier prend 3 à 5 semaines, suivie d\'une journée ou deux de pose selon la configuration. La peinture ou le traitement de surface ajoute 2 à 3 jours.' },
    },
    {
      '@type': 'Question',
      name: 'Faut-il un permis de construire pour installer un escalier métal à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pour un escalier intérieur de remplacement, aucun permis n\'est nécessaire. En revanche, si l\'escalier nécessite de créer une trémie dans un plancher porteur, une déclaration préalable de travaux peut être requise. Dans une copropriété parisienne, l\'accord de l\'assemblée générale est souvent indispensable.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Escalier Métal Paris — Limon Central, Marches Bois, Garde-Corps | Espace Design',
  description: 'Escalier métal et acier à Paris : limon central, marches bois, garde-corps sur mesure. Artisan qualifié, devis gratuit 48h. Tarifs 2025.',
}

export default function EscalierMetalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Escalier Métal à Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Limon central, marches bois, garde-corps acier — fabrication et pose sur mesure dans Paris et banlieue.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">L&apos;escalier métal : tendance design durable</h2>
          <p className="text-gray-600 leading-relaxed mb-4">L&apos;escalier métal s&apos;est imposé comme la référence des rénovations contemporaines à Paris. Sa légèreté visuelle, sa robustesse et la liberté de design qu&apos;il offre en font le choix privilégié des duplex, lofts et maisons de ville. Associé à des marches en bois massif ou en verre, il crée un dialogue élégant entre les matériaux.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Espace Design conçoit et pose des escaliers métal sur mesure dans tout Paris. Chaque projet commence par une visite technique pour mesurer la trémie, valider la structure porteuse et définir avec vous le design : limon central ou latéral, marches bois ou métal, garde-corps barreaudé, câble ou verre feuilleté.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Options de configuration disponibles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Limon central acier brut ou peint',
              'Marches bois massif (chêne, frêne, pin)',
              'Garde-corps barreaudé vertical ou horizontal',
              'Garde-corps câble inox tendance industrielle',
              'Rampe verre feuilleté sécurit',
              'Finition époxy, thermolaqué ou corten',
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
                  ['Escalier métal standard posé', '4 000 – 8 000 €'],
                  ['Escalier métal design sur mesure', '8 000 – 15 000 €'],
                  ['Garde-corps métal (fourni posé)', '150 – 400 €/ml'],
                  ['Remplacement marches bois', '80 – 180 €/marche'],
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
