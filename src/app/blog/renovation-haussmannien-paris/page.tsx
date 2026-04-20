import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: "Rénovation Appartement Haussmannien Paris", item: 'https://espacedesignparis.fr/blog/renovation-haussmannien-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation Appartement Haussmannien Paris : guide complet artisan 2025",
  description: "Comment rénover un appartement haussmannien à Paris ? Parquet point de Hongrie, moulures, cheminées, isolation, réglementation. Guide expert artisan 2025.",
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-haussmannien-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le coût de rénovation d'un appartement haussmannien à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La rénovation d'un appartement haussmannien à Paris coûte en moyenne 1 200 à 2 500 €/m² en rénovation complète. Pour un appartement de 100 m², cela représente 120 000 à 250 000 €. Le surcoût par rapport à un appartement standard tient à la conservation des éléments d'époque (parquet point de Hongrie, moulures, cheminées) qui demandent des artisans spécialisés et davantage de temps de travail. Une rénovation légère (peinture, parquet ponçage, sanitaires) revient à 600-900 €/m².",
      },
    },
    {
      '@type': 'Question',
      name: "Peut-on modifier les cloisons dans un appartement haussmannien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, les cloisons intérieures d'un appartement haussmannien (en plâtre sur lattis de bois ou en brique plâtrière) peuvent généralement être modifiées avec l'accord de la copropriété. En revanche, les murs porteurs en pierre de taille ou en brique pleine ne peuvent être percés ou abattus qu'après vérification par un bureau d'études structures, et nécessitent souvent la pose d'un IPN ou d'une poutre HEA. En secteur sauvegardé (Marais, Ile Saint-Louis), l'Architecte des Bâtiments de France peut imposer des contraintes supplémentaires.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment restaurer un parquet point de Hongrie haussmannien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La restauration d'un parquet point de Hongrie authentique en chêne massif comprend plusieurs étapes : dépoussiérage, ponçage à la machine vibrante (2 à 3 passages de granulométrie croissante), rebouchage des fissures avec un mélange de colle et sciure, vitrification (2 à 3 couches de vernis polyuréthane satiné) ou huilage (plus naturel mais plus d'entretien). Prix : 25 à 45 €/m² pour un ponçage + vitrification. Si le parquet est en mauvais état ou si des lames sont manquantes, un remplacement partiel ou total peut s'avérer nécessaire.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il une autorisation pour rénover un appartement haussmannien à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Une déclaration préalable de travaux est nécessaire pour toute modification de l'aspect extérieur (façade, balcon, fenêtres) d'un immeuble haussmannien. Pour les travaux intérieurs ne touchant pas aux parties communes, aucune autorisation administrative n'est requise, mais l'accord du syndic de copropriété est obligatoire pour tout ce qui concerne les gros-oeuvres (murs porteurs, colonnes de plomberie partagées). En secteur protégé (ZPPAUP, AVAP), l'avis de l'Architecte des Bâtiments de France est systématiquement requis.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Rénovation Appartement Haussmannien Paris : guide complet artisan 2025",
  description: "Comment rénover un appartement haussmannien à Paris ? Parquet point de Hongrie, moulures, cheminées, isolation, réglementation. Guide expert artisan 2025.",
  keywords: [
    "rénovation appartement haussmannien paris",
    "rénovation haussmannien paris",
    "parquet point de hongrie paris",
    "moulures haussmannien paris",
    "artisan haussmannien paris",
    "prix rénovation haussmannien paris",
  ],
}

export default function ArticleRenovationHaussmannienParis() {
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
            Appartement haussmannien
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénover un Appartement Haussmannien à Paris : guide expert 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            L&apos;appartement haussmannien est le joyau du patrimoine immobilier parisien : hauts plafonds, parquets point de Hongrie, moulures, cheminées en marbre... Sa rénovation est un exercice d&apos;équilibre entre conservation du cachet d&apos;époque et mise aux normes contemporaines. Ce guide expert vous accompagne dans chaque étape, des contraintes techniques aux prix pratiqués par les artisans parisiens en 2025.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-[#1C1C1C] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { val: '800 €/m²', label: 'Rénovation légère (rafraîchissement)' },
              { val: '1 800 €/m²', label: 'Rénovation complète avec restauration' },
              { val: '3 500 €/m²', label: 'Rénovation prestige avec artisans d\'art' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-xl sm:text-2xl font-semibold text-[#D4AF37] mb-1">{s.val}</div>
                <div className="text-gray-500 text-[10px] uppercase tracking-wider font-light">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1 — Contraintes techniques */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Contraintes techniques spécifiques à l&apos;haussmannien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
            L&apos;immeuble haussmannien construit entre 1850 et 1900 présente des caractéristiques structurelles et des matériaux très différents des constructions modernes. Les artisans qui interviennent sur ce type de bâti doivent maîtriser des techniques spécifiques.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La structure porteuse est en pierre de taille (calcaire lutétien) pour les façades et les murs mitoyens, et en brique pleine ou plâtre sur lattis pour les cloisons intérieures. Les planchers sont en bois (solives et lambourdes), ce qui impose des précautions lors de la pose de carrelage lourd ou de chape humide.
          </p>
          <div className="space-y-4">
            {[
              {
                enjeu: "Parquet point de Hongrie : restaurer ou remplacer ?",
                detail: "Le parquet point de Hongrie en chêne massif (épaisseur 22 à 28 mm) est l'un des éléments les plus emblématiques de l'haussmannien. Sa restauration (ponçage + vitrification ou huilage) est toujours préférable au remplacement quand les lames sont en bon état. Un parquet massif de 150 ans peut être poncé 5 à 8 fois dans sa vie. Prix de restauration : 25 à 45 €/m². Remplacement à l'identique (parquet massif chêne cloué, pose traditionnelle) : 80 à 150 €/m².",
              },
              {
                enjeu: "Moulures et ornements en plâtre : conservation obligatoire",
                detail: "Les moulures de plafond (corniches, rosaces, frises), les chambranles de portes et les boiseries sont des éléments du patrimoine qu'il faut impérativement conserver dans un appartement haussmannien. Leur restauration (rebouchage des éclats, rejointoiement, peinture blanche ou teinte) est réalisée par un staffeur ou un plâtrier spécialisé. Prix de restauration des moulures : 25 à 60 €/ml selon la complexité. Création de moulures manquantes : 40 à 90 €/ml.",
              },
              {
                enjeu: "Cheminées en marbre : fonctionnelles ou décoratives ?",
                detail: "Les cheminées haussmanniennes en marbre sont des éléments architecturaux majeurs. Avant 1997, elles fonctionnaient au bois ou au charbon via les conduits de fumée. Aujourd'hui, la plupart des conduits sont obturés (pour l'isolation thermique) et les cheminées sont purement décoratives. La restauration d'un manteau de cheminée en marbre fissuré ou ébréché coûte 500 à 2 000 € selon l'état. Ne jamais maçonner une cheminée sans vérification de son état par un ramoneur.",
              },
              {
                enjeu: "Hauteur sous plafond : atout et contrainte",
                detail: "Les plafonds haussmanniens atteignent 2,80 m à 3,50 m selon l'étage (noble ou de service). Cette hauteur est un atout majeur pour la luminosité et la sensation d'espace. Elle impose cependant des échafaudages ou des échelles professionnelles pour la peinture et la restauration des moulures. Les travaux d'électricité (passage de câbles dans les saignées de plâtre) sont plus complexes et plus coûteux qu'en habitat moderne.",
              },
              {
                enjeu: "Planchers bois : risques et précautions",
                detail: "Les planchers en solives de bois des immeubles haussmanniens ne peuvent pas supporter le poids d'une chape béton traditionnelle (150 kg/m²). Pour les salles de bain avec carrelage, on utilise des chapes allégées (chape sèche KNAUF, chape anhydrite légère) ou des systèmes de douche pré-fabriqués. Vérifier l'état des solives avant tout chantier : un plancher affaissé ou attaqué par les insectes (capricornes, vrillettes) doit être traité avant rénovation.",
              },
            ].map((el) => (
              <div key={el.enjeu} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.enjeu}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Isolation */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Isolation thermique et phonique dans l&apos;haussmannien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;isolation est l&apos;un des enjeux majeurs de la rénovation haussmannienne. Les murs en pierre de taille (40 à 60 cm d&apos;épaisseur) ont une inertie thermique naturelle, mais leur isolation par l&apos;extérieur est interdite sur les façades classées. L&apos;isolation par l&apos;intérieur (ITI) est la seule option, mais elle réduit la surface habitable.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: "Isolation des murs par l'intérieur (ITI)",
                cout: "50 – 120 €/m²",
                detail: "Pose de panneaux de laine de roche ou de laine de verre (80-120 mm) sur les murs extérieurs, avec plaque de Placo BA13. Réduction de l'épaisseur du mur de 10 à 15 cm. Idéal si combiné avec la rénovation complète (électricité, peinture). Conserver les doublages existants si en bon état.",
              },
              {
                titre: "Isolation des planchers bois (phonique)",
                cout: "20 – 40 €/m²",
                detail: "Dalle flottante de désolidarisation (chape sèche ou ragréage souple) sur feutre acoustique avant pose du parquet. Réduit les bruits d'impact entre étages. Obligatoire lors d'un remplacement de revêtement de sol si le règlement de copropriété l'impose.",
              },
              {
                titre: "Double vitrage sur fenêtres à guillotine",
                cout: "600 – 1 500 €/fenêtre",
                detail: "Le remplacement des anciennes fenêtres à petits carreaux par du double vitrage est soumis à l'accord de la copropriété et parfois de l'ABF. Les menuiseries doivent conserver le profil d'origine (bois ou métal peint en blanc). Des fenêtres en bois avec double vitrage peuvent reproduire fidèlement l'esthétique d'origine.",
              },
              {
                titre: "Isolation des combles / plancher haut",
                cout: "30 – 60 €/m²",
                detail: "Si l'appartement est en dernier étage (sous toiture), l'isolation du plancher haut ou de la toiture est prioritaire. Soufflage de laine de verre ou de ouate de cellulose dans les combles perdus : 25 à 40 €/m². Isolation par l'intérieur sous rampant si les combles sont habitables : 60 à 100 €/m².",
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

      {/* Section 3 — Réglementation */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Réglementation : ce qu&apos;il faut savoir avant de rénover un haussmannien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La rénovation d&apos;un appartement haussmannien est encadrée par plusieurs réglementations cumulatives : le Code de la construction, les règles de copropriété et les règlements d&apos;urbanisme locaux. Voici les points essentiels.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: "Accord de la copropriété",
                prix: "Obligatoire",
                detail: "Tout travaux touchant aux parties communes (colonnes de plomberie, conduits de fumée, gros oeuvres, cage d'escalier) doit être voté en assemblée générale. Les travaux dans les parties privatives (intérieur de l'appartement, murs privatifs non porteurs) ne requièrent pas de vote AG mais doivent être déclarés au syndic. Toujours contacter le syndic avant tout chantier pour vérifier le règlement de copropriété.",
              },
              {
                type: "Secteurs sauvegardés et AVAP",
                prix: "ABF obligatoire",
                detail: "Certains quartiers parisiens sont classés en secteur sauvegardé (PSMV) ou en AVAP (Aire de mise en Valeur de l'Architecture et du Patrimoine) : Marais, île Saint-Louis, Saint-Germain-des-Prés, Montmartre, etc. Dans ces périmètres, toute modification de façade (fenêtres, devantures, balcons) requiert l'avis favorable de l'Architecte des Bâtiments de France. Les travaux intérieurs restent libres sous réserve de l'accord de copropriété.",
              },
              {
                type: "Diagnostic amiante et plomb",
                prix: "200 – 600 €",
                detail: "Avant tout chantier dans un appartement construit avant 1997 (pour l'amiante) ou avant 1949 (pour le plomb), un diagnostic obligatoire doit être réalisé par un diagnostiqueur certifié. Si de l'amiante ou du plomb est détecté dans les matériaux à démolir, un chantier de désamiantage ou de déplombage doit être confié à des entreprises certifiées (surcoût de 2 000 à 10 000 € selon la surface concernée).",
              },
              {
                type: "Mise aux normes électriques",
                prix: "Recommandée",
                detail: "Un appartement haussmannien de plus de 50 ans a très souvent une installation électrique non conforme à la norme NF C 15-100 (absence de prise de terre, circuits surchargés, tableau vétuste). La mise aux normes n'est pas légalement obligatoire lors d'une rénovation simple, mais elle est fortement recommandée pour la sécurité et exigée lors d'une vente (rapport CONSUEL). Budget pour un appartement de 80 m² : 6 000 à 15 000 €.",
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

      {/* Section 4 — Prix et conseils */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Budget de rénovation selon le type de projet haussmannien
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Type de rénovation</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix/m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget 80 m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget 150 m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { traitement: "Rafraîchissement (peinture, parquet poncé)", prix: "600 – 900 €", mid: "48 000 – 72 000 €", haut: "90 000 – 135 000 €" },
                  { traitement: "Rénovation partielle (cuisine + SDB + peinture)", prix: "900 – 1 400 €", mid: "72 000 – 112 000 €", haut: "135 000 – 210 000 €" },
                  { traitement: "Rénovation complète (tous corps état)", prix: "1 400 – 2 500 €", mid: "112 000 – 200 000 €", haut: "210 000 – 375 000 €" },
                  { traitement: "Rénovation prestige (artisans d'art)", prix: "2 500 – 5 000 €", mid: "200 000 – 400 000 €", haut: "375 000 – 750 000 €" },
                  { traitement: "Restauration moulures seules", prix: "25 – 60 €/ml", mid: "—", haut: "—" },
                  { traitement: "Parquet point de Hongrie (ponçage + vitrif.)", prix: "25 – 45 €/m²", mid: "2 000 – 3 600 €", haut: "3 750 – 6 750 €" },
                ].map((row, i) => (
                  <tr key={row.traitement} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium text-sm">{row.traitement}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium text-sm">{row.prix}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light text-sm">{row.mid}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light text-sm">{row.haut}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils d&apos;expert pour rénover un appartement haussmannien
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Toujours conserver le parquet point de Hongrie existant si l'état le permet : c'est la valeur la plus précieuse du bien",
                "Ne jamais cimenter les moulures ou les couvrir de faux plafond : leur restauration ajoute 15 à 25 % à la valeur du bien",
                "Vérifier le règlement de copropriété avant tout chantier, même intérieur : certains règlements imposent le bois comme revêtement de sol",
                "Préférer l'isolation par les combles plutôt que par les murs si le bâtiment est en dernier étage : meilleur ratio coût/efficacité",
                "Choisir des artisans ayant des références dans l'haussmannien : la restauration des éléments d'époque demande des savoir-faire spécifiques",
                "Prévoir une réserve de 15 à 20 % pour les imprévus : les appartements anciens réservent souvent des surprises (réseaux, planchers, sinistres cachés)",
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
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénovation appartement haussmannien Paris (guide principal)' },
              { href: '/blog/parquet-massif-paris', title: 'Parquet massif Paris' },
              { href: '/blog/moulures-paris', title: 'Moulures Paris' },
              { href: '/blog/renovation-appartement-ancien-paris', title: 'Rénovation appartement ancien Paris' },
              { href: '/blog/isolation-thermique-appartement-paris', title: 'Isolation thermique appartement Paris' },
              { href: '/blog/mur-porteur-paris', title: 'Ouverture mur porteur Paris' },
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
      <section className="py-16 bg-[#D4AF37] text-center px-4">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-4">
          Confiez votre haussmannien à un artisan expert
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Espace Design, artisan spécialisé rénovation haussmannienne à Paris. Devis gratuit sous 48h, références disponibles sur demande.
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
