import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Issy-les-Moulineaux', item: 'https://espacedesignparis.fr/blog/renovation-appartement-issy-les-moulineaux' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Issy-les-Moulineaux — Guide complet 2025",
  description: "Rénovez votre appartement à Issy-les-Moulineaux avec Espace Design : cuisine, salle de bain, parquet. Devis gratuit sous 48h, artisan qualifié RGE.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-issy-les-moulineaux' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix moyen d\'une rénovation d\'appartement à Issy-les-Moulineaux ?',
      acceptedAnswer: { '@type': 'Answer', text: 'À Issy-les-Moulineaux, le coût d\'une rénovation complète varie entre 800 et 1 500 €/m² selon l\'état du bien et les prestations choisies. Un appartement de 50 m² revient généralement entre 40 000 et 75 000 €.' },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps dure une rénovation à Issy-les-Moulineaux ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pour un appartement de taille standard (40 à 80 m²), comptez 4 à 10 semaines selon l\'ampleur des travaux. Une rénovation partielle (cuisine ou salle de bain) peut être réalisée en 2 à 3 semaines.' },
    },
    {
      '@type': 'Question',
      name: 'Intervenez-vous dans les résidences récentes et les immeubles des années 70 à Issy ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, Espace Design intervient dans tous types de logements à Issy-les-Moulineaux : résidences neuves, appartements des années 70-80 et immeubles haussmanniens. Chaque chantier fait l\'objet d\'un diagnostic préalable.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Issy-les-Moulineaux (92) | Espace Design',
  description: 'Rénovez votre appartement à Issy-les-Moulineaux avec Espace Design : cuisine, salle de bain, parquet. Devis gratuit sous 48h, artisan qualifié RGE.',
}

export default function RenovationIssy() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement à Issy-les-Moulineaux</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Ville dynamique du 92, Issy-les-Moulineaux attire cadres et familles. Donnez une nouvelle vie à votre appartement avec nos artisans qualifiés.</p>
      </section>
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Rénover à Issy-les-Moulineaux : contexte et enjeux</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Issy-les-Moulineaux est l'une des villes les plus dynamiques des Hauts-de-Seine, portée par un tissu tertiaire dense et une proximité immédiate avec Paris. Le parc immobilier est très varié : résidences modernes livrées dans les années 2000 autour du fort d'Issy, copropriétés des années 70-80 dans les quartiers Centre et Corentin Celton, et quelques immeubles anciens près du bord de Seine. Cette diversité impose à nos équipes une lecture précise de chaque bien avant de démarrer les travaux.</p>
          <p className="text-gray-600 leading-relaxed mb-6">Espace Design réalise des rénovations complètes et partielles à Issy-les-Moulineaux depuis plusieurs années. Cuisine ouverte sur séjour, salle de bain tendance, pose de parquet massif ou stratifié, reprise des cloisons — chaque chantier est mené avec soin, dans le respect des délais et du budget convenu. Nous coordonnons tous les corps de métier pour vous offrir un interlocuteur unique.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Rénovation cuisine ouverte et fermée',
              'Salle de bain et douche à l\'italienne',
              'Pose de parquet bois et stratifié',
              'Reprise de cloisons et création d\'espaces',
              'Peinture et revêtements muraux',
              'Électricité et plomberie mise aux normes',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2"><CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" /><span className="text-sm text-gray-600">{p}</span></div>
            ))}
          </div>
          <h2 className="font-display text-xl font-semibold text-[#1C1C1C] mt-6 mb-4">FAQ</h2>
          <div className="space-y-3">
            {schemaFAQ.mainEntity.map((faq) => (
              <div key={faq.name} className="border border-gray-200 rounded p-3">
                <p className="font-semibold text-[#1C1C1C] mb-1 text-sm">{faq.name}</p>
                <p className="text-xs text-gray-600">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Issy-les-Moulineaux</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
