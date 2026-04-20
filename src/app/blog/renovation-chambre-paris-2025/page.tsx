import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Renovation Chambre Paris 2025', item: 'https://espacedesignparis.fr/blog/renovation-chambre-paris-2025' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Renovation Chambre Paris 2025 : tendances, idees & prix artisan",
  description: "Renover sa chambre a Paris en 2025 : tendances couleurs et materiaux, placards sur mesure, parquet, eclairage, et prix artisan. Devis gratuit Espace Design.",
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-chambre-paris-2025',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel budget prevoir pour renover une chambre a Paris en 2025 ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le budget de renovation d'une chambre a Paris en 2025 varie selon le niveau de finition : comptez 3 000 a 6 000 euros pour une renovation complete legere (peinture, sol, eclairage) d'une chambre de 12 m2, 6 000 a 12 000 euros pour une renovation avec placards sur mesure et parquet, et 12 000 a 25 000 euros pour une renovation haut de gamme avec habillage mural, dressing integre, eclairage architectural et mobilier sur mesure. La main d'oeuvre parisienne represent generalement 40 a 50 % du cout total.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelles sont les tendances couleurs pour les chambres parisiennes en 2025 ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les tendances 2025 pour les chambres a Paris privilegient les teintes terreuses et naturelles : vert sauge (Farrow & Ball Mizzle, Sage, Mist), bleu mineral (Hague Blue, Stone Blue), beige chaud (Joa's White, Old White) et terracotta doux. La tendance du mur tete de lit peint dans une teinte contrastee (color block) reste forte. Les murs sombres (vert foret, bleu nuit, noir doux) dans les grandes chambres creent un effet cocon tres apprecie. Le blanc pur recule au profit des blancs casses et des terres de Sienne.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel sol choisir pour une chambre a Paris en 2025 ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le parquet reste le sol le plus plébiscite pour les chambres parisiennes en 2025 : parquet massif chene naturel (150 a 250 euros par m2 pose comprise) ou parquet contrecolle (80 a 150 euros par m2). La moquette revient en force dans les chambres enfants et les chambres cosy pour ses qualites acoustiques et sa douceur sous les pieds (40 a 80 euros par m2 pose incluse). Le sol vinyle LVT haut de gamme imitation parquet est une alternative economique pour les budgets serres (30 a 60 euros par m2 pose incluse). Eviter le carrelage froid pour une chambre, sauf en combinaison avec un plancher chauffant.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il faire appel a un architecte pour renover une chambre a Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour une renovation simple (peinture, sol, eclairage), un artisan generaliste ou un peintre suffit. Pour une renovation complete avec creation de placards sur mesure, modification de cloisons ou installation electrique importante, un architecte d'interieur ou un maitre d'oeuvre est recommande. A Paris, les architectes d'interieur facturent generalement 8 a 15% du montant total des travaux, mais leur intervention garantit la coherence du projet et evite les erreurs couteuses. Espace Design propose un accompagnement complet de la conception a la livraison.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Renovation Chambre Paris 2025 : tendances, idees & prix artisan | Espace Design",
  description: "Renover sa chambre a Paris en 2025 : tendances couleurs et materiaux, placards sur mesure, parquet, eclairage et prix artisan. Devis gratuit Espace Design.",
  keywords: ["renovation chambre Paris", "renovation chambre Paris 2025", "prix renovation chambre Paris", "tendances chambre 2025", "artisan chambre Paris"],
}

export default function ArticleRenovationChambreParis2025() {
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
            Renovation & Design
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Renovation Chambre Paris 2025 : tendances, idees &amp; prix artisan
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            La chambre est la piece la plus intime de l&apos;appartement. Sa renovation merite une attention particuliere : couleurs apaisantes, materiaux durables, rangements optimises, eclairage soigne. Guide complet sur les tendances 2025, les solutions les plus demandees a Paris et les prix des artisans specialises.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-[#1C1C1C] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { val: '3 000 €', label: 'Budget mini renovation complete' },
              { val: '12 m²', label: 'Surface moyenne chambre Paris' },
              { val: '5 ans', label: 'Frequence renovation selon enquetes' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-xl sm:text-2xl font-semibold text-[#D4AF37] mb-1">{s.val}</div>
                <div className="text-gray-500 text-[10px] uppercase tracking-wider font-light">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1 — Tendances 2025 */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C]">
            Tendances renovation chambre Paris 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            Les tendances pour les chambres parisiennes en 2025 s&apos;orientent clairement vers le cocooning et l&apos;hygge — des interieurs chaleureux, enveloppants, qui invitent a la detente. Apres les annees de blanc minimaliste, les Parisiens redecouvrent les couleurs profondes, les textures naturelles et les pieces qui racontent une histoire.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            La tendance forte de 2025 est le mur tete de lit traite en couleur contrastee (color block) : une seule paroi peinte dans une teinte profonde (vert fonce, bleu mineral, terracotta) tandis que les autres murs restent dans un blanc casse ou un beige chaud. Cette technique tres efficace cree un axe visuel fort sans alourdir la piece.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            Les materiaux naturels continuent leur progression : bois brut, lin, coton bio, pierre de travertin, rotin. Le parquet chene naturel huilé reste le sol de reference pour les chambres parisiennes, bien en avance sur les solutions synthetiques. La moquette de laine revient en force dans les chambres a coucher pour ses qualites acoustiques et son confort sous les pieds.
          </p>
        </div>
      </section>

      {/* Section 2 — Couleurs & Materiaux */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Couleurs et materiaux tendance 2025 pour les chambres
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le choix des couleurs et des materiaux est determinant dans une chambre. Voici les selections les plus demandees par les clients parisiens en 2025.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: "Verts naturels (sauge, foret, mousse)",
                detail: "Le vert dans toutes ses nuances est LA couleur chambre de 2025. Du vert sauge pale (Farrow & Ball Mizzle) tres reposant pour les petites chambres, au vert foret profond (Hague Blue, Studio Green) pour les grandes chambres lumineuses. Le vert s'accorde parfaitement avec le parquet chene blond, les textiles naturels et les touches de cuivre ou laiton.",
              },
              {
                titre: "Blues mineraux et nuits profonde",
                detail: "Le bleu mineral (Farrow & Ball Stone Blue, Inchyra Blue) apporte une profondeur romantique tres appreciee dans les chambres parisiennes. Le bleu nuit (Hague Blue, Railings) cree un effet cocon saisissant en chambre adulte. Ces teintes sombres fonctionnent surtout dans les chambres avec une bonne lumiere naturelle ou un eclairage soigne.",
              },
              {
                titre: "Beiges et terres chaudes",
                detail: "Contraste avec les annees 2010 tout-blanc, les beiges chauds (Farrow & Ball Joa's White, Cord, Steps) et les terracottas doux font leur grand retour. Ces teintes creent une ambiance chaleureuse et enveloppante. Ils s'accordent avec tous les styles de mobilier et sont tres faciles a vivre au quotidien.",
              },
              {
                titre: "Textures et materiaux naturels",
                detail: "Le lin naturel (rideaux, tete de lit tapissee, coussins) est la texture incontournable de 2025. Le bois brut non traite ou huilé (chevets, commode, parquet) apporte de la chaleur. La pierre de travertin en petits formats (sol, tablette de fenetre) introduit une note mineraliste. Les enduits a la chaux (murs textures) remplacent avantageusement les peintures plates.",
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

      {/* Section 3 — Placards & Rangements */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Placards sur mesure et dressing : optimiser le rangement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Dans les appartements parisiens ou chaque metre carre compte, les placards sur mesure sont la solution la plus frequemment demandee en renovation de chambre. Un placard entierement sur mesure exploite toute la hauteur sous plafond et s&apos;adapte aux contraintes specifiques (poutres, niches, biais) de chaque appartement.
          </p>
          <div className="space-y-4 mb-8">
            {[
              {
                type: "Placard coulissant integre (sol-plafond)",
                prix: "800 – 2 500 €/ml (selon finition)",
                detail: "Solution la plus demandee a Paris. Les portes coulissantes permettent de gagner la place d'ouverture d'un placard battant (environ 60 cm) — precieux dans les chambres de 10 a 14 m2. L'interieur est organise avec penderies, etageres et tiroirs sur mesure. La facade peut etre laquee, en MDF peint, en verre, en miroir ou en bois naturel.",
              },
              {
                type: "Dressing integre (niche ou angle)",
                prix: "2 000 – 8 000 € (selon surface)",
                detail: "Amenagement complet d'une niche ou d'un angle mort de la chambre en dressing. Plus spacieux qu'un placard, il permet de tout ranger en un seul endroit : vetements, accessoires, valises. Eclairage integre (reglettes LED ou spots encastres) et systeme d'organisation interieur (barres de penderie, casiers chaussures, tiroirs, etageres a sacs) sur mesure.",
              },
              {
                type: "Tete de lit avec rangements integres",
                prix: "1 500 – 5 000 € (selon larg.)",
                detail: "Composition murale derriere le lit combinant tete de lit capitonnee ou en bois et rangements flanquants (niches ouvertes, placards fermes, liseuses integrees). Tres tendance en 2025, cette solution concentre l'ensemble du mur de la chambre en un meuble architectural coherent. Realise sur mesure par un menuisier artisan.",
              },
              {
                type: "Lit coffre ou rangement sous lit",
                prix: "800 – 2 500 € (selon modele)",
                detail: "Dans les petites chambres parisiennes, le lit coffre (coffre de rangement integre au sommier) est une solution ingenieuse pour stocker draps, couvertures et affaires saisonnieres sans empieter sur la surface. Un artisan peut transformer un lit existant avec un sommier coffre sur mesure ou poser des tiroirs sous-lit en bois.",
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

      {/* Section 4 — Parquet & Sol */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Parquet et sol pour chambre a Paris : comparatif 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le sol est l&apos;element structurant de la chambre. Son choix conditionne l&apos;ambiance generale et le confort au quotidien.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Type de sol</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix pose incluse</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Durée de vie</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "Parquet massif chene naturel", prix: "150 – 250 €/m2", duree: "50+ ans" },
                  { type: "Parquet contrecolle chene", prix: "80 – 150 €/m2", duree: "25-30 ans" },
                  { type: "Parquet flottant stratifie qualite", prix: "40 – 90 €/m2", duree: "15-20 ans" },
                  { type: "Sol vinyle LVT imitation parquet", prix: "30 – 60 €/m2", duree: "15-20 ans" },
                  { type: "Moquette laine naturelle", prix: "60 – 120 €/m2", duree: "15-20 ans" },
                  { type: "Parquet chene blanchi (tendance 2025)", prix: "120 – 220 €/m2", duree: "25-35 ans" },
                  { type: "Renovation parquet existant", prix: "30 – 60 €/m2", duree: "Depend de l'epaisseur" },
                ].map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.type}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prix}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.duree}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 5 — Eclairage */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Eclairage chambre : la grande tendance 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;eclairage est l&apos;element qui transforme le plus radicalement l&apos;ambiance d&apos;une chambre pour un investissement modeste. En 2025, la tendance est a la superposition de sources lumineuses et aux variateurs d&apos;intensite pour creer une ambiance modulable selon les moments de la journee.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: "Spots encastres (eclairage general)",
                detail: "Les spots LED encastres au plafond remplacent le plafonnier central dans les renovations modernes. Ils creent un eclairage uniforme et discret. En chambre, ils doivent etre equipes de variateurs d'intensite (amener la lumiere a 10 % pour une ambiance nocturne) et orientes vers les zones de lecture, pas directement vers le lit. Prix : 80 a 150 euros par spot (fourniture + pose + cablage).",
              },
              {
                type: "Ruban LED indirect (ambiance)",
                detail: "Le ruban LED pose en corniche (caisson de plafond ou bandeau haut des murs) cree un eclairage indirect tres tendance. Il ne eblouit pas, valorise le volume de la piece et peut etre programme en differentes teintes (blanc chaud 2700K pour la detente, blanc neutre 4000K pour se maquiller). Tres economique a la pose (20 a 50 euros le metre lineaire pris en plafond).",
              },
              {
                type: "Liseuses integrees (tete de lit)",
                detail: "Les liseuses murales integrees a la tete de lit sont la solution la plus pratique pour la lecture au lit. Elles orientent la lumiere vers le livre sans eblouir le partenaire et liberent les chevets. En 2025, les liseuses pivotantes en laiton ou en noir mat sont les plus demandees. Prix : 80 a 200 euros par liseuse (fourniture + cablage + pose).",
              },
              {
                type: "Domotique eclairage (scenes et automatismes)",
                detail: "L'eclairage domotique (Philips Hue, Legrand Netatmo, KNX) permet de creer des scenes lumineuses activables d'un geste ou d'une voix : scene 'reveil' (montee progressive en 20 min), scene 'film' (ambiance tamisee), scene 'sommeil' (extinction programmee). Pour une chambre principale, l'investissement supplementaire (300 a 800 euros) est largement rentabilise par le confort quotidien.",
              },
            ].map((el) => (
              <div key={el.type} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.type}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>

          <div className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
            <div className="font-medium text-[#1C1C1C] text-sm mb-3">Ce qui influe sur le prix d&apos;une renovation chambre a Paris</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Surface de la chambre : 10 m2 vs 20 m2 — impact direct sur les quantites de materiaux",
                "Niveau de finition choisi : peinture standard vs enduit a la chaux ou papier peint haut de gamme",
                "Creation ou renovation de placards sur mesure : poste souvent le plus couteux",
                "Modification electrique : ajout de prises, variateurs, circuit eclairage indirect",
                "Etat du sol : renovation du parquet existant vs remplacement complet",
                "Accessibilite du chantier : immeuble sans ascenseur peut majorer de 5 a 10%",
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
              { href: '/blog/parquet-chene-paris', title: 'Parquet chene Paris' },
              { href: '/blog/menuiserie-sur-mesure-paris', title: 'Menuiserie sur mesure Paris' },
              { href: '/blog/peinture-appartement-paris', title: 'Peinture appartement Paris' },
              { href: '/blog/renovation-appartement-paris', title: 'Renovation appartement Paris' },
              { href: '/blog/tendances-deco-appartement-paris-2025', title: 'Tendances deco Paris 2025' },
              { href: '/blog/renovation-chambre-paris', title: 'Renovation chambre Paris' },
            ].map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-4 hover:border-[#D4AF37]/40 transition-colors group"
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
          Renovez votre chambre avec un artisan parisien
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Espace Design : renovation complete de chambre a Paris — peinture, parquet, placards sur mesure, eclairage. Devis gratuit sous 48h.
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
