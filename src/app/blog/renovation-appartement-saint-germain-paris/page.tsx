import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Saint-Germain-des-Prés Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-saint-germain-paris' },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Saint-Germain-des-Prés Paris : guide 2025 | Espace Design',
  description:
    'Rénover un appartement à Saint-Germain-des-Prés (Paris 6e) : prix, contraintes, artisans. Haussmannien, immeubles anciens, finitions premium.',
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Saint-Germain-des-Prés Paris : guide 2025',
  description:
    'Rénover un appartement à Saint-Germain-des-Prés (Paris 6e) : prix, contraintes, artisans. Haussmannien, immeubles anciens, finitions premium.',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-saint-germain-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel type d\'appartements trouve-t-on à Saint-Germain-des-Prés ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Saint-Germain-des-Prés (Paris 6e) regroupe essentiellement des appartements haussmanniens (XIXe siècle) et des immeubles anciens antérieurs à 1900. Ces biens se caractérisent par des hauteurs sous plafond généreuses (3,20 à 4,20 m), des parquets en bois massif, des moulures et corniches ornées. Leur rénovation requiert un soin particulier pour préserver ces éléments d\'époque.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte la rénovation d\'un appartement à Saint-Germain-des-Prés ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La rénovation dans le 6e arrondissement coûte entre 1 800 et 4 000 €/m² en rénovation complète, compte tenu du niveau de finition attendu dans ce quartier premium. Pour un appartement de 80 m², prévoyez 140 000 à 320 000 € en renovation intégrale (électricité, plomberie, cuisine, salle de bain, finitions haut de gamme). La restauration des parquets anciens et des moulures représente souvent 15 à 25% du budget.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quels artisans choisir pour rénover à Saint-Germain-des-Prés ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pour rénover dans le 6e, choisissez impérativement un artisan expérimenté dans les appartements anciens parisiens, maîtrisant la restauration de parquet, la pose de carrelage en grand format et les enduits de finition. Vérifiez les références sur des chantiers similaires (haussmanniens, immeubles anciens). Espace Design intervient régulièrement dans le 6e, 7e et 8e arrondissement.',
      },
    },
  ],
}

export default function ArticleSaintGermain() {
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
            Rénovation appartement à Saint-Germain-des-Prés (Paris 6e) : guide 2025
          </h1>
          <p className="text-gray-500 text-sm font-light leading-relaxed">
            Saint-Germain-des-Prés concentre certains des plus beaux appartements parisiens :
            haussmanniens, immeubles du XVIIIe et XIXe siècle, parquets en bois massif, plafonds
            hauts, moulures ornées. Rénover dans le 6e demande une expertise technique et un niveau
            de finition à la hauteur du quartier. Ce guide vous accompagne pas à pas.
          </p>
        </div>
      </section>

      {/* Contenu article */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">

          {/* Section 1 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les appartements de Saint-Germain-des-Prés : profil et caractéristiques
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Le 6e arrondissement est dominé par deux typologies de biens : les immeubles
              haussmanniens construits sous Napoléon III (1853-1870) et les immeubles anciens
              antérieurs, datant parfois du XVIIe siècle. Ces deux typologies ont en commun
              des caractéristiques architecturales remarquables — et des contraintes de
              rénovation tout aussi remarquables.
            </p>

            <div className="space-y-5">
              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  L&apos;appartement haussmannien du 6e : caractéristiques clés
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Hauteur sous plafond de 3,20 m à 4,20 m, parquet en bois massif (point de
                  Hongrie ou lames larges), moulures en plâtre, cheminée en marbre, fenêtres
                  à double vantail en bois. Ces éléments définissent le style haussmannien
                  et leur restauration est le cœur d&apos;un chantier de rénovation réussi dans
                  ce quartier.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Les immeubles anciens : encore plus exigeants
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Certains immeubles de Saint-Germain-des-Prés datent du XVIIe siècle, notamment
                  autour de la rue de Buci et du carrefour de l&apos;Odéon. Ces biens présentent des
                  planchers en chêne massif, des poutres apparentes et des murs en pierre de taille.
                  Leur rénovation doit concilier performance technique (isolation, plomberie,
                  électricité) et respect du bâti historique.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Les étages nobles et les chambres de service
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Dans un immeuble haussmannien du 6e, le 1er et 2e étages (étages nobles)
                  présentent les plus belles prestations : plafonds les plus hauts, moulures
                  les plus richement ornées. Les étages supérieurs et les anciens appartements
                  de service (au 6e ou 7e étage) ont des caractéristiques différentes — souvent
                  plus simples, parfois sous les toits — et peuvent être transformés en espaces
                  contemporains avec plus de liberté.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Combien coûte une rénovation à Saint-Germain-des-Prés ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le 6e arrondissement est l&apos;un des plus chers de Paris à la rénovation. Les raisons
              sont multiples : complexité technique, matériaux nobles, accès difficile (étroitesse
              des rues, copropriétés strictes), et niveau de finition attendu par les propriétaires
              de ce quartier.
            </p>
            <ul className="space-y-3">
              {[
                {
                  poste: 'Rafraîchissement léger',
                  fourchette: '500 à 900 €/m²',
                  detail: 'Peinture, sols, luminaires. Ne modifie pas les installations existantes.',
                },
                {
                  poste: 'Rénovation d\'une pièce d\'eau',
                  fourchette: '12 000 à 30 000 €',
                  detail: 'Salle de bain ou cuisine seule, finitions premium (carrelage grand format, robinetterie haut de gamme).',
                },
                {
                  poste: 'Rénovation complète sans restauration du patrimoine',
                  fourchette: '1 800 à 2 800 €/m²',
                  detail: 'Électricité, plomberie, cuisine, bain, sols neufs, peintures. Éléments anciens conservés mais non restaurés.',
                },
                {
                  poste: 'Rénovation complète avec restauration du patrimoine',
                  fourchette: '2 800 à 4 000 €/m²',
                  detail: 'Restauration parquet, moulures, cheminées, menuiseries. Matériaux nobles (marbre, boiseries, enduits à la chaux).',
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
              Les postes clés d&apos;une rénovation haussmannienne à Saint-Germain
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Voici les postes qui méritent une attention particulière dans un appartement
              haussmannien du 6e arrondissement.
            </p>
            <ul className="space-y-3">
              {[
                {
                  flag: 'Restauration du parquet ancien',
                  detail: 'Un parquet point de Hongrie en chêne massif d\'époque peut être ponçé et rehaussé jusqu\'à 3 à 4 fois. La restauration coûte 60 à 120 €/m² — bien moins qu\'un remplacement, et incomparablement plus valorisant.',
                },
                {
                  flag: 'Réfection des moulures et corniches',
                  detail: 'Les moulures en plâtre peuvent être restaurées (remplissage, lissage, peinture) ou refaites à l\'identique par un staffeur. Compter 80 à 200 €/ml selon la complexité des profils.',
                },
                {
                  flag: 'Mise aux normes électriques',
                  detail: 'Un appartement haussmannien non rénové depuis 30 ans nécessite souvent une mise aux normes complète : tableau électrique, remplacement des fils, mise à la terre. Budget : 10 000 à 18 000 € pour un 80 m².',
                },
                {
                  flag: 'Remplacement des fenêtres',
                  detail: 'Le remplacement des fenêtres est soumis à l\'accord de la copropriété et, dans certains secteurs, de l\'ABF. Le double vitrage bois sur l\'existant (rénovation) est souvent la solution privilégiée dans les quartiers historiques.',
                },
                {
                  flag: 'Salle de bain premium',
                  detail: 'Dans un appartement du 6e, les propriétaires souhaitent généralement des finitions haut de gamme : carrelage grand format 120×60 ou 120×120, douche à l\'italienne, robinetterie de marque. Budget salle de bain : 18 000 à 35 000 €.',
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
              Espace Design dans le 6e : notre expérience
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Espace Design réalise régulièrement des rénovations dans le 6e arrondissement
              et les quartiers voisins (7e, 5e, 4e). Notre équipe est formée à la restauration
              des éléments patrimoniaux des appartements haussmanniens — parquets, moulures,
              menuiseries — et maîtrise les corps de métier nécessaires à une rénovation
              complète : plomberie, électricité, carrelage, peinture, menuiserie.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Nous fonctionnons comme interlocuteur unique : vous n&apos;avez pas à gérer
              plusieurs artisans. Du premier devis à la livraison du chantier, nous coordonnons
              l&apos;ensemble des travaux.{' '}
              <Link href="/contact" className="text-[#B8960C] hover:underline">
                Contactez-nous pour un devis gratuit
              </Link>
              .
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-6">
              Questions fréquentes — Rénovation à Saint-Germain-des-Prés
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
              { href: '/renovation-paris-6e', title: 'Rénovation Paris 6e — Espace Design' },
              { href: '/renovation-paris-7e', title: 'Rénovation Paris 7e — Espace Design' },
              { href: '/renovation-appartement-haussmannien-paris', title: 'Rénovation appartement haussmannien Paris' },
              { href: '/blog/parquet-massif-paris', title: 'Parquet massif à Paris : restauration et pose' },
              { href: '/blog/decoration-interieure-paris', title: 'Décoration intérieure à Paris — guide 2025' },
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
              { href: '/renovation-paris-6e', label: 'Paris 6e' },
              { href: '/renovation-paris-7e', label: 'Paris 7e' },
              { href: '/renovation-paris-5e', label: 'Paris 5e' },
              { href: '/renovation-paris-4e', label: 'Paris 4e' },
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-14e', label: 'Paris 14e' },
              { href: '/renovation-paris-15e', label: 'Paris 15e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
              { href: '/renovation-versailles', label: 'Versailles' },
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
          Vous rénovez un appartement à Saint-Germain-des-Prés ?
        </h2>
        <p className="text-gray-400 text-sm font-light mb-8">
          Devis gratuit et détaillé sous 48h. Déplacement sans engagement dans le 6e et alentours.
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
