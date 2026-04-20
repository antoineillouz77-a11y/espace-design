import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Peinture Décorative Paris : enduit, béton ciré, tadelakt — prix 2025',
  description:
    'Peinture décorative à Paris : enduit à la chaux, béton ciré, tadelakt, badigeon. Prix, applications, artisans. Guide complet 2025.',
  keywords: [
    'peinture décorative Paris',
    'béton ciré Paris prix',
    'tadelakt Paris',
    'enduit décoratif Paris',
    'enduit à la chaux Paris prix',
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Peinture Décorative Paris', item: 'https://espacedesignparis.fr/blog/peinture-decorative-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Peinture Décorative Paris : enduit, béton ciré, tadelakt — prix 2025',
  description: 'Peinture décorative à Paris : enduit à la chaux, béton ciré, tadelakt, badigeon. Prix, applications, artisans. Guide complet 2025.',
  datePublished: '2025-04-20',
  dateModified: '2025-04-20',
  inLanguage: 'fr-FR',
  author: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
    logo: { '@type': 'ImageObject', url: 'https://espacedesignparis.fr/images/logo.png' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/peinture-decorative-paris' },
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une peinture décorative à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Les finitions décoratives à Paris coûtent entre 40 et 80 €/m² pour un enduit taloché standard. Le béton ciré revient à 80 à 150 €/m². Le tadelakt (enduit à la chaux marocain, idéal pour salle de bain) coûte 100 à 200 €/m². Ces prix incluent la préparation du support, l\'application en 2-3 couches et la finition.',
      },
    },
    {
      '@type': 'Question',
      name: 'Le béton ciré peut-il s\'appliquer sur des carreaux existants ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, le béton ciré peut s\'appliquer directement sur du carrelage stable et propre, sans dépose — c\'est son grand avantage. Il faut s\'assurer que les joints ne sont pas trop profonds. En sol, le béton ciré nécessite une préparation soignée et une protection finale (vernis ou cire) pour résister aux trafic.',
      },
    },
    {
      '@type': 'Question',
      name: 'Le tadelakt est-il adapté aux salles de bain parisiennes ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, le tadelakt est l\'enduit à la chaux marocain naturellement imperméable — idéal pour les douches, vasques, et murs de salle de bain. Il convient parfaitement aux appartements haussmanniens parisiens qui recherchent un rendu artisanal et chaleureux. Application en 2 couches + polissage, prix 100-200 €/m².',
      },
    },
  ],
}

export default function PeintureDecorativeParis() {
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
          <span className="text-gray-400">Peinture Décorative Paris</span>
        </nav>
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Peinture & Finitions</p>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-white mb-5 max-w-3xl mx-auto leading-tight">
          Peinture Décorative Paris :<br className="hidden sm:block" /> béton ciré, tadelakt, enduit
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Enduit à la chaux, béton ciré, tadelakt, badigeon : prix, applications et conseils pour choisir la finition décorative adaptée à votre appartement parisien.
        </p>
        <p className="text-gray-500 text-xs mt-4">Publié le 20 avril 2025</p>
      </section>

      {/* Article */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          <p className="text-gray-600 text-base leading-relaxed mb-8">
            La peinture classique ne suffit plus pour les rénovations haut de gamme parisiennes. Les finitions décoratives — béton ciré, tadelakt, enduit taloché, badigeon à la chaux — apportent texture, profondeur et caractère unique à un intérieur. Voici notre guide complet pour choisir la bonne finition selon votre projet et votre budget.
          </p>

          {/* Section 1 */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Les types de finitions décoratives à Paris
          </h2>
          <div className="space-y-4 mb-8">
            {[
              {
                titre: 'Béton ciré',
                prix: '80 – 150 €/m²',
                desc: 'Revêtement minéral appliqué à la taloche sur mur ou sol. Aspect lisse et mat avec des variations naturelles de teinte. Compatible avec le carrelage existant (sans dépose). Résistant si bien protégé par un vernis ou une cire.',
                usages: 'Sol cuisine, salle de bain, murs, plan de travail',
              },
              {
                titre: 'Tadelakt',
                prix: '100 – 200 €/m²',
                desc: 'Enduit à la chaux naturelle d\'origine marocaine, appliqué à la truelle et poli à la pierre de rivière. Naturellement imperméable — seul enduit à la chaux pouvant être utilisé en douche sans protection supplémentaire. Rendu chaleureux et artisanal unique.',
                usages: 'Douche, vasque, murs salle de bain, intérieur hammam',
              },
              {
                titre: 'Enduit taloché / marmorino',
                prix: '40 – 80 €/m²',
                desc: 'Enduit à la chaux appliqué en 2-3 couches et taloché en finition. Aspect satiné qui rappelle le stuc. Le marmorino intègre de la poudre de marbre pour un effet mat velouté. Adapté à tous les murs en bon état.',
                usages: 'Murs séjour, chambre, entrée — partout sauf zones humides',
              },
              {
                titre: 'Badigeon à la chaux',
                prix: '20 – 40 €/m²',
                desc: 'Application fluide à la brosse, rendu mat et irrégulier qui rappelle les vieilles maisons méditerranéennes. Moins coûteux que le tadelakt, idéal pour les murs en pierre ou en briques. Régulateur d\'humidité naturel.',
                usages: 'Murs en pierres apparentes, intérieurs rustiques, extérieurs',
              },
              {
                titre: 'Stuc vénitien',
                prix: '60 – 120 €/m²',
                desc: 'Enduit à base de chaux et de résines, poli à la truelle chauffée jusqu\'à obtenir un aspect brillant proche du marbre. Très apprécié dans les appartements haussmanniens pour les moulures et les colonnes.',
                usages: 'Murs salon, entrées, couloirs, dessus de cheminée',
              },
            ].map((item) => (
              <div key={item.titre} className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-[#1C1C1C] text-sm">{item.titre}</h3>
                  <span className="text-[#B8960C] text-xs font-semibold flex-shrink-0 ml-4">{item.prix}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed font-light mb-2">{item.desc}</p>
                <p className="text-xs text-gray-400"><span className="font-medium text-gray-500">Applications :</span> {item.usages}</p>
              </div>
            ))}
          </div>

          {/* Section 2 */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Tableau comparatif des prix et applications
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#FAFAF8]">
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Finition</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Prix/m²</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Zone humide</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Sol</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Durabilité</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { fin: 'Béton ciré', prix: '80 – 150 €', humide: 'Oui (avec protection)', sol: 'Oui', dur: '10-15 ans' },
                  { fin: 'Tadelakt', prix: '100 – 200 €', humide: 'Oui (naturel)', sol: 'Non', dur: '20 ans+' },
                  { fin: 'Enduit taloché', prix: '40 – 80 €', humide: 'Non', sol: 'Non', dur: '10-20 ans' },
                  { fin: 'Badigeon chaux', prix: '20 – 40 €', humide: 'Partiel', sol: 'Non', dur: '5-10 ans' },
                  { fin: 'Stuc vénitien', prix: '60 – 120 €', humide: 'Non', sol: 'Non', dur: '15-25 ans' },
                ].map((row, i) => (
                  <tr key={row.fin} className={i % 2 === 1 ? 'bg-[#FAFAF8]' : ''}>
                    <td className="p-3 border border-gray-200 text-gray-600 font-medium">{row.fin}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.prix}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.humide}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.sol}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.dur}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Section 3 */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Béton ciré sur carrelage existant : mode d&apos;emploi
          </h2>
          <div className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-6 mb-8">
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              L&apos;application de béton ciré sur carrelage existant est l&apos;une des solutions les plus demandées pour rénover une salle de bain ou une cuisine sans travaux lourds. Voici comment cela se déroule :
            </p>
            <div className="space-y-3">
              {[
                { num: '1', titre: 'Préparation du support', desc: 'Nettoyage dégraissant + application d\'une couche d\'adhésion (primaire). Les joints creux de plus de 3 mm sont ragréés.' },
                { num: '2', titre: 'Première couche de béton ciré', desc: 'Application à la taloche inox — couche fine de 1 à 2 mm. Séchage 24h.' },
                { num: '3', titre: 'Ponçage intermédiaire', desc: 'Ponçage léger à la ponceuse orbitale (grain 80-120) pour obtenir une surface homogène.' },
                { num: '4', titre: 'Deuxième couche + finition', desc: 'Deuxième passe de béton ciré. Séchage 24h puis application de la protection (vernis mat, satiné ou cire).' },
              ].map((step) => (
                <div key={step.num} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D4AF37]/20 text-[#B8960C] text-xs font-semibold flex items-center justify-center">{step.num}</span>
                  <div>
                    <p className="text-sm font-semibold text-[#1C1C1C] mb-0.5">{step.titre}</p>
                    <p className="text-sm text-gray-500 font-light">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 italic mt-4">Durée totale : 3 à 5 jours selon la surface. Le logement est inutilisable pendant le séchage de la protection finale (48h minimum).</p>
          </div>

          {/* Section 4 */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Entretien et durabilité des finitions décoratives
          </h2>
          <div className="space-y-4 mb-8">
            {[
              {
                titre: 'Béton ciré : entretien',
                desc: 'Nettoyage à l\'eau avec un peu de savon neutre. Repassage de cire d\'entretien 1 à 2 fois par an pour les sols. Éviter les produits acides ou chlorés qui ternissent la protection.',
              },
              {
                titre: 'Tadelakt : entretien',
                desc: 'Le tadelakt se nettoie au savon de Marseille — un entretien naturel qui l\'imperméabilise encore davantage avec le temps. Éviter les produits ménagers chimiques. Repolissage possible après quelques années.',
              },
              {
                titre: 'Enduits à la chaux : entretien',
                desc: 'Dépoussiérage doux. En cas de choc ou d\'écaillage localisé, la reprise est possible sans reprendre tout le mur — c\'est l\'un des avantages des finitions à la chaux.',
              },
            ].map((item) => (
              <div key={item.titre} className="border-l-2 border-[#D4AF37]/40 pl-4">
                <h3 className="font-semibold text-[#1C1C1C] text-sm mb-1">{item.titre}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Section 5 */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Espace Design : artisans en peinture décorative à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Espace Design dispose d&apos;artisans spécialisés en peinture décorative et finitions artisanales à Paris. Béton ciré, tadelakt, stuc vénitien, enduit taloché — nous réalisons ces prestations avec les matériaux et les gestes adaptés à chaque surface. Nos réalisations couvrent les appartements haussmanniens, les lofts contemporains et les salles de bain design.
          </p>
          <ul className="space-y-2 mb-6">
            {[
              'Conseil sur le choix de la finition selon votre projet et votre budget',
              'Application par des applicateurs certifiés (béton ciré, tadelakt)',
              'Préparation du support incluse dans nos devis',
              'Exemples de réalisations disponibles sur demande',
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
              { href: '/peinture-paris', title: 'Peinture Paris — Espace Design' },
              { href: '/blog/peinture-appartement-paris', title: 'Peinture appartement Paris : guide et prix' },
              { href: '/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain Paris' },
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénover un appartement haussmannien' },
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
        <h2 className="font-display text-2xl font-semibold text-white mb-3">
          Un projet de peinture décorative à Paris ?
        </h2>
        <p className="text-gray-400 text-sm font-light mb-6 max-w-lg mx-auto">
          Devis gratuit sous 48h — béton ciré, tadelakt, enduit taloché dans tout Paris et Île-de-France.
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
