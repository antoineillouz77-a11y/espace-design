import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: "Rénover un Escalier Intérieur Paris : matériaux, prix & artisan 2025",
  description: "Rénover un escalier parisien : habillage bois, rampe métal, marches béton. Prix artisan Paris 2025 et conseils matériaux.",
  keywords: [
    "rénovation escalier intérieur Paris",
    "habillage escalier Paris",
    "artisan escalier Paris",
    "rénover escalier bois Paris",
    "rampe escalier métal Paris",
    "prix rénovation escalier Paris",
    "marches béton parquet Paris",
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation Escalier Intérieur Paris : bois, métal, béton — guide 2025",
  description: "Rénover un escalier parisien : habillage bois, rampe métal, marches béton. Prix artisan Paris 2025 et conseils matériaux.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
  url: 'https://espacedesignparis.fr/blog/escalier-interieur-renovation-paris',
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Combien coûte la rénovation d'un escalier à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le budget dépend de l'ampleur des travaux. Un habillage de 10 marches béton en parquet chêne coûte entre 2 000 et 4 500 €. Le remplacement d'une rampe ou balustrade est estimé entre 1 500 et 4 000 €. Une réfection complète de l'escalier (démolition + pose neuf) se chiffre entre 8 000 et 20 000 € selon les matériaux et la complexité du projet. Demandez un devis gratuit sous 48h pour votre configuration précise.",
      },
    },
    {
      '@type': 'Question',
      name: "Peut-on poser un habillage bois sur un escalier béton ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, tout à fait. L'habillage de marches béton en bois (chêne massif, parquet contrecollé, LVL) se fait par collage direct sur le béton ou sur plots réglables selon la configuration. Les contremarches et nez de marche sont également habillés pour un rendu cohérent. C'est la solution la plus économique pour transformer radicalement l'aspect d'un escalier béton brut sans toucher à la structure porteuse.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il un artisan spécialisé pour rénover un escalier à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour une peinture ou lasure des marches, un bricoleur expérimenté peut s'en charger. En revanche, le remplacement d'une rampe, l'habillage de marches béton ou la création d'un escalier complet nécessitent un menuisier ou un artisan tous corps d'état qualifié. Les normes de sécurité (hauteur garde-corps 90 cm minimum, résistance des ancrages) et les contraintes des immeubles parisiens (copropriété, secteurs sauvegardés) rendent l'expertise professionnelle indispensable.",
      },
    },
    {
      '@type': 'Question',
      name: "Combien de temps pour rénover un escalier à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La durée varie de 3 à 7 jours pour une intervention ponctuelle (habillage de marches, remplacement de rampe). Une réfection complète de l'escalier demande 1 à 3 semaines selon la complexité. Dans les immeubles parisiens, la logistique (accès, protection des parties communes, évacuation des gravats) peut allonger le chantier de 20 à 30 % par rapport à une maison individuelle.",
      },
    },
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: "Rénovation Escalier Intérieur Paris", item: 'https://espacedesignparis.fr/blog/escalier-interieur-renovation-paris' },
  ],
}

export default function ArticleEscalierRenovationParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-12 bg-[#1C1C1C]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#D4AF37] text-[10px] font-light uppercase tracking-[0.25em] mb-4">
            Aménagement
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Escalier Intérieur Paris : bois, métal, béton — guide 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            L&apos;escalier est le point focal d&apos;un appartement duplex ou d&apos;une maison parisienne. Grinçant, usé,
            sans style ou démodé — il existe des solutions adaptées à chaque configuration et à chaque budget.
            Ce guide complet vous présente les matériaux, les types de rénovation, les prix 2025 et la réglementation
            applicable dans les immeubles parisiens.
          </p>
        </div>
      </section>

      {/* Section 1 — Introduction / problématiques */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les escaliers parisiens : des problèmes spécifiques à anticiper
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Les appartements duplex et les maisons parisiennes concentrent plusieurs typologies d&apos;escaliers :
              les escaliers en bois massif des immeubles haussmanniens (souvent grinçants après 100 ans d&apos;usure),
              les escaliers béton des constructions des années 1960-1990 (recouverts de moquette ou de carrelage
              vieilli), et les escaliers métalliques des lofts ou ateliers reconvertis.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Les problèmes les plus fréquents rencontrés par les propriétaires parisiens : grincements des marches
              bois (mortaises et tenons desserrés), usure du revêtement (moquette déchirée, carrelage fissuré),
              rampe cassée ou instable, balustres manquants, et non-conformité aux normes de sécurité actuelles
              (hauteur de garde-corps insuffisante, espacement trop large entre barreaux).
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Avant de définir le type d&apos;intervention, il est indispensable de diagnostiquer l&apos;état structurel
              de l&apos;escalier. Un escalier dont la structure porteuse (limons, marches, poteaux) est saine peut
              être rénové pour un budget modeste. Si la structure est compromise, une réfection complète s&apos;impose.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Grincements", detail: "Mortaises desserrées, marches usées — réparable sans dépose" },
              { label: "Usure revêtement", detail: "Moquette, carrelage vieilli — habillage neuf sur structure saine" },
              { label: "Rampe instable", detail: "Barreaux cassés, hauteur non conforme — remplacement obligatoire" },
            ].map((el) => (
              <div key={el.label} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-display text-base font-semibold text-[#D4AF37] mb-2">{el.label}</div>
                <div className="text-gray-600 text-xs font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Types de rénovation */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Les types de rénovation d&apos;escalier : du rafraîchissement au complet neuf
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Cinq grandes catégories de travaux correspondent à des niveaux d&apos;intervention et de budget très différents :
          </p>
          <div className="space-y-5">
            {[
              {
                travaux: "Peinture ou lasure des marches bois",
                prix: "500 – 2 000 €",
                detail: "Solution la plus économique : ponçage des marches, rebouchage des éclats, impression et lasure (teinte naturelle ou couvrant) ou peinture laquée. Résultat renouvelé pour 5 à 8 ans. Convient si la structure est saine et que seule la finition est usée. La peinture de la balustrade et de la rampe est généralement incluse dans ce budget.",
              },
              {
                travaux: "Habillage de marches béton (parquet, carrelage, résine)",
                prix: "2 000 – 6 000 € (10 marches)",
                detail: "Pour les escaliers béton bruts ou avec revêtement usé, l'habillage ajoute un nouveau matériau sur les marches existantes sans toucher à la structure. Parquet contrecollé chêne ou noyer : chaleureux, 150-250 €/marche posé. Carrelage grès cérame grand format : moderne et résistant, 100-200 €/marche. Résine époxy teintée : contemporaine, facile d'entretien, 80-150 €/marche. Nez de marche antidérapants obligatoires.",
              },
              {
                travaux: "Remplacement de la rampe et de la balustrade",
                prix: "1 500 – 4 000 €",
                detail: "La rampe et la balustrade (ensemble des barreaux verticaux) sont les éléments les plus visibles d'un escalier. Leur remplacement transforme radicalement l'aspect. Options plébiscitées à Paris : rampe métal noir mat (style contemporain), garde-corps verre trempé (effet loft), câbles inox tendus (minimaliste), rampe inox brossé. Hauteur réglementaire : 90 cm minimum.",
              },
              {
                travaux: "Remplacement de marches isolées",
                prix: "150 – 400 €/marche",
                detail: "Lorsque quelques marches sont abîmées (fissures, éclats) mais que la structure générale est saine, le remplacement ciblé évite une réfection complète. Sur un escalier bois, la dépose et repose de 3 à 5 marches représentent 500 à 1 500 €. Sur un escalier béton, le remplacement se fait par habillage.",
              },
              {
                travaux: "Escalier colimaçon ou escalier neuf complet",
                prix: "5 000 – 20 000 €",
                detail: "Quand la structure est trop dégradée ou que le design souhaité impose une refonte totale, la création d'un escalier neuf s'impose. Escalier colimaçon métal laqué : 5 000 à 10 000 € (idéal pour les petits duplex parisiens). Escalier droit bois massif sur mesure : 8 000 à 18 000 €. Escalier métal + marches bois : 10 000 à 20 000 €.",
              },
            ].map((el) => (
              <div key={el.travaux} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.travaux}</div>
                  <div className="text-[#B8960C] text-sm font-medium flex-shrink-0">{el.prix}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Matériaux recommandés */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Les matériaux recommandés pour rénover un escalier parisien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Chaque matériau présente des avantages et des contraintes spécifiques. Voici notre comparatif
            pour vous aider à choisir en fonction de votre style, votre budget et votre usage :
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                mat: "Bois massif (chêne, hêtre)",
                pour: "Chaleur, durabilité, style naturel ou classique",
                contre: "Sensible à l'humidité, entretien régulier, coût élevé",
                prix: "180 – 300 €/marche posée",
              },
              {
                mat: "Parquet stratifié ou contrecollé",
                pour: "Rapport qualité-prix, large choix de décors, pose rapide",
                contre: "Moins résistant que le massif sur marches à fort trafic",
                prix: "120 – 200 €/marche posée",
              },
              {
                mat: "Métal lacqué (acier noir ou gris)",
                pour: "Style industriel/loft, structure légère, résistant",
                contre: "Froid au toucher, bruit de résonance, prix élevé pour sur-mesure",
                prix: "300 – 600 €/marche (structure + marche)",
              },
              {
                mat: "Béton ciré",
                pour: "Continuité avec un sol béton ciré, contemporain, facile d'entretien",
                contre: "Glissant sans traitement antidérapant, sensible aux chocs",
                prix: "100 – 200 €/m² de surface",
              },
              {
                mat: "Carrelage grès cérame",
                pour: "Très résistant, facile à nettoyer, grand choix de formats",
                contre: "Froid, glissant (prévoir antidérapant R11), poids important",
                prix: "120 – 220 €/marche posée",
              },
              {
                mat: "Résine époxy",
                pour: "Revêtement continu, très contemporain, entretien minimal",
                contre: "Sensible aux UV (jaunissement), préparation du support impérative",
                prix: "80 – 150 €/marche",
              },
            ].map((el) => (
              <div key={el.mat} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-1">{el.mat}</div>
                <div className="text-[#B8960C] text-xs font-medium mb-2">{el.prix}</div>
                <div className="text-gray-600 text-xs font-light mb-1"><span className="text-green-700 font-medium">+ </span>{el.pour}</div>
                <div className="text-gray-600 text-xs font-light"><span className="text-red-600 font-medium">– </span>{el.contre}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Tableau des prix */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Tableau des prix — Rénovation escalier Paris 2025
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Travaux</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Durée</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { travaux: "Peinture / lasure 10 marches bois", budget: "500 – 2 000 €", duree: "1 – 3 jours" },
                  { travaux: "Habillage 10 marches béton en parquet", budget: "2 000 – 4 500 €", duree: "3 – 5 jours" },
                  { travaux: "Habillage 10 marches béton en carrelage", budget: "1 500 – 3 500 €", duree: "3 – 6 jours" },
                  { travaux: "Habillage 10 marches en résine", budget: "1 000 – 2 500 €", duree: "2 – 4 jours" },
                  { travaux: "Nouvelle rampe métal (10 ml)", budget: "1 500 – 4 000 €", duree: "1 – 3 jours" },
                  { travaux: "Garde-corps verre trempé (10 ml)", budget: "3 000 – 6 000 €", duree: "2 – 4 jours" },
                  { travaux: "Réfection complète escalier bois", budget: "8 000 – 18 000 €", duree: "5 – 12 jours" },
                  { travaux: "Escalier colimaçon métal neuf", budget: "5 000 – 10 000 €", duree: "3 – 7 jours" },
                  { travaux: "Escalier complet métal + marches bois", budget: "10 000 – 20 000 €", duree: "7 – 15 jours" },
                ].map((row, i) => (
                  <tr key={row.travaux} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-light text-sm">{row.travaux}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium text-sm">{row.budget}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light text-sm">{row.duree}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs font-light italic mt-3">
            Prix TTC Paris 2025. Variables selon état du support, accessibilité chantier et choix des matériaux.
          </p>
        </div>
      </section>

      {/* Section 5 — Réglementation */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Réglementation des escaliers à Paris : ce qu&apos;il faut savoir
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La rénovation d&apos;un escalier dans un immeuble parisien est soumise à plusieurs contraintes
            réglementaires et pratiques :
          </p>
          <div className="space-y-4">
            {[
              {
                titre: "Hauteur et dimensions des marches",
                detail: "La hauteur de contremarche est idéalement comprise entre 16 et 18 cm (max 20 cm), et le giron (profondeur de la marche) entre 27 et 30 cm. La relation h + g doit être comprise entre 59 et 66 cm (formule de Blondel). Sur un escalier existant, la rénovation ne modifie généralement pas ces dimensions, sauf en cas de réfection complète.",
              },
              {
                titre: "Largeur minimale de l'escalier",
                detail: "Pour un escalier privatif, la largeur minimale recommandée est de 80 cm (passage d'un adulte avec mobilier). Pour les escaliers en parties communes d'un immeuble collectif, les règles DTU 65 imposent une largeur minimale de 90 cm à 1,20 m selon le nombre de logements desservis.",
              },
              {
                titre: "Garde-corps et rampe obligatoires",
                detail: "Tout escalier comportant plus de 4 marches doit être équipé d'un garde-corps ou d'une rampe d'une hauteur minimale de 90 cm (100 cm recommandés en cas de vide en dessous). L'espacement entre les barreaux ne doit pas dépasser 11 cm pour les garde-corps côté vide, afin d'empêcher le passage d'un enfant.",
              },
              {
                titre: "Copropriété et secteurs sauvegardés",
                detail: "Pour un escalier privatif (duplex), aucune autorisation spéciale n'est requise si la structure portante n'est pas modifiée. Les escaliers en parties communes nécessitent un vote en assemblée générale. Dans les secteurs sauvegardés parisiens (Marais, Île Saint-Louis, Montmartre), le choix des matériaux visibles peut être soumis à l'accord de l'Architecte des Bâtiments de France.",
              },
            ].map((el) => (
              <div key={el.titre} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="flex items-start gap-2 mb-2">
                  <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.titre}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed pl-5">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-6 text-center">Questions fréquentes</p>
          <div className="space-y-4">
            {schemaFAQ.mainEntity.map((q) => (
              <div key={q.name} className="bg-white rounded-lg p-5 border border-gray-100">
                <p className="font-medium text-[#1C1C1C] text-sm mb-2">{q.name}</p>
                <p className="text-gray-600 text-sm font-light leading-relaxed">{q.acceptedAnswer.text}</p>
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
              { href: '/blog/renovation-appartement-ancien-paris', title: "Rénovation appartement ancien Paris" },
              { href: '/blog/parquet-massif-paris', title: "Parquet massif Paris" },
              { href: '/blog/menuiserie-sur-mesure-paris', title: "Menuiserie sur mesure Paris" },
              { href: '/blog/isolation-phonique-paris', title: "Isolation phonique Paris" },
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
              { href: '/renovation-paris-4e', label: 'Paris 4e' },
              { href: '/renovation-paris-6e', label: 'Paris 6e' },
              { href: '/renovation-paris-7e', label: 'Paris 7e' },
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-paris-17e', label: 'Paris 17e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
              { href: '/renovation-levallois-perret', label: 'Levallois-Perret' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
              { href: '/renovation-versailles', label: 'Versailles' },
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
          Rénovez l&apos;escalier de votre appartement parisien
        </h2>
        <p className="text-gray-400 text-sm font-light mb-8">
          Diagnostic gratuit. Conseils matériaux sur mesure. Devis sous 48h.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors"
          >
            Devis gratuit <ArrowRight size={16} />
          </Link>
          <a
            href="tel:+33611783867"
            className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"
          >
            <Phone size={16} />
            06 11 78 38 67
          </a>
        </div>
      </section>
    </>
  )
}
