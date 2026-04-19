import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Avant Achat Appartement Paris : Estimer le Budget Travaux 2025',
  description:
    'Comment estimer le budget travaux avant d\'acheter un appartement à Paris. Check-list des points à vérifier, prix par poste, aide à la négociation.',
  keywords: [
    'rénovation avant achat appartement Paris',
    'budget travaux avant achat Paris',
    'estimer travaux appartement Paris',
    'achat appartement à rénover Paris',
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Avant Achat Appartement Paris', item: 'https://espacedesignparis.fr/blog/renovation-avant-achat-appartement-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Avant Achat Appartement Paris : Estimer le Budget Travaux 2025',
  description: 'Comment estimer le budget de rénovation avant d\'acheter un appartement à Paris : check-list, points critiques, prix par poste et conseils de négociation.',
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
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-avant-achat-appartement-paris' },
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Comment estimer le budget de rénovation avant d\'acheter un appartement à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Faites appel à un artisan rénovateur pour une visite de pré-achat. Il évalue l\'état de l\'électricité, la plomberie, la structure et les finitions, et vous remet une estimation par poste. Comptez 800 à 1 500 €/m² pour une rénovation complète à Paris, soit 48 000 à 90 000 € pour un 3 pièces de 60 m².',
      },
    },
    {
      '@type': 'Question',
      name: 'Quels sont les postes à vérifier avant d\'acheter un appartement parisien à rénover ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Les 5 points critiques : électricité (tableau, circuits), plomberie (canalisations en plomb avant 1948), présence d\'amiante (immeuble avant 1997), état de la toiture ou des combles (dernier étage), et conformité du DPE (étiquette F ou G = coûts d\'isolation supplémentaires).',
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on négocier le prix d\'un appartement à rénover à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui. Un devis détaillé d\'un artisan rénovateur est un outil de négociation puissant. Si les travaux sont estimés à 50 000 €, vous pouvez négocier le prix d\'achat en conséquence. À Paris, une décote de 10 à 20 % est fréquente pour les biens nécessitant une rénovation importante.',
      },
    },
  ],
}

export default function RenovationAvantAchatAppartementParis() {
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
          <span className="text-gray-400">Rénovation avant achat Paris</span>
        </nav>
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Achat Immobilier</p>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-white mb-5 max-w-3xl mx-auto leading-tight">
          Rénovation avant achat à Paris :<br className="hidden sm:block" /> estimer le budget travaux 2025
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Check-list des points à vérifier, 5 postes critiques, budget par type de bien et conseils pour négocier le prix d&apos;achat grâce à un devis travaux. Guide par Espace Design.
        </p>
        <p className="text-gray-500 text-xs mt-4">Publié le 20 avril 2025</p>
      </section>

      {/* Article */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          <p className="text-gray-600 text-base leading-relaxed mb-8">
            Acheter un appartement à rénover à Paris peut être une excellente opportunité — à condition d&apos;avoir évalué précisément le budget travaux avant de signer. Un bien en mauvais état électrique ou avec des canalisations en plomb peut vite transformer une bonne affaire en gouffre financier. Voici comment procéder méthodiquement.
          </p>

          {/* Check-list visite */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Check-list visite pré-achat : ce qu&apos;il faut inspecter
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#FAFAF8]">
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Point à vérifier</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Signe d&apos;alerte</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { point: 'Tableau électrique', alerte: 'Fusibles en porcelaine, absence de différentiel' },
                  { point: 'Prises et interrupteurs', alerte: 'Prises 2 trous, brûlures, odeur de brûlé' },
                  { point: 'Canalisations', alerte: 'Tuyaux en plomb (appartements pré-1948), fuites visibles' },
                  { point: 'Murs et plafonds', alerte: 'Fissures, traces d\'humidité, cloques sous peinture' },
                  { point: 'Parquet et sols', alerte: 'Lames manquantes, parquet gondolé, craquements excessifs' },
                  { point: 'Fenêtres', alerte: 'Simple vitrage, joints défaillants, menuiseries pourries' },
                  { point: 'Salle de bain', alerte: 'Joints noirs, carrelage décollé, WC peu fonctionnels' },
                  { point: 'DPE (Diagnostic de Performance Énergétique)', alerte: 'Étiquette F ou G = travaux d\'isolation obligatoires à moyen terme' },
                ].map((row, i) => (
                  <tr key={row.point} className={i % 2 === 1 ? 'bg-[#FAFAF8]' : ''}>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.point}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.alerte}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 5 points critiques */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Les 5 points critiques avant d&apos;acheter un appartement parisien à rénover
          </h2>
          <div className="space-y-3 mb-8">
            {[
              { n: '1', t: 'Électricité', d: 'Le coût d\'une mise aux normes complète varie de 3 000 à 15 000 € selon la surface. À Paris, la majorité des appartements construits avant 1970 nécessitent une intervention. Un tableau à fusibles est le signal le plus évident.' },
              { n: '2', t: 'Plomberie et canalisations en plomb', d: 'Les immeubles haussmanniens (avant 1900) et les immeubles des années 30-40 peuvent encore avoir des canalisations en plomb. Le remplacement est obligatoire pour l\'eau potable et peut coûter de 3 000 à 8 000 €.' },
              { n: '3', t: 'Présence d\'amiante', d: 'Tout immeuble construit avant le 1er juillet 1997 peut contenir de l\'amiante (dalles, joints, flocage). Le diagnostic amiante est obligatoire. En cas de présence, le désamiantage ajoute 3 000 à 20 000 € selon l\'étendue.' },
              { n: '4', t: 'Toiture et étanchéité (dernier étage)', d: 'Si vous achetez sous les toits ou au dernier étage, l\'état de la toiture est déterminant. Une réfection de toiture représente souvent 10 000 à 30 000 €, partagée entre copropriétaires, mais les infiltrations au plafond vous incombent seul.' },
              { n: '5', t: 'DPE — étiquette énergétique', d: 'Les logements classés F ou G (passoires thermiques) ne pourront plus être loués à partir de 2025-2028 selon la loi Climat. Si vous achetez pour louer, intégrez le coût de l\'isolation thermique dans votre budget dès l\'achat.' },
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

          {/* Budget par type de bien */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Budget de rénovation par type de bien parisien
          </h2>

          <div className="space-y-5 mb-8">
            {[
              {
                niveau: 'Studio (20 – 30 m²)',
                desc: 'Rénovation complète : électricité, salle de bain, cuisine, peinture, sols.',
                prix_m2: '800 – 1 500 €/m²',
                budget_min: '16 000 €',
                budget_max: '45 000 €',
                delai: '6 – 10 semaines',
                color: 'border-green-200 bg-green-50',
              },
              {
                niveau: '2 – 3 pièces (40 – 65 m²)',
                desc: 'Rénovation complète ou partielle : selon état de l\'électricité et de la plomberie.',
                prix_m2: '800 – 1 500 €/m²',
                budget_min: '32 000 €',
                budget_max: '97 500 €',
                delai: '8 – 14 semaines',
                color: 'border-amber-200 bg-amber-50',
              },
              {
                niveau: '4 pièces et plus (80 m² et plus)',
                desc: 'Projet complexe : coordination de plusieurs corps de métier, gestion de chantier dédiée.',
                prix_m2: '1 000 – 1 500 €/m²',
                budget_min: '80 000 €',
                budget_max: '150 000 €+',
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
                    <span className="text-gray-400 block">Budget min</span>
                    <span className="font-semibold text-[#1C1C1C]">{s.budget_min}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block">Budget max</span>
                    <span className="font-semibold text-[#1C1C1C]">{s.budget_max}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Négociation */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Comment négocier grâce à un devis travaux ?
          </h2>
          <div className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-6 mb-8">
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              <strong className="text-[#1C1C1C]">Exemple concret :</strong> Un appartement de 55 m² est affiché à 650 000 € dans le 15e arrondissement. L&apos;électricité est à refaire, la salle de bain est vétuste et le parquet gondolé.
            </p>
            <div className="space-y-2">
              {[
                { poste: 'Mise aux normes électriques', cout: '5 500 €' },
                { poste: 'Rénovation salle de bain (5 m²)', cout: '9 000 €' },
                { poste: 'Ponçage + vitrification parquet', cout: '3 000 €' },
                { poste: 'Peinture complète', cout: '6 000 €' },
                { poste: 'Divers / imprévus (10 %)', cout: '2 350 €' },
              ].map((row) => (
                <div key={row.poste} className="flex justify-between text-sm">
                  <span className="text-gray-600 font-light">{row.poste}</span>
                  <span className="text-[#1C1C1C] font-semibold ml-4 flex-shrink-0">{row.cout}</span>
                </div>
              ))}
              <div className="border-t border-gray-200 pt-3 flex justify-between text-sm font-semibold">
                <span className="text-[#1C1C1C]">Total devis travaux</span>
                <span className="text-[#B8960C]">25 850 €</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 italic mt-4">
              Avec ce devis en main, une négociation de 20 000 à 25 000 € sur le prix d&apos;achat est parfaitement justifiée. L&apos;acheteur récupère une partie du coût des travaux dès la signature.
            </p>
          </div>

          {/* Espace Design */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Espace Design : visite de pré-achat et devis travaux à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Espace Design propose des visites de pré-achat pour accompagner les futurs acquéreurs dans leur estimation travaux. Notre expert se déplace dans l&apos;appartement avant la signature du compromis, évalue chaque poste et vous remet un devis détaillé utilisable en négociation.
          </p>
          <ul className="space-y-2 mb-6">
            {[
              'Visite de pré-achat avec rapport écrit sous 48h',
              'Estimation par poste : électricité, plomberie, finitions',
              'Devis utilisable pour négocier le prix d\'achat',
              'Rénovation clé en main une fois l\'achat signé',
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
              { href: '/blog/electricite-appartement-paris', title: 'Électricité appartement Paris : mise aux normes' },
              { href: '/blog/investissement-locatif-renovation-paris', title: 'Rénovation investissement locatif Paris' },
              { href: '/blog/renovation-appartement-ancien-paris', title: 'Rénover un appartement ancien à Paris' },
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
          Vous visitez un appartement à rénover à Paris ?
        </h2>
        <p className="text-gray-400 text-sm font-light mb-6 max-w-lg mx-auto">
          Devis gratuit sous 48h — visite de pré-achat disponible dans tout Paris et l&apos;Île-de-France.
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
