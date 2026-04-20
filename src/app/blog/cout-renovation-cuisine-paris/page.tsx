import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: "Coût Rénovation Cuisine Paris", item: 'https://espacedesignparis.fr/blog/cout-renovation-cuisine-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Coût Rénovation Cuisine Paris : prix au m² et devis artisan 2025",
  description: "Quel est le coût réel d'une rénovation de cuisine à Paris ? Prix au m², fourchettes petit/moyen/grand budget, cuisine IKEA vs sur-mesure, coût main d'oeuvre. Guide complet 2025.",
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/cout-renovation-cuisine-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le coût moyen d'une rénovation de cuisine à Paris en 2025 ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le coût moyen d'une rénovation de cuisine à Paris varie selon le niveau de prestation : petit budget (rénovation légère) de 5 000 à 12 000 €, budget intermédiaire (cuisine complète milieu de gamme) de 12 000 à 28 000 €, haut de gamme ou sur-mesure de 30 000 à 60 000 €. Ces prix incluent main d'oeuvre et matériaux. La spécificité parisienne (escaliers étroits, contraintes de copropriété) peut ajouter 5 à 10 % au devis.",
      },
    },
    {
      '@type': 'Question',
      name: "Cuisine IKEA ou sur-mesure : quelle différence de prix à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Une cuisine IKEA (gamme Sektion ou Axstad) pour 10 m² revient entre 3 000 et 6 000 € en matériaux, auxquels s'ajoute la main d'oeuvre de pose (1 500 à 3 000 €), soit 4 500 à 9 000 € tout compris. Une cuisine sur-mesure chez un ébéniste parisien pour la même surface débute à 15 000 € et peut dépasser 50 000 € pour des matériaux nobles. Le rapport qualité/prix d'IKEA est excellent pour les budgets contraints, à condition d'assurer une pose professionnelle.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel est le coût de la main d'oeuvre pour une rénovation cuisine à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le coût de la main d'oeuvre représente en général 40 à 50 % du budget total d'une rénovation de cuisine. Un artisan à Paris facture entre 35 et 55 euros de l'heure. Pour une cuisine complète de 10 m², la pose seule (meubles, plan de travail, carrelage, électricité, plomberie) représente 5 000 à 12 000 € de main d'oeuvre. Un devis détaillé par poste permet de comparer efficacement les artisans.",
      },
    },
    {
      '@type': 'Question',
      name: "Peut-on rénover sa cuisine à Paris sans travaux lourds ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, une rénovation légère (relooking) permet de transformer une cuisine sans modifier plomberie ni électricité. On remplace uniquement les façades de meubles, le plan de travail et la crédence. Budget : 3 000 à 7 000 €. Cette option est idéale pour les locataires ou les propriétaires souhaitant valoriser leur bien avant une vente. Elle représente 2 à 5 fois moins de travaux que la rénovation complète.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Coût Rénovation Cuisine Paris : prix au m² et devis artisan 2025",
  description: "Quel est le coût réel d'une rénovation de cuisine à Paris ? Prix au m², fourchettes petit/moyen/grand budget, cuisine IKEA vs sur-mesure, coût main d'oeuvre. Guide complet 2025.",
  keywords: [
    "coût rénovation cuisine paris",
    "prix rénovation cuisine paris",
    "budget cuisine paris",
    "artisan cuisine paris",
    "cuisine ikea paris prix",
    "devis cuisine paris",
  ],
}

export default function ArticleCoutRenovationCuisineParis() {
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
            Prix et Coût de Rénovation Cuisine à Paris en 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Vous souhaitez rénover votre cuisine à Paris et vous cherchez des prix concrets ? Ce guide détaille le coût réel d&apos;une rénovation de cuisine en 2025 : fourchettes petit, moyen et grand budget, prix de la main d&apos;oeuvre, comparaison cuisine IKEA vs sur-mesure, et les postes souvent oubliés dans les devis.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-[#1C1C1C] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { val: '5 000 €', label: 'Budget mini relooking cuisine' },
              { val: '18 000 €', label: 'Coût médian cuisine complète' },
              { val: '55 000 €', label: 'Budget cuisine sur-mesure haut de gamme' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-xl sm:text-2xl font-semibold text-[#D4AF37] mb-1">{s.val}</div>
                <div className="text-gray-500 text-[10px] uppercase tracking-wider font-light">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1 — Fourchettes de prix */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Fourchettes de coût selon le type de projet cuisine
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le coût d&apos;une rénovation de cuisine à Paris dépend avant tout de l&apos;ampleur des travaux et du niveau de gamme des matériaux. Trois profils de projets se distinguent nettement.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              À Paris, la surface moyenne d&apos;une cuisine est de 8 à 12 m² dans un appartement haussmannien, et de 4 à 6 m² dans un studio ou deux-pièces. Ces contraintes d&apos;espace imposent souvent des aménagements sur-mesure qui peuvent augmenter le coût de 15 à 25 % par rapport à une cuisine standard.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: "Petit budget — Relooking 3 000 à 8 000 €",
                  detail: "Conservation des caissons et de la plomberie existante. Remplacement des façades (portes, tiroirs), du plan de travail stratifié (80 à 180 €/ml), de la crédence et de la peinture. Nouvelle robinetterie si besoin. Durée : 3 à 7 jours. Idéal pour les locataires ou les propriétaires qui souhaitent moderniser sans investissement lourd. Le relooking cuisine est la solution la plus rapide avec le meilleur retour visuel par euro investi.",
                },
                {
                  enjeu: "Budget intermédiaire — Rénovation complète 10 000 à 28 000 €",
                  detail: "Dépose et remplacement de la cuisine entière (caissons, façades, plan de travail quartz 300 à 600 €/ml). Nouveau carrelage sol et crédence. Électroménager milieu de gamme intégré. Mise aux normes électriques (circuits dédiés four, hotte, lave-vaisselle). Déplacement léger de plomberie si nécessaire. Durée : 2 à 4 semaines. Ce budget correspond à une cuisine IKEA haut de gamme ou une marque française (Schmidt, Mobalpa).",
                },
                {
                  enjeu: "Grand budget — Cuisine premium ou sur-mesure 30 000 à 60 000 €",
                  detail: "Cuisine entièrement conçue par un ébéniste ou une marque haut de gamme (Bulthaup, SieMatic, Leicht). Plan de travail en marbre, quartz premium ou inox brossé (600 à 1 200 €/ml). Électroménager grand chef (Miele, Gaggenau, Wolf). Îlot central avec plaque intégrée. Réfection complète de l'électricité et de la plomberie. Éclairage LED architectural. Ce niveau de prestation est courant dans les appartements des 6e, 7e, 8e et 16e arrondissements.",
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

      {/* Section 2 — Facteurs de coût */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Les facteurs qui influencent le coût à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Au-delà du niveau de gamme, plusieurs facteurs spécifiques à Paris peuvent faire varier le coût final d&apos;une rénovation de cuisine de 10 à 30 %.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: "Accessibilité du chantier",
                cout: "+5 à +15 %",
                detail: "Les appartements parisiens sans ascenseur ou avec escalier en colimaçon compliquent la livraison des matériaux. La manutention de meubles lourds au 4e étage sans ascenseur peut représenter un surcoût de 300 à 800 € selon le volume.",
              },
              {
                titre: "Contraintes de copropriété",
                cout: "Variable",
                detail: "Tout déplacement de plomberie ou modification de structure (ouverture d'une cloison) requiert l'accord du syndic. Les horaires de travaux sont souvent limités (8h-18h en semaine). Ces contraintes allongent la durée du chantier et le coût associé.",
              },
              {
                titre: "Etat de l'existant",
                cout: "+1 000 à +5 000 €",
                detail: "Dans un appartement ancien (avant 1970), la plomberie en plomb ou les circuits électriques vétustes imposent une mise aux normes systématique. La découverte d'humidité derrière les anciens meubles peut aussi générer des travaux imprévus.",
              },
              {
                titre: "Configuration de l'espace",
                cout: "+10 à +25 %",
                detail: "Une cuisine en angle, avec des murs non perpendiculaires (fréquent dans l'haussmannien) ou des niches sous gaine technique, exige des découpes sur-mesure et davantage de temps de pose. Le coût de pose au mètre linéaire est plus élevé en configuration complexe.",
              },
              {
                titre: "Saison et délais",
                cout: "Variable",
                detail: "À Paris, les artisans qualifiés sont souvent réservés 4 à 8 semaines à l'avance. Programmer les travaux hors vacances scolaires (octobre ou février) permet parfois d'obtenir de meilleurs délais. Un chantier urgentissime peut coûter 10 à 20 % de plus.",
              },
              {
                titre: "Travaux techniques (électricité + plomberie)",
                cout: "2 000 à 6 000 €",
                detail: "Ce poste est souvent sous-estimé. La norme NF C 15-100 impose des circuits dédiés pour four, hotte et lave-vaisselle. Si le tableau électrique est ancien, la mise aux normes peut représenter 1 500 à 3 000 € supplémentaires, indépendamment des travaux cuisine.",
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

      {/* Section 3 — IKEA vs sur-mesure */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Cuisine IKEA vs sur-mesure : comparaison de coût à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le choix entre une cuisine IKEA et une cuisine sur-mesure est le premier arbitrage budgétaire. Voici une comparaison objective pour une cuisine de 10 m² à Paris en 2025.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: "Cuisine IKEA (gamme Sektion / Axstad)",
                prix: "4 500 – 9 000 € posée",
                detail: "Matériaux IKEA pour 10 m² (caissons, façades, plan de travail) : 2 500 à 5 000 €. Main d'oeuvre de pose professionnelle : 2 000 à 4 000 €. La cuisine IKEA est une excellente option pour les budgets contraints. Ses caissons sont robustes et le catalogue de façades étendu. Limite : peu de solutions pour les configurations atypiques (angles biais, poutres, niches).",
              },
              {
                type: "Cuisine sur-mesure artisan ou ébéniste",
                prix: "12 000 – 35 000 €",
                detail: "Conception entièrement adaptée à votre espace, y compris les angles biais, les sous-pentes et les niches. Matériaux haut de gamme (MDF laqué, bois massif, laque piano). La main d'oeuvre représente 50 à 60 % du total. Délai de fabrication : 4 à 10 semaines. Idéale pour les appartements haussmanniens aux configurations irrégulières.",
              },
              {
                type: "Cuisine marque française milieu de gamme (Schmidt, Mobalpa)",
                prix: "8 000 – 20 000 €",
                detail: "Intermédiaire entre IKEA et le sur-mesure. Le configurateur en showroom propose plus de personnalisation qu'IKEA. Fabrication française, garantie 10 ans sur les caissons. Main d'oeuvre incluse dans la plupart des devis. Délai de livraison : 6 à 10 semaines. Bon rapport qualité/prix pour les appartements standards.",
              },
              {
                type: "Cuisine premium importée (Bulthaup, SieMatic, Leicht)",
                prix: "30 000 – 80 000 €",
                detail: "Positionnement haut de gamme avec fabrication allemande ou scandinave. Design épuré, charnières invisibles, tiroirs amortis. Plan de travail en pierre naturelle ou quartz premium. Conseiller dédié, installation par techniciens spécialisés. Recommandée pour les projets de prestige où la cuisine est un élément architectural central.",
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

      {/* Section 4 — Tableau de prix et astuces */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Tableau des coûts par poste — Cuisine Paris 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Prix fourniture et pose inclus, pratiqués par un artisan parisien en 2025.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Poste</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Entrée de gamme</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Milieu de gamme</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Haut de gamme</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { traitement: "Meubles cuisine (caissons + façades)", bas: "2 000 – 4 000 €", mid: "5 000 – 10 000 €", haut: "15 000 – 40 000 €" },
                  { traitement: "Plan de travail (3 ml)", bas: "250 – 500 €", mid: "900 – 1 800 €", haut: "2 500 – 5 000 €" },
                  { traitement: "Crédence (3 m²)", bas: "80 – 150 €", mid: "200 – 450 €", haut: "600 – 1 200 €" },
                  { traitement: "Carrelage sol cuisine", bas: "20 – 35 €/m²", mid: "40 – 70 €/m²", haut: "80 – 150 €/m²" },
                  { traitement: "Électroménager intégré (lot)", bas: "1 500 – 2 500 €", mid: "3 000 – 6 000 €", haut: "8 000 – 20 000 €" },
                  { traitement: "Plomberie cuisine", bas: "300 – 800 €", mid: "1 000 – 2 000 €", haut: "2 500 – 4 500 €" },
                  { traitement: "Electricité (circuits + tableau)", bas: "800 – 1 500 €", mid: "1 500 – 2 500 €", haut: "2 500 – 5 000 €" },
                  { traitement: "Main d'oeuvre pose cuisine", bas: "1 500 – 2 500 €", mid: "3 000 – 5 000 €", haut: "5 000 – 10 000 €" },
                ].map((row, i) => (
                  <tr key={row.traitement} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium text-sm">{row.traitement}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light text-sm">{row.bas}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium text-sm">{row.mid}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light text-sm">{row.haut}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              6 conseils pour réduire le coût de sa rénovation cuisine à Paris
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Conserver les caissons en bon état et remplacer uniquement les façades : économie de 30 à 50 % sur la partie mobilier",
                "Choisir le quartz plutôt que le marbre : même esthétique premium, 2 fois moins cher et bien plus durable",
                "Acheter l'électroménager hors artisan (déstockage, Black Friday) et ne confier que la pose : économie de 20 à 40 %",
                "Grouper cuisine + salle de bain dans le même chantier pour mutualiser les frais fixes (protection, déplacements)",
                "Opter pour une crédence en peinture effet ardoise ou en bois plutôt que zellige : économie de 60 % sur ce poste",
                "Demander un devis détaillé poste par poste et vérifier que main d'oeuvre et matériaux sont dissociés",
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
              { href: '/blog/prix-renovation-cuisine-paris', title: 'Prix rénovation cuisine Paris' },
              { href: '/blog/renovation-cuisine-ouverte-paris', title: 'Rénovation cuisine ouverte Paris' },
              { href: '/blog/installation-cuisine-ikea-paris', title: 'Installation cuisine IKEA Paris' },
              { href: '/blog/ouverture-cuisine-salon-paris', title: 'Ouverture cuisine sur salon Paris' },
              { href: '/blog/credence-cuisine-paris', title: 'Crédence cuisine Paris' },
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
          Obtenez un devis précis pour votre cuisine à Paris
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit à domicile. Devis détaillé par poste sous 48h. Artisan spécialisé Paris et petite couronne.
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
