import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Première Rénovation à Paris : Guide Complet 2025 | Espace Design',
  description:
    "Vous rénovez pour la première fois à Paris ? Ce guide complet vous accompagne étape par étape : budget, choix de l'artisan, démarches copropriété et pièges à éviter.",
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Première rénovation à Paris',
      item: 'https://espacedesignparis.fr/blog/renovation-premiere-fois-paris',
    },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Guide complet pour rénover son appartement à Paris pour la première fois",
  description:
    "Tout ce que doit savoir un primo-rénovateur à Paris : budget, artisans, démarches, délais et pièges à éviter.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
    logo: { '@type': 'ImageObject', url: 'https://espacedesignparis.fr/images/hero.jpg' },
  },
  url: 'https://espacedesignparis.fr/blog/renovation-premiere-fois-paris',
  datePublished: '2025-01-20',
  dateModified: '2025-04-19',
  inLanguage: 'fr-FR',
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Combien de devis faut-il demander avant de choisir un artisan pour rénover à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Il est recommandé de demander au minimum 3 devis comparatifs. Au-delà de 5, cela devient contre-productif. L'objectif n'est pas de choisir le moins cher, mais de comprendre les différences entre les offres : qualité des matériaux proposés, délais, garanties et profil de l'entreprise.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il vider l'appartement avant les travaux de rénovation à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Idéalement oui : un appartement vide est plus facile à rénover, les artisans travaillent plus vite et les risques de dommages sur vos affaires sont éliminés. Si vous habitez sur place, il faut prévoir des zones de vie protégées et accepter que le chantier soit plus long et plus contraignant.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelle durée prévoir pour la rénovation complète d'un appartement à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour un studio ou 2 pièces en rénovation complète, comptez 6 à 10 semaines de travaux. Pour un 3 ou 4 pièces, prévoyez 10 à 16 semaines. Ces délais varient selon la complexité des travaux, la disponibilité des matériaux et les contraintes de copropriété. À Paris, les délais peuvent s'allonger en raison des accès difficiles.",
      },
    },
  ],
}

export default function RenovationPremiereFoisParis() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">
          Guide &amp; Conseils
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
          Rénover pour la première fois à Paris
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Vous venez d&apos;acheter votre premier appartement à Paris et vous vous apprêtez à
          lancer des travaux ? Ce guide vous accompagne étape par étape pour éviter les erreurs
          classiques et bien préparer votre chantier.
        </p>
      </section>

      {/* Contenu */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">

          {/* Section 1 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les 7 étapes d&apos;une première rénovation réussie à Paris
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Rénover un appartement à Paris pour la première fois peut sembler intimidant.
              Le marché parisien de la rénovation est dense, les contraintes nombreuses
              (copropriété, logistique, règlements), et les budgets en jeu sont importants.
              Mais avec une préparation méthodique, il est tout à fait possible de mener son
              premier chantier sereinement.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Voici les étapes essentielles que nous recommandons à tous nos clients qui
              s&apos;engagent dans leur premier projet de rénovation parisien.
            </p>

            <div className="space-y-4">
              {[
                {
                  step: '01',
                  title: "Définir précisément votre projet",
                  detail: "Avant de contacter le moindre artisan, posez-vous les bonnes questions : quelles pièces rénovez-vous ? Quel niveau de finition souhaitez-vous ? L'appartement sera-t-il occupé pendant les travaux ? Ces réponses conditionnent tout le reste.",
                },
                {
                  step: '02',
                  title: "Établir un budget réaliste",
                  detail: "À Paris, une rénovation complète coûte en moyenne 800 à 1 500 €/m² pour un niveau standard, et jusqu'à 2 500 €/m² en haut de gamme. Prévoyez systématiquement une réserve de 10 à 15 % pour les imprévus de chantier.",
                },
                {
                  step: '03',
                  title: "Vérifier les règles de copropriété",
                  detail: "Avant de lancer des travaux touchant les murs porteurs, les façades ou les parties communes, consultez votre règlement de copropriété et, si nécessaire, soumettez une demande en assemblée générale.",
                },
                {
                  step: '04',
                  title: "Sélectionner des artisans sérieux",
                  detail: "Vérifiez systématiquement : assurance décennale en cours de validité, Kbis récent, références sur des chantiers similaires à Paris. Méfiez-vous des devis trop bas — ils cachent souvent des travaux incomplets ou des matériaux bas de gamme.",
                },
                {
                  step: '05',
                  title: "Analyser les devis en détail",
                  detail: "Un bon devis est toujours détaillé poste par poste : dépose, fournitures, main-d'œuvre, finitions. Demandez des précisions sur les marques et références des matériaux. Comparez 3 devis minimum.",
                },
                {
                  step: '06',
                  title: "Organiser la logistique du chantier",
                  detail: "À Paris, l'accès au bâtiment et le stationnement pour les artisans sont souvent compliqués. Prévenez le gardien, reservez un emplacement pour les bennes à gravats si nécessaire, et informez vos voisins.",
                },
                {
                  step: '07',
                  title: "Suivre l'avancement et réceptionner les travaux",
                  detail: "Visitez régulièrement le chantier, ne payez jamais la totalité avant la fin des travaux, et établissez un procès-verbal de réception détaillé à la livraison. Notez toutes les réserves par écrit.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 p-4 bg-[#FAFAF8] rounded-lg">
                  <div className="text-[#D4AF37] font-display text-2xl font-bold leading-none flex-shrink-0 w-8">
                    {item.step}
                  </div>
                  <div>
                    <div className="text-[#1C1C1C] text-sm font-semibold mb-1">{item.title}</div>
                    <p className="text-gray-600 text-sm font-light leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les erreurs à ne surtout pas commettre lors d&apos;une première rénovation à Paris
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Après des centaines de chantiers à Paris, nous avons identifié les erreurs récurrentes
              des propriétaires qui rénovent pour la première fois. Les éviter vous fera économiser
              du temps, de l&apos;argent et beaucoup de stress.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              La première erreur — et la plus coûteuse — est de choisir l&apos;artisan le moins cher
              sans vérifier ses références. À Paris, un artisan peu scrupuleux peut disparaître en
              milieu de chantier, vous laissant avec des travaux à moitié faits et un recours
              juridique long et incertain. La deuxième erreur est de sous-estimer le budget :
              une rénovation de salle de bain présentée à 5 000 € finit souvent à 9 000 € une fois
              les imprévus intégrés. La troisième est de ne pas anticiper les délais : les artisans
              sérieux à Paris sont bookés 3 à 6 mois à l&apos;avance.
            </p>
            <ul className="space-y-2">
              {[
                "Choisir sur le prix seul sans vérifier les garanties et références",
                "Lancer le chantier sans avoir vérifié les règles de copropriété",
                "Ne pas prévoir de réserve budgétaire pour les imprévus (min. 10 %)",
                "Payer la totalité du chantier avant la livraison finale",
                "Oublier de notifier les voisins et de préparer l'accès artisans",
                "Ne pas exiger de devis détaillé avec références matériaux précises",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-gray-600 font-light">
                  <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3 — FAQ */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-6">
              Questions fréquentes des primo-rénovateurs parisiens
            </h2>
            <div className="space-y-5">
              {schemaFAQ.mainEntity.map((q) => (
                <div key={q.name} className="border-l-2 border-[#D4AF37] pl-5">
                  <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                    {q.name}
                  </h3>
                  <p className="text-gray-600 text-sm font-light leading-relaxed">
                    {q.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Voir aussi */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-xl font-semibold text-[#1C1C1C] mb-6">Voir aussi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/prix-renovation-appartement-paris', title: 'Prix rénovation appartement Paris 2025', tag: 'Budget' },
              { href: '/blog/choisir-artisan-renovation-paris', title: 'Comment choisir un artisan rénovateur à Paris ?', tag: 'Conseils' },
              { href: '/blog/artisan-agree-paris', title: 'Pourquoi choisir un artisan agréé à Paris', tag: 'Artisan' },
              { href: '/blog/devis-renovation-paris', title: 'Obtenir un devis de rénovation à Paris', tag: 'Devis' },
            ].map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="block p-4 bg-[#FAFAF8] border border-gray-100 rounded-lg hover:border-[#D4AF37]/40 transition-colors group"
              >
                <span className="text-[10px] uppercase tracking-widest text-[#B8960C] font-light">
                  {a.tag}
                </span>
                <p className="text-sm font-medium text-[#1C1C1C] mt-1 group-hover:text-[#B8960C] transition-colors leading-snug">
                  {a.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-xs font-light uppercase tracking-[0.25em] mb-4">
          Démarrez votre projet
        </p>
        <h2 className="font-display text-3xl font-semibold text-white mb-4">
          Votre premier chantier parisien en toute sérénité
        </h2>
        <p className="text-gray-400 text-sm font-light max-w-xl mx-auto mb-8">
          Espace Design prend en charge l&apos;intégralité de votre rénovation à Paris, de la
          planification jusqu&apos;aux finitions. Un interlocuteur unique, des devis détaillés
          et plus de 15 ans d&apos;expérience dans le bâti parisien.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-7 py-3 text-sm font-medium hover:bg-[#C9A227] transition-colors"
          >
            Obtenir mon devis gratuit
            <ArrowRight size={16} />
          </Link>
          <a
            href="tel:+33142000000"
            className="inline-flex items-center gap-2 border border-white/20 text-white px-7 py-3 text-sm font-light hover:border-[#D4AF37]/60 transition-colors"
          >
            <Phone size={16} />
            Appeler Espace Design
          </a>
        </div>
      </section>
    </>
  )
}
