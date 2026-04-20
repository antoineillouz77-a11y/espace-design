import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Balcon Copropriété Paris', item: 'https://espacedesignparis.fr/blog/renovation-balcon-terrasse-immeuble-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Balcon Copropriété Paris : travaux, autorisations & prix 2025',
  description: 'Rénover son balcon en copropriété à Paris : parties communes vs privatives, autorisations AG, carrelage, étanchéité. Prix 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-balcon-terrasse-immeuble-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Ai-je besoin d\'une autorisation pour rénover mon balcon en copropriété à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cela dépend des travaux envisagés. Le remplacement du carrelage du sol (partie commune à usage privatif) nécessite généralement une autorisation de l\'assemblée générale (AG). En revanche, peindre l\'intérieur du garde-corps ou poser un revêtement sans modifier la structure sont souvent considérés comme des travaux privatifs. Dans tous les cas, consultez votre règlement de copropriété et le syndic avant de démarrer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle étanchéité pour un balcon parisien fissuré ou qui prend l\'eau ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pour un balcon qui prend l\'eau, la solution standard est l\'application d\'une résine d\'étanchéité liquide en deux couches, précédée d\'un primaire d\'accrochage. Le système est complété par une membrane armée aux joints et relevés (angles). Cette technique est compatible avec la pose de carrelage antidérapant par-dessus. Comptez 80 à 150 €/m² pour l\'étanchéité seule, main d\'œuvre incluse.',
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on installer un garde-corps en verre sur un balcon parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, sous conditions. La hauteur minimale réglementaire est de 1 m (1,10 m si le plancher est situé à plus de 6 m du sol). Le garde-corps étant une partie commune de l\'immeuble, sa modification nécessite un vote en AG. À Paris, les immeubles haussmanniens classés imposent parfois des contraintes esthétiques (fer forgé, couleur) définies par l\'ABF (Architecte des Bâtiments de France). Un dépôt de déclaration préalable en mairie est souvent nécessaire.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Balcon Copropriété Paris : travaux, autorisations & prix 2025 | Espace Design',
  description: 'Rénover son balcon en copropriété à Paris : parties communes vs privatives, autorisations AG, carrelage, étanchéité. Prix 2025.',
}

export default function ArticleRenovationBalcon() {
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
            Rénovation Balcon Copropriété Paris : travaux, autorisations & prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Rénover un balcon en copropriété parisienne est plus encadré qu&apos;il n&apos;y paraît. Entre parties communes et privatives, autorisations d&apos;AG, étanchéité et choix du revêtement, ce guide vous aide à aborder votre projet sereinement en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Parties communes vs privatives */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Parties communes et parties privatives : ce que dit la loi
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Dans un immeuble en copropriété parisien, le balcon est une zone hybride. La structure porteuse (dalle béton, solives), le carrelage du sol et le garde-corps sont généralement des parties communes — même si vous en avez la jouissance exclusive. L&apos;intérieur du balcon (plafond côté appartement, murs intérieurs) est quant à lui privatif.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Cette distinction a des conséquences directes sur les travaux que vous pouvez entreprendre sans demander l&apos;accord de la copropriété, et ceux qui nécessitent un vote en assemblée générale.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Le sol du balcon — partie commune à usage privatif',
                  detail: 'La dalle et le revêtement de sol du balcon sont généralement des parties communes. Remplacer le carrelage nécessite l\'accord de la copropriété (vote en AG). Le règlement de copropriété peut imposer des matériaux ou des couleurs précises pour préserver l\'harmonie de l\'immeuble.',
                },
                {
                  enjeu: 'Le garde-corps — partie commune',
                  detail: 'Le garde-corps (rambarde, balustrade) est presque toujours une partie commune. Sa modification, son remplacement ou son renforcement requiert un vote en AG et souvent une déclaration préalable en mairie. La hauteur réglementaire minimale est de 1 m (1,10 m au-delà de 6 m de hauteur).',
                },
                {
                  enjeu: 'Les murs intérieurs du balcon — parties privatives',
                  detail: 'Peindre ou revêtir les murs intérieurs du balcon (la face intérieure du mur de façade, visible uniquement depuis votre balcon) est généralement libre. En revanche, toute modification de la façade visible de l\'extérieur est soumise à autorisation.',
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

      {/* Section 2 — Autorisations AG */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Autorisations en assemblée générale : ce qu&apos;il faut demander
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Pour tout travaux touchant aux parties communes, une résolution doit être inscrite à l&apos;ordre du jour de l&apos;AG et votée. Le quorum requis varie selon la nature des travaux : majorité simple (article 24), majorité absolue (article 25) ou double majorité (article 26).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Remplacement du carrelage',
                detail: 'Vote en AG à la majorité de l\'article 24 ou 25 selon le règlement. Fournissez un descriptif matériaux, un plan et un devis artisan pour appuyer votre demande. Délai moyen : 3 à 6 mois selon la date de l\'AG.',
                cout: 'Majorité simple',
              },
              {
                titre: 'Modification du garde-corps',
                detail: 'Vote requis à la majorité de l\'article 25. Joindre une note technique sur la conformité réglementaire (hauteur, résistance) et l\'avis de l\'architecte si l\'immeuble est protégé ABF.',
                cout: 'Majorité absolue',
              },
              {
                titre: 'Pergola ou store banne',
                detail: 'Toute installation visible de l\'extérieur (pergola, store, brise-vue) modifie l\'aspect de l\'immeuble. Vote AG requis + déclaration préalable en mairie. L\'ABF peut s\'opposer si l\'immeuble est en secteur sauvegardé.',
                cout: 'Majorité absolue',
              },
              {
                titre: 'Travaux d\'étanchéité urgents',
                detail: 'En cas de fuite avérée menaçant les parties communes ou les voisins du dessous, le syndic peut autoriser des travaux urgents sans attendre l\'AG (article 37 du décret de 1967). Prévenez le syndic par écrit.',
                cout: 'Urgence : syndic',
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

      {/* Section 3 — Étanchéité */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Étanchéité du balcon : primaire d&apos;accrochage et résine
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Un balcon parisien exposé aux intempéries finit toujours par présenter des infiltrations si l&apos;étanchéité n&apos;est pas entretenue. La solution professionnelle combine un primaire d&apos;accrochage, une résine d&apos;étanchéité liquide et une finition antidérapante. Elle est compatible avec la pose de carrelage ou de lames composite par-dessus.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Diagnostic : repérer les zones à traiter',
                prix: 'Inclus devis',
                detail: 'Avant tout travaux, il faut identifier les fissures (joints dilatation, relevés d\'étanchéité), les zones de stagnation d\'eau et l\'état du revêtement existant. Un balcon qui prend l\'eau nécessite une reprise d\'étanchéité complète avant repose du carrelage.',
              },
              {
                type: 'Primaire d\'accrochage',
                prix: '5 – 15 €/m²',
                detail: 'Appliqué sur le support nettoyé et dépoussiéré, le primaire renforce l\'adhérence de la résine et consolide les microfissures superficielles. Séchage 2 à 4h selon les conditions. Indispensable sur support béton ancien.',
              },
              {
                type: 'Résine d\'étanchéité liquide + membrane armée',
                prix: '40 – 80 €/m²',
                detail: 'Application en deux couches croisées de résine polyuréthane ou PMMA. Une membrane en voile de verre est noyée dans la première couche aux angles et relevés (zones de faiblesse). Résistance aux UV, aux cycles gel-dégel et aux eaux de pluie. Durée de vie : 15 à 25 ans.',
              },
              {
                type: 'Finition antidérapante ou pose carrelage',
                prix: '30 – 60 €/m²',
                detail: 'La résine peut recevoir un agrégat de quartz coloré pour un résultat fini antidérapant (résistance R11), ou servir de base pour la pose de carrelage antidérapant (grès cérame classe A+B+C). Le tout est réalisé en une seule intervention.',
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

      {/* Section 4 — Revêtements */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Revêtements de sol : carrelage antidérapant et lames composite
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le choix du revêtement de sol conditionne l&apos;esthétique, la durabilité et la sécurité du balcon. À Paris, deux matériaux s&apos;imposent pour leur résistance aux intempéries et aux cycles gel-dégel : le grès cérame antidérapant et les lames composite imitation bois.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Carrelage grès cérame antidérapant',
                prix: '50 – 120 €/m²',
                detail: 'Solution la plus durable. Le grès cérame est insensible au gel, imperméable et résistant aux chocs. Choisir une classification antidérapante R11 minimum pour un balcon. Les formats XXL (60×60 ou 60×120 cm) offrent moins de joints, donc moins de points d\'infiltration. Pose sur chape ou lit de mortier-colle.',
              },
              {
                type: 'Lames composite imitation bois (WPC)',
                prix: '60 – 150 €/m²',
                detail: 'Esthétique bois sans l\'entretien. Le WPC (bois-polymère composite) résiste à l\'eau, aux UV et au gel. Pose sur plots réglables ou sur lambourdes, ce qui crée une ventilation sous le plancher et protège l\'étanchéité. Idéal sur les balcons déjà étanches. Entretien annuel : nettoyage haute-pression.',
              },
              {
                type: 'Carrelage imitation bois (grès cérame décor bois)',
                prix: '55 – 130 €/m²',
                detail: 'Compromis entre l\'esthétique du parquet et la durabilité du grès cérame. Formats longs et étroits (20×120 cm), texturation du bois, tons chaleureux. Très demandé sur les balcons parisiens pour leur look contemporain et leur facilité d\'entretien.',
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

      {/* Section 5 — Prix */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Budget rénovation balcon Paris : prix 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent pour un balcon de 6 à 10 m² à Paris, main d&apos;œuvre et matériaux inclus.
          </p>

          <div className="grid grid-cols-1 gap-3 mb-8">
            {[
              {
                niveau: 'Réfection carrelage simple',
                prestations: 'Dépose ancien carrelage + pose grès cérame antidérapant (sans reprise étanchéité)',
                prix: '1 500 – 3 000 €',
              },
              {
                niveau: 'Étanchéité + carrelage',
                prestations: 'Primaire + résine étanchéité + pose carrelage grès cérame ou WPC',
                prix: '3 000 – 5 000 €',
              },
              {
                niveau: 'Rénovation complète',
                prestations: 'Étanchéité + carrelage + garde-corps + peinture murs',
                prix: '5 000 – 8 000 €',
              },
              {
                niveau: 'Rénovation premium',
                prestations: 'Étanchéité + lames WPC + garde-corps verre + pergola + éclairage',
                prix: '8 000 – 15 000 €',
              },
            ].map((row) => (
              <div key={row.niveau} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <div className="font-medium text-[#1C1C1C] text-sm mb-1">{row.niveau}</div>
                  <div className="text-gray-600 text-xs font-light">{row.prestations}</div>
                </div>
                <div className="text-[#B8960C] font-medium text-sm flex-shrink-0">{row.prix}</div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Points de vigilance avant de commencer
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Consulter le règlement de copropriété avant tout travaux de sol ou de garde-corps',
                'Vérifier si l\'immeuble est en secteur ABF (Architecte des Bâtiments de France)',
                'Envoyer une demande d\'inscription à l\'ordre du jour de l\'AG au syndic',
                'Prévoir une reprise d\'étanchéité systématique si le balcon a plus de 15 ans',
                'Choisir un carrelage classé R11 minimum (résistance antidérapante extérieure)',
                'Vérifier la pente d\'évacuation des eaux (minimum 1,5 %) avant la pose du nouveau revêtement',
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
              { href: '/carrelage-paris', title: 'Carrelage Paris' },
              { href: '/ravalement-facade-paris', title: 'Ravalement façade Paris' },
              { href: '/blog/renovation-appartement-copropriete-paris', title: 'Rénovation appartement en copropriété' },
              { href: '/blog/ravalement-facade-paris', title: 'Ravalement de façade Paris' },
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
          Votre balcon mérite une rénovation soignée
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis détaillé sous 48h. Artisan spécialisé en rénovation de balcons parisiens.
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
