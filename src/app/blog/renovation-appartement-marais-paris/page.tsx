import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Marais Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-marais-paris' },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Marais Paris : guide & artisans 2025 | Espace Design',
  description:
    'Rénover un appartement dans le Marais (Paris 3e-4e) : contraintes Bâtiments de France, prix, artisans. Guide complet 2025.',
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Marais Paris : guide & artisans 2025',
  description:
    'Rénover un appartement dans le Marais (Paris 3e-4e) : contraintes Bâtiments de France, prix, artisans. Guide complet 2025.',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-marais-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quelles sont les contraintes de rénovation dans le Marais ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le Marais est classé secteur sauvegardé — toute modification de l\'aspect extérieur (fenêtres, ravalement, couleurs) nécessite l\'accord de l\'Architecte des Bâtiments de France (ABF). Les travaux intérieurs sont libres mais doivent respecter les structures historiques. Il est fortement conseillé de travailler avec un artisan expérimenté dans les immeubles anciens parisiens.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte la rénovation d\'un appartement dans le Marais ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Les appartements du Marais (Paris 3e et 4e) sont souvent des immeubles du XVIIe-XVIIIe siècle avec des contraintes spécifiques : parquet ancien, poutres apparentes, hauteur sous plafond élevée. Comptez 1 500 à 3 500 €/m² en rénovation complète, soit 15 à 30% plus cher qu\'un appartement standard. La restauration des éléments anciens (parquet, moulures) justifie ce surcoût.',
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on créer une cuisine ouverte dans un appartement du Marais ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, mais avec précautions. Les murs porteurs dans les immeubles anciens du Marais sont souvent en pierre de taille — leur abattage nécessite une étude de structure et pose d\'IPN. Certains appartements en secteur historique peuvent nécessiter l\'accord de l\'ABF si les travaux modifient des éléments structurels liés à la façade. Budget pour abattage mur porteur dans le Marais : 8 000 à 18 000 €.',
      },
    },
  ],
}

export default function ArticleMarais() {
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
            Rénovation appartement dans le Marais (Paris 3e-4e) : guide complet 2025
          </h1>
          <p className="text-gray-500 text-sm font-light leading-relaxed">
            Rénover un appartement dans le Marais est un projet à part. Entre le secteur sauvegardé,
            les immeubles du XVIIe et XVIIIe siècle et les exigences des Architectes des Bâtiments
            de France, chaque chantier demande une expertise spécifique. Ce guide vous donne toutes
            les clés pour réussir votre rénovation dans l&apos;un des quartiers les plus prisés de Paris.
          </p>
        </div>
      </section>

      {/* Contenu article */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">

          {/* Section 1 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Le Marais : un secteur sauvegardé avec des règles strictes
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Le Marais (Paris 3e et 4e arrondissements) est l&apos;un des rares quartiers parisiens
              classé en totalité secteur sauvegardé. Ce statut, qui vise à préserver le patrimoine
              architectural des XVIIe et XVIIIe siècles, impose des contraintes spécifiques que
              tout propriétaire souhaitant rénover doit connaître avant de démarrer.
            </p>

            <div className="space-y-5">
              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  L&apos;accord de l&apos;Architecte des Bâtiments de France (ABF)
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Toute modification visible depuis la rue — remplacement de fenêtres, ravalement
                  de façade, changement de couleur, installation d&apos;un velux en toiture — nécessite
                  l&apos;accord préalable de l&apos;ABF. Le délai d&apos;instruction est en général de 2 à 3 mois.
                  À l&apos;intérieur, les travaux sont libres dans la plupart des cas, sauf si
                  l&apos;appartement est lui-même classé monument historique (rare, mais existant dans
                  certains hôtels particuliers du Marais).
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Les structures historiques à préserver
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Les immeubles du Marais présentent souvent des poutres en chêne apparentes,
                  des planchers en bois massif et des murs en pierre de taille. Ces éléments
                  constituent non seulement le caractère du bien, mais parfois des protections
                  contractuelles imposées par le règlement de copropriété ou le plan de sauvegarde.
                  Un bon artisan saura les valoriser plutôt que les dissimuler.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Le règlement de copropriété
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Dans les immeubles anciens du Marais, les règlements de copropriété sont
                  souvent très détaillés sur les matériaux autorisés, les horaires de travaux
                  (souvent 8h-17h en semaine uniquement) et les accès. Vérifiez ces points
                  avant de signer avec votre artisan pour éviter les mauvaises surprises.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Prix d&apos;une rénovation dans le Marais : ce qu&apos;il faut prévoir
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              La rénovation dans le Marais est plus coûteuse qu&apos;ailleurs à Paris, pour deux
              raisons principales : la complexité technique des immeubles anciens et le niveau
              de finition attendu dans ce quartier premium.
            </p>
            <ul className="space-y-3">
              {[
                {
                  poste: 'Rafraîchissement (peinture, sol, luminaires)',
                  fourchette: '400 à 800 €/m²',
                  detail: 'Pour un appartement en bon état général nécessitant uniquement une remise au goût du jour.',
                },
                {
                  poste: 'Rénovation partielle (salle de bain ou cuisine)',
                  fourchette: '800 à 1 500 €/m²',
                  detail: 'Remplacement d\'une pièce d\'eau ou création d\'une cuisine dans un appartement existant.',
                },
                {
                  poste: 'Rénovation complète standard',
                  fourchette: '1 500 à 2 500 €/m²',
                  detail: 'Électricité, plomberie, cuisine, salle de bain, sols, peintures. Configuration standard.',
                },
                {
                  poste: 'Rénovation complète avec restauration du patrimoine',
                  fourchette: '2 500 à 3 500 €/m²',
                  detail: 'Inclut la restauration de parquets anciens, poutres, moulures, et l\'usage de matériaux nobles (pierre, marbre, boiseries).',
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
              Les spécificités techniques des appartements du Marais
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Chaque appartement du Marais est unique, mais certaines configurations reviennent
              systématiquement. Voici ce qu&apos;un artisan expérimenté dans ce quartier sait
              anticiper.
            </p>
            <ul className="space-y-3">
              {[
                {
                  flag: 'Murs porteurs en pierre de taille',
                  detail: 'L\'abattage d\'un mur porteur en pierre nécessite une étude de structure et la pose d\'un IPN (poutre métallique). Comptez 8 000 à 18 000 € selon la portée. Impossible d\'improviser sur ce poste.',
                },
                {
                  flag: 'Parquets anciens en chêne',
                  detail: 'Les parquets point de Hongrie ou Versailles d\'époque peuvent souvent être ponçés et revernissés (600 à 1 200 €) plutôt que remplacés. C\'est une économie et une valeur ajoutée.',
                },
                {
                  flag: 'Hauteurs sous plafond généreuses',
                  detail: 'De 3 m à 4,50 m dans certains appartements du 1er étage. Une opportunité pour créer des espaces remarquables, mais des contraintes pour les travaux en hauteur (échafaudages).',
                },
                {
                  flag: 'Installations électriques d\'époque',
                  detail: 'Dans les immeubles non rénovés, l\'électricité est souvent à refaire intégralement (tableau, fils aluminium, prises). Prévoyez 8 000 à 15 000 € pour la mise aux normes électrique d\'un 80 m².',
                },
                {
                  flag: 'Absence d\'isolation thermique',
                  detail: 'Les murs en pierre de taille sont peu isolants. L\'isolation par l\'intérieur (doublage) est possible mais réduit la surface. À arbitrer avec soin selon vos priorités.',
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
              Comment choisir son artisan pour rénover dans le Marais ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le choix de l&apos;artisan est déterminant dans un quartier aussi exigeant. Un artisan
              sans expérience dans les immeubles anciens parisiens peut commettre des erreurs
              coûteuses : endommager un parquet irremplaçable, fragiliser un mur porteur ou
              réaliser des finitions incompatibles avec le style du bien.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Vérifiez systématiquement : l&apos;assurance décennale en cours de validité, les
              références sur des chantiers similaires (immeubles anciens, haussmanniens), et
              la capacité à gérer l&apos;ensemble des corps de métier ou à les coordonner.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Espace Design intervient régulièrement dans le Marais (3e et 4e arrondissements)
              ainsi que dans les quartiers voisins. Notre équipe maîtrise les contraintes du
              secteur sauvegardé, la restauration des éléments anciens et les exigences de
              finition propres à ce type de bien. Consultez nos{' '}
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
              Questions fréquentes — Rénovation dans le Marais
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
              { href: '/renovation-paris-3e', title: 'Rénovation Paris 3e — Espace Design' },
              { href: '/renovation-paris-4e', title: 'Rénovation Paris 4e — Espace Design' },
              { href: '/renovation-appartement-haussmannien-paris', title: 'Rénovation appartement haussmannien Paris' },
              { href: '/blog/renovation-appartement-ancien-paris', title: 'Rénover un appartement ancien à Paris' },
              { href: '/blog/devis-renovation-paris', title: 'Devis rénovation Paris — guide 2025' },
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
              { href: '/renovation-paris-3e', label: 'Paris 3e' },
              { href: '/renovation-paris-4e', label: 'Paris 4e' },
              { href: '/renovation-paris-1e', label: 'Paris 1er' },
              { href: '/renovation-paris-2e', label: 'Paris 2e' },
              { href: '/renovation-paris-5e', label: 'Paris 5e' },
              { href: '/renovation-paris-6e', label: 'Paris 6e' },
              { href: '/renovation-paris-7e', label: 'Paris 7e' },
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-paris-12e', label: 'Paris 12e' },
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
          Vous rénovez un appartement dans le Marais ?
        </h2>
        <p className="text-gray-400 text-sm font-light mb-8">
          Devis gratuit et détaillé sous 48h. Déplacement sans engagement dans le 3e et 4e.
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
