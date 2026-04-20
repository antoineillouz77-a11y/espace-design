import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Cuisine Américaine Paris', item: 'https://espacedesignparis.fr/blog/renovation-cuisine-americaine-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Cuisine Américaine Paris : ouverte, semi-ouverte & prix 2025 | Espace Design',
  description: "Aménager une cuisine américaine à Paris : mur porteur, IPN, hotte, îlot. Démarches copropriété, budget et artisan 2025.",
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-cuisine-americaine-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Faut-il l'accord de la copropriété pour ouvrir une cuisine sur le séjour à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Cela dépend du type de mur à abattre. Si le mur est non porteur (cloison légère), les travaux relèvent des parties privatives et ne nécessitent pas l'accord de la copropriété — une simple déclaration de travaux en mairie peut suffire selon la commune. Si le mur est porteur (structure de l'immeuble), les travaux touchent à la structure générale et nécessitent obligatoirement une autorisation de l'assemblée générale de copropriété, un bilan structure réalisé par un bureau d'études, et la pose d'un IPN (poutre métallique) avec scellement. À Paris, la plupart des murs de façade et des murs de refend dans les immeubles haussmanniens sont porteurs.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelle hotte choisir pour une cuisine ouverte dans un appartement parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dans un appartement parisien, la hotte à recyclage (sans gaine vers l'extérieur) est souvent la seule option : percer la façade pour une gaine d'évacuation nécessite l'accord de la copropriété et est souvent refusé. La hotte à recyclage filtre l'air (filtre à charbon actif) et le rejette en cuisine — moins efficace qu'une hotte à évacuation mais largement suffisante pour une cuisine familiale. Pour les cuisines à forte activité (cuissons fréquentes, fritures), une hotte déportée avec filtre charbon haute capacité est recommandée. Entretien : changer les filtres charbon tous les 3 à 6 mois.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel est le budget pour créer une cuisine américaine à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le budget varie fortement selon qu'un mur porteur est à abattre ou non. Sans mur porteur (simple cloison à enlever) : 5 000 à 15 000 € selon le niveau de finition des meubles. Avec mur porteur et IPN : ajouter 5 000 à 15 000 € pour le bilan structure, la mise en oeuvre du sommier métallique et la reprise des finitions (plâtre, peinture). L'îlot central fixe représente 3 000 à 10 000 € selon les équipements intégrés. Au total, une cuisine américaine complète avec IPN et îlot à Paris revient à 15 000 – 40 000 € selon le niveau d'équipement.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Cuisine Américaine Paris : ouverte, semi-ouverte & prix 2025 | Espace Design',
  description: "Aménager une cuisine américaine à Paris : mur porteur, IPN, hotte, îlot. Démarches copropriété, budget et artisan 2025.",
}

export default function ArticleCuisineAmericaine() {
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
            Cuisine Américaine Paris : ouverte, semi-ouverte & prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            La cuisine américaine est l&apos;une des rénovations les plus demandées à Paris : elle agrandit visuellement l&apos;appartement, facilite la convivialité et valorise le bien. Mais entre murs porteurs, copropriété et choix de hotte, le projet est rarement simple. Guide complet 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Ouverte vs semi-ouverte */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Cuisine ouverte vs semi-ouverte : laquelle choisir ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              La cuisine ouverte (entièrement intégrée au séjour) et la cuisine semi-ouverte (séparée par un demi-mur, une verrière ou un îlot) répondent à des usages différents. En appartement parisien, la surface disponible et la gestion des odeurs sont souvent les deux critères décisifs.
            </p>
            <div className="space-y-4">
              {[
                {
                  type: 'Cuisine entièrement ouverte',
                  avantages: 'Espace visuellement agrandissant, lumière traversante, convivialité maximale. La solution préférée dans les appartements parisiens de moins de 60 m².',
                  inconvenients: 'Odeurs de cuisson dans le séjour (hotte à recyclage obligatoire ou haute capacité), bruits de cuisine pendant les repas, cuisine toujours visible.',
                },
                {
                  type: 'Cuisine semi-ouverte (verrière, demi-mur)',
                  avantages: 'Circulation visuelle et lumineuse conservée, odeurs partiellement contenues, cuisine dissimulable visuellement. La verrière atelier est très prisée à Paris.',
                  inconvenients: 'Pas de séparation phonique. Moins agrandissant que l\'ouverture totale. Coût de la verrière à ajouter (2 000 à 5 000 €).',
                },
                {
                  type: 'Cuisine séparée réaménagée',
                  avantages: 'Isolation phonique et olfactive totale. Cuisine fermée idéale pour les familles avec enfants ou les locataires exigeants. Valorise le bien locatif.',
                  inconvenients: 'Pas de gain de surface visuelle. Moins adapté aux petites surfaces. Configuration parfois contrainte par l\'emplacement des évacuations.',
                },
              ].map((el) => (
                <div key={el.type} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-3">{el.type}</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-[#B8960C] font-light mb-1">Avantages</div>
                      <div className="text-gray-600 text-sm font-light leading-relaxed">{el.avantages}</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-gray-400 font-light mb-1">Points de vigilance</div>
                      <div className="text-gray-600 text-sm font-light leading-relaxed">{el.inconvenients}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Mur porteur et IPN */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Mur porteur, bilan structure et IPN : ce que vous devez savoir
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Dans un immeuble parisien, la quasi-totalité des murs séparant la cuisine du séjour sont des murs porteurs. Avant tout travaux, un bilan structure réalisé par un bureau d&apos;études agréé est obligatoire. Il détermine si l&apos;ouverture est possible et quelle poutre (IPN ou HEB) doit reprendre les charges.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                etape: 'Bilan structure (bureau d\'études)',
                prix: '800 – 2 500 €',
                detail: "Diagnostic réalisé par un ingénieur structure. Identifie les murs porteurs, les charges à reprendre et les solutions techniques. Obligatoire pour obtenir l'autorisation de la copropriété et pour la déclaration préalable en mairie. Document remis au maître d'oeuvre.",
              },
              {
                etape: 'Etaiement provisoire',
                prix: 'Inclus dans la mise en oeuvre IPN',
                detail: "Avant toute démolition, étaiement du plancher supérieur (si immeuble collectif) ou de la structure à reprendre. Opération réalisée par des entreprises spécialisées. Ne pas commencer la démolition avant que l'étaiement soit en place et validé.",
              },
              {
                etape: 'Pose de l\'IPN (poutre métallique)',
                prix: '3 000 – 10 000 €',
                detail: "Mise en oeuvre de la poutre métallique (IPN ou HEB) dimensionnée par le bureau d'études. Scellement dans les murs pignons, coffrage bois ou plâtre selon finition souhaitée. Durée : 2 à 4 jours selon la portée. La portée standard dans un appartement parisien est de 3 à 5 mètres.",
              },
              {
                etape: 'Reprise de finitions',
                prix: '2 000 – 6 000 €',
                detail: "Plâtrerie, peinture, sol (raccord parquet ou carrelage), remplacement des moulures si appartement haussmannien. Souvent sous-estimée dans le budget initial — prévoir 20% du coût IPN pour les reprises de finitions.",
              },
            ].map((el) => (
              <div key={el.etape} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.etape}</div>
                  <div className="text-[#B8960C] text-sm font-medium flex-shrink-0">{el.prix}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Hotte et îlot */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Hotte et îlot central : les deux enjeux techniques de la cuisine ouverte
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Une fois l&apos;ouverture réalisée, la hotte et l&apos;éventuel îlot central sont les deux éléments qui conditionnent la qualité de vie au quotidien.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                element: 'Hotte à recyclage (sans gaine)',
                detail: "Solution standard en appartement parisien. Filtre à charbon actif à changer tous les 3 à 6 mois. Les modèles haut débit (700 à 1 000 m³/h) sont recommandés pour les cuisines ouvertes. Prix : 200 à 800 €.",
                prix: '200 – 800 €',
              },
              {
                element: 'Hotte déportée (moteur en combles)',
                detail: "Moteur déporté dans les combles ou le vide sanitaire pour réduire le bruit. Silencieuse et très performante. Nécessite une gaine d'évacuation — souvent refusée en appartement collectif parisien sans accord de l'AG.",
                prix: '1 500 – 4 000 €',
              },
              {
                element: 'Îlot central fixe avec équipements',
                detail: "Plaque de cuisson intégrée, évier, rangements et plan de travail. Solution idéale pour la cuisine ouverte conviviale. Nécessite le passage de l'électricité et de l'eau sous le sol — à anticiper avant la pose du revêtement.",
                prix: '4 000 – 12 000 €',
              },
              {
                element: 'Îlot mobile (plan de travail sur roulettes)',
                detail: "Solution sans travaux : îlot déplaçable, pas de gaine ni de plomberie intégrée. Idéal pour les locataires ou les petits appartements. Largeur minimum recommandée : 90 cm pour une circulation confortable autour.",
                prix: '500 – 2 000 €',
              },
            ].map((el) => (
              <div key={el.element} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.element}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.prix}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Copropriété et démarches */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Copropriété et démarches administratives à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            En appartement parisien, les travaux impactant la structure de l&apos;immeuble sont soumis à des procédures strictes. Il est impératif de les anticiper avant de commander les matériaux ou de débuter le chantier.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                demarche: 'Déclaration préalable de travaux (mairie)',
                detail: "Obligatoire si les travaux modifient la structure ou l'aspect extérieur du bâtiment. À déposer en mairie d'arrondissement à Paris avec le formulaire Cerfa 13703. Délai d'instruction : 1 mois. Sans réponse dans le délai = accord tacite.",
              },
              {
                demarche: "Autorisation de l'assemblée générale de copropriété",
                detail: "Obligatoire pour tout travail sur un mur porteur (structure commune de l'immeuble). La demande doit être inscrite à l'ordre du jour de l'AG et votée à la majorité de l'article 25. Prévoir 3 à 12 mois entre la demande et l'autorisation selon les délais d'AG.",
              },
              {
                demarche: 'Nuisances olfactives et voisinage',
                detail: "Les odeurs de cuisine dans les parties communes (cage d'escalier, couloir) peuvent être source de conflits en copropriété. Une hotte à recyclage efficace avec filtre charbon de qualité est indispensable. En cas de plainte des voisins, une hotte avec gaine d'évacuation en toiture peut être imposée par le syndic.",
              },
            ].map((el) => (
              <div key={el.demarche} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.demarche}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Budget */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Budget cuisine américaine à Paris : tableau comparatif 2025
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Configuration</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget estimé</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Travaux inclus</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { config: 'Cloison non porteuse à enlever', budget: '5 000 – 10 000 €', travaux: 'Démolition + finitions + hotte recyclage' },
                  { config: 'Mur porteur + IPN (portée 3 m)', budget: '12 000 – 22 000 €', travaux: 'Bilan structure + IPN + finitions + hotte' },
                  { config: 'Mur porteur + IPN + îlot fixe', budget: '18 000 – 35 000 €', travaux: 'IPN + îlot équipé (plaque + évier) + finitions' },
                  { config: 'Cuisine ouverte haut de gamme avec verrière', budget: '25 000 – 45 000 €', travaux: 'IPN + verrière atelier + îlot + meubles sur mesure' },
                ].map((row, i) => (
                  <tr key={row.config} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.config}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.budget}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.travaux}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Points clés avant de lancer votre projet
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Vérifier le règlement de copropriété avant tout — certains interdisent explicitement les cuisines ouvertes",
                "Commander le bilan structure avant toute démarche auprès du syndic ou de la mairie",
                "Anticiper les délais d'AG de copropriété : prévoir 3 à 12 mois avant autorisation",
                "Choisir une hotte haute capacité (700+ m³/h) pour les cuisines ouvertes actives",
                "Prévoir le passage de l'électricité et de la plomberie sous le sol avant de poser le revêtement",
                "Intégrer les raccords de revêtement de sol (parquet, carrelage) au budget dès le départ",
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
              { href: '/cuisine-paris', title: 'Rénovation cuisine Paris' },
              { href: '/blog/choisir-carrelage-salle-de-bain', title: 'Choisir son carrelage salle de bain' },
              { href: '/blog/renovation-appartement-paris-1er', title: 'Rénovation appartement Paris 1er' },
              { href: '/blog/renovation-bureau-paris', title: 'Rénovation bureau Paris' },
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
          Créez votre cuisine ouverte à Paris avec un artisan local
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Bilan structure, IPN, finitions : devis gratuit sous 48h. Pilotage complet du chantier.
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
