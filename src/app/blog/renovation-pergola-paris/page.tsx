import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation pergola Paris', item: 'https://espacedesignparis.fr/blog/renovation-pergola-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Pergola bois ou aluminium à Paris — Installation terrasse 2025",
  description: "Installer une pergola sur votre terrasse parisienne : bois, aluminium ou bioclimatique. Couverture polycarbonate, stores, prix complets.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-pergola-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Faut-il un permis de construire pour une pergola à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Une pergola de moins de 20 m² est soumise à déclaration préalable de travaux (et non à un permis de construire). Au-delà de 20 m², un permis de construire est obligatoire. Nous vous accompagnons dans les démarches administratives.' },
    },
    {
      '@type': 'Question',
      name: 'Quelle est la durée de vie d\'une pergola aluminium ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Une pergola en aluminium de qualité dure 20 à 30 ans sans entretien particulier. L\'aluminium est insensible à la rouille, aux UV et aux variations de température — des atouts majeurs pour une terrasse parisienne exposée aux intempéries.' },
    },
    {
      '@type': 'Question',
      name: 'Quelle différence entre une pergola classique et une pergola bioclimatique ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Une pergola bioclimatique dispose de lames orientables motorisées permettant de réguler la ventilation, la lumière et la protection contre la pluie selon les conditions météo. Son prix est plus élevé (8 000 à 20 000 €) mais son confort et sa valeur ajoutée sont nettement supérieurs.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Pergola bois ou alu à Paris — Installation terrasse 2025 | Espace Design',
  description: 'Installation pergola à Paris : bois, aluminium ou bioclimatique. Couverture polycarbonate et stores. Prix de 3 000 à 20 000 €. Devis gratuit.',
}

export default function RenovationPergolaParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Pergola bois ou aluminium à Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Valorisez votre terrasse parisienne avec une pergola sur mesure : bois massif, aluminium ou bioclimatique — couverture, stores et éclairage intégré.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Choisir sa pergola pour une terrasse à Paris</h2>
          <p className="text-gray-600 leading-relaxed mb-4">La pergola est une solution idéale pour aménager une terrasse parisienne en espace de vie extérieur à part entière. Elle protège de la pluie, filtre la lumière et crée une zone ombragée agréable dès les premiers beaux jours. Selon le matériau choisi — bois exotique, aluminium thermolaqué ou structure bioclimatique — le rendu et les contraintes d&apos;entretien diffèrent significativement.</p>
          <p className="text-gray-600 leading-relaxed mb-4">La pergola bois offre un charme naturel et chaleureux mais demande un entretien annuel (lasure, traitement). L&apos;aluminium est sans entretien, léger et disponible dans toutes les teintes RAL. La pergola bioclimatique, avec ses lames motorisées orientables, représente le summum du confort et s&apos;adapte automatiquement aux conditions climatiques.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Nos prestations pergola à Paris</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Pergola bois exotique ou pin traité',
              'Pergola aluminium thermolaqué RAL',
              'Pergola bioclimatique motorisée',
              'Couverture polycarbonate ou verre',
              'Stores enrouleurs et brise-vue',
              'Éclairage LED intégré et domotique',
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
                  ['Pergola bois (pose comprise)', '3 000 – 8 000 €'],
                  ['Pergola aluminium (pose comprise)', '4 000 – 10 000 €'],
                  ['Pergola bioclimatique motorisée', '8 000 – 20 000 €'],
                  ['Couverture polycarbonate (supplément)', '500 – 1 500 €'],
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
