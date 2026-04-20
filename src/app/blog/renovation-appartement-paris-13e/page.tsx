import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Paris 13e', item: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-13e' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Paris 13e : artisan & prix 2025 | Espace Design',
  description: "Rénovation appartement dans le 13e arrondissement de Paris : Butte-aux-Cailles, Chinatown, Tolbiac. Artisan local, devis gratuit 48h.",
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-13e',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quels types de biens trouve-t-on dans le 13e arrondissement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le 13e arrondissement offre une très grande diversité de biens : maisons de ville à la Butte-aux-Cailles (construites à la fin du XIXe siècle), grands immeubles modernes du secteur Tolbiac-Olympiades (années 1960-1980), logements anciens autour du boulevard de l'Hôpital et appartements récents dans le nouveau quartier Paris Rive Gauche. Cette diversité implique des approches de rénovation très différentes selon le secteur.",
      },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte une rénovation dans le 13e arrondissement en 2025 ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dans le 13e, le coût d'une rénovation dépend fortement du type de bien. Un rafraîchissement (peintures, sols, luminaires) coûte entre 400 et 800 €/m². Une rénovation complète d'un appartement ancien (plomberie, électricité, cuisine, salle de bain) se situe entre 1 000 et 1 800 €/m². La rénovation d'un appartement dans une tour Olympiades (années 1970) est souvent moins coûteuse structurellement mais nécessite une attention particulière à l'isolation acoustique et thermique.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quelles sont les particularités de la rénovation dans les tours du 13e ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les tours du 13e (Italie, Olympiades) ont été construites dans les années 1960-1980 avec des standards d'isolation acoustique et thermique aujourd'hui obsolètes. La rénovation doit impérativement traiter : l'isolation phonique entre appartements (plancher flottant, cloisons avec laine acoustique), l'isolation thermique des façades rideaux (double vitrage, calfeutrage), et la mise aux normes de l'installation électrique (souvent sous-dimensionnée). Budget isolation phonique : 80 à 150 €/m².",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Paris 13e : artisan & prix 2025 | Espace Design',
  description: "Rénovation appartement dans le 13e arrondissement de Paris : Butte-aux-Cailles, Chinatown, Tolbiac. Artisan local, devis gratuit 48h.",
}

export default function ArticleParis13e() {
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
            Rénovation Appartement Paris 13e : artisan &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le 13e arrondissement est l&apos;un des plus contrastés de Paris : maisons de village à la Butte-aux-Cailles, tours modernes aux Olympiades, nouveau quartier Paris Rive Gauche. Chaque secteur a ses spécificités techniques et ses contraintes propres. Ce guide fait le point sur les prix et les points de vigilance pour rénover dans le 13e.
          </p>
        </div>
      </section>

      {/* Section 1 — Profil du quartier */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              13e arrondissement : un patchwork architectural unique à Paris
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Peu d&apos;arrondissements parisiens offrent une telle diversité architecturale. Le 13e juxtapose des maisons de ville du XIXe siècle autour de la Butte-aux-Cailles, des immeubles haussmanniens boulevard Auguste-Blanqui, de grandes tours des années 1970 dans le secteur Olympiades, et des constructions contemporaines dans le nouveau quartier Paris Rive Gauche sur les anciennes emprises ferroviaires.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Cette diversité implique des approches de rénovation radicalement différentes selon le secteur. Un artisan habitué aux tours du 13e ne sera pas nécessairement le plus adapté pour rénover une maison à la Butte-aux-Cailles, et vice versa.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Butte-aux-Cailles : maisons de ville et charme de village',
                  detail: 'Ce secteur préservé du 13e concentre des maisons individuelles de la fin du XIXe siècle, des immeubles de petite hauteur et une atmosphère de village unique à Paris. Les rénovations y sont souvent contraintes par des règles de protection patrimoniale (façades, toitures). Prévoyez une déclaration préalable pour tout ravalement.',
                },
                {
                  enjeu: 'Olympiades et Chinatown : towers des années 1970',
                  detail: "Le secteur Olympiades-Choisy concentre les grandes tours construites dans les années 1960-1980. Ces appartements souffrent souvent d'une isolation acoustique et thermique insuffisante. La rénovation doit prioritairement adresser ces deux points avant les finitions.",
                },
                {
                  enjeu: 'Paris Rive Gauche : appartements récents à rénover',
                  detail: 'Le nouveau quartier Paris Rive Gauche (Tolbiac, Masséna, Bruneseau) regroupe des constructions des années 2000-2020. Ces appartements récents nécessitent des rénovations plus légères (peintures, sols, cuisine) mais les règles de copropriété peuvent être strictes sur les heures de travaux.',
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

      {/* Section 2 — Spécificités techniques */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Spécificités techniques selon le type de bien dans le 13e
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le type de bien dans le 13e conditionne entièrement la nature des travaux à prévoir. Voici les points techniques essentiels par catégorie.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Isolation acoustique des tours',
                solution: "Les tours des années 1970 transmettent fortement les bruits d'impact (pas, chutes) et aériens. La solution la plus efficace est la pose d'un plancher flottant (laine acoustique + chape sèche) et la réalisation de cloisons doubles avec laine phonique. Réduction du bruit possible : 8 à 12 dB.",
                cout: '80 – 150 €/m²',
              },
              {
                titre: 'Mise aux normes électrique (années 1970)',
                solution: "Les installations électriques des appartements des années 1970 sont souvent sous-dimensionnées (tableau 6 disjoncteurs, pas de différentiel par circuit). La remise aux normes NF C 15-100 est indispensable avant tout aménagement neuf de cuisine ou salle de bain.",
                cout: '3 000 – 8 000 €',
              },
              {
                titre: 'Rénovation cuisine et SDB (toutes périodes)',
                solution: "La cuisine et la salle de bain représentent 40 à 60 % du budget de rénovation dans le 13e. Budget salle de bain complète : 8 000 à 18 000 €. Budget cuisine équipée : 6 000 à 20 000 € selon équipements.",
                cout: '8 000 – 20 000 €',
              },
              {
                titre: 'Parquet ancien Butte-aux-Cailles',
                solution: "Les maisons de la Butte-aux-Cailles disposent souvent de parquets anciens en chêne massif (lames de 70 à 90 mm) qu'il vaut mieux rénover que remplacer. Ponçage et vitrification : 30 à 60 €/m². Remplacement complet : 80 à 150 €/m².",
                cout: '30 – 60 €/m² (réno)',
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

      {/* Section 3 — Prix */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix d&apos;une rénovation dans le 13e arrondissement en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix de rénovation dans le 13e varient selon le secteur et l&apos;état du bien. Les appartements modernes des tours nécessitent souvent moins de travaux structurels mais une isolation acoustique renforcée. Les maisons de la Butte-aux-Cailles ont des spécificités patrimoniales.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Type de bien</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Description</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    niveau: 'Rafraîchissement',
                    prestations: 'Peinture, sol, luminaires — sans modification des installations',
                    prixM2: '400 – 800 €',
                  },
                  {
                    niveau: 'Rénovation partielle (cuisine ou SDB)',
                    prestations: 'Refonte d\'une pièce humide avec mise aux normes',
                    prixM2: '800 – 1 200 €',
                  },
                  {
                    niveau: 'Rénovation complète appartement ancien',
                    prestations: 'Électricité, plomberie, cuisine, SDB, sols, peintures',
                    prixM2: '1 000 – 1 800 €',
                  },
                  {
                    niveau: 'Rénovation tour années 1970 + isolation',
                    prestations: 'Rénovation complète + traitement phonique + mise aux normes',
                    prixM2: '1 200 – 2 000 €',
                  },
                  {
                    niveau: 'Maison de ville Butte-aux-Cailles',
                    prestations: 'Rénovation complète maison individuelle avec contraintes patrimoniales',
                    prixM2: '1 500 – 2 500 €',
                  },
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

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils spécifiques pour rénover dans le 13e
            </h3>
            <div className="space-y-3">
              {[
                'Vérifier les règles de copropriété avant de démarrer — certaines tours du 13e ont des règlements stricts sur les heures de travaux',
                'Traiter l\'isolation acoustique en priorité dans les appartements des années 1970 — amélioration significative du confort',
                'Rénover le parquet ancien plutôt que le remplacer à la Butte-aux-Cailles — meilleur rapport qualité/valeur',
                'Anticiper la mise aux normes électrique dans tout appartement construit avant 1990',
                'Déposer une déclaration préalable pour les travaux de façade dans les secteurs protégés de la Butte-aux-Cailles',
                'Comparer 3 devis minimum — les prix varient fortement selon les artisans dans le 13e',
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
              { href: '/blog/isolation-phonique-paris', title: 'Isolation phonique appartement Paris' },
              { href: '/blog/renovation-appartement-ancien-paris', title: 'Rénover un appartement ancien à Paris' },
              { href: '/blog/parquet-massif-paris', title: 'Parquet massif Paris — pose & prix' },
              { href: '/blog/renovation-salle-de-bain-prix-paris', title: 'Prix rénovation salle de bain Paris 2025' },
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
              { href: '/renovation-paris-13e', label: 'Paris 13e' },
              { href: '/renovation-paris-14e', label: 'Paris 14e' },
              { href: '/renovation-paris-12e', label: 'Paris 12e' },
              { href: '/renovation-paris-5e', label: 'Paris 5e' },
              { href: '/renovation-paris-15e', label: 'Paris 15e' },
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-paris-20e', label: 'Paris 20e' },
              { href: '/renovation-paris-19e', label: 'Paris 19e' },
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
          Vous rénovez un bien dans le 13e arrondissement ?
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Butte-aux-Cailles, Olympiades, Tolbiac — devis gratuit sous 48h dans le 13e.
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
