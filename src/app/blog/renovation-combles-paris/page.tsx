import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: "Renovation Combles Paris", item: 'https://espacedesignparis.fr/blog/renovation-combles-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Renovation Combles Paris : amenagement, isolation & prix 2025",
  description: "Amenager et renover des combles a Paris : combles perdus vs amenageables, isolation laine de verre/soufflee, Velux, prix au m2. Artisan Paris, devis 48h.",
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-combles-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix de renovation des combles a Paris en 2025 ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A Paris, l'amenagement de combles amenageables (sols, cloisons, isolation, electricite) revient generalement entre 800 et 1 500 euros par m2 habitable cree, tout compris. Pour une surface de 20 m2, comptez entre 16 000 et 30 000 euros. L'isolation seule des combles perdus (soufflee ou roulee) revient a 20 a 50 euros par m2. L'installation d'un Velux (fenetre de toit) complete (cadre, vitrage, raccord etancheite) se situe entre 1 200 et 3 000 euros par unite pose incluse.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelle difference entre combles perdus et combles amenageables ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les combles perdus sont les espaces sous toiture qui ne peuvent pas etre amenages en pieces habitables, generalement en raison d'une hauteur sous-faite insuffisante (moins de 1,80 m) ou d'une charpente fermee (fermes a la normande). On y installe une isolation soufflee ou roulee pour reduire les deperditions thermiques du logement du dessous. Les combles amenageables ont une hauteur utile superieure a 1,80 m et une charpente compatible (charpente a la francaise, fermettes modernes avec espace dégageable). Ils peuvent etre transformes en chambre, bureau ou suite parentale apres travaux.",
      },
    },
    {
      '@type': 'Question',
      name: "Laine de verre roulee ou isolant souffle : quelle isolation choisir pour les combles perdus ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La laine de verre roulee (rouleaux poses a la main sur le plancher des combles perdus) est la solution la plus economique pour les combles facilement accessibles. Elle offre une resistance thermique R de 6 a 8 m2.K/W pour une epaisseur de 20 a 30 cm. L'isolant souffle (ouate de cellulose, laine de verre en vrac) est plus rapide a poser dans les combles difficiles d'acces (faible hauteur, nombreux obstacles) : la machine insuffle l'isolant en vrac uniformement. Il presente peu de deperditions aux ponts thermiques. Pour les combles parisiens avec charpente complexe, le souffle est souvent preferable.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il un permis de construire pour amenager des combles a Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Si l'amenagement des combles cree de la surface habitable supplementaire (SHON) sans modifier l'aspect exterieur du batiment (pas de lucarne, pas de Velux visible depuis la rue), une simple declaration prealable peut suffire. Mais a Paris, les combles sont souvent dans des immeubles proteges ou proches de monuments historiques : l'Architecte des Batiments de France (ABF) peut imposer des contraintes sur les Velux, les lucarnes et les materiaux de toiture. Un permis de construire est obligatoire si les travaux creent plus de 20 m2 de surface de plancher (seuil porte a 40 m2 dans certaines zones). Toujours se renseigner en mairie avant de demarrer.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Renovation Combles Paris : amenagement, isolation & prix 2025",
  description: "Amenager et renover des combles a Paris : combles perdus vs amenageables, isolation laine de verre/soufflee, Velux, prix au m2. Artisan Paris, devis 48h.",
  keywords: [
    'renovation combles Paris',
    'amenagement combles Paris',
    'isolation combles Paris',
    'combles amenageables Paris',
    'prix amenagement combles Paris',
    'Velux Paris',
    'artisan combles Paris',
  ],
}

export default function ArticleRenovationComblesParis() {
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
            Renovation
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Renovation et Amenagement des Combles a Paris : guide 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Amenager les combles d&apos;un immeuble parisien est l&apos;une des manieres les plus rentables de creer de la surface habitable supplementaire. Mais c&apos;est aussi l&apos;un des chantiers les plus complexes : hauteur sous faite, charpente, isolation, contraintes ABF, Velux. Guide complet 2025 : combles perdus vs amenageables, isolation, Velux, prix et demarches.
          </p>
        </div>
      </section>

      {/* Section 1 — Combles perdus vs amenageables */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Combles perdus ou amenageables : comment savoir ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              La premiere question a repondre avant tout projet de combles est de savoir si votre espace est amenageable. Cette determination conditionne toute la suite du projet et l&apos;enveloppe budgetaire.
            </p>
            <div className="space-y-4">
              {[
                {
                  titre: "Combles perdus : isolation seule",
                  detail: "Les combles perdus sont les espaces sous toiture inutilisables comme surface habitable. Ils se caracterisent par une hauteur sous-faite inferieure a 1,80 m ou par une charpente fermee (fermes a la normande avec tirants et contrefiches qui occupent tout l'espace). Le seul travail utile est l'isolation thermique du plancher (qui separe les combles du logement en dessous), pour reduire les deperditions thermiques et ameliorer le DPE du logement. Cout de l'isolation seule : 20 a 50 euros/m2.",
                },
                {
                  titre: "Combles amenageables : potentiel habitabe",
                  detail: "Les combles amenageables disposent d'une hauteur utile superieure a 1,80 m (ideal 2,20 m) sur au moins la moitie de la surface, et d'une charpente compatible (charpente traditionnelle a la francaise, ou fermettes avec espace dégageable apres modification). Le plancher doit etre capable de supporter les charges habitables (minimum 150 kg/m2). Si ces conditions sont reunies, l'amenagement peut creer des pieces de vie completes : chambre, bureau, suite parentale.",
                },
                {
                  titre: "Diagnostic prealable : ce qu'il faut verifier",
                  detail: "Avant tout projet, un diagnostic technique est indispensable : mesure de la hauteur sous faite aux differents points, examen de la charpente (type, etat, capacite de reprise des charges), controle du plancher (structure bois ou beton, portance), verification de l'etancheite de la toiture, presence ou absence de fenetre de toit existante. Ce diagnostic peut etre realise par un architecte ou un bureau d'etudes en amont du devis.",
                },
                {
                  titre: "Contraintes particulieres a Paris",
                  detail: "A Paris, les immeubles construits avant 1948 ont souvent des charpentes en bois de grande qualite mais de configuration complexe. L'Architecte des Batiments de France (ABF) peut imposer des contraintes sur l'aspect exterieur (pas de Velux en facade rue, materiaux de toiture specifiques). Les regles de gabarit parisien limitent parfois la hauteur des amenagements. Toujours consulter le PLU de Paris et la mairie d'arrondissement avant d'engager les travaux.",
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

      {/* Section 2 — Isolation */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Isolation des combles : laine de verre, soufflee, sarking
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;isolation des combles est le poste le plus rentable energetiquement dans un appartement parisien. En l&apos;absence d&apos;isolation, les combles representent 25 a 30 % des deperditions thermiques du logement. Voici les solutions et leurs usages.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                solution: "Laine de verre roulee en combles perdus",
                perf: "R 6 a 8 m2.K/W",
                detail: "Solution la plus economique pour les combles perdus facilement accessibles. On pose des rouleaux de laine de verre (Isover, Saint-Gobain) sur le plancher des combles en 2 couches croisees pour eliminer les ponts thermiques. Epaisseur totale : 25 a 35 cm. Prix : 20 a 35 euros/m2. Eligible aux aides (MaPrimeRenov) si R >= 7.",
              },
              {
                solution: "Isolant souffle en combles perdus",
                perf: "R 6 a 9 m2.K/W",
                detail: "Ouate de cellulose ou laine de verre en vrac insufflee mecaniquement. Ideal pour les combles difficiles d'acces ou avec de nombreux obstacles (fermettes, cheminees, gaines). Tres homogene, peu de ponts thermiques. Pose rapide (1 journee pour 60 m2). Prix : 25 a 45 euros/m2. Tres utilise pour les surcombles parisiens complexes.",
              },
              {
                solution: "Isolation sous rampant (combles amenageables)",
                perf: "R 4 a 6 m2.K/W",
                detail: "Pour les combles amenageables, l'isolation se pose sous les rampants (entre et sous les chevrons). On utilise de la laine minerale en rouleaux ou des panneaux rigides (polyurethane, PIR). L'espace habitable est alors directement sous la toiture. Une membrane frein-vapeur est indispensable cote chaud. Cout : 40 a 80 euros/m2.",
              },
              {
                solution: "Sarking (isolation par l'exterieur en toiture)",
                perf: "R 4 a 8 m2.K/W",
                detail: "Le sarking consiste a poser des panneaux isolants rigides (PIR, polyurethane) sur les chevrons, par l'exterieur, lors d'une renovation de toiture. Il conserve l'integralite de la hauteur utile interieure et supprime tous les ponts thermiques. Tres efficace mais tres couteux (60 a 120 euros/m2) car il necessite la depose et repose de la couverture. A Paris, souvent soumis a avis ABF.",
              },
            ].map((el) => (
              <div key={el.solution} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-1">{el.solution}</div>
                <div className="text-[#B8960C] text-xs font-medium mb-2">{el.perf}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Velux */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Velux et lucarnes : apporter la lumiere dans les combles
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La fenetre de toit (Velux est la marque la plus connue) est indispensable pour eclairer et ventiler les combles amenages. A Paris, son installation est soumise a des contraintes specifiques selon l&apos;orientation et la position dans l&apos;immeuble.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: "Velux standard a tabatiere",
                detail: "La fenetre de toit la plus courante : s'ouvre vers l'exterieur en pivotant sur un axe central ou en basculant. Disponible en simple vitrage, double vitrage ou triple vitrage. Les versions a rupture de pont thermique (Velux GLL, GHL) sont recommandees pour les combles chauffes. Installation complete (cadre, vitrage, raccord etancheite, tablier) : 1 200 a 2 500 euros. Pose generalement en 1 journee.",
              },
              {
                type: "Velux a projection ou sur mesure",
                detail: "Les fenetres de toit a projection (qui s'ouvrent en avancant vers l'exterieur) permettent de se lever dans les combles a faible pente sans risque de tete. Les modeles sur mesure (grandes dimensions, formes speciales) sont possibles mais augmentent significativement le cout. Certaines configurations necessitent un menuisier pour l'habillage interieur.",
              },
              {
                type: "Lucarne bois ou zinc",
                detail: "La lucarne est une fenetre verticale creee dans la pente du toit, avec un mur en facade. Elle apporte beaucoup plus de lumiere qu'un Velux et cree un espace utilisable sous la faite. Tres courante dans les immeubles haussmanniens parisiens. Sa creation necessite un permis de construire et l'avis de l'ABF si l'immeuble est classe ou en zone protegee. Cout : 8 000 a 20 000 euros selon les dimensions.",
              },
              {
                type: "Puits de lumiere et conduit solaire",
                detail: "Dans les combles sans acces direct a la toiture (combles en milieu d'immeuble), un conduit solaire (Solatube, Sunpipe) permet d'amener la lumiere naturelle via un tube reflector. Moins onéreux qu'une lucarne (1 500 a 3 000 euros) mais apport lumineux plus limite. Alternative interessante pour les degagements et les couloirs de combles.",
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

      {/* Section 4 — Prix */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix renovation combles Paris 2025 : tableau recapitulatif
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Tarifs pratiques a Paris en 2025 pour les principaux postes de travaux de combles.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Prestation</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Unite</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix Paris 2025</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Remarque</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { presta: "Isolation laine de verre roulee", unite: "m2", prix: "20 – 35 euros", note: "Combles perdus" },
                  { presta: "Isolation soufflee (ouate)", unite: "m2", prix: "25 – 45 euros", note: "Combles perdus complexes" },
                  { presta: "Isolation sous rampant", unite: "m2", prix: "40 – 80 euros", note: "Combles amenageables" },
                  { presta: "Velux standard (fourni+pose)", unite: "unite", prix: "1 200 – 2 500 euros", note: "Raccord etancheite inclus" },
                  { presta: "Lucarne bois ou zinc", unite: "unite", prix: "8 000 – 20 000 euros", note: "Permis de construire" },
                  { presta: "Amenagement combles complet", unite: "m2 habitable", prix: "800 – 1 500 euros", note: "Sol, cloisons, elec, isolation" },
                ].map((row, i) => (
                  <tr key={row.presta} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium text-sm">{row.presta}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light text-sm">{row.unite}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium text-sm">{row.prix}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light text-sm">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Checklist avant de demarrer les travaux de combles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Verifier la hauteur sous faite (minimum 1,80 m pour habitabilite)",
                "Controler l'etat de la toiture (etancheite) avant d'isoler",
                "Consulter le PLU et la mairie d'arrondissement pour les Velux",
                "Obtenir l'avis de l'ABF si immeuble classe ou en zone protegee",
                "Verifier la portance du plancher (minimum 150 kg/m2 habitable)",
                "Prevoir la ventilation (VMC ou grille) avant de fermer l'isolant",
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
              { href: '/blog/amenagement-combles-perdus-paris', title: 'Amenagement combles perdus Paris' },
              { href: '/blog/isolation-combles-subvention-paris', title: 'Isolation combles subvention Paris' },
              { href: '/blog/isolation-thermique-appartement-paris', title: 'Isolation thermique Paris' },
              { href: '/blog/renovation-appartement-ancien-paris', title: 'Renovation appartement ancien Paris' },
              { href: '/blog/faux-plafond-paris', title: 'Faux plafond Paris' },
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
          Amenagez vos combles a Paris
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Isolation, Velux, amenagement complet. Diagnostic et devis gratuit sous 48h.
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
