import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Aménagement Combles Perdus Paris', item: 'https://espacedesignparis.fr/blog/amenagement-combles-perdus-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Aménagement Combles Perdus Paris : isolation, plancher & prix 2025 | Espace Design',
  description: 'Aménager ses combles perdus à Paris : isolation soufflée ou rampant, trappe, plancher. Éligibilité MaPrimeRénov. Prix 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/amenagement-combles-perdus-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix pour isoler des combles perdus à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'isolation de combles perdus à Paris coûte entre 30 et 80 €/m² selon la technique choisie. L'isolation soufflée (ouate de cellulose ou laine minérale) est la moins chère : 30–50 €/m² pose comprise. L'isolation par panneaux rigides est plus coûteuse (50–80 €/m²) mais permet d'accéder aux combles après travaux. Pour des combles de 50 m², comptez 1 500–4 000 € selon la technique.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle résistance thermique R viser pour les combles perdus à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La réglementation thermique recommande R ≥ 7 m².K/W pour les combles perdus en rénovation, conformément aux exigences MaPrimeRénov 2025. En pratique, pour atteindre R7 avec de la ouate de cellulose (conductivité λ ≈ 0,038 W/m.K), il faut environ 27 cm d'épaisseur. Pour la laine de verre (λ ≈ 0,032 W/m.K), 22 cm suffisent. Ces épaisseurs sont facilement atteignables dans les combles perdus parisiens.",
      },
    },
    {
      '@type': 'Question',
      name: 'Les combles perdus sont-ils éligibles à MaPrimeRénov ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, l'isolation des combles perdus est l'un des travaux les mieux aidés de MaPrimeRénov 2025. Le montant de l'aide varie de 25 à 75 €/m² selon les revenus du foyer (ménages très modestes : jusqu'à 75 €/m²). Conditions : résistance thermique R ≥ 7 m².K/W, artisan RGE, logement construit depuis plus de 2 ans. Les Certificats d'Économies d'Énergie (CEE) sont également cumulables.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Aménagement Combles Perdus Paris : isolation, plancher & prix 2025 | Espace Design',
  description: 'Aménager ses combles perdus à Paris : isolation soufflée ou rampant, trappe, plancher. Éligibilité MaPrimeRénov. Prix 2025.',
}

export default function ArticleAmenagementComblesPerdus() {
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
            Isolation
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Aménagement Combles Perdus Paris : isolation, plancher &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Les combles perdus sont le premier poste de déperdition thermique d&apos;un logement parisien en dernier étage. Isolation soufflée, plancher intermédiaire, trappe d&apos;accès, aides MaPrimeRénov : guide complet pour optimiser vos combles en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Combles perdus vs aménageables */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Combles perdus vs combles aménageables : quelle différence ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Avant de lancer un projet, il est essentiel de distinguer les deux types de combles. Cette distinction conditionne entièrement la stratégie d&apos;isolation, le budget et les aides disponibles.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Dans les immeubles parisiens, les combles sont souvent collectifs et appartiennent à la copropriété. Seuls les copropriétaires du dernier étage peuvent avoir accès à des combles privatifs — à vérifier impérativement dans le règlement de copropriété et le titre de propriété.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Combles perdus (non aménageables)',
                  detail: 'Espace sous toiture inaccessible ou peu accessible, hauteur insuffisante pour être habité (généralement inférieure à 1,80 m). Idéal pour une isolation par soufflage ou par épandage de rouleaux. Coût faible, aides maximales, rendement énergétique excellent. C\'est la priorité absolue pour améliorer le DPE d\'un appartement en dernier étage.',
                },
                {
                  enjeu: 'Combles aménageables (habitables)',
                  detail: 'Espace avec une hauteur suffisante (au moins 1,80 m sur une partie significative) pour être transformé en pièce de vie. Isolation en rampant (entre ou sous les chevrons). Projet plus complexe et coûteux, nécessitant une étude structure et souvent des autorisations de copropriété. Potentiel : chambre, bureau, studio.',
                },
                {
                  enjeu: 'Combles mixtes (partiellement aménageables)',
                  detail: 'Configuration fréquente dans les immeubles haussmanniens parisiens : une partie mansardée habitable et une zone de faible hauteur sous la noue. La stratégie consiste à isoler les rampants de la partie habitable et le plancher de la partie basse. Nécessite un diagnostic précis avant chiffrage.',
                },
              ].map((el) => (
                <div key={el.enjeu} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.enjeu}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Isolation soufflée */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Isolation soufflée : ouate de cellulose et laine minérale
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;isolation par soufflage est la technique reine pour les combles perdus. Rapide à poser (1 journée pour 50 m²), peu invasive et très performante, elle représente le meilleur rapport coût/efficacité du marché pour ce type de configuration.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Ouate de cellulose soufflée',
                solution: 'Matériau biosourcé fabriqué à partir de papier recyclé. Excellente performance thermique (λ ≈ 0,038 W/m.K) et acoustique. Bonne régulation hygrométrique (respirant). Pour atteindre R7 : environ 27 cm d\'épaisseur. Produit éligible aux aides MaPrimeRénov et CEE.',
                cout: '35 – 55 €/m²',
              },
              {
                titre: 'Laine de verre soufflée',
                solution: 'Solution traditionnelle et économique. Conductivité thermique légèrement meilleure (λ ≈ 0,032 W/m.K). Pour atteindre R7 : environ 22 cm. Irritante à poser (protection individuelle requise), mais très efficace une fois en place. Éligible aux aides.',
                cout: '30 – 45 €/m²',
              },
              {
                titre: 'Laine de roche soufflée',
                solution: 'Résistante au feu (classée A1), idéale pour les immeubles parisiens avec exigences incendie. Légèrement plus lourde et moins souple que la laine de verre. λ ≈ 0,034 W/m.K. Pour R7 : environ 24 cm d\'épaisseur.',
                cout: '40 – 60 €/m²',
              },
              {
                titre: 'Panneaux rigides (accès conservé)',
                solution: 'Polyuréthane ou polyisocyanurate (PIR). λ ≈ 0,022–0,025 W/m.K — les isolants les plus performants par centimètre. Pour R7 : 15–16 cm. Posés en panneaux jointifs, ils permettent de conserver un accès aux combles pour rangement léger. Surcoût notable vs soufflage.',
                cout: '55 – 85 €/m²',
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.titre}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.cout}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.solution}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Plancher et trappe */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Plancher intermédiaire et trappe d&apos;accès isolée
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;isolation soufflée est efficace à condition que la trappe d&apos;accès aux combles soit elle aussi isolée — une trappe non traitée annule jusqu&apos;à 30 % des bénéfices de l&apos;isolation. Un plancher intermédiaire permet en outre de conserver un accès sécurisé aux combles pour les interventions de maintenance.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Trappe d\'accès isolée (modèle standard)',
                prix: '200 – 500 €',
                detail: 'Remplacement de la trappe existante par un modèle isolé avec joint périphérique. Les meilleures trappes atteignent un coefficient thermique Ud ≤ 0,5 W/m².K. Pose en une demi-journée. Souvent négligée lors de l\'isolation — pourtant indispensable pour ne pas créer un pont thermique majeur.',
              },
              {
                type: 'Trappe à échelle escamotable isolée',
                prix: '600 – 1 500 €',
                detail: 'Combine l\'accès aux combles par une échelle pliante intégrée et un panneau isolant performant. Idéal quand les combles sont utilisés pour le stockage ou les interventions techniques. Attention à la dimension de la trémie : prévoir au moins 60×120 cm pour un accès confortable.',
              },
              {
                type: 'Plancher de circulation légère',
                prix: '20 – 45 €/m²',
                detail: 'Pose de panneaux OSB ou de contreplaqué marine sur les solives, au-dessus de l\'isolant soufflé. Permet un accès sécurisé sans s\'enfoncer dans la laine. Surface limitée aux zones de circulation et de stockage léger. Non adapté pour un usage intensif (charge admissible à vérifier avec un bureau d\'études).',
              },
              {
                type: 'Barrière vapeur et pare-vapeur',
                prix: '5 – 15 €/m²',
                detail: 'Membrane frein-vapeur à poser sous l\'isolant soufflé dans les configurations humides (cuisines, salles de bain sous les combles). Évite la migration de la vapeur d\'eau vers l\'isolant et les problèmes de condensation interstitielle. Obligatoire dans les zones à risque.',
              },
            ].map((el) => (
              <div key={el.type} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.type}</div>
                  <div className="text-[#B8960C] text-sm font-medium flex-shrink-0">{el.prix}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Aides */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Aides MaPrimeRénov et CEE pour les combles perdus en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;isolation des combles perdus est l&apos;action la plus subventionnée de la politique de rénovation énergétique française. Le reste à charge peut être quasi nul pour les ménages modestes.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'MaPrimeRénov 2025 — combles perdus',
                prix: '25 – 75 €/m²',
                detail: 'Aide de l\'ANAH calculée sur la surface isolée. Barème 2025 : ménages très modestes (revenus très bas) jusqu\'à 75 €/m², ménages modestes jusqu\'à 50 €/m², revenus intermédiaires 25 €/m². Condition : R ≥ 7 m².K/W + artisan RGE. Démarche sur maprimerenov.gouv.fr AVANT signature du devis.',
              },
              {
                type: 'Certificats d\'Économies d\'Énergie (CEE)',
                prix: '10 – 30 €/m²',
                detail: 'Primes versées par les fournisseurs d\'énergie en complément de MaPrimeRénov. Montant variable selon les programmes. À demander avant travaux. Cumulable avec MaPrimeRénov sans plafond global pour les combles.',
              },
              {
                type: 'TVA réduite à 5,5 %',
                prix: 'Au lieu de 10 %',
                detail: 'Applicable sur la fourniture et la pose pour les logements de plus de 2 ans. Réduit mécaniquement le coût des travaux. L\'artisan RGE l\'applique directement sur la facture — aucune démarche supplémentaire.',
              },
              {
                type: 'Éco-PTZ (Prêt à Taux Zéro)',
                prix: "Jusqu'à 30 000 €",
                detail: 'Prêt sans intérêts pour financer le reste à charge. Sans condition de ressources. Obtenu auprès de votre banque habituelle sur présentation des devis RGE. Utile si les aides ne couvrent pas la totalité des travaux.',
              },
            ].map((el) => (
              <div key={el.type} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.type}</div>
                  <div className="text-[#B8960C] text-sm font-medium flex-shrink-0">{el.prix}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Budget */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Budget : prix d&apos;isolation de combles perdus à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent fourniture et pose comprise, pour des combles de 50 m² à Paris. Avant déduction des aides.
          </p>

          <div className="space-y-3 mb-8">
            {[
              {
                config: 'Laine de verre soufflée R7',
                detail: '50 m², épaisseur 22 cm',
                prix: '1 500 – 2 250 €',
              },
              {
                config: 'Ouate de cellulose soufflée R7',
                detail: '50 m², épaisseur 27 cm, biosourcé',
                prix: '1 750 – 2 750 €',
              },
              {
                config: 'Laine de roche soufflée R7',
                detail: '50 m², classement feu A1',
                prix: '2 000 – 3 000 €',
              },
              {
                config: 'Panneaux PIR R7 + accès conservé',
                detail: '50 m², panneaux rigides jointifs',
                prix: '2 750 – 4 250 €',
              },
              {
                config: 'Pack complet (isolation + trappe + plancher)',
                detail: '50 m² isolation + trappe isolée + plancher de circulation 10 m²',
                prix: '3 000 – 5 500 €',
              },
            ].map((row, i) => (
              <div
                key={row.config}
                className={`rounded-lg p-5 border border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-2 items-start ${i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}`}
              >
                <div className="font-medium text-[#1C1C1C] text-sm">{row.config}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{row.detail}</div>
                <div className="text-[#B8960C] text-sm font-medium sm:text-right">{row.prix}</div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              À vérifier avant de lancer les travaux
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Vérifier que les combles sont privatifs (titre de propriété + règlement copropriété)',
                'S\'assurer que la charpente est saine avant de poser l\'isolant',
                'Contrôler la présence d\'amiante (bâtiments construits avant 1997 — diagnostic obligatoire)',
                'Demander l\'accord de la copropriété si les combles sont collectifs',
                'Lancer la demande MaPrimeRénov AVANT de signer le bon de commande',
                'Choisir un artisan RGE — condition sine qua non pour toutes les aides',
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

      {/* FAQ */}
      <section className="py-16 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-6 text-center">Questions fréquentes</p>
          <div className="space-y-6">
            {schemaFaq.mainEntity.map((q) => (
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
              { href: '/isolation-paris', title: 'Isolation Paris' },
              { href: '/blog/isolation-thermique-appartement-paris', title: 'Isolation thermique appartement Paris' },
              { href: '/blog/renovation-combles-paris', title: 'Rénovation combles Paris' },
              { href: '/blog/renovation-fenetre-paris', title: 'Rénovation fenêtres Paris' },
              { href: '/blog/renovation-sous-sol-paris', title: 'Rénovation sous-sol Paris' },
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
      <section className="py-10 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Nos zones d&apos;intervention</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-9e', label: 'Paris 9e' },
              { href: '/renovation-paris-10e', label: 'Paris 10e' },
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-levallois-perret', label: 'Levallois' },
              { href: '/renovation-courbevoie', label: 'Courbevoie' },
              { href: '/renovation-saint-denis', label: 'Saint-Denis' },
              { href: '/renovation-pantin', label: 'Pantin' },
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
          Isolez vos combles perdus à Paris — devis gratuit
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Artisan RGE. Aide MaPrimeRénov incluse dans le dossier.
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
