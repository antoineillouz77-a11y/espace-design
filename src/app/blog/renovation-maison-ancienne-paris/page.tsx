import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Maison Ancienne Paris', item: 'https://espacedesignparis.fr/blog/renovation-maison-ancienne-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Maison Ancienne Paris : pierres, poutres & contraintes 2025 | Espace Design',
  description: 'Rénover une maison ancienne à Paris : contraintes ABF, pierres de taille, poutres apparentes, amiante. Guide artisan 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-maison-ancienne-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quelles sont les contraintes spécifiques pour rénover une maison ancienne à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Rénover une maison ancienne à Paris impose plusieurs contraintes cumulables. Les contraintes ABF (Architectes des Bâtiments de France) s'appliquent dans les secteurs sauvegardés et autour des monuments historiques : elles peuvent imposer le maintien des matériaux d'origine (pierre de taille, ardoise) et limiter les modifications de façade. Le diagnostic amiante et plomb est obligatoire pour tout bien construit avant 1997 (amiante) et avant 1949 (plomb) avant le début des travaux. Enfin, les maisons parisiennes sont souvent soumises au PLU qui peut interdire certaines surélévations ou extensions.",
      },
    },
    {
      '@type': 'Question',
      name: 'Faut-il isoler par l\'intérieur ou par l\'extérieur une maison ancienne en pierre à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour une maison ancienne en pierre de taille ou en meulière à Paris, l'isolation thermique par l'extérieur (ITE) est souvent impossible ou non autorisée par les ABF, car elle modifie l'aspect de la façade. La solution est l'isolation thermique par l'intérieur (ITI) : doublage des murs en pierre avec une laine de roche ou de la ouate de cellulose sur ossature, avec pare-vapeur. Attention : les murs en pierre ancienne respirent naturellement — l'ITI doit être réalisée avec des matériaux perspirants pour éviter les problèmes d'humidité et de condensation. Un artisan spécialisé dans le bâti ancien est indispensable.",
      },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte la rénovation d\'une maison ancienne à Paris par rapport à une construction neuve ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La rénovation d'une maison ancienne à Paris coûte généralement 20 à 40 % plus cher qu'une construction neuve de surface équivalente, en raison des contraintes structurelles, des découvertes de chantier imprévues (humidité, amiante, canalisations vétustes) et du soin requis pour préserver les éléments d'époque. Pour une maison de ville de 120 m² à Paris, comptez entre 200 000 et 400 000 euros pour une rénovation complète haut de gamme, soit 1 700 à 3 300 euros par m². Cet investissement est justifié par la rareté des maisons parisiennes et leur fort potentiel de valorisation.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Maison Ancienne Paris : pierres, poutres & contraintes 2025 | Espace Design',
  description: 'Rénover une maison ancienne à Paris : contraintes ABF, pierres de taille, poutres apparentes, amiante. Guide artisan 2025.',
}

export default function ArticleRenovationMaisonAncienne() {
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
            Rénovation Maison Ancienne Paris : pierres, poutres &amp; contraintes 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Rénover une maison ancienne à Paris est un projet ambitieux qui exige une double expertise : la maîtrise technique du bâti ancien (pierre de taille, charpente bois, planchers) et la connaissance des contraintes réglementaires spécifiques (ABF, secteurs sauvegardés, diagnostics obligatoires). Guide complet pour réussir votre rénovation en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Types de maisons */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Types de maisons anciennes à Paris et leurs spécificités
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Les maisons individuelles parisiennes sont rares et très diverses. Chaque type présente ses propres enjeux de rénovation — il est essentiel de les identifier avant de budgéter les travaux.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'La meulière parisienne (fin XIXe - début XXe)',
                  detail: 'La meulière est le type de maison individuelle le plus courant à Paris et en petite couronne. Construite en blocs de meulière (pierre siliceuse poreuse et irrégulière), elle se reconnaît à sa façade brute et colorée. Problèmes courants : humidité par capillarité dans les murs (traitement d\'hydrofugation nécessaire), planchers en bois, absence totale d\'isolation thermique, charpente en bois parfois affaiblie par les insectes xylophages. Rénovation complète : 1 800 à 3 000 €/m².',
                },
                {
                  enjeu: 'La maison haussmannienne de ville',
                  detail: 'Ces maisons de ville en pierre de taille ou en brique se trouvent principalement dans les arrondissements centraux. Elles partagent les caractéristiques haussmanniennes des immeubles : planchers en bois, moulures, parquets massifs, cheminées. La rénovation vise à préserver tous les éléments d\'époque (parquet, cheminées, menuiseries) tout en modernisant les équipements. Budget : 2 000 à 3 500 €/m².',
                },
                {
                  enjeu: 'La maison ouvrière et la maison de faubourg',
                  detail: 'Présentes dans les arrondissements de l\'est parisien (11e, 12e, 19e, 20e) et dans les impasses et villas parisiennes, ces maisons modestes sont souvent sur 2 niveaux avec un jardin. Construites entre 1880 et 1930, elles nécessitent une remise à niveau complète (plomberie, électricité, isolation) mais offrent un potentiel de transformation exceptionnel. Budget : 1 500 à 2 500 €/m².',
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

      {/* Section 2 — Contraintes ABF */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Contraintes ABF et secteurs sauvegardés : ce que cela change pour votre rénovation
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;Architecte des Bâtiments de France (ABF) est compétent dans les secteurs sauvegardés, les abords des monuments historiques (500 m) et les zones de protection du patrimoine. À Paris, cela concerne une très large partie de la ville. Son avis peut être simple ou conforme selon les secteurs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Secteurs sauvegardés parisiens',
                detail: 'Le Marais, l\'Île de la Cité, l\'Île Saint-Louis, Saint-Germain-des-Prés et quelques autres secteurs sont classés en zone sauvegardée (désormais Site Patrimonial Remarquable). Toute modification extérieure (façade, toiture, menuiseries) nécessite l\'avis conforme de l\'ABF — contraignant et non négociable.',
                impact: 'Avis conforme obligatoire',
              },
              {
                titre: 'Abords des monuments historiques',
                detail: 'La quasi-totalité de Paris intra-muros est concernée par les périmètres de protection des monuments historiques (500 m). L\'ABF donne un avis simple dans ces zones — théoriquement consultatif, mais en pratique très suivi par les mairies d\'arrondissement.',
                impact: 'Avis simple requis',
              },
              {
                titre: 'Matériaux imposés par l\'ABF',
                detail: 'L\'ABF peut imposer : le maintien des matériaux d\'origine en façade (pierre de taille, meulière), le respect des couleurs de peinture extérieure, la conservation des menuiseries bois à la française, et l\'interdiction de l\'isolation thermique par l\'extérieur. Ces exigences influencent directement les solutions techniques disponibles.',
                impact: 'Contrainte matériaux',
              },
              {
                titre: 'Toiture et surélévation',
                detail: 'La création de fenêtres de toit (Velux) ou la surélévation d\'une maison parisienne est soumise au PLU et à l\'avis de l\'ABF. En secteur sauvegardé, la surélévation est quasi systématiquement refusée. En dehors, elle peut être accordée sous conditions strictes de volume et de matériaux.',
                impact: 'PLU + ABF',
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.titre}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.impact}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Pierre et poutres */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Murs en pierre et poutres apparentes : traitement et conservation
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les murs en pierre de taille et les poutres apparentes sont les éléments les plus caractéristiques des maisons anciennes parisiennes. Leur conservation et leur mise en valeur sont au coeur de tout projet de rénovation réussi.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Isolation intérieure des murs en pierre (ITI)',
                prix: '80 – 150 €/m²',
                detail: 'L\'ITI est la seule solution possible en secteur ABF où l\'ITE est refusée. Doublage avec laine de roche ou chanvre sur ossature désolidarisée, avec pare-vapeur adapté. Point clé : utiliser des matériaux perspirants (chanvre, laine de bois) qui respectent la capacité de séchage des murs en pierre. Un mur en pierre mal isolé génère de la condensation et des moisissures.',
              },
              {
                type: 'Poutres apparentes : décapage et traitement',
                prix: '30 – 80 €/ml',
                detail: 'Les poutres en chêne ou en châtaignier des maisons anciennes sont souvent recouvertes de peinture ou de lasure à éliminer. Décapage thermique ou chimique, ponçage, traitement insecticide et fongicide (obligatoire si présence de traces d\'insectes xylophages), puis finition à l\'huile ou à la cire. Conservation systématique sauf pourrissement avancé.',
              },
              {
                type: 'Traitement de l\'humidité dans les murs anciens',
                prix: '3 000 – 8 000 €',
                detail: 'L\'humidité par remontée capillaire est le problème le plus courant dans les maisons en meulière ou en pierre. Traitement par injection de résine hydrophobe dans les murs (technique la plus efficace), drainage périphérique extérieur si nécessaire, et ventilation renforcée. Sans traitement préalable, l\'isolation thermique est inutile et dangereuse.',
              },
              {
                type: 'Charpente bois : diagnostic et renforcement',
                prix: '5 000 – 20 000 €',
                detail: 'La charpente des maisons anciennes parisiennes doit être diagnostiquée avant tout projet de rénovation : présence de mérule (champignon), de capricornes (insectes), ou de poutres trop affaiblies pour supporter une surcharge. Un bureau d\'études bois peut réaliser ce diagnostic. Le renforcement peut passer par des poutres en acier cachées dans la charpente existante.',
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

      {/* Section 4 — Amiante et plomb */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Diagnostics obligatoires : amiante, plomb et autres avant 1997
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Avant tout commencement de travaux dans une maison ancienne, plusieurs diagnostics sont obligatoires. Leur non-respect expose le propriétaire et les artisans à des sanctions pénales et à des responsabilités civiles importantes.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Diagnostic amiante (avant 1997)',
                detail: 'Obligatoire pour tout bâtiment dont le permis de construire a été délivré avant le 1er juillet 1997. L\'amiante était utilisée dans de nombreux matériaux de construction : dalles de sol en vinyle-amiante, colles, enduits, faux-plafonds, toitures en fibrociment. En cas de présence, les matériaux amiantés doivent être retirés par une entreprise certifiée amiante avant les travaux. Coût du diagnostic : 200 à 500 €. Désamiantage : 500 à 5 000 € selon l\'étendue.',
              },
              {
                type: 'Constat de risque d\'exposition au plomb (CREP)',
                detail: 'Obligatoire pour les logements construits avant le 1er janvier 1949. Le plomb était utilisé dans les peintures et les canalisations. Si le CREP révèle des peintures au plomb dégradées, un traitement est obligatoire avant travaux. Le remplacement des canalisations en plomb est systématiquement recommandé lors d\'une rénovation complète. Coût du CREP : 150 à 400 €.',
              },
              {
                type: 'Diagnostic termites',
                detail: 'Obligatoire lors d\'une vente dans les zones à risque définies par arrêté préfectoral. Certains arrondissements parisiens sont classés en zone à risque termites. Les maisons avec structure bois (planchers, charpente) sont les plus exposées. En cas de présence, traitement chimique obligatoire avant travaux de renforcement ou de restauration.',
              },
              {
                type: 'Diagnostic gaz et électricité',
                detail: 'Obligatoires lors d\'une vente pour les installations de plus de 15 ans. Dans une maison ancienne, ces installations sont quasi systématiquement non conformes et doivent être entièrement refaites. La réfection électrique complète (NF C 15-100) est la norme dans toute rénovation sérieuse d\'une maison ancienne parisienne.',
              },
            ].map((el) => (
              <div key={el.type} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.type}</div>
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
            Surcoûts de la rénovation de maison ancienne vs construction neuve
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La rénovation d&apos;une maison ancienne est généralement plus coûteuse qu&apos;une construction neuve. Ces surcoûts sont justifiés par la rareté du bien et son potentiel de valorisation — mais ils doivent être anticipés dès le budget prévisionnel.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Poste de surcoût</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Surcoût estimé</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Raison</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    poste: 'Diagnostics et désamiantage',
                    surcout: '500 – 8 000 €',
                    raison: 'Obligatoires avant 1997, absent du neuf',
                  },
                  {
                    poste: 'Traitement humidité et charpente',
                    surcout: '3 000 – 20 000 €',
                    raison: 'Pathologies du bâti ancien spécifiques',
                  },
                  {
                    poste: 'Restauration éléments d\'époque',
                    surcout: '5 000 – 30 000 €',
                    raison: 'Parquet, cheminées, moulures, poutres',
                  },
                  {
                    poste: 'Isolation ITI (vs ITE neuf)',
                    surcout: '+20 à 40 %',
                    raison: 'Solution plus complexe, moins performante',
                  },
                  {
                    poste: 'Découvertes de chantier imprévues',
                    surcout: '5 à 15 % du budget',
                    raison: 'Canalisations, structure, matériaux cachés',
                  },
                ].map((row, i) => (
                  <tr key={row.poste} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.poste}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.surcout}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.raison}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Bonnes pratiques pour rénover une maison ancienne à Paris
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Réaliser tous les diagnostics obligatoires avant de lancer les travaux',
                'Prévoir une réserve de 10 à 15 % du budget pour les découvertes imprévues',
                'Consulter l\'ABF en amont si la maison est en secteur sauvegardé ou en abord de monument',
                'Toujours conserver les éléments d\'époque — leur restauration est moins chère que leur remplacement',
                'Choisir des matériaux perspirants pour l\'isolation des murs en pierre ou en meulière',
                'Faire diagnostiquer la charpente avant tout projet de rénovation toiture ou combles',
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
                <h3 className="font-medium text-[#1C1C1C] text-sm mb-3">{q.name}</h3>
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
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénover un appartement haussmannien Paris' },
              { href: '/blog/renovation-appartement-ancien-paris', title: 'Rénover un appartement ancien Paris' },
              { href: '/blog/isolation-thermique-appartement-paris', title: 'Isolation thermique appartement Paris' },
              { href: '/blog/diagnostic-amiante-paris', title: 'Diagnostic amiante Paris' },
              { href: '/blog/moulures-paris', title: 'Restauration moulures Paris' },
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
              { href: '/renovation-paris-20e', label: 'Paris 20e' },
              { href: '/renovation-paris-19e', label: 'Paris 19e' },
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-paris-12e', label: 'Paris 12e' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-montreuil', label: 'Montreuil' },
              { href: '/renovation-vincennes', label: 'Vincennes' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
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
          Votre maison ancienne mérite un artisan spécialisé
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis détaillé sous 48h. Expertise bâti ancien, pierre de taille et charpente bois.
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
