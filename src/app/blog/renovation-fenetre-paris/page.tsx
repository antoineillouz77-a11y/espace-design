import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation fenêtres Paris', item: 'https://espacedesignparis.fr/blog/renovation-fenetre-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Fenêtres Paris : double vitrage, PVC, aluminium — prix 2025',
  description: "Changer ses fenêtres à Paris : double ou triple vitrage, PVC, aluminium, bois. Prix, aides (MaPrimeRénov'), démarches copropriété. Guide 2025.",
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-fenetre-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix pour changer des fenêtres à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix d'une fenêtre à Paris varie selon le matériau : PVC double vitrage 400 à 800 € (pose comprise), aluminium double vitrage 700 à 1 400 €, bois double vitrage 900 à 2 000 €. Pour un appartement parisien de 70 m² avec 6 fenêtres, comptez 4 000 à 10 000 € selon les matériaux choisis.",
      },
    },
    {
      '@type': 'Question',
      name: 'Faut-il un accord de la copropriété pour changer ses fenêtres ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "En copropriété, les fenêtres sont généralement des parties communes à jouissance privative. Il faut donc l'accord de l'assemblée générale de copropriété. Certains règlements imposent un modèle ou une couleur spécifique pour conserver l'harmonie de la façade. Renseignez-vous auprès de votre syndic avant de commander.",
      },
    },
    {
      '@type': 'Question',
      name: "Y a-t-il des aides pour changer ses fenêtres à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui : MaPrimeRénov' (500 à 2 500 € par fenêtre selon les revenus), l'éco-PTZ pour financer le reste à taux zéro, la TVA à 10% au lieu de 20%. Les fenêtres doivent être installées par une entreprise RGE (Reconnue Garante de l'Environnement) pour bénéficier des aides.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Rénovation Fenêtres Paris : double vitrage, PVC, aluminium — prix 2025",
  description: "Changer ses fenêtres à Paris : double ou triple vitrage, PVC, aluminium, bois. Prix, aides (MaPrimeRénov'), démarches copropriété. Guide 2025.",
}

export default function ArticleRenovationFenetre() {
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
            Rénovation
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Fenêtres Paris : double vitrage, PVC, aluminium — prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Changer ses fenêtres à Paris : double ou triple vitrage, PVC, aluminium, bois. Prix, aides MaPrimeRénov&apos;, démarches copropriété. Guide complet 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Tableau comparatif matériaux */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              PVC, aluminium ou bois : quel matériau choisir à Paris ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Le choix du matériau conditionne le prix, l&apos;esthétique, les performances thermiques et l&apos;accord éventuel de la copropriété. Dans les appartements parisiens — surtout haussmanniens — le règlement de copropriété peut imposer un matériau ou une couleur spécifique.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1C1C1C] text-white">
                    <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Matériau</th>
                    <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix fenêtre standard (pose incluse)</th>
                    <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Entretien</th>
                    <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Durée de vie</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { mat: 'PVC', prix: '400 – 800 €', entretien: 'Très faible', duree: '25 – 30 ans' },
                    { mat: 'Aluminium', prix: '700 – 1 400 €', entretien: 'Faible', duree: '30 – 40 ans' },
                    { mat: 'Bois', prix: '900 – 2 000 €', entretien: 'Moyen (lasure/5 ans)', duree: '30 – 50 ans' },
                    { mat: 'Bois-Alu (mixte)', prix: '1 200 – 2 500 €', entretien: 'Faible (ext. alu)', duree: '35 – 50 ans' },
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
              Prix indicatifs pour une fenêtre standard 120×120 cm, double vitrage, pose comprise. Hors dépose de l&apos;ancienne fenêtre et finitions intérieures.
            </p>
          </div>

          {/* Simple, double, triple vitrage */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Simple, double ou triple vitrage : lequel choisir ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Le simple vitrage est désormais obsolète dans les logements parisiens — il représente une déperdition thermique considérable. La comparaison se fait entre double et triple vitrage.
            </p>
            <div className="space-y-4">
              {[
                {
                  titre: 'Double vitrage (recommandé pour Paris)',
                  texte: "Standard actuel : deux vitrages séparés par un gaz argon (coefficient Uw ≈ 1,1 à 1,4 W/m².K). Offre un bon compromis coût/performance. Le \"double vitrage à isolation renforcée\" (Uw < 1,0) est éligible MaPrimeRénov' et aux aides CEE. Recommandé pour la grande majorité des appartements parisiens.",
                },
                {
                  titre: 'Triple vitrage',
                  texte: "Trois vitrages, Uw ≈ 0,6 à 0,8 W/m².K. Plus performant, mais surcoût de 20 à 30 %. Recommandé en dernier étage (toiture sans isolation), en façade nord ou dans les appartements très exposés au bruit (boulevard, périphérique). Dans un appartement haussmannien standard, le triple vitrage est souvent surdimensionné.",
                },
                {
                  titre: 'Vitrage acoustique',
                  texte: "Option à considérer en priorité à Paris, où le bruit de rue est souvent la première motivation de changement de fenêtres. Un vitrage acoustique asymétrique (4/16/6 ou 6/12/4 par exemple) réduit les nuisances de 32 à 42 dB selon les modèles. Peut être combiné avec la performance thermique.",
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

      {/* Section 2 — Aides + Copropriété */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Aides financières pour changer ses fenêtres à Paris
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Le changement de fenêtres est l&apos;un des travaux les plus aidés en France. Sous conditions de ressources et d&apos;entreprise RGE (Reconnue Garante de l&apos;Environnement), vous pouvez cumuler plusieurs dispositifs.
            </p>
            <div className="space-y-4">
              {[
                {
                  aide: "MaPrimeRénov'",
                  detail: "500 à 2 500 € par fenêtre selon le niveau de revenus (ménages modestes et très modestes prioritaires). Le montant dépend aussi du coefficient thermique de la fenêtre installée. Demande à faire en amont des travaux sur maprimerenov.gouv.fr.",
                },
                {
                  aide: 'TVA à 10 %',
                  detail: "Au lieu de 20 % pour les logements de plus de 2 ans. Condition : l'entreprise installe et fournit les fenêtres (la main-d'œuvre seule bénéficie aussi du taux réduit). Économie significative sur un remplacement complet.",
                },
                {
                  aide: 'Éco-PTZ (Prêt à Taux Zéro)',
                  detail: "Jusqu'à 30 000 € de prêt sans intérêts pour financer des travaux de rénovation énergétique. Peut être combiné avec MaPrimeRénov'. S'obtient auprès de votre banque habituelle sans condition de ressources.",
                },
                {
                  aide: 'Aides CEE (Certificats d\'Économies d\'Énergie)',
                  detail: "Les fournisseurs d'énergie proposent des primes CEE pour le remplacement de fenêtres. Montant variable (100 à 600 € par fenêtre selon les programmes). À demander avant les travaux.",
                },
              ].map((el) => (
                <div key={el.aide} className="bg-white rounded-lg p-5 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.aide}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Démarches copropriété : ce qu&apos;il faut savoir avant de commander
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              À Paris, la grande majorité des appartements sont en copropriété. Les fenêtres étant des éléments de façade, elles relèvent des parties communes dans la quasi-totalité des règlements de copropriété. Voici la procédure à suivre.
            </p>
            <ul className="space-y-3">
              {[
                'Consultez le règlement de copropriété (fourni par le syndic) : il précise si les fenêtres sont parties communes ou privatives, et s\'il existe des contraintes esthétiques.',
                'Demandez l\'autorisation de l\'assemblée générale : en principe requise pour tout changement affectant la façade. La résolution doit être votée à la majorité de l\'article 25.',
                'En cas de secteur sauvegardé ou périmètre ABF (Architectes des Bâtiments de France) : une autorisation préalable de travaux est nécessaire, avec contraintes de matériaux et de coloris.',
                'Certains syndics ont négocié des modèles de référence avec des fabricants : renseignez-vous, cela peut simplifier l\'obtention d\'autorisation.',
                'Délais à anticiper : l\'AG de copropriété se réunit souvent une fois par an — planifiez le remplacement de vos fenêtres 6 à 12 mois à l\'avance.',
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

      {/* Section 3 — DPE + Process */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Impact sur le DPE et la valeur du bien
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le remplacement des fenêtres à simple vitrage par du double vitrage performant permet généralement de gagner une à deux lettres sur le Diagnostic de Performance Énergétique. Dans un appartement haussmannien parisien classé E ou F, le passage au double vitrage renforcé peut contribuer à atteindre la classe D — seuil minimal imposé dès 2028 pour les locations. Une fenêtre bien isolée réduit aussi significativement les ponts thermiques entre le châssis et la maçonnerie.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Réduction des déperditions thermiques de 10 à 15 %',
                'Amélioration du confort d\'hiver (paroi froide éliminée)',
                'Réduction du bruit de rue (option vitrage acoustique)',
                'Valorisation du bien pour la revente ou la location',
                'Critère DPE amélioré pour les biens locatifs',
                'Condensation intérieure éliminée avec châssis à rupture de pont thermique',
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
              Le déroulement du chantier de remplacement de fenêtres
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Un remplacement de fenêtres à Paris dure généralement 1 à 2 jours pour un appartement de 3 à 5 pièces. Le process type avec Espace Design :
            </p>
            <ol className="space-y-3">
              {[
                { etape: 'Prise de mesures', detail: 'Visite technique pour relevé précis de chaque fenêtre (les baies parisiennes ont rarement des dimensions standard). Identification des contraintes copropriété et ABF.' },
                { etape: 'Fabrication sur mesure', detail: 'Délai de 3 à 5 semaines selon le matériau. Le PVC est souvent disponible plus vite que l\'aluminium sur mesure.' },
                { etape: 'Dépose et installation', detail: 'Dépose soigneuse de l\'ancienne menuiserie, nettoyage de l\'about de mur, pose de la nouvelle fenêtre avec joints d\'étanchéité air/eau, calage et vissage.' },
                { etape: 'Finitions intérieures', detail: 'Rebouchage des ébrasements, retouche de peinture ou pose d\'appuis de fenêtre si nécessaire. Souvent négligé par les menuisiers purs — nous l\'intégrons systématiquement.' },
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

      {/* Voir aussi */}
      <section className="py-12 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Voir aussi</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/isolation-paris', title: 'Isolation Paris' },
              { href: '/blog/isolation-thermique-appartement-paris', title: 'Isolation thermique appartement Paris' },
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénover un haussmannien' },
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
          Vous souhaitez changer vos fenêtres à Paris ?
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
