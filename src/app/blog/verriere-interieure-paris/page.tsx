import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Verrière Intérieure Paris : prix, styles acier & pose 2025 | Espace Design',
  description:
    'Verrière intérieure (cloison vitrée style atelier) à Paris — prix, dimensions, acier noir, pose et réglementation. Guide complet 2025.',
  keywords: [
    'verrière intérieure Paris',
    'cloison vitrée Paris',
    'verrière style atelier Paris',
    'verrière acier noir Paris prix',
    'pose verrière intérieure Paris',
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Verrière intérieure Paris', item: 'https://espacedesignparis.fr/blog/verriere-interieure-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Verrière Intérieure Paris : prix, styles acier & pose 2025',
  description: 'Verrière intérieure à Paris — prix, dimensions, acier noir, pose et réglementation. Guide complet 2025.',
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
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/verriere-interieure-paris' },
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une verrière intérieure à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Une verrière intérieure coûte entre 1 500 et 6 000 € selon la taille, le style et les options. Une verrière standard en acier noir (120×210 cm) revient à 1 800-2 500 €. Avec une porte intégrée, comptez 2 500-4 000 €. En double vitrage phonique, les prix atteignent 4 000-6 000 €. La pose est comprise dans ces tarifs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Faut-il un permis pour installer une verrière intérieure ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Non, une verrière intérieure (cloison non porteuse) ne nécessite pas de permis de construire ni de déclaration préalable de travaux, sauf si elle modifie la façade visible de la rue. Dans un appartement, elle est considérée comme un aménagement intérieur. En copropriété, vérifiez le règlement de copropriété.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps dure la pose d\'une verrière intérieure ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La pose d\'une verrière intérieure prend généralement 1 à 3 jours selon la taille et la complexité. Une verrière simple (sans porte) peut être posée en une journée. Les modèles avec porte, vitrage spécial ou sur-mesure nécessitent 2-3 jours. Le délai de fabrication est de 2 à 4 semaines avant intervention.',
      },
    },
  ],
}

export default function VerriereInterieureParis() {
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
          <span className="text-gray-400">Verrière intérieure Paris</span>
        </nav>
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Aménagement</p>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-white mb-5 max-w-3xl mx-auto leading-tight">
          Verrière intérieure Paris
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Cloison vitrée style atelier ou industriel à Paris : prix, matériaux, dimensions, vitrage et délais de pose. Tout ce qu&apos;il faut savoir en 2025.
        </p>
        <p className="text-gray-500 text-xs mt-4">Publié le 20 avril 2025</p>
      </section>

      {/* Article */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          <p className="text-gray-600 text-base leading-relaxed mb-8">
            La verrière intérieure est devenue l&apos;un des éléments décoratifs les plus populaires dans les appartements parisiens. Elle permet de diviser un espace tout en laissant passer la lumière — une qualité précieuse dans des appartements souvent sombres. Style atelier, industriel ou contemporain : voici tout ce qu&apos;il faut savoir avant de vous lancer.
          </p>

          {/* Types */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Les différents types de verrières intérieures
          </h2>
          <div className="space-y-5 mb-10">
            {[
              {
                type: 'Verrière style atelier (acier noir)',
                desc: 'Profils en acier thermolaqué noir mat, petits carreaux rectangulaires ou carrés. Inspire les verrières des ateliers d\'artistes parisiens. La plus demandée à Paris.',
                prix: '1 800 – 3 500 €',
                color: 'border-gray-200 bg-gray-50',
              },
              {
                type: 'Verrière industrielle (acier brut)',
                desc: 'Profils plus épais, acier brut ou gris anthracite, grands panneaux de verre. Convient aux lofts et espaces ouverts.',
                prix: '2 000 – 4 500 €',
                color: 'border-amber-200 bg-amber-50',
              },
              {
                type: 'Verrière contemporaine (aluminium)',
                desc: 'Profils fins en aluminium laqué blanc, gris ou noir. Plus légère visuellement, s\'intègre facilement dans les intérieurs épurés.',
                prix: '1 500 – 3 000 €',
                color: 'border-blue-200 bg-blue-50',
              },
              {
                type: 'Verrière bois',
                desc: 'Structure en bois massif (chêne, pin) avec vitrages. Aspect chaleureux, idéal pour les intérieurs scandinaves ou naturels.',
                prix: '2 000 – 4 000 €',
                color: 'border-green-200 bg-green-50',
              },
            ].map((s) => (
              <div key={s.type} className={`rounded-lg border p-5 ${s.color}`}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-[#1C1C1C] text-sm">{s.type}</h3>
                  <span className="text-xs font-semibold text-[#1C1C1C] bg-white/60 px-2 py-0.5 rounded">{s.prix}</span>
                </div>
                <p className="text-gray-500 text-sm font-light">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Tableau prix détaillé */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Prix détaillé par configuration
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#FAFAF8]">
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Configuration</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Dimensions typiques</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Prix posé</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { config: 'Verrière fixe sans porte (acier noir)', dims: '120×200 cm', prix: '1 800 – 2 500 €' },
                  { config: 'Verrière avec porte battante intégrée', dims: '160×220 cm', prix: '2 500 – 4 000 €' },
                  { config: 'Verrière double porte coulissante', dims: '200×220 cm', prix: '3 500 – 6 000 €' },
                  { config: 'Verrière pleine hauteur (sol/plafond)', dims: '120×250 cm', prix: '2 500 – 5 000 €' },
                  { config: 'Verrière d\'angle (2 pans)', dims: '200×200 cm total', prix: '3 500 – 7 000 €' },
                  { config: 'Verrière sur mesure (grande surface)', dims: 'Variable', prix: 'Sur devis' },
                ].map((row, i) => (
                  <tr key={row.config} className={i % 2 === 1 ? 'bg-[#FAFAF8]' : ''}>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.config}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.dims}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 font-medium">{row.prix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Vitrages */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Choisir le bon vitrage pour sa verrière
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Le choix du vitrage est aussi important que la structure. Dans un appartement parisien, il conditionne l&apos;intimité, l&apos;acoustique et la sécurité.
          </p>
          <div className="space-y-4 mb-8">
            {[
              {
                type: 'Verre clair (transparent)',
                desc: 'Laisse passer 100% de la lumière et la vue. Idéal pour séparer un couloir d\'un séjour, ou un bureau d\'un salon sans couper visuellement l\'espace.',
                usage: 'Espaces ouverts',
              },
              {
                type: 'Verre dépoli (satiné)',
                desc: 'Laisse passer la lumière mais protège l\'intimité. Parfait pour séparer une chambre, un cabinet de toilette ou un dressing.',
                usage: 'Espaces intimes',
              },
              {
                type: 'Verre feuilleté (sécurité)',
                desc: 'Constitué de deux vitres collées entre elles — si cassé, il reste en place. Obligatoire dans les zones fréquentées par des enfants ou en position basse.',
                usage: 'Sécurité familles',
              },
              {
                type: 'Double vitrage acoustique',
                desc: 'Réduit significativement les bruits entre pièces (jusqu\'à 40 dB). Recommandé si la verrière sépare un bureau de travail ou une chambre d\'un espace de vie animé.',
                usage: 'Isolation phonique',
              },
            ].map((item) => (
              <div key={item.type} className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-[#1C1C1C] text-sm">{item.type}</h3>
                  <span className="text-xs text-[#B8960C] font-medium">{item.usage}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Dimensions */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Dimensions standards vs sur-mesure
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            La majorité des fabricants proposent des dimensions standards, ce qui réduit le coût et le délai. Mais dans les appartements haussmanniens avec leurs hauteurs sous plafond de 2,80 m à 3,20 m, le sur-mesure est souvent indispensable.
          </p>
          <div className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-6 mb-8">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-[#1C1C1C] text-sm mb-3">Dimensions standards</h3>
                <ul className="space-y-1.5">
                  {['Largeur : 60, 80, 100, 120 cm', 'Hauteur : 180, 200, 210, 220 cm', 'Délai : 2-3 semaines', 'Prix : -20 à -30% vs sur-mesure'].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                      <CheckCircle size={12} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-[#1C1C1C] text-sm mb-3">Sur-mesure</h3>
                <ul className="space-y-1.5">
                  {['Toutes dimensions possibles', 'Adapté aux plafonds hauts parisiens', 'Délai : 3-5 semaines', 'Pose plus précise, finition parfaite'].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                      <CheckCircle size={12} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Réglementation */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Réglementation et copropriété à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Une verrière intérieure ne touche pas à la structure du bâtiment. Elle est assimilée à un aménagement intérieur et ne nécessite ni permis de construire ni déclaration préalable. Toutefois, quelques points méritent attention dans le contexte parisien :
          </p>
          <div className="space-y-3 mb-8">
            {[
              { point: 'Appartement en copropriété', detail: 'Vérifiez le règlement de copropriété. Certains immeubles haussmanniens imposent des contraintes sur les modifications intérieures visibles depuis les parties communes.' },
              { point: 'Mur porteur', detail: 'Si la verrière vient remplacer une cloison porteuse, un bureau d\'études structure est obligatoire et des travaux de renfort nécessaires.' },
              { point: 'Immeuble classé ou protégé', detail: 'Dans certains arrondissements (Marais, Île Saint-Louis), des contraintes patrimoniales peuvent s\'appliquer. Renseignez-vous auprès de la mairie d\'arrondissement.' },
            ].map((item) => (
              <div key={item.point} className="border-l-2 border-[#D4AF37] pl-4 py-1">
                <h3 className="font-semibold text-[#1C1C1C] text-sm mb-1">{item.point}</h3>
                <p className="text-gray-500 text-sm font-light">{item.detail}</p>
              </div>
            ))}
          </div>

          {/* Espace Design */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Espace Design : pose de verrières intérieures à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Nous concevons, fabriquons et posons des verrières intérieures sur mesure dans toute la région parisienne. Acier thermolaqué noir, aluminium, bois — chaque verrière est adaptée à votre espace et à votre style.
          </p>
          <ul className="space-y-2 mb-6">
            {[
              'Visite et prise de cotes gratuite sous 48h',
              'Fabrication sur mesure avec plan de validation',
              'Pose soignée avec finitions enduit et peinture',
              'Ensemble des vitrages disponibles (clair, dépoli, feuilleté, acoustique)',
              'Garantie pose et étanchéité',
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
              { href: '/amenagement-interieur-paris', title: 'Aménagement intérieur Paris' },
              { href: '/menuiserie-paris', title: 'Menuiserie sur mesure Paris' },
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénover un haussmannien' },
              { href: '/blog/renovation-studio-paris', title: 'Rénovation studio Paris' },
              { href: '/platrererie-paris', title: 'Plâtrerie & cloisons Paris' },
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
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-paris-17e', label: 'Paris 17e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
              { href: '/renovation-levallois-perret', label: 'Levallois-Perret' },
              { href: '/renovation-versailles', label: 'Versailles' },
              { href: '/renovation-saint-germain-en-laye', label: 'Saint-Germain-en-Laye' },
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
      <section className="py-16 bg-[#D4AF37] text-center px-4">
        <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-3">
          Votre verrière intérieure à Paris ?
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-6 max-w-lg mx-auto">
          Devis gratuit sous 48h — prise de cotes et conseil sur le style et le vitrage offerts.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#1C1C1C] text-white px-7 py-3.5 rounded font-light text-sm tracking-wide hover:bg-[#333] transition-colors duration-300"
        >
          Demander un devis <ArrowRight size={13} />
        </Link>
      </section>
    </>
  )
}
