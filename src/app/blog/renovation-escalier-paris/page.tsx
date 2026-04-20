import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation escalier Paris', item: 'https://espacedesignparis.fr/blog/renovation-escalier-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Escalier Paris : prix, bois, carrelage & garde-corps 2025',
  description: 'Rénover un escalier à Paris : peinture, remplacement marches, garde-corps design. Prix selon matériaux. Guide complet et artisans 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-escalier-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix pour rénover un escalier à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La rénovation d'un escalier à Paris coûte entre 2 000 et 15 000 € selon l'ampleur des travaux. Peindre et vernir un escalier bois existant : 800 à 2 000 €. Remplacer les marches en bois : 3 000 à 8 000 €. Installer un garde-corps design en acier ou inox : 2 000 à 6 000 €. Réfection complète (marches + rampe + habillage) : 8 000 à 15 000 €.",
      },
    },
    {
      '@type': 'Question',
      name: 'Comment rénover un vieil escalier en bois ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour un escalier bois abîmé : ponçage complet des marches et contremarches, rebouchage des fissures avec mastic bois, application de 2 à 3 couches de vernis ou peinture antidérapante. Si les marches sont trop usées (creusées), remplacement par des marches neuves en chêne massif. La rénovation coûte généralement 3 à 5 fois moins cher que le remplacement complet.",
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on poser du carrelage sur un escalier ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, sur un support sain. Le carrelage sur escalier nécessite des carreaux spéciaux antidérapants et des nez de marche adaptés. La pose est plus technique qu'en sol plat — prévoir 15 à 25 €/marche supplémentaires. Les formats conseillés : carreaux 30×30 ou 33×33 cm, ou des tomettes adaptées à la courbe des marches.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Escalier Paris : prix, bois, carrelage & garde-corps 2025',
  description: 'Rénover un escalier à Paris : peinture, remplacement marches, garde-corps design. Prix selon matériaux. Guide complet et artisans 2025.',
}

export default function ArticleRenovationEscalier() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
      />

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-12 bg-[#1C1C1C]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#D4AF37] text-[10px] font-light uppercase tracking-[0.25em] mb-4">
            Menuiserie
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Escalier Paris : prix, bois, carrelage & garde-corps 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Rénover un escalier à Paris : peinture, remplacement de marches, garde-corps design en acier ou en verre. Prix selon matériaux et guide complet pour artisans spécialisés en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Types de rénovation */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les types de rénovation d&apos;escalier à Paris
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Un escalier parisien peut être rénové à différents niveaux selon son état et votre budget. La rénovation superficielle (peinture, vernis) suffit souvent pour un escalier en bon état structurel. La réfection complète s&apos;impose quand les marches sont creusées, les contremarches fissurées ou la rampe branlante.
            </p>
            <div className="space-y-4">
              {[
                {
                  niveau: 'Niveau 1 — Peinture et vernissage',
                  fourchette: '800 – 2 000 €',
                  detail: "Ponçage à la machine des marches et contremarches, rebouchage des fissures superficielles au mastic bois, application de 2 à 3 couches de vernis mat ou satiné (ou peinture antidérapante pour les zones de circulation intense). Idéal pour un escalier en bon état structural avec des marches simplement usées en surface.",
                },
                {
                  niveau: 'Niveau 2 — Remplacement des marches',
                  fourchette: '3 000 – 8 000 €',
                  detail: "Dépose des anciennes marches et contremarches, remplacement par des marches neuves en chêne massif (ou hêtre, frêne, noyer). Conservation de la structure porteuse existante (limons, giron). Résultat proche d'un escalier neuf à un coût bien inférieur.",
                },
                {
                  niveau: 'Niveau 3 — Habillage carrelage ou pierre',
                  fourchette: '4 000 – 10 000 €',
                  detail: "Pose de carrelage antidérapant ou de pierre naturelle (marbre, travertin) sur les marches et contremarches existantes. Nécessite des nez de marche adaptés et un support sain (béton ou bois stable). Très répandu dans les entrées d'appartements haussmanniens.",
                },
                {
                  niveau: 'Niveau 4 — Réfection complète',
                  fourchette: '8 000 – 15 000 €',
                  detail: "Remplacement ou consolidation de la structure porteuse, nouvelles marches, nouveau garde-corps, habillage du dessous de volée. Transforme complètement l'esthétique de l'escalier. Indispensable quand le support est compromis (pourrissement bois, béton fissuré).",
                },
              ].map((el) => (
                <div key={el.niveau} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="font-medium text-[#1C1C1C] text-sm">{el.niveau}</div>
                    <div className="text-[#B8960C] text-sm font-medium flex-shrink-0">{el.fourchette}</div>
                  </div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tableau des matériaux */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Tableau comparatif des matériaux pour marches d&apos;escalier
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1C1C1C] text-white">
                    <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Matériau</th>
                    <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix marche (fourni + posé)</th>
                    <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Durée de vie</th>
                    <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Entretien</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { mat: 'Chêne massif', prix: '180 – 350 €', duree: '50+ ans', entretien: 'Huilage / 3 ans' },
                    { mat: 'Hêtre massif', prix: '120 – 220 €', duree: '30 – 40 ans', entretien: 'Vernis / 5 ans' },
                    { mat: 'Carrelage grès cérame', prix: '80 – 180 €', duree: '30+ ans', entretien: 'Très faible' },
                    { mat: 'Marbre ou pierre naturelle', prix: '250 – 600 €', duree: '50+ ans', entretien: 'Cristallisation' },
                    { mat: 'Béton ciré', prix: '150 – 300 €', duree: '10 – 20 ans', entretien: 'Cire / 2 ans' },
                  ].map((row, i) => (
                    <tr key={row.mat} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                      <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.mat}</td>
                      <td className="px-4 py-3 text-center text-gray-600 font-light">{row.prix}</td>
                      <td className="px-4 py-3 text-center text-gray-600 font-light">{row.duree}</td>
                      <td className="px-4 py-3 text-center text-gray-600 font-light">{row.entretien}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Garde-corps */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Garde-corps et rampes : les options design pour un escalier parisien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le garde-corps est l&apos;élément le plus visible d&apos;un escalier. Il conditionne en grande partie le style de l&apos;espace. À Paris, trois grandes familles coexistent selon les périodes de construction et les goûts contemporains.
          </p>
          <div className="space-y-4 mb-8">
            {[
              {
                style: 'Acier laqué ou peint',
                prix: '2 000 – 5 000 €',
                detail: "Fabrication sur mesure par un ferrailleur ou un serrurier métallier. Finition laquée RAL de votre choix. Style contemporain ou industriel. Compatible avec tous les types d'escaliers. Solution la plus polyvalente et la plus fréquente dans les rénovations parisiennes.",
              },
              {
                style: 'Inox brossé',
                prix: '3 000 – 7 000 €',
                detail: "Esthétique épurée, intemporelle. L'inox ne se peint pas et ne se corrode pas. Associé à des câbles en inox tendus ou des platines de verre, il offre un résultat très haut de gamme. Souvent choisi dans les lofts et appartements contemporains.",
              },
              {
                style: 'Verre feuilleté',
                prix: '3 500 – 8 000 €',
                detail: "Garde-corps en verre feuilleté (sécurité obligatoire) avec main courante en inox ou en bois. Laisse passer la lumière, agrandit visuellement l'espace. Norme NF P01-013 obligatoire. Verre de 10 à 12 mm minimum pour les applications garde-corps.",
              },
              {
                style: 'Bois sculpté (style haussmannien)',
                prix: '4 000 – 12 000 €',
                detail: "Restauration ou reproduction de balustres en bois tourné, main courante en chêne ou en noyer. Très demandé pour les appartements haussmanniens souhaitant conserver un caractère d'époque. Travail artisanal, délais plus longs.",
              },
            ].map((el) => (
              <div key={el.style} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.style}</div>
                  <div className="text-[#B8960C] text-sm font-medium">{el.prix}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>

          <div className="bg-[#1C1C1C] rounded-lg p-5">
            <div className="font-medium text-white text-sm mb-2">Norme sécurité garde-corps escalier</div>
            <div className="text-gray-400 text-sm font-light leading-relaxed">
              La hauteur réglementaire d&apos;un garde-corps en France est de 1 mètre minimum (0,90 m toléré dans certains cas anciens). Les écartements entre barreaux ne doivent pas dépasser 18 cm (norme enfants). Ces règles s&apos;imposent lors d&apos;une rénovation complète, même dans un bien ancien.
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Escalier haussmannien + Conseils */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Rénover l&apos;escalier d&apos;un appartement haussmannien
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Les appartements haussmanniens parisiens présentent des escaliers intérieurs caractéristiques : marches en bois massif, contremarches en bois ou en pierre, rampe en fonte ou en bois tourné. Ces éléments ont souvent 100 à 150 ans et sont généralement en bon état structural — mais leur surface est très usée.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              La bonne approche : conserver la structure d&apos;origine (limons, carrage), remplacer uniquement les marches défectueuses, rénover les contremarches par ponçage et peinture, et restaurer ou remplacer la rampe selon son état. Une rénovation ciblée sur ce type d&apos;escalier coûte généralement 4 000 à 8 000 € pour un appartement de 4 à 6 pièces.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Attention aux escaliers classés ou situés dans un secteur ABF (Architectes des Bâtiments de France) : les matériaux et finitions peuvent être imposés pour conserver l&apos;aspect d&apos;origine du bâtiment. Vérifiez auprès de votre mairie ou de votre syndic avant de lancer les travaux.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Conseils pratiques avant de lancer la rénovation
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Vérifiez l\'état structurel de la structure porteuse avant de choisir votre type de rénovation',
                'Ponçage = poussière fine — prévoyez un confinement du chantier et informez vos voisins',
                'Travaillez avec un artisan qui maîtrise à la fois la menuiserie et le carrelage pour un résultat cohérent',
                'Un escalier en chêne massif se rénove facilement tous les 15 à 20 ans — pas besoin de tout remplacer',
                'Intégrez l\'escalier dans la réflexion globale de décoration (coloris cohérents avec parquet et murs)',
                'Les marches en bois ancien se « réparent » souvent mieux qu\'on ne le croit — demandez un diagnostic avant de décider',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                  <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Voir aussi */}
      <section className="py-12 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Voir aussi</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/menuiserie-paris', title: 'Menuiserie sur mesure Paris' },
              { href: '/parquet-paris', title: 'Parquet Paris' },
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénover un haussmannien' },
              { href: '/blog/budget-renovation-paris-2025', title: 'Budget rénovation Paris 2025' },
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
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-4">
          Votre escalier mérite une deuxième jeunesse
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis détaillé sous 48h. Menuisiers et carreleurs spécialisés.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 bg-[#1C1C1C] text-white px-7 py-3.5 rounded font-light text-sm tracking-wide hover:bg-black transition-colors"
          >
            Devis gratuit <ArrowRight size={13} />
          </Link>
          <a
            href="tel:+33611783867"
            className="flex items-center justify-center gap-2 border border-[#1C1C1C]/30 text-[#1C1C1C] px-7 py-3.5 rounded font-light text-sm tracking-wide hover:border-[#1C1C1C] transition-colors"
          >
            <Phone size={14} />
            06 11 78 38 67
          </a>
        </div>
      </section>
    </>
  )
}
