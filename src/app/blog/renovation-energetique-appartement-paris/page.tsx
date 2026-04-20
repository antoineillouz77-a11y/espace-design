import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: "Rénovation Énergétique Appartement Paris", item: 'https://espacedesignparis.fr/blog/renovation-energetique-appartement-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation Énergétique Appartement Paris : DPE, aides & artisan 2025 | Espace Design",
  description: "Améliorer le DPE de son appartement parisien : isolation, fenêtres, chauffage. MaPrimeRénov, CEE. Artisan Paris, devis 48h.",
  datePublished: '2025-04-20',
  dateModified: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-energetique-appartement-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel DPE minimum pour louer son appartement à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Depuis le 1er janvier 2025, les logements classés G (consommation > 450 kWh/m²/an) sont interdits à la location en France, y compris à Paris. À partir de 2028, ce sera au tour des logements F, puis E en 2034. Pour les propriétaires bailleurs parisiens, il est donc urgent d'engager des travaux de rénovation énergétique pour atteindre au minimum la classe D, idéalement C, afin de sécuriser la valeur locative du bien sur le long terme.",
      },
    },
    {
      '@type': 'Question',
      name: "MaPrimeRénov est-il accessible en appartement ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, MaPrimeRénov' est accessible aux propriétaires occupants et aux propriétaires bailleurs d'appartements. En copropriété, les travaux sur les parties privatives (isolation des murs intérieurs, remplacement du chauffe-eau, pompe à chaleur individuelle) sont éligibles. Les travaux sur parties communes (isolation de la toiture, isolation de la façade) peuvent bénéficier d'une aide collective en copropriété via MaPrimeRénov' Copropriétés. Les travaux doivent être réalisés par un artisan RGE.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelle amélioration DPE avec une isolation des murs ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'isolation des murs par l'intérieur (ITI) est le travail le plus impactant dans un appartement parisien. Un doublage de 60 à 100 mm de laine de roche sur les murs extérieurs permet généralement de gagner 1 à 2 lettres DPE. Par exemple, un appartement classé F peut passer en D après isolation des murs et remplacement des fenêtres. L'impact dépend aussi de la surface de murs extérieurs, de l'exposition et du système de chauffage.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il passer par un RGE pour les aides ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, pour bénéficier de MaPrimeRénov', des CEE (Certificats d'Économies d'Énergie) et de la TVA à 5,5%, les travaux doivent obligatoirement être réalisés par un artisan certifié RGE (Reconnu Garant de l'Environnement). Cette certification garantit les compétences de l'artisan en matière de performance énergétique. Espace Design travaille avec des partenaires RGE certifiés pour tous les travaux d'isolation, de chauffage et de ventilation éligibles aux aides.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Rénovation Énergétique Appartement Paris : DPE, aides & artisan 2025 | Espace Design",
  description: "Améliorer le DPE de son appartement parisien : isolation, fenêtres, chauffage. MaPrimeRénov, CEE. Artisan Paris, devis 48h.",
  keywords: ["rénovation énergétique appartement Paris", "améliorer DPE Paris", "isolation thermique Paris appartement", "MaPrimeRénov Paris", "rénovation globale Paris"],
}

export default function ArticleRenovationEnergetiqueParis() {
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
            Isolation
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Énergétique Appartement Paris : améliorer son DPE en 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Loi Climat, passoires thermiques interdites à la location, hausse des charges : la rénovation énergétique est devenue un impératif pour les propriétaires parisiens. Isolation, fenêtres, chauffage, aides financières — guide complet pour améliorer le DPE de son appartement à Paris en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Contexte loi Climat */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Loi Climat et passoires thermiques : enjeux pour les propriétaires parisiens
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            Depuis le 1er janvier 2025, les logements classés G sont interdits à la mise en location sur tout le territoire français. Paris, ville dense où le parc immobilier est très ancien — plus de 60 % des appartements ont été construits avant 1948 — est particulièrement concernée. Les immeubles haussmanniens, les bâtiments en meulière et les immeubles des années 1960-1970 accumulent des défauts structurels : murs non isolés, simple vitrage, chauffage électrique à effet joule, ventilation inexistante.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            Le calendrier de la loi Climat est strict : classe G interdite à la location depuis 2025, classe F interdite à partir de 2028, classe E à partir de 2034. Pour les propriétaires bailleurs parisiens, engager des travaux dès maintenant permet non seulement de maintenir le bien en location, mais aussi de valoriser le patrimoine et d&apos;anticiper les contraintes futures.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {[
              { annee: '2025', mesure: 'Classe G interdite à la location', couleur: 'bg-red-50 border-red-200' },
              { annee: '2028', mesure: 'Classe F interdite à la location', couleur: 'bg-orange-50 border-orange-200' },
              { annee: '2034', mesure: 'Classe E interdite à la location', couleur: 'bg-yellow-50 border-yellow-200' },
            ].map((el) => (
              <div key={el.annee} className={`rounded-lg p-5 border ${el.couleur}`}>
                <div className="font-semibold text-[#1C1C1C] text-lg mb-1">{el.annee}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.mesure}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Comprendre le DPE */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Comprendre le DPE de son appartement parisien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le Diagnostic de Performance Énergétique (DPE) attribue une étiquette de A (très performant, moins de 70 kWh/m²/an) à G (passoire thermique, plus de 420 kWh/m²/an). Depuis juillet 2021, le DPE est opposable juridiquement : un propriétaire peut être tenu responsable si le DPE affiché ne correspond pas à la réalité.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le calcul du DPE prend en compte quatre facteurs principaux : l&apos;isolation des murs, du plancher et de la toiture, la qualité des menuiseries (simple ou double vitrage), le système de chauffage et de production d&apos;eau chaude sanitaire, et la ventilation. Dans un appartement parisien ancien, les deux facteurs les plus pénalisants sont généralement l&apos;absence d&apos;isolation des murs et le chauffage électrique à effet joule.
          </p>
          <div className="space-y-3">
            {[
              { label: 'Étiquette A', seuil: '< 70 kWh/m²/an', detail: "Logements très performants, souvent construits après 2012 (RT 2012) ou rénovés globalement. Rares à Paris." },
              { label: 'Étiquette B', seuil: '70 – 110 kWh/m²/an', detail: "Bâtiments récents ou rénovés avec double vitrage, isolation et pompe à chaleur." },
              { label: 'Étiquette C', seuil: '110 – 180 kWh/m²/an', detail: "Objectif réaliste après rénovation énergétique partielle (isolation + menuiseries)." },
              { label: 'Étiquette D', seuil: '180 – 250 kWh/m²/an', detail: "Minimum recommandé pour les appartements parisiens rénovés. Seuil locatif sécurisé." },
              { label: 'Étiquette E', seuil: '250 – 330 kWh/m²/an', detail: "Attention : interdite à la location à partir de 2034. Travaux à planifier." },
              { label: 'Étiquette F-G', seuil: '> 330 kWh/m²/an', detail: "Passoire thermique. Interdite à la location (G depuis 2025, F depuis 2028)." },
            ].map((el) => (
              <div key={el.label} className="bg-white rounded-lg p-4 border border-gray-100 flex items-start gap-4">
                <div className="text-xs font-semibold text-[#B8960C] w-20 flex-shrink-0">{el.label}</div>
                <div className="text-xs text-gray-500 w-36 flex-shrink-0">{el.seuil}</div>
                <div className="text-sm text-gray-600 font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Travaux prioritaires */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Les travaux prioritaires pour améliorer le DPE
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Dans un appartement parisien, l&apos;ordre de priorité des travaux doit suivre l&apos;impact sur le DPE. L&apos;isolation des murs et le remplacement du chauffage sont les postes les plus efficaces ; les fenêtres et la ventilation viennent en complément.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                titre: "Isolation des murs par l'intérieur (ITI)",
                gain: '+1 à 2 lettres DPE',
                detail: "Doublage des murs extérieurs avec laine de roche 60 à 100 mm sur ossature métallique et plaque de plâtre. Traitement des ponts thermiques aux angles et tableaux de fenêtre. Travail réalisable sans accord de copropriété car il reste dans les parties privatives. Gain moyen : 1 à 2 lettres DPE sur un appartement parisien en immeuble ancien.",
              },
              {
                titre: "Isolation plancher haut et plancher bas",
                gain: '+0,5 à 1 lettre DPE',
                detail: "Si l'appartement est sous toiture, l'isolation des combles perdus par soufflage (ouate de cellulose 200 mm) est la solution la plus rapide et économique. Pour les appartements en rez-de-chaussée ou sur vide sanitaire, l'isolation du plancher bas en sous-face est recommandée. Ces deux travaux sont éligibles aux aides.",
              },
              {
                titre: "Remplacement des fenêtres simple vitrage",
                gain: '+0,5 à 1 lettre DPE',
                detail: "Les appartements parisiens anciens avec simple vitrage perdent 15 à 20 % de leur chaleur par les menuiseries. Le remplacement par un double vitrage 4/16/4 (ou triple vitrage pour les expositions nord) améliore aussi le confort acoustique. Attention aux contraintes ABF (Architectes des Bâtiments de France) dans les secteurs sauvegardés — le PVC est souvent interdit au profit de l'aluminium ou du bois.",
              },
              {
                titre: "Changement du système de chauffage",
                gain: '+1 à 2 lettres DPE',
                detail: "Le remplacement d'un chauffage électrique à effet joule par une pompe à chaleur air/air ou un chauffe-eau thermodynamique est l'action la plus impactante sur le DPE car le coefficient de pondération de l'électricité est de 2,3 dans le calcul. Une PAC consomme 3 fois moins d'énergie finale pour la même chaleur produite. Éligible MaPrimeRénov' jusqu'à 4 000 €.",
              },
            ].map((el) => (
              <div key={el.titre} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-1">{el.titre}</div>
                <div className="text-[#B8960C] text-xs font-medium mb-3">{el.gain}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Aides financières */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Aides financières 2025 pour la rénovation énergétique à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Plusieurs dispositifs permettent de financer une rénovation énergétique à Paris. Ces aides sont cumulables et peuvent couvrir 30 à 70 % du montant des travaux selon les revenus du foyer.
          </p>
          <div className="space-y-4 mb-8">
            {[
              {
                type: "MaPrimeRénov' (ANAH)",
                montant: "Jusqu'à 75 €/m² pour l'isolation",
                detail: "Aide de l'État calculée selon les revenus et le type de travaux. Quatre tranches : très modestes (jusqu'à 75 €/m²), modestes (50 €/m²), intermédiaires (25 €/m²), aisés (15 €/m²). Pour un appartement de 60 m² avec isolation des murs sur 80 m² de surface de murs extérieurs : aide potentielle de 1 200 à 6 000 €. Travaux RGE obligatoires. Demande sur le site MaPrimeRénov.gouv.fr.",
              },
              {
                type: "Certificats d'Économies d'Énergie (CEE)",
                montant: "2 000 à 8 000 € pour une rénovation complète",
                detail: "Prime versée par les fournisseurs d'énergie (EDF, Total Énergies, Engie...) en contrepartie de travaux d'économies d'énergie. Cumulable avec MaPrimeRénov'. Espace Design accompagne ses clients dans la constitution des dossiers CEE — aucune démarche administrative à votre charge.",
              },
              {
                type: "TVA à 5,5 %",
                montant: "Au lieu de 10 % pour les travaux de rénovation",
                detail: "Tous les travaux d'amélioration énergétique (isolation, menuiseries, chauffage) bénéficient d'une TVA réduite à 5,5 % pour les logements de plus de 2 ans. Cela représente une économie significative sur le montant total des travaux — par exemple, 550 € de TVA en moins sur une facture de 10 000 € HT.",
              },
              {
                type: "Éco-prêt à taux zéro (Éco-PTZ)",
                montant: "Jusqu'à 50 000 € sans intérêts",
                detail: "Prêt sans intérêt remboursable sur 20 ans, accessible aux propriétaires occupants et bailleurs pour financer des travaux d'amélioration énergétique. Compatible avec MaPrimeRénov'. Doit couvrir au moins un poste d'amélioration énergétique. Disponible dans la plupart des banques partenaires.",
              },
            ].map((el) => (
              <div key={el.type} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.type}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.montant}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Budget */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Budget rénovation énergétique à Paris : grille tarifaire 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Prix indicatifs main d&apos;œuvre et matériaux inclus, hors aides financières. Les fourchettes reflètent les variations liées à la configuration du logement, à l&apos;accessibilité du chantier et à la qualité des matériaux choisis.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Travaux</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Surface / Quantité</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget estimatif</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Gain DPE</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { travaux: "Isolation murs ITI (laine de roche)", surface: "60 m² de murs extérieurs", budget: "8 000 – 20 000 €", gain: "1 à 2 lettres" },
                  { travaux: "Remplacement fenêtres (double vitrage)", surface: "6 fenêtres standard", budget: "6 000 – 12 000 €", gain: "0,5 à 1 lettre" },
                  { travaux: "Pompe à chaleur air/eau individuelle", surface: "Appartement 60 m²", budget: "8 000 – 15 000 €", gain: "1 à 2 lettres" },
                  { travaux: "Isolation combles perdus (soufflage)", surface: "Sous toiture 40 m²", budget: "2 000 – 5 000 €", gain: "0,5 à 1 lettre" },
                  { travaux: "VMC hygro B double flux", surface: "Appartement 60 m²", budget: "2 500 – 5 000 €", gain: "0,5 lettre" },
                  { travaux: "Rénovation globale (murs + fenêtres + PAC)", surface: "Appartement 60 m²", budget: "25 000 – 60 000 €", gain: "2 à 4 lettres" },
                ].map((row, i) => (
                  <tr key={row.travaux} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium text-sm">{row.travaux}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light text-sm">{row.surface}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium text-sm">{row.budget}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light text-sm">{row.gain}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 6 — Notre approche */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Espace Design et la rénovation énergétique à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Espace Design accompagne les propriétaires parisiens dans l&apos;amélioration du DPE de leurs appartements, du diagnostic initial jusqu&apos;à la réception des travaux. Notre approche repose sur une évaluation précise avant de recommander des travaux : nous ne proposons que les interventions réellement efficaces pour votre situation spécifique.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              "Diagnostic thermique avant travaux : identification des ponts thermiques, des déperditions prioritaires et de l'état du système de chauffage",
              "Constitution des dossiers MaPrimeRénov' et CEE — aucune démarche administrative pour le propriétaire",
              "Coordination avec les artisans RGE certifiés pour les travaux éligibles aux aides",
              "Traitement des ponts thermiques aux angles, tableaux de fenêtre et liaisons plancher/mur",
              "Choix des matériaux adaptés aux immeubles anciens parisiens (respirabilité, hygroscopicité)",
              "Devis détaillé sous 48h, délai d'intervention rapide sur Paris et petite couronne",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            Nous intervenons dans tous les arrondissements de Paris et dans les communes limitrophes : Neuilly-sur-Seine, Levallois-Perret, Boulogne-Billancourt, Saint-Ouen, Vincennes. Notre connaissance des contraintes spécifiques à l&apos;immobilier parisien — règles ABF, contraintes de copropriété, hauteurs sous plafond limitées dans les immeubles anciens — nous permet de proposer des solutions adaptées à chaque configuration.
          </p>
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
              { href: '/blog/isolation-thermique-appartement-paris', title: "Isolation thermique appartement Paris" },
              { href: '/blog/isolation-murs-appartement-paris', title: "Isolation murs appartement Paris" },
              { href: '/blog/chauffage-appartement-paris', title: "Chauffage appartement Paris" },
              { href: '/blog/renovation-appartement-bailleur-paris', title: "Rénovation appartement bailleur Paris" },
              { href: '/blog/humidite-appartement-paris', title: "Humidité appartement Paris" },
              { href: '/blog/renovation-fenetre-paris', title: "Rénovation fenêtre Paris" },
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
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-levallois-perret', label: 'Levallois' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
              { href: '/renovation-courbevoie', label: 'Courbevoie' },
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
          Rénovation énergétique à Paris : devis gratuit sous 48h
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic énergétique, isolation, chauffage. Accompagnement MaPrimeRénov&apos; et CEE. Devis détaillé sous 48h.
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
