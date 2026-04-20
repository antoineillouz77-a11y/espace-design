import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Carrelage Appartement Paris : Prix, Pose & Conseils 2025',
  description:
    'Tout sur la pose de carrelage dans un appartement parisien : prix au m², types de carreaux, salle de bain, cuisine, entrée. Guide complet par Espace Design.',
  keywords: [
    'carrelage appartement Paris',
    'pose carrelage Paris prix',
    'carrelage salle de bain Paris',
    'carrelage cuisine Paris',
    'artisan carreleur Paris',
    'prix carrelage Paris m²',
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Carrelage appartement Paris', item: 'https://espacedesignparis.fr/blog/carrelage-appartement-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Carrelage Appartement Paris : Prix, Pose & Conseils 2025',
  description: 'Guide complet sur la pose de carrelage dans un appartement parisien : prix, matériaux, tendances et conseils d\'expert.',
  datePublished: '2025-04-01',
  dateModified: '2025-04-19',
  inLanguage: 'fr-FR',
  author: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
    logo: { '@type': 'ImageObject', url: 'https://espacedesignparis.fr/images/logo.png' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/carrelage-appartement-paris' },
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix de la pose de carrelage à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'La pose de carrelage à Paris coûte entre 40 et 70 €/m² pour un carrelage sol standard (fourniture + pose incluse). Les grands formats (80×80, 120×60) reviennent à 70-120 €/m². La dépose de l\'ancien carrelage ajoute 15 à 30 €/m².' },
    },
    {
      '@type': 'Question',
      name: 'Quelle est la différence entre grès cérame et carreaux de ciment ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Le grès cérame est le plus courant : très résistant, disponible en grand format, il imite béton, pierre ou bois. Les carreaux de ciment sont plus délicats à poser et entretenir mais apportent du caractère avec leurs motifs géométriques. Ils sont très appréciés dans les appartements haussmanniens parisiens.' },
    },
    {
      '@type': 'Question',
      name: 'Peut-on poser du carrelage sur un plancher bois dans un appartement parisien ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, mais cela nécessite de rigidifier le support préalablement. Dans les immeubles haussmanniens avec planchers en bois sur solives, une chape sèche ou liquide est indispensable avant la pose de carrelage. Sans cette étape, les carreaux craqueront rapidement sous les contraintes de flexion.' },
    },
  ],
}

export default function CarrelageAppartementParis() {
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
          <span className="text-gray-400">Carrelage appartement Paris</span>
        </nav>
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Sols & Revêtements</p>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-white mb-5 max-w-3xl mx-auto leading-tight">
          Carrelage appartement Paris :<br className="hidden sm:block" /> prix, pose & conseils 2025
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Carrelage en salle de bain, cuisine, entrée ou séjour — types de carreaux, prix au m², tendances et conseils pour les appartements parisiens.
        </p>
        <p className="text-gray-500 text-xs mt-4">Publié le 1er avril 2025 · Mis à jour le 19 avril 2025</p>
      </section>

      {/* Article */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          <p className="text-gray-600 text-base leading-relaxed mb-8">
            Le carrelage reste l&apos;un des revêtements les plus demandés pour la rénovation d&apos;appartements parisiens — notamment en salle de bain, cuisine et entrée. Polyvalent, durable et facile d&apos;entretien, il se décline aujourd&apos;hui dans des formats et des matières qui rivalisent avec le parquet en termes d&apos;esthétique. Voici tout ce qu&apos;il faut savoir avant de lancer votre chantier.
          </p>

          {/* Prix */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Prix de pose de carrelage à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Le coût d&apos;un chantier carrelage à Paris comprend la fourniture des carreaux et la pose. Les prix varient selon le format des carreaux, la complexité du motif et la préparation du support :
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#FAFAF8]">
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Type de prestation</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Prix fourniture + pose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-gray-200 text-gray-600">Carrelage sol (grès cérame standard)</td>
                  <td className="p-3 border border-gray-200 text-gray-600">40 – 70 €/m²</td>
                </tr>
                <tr className="bg-[#FAFAF8]">
                  <td className="p-3 border border-gray-200 text-gray-600">Carrelage mural (salle de bain, crédence)</td>
                  <td className="p-3 border border-gray-200 text-gray-600">50 – 90 €/m²</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 text-gray-600">Grand format (80×80 ou 120×60)</td>
                  <td className="p-3 border border-gray-200 text-gray-600">70 – 120 €/m²</td>
                </tr>
                <tr className="bg-[#FAFAF8]">
                  <td className="p-3 border border-gray-200 text-gray-600">Carreaux de ciment (pose délicate)</td>
                  <td className="p-3 border border-gray-200 text-gray-600">80 – 140 €/m²</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 text-gray-600">Pose en diagonale ou motif complexe</td>
                  <td className="p-3 border border-gray-200 text-gray-600">+15 – 25 €/m²</td>
                </tr>
                <tr className="bg-[#FAFAF8]">
                  <td className="p-3 border border-gray-200 text-gray-600">Dépose ancien carrelage</td>
                  <td className="p-3 border border-gray-200 text-gray-600">15 – 30 €/m²</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs italic mb-8">
            Ces tarifs sont indicatifs pour Paris et l&apos;Île-de-France. Un devis précis dépend de l&apos;état du support, de l&apos;accessibilité et des finitions souhaitées.
          </p>

          {/* Types */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Quels carreaux choisir pour un appartement parisien ?
          </h2>
          <div className="space-y-4 mb-8">
            {[
              {
                titre: 'Grès cérame pleine masse',
                desc: 'Le plus courant en rénovation. Très résistant, disponible en grand format (60×60, 80×80, 120×60), il imite parfaitement le béton, la pierre ou le bois. Idéal pour les sols de séjour, cuisines et salles de bain. Prix matière : 15 à 60 €/m².',
              },
              {
                titre: 'Carreaux de ciment',
                desc: 'En vogue pour les appartements haussmanniens. Ils apportent du caractère avec leurs motifs géométriques. Fragiles face aux acides, ils nécessitent un jointoiement et une imprégnation soigneuse. Prix : 30 à 80 €/m² selon le motif.',
              },
              {
                titre: 'Marbre et pierre naturelle',
                desc: 'Incontournable dans les appartements de luxe parisiens (Marbre Blanc, Travertin, Pierre de Bourgogne). Très durable mais demande un entretien régulier (cristallisation). Prix : 60 à 200 €/m² selon la qualité.',
              },
              {
                titre: 'Faïence murale',
                desc: 'Pour les murs de salle de bain et les crédences cuisine. Moins résistante que le grès pour les sols, mais disponible dans une gamme infinie de couleurs et de formats. Les petits formats (métro, zellige) sont très tendance.',
              },
            ].map((item) => (
              <div key={item.titre} className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-5">
                <h3 className="font-semibold text-[#1C1C1C] text-sm mb-2">{item.titre}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Tendances */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Tendances carrelage à Paris en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Les appartements parisiens rénovés ces dernières années suivent quelques grandes tendances :
          </p>
          <ul className="space-y-3 mb-8">
            {[
              { t: 'Grand format sans joints apparents', d: 'Les dalles 120×60 ou 120×120 en grès cérame béton créent des espaces visuellement plus grands. Les joints fins (1 à 2 mm) minimisent les ruptures visuelles.' },
              { t: 'Zellige et carreaux artisanaux', d: 'Ces carreaux en terre émaillée, irréguliers par nature, apportent une authenticité très recherchée dans les cuisines et salles de bain d\'appartements haut de gamme. Budget : 80 à 150 €/m².' },
              { t: 'Terrazzo', d: 'Le béton marbré revient en force. Disponible en carreaux ou en sol coulé, il s\'adapte aussi bien aux studios modernes qu\'aux appartements haussmanniens.' },
              { t: 'Sol continu salle de bain → chambre', d: 'Supprimer les transitions entre pièces pour créer de la continuité est une demande fréquente dans les petits appartements parisiens.' },
            ].map((item) => (
              <li key={item.t} className="flex gap-3">
                <span className="text-[#D4AF37] mt-1 flex-shrink-0">›</span>
                <div>
                  <span className="font-semibold text-[#1C1C1C] text-sm">{item.t} — </span>
                  <span className="text-gray-500 text-sm font-light">{item.d}</span>
                </div>
              </li>
            ))}
          </ul>

          {/* Contraintes Paris */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Contraintes spécifiques aux appartements parisiens
          </h2>
          <div className="space-y-3 mb-8">
            {[
              { titre: 'Planchers en bois (chevrons + solives)', desc: 'Les immeubles haussmanniens ont souvent des planchers en bois. La pose de carrelage nécessite alors une chape sèche ou liquide pour rigidifier le support. Sans cette étape, les carreaux cassent rapidement.' },
              { titre: 'Passage des charges par l\'escalier', desc: 'Dans les immeubles parisiens sans monte-charge, les grandes dalles (>60×60) ne peuvent souvent pas être montées à la main. Anticipez ce point lors du choix du format.' },
              { titre: 'Règlement de copropriété', desc: 'La pose de carrelage en remplacement d\'un parquet peut être soumise à l\'accord de la copropriété si elle modifie les nuisances acoustiques (les carreaux transmettent plus les bruits d\'impact que le parquet). Vérifiez votre règlement.' },
            ].map((item) => (
              <div key={item.titre} className="border-l-2 border-[#D4AF37] pl-4">
                <p className="font-semibold text-[#1C1C1C] text-sm mb-1">{item.titre}</p>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Espace Design */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Espace Design : carreleur parisien depuis plus de 15 ans
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Espace Design réalise des chantiers de carrelage dans tout Paris et la petite couronne. Nous maîtrisons aussi bien la pose de grand format en salle de bain que la restauration de carreaux de ciment anciens dans les appartements haussmanniens.
          </p>
          <ul className="space-y-2 mb-6">
            {[
              'Fourniture des matériaux ou pose seule (si vous achetez vous-mêmes)',
              'Chape de ragréage incluse si le support l\'exige',
              'Pose d\'étanchéité sous carrelage (douche à l\'italienne)',
              'Devis gratuit sous 48h, déplacement sans engagement',
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
              { href: '/carrelage-paris', title: 'Carrelage Paris — notre service' },
              { href: '/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain Paris' },
              { href: '/blog/renovation-salle-de-bain-paris', title: 'Guide rénovation salle de bain Paris' },
              { href: '/blog/renovation-parquet-paris', title: 'Parquet à Paris : pose et rénovation' },
              { href: '/blog/prix-renovation-appartement-paris', title: 'Prix d\'une rénovation à Paris en 2025' },
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
          Un projet carrelage à Paris ?
        </h2>
        <p className="text-gray-400 text-sm font-light mb-6 max-w-lg mx-auto">
          Devis gratuit sous 48h — nous intervenons dans tout Paris et l&apos;Île-de-France.
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
