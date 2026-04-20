import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Store Interieur Paris', item: 'https://espacedesignparis.fr/blog/store-interieur-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Store Interieur Paris : pose, types & prix artisan 2025",
  description: "Faire poser des stores interieurs a Paris : enrouleur, venitien, bateau, occultant. Prix artisan pose sur mesure 2025. Devis gratuit Espace Design.",
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/store-interieur-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix de pose d'un store interieur a Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix de pose d'un store interieur a Paris varie selon le type de store : comptez 50 a 100 euros par store pour la main d'oeuvre de pose simple (store enrouleur standard ou venitien). Pour un store sur mesure avec motorisation, la pose est incluse dans le devis global qui va de 200 a 600 euros par fenetre selon la taille et le type de motorisation (radio, WiFi, domotique). La fourniture du store est generalement facturee separement. Un artisan parisien depose et repose le store en 30 a 45 minutes par fenetre.",
      },
    },
    {
      '@type': 'Question',
      name: "Store enrouleur ou venitien : lequel choisir pour un appartement parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le choix depend de vos besoins et de votre style : le store enrouleur est plus epure et plus facile a entretenir (toile nettoyable), ideal pour les interieurs contemporains. Il peut etre occultant (chambre), tamisant (salon) ou transparent. Le store venitien (lames aluminium) offre une modulation tres fine de la lumiere et de l'intimite grace aux lames orientables. Il est particulierement apprecie dans les bureaux et les pieces traversantes. Le store venitien en bois ou PVC s'adapte bien aux interieurs haussmanniens. Le store bateau (tissu plisse) est plus decoratif mais moins fonctionnel pour l'occultation.",
      },
    },
    {
      '@type': 'Question',
      name: "Peut-on poser des stores sans percage dans un appartement en location ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, il existe des solutions de fixation sans percage specialement adaptees aux locataires ou aux coproprietes qui interdisent les trous dans les murs. Les systemes a pression (tension entre les embrasures) conviennent aux stores enrouleurs de petite largeur (jusqu'a 100 cm). Les stores a clipser sur le chassis de fenetre (systeme scratch ou clip metallique) fonctionnent pour des fenetres en PVC ou aluminium. Ces solutions sont moins solides que la fixation vissee et ne conviennent pas aux grandes fenetres ou aux stores motorises.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelle difference entre store tamisant et store occultant ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Un store tamisant filtre la lumiere sans l'obstruer completement : il reduit l'eblouissement et protege l'intimite le jour, mais laisse passer la lumiere naturelle. C'est la solution recommandee pour les salons, les cuisines et les bureaux. Un store occultant bloque totalement la lumiere (opacite 100%) grace a une toile enduite ou a une face aluminisee. C'est le choix ideal pour les chambres a coucher ou les pieces de jour ou la sieste est pratiquee. Certains stores combinent les deux fonctions (double store jour/nuit) avec une toile tamisant et une voile occultante superposees.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Store Interieur Paris : pose, types & prix artisan 2025 | Espace Design",
  description: "Faire poser des stores interieurs a Paris : enrouleur, venitien, bateau, occultant. Prix artisan pose sur mesure 2025. Devis gratuit Espace Design.",
  keywords: ["store interieur Paris", "pose store Paris", "store enrouleur Paris", "store venitien Paris", "prix store Paris 2025"],
}

export default function ArticleStoreInterieurParis() {
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
            Decoration & menuiserie
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Faire Poser des Stores Interieurs a Paris : guide complet artisan 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Stores enrouleurs, venitiens, bateaux, occultants ou motorises — la pose de stores interieurs transforme le confort et l&apos;esthetique d&apos;un appartement parisien. Guide complet sur les types, la pose sur mesure et les prix d&apos;un artisan a Paris en 2025.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-[#1C1C1C] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { val: '50 €', label: 'Prix mini pose par store' },
              { val: '600 €', label: 'Store motorise sur mesure' },
              { val: '1h', label: 'Duree de pose par fenetre' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-xl sm:text-2xl font-semibold text-[#D4AF37] mb-1">{s.val}</div>
                <div className="text-gray-500 text-[10px] uppercase tracking-wider font-light">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1 */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C]">
            Pourquoi faire poser ses stores par un artisan a Paris ?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            Les appartements parisiens presentent souvent des configurations de fenetres atypiques : fenetres haussmanniennes a deux battants, fenetres de toits (Velux), verriere, bow-window ou fenetres d&apos;angle. Ces configurations requierent une prise de mesures precise et une adaptation sur mesure que seul un professionnel peut garantir.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            Une pose de store ratee se voit immediatement : store mal aligne, motorisation bruyante, toile qui gondole, fixation inadequate qui abime le bati. Un artisan experimente realise la prise de cotes, commande le store adapte, effectue la pose et regle le mecanisme.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            La tendance 2025 va vers la motorisation avec commande par smartphone ou integration domotique (Home Assistant, Google Home, Apple HomeKit). Ces installations necessitent un raccordement electrique et une configuration numerique que beaucoup de particuliers ne peuvent pas realiser seuls.
          </p>
        </div>
      </section>

      {/* Section 2 — Types de stores */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Les types de stores interieurs pour appartement parisien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Chaque type de store repond a des besoins specifiques en matiere de lumiere, d&apos;intimite et d&apos;esthetique.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: "Store enrouleur",
                usage: "Universel — salon, chambre, cuisine",
                prix: "80 – 300 €/store (fourniture + pose)",
                detail: "Le store le plus repandu a Paris. La toile s'enroule sur un tube motorise ou manuel. Declinaison : tamisant (filtre la lumiere), occultant (obscurcissant total), transparent (vue exterieure preservee). Largeur max en standard : 200 cm. Au-dela, commande sur mesure. La toile est facilement remplacable en cas d'usure ou de changement de decoration.",
              },
              {
                type: "Store venitien",
                usage: "Bureau, piece traversante, style industriel",
                prix: "100 – 400 €/store (fourniture + pose)",
                detail: "Compose de lames horizontales en aluminium (25 ou 50 mm), en bois ou en PVC. Les lames s'orientent pour moduler la lumiere et l'intimite independamment. S'entretient facilement (lames essuyables). En aluminium, il supporte l'humidite (cuisine, salle de bain). En bois ou bambou, il apporte chaleur et esthetique dans les interieurs haussmanniens.",
              },
              {
                type: "Store bateau (store plisse)",
                usage: "Decoratif — salon, chambre, style classique",
                prix: "150 – 600 €/store (fourniture + pose)",
                detail: "Tissu epais qui remonte en formant des plis reguliers (en accordeon). Tres decoratif mais moins fonctionnel pour l'occultation pure. Existe en version tamisant ou semi-occultant. S'adapte bien aux fenetres oblongues des immeubles haussmanniens. Necessite un bati de fenetre solide pour la fixation du rail superieur.",
              },
              {
                type: "Store cellulaire (nid d'abeilles)",
                usage: "Isolation thermique, fenetres velux",
                prix: "200 – 800 €/store (fourniture + pose)",
                detail: "Tissu en nids d'abeilles qui cree une couche d'air isolante. Excellent pour les fenetres de toit (Velux) et les pieces difficiles a chauffer. Reduit les deperditions de chaleur en hiver et les apports solaires en ete. Existe en version occultante pour les chambres sous toiture. La pose sur velux necessite un systeme de fixation specifique sans percage.",
              },
              {
                type: "Store motorise (avec domotique)",
                usage: "Toutes pieces, confort et accessibilite",
                prix: "300 – 800 €/store (fourniture + pose + raccordement)",
                detail: "Motorisation radio (sans fil) ou filaire (avec raccordement electrique 220V). Compatible domotique (Somfy, Nice, VELUX) pour commande via smartphone, voix (Alexa, Google) ou scenario automatique (lever du soleil, temperature). Ideal pour les fenetres en hauteur ou les personnes a mobilite reduite. La motorisation radio ne necessite pas de travaux electriques supplementaires.",
              },
            ].map((el) => (
              <div key={el.type} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-1">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.type}</div>
                  <div className="text-[#B8960C] text-sm font-medium flex-shrink-0">{el.prix}</div>
                </div>
                <div className="text-gray-500 text-[10px] uppercase tracking-wider font-light mb-2">{el.usage}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Pose sur mesure */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Pose store sur mesure a Paris : les etapes
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Un store sur mesure est indispensable pour les fenetres atypiques des immeubles parisiens. Voici le processus de bout en bout.
          </p>
          <div className="space-y-4 mb-8">
            {[
              {
                etape: "1 — Prise de cotes",
                detail: "L'artisan mesure la fenetre en feuillure (dans l'encadrement) ou en tableau (sur le mur autour de la fenetre) selon le mode de pose choisi. Pose en feuillure : le store se glisse dans l'encadrement, plus discret. Pose en tableau : le store couvre le mur autour de la fenetre, plus efficace pour l'occultation. Les mesures sont prises au millimetre pres.",
              },
              {
                etape: "2 — Commande du store sur mesure",
                detail: "Le store est commande en usine selon les dimensions exactes. Delai de fabrication : 1 a 3 semaines selon les fournisseurs. Espace Design travaille avec des fournisseurs parisiens et europeens qui garantissent la qualite de la toile (certifiees Oeko-Tex pour les chambres d'enfants), de la mecanique et de la motorisation.",
              },
              {
                etape: "3 — Pose et reglage",
                detail: "La pose proprement dite prend 30 a 60 minutes par store. L'artisan verifie l'horizontalite du rail, visse les supports dans le bati (vis et chevilles adaptees selon le materiau : bois, PVC, alu, beton), installe le mecanisme et regle la tension de la toile. Pour un store motorise, le reglage des fins de course est effectue, puis le store est associe a la telecommande ou a l'application smartphone.",
              },
              {
                etape: "4 — Nettoyage et conseils d'entretien",
                detail: "Apres pose, l'artisan nettoie le chantier et explique les gestes d'entretien : comment nettoyer la toile (chiffon humide, pas de produit chimique), comment lubrifier le mecanisme (spray PTFE), et comment changer la pile de la telecommande sans fil. Un store bien entretenu dure 10 a 15 ans.",
              },
            ].map((el) => (
              <div key={el.etape} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.etape}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Tableau prix */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix stores interieurs Paris 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Prix tout compris (fourniture + pose artisan) pour des stores sur mesure a Paris. Hors motorisation electrique filaire si travaux electriques necessaires.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Type de store</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix unitaire</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Remise quantite</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "Enrouleur tamisant standard", prix: "80 – 180 €", remise: "-10% des 5 stores" },
                  { type: "Enrouleur occultant", prix: "100 – 250 €", remise: "-10% des 5 stores" },
                  { type: "Venitien aluminium 25 mm", prix: "100 – 300 €", remise: "-10% des 5 stores" },
                  { type: "Venitien bois/bambou", prix: "150 – 400 €", remise: "-10% des 5 stores" },
                  { type: "Store bateau/plisse", prix: "150 – 500 €", remise: "Selon metrage" },
                  { type: "Store cellulaire nid d'abeilles", prix: "200 – 700 €", remise: "Sur devis" },
                  { type: "Store motorise radio (sans fil)", prix: "300 – 600 €", remise: "-15% des 3 stores" },
                  { type: "Store motorise filaire + domotique", prix: "400 – 800 €", remise: "-15% des 3 stores" },
                ].map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.type}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prix}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.remise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
            <div className="font-medium text-[#1C1C1C] text-sm mb-3">Ce qui fait varier le prix a Paris</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Dimensions de la fenetre : grande largeur (> 180 cm) = surcoût fabrication",
                "Qualite de la toile : standard vs premium (label Oeko-Tex, feux roulants, anti-bacterien)",
                "Type de motorisation : radio (pile, sans travaux) vs filaire (raccordement electrique requis)",
                "Accessibilite : fenetre en hauteur ou mezzanine necessite un echafaudage ou escabeau special",
                "Nombre de stores : economies d'echelle sur commande groupee pour tout un appartement",
                "Urgence : pose rapide (< 48h) peut entrainer une majoration de 15 a 20%",
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
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-6 text-center">Questions frequentes</p>
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
              { href: '/blog/menuiserie-sur-mesure-paris', title: 'Menuiserie sur mesure Paris' },
              { href: '/blog/domotique-appartement-paris', title: 'Domotique appartement Paris' },
              { href: '/blog/renovation-fenetre-paris', title: 'Renovation fenetre Paris' },
              { href: '/blog/decoration-interieure-paris', title: 'Decoration interieure Paris' },
              { href: '/blog/isolation-phonique-paris', title: 'Isolation phonique Paris' },
              { href: '/blog/renovation-appartement-paris', title: 'Renovation appartement Paris' },
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
          Faire poser vos stores par un artisan parisien
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Espace Design : pose de stores sur mesure dans tout Paris, motorises ou manuels, devis gratuit 48h.
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
