import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: "Verriere Atelier Paris", item: 'https://espacedesignparis.fr/blog/verriere-atelier-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Verriere Atelier Paris : pose, styles & prix artisan 2025",
  description: "Installer une verriere style atelier a Paris : verriere murale vs separation, acier/aluminium, vitrages, prix, demarches copropriete. Artisan Paris, devis 48h.",
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/verriere-atelier-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix d'une verriere atelier a Paris en 2025 ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A Paris, une verriere style atelier fixe (2 a 3 m2, acier thermolaque noir) revient a 2 500 a 5 000 euros pose incluse. Une verriere avec porte coulissante integree (3 a 5 m2) monte a 4 500 a 9 000 euros. En aluminium thermolaque, le cout est 20 a 30 % inferieur. Les verreries sur mur porteur (avec linteau metallique et etude structure) peuvent atteindre 8 000 a 15 000 euros selon la configuration.",
      },
    },
    {
      '@type': 'Question',
      name: "Verriere murale ou verriere de separation : quelle difference ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La verriere murale est posee contre un mur plein existant, souvent pour creer un effet decoratif ou apporter de la lumiere dans une piece sombre en utilisant un vitrage a la place d'un pan de mur. La verriere de separation est une cloison vitrée autonome posee entre deux espaces (salon/cuisine, entree/couloir) sans s'appuyer sur un mur existant. La verriere de separation est plus complexe a poser car elle doit etre autoportante ou fixee solidement au sol, aux murs lateraux et au plafond.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il l'accord de la copropriete pour installer une verriere a Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour une verriere interieure ne touchant pas aux elements porteurs ni aux parties communes, aucune autorisation de copropriete n'est necessaire. En revanche, si la verriere implique la percee d'un mur porteur ou la modification des reseaux collectifs, l'accord du syndic et un bureau d'etudes structure sont obligatoires. Certains reglements de copropriete imposent une declaration meme pour des travaux interieurs importants : toujours verifier avant de demarrer.",
      },
    },
    {
      '@type': 'Question',
      name: "Acier ou aluminium pour une verriere style atelier a Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'acier thermolaque noir est le materiau emblematique du style atelier parisien : profils fins (20-30 mm), robustesse, aspect industriel authentique. Il est 20 a 40 % plus cher que l'aluminium et plus lourd. L'aluminium thermolaque est plus leger, moins cher, disponible en nombreuses teintes RAL, et demande aucun entretien. Ses profils sont legerement plus larges. Pour les appartements haussmanniens ou les lofts avec une esthetique industrielle revendiquee, l'acier reste inegalable. Pour un appartement contemporain ou un budget serre, l'aluminium est un excellent choix.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Verriere Atelier Paris : pose, styles & prix artisan 2025",
  description: "Installer une verriere style atelier a Paris : verriere murale vs separation, acier/aluminium, vitrages, prix, demarches copropriete. Artisan Paris, devis 48h.",
  keywords: [
    'verriere atelier Paris',
    'verriere style atelier Paris',
    'prix verriere Paris',
    'pose verriere Paris',
    'verriere acier Paris',
    'cloison vitree Paris',
    'artisan verriere Paris',
  ],
}

export default function ArticleVerriereAtelierParis() {
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
            Decoration
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Installer une Verriere Atelier a Paris : guide complet 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            La verriere style atelier est devenue l&apos;element decoratif incontournable des renovations parisiennes contemporaines. Elle apporte lumiere, volume et caractere sans cloisonner durablement l&apos;espace. Guide complet 2025 : verriere murale contre verriere de separation, choix des materiaux acier ou aluminium, vitrages, prix, et demarches copropriete.
          </p>
        </div>
      </section>

      {/* Section 1 — Verriere murale vs separation */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Verriere murale ou verriere de separation : laquelle choisir ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Il existe deux grandes familles de verrieres dans les appartements parisiens, avec des usages et des contraintes de pose tres differents. Le choix depend de la configuration de votre logement et du resultat recherche.
            </p>
            <div className="space-y-4">
              {[
                {
                  titre: "Verriere murale : lumiere et decoration",
                  detail: "La verriere murale est posee contre un mur existant, generalement pour remplacer une partie de ce mur par du vitrage. Elle peut s'etendre du sol au plafond ou n'occuper qu'une partie du mur. Tres utilisee pour faire communiquer visuellement deux pieces en gardant une separation physique (ex : mur entre salon et chambre d'amis, mur entre bureau et couloir). Sa pose est relativement simple car elle s'appuie sur le mur existant. Cout : 1 500 a 4 000 euros selon les dimensions.",
                },
                {
                  titre: "Verriere de separation : cloison vitree autonome",
                  detail: "La verriere de separation est une cloison vitrée posee librement dans l'espace, sans s'appuyer sur un mur existant. Elle separe typiquement le sejour de la cuisine, l'entree du couloir, ou isole un espace de travail. Plus complexe a realiser (structure autoportante ou fixation sol-plafond rigoureuse), elle offre une grande flexibilite dans la distribution des espaces. Cout : 2 500 a 9 000 euros selon la taille et la configuration.",
                },
                {
                  titre: "Verriere sur mur porteur : l'ouverture structuree",
                  detail: "Quand un mur porteur separe deux pieces, il est possible de realiser une ouverture avec un linteau metallique et d'y intégrer une verriere. Cette configuration allie la solidite structurelle du mur porteur a la transparence et la luminosite d'un vitrage. Elle necessite obligatoirement un bureau d'etudes structure et peut exiger une declaration prealable ou un permis de construire selon l'ampleur des travaux.",
                },
                {
                  titre: "Verriere d'entree : le sas elegant",
                  detail: "Tres populaire dans les appartements haussmanniens a grand vestibule, la verriere d'entree separe elegamment l'entree du reste de l'appartement. Elle peut etre fixe ou integrer une porte vitrée a deux vantaux pour un effet theatral. Elle valorise immediatement l'entree du logement et peut etre un atout fort pour une vente ou une mise en location.",
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

      {/* Section 2 — Materiaux */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Acier, aluminium, bois : quel materiau pour votre verriere ?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le materiau des profiles determine l&apos;esthetique, la solidite et le cout de votre verriere. Chaque option a ses avantages et ses contraintes. Voici un comparatif detaille pour faire le bon choix.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                mat: "Acier brut",
                points: "Style industriel authentique, profils tres fins (15-25 mm), grande robustesse. Demande un traitement antirouille (huile, vernis) et un entretien periodique. Aspect unique, inimitable. Poids important.",
                surcout: "Reference",
              },
              {
                mat: "Acier thermolaque",
                points: "Le plus populaire a Paris. Poudre epoxy cuite au four : aucun entretien, resistant a la corrosion. Disponible en toutes teintes RAL. Noir mat RAL 9005 tres demande. Profils fins similaires a l'acier brut.",
                surcout: "Reference",
              },
              {
                mat: "Aluminium thermolaque",
                points: "20 a 30 % moins cher que l'acier. Leger, aucun entretien. Profiles legerement plus larges (25-40 mm). Excellente tenue dans le temps. Moins industriel visuellement mais parfait pour un interieur contemporain.",
                surcout: "– 20 a 30 %",
              },
              {
                mat: "Bois et acier mixte",
                points: "Associe la chaleur du bois (chene, hetre, pin) a la structure de l'acier. Rendu chaleureux et nordique, parfait dans les intérieurs scandinaves. Entretien plus important (bois a proteger). Prix eleve.",
                surcout: "+ 30 a 50 %",
              },
            ].map((el) => (
              <div key={el.mat} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-1">{el.mat}</div>
                <div className="text-[#B8960C] text-xs font-medium mb-2">{el.surcout}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.points}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Vitrages */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Choisir le bon vitrage pour votre verriere
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le vitrage est souvent sous-estime dans le choix d&apos;une verriere. Il determine pourtant l&apos;isolation phonique, la securite et l&apos;intimite. Voici les options disponibles et leurs usages.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: "Simple vitrage clair (4 mm)",
                perf: "Rw 27-28 dB",
                detail: "Le vitrage le plus economique. Transparent, tres fin, aspect atelier authentique. Isolation phonique minimale (Rw 27-28 dB). Adapte aux separations decoratives ou aux espaces ou l'acoustique n'est pas prioritaire. Obligatoirement feuillete si le vitrage est a moins de 90 cm du sol (norme securite NF).",
              },
              {
                type: "Double vitrage feuillete acoustique",
                perf: "Rw 40-44 dB",
                detail: "La solution recommandee pour une verriere separant la cuisine du sejour : deux feuilles de verre feuillete (couche PVB) avec lame d'air 10-16 mm. Rw 40-44 dB, comparable a une cloison legere. Surcout de 15 a 25 % par rapport au simple vitrage. Poids plus important a prendre en compte dans le dimensionnement de la structure.",
              },
              {
                type: "Verre depoli ou sable",
                detail: "Laisse passer la lumiere tout en assurant une intimite visuelle. Ideal pour separer une chambre d'un bureau, une salle de bain d'une chambre. Disponible en depoli total ou partiel (bas de vitre transparent, haut depoli). Surcout de 10 a 20 % par rapport au clair.",
                perf: "Meme que le clair",
              },
              {
                type: "Verre fume ou teinté",
                detail: "Aspect contemporain : gris, bronze, fumé. Reduit l'ensoleillement et la chaleur en ete dans les verrieres exposees sud. Cree une intimite sans obstruer completement la vue. Surcout de 15 a 25 %. Attention au rendu dans les pieces peu lumineuses.",
                perf: "Meme que le clair",
              },
            ].map((el) => (
              <div key={el.type} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.type}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.perf}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Prix et demarches */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix verriere atelier Paris 2025 et demarches copropriete
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Recapitulatif des tarifs pratiques a Paris en 2025, pose incluse, sur mesure.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Configuration</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Materiau</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix pose incluse</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Delai</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { config: "Verriere fixe 2-3 m2", mat: "Aluminium", prix: "1 800 – 3 500 euros", delai: "2 – 3 sem." },
                  { config: "Verriere fixe 2-3 m2", mat: "Acier thermolaque", prix: "2 500 – 5 000 euros", delai: "3 – 5 sem." },
                  { config: "Verriere + porte coulissante", mat: "Acier/aluminium", prix: "4 500 – 9 000 euros", delai: "4 – 6 sem." },
                  { config: "Verriere sur mur porteur", mat: "Acier + etude structure", prix: "8 000 – 15 000 euros", delai: "6 – 10 sem." },
                  { config: "Porte verriere coulissante seule", mat: "Acier/aluminium", prix: "1 800 – 4 500 euros", delai: "2 – 4 sem." },
                ].map((row, i) => (
                  <tr key={row.config + row.mat} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium text-sm">{row.config}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light text-sm">{row.mat}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium text-sm">{row.prix}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light text-sm">{row.delai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Demarches copropriete et autorisations
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Verriere interieure sans mur porteur : aucune autorisation necessaire",
                "Verriere sur mur porteur : bureau d'etudes structure obligatoire",
                "Modification de facade (verriere visible de l'exterieur) : declaration prealable mairie",
                "Travaux touchant les parties communes : accord obligatoire du syndic",
                "Verifier le reglement de copropriete avant tous travaux",
                "Vitrage feuillete de securite obligatoire sous 90 cm du sol (norme NF)",
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
              { href: '/blog/verriere-interieure-atelier-paris', title: 'Verriere interieure atelier Paris' },
              { href: '/blog/creation-verriere-interieure-paris', title: 'Creation verriere interieure Paris' },
              { href: '/blog/ouverture-cuisine-salon-paris', title: 'Ouverture cuisine salon Paris' },
              { href: '/blog/mur-porteur-paris', title: 'Mur porteur Paris' },
              { href: '/blog/cloison-separation-appartement-paris', title: 'Cloison separation Paris' },
              { href: '/blog/menuiserie-sur-mesure-paris', title: 'Menuiserie sur mesure Paris' },
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
          Installez votre verriere style atelier a Paris
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Verriere acier sur mesure, vitrages au choix, pose soignee. Devis gratuit sous 48h.
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
