import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Parquet Bois Flotté Paris', item: 'https://espacedesignparis.fr/blog/parquet-bois-flotte-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Parquet bois flotté et bois vieilli à Paris : tendances et prix 2025",
  description: "Poser un parquet bois flotté ou bois vieilli à Paris : teintes grises, assemblage clipsable, entretien. Conseils d'experts et tarifs 2025.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/parquet-bois-flotte-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'un parquet bois flotté au m² à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Un parquet bois flotté ou bois vieilli de qualité coûte entre 25 et 80 €/m² fourni selon l\'essence (chêne, pin, frêne) et le traitement (huilé, verni, ciré). La pose clipsable par un artisan parisien se situe entre 20 et 40 €/m². Comptez 45 à 120 €/m² tout compris, préparation du support comprise.' },
    },
    {
      '@type': 'Question',
      name: 'Comment entretenir un parquet bois flotté ou bois vieilli ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Un parquet bois vieilli huilé s\'entretient avec une huile de protection 1 à 2 fois par an. Évitez l\'excès d\'eau et les détergents agressifs. Un parquet vernis nécessite moins d\'entretien : nettoyage humide avec un produit adapté. Les teintes grises du bois flotté sont obtenues par brossage et traitement en usine — un entretien minimal suffit pour préserver l\'aspect naturel.' },
    },
    {
      '@type': 'Question',
      name: 'Le parquet bois flotté résiste-t-il à l\'humidité ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Le parquet bois flotté massif ou contrecollé est déconseillé dans les pièces très humides (salle de bain, cuisine). Pour ces espaces, préférez un parquet contrecollé avec couche d\'usure épaisse et finition vitrifiée, ou optez pour un carrelage effet bois. Dans les pièces de vie, le bois flotté ou vieilli s\'adapte très bien aux appartements parisiens, y compris avec plancher chauffant basse température.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Parquet Bois Flotté Paris — Pose Bois Vieilli & Teintes Grises | Espace Design',
  description: 'Parquet bois flotté et bois vieilli à Paris : teintes grises, assemblage clipsable, entretien. Artisan qualifié, devis gratuit sous 48h, assurance décennale.',
}

export default function ParquetBoisFlotteParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Parquet Bois Flotté à Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Bois flotté, bois vieilli, teintes grises naturelles : le parquet effet bois patiné apporte une chaleur authentique et une élégance brute aux intérieurs parisiens contemporains.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Le parquet bois flotté, une tendance naturelle durable</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Le parquet bois flotté ou bois vieilli est traité en usine par brossage, grisaillage et huilage pour obtenir cet aspect naturellement patiné, aux teintes grises et beiges qui rappellent le bois exposé aux éléments. Dans les appartements parisiens, il se marie parfaitement avec les murs en béton ciré, les meubles design scandinave ou les touches industrielles (acier, cuir). C'est un choix de revêtement de sol qui vieillit bien et gagne en caractère avec le temps.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Disponible en chêne, pin, frêne ou essence exotique, le parquet bois flotté peut être massif, contrecollé ou stratifié à effet bois flotté. L'assemblage clipsable (système click) permet une pose rapide et sans colle, idéale pour les rénovations rapides dans des appartements occupés. Les artisans Espace Design recommandent la version contrecollée chêne pour un rapport qualité-durabilité optimal, compatible avec les planchers chauffants basse température courants dans les immeubles parisiens récents.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Caractéristiques et avantages du parquet bois flotté</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Teintes grises naturelles, effet bois patiné authentique',
              'Disponible massif, contrecollé ou stratifié haute qualité',
              'Assemblage clipsable : pose rapide sans colle',
              'Compatible plancher chauffant basse température',
              'Finitions huilée, vitrifiée ou cirée selon l\'usage',
              'Facile à entretenir, se bonifie avec les années',
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
                  ['Fourniture parquet bois flotté contrecollé', '25 – 80 €/m²'],
                  ['Pose clipsable (main-d\'œuvre)', '20 – 40 €/m²'],
                  ['Préparation du support (ragréage)', '8 – 20 €/m²'],
                  ['Pose complète tout compris (40 m²)', '2 200 – 5 600 €'],
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
