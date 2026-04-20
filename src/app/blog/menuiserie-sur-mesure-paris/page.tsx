import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Menuiserie Sur Mesure Paris : Prix, Types & Artisan 2025',
  description:
    'Placards, dressings, bibliothèques, portes sur mesure à Paris. Prix au ml et au m², matériaux, délais. Artisan menuisier Espace Design, devis gratuit 48h.',
  keywords: [
    'menuiserie sur mesure Paris',
    'placard sur mesure Paris prix',
    'dressing sur mesure Paris',
    'bibliothèque sur mesure Paris',
    'artisan menuisier Paris',
    'aménagement intérieur sur mesure Paris',
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Menuiserie sur mesure Paris', item: 'https://espacedesignparis.fr/blog/menuiserie-sur-mesure-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Menuiserie Sur Mesure Paris : Prix, Types & Artisan 2025',
  description: 'Tout savoir sur la menuiserie sur mesure à Paris : placards, dressings, bibliothèques, portes — prix, matériaux et conseils d\'expert.',
  datePublished: '2025-04-10',
  dateModified: '2025-04-19',
  inLanguage: 'fr-FR',
  author: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
    logo: { '@type': 'ImageObject', url: 'https://espacedesignparis.fr/images/logo.png' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/menuiserie-sur-mesure-paris' },
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'un dressing sur mesure à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Un dressing sur mesure à Paris coûte entre 800 et 1 800 €/ml selon les matériaux. En mélaminé standard, comptez 800 à 1 200 €/ml. En MDF laqué ou bois massif, le prix peut monter à 1 500-2 500 €/ml. La pose est incluse dans ces tarifs.' },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps faut-il pour commander une menuiserie sur mesure à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Le délai total est généralement de 5 à 10 semaines : 1-3 jours pour la prise de cotes, 1-2 semaines pour la conception, 3-6 semaines de fabrication en atelier et 1-5 jours de pose. Anticipez ce délai lors de votre planification de travaux.' },
    },
    {
      '@type': 'Question',
      name: 'Quelle est la différence entre mélaminé et MDF laqué pour un placard ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Le mélaminé est le plus économique : panneau de particules recouvert d\'une résine, disponible dans des centaines de teintes, bon rapport qualité/prix. Le MDF laqué offre des finitions plus soignées (belles teintes mates ou brillantes, grain fin) pour 15 à 35 % de plus. Pour les dressings haut de gamme, le MDF laqué est le standard.' },
    },
  ],
}

export default function MenuiserieSurMesureParis() {
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
          <span className="text-gray-400">Menuiserie sur mesure Paris</span>
        </nav>
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Menuiserie & Aménagement</p>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-white mb-5 max-w-3xl mx-auto leading-tight">
          Menuiserie sur mesure Paris :<br className="hidden sm:block" /> prix, types & conseils 2025
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Placards, dressings, bibliothèques, portes coulissantes — tout savoir sur la menuiserie sur mesure pour les appartements parisiens.
        </p>
        <p className="text-gray-500 text-xs mt-4">Publié le 10 avril 2025 · Mis à jour le 19 avril 2025</p>
      </section>

      {/* Article */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          <p className="text-gray-600 text-base leading-relaxed mb-8">
            Dans les appartements parisiens — souvent petits et avec des configurations atypiques — la menuiserie sur mesure est fréquemment la seule solution pour optimiser chaque centimètre carré. Dressing intégré sous combles, bibliothèque du sol au plafond, placard en enfilade avec portes coulissantes : les possibilités sont infinies. Voici notre guide complet pour comprendre les prix, les matériaux et les délais.
          </p>

          {/* Prix */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Prix de la menuiserie sur mesure à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Les tarifs varient selon le type d&apos;ouvrage, les matériaux et la complexité de la pose :
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#FAFAF8]">
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Type d&apos;ouvrage</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Prix indicatif</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-gray-200 text-gray-600">Placard sur mesure (mélaminé)</td>
                  <td className="p-3 border border-gray-200 text-gray-600">500 – 1 200 €/ml</td>
                </tr>
                <tr className="bg-[#FAFAF8]">
                  <td className="p-3 border border-gray-200 text-gray-600">Dressing sur mesure (mélaminé)</td>
                  <td className="p-3 border border-gray-200 text-gray-600">800 – 1 800 €/ml</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 text-gray-600">Bibliothèque encastrée (bois massif)</td>
                  <td className="p-3 border border-gray-200 text-gray-600">1 000 – 2 500 €/ml</td>
                </tr>
                <tr className="bg-[#FAFAF8]">
                  <td className="p-3 border border-gray-200 text-gray-600">Porte coulissante sur mesure</td>
                  <td className="p-3 border border-gray-200 text-gray-600">600 – 1 500 €/unité</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 text-gray-600">Verrière intérieure (cloison vitrée)</td>
                  <td className="p-3 border border-gray-200 text-gray-600">1 500 – 4 000 €/unité</td>
                </tr>
                <tr className="bg-[#FAFAF8]">
                  <td className="p-3 border border-gray-200 text-gray-600">Cuisine sur mesure (hors électroménager)</td>
                  <td className="p-3 border border-gray-200 text-gray-600">4 000 – 15 000 €</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs italic mb-8">
            Tarifs fourniture + pose pour Paris. L&apos;accès difficile (étages sans ascenseur) et les configurations complexes peuvent majorer le devis.
          </p>

          {/* Types */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Les grandes familles de menuiserie intérieure sur mesure
          </h2>
          <div className="space-y-4 mb-8">
            {[
              {
                titre: 'Placards et dressings intégrés',
                desc: 'Le classique de la rénovation parisienne. Un dressing du sol au plafond exploite la hauteur souvent généreuse des appartements haussmanniens (2,80 à 3,20 m). Portes battantes, coulissantes ou pivotantes selon l\'espace disponible. Matériaux courants : mélaminé mat, laqué ou plaqué bois.',
              },
              {
                titre: 'Bibliothèques et étagères encastrées',
                desc: 'Dans les séjours et bureaux, une bibliothèque encastrée du sol au plafond devient un élément architectural fort. Le bois massif (chêne, noyer) donne un rendu premium mais le MDF laqué offre un beau résultat à moindre coût.',
              },
              {
                titre: 'Portes coulissantes et cloisons',
                desc: 'Pour séparer deux espaces sans perdre de surface — cuisine ouverte, chambre, bureau — la porte coulissante sur mesure est idéale. Les versions en verre (verrière) gardent la luminosité tout en séparant les ambiances.',
              },
              {
                titre: 'Mezzanines et soppalcos',
                desc: 'Dans les studios et appartements à hauteur sous plafond ≥ 3 m, une mezzanine en bois ou en métal crée un deuxième niveau. Très prisée dans les studios parisiens pour gagner de l\'espace de vie.',
              },
              {
                titre: 'Têtes de lit et mobilier sur mesure',
                desc: 'Dans les chambres atypiques, les formes irrégulières nécessitent un mobilier dessiné sur mesure. Tête de lit encastrée, niche de chevet, caissons de rangement intégrés.',
              },
            ].map((item) => (
              <div key={item.titre} className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-5">
                <h3 className="font-semibold text-[#1C1C1C] text-sm mb-2">{item.titre}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Matériaux */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Matériaux : mélaminé, MDF, bois massif — que choisir ?
          </h2>
          <ul className="space-y-3 mb-8">
            {[
              { t: 'Mélaminé', d: 'Le plus économique. Panneau de particules recouvert d\'une feuille de résine. Disponible dans des centaines de teintes, il offre un bon rapport qualité/prix pour les placards et dressings standard. Sensible à l\'humidité.' },
              { t: 'MDF laqué', d: 'Fibres de bois compressées, idéal pour les façades lisses et les teintes mates ou brillantes. Grain fin, belles finitions — standard dans les cuisines et dressings haut de gamme. Prix : 15 à 35 % plus cher que le mélaminé.' },
              { t: 'Contreplaqué bouleau', d: 'Tendance en ce moment, le contreplaqué apparent donne un rendu "Scandinave" très apprécié. Robuste, il s\'utilise aussi bien pour les étagères que pour les façades.' },
              { t: 'Bois massif (chêne, noyer, hêtre)', d: 'Le plus noble et le plus durable. Idéal pour les bibliothèques, escaliers et meubles de caractère. Budget 2 à 3× supérieur au MDF mais durée de vie illimitée.' },
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

          {/* Délais */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Délais de fabrication et pose à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            La menuiserie sur mesure nécessite une phase de conception avant la fabrication :
          </p>
          <ul className="space-y-2 mb-8">
            {[
              'Visite et prise de cotes : 1 à 3 jours après validation du devis',
              'Conception et plan 3D : 1 à 2 semaines',
              'Fabrication en atelier : 3 à 6 semaines (selon charge)',
              'Pose sur site : 1 à 5 jours selon la taille du projet',
              'Délai total habituel : 5 à 10 semaines',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-[#D4AF37] mt-1">›</span>
                {item}
              </li>
            ))}
          </ul>

          {/* Espace Design */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Espace Design : menuisier sur mesure à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Espace Design conçoit et pose des ouvrages de menuiserie sur mesure dans tout Paris et l&apos;Île-de-France. Notre atelier maîtrise aussi bien le mélaminé haute pression que le bois massif, en passant par le laqué mat premium.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Chaque projet démarre par une visite gratuite pour prendre les cotes et comprendre votre usage. Nous réalisons ensuite un plan 3D pour valider les volumes avant toute fabrication.
          </p>
          <ul className="space-y-2 mb-6">
            {[
              'Devis gratuit sous 48h avec plan 3D inclus',
              'Fabrication sur mesure, à la taille exacte de votre appartement',
              'Pose propre, avec protection des sols et finitions soignées',
              'Assurance décennale et RC professionnelle',
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
              { href: '/menuiserie-paris', title: 'Menuiserie sur mesure Paris — notre service' },
              { href: '/amenagement-interieur-paris', title: 'Aménagement intérieur Paris' },
              { href: '/blog/prix-renovation-appartement-paris', title: 'Prix d\'une rénovation à Paris en 2025' },
              { href: '/blog/renovation-studio-paris', title: 'Rénovation studio Paris : prix et astuces' },
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
              { href: '/renovation-paris-16e', label: '16e' },
              { href: '/renovation-paris-17e', label: '17e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
              { href: '/renovation-levallois-perret', label: 'Levallois-Perret' },
              { href: '/renovation-versailles', label: 'Versailles' },
              { href: '/renovation-saint-cloud', label: 'Saint-Cloud' },
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
          Un projet de menuiserie sur mesure à Paris ?
        </h2>
        <p className="text-gray-400 text-sm font-light mb-6 max-w-lg mx-auto">
          Devis gratuit sous 48h avec plan 3D inclus — nous intervenons dans tout Paris et l&apos;Île-de-France.
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
