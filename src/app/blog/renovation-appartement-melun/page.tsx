import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Melun', item: 'https://espacedesignparis.fr/blog/renovation-appartement-melun' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Melun (77) — Guide complet 2025",
  description: "Guide rénovation appartement à Melun : tarifs 2025, artisans Seine-et-Marne, aides disponibles et conseils pour transformer votre bien dans la préfecture du 77.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-melun' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le budget moyen pour rénover à Melun ?',
      acceptedAnswer: { '@type': 'Answer', text: 'À Melun, une rénovation complète est estimée entre 900 et 1 300 €/m². Les prix y sont légèrement inférieurs à la petite couronne parisienne, ce qui permet d\'engager des travaux complets pour un budget maîtrisé. Une salle de bain revient entre 6 000 et 11 000 €.' },
    },
    {
      '@type': 'Question',
      name: 'Melun est-elle bien reliée à Paris pour les artisans ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, Melun est accessible via le RER D depuis Paris-Gare-de-Lyon en moins d\'une heure. Espace Design se déplace régulièrement sur Melun et ses environs pour des chantiers de rénovation, avec les mêmes standards de qualité qu\'en région parisienne.' },
    },
    {
      '@type': 'Question',
      name: 'Y a-t-il des aides spécifiques pour la rénovation à Melun ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Les dispositifs nationaux s\'appliquent (MaPrimeRénov\', Éco-PTZ, CEE). La communauté d\'agglomération Melun Val-de-Seine peut proposer des aides complémentaires pour la rénovation énergétique. Renseignez-vous auprès du service urbanisme de la mairie.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Melun (77) — Prix & Artisans 2025 | Espace Design',
  description: 'Guide rénovation appartement à Melun : tarifs 2025, artisans Seine-et-Marne, aides disponibles et conseils pour transformer votre bien dans la préfecture du 77.',
}

export default function RenovationMelun() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement à Melun (77)</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Préfecture de Seine-et-Marne, Melun séduit par son cadre de vie agréable sur les bords de Seine et ses prix immobiliers accessibles. Espace Design vous propose des rénovations complètes à prix justes, livrées dans les délais.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Melun, une ville à fort potentiel de rénovation</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Melun dispose d'un parc immobilier ancien particulièrement intéressant pour les investisseurs et propriétaires en quête d'espaces à valoriser. Centre-ville historique avec ses immeubles de caractère, quartiers résidentiels de l'après-guerre, résidences plus récentes : le profil de Melun couvre tous les besoins. Les prix d'achat y sont nettement inférieurs à Paris, permettant d'engager des rénovations ambitieuses tout en restant dans une enveloppe globale raisonnable.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Espace Design intervient sur Melun et toute la Seine-et-Marne pour des chantiers de rénovation partielle ou complète. Nos équipes maîtrisent les contraintes du bâti ancien (planchers en bois, murs en pierre, cloisons doublées) et apportent des solutions techniques éprouvées pour chaque configuration.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Nos prestations de rénovation à Melun</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Rénovation complète clé en main',
              'Parquet bois massif et stratifié',
              'Salle de bain et salle d\'eau',
              'Cuisine ouverte ou fermée',
              'Peinture et finitions soignées',
              'Plomberie et électricité aux normes',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Prix rénovation Melun 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1C1C1C] text-white"><th className="p-3 text-left">Type de travaux</th><th className="p-3 text-right">Prix indicatif</th></tr></thead>
              <tbody>
                {[
                  ['Rénovation complète', '900 – 1 300 €/m²'],
                  ['Salle de bain', '6 000 – 11 000 €'],
                  ['Cuisine', '7 000 – 13 000 €'],
                  ['Parquet (pose comprise)', '50 – 75 €/m²'],
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Melun</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
