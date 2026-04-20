import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Carrelage Métro Paris', item: 'https://espacedesignparis.fr/blog/carrelage-metro-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Carrelage Métro à Paris : pose, tendances et prix 2025",
  description: "Tout savoir sur la pose de carrelage métro en faïence à Paris : formats 10x20 et 10x30, joints colorés, cuisine et salle de bain. Devis gratuit.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/carrelage-metro-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix du carrelage métro au m² à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Le carrelage métro en faïence coûte entre 15 et 45 €/m² fourni. La pose par un artisan parisien se situe entre 40 et 70 €/m² selon la complexité, les joints et la préparation du support. Comptez donc entre 55 et 115 €/m² tout compris.' },
    },
    {
      '@type': 'Question',
      name: 'Quelle est la différence entre carrelage métro et faïence classique ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Le carrelage métro est une faïence émaillée au format rectangulaire allongé (10x20 ou 10x30 cm), caractérisée par son bord biseauté et son aspect brillant ou satiné. La faïence classique peut être carrée ou rectangulaire sans biseau particulier. Le métro évoque le style parisien authentique des stations Hector Guimard.' },
    },
    {
      '@type': 'Question',
      name: 'Comment poser du carrelage métro en cuisine ou salle de bain ?',
      acceptedAnswer: { '@type': 'Answer', text: 'La pose se fait en décalé (offset) à 1/3 ou 1/2, avec des joints colorés (gris, noir, terracotta) pour accentuer le relief. Le support doit être plan et propre. En cuisine, on pose généralement en crédence entre plan de travail et hotte. En salle de bain, le métro habille l\'ensemble des murs jusqu\'à la hauteur souhaitée.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Carrelage Métro Paris — Pose Faïence Cuisine & Salle de Bain | Espace Design',
  description: 'Pose de carrelage métro en faïence à Paris : formats 10x20, 10x30, joints colorés, cuisine et salle de bain. Artisan qualifié, devis gratuit sous 48h.',
}

export default function CarrelageMetroParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Carrelage Métro à Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Tendance intemporelle, la faïence métro s'invite dans les cuisines et salles de bain parisiennes. Formats, joints colorés, pose en décalé : tout ce qu'il faut savoir.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Pourquoi choisir le carrelage métro pour votre rénovation ?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Inspiré des carreaux émaillés des stations du métro parisien dessinées par Hector Guimard au début du XX&#x1D4E3; siècle, le carrelage métro est aujourd'hui l'une des tendances déco les plus plébiscitées dans les appartements haussmanniens comme dans les lofts contemporains. Sa faïence émaillée, son bord biseauté caractéristique et ses formats allongés lui confèrent un charme authentique et polyvalent.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Disponible en formats 10x20 cm ou 10x30 cm, il se pose en décalé (offset 1/3 ou 1/2) pour maximiser l'effet graphique. Le choix du joint est déterminant : un joint de couleur contrastée (noir, gris anthracite, terracotta) met en valeur chaque carreau, tandis qu'un joint blanc ou crème donne un rendu plus épuré. À Paris, les artisans Espace Design maîtrisent parfaitement ces techniques pour un résultat soigné, que ce soit en crédence de cuisine ou en habillage mural de salle de bain.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Avantages et applications du carrelage métro</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Style intemporel, adaptable à tous les intérieurs',
              'Faïence émaillée facile à nettoyer et hygiénique',
              'Formats 10x20 et 10x30 cm, pose en décalé',
              'Joints colorés pour personnaliser l\'effet graphique',
              'Idéal en crédence cuisine ou mur de salle de bain',
              'Compatible avec robinetterie noire ou dorée tendance',
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
                  ['Fourniture carrelage métro faïence', '15 – 45 €/m²'],
                  ['Pose carrelage métro (main-d\'œuvre)', '40 – 70 €/m²'],
                  ['Crédence cuisine complète (4 m²)', '350 – 600 €'],
                  ['Habillage mural salle de bain (10 m²)', '550 – 1 150 €'],
                ].map(([label, price]) => (
                  <tr key={label} className="border-b border-gray-100"><td className="p-3 text-gray-600">{label}</td><td className="p-3 text-right font-medium">{price}</td></tr>
                ))}
              </tbody>
            </table>
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
