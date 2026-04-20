import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Cuisine Ouverte Paris', item: 'https://espacedesignparis.fr/blog/renovation-cuisine-ouverte-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Cuisine Ouverte Paris : séparation, îlot & prix 2025 | Espace Design',
  description: 'Ouvrir sa cuisine sur le salon à Paris : abattre mur porteur, verrière, îlot central, hotte décorative. Autorisations et prix 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-cuisine-ouverte-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Faut-il une autorisation pour ouvrir sa cuisine sur le salon à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Ouvrir la cuisine sur le salon à Paris nécessite deux types d'autorisation selon la nature des travaux. Si le mur à abattre est porteur, un permis de construire ou une déclaration préalable de travaux est obligatoire, ainsi qu'une étude de structure par un bureau d'études. Si l'appartement est en copropriété, l'accord de l'assemblée générale est requis pour tous travaux touchant aux murs porteurs (éléments communs). Pour une cloison légère non porteuse, une simple déclaration en mairie peut suffire.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quel est le prix pour abattre un mur porteur à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'ouverture d'un mur porteur à Paris coûte entre 3 000 et 8 000 € selon la longueur de l'ouverture et le type de structure. Ce prix inclut : l'étude de structure par un bureau agréé (500 à 1 500 €), la fourniture et pose d'un IPN (poutre métallique) adapté à la charge, la démolition contrôlée, et la reprise des finitions (plâtrerie, peinture). Pour une ouverture de moins de 2 m dans un immeuble ancien, prévoir 3 000 – 5 000 €. Au-delà de 3 m, le budget monte à 6 000 – 8 000 €.",
      },
    },
    {
      '@type': 'Question',
      name: 'Comment séparer cuisine et salon sans abattre de mur ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Plusieurs alternatives permettent d'ouvrir ou de délimiter la cuisine sans abattre de mur porteur : la verrière d'atelier (cloison vitrée sur ossature métallique, 2 000 – 5 000 €) laisse passer la lumière tout en délimitant les espaces ; le bar américain ou demi-cloison (800 – 2 000 €) crée une séparation visuelle sans fermer l'espace ; la hotte décorative centrale (1 500 – 4 000 €) matérialise la limite cuisine-salon sans séparation physique. Ces solutions évitent les démarches administratives liées aux murs porteurs.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Cuisine Ouverte Paris : séparation, îlot & prix 2025 | Espace Design',
  description: 'Ouvrir sa cuisine sur le salon à Paris : abattre mur porteur, verrière, îlot central, hotte décorative. Autorisations et prix 2025.',
}

export default function ArticleRenovationCuisineOuverteParis() {
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
            Cuisine
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Cuisine Ouverte Paris : séparation, îlot &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Ouvrir la cuisine sur le salon est l&apos;un des travaux les plus demandés dans les appartements parisiens : gain de luminosité, agrandissement visuel, convivialité retrouvée. Mur porteur, IPN, verrière, îlot central, hotte décorative : guide complet pour réussir votre cuisine ouverte à Paris en 2025, autorisations et prix inclus.
          </p>
        </div>
      </section>

      {/* Section 1 — Mur porteur */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Abattre un mur porteur à Paris : IPN, démarches et prix
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              La première question à trancher est la nature du mur à abattre. Dans les immeubles haussmanniens et les immeubles anciens parisiens, les murs de refend (murs porteurs) supportent les planchers et ne peuvent être abattus sans remplacement par une poutre métallique (IPN) dimensionnée par un bureau d&apos;études structure.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Distinguer un mur porteur d&apos;une cloison est la première étape : épaisseur supérieure à 20 cm, présence sur plusieurs niveaux, orientation perpendiculaire à la façade, et parfois un son plein au tapotement (contrairement au son creux d&apos;une cloison).
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Étude de structure (obligatoire)',
                  detail: 'Avant tout travaux sur un mur porteur, un bureau d\'études structure doit produire une note de calcul qui dimensionne l\'IPN à poser. Cette étude est obligatoire pour obtenir les autorisations administratives et couvre la responsabilité de l\'entreprise et du propriétaire. Coût : 500 à 1 500 € selon la complexité.',
                },
                {
                  enjeu: 'Pose de l\'IPN (poutre métallique)',
                  detail: 'La poutre IPN (en acier laminé) reprend la charge du plancher sur toute la largeur de l\'ouverture. Elle est dimensionnée selon la charge à reprendre (étages au-dessus) et la portée (largeur de l\'ouverture). Les travaux nécessitent un étaiement provisoire pendant la dépose du mur. La poutre est ensuite habillée (carton-plâtre ou habillage bois) pour disparaître dans la finition.',
                },
                {
                  enjeu: 'Autorisations en copropriété',
                  detail: 'Dans un appartement en copropriété parisienne, les murs porteurs sont presque toujours des parties communes. L\'accord de l\'assemblée générale est requis, souvent à la majorité simple (article 25 de la loi de 1965). Il faut déposer la demande avec le rapport du bureau d\'études et attendre l\'AG. Prévoir 3 à 12 mois de délai selon la prochaine AG prévue.',
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

      {/* Section 2 — Alternatives au mur porteur */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Alternatives à l&apos;abattage de mur : verrière, bar américain, demi-cloison
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Lorsque le mur est porteur et que les démarches semblent trop contraignantes, ou simplement pour délimiter deux espaces sans les fermer, plusieurs alternatives permettent d&apos;ouvrir la cuisine sur le salon sans abattage.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Verrière d\'atelier',
                prix: '2 000 – 5 000 €',
                detail: 'Cloison vitrée sur ossature métallique noire. Laisse passer la lumière tout en délimitant les deux espaces (odeurs de cuisine, bruit). Style industriel très tendance dans les appartements parisiens contemporains. Peut s\'ouvrir partiellement avec des panneaux coulissants.',
              },
              {
                titre: 'Bar américain ou passe-plat',
                prix: '800 – 2 500 €',
                detail: 'Demi-cloison avec plan de travail en saillie côté salon. Délimite visuellement les espaces sans fermer la pièce. Peut intégrer des rangements côté cuisine. La hauteur standard est de 90 à 110 cm — idéale pour un usage bar ou petit-déjeuner.',
              },
              {
                titre: 'Demi-cloison en briques apparentes',
                prix: '1 500 – 3 500 €',
                detail: 'Cloison basse (environ 1,20 m) en briques de parement qui délimite la cuisine sans fermer l\'espace. Apporte du caractère et du cachet, particulièrement adapté aux appartements haussmanniens. Peut servir de support pour un plan de travail en surélévation.',
              },
              {
                titre: 'Étagères ouvertes suspendues',
                prix: '400 – 1 200 €',
                detail: 'Des étagères fixées dans l\'axe de l\'ouverture, du sol au plafond, délimitent visuellement les espaces sans fermer la pièce. Solution légère, réversible, idéale pour les locataires ou les copropriétés strictes. Les étagères servent de rangement et de décoration simultanément.',
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.titre}</div>
                  <div className="text-[#B8960C] text-sm font-medium flex-shrink-0">{el.prix}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Îlot central */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Îlot central : le cœur de la cuisine ouverte parisienne
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;îlot central est devenu l&apos;élément signature de la cuisine ouverte. Il matérialise la frontière entre cuisine et salon tout en offrant un espace de préparation supplémentaire, un plan de repas convivial et des rangements intégrés. À Paris, sa conception doit tenir compte de la surface disponible.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Îlot mobile (moins de 25 m² cuisine-salon)',
                prix: '400 – 1 500 €',
                detail: 'Un îlot sur roulettes peut être repositionné selon les usages. Idéal dans les petits espaces où la configuration doit rester flexible. Les modèles en bois massif ou métal industriel s\'intègrent dans tous les styles. Pas de raccordement eau ou électricité donc aucune contrainte technique.',
              },
              {
                type: 'Îlot fixe sans évacuation (25 à 40 m²)',
                prix: '1 000 – 3 000 €',
                detail: 'Plan de travail fixe sur caissons, sans raccordement plomberie. Intègre des rangements côté salon (tiroirs, niches) et un débordement de plan de travail pour le côté bar. Le plan peut être en bois, béton ciré, quartz ou stratifié selon le budget et le style.',
              },
              {
                type: 'Îlot avec évier ou plaque de cuisson (plus de 35 m²)',
                prix: '3 000 – 8 000 €',
                detail: 'Îlot entièrement équipé avec raccordement plomberie (évier) ou électricité (plaque induction). La hotte suspendue au plafond est alors obligatoire pour l\'extraction des vapeurs. Conception sur mesure par un menuisier cuisiniste. Investissement significatif mais valorisant pour le bien.',
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

      {/* Section 4 — Hotte et éclairage */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Hotte décorative et éclairage : délimiter les zones sans cloisonner
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
            Dans une cuisine ouverte, la hotte et l&apos;éclairage jouent un rôle à la fois fonctionnel et architectural. La hotte décorative suspendue au-dessus de l&apos;îlot ou de la plaque matérialise visuellement la zone cuisine sans cloison physique. L&apos;éclairage différencié cuisine et salon structure les deux espaces dans la continuité.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Hotte décorative centrale suspendue',
                prix: '1 500 – 4 000 €',
                detail: 'La hotte suspendue au-dessus de l\'îlot ou de la plaque est l\'élément décoratif fort de la cuisine ouverte. Les modèles en inox, cuivre ou béton deviennent un véritable objet de design. Elle nécessite un conduit d\'évacuation en plafond (ou mode recyclage si impossible). Prévoir le raccordement électrique dès la conception.',
              },
              {
                type: 'Éclairage zone cuisine (spots encastrés)',
                prix: '600 – 1 500 €',
                detail: 'Des spots LED encastrés au plafond, ciblés sur la zone cuisine (plan de travail, îlot), délimitent la zone fonctionnelle sans créer de cloison. L\'association avec un bandeau LED sous les meubles hauts éclaire directement le plan de travail et réduit les ombres portées.',
              },
              {
                type: 'Luminaire suspendu sur le salon (séparation visuelle)',
                prix: '300 – 1 200 €',
                detail: 'Un lustre ou un groupe de suspensions positionné au-dessus de la table du salon marque visuellement la séparation entre les deux zones. Le contraste entre l\'éclairage fonctionnel de la cuisine et l\'éclairage d\'ambiance du salon renforce la distinction des espaces malgré l\'ouverture.',
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

      {/* Section 5 — Budget total */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Budget cuisine ouverte à Paris : prix 2025 par poste
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent main d&apos;œuvre et matériaux inclus, pour un artisan qualifié intervenant à Paris intra-muros.
          </p>

          <div className="space-y-3 mb-10">
            {[
              {
                prestation: 'Abattage mur porteur + IPN (ouverture 2 m)',
                prix: '3 000 – 5 000 €',
                detail: 'Étude de structure, pose IPN, démolition contrôlée, reprise finitions. Hors démarches copropriété.',
              },
              {
                prestation: 'Abattage mur porteur + IPN (ouverture 3 à 4 m)',
                prix: '5 000 – 8 000 €',
                detail: 'Grande ouverture, IPN long, étaiement renforcé, reprise plâtrerie et peinture.',
              },
              {
                prestation: 'Abattage cloison légère (non porteuse)',
                prix: '500 – 1 500 €',
                detail: 'Démolition simple, reprise des raccords électriques si nécessaire, finitions.',
              },
              {
                prestation: 'Verrière d\'atelier (cloison vitrée)',
                prix: '2 000 – 5 000 €',
                detail: 'Ossature métal laqué + vitrages doubles ou simples, pose comprise.',
              },
              {
                prestation: 'Bar américain ou demi-cloison',
                prix: '800 – 2 500 €',
                detail: 'Plan de travail en saillie, cloison basse, finitions peinture.',
              },
              {
                prestation: 'Îlot central fixe (sans raccordement)',
                prix: '1 000 – 3 000 €',
                detail: 'Caissons sur mesure, plan de travail, finitions côté salon.',
              },
              {
                prestation: 'Cuisine ouverte complète (mur + îlot + équipements)',
                prix: '10 000 – 20 000 €',
                detail: 'Abattage mur porteur + nouvelle cuisine équipée + îlot + éclairage + hotte.',
              },
            ].map((el) => (
              <div key={el.prestation} className="grid grid-cols-[1fr_auto] gap-4 bg-[#FAFAF8] rounded-lg p-4 border border-gray-100">
                <div>
                  <div className="font-medium text-[#1C1C1C] text-sm mb-1">{el.prestation}</div>
                  <div className="text-gray-500 text-xs font-light">{el.detail}</div>
                </div>
                <div className="text-[#B8960C] text-sm font-medium self-center whitespace-nowrap">{el.prix}</div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils pour réussir sa cuisine ouverte à Paris
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Faire identifier le mur par un bureau d\'études avant tout devis — erreur de diagnostic = surcoût important',
                'Déposer la demande en AG de copropriété dès que possible — les délais peuvent dépasser 6 mois',
                'Prévoir une hotte à recyclage si le conduit en plafond est impossible — efficacité réduite mais fonctionnel',
                'Intégrer l\'éclairage dès la conception — modifier le plafond après la peinture est coûteux',
                'Choisir un plan de travail de l\'îlot dans la même matière que la cuisine — cohérence visuelle forte',
                'Anticiper les raccordements électriques de l\'îlot avant de poser le sol — la gaine est invisible sous la chape',
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
              { href: '/cuisine-paris', title: 'Cuisine Paris' },
              { href: '/renovation-paris', title: 'Rénovation appartement Paris' },
              { href: '/blog/renovation-salon-paris', title: 'Rénovation salon Paris' },
              { href: '/blog/renovation-salle-de-bain-petite-surface-paris', title: 'Petite salle de bain Paris' },
              { href: '/blog/renovation-bureau-paris', title: 'Aménagement bureau Paris' },
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
          Ouvrez votre cuisine sur le salon à Paris
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis détaillé sous 48h. Artisans spécialisés en rénovation parisienne.
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
