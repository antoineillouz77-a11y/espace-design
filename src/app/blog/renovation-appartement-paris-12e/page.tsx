import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Paris 12e', item: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-12e' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Paris 12e : artisan & prix 2025 | Espace Design',
  description: 'Rénovation appartement dans le 12e arrondissement de Paris : Bastille, Nation, Bercy. Artisan local, devis 48h.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-12e',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix d'une rénovation d'appartement dans le 12e arrondissement de Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dans le 12e arrondissement, les prix de rénovation sont parmi les plus accessibles de Paris intra-muros. Comptez 800 à 1 200 €/m² pour un rafraîchissement (peinture, sols, petits travaux). Une rénovation complète tous corps de métier revient à 1 500 à 2 500 €/m² selon le niveau de finition. Les lofts et appartements autour de Bercy ou Bastille peuvent justifier des budgets plus élevés (2 500 à 3 000 €/m²) pour des finitions contemporaines soignées.",
      },
    },
    {
      '@type': 'Question',
      name: "Quels sont les quartiers les plus prisés du 12e arrondissement pour investir et rénover ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le quartier Bastille (proche du 11e et du Marais) est le plus valorisé du 12e, avec des biens qui se vendent 9 000 à 12 000 €/m². Nation et Daumesnil offrent un profil résidentiel familial avec des prix plus accessibles (7 000 à 9 000 €/m²). Bercy Village attire une clientèle branchée pour ses lofts dans d'anciens entrepôts viticoles reconvertis. La rénovation dans ces secteurs est un investissement rentable, notamment pour la location meublée ou la revente.",
      },
    },
    {
      '@type': 'Question',
      name: "Peut-on transformer un appartement standard du 12e en loft ou open space ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, les appartements du 12e arrondissement — notamment dans les immeubles des années 1960-1980 aux cloisons non porteuses — se prêtent bien à l'ouverture des espaces. Abattre une cloison entre cuisine et séjour : 800 à 2 000 € selon le type de cloison. Créer un open space complet sur plateau nu : nécessite une étude de structure si des poteaux porteurs sont présents. Le 12e abrite également de véritables lofts dans d'anciens entrepôts (secteur Bercy, Quinze-Vingts) dont la rénovation suit une logique industrielle-contemporaine : béton ciré, métal, verrières.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelle durée prévoir pour la rénovation d'un appartement dans le 12e arrondissement ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour un appartement de 50 m² dans le 12e, comptez 6 à 10 semaines de travaux pour une rénovation complète (électricité + plomberie + sols + peinture + salle de bain + cuisine). Un simple rafraîchissement prend 2 à 4 semaines. Les délais peuvent s'allonger si l'accès au chantier est difficile (copropriété avec réglementation stricte, étages sans ascenseur) ou si des travaux imprévus apparaissent (plomberie vétuste, isolation à reprendre). Espace Design fournit un planning prévisionnel dès le devis.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Paris 12e : artisan & prix 2025 | Espace Design',
  description: 'Rénovation appartement dans le 12e arrondissement de Paris : Bastille, Nation, Bercy. Artisan local, devis 48h.',
}

export default function ArticleRenovationParis12e() {
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
            Rénovation Appartement Paris 12e : artisan &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Entre Bastille et Bercy, le 12e arrondissement de Paris est un territoire de contrastes : immeubles haussmanniens côté Bastille, résidentiel familial autour de Nation, et lofts d&apos;entrepôts convertis côté Bercy Village. Un arrondissement en forte valorisation où la rénovation est un levier d&apos;investissement solide. Guide complet des prix et bonnes pratiques 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Quartiers */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Bastille, Nation, Bercy : trois ambiances pour rénover dans le 12e
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le 12e arrondissement est l&apos;un des plus vastes de Paris et l&apos;un des plus hétérogènes. Son bâti mêle immeubles haussmanniens de la fin XIXe siècle, constructions de l&apos;entre-deux-guerres, immeubles des années 1960-1980, et entrepôts industriels reconvertis. Cette diversité crée des opportunités de rénovation très différentes selon le secteur.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: "Bastille — valorisation forte, immeubles haussmanniens côté Opéra",
                  detail: "Le secteur Bastille (autour de la place de la Bastille et de l'Opéra Bastille) est le plus recherché du 12e. Les immeubles haussmanniens y sont nombreux, avec des appartements de 40 à 120 m² aux finitions souvent à reprendre. Forte demande locative et revente rapide. Coût rénovation : 1 800 à 2 800 €/m².",
                },
                {
                  enjeu: "Nation — résidentiel familial, excellent rapport qualité-prix",
                  detail: "Autour de la place de la Nation, le tissu haussmannien se mêle à des immeubles de rapport du début XXe siècle. Le quartier est prisé des familles pour sa desserte en transports (métros 1, 2, 6, 9) et sa tranquillité. La rénovation y est motivée par l'amélioration du confort thermique et phonique. Coût rénovation : 1 200 à 2 000 €/m².",
                },
                {
                  enjeu: "Bercy Village — lofts d'entrepôts, ambiance contemporaine",
                  detail: "Les anciens entrepôts viticoles de Bercy ont été reconvertis en espaces résidentiels et commerciaux depuis les années 1990. Les lofts qui en résultent (plafonds 4 à 6 m, poutres apparentes, briques) se rénovent selon une esthétique industrielle-contemporaine : béton ciré, acier, verrières, et cuisines ouvertes. Coût rénovation : 2 000 à 3 000 €/m².",
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

      {/* Section 2 — Lofts et entrepôts */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Rénover un loft ou un entrepôt converti dans le 12e arrondissement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le 12e arrondissement abrite plusieurs poches d&apos;entrepôts et d&apos;ateliers reconvertis en habitations, notamment autour de Bercy, des Quinze-Vingts et de la Roquette. La rénovation de ces espaces atypiques suit une logique différente des appartements classiques : volumes bruts à valoriser, finitions industrielles, et nécessité de créer des cloisonnements légers pour définir les espaces.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: "Béton ciré sol et murs",
                detail: "Le béton ciré est la finition signature des lofts parisiens. Applicable sur sol existant (carrelage, parquet, dalle béton) et sur murs, il crée une continuité visuelle et amplifie la luminosité. Nécessite une préparation soignée du support.",
                cout: "80 – 150 €/m²",
              },
              {
                titre: "Verrière d'atelier intérieure",
                detail: "Partition vitrée acier et verre pour délimiter chambres, salle de bain ou bureau dans un grand plateau sans cloisonner à l'identique. Laisse circuler la lumière tout en créant une séparation visuelle et phonique partielle.",
                cout: "1 500 – 4 000 €/ml",
              },
              {
                titre: "Création de mezzanine",
                detail: "Dans les volumes de 4 m et plus, la mezzanine est la solution pour créer une chambre ou un espace bureau sans perdre le sentiment d'espace. Structure métal ou bois sur mesure, garde-corps design. Étude de résistance des planchers requise.",
                cout: "8 000 – 20 000 €",
              },
              {
                titre: "Isolation thermique et phonique",
                detail: "Les anciens entrepôts présentent souvent des déperditions thermiques importantes (toiture, murs non isolés). Isolation par l'intérieur en laine de roche sur ossature métal, complétée d'une VMC double flux pour maintenir la qualité de l'air.",
                cout: "80 – 150 €/m²",
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

      {/* Section 3 — Travaux courants */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Travaux les plus courants dans un appartement du 12e
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Pour un appartement standard du 12e arrondissement — immeuble des années 1970-1990 ou haussmannien rénové — les chantiers les plus fréquents portent sur la modernisation des équipements et l&apos;amélioration du confort. Des travaux qui offrent un excellent retour sur investissement dans un marché immobilier dynamique.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: "Rénovation de salle de bain complète",
                prix: "6 000 – 18 000 €",
                detail: "Remplacement complet de la plomberie, pose d'une douche à l'italienne ou d'une baignoire, carrelage sol et murs, meuble vasque suspendu, miroir rétroéclairé, ventilation VMC. Dans le 12e, les salles de bain de 3 à 6 m² sont les plus courantes. Budget moyen : 8 000 à 12 000 € pour une salle de bain de 4 m² entièrement refaite.",
              },
              {
                type: "Ouverture cuisine sur séjour",
                prix: "3 000 – 8 000 €",
                detail: "Abattre ou aménager la cloison entre cuisine et séjour pour créer un espace de vie ouvert. Dans les immeubles des années 1960-1980 du 12e, les cloisons sont souvent en carreaux de plâtre (non porteuses) : démolition propre et rapide. Prévoir également la création d'une hotte à recyclage ou d'un conduit d'évacuation.",
              },
              {
                type: "Remplacement du sol",
                prix: "40 – 120 €/m²",
                detail: "Parquet contrecollé chêne (40-80 €/m²), parquet massif (80-150 €/m²), carrelage grand format (50-120 €/m²), béton ciré (80-150 €/m²). Dans le 12e, le parquet chêne huilé est le choix le plus fréquent pour les appartements familiaux car il allie chaleur, durabilité et facilité d'entretien.",
              },
              {
                type: "Mise aux normes électriques",
                prix: "4 000 – 12 000 €",
                detail: "Les appartements construits avant 1990 dans le 12e nécessitent souvent une mise aux normes NF C 15-100 : nouveau tableau, circuits différenciés, prises 2P+T généralisées, liaisons équipotentielles en salle de bain. À intégrer systématiquement lors d'une rénovation complète pour éviter une seconde intervention coûteuse.",
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
            Prix rénovation appartement Paris 12e : tableau 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Estimations tous corps de métier inclus (main d&apos;œuvre + matériaux), pour un appartement standard du 12e arrondissement.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Niveau</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prestations</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Total 60 m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    niveau: "Rafraîchissement",
                    prestations: "Peinture + sol + petits travaux",
                    prixM2: "500 – 900 €",
                    total: "30 000 – 54 000 €",
                  },
                  {
                    niveau: "Rénovation partielle",
                    prestations: "Salle de bain + cuisine + sols + peinture",
                    prixM2: "900 – 1 500 €",
                    total: "54 000 – 90 000 €",
                  },
                  {
                    niveau: "Rénovation complète",
                    prestations: "Tous corps de métier, mise aux normes électrique",
                    prixM2: "1 500 – 2 500 €",
                    total: "90 000 – 150 000 €",
                  },
                  {
                    niveau: "Loft / Atypique",
                    prestations: "Béton ciré, verrière, mezzanine, finitions contemporaines",
                    prixM2: "2 000 – 3 000 €",
                    total: "120 000 – 180 000 €",
                  },
                ].map((row, i) => (
                  <tr key={row.niveau} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.niveau}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.prestations}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prixM2}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils pour bien réussir sa rénovation dans le 12e
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Profiter d'un marché moins tendu que le centre pour négocier les délais d'intervention",
                "Dans un loft, commencer par l'isolation avant tout finition décorative",
                "Préférer le parquet au carrelage dans les appartements familiaux — plus chaud et valorisant",
                "Anticiper l'isolation phonique entre appartements, souvent insuffisante dans les immeubles post-1960",
                "Demander plusieurs devis comparatifs — les prix varient fortement selon les artisans",
                "Intégrer la mise aux normes électriques dès la première rénovation complète",
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

      {/* Guides connexes */}
      <section className="py-12 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Guides connexes</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/renovation-appartement-paris-7e', title: 'Rénovation appartement Paris 7e' },
              { href: '/blog/renovation-appartement-paris-8e', title: 'Rénovation appartement Paris 8e' },
              { href: '/blog/renovation-appartement-paris-16e', title: 'Rénovation appartement Paris 16e' },
              { href: '/blog/prix-renovation-salle-de-bain-paris', title: 'Prix rénovation salle de bain Paris' },
              { href: '/blog/renovation-loft-paris', title: 'Rénovation loft Paris' },
              { href: '/blog/sol-beton-cire-paris', title: 'Sol béton ciré Paris' },
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
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-paris-12e', label: 'Paris 12e' },
              { href: '/renovation-paris-13e', label: 'Paris 13e' },
              { href: '/renovation-paris-14e', label: 'Paris 14e' },
              { href: '/renovation-paris-20e', label: 'Paris 20e' },
              { href: '/renovation-vincennes', label: 'Vincennes' },
              { href: '/renovation-charenton-le-pont', label: 'Charenton-le-Pont' },
              { href: '/renovation-saint-mande', label: 'Saint-Mandé' },
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
          Votre projet de rénovation dans le 12e arrondissement
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Artisan local, devis gratuit sous 48h. Rénovation appartement, loft ou entrepôt converti.
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
