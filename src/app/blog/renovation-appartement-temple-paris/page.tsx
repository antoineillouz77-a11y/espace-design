import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Temple Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-temple-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Temple Paris 3e 4e : guide complet 2025 | Espace Design',
  description: 'Rénover un appartement dans le quartier Temple (Paris 3e-4e) : immeubles anciens, contraintes patrimoine, prix artisan 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-temple-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quelles sont les spécificités des appartements du quartier Temple à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le quartier Temple (Paris 3e et 4e) regroupe principalement des immeubles du XVIIIe et XIXe siècle, souvent classés en secteur sauvegardé. On y trouve de nombreux hôtels particuliers reconvertis en appartements, avec des hauteurs sous plafond importantes (3 à 4,5 m), des moulures d'époque, des parquets point de Hongrie et des murs en pierre de taille. Les travaux touchant à l'extérieur nécessitent l'accord de l'Architecte des Bâtiments de France.",
      },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte la rénovation d\'un appartement dans le quartier Temple ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dans le quartier Temple (3e-4e arrondissements), les prix de rénovation varient selon l'ampleur des travaux : rafraîchissement simple (peinture, sol) entre 400 et 800 €/m², rénovation partielle (cuisine ou salle de bain) entre 900 et 1 600 €/m², rénovation complète entre 1 800 et 2 800 €/m². La restauration des éléments patrimoniaux (moulures, parquet ancien, cheminées) peut porter le budget au-delà de 3 000 €/m².",
      },
    },
    {
      '@type': 'Question',
      name: 'Faut-il une autorisation pour rénover dans le quartier Temple à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour les travaux intérieurs sans modification de la structure ou de l'aspect extérieur du bâtiment, aucune autorisation spécifique n'est requise dans la plupart des cas. En revanche, toute modification visible depuis la rue (ravalement, remplacement de fenêtres, création d'ouverture) nécessite une déclaration préalable et, dans le secteur sauvegardé, l'accord de l'ABF. Un permis de construire est obligatoire pour les travaux modifiant la structure porteuse ou augmentant la surface.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Temple Paris 3e 4e : guide complet 2025 | Espace Design',
  description: 'Rénover un appartement dans le quartier Temple (Paris 3e-4e) : immeubles anciens, contraintes patrimoine, prix artisan 2025.',
}

export default function ArticleTemple() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
      />

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-12 bg-[#1C1C1C]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#D4AF37] text-[10px] font-light uppercase tracking-[0.25em] mb-4">
            Quartiers
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Appartement Temple Paris 3e 4e : guide complet 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le quartier Temple, à cheval sur les 3e et 4e arrondissements, est l&apos;un des secteurs les plus prisés de Paris pour la rénovation de caractère. Hôtels particuliers reconvertis, cours pavées, moulures d&apos;époque et parquets point de Hongrie : chaque chantier est unique et demande une expertise adaptée au bâti ancien.
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Le bâti du quartier Temple : entre hôtels particuliers et immeubles du XIXe siècle
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le quartier Temple concentre certains des immeubles les plus anciens de Paris. Les hôtels particuliers reconvertis en appartements y côtoient des immeubles haussmanniens tardifs et des bâtiments du XIXe siècle aux façades en pierre de taille. Les hauteurs sous plafond sont généralement élevées — de 3 à 4,5 m selon les niveaux — ce qui offre de belles opportunités pour créer des mezzanines ou valoriser les volumes.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              La rénovation dans ce quartier implique souvent de composer avec des éléments patrimoniaux à conserver : cheminées en marbre, moulures au plâtre, parquets en point de Hongrie, cages d&apos;escalier classées. Un artisan expérimenté sur le bâti parisien ancien saura intégrer ces contraintes dans le planning et le budget dès la phase de diagnostic.
            </p>
            <div className="space-y-3">
              {[
                'Moulures et corniches à restaurer ou préserver selon le règlement de copropriété',
                'Parquets point de Hongrie en chêne massif — ponçage et vitrification recommandés avant tout remplacement',
                'Cheminées en marbre classées — modification soumise à accord de la copropriété',
                'Murs porteurs en pierre de taille — toute ouverture nécessite une étude de structure',
                'Hauteurs sous plafond importantes — opportunité pour mezzanine ou rangements en hauteur',
                'Installations électriques et plomberie souvent vétustes dans les immeubles antérieurs à 1950',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                  <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section prix */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix de rénovation dans le quartier Temple en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les appartements du quartier Temple sont souvent en bon état structurel mais nécessitent une mise aux normes électrique et plomberie ainsi que la restauration des éléments de caractère. Voici les fourchettes de prix constatées en 2025.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Niveau</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prestations</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { niveau: 'Rafraîchissement', prestations: 'Peinture, sol, luminaires', prixM2: '400 – 800 €' },
                  { niveau: 'Rénovation partielle', prestations: 'Cuisine ou salle de bain uniquement', prixM2: '900 – 1 600 €' },
                  { niveau: 'Rénovation complète', prestations: 'Électricité, plomberie, cuisine, SDB, sols, peintures', prixM2: '1 800 – 2 800 €' },
                  { niveau: 'Restauration patrimoine', prestations: 'Moulures, parquet, cheminées + finitions nobles', prixM2: '2 800 – 3 500 €' },
                ].map((row, i) => (
                  <tr key={row.niveau} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.niveau}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.prestations}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prixM2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-6 text-center">Questions fréquentes</p>
          <div className="space-y-6">
            {schemaFaq.mainEntity.map((q) => (
              <div key={q.name} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-3">{q.name}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{q.acceptedAnswer.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voir aussi */}
      <section className="py-12 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Voir aussi</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/renovation-appartement-paris', title: 'Rénovation appartement Paris' },
              { href: '/blog/renovation-appartement-marais-paris', title: 'Rénovation appartement Marais Paris' },
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénovation appartement haussmannien Paris' },
              { href: '/blog/renovation-appartement-paris-3e', title: 'Rénovation appartement Paris 3e' },
              { href: '/blog/renovation-appartement-paris-4e', title: 'Rénovation appartement Paris 4e' },
            ].map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="bg-white border border-gray-100 rounded-lg p-4 hover:border-[#D4AF37]/40 transition-colors group"
              >
                <span className="text-sm text-[#1C1C1C] font-light group-hover:text-[#B8960C] transition-colors">{a.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#D4AF37] text-center px-4">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-4">
          Vous rénovez un appartement dans le quartier Temple ?
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Devis gratuit et détaillé sous 48h. Déplacement sans engagement dans le 3e et le 4e arrondissement.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 bg-[#1C1C1C] text-white px-7 py-3.5 rounded font-light text-sm tracking-wide hover:bg-black transition-colors"
          >
            Devis gratuit <ArrowRight size={13} />
          </Link>
          <a
            href="tel:+33611783867"
            className="flex items-center justify-center gap-2 border border-[#1C1C1C]/30 text-[#1C1C1C] px-7 py-3.5 rounded font-light text-sm tracking-wide hover:border-[#1C1C1C] transition-colors"
          >
            <Phone size={14} />
            06 11 78 38 67
          </a>
        </div>
      </section>
    </>
  )
}
