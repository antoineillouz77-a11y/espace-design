import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Plancher chauffant Paris', item: 'https://espacedesignparis.fr/blog/renovation-plancher-chauffant-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Plancher Chauffant Paris : installation, types & prix artisan 2025",
  description: "Plancher chauffant hydraulique ou électrique à Paris : compatibilité des revêtements, coût d'exploitation, installation et prix 2025 par artisan qualifié.",
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-plancher-chauffant-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Plancher chauffant hydraulique ou électrique ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le plancher chauffant hydraulique (eau chaude) est plus efficace energetiquement et moins couteux a l'usage — ideal si vous avez deja une chaudiere ou une pompe a chaleur. Il necessite cependant un chantier plus lourd (dalle beton). Le plancher chauffant electrique (par resistance) est plus simple a installer en renovation et moins cher a poser, mais le cout d'exploitation est 2 a 3 fois superieur. Il est particulierement adapte aux petites surfaces (salle de bain, cuisine).",
      },
    },
    {
      '@type': 'Question',
      name: "Combien coûte un plancher chauffant à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix d'installation d'un plancher chauffant electrique varie de 80 a 150 euros par m2 (fourniture et pose). Le plancher chauffant hydraulique revient a 100 a 200 euros par m2 hors depose du sol existant. Pour un appartement parisien de 70 m2, comptez 6 000 a 14 000 euros selon le type et les contraintes de chantier.",
      },
    },
    {
      '@type': 'Question',
      name: "Peut-on mettre du parquet sur un plancher chauffant ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, mais pas n'importe quel parquet. Le parquet flottant en stratifie ou contrecolle (epaisseur max 16 mm) est compatible. Le parquet massif en bois franc (chene, hetre) est deconseille car il se deforme sous l'effet de la chaleur. Le parquet contrecolle colle est la meilleure option sur plancher chauffant hydraulique. Verifiez toujours la mention 'compatible plancher chauffant' sur la fiche produit.",
      },
    },
    {
      '@type': 'Question',
      name: "Combien de temps durent les travaux d'installation d'un plancher chauffant ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour un plancher chauffant electrique en renovation (sans depose de dalle), comptez 1 a 2 jours par piece. Pour un plancher chauffant hydraulique avec depose de carrelage et coulage d'une chape nouvelle, prevoyez 5 a 10 jours de chantier plus 28 jours de sechage de la dalle avant pose du revetement final.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Plancher Chauffant Paris : installation, types & prix artisan 2025",
  description: "Plancher chauffant hydraulique ou électrique à Paris : compatibilité des revêtements, coût d'exploitation, installation et prix 2025. Devis artisan Paris.",
  keywords: [
    'plancher chauffant Paris',
    'installation plancher chauffant Paris',
    'plancher chauffant hydraulique Paris',
    'plancher chauffant électrique Paris',
    'prix plancher chauffant Paris 2025',
    'chauffage au sol Paris',
    'artisan chauffage Paris',
    'parquet plancher chauffant Paris',
  ],
}

export default function ArticlePlancherChauffantParis() {
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
            Chauffage & Rénovation
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Plancher Chauffant Paris : tout savoir pour votre projet
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Hydraulique ou électrique, compatible parquet ou carrelage, coût d&apos;exploitation et prix d&apos;installation : le guide complet du plancher chauffant à Paris en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Types */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Plancher chauffant hydraulique vs électrique : lequel choisir ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Le choix entre les deux technologies dépend principalement de votre installation de chauffage existante, de la surface à traiter et du budget disponible pour les travaux. Voici les différences essentielles.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1C1C1C] text-white">
                    <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Critère</th>
                    <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Hydraulique</th>
                    <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Électrique</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { critere: "Coût d'installation", hydraulique: '100 – 200 €/m²', electrique: '80 – 150 €/m²' },
                    { critere: "Coût d'exploitation", hydraulique: 'Faible (eau chaude)', electrique: '2 à 3× plus élevé' },
                    { critere: 'Chantier', hydraulique: 'Lourd (chape béton)', electrique: 'Léger (renovation)' },
                    { critere: 'Source d\'énergie', hydraulique: 'Chaudière / PAC', electrique: 'Réseau électrique' },
                    { critere: 'Temps de chauffe', hydraulique: '1 à 2 heures', electrique: '30 à 45 min' },
                    { critere: 'Idéal pour', hydraulique: 'Grande surface (>50 m²)', electrique: 'Salle de bain / cuisine' },
                  ].map((row, i) => (
                    <tr key={row.critere} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                      <td className="px-4 py-3 text-[#1C1C1C] font-medium text-sm">{row.critere}</td>
                      <td className="px-4 py-3 text-center text-gray-600 font-light">{row.hydraulique}</td>
                      <td className="px-4 py-3 text-center text-gray-600 font-light">{row.electrique}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-xs font-light italic">
              Pour un appartement parisien à rénover intégralement, le plancher chauffant hydraulique couplé à une pompe à chaleur est la solution la plus rentable à long terme.
            </p>
          </div>

          {/* Détail hydraulique */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Plancher chauffant hydraulique : fonctionnement et installation
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Le plancher chauffant hydraulique (PCH) fait circuler de l&apos;eau chaude entre 25 et 45°C dans des tubes en polyéthylène noyés dans une chape béton. Basse température, il s&apos;associe idéalement avec une pompe à chaleur ou une chaudière à condensation.
            </p>
            <div className="space-y-3">
              {[
                "Température de départ eau : 30 à 45°C (vs 70°C pour les radiateurs) — économies d'énergie de 10 à 30 %",
                "Tubes en polyéthylène réticulé (PER) ou polybutylène, espacement 10 à 20 cm selon la puissance souhaitée",
                "Chape allégée (anhydrite) ou chape béton : épaisseur 5 à 8 cm au-dessus des tubes",
                "Collecteur de distribution réglable par pièce pour un zonage précis de la température",
                "Compatible avec chaudière à condensation, PAC air-eau ou géothermique, solaire thermique",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600 font-light list-none">
                  <span className="text-[#D4AF37] font-medium flex-shrink-0">→</span>
                  {item}
                </li>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Compatibilité revêtements */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Compatibilité des revêtements avec le plancher chauffant
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Tous les revêtements de sol ne sont pas compatibles avec un plancher chauffant. La résistance thermique du revêtement (notée R) doit être inférieure à 0,15 m².K/W pour un fonctionnement optimal. Voici le classement par revêtement.
            </p>
            <div className="space-y-4">
              {[
                {
                  revetement: 'Carrelage (recommandé)',
                  compatibilite: 'Idéal',
                  detail: "Le carrelage est le revêtement le plus conducteur thermiquement (résistance R ≈ 0,02). Il monte rapidement en température, stocke la chaleur et la restitue progressivement. En grands formats (60×60 ou 80×80), il maximise la surface d'échange. C'est la solution de référence pour les salles de bain et les cuisines avec plancher chauffant.",
                },
                {
                  revetement: 'Sol vinyle / LVT (compatible)',
                  compatibilite: 'Compatible',
                  detail: "Les dalles vinyle LVT (Luxury Vinyl Tile) de qualité sont compatibles avec le plancher chauffant à condition de respecter la température de surface maximale (28°C en zone de vie, 33°C en salle de bain). Vérifiez la mention « compatible plancher chauffant » sur la fiche technique. Résistance R ≈ 0,05 à 0,10.",
                },
                {
                  revetement: 'Parquet contrecollé collé (compatible avec précautions)',
                  compatibilite: 'Compatible avec conditions',
                  detail: "Le parquet contrecollé (épaisseur ≤ 16 mm) collé directement sur la chape est la meilleure option bois sur plancher chauffant. L'essentiel est de respecter les cycles de montée en température progressifs (ne pas dépasser 5°C/jour) et de choisir des essences stables (chêne européen, noyer). Évitez le parquet massif épais.",
                },
                {
                  revetement: 'Parquet massif (déconseillé)',
                  compatibilite: 'Déconseillé',
                  detail: "Le bois massif (épaisseur > 18 mm) se dilate et se rétracte excessivement sous l'effet de la chaleur, provoquant des gonflements et des fissures entre les lames. Si vous souhaitez absolument l'aspect bois massif, limitez-vous à de l'ipé ou du chêne en petites largeurs (< 80 mm) et acceptez un risque de jours entre lames en hiver.",
                },
                {
                  revetement: 'Moquette / liège (incompatible)',
                  compatibilite: 'Incompatible',
                  detail: "La moquette et le liège sont des isolants thermiques — ils empêchent la chaleur de rayonner vers la pièce et surchauffent le plancher, risquant d'endommager les tubes. Résistance thermique trop élevée (R > 0,15). À proscrire absolument sur un plancher chauffant.",
                },
              ].map((el) => (
                <div key={el.revetement} className="bg-white rounded-lg p-5 border border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="font-medium text-[#1C1C1C] text-sm">{el.revetement}</div>
                    <span className={`text-xs px-2 py-0.5 rounded font-light ${
                      el.compatibilite === 'Idéal' ? 'bg-green-50 text-green-700' :
                      el.compatibilite === 'Compatible' ? 'bg-blue-50 text-blue-700' :
                      el.compatibilite === 'Compatible avec conditions' ? 'bg-amber-50 text-amber-700' :
                      'bg-red-50 text-red-700'
                    }`}>{el.compatibilite}</span>
                  </div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Installation & chantier */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Installation d&apos;un plancher chauffant à Paris : les étapes du chantier
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              L&apos;installation d&apos;un plancher chauffant hydraulique en rénovation est un chantier significatif qui mobilise plusieurs corps de métier. Espace Design coordonne plombiers, carreleurs et électriciens pour un résultat sans mauvaise surprise.
            </p>
            <ol className="space-y-3">
              {[
                {
                  etape: 'Diagnostic et plan de calepinage',
                  detail: "Relevé des surfaces, hauteur sous plafond disponible (le plancher chauffant « mange » 8 à 12 cm de hauteur), emplacement du collecteur et du circuit hydraulique. Vérification de la compatibilité avec la chaudière ou la PAC existante.",
                },
                {
                  etape: 'Dépose du sol existant',
                  detail: "Dépose du carrelage ou du parquet à la disqueuse ou au marteau piqueur. Évacuation des gravats (accès escalier en copropriété parisienne — logistique souvent sous-estimée). Préparation et ragréage du support béton.",
                },
                {
                  etape: 'Pose de l\'isolation sous-dalle',
                  detail: "Panneau isolant (polystyrène expansé min. 5 cm) posé sur toute la surface pour éviter les déperditions vers le bas. Obligatoire pour les planchers sur terre-plein ou sur cave non chauffée, fortement recommandé en inter-logement.",
                },
                {
                  etape: 'Pose et raccordement des tubes',
                  detail: "Déroulage des tubes PER en serpentin (espacement 10 à 15 cm), fixation sur le treillis ou les agrafes, raccordement au collecteur de distribution. Test de pression à l'eau (6 bars minimum) avant coulage.",
                },
                {
                  etape: 'Coulage de la chape',
                  detail: "Coulage de la chape ciment (5 à 7 cm) ou anhydrite (4 à 6 cm) en maintenant les tubes sous pression. Séchage de la chape : minimum 28 jours pour le ciment, 7 jours pour l'anhydrite avant premier démarrage progressif du plancher.",
                },
                {
                  etape: 'Mise en route progressive et pose du revêtement',
                  detail: "Montée en température progressive sur 7 jours (5°C/jour max). Vérification de l'absence de fuite et du bon équilibrage du circuit. Pose du revêtement final (carrelage, parquet, vinyle) une fois la chape sèche et le circuit validé.",
                },
              ].map((el, i) => (
                <li key={el.etape} className="flex gap-4 bg-[#FAFAF8] rounded-lg p-4 border border-gray-100">
                  <span className="font-display text-lg font-semibold text-[#D4AF37]/50 flex-shrink-0 w-6">{i + 1}</span>
                  <div>
                    <div className="font-medium text-[#1C1C1C] text-sm mb-1">{el.etape}</div>
                    <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Avantages vs radiateurs */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Plancher chauffant vs radiateurs : les avantages concrets
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Au-delà du confort, le plancher chauffant présente des avantages économiques et pratiques qui en font une solution de plus en plus prisée dans les rénovations parisiennes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Confort thermique homogène : chaleur répartie sur toute la surface (vs points chauds des radiateurs)",
                "Économies d'énergie : 10 à 30 % vs radiateurs électriques grâce à la basse température",
                "Espace libéré : suppression des radiateurs mural — gain de place et liberté d'aménagement",
                "Qualité de l'air améliorée : pas de convection d'air chaud (poussières et allergènes moins transportés)",
                "Valorisation du bien : argument fort pour la vente ou la location dans le contexte DPE",
                "Silence total : aucun bruit de circulation d'eau à haute pression comme les anciens radiateurs fonte",
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

      {/* Section 4 — Prix */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix installation plancher chauffant Paris 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le coût d&apos;un plancher chauffant à Paris dépend du type (hydraulique ou électrique), de la surface, de la nécessité de déposer le sol existant et des contraintes d&apos;accès propres aux immeubles parisiens.
          </p>
          <div className="space-y-3">
            {[
              {
                cas: 'Plancher chauffant électrique — salle de bain (8 m²)',
                prix: '800 – 1 200 €',
                detail: 'Câble chauffant ou film + thermostat, sans dépose carrelage',
              },
              {
                cas: 'Plancher chauffant électrique — T3 complet (60 m²)',
                prix: '5 000 – 9 000 €',
                detail: 'Dépose sol existant + câbles chauffants + chape + revêtement inclus',
              },
              {
                cas: 'Plancher chauffant hydraulique — T2 (45 m²)',
                prix: '6 000 – 10 000 €',
                detail: 'Tubes PER + collecteur + chape, hors raccordement chaudière/PAC',
              },
              {
                cas: 'Plancher chauffant hydraulique — T4 haussmannien (90 m²)',
                prix: '12 000 – 20 000 €',
                detail: 'Dépose parquet + isolation + tubes + chape + carrelage grand format',
              },
            ].map((row, i) => (
              <div key={i} className="bg-white rounded-lg p-5 border border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <div className="font-medium text-[#1C1C1C] text-sm mb-1">{row.cas}</div>
                  <div className="text-gray-500 text-xs font-light">{row.detail}</div>
                </div>
                <div className="text-[#D4AF37] font-semibold text-sm flex-shrink-0">{row.prix}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-xs font-light italic mt-4">
            Prix indicatifs fourniture et pose incluses. Hors raccordement à la chaudière ou PAC existante (compter 500 à 1 500 € supplémentaires selon la distance au local technique).
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-8 text-center">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Plancher chauffant hydraulique ou électrique ?",
                r: "Le plancher chauffant hydraulique (eau chaude) est plus efficace énergétiquement et moins coûteux à l'usage — idéal si vous avez déjà une chaudière ou une pompe à chaleur. Il nécessite cependant un chantier plus lourd (dalle béton). Le plancher chauffant électrique est plus simple à installer en rénovation, mais le coût d'exploitation est 2 à 3 fois supérieur. Il est particulièrement adapté aux petites surfaces (salle de bain, cuisine).",
              },
              {
                q: "Combien coûte un plancher chauffant à Paris ?",
                r: "Le prix d'installation d'un plancher chauffant électrique varie de 80 à 150 € par m² (fourniture et pose). Le plancher chauffant hydraulique revient à 100 à 200 € par m² hors dépose du sol existant. Pour un appartement parisien de 70 m², comptez 6 000 à 14 000 € selon le type et les contraintes de chantier.",
              },
              {
                q: "Peut-on mettre du parquet sur un plancher chauffant ?",
                r: "Oui, mais pas n'importe quel parquet. Le parquet contrecollé collé (épaisseur max 16 mm) est compatible. Le parquet massif épais (> 18 mm) est déconseillé car il se déforme sous l'effet de la chaleur. Le parquet contrecollé est la meilleure option sur plancher chauffant hydraulique. Vérifiez toujours la mention « compatible plancher chauffant » sur la fiche produit.",
              },
              {
                q: "Combien de temps durent les travaux d'installation d'un plancher chauffant ?",
                r: "Pour un plancher chauffant électrique en rénovation (sans dépose de dalle), comptez 1 à 2 jours par pièce. Pour un plancher chauffant hydraulique avec dépose de carrelage et coulage d'une chape nouvelle, prévoyez 5 à 10 jours de chantier plus 28 jours de séchage de la dalle avant pose du revêtement final.",
              },
            ].map((item) => (
              <div key={item.q} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{item.q}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{item.r}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voir aussi */}
      <section className="py-12 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Voir aussi</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/plomberie-paris', title: 'Plomberie Paris' },
              { href: '/blog/chauffage-appartement-paris', title: 'Chauffage appartement Paris' },
              { href: '/blog/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain Paris' },
              { href: '/blog/budget-renovation-appartement-paris', title: 'Budget rénovation appartement' },
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
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
          Vous souhaitez installer un plancher chauffant à Paris ?
        </h2>
        <p className="text-gray-400 text-sm font-light mb-8">
          Diagnostic gratuit sur place. Devis sous 48h. Coordination complète du chantier.
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
