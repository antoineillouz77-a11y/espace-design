import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Nettoyage Après Travaux Paris', item: 'https://espacedesignparis.fr/blog/nettoyage-apres-travaux-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Nettoyage Après Travaux Paris : tarifs, entreprises & astuces 2025',
  description: 'Faire nettoyer son appartement après rénovation à Paris : poussière plâtre, résidus peinture, vitres. Tarifs et conseils artisan 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/nettoyage-apres-travaux-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien coûte un nettoyage après travaux à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le nettoyage après travaux à Paris coûte généralement entre 3 et 8 €/m² selon l\'ampleur du chantier et le niveau de finition souhaité. Pour un appartement de 60 m², comptez 180 – 480 € pour un nettoyage standard, et jusqu\'à 600 – 900 € pour un nettoyage complet incluant vitres, dégraissage carrelage et traitement des résidus de peinture. Ces tarifs incluent la main d\'œuvre et les produits professionnels.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pourquoi la poussière de plâtre est-elle dangereuse ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La poussière de plâtre et de platrage contient des particules fines (PM10 et PM2.5) qui peuvent pénétrer profondément dans les voies respiratoires. Certains plâtres et matériaux de construction anciens contiennent de la silice cristalline, reconnue comme cancérigène par le CIRC. Il est donc recommandé de ne pas occuper le logement pendant et juste après les travaux, d\'aérer abondamment, et de faire réaliser le nettoyage par des professionnels équipés de masques FFP2/FFP3 et d\'aspirateurs avec filtres HEPA.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle différence entre nettoyage courant et nettoyage de chantier ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le nettoyage courant (ménage classique) ne suffit pas après des travaux de rénovation. Le nettoyage de chantier requiert des équipements professionnels : aspirateur industriel avec filtre HEPA pour capter les particules fines, décroteuses pour les résidus de ciment et colle, produits décapants pour les éclaboussures de peinture, raclettes professionnelles pour les vitres. La poussière de plâtre, si elle est simplement repoussée avec un balai, se redépose partout. Un nettoyage de chantier est systématiquement plus long et plus intensif qu\'un ménage standard.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Nettoyage Après Travaux Paris : tarifs, entreprises & astuces 2025',
  description: 'Faire nettoyer son appartement après rénovation à Paris : poussière plâtre, résidus peinture, vitres. Tarifs et conseils artisan 2025.',
}

export default function ArticleNettoyageApresTravaux() {
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
            Nettoyage Après Travaux Paris : tarifs, entreprises &amp; astuces 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Poussière de plâtre, résidus de peinture, ciment sur le carrelage, vitres encrassées : après un chantier de rénovation, le nettoyage est une étape incontournable avant d&apos;emménager ou de réintégrer son appartement parisien. Guide complet des types de nettoyage, dangers à éviter et tarifs 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Types de nettoyage post-chantier */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les types de nettoyage après chantier
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Un nettoyage post-chantier ne ressemble pas à un ménage classique. L&apos;ampleur des travaux réalisés détermine le type d&apos;intervention nécessaire : de la simple remise en état à la décontamination complète des surfaces.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Nettoyage de remise en état (petits travaux)',
                  detail: 'Après des travaux légers — pose de papier peint, peinture d\'une pièce, petite plomberie — un nettoyage approfondi suffit : dépoussiérage des surfaces, lavage des sols, nettoyage des vitres et sanitaires. Durée : 2 à 4 heures pour un appartement de 50 m². Tarif : 3 – 4 €/m².',
                },
                {
                  enjeu: 'Nettoyage de chantier complet (rénovation partielle)',
                  detail: 'Après une rénovation de cuisine, salle de bain ou chambre : élimination des poussières fines en suspension, nettoyage des résidus de plâtre et mortier, dégraissage des carrelages et joints, traitement des éclaboussures de peinture. Nécessite des équipements professionnels (aspirateur HEPA, décroteuse). Tarif : 4 – 6 €/m².',
                },
                {
                  enjeu: 'Nettoyage de fin de chantier (rénovation totale)',
                  detail: 'Après une rénovation complète de l\'appartement (sol à sol, tous corps de métier) : nettoyage profond de toutes les surfaces, décontamination des poussières de silice, nettoyage des vitrages et huisseries, polissage des sols neufs, nettoyage des gaines de ventilation. Durée : 1 à 3 jours. Tarif : 6 – 8 €/m².',
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

      {/* Section 2 — Poussière de plâtre */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Poussière de plâtre et silice : un danger sous-estimé
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La poussière générée lors de travaux de plâtrerie, de découpe de carrelage ou de ponçage contient des particules fines qui restent en suspension dans l&apos;air plusieurs heures après la fin des travaux. Certains matériaux de construction contiennent de la silice cristalline, reconnue comme substance cancérigène par le Centre International de Recherche sur le Cancer (CIRC).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Particules PM2.5 et PM10',
                solution: 'Les particules inférieures à 10 microns (PM10) pénètrent dans les voies respiratoires supérieures. Les PM2.5 atteignent les alvéoles pulmonaires. Une exposition prolongée peut provoquer des irritations chroniques des voies respiratoires.',
                niveau: 'Risque modéré',
              },
              {
                titre: 'Silice cristalline (quartz)',
                solution: 'Présente dans le ciment, le béton, certains carrelages et matériaux anciens. L\'inhalation répétée de poussières de silice provoque la silicose, maladie pulmonaire irréversible. Classée cancérigène de groupe 1 pour le poumon.',
                niveau: 'Risque élevé',
              },
              {
                titre: 'Fibres d\'amiante (bâtiments avant 1997)',
                solution: 'Dans les appartements construits avant 1997, certains matériaux peuvent contenir de l\'amiante (colles, dalles vinyle, flocages). En cas de doute, un diagnostic amiante est obligatoire avant travaux. Le désamiantage est réglementé.',
                niveau: 'Risque très élevé',
              },
              {
                titre: 'Résidus de peinture ancienne (plomb)',
                solution: 'Les peintures anciennes (avant 1949 pour les habitations à risque) peuvent contenir du plomb. Ponçage ou grattage sans protection expose les occupants et les artisans. Un constat de risque d\'exposition au plomb (CREP) est obligatoire dans certains cas.',
                niveau: 'Risque élevé',
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.titre}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.niveau}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.solution}</div>
              </div>
            ))}
          </div>
          <div className="bg-[#1C1C1C] rounded-lg p-5">
            <p className="text-white text-sm font-light leading-relaxed">
              <span className="text-[#D4AF37] font-medium">Recommandation : </span>
              Ne réintégrez pas votre appartement parisien immédiatement après des travaux de plâtrerie ou de démolition. Aérez abondamment (48 à 72 heures), puis faites réaliser le nettoyage par des professionnels équipés de masques FFP2 ou FFP3 et d&apos;aspirateurs industriels avec filtres HEPA.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 — Résidus peinture et ciment */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Résidus de peinture, ciment et colle : comment les éliminer
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les éclaboussures de peinture, les résidus de mortier et les traces de colle font partie des salissures les plus tenaces après un chantier. Leur élimination requiert des produits et des techniques adaptées à chaque type de surface.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Éclaboussures de peinture fraîche',
                methode: 'Eau chaude et savon suffisent si la peinture est encore fraîche (moins de 24h). Pour la peinture glycéro sèche : white-spirit ou décapant spécifique. Ne jamais gratter avec un outil métallique sur un sol ou un carrelage — risque de rayures profondes.',
                surface: 'Sol, carrelage, vitres',
              },
              {
                type: 'Résidus de mortier et ciment sec',
                methode: 'Acide phosphorique dilué (disponible en négoce professionnel) pour dissoudre le calcaire du ciment. Pour les sols en carrelage : décroteuse professionnelle ou grattoir plastique, puis rinçage abondant. Éviter les acides forts sur les joints.',
                surface: 'Carrelage, béton, pierre',
              },
              {
                type: 'Traces de colle à carrelage',
                methode: 'La colle à carrelage sèche est extrêmement tenace. Solution professionnelle : dissolvant à base de diméthoxyéthanol ou mécanique (grattoir avec lame de 45°). Les produits ménagers courants sont inefficaces sur la colle époxy.',
                surface: 'Sol, murs, baignoire',
              },
              {
                type: 'Enduit et plâtre projeté',
                methode: 'Grattage à sec dès que le plâtre est sec (éviter de le mouiller sur un sol qui n\'est pas carrelé). Pour les projections sur carrelage : éponge humide et frottage circulaire. Pour les fenêtres et huisseries : spatule plastique souple pour ne pas rayer le PVC.',
                surface: 'Vitrages, huisseries, carrelage',
              },
            ].map((el) => (
              <div key={el.type} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.type}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.surface}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.methode}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Sol et vitres */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Nettoyage des sols neufs et des vitres après chantier
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
            Les sols nouvellement posés (parquet, carrelage, béton ciré) et les vitrages nécessitent un traitement spécifique pour éviter les dommages irréversibles lors du premier nettoyage.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Parquet neuf',
                detail: 'Éviter l\'eau en excès (risque de gonflement). Aspirer d\'abord les poussières avec un aspirateur HEPA, puis passer une serpillière légèrement humide avec un nettoyant parquet neutre. Ne jamais utiliser de produits acides ou de vapeur sur un parquet huilé ou vitrifié neuf.',
              },
              {
                titre: 'Carrelage et joints neufs',
                detail: 'Attendre au minimum 7 jours après la pose avant un nettoyage intensif (prise complète du mortier). Utiliser un nettoyant dégraissant dilué pour le premier lavage. Les joints blancs neufs se tachent facilement : appliquer un hydrofuge à joint après le premier nettoyage.',
              },
              {
                titre: 'Béton ciré neuf',
                detail: 'Le béton ciré est protégé par une cire ou un vernis. Le premier nettoyage doit être réalisé uniquement avec un chiffon microfibre légèrement humide et un savon noir dilué. Éviter absolument les nettoyants ménagers abrasifs ou acides qui détruisent le vernis de protection.',
              },
              {
                titre: 'Vitres et fenêtres',
                detail: 'Les vitrages accumulent les projections de plâtre, peinture et silicone. Méthode professionnelle : mouiller abondamment, gratter délicatement avec une lame de vitrier propre, puis finition à la raclette avec du produit vitres. Les fenêtres PVC doivent être nettoyées avec un produit non abrasif pour conserver leur brillance.',
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.titre}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Tarifs */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Tarifs du nettoyage après travaux à Paris en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent pour un appartement parisien, main d&apos;œuvre et produits inclus.
          </p>

          <div className="mb-8">
            <div className="grid grid-cols-4 gap-0 bg-[#1C1C1C] rounded-t-lg">
              <div className="px-4 py-3 text-white text-xs font-light uppercase tracking-wider">Type</div>
              <div className="px-4 py-3 text-white text-xs font-light uppercase tracking-wider text-center">Surface</div>
              <div className="px-4 py-3 text-white text-xs font-light uppercase tracking-wider text-center">Prix / m²</div>
              <div className="px-4 py-3 text-white text-xs font-light uppercase tracking-wider text-center">Durée</div>
            </div>
            {[
              {
                type: 'Remise en état légère',
                surface: '30 – 100 m²',
                prix: '3 – 4 €/m²',
                duree: '2 – 4h',
                even: true,
              },
              {
                type: 'Nettoyage chantier partiel',
                surface: '50 – 100 m²',
                prix: '4 – 6 €/m²',
                duree: '4 – 8h',
                even: false,
              },
              {
                type: 'Nettoyage fin de chantier',
                surface: '50 – 150 m²',
                prix: '6 – 8 €/m²',
                duree: '1 – 2 jours',
                even: true,
              },
              {
                type: 'Nettoyage vitres seules',
                surface: 'par fenêtre',
                prix: '15 – 30 €/fenêtre',
                duree: 'Variable',
                even: false,
              },
            ].map((row) => (
              <div key={row.type} className={`grid grid-cols-4 gap-0 border-b border-gray-100 ${row.even ? 'bg-white' : 'bg-[#FAFAF8]'}`}>
                <div className="px-4 py-3 text-[#1C1C1C] font-medium text-sm">{row.type}</div>
                <div className="px-4 py-3 text-center text-gray-600 font-light text-sm">{row.surface}</div>
                <div className="px-4 py-3 text-center text-[#B8960C] font-medium text-sm">{row.prix}</div>
                <div className="px-4 py-3 text-center text-gray-600 font-light text-sm">{row.duree}</div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils pour bien préparer le nettoyage après chantier
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Aérer l\'appartement 48 à 72h avant le nettoyage pour éliminer les particules en suspension',
                'Ne jamais balayer à sec — les poussières fines se redéposent partout, privilégier l\'aspiration HEPA',
                'Protéger les sols neufs avec du film plastique pendant les autres travaux pour réduire le nettoyage final',
                'Commencer par les hauteurs (plafonds, cornières) et descendre vers les sols',
                'Prévoir le nettoyage avant la livraison des meubles — jamais après',
                'Faire appel à une entreprise spécialisée nettoyage chantier, pas une société de ménage classique',
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
              { href: '/renovation-paris', title: 'Rénovation appartement Paris' },
              { href: '/peinture-paris', title: 'Peinture Paris' },
              { href: '/carrelage-paris', title: 'Pose carrelage Paris' },
              { href: '/blog/renovation-complete-appartement-paris', title: 'Rénovation complète appartement Paris' },
              { href: '/blog/pose-parquet-sur-carrelage-paris', title: 'Poser parquet sur carrelage Paris' },
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
          Rénovation et nettoyage fin de chantier à Paris
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
