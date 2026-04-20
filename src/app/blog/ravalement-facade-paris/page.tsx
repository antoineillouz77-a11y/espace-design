import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Ravalement Façade Paris', item: 'https://espacedesignparis.fr/blog/ravalement-facade-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Ravalement Façade Paris : obligation, autorisations ABF & prix 2025',
  description: 'Ravalement de façade à Paris : obligation décennale, autorisations ABF, enduits, peintures. Prix et guide artisan 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/ravalement-facade-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Le ravalement de façade est-il obligatoire à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui. À Paris, l\'arrêté préfectoral du 26 juillet 1966 impose aux propriétaires de procéder au ravalement de leurs façades au moins tous les 10 ans. La mairie peut mettre en demeure les propriétaires défaillants, et les travaux peuvent être exécutés d\'office aux frais du propriétaire si l\'injonction n\'est pas suivie d\'effet dans un délai d\'un an.',
      },
    },
    {
      '@type': 'Question',
      name: 'Faut-il l\'autorisation de l\'ABF pour ravaler une façade parisienne ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, dans la quasi-totalité des cas à Paris. La capitale est couverte par plusieurs secteurs de protection patrimoniaux où l\'Architecte des Bâtiments de France (ABF) doit donner son accord préalable. Cela concerne notamment la couleur et la texture de l\'enduit, qui doivent respecter les prescriptions locales par arrondissement. Une déclaration préalable de travaux est à déposer en mairie avant tout ravalement, même en cas de simple nettoyage de façade.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'un ravalement de façade à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le prix d\'un ravalement de façade à Paris varie entre 80 et 200 €/m² de façade selon l\'état de l\'enduit existant, la technique retenue (nettoyage, enduit hydraulique, peinture siliconate) et l\'accessibilité du chantier (échafaudage, nacelle). Pour un immeuble haussmannien de 200 m² de façade, comptez entre 16 000 et 40 000 €, décision en AG de copropriété et travaux inclus.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Ravalement Façade Paris : obligation, autorisations ABF & prix 2025 | Espace Design',
  description: 'Ravalement de façade à Paris : obligation décennale, autorisations ABF, enduits, peintures. Prix et guide artisan 2025.',
}

export default function ArticleRavalemantFacade() {
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
            Ravalement Façade Paris : obligation, autorisations ABF & prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            À Paris, le ravalement de façade est une obligation légale tous les 10 ans. Entre autorisation ABF, choix de l&apos;enduit, décision d&apos;AG et contraintes d&apos;échafaudage, ce guide vous explique comment mener à bien ce chantier en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Obligation légale */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              L&apos;obligation de ravalement à Paris : ce que dit la loi
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              L&apos;arrêté préfectoral du 26 juillet 1966 impose à tous les propriétaires parisiens de procéder au ravalement de leurs façades tous les 10 ans. Cette obligation s&apos;applique aux bâtiments donnant sur la voie publique, les jardins ou les cours intérieures visibles de la rue.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              La mairie de Paris peut contrôler l&apos;état des façades et mettre en demeure les propriétaires défaillants. En cas d&apos;inaction dans le délai imparti (généralement 1 an), la mairie peut faire réaliser les travaux d&apos;office et facturer le propriétaire avec une majoration.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Obligation décennale (arrêté préfectoral 1966)',
                  detail: 'Tout propriétaire d\'un immeuble à Paris est tenu de faire ravaler la façade au moins tous les 10 ans. Le délai court à partir de la date des derniers travaux de ravalement, justifiée par facture. En l\'absence de justificatif, le délai est apprécié à vue par le service de l\'urbanisme.',
                },
                {
                  enjeu: 'Mise en demeure et travaux d\'office',
                  detail: 'La mairie peut émettre un arrêté de péril imminent si la façade présente un danger (chute d\'enduit, pierres déchaussées). Dans ce cas, les travaux de mise en sécurité sont imposés dans un délai très court (parfois 24 à 48h). Les copropriétés en état de péril imminent bénéficient d\'une procédure accélérée.',
                },
                {
                  enjeu: 'Copropriété : décision en AG',
                  detail: 'Dans un immeuble en copropriété, le ravalement de façade est décidé en assemblée générale à la majorité de l\'article 24 (majorité simple des voix exprimées). Il est conseillé de provisionner ce poste dans le budget prévisionnel de la copropriété bien en amont.',
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

      {/* Section 2 — ABF et autorisations */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Autorisation ABF : couleurs et matériaux imposés par arrondissement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Paris est entièrement couverte par des zones de protection patrimoniales où l&apos;Architecte des Bâtiments de France (ABF) a un droit de regard sur l&apos;aspect des façades. Pour tout ravalement modifiant l&apos;apparence d&apos;une façade (couleur, texture, matériau), une déclaration préalable de travaux est obligatoire, et l&apos;ABF peut imposer des prescriptions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Déclaration préalable obligatoire',
                detail: 'Avant tout ravalement à Paris, une DP (déclaration préalable de travaux) doit être déposée en mairie d\'arrondissement. Délai d\'instruction : 1 mois, porté à 2 mois si l\'immeuble est situé dans un secteur sauvegardé (Marais, Île de la Cité, etc.).',
                cout: 'DP obligatoire',
              },
              {
                titre: 'Couleur de l\'enduit imposée',
                detail: 'L\'ABF dispose d\'une carte des teintes autorisées par secteur géographique. À Paris, les façades haussmanniennes doivent conserver une teinte pierre de taille (beige-ocre). Toute déviation doit être justifiée et approuvée.',
                cout: 'Teinte prescrite',
              },
              {
                titre: 'Immeubles classés ou inscrits',
                detail: 'Pour les immeubles classés au titre des monuments historiques ou inscrits à l\'ISMH, des contraintes supplémentaires s\'appliquent. Un architecte du patrimoine peut être requis pour piloter le chantier. Consulter la DRAC Île-de-France.',
                cout: 'Architecte patrimoine',
              },
              {
                titre: 'Fenêtres et éléments de façade',
                detail: 'Le ravalement est souvent l\'occasion de remplacer les fenêtres. Attention : tout changement de modèle (PVC, aluminium, couleur différente) est soumis à l\'accord de l\'ABF à Paris. Les menuiseries bois peintes en blanc restent la référence imposée dans de nombreux arrondissements.',
                cout: 'Accord ABF requis',
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

      {/* Section 3 — Travaux et matériaux */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Travaux de ravalement : nettoyage, enduit et peinture
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le ravalement de façade regroupe plusieurs opérations successives, dont l&apos;ampleur dépend de l&apos;état initial de la façade. Un simple nettoyage suffit parfois ; une reprise complète de l&apos;enduit est nécessaire si la façade est fortement dégradée.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Nettoyage de façade',
                prix: '20 – 50 €/m²',
                detail: 'Nettoyage haute pression, sablage ou traitement chimique (démoussage, antifongique). Suffisant si l\'enduit est en bon état général. Indispensable en première étape de tout ravalement complet.',
              },
              {
                type: 'Enduit hydraulique (enduit traditionnel)',
                prix: '80 – 140 €/m²',
                detail: 'Enduit à base de chaux ou de chaux-ciment, appliqué en deux ou trois couches. Technique de référence sur les façades haussmanniennes et immeubles anciens. Perméable à la vapeur d\'eau (respirant), compatible avec les supports anciens en pierres de taille. Durée de vie : 20 à 30 ans.',
              },
              {
                type: 'Peinture siliconate ou siloxane',
                prix: '40 – 80 €/m²',
                detail: 'Appliquée sur enduit existant sain ou sur enduit neuf. La siliconate offre une excellente résistance aux intempéries et à l\'humidité tout en restant perméable à la vapeur d\'eau. Idéale pour les façades exposées. Durée de vie : 10 à 15 ans selon l\'exposition.',
              },
              {
                type: 'Pierre de taille : nettoyage et rejointoiement',
                prix: '120 – 200 €/m²',
                detail: 'Pour les façades en pierre de taille (haussmannien, immeubles XIXe), la technique est différente : nettoyage doux (basse pression, micro-sablage), reprise des joints à la chaux, traitement hydrofuge. Pas d\'enduit ni de peinture — la pierre doit respirer.',
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

      {/* Section 4 — Echafaudage et logistique */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Échafaudage à Paris : autorisation de voirie et logistique
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            À Paris, tout échafaudage sur voie publique nécessite une permission de voirie délivrée par la mairie. Cette démarche prend 2 à 4 semaines et implique le paiement de droits d&apos;occupation du domaine public. Selon la rue et l&apos;arrondissement, des contraintes horaires peuvent s&apos;appliquer (montage/démontage uniquement en dehors des heures de pointe).
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Permission de voirie (occupation trottoir)',
                prix: '5 – 15 €/m²/mois',
                detail: 'Demande à effectuer auprès de la Direction de la Voirie et des Déplacements (DVD) de Paris. Délai : 2 à 4 semaines. Le coût dépend de la surface du trottoir occupée et de la durée du chantier. Une bâche de protection est souvent exigée pour les passants.',
              },
              {
                type: 'Échafaudage de pied (standard)',
                prix: '8 – 15 €/m²',
                detail: 'Solution classique sur rue large. Pose de tubes et de planchers en aluminium ou acier. La hauteur maximale sans calcul de structure spécifique est de 24 m (hauteur courante des immeubles haussmanniens de 6 étages).',
              },
              {
                type: 'Nacelle ou plateforme suspendue',
                prix: '15 – 30 €/m²',
                detail: 'Utilisée quand le trottoir est trop étroit pour un échafaudage de pied, ou pour des travaux ponctuels (nettoyage, application d\'hydrofuge). Plus rapide à mettre en place, mais moins adaptée pour les travaux d\'enduit complets.',
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
            Prix ravalement façade Paris 2025 : tableau récapitulatif
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Prix indicatifs pour un ravalement complet d&apos;immeuble parisien, par type de prestation et état de la façade. Main d&apos;œuvre, matériaux et échafaudage inclus.
          </p>

          <div className="grid grid-cols-1 gap-3 mb-8">
            {[
              {
                niveau: 'Nettoyage façade seul',
                prestations: 'Haute pression + antifongique, sans reprise d\'enduit',
                prix: '20 – 50 €/m²',
              },
              {
                niveau: 'Ravalement peinture siliconate',
                prestations: 'Nettoyage + traitement + peinture siliconate (enduit existant sain)',
                prix: '60 – 100 €/m²',
              },
              {
                niveau: 'Ravalement enduit hydraulique complet',
                prestations: 'Nettoyage + dépose enduit dégradé + enduit hydraulique 3 couches',
                prix: '100 – 160 €/m²',
              },
              {
                niveau: 'Pierre de taille — nettoyage et rejointoiement',
                prestations: 'Micro-sablage + rejointoiement à la chaux + hydrofuge',
                prix: '120 – 200 €/m²',
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
              Points clés à retenir avant de lancer le chantier
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Déposer la déclaration préalable de travaux en mairie au moins 1 mois avant le chantier',
                'Vérifier les prescriptions ABF de votre secteur (couleur et texture de l\'enduit)',
                'En copropriété : vote en AG indispensable avant tout engagement avec un artisan',
                'Anticiper la permission de voirie pour l\'échafaudage (2 à 4 semaines de délai)',
                'Profiter du ravalement pour traiter l\'isolation thermique par l\'extérieur (ITE)',
                'Comparer au moins 3 devis d\'artisans spécialisés en ravalement parisien',
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
              { href: '/blog/renovation-appartement-copropriete-paris', title: 'Rénovation appartement en copropriété' },
              { href: '/blog/renovation-balcon-terrasse-immeuble-paris', title: 'Rénovation balcon en copropriété Paris' },
              { href: '/isolation-paris', title: 'Isolation Paris' },
              { href: '/blog/isolation-combles-subvention-paris', title: 'Isolation combles Paris' },
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
          Votre façade parisienne mérite un ravalement soigné
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Artisan spécialisé ravalement Paris. Gestion complète des démarches ABF et voirie. Devis gratuit sous 48h.
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
