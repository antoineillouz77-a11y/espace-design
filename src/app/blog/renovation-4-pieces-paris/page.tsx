import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation 4 Pièces Paris : Prix, Budget & Guide Complet 2025',
  description:
    'Budget rénovation 4 pièces à Paris : de 80 000 à 160 000 € selon les finitions. Tableau des postes, exemple clé en main, délais.',
  keywords: [
    'rénovation 4 pièces Paris',
    'prix rénovation 4 pièces Paris',
    'budget travaux 4 pièces Paris',
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation 4 pièces Paris', item: 'https://espacedesignparis.fr/blog/renovation-4-pieces-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation 4 Pièces Paris : Prix, Budget & Guide Complet 2025',
  description: 'Tout savoir pour rénover un 4 pièces à Paris : budget selon le niveau de travaux, exemple concret clé en main, délais et conseils de coordination.',
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
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-4-pieces-paris' },
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation complète d\'un 4 pièces à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La rénovation complète d\'un 4 pièces parisien (80-100 m²) coûte entre 80 000 et 150 000 € selon le niveau de finitions. En rénovation standard (1 000 €/m²), comptez 80 000-100 000 €. En haut de gamme (1 500 €/m²), de 120 000 à 150 000 €.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps prend la rénovation d\'un 4 pièces à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un rafraîchissement prend 4-6 semaines. Une rénovation partielle (cuisine + salle de bain) dure 8-14 semaines. Une rénovation complète avec électricité, plomberie, cloisons et menuiserie sur mesure nécessite 16 à 24 semaines.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment gérer la coordination des artisans pour un grand appartement parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La coordination de plusieurs corps de métier (électricien, plombier, carreleur, peintre, menuisier) est le point le plus critique d\'une rénovation de 4 pièces. Chaque retard d\'un corps de métier retarde les suivants. C\'est pourquoi Espace Design propose une gestion de chantier intégrée avec un chef de chantier dédié.',
      },
    },
  ],
}

export default function Renovation4PiecesParis() {
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
          <span className="text-gray-400">Rénovation 4 pièces Paris</span>
        </nav>
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Prix & Budgets</p>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-white mb-5 max-w-3xl mx-auto leading-tight">
          Rénovation 4 pièces Paris :<br className="hidden sm:block" /> prix, budget & guide 2025
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Budget réaliste pour rénover un 4 pièces parisien, tableau des postes, exemple clé en main et conseils pour coordonner les artisans. Guide complet par Espace Design.
        </p>
        <p className="text-gray-500 text-xs mt-4">Publié le 20 avril 2025</p>
      </section>

      {/* Article */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          <p className="text-gray-600 text-base leading-relaxed mb-8">
            Rénover un 4 pièces à Paris est un projet d&apos;envergure. Avec des surfaces de 80 à 110 m², ces appartements — souvent haussmanniens ou des années 60 — concentrent tous les enjeux d&apos;une rénovation complète : multiplicité des corps de métier, coordination des plannings, préservation du caractère ancien. Voici comment budgéter et organiser votre projet.
          </p>

          {/* Budget par scénario */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Budget de rénovation d&apos;un 4 pièces à Paris : 3 scénarios
          </h2>

          <div className="space-y-5 mb-8">
            {[
              {
                niveau: 'Rafraîchissement',
                desc: 'Peinture, sols, remplacement des équipements vétustes. L\'électricité et la structure restent en place.',
                prix_m2: '300 – 500 €/m²',
                budget_80: '24 000 – 40 000 €',
                budget_100: '30 000 – 50 000 €',
                delai: '4 – 6 semaines',
                color: 'border-green-200 bg-green-50',
              },
              {
                niveau: 'Rénovation partielle',
                desc: 'Cuisine + salle de bain + salle d\'eau + peinture + sols. L\'électricité et la plomberie principale restent.',
                prix_m2: '600 – 900 €/m²',
                budget_80: '48 000 – 72 000 €',
                budget_100: '60 000 – 90 000 €',
                delai: '8 – 14 semaines',
                color: 'border-amber-200 bg-amber-50',
              },
              {
                niveau: 'Rénovation complète',
                desc: 'Tout est refait : électricité, plomberie, cloisons, salle de bain, salle d\'eau, cuisine, revêtements, menuiseries.',
                prix_m2: '1 000 – 1 500 €/m²',
                budget_80: '80 000 – 120 000 €',
                budget_100: '100 000 – 150 000 €',
                delai: '16 – 24 semaines',
                color: 'border-blue-200 bg-blue-50',
              },
            ].map((s) => (
              <div key={s.niveau} className={`rounded-lg border p-5 ${s.color}`}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-[#1C1C1C] text-sm">{s.niveau}</h3>
                  <span className="text-xs text-gray-500 font-light">{s.delai}</span>
                </div>
                <p className="text-gray-500 text-sm font-light mb-3">{s.desc}</p>
                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div>
                    <span className="text-gray-400 block">Prix/m²</span>
                    <span className="font-semibold text-[#1C1C1C]">{s.prix_m2}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block">4p de 80 m²</span>
                    <span className="font-semibold text-[#1C1C1C]">{s.budget_80}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block">4p de 100 m²</span>
                    <span className="font-semibold text-[#1C1C1C]">{s.budget_100}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Postes détaillés */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Détail des postes de travaux dans un 4 pièces parisien
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#FAFAF8]">
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Poste</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Prix indicatif</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { poste: 'Mise aux normes électriques complète', prix: '8 000 – 15 000 €' },
                  { poste: 'Rénovation plomberie / canalisations', prix: '5 000 – 12 000 €' },
                  { poste: 'Rénovation salle de bain principale', prix: '8 000 – 18 000 €' },
                  { poste: 'Rénovation salle d\'eau (2e SDB)', prix: '5 000 – 12 000 €' },
                  { poste: 'Cuisine équipée sur mesure', prix: '10 000 – 30 000 €' },
                  { poste: 'Parquet (ponçage + vitrification 80 m²)', prix: '4 000 – 8 000 €' },
                  { poste: 'Parquet neuf (fourniture + pose)', prix: '8 000 – 18 000 €' },
                  { poste: 'Peinture complète (murs + plafonds)', prix: '7 000 – 14 000 €' },
                  { poste: 'Menuiseries intérieures sur mesure', prix: '8 000 – 20 000 €' },
                  { poste: 'Création ou suppression de cloisons', prix: '2 000 – 8 000 €' },
                ].map((row, i) => (
                  <tr key={row.poste} className={i % 2 === 1 ? 'bg-[#FAFAF8]' : ''}>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.poste}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.prix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Exemple concret */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Exemple concret : rénovation complète d&apos;un 4 pièces de 90 m² à Paris 16e
          </h2>
          <div className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-6 mb-8">
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              <strong className="text-[#1C1C1C]">Contexte :</strong> Appartement haussmannien de 90 m², construit en 1890. Parquet Point de Hongrie à restaurer, deux salles d&apos;eau vétustes, électricité à fusibles, cuisine fermée à ouvrir et équiper.
            </p>
            <div className="space-y-2">
              {[
                { poste: 'Mise aux normes électriques (14 circuits + tableau)', cout: '11 000 €' },
                { poste: 'Salle de bain principale (8 m²)', cout: '14 000 €' },
                { poste: 'Salle d\'eau (4 m²)', cout: '7 500 €' },
                { poste: 'Cuisine ouverte avec îlot central', cout: '22 000 €' },
                { poste: 'Réfection plomberie (canalisations cuivre)', cout: '7 000 €' },
                { poste: 'Ponçage + vitrification parquet (90 m²)', cout: '6 800 €' },
                { poste: 'Peinture (murs + plafonds, 2 couches)', cout: '11 000 €' },
                { poste: 'Menuiseries intérieures sur mesure (x5 portes)', cout: '9 500 €' },
                { poste: 'Suppression cloison cuisine + rebouchage', cout: '3 200 €' },
                { poste: 'Divers (finitions, nettoyage, imprévus)', cout: '4 000 €' },
              ].map((row) => (
                <div key={row.poste} className="flex justify-between text-sm">
                  <span className="text-gray-600 font-light">{row.poste}</span>
                  <span className="text-[#1C1C1C] font-semibold ml-4 flex-shrink-0">{row.cout}</span>
                </div>
              ))}
              <div className="border-t border-gray-200 pt-3 flex justify-between text-sm font-semibold">
                <span className="text-[#1C1C1C]">Total</span>
                <span className="text-[#B8960C]">96 000 €</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 italic mt-3">Durée du chantier : 20 semaines. Livraison clé en main. Chef de chantier dédié.</p>
          </div>

          {/* Coordination */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            La coordination des artisans : le nerf de la guerre
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Dans un 4 pièces, on mobilise généralement 5 à 7 corps de métier différents. L&apos;ordre d&apos;intervention est strict et tout décalage se répercute en cascade :
          </p>
          <div className="space-y-3 mb-8">
            {[
              { n: '1', t: 'Démolition et gros œuvre', d: 'Suppression de cloisons, réservations pour plomberie et électricité. Rien ne peut commencer avant que ce soit fini.' },
              { n: '2', t: 'Électricité et plomberie', d: 'Ces deux corps de métier travaillent en parallèle, mais doivent se coordonner dans les mêmes espaces. Un planning précis est indispensable.' },
              { n: '3', t: 'Carrelage salle de bain', d: 'Intervient après la plomberie brute. Un retard ici décale la pose du mobilier de salle de bain.' },
              { n: '4', t: 'Menuiseries et placards', d: 'Posés après les peintures ou avant selon les matériaux. Un bon conducteur de travaux anticipe ces interdépendances.' },
              { n: '5', t: 'Peinture', d: 'Toujours en dernier après tous les travaux "sales". Une peinture faite trop tôt sera à refaire.' },
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

          {/* Espace Design */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Espace Design : rénovation de 4 pièces à Paris, clé en main
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Espace Design réalise des rénovations de grands appartements parisiens avec un chef de chantier dédié. Vous n&apos;avez qu&apos;un seul interlocuteur pour coordonner l&apos;ensemble des corps de métier — de la démolition à la livraison clé en main.
          </p>
          <ul className="space-y-2 mb-6">
            {[
              'Chef de chantier dédié pour les projets de 4 pièces et plus',
              'Planning détaillé remis avant le démarrage',
              'Assurance décennale et RC professionnelle',
              'Devis gratuit et détaillé sous 48h',
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
              { href: '/blog/renovation-3-pieces-paris', title: 'Rénovation 3 pièces Paris : prix & guide' },
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénover un appartement haussmannien' },
              { href: '/blog/electricite-appartement-paris', title: 'Électricité appartement Paris : mise aux normes' },
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
          Votre 4 pièces à rénover à Paris ?
        </h2>
        <p className="text-gray-400 text-sm font-light mb-6 max-w-lg mx-auto">
          Devis gratuit sous 48h — chef de chantier dédié pour les projets d&apos;envergure.
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
