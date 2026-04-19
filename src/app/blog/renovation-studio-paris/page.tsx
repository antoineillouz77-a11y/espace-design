import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Studio Paris : Prix, Conseils & Guide Complet 2025',
  description:
    'Rénover un studio à Paris : budget réaliste, optimisation de l\'espace, astuces gain de place. Prix au m², exemples de projets. Devis gratuit Espace Design.',
  keywords: [
    'rénovation studio Paris',
    'rénover studio Paris prix',
    'aménagement studio Paris',
    'rénovation petit appartement Paris',
    'optimisation espace studio Paris',
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation studio Paris', item: 'https://espacedesignparis.fr/blog/renovation-studio-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Studio Paris : Prix, Conseils & Guide Complet 2025',
  description: 'Tout savoir pour rénover un studio à Paris : budget, optimisation de l\'espace, matériaux et conseils d\'artisan.',
  datePublished: '2025-03-15',
  dateModified: '2025-04-19',
  inLanguage: 'fr-FR',
  author: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
    logo: { '@type': 'ImageObject', url: 'https://espacedesignparis.fr/images/logo.png' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-studio-paris' },
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation complète d\'un studio à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'La rénovation complète d\'un studio parisien coûte en moyenne entre 1 000 et 1 500 €/m². Pour un studio de 25 m², prévoyez 25 000 à 37 500 €. Ce prix comprend la main-d\'œuvre et les matériaux standards.' },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps dure la rénovation d\'un studio à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Un rafraîchissement (peinture + sols) prend 1 à 2 semaines. Une rénovation complète avec plomberie et électricité dure 6 à 10 semaines. Pour un studio haut de gamme avec menuiserie sur mesure, comptez 10 à 16 semaines.' },
    },
    {
      '@type': 'Question',
      name: 'Comment optimiser l\'espace d\'un studio parisien ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Les solutions les plus efficaces sont : lit mezzanine ou escamotable pour libérer la surface au sol, rangements du sol au plafond sur mesure, cloison coulissante pour séparer les espaces, sol continu sans transition et palette de couleurs claires pour agrandir visuellement l\'espace.' },
    },
  ],
}

export default function RenovationStudioParis() {
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
          <span className="text-gray-400">Rénovation studio Paris</span>
        </nav>
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Guides</p>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-white mb-5 max-w-3xl mx-auto leading-tight">
          Rénovation studio Paris :<br className="hidden sm:block" /> prix, astuces & guide 2025
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Comment rénover un studio parisien de 15 à 35 m² — optimisation de l&apos;espace, budget réaliste, matériaux adaptés. Tous les conseils d&apos;Espace Design.
        </p>
        <p className="text-gray-500 text-xs mt-4">Publié le 15 mars 2025 · Mis à jour le 19 avril 2025</p>
      </section>

      {/* Article */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose-custom">

          {/* Intro */}
          <p className="text-gray-600 text-base leading-relaxed mb-8">
            À Paris, les studios représentent une part considérable du parc immobilier. Ces petites surfaces — souvent entre 15 et 35 m² — concentrent en un seul volume la cuisine, le salon, la chambre et parfois le bureau. Rénover un studio parisien demande une réflexion particulière : chaque décision de conception a un impact fort sur le confort de vie. Voici notre guide complet.
          </p>

          {/* Budget */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Quel budget pour rénover un studio à Paris ?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Le coût d&apos;une rénovation de studio à Paris varie selon l&apos;ampleur des travaux et les finitions choisies :
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#FAFAF8]">
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Type de rénovation</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Prix au m²</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Budget studio 25 m²</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-gray-200 text-gray-600">Rafraîchissement (peinture, sols)</td>
                  <td className="p-3 border border-gray-200 text-gray-600">300 – 500 €</td>
                  <td className="p-3 border border-gray-200 text-gray-600">7 500 – 12 500 €</td>
                </tr>
                <tr className="bg-[#FAFAF8]">
                  <td className="p-3 border border-gray-200 text-gray-600">Rénovation partielle</td>
                  <td className="p-3 border border-gray-200 text-gray-600">600 – 900 €</td>
                  <td className="p-3 border border-gray-200 text-gray-600">15 000 – 22 500 €</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 text-gray-600">Rénovation complète</td>
                  <td className="p-3 border border-gray-200 text-gray-600">1 000 – 1 500 €</td>
                  <td className="p-3 border border-gray-200 text-gray-600">25 000 – 37 500 €</td>
                </tr>
                <tr className="bg-[#FAFAF8]">
                  <td className="p-3 border border-gray-200 text-gray-600">Rénovation haut de gamme</td>
                  <td className="p-3 border border-gray-200 text-gray-600">1 500 – 2 500 €</td>
                  <td className="p-3 border border-gray-200 text-gray-600">37 500 – 62 500 €</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs italic mb-8">
            Ces tarifs incluent la main-d&apos;œuvre et les matériaux standards. Les prix peuvent varier selon l&apos;état du bien, l&apos;accessibilité du chantier et l&apos;arrondissement.
          </p>

          {/* Spécificités studio */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Les spécificités d&apos;une rénovation de studio parisien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Rénover un studio parisien n&apos;est pas la même chose que rénover un grand appartement. Les contraintes sont différentes :
          </p>
          <div className="space-y-4 mb-8">
            {[
              {
                titre: 'Hauteur sous plafond souvent réduite',
                desc: 'Beaucoup de studios parisiens des années 1960-1980 ont des plafonds à 2,30 m ou moins. Certains travaux (pose de spots encastrés, faux plafonds) ne sont alors pas envisageables. En revanche, dans les immeubles haussmanniens, des hauteurs de 2,80 à 3,20 m permettent des aménagements en mezzanine.',
              },
              {
                titre: 'Kitchenette vs cuisine équipée',
                desc: 'Dans un studio, la cuisine est souvent réduite à une kitchenette. La rénovation peut inclure l\'installation d\'une cuisine ouverte bien conçue, avec îlot ou bar de séparation, pour optimiser l\'espace sans alourdir le volume.',
              },
              {
                titre: 'Électricité et plomberie souvent vétustes',
                desc: 'Les studios anciens ont fréquemment des installations électriques non conformes (tableaux à fusibles, circuits non différentiels). La mise aux normes est souvent nécessaire et représente 2 000 à 5 000 € selon l\'état.',
              },
              {
                titre: 'Salle de bain de petite taille',
                desc: 'Une salle de bain de studio fait souvent 3 à 5 m². La rénovation doit maximiser chaque centimètre : douche à l\'italienne, WC suspendu, niche de rangement encastrée.',
              },
            ].map((item) => (
              <div key={item.titre} className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-5">
                <h3 className="font-semibold text-[#1C1C1C] text-sm mb-2">{item.titre}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Optimisation espace */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            5 astuces pour optimiser l&apos;espace d&apos;un studio
          </h2>
          <div className="space-y-3 mb-8">
            {[
              { n: '1', t: 'Lit mezzanine ou lit escamotable', d: 'Libère 100% de la surface au sol le jour. Une mezzanine bien conçue peut accueillir un espace de travail ou un dressing en dessous. Coût : 3 000 à 8 000 € selon les matériaux et le sur-mesure.' },
              { n: '2', t: 'Rangements sur mesure du sol au plafond', d: 'Des bibliothèques et dressings intégrés exploitent la moindre niche. Sur un mur de 3 m de hauteur, vous gagnez 2 à 3 fois plus de rangements qu\'avec des meubles standard.' },
              { n: '3', t: 'Cloison coulissante ou vitrage', d: 'Pour séparer le coin nuit sans alourdir visuellement le studio, une cloison coulissante en bois ou en verre séparé l\'espace à la demande tout en gardant la luminosité.' },
              { n: '4', t: 'Sols continus sans transition', d: 'Un sol unique dans tout le studio — parquet ou béton ciré — crée une continuité visuelle qui agrandit l\'espace. Évitez les transitions entre salon et cuisine.' },
              { n: '5', t: 'Palette de couleurs claires et cohérentes', d: 'Blanc cassé, grège ou taupe sur les murs et le plafond maximisent la luminosité. Une seule couleur d\'accent (teinte boisée, bleu canard) suffit pour personnaliser l\'espace.' },
            ].map((item) => (
              <div key={item.n} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#D4AF37]/20 text-[#B8960C] text-xs font-semibold flex items-center justify-center mt-0.5">{item.n}</span>
                <div>
                  <p className="font-semibold text-[#1C1C1C] text-sm mb-1">{item.t}</p>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">{item.d}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Délais */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Combien de temps prend une rénovation de studio ?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Les délais dépendent de l&apos;ampleur des travaux et de la disponibilité des artisans :
          </p>
          <ul className="space-y-2 mb-8">
            {[
              'Rafraîchissement (peinture + sols) : 1 à 2 semaines',
              'Rénovation partielle (salle de bain + peinture) : 3 à 4 semaines',
              'Rénovation complète avec plomberie et électricité : 6 à 10 semaines',
              'Rénovation complète haut de gamme avec sur-mesure : 10 à 16 semaines',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-[#D4AF37] mt-1">›</span>
                {item}
              </li>
            ))}
          </ul>

          {/* Espace Design */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Espace Design : spécialiste de la rénovation de studios parisiens
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Espace Design est un artisan rénovateur basé à Paris, spécialisé dans la rénovation et l&apos;optimisation de petites surfaces. Nous gérons l&apos;ensemble du projet — du devis à la livraison — pour une rénovation sans stress.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Notre approche pour les studios : d&apos;abord comprendre votre usage (télétravail, location, résidence principale) avant de proposer des solutions d&apos;aménagement sur mesure. Chaque centimètre compte.
          </p>
          <ul className="space-y-2 mb-6">
            {[
              'Devis gratuit sous 48h, déplacement sans engagement',
              'Un seul interlocuteur pour tout coordonner',
              'Assurance décennale et RC pro',
              'Intervention dans tout Paris et l\'Île-de-France',
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
              { href: '/blog/prix-renovation-appartement-paris', title: 'Prix d\'une rénovation à Paris en 2025' },
              { href: '/blog/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain à Paris' },
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
              { href: '/renovation-paris-9e', label: '9e' },
              { href: '/renovation-paris-15e', label: '15e' },
              { href: '/renovation-paris-16e', label: '16e' },
              { href: '/renovation-paris-17e', label: '17e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
              { href: '/renovation-levallois-perret', label: 'Levallois-Perret' },
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
          Votre studio à rénover à Paris ?
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
