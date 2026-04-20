import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Home Staging Paris : valoriser son bien avant vente 2025 | Espace Design',
  description:
    'Home staging à Paris : travaux de valorisation avant vente. Peinture, sol, cuisines, salles de bain — augmentez votre prix de vente. Guide et budget.',
  keywords: [
    'home staging Paris',
    'valorisation bien avant vente Paris',
    'travaux avant vente appartement Paris',
    'home staging budget Paris',
    'préparer appartement vente Paris',
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Home staging Paris', item: 'https://espacedesignparis.fr/blog/home-staging-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Home Staging Paris : valoriser son bien avant vente 2025',
  description: 'Home staging à Paris : travaux de valorisation avant vente. Peinture, sol, cuisine, salle de bain — augmentez votre prix de vente.',
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
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/home-staging-paris' },
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien coûte le home staging à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un home staging léger (peinture, petites réparations, dépersonnalisation) coûte 2 000 à 8 000 €. Un home staging complet avec rénovation partielle de la salle de bain et de la cuisine atteint 15 000 à 30 000 €. L\'investissement est généralement rentabilisé : un bien bien présenté se vend 5-15% plus cher et 3 fois plus vite à Paris.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quels travaux faire en priorité avant de vendre à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Par ordre de priorité et de rentabilité : 1. Peinture fraîche (toujours rentable), 2. Sol propre ou rénové, 3. Salle de bain correcte (pas luxueuse), 4. Cuisine fonctionnelle, 5. Électricité aux normes. Évitez les travaux trop personnalisés (couleurs vives, styles marqués) qui réduisent le bassin d\'acheteurs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Le home staging augmente-t-il vraiment le prix de vente ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, selon les études du marché immobilier parisien : un bien home stagé se vend en moyenne 10% plus cher qu\'un bien similaire non préparé, et le délai de vente est réduit de 50 à 70%. L\'investissement moyen représente 1-3% de la valeur du bien, pour un retour sur investissement de 3 à 10 fois la mise.',
      },
    },
  ],
}

export default function HomeStagingParis() {
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
          <span className="text-gray-400">Home staging Paris</span>
        </nav>
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Conseils</p>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-white mb-5 max-w-3xl mx-auto leading-tight">
          Home staging Paris
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Valorisez votre bien avant la mise en vente : peinture, sols, cuisine, salle de bain. Guide complet et budget selon la taille de l&apos;appartement.
        </p>
        <p className="text-gray-500 text-xs mt-4">Publié le 20 avril 2025</p>
      </section>

      {/* Article */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          <p className="text-gray-600 text-base leading-relaxed mb-8">
            À Paris, où le prix au m² atteint en moyenne 9 000 à 15 000 € selon l&apos;arrondissement, un appartement mal présenté peut perdre 10 à 15 % de sa valeur marchande — ou rester des mois sur le marché. Le home staging consiste à effectuer des travaux ciblés, neutres et rentables pour maximiser l&apos;impact des visites. Voici comment procéder intelligemment.
          </p>

          {/* Travaux prioritaires */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Les travaux prioritaires avant de vendre à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Tous les travaux ne se valent pas en termes de retour sur investissement. Voici les postes classés par ordre de rentabilité, basé sur les retours d&apos;expérience du marché parisien :
          </p>
          <div className="space-y-4 mb-8">
            {[
              {
                rang: '1',
                poste: 'Peinture fraîche dans des tons neutres',
                desc: 'Un blanc cassé ou un gris clair sur tous les murs. C\'est le travail le moins cher et le plus rentable — toujours. Un appartement avec de la peinture récente se visite mieux et se vend plus vite, quoi qu\'il arrive.',
                roi: 'ROI : 3 à 5×',
                color: 'border-green-300',
              },
              {
                rang: '2',
                poste: 'Sol propre, uniforme et en bon état',
                desc: 'Vitrification d\'un parquet ancien, remplacement d\'un lino abîmé, ponçage de taches. Les acheteurs regardent le sol dès leur entrée — c\'est le second signal le plus fort après les murs.',
                roi: 'ROI : 2 à 4×',
                color: 'border-green-200',
              },
              {
                rang: '3',
                poste: 'Salle de bain propre et fonctionnelle',
                desc: 'Pas besoin de tout refaire : joints neufs, robinetterie chromée moderne, miroir bien éclairé, carrelage nettoyé. Une salle de bain vétuste fait baisser les offres. Une salle de bain propre et simple les maintient.',
                roi: 'ROI : 2 à 3×',
                color: 'border-amber-200',
              },
              {
                rang: '4',
                poste: 'Cuisine fonctionnelle et rangée',
                desc: 'Peinture des façades d\'armoires si vieillies, nouvelle robinetterie, plan de travail propre. L\'acheteur se projette dans sa cuisine — facilitez cette projection avec un espace neutre et propre.',
                roi: 'ROI : 1,5 à 3×',
                color: 'border-amber-200',
              },
              {
                rang: '5',
                poste: 'Électricité aux normes apparentes',
                desc: 'Des tableaux électriques à jour, des prises en état — cela rassure les acheteurs et évite les négociations agressives sur l\'état électrique.',
                roi: 'ROI : 1 à 2×',
                color: 'border-blue-200',
              },
            ].map((item) => (
              <div key={item.rang} className={`border-l-4 ${item.color} pl-5 py-2`}>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-[#1C1C1C] text-sm">{item.rang}. {item.poste}</h3>
                  <span className="text-xs text-[#B8960C] font-medium ml-4 flex-shrink-0">{item.roi}</span>
                </div>
                <p className="text-gray-500 text-sm font-light">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Ce qu'il ne faut PAS faire */}
          <section className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-6 mb-10">
            <h2 className="font-display text-xl font-semibold text-[#1C1C1C] mb-3">
              Ce qu&apos;il ne faut PAS faire avant de vendre
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Certains travaux avant vente réduisent le bassin d&apos;acheteurs ou ne sont pas amortis sur le prix de vente. À éviter absolument :
            </p>
            <div className="space-y-2">
              {[
                'Refaire complètement une cuisine ou une salle de bain luxueuse (vous ne récupérerez pas l\'investissement)',
                'Peindre en couleur vive ou dans un style très personnel — choisissez des tons universels',
                'Acheter des meubles neufs pour décorer (le mobilier part avec vous — ça ne valorise pas)',
                'Créer une ouverture entre des pièces sans étude structurelle préalable',
                'Réaliser des travaux techniques lourds (chauffage, toiture) juste avant la vente — ils seront inclus dans la négociation de toute façon',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-red-400 mt-0.5 flex-shrink-0 font-bold">✕</span>
                  {item}
                </div>
              ))}
            </div>
          </section>

          {/* Budget selon taille */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Budget home staging selon la taille de l&apos;appartement
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#FAFAF8]">
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Type d&apos;appartement</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Home staging léger</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Home staging complet</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Gain estimé sur vente</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'Studio (20-30 m²)', leger: '1 500 – 3 000 €', complet: '4 000 – 8 000 €', gain: '+15 000 – 30 000 €' },
                  { type: '2 pièces (35-50 m²)', leger: '2 500 – 5 000 €', complet: '8 000 – 15 000 €', gain: '+20 000 – 50 000 €' },
                  { type: '3 pièces (55-75 m²)', leger: '4 000 – 8 000 €', complet: '12 000 – 25 000 €', gain: '+30 000 – 80 000 €' },
                  { type: '4 pièces (80-100 m²)', leger: '5 000 – 10 000 €', complet: '18 000 – 35 000 €', gain: '+40 000 – 100 000 €' },
                  { type: '5 pièces et + (110 m²+)', leger: '7 000 – 15 000 €', complet: '25 000 – 50 000 €', gain: '+60 000 – 150 000 €' },
                ].map((row, i) => (
                  <tr key={row.type} className={i % 2 === 1 ? 'bg-[#FAFAF8]' : ''}>
                    <td className="p-3 border border-gray-200 text-gray-700 font-medium">{row.type}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.leger}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.complet}</td>
                    <td className="p-3 border border-gray-200 text-[#B8960C] font-semibold">{row.gain}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 italic mb-8">Estimations basées sur le marché parisien 2025. Le gain réel dépend de l&apos;arrondissement, de l&apos;état de départ et des tendances du marché au moment de la vente.</p>

          {/* Délai vs économies */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Délai de vente : le vrai argument du home staging
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Au-delà du prix, le délai est souvent l&apos;argument le plus convaincant pour les vendeurs parisiens. Un bien qui reste plus de 3 mois sur le marché commence à susciter de la méfiance chez les acheteurs — et les offres baissent mécaniquement.
          </p>
          <div className="grid grid-cols-2 gap-5 mb-8">
            {[
              {
                label: 'Sans home staging',
                duree: '60 à 120 jours',
                detail: 'en moyenne à Paris pour un bien non préparé',
                color: 'border-red-100 bg-red-50',
              },
              {
                label: 'Avec home staging',
                duree: '20 à 45 jours',
                detail: 'pour un bien bien présenté, selon l\'arrondissement',
                color: 'border-green-100 bg-green-50',
              },
            ].map((item) => (
              <div key={item.label} className={`border rounded-lg p-5 text-center ${item.color}`}>
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">{item.label}</p>
                <p className="text-2xl font-bold text-[#1C1C1C] mb-1">{item.duree}</p>
                <p className="text-xs text-gray-500 font-light">{item.detail}</p>
              </div>
            ))}
          </div>

          {/* Exemple chiffré */}
          <div className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-[#1C1C1C] text-sm mb-3">Exemple chiffré : 3 pièces de 65 m² à Paris 11e</h3>
            <div className="space-y-2">
              {[
                { label: 'Valeur estimée avant travaux', val: '650 000 €' },
                { label: 'Budget home staging (peinture + sol + SDB légère)', val: '9 500 €' },
                { label: 'Valeur estimée après home staging', val: '680 000 – 695 000 €' },
                { label: 'Gain net minimum (après travaux)', val: '+20 500 €' },
                { label: 'Délai de vente réduit de', val: '~60 jours' },
              ].map((row) => (
                <div key={row.label} className="flex justify-between text-sm">
                  <span className="text-gray-600 font-light">{row.label}</span>
                  <span className="text-[#1C1C1C] font-semibold ml-4 flex-shrink-0">{row.val}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 italic mt-3">Simulation indicative. Le ROI réel varie selon l&apos;état de départ du bien et le marché au moment de la mise en vente.</p>
          </div>

          {/* Espace Design */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Espace Design : home staging clé en main à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Nous accompagnons les propriétaires parisiens qui souhaitent valoriser leur bien avant la mise en vente. Peinture, sols, salle de bain, cuisine légère, électricité — nous réalisons les travaux les plus rentables dans les délais les plus courts.
          </p>
          <ul className="space-y-2 mb-6">
            {[
              'Audit gratuit de votre bien avec liste des travaux prioritaires',
              'Devis poste par poste sous 48h',
              'Coordination de tous les corps de métier (peintre, parqueteur, plombier)',
              'Travaux réalisés en 2 à 4 semaines pour ne pas retarder la mise en vente',
              'Conseils déco neutres adaptés au marché parisien',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle size={14} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
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
              { href: '/blog/renovation-avant-achat-appartement-paris', title: 'Rénovation avant achat Paris' },
              { href: '/blog/investissement-locatif-renovation-paris', title: 'Investissement locatif Paris' },
              { href: '/peinture-paris', title: 'Peinture Paris' },
              { href: '/decoration-interieure-paris', title: 'Décoration intérieure Paris' },
              { href: '/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain Paris' },
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
          Vendez plus vite et plus cher à Paris
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-6 max-w-lg mx-auto">
          Audit de home staging gratuit sous 48h — nous identifions les travaux rentables pour votre vente.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#1C1C1C] text-white px-7 py-3.5 rounded font-light text-sm tracking-wide hover:bg-[#333] transition-colors duration-300"
        >
          Demander un audit gratuit <ArrowRight size={13} />
        </Link>
      </section>
    </>
  )
}
