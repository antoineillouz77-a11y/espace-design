import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Ravalement Façade Copropriété Paris', item: 'https://espacedesignparis.fr/blog/ravalement-facade-copropriete-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Ravalement Façade Copropriété Paris : vote AG & prestataire 2025 | Espace Design',
  description: 'Organiser un ravalement de façade en copropriété à Paris : majorité requise, consultation entreprises, financement. Guide syndic 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/ravalement-facade-copropriete-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quelle majorité faut-il en AG pour voter un ravalement de façade ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La majorité requise dépend du type de ravalement. Un ravalement simple (nettoyage, peinture, rejointoiement) relève de la majorité de l'article 24 de la loi de 1965 : majorité des voix des copropriétaires présents ou représentés. Un ravalement incluant une isolation thermique par l'extérieur (ITE) relève de l'article 25 : majorité absolue de tous les copropriétaires (présents, représentés et absents). Si la résolution échoue à l'article 25 mais obtient au moins un tiers des voix, elle peut être soumise à un second vote à la majorité de l'article 24 lors de la même assemblée.",
      },
    },
    {
      '@type': 'Question',
      name: 'Le ravalement de façade est-il obligatoire à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, à Paris, le ravalement de façade est obligatoire tous les 10 ans en vertu de l'article L.132-1 du Code de la construction. La mairie peut mettre en demeure le syndic de procéder aux travaux si la façade présente un état de dégradation mettant en cause la salubrité ou la sécurité publique. En cas de non-exécution dans le délai imparti, la mairie peut faire réaliser les travaux d'office aux frais de la copropriété. La périodicité réelle de ravalement dans les copropriétés parisiennes est généralement de 15 à 25 ans selon l'état de la façade.",
      },
    },
    {
      '@type': 'Question',
      name: 'Comment financer un ravalement de façade en copropriété ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Plusieurs sources de financement coexistent. Le fonds travaux (obligatoire depuis 2017, minimum 5 % du budget annuel) constitue la première source. Pour les copropriétés éligibles, un emprunt collectif peut être souscrit par le syndicat — les copropriétaires choisissent d'intégrer ou non l'emprunt. L'ANAH (Agence Nationale de l'Habitat) subventionne jusqu'à 50 % des travaux dans les copropriétés fragiles ou en difficulté. Ma Prime Rénov' Copropriétés finance jusqu'à 45 % des travaux d'isolation inclus dans un ravalement global. Les copropriétaires peuvent aussi déduire leur quote-part de charges de travaux de leurs revenus fonciers.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Ravalement Façade Copropriété Paris : vote AG & prestataire 2025 | Espace Design',
  description: 'Organiser un ravalement de façade en copropriété à Paris : majorité requise, consultation entreprises, financement. Guide syndic 2025.',
}

export default function ArticleRavalementCopropriete() {
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
            Ravalement Façade Copropriété Paris : vote AG & prestataire 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Organiser un ravalement de façade en copropriété à Paris est un projet long — 12 à 18 mois entre la décision en AG et la fin du chantier. Majorité requise, appel d&apos;offres, financement, subventions : guide complet pour les syndics et conseils syndicaux en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Majorités */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Article 24 ou article 25 : quelle majorité pour voter le ravalement ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              La loi du 10 juillet 1965 organise les prises de décision en copropriété selon plusieurs niveaux de majorité. Le choix de la majorité applicable au ravalement dépend directement de la nature et de l&apos;étendue des travaux envisagés.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Article 24 — Majorité simple (ravalement courant)',
                  detail: 'S\'applique aux travaux d\'entretien et de conservation de l\'immeuble : nettoyage haute pression, badigeon, peinture de façade, reprise des joints, traitement hydrofuge. La résolution est adoptée si elle obtient la majorité des voix des copropriétaires présents ou représentés à l\'AG. C\'est la majorité la plus facile à atteindre.',
                },
                {
                  enjeu: 'Article 25 — Majorité absolue (ITE ou travaux lourds)',
                  detail: 'S\'applique aux travaux comportant une isolation thermique par l\'extérieur (ITE), une modification de l\'aspect extérieur, ou des travaux d\'amélioration significatifs. La résolution est adoptée si elle obtient la majorité absolue de tous les copropriétaires (présents + représentés + absents). Plus difficile à atteindre, surtout dans les grandes copropriétés parisiennes.',
                },
                {
                  enjeu: 'Passerelle article 25 vers article 24',
                  detail: 'Si la résolution en article 25 échoue mais obtient au moins un tiers des voix de tous les copropriétaires, la même assemblée peut immédiatement soumettre la résolution à un second vote à la majorité de l\'article 24. Ce mécanisme permet de sauver les travaux d\'une opposition minoritaire.',
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

      {/* Section 2 — Appel d'offres */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Appel d&apos;offres : comment consulter les entreprises de ravalement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La loi impose au syndic de présenter au moins 3 devis d&apos;entreprises différentes pour les travaux dépassant un certain montant (variable selon le règlement de copropriété). En pratique, 3 devis constituent le minimum recommandé pour une consultation sérieuse.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Faire appel à un maître d\'oeuvre',
                solution: 'Pour les façades complexes (immeubles classés, ornements, échafaudage difficile), un maître d\'oeuvre rédige le cahier des charges technique, lance l\'appel d\'offres, compare les devis et assure le suivi de chantier. Coût : 5 à 10 % du montant des travaux. Indispensable au-dessus de 200 000 € de travaux.',
                cout: '5 – 10 % TTC',
              },
              {
                titre: 'Diagnostic préalable de façade',
                solution: 'Un diagnostiqueur inspecte visuellement et par sondage l\'état de la façade (fissures, décollements d\'enduit, présence de plomb dans les peintures avant 1949, état des joints). Ce rapport technique sert de base au cahier des charges et évite les mauvaises surprises en cours de chantier.',
                cout: '800 – 3 000 €',
              },
              {
                titre: 'Critères de comparaison des devis',
                solution: 'Ne pas comparer uniquement le prix total. Vérifier : détail des postes (nettoyage, reprise d\'enduit, peinture, échafaudage), qualité des produits utilisés (marque, certification), références chantiers similaires à Paris, délai d\'intervention et planning, assurance décennale et RC pro.',
                cout: 'Gratuit',
              },
              {
                titre: 'Garanties obligatoires à exiger',
                solution: 'Assurance décennale (obligatoire pour les travaux de bâtiment), garantie de parfait achèvement (1 an après réception), garantie biennale sur les éléments d\'équipement (2 ans). Exiger une attestation d\'assurance à jour datée de moins de 3 mois.',
                cout: 'Inclus devis',
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

      {/* Section 3 — Financement */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Financement et subventions : ANAH, fonds travaux, emprunt collectif
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le financement d&apos;un ravalement de façade peut mobiliser plusieurs sources complémentaires. L&apos;anticipation est clé : certaines subventions (ANAH, Ma Prime Rénov&apos;) nécessitent un dossier déposé avant le début des travaux.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Fonds travaux obligatoire',
                prix: 'Min. 5 % budget annuel',
                detail: 'Depuis la loi ALUR de 2014, toutes les copropriétés de plus de 10 lots doivent constituer un fonds travaux. Ce fonds doit représenter au minimum 5 % du budget prévisionnel annuel. Il peut être mobilisé pour financer tout ou partie du ravalement. Son montant est voté en AG et peut être augmenté par délibération.',
              },
              {
                type: 'Emprunt collectif du syndicat',
                prix: 'Taux 3-5 % selon durée',
                detail: 'Le syndicat peut souscrire un emprunt auprès d\'une banque ou d\'un établissement spécialisé (Caisse d\'Épargne, Crédit Foncier). Chaque copropriétaire choisit de participer ou non à cet emprunt collectif. Ceux qui ne participent pas paient leur quote-part au comptant. L\'emprunt permet d\'étaler la charge sur 5 à 15 ans.',
              },
              {
                type: 'ANAH — Aide pour copropriétés fragiles',
                prix: 'Jusqu\'à 50 % des travaux',
                detail: 'L\'ANAH subventionne les copropriétés dites "fragiles" ou "en difficulté" pour des travaux de rénovation incluant la façade. L\'éligibilité est évaluée selon des critères d\'endettement et d\'impayés de charges. Le dossier doit être déposé avant le début des travaux. Contact : délégation territoriale ANAH de Paris.',
              },
              {
                type: 'Ma Prime Rénov\' Copropriétés',
                prix: 'Jusqu\'à 45 % des travaux ITE',
                detail: 'Pour les ravalements incluant une isolation thermique par l\'extérieur, Ma Prime Rénov\' Copropriétés subventionne jusqu\'à 45 % du coût des travaux d\'isolation. Le gain énergétique doit être supérieur à 35 % de la consommation conventionnelle. Dossier à déposer sur la plateforme maprimerenov.gouv.fr avant démarrage du chantier.',
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

      {/* Section 4 — Calendrier et prix */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Calendrier et prix d&apos;un ravalement de façade à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
            Entre la décision en AG et la réception du chantier, comptez en général 12 à 18 mois. Ce délai s&apos;explique par les étapes de consultation, d&apos;instruction des subventions et de mise en oeuvre de l&apos;échafaudage (soumis à autorisation de voirie à Paris).
          </p>
          <div className="grid grid-cols-1 gap-3 mb-8">
            {[
              { etape: 'Mois 1-2', label: 'Diagnostic façade + rédaction cahier des charges', detail: 'Diagnostic visuel + sondage, rapport technique. Base des appels d\'offres.' },
              { etape: 'Mois 3-4', label: 'Consultation entreprises + réception devis', detail: '3 devis minimum. Analyse comparative par le syndic ou le maître d\'oeuvre.' },
              { etape: 'Mois 5', label: 'Vote en AG + choix prestataire', detail: 'Présentation des devis aux copropriétaires. Vote à la majorité requise.' },
              { etape: 'Mois 6-8', label: 'Instruction subventions + autorisation voirie', detail: 'Dépôt dossier ANAH / Ma Prime Rénov\'. Demande autorisation échafaudage mairie.' },
              { etape: 'Mois 9-14', label: 'Chantier de ravalement', detail: 'Pose échafaudage, travaux de façade, dépose échafaudage.' },
              { etape: 'Mois 15-18', label: 'Réception + levée de réserves', detail: 'Réception des travaux, levée des réserves éventuelles, versement solde.' },
            ].map((row) => (
              <div key={row.etape} className="bg-white rounded-lg p-4 border border-gray-100 flex gap-4">
                <div className="text-[#B8960C] text-xs font-semibold w-20 flex-shrink-0 pt-0.5">{row.etape}</div>
                <div>
                  <div className="font-medium text-[#1C1C1C] text-sm mb-1">{row.label}</div>
                  <div className="text-gray-600 text-xs font-light">{row.detail}</div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
            Prix ravalement de façade Paris 2025
          </h3>
          <div className="grid grid-cols-1 gap-3 mb-6">
            {[
              {
                niveau: 'Nettoyage façade simple',
                prestations: 'Haute pression + traitement hydrofuge. Sans reprise d\'enduit.',
                prixM2: '30 – 60 €/m²',
              },
              {
                niveau: 'Ravalement standard',
                prestations: 'Nettoyage + reprise joints + peinture façade. État courant.',
                prixM2: '80 – 150 €/m²',
              },
              {
                niveau: 'Ravalement avec reprise d\'enduit',
                prestations: 'Piquage + reprise enduit + peinture. Façade dégradée.',
                prixM2: '120 – 200 €/m²',
              },
              {
                niveau: 'Ravalement + ITE',
                prestations: 'Isolation thermique par l\'extérieur + enduit de finition.',
                prixM2: '180 – 250 €/m²',
              },
            ].map((row) => (
              <div key={row.niveau} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <div className="font-medium text-[#1C1C1C] text-sm mb-1">{row.niveau}</div>
                    <div className="text-gray-600 text-xs font-light">{row.prestations}</div>
                  </div>
                  <div className="text-[#B8960C] text-sm font-semibold flex-shrink-0">{row.prixM2}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Lancer le diagnostic de façade 18 mois avant l\'AG pour avoir le temps d\'instruire les subventions',
              'Inclure les travaux de ravalement et d\'isolation dans un même chantier — économies d\'échafaudage importantes',
              'Vérifier si la copropriété est éligible à ANAH avant de voter — certaines aides nécessitent un agrément préalable',
              'Anticiper les perturbations pour les habitants : accès aux balcons, bruit d\'échafaudage, délai de 2-4 mois de chantier',
              'Exiger un planning de chantier détaillé semaine par semaine lors de la signature',
              'Conserver toutes les factures — elles permettent aux copropriétaires de déduire les charges de leurs revenus fonciers',
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

      {/* Voir aussi */}
      <section className="py-12 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Voir aussi</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/ravalement-facade-paris', title: 'Ravalement façade Paris' },
              { href: '/blog/devis-renovation-en-ligne-paris', title: 'Devis rénovation Paris' },
              { href: '/blog/renovation-avant-vente-paris', title: 'Rénovation avant vente Paris' },
              { href: '/peinture-paris', title: 'Peinture Paris' },
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
          Votre ravalement de façade à Paris
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis détaillé sous 48h. Spécialistes ravalement en copropriété à Paris et Île-de-France.
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
