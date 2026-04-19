import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Maison Paris & Île-de-France : prix, travaux & guide 2025',
  description:
    'Rénover une maison en Île-de-France : prix au m², types de travaux, spécificités vs appartement. Guide complet Espace Design.',
  keywords: [
    'rénovation maison Paris',
    'rénover maison Île-de-France prix',
    'travaux maison Île-de-France',
    'prix rénovation maison Île-de-France',
    'rénovation maison parisienne',
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Maison Paris', item: 'https://espacedesignparis.fr/blog/renovation-maison-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Maison Paris & Île-de-France : prix, travaux & guide 2025',
  description: 'Rénover une maison en Île-de-France : prix au m², types de travaux, spécificités vs appartement. Guide complet Espace Design.',
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
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-maison-paris' },
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation de maison en Île-de-France ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La rénovation d\'une maison en Île-de-France coûte entre 700 et 1 500 €/m² pour une rénovation standard, et jusqu\'à 2 500 €/m² pour du haut de gamme. Une maison de 100 m² complètement rénovée représente donc un budget de 70 000 à 150 000 €. Les maisons présentent souvent des postes supplémentaires : toiture, façade, cave, chauffage central.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelles sont les différences entre rénover une maison et un appartement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La rénovation d\'une maison implique souvent des travaux supplémentaires : toiture, façade, isolation des combles, système de chauffage central (chaudière ou PAC), jardin et extérieurs. Le coût est généralement plus élevé qu\'un appartement de même surface. En revanche, les contraintes de copropriété sont absentes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelles aides pour rénover une maison en Île-de-France ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MaPrimeRénov\' finance jusqu\'à 90% des travaux d\'isolation et de chauffage selon vos revenus. Les CEE (Certificats d\'Économies d\'Énergie) sont cumulables. La TVA est réduite à 5,5% pour les travaux de rénovation énergétique. L\'Éco-prêt à taux zéro permet de financer jusqu\'à 50 000 €.',
      },
    },
  ],
}

export default function RenovationMaisonParis() {
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
          <span className="text-gray-400">Rénovation Maison Paris</span>
        </nav>
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Maison & Pavillon</p>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-white mb-5 max-w-3xl mx-auto leading-tight">
          Rénovation Maison Paris<br className="hidden sm:block" /> & Île-de-France : guide 2025
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Prix au m², spécificités vs appartement, aides financières et postes de travaux. Tout savoir pour rénover votre maison en Île-de-France.
        </p>
        <p className="text-gray-500 text-xs mt-4">Publié le 20 avril 2025</p>
      </section>

      {/* Article intro */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          <p className="text-gray-600 text-base leading-relaxed mb-8">
            La rénovation d&apos;une maison en Île-de-France présente des particularités importantes par rapport à un appartement parisien classique. Surface plus grande, travaux extérieurs, toiture, chauffage central, jardin — autant de postes qui font grimper le budget mais aussi la valeur patrimoniale du bien. Voici notre guide complet pour budgéter votre projet.
          </p>

          {/* Section 1 */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Prix de rénovation maison Île-de-France par type de travaux
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#FAFAF8]">
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Type de rénovation</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Prix au m²</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Budget maison 100 m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'Rénovation légère (peinture, sols)', prix: '300 – 500 €/m²', budget: '30 000 – 50 000 €' },
                  { type: 'Rénovation complète', prix: '700 – 1 200 €/m²', budget: '70 000 – 120 000 €' },
                  { type: 'Rénovation avec extension', prix: '1 200 – 2 000 €/m²', budget: '120 000 – 200 000 €' },
                  { type: 'Maison haut de gamme', prix: '1 500 – 2 500 €/m²', budget: '150 000 – 250 000 €' },
                ].map((row, i) => (
                  <tr key={row.type} className={i % 2 === 1 ? 'bg-[#FAFAF8]' : ''}>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.type}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.prix}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.budget}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs italic mb-8">Prix indicatifs — hors travaux de toiture, façade et extérieurs (voir tableau complet ci-dessous).</p>

          {/* Section 2 */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Spécificités de la rénovation de maison vs appartement
          </h2>
          <div className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-6 mb-8">
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              La rénovation d&apos;une maison en Île-de-France implique des postes de travaux absents dans un appartement. Voici les principales différences à anticiper dans votre budget :
            </p>
            <ul className="space-y-3">
              {[
                { label: 'Toiture', detail: 'Entretien, réfection ou remplacement complet — poste souvent sous-estimé (8 000 à 25 000 €).' },
                { label: 'Façade & ravalement', detail: 'Nettoyage, isolation par l\'extérieur (ITE) ou simple ravalement — 5 000 à 20 000 € selon surface.' },
                { label: 'Isolation des combles', detail: 'Combles perdus ou aménageables — 50 à 150 €/m², subventionnés à hauteur de 90% par MaPrimeRénov\'.' },
                { label: 'Chauffage central', detail: 'Remplacement chaudière fioul ou gaz par une pompe à chaleur — 8 000 à 20 000 € mais économies substantielles.' },
                { label: 'Cave & sous-sol', detail: 'Humidité, cuvelage ou aménagement — variable selon état.' },
                { label: 'Jardin & extérieurs', detail: 'Terrasse, allée, clôture — postes optionnels mais valorisants.' },
                { label: 'Pas de copropriété', detail: 'Aucune autorisation de copropriété requise — plus de liberté dans les travaux.' },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-3 text-sm">
                  <span className="text-[#D4AF37] mt-0.5 flex-shrink-0">→</span>
                  <span className="text-gray-600"><strong className="text-[#1C1C1C]">{item.label} :</strong> {item.detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3 */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Les postes de travaux d&apos;une maison en Île-de-France
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#FAFAF8]">
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Poste</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Fourchette de prix</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Remarques</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { poste: 'Toiture', prix: '8 000 – 25 000 €', note: 'Selon surface et matériaux (tuiles, ardoises)' },
                  { poste: 'Façade / ravalement', prix: '5 000 – 20 000 €', note: 'ITE possible avec aides CEE' },
                  { poste: 'Isolation combles', prix: '50 – 150 €/m²', note: 'Subventionné MaPrimeRénov\'' },
                  { poste: 'Chauffage (PAC air/eau)', prix: '8 000 – 20 000 €', note: 'TVA 5,5% et MaPrimeRénov\' cumulables' },
                  { poste: 'Cuisine équipée', prix: '8 000 – 25 000 €', note: 'Plus grande qu\'en appartement en moyenne' },
                  { poste: 'Salle de bain', prix: '6 000 – 18 000 €', note: 'Souvent 2 salles de bain' },
                  { poste: 'Électricité', prix: '5 000 – 15 000 €', note: 'Mise aux normes NF C 15-100' },
                  { poste: 'Plomberie', prix: '5 000 – 12 000 €', note: 'Remplacement réseau cuivre/PER' },
                ].map((row, i) => (
                  <tr key={row.poste} className={i % 2 === 1 ? 'bg-[#FAFAF8]' : ''}>
                    <td className="p-3 border border-gray-200 text-gray-600 font-medium">{row.poste}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.prix}</td>
                    <td className="p-3 border border-gray-200 text-gray-400 text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Section 4 */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Aides et subventions pour la rénovation de maison
          </h2>
          <div className="space-y-4 mb-8">
            {[
              {
                titre: 'MaPrimeRénov\'',
                desc: 'Aide de l\'ANAH finançant de 30% à 90% des travaux d\'isolation, de chauffage et de ventilation selon le niveau de revenus. Plafond : 70 000 € de travaux éligibles. Cumulable avec les CEE.',
              },
              {
                titre: 'CEE — Certificats d\'Économies d\'Énergie',
                desc: 'Prime versée par les fournisseurs d\'énergie pour les travaux d\'isolation (combles, murs, planchers) et de chauffage. Montant variable selon le département et les revenus du ménage.',
              },
              {
                titre: 'Éco-prêt à taux zéro (Éco-PTZ)',
                desc: 'Financement sans intérêts jusqu\'à 50 000 € pour des travaux de rénovation énergétique. Accessible sans condition de revenus, remboursable sur 20 ans.',
              },
              {
                titre: 'TVA à 5,5%',
                desc: 'Pour les travaux de rénovation énergétique d\'une résidence principale de plus de 2 ans. S\'applique sur la main d\'œuvre ET les matériaux fournis par l\'artisan.',
              },
            ].map((item) => (
              <div key={item.titre} className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-5">
                <h3 className="font-semibold text-[#1C1C1C] text-sm mb-2">{item.titre}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Section 5 */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Nos réalisations en maison Île-de-France
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Espace Design intervient dans la rénovation de maisons individuelles et de pavillons dans toute l&apos;Île-de-France : Neuilly-sur-Seine, Versailles, Boulogne-Billancourt, Vincennes, Saint-Cloud. Notre équipe est habituée aux spécificités de la maison individuelle — coordination de la toiture, de la façade et des corps de métier intérieurs en un seul chantier maîtrisé.
          </p>
          <ul className="space-y-2 mb-6">
            {[
              'Un chef de chantier dédié pour coordonner tous les corps de métier',
              'Devis détaillé poste par poste, incluant toiture et extérieurs si nécessaire',
              'Accompagnement dans les démarches MaPrimeRénov\' et CEE',
              'Assurance décennale sur l\'ensemble des travaux réalisés',
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
              { href: '/isolation-paris', title: 'Isolation Paris — Espace Design' },
              { href: '/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain Paris' },
              { href: '/parquet-paris', title: 'Parquet Paris — pose et rénovation' },
              { href: '/blog/isolation-thermique-appartement-paris', title: 'Isolation thermique appartement Paris' },
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
          Votre maison à rénover en Île-de-France ?
        </h2>
        <p className="text-gray-400 text-sm font-light mb-6 max-w-lg mx-auto">
          Devis gratuit sous 48h — Espace Design intervient dans toute l&apos;Île-de-France.
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
