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
      name: 'Quel profil d\'appartements autour de la Bastille ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le quartier Bastille (11e et 12e arrondissements) concentre des appartements des années 1870-1930, des lofts industriels reconvertis dans les anciens entrepôts, et des immeubles contemporains. La mixité est forte : de l\'appartement ouvrier réhabilité au loft design. La rénovation est moins contraignante qu\'en secteur sauvegardé, et les budgets sont souvent plus accessibles qu\'à l\'Ouest parisien.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte la rénovation d\'un appartement à Bastille ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La rénovation dans le 11e et 12e est souvent plus accessible qu\'à l\'Ouest parisien. Comptez 800 à 1 500 €/m² pour une rénovation partielle, 1 500 à 2 500 €/m² pour une rénovation complète. Un studio de 30 m² se rénove pour 20 000 à 45 000 €. Les lofts industriels peuvent nécessiter des budgets plus importants (isolation, hauteur, structures).',
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on créer un loft dans un ancien entrepôt à Bastille ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, le quartier Bastille-Aligre compte plusieurs immeubles d\'anciens entrepôts reconvertis en lofts. L\'aménagement d\'un loft nécessite de traiter spécifiquement l\'isolation (acoustique et thermique) car les structures industrielles sont souvent mal isolées. Les travaux types : béton ciré, verrière intérieure, cuisine ouverte sur mesure, mezzanine pour créer une chambre. Budget loft de 80 m² : 80 000 à 150 000 €.',
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
            Rénovation appartement Bastille (Paris 11e-12e) : prix & guide 2025
          </h1>
          <p className="text-gray-500 text-sm font-light leading-relaxed">
            Le quartier Bastille concentre une offre immobilière très diverse : appartements
            anciens des années 1880-1930, lofts industriels dans les anciens entrepôts du
            faubourg Saint-Antoine, immeubles contemporains et ateliers reconvertis. La
            rénovation dans le 11e et le 12e est souvent plus accessible qu&apos;ailleurs à Paris,
            avec des possibilités créatives importantes. Ce guide vous guide pas à pas.
          </p>
        </div>
      </section>

      {/* Contenu article */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">

          {/* Section 1 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Le quartier Bastille : diversité architecturale et opportunités
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Autour de la place de la Bastille, les 11e et 12e arrondissements offrent
              un tissu urbain riche et varié. Historiquement quartier artisan et ouvrier,
              le secteur a connu une profonde transformation depuis les années 1980,
              devenant l&apos;un des quartiers les plus dynamiques et créatifs de Paris.
            </p>

            <div className="space-y-5">
              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Les appartements anciens du faubourg Saint-Antoine
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Le faubourg Saint-Antoine (11e et 12e) regorge d&apos;immeubles de rapport construits
                  entre 1870 et 1930. Ces biens présentent des caractéristiques proches des
                  haussmanniens — parquet en bois massif, moulures, cheminées — mais avec des
                  finitions plus modestes et des surfaces souvent généreuses. Leur rénovation
                  est l&apos;occasion de révéler un potentiel souvent sous-estimé.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Les lofts industriels de la Bastille-Aligre
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Les anciens entrepôts du quartier (notamment autour de la rue de la Roquette
                  et du marché d&apos;Aligre) ont été reconvertis en lofts et ateliers très
                  recherchés. Ces espaces offrent des hauteurs sous plafond de 4 à 7 m,
                  des structures métalliques apparentes, des bétons bruts et des volumes
                  ouverts uniques à Paris. Leur rénovation demande une expertise spécifique
                  en aménagement de grands volumes.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Le 12e : bois de Vincennes et immeubles contemporains
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Le 12e arrondissement est plus résidentiel que le 11e. On y trouve davantage
                  d&apos;immeubles des années 1960-1980 et des programmes contemporains, notamment
                  autour de la Promenade Plantée et de Bercy. Ces biens nécessitent un autre
                  type de rénovation : cuisine et salles de bain à moderniser, isolation à
                  améliorer, agencements à repenser selon les modes de vie actuels.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Combien coûte une rénovation autour de la Bastille ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              La Bastille est l&apos;un des secteurs parisiens où le rapport qualité/prix de la
              rénovation est le meilleur. Les contraintes patrimoniales sont moins fortes
              qu&apos;à l&apos;Ouest, les logistiques plus simples, et les prix souvent plus accessibles
              sans pour autant sacrifier la qualité.
            </p>
            <ul className="space-y-3">
              {[
                {
                  poste: 'Studio / petit appartement (rafraîchissement)',
                  fourchette: '20 000 à 35 000 €',
                  detail: 'Pour un studio de 20-30 m² à remettre au goût du jour sans modification structurelle.',
                },
                {
                  poste: 'Rénovation partielle (une pièce d\'eau)',
                  fourchette: '8 000 à 20 000 €',
                  detail: 'Salle de bain ou cuisine rénovée complètement. Fourchette large selon les finitions.',
                },
                {
                  poste: 'Rénovation complète — appartement standard',
                  fourchette: '1 500 à 2 500 €/m²',
                  detail: 'Électricité, plomberie, cuisine, bain, sols, peintures. Niveau de finition moyen à élevé.',
                },
                {
                  poste: 'Loft industriel — rénovation et aménagement',
                  fourchette: '80 000 à 150 000 € (80 m²)',
                  detail: 'Isolation thermique et acoustique, cloisonnement, béton ciré, verrière, cuisine ouverte sur mesure.',
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
              Les projets phares de rénovation autour de la Bastille
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Voici les types de projets les plus fréquents dans le quartier Bastille,
              avec leurs spécificités techniques et leurs budgets.
            </p>
            <ul className="space-y-3">
              {[
                {
                  flag: 'Transformation d\'un entrepôt en loft habitable',
                  detail: 'Isolation thermique et acoustique (les structures industrielles ne sont pas isolées), création de cloisonnements légers (verre, acier), béton ciré sur l\'existant, cuisine ouverte sur mesure, mezzanine bois pour créer une chambre. C\'est l\'un des projets les plus créatifs et les plus valorisants du marché parisien.',
                },
                {
                  flag: 'Création d\'une verrière intérieure',
                  detail: 'La verrière intérieure (entre séjour et chambre, ou entre cuisine et couloir) est particulièrement adaptée aux appartements du 11e où la lumière naturelle peut manquer. Budget : 3 500 à 8 000 € pour une verrière de 3 à 6 m².',
                },
                {
                  flag: 'Rénovation d\'un appartement ouvrier des années 1900',
                  detail: 'Ces appartements ont souvent des installations électriques et de plomberie très anciennes à refaire intégralement. La mise aux normes peut représenter 30 à 40% du budget total. En contrepartie, les volumes sont souvent généreux et les parquets anciens en excellent état.',
                },
                {
                  flag: 'Aménagement d\'un appartement duplex',
                  detail: 'Le quartier Bastille compte de nombreux duplex (anciens ateliers, immeubles avec mezzanine). L\'optimisation des espaces sur deux niveaux — escalier, espace de travail en hauteur, chambre mezzanine — est une spécialité que maîtrisent peu d\'artisans.',
                },
                {
                  flag: 'Rénovation cuisine avec béton ciré ou résine',
                  detail: 'Le style industriel est très présent dans le 11e. Le béton ciré (sol, plan de travail, crédence) et la résine époxy sont des finitions courantes. Elles nécessitent une pose soignée et un support préparé avec soin pour éviter les fissurations.',
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
              Rénovation dans le 11e et 12e : nos conseils pratiques
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              La Bastille est un quartier dynamique où les chantiers se multiplient. Quelques
              conseils pour bien démarrer votre projet de rénovation dans le 11e ou le 12e
              arrondissement.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Vérifiez toujours le règlement de copropriété avant de démarrer : même si
              le quartier est moins contraignant que les secteurs sauvegardés, certaines
              copropriétés imposent des règles strictes sur les horaires de chantier, les
              matériaux de sol et les modifications de façade.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Pour un loft ou un espace industriel, faites systématiquement appel à un
              bureau d&apos;études structure avant de modifier des cloisons ou des planchers :
              les structures industrielles peuvent réserver des surprises. Espace Design
              coordonne ces études pour vous.{' '}
              <Link href="/contact" className="text-[#B8960C] hover:underline">
                Contactez-nous pour une visite gratuite
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
              { href: '/blog/renovation-loft-paris', title: 'Rénovation loft Paris — guide 2025' },
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
          Vous rénovez autour de la Bastille ?
        </h2>
        <p className="text-gray-400 text-sm font-light mb-8">
          Appartement ancien, loft industriel, duplex — devis gratuit et détaillé sous 48h.
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
