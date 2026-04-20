import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Peinture Effet Matière Paris', item: 'https://espacedesignparis.fr/blog/peinture-effet-matiere-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Peinture effet matière à Paris : chaux, ardoise, rouille — guide 2025",
  description: "Tout savoir sur la peinture effet matière à Paris : chaux, ardoise, rouille, craie. Tarifs, techniques et conseils d'artisan pour sublimer vos murs en 2025.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/peinture-effet-matiere-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une peinture effet chaux à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'La peinture effet chaux coûte entre 15 et 30 €/m² pour la fourniture, auxquels s\'ajoutent 25 à 45 €/m² de main-d\'œuvre pour un artisan qualifié à Paris. Le prix total tourne généralement entre 40 et 75 €/m² tout compris.' },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps dure une peinture effet matière ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Bien appliquée et entretenue, une peinture effet matière (chaux, ardoise, béton ciré) dure 10 à 15 ans en intérieur. Un vernis de protection prolonge la durée de vie, notamment dans les pièces humides comme la salle de bain.' },
    },
    {
      '@type': 'Question',
      name: 'Peut-on appliquer une peinture effet matière sur du papier peint existant ?',
      acceptedAnswer: { '@type': 'Answer', text: 'En général non : le papier peint doit être retiré et le support préparé (enduisage, ponçage) avant d\'appliquer une peinture effet matière. Un support parfaitement lisse est indispensable pour un rendu professionnel.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Peinture Effet Matière Paris — Chaux, Ardoise, Rouille | Espace Design',
  description: 'Peinture effet matière à Paris : chaux, ardoise, rouille, craie. Artisan qualifié, devis gratuit sous 48h. Tarifs 2025 et conseils pour vos murs.',
}

export default function PeintureEffetMatierePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Peinture Effet Matière à Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Chaux, ardoise, rouille, craie — techniques et tarifs pour habiller vos murs avec caractère en 2025.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Pourquoi choisir une peinture effet matière ?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">La peinture effet matière s&apos;impose comme l&apos;alternative la plus élégante au papier peint classique. Elle apporte profondeur, texture et singularité à vos intérieurs parisiens sans les contraintes d&apos;un revêtement mural traditionnel. Chaque application est unique : le résultat dépend du geste de l&apos;artisan, ce qui garantit un mur absolument exclusif.</p>
          <p className="text-gray-600 leading-relaxed mb-4">À Paris, où les appartements haussmanniens côtoient les lofts contemporains, la peinture effet chaux, ardoise ou rouille s&apos;adapte à tous les styles. Elle valorise le bien immobilier et transforme un simple mur en véritable élément de décoration intérieure.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Les finitions les plus demandées à Paris</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Effet chaux — rendu minéral et respirant',
              'Effet ardoise — profondeur anthracite mate',
              'Effet rouille — chaleur industrielle et patine',
              'Effet craie — douceur veloutée scandinave',
              'Béton ciré décoratif — tendance loft parisien',
              'Effet pierre — textures naturelles et brutes',
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
                  ['Peinture effet chaux (fourniture)', '15 – 30 €/m²'],
                  ['Peinture effet ardoise (fourniture)', '20 – 35 €/m²'],
                  ['Peinture satiné mat standard', '8 – 18 €/m²'],
                  ['Pose artisan (main-d\'œuvre)', '25 – 45 €/m²'],
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
