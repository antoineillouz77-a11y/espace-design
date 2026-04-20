import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: "Rénovation appartement Saint-Georges Paris", item: 'https://espacedesignparis.fr/blog/renovation-appartement-saint-georges-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Saint-Georges Paris 9e — Haussmannien charme, devis gratuit 48h",
  description: "Rénovation appartement au quartier Saint-Georges (Paris 9e) : immeubles haussmanniens, moulures, parquet, peinture. Artisan qualifié, devis sous 48h.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-02-10',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-saint-georges-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le coût d'une rénovation au quartier Saint-Georges Paris 9e ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Au quartier Saint-Georges (9e arrondissement), la rénovation d'un appartement haussmannien est estimée entre 900 et 1 800 €/m² selon l'ampleur des travaux. La restauration des éléments d'époque (parquet, moulures, cheminées) représente une part significative du budget.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment préserver le cachet haussmannien d'un appartement à Saint-Georges ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour préserver le cachet de ces appartements, Espace Design travaille avec des artisans spécialisés : staff-plâtriers pour les moulures, parqueteurs pour la restauration des lames d'époque, peintres maîtrisant les enduits et peintures à la chaux. Chaque intervention respecte l'architecture d'origine.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il une autorisation de la copropriété pour rénover à Saint-Georges ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les travaux touchant aux parties communes (cage d'escalier, façade, plancher porteur) nécessitent une autorisation de l'assemblée générale de copropriété. Espace Design vous accompagne dans la constitution du dossier et dans les démarches auprès du syndic.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Rénovation appartement Saint-Georges Paris 9e — Haussmannien charme | Espace Design",
  description: "Rénovation appartement au quartier Saint-Georges (Paris 9e) : moulures, parquet, peinture, menuiseries. Artisan qualifié, assurance décennale. Devis sous 48h.",
}

export default function RenovationSaintGeorgesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
          Rénovation appartement Saint-Georges — Paris 9e
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Spécialiste de la rénovation dans le 9e arrondissement : appartements haussmanniens de caractère, moulures, parquets anciens, hauteurs sous plafond. Devis gratuit sous 48h.
        </p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Saint-Georges : le charme discret du 9e arrondissement
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Le quartier Saint-Georges, au coeur du 9e arrondissement, est l'un des territoires les plus préservés de l'architecture haussmannienne parisienne. Ses immeubles de pierre de taille aux façades ordonnancées abritent des appartements aux volumes généreux, aux parquets en point de Hongrie et aux plafonds ornés de corniches et de rosaces. Rénover dans ce quartier, c'est assumer la responsabilité de conserver un patrimoine architectural du Second Empire tout en apportant le confort contemporain.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Espace Design intervient régulièrement dans le 9e arrondissement pour des rénovations complètes ou partielles : remise en état de parquets anciens, restauration de moulures et corniches, reprise d'enduits, remplacement des menuiseries dans le respect de l'existant, et modernisation des installations électriques et sanitaires. Chaque chantier est conduit avec soin, dans le respect du règlement de copropriété et des exigences patrimoniales de l'immeuble.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">
            Nos prestations dans le quartier Saint-Georges
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              "Restauration de moulures et rosaces de plafond",
              "Rénovation et vitrification de parquet ancien",
              "Peinture décorative et enduits à la chaux",
              "Menuiseries intérieures sur mesure",
              "Mise aux normes électrique et plomberie",
              "Isolation thermique et phonique respectueuse du bâti",
            ].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">FAQ — Saint-Georges Paris 9e</h2>
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
              { href: '/blog/renovation-appartement-paris-9e', label: 'Paris 9e' },
              { href: '/blog/renovation-appartement-haussmannien-paris', label: 'Appartement haussmannien' },
              { href: '/blog', label: 'Tous les articles' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-xs border border-gray-200 rounded px-3 py-1.5 text-gray-600 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Saint-Georges</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">
            Devis gratuit <ArrowRight size={16} />
          </Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors">
            <Phone size={16} />06 11 78 38 67
          </a>
        </div>
      </section>
    </>
  )
}
