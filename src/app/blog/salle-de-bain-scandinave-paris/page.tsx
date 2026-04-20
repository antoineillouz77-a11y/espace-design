import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Salle de bain scandinave à Paris', item: 'https://espacedesignparis.fr/blog/salle-de-bain-scandinave-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Salle de bain scandinave à Paris : bois clair, blanc et minimalisme",
  description: "Créez une salle de bain scandinave à Paris : bois clair, carrelage blanc, accessoires épurés. Guide complet avec idées déco et prix 2025.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/salle-de-bain-scandinave-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Comment intégrer le bois dans une salle de bain sans risque d\'humidité ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Il faut choisir des essences adaptées à l\'humidité comme le teck, le chêne huilé ou le bambou, et les traiter régulièrement. En alternative, les matériaux imitation bois (carrelage bois, vinyle luxe) offrent le même rendu visuel sans les contraintes d\'entretien. Une bonne ventilation (VMC) est indispensable pour protéger les éléments en bois.' },
    },
    {
      '@type': 'Question',
      name: 'Quel budget pour une salle de bain scandinave à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Une salle de bain scandinave complète à Paris (10-12 m²) coûte entre 7 000 € et 15 000 €. Ce budget couvre le carrelage blanc, les éléments en bois ou imitation bois, la robinetterie chromée et la main-d\'oeuvre. Les finitions soignées et le bois massif font monter le devis vers 15 000 €.' },
    },
    {
      '@type': 'Question',
      name: 'Quelles couleurs associer au blanc dans une salle de bain scandinave ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Le blanc se marie parfaitement avec le beige, le gris clair, le naturel du bois et les tons sable. On peut ajouter une touche de couleur douce — vert sauge, bleu poudré — via les textiles (serviettes, tapis) ou quelques plantes vertes. L\'objectif est de garder une palette reposante et lumineuse.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Salle de bain scandinave Paris — Bois, Blanc & Minimalisme 2025 | Espace Design',
  description: 'Aménagez votre salle de bain scandinave à Paris : bois clair, carrelage blanc, design épuré. Artisan qualifié, devis gratuit sous 48h.',
}

export default function SalleDeBainScandinave() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Salle de bain scandinave à Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Bois clair, carrelage blanc immaculé et lignes épurées : le style scandinave apporte sérénité et lumière à votre salle de bain parisienne, quelle que soit sa superficie.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Pourquoi adopter le style scandinave dans sa salle de bain ?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Le design scandinave repose sur un principe simple : le beau doit aussi être fonctionnel. Dans la salle de bain, cela se traduit par des espaces bien organisés, des rangements intégrés discrets et des matériaux naturels qui traversent les tendances. Carrelage blanc, bois clair, linge de maison épais et quelques plantes vertes suffisent à créer une atmosphère de spa domestique.</p>
          <p className="text-gray-600 leading-relaxed mb-4">À Paris, où les salles de bain sont souvent petites, l&apos;approche minimaliste scandinave est particulièrement pertinente. Elle maximise la luminosité, optimise chaque centimètre carré et évite l&apos;encombrement visuel. Les artisans d&apos;Espace Design proposent des solutions sur mesure adaptées aux contraintes des appartements parisiens.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Les incontournables du style scandinave en salle de bain</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Carrelage blanc mat ou brillant au sol et aux murs',
              'Éléments en bois clair (chêne, pin, teck huilé)',
              'Robinetterie chromée mate aux lignes géométriques',
              'Meuble vasque suspendu pour dégager le sol',
              'Miroir rond ou en arche avec éclairage intégré',
              'Plantes vertes et accessoires en matières naturelles',
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
                  ['Rénovation salle de bain scandinave complète (10-12 m²)', '7 000 € – 15 000 €'],
                  ['Carrelage blanc (métro, grand format, pose incluse)', '45 € – 70 €/m²'],
                  ['Revêtement bois ou imitation bois en salle de bain', '80 € – 120 €/m²'],
                  ['Meuble vasque suspendu + robinetterie', '600 € – 2 000 €'],
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
