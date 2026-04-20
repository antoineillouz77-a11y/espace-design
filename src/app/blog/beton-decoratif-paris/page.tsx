import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Béton décoratif Paris', item: 'https://espacedesignparis.fr/blog/beton-decoratif-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Béton décoratif et béton ciré à Paris — Sols & Murs, Tarifs 2025",
  description: "Béton décoratif et béton ciré à Paris pour murs et sols. Résine époxy, finitions grises ou colorées, durabilité garantie. Artisan spécialisé, devis gratuit.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/beton-decoratif-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix du béton décoratif au m² à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le prix du béton décoratif à Paris varie entre 60 et 150 € par m² selon la technique : béton ciré mural (60 à 90 €/m²), béton ciré sol (80 à 130 €/m²), résine époxy sol (50 à 100 €/m²). Ces tarifs incluent la préparation du support, l\'application et la finition de protection.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle est la différence entre béton ciré et béton décoratif ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le béton ciré est une technique d\'enduit à base de ciment et de résine, appliqué en couches fines sur un support existant (carrelage, dalle, mur). Le béton décoratif est un terme générique qui englobe plusieurs techniques : béton ciré, mortier décoratif, résine imitation béton. Le béton ciré est la finition la plus répandue pour les intérieurs parisiens.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment entretenir un sol en béton ciré à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un sol en béton ciré s\'entretient facilement : nettoyage à la serpillière légèrement humide avec un savon neutre. Éviter les produits acides (vinaigre, javel). Une re-ciration annuelle ou bisannuelle ravive l\'aspect et renforce la protection. En cas de rayure superficielle, un ponçage localisé suivi d\'une re-ciration suffit à effacer les marques.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Béton Décoratif Paris — Béton Ciré Sols & Murs | Espace Design',
  description: 'Béton décoratif et béton ciré à Paris pour murs et sols. Résine époxy, finitions sur mesure, durabilité garantie. Artisan spécialisé, devis gratuit sous 48h.',
}

export default function BetonDecoratifParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Béton décoratif à Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Béton ciré sol et mur, résine époxy et mortier décoratif appliqués par des artisans spécialisés à Paris. Finitions minérales durables pour un intérieur contemporain.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Béton ciré et béton décoratif : la finition intemporelle des intérieurs parisiens</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Le béton ciré s'est imposé comme la finition de référence des lofts et appartements contemporains à Paris. Appliqué en couches fines directement sur le support existant (carrelage, dalle béton, mur plâtre), il crée une surface continue sans joints, d'un effet visuel minéral et épuré. Sa variété de teintes — du blanc cassé au gris anthracite en passant par les tons terreux — s'adapte à tous les styles décoratifs.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Pour les sols à fort passage ou les cuisines, nous proposons également la résine époxy autonivelante : plus résistante aux chocs et aux taches, elle offre un rendu brillant ou satiné très qualitatif. Nos applicateurs certifiés maîtrisent la préparation des supports (ponçage, ragréage, primaire) qui conditionne la qualité et la durabilité de la finition finale.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Nos solutions béton décoratif</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Béton ciré sol : continu, sans joints, lavable',
              'Béton ciré mur : salle de bain, cuisine, séjour',
              'Résine époxy autonivelante pour sols à fort passage',
              'Mortier décoratif effet brut ou lissé',
              'Large palette de teintes (grises, beiges, blanches)',
              'Protection renforcée : vernis, cire, résine de finition',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Prix béton décoratif Paris 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1C1C1C] text-white"><th className="p-3 text-left">Prestation</th><th className="p-3 text-right">Tarif indicatif</th></tr></thead>
              <tbody>
                {[
                  ['Béton ciré mural (2 couches + finition)', '60 – 90 €/m²'],
                  ['Béton ciré sol (préparation + application + cire)', '80 – 130 €/m²'],
                  ['Résine époxy autonivelante sol', '50 – 100 €/m²'],
                  ['Ragréage et préparation support (si nécessaire)', '15 – 35 €/m²'],
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
