import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Paris 17e', item: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-17e' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Paris 17e : artisan & prix 2025 | Espace Design',
  description: "Rénovation appartement dans le 17e arrondissement de Paris : Batignolles, Ternes, Pereire. Artisan local, devis gratuit 48h.",
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-17e',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quels types de biens trouve-t-on dans le 17e arrondissement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le 17e arrondissement présente une très forte dualité. La partie ouest (Ternes, Pereire, Monceau) est l'une des plus bourgeoises de Paris avec de somptueux immeubles haussmanniens, des appartements spacieux et des surfaces de 80 à 200 m². La partie est (Batignolles, Guy Môquet, Épinettes) est beaucoup plus populaire et bohème, avec des immeubles de rapport anciens, des ateliers d'artistes et des constructions plus modestes. Cette dualité se reflète directement dans les prix de rénovation.",
      },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte une rénovation dans le 17e arrondissement en 2025 ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dans le 17e, le coût varie fortement selon le secteur. Côté Ternes-Pereire (immeubles haussmanniens haut de gamme), comptez entre 1 500 et 3 000 €/m² pour une rénovation complète avec finitions luxe. Côté Batignolles-Épinettes, les prix sont plus proches de la moyenne parisienne : 1 000 à 1 800 €/m² pour une rénovation complète. Un rafraîchissement est entre 400 et 800 €/m² dans les deux secteurs.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quelles sont les spécificités de la rénovation aux Batignolles ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le quartier des Batignolles est en pleine transformation depuis l'arrivée du TGI (nouveau Tribunal de Paris) et la requalification du secteur Cardinet-Clichy. Les immeubles anciens y sont nombreux (construits entre 1880 et 1930) avec des planchers bois, des plafonds parfois bas (2,50 m) et des installations vétustes. La mise aux normes électrique et plomberie est quasi systématique. Le quartier attire de nombreux propriétaires souhaitant rénover pour louer — le ROI y est intéressant.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Paris 17e : artisan & prix 2025 | Espace Design',
  description: "Rénovation appartement dans le 17e arrondissement de Paris : Batignolles, Ternes, Pereire. Artisan local, devis gratuit 48h.",
}

export default function ArticleParis17e() {
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
            Rénovation Appartement Paris 17e : artisan &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le 17e arrondissement est l&apos;un des plus contrastés de la rive droite. Entre les fastueux haussmanniens des Ternes et de Pereire et les immeubles populaires des Batignolles et des Épinettes, les projets de rénovation sont très différents. Ce guide fait le point sur les prix et les spécificités selon les secteurs du 17e.
          </p>
        </div>
      </section>

      {/* Section 1 — Profil du quartier */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              17e arrondissement : deux visages, deux marchés de la rénovation
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              La frontière passe grossièrement par la rue de Rome et le boulevard des Batignolles. À l&apos;ouest : les Ternes, Pereire, Monceau — des quartiers cosus avec de grands immeubles haussmanniens, des surfaces généreuses et une clientèle exigeante sur les finitions. À l&apos;est : les Batignolles, Guy Môquet, les Épinettes — des quartiers populaires en pleine gentrification, où la rénovation est souvent motivée par la mise en location ou la revente.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Le 17e est peu contraint par les règles ABF dans sa grande majorité. Les travaux intérieurs sont libres dans la quasi-totalité des cas. Seuls quelques périmètres autour du Parc Monceau nécessitent une attention particulière sur les façades.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Ternes et Pereire — haussmannien haut de gamme',
                  detail: "Ces secteurs concentrent parmi les plus beaux immeubles du 17e : grandes surfaces (80 à 200 m²), doubles séjours, hauteur sous plafond de 3 à 3,50 m, parquets point de Hongrie, cheminées en marbre, stucs au plafond. La rénovation est ici synonyme de restauration et de mise en valeur — toujours conserver les éléments d'époque qui constituent l'essentiel de la valeur du bien.",
                },
                {
                  enjeu: 'Batignolles — populaire et bobo en mutation',
                  detail: "Le quartier des Batignolles attire depuis quelques années une clientèle jeune et créative séduite par ses commerces de bouche, ses terrasses et sa proximité avec le parc Martin Luther King (le plus récent grand parc de Paris). Les immeubles anciens y nécessitent souvent une rénovation complète mais les prix d'acquisition restent accessibles — ce qui en fait un secteur très intéressant pour l'investissement locatif rénové.",
                },
                {
                  enjeu: 'Épinettes — rénovation complète des immeubles anciens',
                  detail: "Le quartier des Épinettes (autour de la rue de la Jonquière et de la rue Davy) est l'un des plus populaires du 17e, avec des immeubles de rapport construits entre 1880 et 1920. Les appartements y sont souvent vétustes (installations électriques et plomberie d'époque) mais spacieux et lumineux. Le potentiel de valorisation est très élevé après rénovation complète.",
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
            Spécificités techniques : haussmannien, bâti ancien, rénovation investissement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Voici les principaux travaux à anticiper selon le type de bien dans le 17e.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Restauration parquet point de Hongrie',
                solution: "Les appartements haussmanniens des Ternes et Pereire disposent souvent de parquets point de Hongrie en chêne massif d'une largeur de 60 à 80 mm. Ces parquets peuvent être poncés 4 à 5 fois au cours de leur vie — toujours les rénover plutôt que les remplacer. Résultat spectaculaire pour un coût maîtrisé.",
                cout: '35 – 70 €/m²',
              },
              {
                titre: 'Réfection complète salle de bain ancienne',
                solution: "Dans les immeubles des Épinettes et des Batignolles, les salles de bain sont souvent minuscules (2 à 4 m²) et non rénovées depuis les années 1960-1980. La création d'une douche italienne dans un espace réduit est l'une des transformations les plus demandées — elle agrandit visuellement l'espace et valorise le bien.",
                cout: '6 000 – 15 000 €',
              },
              {
                titre: 'Mise aux normes électrique (avant 1990)',
                solution: "Indispensable dans les appartements construits avant 1990. Remplacement du tableau électrique, câblage en encastré, mise en place des prises de terre, conformité NF C 15-100. La mise aux normes est obligatoire lors d'une vente (diagnostic ERNMT).",
                cout: '3 000 – 8 000 €',
              },
              {
                titre: 'Création de cloisons et réorganisation de l\'espace',
                solution: "Les grands appartements des Ternes et Pereire sont parfois mal distribués selon les standards actuels. Abattement de murs non porteurs, création d'une suite parentale, cuisine ouverte sur le salon — ces transformations augmentent sensiblement la valeur du bien.",
                cout: '1 500 – 5 000 € (cloison)',
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
            Prix d&apos;une rénovation dans le 17e arrondissement en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le 17e offre une fourchette de prix très large selon le secteur et le niveau de finition. Les Ternes et Pereire sont parmi les marchés de rénovation les plus exigeants de Paris ; les Batignolles et les Épinettes restent accessibles tout en offrant un fort potentiel de valorisation.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Niveau de prestation</th>
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
                    niveau: 'Rénovation complète Batignolles / Épinettes',
                    prestations: 'Électricité, plomberie, cuisine, SDB, sols, peintures',
                    prixM2: '1 000 – 1 800 €',
                  },
                  {
                    niveau: 'Rénovation haussmannien Ternes / Pereire',
                    prestations: 'Rénovation complète avec restauration des éléments d\'époque',
                    prixM2: '1 500 – 2 500 €',
                  },
                  {
                    niveau: 'Rénovation haut de gamme avec finitions luxe',
                    prestations: 'Marbre, parquet sur mesure, menuiseries bois, domotique',
                    prixM2: '2 500 – 4 000 €',
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
              Conseils spécifiques pour rénover dans le 17e
            </h3>
            <div className="space-y-3">
              {[
                'Toujours restaurer le parquet point de Hongrie plutôt que le remplacer — c\'est un élément de valorisation majeur',
                'Dans les Batignolles et Épinettes, viser une rénovation complète d\'un coup pour maximiser le retour sur investissement',
                'Anticiper la mise aux normes électrique pour tout bien construit avant 1990 — obligatoire à la revente',
                'Ne pas toucher aux cheminées en marbre ni aux stucs — coût de restauration élevé si abîmés',
                'Vérifier l\'état des canalisations plomberie (fonte) avant de démarrer — remplacement souvent nécessaire dans les Épinettes',
                'Consulter un architecte pour les projets de redistribution dans les grands appartements des Ternes',
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
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénover un appartement haussmannien à Paris' },
              { href: '/blog/parquet-massif-paris', title: 'Parquet massif Paris — pose & prix' },
              { href: '/blog/renovation-appartement-investissement-paris', title: 'Rénovation investissement locatif Paris' },
              { href: '/blog/electricite-appartement-paris', title: 'Mise aux normes électrique Paris' },
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
              { href: '/renovation-paris-17e', label: 'Paris 17e' },
              { href: '/renovation-paris-18e', label: 'Paris 18e' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-9e', label: 'Paris 9e' },
              { href: '/renovation-paris-19e', label: 'Paris 19e' },
              { href: '/renovation-paris-20e', label: 'Paris 20e' },
              { href: '/renovation-clichy', label: 'Clichy' },
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
          Vous rénovez un bien dans le 17e arrondissement ?
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Ternes, Batignolles, Épinettes — devis gratuit sous 48h dans le 17e.
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
