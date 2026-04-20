import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Terrasse Bois Paris', item: 'https://espacedesignparis.fr/blog/renovation-terrasse-bois-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Terrasse Bois Paris : ipé, composite & prix artisan 2025 | Espace Design',
  description: 'Installer une terrasse en bois à Paris : ipé, teck, composite. Permis de construire, copropriété, entretien. Artisan, prix 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-terrasse-bois-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une terrasse en bois à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le prix d\'une terrasse en bois à Paris varie selon l\'essence choisie et la complexité de la pose. Pour du composite haut de gamme : 80 à 150 €/m² fourni et posé. Pour de l\'ipé massif : 120 à 200 €/m² fourni et posé. Pour du teck certifié FSC : 150 à 250 €/m². Ces prix incluent les lambourdes, les vis inox et la finition des bords. La préparation du support (ragréage, étanchéité, relevés) est souvent facturée en supplément : 20 à 60 €/m² selon l\'état de la terrasse existante.',
      },
    },
    {
      '@type': 'Question',
      name: 'Faut-il un permis de construire pour une terrasse en bois à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'À Paris, la réglementation distingue plusieurs cas. Une terrasse de plain-pied (sans surélévation) ne nécessite généralement pas de permis de construire, mais peut nécessiter une déclaration préalable si elle modifie l\'aspect extérieur de l\'immeuble. Une terrasse surélevée de plus de 60 cm nécessite un permis de construire. Dans tous les cas, dans une copropriété parisienne, l\'accord de l\'assemblée générale est obligatoire avant tout travaux touchant une partie commune (toiture-terrasse, balcon, jardin commun). Consultez également l\'architecte des Bâtiments de France si votre immeuble est en périmètre protégé.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment entretenir une terrasse en bois à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'L\'entretien d\'une terrasse en bois dépend de l\'essence. L\'ipé : nettoyage annuel avec un nettoyeur haute pression basse pression (80 bar max) et application d\'une huile d\'entretien incolore ou teintée tous les 1 à 2 ans. Le teck : se grise naturellement avec une patine argentée appréciée — un nettoyage annuel suffit si vous acceptez ce grisaillement. Le composite : nettoyage à l\'eau savonneuse ou au nettoyeur haute pression, aucun traitement huileux. Évitez le sel de déneigement sur toutes les essences, qui attaque les fibres et les fixations en acier.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle essence de bois choisir pour une terrasse à Paris : ipé, teck ou composite ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chaque essence a ses avantages. L\'ipé (bois tropical classe 1) offre une durabilité exceptionnelle (25 à 40 ans) et une résistance naturelle aux champignons et insectes. Inconvénient : prix élevé et questions de traçabilité (certifications FSC ou PEFC requises). Le teck est très apprécié pour son aspect naturel et son faible entretien, mais plus coûteux. Le composite bois-résine est la solution la plus homogène, sans entretien particulier, avec une garantie souvent de 20 à 25 ans. Il ne grippe pas, ne se fend pas et reste disponible en nombreux coloris. À Paris, où les terrasses sont souvent petites et exposées aux pluies acides, le composite est souvent le meilleur rapport qualité-durabilité-entretien.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Terrasse Bois Paris : ipé, composite & prix artisan 2025 | Espace Design',
  description: 'Installer une terrasse en bois à Paris : ipé, teck, composite. Permis de construire, copropriété, entretien. Artisan, prix 2025.',
}

export default function ArticleTerrasse() {
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
            Extérieur
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Terrasse Bois Paris : ipé, composite &amp; prix artisan 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Balcon, toiture-terrasse ou jardin privatif : installer une terrasse en bois à Paris est un projet qui nécessite de choisir la bonne essence, de respecter la réglementation copropriété et mairie, et de soigner l&apos;étanchéité du support. Guide complet des essences, réglementations et prix 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Essences */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Choisir son essence de bois : ipé, teck, pin traité ou composite
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le choix de l&apos;essence est la décision la plus importante pour une terrasse parisienne. Le contexte urbain impose des contraintes spécifiques : pluies acides, ombre partielle, contraintes de poids sur les toitures-terrasses et normes de copropriété souvent strictes sur les matériaux visibles.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              À Paris, quatre grandes familles de matériaux s&apos;imposent : les bois tropicaux denses (ipé, teck, cumaru), le pin traité autoclave classe 4, et le composite bois-résine. Chacune répond à des priorités différentes en matière de budget, d&apos;entretien et de durabilité.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Ipé (Tabebuia) — Le bois de terrasse le plus durable',
                  detail: 'L\'ipé est le roi des bois de terrasse en climat tempéré. Naturellement imputrescible (classe 1), il résiste aux champignons, insectes, UV et aux chocs. Sa densité (1 050 kg/m³) en fait un matériau lourd — à prendre en compte sur les toitures-terrasses. Durabilité : 25 à 40 ans sans traitement chimique. Exigez impérativement une certification FSC ou PEFC pour garantir l\'origine légale du bois.',
                },
                {
                  enjeu: 'Teck (Tectona grandis) — L\'esthétique naturelle',
                  detail: 'Le teck est l\'essence de terrasse la plus prisée pour son aspect naturel chaud et sa facilité d\'entretien. Il contient naturellement des huiles qui le protègent de l\'humidité sans traitement externe. Il grise élégamment avec le temps pour une patine argentée très appréciée. Durabilité : 20 à 35 ans. Plus coûteux que l\'ipé, mais apprécié pour les terrasses de standing.',
                },
                {
                  enjeu: 'Composite bois-résine — La solution sans entretien',
                  detail: 'Le composite (mélange de fibres de bois et de résine polypropylène ou PVC) est devenu la référence pour les terrasses parisiennes en copropriété. Avantages : aucun entretien huileux, pas de grisaillement, pas d\'échardes, grande stabilité dimensionnelle (ne se fend pas), disponible en de nombreuses couleurs. Les gammes haut de gamme (Silvadec, Fiberon, Trex) offrent 20 à 25 ans de garantie.',
                },
                {
                  enjeu: 'Pin traité autoclave classe 4 — L\'option économique',
                  detail: 'Le pin traité autoclave (imprégnation sous pression de sels de cuivre) offre une durabilité correcte à moindre coût. Classe 4 pour une utilisation en contact avec l\'humidité sans contact avec le sol. Durabilité : 10 à 20 ans selon l\'entretien. Nécessite une finition annuelle (lasure ou huile) pour maintenir la protection. L\'option la plus accessible financièrement.',
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

      {/* Section 2 — Réglementation */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Réglementation à Paris : copropriété, mairie et règles d&apos;urbanisme
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            À Paris, la création ou la rénovation d&apos;une terrasse est encadrée par plusieurs niveaux de réglementation qui s&apos;appliquent simultanément. Il est impératif de les vérifier dans l&apos;ordre avant de commander les matériaux.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Règlement de copropriété',
                detail: 'En immeuble collectif, la terrasse est souvent une partie commune à usage privatif. Les travaux sur une telle surface nécessitent un vote en assemblée générale (souvent à la majorité de l\'article 25). Le règlement peut imposer des matériaux précis ou interdire certaines essences pour des raisons esthétiques ou d\'incendie.',
                cout: 'Accord AG requis',
              },
              {
                titre: 'Plan Local d\'Urbanisme (PLU) de Paris',
                detail: 'Le PLU de Paris encadre les surélévations, les modifications de toiture et les extensions. Une terrasse surélevée de plus de 60 cm crée une surface de plancher et nécessite un permis de construire. Les terrasses de plain-pied peuvent nécessiter une déclaration préalable si visibles depuis la voie publique.',
                cout: 'Déclaration ou permis',
              },
              {
                titre: 'Architecte des Bâtiments de France (ABF)',
                detail: 'De nombreux secteurs parisiens sont en périmètre de protection des monuments historiques. Les modifications extérieures visibles (balcons, toitures, terrasses) sont soumises à l\'avis de l\'ABF. Cet avis peut imposer des matériaux spécifiques ou refuser certains projets. Le délai de réponse est de 1 à 2 mois.',
                cout: 'Consulter mairie',
              },
              {
                titre: 'Isolation phonique — obligations en toiture-terrasse',
                detail: 'À Paris, la réglementation impose souvent une isolation phonique aux impacts sur les toitures-terrasses accessibles. La pose d\'une terrasse sur plots (surélévation) avec lame d\'air crée une amélioration acoustique. Les règlements de copropriété peuvent imposer une sous-couche résiliente sous la terrasse bois pour protéger les appartements du dessous.',
                cout: '15 – 35 €/m²',
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.titre}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.cout}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Pose et entretien */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Pose et entretien : les bonnes pratiques pour une terrasse durable à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La durabilité d&apos;une terrasse en bois à Paris dépend autant de la qualité de la pose que de l&apos;essence choisie. Deux points critiques : l&apos;étanchéité du support et la ventilation sous les lames.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Étanchéité du support : étape préalable indispensable',
                prix: '30 – 80 €/m²',
                detail: 'Avant toute pose de terrasse bois sur une toiture-terrasse, l\'étanchéité de la dalle béton doit être vérifiée et reprise si nécessaire. Une membrane d\'étanchéité bitumineuse (SBS) ou une étanchéité liquide (résine polyuréthane) protège le plancher. Relevés d\'étanchéité obligatoires en périphérie et autour des évacuations. Cette étape est souvent négligée par les artisans peu expérimentés — et c\'est la source des dégâts des eaux.',
              },
              {
                type: 'Système de pose sur plots réglables',
                prix: '8 – 20 €/m²',
                detail: 'La pose sur plots plastique réglables (hauteur 30 à 100 mm) est la technique la plus utilisée à Paris pour les toitures-terrasses. Elle préserve l\'étanchéité existante, permet la ventilation sous les lames (séchage rapide, prévention des moisissures) et facilite l\'accès aux évacuations. Les plots sont réglables à la hauteur au mm près pour compenser les irrégularités de pente.',
              },
              {
                type: 'Fixations invisibles pour une finition soignée',
                prix: 'Inclus dans la pose',
                detail: 'Les clips de fixation cachés (en inox ou aluminium anodisé) permettent de fixer les lames sans vis apparentes. Esthétiquement supérieures aux fixations vissées, elles maintiennent le bois correctement tout en autorisant le jeu dû aux variations d\'humidité. Sur les bois tropicaux denses (ipé, cumaru), préférez les clips inox 316L pour résister aux tannins acides du bois.',
              },
              {
                type: 'Entretien annuel : huile, nettoyage et contrôle',
                prix: '5 – 15 €/m² / an',
                detail: 'Bois massif (ipé, teck) : nettoyage au jet d\'eau basse pression en mars, application d\'une huile de terrasse (incolore ou colorée) après séchage complet. Composite : nettoyage au balai brosse et eau savonneuse ou nettoyeur haute pression (max 100 bar, buse large). Pour toutes les essences : vérification annuelle de l\'état des fixations, des plots et des relevés d\'étanchéité.',
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

      {/* Section 4 — Tableau des prix */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix terrasse bois Paris 2025 : tableau comparatif par essence
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Tarifs fourniture et pose inclus (lames, lambourdes ou plots, fixations, finition des bords). Hors étanchéité et travaux préparatoires.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Essence</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Durabilité</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Entretien</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    essence: 'Pin traité classe 4',
                    durabilite: '10 – 20 ans',
                    entretien: 'Annuel (lasure)',
                    prix: '50 – 90 €',
                  },
                  {
                    essence: 'Composite haut de gamme',
                    durabilite: '20 – 25 ans',
                    entretien: 'Minimal (eau)',
                    prix: '80 – 150 €',
                  },
                  {
                    essence: 'Ipé certifié FSC',
                    durabilite: '25 – 40 ans',
                    entretien: 'Annuel (huile)',
                    prix: '120 – 200 €',
                  },
                  {
                    essence: 'Teck certifié FSC',
                    durabilite: '20 – 35 ans',
                    entretien: 'Faible (grisaillement)',
                    prix: '150 – 250 €',
                  },
                ].map((row, i) => (
                  <tr key={row.essence} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.essence}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.durabilite}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.entretien}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Points essentiels avant de lancer votre projet de terrasse à Paris
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Vérifier et reprendre l\'étanchéité de la dalle avant toute pose de bois',
                'Obtenir l\'accord de la copropriété par vote en AG avant de commander les matériaux',
                'Choisir des lames avec une certif FSC ou PEFC pour les bois tropicaux',
                'Préférer les fixations inox 316L pour la résistance aux tannins et à la corrosion urbaine',
                'Prévoir une ventilation suffisante sous les lames (minimum 3 cm) pour éviter les moisissures',
                'Demander un devis incluant les relevés d\'étanchéité et les finitions de bords — souvent oubliés',
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
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-6 text-center">Questions fréquentes</p>
          <div className="space-y-6">
            {schemaFaq.mainEntity.map((q) => (
              <div key={q.name} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-3">{q.name}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{q.acceptedAnswer.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides connexes */}
      <section className="py-12 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Guides connexes</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/renovation-appartement-paris-16e', title: 'Rénovation appartement Paris 16e' },
              { href: '/blog/renovation-appartement-paris-12e', title: 'Rénovation appartement Paris 12e' },
              { href: '/blog/devis-travaux-renovation-paris', title: 'Devis travaux rénovation Paris : éviter les pièges' },
              { href: '/blog/pose-carrelage-grand-format-paris', title: 'Pose carrelage grand format Paris' },
              { href: '/blog/renovation-balcon-paris', title: 'Rénovation balcon Paris' },
              { href: '/blog/renovation-terrasse-paris', title: 'Rénovation terrasse Paris' },
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
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-paris-17e', label: 'Paris 17e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
              { href: '/renovation-saint-cloud', label: 'Saint-Cloud' },
              { href: '/renovation-levallois-perret', label: 'Levallois' },
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
      <section className="py-16 bg-[#D4AF37] text-center px-4">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-4">
          Votre terrasse bois sur mesure à Paris
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis détaillé sous 48h. Artisan spécialisé en terrasses bois et composite en Île-de-France.
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
