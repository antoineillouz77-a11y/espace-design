import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Travaux Copropriété Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-copropriete-travaux-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Travaux en Copropriété Paris : autorisations, règles et artisan 2025 | Espace Design",
  description: "Tout savoir sur les travaux en copropriété à Paris : autorisations, règlements, parties communes vs privatives. Guide pratique et prix 2025.",
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-copropriete-travaux-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quels travaux nécessitent une autorisation de copropriété à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "En copropriété parisienne, les travaux nécessitant une autorisation de l'assemblée générale sont : modification des parties communes (couloir, cage d'escalier, façade), percement d'un mur porteur ou d'une trémie d'escalier, déplacement de radiateurs alimentés par le réseau collectif, modification de l'aspect extérieur (fenêtres, volets), et installation d'une climatisation avec groupe extérieur visible. Les travaux purement intérieurs (peinture, sol flottant, cuisine, salle de bain) ne nécessitent généralement pas d'autorisation.",
      },
    },
    {
      '@type': 'Question',
      name: 'Comment gérer les nuisances sonores lors de travaux à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "À Paris, les travaux bruyants sont réglementés par arrêté préfectoral : autorisés du lundi au vendredi de 7h à 22h, le samedi de 9h à 19h, et le dimanche de 10h à 12h. Certaines copropriétés ont des règlements plus stricts (interdiction le dimanche, pause méridienne obligatoire). Avant tout chantier, informez vos voisins par courrier avec la durée estimée des travaux. Un artisan professionnel est formé à respecter ces contraintes et à minimiser les nuisances.",
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on abattre un mur en copropriété parisienne ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'abattage de murs en copropriété à Paris suit des règles précises. Les murs non porteurs intérieurs à votre appartement peuvent être abattus librement (vérifier quand même le règlement de copropriété). Les murs porteurs nécessitent une étude de structure par un bureau d'études, une déclaration préalable en mairie, et parfois une autorisation de la copropriété si le mur est en limite de lot. L'artisan doit travailler avec une note de calcul validée par un ingénieur structure.",
      },
    },
    {
      '@type': 'Question',
      name: 'Qui paie les travaux en parties communes dans un immeuble parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les travaux en parties communes sont votés et financés par l'ensemble des copropriétaires, proportionnellement à leurs tantièmes. Les travaux urgents (réparation toiture, ascenseur en panne) peuvent être engagés sans vote préalable par le syndic. Les travaux d'embellissement (ravalement de façade, rénovation du hall) sont votés en assemblée générale à la majorité absolue. Le fonds de travaux obligatoire (cotisation annuelle) finance les travaux prévisibles à moyen terme.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Travaux en Copropriété Paris : autorisations, règles & artisan 2025 | Espace Design",
  description: "Tout savoir sur les travaux en copropriété à Paris : autorisations, règlements, parties communes vs privatives. Guide pratique et prix 2025.",
}

export default function ArticleTravaxCopropriete() {
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
            Guides
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Travaux en Copropriété Paris : autorisations, règles et artisan 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Rénover un appartement dans un immeuble parisien en copropriété implique de respecter des règles précises : parties communes, règlement de copropriété, déclarations obligatoires. Guide complet pour mener vos travaux sereinement en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Parties privatives vs communes */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Parties privatives vs parties communes : ce que vous pouvez faire
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              La première étape avant tout projet de rénovation en copropriété est d&apos;identifier clairement ce qui appartient à la partie privative (votre lot) et ce qui relève des parties communes. Cette distinction conditionne entièrement les autorisations nécessaires.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              En cas de doute, consultez le règlement de copropriété et les plans du lot cadastral. Votre syndic peut également vous renseigner. Espace Design vous accompagne dans cette vérification préalable avant de commencer tout chantier.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Parties privatives — libre disposition',
                  detail: 'Tout ce qui est à l\'intérieur de votre appartement et n\'affecte pas la structure ou les installations communes : peinture, revêtements de sol (hors chape), cloisons non porteuses, cuisine, salle de bain (hors colonnes montantes), éclairage intérieur. Ces travaux sont libres et ne nécessitent aucune autorisation de copropriété.',
                },
                {
                  enjeu: 'Éléments mitoyens — à vérifier',
                  detail: 'Certains éléments sont à la frontière : les fenêtres (souvent partie commune extérieure même si à l\'intérieur du lot), les volets, les balcons (dalle = partie commune, revêtement = parfois privatif), les gaines et colonnes de plomberie (parties communes si traversant plusieurs lots). Toujours vérifier avant de modifier.',
                },
                {
                  enjeu: 'Parties communes — autorisation obligatoire',
                  detail: 'Hall d\'entrée, cage d\'escalier, couloirs, façade, toiture, sous-sol commun, gaines techniques communes. Tout travail sur ces éléments doit être voté en assemblée générale (majorité simple, absolue ou double selon l\'importance). Réaliser des travaux sur parties communes sans autorisation expose à des recours de la copropriété.',
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

      {/* Section 2 — Types d'autorisation */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Types d&apos;autorisation selon les travaux envisagés
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            En copropriété parisienne, les travaux sont soumis à différents niveaux d&apos;autorisation selon leur impact. Connaître ces catégories évite des blocages coûteux en cours de chantier.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Aucune autorisation (travaux libres)',
                solution: 'Peinture, pose de papier peint, pose d\'un parquet flottant (sans destruction de l\'existant), remplacement d\'équipements à l\'identique (robinetterie, luminaires), modification de la décoration intérieure. Travaux libres mais soumis aux horaires autorisés.',
                cout: 'Libre',
              },
              {
                titre: 'Information au syndic',
                solution: 'Travaux importants mais sans impact sur les parties communes : refection de la salle de bain, création d\'une douche italienne, remplacement du chauffage individuel. Une information au syndic (lettre recommandée) est conseillée même si non obligatoire, pour tracer les modifications.',
                cout: 'Conseillé',
              },
              {
                titre: 'Autorisation AG (majorité simple)',
                solution: 'Travaux affectant légèrement les parties communes : changement des fenêtres (aspect extérieur), installation d\'une climatisation avec unité extérieure, travaux sur les balcons. Vote à la majorité des présents et représentés (article 24).',
                cout: 'Vote requis',
              },
              {
                titre: 'Autorisation AG (majorité absolue)',
                solution: 'Travaux modifiant la structure ou l\'usage des parties communes : percement d\'une trémie, modification des gaines, création d\'une ouverture en façade. Vote à la majorité de tous les copropriétaires (article 25). Plus difficile à obtenir, prévoir 6 à 12 mois.',
                cout: 'Vote requis',
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

      {/* Section 3 — Gestion pratique du chantier */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Gestion pratique du chantier en immeuble parisien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Mener un chantier dans un appartement parisien en copropriété implique de gérer les contraintes logistiques et relationnelles avec soin. Un chantier bien organisé préserve les relations de voisinage et évite les conflits avec le syndic.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Protection des parties communes',
                prix: 'Obligatoire',
                detail: 'L\'artisan doit protéger l\'ascenseur, les couloirs et la cage d\'escalier pendant toute la durée des travaux (bâches, plaques de protection). Les dégradations causées aux parties communes par le passage des matériaux sont à la charge du propriétaire qui fait réaliser les travaux.',
              },
              {
                type: 'Évacuation des gravats',
                prix: '200 – 600 €',
                detail: 'L\'évacuation des gravats doit être organisée : benne agréée par la mairie (demander une autorisation de voirie si stationnement sur rue), ou transport en déchetterie par l\'artisan. Il est interdit de déposer des gravats dans les poubelles communes de la copropriété.',
              },
              {
                type: 'Notification aux voisins',
                prix: 'Gratuit',
                detail: 'Informer par écrit les voisins immédiats (dessus, dessous, côtés) de la nature et de la durée des travaux avant le démarrage. Cette démarche amiable préventive évite la majorité des conflits. Indiquer les horaires de chantier et un contact de l\'artisan responsable.',
              },
              {
                type: 'Assurance chantier',
                prix: 'Inclus',
                detail: 'Vérifier que l\'artisan dispose d\'une assurance responsabilité civile professionnelle à jour. En cas de sinistre (fuite, dégât des eaux, dommage aux parties communes), l\'assurance de l\'artisan prend en charge. Espace Design transmet systématiquement son attestation d\'assurance avant le démarrage.',
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

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Checklist avant de démarrer un chantier en copropriété
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Lire le règlement de copropriété pour identifier les contraintes spécifiques',
                'Vérifier si les travaux nécessitent une autorisation de l\'assemblée générale',
                'Informer le syndic par écrit de la nature et durée des travaux',
                'Notifier les voisins immédiats avant le démarrage',
                'Vérifier l\'attestation d\'assurance RC de l\'artisan',
                'Planifier l\'évacuation des gravats en accord avec les règles de la copropriété',
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
              { href: '/blog/renovation-appartement-copropriete-paris', title: 'Rénovation appartement copropriété Paris' },
              { href: '/blog/renovation-cage-escalier-paris', title: 'Rénovation cage escalier Paris' },
              { href: '/blog/ravalement-facade-copropriete-paris', title: 'Ravalement façade copropriété Paris' },
              { href: '/blog/choisir-artisan-renovation-paris', title: 'Choisir un artisan rénovation Paris' },
              { href: '/blog/renovation-hall-immeuble-paris', title: 'Rénovation hall immeuble Paris' },
              { href: '/blog/isolation-phonique-paris', title: 'Isolation phonique Paris' },
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
          Rénovez votre appartement en toute sérénité
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Artisan habitué aux copropriétés parisiennes. Respect des règles et des voisins. Devis sous 48h.
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
