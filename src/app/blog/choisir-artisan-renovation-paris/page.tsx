import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Comment choisir un artisan rénovateur à Paris', item: 'https://espacedesignparis.fr/blog/choisir-artisan-renovation-paris' },
  ],
}

export const metadata: Metadata = {
  title: 'Comment Choisir son Artisan Rénovateur à Paris — Conseils | Espace Design',
  description:
    'Comment trouver et choisir un bon artisan rénovateur à Paris ? Critères de sélection, questions à poser, pièges à éviter, assurance décennale. Guide complet.',
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Comment choisir son artisan rénovateur à Paris',
  description:
    'Guide complet pour choisir un artisan rénovateur sérieux à Paris : critères, questions, pièges à éviter.',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/choisir-artisan-renovation-paris',
}

export default function ArticleChoisirArtisan() {
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

      {/* Hero article */}
      <section className="pt-28 sm:pt-36 pb-12 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">
            Guide & Conseils
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Comment choisir son artisan rénovateur à Paris
          </h1>
          <p className="text-gray-500 text-sm font-light leading-relaxed">
            Trouver un bon artisan rénovateur à Paris est l&apos;une des étapes les plus décisives
            d&apos;un projet de rénovation. Entre les plateformes en ligne, le bouche-à-oreille
            et les annuaires professionnels, il est difficile de s&apos;y retrouver. Ce guide
            vous donne les clés pour faire le bon choix.
          </p>
        </div>
      </section>

      {/* Contenu article */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">

          {/* Section 1 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les critères essentiels pour choisir un artisan rénovateur
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Avant de signer un devis, vérifiez systématiquement ces éléments. Un artisan
              rénovateur sérieux à Paris ne pose aucun problème pour vous fournir ces documents.
            </p>

            <div className="space-y-5">
              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  L&apos;assurance décennale en cours de validité
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  C&apos;est le premier document à demander — et à vérifier. L&apos;assurance décennale
                  couvre pendant 10 ans les dommages qui compromettent la solidité de l&apos;ouvrage
                  ou le rendent impropre à l&apos;usage. Tout artisan intervenant sur le bâti
                  (maçonnerie, plomberie, électricité, carrelage) est tenu d&apos;en disposer.
                  Demandez l&apos;attestation, vérifiez qu&apos;elle est en cours et que les travaux
                  prévus entrent dans le périmètre couvert.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Le numéro SIRET et l&apos;extrait Kbis
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Un artisan qui travaille sans facture ou qui vous demande de payer en cash
                  sans reçu est une alerte majeure. Vérifiez son numéro SIRET sur le site
                  du gouvernement (annuaire-entreprises.data.gouv.fr) et assurez-vous que
                  l&apos;entreprise est bien enregistrée et active.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Les photos de réalisations réelles
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Un artisan rénovateur à Paris doit être en mesure de vous montrer des photos
                  de chantiers qu&apos;il a réalisés — idéalement dans votre type d&apos;appartement
                  (haussmannien, années 70, récent) et avec le niveau de finition que vous
                  souhaitez. Méfiez-vous des portfolios trop parfaits issus de sites de
                  décoration : demandez des photos de chantiers clients.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Les avis clients vérifiés
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Google, Houzz, Trustpilot — les avis en ligne donnent une idée de la
                  réputation de l&apos;artisan. Regardez non seulement la note globale, mais
                  la façon dont l&apos;artisan répond aux avis négatifs. Un prestataire qui
                  assume ses erreurs et cherche à les corriger est plus fiable qu&apos;un
                  prestataire sans aucun avis négatif.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les questions à poser avant de signer
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Lors de la visite de chantier ou de la réunion de présentation du devis,
              posez ces questions directement. Les réponses sont très révélatrices du
              sérieux et de la transparence de l&apos;artisan.
            </p>
            <ul className="space-y-3">
              {[
                {
                  q: 'Qui réalisera les travaux ?',
                  a: 'Certains artisans sous-traitent l\'intégralité du chantier à des équipes qu\'ils ne supervisent pas. Demandez si les compagnons sont des salariés de l\'entreprise ou des sous-traitants, et qui sera présent sur le chantier.',
                },
                {
                  q: 'Quelles sont vos références dans ce type de bien ?',
                  a: 'Un artisan parisien expérimenté a nécessairement travaillé sur des appartements haussmanniens, des immeubles années 60 ou des studios. Demandez à voir des exemples similaires à votre projet.',
                },
                {
                  q: 'Quel est votre délai de démarrage et votre planning prévisionnel ?',
                  a: 'Un artisan sérieux à Paris est souvent booké 2 à 4 mois à l\'avance. Un démarrage immédiat peut indiquer un carnet de commandes vide — pourquoi ?',
                },
                {
                  q: 'Comment gérez-vous les imprévus de chantier ?',
                  a: 'Des surprises arrivent toujours dans un appartement parisien ancien. Un artisan honnête vous explique comment il documente les travaux supplémentaires et vous soumet un avenant avant d\'agir.',
                },
                {
                  q: 'Quelles garanties après le chantier ?',
                  a: 'Au-delà de la décennale, demandez si l\'artisan offre une garantie de parfait achèvement (1 an) et comment il gère les petites malfaçons constatées après réception.',
                },
              ].map((item) => (
                <li key={item.q} className="bg-[#FAFAF8] rounded-lg p-4 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-1">{item.q}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{item.a}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les pièges classiques à éviter
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Le marché de la rénovation à Paris connaît malheureusement des pratiques douteuses.
              Voici les red flags à surveiller absolument.
            </p>
            <ul className="space-y-3">
              {[
                {
                  flag: 'Le devis anormalement bas',
                  detail: 'Un devis 30 à 40 % moins cher que les autres est rarement une bonne affaire. Il cache soit une sous-évaluation volontaire (avec des avenants massifs en cours de chantier), soit une qualité de travail insuffisante, soit une main d\'œuvre non déclarée.',
                },
                {
                  flag: 'Le paiement en espèces',
                  detail: 'Un artisan qui exige un paiement cash sans facture ne peut pas vous fournir de garantie légale. En cas de problème, vous n\'avez aucun recours. Insistez toujours pour un paiement par virement ou chèque avec facture.',
                },
                {
                  flag: 'L\'absence de contrat écrit',
                  detail: 'Un devis signé est un contrat. S\'il est vague ("rénovation cuisine : 5 000 €"), vous ne pouvez pas contrôler ce qui est inclus ou non. Exigez un devis détaillé poste par poste.',
                },
                {
                  flag: 'La demande d\'acompte très élevé',
                  detail: 'Un acompte de 20 à 30 % au démarrage est normal. Au-delà de 50 %, méfiez-vous. Un artisan sérieux n\'a pas besoin de vous financer à l\'avance.',
                },
                {
                  flag: 'Les délais non respectés sans explication',
                  detail: 'Des retards arrivent — c\'est la vie d\'un chantier. Mais un artisan sérieux vous prévient à l\'avance, explique la cause et propose une nouvelle date. Le silence est un mauvais signe.',
                },
              ].map((item) => (
                <li key={item.flag} className="flex gap-3">
                  <span className="text-red-400 font-medium flex-shrink-0 text-sm">⚠</span>
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
              Artisan unique vs. entreprise générale : que choisir ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Pour une rénovation partielle (salle de bain, cuisine, peinture), un artisan
              spécialisé est souvent le bon choix : il est moins cher et plus agile. Pour
              une rénovation complète mobilisant plusieurs corps de métier, deux options
              s&apos;offrent à vous.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              L&apos;entreprise générale de rénovation prend en charge la coordination de
              l&apos;ensemble des corps de métier. Elle est plus chère en théorie, mais vous
              évite de gérer vous-même les plannings et les interfaces entre artisans.
              En cas de problème, un seul responsable.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Espace Design fonctionne sur ce modèle : nous sommes votre interlocuteur
              unique de la conception à la réception du chantier. Plomberie, électricité,
              carrelage, peinture, menuiserie — nous maîtrisons chaque corps de métier et
              nous coordonnons l&apos;ensemble. Découvrez notre approche sur notre page de{' '}
              <Link href="/realisations" className="text-[#B8960C] hover:underline">
                réalisations
              </Link>{' '}
              ou{' '}
              <Link href="/contact" className="text-[#B8960C] hover:underline">
                contactez-nous
              </Link>
              .
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Ce qui distingue Espace Design des autres artisans parisiens
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Devis détaillé poste par poste remis sous 48h',
                'Assurance décennale en cours de validité',
                'Plus de 15 ans d\'expérience dans les appartements parisiens',
                'Interlocuteur unique du début à la fin du chantier',
                'Photos et références disponibles sur demande',
                'Avenants écrits systématiques pour tout travail supplémentaire',
                'Respect des règlements de copropriété et contraintes ABF',
                'Finitions soignées — nous ne livrons pas un chantier que nous ne signerions pas',
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

      {/* Voir aussi */}
      <section className="py-12 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Voir aussi</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/prix-renovation-appartement-paris', title: 'Prix d\'une rénovation à Paris en 2025' },
              { href: '/blog/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain à Paris' },
              { href: '/blog/renovation-parquet-paris', title: 'Parquet à Paris : pose et rénovation' },
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
              { href: '/renovation-paris-6e', label: '6e' },
              { href: '/renovation-paris-7e', label: '7e' },
              { href: '/renovation-paris-8e', label: '8e' },
              { href: '/renovation-paris-15e', label: '15e' },
              { href: '/renovation-paris-16e', label: '16e' },
              { href: '/renovation-paris-17e', label: '17e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
              { href: '/renovation-levallois-perret', label: 'Levallois-Perret' },
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
          Un projet de rénovation à Paris ?
        </h2>
        <p className="text-gray-400 text-sm font-light mb-8">
          Devis gratuit et détaillé sous 48h. Déplacement sans engagement.
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
