import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Bastille Paris 11e-12e', item: 'https://espacedesignparis.fr/blog/renovation-appartement-bastille-paris' },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Bastille Paris 11e-12e : prix & guide 2025 | Espace Design',
  description:
    'Rénover un appartement autour de la Bastille (Paris 11e-12e) : prix, artisans, appartements anciens et contemporains. Guide complet 2025.',
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Bastille Paris 11e-12e : prix & guide 2025',
  description:
    'Rénover un appartement autour de la Bastille (Paris 11e-12e) : prix, artisans, appartements anciens et contemporains. Guide complet 2025.',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-bastille-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quels types de biens trouve-t-on autour de la Bastille (11e-12e) ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le quartier Bastille (Paris 11e et 12e arrondissements) présente un parc immobilier très varié : appartements anciens du XIXe siècle avec parquets et moulures, lofts issus de la reconversion d\'anciens ateliers ou entrepôts industriels, et immeubles contemporains des années 1980-2000. Cette diversité permet de trouver des biens à rénover à des prix encore accessibles pour Paris intramuros, avec un fort potentiel de valorisation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte une rénovation autour de la Bastille en 2025 ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Les prix de rénovation dans le 11e et le 12e sont généralement plus accessibles que dans les arrondissements du centre-ouest parisien. Comptez 1 200 à 2 200 €/m² pour une rénovation complète standard, et 2 200 à 3 000 €/m² pour un projet loft avec décloisonnement, verrière intérieure et finitions industrielles. Un rafraîchissement simple (peinture, sol, éclairage) revient à 400 à 700 €/m².',
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on créer un loft dans un ancien entrepôt autour de la Bastille ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui — le 11e et le 12e abritent d\'anciens ateliers et entrepôts transformés en logements qui se prêtent idéalement à l\'esprit loft : grands volumes, hauteurs sous plafond de 3,50 m à 6 m, dalles béton brut, métal apparent. Ces espaces permettent des projets de décloisonnement ambitieux (cuisine ouverte, mezzanine, verrière intérieure). Le budget pour un projet loft complet dans le secteur Bastille est de l\'ordre de 2 000 à 3 000 €/m² selon les finitions.',
      },
    },
  ],
}

export default function ArticleBastille() {
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

      {/* Hero article */}
      <section className="pt-28 sm:pt-36 pb-12 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">
            Guides
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Rénovation appartement Bastille — Paris 11e & 12e
          </h1>
          <p className="text-gray-500 text-sm font-light leading-relaxed">
            Le quartier Bastille concentre une offre immobilière exceptionnellement variée : appartements
            anciens du XIXe siècle, lofts issus d&apos;anciens ateliers et entrepôts industriels, immeubles
            contemporains. Les prix y sont encore plus accessibles que dans le centre-ouest parisien,
            avec un fort potentiel de valorisation après rénovation. Ce guide vous aide à préparer
            votre projet dans le 11e ou le 12e arrondissement.
          </p>
        </div>
      </section>

      {/* Contenu article */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">

          {/* Section 1 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Un quartier au parc immobilier mixte et en pleine évolution
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Le secteur Bastille (11e et 12e arrondissements) a connu une profonde mutation
              depuis les années 1990. D&apos;anciens quartiers artisanaux et industriels se sont
              transformés en secteurs résidentiels recherchés, portés par la rénovation de
              friches et la création de logements atypiques. Aujourd&apos;hui, on y trouve trois
              grandes typologies de biens, chacune avec ses spécificités de rénovation.
            </p>

            <div className="space-y-5">
              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Les appartements anciens du XIXe siècle
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Le 11e arrondissement regorge d&apos;immeubles construits entre 1850 et 1930 :
                  plafonds à 2,90 m - 3,20 m, parquets en bois massif, moulures simples,
                  cheminées de fonte. Ces appartements sont souvent vendus à rénover et
                  présentent un excellent rapport qualité-prix une fois rénovés. Leur
                  rénovation suit les mêmes règles que dans n&apos;importe quel immeuble
                  ancien parisien : mise aux normes électrique, réfection plomberie,
                  restauration du parquet.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Les lofts dans d&apos;anciens ateliers et entrepôts
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  La spécialité du quartier Bastille : d&apos;anciens ateliers de menuiserie,
                  de métal ou d&apos;imprimerie ont été transformés en lofts, souvent dans les
                  passages et cours intérieures (passage de la Bonne Graine, passage
                  Louis-Philippe, cour de la Maison Brûlée). Ces espaces offrent des
                  hauteurs sous plafond spectaculaires (4 à 6 m), des verrières et des
                  volumes industriels uniques à Paris.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Les immeubles contemporains des années 1980-2000
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Notamment dans le 12e autour de Bercy et de la Promenade Plantée,
                  des immeubles plus récents offrent des appartements avec balcons,
                  double vitrage d&apos;origine et ascenseurs. Moins atypiques mais souvent
                  bien configurés, ils se prêtent à des rénovations plus standard :
                  cuisine ouverte, salle de bain contemporaine, parquet flottant ou collé.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Prix d&apos;une rénovation autour de la Bastille en 2025
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Avec des prix au m² plus accessibles que dans les arrondissements du centre-ouest,
              le 11e et le 12e offrent un excellent potentiel de valorisation après rénovation.
              Le budget dépend fortement du type de bien et du niveau de finition souhaité.
            </p>
            <ul className="space-y-3">
              {[
                {
                  poste: 'Rafraîchissement (peinture, sol, éclairage)',
                  fourchette: '400 à 700 €/m²',
                  detail: 'Pour un appartement en bon état général. Peinture murs et plafonds, remplacement du sol, éclairage LED. Sans modification des installations existantes.',
                },
                {
                  poste: 'Rénovation partielle (cuisine ou salle de bain)',
                  fourchette: '8 000 à 20 000 €',
                  detail: 'Rénovation d\'une pièce d\'eau ou création d\'une cuisine ouverte. Budget selon la surface et les finitions choisies.',
                },
                {
                  poste: 'Rénovation complète — appartement ancien standard',
                  fourchette: '1 200 à 2 200 €/m²',
                  detail: 'Électricité, plomberie, cuisine, salle de bain, parquet, peintures. Configuration standard dans un immeuble ancien du 11e ou 12e.',
                },
                {
                  poste: 'Projet loft — décloisonnement et finitions industrielles',
                  fourchette: '2 200 à 3 000 €/m²',
                  detail: 'Création d\'espaces ouverts, verrière intérieure, mezzanine, cuisine ouverte, béton ciré, métal apparent. Finitions inspirées du style industriel.',
                },
              ].map((item) => (
                <li key={item.poste} className="bg-[#FAFAF8] rounded-lg p-4 border border-gray-100">
                  <div className="flex justify-between items-start mb-1">
                    <div className="font-medium text-[#1C1C1C] text-sm">{item.poste}</div>
                    <div className="text-[#B8960C] text-sm font-medium whitespace-nowrap ml-4">{item.fourchette}</div>
                  </div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{item.detail}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Projets phares dans le secteur Bastille : loft, cuisine ouverte, décloisonnement
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Le 11e et le 12e sont particulièrement propices aux projets de transformation ambitieux.
              Voici les travaux les plus courants et ce qu&apos;il faut savoir avant de les engager.
            </p>
            <ul className="space-y-3">
              {[
                {
                  flag: 'Décloisonnement et cuisine ouverte',
                  detail: 'Ouvrir la cuisine sur le salon est le projet le plus demandé dans le secteur Bastille. Si la cloison est non porteuse : 2 000 à 5 000 €. Si c\'est un mur porteur : étude de structure + IPN, soit 8 000 à 16 000 €. Un artisan expérimenté peut évaluer la faisabilité en visite.',
                },
                {
                  flag: 'Création d\'une verrière intérieure',
                  detail: 'La verrière intérieure (entre salon et chambre, ou entre cuisine et salon) est une signature des rénovations Bastille. Comptez 3 000 à 8 000 € pour une verrière standard en métal et verre feuilleté, posée par un menuisier métallier spécialisé.',
                },
                {
                  flag: 'Mezzanine dans un appartement à hauteur sous plafond élevée',
                  detail: 'Avec 3,50 m ou plus sous plafond, la mezzanine est une solution intelligente pour gagner une chambre ou un espace de travail. Budget : 8 000 à 18 000 € selon la superficie et les matériaux (bois, métal, mixte).',
                },
                {
                  flag: 'Béton ciré et finitions industrielles',
                  detail: 'Sol en béton ciré, mur en enduit béton, métal brut — ces finitions s\'accordent parfaitement avec l\'esprit des lofts Bastille. Le béton ciré coûte 80 à 150 €/m² fourni et posé, soit plus que le parquet mais moins qu\'un carrelage grand format posé.',
                },
                {
                  flag: 'Mise aux normes électrique',
                  detail: 'Dans les appartements anciens non rénovés du 11e, l\'électricité est souvent à refaire intégralement : tableau, fils, prises, éclairage. Budget : 7 000 à 14 000 € pour un 70-80 m².',
                },
              ].map((item) => (
                <li key={item.flag} className="flex gap-3">
                  <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#1C1C1C] text-sm font-medium">{item.flag} : </span>
                    <span className="text-gray-600 text-sm font-light">{item.detail}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Choisir son artisan pour rénover dans le 11e ou le 12e
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              La diversité du parc immobilier autour de la Bastille exige des artisans polyvalents :
              capables de rénover un appartement ancien classique aussi bien que de transformer
              un ancien atelier en loft contemporain. Ce n&apos;est pas la même technicité ni les
              mêmes matériaux.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Pour un projet loft, vérifiez spécifiquement : les références en décloisonnement
              et pose de verrières, la maîtrise des finitions industrielles (béton ciré, métal),
              et la capacité à coordonner menuisiers, plombiers et électriciens sur un plateau
              ouvert. Pour un appartement ancien standard, les critères habituels s&apos;appliquent :
              assurance décennale, références en immeubles anciens, coordination multi-corps de
              métier.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Espace Design intervient régulièrement dans le 11e et le 12e arrondissement, ainsi
              que dans les quartiers voisins (3e, 4e, 10e, 13e). Notre équipe maîtrise aussi
              bien la rénovation classique d&apos;appartements anciens que les projets loft et de
              transformation. Consultez nos{' '}
              <Link href="/realisations" className="text-[#B8960C] hover:underline">
                réalisations
              </Link>{' '}
              ou{' '}
              <Link href="/contact" className="text-[#B8960C] hover:underline">
                demandez un devis gratuit
              </Link>
              .
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-6">
              Questions fréquentes — Rénovation autour de la Bastille
            </h2>
            <div className="space-y-4">
              {schemaFaq.mainEntity.map((item) => (
                <div key={item.name} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-2">{item.name}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{item.acceptedAnswer.text}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Voir aussi */}
      <section className="py-12 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Voir aussi</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/renovation-paris-11e', title: 'Rénovation Paris 11e — Espace Design' },
              { href: '/renovation-paris-12e', title: 'Rénovation Paris 12e — Espace Design' },
              { href: '/blog/renovation-loft-paris', title: 'Rénovation loft Paris — guide complet 2025' },
              { href: '/blog/verriere-interieure-paris', title: 'Verrière intérieure Paris — prix & pose' },
              { href: '/renovation-appartement-paris', title: 'Rénovation appartement Paris — Espace Design' },
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
              { href: '/renovation-paris-3e', label: 'Paris 3e' },
              { href: '/renovation-paris-4e', label: 'Paris 4e' },
              { href: '/renovation-paris-10e', label: 'Paris 10e' },
              { href: '/renovation-paris-13e', label: 'Paris 13e' },
              { href: '/renovation-vincennes', label: 'Vincennes' },
              { href: '/renovation-montreuil', label: 'Montreuil' },
              { href: '/renovation-charenton-le-pont', label: 'Charenton-le-Pont' },
              { href: '/renovation-ivry-sur-seine', label: 'Ivry-sur-Seine' },
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
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
          Vous rénovez un appartement autour de la Bastille ?
        </h2>
        <p className="text-gray-400 text-sm font-light mb-8">
          Appartement ancien, loft, projet de décloisonnement — devis gratuit sous 48h dans le 11e et 12e.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-7 py-3.5 rounded font-light text-sm tracking-wide hover:bg-[#c9a030] transition-colors"
          >
            Devis gratuit <ArrowRight size={13} />
          </Link>
          <a
            href="tel:+33611783867"
            className="flex items-center justify-center gap-2 border border-gray-600 text-gray-300 px-7 py-3.5 rounded font-light text-sm tracking-wide hover:border-white hover:text-white transition-colors"
          >
            <Phone size={14} />
            06 11 78 38 67
          </a>
        </div>
      </section>
    </>
  )
}
