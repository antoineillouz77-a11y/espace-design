import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Prix Rénovation Cuisine Paris', item: 'https://espacedesignparis.fr/blog/prix-renovation-cuisine-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Prix Rénovation Cuisine Paris : budget, matériaux & devis 2025 | Espace Design',
  description: "Quel budget pour une rénovation de cuisine à Paris ? Cuisine équipée, plan de travail, carrelage, électroménager. Prix m² 2025 et conseils artisan.",
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/prix-renovation-cuisine-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix moyen d\'une rénovation de cuisine à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "À Paris, le prix d'une rénovation de cuisine varie selon l'ampleur des travaux : pour une petite cuisine de 6 à 8 m² avec remplacement des façades, plan de travail stratifié et carrelage crédence, comptez 5 000 à 10 000 €. Pour une cuisine moyenne de 10 à 15 m² avec cuisine équipée milieu de gamme et carrelage, le budget est de 12 000 à 25 000 €. Une cuisine premium avec plan de travail en quartz ou marbre, électroménager intégré haut de gamme et agencement sur-mesure atteint 30 000 à 60 000 € ou plus. Ces prix incluent main d'œuvre et matériaux.",
      },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte un plan de travail en quartz à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix d'un plan de travail en quartz à Paris (fourniture et pose) se situe entre 300 et 700 €/ml selon l'épaisseur (20 ou 30 mm) et la marque. Pour un plan de 3 ml, comptez 900 à 2 100 €. Le quartz est très prisé à Paris pour sa résistance aux taches et sa facilité d'entretien. Le marbre est plus cher (500 à 1 200 €/ml) mais exige un entretien plus rigoureux. Le bois massif (hêtre, chêne) est une alternative chaleureuse à 200 à 500 €/ml, mais nécessite un huilage régulier.",
      },
    },
    {
      '@type': 'Question',
      name: 'Faut-il prévoir un devis séparé pour plomberie et électricité lors d\'une rénovation cuisine ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Non, un artisan généraliste comme Espace Design coordonne l'ensemble des corps de métier. La plomberie (déplacement évier, robinetterie, alimentation lave-vaisselle) représente 1 000 à 3 000 € selon la complexité. L'électricité (mise aux normes, circuits dédiés pour le four, la hotte, le lave-vaisselle) coûte 800 à 2 000 €. Ces postes sont souvent sous-estimés dans les budgets initiaux mais sont obligatoires pour une cuisine aux normes.",
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on rénover une cuisine dans un appartement parisien sans travaux lourds ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, il est tout à fait possible d'opter pour une rénovation légère sans toucher à la plomberie ni à l'électricité existantes. Le remplacement des façades de meubles (sans changer les caissons), le changement du plan de travail, la pose d'une crédence et une nouvelle peinture permettent de transformer visuellement la cuisine pour 3 000 à 7 000 €. Cette solution est idéale pour les locataires ou les propriétaires souhaitant valoriser leur bien avant une vente sans investissement majeur.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Prix Rénovation Cuisine Paris : budget, matériaux & devis 2025 | Espace Design",
  description: "Quel budget pour une rénovation de cuisine à Paris ? Cuisine équipée, plan de travail, carrelage, électroménager. Prix m² 2025 et conseils artisan.",
}

export default function ArticlePrixRenovationCuisineParis() {
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
            Cuisine
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Prix Rénovation Cuisine Paris : budget, matériaux et devis 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Rénover une cuisine à Paris suppose de maîtriser des postes de dépenses très variés : meubles, plan de travail, carrelage, électroménager, plomberie, électricité. Ce guide détaille les prix réels pratiqués en 2025 par un artisan parisien, selon le niveau de prestation et la surface.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-[#1C1C1C] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { val: '5 000 €', label: 'Budget mini rénovation légère' },
              { val: '18 000 €', label: 'Budget médian cuisine complète' },
              { val: '60 000 €', label: 'Budget max cuisine sur-mesure' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-xl sm:text-2xl font-semibold text-[#D4AF37] mb-1">{s.val}</div>
                <div className="text-gray-500 text-[10px] uppercase tracking-wider font-light">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1 — Budget selon type */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Budget rénovation cuisine selon le niveau de prestation
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le coût d&apos;une rénovation de cuisine à Paris dépend principalement de trois facteurs : la surface de la cuisine, le niveau de gamme des matériaux choisis, et l&apos;ampleur des travaux techniques (plomberie, électricité). Voici les trois grandes catégories de projets rencontrés à Paris.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              La spécificité parisienne tient aux contraintes des petits espaces : une cuisine de 6 m² dans un appartement haussmannien impose souvent des solutions sur-mesure pour optimiser chaque centimètre. L&apos;accessibilité pour la livraison des matériaux (escaliers étroits, pas d&apos;ascenseur) peut également générer des surcoûts de 5 à 10 %.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: "Petite cuisine (6–8 m²) — Budget 5 000 à 12 000 €",
                  detail: "Rénovation légère sans toucher aux réseaux : remplacement des façades de meubles, nouveau plan de travail stratifié (150 à 250 €/ml), crédence carrelage ou verre, peinture. Les caissons existants sont conservés. Idéal pour un studio ou un deux-pièces parisien. Durée : 5 à 10 jours. Pour une cuisine complète avec caissons neufs, comptez 8 000 à 12 000 €.",
                },
                {
                  enjeu: "Cuisine moyenne (10–15 m²) — Budget 12 000 à 30 000 €",
                  detail: "Rénovation complète avec cuisine équipée milieu de gamme (Ikea, Leroy Merlin haut de gamme ou marque française). Plan de travail quartz (300 à 600 €/ml), carrelage sol et crédence, électroménager intégré (four, hotte, lave-vaisselle, réfrigérateur encastrable). Mise aux normes électriques et déplacement léger de plomberie inclus. Durée : 2 à 4 semaines.",
                },
                {
                  enjeu: "Cuisine premium (15 m² ou sur-mesure) — Budget 30 000 à 60 000 €",
                  detail: "Cuisine entièrement sur-mesure avec ébéniste parisien ou marque premium (Bulthaup, SieMatic, Leicht). Plan de travail en marbre ou quartz premium (600 à 1 200 €/ml), électroménager grand chef (Miele, Gaggenau, Wolf), îlot central, éclairage LED intégré. Réfection complète de l'électricité et plomberie. Pour des appartements du Triangle d'Or ou du Marais.",
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

      {/* Section 2 — Prix par poste */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix des postes clés d&apos;une rénovation cuisine à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Comprendre le coût de chaque poste permet de prioriser les investissements et d&apos;optimiser son budget. Voici les prix moyens pratiqués à Paris en 2025, fourniture et pose comprises.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Plan de travail',
                solution: "Stratifié : 80–180 €/ml. Bois massif (hêtre, chêne) : 200–500 €/ml. Quartz (Caesar Stone, Silestone) : 300–700 €/ml. Marbre ou granit : 500–1 200 €/ml. Le quartz reste le meilleur rapport qualité/durabilité pour un usage intensif.",
                cout: '80 – 1 200 €/ml',
              },
              {
                titre: 'Carrelage crédence',
                solution: "Carrelage métro (10×20 cm) : 25–50 €/m² posé. Grand format (30×60 cm) : 40–80 €/m² posé. Zellige fait main : 80–150 €/m² posé. Verre laqué sur-mesure : 100–200 €/m² posé. La crédence représente 2 à 4 m² en moyenne.",
                cout: '25 – 200 €/m²',
              },
              {
                titre: 'Électroménager intégré',
                solution: "Four encastrable : 400–2 500 €. Hotte intégrée : 300–1 500 €. Lave-vaisselle encastrable : 400–1 200 €. Réfrigérateur encastrable : 600–2 000 €. Plaque à induction : 300–1 500 €. Budget électroménager complet milieu de gamme : 2 500 à 5 000 €.",
                cout: '2 500 – 8 000 €',
              },
              {
                titre: 'Plomberie cuisine',
                solution: "Remplacement robinetterie seule : 200–600 €. Déplacement évier (10–30 cm) : 500–1 000 €. Déplacement complet des arrivées d'eau (changement de mur) : 1 500–3 000 €. Raccordement lave-vaisselle : 200–400 €.",
                cout: '200 – 3 000 €',
              },
              {
                titre: "Électricité cuisine",
                solution: "Circuits dédiés (four, lave-vaisselle, hotte) : 800–1 500 €. Mise aux normes complète (tableau, prises) : 1 200–2 500 €. Éclairage LED encastré : 800–2 000 €. L'électricité cuisine doit répondre à la norme NF C 15-100.",
                cout: '800 – 2 500 €',
              },
              {
                titre: 'Peinture et finitions',
                solution: "Peinture lessivable cuisine (2 couches) : 15–25 €/m². Pose de moulures ou corniche : 25–50 €/ml. Habillage de porte de placard : 200–600 €/porte. Plafond laqué : 20–35 €/m².",
                cout: '15 – 35 €/m²',
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

      {/* Section 3 — Optimisation petits espaces */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Optimiser une cuisine parisienne en petit espace
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            À Paris, la majorité des appartements disposent d&apos;une cuisine de moins de 10 m². Quelques principes permettent de maximiser la fonctionnalité sans exploser le budget.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: "Cuisine en L ou en U : maximiser le plan de travail",
                prix: 'Recommandé',
                detail: "Une cuisine en L utilise deux murs perpendiculaires et offre un maximum de rangements et de plan de travail sans empiéter sur la circulation. La configuration en U (trois murs) est idéale pour les cuisines de 8 m² et plus. Éviter la cuisine en I (sur un seul mur) qui limite la surface de travail.",
              },
              {
                type: "Meubles jusqu'au plafond",
                prix: '+10 à +20 % de rangement',
                detail: "Dans un appartement parisien aux plafonds hauts (2,50 à 3,20 m), les meubles hauts jusqu'au plafond doublent la capacité de rangement. Ajouter des colonnes de rangement en remplacement des espaces perdus. Le surcoût est modéré (300 à 600 € par colonne supplémentaire).",
              },
              {
                type: "Îlot mobile vs îlot fixe",
                prix: '400 – 3 000 €',
                detail: "Un îlot fixe nécessite au moins 1,20 m de circulation de chaque côté, soit une cuisine de 12 m² minimum. Pour les cuisines de 8 à 10 m², préférer un îlot mobile à roulettes (400 à 800 €) qui peut être rangé selon les besoins. Un îlot fixe avec bar ou comptoir est davantage adapté aux cuisines ouvertes sur salon.",
              },
              {
                type: "Ouverture sur le salon",
                prix: '2 000 – 8 000 €',
                detail: "Supprimer la cloison entre cuisine et salon (après vérification qu'elle n'est pas porteuse) crée une sensation d'espace sans modifier la surface réelle. Prix de l'ouverture : 2 000 à 5 000 € (cloison simple). Si mur porteur : IPN métal + étaiement, 5 000 à 8 000 €. L'autorisation de la copropriété est nécessaire pour tout mur porteur.",
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

      {/* Section 4 — Tableau de prix comparatif */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Tableau comparatif des prix de rénovation cuisine à Paris 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Prix tous compris (main d&apos;œuvre + matériaux) pour un appartement parisien.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Prestation</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Entrée de gamme</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Milieu de gamme</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Haut de gamme</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    traitement: 'Cuisine complète 6–8 m²',
                    bas: '5 000 – 8 000 €',
                    mid: '10 000 – 15 000 €',
                    haut: '20 000 – 35 000 €',
                  },
                  {
                    traitement: 'Cuisine complète 10–15 m²',
                    bas: '8 000 – 12 000 €',
                    mid: '15 000 – 25 000 €',
                    haut: '30 000 – 55 000 €',
                  },
                  {
                    traitement: 'Plan de travail seul (3 ml)',
                    bas: '400 – 600 €',
                    mid: '900 – 1 500 €',
                    haut: '2 000 – 4 000 €',
                  },
                  {
                    traitement: 'Crédence (3 m²)',
                    bas: '80 – 150 €',
                    mid: '200 – 400 €',
                    haut: '500 – 800 €',
                  },
                  {
                    traitement: 'Électroménager intégré (lot)',
                    bas: '1 500 – 2 500 €',
                    mid: '3 000 – 5 000 €',
                    haut: '7 000 – 15 000 €',
                  },
                  {
                    traitement: 'Plomberie + électricité',
                    bas: '1 500 – 2 500 €',
                    mid: '2 500 – 4 000 €',
                    haut: '4 000 – 7 000 €',
                  },
                ].map((row, i) => (
                  <tr key={row.traitement} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.traitement}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.bas}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.mid}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.haut}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Astuces pour optimiser son budget cuisine à Paris
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Conserver les caissons existants en bon état et remplacer uniquement les façades : économie de 30 à 50 % sur la cuisine",
                "Choisir un plan de travail quartz plutôt que marbre : 2× moins cher pour un rendu similaire et bien meilleure durabilité",
                "Acheter l'électroménager en déstockage ou lors des soldes : économie de 20 à 40 %",
                "Opter pour une crédence en peinture ardoise ou tableau noir : solution design à moins de 100 €",
                "Grouper les travaux cuisine + salle de bain pour réduire les frais fixes d'artisan (déplacement, protection chantier)",
                "Demander plusieurs devis et vérifier que chaque poste est bien détaillé (matériaux + pose séparés)",
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

      {/* Guides connexes */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Guides connexes</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/renovation-cuisine-ouverte-paris', title: 'Rénovation cuisine ouverte Paris' },
              { href: '/blog/renovation-cuisine-studio-paris', title: 'Rénovation cuisine studio Paris' },
              { href: '/blog/ouverture-cuisine-salon-paris', title: 'Ouverture cuisine salon Paris' },
              { href: '/blog/peinture-cuisine-paris', title: 'Peinture cuisine Paris' },
              { href: '/blog/carrelage-appartement-paris', title: 'Carrelage appartement Paris' },
              { href: '/blog/budget-renovation-paris-2025', title: 'Budget rénovation Paris 2025' },
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
          Obtenez un devis pour votre cuisine parisienne
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit à domicile. Devis détaillé par poste sous 48h. Artisan spécialisé Paris et Île-de-France.
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
