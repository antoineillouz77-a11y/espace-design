import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: "Rénovation Parquet Massif Paris : ponçage, vitrification & prix 2025",
  description: "Tout savoir sur la rénovation de parquet massif à Paris : ponçage, bouchage des fissures, choix de teinte, vitrification ou huile-cire, prix au m² 2025 et durée d'intervention.",
  keywords: ["rénovation parquet massif Paris", "ponçage parquet Paris", "vitrification parquet Paris", "prix ponçage parquet 2025", "artisan parqueteur Paris"],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation Parquet Massif Paris : ponçage, vitrification & prix 2025",
  description: "Tout savoir sur la rénovation de parquet massif à Paris : ponçage, bouchage des fissures, choix de teinte, vitrification ou huile-cire, prix au m² 2025.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Peut-on rénover tous les parquets ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Non, seuls les parquets massifs et certains contrecollés épais (couche d'usure > 4 mm) peuvent être ponçés et rénovés. Les parquets stratifiés ou les contrecollés minces (couche d'usure < 2 mm) ne supportent pas le ponçage mécanique. Avant toute intervention, un artisan parqueteur évalue l'épaisseur résiduelle avec une sonde ou une jauge afin de s'assurer qu'au moins 3 mm de bois subsistent au-dessus de la rainure. Un parquet massif de 20 mm d'épaisseur en bon état peut généralement être rénové sans problème.",
      },
    },
    {
      '@type': 'Question',
      name: "Combien coûte la rénovation parquet Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "À Paris en 2025, le prix d'une rénovation complète de parquet massif (ponçage + bouchage + vitrification) se situe entre 25 et 55 €/m² selon l'état du parquet, la superficie et la finition choisie. Le ponçage seul coûte 15 à 25 €/m², la vitrification seule 10 à 20 €/m², l'huile ou la cire 8 à 15 €/m². Pour un appartement de 50 m², comptez entre 1 500 et 3 500 € main d'oeuvre et matériaux inclus. La dépose et l'évacuation d'un ancien revêtement sont facturées en supplément (10 à 20 €/m²).",
      },
    },
    {
      '@type': 'Question',
      name: "Quelle finition choisir : vitrification ou huile ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La vitrification (vernis polyuréthane) offre une protection maximale contre l'eau et les rayures ; elle convient aux pièces à fort passage (couloir, salon, cuisine ouverte) et aux logements locatifs. Elle donne un aspect brillant à satiné. L'huile pénétrante préserve l'aspect naturel du bois, est plus facile à réparer par zones (simple réhuilage sans tout poncer) mais nécessite un entretien annuel. La cire offre le rendu le plus authentique pour les parquets anciens haussmanniens mais demande un entretien rigoureux. Pour un usage familial intensif, la vitrification glycéro reste le meilleur compromis durabilité / coût.",
      },
    },
    {
      '@type': 'Question',
      name: "Combien de fois peut-on poncer un parquet ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Un parquet massif peut être poncé 3 à 5 fois selon son épaisseur initiale. Une lame de 22 mm tolère davantage de ponçages qu'une lame de 14 mm. Chaque ponçage enlève environ 1 à 2 mm de bois. Un artisan expérimenté mesure l'épaisseur résiduelle avant chaque intervention pour éviter d'atteindre la rainure. Les parquets haussmanniens parisiens, souvent posés au XIXe siècle, ont parfois déjà subi plusieurs rénovations : un diagnostic préalable est indispensable avant de s'engager.",
      },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      {/* Hero */}
      <section className="bg-[#1C1C1C] text-center pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#D4AF37] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Parquet</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Parquet Massif Paris : redonner vie à votre sol
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed max-w-2xl mx-auto">
            Ponçage, bouchage des fissures, choix de teinte, vitrification ou huile-cire : guide complet pour rénover un parquet massif à Paris en 2025, avec les prix au m² et les délais d&apos;intervention.
          </p>
        </div>
      </section>

      {/* Section 1 — Différences massif / contrecollé / stratifié */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Massif, contrecollé, stratifié : lequel peut être rénové ?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Avant de planifier une rénovation, il faut identifier précisément le type de parquet en place. Tous ne réagissent pas de la même façon au ponçage mécanique — et certains ne peuvent tout simplement pas être rénovés.
          </p>
          <div className="space-y-4">
            {[
              {
                type: 'Parquet massif',
                reno: 'Oui — 3 à 5 ponçages possibles',
                detail: "Constitué d'une seule pièce de bois plein (14 à 22 mm). Le parquet de référence dans les appartements parisiens anciens. La couche d'usure est épaisse : il peut être poncé plusieurs fois sur sa durée de vie. Les parquets en point de Hongrie ou en chêne bâton rompu des immeubles haussmanniens sont presque toujours des parquets massifs.",
              },
              {
                type: 'Parquet contrecollé',
                reno: 'Conditionnellement — selon épaisseur parement',
                detail: "Composé d'un parement de bois noble (2 à 6 mm) collé sur un support multiplis. Les modèles avec parement > 4 mm peuvent être poncés 1 à 2 fois. Ceux avec parement de 2 mm ou moins ne supportent pas le ponçage. Un artisan mesure l'épaisseur du parement à l'aide d'une sonde avant de s'engager.",
              },
              {
                type: 'Parquet stratifié',
                reno: 'Non — impossible à poncer',
                detail: "Le stratifié est constitué d'une planche HDF recouverte d'une photo imprimée protégée par une résine dure. Il n'y a aucune couche de bois véritable : le ponçage détruirait immédiatement le décor. En cas d'usure ou de rayures profondes, la seule solution est le remplacement complet.",
              },
            ].map((el) => (
              <div key={el.type} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.type}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.reno}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Étapes du ponçage */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Les étapes du ponçage professionnel
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le ponçage d&apos;un parquet massif est une opération délicate qui nécessite un matériel professionnel (ponceuse à bande, ponceuse de bord, vibrante de finition) et une progression rigoureuse des grains. Un ponçage mal maîtrisé laisse des ondulations ou des brûlures irréparables.
          </p>
          <div className="space-y-4">
            {[
              {
                etape: '1. Diagnostic et préparation',
                detail: "Mesure de l'épaisseur résiduelle, vérification de l'état des lames (décollées, cassées, pourries). Les lames abîmées sont remplacées avant de poncer. La pièce est entièrement vidée et les plinthes sont déposées. Bouchage des gros trous et des nœuds avec de la colle à bois avant le premier passage.",
              },
              {
                etape: '2. Ponçage gros grain (36 ou 40)',
                detail: "Passage de la ponceuse à bande dans le sens des lames pour éliminer l'ancienne finition (vernis, cire, huile) et le bois oxydé en surface. Ce premier passage est le plus agressif : il enlève 1 à 2 mm de bois. Les angles et les bords sont traités à la ponceuse de chant.",
              },
              {
                etape: '3. Bouchage des fissures et interstices',
                detail: "Application d'un mastic à base de colle à bois mélangée à la sciure du ponçage : le résultat est parfaitement teinté dans la couleur naturelle du parquet. Ce mastic sèche en 2 à 4 heures selon l'humidité ambiante. Cette étape est essentielle pour les parquets anciens dont les lames ont travaillé et présentent des interstices visibles.",
              },
              {
                etape: '4. Ponçage moyen puis fin (60, 80, 120)',
                detail: "Passage successifs avec des grains de plus en plus fins pour lisser la surface et éliminer les stries du premier ponçage. Chaque passage se fait dans le sens du bois. Le dernier passage à grain fin (120) prépare la surface à recevoir la finition.",
              },
              {
                etape: '5. Dépoussiérage et finition',
                detail: "Aspiration complète de la sciure et dépoussiérage à l'aide d'un chiffon légèrement humide. Application de la finition choisie : vitrification (2 à 3 couches), huile (2 à 3 couches) ou cire (2 couches + lustrage). Séchage entre chaque couche : 4 à 12 heures selon le produit.",
              },
            ].map((el) => (
              <div key={el.etape} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.etape}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Teintes */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Choisir la teinte de son parquet massif
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La teinte est appliquée après le ponçage final, avant la finition. Elle peut radicalement transformer l&apos;ambiance d&apos;un appartement. Attention : une teinte mal dosée ou mal appliquée est très difficile à corriger.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                teinte: 'Naturel (sans teinte)',
                ambiance: 'Chaleureux, authentique',
                detail: "La finition naturelle laisse apparaître la couleur et les veines naturelles du bois. Le chêne prend une teinte dorée avec le temps. Idéal pour les appartements haussmanniens ou les rénovations souhaitant conserver le caractère d'origine.",
              },
              {
                teinte: 'Blanchi ou grisé',
                ambiance: 'Lumineux, scandinave',
                detail: "Une lasure blanche ou grise diluée est appliquée avant la vitrification. Elle atténue les veines et éclaircit la pièce. Très tendance dans les appartements contemporains parisiens. Attention : irréversible, impossible de revenir au naturel sans reponcer.",
              },
              {
                teinte: 'Fumé ou brun foncé',
                ambiance: 'Élégant, contrasté',
                detail: "Le bois est teinté dans des tons tabac, wengé ou ebène. Crée un contraste fort avec des murs blancs. Convient bien aux grandes pièces lumineuses. Dans une pièce sombre, une teinte foncée peut écraser visuellement l'espace.",
              },
              {
                teinte: 'Vieilli ou oxydé',
                ambiance: 'Vintage, patine',
                detail: "Technique qui simule un vieillissement accéléré du bois par réaction chimique (acide tannique + sulfate de fer) ou par l'application d'un brou de noix. Donne un aspect patine et historique très apprécié dans les appartements de caractère et les lofts.",
              },
            ].map((el) => (
              <div key={el.teinte} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.teinte}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.ambiance}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Vitrification vs huile-cire */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Vitrification vs huile-cire : quelle finition choisir ?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le choix de la finition est déterminant pour la durabilité, l&apos;aspect visuel et l&apos;entretien futur de votre parquet. Il n&apos;y a pas de finition universellement supérieure : tout dépend de votre usage, de vos préférences esthétiques et de la pièce concernée.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Critère</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Vitrification</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Huile-cire</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { critere: 'Résistance rayures', vitri: 'Très bonne', huile: 'Moyenne' },
                  { critere: "Résistance à l'eau", vitri: 'Excellente', huile: 'Bonne (si entretien régulier)' },
                  { critere: 'Aspect visuel', vitri: 'Brillant à satiné', huile: 'Mat naturel' },
                  { critere: 'Entretien', vitri: 'Faible (nettoyage humide)', huile: "Réhuilage annuel requis" },
                  { critere: 'Réparation locale', vitri: "Difficile (tout poncer)", huile: "Facile (poncer la zone)" },
                  { critere: 'Prix finition', vitri: '15 – 28 €/m²', huile: '10 – 18 €/m²' },
                  { critere: 'Idéal pour', vitri: 'Couloir, salon, locatif', huile: 'Chambre, appartement de caractère' },
                ].map((row, i) => (
                  <tr key={row.critere} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.critere}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.vitri}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.huile}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 5 — Prix et durée */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix rénovation parquet massif Paris 2025 & durée d&apos;intervention
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix s&apos;entendent main d&apos;oeuvre + matériaux, pour un artisan parqueteur parisien qualifié, hors dépose de l&apos;ancien revêtement.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Prestation</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix au m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Durée (50 m²)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { presta: 'Ponçage seul (3 passes)', prix: '15 – 25 €/m²', duree: '1 journée' },
                  { presta: 'Bouchage fissures inclus', prix: '18 – 28 €/m²', duree: '1 journée' },
                  { presta: 'Vitrification (2-3 couches)', prix: '10 – 20 €/m²', duree: '1 à 2 journées' },
                  { presta: 'Huile ou cire (2-3 couches)', prix: '8 – 15 €/m²', duree: '1 journée' },
                  { presta: 'Rénovation complète (ponçage + finition)', prix: '25 – 55 €/m²', duree: '2 à 3 journées' },
                  { presta: 'Remplacement lames isolées', prix: '30 – 80 €/lame', duree: 'Demi-journée' },
                  { presta: 'Dépose + évacuation ancien revêtement', prix: '10 – 20 €/m²', duree: 'En sus' },
                ].map((row, i) => (
                  <tr key={row.presta} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.presta}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prix}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.duree}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Prévoir 48 à 72h sans circuler après vitrification pour un séchage optimal",
              "Aérer abondamment pendant et après l'application des finitions solvantées",
              "Laisser acclimater les lames de remplacement 48h dans la pièce avant pose",
              "Maintenir un taux d'humidité stable (45-60%) pour limiter le travail du bois",
              "Poser des patins sous les meubles dès la fin du chantier pour protéger la finition",
              "Éviter le nettoyage humide pendant 7 jours après vitrification",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-6 text-center">Questions fréquentes</p>
          <div className="space-y-6">
            {schemaFAQ.mainEntity.map((q) => (
              <div key={q.name} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-3">{q.name}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{q.acceptedAnswer.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voir aussi */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Voir aussi</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/parquet-paris', title: 'Parquet Paris — Espace Design' },
              { href: '/blog/parquet-massif-paris', title: 'Parquet massif Paris' },
              { href: '/blog/pose-parquet-paris', title: 'Pose parquet Paris' },
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénovation appartement haussmannien' },
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

      {/* CTA */}
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
          Rénover votre parquet massif à Paris
        </h2>
        <p className="text-gray-400 text-sm font-light mb-8">
          Artisan parqueteur parisien. Ponçage, vitrification, huile. Devis gratuit sous 48h.
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
