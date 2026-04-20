import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Paris 9e', item: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-9e' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Paris 9e : Pigalle, Opéra & prix 2025 | Espace Design',
  description: 'Rénover dans le 9e arrondissement à Paris : haussmannien Opéra, lofts Pigalle, copropriétés. Prix artisan 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-9e',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation d\'appartement dans le 9e arrondissement de Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dans le 9e arrondissement, le prix d'une rénovation d'appartement varie entre 1 400 et 2 200 €/m² selon le type de bien et l'ampleur des travaux. Le secteur Opéra (immeubles haussmanniens de prestige) se situe plutôt dans la fourchette haute (1 800 à 2 500 €/m²) en raison des contraintes des copropriétés et des matériaux premium souvent requis. Le secteur Pigalle (immeubles de rapport, lofts) est légèrement moins contraint et se situe autour de 1 200 à 1 800 €/m². Pour un appartement haussmannien de 70 m² secteur Opéra, une rénovation complète se situe entre 100 000 et 160 000 €.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quelles sont les spécificités des appartements haussmanniens du secteur Opéra dans le 9e ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les appartements haussmanniens du secteur Opéra dans le 9e arrondissement présentent des caractéristiques architecturales très codifiées : moulures au plafond et aux corniches, parquet point de Hongrie, cheminées en marbre, hautes fenêtres à petits bois, et balcons filants en fer forgé. La rénovation de ces éléments est un vrai savoir-faire artisanal — les moulures se restaurent ou se reconstituent en plâtre, les cheminées se remettent en état de fonctionnement ou deviennent décoratives. Les copropriétés haussmanniennes du 9e sont généralement très bien entretenues mais imposent des règlements stricts sur les parties communes et les façades.",
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps durent les travaux dans un appartement du 9e arrondissement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La durée des travaux dans le 9e arrondissement dépend du type de rénovation. Une rénovation légère (peinture, sol, salle de bain) dans un appartement de 50 m² dure 3 à 5 semaines. Une rénovation complète (tous corps d'état) d'un appartement haussmannien de 80 m² dure 10 à 16 semaines. Les délais peuvent être allongés par les procédures de copropriété (autorisation AG pour travaux en parties communes, protection du parquet lors des livraisons), les délais de fabrication des menuiseries sur mesure (6 à 10 semaines) et les délais de livraison des matériaux en forte demande à Paris. Prévoir un planning détaillé avec l'artisan avant de démarrer.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Paris 9e : Pigalle, Opéra & prix 2025 | Espace Design',
  description: 'Rénover dans le 9e arrondissement à Paris : haussmannien Opéra, lofts Pigalle, copropriétés. Prix artisan 2025.',
}

export default function ArticleRenovationParis9e() {
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
            Rénovation Appartement Paris 9e : Pigalle, Opéra &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le 9e arrondissement offre un contraste saisissant entre le prestige haussmannien du secteur Opéra et l&apos;énergie créative de Pigalle. Moulures et parquet point de Hongrie côté Opéra, lofts et volumes atypiques côté Pigalle : chaque secteur a ses exigences et ses opportunités de rénovation. Guide complet pour rénover dans le 9e en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Spécificités du 9e */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Le 9e arrondissement : deux visages, deux façons de rénover
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le 9e arrondissement est l&apos;un des plus hétérogènes de Paris. Au sud, autour de l&apos;Opéra Garnier et des Grands Boulevards, les immeubles haussmanniens des années 1860-1890 dominent : grands appartements familiaux avec moulures, cheminées et parquet point de Hongrie, dans des copropriétés bien établies avec des charges de syndic importantes.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Au nord, autour de Pigalle, des Abbesses et de la rue des Martyrs, le tissu urbain est plus varié : immeubles de rapport du début du 20e siècle, anciens bâtiments industriels convertis en lofts, et une architecture plus libre. Ce secteur attire de nombreux acheteurs primo-accédants et investisseurs qui y voient un potentiel de rénovation important.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Secteur Opéra : le haussmannien dans toute sa rigueur',
                  detail: "Les immeubles haussmanniens du secteur Opéra sont parmi les plus caractéristiques de Paris : façades en calcaire, balcons filants au 2e et 5e étage, toits en zinc mansardés, cages d'escalier avec rampe en fer forgé. Les appartements sont souvent grands (70 à 150 m²) avec des hauteurs sous plafond de 3 à 3,50 m. La rénovation y est codifiée par des copropriétés exigeantes et des règlements qui imposent de préserver les éléments d'origine.",
                },
                {
                  enjeu: 'Secteur Pigalle : liberté architecturale et volumes atypiques',
                  detail: "Le secteur Pigalle offre une plus grande liberté architecturale. On y trouve des anciens ateliers d'artistes avec verrières zénithales, des immeubles de rapport de 1900-1930 avec des plans moins rigides que le haussmannien, et des appartements convertis depuis des espaces commerciaux. La rénovation y est souvent plus créative : mezzanines, cloisons en verre, béton ciré, volumes ouverts.",
                },
                {
                  enjeu: 'Les châteaux d\'eau : signe d\'un bâtiment bien entretenu',
                  detail: "Dans le 9e arrondissement, la présence d'un château d'eau sur le toit est souvent un signe positif : elle indique que le bâtiment avait une plomberie collective fonctionnelle et que la toiture a été bien entretenue (les châteaux d'eau sont posés sur des socles étanches). Un château d'eau en bon état témoigne généralement d'une copropriété active et d'un bâtiment bien géré.",
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

      {/* Section 2 — Rénovation haussmannienne secteur Opéra */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Rénover un appartement haussmannien secteur Opéra : moulures, parquet et copropriété
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La rénovation d&apos;un appartement haussmannien dans le secteur Opéra du 9e est un exercice de style qui demande de maîtriser les codes de l&apos;architecture du Second Empire tout en intégrant les exigences du confort contemporain.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Moulures et corniches : restauration ou reproduction',
                detail: "Les moulures en plâtre des appartements haussmanniens du 9e sont souvent partiellement abîmées ou peintes en épaisseur après des décennies d'interventions. La restauration consiste à décaper, reprendre les éléments cassés et re-peindre en blanc mat profond. La reproduction à l'identique (moulures manquantes ou supprimées) est possible par moulage ou par menuisier spécialisé.",
                cout: '50 – 150 €/ml',
              },
              {
                titre: 'Parquet point de Hongrie',
                detail: "Le parquet point de Hongrie est la signature des appartements haussmanniens du 9e. Si le parquet est en bon état, la rénovation (ponçage, huilage ou vitrification) est toujours préférable au remplacement. Un parquet haussmannien en chêne massif de 150 ans peut supporter 2 à 3 ponçages supplémentaires selon l'épaisseur restante.",
                cout: 'Rénovation : 40 – 80 €/m²',
              },
              {
                titre: 'Cheminées : décoratives ou fonctionnelles',
                detail: "Les cheminées en marbre des appartements du 9e ont souvent été condamnées lors des raccordements au chauffage urbain. Elles peuvent être remises en état de fonctionnement (vérification du conduit par un ramoneur agréé, installation d'un insert ou d'un foyer fermé) ou conservées comme élément décoratif. Ne jamais démolir une cheminée en marbre dans un appartement haussmannien.",
                cout: 'Insert : 2 000 – 5 000 €',
              },
              {
                titre: 'Délais copropriété : prévoir 3 à 6 mois',
                detail: "Les copropriétés haussmanniennes du secteur Opéra dans le 9e sont souvent très organisées mais également très procédurières. Tout travail touchant aux parties communes (façade, cage d'escalier, toiture, conduits) nécessite un vote en assemblée générale. Si l'AG annuelle vient de se tenir, il faut attendre l'AG suivante — soit jusqu'à 12 mois. Prévoir ce délai dans votre planning de rénovation.",
                cout: 'Délai : 3 à 12 mois',
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.titre}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.cout}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Secteur Pigalle */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Rénover dans le secteur Pigalle : lofts, ateliers et appartements atypiques
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le secteur Pigalle-Abbesses offre une palette de biens plus variée et des rénovations souvent plus créatives. Les contraintes de copropriété sont moindres, et les plans non standards permettent des aménagements originaux.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Lofts et anciens ateliers',
                prix: 'Budget libre',
                detail: "Les anciens ateliers d'artistes du secteur Pigalle (souvent en 5e ou 6e étage avec verrière) offrent des volumes exceptionnels pour Paris. La rénovation consiste à optimiser la verrière (double vitrage thermique, store motorisé), créer une mezzanine pour doubler la surface habitable, et traiter le béton brut ou la brique apparente. Ces biens atypiques ont une forte valeur à la revente.",
              },
              {
                type: 'Immeubles de rapport 1900-1930',
                prix: '1 200 – 1 800 €/m²',
                detail: "Les immeubles de rapport du secteur Pigalle ont des plans plus libres que le haussmannien : pièces moins formelles, distributions variées, balcons en encorbellement. La rénovation est souvent moins contrainte par les règlements de copropriété. Les planchers en bois sont courants et méritent d'être préservés. Le chauffage central est souvent absent : prévoir l'installation d'un système (plancher chauffant, radiateurs à eau, climatisation réversible).",
              },
              {
                type: 'Isolation thermique secteur Pigalle',
                prix: '60 – 120 €/m² mur',
                detail: "Les appartements du secteur Pigalle sont souvent moins bien isolés que les haussmanniens du secteur Opéra (fenêtres simples vitrage, murs moins épais). L'isolation par l'intérieur des murs extérieurs, le remplacement des fenêtres en double vitrage et l'isolation des combles (pour les derniers étages) sont les leviers prioritaires pour réduire les charges de chauffage.",
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
            Budget de rénovation dans le 9e arrondissement : prix 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent pour un appartement standard dans le 9e arrondissement, tous corps d&apos;état, main d&apos;oeuvre et matériaux inclus.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Secteur / type</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Niveau rénovation</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix /m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget 60 m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    secteur: 'Pigalle — appartement standard',
                    niveau: 'Rénovation légère',
                    prixM2: '700 – 1 200 €',
                    budget: '42 000 – 72 000 €',
                  },
                  {
                    secteur: 'Pigalle — appartement standard',
                    niveau: 'Rénovation complète',
                    prixM2: '1 200 – 1 800 €',
                    budget: '72 000 – 108 000 €',
                  },
                  {
                    secteur: 'Opéra — appartement haussmannien',
                    niveau: 'Rénovation standard',
                    prixM2: '1 500 – 2 200 €',
                    budget: '90 000 – 132 000 €',
                  },
                  {
                    secteur: 'Opéra — appartement haussmannien',
                    niveau: 'Rénovation prestige (matériaux premium)',
                    prixM2: '2 200 – 3 500 €',
                    budget: '132 000 – 210 000 €',
                  },
                ].map((row, i) => (
                  <tr key={`${row.secteur}-${row.niveau}`} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.secteur}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.niveau}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prixM2}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.budget}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils pour rénover dans le 9e arrondissement
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Vérifier l\'état du parquet point de Hongrie avant tout achat : le rénover est bien moins cher que le remplacer',
                'Anticiper les délais de copropriété secteur Opéra pour les travaux en parties communes',
                'Conserver les moulures, cheminées et boiseries : ils valorisent fortement le bien à la revente',
                'Préférer des matériaux compatibles avec l\'ancienneté du bâtiment (chaux, bois massif, plâtre)',
                'Dans le secteur Pigalle, profiter de la liberté architecturale pour des aménagements atypiques',
                'Prévoir une mise aux normes électrique complète dans les appartements antérieurs à 1980',
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
      <section className="py-16 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-6 text-center">Questions fréquentes</p>
          <div className="space-y-6">
            {schemaFaq.mainEntity.map((q) => (
              <div key={q.name} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-3">{q.name}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{q.acceptedAnswer.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voir aussi */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Voir aussi</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/renovation-appartement-paris', title: 'Rénovation appartement Paris' },
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénovation appartement haussmannien' },
              { href: '/blog/renovation-appartement-paris-5e', title: 'Rénovation appartement Paris 5e' },
              { href: '/blog/renovation-parquet-paris', title: 'Rénovation parquet Paris' },
              { href: '/contact', title: 'Demander un devis gratuit' },
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
      <section className="py-10 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Nos zones d&apos;intervention</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-9e', label: 'Paris 9e' },
              { href: '/renovation-paris-10e', label: 'Paris 10e' },
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-levallois-perret', label: 'Levallois' },
              { href: '/renovation-courbevoie', label: 'Courbevoie' },
              { href: '/renovation-saint-denis', label: 'Saint-Denis' },
              { href: '/renovation-pantin', label: 'Pantin' },
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
          Rénovez votre appartement dans le 9e arrondissement
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Haussmannien secteur Opéra ou loft Pigalle : artisans spécialisés. Devis gratuit sous 48h.
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
