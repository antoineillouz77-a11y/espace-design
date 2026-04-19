import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Électricité Appartement Paris : Mise aux Normes, Prix & Guide 2025',
  description:
    'Mise aux normes électriques à Paris : prix, NF C 15-100, remplacement tableau, circuits obligatoires. Guide complet par Espace Design.',
  keywords: [
    'électricité appartement Paris',
    'mise aux normes électriques Paris',
    'tableau électrique Paris prix',
    'electricien Paris rénovation',
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Électricité Appartement Paris', item: 'https://espacedesignparis.fr/blog/electricite-appartement-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Électricité Appartement Paris : Mise aux Normes, Prix & Guide 2025',
  description: 'Tout savoir sur la mise aux normes électriques d\'un appartement parisien : NF C 15-100, prix par type de bien, signes d\'alerte et étapes.',
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
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/electricite-appartement-paris' },
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une mise aux normes électriques à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La mise aux normes électriques d\'un appartement parisien coûte entre 3 000 et 5 000 € pour un studio, 4 000 à 8 000 € pour un 2-3 pièces, et 8 000 à 15 000 € pour un grand appartement. Ces prix comprennent le nouveau tableau, les circuits différentiels et la mise aux normes NF C 15-100.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment savoir si mon appartement parisien a besoin d\'une mise aux normes électriques ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Les signes qui indiquent une mise aux normes nécessaire : tableau à fusibles au lieu de disjoncteurs, absence de prise de terre, prises en 2 trous dans salle de bain, disjoncteurs qui sautent régulièrement, fils sans gaine. Tout appartement construit avant 1970 est à vérifier.',
      },
    },
    {
      '@type': 'Question',
      name: 'La mise aux normes électriques est-elle obligatoire à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La mise aux normes n\'est pas obligatoire tant que vous ne vendez pas. Lors d\'une vente, un diagnostic électrique est obligatoire pour les installations de plus de 15 ans. Si l\'installation est dangereuse, les assurances peuvent refuser de couvrir les sinistres. Lors d\'une rénovation, c\'est le moment idéal pour tout refaire.',
      },
    },
  ],
}

export default function ElectriciteAppartementParis() {
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
          <span className="text-gray-400">Électricité Appartement Paris</span>
        </nav>
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Mise aux Normes</p>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-white mb-5 max-w-3xl mx-auto leading-tight">
          Électricité Appartement Paris :<br className="hidden sm:block" /> mise aux normes, prix & guide 2025
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Tout savoir sur la mise aux normes NF C 15-100, le remplacement du tableau électrique et les circuits obligatoires dans un appartement parisien. Guide complet par Espace Design.
        </p>
        <p className="text-gray-500 text-xs mt-4">Publié le 20 avril 2025</p>
      </section>

      {/* Article */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          <p className="text-gray-600 text-base leading-relaxed mb-8">
            À Paris, la majorité des appartements anciens date d&apos;avant les années 1970. Or, la norme NF C 15-100 — référence de toute installation électrique résidentielle française — a profondément évolué depuis. Une installation vieillissante représente un risque d&apos;incendie, d&apos;électrocution, et peut invalider votre assurance habitation. Voici comment identifier les problèmes et budgéter votre mise aux normes.
          </p>

          {/* NF C 15-100 */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            La norme NF C 15-100 : ce qu&apos;elle impose
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            La NF C 15-100 définit les exigences minimales d&apos;une installation électrique sécurisée. Elle impose notamment :
          </p>
          <div className="space-y-3 mb-8">
            {[
              { n: '1', t: 'Un tableau divisionnaire moderne', d: 'Disjoncteurs différentiels 30 mA, disjoncteur général, protection par circuit séparé. Exit les tableaux à fusibles.' },
              { n: '2', t: 'Des circuits dédiés', d: 'Lave-linge, lave-vaisselle, four, plaque de cuisson, chaudière — chaque appareil énergivore doit avoir son propre circuit.' },
              { n: '3', t: 'La prise de terre', d: 'Toutes les prises doivent être raccordées à la terre. Dans les immeubles parisiens anciens, cette mise à la terre est souvent absente ou incomplète.' },
              { n: '4', t: 'Des prises adaptées en salle de bain', d: 'Volumes réglementés autour de la baignoire/douche, prises rasoir uniquement hors volume de sécurité.' },
              { n: '5', t: 'Un minimum de prises par pièce', d: 'Salle de séjour : 5 prises minimum. Cuisine : 6 prises + circuits dédiés. Chambre : 3 prises minimum.' },
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

          {/* Prix par type d'appartement */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Prix de la mise aux normes selon le type d&apos;appartement parisien
          </h2>

          <div className="space-y-5 mb-8">
            {[
              {
                niveau: 'Studio (jusqu\'à 25 m²)',
                desc: 'Tableau neuf + 3 à 5 circuits + prise de terre. Idéal pour un investissement locatif ou une première acquisition.',
                prix: '3 000 – 5 000 €',
                delai: '3 – 5 jours',
                color: 'border-green-200 bg-green-50',
              },
              {
                niveau: '2 – 3 pièces (30 à 65 m²)',
                desc: 'Tableau neuf + 6 à 10 circuits + circuits dédiés cuisinière, lave-linge, sèche-linge. Refonte complète du réseau si installation datant d\'avant 1980.',
                prix: '4 000 – 8 000 €',
                delai: '5 – 10 jours',
                color: 'border-amber-200 bg-amber-50',
              },
              {
                niveau: 'Grand appartement (80 m² et plus)',
                desc: 'Refonte totale de l\'installation : nouveau tableau, circuits dédiés par pièce, mise à la terre complète, goulotte ou passage en encastré.',
                prix: '8 000 – 15 000 €',
                delai: '2 – 4 semaines',
                color: 'border-blue-200 bg-blue-50',
              },
            ].map((s) => (
              <div key={s.niveau} className={`rounded-lg border p-5 ${s.color}`}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-[#1C1C1C] text-sm">{s.niveau}</h3>
                  <span className="text-xs text-gray-500 font-light">{s.delai}</span>
                </div>
                <p className="text-gray-500 text-sm font-light mb-3">{s.desc}</p>
                <div className="text-xs">
                  <span className="text-gray-400 block">Budget estimé</span>
                  <span className="font-semibold text-[#1C1C1C]">{s.prix}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Signes d'alerte */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Les signes d&apos;alerte dans un appartement parisien
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#FAFAF8]">
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Signe d&apos;alerte</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Risque</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { signe: 'Tableau à fusibles en porcelaine', risque: 'Non conforme NF C 15-100 — à remplacer impérativement' },
                  { signe: 'Prises sans troisième broche (terre)', risque: 'Électrocution, appareils non protégés' },
                  { signe: 'Fils en tissu (années 40-60)', risque: 'Isolation dégradée, risque d\'incendie' },
                  { signe: 'Disjoncteurs qui sautent régulièrement', risque: 'Surcharge, installation sous-dimensionnée' },
                  { signe: 'Odeur de brûlé au niveau des prises', risque: 'Court-circuit imminent — couper l\'alimentation' },
                  { signe: 'Pas de différentiel 30 mA au tableau', risque: 'Non conforme, refus d\'assurance possible' },
                ].map((row, i) => (
                  <tr key={row.signe} className={i % 2 === 1 ? 'bg-[#FAFAF8]' : ''}>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.signe}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.risque}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Étapes */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Les étapes d&apos;une mise aux normes électriques à Paris
          </h2>
          <div className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-6 mb-8">
            <div className="space-y-4">
              {[
                { n: '1', t: 'Diagnostic de l\'existant', d: 'Un électricien qualifié inspecte le tableau, les circuits, les prises et la mise à la terre. Il remet un rapport d\'état.' },
                { n: '2', t: 'Établissement du plan de câblage', d: 'Définition du nombre de circuits, emplacement du tableau, tracé des gaines. À valider avant toute intervention.' },
                { n: '3', t: 'Mise hors tension et travaux', d: 'Remplacement du tableau, tirage des câbles, pose des prises et interrupteurs. En appartement parisien, prévoir des goulettes en cas de parquet ou moulures à préserver.' },
                { n: '4', t: 'Tests et mise en service', d: 'Mesure des résistances, test des différentiels, vérification de la continuité de la terre. Remise d\'une attestation de conformité.' },
              ].map((step) => (
                <div key={step.n} className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#D4AF37]/20 text-[#B8960C] text-xs font-semibold flex items-center justify-center mt-0.5">{step.n}</span>
                  <div>
                    <p className="font-semibold text-[#1C1C1C] text-sm mb-1">{step.t}</p>
                    <p className="text-gray-500 text-sm leading-relaxed font-light">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Espace Design */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Espace Design : mise aux normes électriques intégrée à votre rénovation
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Espace Design coordonne la mise aux normes électriques dans le cadre de vos travaux de rénovation à Paris. Notre électricien intervient en amont des autres corps de métier pour que tout soit prêt avant la pose du carrelage, la peinture ou les menuiseries.
          </p>
          <ul className="space-y-2 mb-6">
            {[
              'Électricien qualifié RGE, habilité C 15-100',
              'Attestation de conformité Consuel remise après travaux',
              'Coordination avec plombier, carreleur et peintre',
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
              { href: '/blog/renovation-appartement-ancien-paris', title: 'Rénover un appartement ancien à Paris' },
              { href: '/blog/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain à Paris' },
              { href: '/blog/renovation-2-pieces-paris', title: 'Rénovation 2 pièces Paris : prix & guide' },
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
          Votre mise aux normes électriques à Paris ?
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
