import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Remplacement fenêtres double vitrage Paris', item: 'https://espacedesignparis.fr/blog/renovation-fenetre-double-vitrage-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Remplacement Fenêtres Double Vitrage Paris : prix & guide 2025",
  description: "Changer ses fenêtres à Paris : PVC, aluminium, bois, double ou triple vitrage. Prix 2025, aides MaPrimeRénov', démarches syndic et ABF. Guide complet.",
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-fenetre-double-vitrage-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Faut-il l'accord du syndic pour changer ses fenêtres ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, dans la quasi-totalité des copropriétés parisiennes. Les fenêtres sont des éléments de facade classés parties communes. Un vote en assemblee generale (majorite article 25) est necessaire avant de commander. En secteur ABF, une autorisation prealable de travaux s'ajoute. Anticipez 6 a 12 mois avant le remplacement.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel est le prix pour remplacer une fenêtre à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix varie selon le materiau : PVC double vitrage 400 a 800 euros pose comprise, aluminium double vitrage 700 a 1 400 euros, bois double vitrage 900 a 2 000 euros. Pour un appartement parisien de 70 m2 avec 6 fenetres, comptez 4 000 a 12 000 euros selon les materiaux et le niveau de performance thermique choisi.",
      },
    },
    {
      '@type': 'Question',
      name: "PVC ou aluminium pour des fenêtres à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le PVC est le moins cher et le plus facile a entretenir, mais il est souvent interdit en copropriete haussmannienne pour des raisons esthetiques. L'aluminium offre des profils plus fins, une meilleure tenue dans le temps et est generalement accepte par les syndics parisiens. Pour les immeubles classes ou en secteur ABF, le bois ou le bois-alu est souvent impose.",
      },
    },
    {
      '@type': 'Question',
      name: "Peut-on obtenir des aides pour le remplacement de fenêtres ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui : MaPrimeRenov' (500 a 2 500 euros par fenetre selon les revenus), TVA reduite a 10 %, eco-PTZ jusqu'a 30 000 euros et primes CEE des fournisseurs d'energie. Condition : entreprise RGE et fenetres avec coefficient Uw inferieur a 1,3 W/m2.K. Les aides se cumulent et doivent etre demandees avant le debut des travaux.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Remplacement Fenêtres Double Vitrage Paris : prix & guide 2025",
  description: "Changer ses fenêtres à Paris : PVC, aluminium, bois, double ou triple vitrage. Prix 2025, aides MaPrimeRénov', démarches syndic et ABF. Guide complet artisan Paris.",
  keywords: [
    'remplacement fenêtres Paris',
    'double vitrage Paris',
    'fenêtres PVC Paris',
    'fenêtres aluminium Paris',
    'prix fenêtres Paris 2025',
    'MaPrimeRénov fenêtres',
    'changement fenêtres copropriété Paris',
    'artisan menuiserie Paris',
  ],
}

export default function ArticleFenetreDoubleVitrageParis() {
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
            Menuiserie & Isolation
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Changer ses Fenêtres à Paris : double vitrage, prix & démarches
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            PVC, aluminium, bois, double ou triple vitrage : tout ce qu&apos;il faut savoir pour remplacer ses fenêtres à Paris en 2025 — prix, performances thermiques, aides financières et démarches copropriété.
          </p>
        </div>
      </section>

      {/* Section 1 — Types de matériaux */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              PVC, aluminium ou bois : quel matériau pour vos fenêtres ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Le choix du matériau conditionne l&apos;esthétique, les performances thermiques, l&apos;entretien et surtout l&apos;accord de votre copropriété. Dans les immeubles haussmanniens parisiens, le règlement de copropriété peut imposer un matériau précis ou une couleur spécifique pour préserver l&apos;harmonie de la façade.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1C1C1C] text-white">
                    <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Matériau</th>
                    <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix (pose incluse)</th>
                    <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Entretien</th>
                    <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Durée de vie</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { mat: 'PVC', prix: '400 – 800 €', entretien: 'Très faible', duree: '25 – 30 ans' },
                    { mat: 'Aluminium', prix: '700 – 1 400 €', entretien: 'Faible', duree: '30 – 40 ans' },
                    { mat: 'Bois', prix: '900 – 2 000 €', entretien: 'Moyen (lasure/5 ans)', duree: '30 – 50 ans' },
                    { mat: 'Bois-Aluminium', prix: '1 200 – 2 500 €', entretien: 'Faible (ext. alu)', duree: '35 – 50 ans' },
                  ].map((row, i) => (
                    <tr key={row.mat} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                      <td className="px-4 py-3 text-[#1C1C1C] font-medium text-sm">{row.mat}</td>
                      <td className="px-4 py-3 text-center text-gray-600 font-light">{row.prix}</td>
                      <td className="px-4 py-3 text-center text-gray-600 font-light">{row.entretien}</td>
                      <td className="px-4 py-3 text-center text-gray-600 font-light">{row.duree}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-xs font-light italic">
              Prix indicatifs pour une fenêtre standard 120×120 cm, double vitrage, pose comprise. Hors dépose ancienne menuiserie et finitions intérieures.
            </p>
          </div>

          {/* Double vs triple vitrage */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Double ou triple vitrage : performances thermiques (coefficient Uw)
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Le simple vitrage est obsolète dans les logements parisiens — il représente 10 à 15 % des déperditions thermiques d&apos;un appartement. Le choix se fait entre double et triple vitrage selon votre situation.
            </p>
            <div className="space-y-4">
              {[
                {
                  titre: 'Double vitrage standard (Uw ≈ 1,1 à 1,4 W/m².K)',
                  texte: "La norme actuelle : deux vitrages séparés par un gaz argon. Bon compromis coût/performance pour la majorité des appartements parisiens. Le double vitrage à isolation renforcée (DIR, Uw < 1,0) est éligible MaPrimeRénov' et aux aides CEE. Recommandé pour les étages intermédiaires et les façades sud ou est.",
                },
                {
                  titre: 'Triple vitrage (Uw ≈ 0,6 à 0,8 W/m².K)',
                  texte: "Trois vitrages, performances supérieures mais surcoût de 20 à 30 %. Recommandé en dernier étage sans isolation de toiture, en façade nord ou dans les appartements très exposés aux nuisances sonores (boulevard, périphérique). Dans un haussmannien standard bien isolé, le triple vitrage est souvent surdimensionné.",
                },
                {
                  titre: 'Vitrage acoustique asymétrique',
                  texte: "À Paris, le bruit de rue est souvent la motivation principale du remplacement de fenêtres. Un vitrage acoustique asymétrique (ex : 6/16/4) réduit les nuisances de 32 à 42 dB selon les configurations. Peut être combiné avec les performances thermiques sur le même châssis.",
                },
              ].map((el) => (
                <div key={el.titre} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.titre}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.texte}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Aides & démarches */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Aides financières 2025 pour remplacer ses fenêtres à Paris
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Le remplacement de fenêtres est l&apos;un des travaux les plus aidés en France. En cumulant les dispositifs disponibles, le reste à charge peut être significativement réduit — sous condition de faire appel à une entreprise certifiée RGE (Reconnue Garante de l&apos;Environnement).
            </p>
            <div className="space-y-4">
              {[
                {
                  aide: "MaPrimeRénov'",
                  detail: "500 à 2 500 € par fenêtre selon le niveau de revenus. Les ménages modestes et très modestes sont prioritaires. Le montant dépend du coefficient thermique de la fenêtre installée (Uw ≤ 1,3 requis). Demande à effectuer sur maprimerenov.gouv.fr avant le début des travaux.",
                },
                {
                  aide: 'TVA à 10 %',
                  detail: "Taux réduit au lieu de 20 % pour les logements de plus de 2 ans. L'entreprise doit fournir et poser les fenêtres. L'économie est automatique sur la facture — aucune démarche supplémentaire n'est nécessaire.",
                },
                {
                  aide: "Éco-PTZ (Prêt à Taux Zéro)",
                  detail: "Jusqu'à 30 000 € de prêt sans intérêts pour financer des travaux de rénovation énergétique. Cumulable avec MaPrimeRénov'. Disponible auprès de votre banque sans condition de ressources. Durée de remboursement jusqu'à 15 ans.",
                },
                {
                  aide: "Primes CEE (Certificats d'Économies d'Énergie)",
                  detail: "Les fournisseurs d'énergie proposent des primes pour le remplacement de fenêtres simple vitrage. Montant variable de 100 à 600 € par fenêtre selon les programmes. À demander avant la signature du devis.",
                },
              ].map((el) => (
                <div key={el.aide} className="bg-white rounded-lg p-5 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.aide}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Démarches syndic et ABF */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Démarches syndic et ABF : ce qu&apos;il faut faire avant de commander
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              À Paris, la quasi-totalité des appartements sont en copropriété. Les fenêtres — éléments de façade — relèvent des parties communes dans la plupart des règlements. Voici la procédure à anticiper.
            </p>
            <ul className="space-y-3">
              {[
                "Consultez le règlement de copropriété (fourni par votre syndic) : il précise si les fenêtres sont parties communes ou privatives et s'il existe des contraintes de matériaux ou de coloris.",
                "Demandez l'autorisation de l'assemblée générale (vote à la majorité article 25) pour tout changement affectant l'aspect extérieur de l'immeuble.",
                "En secteur sauvegardé ou périmètre ABF (Architectes des Bâtiments de France) : une autorisation préalable de travaux est obligatoire. Les ABF imposent souvent le bois peint ou le bois-aluminium en couleur pierre.",
                "Certains syndics ont négocié des modèles de référence avec des fabricants : renseignez-vous, cela simplifie l'obtention de l'autorisation.",
                "Anticipez les délais : l'AG de copropriété se réunit souvent une fois par an. Prévoyez 6 à 12 mois entre la décision et la pose des fenêtres.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600 font-light">
                  <span className="text-[#D4AF37] font-medium flex-shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3 — Impact DPE & déroulement chantier */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Impact sur le DPE et la valeur du bien
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Remplacer des fenêtres à simple vitrage par du double vitrage performant permet généralement de gagner une à deux lettres sur le DPE. Dans un appartement haussmannien classé E ou F, ce changement contribue à atteindre la classe D — seuil minimal imposé dès 2028 pour les locations. Les propriétaires bailleurs ont donc un intérêt direct à anticiper ces travaux.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Réduction des déperditions thermiques de 10 à 15 %",
                "Élimination de la paroi froide et du phénomène de condensation",
                "Réduction du bruit de rue (option vitrage acoustique)",
                "Valorisation du bien pour la revente ou la mise en location",
                "Amélioration de la note DPE pour les biens locatifs",
                "Éligibilité aux aides si Uw ≤ 1,3 W/m².K",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                  <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Déroulement du chantier de remplacement de fenêtres à Paris
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Un remplacement complet pour un appartement de 3 à 5 pièces prend 1 à 2 jours. Le process Espace Design intègre systématiquement les finitions intérieures souvent négligées.
            </p>
            <ol className="space-y-3">
              {[
                {
                  etape: 'Prise de mesures sur site',
                  detail: "Visite technique pour relevé précis de chaque baie (les fenêtres parisiennes ont rarement des dimensions standard). Identification des contraintes copropriété, ABF et du type de pose (en feuillure ou en applique).",
                },
                {
                  etape: 'Fabrication sur mesure',
                  detail: "Délai de fabrication : 3 à 5 semaines pour le PVC, 5 à 7 semaines pour l'aluminium sur mesure. Le délai plus court du PVC est à pondérer avec les contraintes esthétiques de votre immeuble.",
                },
                {
                  etape: 'Dépose et pose de la nouvelle fenêtre',
                  detail: "Dépose soigneuse de l'ancienne menuiserie, nettoyage de l'about de mur, pose avec joints d'étanchéité air/eau et eau/vent conformes à la réglementation, calage et vissage dans l'about.",
                },
                {
                  etape: 'Finitions intérieures',
                  detail: "Rebouchage des ébrasements à l'enduit, retouche de peinture ou pose d'appuis de fenêtre neufs si nécessaire. Une étape souvent bâclée par les seuls menuisiers — nous l'intégrons systématiquement dans le devis.",
                },
              ].map((el, i) => (
                <li key={el.etape} className="flex gap-4 bg-[#FAFAF8] rounded-lg p-4 border border-gray-100">
                  <span className="font-display text-lg font-semibold text-[#D4AF37]/50 flex-shrink-0 w-6">{i + 1}</span>
                  <div>
                    <div className="font-medium text-[#1C1C1C] text-sm mb-1">{el.etape}</div>
                    <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Section 4 — Prix détaillés */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix remplacement fenêtres Paris 2025 : exemples concrets
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix suivants sont indicatifs pour un appartement parisien standard. Le coût final dépend du nombre de baies, du matériau, des options de vitrage et des finitions intérieures souhaitées.
          </p>
          <div className="space-y-3">
            {[
              {
                cas: 'Studio (2 fenêtres) — PVC double vitrage',
                prix: '900 – 1 800 €',
                detail: 'Pose, dépose ancienne menuiserie et finitions incluses',
              },
              {
                cas: '2 pièces (3 fenêtres) — Aluminium double vitrage',
                prix: '2 100 – 4 200 €',
                detail: 'Options couleur RAL et rupture de pont thermique',
              },
              {
                cas: '3 pièces (5 fenêtres) — Aluminium double vitrage acoustique',
                prix: '4 000 – 8 000 €',
                detail: 'Vitrage asymétrique 42 dB, idéal boulevard parisien',
              },
              {
                cas: 'Haussmannien 4 pièces (7 baies) — Bois-aluminium',
                prix: '8 000 – 17 000 €',
                detail: "Imitation profil d'origine, conforme ABF",
              },
            ].map((row, i) => (
              <div key={i} className="bg-white rounded-lg p-5 border border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <div className="font-medium text-[#1C1C1C] text-sm mb-1">{row.cas}</div>
                  <div className="text-gray-500 text-xs font-light">{row.detail}</div>
                </div>
                <div className="text-[#D4AF37] font-semibold text-sm flex-shrink-0">{row.prix}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-xs font-light italic mt-4">
            Hors aides financières. Après déduction MaPrimeRénov&apos; et CEE, le reste à charge peut être réduit de 20 à 50 % selon les revenus.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-8 text-center">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Faut-il l'accord du syndic pour changer ses fenêtres ?",
                r: "Oui, dans la quasi-totalité des copropriétés parisiennes. Les fenêtres sont des éléments de façade classés parties communes. Un vote en assemblée générale (majorité article 25) est nécessaire avant de commander. En secteur ABF, une autorisation préalable de travaux s'ajoute. Anticipez 6 à 12 mois avant le remplacement.",
              },
              {
                q: "Quel est le prix pour remplacer une fenêtre à Paris ?",
                r: "Le prix varie selon le matériau : PVC double vitrage 400 à 800 € pose comprise, aluminium double vitrage 700 à 1 400 €, bois double vitrage 900 à 2 000 €. Pour un appartement parisien de 70 m² avec 6 fenêtres, comptez 4 000 à 12 000 € selon les matériaux et le niveau de performance thermique.",
              },
              {
                q: "PVC ou aluminium pour des fenêtres à Paris ?",
                r: "Le PVC est le moins cher mais souvent interdit en copropriété haussmannienne pour des raisons esthétiques. L'aluminium offre des profils plus fins et est généralement accepté par les syndics parisiens. Pour les immeubles classés ou en secteur ABF, le bois ou le bois-alu est souvent imposé.",
              },
              {
                q: "Peut-on obtenir des aides pour le remplacement de fenêtres ?",
                r: "Oui : MaPrimeRénov' (500 à 2 500 € par fenêtre selon les revenus), TVA réduite à 10 %, éco-PTZ jusqu'à 30 000 € et primes CEE des fournisseurs d'énergie. Condition : entreprise RGE et fenêtres avec coefficient Uw inférieur à 1,3 W/m².K. Les aides se cumulent et doivent être demandées avant le début des travaux.",
              },
            ].map((item) => (
              <div key={item.q} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{item.q}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{item.r}</div>
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
              { href: '/isolation-paris', title: 'Isolation Paris' },
              { href: '/blog/isolation-thermique-appartement-paris', title: 'Isolation thermique appartement' },
              { href: '/blog/renovation-fenetre-paris', title: 'Rénovation fenêtres Paris' },
              { href: '/blog/budget-renovation-paris-2025', title: 'Budget rénovation Paris 2025' },
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
              { href: '/renovation-paris-6e', label: 'Paris 6e' },
              { href: '/renovation-paris-7e', label: 'Paris 7e' },
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-paris-17e', label: 'Paris 17e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
              { href: '/renovation-levallois-perret', label: 'Levallois-Perret' },
              { href: '/renovation-versailles', label: 'Versailles' },
              { href: '/renovation-saint-germain-en-laye', label: 'Saint-Germain-en-Laye' },
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
          Vous souhaitez remplacer vos fenêtres à Paris ?
        </h2>
        <p className="text-gray-400 text-sm font-light mb-8">
          Prise de mesures gratuite. Devis sous 48h. Entreprise RGE pour bénéficier de MaPrimeRénov&apos;.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-7 py-3.5 rounded font-light text-sm tracking-wide hover:bg-[#c9a030] transition-colors"
          >
            Devis gratuit <ArrowRight size={13} />
          </Link>
          <a
            href="tel:+33611783867"
            className="flex items-center justify-center gap-2 border border-gray-600 text-gray-300 px-7 py-3.5 rounded font-light text-sm tracking-wide hover:border-white hover:text-white transition-colors"
          >
            <Phone size={14} />
            06 11 78 38 67
          </a>
        </div>
      </section>
    </>
  )
}
