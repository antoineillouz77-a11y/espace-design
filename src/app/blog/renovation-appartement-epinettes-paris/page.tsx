import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Les Épinettes Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-epinettes-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Les Épinettes Paris 17e : guide & prix 2025 | Espace Design',
  description: "Rénover un appartement dans le quartier des Épinettes (Paris 17e) : immeubles haussmanniens et ouvriers, mixité architecturale, prix 2025.",
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-epinettes-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quels types de logements trouve-t-on dans le quartier des Épinettes ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le quartier des Épinettes (Paris 17e, autour de la rue des Épinettes et de l'avenue de Clichy) présente une grande mixité architecturale. On y trouve des immeubles haussmanniens sur les axes principaux, des immeubles ouvriers des années 1880-1910 en brique dans les rues transversales, des collectifs des années 1950-1960 et quelques programmes plus récents. Cette diversité se traduit par une grande variété de configurations d'appartements et de budgets de rénovation.",
      },
    },
    {
      '@type': 'Question',
      name: 'Le quartier des Épinettes est-il un bon investissement pour une rénovation ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui. Le quartier des Épinettes bénéficie d'une gentrification progressive depuis les années 2010, portée par la proximité des Batignolles et du nouveau quartier Clichy-Batignolles. Les prix d'achat restent inférieurs à ceux des Batignolles, ce qui laisse une bonne marge pour investir dans une rénovation de qualité et valoriser le bien à la revente ou en location. Un appartement bien rénové dans les Épinettes peut prendre 15 à 25 % de valeur par rapport à un bien non rénové.",
      },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte la rénovation d\'un appartement dans les Épinettes ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dans le quartier des Épinettes (Paris 17e), les prix de rénovation sont dans la fourchette moyenne basse parisienne, ce qui en fait un secteur attractif pour l'investissement locatif : rafraîchissement entre 350 et 700 €/m², rénovation partielle (cuisine ou salle de bain) entre 800 et 1 500 €/m², rénovation complète entre 1 400 et 2 300 €/m². Pour les immeubles en brique des années 1900, prévoir un budget isolation supplémentaire de 60 à 120 €/m².",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Les Épinettes Paris 17e : guide & prix 2025 | Espace Design',
  description: "Rénover un appartement dans le quartier des Épinettes (Paris 17e) : immeubles haussmanniens et ouvriers, mixité architecturale, prix 2025.",
}

export default function ArticleEpinettes() {
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
            Rénovation Appartement Les Épinettes Paris 17e : guide &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le quartier des Épinettes, dans le 17e arrondissement, est l&apos;un des secteurs en pleine mutation de Paris Nord-Ouest. Entre immeubles ouvriers de la fin du XIXe siècle et haussmannien tardif, il offre un parc immobilier diversifié et des opportunités de rénovation intéressantes pour les propriétaires et investisseurs.
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Un quartier populaire en pleine transformation
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le quartier des Épinettes occupe la partie nord-est du 17e arrondissement, entre l&apos;avenue de Clichy et la porte de Clichy. Longtemps considéré comme l&apos;arrière-pays du 17e bourgeois, il connaît depuis une dizaine d&apos;années une transformation notable, portée par la rénovation du quartier Clichy-Batignolles et l&apos;arrivée de populations nouvelles attirées par des prix encore accessibles.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Son parc immobilier est très hétérogène : les grandes artères (avenue de Clichy, rue Cardinet) sont bordées d&apos;immeubles haussmanniens, tandis que les rues perpendiculaires abritent des immeubles ouvriers en brique rouge des années 1880-1910, avec des appartements de petite surface mais souvent rénovables avec un bon rapport coût/valorisation. Les immeubles des années 1950-1970 complètent l&apos;offre avec des appartements fonctionnels mais moins bien isolés.
            </p>
            <div className="space-y-3">
              {[
                'Immeubles ouvriers en brique : murs épais, bonne inertie, mais isolation thermique à améliorer',
                'Petites surfaces fréquentes (30-55 m²) — optimisation de l\'espace essentielle',
                'Parquets en sapin sous les moquettes dans les immeubles des années 1900 — à restaurer',
                'Salles de bain souvent réduites — reconfiguration possible en déplaçant des cloisons légères',
                'Électricité vétuste dans les immeubles antérieurs à 1960 — mise aux normes prioritaire',
                'Potentiel locatif fort grâce à la proximité des transports (métro 13, tram T3b)',
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
            Prix de rénovation dans les Épinettes en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le quartier des Épinettes présente un excellent rapport coût de rénovation / potentiel de valorisation. Les prix d&apos;achat encore modérés permettent d&apos;absorber un budget rénovation complet tout en restant rentable à la revente ou en location.
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
                  { niveau: 'Rénovation complète', prestations: 'Électricité, plomberie, sols, peintures', prixM2: '1 400 – 2 300 €' },
                  { niveau: 'Rénovation investisseur', prestations: 'Complète + optimisation surface + isolation', prixM2: '1 800 – 2 600 €' },
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
              { href: '/blog/renovation-appartement-paris-17e', title: 'Rénovation appartement Paris 17e' },
              { href: '/blog/renovation-appartement-batignolles-paris', title: 'Rénovation appartement Batignolles Paris' },
              { href: '/blog/renovation-investissement-locatif-paris', title: 'Rénovation investissement locatif Paris' },
              { href: '/blog/isolation-thermique-appartement-paris', title: 'Isolation thermique appartement Paris' },
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
          Vous rénovez un appartement dans les Épinettes ?
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Devis gratuit et détaillé sous 48h. Déplacement sans engagement dans le 17e arrondissement.
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
