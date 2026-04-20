import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Javel Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-javel-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Javel André Citroën Paris 15e : guide 2025 | Espace Design',
  description: 'Rénover un appartement dans le quartier Javel / André Citroën (Paris 15e) : immeubles années 70-80, neuf, prix artisan 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-javel-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quels sont les types d\'appartements à rénover dans le quartier Javel ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le quartier Javel / André Citroën (Paris 15e) est dominé par des immeubles construits entre les années 1960 et 1990, époque de la reconversion des anciennes usines Citroën. On y trouve principalement des résidences en béton préfabriqué, des tours et barres d'habitation, ainsi que des programmes plus récents autour du parc André Citroën. Ces biens nécessitent souvent une isolation thermique et phonique, une mise aux normes électrique et une modernisation complète des équipements.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quelles sont les contraintes de rénovation dans les immeubles des années 70 du 15e ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les immeubles des années 1970-1980 du quartier Javel présentent plusieurs contraintes spécifiques : structure en béton banché avec murs porteurs difficiles à ouvrir, façades en béton avec ponts thermiques importants, installations électriques en aluminium (à remplacer obligatoirement), plomberie en acier galvanisé (risque de corrosion), isolation phonique inter-appartements insuffisante. La rénovation complète de ce type de bien coûte entre 1 400 et 2 200 €/m².",
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on abattre des murs dans un appartement en béton du 15e arrondissement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dans les immeubles en béton des années 1970, la quasi-totalité des murs intérieurs peuvent être porteurs. Avant tout abattage, une étude de structure par un bureau d'études est indispensable. Si l'abattage est possible, il nécessite la pose d'une poutre IPN et des travaux de reprise en sous-oeuvre. Le coût d'un abattage de mur porteur en béton varie entre 10 000 et 20 000 € selon l'épaisseur et la portée. L'accord de la copropriété est toujours requis.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Javel André Citroën Paris 15e : guide 2025 | Espace Design',
  description: 'Rénover un appartement dans le quartier Javel / André Citroën (Paris 15e) : immeubles années 70-80, neuf, prix artisan 2025.',
}

export default function ArticleJavel() {
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
            Rénovation Appartement Javel &amp; André Citroën Paris 15e : guide 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le quartier Javel, autour du parc André Citroën dans le 15e arrondissement, est marqué par une architecture des décennies 1960-1990 issue de la reconversion des anciennes usines. Towers, résidences en béton, programmes récents en bord de Seine : ce guide vous aide à aborder votre projet de rénovation avec les bons repères techniques et budgétaires.
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Immeubles des années 70-90 : les enjeux spécifiques de la rénovation
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le quartier Javel concentre un parc immobilier essentiellement issu des décennies 1960-1990, époque à laquelle les anciennes usines Citroën ont été progressivement démolies pour laisser place à de grands ensembles résidentiels. Ces immeubles en béton préfabriqué ou banché présentent des caractéristiques techniques très différentes du bâti haussmannien : structure rigide avec murs porteurs intérieurs, façades peu isolées, installations techniques vieillissantes.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              La bonne nouvelle : ces appartements offrent souvent de beaux volumes, des surfaces généreuses et une excellente orientation grâce aux grandes baies vitrées caractéristiques de l&apos;architecture de cette époque. Une rénovation bien menée peut transformer radicalement un appartement des années 1970 en un intérieur contemporain lumineux et performant sur le plan énergétique.
            </p>
            <div className="space-y-3">
              {[
                'Structure béton : identifier les murs porteurs avant tout projet d\'ouverture',
                'Électricité aluminium des années 70 : remplacement obligatoire pour la sécurité',
                'Plomberie acier galvanisé : corrosion fréquente, remplacement recommandé en rénovation complète',
                'Isolation phonique insuffisante entre appartements — doublage phonique recommandé',
                'Fenêtres simple vitrage dans beaucoup de résidences — remplacement prioritaire',
                'Ventilation naturelle par gaines collectives — vérifier l\'état avant toute modification',
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
            Prix de rénovation dans le quartier Javel en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les appartements du quartier Javel offrent un bon rapport surface/prix à l&apos;achat. Le budget rénovation doit cependant intégrer les spécificités des bâtiments en béton, notamment pour la mise aux normes électrique et l&apos;isolation.
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
                  { niveau: 'Rafraîchissement', prestations: 'Peinture, revêtements de sol, luminaires', prixM2: '350 – 700 €' },
                  { niveau: 'Rénovation partielle', prestations: 'Cuisine ou salle de bain', prixM2: '800 – 1 500 €' },
                  { niveau: 'Rénovation complète', prestations: 'Électricité, plomberie, sols, peintures', prixM2: '1 400 – 2 200 €' },
                  { niveau: 'Rénovation + isolation', prestations: 'Complète + doublage thermique et phonique', prixM2: '1 800 – 2 800 €' },
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
              { href: '/blog/renovation-appartement-paris-15e', title: 'Rénovation appartement Paris 15e' },
              { href: '/blog/isolation-phonique-appartement-paris', title: 'Isolation phonique appartement Paris' },
              { href: '/blog/mur-porteur-paris', title: 'Abattage mur porteur Paris' },
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
          Vous rénovez un appartement dans le quartier Javel ?
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Devis gratuit et détaillé sous 48h. Déplacement sans engagement dans le 15e arrondissement.
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
