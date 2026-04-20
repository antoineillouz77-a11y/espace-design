import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Paris 19e', item: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-19e' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Paris 19e : artisan & prix 2025 | Espace Design',
  description: "Rénovation appartement dans le 19e arrondissement de Paris : Buttes-Chaumont, Belleville, Villette. Artisan local, devis gratuit 48h.",
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-19e',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quels types de biens trouve-t-on dans le 19e arrondissement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le 19e arrondissement présente un mix très varié entre quartiers populaires d'origine et zones en cours de gentrification. Autour des Buttes-Chaumont, on trouve des immeubles anciens des années 1900-1930, très prisés et en cours de rénovation intensive. Le secteur Belleville-Jourdain est plus bohème avec des ateliers d'artistes et des appartements anciens. Le quartier La Villette, en pleine transformation depuis l'arrivée des studios Hermès et de nombreux projets culturels, concentre des lofts et des espaces reconvertis très recherchés.",
      },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte une rénovation dans le 19e arrondissement en 2025 ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le 19e reste l'un des arrondissements les plus accessibles de Paris à l'achat, ce qui en fait un marché très actif pour la rénovation. Un rafraîchissement coûte entre 400 et 800 €/m². Une rénovation complète d'un appartement ancien se situe entre 900 et 1 600 €/m² — légèrement en dessous de la moyenne parisienne. Pour un 2 pièces de 45 m² à rénover entièrement, comptez entre 40 000 et 72 000 €.",
      },
    },
    {
      '@type': 'Question',
      name: 'Le 19e arrondissement est-il intéressant pour l\'investissement locatif rénové ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, le 19e est l'un des meilleurs arrondissements parisiens pour l'investissement locatif rénové en 2025. Les prix d'acquisition restent inférieurs à la moyenne parisienne (environ 8 000 à 10 000 €/m² selon le secteur), le quartier est en forte valorisation (Buttes-Chaumont, Villette, Jourdain), et la demande locative est soutenue. La stratégie optimale est d'acquérir un bien vétuste à prix bas, le rénover complètement (1 000 à 1 600 €/m²) et le louer meublé (LMNP). Le rendement brut peut atteindre 5 à 7 %.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Paris 19e : artisan & prix 2025 | Espace Design',
  description: "Rénovation appartement dans le 19e arrondissement de Paris : Buttes-Chaumont, Belleville, Villette. Artisan local, devis gratuit 48h.",
}

export default function ArticleParis19e() {
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
            Rénovation Appartement Paris 19e : artisan &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le 19e arrondissement est en pleine transformation. Entre la quiétude bourgeoise des Buttes-Chaumont, l&apos;effervescence créative de Belleville et la renaissance du bassin de la Villette, le 19e attire de plus en plus de propriétaires souhaitant rénover. C&apos;est l&apos;un des arrondissements les plus dynamiques pour la rénovation en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Profil du quartier */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              19e arrondissement : mix populaire, bobo et bassin de la Villette en pleine transformation
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le 19e est un arrondissement de contrastes. Historiquement ouvrier et populaire, il connaît depuis une dizaine d&apos;années une transformation profonde portée par plusieurs facteurs : la valorisation du bassin de la Villette (désormais la plus grande plage de Paris), l&apos;attractivité du parc des Buttes-Chaumont, l&apos;arrivée de nombreux créatifs et artisans dans le secteur Belleville-Jourdain.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Ce mouvement de fond se traduit par une activité de rénovation intense. Les prix d&apos;achat restent encore en dessous de la moyenne parisienne, ce qui en fait l&apos;un des marchés les plus actifs pour la rénovation en vue de la location ou de la revente.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Buttes-Chaumont — le quartier le plus valorisé du 19e',
                  detail: "Le secteur Buttes-Chaumont (autour du parc, rue de Crimée, rue Manin) est le plus prisé du 19e. Les immeubles anciens des années 1900-1930 y sont très recherchés. La rénovation y est souvent haut de gamme (parquet massif, cuisine ouverte, salle de bain moderne) en raison du niveau de prix élevé des biens à l'achat.",
                },
                {
                  enjeu: 'Belleville et Jourdain — esprit bobo et ateliers d\'artistes',
                  detail: "Le secteur Belleville-Jourdain est le coeur créatif du 19e. Ateliers d'artistes, appartements anciens mal distribués, petites cours intérieures — ces biens ont un fort potentiel de transformation. La rénovation y est souvent orientée vers l'optimisation de l'espace (décloisonnement, cuisine ouverte) et la création d'un esprit atelier.",
                },
                {
                  enjeu: 'La Villette — lofts et espaces reconvertis',
                  detail: "Le secteur La Villette connaît une transformation spectaculaire. D'anciennes friches industrielles et entrepôts sont convertis en lofts et appartements atypiques. Ces espaces nécessitent des rénovations complètes incluant isolation, plomberie et électricité from scratch — mais offrent un potentiel architectural unique.",
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
            Travaux les plus fréquents dans le 19e arrondissement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le 19e concentre beaucoup de biens anciens vétustes à fort potentiel. Voici les travaux les plus fréquemment réalisés.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Rénovation complète appartement vétuste',
                solution: "La rénovation complète (électricité, plomberie, cuisine, salle de bain, sols, peintures) est le scénario le plus courant dans le 19e, notamment pour les appartements acquis dans le cadre d'un investissement locatif. Durée : 6 à 12 semaines selon la surface.",
                cout: '900 – 1 600 €/m²',
              },
              {
                titre: 'Décloisonnement et cuisine ouverte',
                solution: "Les appartements anciens du 19e sont souvent très découpés avec des couloirs et des chambres sans lumière naturelle. L'abattement des murs non porteurs et la création d'une cuisine ouverte sur le séjour transforment radicalement la luminosité et le volume perçu.",
                cout: '3 000 – 8 000 €',
              },
              {
                titre: 'Mise aux normes électrique et plomberie',
                solution: "Indispensable dans tous les biens construits avant 1985. Tableau électrique, câblage, prises de terre, remplacement des canalisations en plomb ou en fonte. Ce poste représente souvent 15 à 20 % du budget total de rénovation.",
                cout: '5 000 – 12 000 €',
              },
              {
                titre: 'Isolation thermique et phonique',
                solution: "Les immeubles anciens du 19e sont peu ou pas isolés. L'isolation par l'intérieur des murs en contact avec l'extérieur (ITI) améliore significativement le confort thermique. L'isolation phonique des planchers réduit la transmission des bruits d'impact entre appartements.",
                cout: '60 – 150 €/m²',
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
            Prix d&apos;une rénovation dans le 19e arrondissement en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le 19e offre les prix de rénovation les plus accessibles parmi les arrondissements parisiens du nord et de l&apos;est. C&apos;est l&apos;un des meilleurs rapports achat + rénovation / valeur finale de tout Paris.
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
                    niveau: 'Rénovation partielle (SDB ou cuisine)',
                    prestations: 'Refonte d\'une pièce humide avec mise aux normes',
                    prixM2: '700 – 1 100 €',
                  },
                  {
                    niveau: 'Rénovation complète appartement ancien',
                    prestations: 'Électricité, plomberie, cuisine, SDB, sols, peintures',
                    prixM2: '900 – 1 600 €',
                  },
                  {
                    niveau: 'Rénovation loft ou espace reconverti',
                    prestations: 'Rénovation from scratch d\'un ancien entrepôt ou atelier',
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
              Conseils spécifiques pour rénover dans le 19e
            </h3>
            <div className="space-y-3">
              {[
                'Viser la rénovation complète d\'un coup pour maximiser la valorisation — éviter les rafraîchissements partiels sur des biens vétustes',
                'Prioriser le secteur Buttes-Chaumont pour les projets à forte valeur ajoutée — le prix de sortie le justifie',
                'Remplacer systématiquement les canalisations en plomb ou en fonte lors de toute rénovation',
                'Traiter l\'isolation thermique des murs en façade — les immeubles anciens du 19e sont très peu isolés',
                'Décloisonner pour créer des espaces ouverts lumineux — fort impact sur la valeur locative et vénale',
                'Consulter le PLU du 19e avant tout projet de création de fenêtres ou velux en façade',
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
              { href: '/blog/renovation-appartement-investissement-paris', title: 'Rénovation investissement locatif Paris' },
              { href: '/blog/renovation-appartement-ancien-paris', title: 'Rénover un appartement ancien à Paris' },
              { href: '/blog/isolation-thermique-appartement-paris', title: 'Isolation thermique appartement Paris' },
              { href: '/blog/renovation-appartement-montmartre-paris', title: 'Rénovation Montmartre Paris 18e' },
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
              { href: '/renovation-paris-19e', label: 'Paris 19e' },
              { href: '/renovation-paris-18e', label: 'Paris 18e' },
              { href: '/renovation-paris-20e', label: 'Paris 20e' },
              { href: '/renovation-paris-10e', label: 'Paris 10e' },
              { href: '/renovation-paris-17e', label: 'Paris 17e' },
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
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
          Vous rénovez un bien dans le 19e arrondissement ?
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Buttes-Chaumont, Belleville, La Villette — devis gratuit sous 48h dans le 19e.
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
