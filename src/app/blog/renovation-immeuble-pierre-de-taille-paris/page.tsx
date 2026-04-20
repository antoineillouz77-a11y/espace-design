import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Immeuble Pierre de Taille Paris — Contraintes & Prix 2025 | Espace Design',
  description:
    "Rénover un appartement dans un immeuble en pierre de taille à Paris : contraintes techniques, préservation des éléments d'origine et prix 2025. Devis gratuit.",
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Rénovation immeuble pierre de taille Paris',
      item: 'https://espacedesignparis.fr/blog/renovation-immeuble-pierre-de-taille-paris',
    },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénover un appartement dans un immeuble en pierre de taille à Paris",
  description:
    "Contraintes techniques, préservation du patrimoine, prix et autorisations pour la rénovation d'appartements en pierre de taille à Paris.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
    logo: { '@type': 'ImageObject', url: 'https://espacedesignparis.fr/images/hero.jpg' },
  },
  url: 'https://espacedesignparis.fr/blog/renovation-immeuble-pierre-de-taille-paris',
  datePublished: '2025-02-05',
  dateModified: '2025-04-19',
  inLanguage: 'fr-FR',
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Peut-on abattre un mur dans un immeuble haussmannien en pierre de taille à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dans les immeubles haussmanniens, la quasi-totalité des murs entre appartements et entre pièces principales sont porteurs. Il est souvent possible de créer des ouvertures ou d'abattre certaines cloisons, mais cela nécessite systématiquement une étude de structure par un bureau d'études agréé, et parfois une autorisation de l'assemblée générale de copropriété. Comptez 2 000 à 5 000 € pour l'ingénierie structure seule.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment traiter l'humidité dans un immeuble en pierre de taille parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La pierre calcaire parisienne est naturellement hygroscopique (elle absorbe l'humidité). Il ne faut surtout pas couvrir les murs en pierre avec des matériaux imperméables comme le carrelage ou le plâtre synthétique, qui bloqueraient la migration de vapeur et aggraveraient les problèmes. Les solutions adaptées sont les enduits à la chaux, la laine de bois pour l'isolation intérieure, et le traitement des remontées capillaires par injection.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il une autorisation de l'architecte des Bâtiments de France pour rénover dans le Marais ou Saint-Germain ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Si votre immeuble est situé dans un secteur sauvegardé (comme le Marais ou Saint-Germain-des-Prés) ou à proximité d'un monument historique, certains travaux extérieurs (ravalement, fenêtres, devanture) nécessitent effectivement l'avis de l'Architecte des Bâtiments de France (ABF). Les travaux intérieurs sont en revanche généralement libres, sauf si l'immeuble est lui-même classé ou inscrit.",
      },
    },
  ],
}

export default function RenovationImmeubleDesTailleParis() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">
          Bâti Ancien Parisien
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
          Rénovation immeuble en pierre de taille à Paris
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Les immeubles haussmanniens et de pierre de taille constituent le coeur du patrimoine
          parisien. Les rénover exige une connaissance fine du bâti ancien : matériaux
          compatibles, gestion de l&apos;humidité, contraintes structurelles et autorisations.
        </p>
      </section>

      {/* Contenu */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">

          {/* Section 1 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les spécificités de la rénovation en pierre de taille parisienne
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Paris est construite sur du calcaire lutétien, extrait des carrières qui ont donné
              naissance aux catacombes. Cette pierre blonde caractéristique, utilisée massivement
              dans les immeubles haussmanniens du XIXe siècle, confère à la capitale son unité
              architecturale incomparable. Mais elle impose aussi des contraintes techniques
              spécifiques que tout artisan intervenant dans ce bâti doit parfaitement maîtriser.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Contrairement au béton ou à la brique, la pierre de taille est un matériau vivant :
              elle &quot;respire&quot;, absorbe l&apos;humidité ambiante et la restitue selon les saisons.
              Toute intervention qui bloquerait cette capacité de migration hydrique peut provoquer
              des désordres graves : salpêtre, éclatement des parements, dégradation accélérée.
              Les enduits synthétiques, le carrelage posé directement sur la pierre ou les isolants
              imperméables sont à proscrire absolument.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1C1C1C] text-white">
                    <th className="text-left p-3 font-medium">Poste de travaux</th>
                    <th className="text-left p-3 font-medium">Solution adaptée pierre de taille</th>
                    <th className="text-right p-3 font-medium">Prix Paris</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Enduit intérieur mur pierre', 'Chaux aérienne (NHL 2 ou 3,5)', '35 – 65 €/m²'],
                    ['Isolation intérieure (ITE)', 'Laine de bois ou chanvre + frein vapeur', '80 – 150 €/m²'],
                    ['Traitement humidité ascensionnelle', 'Injection résine hydrophobe', '60 – 120 €/ml'],
                    ["Réfection joints pierre façade", 'Rejointoiement chaux naturelle', '90 – 180 €/m²'],
                    ['Restauration moulures plâtre', 'Mouluriste artisan + plâtre fin', '150 – 400 €/ml'],
                    ['Parquet ancien chêne (restauration)', 'Ponçage, rebouchage, vitrification', '25 – 45 €/m²'],
                  ].map(([poste, solution, prix], i) => (
                    <tr key={poste} className={i % 2 === 0 ? 'bg-[#FAFAF8]' : 'bg-white'}>
                      <td className="p-3 text-[#1C1C1C] font-medium text-xs">{poste}</td>
                      <td className="p-3 text-gray-600 font-light text-xs">{solution}</td>
                      <td className="p-3 text-right text-[#B8960C] font-medium">{prix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Préserver le patrimoine tout en modernisant
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              La rénovation d&apos;un appartement dans un immeuble de pierre de taille parisien
              demande un équilibre délicat entre modernisation et préservation. Les propriétaires
              souhaitent logiquement mettre aux normes électricité et plomberie, améliorer le
              confort thermique et acoustique, et créer des espaces de vie contemporains.
              Mais ces objectifs ne doivent pas se faire au détriment des éléments patrimoniaux
              qui font la valeur intrinsèque de ces appartements : parquet point de Hongrie,
              cheminées d&apos;époque, moulures en staff, hauteurs sous plafond généreuses.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Espace Design travaille régulièrement sur des appartements haussmanniens dans les
              6e, 7e, 8e, 16e et 17e arrondissements. Notre approche consiste à évaluer
              systématiquement lors de la visite initiale quels éléments méritent d&apos;être
              préservés, restaurés ou simplement mis en valeur, et quels éléments peuvent être
              remplacés sans perte patrimoniale.
            </p>
            <ul className="space-y-3">
              {[
                {
                  title: 'Moulures et corniches en plâtre',
                  detail:
                    "Les moulures haussmanniennes sont souvent recouvertes de couches de peinture accumulées sur un siècle. Leur restauration par un mouluriste artisan, ou leur reproduction à l'identique si elles sont trop dégradées, valorise significativement l'appartement.",
                },
                {
                  title: 'Parquet massif ancien',
                  detail:
                    "Le parquet chêne massif des appartements haussmanniens peut être poncé et vitrifier jusqu'à 3 à 4 fois sur sa durée de vie. Avant de le remplacer, faire appel à un parqueteur spécialisé : un parquet ancien bien restauré est souvent supérieur à un parquet neuf.",
                },
                {
                  title: 'Cheminées et trumeaux',
                  detail:
                    "Même si les cheminées ne sont plus fonctionnelles (conduits obturés), elles constituent des éléments décoratifs majeurs. Les conserver, les restaurer et les intégrer dans la nouvelle décoration est systématiquement recommandé.",
                },
                {
                  title: 'Hauteurs sous plafond',
                  detail:
                    "Les appartements haussmanniens bénéficient de hauteurs sous plafond de 3 à 3,5 m, parfois plus dans les étages nobles. Les faux plafonds sont à éviter absolument : ils sacrifient cette caractéristique rare pour un gain acoustique ou thermique souvent marginal.",
                },
                {
                  title: 'Fenêtres et menuiseries',
                  detail:
                    "Le remplacement des fenêtres dans un immeuble en pierre de taille est souvent soumis au règlement de copropriété et, dans les secteurs sauvegardés, à l'avis de l'ABF. Les menuiseries bois peint en blanc sont généralement exigées. Elles peuvent être double vitrage tout en restant conformes à l'esthétique de l'immeuble.",
                },
                {
                  title: 'Isolation thermique compatible',
                  detail:
                    "L'isolation des murs en pierre de taille doit impérativement utiliser des matériaux perméables à la vapeur d'eau. La laine de bois, le chanvre, la fibre de bois ou la chaux-chanvre sont les matériaux de référence pour ce type de bâti.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-3">
                  <CheckCircle size={16} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#1C1C1C] text-sm font-medium">{item.title} : </span>
                    <span className="text-gray-600 text-sm font-light">{item.detail}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3 — FAQ */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-6">
              Questions fréquentes sur la rénovation en pierre de taille à Paris
            </h2>
            <div className="space-y-5">
              {schemaFAQ.mainEntity.map((q) => (
                <div key={q.name} className="border-l-2 border-[#D4AF37] pl-5">
                  <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                    {q.name}
                  </h3>
                  <p className="text-gray-600 text-sm font-light leading-relaxed">
                    {q.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Voir aussi */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-xl font-semibold text-[#1C1C1C] mb-6">Voir aussi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/renovation-appartement-ancien-paris', title: "Rénovation d'appartement ancien à Paris", tag: 'Ancien' },
              { href: '/blog/moulures-paris', title: 'Restauration de moulures à Paris', tag: 'Finitions' },
              { href: '/blog/ravalement-facade-paris', title: 'Ravalement de façade à Paris', tag: 'Façade' },
              { href: '/blog/renovation-parquet-paris', title: 'Rénovation parquet massif à Paris', tag: 'Parquet' },
            ].map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="block p-4 bg-[#FAFAF8] border border-gray-100 rounded-lg hover:border-[#D4AF37]/40 transition-colors group"
              >
                <span className="text-[10px] uppercase tracking-widest text-[#B8960C] font-light">
                  {a.tag}
                </span>
                <p className="text-sm font-medium text-[#1C1C1C] mt-1 group-hover:text-[#B8960C] transition-colors leading-snug">
                  {a.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-xs font-light uppercase tracking-[0.25em] mb-4">
          Spécialiste bâti parisien
        </p>
        <h2 className="font-display text-3xl font-semibold text-white mb-4">
          Votre appartement haussmannien entre de bonnes mains
        </h2>
        <p className="text-gray-400 text-sm font-light max-w-xl mx-auto mb-8">
          Espace Design maîtrise les spécificités du bâti ancien parisien : matériaux
          compatibles pierre de taille, préservation du patrimoine et modernisation
          contemporaine. Devis gratuit sous 48h.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-7 py-3 text-sm font-medium hover:bg-[#C9A227] transition-colors"
          >
            Demander un devis
            <ArrowRight size={16} />
          </Link>
          <a
            href="tel:+33142000000"
            className="inline-flex items-center gap-2 border border-white/20 text-white px-7 py-3 text-sm font-light hover:border-[#D4AF37]/60 transition-colors"
          >
            <Phone size={16} />
            Appeler Espace Design
          </a>
        </div>
      </section>
    </>
  )
}
