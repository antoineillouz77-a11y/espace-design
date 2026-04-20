import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation 4 Pièces Paris', item: 'https://espacedesignparis.fr/blog/renovation-4-pieces-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation 4 Pièces Paris : budget, planning & conseils 2025 | Espace Design',
  description: 'Budget rénovation 4 pièces à Paris : prix par poste (salle de bain, cuisine, parquet), planning des travaux. Guide 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-4-pieces-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le budget pour rénover un 4 pièces à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La rénovation complète d'un 4 pièces à Paris (80 à 100 m²) coûte entre 40 000 et 120 000 € selon l'état du bien et le niveau de finition souhaité. Un rafraîchissement léger (peinture, sol, cuisine légère) se situe entre 400 et 600 €/m², soit 32 000 à 60 000 €. Une rénovation lourde avec refonte électrique, plomberie, salle de bain et cuisine complètes dépasse 800 €/m², soit 64 000 à 120 000 €.",
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps dure la rénovation d\'un 4 pièces à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Une rénovation complète d'un 4 pièces à Paris dure entre 2 et 4 mois selon l'ampleur des travaux. Les étapes critiques sont la démolition (1 à 2 semaines), électricité et plomberie (2 à 4 semaines), carrelage et parquet (2 à 3 semaines), peinture (1 à 2 semaines), puis cuisine et salle de bain (2 à 4 semaines). La coordination des corps de métier est la clé pour éviter les délais supplémentaires.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quel est le rôle du coordinateur de travaux pour un 4 pièces ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La rénovation d'un 4 pièces fait intervenir au minimum 5 à 7 corps de métier (démolition, électricité, plomberie, carrelage, parquet, peinture, cuisine). Sans coordination, les délais s'accumulent et le budget dérape. Le coordinateur de travaux établit le planning, interface avec la copropriété, contrôle la qualité sur chantier et constitue le dossier de réception. C'est le chef d'orchestre indispensable à partir de 2 corps de métier ou plus.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation 4 Pièces Paris : budget, planning & conseils 2025 | Espace Design',
  description: 'Budget rénovation 4 pièces à Paris : prix par poste (salle de bain, cuisine, parquet), planning des travaux. Guide 2025.',
}

export default function ArticleRenovation4Pieces() {
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
            Prix &amp; Budgets
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation 4 Pièces Paris : budget, planning &amp; conseils 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Un 4 pièces à Paris représente généralement entre 80 et 100 m² — une surface qui permet une rénovation ambitieuse mais dont le budget peut varier du simple au triple selon les postes engagés. Décomposition par poste, planning type et conseils pour bien piloter votre projet en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Surface et scénarios */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Le 4 pièces parisien : surface et niveaux de rénovation
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              À Paris, un 4 pièces correspond typiquement à un appartement de 80 à 100 m² comprenant un séjour, deux ou trois chambres, une cuisine, une salle de bain et parfois une salle d&apos;eau. Cette configuration est fréquente dans les immeubles haussmanniens des 6e, 7e, 8e, 9e et 16e arrondissements.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              La configuration structurelle conditionne le coût : un appartement avec de nombreux murs porteurs limite les suppressions de cloisons et augmente le coût des ouvertures, tandis qu&apos;une structure poteaux-dalles offre plus de liberté d&apos;aménagement.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Rénovation légère — état correct, finitions à rafraîchir',
                  detail: 'Peinture intégrale, remplacement des sols (parquet flottant ou carrelage), réfection de la cuisine légère (façades, plan de travail), mise aux normes électrique partielle. Budget indicatif : 400 à 600 €/m², soit 32 000 à 60 000 € pour 80 m².',
                },
                {
                  enjeu: 'Rénovation intermédiaire — travaux significatifs sur 2 à 3 postes',
                  detail: 'Refonte complète de la salle de bain, nouvelle cuisine, parquet massif posé, peinture soignée. Peut inclure l&apos;ouverture d&apos;une cloison pour créer un séjour-cuisine ouvert. Budget : 600 à 900 €/m², soit 48 000 à 90 000 € pour 80 m².',
                },
                {
                  enjeu: 'Rénovation complète — remise à neuf intégrale',
                  detail: 'Refonte totale : électricité mise aux normes NF C 15-100, plomberie reprise, isolation, nouvelles cloisons, carrelage, parquet, salle de bain, cuisine, menuiseries intérieures. Budget : 900 à 1 200 €/m², soit 72 000 à 120 000 € pour 80 m².',
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

      {/* Section 2 — Décomposition par poste */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Budget par poste : décomposition d&apos;une rénovation 4 pièces à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Pour un budget global de 80 000 € (rénovation intermédiaire d&apos;un 90 m²), voici la répartition typique par poste, avec la fourchette de prix observée à Paris en 2025.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Salle de bain (10 à 20 % du budget)',
                solution: 'Refonte complète (carrelage, douche italienne ou baignoire, vasque, WC suspendu, robinetterie, ventilation) : 8 000 à 18 000 € selon la surface et les matériaux. La plomberie seule représente 30 à 40 % du coût salle de bain.',
                cout: '8 000 – 18 000 €',
              },
              {
                titre: 'Cuisine (20 à 30 % du budget)',
                solution: 'Cuisine équipée de qualité avec électroménager intégré, plan de travail en quartz ou granit, et crédence carrelée : 15 000 à 25 000 €. La plomberie et l&apos;électricité cuisine sont incluses dans ce poste.',
                cout: '15 000 – 25 000 €',
              },
              {
                titre: 'Parquet (10 à 15 % du budget)',
                solution: 'Parquet massif posé à la française ou en point de Hongrie : 80 à 150 €/m² fourni-posé. Pour 60 m² de parquet dans un 4 pièces, comptez 5 000 à 9 000 €. Le ragréage préalable peut ajouter 10 à 20 €/m².',
                cout: '5 000 – 9 000 €',
              },
              {
                titre: 'Électricité (10 à 15 % du budget)',
                solution: 'Mise aux normes NF C 15-100 d&apos;un appartement de 90 m² : 8 000 à 15 000 € selon la vétusté de l&apos;installation. Inclut tableau électrique, circuits séparés, prises, interrupteurs et éclairage.',
                cout: '8 000 – 15 000 €',
              },
              {
                titre: 'Peinture & enduits (8 à 12 % du budget)',
                solution: 'Peinture professionnelle (2 couches) + enduits de finition sur 250 m² de surface murale (murs + plafonds d&apos;un 90 m²) : 6 000 à 10 000 €. Inclut la préparation des supports (rebouchage, ponçage, impression).',
                cout: '6 000 – 10 000 €',
              },
              {
                titre: 'Cloisons & démolition (5 à 10 % du budget)',
                solution: 'Ouverture d&apos;une cloison non porteuse : 500 à 1 500 €. Création d&apos;une ouverture avec linteau dans un mur porteur : 3 000 à 8 000 € (études et renforcement inclus). Création de nouvelles cloisons en placo : 60 à 120 €/m².',
                cout: '2 000 – 8 000 €',
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

      {/* Section 3 — Planning */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Planning type : 2 à 4 mois pour un 4 pièces parisien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le planning d&apos;une rénovation de 4 pièces dépend directement de la coordination des corps de métier. À Paris, les délais sont souvent allongés par les contraintes d&apos;accès (monte-charge, livraisons, autorisation de benne) et par les règles de copropriété limitant les horaires de travaux.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Semaines 1 à 2 — Démolition et préparation',
                prix: 'J+0',
                detail: 'Dépose des revêtements existants (carrelage, parquet, papiers peints), démolition des cloisons à supprimer, dépose de la cuisine et de la salle de bain. C&apos;est la phase la plus contraignante pour les voisins — prévenir la copropriété en amont est indispensable.',
              },
              {
                type: 'Semaines 3 à 6 — Gros œuvre & réseaux',
                prix: 'J+14',
                detail: 'Création des ouvertures dans les murs porteurs si nécessaire, pose des nouvelles cloisons, passage des gaines électriques et des tuyaux de plomberie. Ces deux corps de métier doivent être coordonnés précisément pour éviter les reprises coûteuses.',
              },
              {
                type: 'Semaines 7 à 10 — Carrelage & parquet',
                prix: 'J+42',
                detail: 'Ragréage des sols, pose du carrelage (salle de bain, cuisine, entrée), pose du parquet dans les pièces de vie et les chambres. Le parquet doit reposer 48 à 72h après pose avant de circuler dessus.',
              },
              {
                type: 'Semaines 11 à 13 — Peinture & finitions',
                prix: 'J+70',
                detail: 'Enduits, impression, peinture 2 couches sur murs et plafonds. Les plinthes, baguettes de finition et les petits détails (prises, interrupteurs définitifs) sont posés en toute fin de chantier.',
              },
              {
                type: 'Semaines 14 à 16 — Cuisine, salle de bain & réception',
                prix: 'J+91',
                detail: 'Installation de la cuisine (mobilier, électroménager, crédence), pose de la robinetterie et des sanitaires en salle de bain, réglages électriques définitifs. Visite de réception avec le coordinateur de travaux.',
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

      {/* Section 4 — Coordinateur de travaux */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Le rôle du coordinateur de travaux pour un 4 pièces
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La rénovation d&apos;un 4 pièces fait intervenir au minimum 5 à 7 corps de métier différents (démolition, maçonnerie, électricité, plomberie, carrelage, parquet, peinture, cuisine). Sans coordination, les délais s&apos;accumulent et le budget dérape. Le coordinateur est le chef d&apos;orchestre qui évite ces écueils.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Planning et séquencement des corps de métier',
                prix: 'Inclus',
                detail: 'Le coordinateur établit un planning précis avec des dates d&apos;intervention pour chaque corps de métier, en tenant compte des délais d&apos;approvisionnement (cuisine : 6 à 12 semaines de délai fabricant, carrelage : 2 à 4 semaines). Il anticipe les conflits de planning et réorganise en temps réel.',
              },
              {
                type: 'Interface avec la copropriété',
                prix: 'Inclus',
                detail: 'À Paris, chaque chantier nécessite une autorisation de la copropriété, le dépôt d&apos;une benne ou d&apos;un camion en zone de livraison, et le respect des horaires de travaux (généralement 8h-18h en semaine). Le coordinateur gère ces démarches administratives.',
              },
              {
                type: 'Contrôle qualité et gestion des malfaçons',
                prix: 'Inclus',
                detail: 'Le coordinateur effectue des visites de chantier régulières (2 à 3 fois par semaine) pour contrôler la qualité des travaux et détecter les malfaçons avant qu&apos;elles soient recouvertes. Il constitue le dossier de réception avec réserves et suit leur levée.',
              },
            ].map((el) => (
              <div key={el.type} className="bg-white rounded-lg p-5 border border-gray-100">
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

      {/* Section 5 — Tableau budget */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Tableau récapitulatif : budget rénovation 4 pièces Paris 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Prix indicatifs pour un appartement de 90 m² à Paris, main d&apos;œuvre et matériaux inclus.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Niveau</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Postes inclus</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Total 90 m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    niveau: 'Rafraîchissement',
                    prestations: 'Peinture + sol + petites réparations',
                    prixM2: '400 – 600 €',
                    total: '36 000 – 54 000 €',
                  },
                  {
                    niveau: 'Intermédiaire',
                    prestations: 'Salle de bain + cuisine légère + sol + peinture',
                    prixM2: '600 – 900 €',
                    total: '54 000 – 81 000 €',
                  },
                  {
                    niveau: 'Complet',
                    prestations: 'Électricité + plomberie + cuisine + SDB + sol + peinture',
                    prixM2: '900 – 1 100 €',
                    total: '81 000 – 99 000 €',
                  },
                  {
                    niveau: 'Haut de gamme',
                    prestations: 'Rénovation totale avec matériaux premium et menuiseries sur mesure',
                    prixM2: '1 100 – 1 400 €',
                    total: '99 000 – 126 000 €',
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
              Conseils pour maîtriser son budget
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Obtenir 3 devis pour chaque corps de métier avant de s\'engager',
                'Prévoir une réserve de 10 à 15 % pour les imprévus de chantier',
                'Traiter l\'électricité et la plomberie en premier — toujours avant les finitions',
                'Commander la cuisine dès le début du chantier (délai fabricant : 6 à 12 semaines)',
                'Vérifier les autorisations copropriété avant le démarrage pour éviter les arrêts',
                'Regrouper les corps de métier sous un seul coordinateur pour éviter les retards',
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
              { href: '/blog/renovation-3-pieces-paris', title: 'Rénovation 3 pièces Paris' },
              { href: '/blog/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain Paris' },
              { href: '/blog/prix-renovation-appartement-paris', title: 'Prix rénovation appartement Paris' },
              { href: '/electricite-paris', title: 'Électricité Paris' },
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
              { href: '/renovation-paris-6e', label: 'Paris 6e' },
              { href: '/renovation-paris-7e', label: 'Paris 7e' },
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-paris-17e', label: 'Paris 17e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
              { href: '/renovation-levallois-perret', label: 'Levallois' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne' },
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
          Estimez le budget de votre 4 pièces à Paris
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis détaillé sous 48h. Coordination complète des travaux.
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
