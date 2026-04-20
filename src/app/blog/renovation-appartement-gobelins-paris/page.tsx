import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Gobelins Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-gobelins-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Gobelins Paris 13e : guide & prix 2025 | Espace Design',
  description: 'Rénover un appartement dans le quartier Gobelins (Paris 13e) : immeubles mixtes, rénovation énergétique, prix artisan 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-gobelins-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel type d\'immeubles trouve-t-on dans le quartier Gobelins à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le quartier Gobelins (Paris 13e) présente un parc immobilier très mixte : immeubles haussmanniens des années 1860-1910 autour de l'avenue des Gobelins, immeubles de rapport des années 1930-1950 en brique et béton, et résidences des années 1960-1970 à structure béton. Cette diversité implique des approches de rénovation très différentes selon le bâtiment, notamment pour l'isolation thermique et la mise aux normes électrique.",
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on bénéficier d\'aides pour rénover dans le 13e arrondissement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui. Les propriétaires occupants ou bailleurs du 13e arrondissement peuvent bénéficier de MaPrimeRénov' pour les travaux d'isolation (murs, combles, planchers), de remplacement de chaudière ou d'installation de pompe à chaleur. L'éco-PTZ (prêt à taux zéro) est cumulable. Pour les copropriétés, le dispositif MaPrimeRénov' Copropriété s'applique aux travaux collectifs. Un audit énergétique préalable est recommandé pour maximiser les aides.",
      },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte la rénovation d\'un appartement dans le quartier Gobelins ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dans le quartier Gobelins (Paris 13e), les prix de rénovation sont dans la moyenne parisienne : rafraîchissement (peinture, sol, luminaires) entre 350 et 700 €/m², rénovation d'une pièce (cuisine ou salle de bain) entre 800 et 1 500 €/m², rénovation complète (électricité, plomberie, sols, peintures) entre 1 500 et 2 500 €/m². Pour les immeubles des années 1970 avec une isolation insuffisante, prévoir un budget isolation supplémentaire de 80 à 150 €/m².",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Gobelins Paris 13e : guide & prix 2025 | Espace Design',
  description: 'Rénover un appartement dans le quartier Gobelins (Paris 13e) : immeubles mixtes, rénovation énergétique, prix artisan 2025.',
}

export default function ArticleGobelins() {
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
            Rénovation Appartement Gobelins Paris 13e : guide &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le quartier Gobelins, dans le 13e arrondissement, offre un parc immobilier varié où se côtoient immeubles haussmanniens, bâtiments d&apos;entre-deux-guerres et résidences des années 1970. Cette diversité en fait un secteur particulièrement intéressant pour la rénovation, avec des opportunités importantes en matière d&apos;isolation thermique et de modernisation.
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Un parc immobilier mixte : haussmannien, années 30 et résidences 70
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le quartier Gobelins s&apos;étend autour de l&apos;avenue des Gobelins et de la Manufacture royale des Gobelins, dans le 13e arrondissement. Son parc immobilier reflète plusieurs époques de construction parisienne : les immeubles haussmanniens du boulevard Saint-Marcel et de la rue Mouffetard, les immeubles en brique des années 1930-1950 et les résidences en béton des années 1960-1970 le long des axes plus récents.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Cette diversité impose des approches de rénovation très différentes. Un appartement haussmannien nécessitera une attention particulière aux moulures et au parquet, tandis qu&apos;un appartement des années 1970 demandera surtout un traitement en profondeur de l&apos;isolation thermique et une remise aux normes des installations.
            </p>
            <div className="space-y-3">
              {[
                'Immeubles haussmanniens : moulures, parquet chêne, cheminées — à restaurer plutôt que remplacer',
                'Bâtiments années 1930-1950 en brique : bonne inertie thermique, double vitrage souvent suffisant',
                'Résidences années 1960-1970 : isolation insuffisante — doublage intérieur ou isolation par l\'extérieur recommandés',
                'Installations électriques vétustes dans les immeubles antérieurs à 1970 — mise aux normes obligatoire',
                'Salles de bain souvent petites dans le bâti des années 50-70 — reconfiguration possible avec étude préalable',
                'Aides MaPrimeRénov\' disponibles pour isolation, chauffage et ventilation dans le 13e',
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
            Prix de rénovation dans le quartier Gobelins en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix de rénovation dans le 13e arrondissement sont légèrement inférieurs à ceux des arrondissements centraux, tout en maintenant un niveau de qualité élevé. Le potentiel de valorisation du quartier en fait un investissement rentable.
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
                  { niveau: 'Rafraîchissement', prestations: 'Peinture, sol, luminaires', prixM2: '350 – 700 €' },
                  { niveau: 'Rénovation partielle', prestations: 'Cuisine ou salle de bain', prixM2: '800 – 1 500 €' },
                  { niveau: 'Rénovation complète', prestations: 'Électricité, plomberie, sols, peintures', prixM2: '1 500 – 2 500 €' },
                  { niveau: 'Rénovation + isolation', prestations: 'Complète + doublage thermique et phonique', prixM2: '2 000 – 3 000 €' },
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
              { href: '/blog/renovation-appartement-paris-13e', title: 'Rénovation appartement Paris 13e' },
              { href: '/blog/isolation-thermique-appartement-paris', title: 'Isolation thermique appartement Paris' },
              { href: '/blog/renovation-appartement-montparnasse-paris', title: 'Rénovation appartement Montparnasse Paris' },
              { href: '/blog/renovation-energetique-appartement-paris', title: 'Rénovation énergétique appartement Paris' },
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
          Vous rénovez un appartement dans le quartier Gobelins ?
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Devis gratuit et détaillé sous 48h. Déplacement sans engagement dans le 13e arrondissement.
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
