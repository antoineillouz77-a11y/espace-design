import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Stuc vénitien Paris', item: 'https://espacedesignparis.fr/blog/stuc-venitien-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Stuc vénitien et marmorino à Paris — Application & Prix 2025",
  description: "Application de stuc vénitien et marmorino à Paris. Finition brillante, résistance humidité, couleurs RAL sur mesure. Artisan spécialisé, devis gratuit.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/stuc-venitien-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix du stuc vénitien au m² à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le prix du stuc vénitien à Paris varie entre 80 et 180 € par m² (main d\'oeuvre + matériaux), selon le nombre de couches, la finition souhaitée (mat, satiné, brillant) et la complexité du chantier. Le marmorino haut de gamme avec polissage à la cire peut atteindre 200 à 250 € par m².',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle est la différence entre stuc vénitien et enduit traditionnel ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le stuc vénitien est une chaux marbrée appliquée en plusieurs couches fines puis polie pour obtenir un effet brillant et profond, imitant le marbre. L\'enduit traditionnel (plâtre, mortier) est plus mat et moins résistant à l\'humidité. Le stuc vénitien est nettement plus technique et demande un artisan spécialisé.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment entretenir un mur en stuc vénitien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le stuc vénitien est très facile d\'entretien : un simple dépoussiérage avec un chiffon doux suffit au quotidien. Pour raviver le brillant, une application de cire d\'abeille tous les 2 à 3 ans est recommandée. Éviter les produits abrasifs ou acides. En pièce humide, le stuc résiste bien à condition d\'être correctement ciré.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Stuc Vénitien Paris — Marmorino & Application | Espace Design',
  description: 'Application de stuc vénitien et marmorino à Paris. Finition brillante, résistance humidité, couleurs RAL sur mesure, durabilité 20 ans. Devis gratuit sous 48h.',
}

export default function StucVenitienParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Stuc vénitien à Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Application de stuc vénitien et marmorino par des artisans spécialisés à Paris. Finitions brillantes, couleurs sur mesure et durabilité exceptionnelle pour vos murs.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Le stuc vénitien : un art mural ancestral au service de l'intérieur moderne</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Issu de la tradition vénitienne de la Renaissance, le stuc vénitien est une technique d'enduit à base de chaux et de poudre de marbre, appliquée en couches successives puis polie à la truelle acier. Le résultat est une surface d'une profondeur et d'un brillant incomparables, qui imite le marbre tout en conservant la chaleur d'un matériau naturel. À Paris, il s'impose dans les appartements haussmanniens comme dans les lofts contemporains.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Nos applicateurs maîtrisent également le marmorino — variante plus granuleuse au rendu minéral très recherché — ainsi que le stuc lustré et le stuc mat pour les intérieurs plus sobres. Chaque teinte est formulée sur mesure à partir du nuancier RAL ou Pantone, pour un accord parfait avec votre décoration.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Pourquoi choisir le stuc vénitien ?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Finition brillante ou satinée d\'une profondeur unique',
              'Résistance à l\'humidité (idéal salle de bain, cuisine)',
              'Couleurs RAL et Pantone formulées sur mesure',
              'Durabilité exceptionnelle : 20 ans et plus',
              'Régulation naturelle de l\'hygrométrie (chaux)',
              'Entretien minimal, réparation ponctuelle possible',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Prix stuc vénitien Paris 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1C1C1C] text-white"><th className="p-3 text-left">Prestation</th><th className="p-3 text-right">Tarif indicatif</th></tr></thead>
              <tbody>
                {[
                  ['Stuc vénitien standard (2 couches, finition mate)', '80 – 110 €/m²'],
                  ['Stuc vénitien brillant poli (3 couches + cire)', '120 – 180 €/m²'],
                  ['Marmorino granuleux (effet minéral)', '100 – 160 €/m²'],
                  ['Stuc décoratif avec effets (ombres, veinage)', '150 – 250 €/m²'],
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
              { href: '/blog/prix-renovation-appartement-paris', label: 'Prix rénovation Paris' },
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
