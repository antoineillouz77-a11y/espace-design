import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Balcon Paris', item: 'https://espacedesignparis.fr/blog/renovation-balcon-paris' },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Balcon Paris : carrelage, étanchéité & prix 2025 | Espace Design',
  description:
    'Rénover son balcon à Paris : carrelage sur plots, lames composite, étanchéité, garde-corps. Prix au m² et guide complet 2025.',
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Balcon Paris : carrelage, étanchéité & prix 2025',
  description:
    'Rénover son balcon à Paris : carrelage sur plots, lames composite, étanchéité, garde-corps. Prix au m² et guide complet 2025.',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-balcon-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel revêtement choisir pour un balcon parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pour un balcon parisien, trois options s\'imposent : le carrelage grand format sur plots (60 à 120 €/m² posé, démontable, ne touche pas l\'étanchéité), les lames composite (35 à 80 €/m² posé, aucun entretien, esthétique bois) et le béton résine (40 à 70 €/m², ultra-plat, moderne). Sur un petit balcon (< 6 m²), le carrelage ou le béton résine sont préférés pour leur facilité de nettoyage. Sur un balcon plus grand, le composite ou le bois exotique apportent une vraie valeur ajoutée.',
      },
    },
    {
      '@type': 'Question',
      name: 'Faut-il refaire l\'étanchéité d\'un balcon à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'L\'étanchéité d\'un balcon parisien doit être vérifiée avant tout chantier de rénovation. Si le balcon est situé au-dessus d\'un appartement ou d\'un local, une étanchéité défaillante peut provoquer des infiltrations importantes. Les signes à surveiller : cloques sous le carrelage existant, moisissures sur le plafond du voisin du dessous, soulèvement des dalles. La reprise d\'étanchéité coûte entre 60 et 150 €/m² selon la technique (résine liquide ou membrane bitumineuse). Sur un balcon de 5 m², comptez 400 à 800 € pour l\'étanchéité seule.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte la rénovation d\'un balcon à Paris en 2025 ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La rénovation d\'un balcon parisien coûte entre 800 et 5 000 € selon la surface et les travaux. Pour un balcon de 4 m² : pose de carrelage sur plots sans reprise d\'étanchéité = 600 à 1 200 €. Pour un balcon de 8 m² avec reprise d\'étanchéité + composite + garde-corps : 3 000 à 6 000 €. Les postes les plus coûteux sont l\'étanchéité (si à refaire) et le remplacement du garde-corps (acier inox ou aluminium : 300 à 800 € le mètre linéaire posé).',
      },
    },
  ],
}

export default function ArticleRenovationBalconParis() {
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

      {/* Hero article */}
      <section className="pt-28 sm:pt-36 pb-12 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">
            Aménagement
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Rénovation Balcon Paris : carrelage, étanchéité &amp; prix 2025
          </h1>
          <p className="text-gray-500 text-sm font-light leading-relaxed">
            Le balcon est souvent le point faible d&apos;un appartement parisien : carrelage fissuré,
            étanchéité défaillante, garde-corps rouillé. Pourtant, bien rénové, il devient un
            véritable atout — prolongement naturel du salon, espace de détente en plein air.
            Ce guide complet vous donne toutes les clés pour réussir la rénovation de votre
            balcon à Paris, du choix du revêtement au budget final.
          </p>
        </div>
      </section>

      {/* Contenu article */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">

          {/* Section 1 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les types de balcons parisiens et leurs contraintes
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Avant de choisir un revêtement ou de planifier des travaux, il est important
              de comprendre la configuration de votre balcon. À Paris, on distingue quatre
              grandes typologies, chacune avec ses contraintes techniques spécifiques.
            </p>

            <div className="space-y-5">
              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Le balcon haussmannien filant
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Caractéristique des immeubles du XIX<sup>e</sup> siècle, ces balcons courent sur
                  toute la façade et peuvent atteindre 10 à 20 m². Leur dalle en pierre ou en
                  béton ancien est souvent en bon état structural, mais l&apos;étanchéité et le
                  carrelage sont fréquemment à reprendre. Le garde-corps en fonte forgée est
                  un élément patrimonial à conserver ou à restaurer — son remplacement
                  nécessite souvent une autorisation en secteur protégé.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Le balcon des années 60–80 en béton brut
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Ces balcons présentent souvent des problèmes de carbonatation du béton,
                  de fissures de façade et d&apos;étanchéité absente ou défaillante. La rénovation
                  est souvent plus lourde : ragréage de la dalle, reprise des joints de dilatation,
                  pose d&apos;une étanchéité liquide avant tout revêtement. Le garde-corps en tube
                  acier peut être rouillé et doit être traité ou remplacé.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  La loggia semi-couverte
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  La loggia (balcon encaissé dans la façade, partiellement abrité) bénéficie
                  d&apos;une protection naturelle contre la pluie et le soleil direct. Elle supporte
                  mieux les matériaux sensibles à l&apos;humidité (bois naturel non traité, résines
                  décoratives) et peut être aménagée comme une pièce de vie supplémentaire
                  avec un chauffage radiant ou un plafond chauffant si la surface le permet.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Le petit balcon contemporain (moins de 4 m²)
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Très fréquent dans les constructions des années 2000, ce type de balcon
                  dispose généralement d&apos;une étanchéité récente (résine ou membrane). La
                  rénovation se limite souvent au remplacement du revêtement usé (carreaux
                  éclatés, composite détérioré) et à la remise en état du garde-corps.
                  Budget généralement contenu : 600 à 2 000 €.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Revêtements de sol : les meilleures options pour un balcon parisien
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le revêtement de sol d&apos;un balcon doit résister aux cycles gel-dégel, à la pluie,
              aux UV et à l&apos;abrasion. Voici un comparatif des solutions les plus adaptées
              aux balcons parisiens, avec les prix de pose au m².
            </p>
            <ul className="space-y-3">
              {[
                {
                  poste: 'Carrelage grès cérame sur plots réglables',
                  fourchette: '60 à 120 €/m²',
                  detail: 'Solution idéale pour les balcons en copropriété : ne touche pas l\'étanchéité existante, démontable, esthétique soignée. Carreaux grand format (60×60 cm ou 80×80 cm), finition antidérapante R11 recommandée. Compatible avec l\'accès aux évacuations.',
                },
                {
                  poste: 'Lames composites sur lambourdes aluminium',
                  fourchette: '35 à 80 €/m²',
                  detail: 'Légères, sans entretien, imputrescibles. Les fixations invisibles donnent un rendu épuré. Très appréciées sur les balcons haussmanniens rénovés. Attention au choix des lambourdes aluminium (et non bois) pour éviter tout risque d\'humidité sous-plancher.',
                },
                {
                  poste: 'Béton résine / béton ciré extérieur',
                  fourchette: '40 à 70 €/m²',
                  detail: 'Revêtement continu sans joint, ultra-plat. Idéal sur les petits balcons contemporains où l\'on veut un sol homogène avec l\'intérieur. Nécessite un traitement hydrofuge et anti-UV tous les 3 à 5 ans. Non recommandé sur les balcons très exposés au soleil direct (risque de cloquage).',
                },
                {
                  poste: 'Bois exotique massif (ipé, cumaru)',
                  fourchette: '80 à 150 €/m²',
                  detail: 'Rendu chaleureux et naturel, incomparable sur les grands balcons haussmanniens. Nécessite une huile de protection annuelle. Certification FSC/PEFC obligatoire pour garantir une origine responsable. Non recommandé sur les balcons nord ou très humides.',
                },
              ].map((item) => (
                <li key={item.poste} className="bg-[#FAFAF8] rounded-lg p-4 border border-gray-100">
                  <div className="flex justify-between items-start mb-1">
                    <div className="font-medium text-[#1C1C1C] text-sm">{item.poste}</div>
                    <div className="text-[#B8960C] text-sm font-medium whitespace-nowrap ml-4">{item.fourchette}</div>
                  </div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{item.detail}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Étanchéité de balcon à Paris : diagnostic et solutions
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              L&apos;étanchéité est le point critique de tout balcon parisien situé au-dessus
              d&apos;un espace habité. Un défaut d&apos;étanchéité peut provoquer des infiltrations
              chez le voisin du dessous, des dégâts des eaux coûteux et des conflits de
              copropriété. Voici les étapes clés et les solutions disponibles.
            </p>
            <ul className="space-y-3">
              {[
                {
                  flag: 'Diagnostic visuel et test à l\'eau',
                  detail: 'Avant tout chantier, un artisan qualifié inspecte l\'état de l\'étanchéité existante : cloques, fissures, défaut aux relevés, évacuations bouchées. Le test à l\'eau (bouchage des évacuations + remplissage de 24h) confirme l\'absence de fuite. Gratuit chez Espace Design.',
                },
                {
                  flag: 'Étanchéité liquide polyuréthane',
                  detail: 'Application à la brosse en 2 à 3 couches croisées, sans soudure ni chalumeau. Idéale pour les formes complexes (angles, évacuations, relevés) et les petits balcons. Temps de séchage : 24 à 48h avant pose du revêtement. Prix : 60 à 100 €/m².',
                },
                {
                  flag: 'Membrane bitumineuse bicouche soudée',
                  detail: 'Solution la plus durable pour les grandes surfaces. La membrane est soudée à la flamme sur la dalle nettoyée et ragréée. Durée de vie : 20 à 30 ans. Nécessite un artisan certifié. Prix : 80 à 150 €/m² fourniture et pose.',
                },
                {
                  flag: 'Relevés d\'étanchéité aux jonctions',
                  detail: 'Les relevés (raccordements entre la dalle et le mur) sont le point de faiblesse principal. Ils doivent être remontés à au moins 15 cm au-dessus du niveau fini du sol. Un relevé mal exécuté est la première cause d\'infiltration sur les balcons parisiens.',
                },
              ].map((item) => (
                <li key={item.flag} className="flex gap-3">
                  <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#1C1C1C] text-sm font-medium">{item.flag} : </span>
                    <span className="text-gray-600 text-sm font-light">{item.detail}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Garde-corps : sécurité, réglementation et esthétique
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le garde-corps d&apos;un balcon parisien doit répondre à des normes de sécurité strictes
              (hauteur minimale 1 m, résistance à la poussée, écartement des barreaux) et
              s&apos;intégrer harmonieusement à l&apos;esthétique de l&apos;immeuble. Voici les principales
              options et leurs coûts.
            </p>
            <ul className="space-y-3">
              {[
                {
                  poste: 'Restauration garde-corps fonte ou fer forgé ancien',
                  fourchette: '150 à 400 €/ml',
                  detail: 'Décapage, traitement antirouille, peinture époxy ou laque : le garde-corps d\'origine retrouve son éclat. Indispensable sur les balcons haussmanniens en secteur patrimonial où le remplacement peut être refusé par l\'ABF.',
                },
                {
                  poste: 'Garde-corps aluminium laqué',
                  fourchette: '300 à 600 €/ml',
                  detail: 'Solution moderne, légère et sans entretien. Disponible dans toutes les couleurs (RAL), avec barreaudage vertical, horizontal ou remplissage verre. Fabrication sur mesure. Pose sur scellement chimique ou platines.',
                },
                {
                  poste: 'Garde-corps inox brossé avec remplissage verre',
                  fourchette: '500 à 900 €/ml',
                  detail: 'Rendu très contemporain, ne masque pas la vue. Le verre trempé feuilleté (12 mm minimum) offre sécurité et transparence. Prisé sur les appartements haut de gamme et les penthouses parisiens. Entretien : nettoyage régulier du verre.',
                },
                {
                  poste: 'Garde-corps verre seul (fixation par pinces)',
                  fourchette: '600 à 1 100 €/ml',
                  detail: 'Remplissage en verre sans montants latéraux — effet minimaliste maximum. Contraintes : dalle support de qualité requise pour les fixations, verre extra-clair recommandé pour limiter le reflet verdâtre. Réglementation stricte sur l\'ancrage.',
                },
              ].map((item) => (
                <li key={item.poste} className="bg-[#FAFAF8] rounded-lg p-4 border border-gray-100">
                  <div className="flex justify-between items-start mb-1">
                    <div className="font-medium text-[#1C1C1C] text-sm">{item.poste}</div>
                    <div className="text-[#B8960C] text-sm font-medium whitespace-nowrap ml-4">{item.fourchette}</div>
                  </div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{item.detail}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Prix complets d&apos;une rénovation de balcon à Paris en 2025
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Pour vous aider à cadrer votre budget, voici des exemples concrets de projets
              de balcon à Paris, du chantier minimal au projet complet haut de gamme.
            </p>
            <ul className="space-y-3">
              {[
                {
                  poste: 'Balcon 4 m² — remplacement carrelage sans étanchéité',
                  fourchette: '600 à 1 200 €',
                  detail: 'Dépose de l\'ancien carrelage + pose carrelage grès cérame sur plots existants en bon état. Étanchéité vérifiée et conservée. Budget le plus courant pour un petit balcon parisien en bon état.',
                },
                {
                  poste: 'Balcon 6 m² — étanchéité + composite + garde-corps aluminium',
                  fourchette: '3 500 à 6 000 €',
                  detail: 'Ragréage dalle + étanchéité liquide polyuréthane + lames composite premium + remplacement garde-corps aluminium laqué (4 ml). Projet de rénovation complet le plus demandé à Paris.',
                },
                {
                  poste: 'Balcon 10 m² — membrane bitumineuse + carrelage grand format + verre',
                  fourchette: '7 000 à 14 000 €',
                  detail: 'Grand balcon haussmannien : dépose complète, membrane bicouche soudée, carrelage grès cérame 80×80 cm sur plots, garde-corps inox avec remplissage verre feuilleté. Finition haut de gamme.',
                },
                {
                  poste: 'Loggia 12 m² — aménagement complet avec chauffage et éclairage',
                  fourchette: '10 000 à 22 000 €',
                  detail: 'Projet d\'extension habitable : étanchéité, revêtement composite ou carrelage, garde-corps vitré, éclairage encastré LED, chauffage radiant plafond ou mural. La loggia devient une pièce de vie à part entière.',
                },
              ].map((item) => (
                <li key={item.poste} className="bg-[#FAFAF8] rounded-lg p-4 border border-gray-100">
                  <div className="flex justify-between items-start mb-1">
                    <div className="font-medium text-[#1C1C1C] text-sm">{item.poste}</div>
                    <div className="text-[#B8960C] text-sm font-medium whitespace-nowrap ml-4">{item.fourchette}</div>
                  </div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{item.detail}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-6">
              Questions fréquentes — Rénovation balcon Paris
            </h2>
            <div className="space-y-4">
              {schemaFaq.mainEntity.map((item) => (
                <div key={item.name} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-2">{item.name}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{item.acceptedAnswer.text}</div>
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
              { href: '/amenagement-interieur-paris', title: 'Aménagement intérieur Paris — Espace Design' },
              { href: '/blog/renovation-terrasse-paris', title: 'Rénovation terrasse Paris — guide 2025' },
              { href: '/blog/carrelage-appartement-paris', title: 'Carrelage appartement Paris — guide 2025' },
              { href: '/blog/decoration-interieure-paris', title: 'Décoration intérieure Paris — guide 2025' },
              { href: '/blog/renovation-cave-paris', title: 'Rénovation cave Paris — guide 2025' },
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
              { href: '/renovation-paris-7e', label: 'Paris 7e' },
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
              { href: '/renovation-saint-cloud', label: 'Saint-Cloud' },
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
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
          Vous rénovez un balcon à Paris ?
        </h2>
        <p className="text-gray-400 text-sm font-light mb-8">
          Devis gratuit et détaillé sous 48h. Déplacement sans engagement dans tout Paris et petite couronne.
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
