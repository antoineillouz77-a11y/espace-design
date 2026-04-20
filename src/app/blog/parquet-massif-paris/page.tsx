import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Parquet Massif Paris : prix, essences, pose & entretien 2025 | Espace Design',
  description:
    'Parquet massif à Paris — chêne, noyer, hêtre. Prix au m², pose, vitrification, rénovation des parquets anciens. Guide complet 2025.',
  keywords: [
    'parquet massif Paris',
    'pose parquet massif Paris',
    'prix parquet massif Paris',
    'parquet chêne Paris',
    'rénovation parquet parisien',
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Parquet massif Paris', item: 'https://espacedesignparis.fr/blog/parquet-massif-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Parquet Massif Paris : prix, essences, pose & entretien 2025',
  description: 'Parquet massif à Paris — chêne, noyer, hêtre. Prix au m², pose, vitrification, rénovation des parquets anciens.',
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
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/parquet-massif-paris' },
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'un parquet massif à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le prix d\'un parquet massif posé à Paris varie de 80 à 200 €/m² selon l\'essence et la qualité. Le chêne massif standard coûte 80-120 €/m² posé. Le chêne huilé ou vieilli atteint 120-180 €/m². Les essences nobles (noyer, teck, iroko) dépassent souvent 200 €/m². La vitrification seule d\'un parquet existant coûte 15-30 €/m².',
      },
    },
    {
      '@type': 'Question',
      name: 'Parquet massif ou contrecollé : lequel choisir pour un appartement parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le parquet massif (20-22 mm) est l\'option premium : il peut être rénové 5 à 8 fois sur sa durée de vie. Idéal dans les haussmanniens avec leur hauteur sous plafond. Le parquet contrecollé (14-15 mm) est plus stable en cas de variations d\'humidité, mieux adapté sur plancher chauffant. Budget : +20-30% pour le massif. Pour un appartement parisien en achat, le massif représente un investissement valorisant.',
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on rénover un vieux parquet parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, si le parquet a au moins 8-10 mm d\'épaisseur résiduelle. La rénovation comprend : ponçage (retrait de 1-2 mm), vitrification ou huilage, rebouchage des interstices. Prix : 15-30 €/m² selon l\'état. Les parquets Versailles ou en pointe de Hongrie des haussmanniens peuvent presque toujours être rénovés — c\'est souvent moins cher que de les remplacer.',
      },
    },
  ],
}

export default function ParquetMassifParis() {
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
          <span className="text-gray-400">Parquet massif Paris</span>
        </nav>
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Sols & Parquet</p>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-white mb-5 max-w-3xl mx-auto leading-tight">
          Parquet massif Paris
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Chêne, noyer, hêtre — prix au m², modes de pose, finitions et rénovation des parquets anciens. Guide complet pour les appartements parisiens 2025.
        </p>
        <p className="text-gray-500 text-xs mt-4">Publié le 20 avril 2025</p>
      </section>

      {/* Article */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          <p className="text-gray-600 text-base leading-relaxed mb-8">
            Le parquet massif est le revêtement de sol noble par excellence dans les appartements parisiens. Des lames en point de Hongrie des haussmanniens aux poses droites contemporaines, il reste le choix de ceux qui veulent investir dans la durée. À Paris, il contribue directement à la valeur de revente d&apos;un bien. Voici tout ce qu&apos;il faut savoir avant de choisir votre essence et votre pose.
          </p>

          {/* Essences */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Tableau comparatif des essences de parquet massif
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#FAFAF8]">
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Essence</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Dureté (Brinell)</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Aspect</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Prix posé</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { essence: 'Chêne', durete: '3,7', aspect: 'Classique, fil droit ou nœuds', prix: '80 – 140 €/m²' },
                  { essence: 'Hêtre', durete: '3,8', aspect: 'Clair, homogène, contemporain', prix: '70 – 110 €/m²' },
                  { essence: 'Frêne', durete: '4,0', aspect: 'Veinage marqué, clair à doré', prix: '90 – 130 €/m²' },
                  { essence: 'Noyer', durete: '3,5', aspect: 'Brun chaud, élégant, rare', prix: '150 – 220 €/m²' },
                  { essence: 'Teck', durete: '4,5', aspect: 'Brun doré, exotique, huileux', prix: '180 – 280 €/m²' },
                  { essence: 'Iroko', durete: '3,5', aspect: 'Brun rougeâtre, fil interloqué', prix: '120 – 180 €/m²' },
                  { essence: 'Bambou massif', durete: '9,0', aspect: 'Très clair, ultra-résistant', prix: '60 – 100 €/m²' },
                ].map((row, i) => (
                  <tr key={row.essence} className={i % 2 === 1 ? 'bg-[#FAFAF8]' : ''}>
                    <td className="p-3 border border-gray-200 text-gray-700 font-medium">{row.essence}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.durete}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.aspect}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 font-medium">{row.prix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Modes de pose */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Les modes de pose du parquet massif
          </h2>
          <div className="space-y-5 mb-10">
            {[
              {
                mode: 'Pose collée',
                desc: 'Les lames sont collées directement sur la dalle béton ou sur un ancien carrelage. La méthode la plus répandue à Paris sur les supports béton des années 60-90. Irréversible.',
                avantages: 'Stable, adapté à tout support plan, idéal pour les grands appartements',
                color: 'border-green-200 bg-green-50',
              },
              {
                mode: 'Pose clouée (sur lambourdes)',
                desc: 'Méthode traditionnelle des parquets anciens : les lames sont clouées sur des lambourdes en bois. Standard dans les haussmanniens avec plancher bois existant.',
                avantages: 'Authenticité, réversibilité partielle, excellent rendu acoustique',
                color: 'border-amber-200 bg-amber-50',
              },
              {
                mode: 'Pose flottante',
                desc: 'Les lames sont clipsées entre elles sans colle ni clou. Déconseillé pour le massif pur (réservé au contrecollé) — préférer la colle ou le clouage pour un vrai massif.',
                avantages: 'Rapide, économique, réversible',
                color: 'border-gray-200 bg-gray-50',
              },
            ].map((s) => (
              <div key={s.mode} className={`rounded-lg border p-5 ${s.color}`}>
                <h3 className="font-semibold text-[#1C1C1C] text-sm mb-2">{s.mode}</h3>
                <p className="text-gray-600 text-sm font-light mb-2">{s.desc}</p>
                <p className="text-xs text-gray-500 italic">{s.avantages}</p>
              </div>
            ))}
          </div>

          {/* Finitions */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Finitions : vitrifié, huilé ou ciré ?
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#FAFAF8]">
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Finition</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Rendu visuel</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Entretien</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Durabilité</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { finition: 'Vitrifié brillant', rendu: 'Brillant, plastifié', entretien: 'Facile, nettoyage simple', durabilite: '7-12 ans avant ponçage' },
                  { finition: 'Vitrifié satiné', rendu: 'Semi-brillant naturel', entretien: 'Facile', durabilite: '7-12 ans avant ponçage' },
                  { finition: 'Huilé naturel', rendu: 'Mat, aspect bois vivant', entretien: 'Ré-huilage tous 2-3 ans', durabilite: 'Réparations ponctuelles possibles' },
                  { finition: 'Ciré', rendu: 'Mat chaleureux, authenticité', entretien: 'Recirage 1-2×/an', durabilite: 'Entretien suivi nécessaire' },
                ].map((row, i) => (
                  <tr key={row.finition} className={i % 2 === 1 ? 'bg-[#FAFAF8]' : ''}>
                    <td className="p-3 border border-gray-200 text-gray-700 font-medium">{row.finition}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.rendu}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.entretien}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.durabilite}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Rénovation vs remplacement */}
          <section className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-6 mb-10">
            <h2 className="font-display text-xl font-semibold text-[#1C1C1C] mb-3">
              Rénover ou remplacer un vieux parquet parisien ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Dans la grande majorité des haussmanniens, les parquets anciens peuvent être rénovés : ponçage, rebouchage des interstices et nouvelle finition. C&apos;est moins cher que le remplacement et souvent plus valorisant pour la revente.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-[#1C1C1C] text-xs uppercase tracking-wide mb-3">Rénover (15-30 €/m²)</h3>
                <ul className="space-y-1.5">
                  {[
                    'Épaisseur résiduelle > 8 mm',
                    'Parquet en point de Hongrie ou Versailles',
                    'Lames saines (pas de pourriture)',
                    'Budget limité',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                      <CheckCircle size={12} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-[#1C1C1C] text-xs uppercase tracking-wide mb-3">Remplacer (80-180 €/m²)</h3>
                <ul className="space-y-1.5">
                  {[
                    'Épaisseur < 6 mm (trop ponçé)',
                    'Parquet abîmé, gauchissement prononcé',
                    'Changement de style souhaité',
                    'Rénovation totale de l\'appartement',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                      <CheckCircle size={12} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Entretien */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Entretien du parquet massif à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Le parquet massif demande un entretien régulier mais simple. La clé : éviter l&apos;eau en excès (ennemi du bois) et protéger le sol des griffures. Quelques règles fondamentales :
          </p>
          <div className="space-y-3 mb-8">
            {[
              { regle: 'Nettoyage quotidien', detail: 'Balai microfibre ou aspirateur sans brosses dures. Évitez la serpillière mouillée — passez une vadrouille légèrement humide au maximum.' },
              { regle: 'Nettoyage en profondeur', detail: 'Tous les 2-3 mois avec un nettoyant spécial parquet pH neutre. Ne jamais utiliser de produits ménagers classiques (trop alcalins).' },
              { regle: 'Protection contre les griffures', detail: 'Feutres sous tous les pieds de meubles. Tapis dans les zones de passage intensive (entrée, devant le canapé). Évitez les talons aiguilles.' },
              { regle: 'Hygrométrie à maintenir', detail: 'Le bois travaille selon l\'humidité ambiante. Idéalement 45-60% d\'hygrométrie — pas trop sec (chauffage en hiver) ni trop humide.' },
            ].map((item) => (
              <div key={item.regle} className="border-l-2 border-[#D4AF37] pl-4 py-1">
                <h3 className="font-semibold text-[#1C1C1C] text-sm mb-1">{item.regle}</h3>
                <p className="text-gray-500 text-sm font-light">{item.detail}</p>
              </div>
            ))}
          </div>

          {/* Espace Design */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Espace Design : pose et rénovation de parquet à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Nos parqueteurs interviennent dans tout Paris et l&apos;Île-de-France. Pose de parquet massif neuf, rénovation et vitrification de parquets anciens, ponçage de parquets en point de Hongrie — nous maîtrisons toutes les techniques.
          </p>
          <ul className="space-y-2 mb-6">
            {[
              'Devis gratuit avec visite technique sous 48h',
              'Tous types d\'essences disponibles, sourcing direct fournisseurs',
              'Rénovation de parquets anciens (Versailles, point de Hongrie)',
              'Finitions vitrifiées, huilées ou cirées selon votre style',
              'Garantie pose et finition 2 ans',
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
              { href: '/parquet-paris', title: 'Pose parquet Paris' },
              { href: '/blog/renovation-parquet-paris', title: 'Guide parquet Paris' },
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénover un haussmannien' },
              { href: '/blog/prix-renovation-appartement-paris', title: 'Prix rénovation Paris' },
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
          Votre parquet massif à Paris ?
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-6 max-w-lg mx-auto">
          Devis gratuit sous 48h — pose neuve ou rénovation de parquet parisien ancien.
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
