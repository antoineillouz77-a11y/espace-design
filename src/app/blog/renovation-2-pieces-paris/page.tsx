import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation 2 Pièces Paris : Prix, Délais & Guide Complet 2025',
  description:
    'Rénover un 2 pièces à Paris : budget réaliste selon le niveau de travaux, exemples de projets, délais. Devis gratuit 48h par Espace Design, artisan rénovateur Paris.',
  keywords: [
    'rénovation 2 pièces Paris',
    'rénover 2 pièces Paris prix',
    'rénovation appartement 2 pièces Paris',
    'travaux 2 pièces Paris budget',
    'artisan rénovation 2 pièces Paris',
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation 2 pièces Paris', item: 'https://espacedesignparis.fr/blog/renovation-2-pieces-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation 2 Pièces Paris : Prix, Délais & Guide Complet 2025',
  description: 'Tout savoir pour rénover un 2 pièces à Paris : budget selon le niveau de travaux, exemples concrets, délais et conseils d\'artisan.',
  datePublished: '2025-04-19',
  dateModified: '2025-04-19',
  inLanguage: 'fr-FR',
  author: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
    logo: { '@type': 'ImageObject', url: 'https://espacedesignparis.fr/images/logo.png' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-2-pieces-paris' },
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation complète d\'un 2 pièces à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La rénovation complète d\'un 2 pièces parisien (40-55 m²) coûte en moyenne 40 000 à 82 500 € selon le niveau de finitions. En rénovation standard (1 000 €/m²), comptez 40 000-55 000 €. En haut de gamme (1 500 €/m²), de 60 000 à 82 500 €. Ces prix incluent main-d\'œuvre et matériaux.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps faut-il pour rénover un 2 pièces à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un rafraîchissement (peinture + sols) d\'un 2 pièces prend 2 à 3 semaines. Une rénovation partielle (salle de bain + peinture) dure 4 à 6 semaines. Une rénovation complète avec plomberie et électricité nécessite 8 à 14 semaines.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quels travaux sont prioritaires dans un 2 pièces parisien ancien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dans un 2 pièces ancien à Paris, les priorités sont : la mise aux normes électriques (sécurité, obligatoire si tableau à fusibles), la rénovation de la salle de bain (retour sur investissement élevé lors de la revente), la remise en état du parquet si présent, puis la peinture et les finitions.',
      },
    },
  ],
}

export default function Renovation2PiecesParis() {
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
          <span className="text-gray-400">Rénovation 2 pièces Paris</span>
        </nav>
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Prix & Budgets</p>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-white mb-5 max-w-3xl mx-auto leading-tight">
          Rénovation 2 pièces Paris :<br className="hidden sm:block" /> prix, délais & guide 2025
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Budget réaliste pour rénover un 2 pièces parisien, exemples de projets selon l&apos;état du bien et les finitions souhaitées. Guide complet par Espace Design.
        </p>
        <p className="text-gray-500 text-xs mt-4">Publié le 19 avril 2025</p>
      </section>

      {/* Article */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          <p className="text-gray-600 text-base leading-relaxed mb-8">
            Le 2 pièces est le type d&apos;appartement le plus courant à Paris. Avec une surface typique de 35 à 55 m², il représente souvent la première acquisition immobilière ou un investissement locatif. Rénover un 2 pièces parisien est un projet structurant : voici tout ce qu&apos;il faut savoir pour budgéter et planifier correctement.
          </p>

          {/* Budget par scénario */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Budget de rénovation d&apos;un 2 pièces à Paris : 3 scénarios
          </h2>

          <div className="space-y-5 mb-8">
            {[
              {
                niveau: 'Rafraîchissement',
                desc: 'Peinture, sols, petites réparations. Idéal si l\'appartement est en bon état général.',
                prix_m2: '300 – 500 €/m²',
                budget_40: '12 000 – 20 000 €',
                budget_55: '16 500 – 27 500 €',
                delai: '2 – 4 semaines',
                color: 'border-green-200 bg-green-50',
              },
              {
                niveau: 'Rénovation partielle',
                desc: 'Salle de bain + cuisine + peinture + sols. L\'électricité et la structure restent en place.',
                prix_m2: '600 – 900 €/m²',
                budget_40: '24 000 – 36 000 €',
                budget_55: '33 000 – 49 500 €',
                delai: '4 – 8 semaines',
                color: 'border-amber-200 bg-amber-50',
              },
              {
                niveau: 'Rénovation complète',
                desc: 'Tout est refait : électricité, plomberie, cloisons, salle de bain, cuisine, revêtements.',
                prix_m2: '1 000 – 1 500 €/m²',
                budget_40: '40 000 – 60 000 €',
                budget_55: '55 000 – 82 500 €',
                delai: '8 – 14 semaines',
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
                    <span className="text-gray-400 block">2p de 40 m²</span>
                    <span className="font-semibold text-[#1C1C1C]">{s.budget_40}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block">2p de 55 m²</span>
                    <span className="font-semibold text-[#1C1C1C]">{s.budget_55}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Postes principaux */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Détail des postes de travaux dans un 2 pièces parisien
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
                  { poste: 'Peinture (murs + plafond)', prix: '3 500 – 7 000 €' },
                  { poste: 'Parquet (ponçage + vitrification)', prix: '1 500 – 4 000 €' },
                  { poste: 'Parquet neuf (fourniture + pose)', prix: '4 000 – 9 000 €' },
                  { poste: 'Rénovation salle de bain', prix: '6 000 – 15 000 €' },
                  { poste: 'Rénovation cuisine', prix: '5 000 – 20 000 €' },
                  { poste: 'Mise aux normes électriques', prix: '3 000 – 6 000 €' },
                  { poste: 'Remplacement plomberie', prix: '3 000 – 8 000 €' },
                  { poste: 'Menuiseries intérieures (portes, placards)', prix: '3 000 – 10 000 €' },
                ].map((row, i) => (
                  <tr key={row.poste} className={i % 2 === 1 ? 'bg-[#FAFAF8]' : ''}>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.poste}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.prix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Priorités */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Par quoi commencer dans un 2 pièces parisien ?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Si votre budget est limité, voici l&apos;ordre des priorités recommandé par Espace Design :
          </p>
          <div className="space-y-3 mb-8">
            {[
              { n: '1', t: 'Sécurité électrique', d: 'Un tableau électrique ancien (fusibles, absence de différentiel) est un danger. La mise aux normes est non négociable et protège aussi votre assurance habitation.' },
              { n: '2', t: 'Plomberie et canalisations', d: 'Les fuites et canalisations vétustes peuvent causer des dégâts considérables. Si l\'appartement est ancien (avant 1970), faites vérifier les canalisations.' },
              { n: '3', t: 'Salle de bain', d: 'C\'est le poste qui offre le meilleur retour sur investissement à la revente. Une belle salle de bain justifie un prix de vente ou un loyer supérieur.' },
              { n: '4', t: 'Cuisine', d: 'Surtout en cuisine ouverte. Une cuisine refaite à neuf transforme visuellement tout l\'espace de vie.' },
              { n: '5', t: 'Peinture et sols', d: 'Le rafraîchissement final qui unifie l\'ensemble et donne à l\'appartement son apparence neuve. À faire en dernier, après tous les travaux qui salissent.' },
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

          {/* Exemple concret */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Exemple concret : rénovation complète d&apos;un 2 pièces de 45 m² à Paris 15e
          </h2>
          <div className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-6 mb-8">
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              <strong className="text-[#1C1C1C]">Contexte :</strong> Appartement haussmannien de 45 m², construit en 1900. Parquet Point de Hongrie abîmé, salle de bain vétuste, électricité à fusibles, cuisine IKEA à remplacer.
            </p>
            <div className="space-y-2">
              {[
                { poste: 'Mise aux normes électriques (neuf circuits + tableau)', cout: '4 500 €' },
                { poste: 'Rénovation complète salle de bain (5 m²)', cout: '8 500 €' },
                { poste: 'Nouvelle cuisine ouverte avec îlot', cout: '12 000 €' },
                { poste: 'Ponçage + vitrification parquet (45 m²)', cout: '3 200 €' },
                { poste: 'Peinture (murs + plafonds, 2 couches)', cout: '5 500 €' },
                { poste: 'Portes intérieures sur mesure (x3)', cout: '4 800 €' },
                { poste: 'Divers (rebouchage, finitions, nettoyage)', cout: '1 500 €' },
              ].map((row) => (
                <div key={row.poste} className="flex justify-between text-sm">
                  <span className="text-gray-600 font-light">{row.poste}</span>
                  <span className="text-[#1C1C1C] font-semibold ml-4 flex-shrink-0">{row.cout}</span>
                </div>
              ))}
              <div className="border-t border-gray-200 pt-3 flex justify-between text-sm font-semibold">
                <span className="text-[#1C1C1C]">Total</span>
                <span className="text-[#B8960C]">40 000 €</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 italic mt-3">Durée du chantier : 10 semaines. Livraison clé en main.</p>
          </div>

          {/* Espace Design */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Espace Design : votre artisan pour la rénovation de 2 pièces à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Espace Design réalise des rénovations de 2 pièces dans tout Paris et l&apos;Île-de-France. Nous gérons l&apos;ensemble du projet — un seul interlocuteur pour coordonner électricien, plombier, carreleur, peintre et menuisier.
          </p>
          <ul className="space-y-2 mb-6">
            {[
              'Devis gratuit et détaillé sous 48h',
              'Planning de chantier remis avant démarrage',
              'Assurance décennale et RC professionnelle',
              'Accompagnement sur le choix des matériaux et la décoration',
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
              { href: '/blog/renovation-studio-paris', title: 'Rénovation studio Paris : prix et astuces' },
              { href: '/blog/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain à Paris' },
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
        <h2 className="font-display text-2xl font-semibold text-white mb-3">
          Votre 2 pièces à rénover à Paris ?
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
