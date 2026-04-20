import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Loué Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-loue-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Loué Paris : droits locataire & bailleur 2025 | Espace Design',
  description: 'Qui peut rénover un appartement loué à Paris ? Droits du bailleur, du locataire, travaux imposables. Guide juridique 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-loue-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Un locataire peut-il faire des travaux dans son appartement loué à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, dans certaines limites. Le locataire peut effectuer librement les travaux dits d'aménagement léger : peinture, pose de papier peint, petites fixations, remplacement d'un robinet qui fuit. En revanche, les travaux de transformation nécessitent l'accord écrit du bailleur : percement de murs, dépose de moquette pour poser du parquet, suppression de cloisons, remplacement de la cuisine. Sans cet accord, le bailleur peut exiger la remise en état aux frais du locataire à la fin du bail.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quels travaux le bailleur est-il obligé de faire dans un appartement loué à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le bailleur est légalement tenu de maintenir le logement en état de décence (loi du 6 juillet 1989). Cela inclut : un système de chauffage fonctionnel, une installation électrique conforme et sécurisée, des fenêtres et portes en bon état (sans courants d'air excessifs), une isolation thermique et phonique minimale, l'absence d'humidité, de moisissures ou de parasites, et les équipements sanitaires en état de fonctionnement. Si le bailleur refuse d'effectuer ces travaux, le locataire peut saisir la commission départementale de conciliation ou le tribunal.",
      },
    },
    {
      '@type': 'Question',
      name: 'Le locataire peut-il imposer des travaux au bailleur à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, dans certains cas. Si les travaux représentent plus de 3 mois de loyer (article 1724 du Code civil), le locataire peut demander une réduction de loyer ou la résiliation du bail si la gêne est trop importante. De plus, si le logement ne respecte pas les critères de décence (chauffage insuffisant, humidité excessive, installation électrique dangereuse), le locataire peut mettre en demeure le bailleur et, en cas de refus, saisir le juge pour obtenir la réalisation des travaux sous astreinte.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Loué Paris : droits locataire & bailleur 2025 | Espace Design',
  description: 'Qui peut rénover un appartement loué à Paris ? Droits du bailleur, du locataire, travaux imposables. Guide juridique 2025.',
}

export default function ArticleRenovationAppartementLoue() {
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
            Réglementation
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Appartement Loué Paris : droits locataire et bailleur 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Qui peut faire quoi dans un appartement loué à Paris ? Les droits et obligations du bailleur et du locataire en matière de travaux sont encadrés par la loi — mais restent souvent mal connus des deux parties. Guide juridique complet pour éviter les conflits et faire valoir vos droits en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Travaux du bailleur */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Travaux obligatoires du bailleur : le logement décent
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              La loi du 6 juillet 1989 et le décret du 30 janvier 2002 définissent les critères de décence qu&apos;un bailleur parisien doit respecter. Ces obligations ne sont pas négociables et s&apos;imposent même si le bail ne les mentionne pas explicitement.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              À Paris, de nombreux appartements anciens (immeubles des années 1900 à 1970) présentent des problèmes d&apos;humidité, d&apos;isolation thermique insuffisante ou d&apos;installation électrique vétuste. Ces défauts relèvent de la responsabilité du bailleur, pas du locataire.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Chauffage et installation thermique',
                  detail: "Le bailleur doit fournir un système de chauffage permettant de maintenir une température d'au moins 18°C dans toutes les pièces principales. Un radiateur électrique défaillant, une chaudière hors d'état ou une installation de chauffage collectif défectueuse relèvent de la responsabilité du bailleur. Le locataire peut le mettre en demeure d'intervenir par lettre recommandée.",
                },
                {
                  enjeu: 'Installation électrique',
                  detail: "Une installation électrique présentant des risques pour la sécurité (fils nus, prises sans terre dans une salle de bain, tableau électrique vétuste sans disjoncteur différentiel) doit être rénovée par le bailleur. Le locataire peut signaler les anomalies et demander une mise en conformité. En cas de refus, saisir la commission départementale de conciliation est la première étape.",
                },
                {
                  enjeu: 'Isolation et étanchéité',
                  detail: "Infiltrations d'eau par le toit ou les murs, humidité remontante, fenêtres laissant pénétrer les intempéries : ces défauts compromettent la décence du logement et doivent être traités par le bailleur. Un logement classé G sur le DPE (passoire thermique) sera progressivement interdit à la location : les propriétaires ont l'obligation légale de rénover.",
                },
                {
                  enjeu: 'Équipements sanitaires',
                  detail: "WC fonctionnel (et intérieur au logement pour les locations meublées), eau chaude, installation de douche ou de baignoire en état de marche : le bailleur est tenu de maintenir ces équipements en état de fonctionnement. Un ballon d'eau chaude défaillant doit être réparé ou remplacé dans un délai raisonnable (48 à 72h en hiver).",
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

      {/* Section 2 — Travaux du locataire */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Ce que le locataire peut (et ne peut pas) faire sans accord
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La loi distingue deux catégories de travaux pour le locataire : les travaux d&apos;aménagement léger (autorisés sans accord) et les travaux de transformation (nécessitant l&apos;accord écrit du bailleur).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Travaux libres (sans accord bailleur)',
                solution: 'Peinture des murs dans des teintes standards, pose de papier peint non structurant, fixation de tableaux et meubles (chevilles classiques), remplacement de robinets défaillants, pose de rideaux et stores, installation de petits meubles ou d\'étagères sans perçage structurel. À la fin du bail, le locataire doit remettre le logement en état (repeinture si nécessaire).',
                cout: 'Sans accord requis',
              },
              {
                titre: 'Travaux nécessitant accord bailleur',
                solution: "Dépose de moquette pour poser du parquet, remplacement de la cuisine ou de la salle de bain, suppression ou création de cloisons, percement de murs pour créer des ouvertures, pose d'une climatisation (percement de façade), changement des revêtements de sol. L'accord doit être obtenu par écrit avant le démarrage des travaux.",
                cout: 'Accord écrit obligatoire',
              },
              {
                titre: 'Travaux imposés au locataire sortant',
                solution: "Si le locataire a réalisé des travaux sans accord du bailleur, ce dernier peut : accepter les travaux sans indemnité (si ils améliorent le logement), ou exiger la remise en état aux frais du locataire à la sortie. L'état des lieux de sortie est le document de référence : un état des lieux d'entrée précis protège les deux parties.",
                cout: 'Risque financier',
              },
              {
                titre: 'Droit de conserver les améliorations',
                solution: "Si le locataire réalise des travaux avec l'accord du bailleur, il ne peut pas exiger d'indemnisation en fin de bail (sauf clause contraire). En revanche, les améliorations deviennent la propriété du bailleur. Si le bailleur a participé financièrement aux travaux, les modalités sont définies dans une convention signée entre les deux parties.",
                cout: 'Variable',
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

      {/* Section 3 — Travaux imposables et préavis */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Travaux imposables au bailleur et droits du locataire en cas de gêne
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Lorsque le bailleur réalise des travaux dans un appartement loué, le locataire dispose de droits spécifiques selon la nature et la durée des travaux. Ces droits sont encadrés par l&apos;article 1724 du Code civil et la loi ALUR.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Préavis travaux : 15 jours minimum',
                prix: 'Obligation légale',
                detail: "Le bailleur doit notifier le locataire par écrit (lettre recommandée avec accusé de réception) au moins 15 jours avant le début des travaux. La notification doit préciser : la nature des travaux, les modalités d'exécution, les dates prévisionnelles et la durée estimée. Sans ce préavis, le locataire peut refuser l'accès au logement aux artisans.",
              },
              {
                type: 'Travaux de plus de 21 jours : droit à indemnité',
                prix: 'Indemnisation obligatoire',
                detail: "Si les travaux durent plus de 21 jours consécutifs, le locataire a droit à une indemnité de la part du bailleur (article 1724 du Code civil). Le montant est proportionnel à la gêne occasionnée : généralement une réduction de loyer calculée en fonction de la surface inutilisable pendant les travaux. Cette indemnité est due même si le locataire reste dans le logement.",
              },
              {
                type: 'Travaux rendant le logement inhabitable',
                prix: 'Droit au relogement',
                detail: "Si les travaux rendent le logement totalement inhabitable (démolition partielle, coupure de chauffage en hiver prolongée, etc.), le bailleur doit proposer un hébergement de substitution à ses frais ou suspendre le loyer pendant la durée des travaux. Le locataire peut aussi demander la résiliation du bail si la situation se prolonge.",
              },
              {
                type: 'Travaux de plus de 3 mois de loyer',
                prix: 'Droit de résiliation',
                detail: "Selon l'article 1724 du Code civil, si les travaux représentent un investissement supérieur à 3 mois de loyer (hors charges) et durent plus de 40 jours, le locataire peut demander une réduction de loyer proportionnelle. En cas de gêne excessive et prolongée, il peut même demander la résiliation judiciaire du bail avec restitution du dépôt de garantie.",
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

      {/* Section 4 — Checklist */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Checklist : bailleur et locataire, que faire avant les travaux ?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Que vous soyez bailleur ou locataire, ces points sont essentiels pour éviter tout litige avant, pendant et après des travaux de rénovation dans un appartement loué parisien.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Relire le bail pour identifier les clauses spécifiques aux travaux',
              'Faire établir un état des lieux contradictoire avant tout chantier',
              'Notifier les travaux par écrit avec 15 jours de préavis minimum',
              'Obtenir un accord écrit du bailleur pour tout travail de transformation',
              'Documenter les travaux réalisés (photos, factures, devis signés)',
              'Conserver tous les courriers et échanges liés aux travaux',
              'Consulter la commission de conciliation en cas de désaccord amiable',
              'Faire appel à un artisan qualifié pour garantir la conformité des travaux',
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
              { href: '/renovation-appartement-paris', title: 'Rénovation appartement Paris' },
              { href: '/blog/investissement-locatif-renovation-paris', title: 'Investissement locatif Paris' },
              { href: '/blog/renovation-appartement-mise-en-location-paris', title: 'Rénovation avant mise en location' },
              { href: '/blog/devis-renovation-en-ligne-paris', title: 'Devis rénovation en ligne Paris' },
              { href: '/contact', title: 'Obtenir un devis gratuit' },
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
          Rénover un appartement loué à Paris : on vous accompagne
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Devis gratuit sous 48h. Travaux réalisés en coordination avec le locataire. Artisans expérimentés en rénovation locative parisienne.
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
