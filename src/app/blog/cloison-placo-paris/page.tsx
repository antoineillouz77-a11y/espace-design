import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: "Cloison Placo Paris", item: 'https://espacedesignparis.fr/blog/cloison-placo-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Cloison Placo Paris : pose, isolation & prix artisan 2025",
  description: "Tout savoir sur la pose de cloisons placoplatre a Paris : types 72/98mm, isolation phonique, doublage, prix au m2. Artisan Paris, devis 48h.",
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/cloison-placo-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix d'une cloison placo a Paris en 2025 ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A Paris, le prix de pose d'une cloison placoplatre se situe entre 55 et 90 euros par m2, fourniture et pose incluses. Une cloison standard 72 mm (2 plaques de 13 mm + ossature + isolant laine minerale) revient a 60-75 euros/m2. Une cloison phonique renforcee 98 mm (double ossature, double plaque) monte a 80-120 euros/m2. Une nouvelle chambre de 12 m2 (environ 20 m2 de cloisons) represente donc entre 1 200 et 2 400 euros pour la cloison seule, hors peinture et finitions.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelle est la difference entre une cloison 72 mm et une cloison 98 mm ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La cloison 72 mm est la configuration standard : ossature metalique 48 mm, une plaque BA13 de chaque cote, laine minerale 45 mm. Indice d'affaiblissement acoustique : Rw 42-44 dB. Suffisant pour separer deux pieces secondaires. La cloison 98 mm offre une performance acoustique superieure : ossature 70 mm, double plaque d'un cote ou des deux, laine minerale haute densite. Rw 50-56 dB, recommandee entre une chambre et un salon ou une salle de bain et une piece de vie. L'ecart de prix est de l'ordre de 15 a 25 % mais le gain phonique est significatif.",
      },
    },
    {
      '@type': 'Question',
      name: "Peut-on poser des cloisons placo dans un appartement en copropriete a Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La creation de cloisons interieures non porteuses ne necessite generalement pas d'autorisation de la copropriete ni de permis de construire. En revanche, si les travaux modifient la distribution de l'appartement de facon significative (creation d'une chambre supplementaire, modification des reseaux d'eau ou d'electricite), une declaration en assemblee generale peut etre prudente selon le reglement de copropriete. Si la cloison touche un mur porteur (percage, accrochage linteau), un bureau d'etudes structure est necessaire.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelle plaque de platre choisir selon la piece ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le platre BA13 standard convient pour toutes les pieces a sec (salon, chambre, couloir). Le platre hydrofuge (BA13 H ou Aquaroc) est indispensable dans les salles de bain et cuisines exposees aux projections d'eau. Le platre phonique (platre haute densite Knauf Diamant, Siniat Performance) ameliore significativement l'isolation acoustique sans augmenter l'epaisseur. Le platre feu (platre ignifuge) est exige dans les cages d'escalier et les locaux techniques. A Paris, dans les immeubles anciens, le platre hydrofuge est souvent prescrit meme dans les salles de bain non directement exposees, en raison de l'humidite generale.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Cloison Placo Paris : pose, isolation & prix artisan 2025",
  description: "Tout savoir sur la pose de cloisons placoplatre a Paris : types 72/98mm, isolation phonique, doublage, prix au m2. Artisan Paris, devis 48h.",
  keywords: [
    'cloison placo Paris',
    'pose cloison placoplatre Paris',
    'prix cloison placo Paris',
    'cloison phonique Paris',
    'doublage placo Paris',
    'artisan platrier Paris',
    'cloison separation appartement Paris',
  ],
}

export default function ArticleCloisonPlacoParis() {
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
            Platrererie
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Pose Cloison Placo a Paris : guide complet artisan 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            La cloison en placoplatre est la solution la plus rapide et la plus propre pour redistribuer les espaces d&apos;un appartement parisien : creer une chambre supplementaire, isoler phoniquement une salle de bain, doubler un mur froid. Guide complet 2025 : types de cloisons, isolation phonique, doublage, prix au m2 et delais.
          </p>
        </div>
      </section>

      {/* Section 1 — Types de cloisons */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les types de cloisons placoplatre et leurs usages a Paris
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Il n&apos;existe pas une seule cloison placo mais une gamme complete, chacune adaptee a un usage specifique. Le choix depend des performances attendues (acoustique, resistance a l&apos;eau, feu) et de la configuration de l&apos;appartement.
            </p>
            <div className="space-y-4">
              {[
                {
                  titre: "Cloison standard 72 mm (Rw 42-44 dB)",
                  detail: "Configuration la plus courante : ossature metallique Stil Cloison 48 mm, une plaque BA13 de chaque cote, laine minerale 45 mm. Hauteur max sans renforcement : 3,50 m. Indice d'affaiblissement acoustique Rw 42-44 dB : suffisant pour separer deux pieces secondaires (bureau/chambre, couloir/piece de vie). Epaisseur totale finie : 7,5 cm. C'est la solution standard pour la redistribution des pieces dans les appartements parisiens.",
                },
                {
                  titre: "Cloison phonique renforcee 98 mm (Rw 50-56 dB)",
                  detail: "Double ossature ou ossature 70 mm, double plaque d'un cote ou des deux, laine minerale haute densite (Isover Isoconfort, Knauf Acousti). Rw 50-56 dB : comparable a une paroi en brique. Recommandee entre chambre et salon, entre salle de bain et piece a vivre, ou dans toute configuration ou l'isolation acoustique est prioritaire. Epaisseur : 10 a 14 cm. Ideal dans les appartements haussmanniens avec forts echanges thermiques.",
                },
                {
                  titre: "Cloison hydrofuge (salle de bain, cuisine)",
                  detail: "Ossature standard + plaques BA13 H (hydrofuge, plaque verte) ou Aquaroc (platre fibre). Resistante aux projections d'eau et a l'humidite ambiante. Recouvrement systematique par un carrelage, un enduit hydro ou une peinture membrane dans les zones directement exposees a l'eau (autour de la douche, bac). Indispensable dans toutes les salles de bain parisiennes, meme avec une VMC correctement dimensionnee.",
                },
                {
                  titre: "Cloison feu (cage d'escalier, locaux techniques)",
                  detail: "Plaques ignifuges (Knauf Fireboard, Siniat Fireknauf) permettent d'atteindre des degres coupe-feu de 60 a 120 minutes. Exiges dans les cages d'escalier d'immeubles collectifs, les locaux techniques, les parkings. Les travaux sur ces elements demandent souvent l'accord de la copropriete et doivent respecter le DTU 25.41.",
                },
                {
                  titre: "Doublage isolant thermique",
                  detail: "Systeme de doublage colle ou fixe sur l'ossature, associant une plaque de platre et un isolant (laine de verre, polystyrene, polyurethane). Permet d'ameliorer l'isolation thermique des murs exterieurs sans retirer le revetement existant. Perte de surface : 5 a 10 cm sur le mur traite. Tres utilise a Paris pour ameliorer le DPE des logements anciens sans lourds travaux.",
                },
              ].map((el) => (
                <div key={el.titre} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.titre}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Isolation phonique */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Isolation phonique : comment vraiment reduire les bruits entre pieces
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;isolation phonique d&apos;une cloison placo repose sur deux principes : la masse (plaques lourdes) et le decouplage (rupture des ponts solidiens entre les deux faces). La seule laine minerale ne suffit pas si l&apos;ossature transmet les vibrations directement.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                solution: "Laine minerale haute densite",
                perf: "Rw +3 a +5 dB vs vide",
                detail: "La laine minerale (laine de verre ou laine de roche) absorbe les ondes sonores dans le vide de la cloison. Sa densite est determinante : 45 kg/m3 minimum pour un effet acoustique reel. Les produits Isover, Rockwool ou Knauf dediees a l'acoustique sont recommandes. La laine doit remplir completement le vide de l'ossature sans laisser de pont vide.",
              },
              {
                solution: "Double ossature desolidarisee",
                perf: "Rw +6 a +10 dB vs ossature simple",
                detail: "La double ossature (deux rangees de montants independants) rompt la transmission solidienne des vibrations entre les deux faces de la cloison. C'est le principe le plus efficace pour les cloisons phoniques haute performance. L'espace entre les deux ossatures est rempli de laine de roche. Epaisseur totale : 12 a 16 cm.",
              },
              {
                solution: "Plaques phoniques haute densite",
                perf: "Rw +2 a +4 dB vs BA13 standard",
                detail: "Les plaques haute densite (Knauf Diamant 12,5 kg/m2 vs 8,5 pour le BA13 standard, Siniat Performance) augmentent la masse surfacique de la cloison sans augmenter son epaisseur. Le rapport cout/performance est excellent : surcout de 15 a 25 % sur la plaque mais gain phonique immediat.",
              },
              {
                solution: "Bande de desolidarisation",
                perf: "Rw +2 a +3 dB",
                detail: "La bande resiliente (mousse ou EPDM) posee sous les rails au sol et au plafond evite la transmission des vibrations a la structure. Peu chere (2-3 euros/ml) et souvent omise en chantier economique, elle est pourtant determinante pour les hautes frequences et les bruits d'impact.",
              },
            ].map((el) => (
              <div key={el.solution} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-1">{el.solution}</div>
                <div className="text-[#B8960C] text-xs font-medium mb-2">{el.perf}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
          <div className="bg-[#1C1C1C] rounded-lg p-5 text-sm text-gray-300 font-light leading-relaxed">
            <span className="text-[#D4AF37] font-medium">Regle a retenir :</span> dans les immeubles collectifs parisiens, la reglementation acoustique (NRA) exige DnTw ≥ 53 dB entre logements distincts. Pour une cloison interne a un meme appartement, il n&apos;y a pas d&apos;exigence reglementaire, mais un objectif pratique de Rw ≥ 45 dB entre une chambre et un sejour est recommande.
          </div>
        </div>
      </section>

      {/* Section 3 — Doublage */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Doublage de murs : isolation thermique et acoustique
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le doublage consiste a appliquer un complexe placo+isolant sur un mur existant, sans le demolir. C&apos;est la solution la plus courante pour ameliorer l&apos;isolation thermique d&apos;un appartement parisien ancien (murs en pierre, brique, beton non isole) ou pour corriger un mur irregulier.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: "Doublage colle (sans ossature)",
                detail: "Le complexe isolant+plaque (polyurethane ou polystyrene) est colle directement sur le mur existant avec un mortier colle. Avantages : tres fin (5 a 10 cm), rapide a poser, economique. Inconvenients : le mur doit etre plan et sec, aucune gaine electrique ne peut etre dissimilee dans l'epaisseur. Adapte aux murs en bon etat dans les sejours et chambres.",
              },
              {
                type: "Doublage sur ossature metallique",
                detail: "Ossature Stil R fixee au sol et au plafond avec des tasseaux d'ecartement, isolation en laine minerale ou PU glissee dans l'ossature, plaque BA13 vissee. Permet d'integrer les gaines electriques et les boites d'encastrement. Plus epais (8 a 15 cm) mais offre une grande souplesse. Recommande dans les piuces complexes ou les murs irreguliers.",
              },
              {
                type: "Doublage hydrofuge pour salle de bain",
                detail: "Dans les salles de bain, le doublage utilise des plaques Aquaroc (plaque en ciment, non sensible a l'eau) ou des plaques BA13 H recouvertes d'une membrane d'etancheite (Schluter Kerdi, Wedi) avant le carrelage. Cette etancheite sous carrelage est obligatoire dans les douches et les bacs (zone P1 selon NF DTU 52.2).",
              },
            ].map((el) => (
              <div key={el.type} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.type}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Prix et delais */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix cloison placo a Paris : tableau recapitulatif 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Tarifs fourniture et pose incluses pour des cloisons standard en appartements parisiens, finition bande a joint enduite et ponced (pret a peindre).
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Type</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Epaisseur</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Perf. acoustique</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix/m2</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "Cloison standard BA13", ep: "7,5 cm", perf: "Rw 42-44 dB", prix: "55 – 70 euros/m2" },
                  { type: "Cloison phonique renforcee", ep: "9,5 – 12 cm", perf: "Rw 50-54 dB", prix: "75 – 100 euros/m2" },
                  { type: "Cloison double ossature", ep: "12 – 16 cm", perf: "Rw 54-58 dB", prix: "95 – 130 euros/m2" },
                  { type: "Cloison hydrofuge BA13 H", ep: "7,5 cm", perf: "Rw 42-44 dB", prix: "65 – 80 euros/m2" },
                  { type: "Doublage colle (isolant+plaque)", ep: "5 – 10 cm", perf: "R 1,5 – 3 m2.K/W", prix: "45 – 70 euros/m2" },
                  { type: "Doublage sur ossature", ep: "8 – 15 cm", perf: "R 2 – 4 m2.K/W", prix: "55 – 85 euros/m2" },
                ].map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium text-sm">{row.type}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light text-sm">{row.ep}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light text-sm">{row.perf}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium text-sm">{row.prix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Points de vigilance pour une cloison placo reussie
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Poser une bande desolidarisante sous les rails pour eviter les ponts phoniques",
                "Prevoir l'electricite avant de fermer la cloison (passage de gaines)",
                "Ne jamais oublier la laine minerale : l'air seul n'isole pas phoniquement",
                "Verifier la planete au regle avant la finition pour un enduit impeccable",
                "Dans les SdB, privilegier Aquaroc ou BA13 H + membrane etanche sous carrelage",
                "Prevoir au minimum 48h de sechage des enduits avant peinture",
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
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-6 text-center">Questions frequentes</p>
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

      {/* Guides connexes */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Guides connexes</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/isolation-phonique-appartement-paris', title: 'Isolation phonique appartement Paris' },
              { href: '/blog/creation-cloison-separation-paris', title: 'Cloison separation Paris' },
              { href: '/blog/faux-plafond-paris', title: 'Faux plafond Paris' },
              { href: '/blog/isolation-murs-appartement-paris', title: 'Isolation murs Paris' },
              { href: '/blog/renovation-salle-de-bain-paris', title: 'Renovation salle de bain Paris' },
              { href: '/blog/budget-renovation-appartement-paris', title: 'Budget renovation appartement Paris' },
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

      {/* CTA */}
      <section className="py-16 bg-[#D4AF37] text-center px-4">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-4">
          Pose de cloison placo a Paris
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Cloisons standard et phoniques, doublage, finition enduit. Devis gratuit sous 48h.
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
