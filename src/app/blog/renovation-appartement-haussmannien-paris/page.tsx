import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénover un appartement haussmannien à Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-haussmannien-paris' },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Haussmannien Paris — Guide Complet | Espace Design',
  description:
    'Tout savoir sur la rénovation d\'un appartement haussmannien à Paris : contraintes ABF, moulures, parquet point de Hongrie, hauteur sous plafond. Artisan spécialisé.',
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation appartement haussmannien à Paris',
  description:
    'Guide complet pour rénover un appartement haussmannien à Paris : contraintes, travaux, budget, erreurs à éviter.',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-haussmannien-paris',
}

export default function ArticleHaussmannien() {
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
            Rénovation appartement haussmannien à Paris
          </h1>
          <p className="text-gray-500 text-sm font-light leading-relaxed">
            Rénover un appartement haussmannien à Paris, c&apos;est marier le respect d&apos;un
            patrimoine architectural exceptionnel avec les exigences du confort contemporain.
            Un exercice d&apos;équilibre qui demande expertise et sensibilité — deux qualités
            qu&apos;Espace Design cultive depuis plus de 15 ans.
          </p>
        </div>
      </section>

      {/* Contenu article */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">

          {/* Section 1 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Qu&apos;est-ce qu&apos;un immeuble haussmannien ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Les immeubles haussmanniens ont été construits entre 1850 et 1914, sous la
              direction du baron Georges-Eugène Haussmann qui transforma radicalement Paris
              sur ordre de Napoléon III. On les reconnaît à leurs façades en pierre de taille,
              leurs balcons filants au 2e et 5e étage, leurs toits en zinc à 45° et leurs
              décors en stuc.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              À l&apos;intérieur, ces appartements se distinguent par des hauteurs sous plafond
              généreuses (souvent 3 à 3,5 m), des parquets en chêne massif (point de Hongrie
              ou bâtons rompus), des moulures en plâtre sculptées, des cheminées en marbre
              et de grandes fenêtres à petits carreaux. Ce patrimoine architectural fait le
              charme — et la complexité — de leur rénovation.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              À Paris, on estime que plus de 30 % des appartements sont situés dans des
              immeubles haussmanniens ou de style haussmannien. C&apos;est dire si la rénovation
              de ce type de bien est un savoir-faire central pour tout artisan parisien sérieux.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les contraintes spécifiques à anticiper
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Rénover un appartement haussmannien à Paris n&apos;est pas sans contraintes. Plusieurs
              d&apos;entre elles peuvent impacter significativement votre budget et votre planning.
            </p>

            <div className="space-y-5">
              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  L&apos;Architecte des Bâtiments de France (ABF)
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Si votre immeuble est classé ou situé dans le périmètre d&apos;un monument
                  historique, l&apos;ABF a son mot à dire sur tous les travaux visibles depuis
                  l&apos;extérieur : couleur des menuiseries, type de vitrage, remplacement des
                  fenêtres. Dans les arrondissements centraux comme le 1er, 4e, 5e, 6e ou 7e,
                  ces contraintes sont fréquentes. Espace Design connaît ces réglementations
                  et vous accompagne dans les démarches.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Le règlement de copropriété
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Avant tout démarrage de chantier, lisez votre règlement de copropriété.
                  Certains immeubles haussmanniens imposent des horaires de travaux très
                  stricts (8h-17h du lundi au vendredi), interdisent les travaux bruyants
                  le vendredi après-midi, exigent des bâches de protection dans les parties
                  communes ou obligent à utiliser l&apos;escalier de service. Ces contraintes
                  allongent les délais et augmentent légèrement les coûts.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Les installations anciennes
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Les appartements haussmanniens non rénovés depuis les années 1970-1980
                  présentent souvent des installations électriques obsolètes (aluminium,
                  absence de terre, tableau à fusibles) et des canalisations en plomb ou
                  en fonte à remplacer. La mise aux normes est incontournable et représente
                  souvent 20 à 30 % du budget total de rénovation.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  La présence de plomb et d&apos;amiante
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Tout bâtiment construit avant 1997 peut contenir de l&apos;amiante. Avant les
                  travaux, un diagnostic amiante est obligatoire. La présence de plomb dans
                  les peintures anciennes est également fréquente dans les immeubles
                  haussmanniens. Si le diagnostic révèle des traces, un désamiantage ou
                  un déplombage par une entreprise agréée devient nécessaire.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les travaux les plus demandés dans un appartement haussmannien
            </h2>

            <div className="space-y-4">
              {[
                {
                  title: 'Refaire l\'électricité',
                  detail:
                    'C\'est souvent le premier chantier dans un appartement haussmannien non rénové. La mise aux normes NF C 15-100 inclut le remplacement du tableau électrique, la création de circuits dédiés pour la cuisine et la salle de bain, l\'installation de prises avec terre et de dispositifs différentiels. Budget : 5 000 à 15 000 € selon la surface.',
                },
                {
                  title: 'Isolation phonique et thermique',
                  detail:
                    'Les planchers en bois des immeubles haussmanniens transmettent facilement les bruits d\'impact. L\'isolation phonique des planchers (chape sèche, lés de désolidarisation) et des murs mitoyens est une priorité pour le confort. L\'isolation thermique des combles ou des fenêtres améliore aussi significativement les factures d\'énergie.',
                },
                {
                  title: 'Rénovation de la salle de bain',
                  detail:
                    'Souvent reléguée dans une ancienne chambre de bonne ou un ancien cabinet de toilette, la salle de bain des appartements haussmanniens est parfois minuscule ou mal agencée. La création d\'une douche à l\'italienne, l\'installation d\'une vasque suspendue et le recours au béton ciré ou au carrelage grand format sont les solutions les plus demandées.',
                },
                {
                  title: 'Ouverture de la cuisine',
                  detail:
                    'La cuisine fermée est typique des appartements haussmanniens. L\'ouvrir sur le salon permet de créer un espace de vie plus lumineux et plus moderne. Mais attention : dans un appartement haussmannien, les cloisons entre les pièces peuvent masquer des poutres en bois ou des éléments de structure. Un diagnostic préalable s\'impose.',
                },
                {
                  title: 'Restauration du parquet',
                  detail:
                    'Le parquet en chêne massif est l\'un des joyaux des appartements haussmanniens. Ponçage, vitrification ou huilage permettent de lui redonner son éclat originel. Dans les meilleurs cas, un parquet haussmannien bien entretenu peut durer un siècle supplémentaire.',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <CheckCircle size={16} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#1C1C1C] text-sm font-medium">{item.title} : </span>
                    <span className="text-gray-600 text-sm font-light">{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Comment préserver le cachet tout en modernisant
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              La grande erreur dans la rénovation d&apos;appartements haussmanniens est de vouloir
              faire du neuf dans du vieux. Supprimer les moulures, boucher les cheminées,
              abattre les doubles portes à soufflets — autant de décisions irréversibles qui
              font perdre une valeur patrimoniale difficilement récupérable.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Chez Espace Design, notre approche consiste à respecter l&apos;enveloppe architecturale
              en intégrant les équipements modernes de façon discrète : gaines électriques
              passées dans les frises et sous-plinthes, radiateurs de design compatible avec
              le style, luminaires suspendus qui valorisent la hauteur sous plafond.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Le résultat : un appartement aux standards de confort actuels, qui conserve
              l&apos;âme et le prestige de l&apos;architecture haussmannienne. Découvrez nos{' '}
              <Link href="/realisations" className="text-[#B8960C] hover:underline">
                réalisations
              </Link>{' '}
              pour voir des exemples concrets, ou{' '}
              <Link href="/contact" className="text-[#B8960C] hover:underline">
                demandez votre devis gratuit
              </Link>
              .
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Erreurs à éviter absolument
            </h2>
            <ul className="space-y-2">
              {[
                'Supprimer les moulures en plâtre sans avoir vérifié qu\'elles peuvent être restaurées',
                'Choisir du PVC pour les fenêtres dans un immeuble sous surveillance ABF',
                'Abattre une cloison sans vérifier la présence de poutres ou de structure',
                'Négliger le diagnostic amiante avant les travaux de démolition',
                'Faire appel à un artisan non spécialisé dans les immeubles anciens parisiens',
                'Sous-estimer le budget électricité dans un appartement non rénové depuis 30 ans',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-gray-600 font-light">
                  <span className="text-[#B8960C] font-medium flex-shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>
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
              { href: '/blog/renovation-parquet-paris', title: 'Parquet à Paris : pose et rénovation' },
              { href: '/blog/peinture-appartement-paris', title: 'Peinture appartement Paris : prix et conseils' },
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
