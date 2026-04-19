import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Isolation Thermique Appartement Paris : Prix, Aides & Guide 2025',
  description:
    'Isoler son appartement parisien : combles, murs, fenêtres, planchers. Prix au m², aides MaPrimeRénov\', contraintes copropriété. Guide complet Espace Design.',
  keywords: [
    'isolation thermique appartement Paris',
    'isolation appartement Paris prix',
    'isolation murs Paris',
    'isolation combles Paris',
    'MaPrimeRénov Paris appartement',
    'rénovation énergétique appartement Paris',
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Isolation thermique appartement Paris', item: 'https://espacedesignparis.fr/blog/isolation-thermique-appartement-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Isolation Thermique Appartement Paris : Prix, Aides & Guide 2025',
  description: 'Guide complet sur l\'isolation thermique dans les appartements parisiens : techniques, prix, aides MaPrimeRénov\' et contraintes spécifiques.',
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
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/isolation-thermique-appartement-paris' },
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix de l\'isolation thermique d\'un appartement à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Les prix varient selon la solution choisie : isolation des combles 15-30 €/m², isolation des murs par l\'intérieur (ITI) 50-100 €/m², isolation du plancher bas 30-60 €/m², remplacement fenêtres double vitrage 500-1 500 €/unité. Ces prix incluent la main-d\'œuvre.' },
    },
    {
      '@type': 'Question',
      name: 'Quelles aides sont disponibles pour isoler son appartement à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Plusieurs dispositifs existent : MaPrimeRénov\' (jusqu\'à 75 €/m² pour les murs selon vos revenus), CEE (primes des fournisseurs d\'énergie, cumulables), TVA réduite à 5,5 % sur les travaux et Éco-PTZ (prêt sans intérêt jusqu\'à 50 000 €). Ces aides nécessitent de faire appel à un artisan RGE (Reconnu Garant de l\'Environnement).' },
    },
    {
      '@type': 'Question',
      name: 'Peut-on isoler par l\'extérieur un appartement parisien ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Non, l\'isolation par l\'extérieur (ITE) est quasi impossible à Paris. Les règles d\'urbanisme et les Architectes des Bâtiments de France protègent les façades des immeubles anciens. La seule option pour isoler les murs est l\'isolation par l\'intérieur (ITI), qui consiste à poser une contre-cloison isolante à l\'intérieur de l\'appartement, au prix de 8 à 12 cm de surface habitable.' },
    },
  ],
}

export default function IsolationThermiqueAppartementParis() {
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
          <span className="text-gray-400">Isolation thermique appartement Paris</span>
        </nav>
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Isolation & Énergie</p>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-white mb-5 max-w-3xl mx-auto leading-tight">
          Isolation thermique appartement Paris :<br className="hidden sm:block" /> prix, aides & guide 2025
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Combles, murs, fenêtres, planchers — toutes les solutions pour isoler votre appartement parisien, réduire vos factures et valoriser votre bien.
        </p>
        <p className="text-gray-500 text-xs mt-4">Publié le 19 avril 2025</p>
      </section>

      {/* Article */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          <p className="text-gray-600 text-base leading-relaxed mb-8">
            À Paris, les appartements anciens sont souvent les moins bien isolés thermiquement : murs en pierre non traités, simple vitrage, combles perdus. En 2025, avec l&apos;obligation de rénover les passoires thermiques (étiquettes F et G) et les aides publiques disponibles, l&apos;isolation thermique est devenue un investissement incontournable. Voici notre guide complet.
          </p>

          {/* Solutions */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Les solutions d&apos;isolation thermique pour un appartement parisien
          </h2>
          <div className="space-y-4 mb-8">
            {[
              {
                titre: 'Isolation des combles (dernier étage uniquement)',
                desc: 'Si vous habitez au dernier étage, l\'isolation des combles perdus est la solution la plus efficace et la plus rentable. Soufflage de laine de verre ou de ouate de cellulose. Prix : 15 à 30 €/m². Économies d\'énergie pouvant atteindre 30 %.',
              },
              {
                titre: 'Isolation des murs par l\'intérieur (ITI)',
                desc: 'Impossible d\'isoler par l\'extérieur à Paris (règles d\'urbanisme, ABF). L\'ITI consiste à poser une contre-cloison isolante (doublage en placo + laine minérale) sur les murs extérieurs. On perd 8 à 12 cm de surface habitable. Prix : 50 à 100 €/m².',
              },
              {
                titre: 'Remplacement des fenêtres (double vitrage)',
                desc: 'Le changement des fenêtres en simple vitrage vers du double vitrage (4/16/4 ou 4/12/4) réduit significativement les déperditions. À Paris, dans les secteurs protégés, les nouvelles fenêtres doivent respecter l\'aspect d\'origine. Prix : 500 à 1 500 € par fenêtre posée.',
              },
              {
                titre: 'Isolation du plancher bas',
                desc: 'Si votre appartement est au-dessus d\'un parking, d\'une cave ou d\'un rez-de-chaussée non chauffé, l\'isolation du plancher (soufflage ou panneau) est prioritaire. Prix : 30 à 60 €/m².',
              },
              {
                titre: 'Ventilation VMC (couplée à l\'isolation)',
                desc: 'Toute isolation renforcée doit s\'accompagner d\'une ventilation adaptée. L\'installation d\'une VMC double flux permet de récupérer la chaleur de l\'air extrait. Prix : 3 000 à 6 000 €. Indispensable pour éviter les problèmes d\'humidité et de condensation.',
              },
            ].map((item) => (
              <div key={item.titre} className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-5">
                <h3 className="font-semibold text-[#1C1C1C] text-sm mb-2">{item.titre}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Prix récapitulatif */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Récapitulatif des prix d&apos;isolation à Paris
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#FAFAF8]">
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Poste d&apos;isolation</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Prix TTC (pose incluse)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-gray-200 text-gray-600">Combles perdus (soufflage)</td>
                  <td className="p-3 border border-gray-200 text-gray-600">15 – 30 €/m²</td>
                </tr>
                <tr className="bg-[#FAFAF8]">
                  <td className="p-3 border border-gray-200 text-gray-600">Isolation murs intérieure (ITI)</td>
                  <td className="p-3 border border-gray-200 text-gray-600">50 – 100 €/m²</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 text-gray-600">Isolation plancher bas</td>
                  <td className="p-3 border border-gray-200 text-gray-600">30 – 60 €/m²</td>
                </tr>
                <tr className="bg-[#FAFAF8]">
                  <td className="p-3 border border-gray-200 text-gray-600">Fenêtres double vitrage</td>
                  <td className="p-3 border border-gray-200 text-gray-600">500 – 1 500 €/unité</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 text-gray-600">VMC double flux</td>
                  <td className="p-3 border border-gray-200 text-gray-600">3 000 – 6 000 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Aides */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Aides financières disponibles en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Plusieurs dispositifs permettent de financer une partie des travaux d&apos;isolation :
          </p>
          <div className="space-y-3 mb-8">
            {[
              {
                titre: 'MaPrimeRénov\'',
                desc: 'L\'aide principale de l\'État pour la rénovation énergétique. Le montant dépend de vos revenus et du gain énergétique attendu. Pour l\'isolation des murs : jusqu\'à 75 €/m² pour les ménages aux revenus modestes.',
              },
              {
                titre: 'CEE (Certificats d\'Économies d\'Énergie)',
                desc: 'Primes versées par les fournisseurs d\'énergie. Cumulables avec MaPrimeRénov\'. Montants variables selon les offres du moment (estimez en ligne sur le site de votre fournisseur).',
              },
              {
                titre: 'TVA à 5,5 %',
                desc: 'Les travaux d\'isolation bénéficient d\'une TVA réduite à 5,5 % (au lieu de 20 %) pour les logements de plus de 2 ans. Applicable directement sur votre facture.',
              },
              {
                titre: 'Éco-PTZ (Prêt à Taux Zéro)',
                desc: 'Prêt sans intérêt jusqu\'à 50 000 € pour financer un bouquet de travaux de rénovation énergétique. Accessible sans condition de revenus, remboursable sur 20 ans.',
              },
            ].map((item) => (
              <div key={item.titre} className="flex gap-3">
                <span className="text-[#D4AF37] mt-1 flex-shrink-0 text-lg">›</span>
                <div>
                  <p className="font-semibold text-[#1C1C1C] text-sm">{item.titre}</p>
                  <p className="text-gray-500 text-sm leading-relaxed font-light mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-xs italic mb-8">
            Ces aides évoluent régulièrement. Vérifiez les montants actuels sur <span className="font-medium">maprimerenov.gouv.fr</span> et faites appel à un artisan RGE (Reconnu Garant de l&apos;Environnement) pour en bénéficier.
          </p>

          {/* Contraintes Paris */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Contraintes spécifiques à Paris
          </h2>
          <ul className="space-y-3 mb-8">
            {[
              { t: 'Façades intouchables', d: 'L\'isolation par l\'extérieur (ITE) est quasi impossible à Paris : le règlement d\'urbanisme et les ABF protègent les façades des immeubles anciens. L\'ITI (isolation par l\'intérieur) est donc la seule option pour les murs.' },
              { t: 'Règlement de copropriété', d: 'L\'isolation des combles peut nécessiter l\'accord de la copropriété si elle touche aux parties communes (plancher de combles). Vérifiez votre règlement avant de commencer.' },
              { t: 'Risque de condensation', d: 'Dans les appartements anciens avec des murs épais en pierre, l\'ajout d\'une ITI peut créer des ponts thermiques et de la condensation si elle n\'est pas bien conçue. Un bilan thermique préalable est recommandé.' },
            ].map((item) => (
              <li key={item.t} className="flex gap-3 list-none">
                <span className="text-[#D4AF37] mt-0.5 flex-shrink-0">›</span>
                <div>
                  <span className="font-semibold text-[#1C1C1C] text-sm">{item.t} — </span>
                  <span className="text-gray-500 text-sm font-light">{item.d}</span>
                </div>
              </li>
            ))}
          </ul>

          {/* Espace Design */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Espace Design : isolation thermique à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Espace Design réalise des travaux d&apos;isolation thermique dans les appartements parisiens, en coordination avec les autres corps de métier lors des rénovations complètes.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Nous vous accompagnons également dans le montage des dossiers d&apos;aides (MaPrimeRénov&apos;, CEE) et pouvons faire appel à nos partenaires RGE pour les travaux éligibles.
          </p>
          <ul className="space-y-2 mb-6">
            {[
              'Bilan thermique préalable gratuit',
              'Conseil sur les aides disponibles selon votre situation',
              'Coordination avec plomberie et électricité lors des chantiers',
              'Devis gratuit sous 48h',
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
              { href: '/blog/isolation-acoustique-appartement-paris', title: 'Isolation acoustique appartement Paris' },
              { href: '/blog/prix-renovation-appartement-paris', title: 'Prix d\'une rénovation à Paris en 2025' },
              { href: '/blog/renovation-appartement-ancien-paris', title: 'Rénover un appartement ancien à Paris' },
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
          Un projet d&apos;isolation à Paris ?
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
