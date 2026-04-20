import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Salle de Bain Noire Paris', item: 'https://espacedesignparis.fr/blog/salle-de-bain-noire-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Salle de bain noire et anthracite à Paris : tendances et prix 2025",
  description: "Créer une salle de bain noire à Paris : carrelage noir mat, robinetterie noire, douche à l'italienne. Conseils, tarifs et artisans qualifiés.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/salle-de-bain-noire-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une salle de bain noire à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Une rénovation complète de salle de bain dans un style noir et anthracite coûte en moyenne entre 5 000 et 15 000 € à Paris selon la superficie et les équipements choisis (douche à l\'italienne, robinetterie noire mate, carrelage grand format). La main-d\'œuvre représente généralement 40 à 50 % du budget total.' },
    },
    {
      '@type': 'Question',
      name: 'Comment entretenir une salle de bain noire sans traces ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Le carrelage noir mat nécessite un entretien régulier avec un chiffon microfibre humide pour éviter les traces de calcaire. Évitez les produits abrasifs qui rayent l\'émail. Une vitre de douche en verre trempé traité anti-calcaire réduit considérablement les marques. Le joint époxy noir est aussi plus résistant aux moisissures que le joint ciment classique.' },
    },
    {
      '@type': 'Question',
      name: 'Une salle de bain noire donne-t-elle une impression d\'assombrissement ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Bien conçue, une salle de bain noire n\'est pas sombre. L\'éclairage est la clé : spots LED encastrés puissants (minimum 300 lux), miroir rétroéclairé et fenêtre optimisée créent un contraste saisissant. Associer le noir au blanc (sanitaires, niche de douche) et aux matières naturelles (bois, marbre) équilibre l\'ensemble avec élégance.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Salle de Bain Noire Paris — Rénovation Anthracite & Douche Italienne | Espace Design',
  description: 'Rénovation salle de bain noire et anthracite à Paris : carrelage noir mat, robinetterie noire, douche à l\'italienne. Devis gratuit sous 48h, artisan qualifié.',
}

export default function SalleDeBainNoireParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Salle de Bain Noire à Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Carrelage noir mat, robinetterie anthracite, douche à l'italienne : la salle de bain noire s'impose comme le choix des intérieurs parisiens les plus sophistiqués.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">La salle de bain noire : une tendance durable à Paris</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Loin d'être une mode passagère, la salle de bain noire et anthracite s'est imposée comme une signature déco forte dans les appartements parisiens rénovés haut de gamme. Le carrelage noir mat grand format (60x120 cm), la robinetterie noire brossée et la douche à l'italienne sans seuil forment un trio indémodable qui donne à n'importe quelle salle de bain une allure de spa privé.</p>
          <p className="text-gray-600 leading-relaxed mb-4">À Paris, les contraintes de superficie (salles de bain souvent petites dans les appartements haussmanniens) renforcent l'intérêt du noir : utilisé avec intelligence — grand miroir, éclairage LED puissant, niche de douche en marbre blanc — il agrandit visuellement l'espace plutôt qu'il ne l'écrase. Les artisans Espace Design maîtrisent ces codes pour vous livrer une salle de bain à la fois élégante et fonctionnelle.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Éléments clés d'une salle de bain noire réussie</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Carrelage noir mat grand format 60x120 ou 90x90 cm',
              'Robinetterie noire mate ou anthracite brossé',
              'Douche à l\'italienne avec paroi verre trempé',
              'Miroir rétroéclairé LED pour contraste lumineux',
              'Joint époxy noir résistant aux moisissures',
              'Niche de douche en marbre blanc pour la touche de contraste',
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
                  ['Carrelage noir mat grand format (fourni posé)', '80 – 150 €/m²'],
                  ['Robinetterie noire mate (par équipement)', '200 – 600 €'],
                  ['Douche à l\'italienne complète', '2 500 – 5 000 €'],
                  ['Rénovation complète salle de bain noire', '5 000 – 15 000 €'],
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
