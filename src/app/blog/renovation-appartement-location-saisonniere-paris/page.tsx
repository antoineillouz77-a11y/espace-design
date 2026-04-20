import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation location saisonnière Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-location-saisonniere-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénover un appartement pour location saisonnière Airbnb à Paris",
  description: "Rénovez votre appartement parisien pour la location saisonnière Airbnb : optimisation petits espaces, matériaux résistants, design attractif. Devis gratuit.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-location-saisonniere-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel budget pour rénover un Airbnb à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'La rénovation d\'un studio pour Airbnb coûte entre 12 000 et 22 000 €, un T2 entre 18 000 et 32 000 €, un T3 entre 25 000 et 45 000 €. Ces budgets incluent les matériaux résistants, le mobilier intégré et les finitions design photographiables.' },
    },
    {
      '@type': 'Question',
      name: 'Quels matériaux choisir pour un appartement en location saisonnière ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pour un bien en location courte durée, on privilégie les sols en vinyle LVT (résistant à l\'eau et aux chocs), la peinture lessivable mate, le carrelage grand format dans la salle de bain et un mobilier intégré en MDF stratifié. Ces choix résistent aux rotations fréquentes de locataires.' },
    },
    {
      '@type': 'Question',
      name: 'Une rénovation Airbnb augmente-t-elle vraiment les revenus locatifs ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui. Un appartement bien rénové et photographié peut augmenter son taux d\'occupation de 30 à 50 % et son prix par nuitée de 20 à 40 %. Le retour sur investissement d\'une rénovation complète est généralement atteint en 18 à 36 mois à Paris.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Airbnb & Location Saisonnière Paris — Espace Design',
  description: 'Rénovez votre appartement pour Airbnb à Paris : optimisation espace, matériaux résistants, design attractif. Studio dès 12 000 €. Devis gratuit.',
}

export default function LocationSaisonnierePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénover un appartement pour location saisonnière à Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Airbnb, location courte durée : optimisez chaque mètre carré avec des matériaux résistants et un design qui fait la différence sur les photos.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Pourquoi rénover pour la location courte durée ?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Paris reste la première destination touristique mondiale. Un appartement bien rénové sur Airbnb peut dégager des revenus 2 à 3 fois supérieurs à une location nue. Mais la concurrence est rude : les voyageurs comparent les photos en quelques secondes. Un intérieur design, fonctionnel et bien photographié fait toute la différence.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Nous concevons des appartements pensés pour la rotation de locataires : sols vinyle LVT résistants à l&apos;eau, peintures lessivables, mobilier intégré robuste, éclairage chaleureux pour les photos. Chaque centimètre est optimisé pour la fonctionnalité et l&apos;attractivité visuelle.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Nos spécialités rénovation Airbnb</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Optimisation petits espaces (studio, T2)',
              'Sols vinyle LVT résistants et tendance',
              'Cuisine ouverte compacte et fonctionnelle',
              'Salle de bain carrelage grand format',
              'Mobilier intégré MDF peint',
              'Éclairage chaud pour photos attractives',
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
                  ['Rénovation Airbnb studio', '12 000 – 22 000 €'],
                  ['Rénovation Airbnb T2', '18 000 – 32 000 €'],
                  ['Rénovation Airbnb T3', '25 000 – 45 000 €'],
                  ['Rafraîchissement express (peinture + sols)', '3 000 – 7 000 €'],
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
