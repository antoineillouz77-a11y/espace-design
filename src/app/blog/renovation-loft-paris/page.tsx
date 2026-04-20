import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Loft Paris', item: 'https://espacedesignparis.fr/blog/renovation-loft-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Loft Paris : prix, aménagement industriel & guide 2025',
  description: 'Rénover un loft à Paris : style industriel, béton ciré, verrière, mezzanine. Prix au m², artisans spécialisés. Guide complet 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-loft-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien coûte la rénovation d\'un loft à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La rénovation d\'un loft parisien coûte entre 1 200 et 2 500 €/m² selon le niveau de finition. Un loft de 80 m² demande un budget de 100 000 à 180 000 € en rénovation complète. Les postes principaux : béton ciré ou parquet industriel (80-150€/m²), verrière intérieure (3 000-8 000€), cloisonnement léger, électricité en apparent et cuisine ouverte sur-mesure.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quels matériaux choisir pour un loft parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Les matériaux emblématiques du loft parisien sont : béton ciré pour les sols et murs (effet brut, 80-120€/m²), acier noir pour les verrières et garde-corps (3 000-8 000€), brique apparente récupérée, bois massif ou parquet vieilli. Pour l\'éclairage, privilégiez les rails industriels et les ampoules à filament.',
      },
    },
    {
      '@type': 'Question',
      name: 'Faut-il un architecte pour rénover un loft ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un architecte est obligatoire si la surface dépasse 150 m² ou si vous modifiez la structure (murs porteurs, planchers). Pour les lofts standard entre 60 et 150 m², un maître d\'œuvre ou une entreprise générale de rénovation comme Espace Design suffit. Budget honoraires architecte : 8 à 12% du montant des travaux.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Loft Paris : prix, aménagement industriel & guide 2025',
  description: 'Rénover un loft à Paris : style industriel, béton ciré, verrière, mezzanine. Prix au m², artisans spécialisés. Guide complet 2025.',
}

export default function ArticleRenovationLoft() {
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
            Guides
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Loft Paris : prix, aménagement industriel & guide 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Rénover un loft à Paris — ancien atelier, entrepôt ou espace industriel reconverti — est un projet exigeant et passionnant. Style industriel, béton ciré, verrière, mezzanine : ce guide vous donne les clés pour réussir votre loft parisien avec le bon budget et les bons artisans.
          </p>
        </div>
      </section>

      {/* Section 1 — Types de lofts */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Qu&apos;est-ce qu&apos;un loft parisien ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Le terme &quot;loft&quot; désigne à Paris une grande surface ouverte issue de la reconversion d&apos;un espace non résidentiel : ancien atelier d&apos;artiste, entrepôt industriel, atelier artisanal ou commerce. Ces biens se concentrent dans les arrondissements de l&apos;Est parisien (3e, 10e, 11e, 18e, 19e, 20e) et en petite couronne (Montreuil, Pantin, Saint-Denis, Aubervilliers).
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Ce qui distingue un loft d&apos;un simple grand appartement : la hauteur sous plafond (souvent 3,5 à 6 m), les volumes généreux non cloisonnés, les matériaux bruts (métal, béton, brique) et une luminosité souvent exceptionnelle grâce aux verrières. Rénover un loft demande des compétences spécifiques que n&apos;ont pas tous les artisans parisiens.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  type: 'Atelier d\'artiste',
                  zones: '18e, 14e, 20e',
                  detail: 'Verrières acier, hauteur 3-5 m, isolation quasi nulle. Rénovation lourde obligatoire.',
                },
                {
                  type: 'Entrepôt reconverti',
                  zones: '11e, 12e, 13e, banlieue',
                  detail: 'Structure béton, dalle sol, hauteur 4-6 m. Volumes généreux, défis acoustiques.',
                },
                {
                  type: 'Loft moderne',
                  zones: 'Tout Paris',
                  detail: 'Hauteur 3-3,5 m, normes récentes. Rénovation légère : aménagement + finitions.',
                },
                {
                  type: 'Ancien commerce',
                  zones: 'Rez-de-chaussée Paris',
                  detail: 'Plain-pied, façade vitrée. Isoler du bruit de rue, humidité remontante.',
                },
              ].map((el) => (
                <div key={el.type} className="bg-[#FAFAF8] rounded-lg p-4 border border-gray-100">
                  <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
                    <div className="font-medium text-[#1C1C1C] text-sm">{el.type}</div>
                    <div className="text-[#B8960C] text-xs font-light">{el.zones}</div>
                  </div>
                  <div className="text-gray-600 text-xs font-light leading-relaxed">{el.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tableau budgets */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Prix de rénovation d&apos;un loft parisien au m²
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1C1C1C] text-white">
                    <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Niveau</th>
                    <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix/m²</th>
                    <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Ce qui est inclus</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { niveau: 'Rénovation légère', prix: '600 – 1 200 €/m²', inclus: 'Peinture, sol, cuisine basique, sanitaires' },
                    { niveau: 'Rénovation intermédiaire', prix: '1 200 – 1 800 €/m²', inclus: 'Électricité, plomberie, isolation partielle, finitions soignées' },
                    { niveau: 'Rénovation complète', prix: '1 800 – 2 500 €/m²', inclus: 'Isolation totale, mezzanine, verrière, béton ciré, cuisine sur-mesure' },
                    { niveau: 'Haut de gamme', prix: '2 500 – 4 000 €/m²', inclus: 'Architecture d\'intérieur, matériaux premium, domotique, finitions exceptionnelles' },
                  ].map((row, i) => (
                    <tr key={row.niveau} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                      <td className="px-4 py-3 text-[#1C1C1C] font-medium text-sm">{row.niveau}</td>
                      <td className="px-4 py-3 text-center text-[#B8960C] font-light">{row.prix}</td>
                      <td className="px-4 py-3 text-gray-600 font-light text-sm">{row.inclus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-xs font-light italic mt-3">
              Estimations Espace Design pour Paris et petite couronne. Prix TTC, fournitures et main d&apos;œuvre incluses.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 — Matériaux & style industriel */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Les matériaux signature du style industriel parisien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le loft parisien s&apos;articule autour d&apos;une palette de matériaux bruts et authentiques. Ces matériaux ne sont pas simplement esthétiques : ils sont fonctionnels et durables quand ils sont bien mis en œuvre.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                Béton ciré : le sol (et les murs) des lofts
              </h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                Le béton ciré est le revêtement phare des lofts parisiens. Il s&apos;applique en 2 à 3 mm d&apos;épaisseur sur n&apos;importe quel support sain — dalle béton, carrelage, parquet. Ses atouts : continuité visuelle sans joints, grande variété de teintes (gris béton, taupe, anthracite, naturel), finitions au choix (mat, satiné, brillant). Entretien annuel à la cire naturelle. Prix : 80 à 180 €/m² fourni et posé par un applicateur spécialisé. Sur les murs, il crée un effet monolithique très contemporain (100 à 200 €/m²).
              </p>
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                Acier noir : verrières et garde-corps
              </h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                L&apos;acier noir laqué mat est l&apos;élément structurant des lofts industriels. On le retrouve dans les verrières intérieures (cloisons verre-acier), les garde-corps de mezzanine, les escaliers droits ou en colimaçon, les portes coulissantes et les cadres de fenêtres. Fabriqué sur mesure en atelier de serrurerie, il demande un délai de 4 à 8 semaines. Budget verrière : 3 000 à 8 000 € selon la surface vitrée. Garde-corps acier : 300 à 600 €/ml.
              </p>
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                Brique apparente et enduit chaux
              </h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                La brique apparente — récupérée ou neuve — apporte chaleur et authenticité à l&apos;espace industriel. Elle peut être existante (à nettoyer et protéger) ou posée comme parement. L&apos;enduit chaux, lui, crée un effet texturé naturel très en vogue dans les lofts haut de gamme. Prix brique parement : 60 à 120 €/m². Prix enduit chaux : 40 à 80 €/m².
              </p>
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                Parquet industriel et bois massif
              </h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                Pour adoucir le côté brut du loft, le parquet massif huilé ou brossé apporte une touche naturelle et chaleureuse. Préférez les larges lames (160-220 mm) en chêne ou en noyer, les essences vieillis ou fumés pour rester dans l&apos;esprit industriel tout en gagnant en chaleur. Prix parquet massif posé : 80 à 150 €/m².
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Aménagement : mezzanine, verrière, cuisine */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Mezzanine, verrière et cuisine ouverte : les trois piliers du loft réussi
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Un loft parisien bien rénové se construit autour de trois éléments clés qui définissent l&apos;organisation et l&apos;identité de l&apos;espace.
            </p>
            <div className="space-y-5">
              {[
                {
                  titre: 'La mezzanine',
                  detail: 'La mezzanine permet de créer une chambre ou un bureau sans cloisonner le volume. Conditions : hauteur sous plafond minimum 3 m (idéalement 4-5 m), hauteur libre de 1,80 m sous la mezzanine et 1,90 m dessus. Si la surface créée dépasse 5 m², une déclaration préalable de travaux est obligatoire. Budget : 15 000 à 30 000 € selon les matériaux (acier, bois, mixte) et la complexité de l\'escalier.',
                },
                {
                  titre: 'La verrière intérieure',
                  detail: 'La verrière délimite deux espaces tout en maintenant la luminosité. Idéale pour séparer une chambre, un bureau ou une salle de bain de la pièce principale. Fabriquée sur mesure en acier noir laqué et verre feuilleté ou trempé. Budget : 3 000 à 8 000 € selon la surface vitrée. Délai fabrication : 4 à 8 semaines.',
                },
                {
                  titre: 'La cuisine ouverte sur-mesure',
                  detail: 'Dans un loft, la cuisine s\'intègre directement dans l\'espace de vie. Le choix de l\'îlot central s\'impose : il organise la circulation, crée une séparation douce entre cuisine et salon, et offre de l\'espace de travail. Budget cuisine ouverte sur-mesure : 8 000 à 40 000 € selon les équipements et finitions (inox brossé, béton ciré, bois massif).',
                },
              ].map((el) => (
                <div key={el.titre} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.titre}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Ce qu&apos;Espace Design maîtrise dans la rénovation de loft
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Conception du zoning et de l\'aménagement sur mesure',
                'Béton ciré, enduit chaux, brique apparente — finitions spécialisées',
                'Fabrication et pose de verrières en acier noir',
                'Mezzanine : structure, escalier, garde-corps',
                'Coordination plomberie, électricité, menuiserie',
                'Suivi de chantier rigoureux — délais et budget respectés',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                  <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Tableau postes travaux */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Détail des postes travaux pour un loft de 80 m²
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1C1C1C] text-white">
                    <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Poste</th>
                    <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Rénovation standard</th>
                    <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Haut de gamme</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { poste: 'Isolation murs + toiture', standard: '10 000 – 20 000 €', haut: '25 000 – 45 000 €' },
                    { poste: 'Électricité (tableau + prises + éclairage)', standard: '8 000 – 15 000 €', haut: '15 000 – 25 000 €' },
                    { poste: 'Plomberie + salle de bain', standard: '8 000 – 15 000 €', haut: '15 000 – 30 000 €' },
                    { poste: 'Béton ciré ou parquet (sol)', standard: '6 500 – 13 000 €', haut: '13 000 – 25 000 €' },
                    { poste: 'Cuisine ouverte', standard: '8 000 – 18 000 €', haut: '20 000 – 45 000 €' },
                    { poste: 'Mezzanine + escalier', standard: '15 000 – 22 000 €', haut: '22 000 – 40 000 €' },
                    { poste: 'Verrière intérieure', standard: '3 500 – 6 000 €', haut: '6 000 – 15 000 €' },
                    { poste: 'Chauffage (PAC réversible)', standard: '5 000 – 10 000 €', haut: '10 000 – 20 000 €' },
                    { poste: 'Peinture + finitions', standard: '5 000 – 9 000 €', haut: '10 000 – 20 000 €' },
                  ].map((row, i) => (
                    <tr key={row.poste} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                      <td className="px-4 py-3 text-[#1C1C1C] font-light">{row.poste}</td>
                      <td className="px-4 py-3 text-center text-gray-600 font-light">{row.standard}</td>
                      <td className="px-4 py-3 text-center text-[#B8960C] font-light">{row.haut}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-xs font-light italic mt-3">
              Fourchettes TTC pour Paris et petite couronne. Variables selon l&apos;état initial du bien et les matériaux choisis.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 — Conseils pratiques */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Conseils pratiques pour rénover un loft à Paris
          </h2>
          <ul className="space-y-3">
            {[
              {
                conseil: 'Commencez par l\'isolation',
                detail: 'L\'isolation est le poste le plus sous-estimé dans un projet de loft. Un loft ancien non isolé peut coûter 300 à 500 €/mois de chauffage en hiver. Investissez en priorité dans l\'enveloppe thermique avant de vous lancer dans les finitions.',
              },
              {
                conseil: 'Faites appel à un bureau d\'études structure',
                detail: 'Avant toute mezzanine, faites contrôler la capacité portante du plancher par un ingénieur structure (500 à 1 500 €). C\'est un investissement indispensable pour éviter des surcoûts imprévus en cours de chantier.',
              },
              {
                conseil: 'Prévoyez 15% de réserve imprévus',
                detail: 'Dans un loft ancien, les mauvaises surprises sont fréquentes : amiante, plomb, structure dégradée, réseaux hors normes. Constituez toujours une réserve de 15% minimum au-dessus de votre budget prévisionnel.',
              },
              {
                conseil: 'Anticipez l\'acoustique dès la conception',
                detail: 'Les lofts à grand volume et sols béton ont un temps de réverbération très élevé. Intégrez les solutions acoustiques dès la conception : parquet flottant sur sous-couche résiliente, rideaux lourds, mobilier absorbant, plafonds tendus acoustiques.',
              },
              {
                conseil: 'Choisissez un artisan spécialisé en loft',
                detail: 'La rénovation de loft exige des compétences que peu d\'entreprises maîtrisent : béton ciré, serrurerie fine (verrières, escaliers), isolation de volumes atypiques. Exigez des photos de réalisations similaires avant de signer.',
              },
            ].map((item) => (
              <li key={item.conseil} className="bg-white rounded-lg p-4 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-1">{item.conseil}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{item.detail}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Voir aussi */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Voir aussi</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/amenagement-interieur-paris', title: 'Aménagement intérieur Paris' },
              { href: '/decoration-interieure-paris', title: 'Décoration intérieure Paris' },
              { href: '/blog/verriere-interieure-paris', title: 'Verrière intérieure Paris' },
              { href: '/blog/parquet-massif-paris', title: 'Parquet massif Paris : pose & prix' },
              { href: '/peinture-paris', title: 'Peinture Paris — Espace Design' },
            ].map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-4 hover:border-[#D4AF37]/40 transition-colors group"
              >
                <span className="text-sm text-[#1C1C1C] font-light group-hover:text-[#B8960C] transition-colors">{a.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Zones */}
      <section className="py-10 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Nos zones d&apos;intervention</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { href: '/renovation-paris-3e', label: 'Paris 3e' },
              { href: '/renovation-paris-10e', label: 'Paris 10e' },
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-paris-18e', label: 'Paris 18e' },
              { href: '/renovation-paris-19e', label: 'Paris 19e' },
              { href: '/renovation-paris-20e', label: 'Paris 20e' },
              { href: '/renovation-montreuil', label: 'Montreuil' },
              { href: '/renovation-pantin', label: 'Pantin' },
              { href: '/renovation-saint-denis', label: 'Saint-Denis' },
              { href: '/renovation-aubervilliers', label: 'Aubervilliers' },
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
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
          Votre projet de loft à Paris
        </h2>
        <p className="text-gray-400 text-sm font-light mb-8">
          Visite de chantier gratuite. Devis détaillé sous 48h. Maîtrise d&apos;œuvre complète.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-7 py-3.5 rounded font-light text-sm tracking-wide hover:bg-[#c9a030] transition-colors"
          >
            Devis gratuit <ArrowRight size={13} />
          </Link>
          <a
            href="tel:+33611783867"
            className="flex items-center justify-center gap-2 border border-gray-600 text-gray-300 px-7 py-3.5 rounded font-light text-sm tracking-wide hover:border-white hover:text-white transition-colors"
          >
            <Phone size={14} />
            06 11 78 38 67
          </a>
        </div>
      </section>
    </>
  )
}
