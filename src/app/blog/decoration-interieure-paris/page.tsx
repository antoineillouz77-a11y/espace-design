import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Décoration Intérieure Paris : Décorateur, Prix & Tendances 2025',
  description:
    'Décorateur intérieur à Paris : styles, prix, comment trouver le bon professionnel. Haussmannien, contemporain, minimaliste — guide complet par Espace Design.',
  keywords: [
    'décoration intérieure Paris',
    'décorateur intérieur Paris',
    'architecte intérieur Paris prix',
    'décoration appartement Paris',
    'interior design Paris',
    'décorateur appartement Paris',
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Décoration intérieure Paris', item: 'https://espacedesignparis.fr/blog/decoration-interieure-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Décoration Intérieure Paris : Décorateur, Prix & Tendances 2025',
  description: 'Tout savoir sur la décoration intérieure à Paris : styles tendance, prix d\'un décorateur, conseils pour choisir le bon professionnel.',
  datePublished: '2025-04-15',
  dateModified: '2025-04-19',
  inLanguage: 'fr-FR',
  author: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
    logo: { '@type': 'ImageObject', url: 'https://espacedesignparis.fr/images/logo.png' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/decoration-interieure-paris' },
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'un décorateur d\'intérieur à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Un décorateur d\'intérieur à Paris facture 80 à 150 €/h en honoraires. Pour un forfait décoration complète d\'un 2 pièces, comptez 2 000 à 5 000 €. Pour un grand appartement (3 pièces et plus), le budget monte à 5 000-15 000 €. Certains décorateurs incluent leurs honoraires dans le budget de rénovation global.' },
    },
    {
      '@type': 'Question',
      name: 'Quelle est la différence entre décorateur et architecte d\'intérieur ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Le décorateur d\'intérieur travaille sur les couleurs, matériaux et mobilier — il ne modifie pas la structure du bâtiment. L\'architecte d\'intérieur peut intervenir sur les cloisons, ouvertures et structure, et déposer les permis nécessaires. Pour une rénovation légère, un décorateur suffit. Pour des travaux lourds, un architecte d\'intérieur (ou une entreprise comme Espace Design qui intègre les deux) est recommandé.' },
    },
    {
      '@type': 'Question',
      name: 'Quels sont les styles décoratifs tendance à Paris en 2025 ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Les styles les plus demandés à Paris en 2025 sont : l\'haussmannien revisité (moulures + mobilier contemporain), le minimalisme parisien (matières nobles, palette neutre), le Japandi (fusion japonais et scandinave), l\'éclectique & vintage (Marais, Montmartre) et le luxe discret ou quiet luxury avec des matériaux premium sans ostentation.' },
    },
  ],
}

export default function DecorationInterieureParis() {
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
          <span className="text-gray-400">Décoration intérieure Paris</span>
        </nav>
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Décoration & Design</p>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-white mb-5 max-w-3xl mx-auto leading-tight">
          Décoration intérieure Paris :<br className="hidden sm:block" /> décorateur, prix & tendances 2025
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Styles tendance, tarifs d&apos;un décorateur parisien, conseils pour transformer votre appartement. Guide complet par Espace Design.
        </p>
        <p className="text-gray-500 text-xs mt-4">Publié le 15 avril 2025 · Mis à jour le 19 avril 2025</p>
      </section>

      {/* Article */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          <p className="text-gray-600 text-base leading-relaxed mb-8">
            Paris est l&apos;une des capitales mondiales du design d&apos;intérieur. Les appartements parisiens — qu&apos;il s&apos;agisse d&apos;un haussmannien du 7e ou d&apos;un loft contemporain du 10e — offrent un cadre exceptionnel à mettre en valeur. Mais une belle décoration intérieure ne s&apos;improvise pas. Voici notre guide pour comprendre les styles, les prix et comment choisir votre décorateur.
          </p>

          {/* Décorateur vs architecte */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Décorateur d&apos;intérieur vs architecte d&apos;intérieur : quelle différence ?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              {
                titre: 'Décorateur d\'intérieur',
                points: [
                  'Se concentre sur les couleurs, matériaux et mobilier',
                  'N\'intervient pas sur la structure du bâtiment',
                  'Idéal pour rafraîchir un appartement existant',
                  'Honoraires : 80 à 150 €/h ou forfait projet',
                ],
                bg: 'bg-[#FAFAF8]',
              },
              {
                titre: 'Architecte d\'intérieur',
                points: [
                  'Peut modifier la structure (cloisons, ouvertures)',
                  'Dépose des permis de travaux si nécessaire',
                  'Idéal pour les rénovations lourdes',
                  'Honoraires : 10 à 15 % du budget travaux',
                ],
                bg: 'bg-white border border-gray-100',
              },
            ].map((col) => (
              <div key={col.titre} className={`${col.bg} rounded-lg p-5`}>
                <h3 className="font-semibold text-[#1C1C1C] text-sm mb-3">{col.titre}</h3>
                <ul className="space-y-2">
                  {col.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-gray-500 font-light">
                      <span className="text-[#D4AF37] mt-0.5">›</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            <strong className="text-[#1C1C1C]">Espace Design</strong> combine les deux : nous gérons aussi bien le conseil en décoration que l&apos;exécution des travaux de rénovation. Un seul interlocuteur pour tout le projet.
          </p>

          {/* Prix */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Prix d&apos;un décorateur intérieur à Paris
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#FAFAF8]">
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Prestation</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Tarif Paris</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-gray-200 text-gray-600">Consultation initiale (2h)</td>
                  <td className="p-3 border border-gray-200 text-gray-600">150 – 300 €</td>
                </tr>
                <tr className="bg-[#FAFAF8]">
                  <td className="p-3 border border-gray-200 text-gray-600">Board décoratif (palette + matériaux)</td>
                  <td className="p-3 border border-gray-200 text-gray-600">500 – 1 500 €</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 text-gray-600">Forfait décoration complète (studio/2p)</td>
                  <td className="p-3 border border-gray-200 text-gray-600">2 000 – 5 000 €</td>
                </tr>
                <tr className="bg-[#FAFAF8]">
                  <td className="p-3 border border-gray-200 text-gray-600">Forfait décoration complète (3p+)</td>
                  <td className="p-3 border border-gray-200 text-gray-600">5 000 – 15 000 €</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 text-gray-600">Suivi de travaux et achats mobilier</td>
                  <td className="p-3 border border-gray-200 text-gray-600">10 – 15 % du budget total</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs italic mb-8">
            Lorsqu&apos;un décorateur gère aussi l&apos;exécution des travaux (comme Espace Design), les honoraires de conception sont souvent inclus dans le devis global.
          </p>

          {/* Styles */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Les styles décoratifs tendance à Paris en 2025
          </h2>
          <div className="space-y-4 mb-8">
            {[
              {
                titre: 'Haussmannien revisité',
                desc: 'Conserver les éléments patrimoniaux (moulures, parquet Point de Hongrie, cheminée) tout en les mariant avec un mobilier contemporain et des teintes actuelles (vert forêt, terracotta, bleu nuit). Le style signature des beaux arrondissements parisiens.',
              },
              {
                titre: 'Minimalisme parisien',
                desc: 'Peu de meubles, matières nobles (béton, chêne, lin), palette neutre (blanc, grège, gris perle). Chaque objet est choisi avec soin. Ce style convient particulièrement aux petits espaces car il maximise la sensation de volume.',
              },
              {
                titre: 'Japandi (Japonais + Scandinave)',
                desc: 'Fusion de la sobriété japonaise et du confort scandinave. Bois clair, tatami, plantes, lignes épurées. Très en vogue dans les studios et 2 pièces de moins de 50 m².',
              },
              {
                titre: 'Éclectique & vintage',
                desc: 'Mélange de périodes et de styles : mobilier des années 50/70 associé à des éléments contemporains, matériaux bruts (velours, laiton, rotin). Idéal pour les appartements avec du caractère (Marais, Montmartre, Pigalle).',
              },
              {
                titre: 'Luxe discret (quiet luxury)',
                desc: 'Matériaux premium sans ostentation : marbre, laiton brossé, linge de maison haut de gamme, palette monochrome. Le style des appartements des 6e, 7e et 16e rénovés par des professionnels.',
              },
            ].map((item) => (
              <div key={item.titre} className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-5">
                <h3 className="font-semibold text-[#1C1C1C] text-sm mb-2">{item.titre}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Conseils */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            5 conseils pour réussir votre décoration intérieure à Paris
          </h2>
          <div className="space-y-3 mb-8">
            {[
              { n: '1', t: 'Partez de l\'existant', d: 'À Paris, les appartements ont souvent des éléments patrimoniaux (moulures, parquet, cheminée). Valorisez-les plutôt que de les masquer. Ils constituent la signature de votre appartement.' },
              { n: '2', t: 'Choisissez 3 couleurs maximum', d: '1 couleur principale (60 %), 1 couleur secondaire (30 %), 1 accent (10 %). Plus vous êtes sobre, plus le résultat est élégant.' },
              { n: '3', t: 'Investissez dans l\'éclairage', d: 'L\'éclairage transforme une pièce. Combinez éclairage général (spots), fonctionnel (plan de travail) et d\'ambiance (appliques, lampes à poser). Évitez le néon froid à l\'ancienne.' },
              { n: '4', t: 'Ne meuublez pas trop', d: 'Dans les petits appartements parisiens, moins de meubles = plus d\'espace perçu. Privilégiez des pièces multifonctions et le sur-mesure plutôt que les meubles standard.' },
              { n: '5', t: 'Pensez la décoration pendant les travaux', d: 'Les prises, les spots, les saignées pour les câbles — tout ça doit être prévu avant de poser les finitions. Associez décorateur et artisan dès le départ.' },
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
            Espace Design : décorateur et artisan rénovateur à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Espace Design est un atelier parisien qui associe conseil en décoration intérieure et exécution des travaux de rénovation. Nous accompagnons nos clients de la définition du projet jusqu&apos;à la livraison clé en main.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Notre spécialité : les appartements de caractère dans les beaux arrondissements parisiens (6e, 7e, 8e, 16e, 17e) ainsi que les secteurs résidentiels de la petite couronne (Neuilly, Boulogne, Levallois, Versailles).
          </p>
          <ul className="space-y-2 mb-6">
            {[
              'Conseil en décoration inclus dans le devis de rénovation',
              'Mood board et simulation 3D disponibles',
              'Sélection des matériaux et du mobilier',
              'Livraison clé en main, un seul interlocuteur',
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
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénover un appartement haussmannien' },
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
              { href: '/renovation-paris-16e', label: '16e' },
              { href: '/renovation-paris-17e', label: '17e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
              { href: '/renovation-levallois-perret', label: 'Levallois-Perret' },
              { href: '/renovation-versailles', label: 'Versailles' },
              { href: '/renovation-vincennes', label: 'Vincennes' },
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
          Un projet de décoration intérieure à Paris ?
        </h2>
        <p className="text-gray-400 text-sm font-light mb-6 max-w-lg mx-auto">
          Devis gratuit sous 48h — nous accompagnons votre projet de A à Z, de la décoration à la livraison.
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
