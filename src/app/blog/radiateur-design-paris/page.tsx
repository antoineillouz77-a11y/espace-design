import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Radiateur Design Paris', item: 'https://espacedesignparis.fr/blog/radiateur-design-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Radiateurs design et sèche-serviettes décoratifs à Paris — prix 2025",
  description: "Choisir un radiateur design ou sèche-serviettes décoratif à Paris : acier, fonte, inertie, électrique. Conseils, modèles tendance et tarifs d'installation.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/radiateur-design-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'un radiateur design à Paris, installation comprise ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Un radiateur design électrique à inertie coûte entre 300 et 1 200 € à l\'achat selon le modèle et la puissance. L\'installation par un électricien à Paris (câblage dédié, fixation murale) représente 150 à 350 € supplémentaires. Pour un sèche-serviettes à eau chaude (remplacement d\'un existant), comptez 400 à 900 € fourni posé par un plombier.' },
    },
    {
      '@type': 'Question',
      name: 'Quelle est la consommation électrique d\'un radiateur design à inertie ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Un radiateur électrique à inertie de 1 500 W consomme 1,5 kWh par heure de fonctionnement. Grâce à son inertie thermique (cœur en fonte ou fluide caloporteur), il chauffe progressivement et maintient la chaleur longtemps après l\'extinction, ce qui le rend plus économe qu\'un radiateur à convection classique. En moyenne, comptez 8 à 12 €/mois pour une chambre de 12 m² bien isolée à Paris.' },
    },
    {
      '@type': 'Question',
      name: 'Peut-on remplacer un vieux radiateur en fonte par un radiateur design sans travaux importants ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, si le circuit de chauffage central est conservé. Le remplacement d\'un radiateur hydraulique existant par un radiateur design en acier ou en fonte moderne se fait en une demi-journée : vidange du circuit, dépose de l\'ancien, pose et raccordement du nouveau. Si vous optez pour un radiateur électrique en remplacement d\'un hydraulique, il faut prévoir un point électrique dédié — une demi-journée d\'électricien supplémentaire.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Radiateur Design Paris — Sèche-Serviettes Décoratif & Inertie | Espace Design',
  description: 'Radiateurs design et sèche-serviettes décoratifs à Paris : acier, fonte, inertie, électrique. Installation par artisan qualifié, devis gratuit sous 48h.',
}

export default function RadiateurDesignParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Radiateurs Design à Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Sèche-serviettes décoratifs, radiateurs à inertie, panneaux en acier brossé : le chauffage devient un élément de décoration à part entière dans les appartements parisiens rénovés.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Pourquoi choisir un radiateur design pour votre rénovation parisienne ?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Dans une rénovation soignée, chaque détail compte — y compris le chauffage. Les radiateurs design remplacent avantageusement les vieux convecteurs disgracieux ou les anciennes fontes grises sans âme. Disponibles en acier thermolaqué (finition mate, brillante, satinée), en fonte reconditionnée ou en version sèche-serviettes décoratif pour la salle de bain, ils combinent performance thermique et esthétique contemporaine.</p>
          <p className="text-gray-600 leading-relaxed mb-4">À Paris, deux grandes familles coexistent : les radiateurs hydrauliques (eau chaude du circuit collectif ou individuel) et les radiateurs électriques à inertie. Ces derniers, dotés d'un cœur en fonte ou d'un fluide caloporteur, offrent une montée en température douce et une inertie thermique prolongée — idéale dans les appartements haussmanniens aux murs épais bien isolés. Les artisans Espace Design peuvent remplacer vos anciens radiateurs et installer des modèles design en une journée.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Les types de radiateurs design les plus populaires à Paris</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Radiateur acier thermolaqué : léger, format vertical tendance',
              'Radiateur à inertie fonte : chaleur douce et durable',
              'Sèche-serviettes décoratif : chromé, noir mat ou doré',
              'Panneau rayonnant design : discret et silencieux',
              'Radiateur fonte style ancien remis au goût du jour',
              'Modèles connectés avec programmation et variateur',
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
                  ['Radiateur électrique design à inertie (fourni)', '300 – 1 200 €'],
                  ['Installation radiateur électrique (main-d\'œuvre)', '150 – 350 €'],
                  ['Sèche-serviettes décoratif hydraulique (fourni posé)', '400 – 900 €'],
                  ['Remplacement radiateur fonte par modèle design', '250 – 600 €'],
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
