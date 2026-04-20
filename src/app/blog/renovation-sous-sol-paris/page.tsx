import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Sous-Sol Paris', item: 'https://espacedesignparis.fr/blog/renovation-sous-sol-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Sous-Sol Paris : aménagement, humidité & prix 2025 | Espace Design',
  description: 'Aménager un sous-sol à Paris : traitement humidité, isolation, éclairage, cloisons. Prix et guide artisan 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-sous-sol-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix pour aménager un sous-sol à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'aménagement d'un sous-sol à Paris varie de 2 000 à 20 000 € selon l'état du local et les travaux nécessaires. Un nettoyage + peinture basique peut se limiter à 2 000–4 000 €. Un aménagement complet avec traitement humidité, isolation, cloisons et éclairage coûte 8 000–15 000 €. Pour une transformation en pièce de vie ou studio, comptez 12 000–20 000 €.",
      },
    },
    {
      '@type': 'Question',
      name: 'Comment traiter l\'humidité dans un sous-sol parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le traitement de l'humidité dans un sous-sol parisien dépend de la source d'eau. Pour une humidité de condensation : améliorer la ventilation (VMC) et isoler les parois froides. Pour une humidité par capillarité (remontées depuis le sol) : cuvelage des murs avec mortier d'étanchéité ou membrane, et drainage périphérique. Pour des infiltrations par les joints ou fissures : injection de résine ou colmatage. Le cuvelage complet d'un sous-sol de 20 m² coûte entre 3 000 et 8 000 €.",
      },
    },
    {
      '@type': 'Question',
      name: 'Faut-il un permis de construire pour aménager son sous-sol à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour un simple réaménagement intérieur sans création de surface habitable supplémentaire, aucun permis n'est nécessaire. Si vous créez de nouvelles fenêtres ou modifiez l'aspect extérieur, une déclaration préalable de travaux est requise. En copropriété, une autorisation de l'assemblée générale est indispensable pour tout travaux touchant les parties communes ou la structure de l'immeuble. Renseignez-vous auprès de votre syndic et de la mairie de Paris.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Sous-Sol Paris : aménagement, humidité & prix 2025 | Espace Design',
  description: 'Aménager un sous-sol à Paris : traitement humidité, isolation, éclairage, cloisons. Prix et guide artisan 2025.',
}

export default function ArticleRenovationSousSol() {
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
            Aménagement
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Sous-Sol Paris : aménagement, humidité &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Cave voutée, parking converti, local technique : les sous-sols parisiens recèlent un potentiel souvent inexploité. Humidité, obscurité, isolation défaillante — guide complet pour transformer votre sous-sol en espace fonctionnel en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Types de sous-sols */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les types de sous-sols parisiens et leurs contraintes
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Paris possède une grande diversité de sous-sols, héritage de siècles de construction. Chaque configuration implique des contraintes spécifiques et des solutions adaptées. Avant tout projet, un diagnostic complet du local est indispensable.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              La proximité de la nappe phréatique (variable selon les arrondissements), la nature des fondations de l&apos;immeuble et l&apos;état des murs de pierres ou de béton conditionnent directement la faisabilité et le budget des travaux.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Cave voutée en pierre (immeubles haussmanniens)',
                  detail: 'Configuration la plus répandue dans Paris intra-muros. Murs en moellons calcaires, voûte en brique ou pierre, sol en terre battue ou carrelage ancien. Humidité naturellement présente. Hauteur sous plafond souvent limitée à 2,00–2,20 m. Potentiel : cave à vin, salle de sport, buanderie ou atelier.',
                },
                {
                  enjeu: 'Sous-sol béton (immeubles des années 1960–1980)',
                  detail: 'Murs et plafond en béton brut, sol en béton. Humidité par condensation fréquente. Hauteur sous plafond généralement plus confortable (2,20–2,50 m). Accès souvent collectif par couloirs ou parkings. Potentiel d\'aménagement plus large (bureau, chambre d\'appoint, salle de jeux).',
                },
                {
                  enjeu: 'Local technique ou parking privatif',
                  detail: 'Box ou place de parking reconvertie en espace de rangement ou de vie. Accès direct depuis l\'immeuble ou depuis la rue. Attention aux réglementations de copropriété sur le changement de destination. Isolation thermique et phonique vis-à-vis du reste du parking collectif est un enjeu majeur.',
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

      {/* Section 2 — Traitement humidité */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Traitement de l&apos;humidité : cuvelage, drainage et ventilation
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;humidité est la problématique numéro un des sous-sols parisiens. Elle peut prendre plusieurs formes : condensation liée à un défaut de ventilation, remontées capillaires depuis le sol ou les fondations, ou infiltrations par les joints et fissures. Chaque source nécessite une solution différente.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Cuvelage des murs',
                solution: 'Application d\'un mortier d\'étanchéité ou d\'une membrane imperméabilisante sur les parois. Traite les remontées capillaires et les infiltrations latérales. Solution la plus pérenne pour les sous-sols proches de la nappe phréatique.',
                cout: '80 – 180 €/m²',
              },
              {
                titre: 'Drainage périphérique',
                solution: 'Pose d\'un drain en pied de mur relié à une pompe de relevage. Évacue les eaux d\'infiltration avant qu\'elles n\'atteignent la surface habitable. Recommandé pour les sous-sols très humides ou en zone inondable.',
                cout: '3 000 – 7 000 € (forfait)',
              },
              {
                titre: 'VMC et ventilation',
                solution: 'Installation d\'une ventilation mécanique contrôlée (VMC) pour renouveler l\'air et évacuer l\'humidité de condensation. Indispensable dans tout sous-sol aménagé. Réduit drastiquement l\'apparition de moisissures.',
                cout: '800 – 2 000 €',
              },
              {
                titre: 'Injection de résine (fissures)',
                solution: 'Injection de résine expansive dans les fissures des murs ou du plancher pour stopper les infiltrations ponctuelles. Intervention rapide, peu invasive. Efficace pour les sous-sols béton avec défauts de joints.',
                cout: '150 – 400 € par point',
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

      {/* Section 3 — Isolation */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Isolation thermique et phonique d&apos;un sous-sol parisien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Un sous-sol non isolé est naturellement froid (10–14 °C en hiver) et peut transmettre les bruits des espaces de vie supérieurs. L&apos;isolation est donc un prérequis avant tout aménagement, que ce soit pour le confort thermique ou acoustique.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Isolation des murs par l\'intérieur',
                prix: '40 – 100 €/m²',
                detail: 'Doublage avec panneau de laine de roche ou polystyrène extrudé (XPS) + plaque de plâtre hydrofuge. Le XPS est recommandé en sous-sol car il résiste à l\'humidité. Perte de 8 à 12 cm sur la largeur de la pièce. Résistance thermique visée : R ≥ 3,7 m².K/W.',
              },
              {
                type: 'Isolation du sol (chape isolante)',
                prix: '30 – 70 €/m²',
                detail: 'Pose d\'un panneau XPS sous une chape flottante ou un carrelage. Évite le contact direct avec le béton froid et supprime les ponts thermiques au sol. Indispensable pour un usage bureau, gym ou chambre d\'appoint.',
              },
              {
                type: 'Isolation du plafond (faux-plafond)',
                prix: '60 – 120 €/m²',
                detail: 'Faux-plafond en plaques de plâtre avec laine minérale au-dessus. Améliore l\'isolation thermique et réduit les bruits d\'impact depuis l\'appartement du dessus. Permet également d\'intégrer discrètement l\'électricité et la ventilation.',
              },
              {
                type: 'Isolation phonique entre sous-sol et logement',
                prix: '80 – 150 €/m²',
                detail: 'Si le sous-sol est directement sous un appartement, un faux-plafond désolidarisé avec suspentes anti-vibrations est indispensable pour éviter de transmettre les bruits d\'une salle de sport ou d\'un atelier vers les espaces de vie.',
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

      {/* Section 4 — Éclairage et cloisons */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Éclairage artificiel et création de pièces supplémentaires
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Sans lumière naturelle (ou très peu), l&apos;éclairage artificiel d&apos;un sous-sol est un enjeu central. Bien conçu, il peut rendre le lieu agréable et fonctionnel. La création de cloisons permet de compartimenter l&apos;espace selon les usages.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Éclairage LED encastré (spots)',
                prix: '50 – 120 € / spot installé',
                detail: 'Les spots encastrés dans le faux-plafond créent un éclairage homogène et éliminent les zones d\'ombre. Préférer des LED à température de couleur variable (2 700–4 000 K) pour adapter l\'ambiance selon l\'usage (gym vs. salle de détente).',
              },
              {
                type: 'Puits de lumière et soupiraux agrandis',
                prix: '1 500 – 4 000 € par ouverture',
                detail: 'L\'agrandissement des soupiraux existants ou la création de petits puits de lumière apporte une lumière naturelle précieuse et améliore la perception de l\'espace. Travaux soumis à autorisation (mairie + copropriété).',
              },
              {
                type: 'Cloisons légères (placo sur ossature)',
                prix: '80 – 150 €/m²',
                detail: 'La pose de cloisons en plaque de plâtre hydrofuge permet de diviser un grand sous-sol en plusieurs espaces : cave de rangement + salle de sport + buanderie. Les cloisons légères ne modifient pas la structure porteuse et sont réversibles.',
              },
              {
                type: 'Revêtements de sol adaptés',
                prix: '30 – 80 €/m²',
                detail: 'Carrelage ou béton ciré pour les espaces utilitaires (résistance à l\'humidité). Parquet flottant ou vinyle LVT pour les espaces de vie (sur chape + sous-couche). Éviter le parquet massif collé en sous-sol (risque de gonflement).',
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
            Budget complet : prix de rénovation d&apos;un sous-sol à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent pour un sous-sol de 20 m² à Paris, main d&apos;œuvre et matériaux inclus. Hors traitement humidité si déjà réalisé.
          </p>

          <div className="space-y-3 mb-8">
            {[
              {
                niveau: 'Basique',
                prestations: 'Nettoyage + peinture hydrofuge murs + sol époxy + éclairage',
                total: '2 000 – 4 000 €',
              },
              {
                niveau: 'Intermédiaire',
                prestations: 'Traitement humidité + isolation sol + carrelage + éclairage LED + VMC',
                total: '5 000 – 9 000 €',
              },
              {
                niveau: 'Complet',
                prestations: 'Cuvelage + isolation murs et plafond + cloisons + électricité + éclairage + sol',
                total: '9 000 – 15 000 €',
              },
              {
                niveau: 'Pièce de vie',
                prestations: 'Aménagement complet (bureau, chambre d\'appoint, studio) avec finitions haut de gamme',
                total: '12 000 – 20 000 €',
              },
            ].map((row, i) => (
              <div
                key={row.niveau}
                className={`rounded-lg p-5 border border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-2 items-start ${i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}`}
              >
                <div className="font-medium text-[#1C1C1C] text-sm">{row.niveau}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed sm:col-span-1">{row.prestations}</div>
                <div className="text-[#B8960C] text-sm font-medium sm:text-right">{row.total}</div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Points de vigilance avant de commencer
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Toujours traiter l\'humidité avant d\'isoler — isoler un mur humide l\'aggrave',
                'Vérifier la hauteur sous plafond : minimum 2,20 m pour une pièce habitable',
                'Contrôler le règlement de copropriété avant tout changement de destination',
                'Prévoir une VMC dès le départ — impossible à ajouter sans casser',
                'Dimensionner le tableau électrique pour les usages envisagés (gym, bureau)',
                'Tester l\'étanchéité après cuvelage avant de poser les revêtements',
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
              { href: '/electricite-paris', title: 'Électricité Paris' },
              { href: '/blog/amenagement-combles-perdus-paris', title: 'Aménagement combles perdus Paris' },
              { href: '/blog/renovation-bureau-paris', title: 'Rénovation bureau Paris' },
              { href: '/renovation-appartement-paris', title: 'Rénovation appartement Paris' },
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
          Transformez votre sous-sol parisien
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis détaillé sous 48h. Artisans spécialisés en rénovation de sous-sols à Paris.
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
