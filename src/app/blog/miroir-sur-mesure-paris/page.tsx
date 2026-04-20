import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Miroir sur Mesure Paris', item: 'https://espacedesignparis.fr/blog/miroir-sur-mesure-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Pose miroir sur mesure Paris — salle de bain, dressing, salon 2025",
  description: "Pose de miroir sur mesure à Paris : salle de bain, dressing, salon. Tarifs 2025, conseils de pose et artisans qualifiés. Devis gratuit sous 48h.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/miroir-sur-mesure-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'un miroir sur mesure posé à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Un miroir sur mesure coûte entre 200 et 500 €/m² selon l\'épaisseur et les options (biseau, teinté, antireflet). La pose par un professionnel ajoute 50 à 100 € selon la complexité. Pour un miroir de salle de bain 60x80 cm, comptez entre 150 et 350 € tout compris.' },
    },
    {
      '@type': 'Question',
      name: 'Comment fixer un grand miroir sur un mur parisien (plâtre, pierre) ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sur mur en plâtre, on utilise des chevilles adaptées et des équerres invisibles. Sur pierre ou béton, des chevilles à expansion garantissent la solidité. Pour les grands formats (plus de 1 m²), la fixation collée avec mastic structurel est recommandée, toujours en complément d\'une sécurité mécanique.' },
    },
    {
      '@type': 'Question',
      name: 'Peut-on poser un miroir sur toute la hauteur d\'un mur ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, les miroirs pleine hauteur (sol-plafond) sont très tendance à Paris pour agrandir visuellement les pièces. Ils nécessitent une découpe sur mesure et une pose par un professionnel avec rails de maintien. Comptez 300 à 500 €/m² posé selon les dimensions.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Miroir sur Mesure Paris — Pose Salle de Bain, Dressing, Salon | Espace Design',
  description: 'Pose miroir sur mesure à Paris : salle de bain, dressing, salon. Artisan qualifié, devis gratuit sous 48h. Tarifs 2025 et conseils de pose.',
}

export default function MiroirSurMesurePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Miroir sur Mesure à Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Pose professionnelle de miroirs sur mesure — salle de bain, dressing, salon. Tarifs et conseils 2025.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Le miroir sur mesure : atout des appartements parisiens</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Dans les appartements parisiens souvent exigus, un miroir bien positionné peut doubler visuellement la surface d&apos;une pièce. Le miroir sur mesure va plus loin : il s&apos;adapte exactement à vos dimensions, vos angles et votre style, qu&apos;il s&apos;agisse d&apos;une salle de bain haussmannienne, d&apos;un dressing contemporain ou d&apos;un salon lumineux.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Espace Design réalise la pose de miroirs sur mesure dans tout Paris et la petite couronne. Nos artisans travaillent avec des miroitiers partenaires pour vous proposer toutes les finitions : biseauté, teinté bronze ou gris, antireflet, encadré bois ou métal.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Types de miroirs les plus posés à Paris</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Miroir simple — transparent ou teinté',
              'Miroir encadré bois, métal ou laiton',
              'Miroir pleine hauteur sol-plafond',
              'Miroir rétroéclairé salle de bain',
              'Miroir adhésif grand format dressing',
              'Miroir sur mesure angle et forme atypique',
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
                  ['Miroir simple (fourniture)', '80 – 150 €/m²'],
                  ['Miroir encadré (fourniture)', '150 – 300 €/m²'],
                  ['Miroir sur mesure (fourniture)', '200 – 500 €/m²'],
                  ['Pose professionnelle', '50 – 100 €'],
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
