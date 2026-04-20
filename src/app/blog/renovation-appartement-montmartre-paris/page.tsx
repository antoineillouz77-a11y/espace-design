import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Montmartre Paris 18e', item: 'https://espacedesignparis.fr/blog/renovation-appartement-montmartre-paris' },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Montmartre Paris 18e : guide & prix 2025 | Espace Design',
  description:
    'Rénover un appartement à Montmartre (Paris 18e) : maisons de village, appartements anciens, prix, artisans. Guide complet 2025.',
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Montmartre Paris 18e : guide & prix 2025',
  description:
    'Rénover un appartement à Montmartre (Paris 18e) : maisons de village, appartements anciens, prix, artisans. Guide complet 2025.',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-montmartre-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quels types de biens immobiliers trouve-t-on à Montmartre ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Montmartre (Paris 18e) est unique car on y trouve des maisons de village individuelles avec jardins, des immeubles anciens du XIXe siècle, des ateliers d\'artistes et des appartements avec vue sur Paris. Ces biens ont souvent des configurations atypiques : caves voûtées, niveaux décalés, murs en meulière. Leur rénovation est plus complexe mais le résultat très recherché.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte la rénovation d\'un appartement à Montmartre ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La rénovation à Montmartre coûte entre 1 200 et 2 800 €/m² selon le type de bien. Une maison de village de 80 m² nécessite 80 000 à 200 000 € en rénovation complète. Les configurations atypiques (niveaux, combles, caves) peuvent alourdir le budget de 10 à 20%. Les appartements en bon état peuvent être rafraîchis pour 400 à 800 €/m².',
      },
    },
    {
      '@type': 'Question',
      name: 'Montmartre est-il en secteur sauvegardé ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Une partie de Montmartre est protégée au titre des sites et monuments historiques, notamment autour du Sacré-Cœur et de la Butte. Les modifications de façade nécessitent l\'accord des ABF. En revanche, les travaux intérieurs sont libres dans la plupart des cas. Il convient de vérifier le statut exact de votre bien auprès de la mairie du 18e avant de démarrer.',
      },
    },
  ],
}

export default function ArticleMontmartre() {
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
            Rénovation appartement à Montmartre (Paris 18e) : guide & prix 2025
          </h1>
          <p className="text-gray-500 text-sm font-light leading-relaxed">
            Montmartre est l&apos;un des quartiers les plus atypiques de Paris. Maisons de village
            avec jardin, ateliers d&apos;artistes, appartements anciens en meulière, immeubles sur
            plusieurs niveaux avec vue sur la ville — chaque bien est unique. Rénover ici demande
            une expérience spécifique et un artisan capable de s&apos;adapter à des configurations
            hors norme. Ce guide fait le point sur tout ce qu&apos;il faut savoir.
          </p>
        </div>
      </section>

      {/* Contenu article */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">

          {/* Section 1 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Montmartre : un quartier aux biens atypiques
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Contrairement à d&apos;autres quartiers parisiens dominés par un seul type de bâti,
              Montmartre présente une diversité architecturale exceptionnelle qui s&apos;explique
              par son histoire de village absorbé par Paris à la fin du XIXe siècle.
            </p>

            <div className="space-y-5">
              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Les maisons de village avec jardin
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Rarissimes à Paris, les maisons de village de Montmartre (rue Lepic, rue
                  de l&apos;Abreuvoir, villa Léandre) sont parmi les biens les plus recherchés
                  de la capitale. Construites aux XVIIIe et XIXe siècles, elles présentent
                  des structures en meulière, des planchers anciens et parfois des caves voûtées
                  spectaculaires. Leur rénovation est complexe mais le résultat est incomparable.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Les ateliers d&apos;artistes
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Héritage de l&apos;époque bohème de Montmartre (Picasso, Modigliani, Utrillo),
                  les anciens ateliers d&apos;artistes offrent des volumes spectaculaires : baies
                  vitrées orientées Nord pour la lumière diffuse, hauteurs sous plafond de 4 à
                  6 m, mezzanines. Leur rénovation doit préserver cette amplitude tout en
                  créant des espaces de vie confortables (isolation, chauffage, cuisine).
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Les appartements anciens sur la Butte
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Les immeubles anciens du 18e arrondissement, notamment dans les rues en
                  escalier de la Butte, présentent des configurations décalées par rapport
                  aux immeubles haussmanniens : niveaux demi-enterrés, escaliers étroits,
                  appartements sur plusieurs niveaux. Ces contraintes d&apos;accès peuvent
                  alourdir les coûts de chantier de 10 à 20%.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Prix d&apos;une rénovation à Montmartre en 2025
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Les prix de rénovation à Montmartre sont plus variables qu&apos;ailleurs, car le type
              de bien influence fortement le coût : une maison de village avec jardin et une
              cave voûtée ne se rénove pas comme un appartement standard dans un immeuble
              des années 1900.
            </p>
            <ul className="space-y-3">
              {[
                {
                  poste: 'Rafraîchissement (appartement standard)',
                  fourchette: '400 à 800 €/m²',
                  detail: 'Peinture, sols stratifiés ou parquet, luminaires, petits travaux. Sans modification de l\'existant.',
                },
                {
                  poste: 'Rénovation partielle (salle de bain ou cuisine)',
                  fourchette: '8 000 à 18 000 €',
                  detail: 'Une pièce d\'eau rénovée de fond en comble. Budget selon la configuration et les finitions choisies.',
                },
                {
                  poste: 'Rénovation complète — appartement standard',
                  fourchette: '1 200 à 2 000 €/m²',
                  detail: 'Électricité, plomberie, cuisine, bain, sols, peintures dans un appartement accessible.',
                },
                {
                  poste: 'Rénovation complète — maison de village ou atelier',
                  fourchette: '2 000 à 2 800 €/m²',
                  detail: 'Configurations atypiques, structures en meulière, caves voûtées, accès difficile. Budget à affiner sur visite.',
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
              Points de vigilance spécifiques à Montmartre
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Rénover à Montmartre réserve des surprises que seul un artisan expérimenté
              dans ce quartier peut anticiper. Voici les principaux points de vigilance.
            </p>
            <ul className="space-y-3">
              {[
                {
                  flag: 'Accès chantier difficile',
                  detail: 'Les ruelles en escalier de la Butte Montmartre rendent impossible l\'accès aux camions de livraison de matériaux. Tout doit être monté à la main ou via des monte-matériaux. Ce surcoût logistique doit être intégré au devis.',
                },
                {
                  flag: 'Structures en meulière',
                  detail: 'La meulière (pierre volcanique locale) est un matériau résistant mais difficile à percer et à travailler. Les passages de gaines (électricité, plomberie) sont plus longs qu\'en béton ou parpaing. Prévoyez 15 à 20% de temps supplémentaire.',
                },
                {
                  flag: 'Humidité et caves voûtées',
                  detail: 'Les maisons anciennes de Montmartre peuvent présenter des problèmes d\'humidité, notamment dans les demi-sous-sols et les caves voûtées. Un traitement de l\'humidité (drainage, injection de résine, barrière chimique) peut être nécessaire avant les finitions.',
                },
                {
                  flag: 'Contraintes de protection patrimoniale',
                  detail: 'La zone autour du Sacré-Cœur et une partie de la Butte sont protégées. Toute modification de façade, remplacement de menuiseries ou installation visible depuis la rue nécessite l\'accord préalable de l\'ABF. Comptez 2 à 3 mois d\'instruction.',
                },
                {
                  flag: 'Isolation thermique et acoustique',
                  detail: 'Les immeubles anciens de Montmartre sont souvent mal isolés. L\'isolation par l\'intérieur est possible mais complexe dans les configurations atypiques (murs en biais, niveaux décalés). À budgéter spécifiquement.',
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
              Pourquoi choisir un artisan spécialisé dans les biens atypiques ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Rénover à Montmartre n&apos;est pas une rénovation comme les autres. Un artisan qui
              a l&apos;habitude des appartements standard parisiens peut se retrouver dépassé face
              à une maison de village sur 3 niveaux, une cave voûtée à réhabiliter ou un
              atelier d&apos;artiste à transformer en habitation.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Les critères essentiels : expérience dans les biens atypiques (maisons de village,
              ateliers, lofts), maîtrise des matériaux anciens (meulière, pierre, bois massif),
              capacité à gérer une logistique d&apos;accès difficile. Demandez systématiquement
              des références sur des biens similaires dans le 18e ou dans des quartiers
              similaires (Belleville, Ménilmontant).
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Espace Design intervient dans le 18e arrondissement et les quartiers voisins.
              Contactez-nous pour une{' '}
              <Link href="/contact" className="text-[#B8960C] hover:underline">
                visite gratuite et un devis détaillé
              </Link>
              .
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-6">
              Questions fréquentes — Rénovation à Montmartre
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
              { href: '/renovation-paris-18e', title: 'Rénovation Paris 18e — Espace Design' },
              { href: '/renovation-paris-9e', title: 'Rénovation Paris 9e — Espace Design' },
              { href: '/blog/renovation-appartement-ancien-paris', title: 'Rénover un appartement ancien à Paris' },
              { href: '/blog/chauffage-appartement-paris', title: 'Chauffage appartement Paris — guide 2025' },
              { href: '/blog/isolation-thermique-appartement-paris', title: 'Isolation thermique appartement Paris' },
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
              { href: '/renovation-paris-18e', label: 'Paris 18e' },
              { href: '/renovation-paris-9e', label: 'Paris 9e' },
              { href: '/renovation-paris-10e', label: 'Paris 10e' },
              { href: '/renovation-paris-17e', label: 'Paris 17e' },
              { href: '/renovation-paris-19e', label: 'Paris 19e' },
              { href: '/renovation-paris-20e', label: 'Paris 20e' },
              { href: '/renovation-saint-denis', label: 'Saint-Denis' },
              { href: '/renovation-pantin', label: 'Pantin' },
              { href: '/renovation-aubervilliers', label: 'Aubervilliers' },
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
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
          Vous rénovez un bien à Montmartre ?
        </h2>
        <p className="text-gray-400 text-sm font-light mb-8">
          Maison de village, atelier d&apos;artiste, appartement ancien — devis gratuit sous 48h.
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
