import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Paris 2e', item: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-2e' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Paris 2e : artisan & prix 2025 | Espace Design',
  description: 'Rénovation appartement dans le 2e arrondissement de Paris : Bourse, Sentier, Montorgueil. Artisan local, devis gratuit 48h.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-2e',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix d'une rénovation dans le 2e arrondissement de Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dans le 2e arrondissement, le prix d'une rénovation complète se situe entre 1 800 et 3 500 €/m² selon l'état du bien, le niveau de finition souhaité et les contraintes de l'immeuble. Une rénovation partielle (peinture, sol, cuisine ou salle de bain) est possible à partir de 800-1 200 €/m². Comptez un budget minimum de 15 000 € pour un appartement de 30 m² entièrement refait.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quelles sont les spécificités des anciens ateliers textiles du Sentier ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le quartier du Sentier recèle de nombreux anciens ateliers de confection reconvertis en appartements ou lofts. Ces espaces présentent des caractéristiques particulières : grandes hauteurs sous plafond (3,50 m à plus de 5 m), larges baies vitrées industrielles, structures métalliques apparentes et plateaux ouverts. La rénovation de ces biens demande une expertise spécifique : traitement acoustique renforcé, mise aux normes électriques complète, et conception sur mesure pour tirer parti des volumes atypiques. Prévoir 2 500 à 4 500 €/m² pour une rénovation complète de qualité.",
      },
    },
    {
      '@type': 'Question',
      name: 'Faut-il des autorisations spéciales pour rénover dans le 2e arrondissement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le 2e arrondissement comporte des zones patrimoniales (notamment autour de la Bourse) où des contraintes architecturales s'appliquent. Pour des travaux modifiant l'aspect extérieur (ravalement, fenêtres, balcons), une déclaration préalable de travaux est nécessaire. À l'intérieur, la réglementation de copropriété prime : tout abattage de cloison doit être déclaré au syndic. Les travaux sur des éléments porteurs nécessitent une étude de structure et une déclaration en mairie.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Paris 2e : artisan & prix 2025 | Espace Design',
  description: 'Rénovation appartement dans le 2e arrondissement de Paris : Bourse, Sentier, Montorgueil. Artisan local, devis gratuit 48h.',
}

export default function ArticleRenovationParis2e() {
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
            Paris
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Appartement Paris 2e : artisan &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le 2e arrondissement connaît une transformation profonde : le Sentier, jadis coeur du textile, est devenu l&apos;un des hubs startup les plus dynamiques d&apos;Europe. Montorgueil attire une clientèle aisée, les lofts d&apos;anciens ateliers se rénovent. Guide complet pour rénover votre appartement dans le 2e, avec les prix 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Quartiers */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les quartiers du 2e et leurs spécificités en rénovation
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le 2e arrondissement est le plus petit de Paris, mais l&apos;un des plus hétérogènes. Trois quartiers bien distincts impliquent des typologies de biens — et de travaux — très différentes.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Sentier — anciens ateliers textiles devenus lofts',
                  detail: "La gentrification du Sentier s'est accélérée avec l'arrivée des startups et des agences créatives. Les anciens ateliers de confection se transforment en lofts lumineux aux hauteurs généreuses. Rénovation typique : décloisonnement, béton ciré au sol, cuisines ouvertes, électricité en apparent style industriel. Budget : 2 500 – 4 500 €/m².",
                },
                {
                  enjeu: 'Montorgueil — appartements bourgeois très demandés',
                  detail: "La rue Montorgueil et ses abords concentrent des appartements haussmanniens ou du début XXe très prisés. Plafonds à moulures, parquets anciens, cheminées en marbre : la rénovation doit préserver le cachet tout en modernisant confort et équipements. Budget : 1 800 – 3 500 €/m² selon niveau de finition.",
                },
                {
                  enjeu: 'Bourse — immeubles classiques à contraintes patrimoniales',
                  detail: "Autour du Palais Brongniart, les immeubles des XVIIIe-XIXe siècles sont soumis à des contraintes architecturales strictes. Les façades sont souvent protégées. À l'intérieur, les distributions originales demandent une expertise spécifique pour être modernisées sans dénaturer le bien.",
                },
              ].map((el) => (
                <div key={el.enjeu} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.enjeu}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Lofts ateliers */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Rénover un loft ou un ancien atelier dans le 2e
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les anciens ateliers textiles du Sentier constituent un parc immobilier unique à Paris. Hauts de plafond, lumineux et dotés de grandes façades vitrées, ils séduisent mais imposent des travaux spécifiques que tous les artisans ne maîtrisent pas.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Isolation thermique et phonique',
                solution: "Les planchers industriels transmettent bien les bruits d'impact. Un complexe résilient sous revêtement est indispensable. Les grandes baies vitrées simple vitrage doivent être remplacées par du double ou triple vitrage à faible émissivité.",
                cout: '80 – 200 €/m²',
              },
              {
                titre: 'Mise aux normes électriques',
                solution: "Les anciens ateliers disposent souvent d'installations trifasées ou de tableaux vétustes. Une remise aux normes NF C 15-100 complète est systématiquement nécessaire avant toute rénovation. Prévoir le passage de nouvelles gaines et la création de circuits dédiés.",
                cout: '80 – 150 €/m²',
              },
              {
                titre: 'Cloisonnement et création de pièces',
                solution: "Un plateau nu de 80-150 m² doit être cloisonné intelligemment. La cloison en verre ou verrière métallique préserve la luminosité tout en créant des espaces définis. Cette solution préserve l'esprit loft tout en assurant l'intimité nécessaire.",
                cout: '300 – 800 €/ml',
              },
              {
                titre: 'Cuisine ouverte sur mesure',
                solution: "Dans les lofts, la cuisine américaine est la norme. L'enjeu est la ventilation : une hotte déportée ou à recyclage sans gaine est souvent la seule solution sans percement de façade. Prévoir une extraction performante pour les grandes surfaces.",
                cout: '8 000 – 25 000 €',
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.titre}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.cout}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.solution}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Travaux courants */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Travaux les plus demandés dans le 2e arrondissement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Qu&apos;il s&apos;agisse d&apos;un appartement haussmannien ou d&apos;un loft, les propriétaires du 2e arrondissement partagent des priorités similaires en matière de rénovation.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Réfection complète de salle de bain',
                prix: '6 000 – 18 000 €',
                detail: "La salle de bain est le poste de rénovation le plus demandé. Dans les appartements anciens du 2e, les salles de bain sont souvent exiguës. Redistribution de l'espace, grandes douches à l'italienne, double vasque, chauffage au sol : une rénovation complète transforme le quotidien.",
              },
              {
                type: 'Rénovation cuisine',
                prix: '8 000 – 20 000 €',
                detail: "Cuisine équipée moderne avec électroménager intégré, plan de travail en quartz ou marbre, crédence carrelée. Dans les appartements du quartier Montorgueil, l'ouverture de la cuisine sur le séjour est très demandée — sous réserve de l'accord de la copropriété.",
              },
              {
                type: 'Parquet ancien : rénovation ou remplacement',
                prix: '40 – 120 €/m²',
                detail: "Les appartements anciens du 2e disposent souvent de parquets en point de Hongrie ou en chêne massif. Ponçage, vitrification ou huilage : une rénovation bien menée redonne tout leur éclat à ces sols. Si le parquet est trop dégradé, une pose de parquet massif ou contrecollé prend le relais.",
              },
              {
                type: 'Peinture et enduits décoratifs',
                prix: '25 – 60 €/m²',
                detail: "Dans les anciens appartements, les murs présentent souvent plusieurs couches de peinture et des irrégularités. Un travail de préparation soigné est indispensable avant toute finition qualitative. Béton ciré, stucco, peinture mate haut de gamme : le 2e arrondissement apprécie les finitions soignées.",
              },
            ].map((el) => (
              <div key={el.type} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.type}</div>
                  <div className="text-[#B8960C] text-sm font-medium flex-shrink-0">{el.prix}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Budget */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix de rénovation dans le 2e arrondissement en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent main d&apos;oeuvre et matériaux inclus, pour un appartement parisien standard dans le 2e arrondissement.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Type de rénovation</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Exemple 50 m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'Rafraîchissement (peinture + sol)', prix: '400 – 700 €', exemple: '20 000 – 35 000 €' },
                  { type: 'Rénovation partielle (cuisine ou SDB)', prix: '700 – 1 200 €', exemple: '35 000 – 60 000 €' },
                  { type: 'Rénovation complète standard', prix: '1 800 – 2 500 €', exemple: '90 000 – 125 000 €' },
                  { type: 'Rénovation complète haut de gamme', prix: '2 500 – 3 500 €', exemple: '125 000 – 175 000 €' },
                  { type: 'Loft / atelier reconversion complète', prix: '2 500 – 4 500 €', exemple: 'Sur devis' },
                ].map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.type}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prix}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.exemple}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Ce qui fait varier le prix dans le 2e
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "L'étage et l'accès (monte-charges absent = surcoût logistique)",
                "L'état du bien : vétusté, amiante, plomb (diagnostics obligatoires avant travaux)",
                'Les contraintes de copropriété : horaires de chantier, protection des parties communes',
                'La nature des matériaux choisis : carrelage grande taille, parquet massif, robinetterie haut de gamme',
                "La présence d'éléments anciens à préserver : moulures, cheminées, parquets d'époque",
                "La nécessité d'un permis de construire ou d'une déclaration préalable de travaux",
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
              { href: '/blog/renovation-appartement-paris-4e', title: 'Rénovation appartement Paris 4e' },
              { href: '/blog/renovation-appartement-paris-6e', title: 'Rénovation appartement Paris 6e' },
              { href: '/blog/renovation-cuisine-americaine-paris', title: 'Cuisine américaine Paris' },
              { href: '/blog/choisir-carrelage-salle-de-bain', title: 'Choisir son carrelage salle de bain' },
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

      {/* Zones */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Nos zones d&apos;intervention</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { href: '/blog/renovation-appartement-paris-4e', label: 'Paris 4e' },
              { href: '/blog/renovation-appartement-paris-6e', label: 'Paris 6e' },
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-9e', label: 'Paris 9e' },
              { href: '/renovation-paris-10e', label: 'Paris 10e' },
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-levallois-perret', label: 'Levallois' },
              { href: '/renovation-courbevoie', label: 'Courbevoie' },
            ].map((z) => (
              <Link
                key={z.href}
                href={z.href}
                className="text-xs text-[#1C1C1C] border border-gray-200 rounded px-3 py-1.5 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light"
              >
                {z.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#D4AF37] text-center px-4">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-4">
          Votre projet de rénovation dans le 2e arrondissement
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis détaillé sous 48h. Artisan spécialisé Paris intra-muros.
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
