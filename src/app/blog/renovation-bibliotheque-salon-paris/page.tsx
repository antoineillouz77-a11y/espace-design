import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Bibliothèque salon Paris', item: 'https://espacedesignparis.fr/blog/renovation-bibliotheque-salon-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Bibliothèque intégrée sur mesure dans le salon à Paris",
  description: "Faites installer une bibliothèque intégrée sol-plafond sur mesure dans votre salon parisien. Bois massif, éclairage LED intégré, devis gratuit.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-bibliotheque-salon-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien coûte une bibliothèque sur mesure à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Une bibliothèque sur mesure à Paris coûte entre 2 500 et 7 000 € pour un modèle en panneau hydrofuge ou MDF peint. En bois massif (chêne, noyer), le budget monte entre 5 000 et 12 000 € selon les dimensions et les finitions.' },
    },
    {
      '@type': 'Question',
      name: 'Peut-on installer une bibliothèque sol-plafond dans un appartement haussmannien ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, à condition de respecter les hauteurs variables et les moulures. Nos menuisiers travaillent sur mesure et s\'adaptent aux contraintes des immeubles anciens, y compris les aplombs et les parquets en point de Hongrie.' },
    },
    {
      '@type': 'Question',
      name: 'L\'éclairage intégré est-il inclus dans le devis ?',
      acceptedAnswer: { '@type': 'Answer', text: 'L\'éclairage LED intégré (spots, strips sous tablettes) est proposé en option. Il représente généralement 300 à 800 € supplémentaires et transforme radicalement le rendu visuel de la bibliothèque en soirée.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Bibliothèque Intégrée Sur Mesure Salon Paris — Espace Design',
  description: 'Bibliothèque sol-plafond sur mesure dans votre salon parisien : bois massif, éclairage intégré, étagères design. Devis gratuit sous 48h.',
}

export default function BibliothecqueSalonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Bibliothèque intégrée sur mesure dans le salon à Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Étagères sol-plafond, bois massif, éclairage intégré : donnez du caractère à votre salon avec une bibliothèque entièrement personnalisée.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">La bibliothèque intégrée : un incontournable du salon parisien</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Dans les appartements parisiens aux plafonds hauts, la bibliothèque sol-plafond est bien plus qu&apos;un meuble de rangement : c&apos;est un élément architectural qui structure l&apos;espace, valorise la hauteur sous plafond et apporte une identité forte au salon. Réalisée sur mesure, elle s&apos;adapte à chaque configuration, des alcôves haussmanniennes aux murs porteurs.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Nos menuisiers conçoivent et posent des bibliothèques en MDF laqué, panneau mélaminé ou bois massif (chêne, noyer, frêne). L&apos;éclairage LED sous tablettes, les portes vitrées et les échelles roulantes peuvent compléter l&apos;ensemble pour un résultat digne des plus belles librairies.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Nos prestations bibliothèque</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Plans 3D et simulation rendu',
              'Bibliothèque MDF laqué ou mélaminé',
              'Bois massif chêne, noyer, frêne',
              'Éclairage LED intégré sous tablettes',
              'Portes vitrées et éléments fermés',
              'Adaptation moulures et sols anciens',
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
                  ['Bibliothèque basique (kit ou standard)', '800 – 2 500 €'],
                  ['Bibliothèque sur mesure MDF/mélaminé', '2 500 – 7 000 €'],
                  ['Bibliothèque bois massif (chêne/noyer)', '5 000 – 12 000 €'],
                  ['Éclairage LED intégré (option)', '300 – 800 €'],
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
