import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Opéra Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-opera-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Opéra Paris 9e 2e — Haussmannien de prestige, devis gratuit",
  description: "Rénovation appartement au quartier Opéra (Paris 9e/2e) : moulures, corniches, parquet Versailles, peinture haut de gamme. Immeubles de prestige. Devis sous 48h.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-opera-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation d\'appartement au quartier Opéra ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Au quartier Opéra, la rénovation d\'un appartement haussmannien de prestige se situe entre 1 000 et 2 000 €/m². La restauration de moulures, corniches et parquet Versailles représente à elle seule 20 à 30 % du budget global selon l\'état de conservation du bien.' },
    },
    {
      '@type': 'Question',
      name: 'Comment restaurer les moulures d\'un appartement haussmannien près de l\'Opéra ?',
      acceptedAnswer: { '@type': 'Answer', text: 'La restauration des moulures passe par un nettoyage soigné, un rebouchage des fissures au plâtre fin, puis une peinture à la chaux ou en glycéro selon le rendu souhaité. Espace Design collabore avec des staff-plâtriers spécialisés dans la reproduction à l\'identique des ornements anciens.' },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps faut-il pour rénover un appartement de prestige au quartier Opéra ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pour un appartement haussmannien de 80 à 120 m² au quartier Opéra, la durée d\'un chantier complet est estimée entre 10 et 16 semaines, selon l\'ampleur des travaux de restauration patrimoniale et la disponibilité des artisans spécialisés.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Opéra Paris 9e 2e — Haussmannien prestige | Espace Design',
  description: 'Rénovation appartement au quartier Opéra (Paris 9e/2e) : moulures, corniches, parquet Versailles, peinture haut de gamme. Immeubles de prestige. Devis sous 48h.',
}

export default function RenovationOperaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement Opéra — Paris 9e &amp; 2e</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Spécialiste de la rénovation des appartements haussmanniens de prestige au quartier Opéra : moulures, parquet Versailles, hauteurs sous plafond 3m+. Devis sous 48h.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Le quartier Opéra : l'haussmannien dans toute sa splendeur</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Le quartier Opéra, aux frontières des 9e et 2e arrondissements, abrite certains des plus beaux immeubles haussmanniens de Paris. Avec des hauteurs sous plafond dépassant souvent 3 mètres, des moulures d'époque et des parquets en point de Hongrie ou de Versailles, ces appartements de prestige demandent une approche de rénovation aussi fine que respectueuse du patrimoine.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Espace Design intervient dans ce quartier pour des projets de rénovation de haut vol : restauration de moulures et corniches, réfection de parquet Versailles, peintures à la chaux ou en teintes profondes, installation de menuiseries sur mesure. Notre équipe travaille avec des artisans spécialisés dans le patrimoine du XIXe siècle pour garantir une finition à la hauteur de ces adresses exceptionnelles.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Nos expertises au quartier Opéra</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {['Restauration de moulures et corniches','Réfection de parquet point de Versailles','Peinture haut de gamme à la chaux','Menuiseries intérieures sur mesure','Rénovation cheminées et manteaux','Isolation thermique sans altérer le bâti'].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Prix rénovation Opéra 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1C1C1C] text-white"><th className="p-3 text-left">Type de travaux</th><th className="p-3 text-right">Prix indicatif</th></tr></thead>
              <tbody>
                {[
                  ['Restauration moulures et corniches (par pièce)', '1 500 – 4 000 €'],
                  ['Réfection parquet Versailles (au m²)', '120 – 250 €/m²'],
                  ['Peinture haut de gamme grande hauteur', '800 – 2 000 €/pièce'],
                  ['Rénovation complète appartement (au m²)', '1 000 – 2 000 €/m²'],
                ].map(([label, price]) => (
                  <tr key={label} className="border-b border-gray-100"><td className="p-3 text-gray-600">{label}</td><td className="p-3 text-right font-medium">{price}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">FAQ — Opéra</h2>
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet au quartier Opéra</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
