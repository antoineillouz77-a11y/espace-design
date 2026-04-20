import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Châtelet Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-chatelet-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Châtelet-Les Halles Paris 1er 4e — Centre ville, finitions premium",
  description: "Rénovation appartement à Châtelet-Les Halles (Paris 1er/4e) : centre de Paris, accès chantier maîtrisé, finitions premium. Artisan expérimenté. Devis gratuit sous 48h.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-chatelet-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le coût d\'une rénovation d\'appartement à Châtelet-Les Halles ?',
      acceptedAnswer: { '@type': 'Answer', text: 'À Châtelet-Les Halles, le coût d\'une rénovation complète se situe entre 900 et 1 800 €/m². La densité du quartier peut engendrer des surcoûts logistiques (stationnement, accès chantier), que nos équipes anticipent dès l\'établissement du devis.' },
    },
    {
      '@type': 'Question',
      name: 'Comment gérer l\'accès chantier dans Paris centre (Châtelet) ?',
      acceptedAnswer: { '@type': 'Answer', text: 'L\'accès chantier en plein coeur de Paris nécessite une organisation rigoureuse : demande d\'autorisation de voirie, benne spécifique, livraisons en horaires décalés. Espace Design gère ces contraintes logistiques de A à Z pour vous éviter toute démarche administrative.' },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps dure un chantier de rénovation à Châtelet ?',
      acceptedAnswer: { '@type': 'Answer', text: 'La durée d\'un chantier à Châtelet est similaire à celle des autres quartiers parisiens centraux : 6 à 14 semaines pour une rénovation complète. Les contraintes d\'accès peuvent allonger légèrement les délais de livraison des matériaux, ce que nous intégrons dès le planning initial.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Châtelet-Les Halles Paris 1er 4e — Centre ville | Espace Design',
  description: 'Rénovation appartement à Châtelet-Les Halles (Paris 1er/4e) : centre de Paris, accès chantier maîtrisé, finitions premium. Artisan expérimenté. Devis gratuit sous 48h.',
}

export default function RenovationChateletPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement Châtelet — Paris 1er &amp; 4e</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Rénovation en plein coeur de Paris : Châtelet-Les Halles, accès chantier maîtrisé, finitions premium. Devis gratuit sous 48h.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Châtelet-Les Halles : rénover au coeur de Paris</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Le secteur Châtelet-Les Halles, au croisement des 1er et 4e arrondissements, est l'un des coeurs battants de Paris. Entre appartements anciens du Marais, immeubles post-Haussmann et logements contemporains issus des grands travaux des années 80, la diversité du bâti y est totale. Rénover dans ce périmètre ultra-central demande une logistique sans faille et des finitions à la hauteur des exigences parisiennes.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Espace Design possède une solide expérience des chantiers en Paris centre : gestion des autorisations de voirie, livraisons en horaires décalés, protection des parties communes. Nos artisans qualifiés interviennent sur tous types de biens, du studio entièrement rénové à l'appartement familial avec travaux structurants, avec des finitions premium adaptées au standing des adresses du secteur.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Ce que nous réalisons à Châtelet-Les Halles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {['Rénovation complète appartement ancien','Gestion autorisations voirie et copropriété','Finitions premium marbre, bois, métal','Rénovation salle de bain et cuisine','Optimisation petits espaces parisiens','Mise aux normes électrique et plomberie'].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Prix rénovation Châtelet 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1C1C1C] text-white"><th className="p-3 text-left">Type de travaux</th><th className="p-3 text-right">Prix indicatif</th></tr></thead>
              <tbody>
                {[
                  ['Rénovation studio (25 – 35 m²)', '20 000 – 45 000 €'],
                  ['Rénovation salle de bain premium', '7 000 – 15 000 €'],
                  ['Rénovation cuisine ouverte', '10 000 – 25 000 €'],
                  ['Rénovation complète appartement (au m²)', '900 – 1 800 €/m²'],
                ].map(([label, price]) => (
                  <tr key={label} className="border-b border-gray-100"><td className="p-3 text-gray-600">{label}</td><td className="p-3 text-right font-medium">{price}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">FAQ — Châtelet</h2>
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
              { href: '/blog/renovation-appartement-haussmannien-paris', label: 'Appartement haussmannien' },
              { href: '/blog', label: 'Tous les articles' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-xs border border-gray-200 rounded px-3 py-1.5 text-gray-600 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Châtelet</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
