import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Soubassement mural Paris', item: 'https://espacedesignparis.fr/blog/soubassement-mural-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Soubassement mural Paris : lambris, boiseries et pose professionnelle 2025",
  description: "Tout savoir sur le soubassement mural à Paris : lambris PVC, bois, boiseries sur mesure. Prix 2025, matériaux, conseils et devis gratuit.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/soubassement-mural-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quelle hauteur pour un soubassement mural ?',
      acceptedAnswer: { '@type': 'Answer', text: 'La hauteur standard d\'un soubassement mural se situe entre 80 cm et 120 cm. Dans un appartement haussmannien, on monte souvent à 130-150 cm pour respecter les proportions des pièces. La hauteur idéale dépend de la hauteur sous plafond et du style souhaité.' },
    },
    {
      '@type': 'Question',
      name: 'Quel matériau choisir pour un soubassement mural à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Le PVC est la solution la plus économique et résistante à l\'humidité (idéal pour les cuisines et couloirs). Le bois apporte du cachet et peut être peint. Les boiseries sur mesure reproduisent l\'élégance haussmannienne. Pour un appartement de standing, le MDF peint ou le bois massif sont les options les plus valorisantes.' },
    },
    {
      '@type': 'Question',
      name: 'Faut-il poser un soubassement avant ou après la peinture ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Il est recommandé de poser le soubassement avant la peinture des murs. On peint ensuite la partie supérieure jusqu\'au soubassement, puis le soubassement lui-même. Cette méthode garantit des finitions nettes aux jonctions.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Soubassement mural Paris — Lambris & Boiseries sur mesure | Espace Design',
  description: 'Pose de soubassement mural à Paris : lambris PVC, bois, boiseries haussmanniennes sur mesure. Devis gratuit sous 48h, artisan qualifié.',
}

export default function SoubassementMuralParisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Soubassement mural à Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Lambris bas de mur, boiseries haussmanniennes ou panneaux sur mesure : le soubassement mural habille et protège vos murs avec élégance. Découvrez les options et les prix 2025.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Qu&apos;est-ce qu&apos;un soubassement mural ?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Le soubassement mural, aussi appelé lambris de hauteur ou bas de mur, est un revêtement posé sur la partie basse des murs d&apos;une pièce. Il court généralement de 80 cm à 150 cm de hauteur. Très présent dans les appartements haussmanniens parisiens, il apporte du cachet tout en protégeant les murs des chocs et des salissures quotidiennes.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Espace Design réalise la pose de soubassements muraux dans toute la région parisienne. PVC économique pour les espaces utilitaires, bois peint pour un rendu classique, ou boiseries sur mesure pour les rénovations de prestige : nous adaptons le matériau à votre budget et à l&apos;architecture de votre logement.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Matériaux et styles disponibles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Lambris PVC — économique et résistant à l\'humidité',
              'Lambris bois peint — rendu classique ou contemporain',
              'Boiseries MDF — légèreté et finition parfaite',
              'Panneaux bois massif — robustesse et caractère',
              'Boiseries sur mesure — style haussmannien authentique',
              'Carrelage bas de mur — cuisine et salle de bain',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Tarifs 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1C1C1C] text-white"><th className="p-3 text-left">Prestation</th><th className="p-3 text-right">Prix indicatif</th></tr></thead>
              <tbody>
                {[
                  ['Lambris PVC (pose incluse)', '15 – 35 € / m²'],
                  ['Lambris bois peint (pose incluse)', '25 – 60 € / m²'],
                  ['Boiseries MDF sur mesure', '60 – 120 € / m²'],
                  ['Boiseries bois massif haussmanniennes', '80 – 180 € / m²'],
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
