import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Enduit Décoratif Paris : béton ciré, stuc, tadelakt & prix 2025",
  description: "Enduit décoratif à Paris : béton ciré, stuc vénitien, tadelakt. Guide complet artisan 2025 — techniques, prix au m², entretien. Devis gratuit 48h.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
  url: 'https://espacedesignparis.fr/blog/enduit-decoratif-paris',
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quelle différence entre béton ciré, stuc et tadelakt ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le béton ciré est un enduit à base de ciment et résines, appliqué en 2 à 5 mm sur tout support. Le stuc vénitien est un enduit à la chaux vive et marbres pilés, poli à la spatule pour un rendu marbre brillant. Le tadelakt est un enduit marocain à la chaux hydraulique naturelle, hydrofuge par nature grâce au savon noir. Les trois peuvent s'appliquer sur murs et sols, mais le tadelakt est le plus indiqué en zone humide (douche) sans protection supplémentaire. Le béton ciré est le plus polyvalent et le plus courant à Paris.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel est le prix d'un enduit décoratif à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les tarifs varient selon la technique : béton ciré sol 80-150 €/m², béton ciré mur 90-180 €/m², stuc vénitien 120-200 €/m², tadelakt 150-280 €/m² (main-d'oeuvre + fourniture). La préparation du support (ponçage, ragréage) ajoute 15 à 30 €/m². Un mur de salon de 20 m² en béton ciré revient entre 1 800 et 3 600 €. Ces tarifs incluent toutes les couches d'application et la finition de protection.",
      },
    },
    {
      '@type': 'Question',
      name: "Peut-on appliquer un enduit décoratif dans la douche ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, sous réserve de choisir la bonne technique et d'assurer l'étanchéité. Le tadelakt est le plus adapté : imperméable par nature grâce au polissage au savon noir. Le béton ciré en douche nécessite un système d'étanchéité sous-jacent (SPEC + armature) et 2 couches de résine de protection hydrofuge. Le stuc vénitien n'est pas recommandé en zone de projections directes. Dans tous les cas, les joints de raccord mur-sol doivent être traités au mastic silicone.",
      },
    },
    {
      '@type': 'Question',
      name: "Combien de temps dure la pose d'un enduit décoratif ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La pose d'un enduit décoratif prend 3 à 7 jours selon la surface et la technique. Le béton ciré nécessite 2 à 3 jours de séchage entre les couches. Le stuc vénitien demande 3 à 5 passages à la spatule avec polissage intermédiaire. Le tadelakt exige le plus de temps : plusieurs couches + polissage au savon noir sur 24 à 48h. Il faut ensuite respecter un délai de 7 à 14 jours avant la mise en service (douche notamment) pour une réticulation complète.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Enduit Décoratif Paris : béton ciré, stuc, tadelakt & prix 2025 | Espace Design",
  description: "Enduit décoratif à Paris : béton ciré, stuc vénitien, tadelakt. Guide complet artisan 2025 — techniques, prix au m², entretien. Devis gratuit 48h.",
  keywords: [
    "enduit décoratif Paris",
    "béton ciré Paris",
    "stuc vénitien Paris",
    "tadelakt Paris",
    "prix enduit décoratif Paris",
    "artisan enduit Paris",
  ],
}

export default function ArticleEnduitDecoratifParis() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-12 bg-[#1C1C1C]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#D4AF37] text-[10px] font-light uppercase tracking-[0.25em] mb-4">
            Finitions &amp; Revêtements
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Enduit Décoratif à Paris : béton ciré, stuc, tadelakt — guide artisan 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Béton ciré, stuc vénitien ou tadelakt : l&apos;enduit décoratif transforme radicalement l&apos;ambiance d&apos;un appartement parisien. Chaque technique a ses spécificités, ses usages recommandés et ses prix. Guide complet pour choisir le bon enduit selon votre projet.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-[#1C1C1C] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { val: '80 €/m²', label: 'Prix mini béton ciré posé' },
              { val: '280 €/m²', label: 'Prix maxi tadelakt douche' },
              { val: '15 ans', label: 'Durée de vie moyenne' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-xl sm:text-2xl font-semibold text-[#D4AF37] mb-1">{s.val}</div>
                <div className="text-gray-500 text-[10px] uppercase tracking-wider font-light">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1 — Les différents types */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C]">
            Les différents types d&apos;enduits décoratifs
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            Le marché de l&apos;enduit décoratif à Paris regroupe trois grandes familles de produits, chacune avec une composition, un rendu et des usages spécifiques. Comprendre leurs différences est indispensable pour faire le bon choix selon votre pièce, votre style et votre budget.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {[
              {
                titre: "Béton ciré",
                detail: "Enduit à base de ciment et de résines, appliqué en couches fines (2 à 5 mm). Polyvalent, compatible sol et mur, disponible en une large palette de teintes. Le plus courant dans les rénovations parisiennes.",
              },
              {
                titre: "Stuc vénitien",
                detail: "Enduit à la chaux vive et marbres pilés, poli à la spatule pour un effet marbre brillant. Idéal pour les appartements haussmanniens. Plus technique à poser, avec plusieurs passages et un polissage minutieux.",
              },
              {
                titre: "Tadelakt",
                detail: "Enduit traditionnel marocain à la chaux hydraulique naturelle. Rendu mat légèrement texturé, imperméable grâce au polissage au savon noir. Indiqué en douche et hammam sans protection supplémentaire.",
              },
            ].map((item) => (
              <div key={item.titre} className="bg-[#FAFAF8] border border-gray-100 rounded-sm p-5">
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">{item.titre}</h3>
                <p className="text-gray-500 text-xs leading-relaxed font-light">{item.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            D&apos;autres enduits existent sur le marché — mortex, marmorino, venetian plaster — mais ces trois techniques représentent l&apos;essentiel des demandes chez Espace Design à Paris. Chacune peut être appliquée sur des supports variés : carrelage existant, placo, béton ou ancien enduit en bon état.
          </p>
        </div>
      </section>

      {/* Section 2 — Application et préparation */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C]">
            Application et préparation du support
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            La qualité d&apos;un enduit décoratif dépend à 70 % de la préparation du support. Un support mal préparé — fissuré, humide ou mal ancré — conduit inévitablement à des décollements, des fissures ou des irrégularités en surface dans les mois suivant la pose.
          </p>
          <div className="space-y-4">
            {[
              {
                step: "01",
                titre: "Diagnostic du support",
                detail: "Vérification de la planéité (tolérance 2 mm sous règle de 2 m), de l'absence d'humidité (mesure hygrométrique), solidité de l'ancien revêtement. Un carrelage avec sons creux doit être déposé avant application.",
              },
              {
                step: "02",
                titre: "Préparation et ragréage",
                detail: "Ponçage ou sablage, dépoussiérage complet, application d'un primaire d'accrochage. En cas d'irrégularités importantes, application d'un ragréage autolissant (béton ciré) ou d'un gobetis (stuc, tadelakt).",
              },
              {
                step: "03",
                titre: "Application des couches",
                detail: "Béton ciré : 2 à 3 couches au couteau, ponçage intermédiaire entre chaque. Stuc : 3 à 5 passages en croix, polissage progressif. Tadelakt : 2 couches + polissage au galet + application savon noir dans les 24h.",
              },
              {
                step: "04",
                titre: "Finition et protection",
                detail: "Béton ciré : 1 à 2 couches de cire ou résine de protection. Stuc : cire incolore en finition. Tadelakt : aucune protection chimique supplémentaire nécessaire — la chaux et le savon noir constituent une barrière naturelle.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-5 items-start">
                <span className="font-display text-[#D4AF37] text-lg font-semibold shrink-0 w-8">{item.step}</span>
                <div>
                  <h3 className="font-display text-sm font-semibold text-[#1C1C1C] mb-1">{item.titre}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed font-light">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Pièces recommandées */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C]">
            Quel enduit pour quelle pièce ?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            Le choix de l&apos;enduit dépend largement de la pièce concernée. Les contraintes d&apos;humidité, de trafic et d&apos;esthétique guident la sélection de la technique la plus appropriée.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left p-3 font-light uppercase tracking-wider">Pièce</th>
                  <th className="text-left p-3 font-light uppercase tracking-wider">Technique recommandée</th>
                  <th className="text-left p-3 font-light uppercase tracking-wider">Remarque</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { piece: "Salon / séjour", tech: "Béton ciré ou stuc vénitien", remarque: "Mur ou sol — toutes finitions possibles" },
                  { piece: "Cuisine", tech: "Béton ciré (mur) ou crédence stuc", remarque: "Résine anti-tache obligatoire derrière la gazinière" },
                  { piece: "Salle de bain (mur)", tech: "Béton ciré + résine hydrofuge", remarque: "Tadelakt si douche à l'italienne" },
                  { piece: "Douche / hammam", tech: "Tadelakt (1er choix)", remarque: "Imperméable sans résine additionnelle" },
                  { piece: "Chambre", tech: "Stuc vénitien ou béton ciré mat", remarque: "Finition mate recommandée pour effet cocooning" },
                  { piece: "Couloir / entrée", tech: "Béton ciré sol (trafic élevé)", remarque: "Résine polyuréthane pour résistance aux chocs" },
                ].map((r, i) => (
                  <tr key={r.piece} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="p-3 font-medium text-[#1C1C1C]">{r.piece}</td>
                    <td className="p-3 text-gray-600">{r.tech}</td>
                    <td className="p-3 text-gray-400 font-light">{r.remarque}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            Dans les appartements haussmanniens parisiens, le stuc vénitien s&apos;impose souvent dans le salon et les pièces de réception pour son caractère patrimonial. Le béton ciré, plus neutre, s&apos;adapte mieux aux rénovations contemporaines. Le tadelakt reste la référence dans les salles de bain haut de gamme.
          </p>
        </div>
      </section>

      {/* Section 4 — Prix au m² */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C]">
            Prix des enduits décoratifs à Paris en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            Les tarifs ci-dessous s&apos;entendent fourniture et pose comprises, hors dépose de l&apos;ancien revêtement et hors travaux de préparation du support si celui-ci nécessite un ragréage important.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                titre: "Béton ciré — sol",
                prix: "80 à 150 €/m²",
                detail: "2 à 3 couches + cire ou résine. Délai : 3 à 5 jours. Applicable sur carrelage existant.",
              },
              {
                titre: "Béton ciré — mur",
                prix: "90 à 180 €/m²",
                detail: "2 couches + résine hydrofuge en zone humide. Délai : 2 à 4 jours.",
              },
              {
                titre: "Stuc vénitien",
                prix: "120 à 200 €/m²",
                detail: "3 à 5 passes, polissage à la spatule. Délai : 4 à 6 jours pour 20 m².",
              },
              {
                titre: "Tadelakt",
                prix: "150 à 280 €/m²",
                detail: "Technique la plus longue — 2 couches + polissage + savon noir. Délai : 5 à 7 jours.",
              },
              {
                titre: "Ragréage préalable",
                prix: "15 à 30 €/m²",
                detail: "En supplément si le support n'est pas plan. Souvent nécessaire dans les appartements anciens.",
              },
              {
                titre: "Dépose ancien revêtement",
                prix: "8 à 15 €/m²",
                detail: "Carrelage ou ancien enduit. Génère des gravats — prévoir évacuation.",
              },
            ].map((item) => (
              <div key={item.titre} className="bg-white border border-gray-100 rounded-sm p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-sm font-semibold text-[#1C1C1C]">{item.titre}</h3>
                  <span className="text-[#D4AF37] font-display text-sm font-semibold">{item.prix}</span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed font-light">{item.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            À Paris, un mur de salon de 20 m² en béton ciré revient entre 1 800 et 3 600 €. Une salle de bain complète (murs + sol) en tadelakt de 6 m² coûte entre 2 700 et 5 000 €. Ces prix peuvent varier selon l&apos;accessibilité du chantier et la complexité des découpes (niches, angles, mobilier encastré).
          </p>
        </div>
      </section>

      {/* Section 5 — Entretien */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C]">
            Entretien des enduits décoratifs
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            L&apos;entretien d&apos;un enduit décoratif conditionne directement sa durée de vie. Un béton ciré mal entretenu se tache définitivement. Un tadelakt exposé à des produits acides perd son imperméabilité. Voici les règles essentielles à respecter.
          </p>
          <div className="space-y-3">
            {[
              {
                titre: "Béton ciré — nettoyage quotidien",
                detail: "Utilisez uniquement des produits à pH neutre (7). Évitez le vinaigre blanc, le citron et tous les détergents acides qui attaquent la résine de protection. Passez une serpillière légèrement humide — jamais d'eau en excès qui risque de s'infiltrer sous la cire.",
              },
              {
                titre: "Béton ciré — recharge de protection",
                detail: "Rechargez la cire ou la résine tous les 2 à 5 ans selon le trafic (sol) ou tous les 3 à 7 ans pour les murs. Un signe d'alerte : l'eau ne perle plus en surface. Avant rechargement, ponçage léger à grain 400 + dépoussiérage.",
              },
              {
                titre: "Stuc vénitien — entretien",
                detail: "Passez un chiffon doux et sec ou légèrement humide. Évitez tout produit abrasif. Appliquez une fine couche de cire naturelle incolore (cire d'abeille) tous les 2 à 3 ans pour préserver le brillant et la protection.",
              },
              {
                titre: "Tadelakt — entretien naturel",
                detail: "Nettoyez à l'eau claire et au savon noir (produit Beldi de préférence). Ce même savon noir rechargera imperceptiblement la surface à chaque nettoyage. Évitez totalement les produits acides (détartrants, vinaigre) qui dissolvent la chaux.",
              },
            ].map((item) => (
              <div key={item.titre} className="border-l-2 border-[#D4AF37]/40 pl-5">
                <h3 className="font-display text-sm font-semibold text-[#1C1C1C] mb-1">{item.titre}</h3>
                <p className="text-gray-500 text-xs leading-relaxed font-light">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-8">
            Questions fréquentes — Enduit décoratif Paris
          </h2>
          <div className="space-y-6">
            {schemaFAQ.mainEntity.map((faq) => (
              <div key={faq['@type']} className="border-b border-gray-100 pb-6">
                <h3 className="font-display text-sm font-semibold text-[#1C1C1C] mb-2">
                  {faq.name}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed font-light">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1C1C1C]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#D4AF37] text-[10px] font-light uppercase tracking-[0.25em] mb-4">
            Artisan Paris
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
            Votre projet d&apos;enduit décoratif à Paris
          </h2>
          <p className="text-gray-400 text-sm font-light leading-relaxed mb-8 max-w-xl mx-auto">
            Espace Design réalise béton ciré, stuc vénitien et tadelakt dans tous les arrondissements parisiens. Devis gratuit sous 48h, intervention rapide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-6 py-3 text-xs font-medium uppercase tracking-widest hover:bg-[#c9a632] transition-colors"
            >
              Demander un devis gratuit
              <ArrowRight className="w-3 h-3" />
            </Link>
            <a
              href="tel:+33611783867"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 text-xs font-light uppercase tracking-widest hover:border-white/40 transition-colors"
            >
              <Phone className="w-3 h-3" />
              06 11 78 38 67
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
