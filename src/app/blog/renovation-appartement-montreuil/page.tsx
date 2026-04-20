import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Montreuil', item: 'https://espacedesignparis.fr/blog/renovation-appartement-montreuil' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Montreuil (93) — Guide complet 2025",
  description: "Tout savoir sur la rénovation d'appartement à Montreuil : prix au m², artisans qualifiés, démarches et conseils pour réussir vos travaux en Seine-Saint-Denis.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-montreuil' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix moyen d\'une rénovation complète à Montreuil ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Comptez entre 1 000 et 1 500 €/m² pour une rénovation complète à Montreuil, selon l\'état du bien et les matériaux choisis. Un appartement de 50 m² revient entre 50 000 et 75 000 €.' },
    },
    {
      '@type': 'Question',
      name: 'Faut-il un permis de construire pour rénover à Montreuil ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pour les travaux intérieurs (peinture, parquet, salle de bain), aucun permis n\'est requis. Une déclaration préalable est nécessaire si vous modifiez la façade ou créez une ouverture. Renseignez-vous auprès de la mairie de Montreuil.' },
    },
    {
      '@type': 'Question',
      name: 'Quelles aides financières existent pour rénover à Montreuil ?',
      acceptedAnswer: { '@type': 'Answer', text: 'MaPrimeRénov\', l\'Éco-PTZ et les aides de l\'Anah sont accessibles sous conditions de ressources. La région Île-de-France propose aussi des subventions complémentaires pour les rénovations énergétiques.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Montreuil (93) — Prix & Artisans 2025 | Espace Design',
  description: 'Tout savoir sur la rénovation d\'appartement à Montreuil : prix au m², artisans qualifiés, démarches et conseils pour réussir vos travaux en Seine-Saint-Denis.',
}

export default function RenovationMontreuil() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement à Montreuil (93)</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Montreuil, ville en plein essor artistique, attire de nombreux propriétaires souhaitant valoriser leur bien. Découvrez nos conseils, prix 2025 et tout ce qu'il faut savoir avant de lancer vos travaux.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Pourquoi rénover à Montreuil en 2025 ?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Montreuil connaît une gentrification accélérée portée par sa scène artistique vivante et sa proximité immédiate avec Paris (20e arrondissement). Le marché immobilier y est dynamique : les propriétaires qui rénovent leurs appartements bénéficient d'une forte valorisation, souvent supérieure au coût des travaux engagés. La demande locative reste soutenue, notamment de la part de jeunes actifs et d'artistes attirés par les anciens ateliers reconvertis.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Rénover à Montreuil, c'est aussi profiter d'un tissu d'artisans expérimentés habitués aux contraintes du bâti ancien : immeubles des années 1900-1960, planchers anciens, configurations atypiques. Espace Design intervient régulièrement à Montreuil et maîtrise les spécificités locales pour des chantiers livrés dans les délais.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Nos prestations de rénovation à Montreuil</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Rénovation complète clé en main',
              'Réfection salle de bain',
              'Rénovation cuisine',
              'Pose de parquet et revêtements',
              'Peinture et finitions haut de gamme',
              'Optimisation des espaces',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Prix rénovation Montreuil 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1C1C1C] text-white"><th className="p-3 text-left">Type de travaux</th><th className="p-3 text-right">Prix indicatif</th></tr></thead>
              <tbody>
                {[
                  ['Rénovation complète', '1 000 – 1 500 €/m²'],
                  ['Salle de bain', '7 000 – 13 000 €'],
                  ['Cuisine', '8 000 – 15 000 €'],
                  ['Peinture intérieure', '40 – 60 €/m²'],
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
              { href: '/blog/prix-renovation-appartement-paris', label: 'Prix rénovation' },
              { href: '/blog', label: 'Tous les articles' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-xs border border-gray-200 rounded px-3 py-1.5 text-gray-600 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Montreuil</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
