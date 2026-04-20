import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Appartement Ancien Paris : Guide, Prix & Contraintes 2025',
  description:
    'Rénover un appartement ancien à Paris : contraintes patrimoniales, mise aux normes électricité, isolation, prix au m². Guide complet pour immeubles XIXe et début XXe.',
  keywords: [
    'rénovation appartement ancien Paris',
    'rénover immeuble ancien Paris',
    'rénovation appartement XIXe siècle Paris',
    'travaux appartement ancien Paris prix',
    'mise aux normes appartement ancien Paris',
    'rénovation haussmannien Paris',
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement ancien Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-ancien-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Ancien Paris : Guide, Prix & Contraintes 2025',
  description: 'Guide complet pour rénover un appartement ancien à Paris : contraintes, prix, mise aux normes, isolation et préservation du patrimoine.',
  datePublished: '2025-04-18',
  dateModified: '2025-04-19',
  inLanguage: 'fr-FR',
  author: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
    logo: { '@type': 'ImageObject', url: 'https://espacedesignparis.fr/images/logo.png' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-ancien-paris' },
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien coûte la rénovation d\'un appartement haussmannien à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'La rénovation complète d\'un appartement haussmannien coûte généralement 1 200 à 2 000 €/m², soit 10 à 30 % de plus que dans du neuf. Ce surcoût s\'explique par les contraintes de chantier, l\'état des installations et les éventuelles mises aux normes (électricité, plomberie en plomb). Prévoyez également une réserve de 10 à 15 % pour les découvertes imprévues.' },
    },
    {
      '@type': 'Question',
      name: 'Faut-il des autorisations spéciales pour rénover dans un immeuble haussmannien à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Cela dépend du type de travaux et de la localisation. Dans les secteurs sauvegardés (Île de la Cité, Marais...), certains travaux intérieurs nécessitent l\'accord de l\'Architecte des Bâtiments de France. Pour tous les appartements, vérifiez votre règlement de copropriété avant d\'abattre des cloisons ou de modifier les moulures et parquets d\'origine.' },
    },
    {
      '@type': 'Question',
      name: 'Est-ce que les appartements parisiens anciens contiennent de l\'amiante ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Les immeubles construits entre 1950 et 1997 peuvent contenir de l\'amiante dans les colles de carrelage, les dalles vinyle, les flocages de plafond ou les gaines. Un diagnostic amiante est obligatoire avant tout démolissage dans un immeuble construit avant juillet 1997. Le désamiantage coûte 30 à 80 €/m² selon la superficie concernée.' },
    },
  ],
}

export default function RenovationAppartementAncienParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }} />

      {/* Hero */}
      <section className="pt-32 pb-14 bg-[#1C1C1C] text-center px-4">
        <nav className="text-xs text-gray-500 mb-6 flex justify-center gap-2">
          <Link href="/" className="hover:text-[#D4AF37]">Accueil</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#D4AF37]">Blog</Link>
          <span>/</span>
          <span className="text-gray-400">Rénovation appartement ancien Paris</span>
        </nav>
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Guides</p>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-white mb-5 max-w-3xl mx-auto leading-tight">
          Rénovation appartement ancien Paris :<br className="hidden sm:block" /> guide, prix & contraintes 2025
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Immeubles haussmanniens, Art déco, bâtiments d&apos;avant 1948 — tout ce qu&apos;il faut savoir pour rénover un appartement ancien à Paris sans mauvaises surprises.
        </p>
        <p className="text-gray-500 text-xs mt-4">Publié le 18 avril 2025 · Mis à jour le 19 avril 2025</p>
      </section>

      {/* Article */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          <p className="text-gray-600 text-base leading-relaxed mb-8">
            Paris compte un parc immobilier exceptionnel — haussmannien du Second Empire, Art nouveau du tournant du XXe siècle, Art déco des années 1930 — mais aussi beaucoup d&apos;immeubles de rapport plus ordinaires construits avant 1948. Rénover un appartement dans ces bâtiments anciens soulève des questions spécifiques : quelles sont les contraintes techniques ? Quels travaux sont interdits ? Quel budget prévoir ? Ce guide vous répond.
          </p>

          {/* Types immeubles */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Les différents types d&apos;immeubles anciens parisiens
          </h2>
          <div className="space-y-4 mb-8">
            {[
              {
                titre: 'Immeubles haussmanniens (1853–1870)',
                desc: 'Les plus prisés. 5 à 7 étages, pierre de taille, balcons au 2e et 5e étage, hauteur sous plafond de 2,80 à 3,20 m, parquet Point de Hongrie, moulures, cheminées. La rénovation doit souvent respecter un règlement de copropriété strict qui protège les éléments architecturaux.',
              },
              {
                titre: 'Immeubles Belle Époque et Art nouveau (1880–1910)',
                desc: 'Façades plus ornementées, ferronneries travaillées, mosaïques dans les halls. Les appartements sont souvent atypiques (plans en L, pièces asymétriques). La rénovation intérieure est libre mais la façade est intouchable.',
              },
              {
                titre: 'Immeubles Art déco (1920–1940)',
                desc: 'Béton armé habillé de briques ou de carreaux de grès. Volumes plus carrés, fenêtres plus larges. Souvent moins contraignants côté patrimoine, mais les installations électriques et de chauffage sont fréquemment obsolètes.',
              },
              {
                titre: 'Immeubles de rapport d\'avant 1948',
                desc: 'Bâtiments plus modestes, parfois sans ascenseur, avec des planchers en bois sur solives. L\'état des installations (électricité, plomberie, gaz) est souvent la priorité. Ces appartements présentent un fort potentiel de valorisation après rénovation.',
              },
            ].map((item) => (
              <div key={item.titre} className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-5">
                <h3 className="font-semibold text-[#1C1C1C] text-sm mb-2">{item.titre}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Contraintes */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Les contraintes spécifiques à Paris
          </h2>
          <div className="space-y-3 mb-8">
            {[
              {
                titre: 'Secteur sauvegardé et PSMV',
                desc: 'Paris compte plusieurs secteurs sauvegardés (Île de la Cité, Marais…) soumis à un Plan de Sauvegarde et de Mise en Valeur. Dans ces zones, certains travaux intérieurs nécessitent un accord préalable de l\'Architecte des Bâtiments de France (ABF). Renseignez-vous auprès de la mairie d\'arrondissement.',
              },
              {
                titre: 'Règlement de copropriété',
                desc: 'Avant d\'abattre une cloison ou d\'ouvrir une fenêtre, vérifiez votre règlement de copropriété. Certains règlements anciens interdisent de modifier les parquets d\'origine, les cheminées ou les moulures. Une autorisation de l\'assemblée générale peut être requise.',
              },
              {
                titre: 'Structure en planchers bois',
                desc: 'Les immeubles antérieurs à 1900 ont souvent des planchers en bois (chevrons + solives). Ils sont moins rigides que le béton. La pose de carrelage lourd ou d\'une chape nécessite une vérification structurelle et parfois un renforcement.',
              },
              {
                titre: 'Canalisation en plomb (avant 1948)',
                desc: 'Les immeubles construits avant 1948 peuvent encore avoir des canalisations en plomb. Depuis 2013, la concentration en plomb dans l\'eau potable est réglementée. Le remplacement des canalisations en plomb est donc souvent inclus dans le budget de rénovation.',
              },
            ].map((item) => (
              <div key={item.titre} className="border-l-2 border-[#D4AF37] pl-4 mb-4">
                <p className="font-semibold text-[#1C1C1C] text-sm mb-1">{item.titre}</p>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Prix */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Prix d&apos;une rénovation dans un appartement ancien parisien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Les travaux dans l&apos;ancien coûtent généralement 10 à 30 % plus cher que dans du neuf, en raison des contraintes de chantier (accès, état des supports, découvertes imprévisibles) :
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#FAFAF8]">
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Poste de travaux</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Prix indicatif</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-gray-200 text-gray-600">Mise aux normes électriques</td>
                  <td className="p-3 border border-gray-200 text-gray-600">3 000 – 8 000 €</td>
                </tr>
                <tr className="bg-[#FAFAF8]">
                  <td className="p-3 border border-gray-200 text-gray-600">Remplacement canalisations plomberie</td>
                  <td className="p-3 border border-gray-200 text-gray-600">4 000 – 12 000 €</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 text-gray-600">Réfection parquet ancien (vitrification)</td>
                  <td className="p-3 border border-gray-200 text-gray-600">25 – 45 €/m²</td>
                </tr>
                <tr className="bg-[#FAFAF8]">
                  <td className="p-3 border border-gray-200 text-gray-600">Restauration moulures et plafonds</td>
                  <td className="p-3 border border-gray-200 text-gray-600">60 – 150 €/ml</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 text-gray-600">Rénovation complète (tout compris)</td>
                  <td className="p-3 border border-gray-200 text-gray-600">1 200 – 2 000 €/m²</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs italic mb-8">
            Ces tarifs sont indicatifs pour Paris. Les découvertes de chantier (amiante, plomb, structure affaiblie) peuvent faire varier le budget. Toujours prévoir une réserve de 10 à 15 %.
          </p>

          {/* Amiante */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Amiante dans les appartements anciens parisiens
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            L&apos;amiante a été utilisé massivement dans la construction jusqu&apos;en 1997. On le trouve souvent dans les appartements parisiens construits entre 1950 et 1980 dans les :
          </p>
          <ul className="space-y-2 mb-4">
            {[
              'Colles de carrelage sous un ancien lino ou dalle PVC',
              'Flocages des plafonds et gaines techniques',
              'Dalles vinyle amiante des années 1960–1970',
              'Joints et colles de canalisations',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-[#D4AF37] mt-1">›</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            Un diagnostic amiante est obligatoire avant tout démolissage dans un immeuble construit avant juillet 1997. Le désamiantage représente 30 à 80 €/m² selon la superficie concernée, mais il est non négociable pour la sécurité du chantier.
          </p>

          {/* Espace Design */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Espace Design : expert en rénovation de l&apos;ancien à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Avec plus de 15 ans d&apos;expérience dans la rénovation d&apos;appartements parisiens anciens, Espace Design maîtrise les spécificités techniques et patrimoniales de ce type de chantier.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Nous coordonnons l&apos;ensemble des corps de métier — plombier, électricien, plâtrier, carreleur, parqueteur — pour livrer votre appartement rénové en un seul interlocuteur.
          </p>
          <ul className="space-y-2 mb-6">
            {[
              'Audit préalable gratuit pour identifier les contraintes',
              'Gestion des diagnostics obligatoires (amiante, plomb, DPE)',
              'Respect du règlement de copropriété et des ABF',
              'Réserve de précaution intégrée dans le devis',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-[#D4AF37] mt-1">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </article>

      {/* Voir aussi */}
      <section className="py-12 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Voir aussi</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/renovation-appartement-haussmannien-paris', title: 'Rénovation haussmannien — notre service' },
              { href: '/isolation-paris', title: 'Isolation Paris — notre service' },
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénover un appartement haussmannien' },
              { href: '/blog/prix-renovation-appartement-paris', title: 'Prix d\'une rénovation à Paris en 2025' },
              { href: '/blog/renovation-parquet-paris', title: 'Parquet à Paris : pose et rénovation' },
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
              { href: '/renovation-versailles', label: 'Versailles' },
              { href: '/renovation-vincennes', label: 'Vincennes' },
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
        <h2 className="font-display text-2xl font-semibold text-white mb-3">
          Votre appartement ancien à rénover à Paris ?
        </h2>
        <p className="text-gray-400 text-sm font-light mb-6 max-w-lg mx-auto">
          Devis gratuit sous 48h avec audit préalable — nous intervenons dans tout Paris et l&apos;Île-de-France.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-7 py-3.5 rounded font-light text-sm tracking-wide hover:bg-[#c9a030] transition-colors duration-300"
        >
          Demander un devis <ArrowRight size={13} />
        </Link>
      </section>
    </>
  )
}
