import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: "Terrasse Bois Paris", item: 'https://espacedesignparis.fr/blog/terrasse-bois-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Terrasse Bois Paris : pose, essences & prix artisan 2025",
  description: "Tout savoir sur la pose d'une terrasse bois a Paris : ipe/pin traite/composite, lames, lambourdes, prix, entretien, demarches copropriete. Devis 48h.",
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/terrasse-bois-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix d'une terrasse bois a Paris en 2025 ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A Paris, la pose d'une terrasse bois revient generalement entre 80 et 200 euros par m2 selon l'essence et la qualite, fourniture et pose incluses. En ipe massif (essence tropicale haute gamme) : 150 a 220 euros/m2. En pin traite autoclave classe 4 : 80 a 130 euros/m2. En composite co-extrude haut de gamme : 100 a 180 euros/m2. Sur un balcon parisien de 8 m2, comptez entre 640 et 1 760 euros. Sur une terrasse de 20 m2, entre 1 600 et 4 400 euros hors evtuelle preparation du support ou etancheite.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelle essence de bois choisir pour une terrasse a Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'ipe est l'essence de reference pour les terrasses exterieures de qualite : densite elevee (1 100 kg/m3), resistance naturelle aux intemperies et aux insectes, duree de vie 20 a 30 ans sans traitement. Son inconvenient est son prix eleve et son origine tropicale (certifier PEFC/FSC). Le pin traite autoclave (classe 4) est l'alternative economique : traitement en profondeur avec des biocides sous pression, vert en sortie de chantier puis grisaillement naturel, duree de vie 15 a 20 ans avec entretien regulier. Le bois composite co-extrude est une troisieme voie : melanges de bois et plastique, aspect bois, entretien quasi nul, garanti 20 a 25 ans.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il un accord de la copropriete pour une terrasse bois a Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Si la terrasse est sur un balcon ou une terrasse privatif (partie privative du logement), la pose d'un revetement bois ou composite est generalement possible sans accord de la copropriete, sous reserve de ne pas modifier la structure du balcon ni d'installer un drainage qui pourrait impacter les parties communes. En revanche, si la terrasse est sur un toit-terrasse ou une toiture-terrasse (souvent partie commune meme si acces privatif), l'accord du syndic est systematiquement necessaire et des contraintes sur l'etancheite et la charge maximum sont a respecter. Toujours verifier le reglement de copropriete.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment entretenir une terrasse bois a Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour une terrasse en ipe ou en bois exotique : nettoyage annuel au nettoyeur haute pression (sans buse crayon), application d'une huile de teck ou d'un saturateur tous les 1 a 2 ans. Le bois s'argente naturellement avec les UV : certains proprietaires apprécient cet aspect argente sans traitement. Pour le pin traite : application d'une lasure ou d'un saturateur anti-UV tous les 2 a 3 ans, apres nettoyage. Pour le composite : nettoyage annuel avec un produit doux, aucun traitement specifique. A Paris, les terrasses exposees a la pollution et aux pigeons necessitent un nettoyage plus frequent (2 fois par an).",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Terrasse Bois Paris : pose, essences & prix artisan 2025",
  description: "Tout savoir sur la pose d'une terrasse bois a Paris : ipe/pin traite/composite, lames, lambourdes, prix, entretien, demarches copropriete. Devis 48h.",
  keywords: [
    'terrasse bois Paris',
    'pose terrasse bois Paris',
    'prix terrasse bois Paris',
    'terrasse ipe Paris',
    'terrasse composite Paris',
    'artisan terrasse Paris',
    'lambourdes terrasse Paris',
  ],
}

export default function ArticleTerrasseBoisParis() {
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
            Amenagement exterieur
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Pose de Terrasse Bois a Paris : guide complet artisan 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Une terrasse bois transforme un balcon ou une terrasse d&apos;appartement parisien en espace de vie veritable. Mais derriere la beaute des lames en ipe ou composite se cachent de vraies decisions techniques : essence, lambourdes, fixation, drainage, charge maximum. Guide complet 2025 : essences, technique de pose, prix, entretien et demarches copropriete.
          </p>
        </div>
      </section>

      {/* Section 1 — Essences */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Choisir son essence de bois : ipe, pin traite, composite
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Le choix de l&apos;essence conditionne le rendu esthetique, la durabilite et le niveau d&apos;entretien de votre terrasse. Voici un comparatif des trois principales options pour les terrasses parisiennes.
            </p>
            <div className="space-y-4">
              {[
                {
                  essence: "Ipe (Tabebuia spp.) — le standard haut de gamme",
                  detail: "L'ipe est le bois tropical de reference pour les terrasses haut de gamme. Sa densite extremement elevee (1 000 a 1 100 kg/m3) le rend naturellement resistant a l'eau, aux insectes et aux champignons sans traitement chimique. Duree de vie : 25 a 40 ans. Aspect : brun roux a la pose, tourne au gris argente avec les UV si non entretenu. Inconvenients : prix eleve (50 a 90 euros/m2 fourniture seule), poids important (charger le balcon), vissage pre-perce obligatoire. Exiger une certification FSC ou PEFC pour l'origine durable.",
                },
                {
                  essence: "Cumaru, teak et bois exotiques certifies",
                  detail: "Le cumaru (bois du Bresil) est une alternative a l'ipe legèrement moins cher mais aux performances similaires : classe 1 naturelle, duree de vie 20 a 35 ans. Le teak est le bois premium des terrasses marine : ultra-resistant a l'eau, tres stable, mais tres cher (80 a 120 euros/m2). Les bois exotiques certifies (bangkirai, garapa) offrent d'excellentes performances pour un cout plus raisonnable. Toujours exiger la certification FSC/PEFC.",
                },
                {
                  essence: "Pin traite autoclave classe 4",
                  detail: "Le pin sylvestre ou radiata traite en autoclave (classe 4 : en contact permanent avec l'eau et le sol) est la solution economique la plus repandue. Le traitement CuAz (cuivre-azole) penetrade en profondeur dans le bois sous haute pression. Aspect : vert a la pose, grisaille naturellement. Duree de vie : 15 a 25 ans avec entretien regulier (lasure tous les 2-3 ans). Deconseille en contact direct avec certains metaux (corrosion possible). Prix fourniture : 15 a 35 euros/m2.",
                },
                {
                  essence: "Composite co-extrude haut de gamme",
                  detail: "Le composite melange des fibres de bois et du plastique (PVC ou PE) co-extrude avec une coque de protection. Avantages : entretien quasi nul (nettoyage annuel), aspect tres stable dans le temps (pas de grisaillement, pas de gonflement), garanti 20 a 25 ans. Inconvenients : aspect moins naturel que le bois massif, prix eleve pour les versions haut de gamme (Trex, Deck Linea), dilatation thermique importante (prevoir les jeux). Le composite de premiere generation (non co-extrude) est a eviter : il absorbe l'humidite et se deteriore rapidement.",
                },
              ].map((el) => (
                <div key={el.essence} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.essence}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Technique de pose */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Technique de pose : lames, lambourdes et fixation
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La durabilite d&apos;une terrasse bois depend autant de la qualite de la pose que de l&apos;essence choisie. Les lambourdes, le drainage et la fixation des lames sont les trois points critiques.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                etape: "Lambourdes : la structure porteuse",
                detail: "Les lambourdes (poutres de soutien des lames) doivent etre posees dans le bon sens (perpendiculairement aux lames) et reglees au niveau. Sur balcon beton : lambourdes fixees sur plots reglables en plastique (jamais en bois directement sur le beton humide) avec une ventilation suffisante sous les lames (minimum 3 cm). Espacement des lambourdes : 40 a 60 cm selon l'essence. En ipe massif dense, 60 cm est suffisant.",
              },
              {
                etape: "Lames : dimensions et orientation",
                detail: "Largeur des lames : 90 a 145 mm est le standard. Les lames tres larges (145+ mm) sont esthetiquement imposantes mais plus sensibles au gauchissement. Epaisseur : 21 mm minimum pour les terrasses a fort passage, 27 mm recommande pour les lames de grandes longueurs. Orientation : poser les lames dans le sens de l'evacuation de l'eau (legere pente vers le vide). Debit sur dosse : les lames quartier ou demi-quartier sont plus stables.",
              },
              {
                etape: "Fixation : vis apparentes ou clips invisibles",
                detail: "La fixation par vis inox (tete fraisee, pre-perce obligatoire pour ipe et cumaru) est la plus solide et la plus economique. Les clips de fixation invisible (Ipe Clip, Camo, Zepter) donnent un rendu sans tete de vis apparent et facilitent le demontage eventuel, mais augmentent le cout de 20 a 30 %. Les lames composites utilisent souvent leurs propres clips specifiques. Toujours utiliser de l'inox A4 pour la fixation en exterieur : l'acier galvanise tache les bois tanniques (ipe, cumaru).",
              },
              {
                etape: "Jeux et dilatation",
                detail: "Le bois travaille avec l'humidite : un jeu de 5 a 8 mm entre les lames est necessaire pour l'evacuation de l'eau et la dilatation. En composite, la dilatation thermique est plus importante (1 a 2 mm/m en temperature : sur 4 m de lame, prevoir 8 mm de jeu en bout). Les extremites de lames en bout de terrasse doivent laisser 10 a 15 mm de jeu par rapport aux murs ou garde-corps.",
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

      {/* Section 3 — Entretien */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Entretien d&apos;une terrasse bois a Paris : conseils pratiques
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Paris est une ville polluee avec des pluies acides et une forte colonisation de pigeons. L&apos;entretien d&apos;une terrasse bois y est plus sollicite que dans une maison de campagne. Voici les routines selon l&apos;essence.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: "Ipe et bois exotiques massifs",
                freq: "Annuel",
                detail: "Nettoyage au karcher (buse rotative, jamais buse crayon qui arrache les fibres). Traitement a l'huile de teck ou au saturateur huileux tous les 1 a 2 ans au printemps. Retirer les feuilles mortes et les depots d'automne avant l'hiver pour eviter les taches et le developpement de mousses. Le noircissement des lames (depot de pollution) se retire avec un produit degraissant bois suivi d'un brossage.",
              },
              {
                type: "Pin traite autoclave",
                freq: "Bi-annuel",
                detail: "Le pin traite necessite un entretien plus regulier que les bois exotiques. Nettoyage haut pression au printemps, puis application d'une lasure exterieure tous les 2 a 3 ans (apres degraissage). Surveiller les noeuds et les fissures : les combler avec un mastic bois flexible avant la lasure. Verifier annuellement que les lambourdes ne sont pas en contact avec de l'eau stagnante.",
              },
              {
                type: "Composite co-extrude",
                freq: "Annuel leger",
                detail: "Le composite co-extrude ne necessite aucun traitement chimique. Un nettoyage annuel avec de l'eau chaude et un detergent doux (ou un produit specifique composite) suffit. Attention aux depots de pigeon qui laissent des traces si non retires rapidement. Le composite de bonne qualite ne verdit pas et ne tache pas de facon permanente avec les feuilles.",
              },
              {
                type: "Lutte anti-mousses et verdissement",
                freq: "Au besoin",
                detail: "A Paris, l'exposition a l'ombre et a l'humidite favorise le verdissement par les algues et mousses. Traitement preventif annuel avec un produit anti-mousse compatible bois (a base de dichlorophen ou d'ammoniums quaternaires). Pour les terrasses deja verdies : decolorant oxalique ou produit specifique anti-vert, puis nettoyage haut pression.",
              },
            ].map((el) => (
              <div key={el.type} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.type}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.freq}</div>
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
            Prix terrasse bois Paris 2025 et demarches copropriete
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Tarifs fourniture et pose incluses pour des terrasses posees sur balcons ou terrasses d&apos;appartements parisiens.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Essence</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Classe naturelle</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix fourni+pose</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Duree de vie</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { ess: "Ipe massif FSC", classe: "Classe 1", prix: "150 – 220 euros/m2", duree: "25 – 40 ans" },
                  { ess: "Cumaru / bangkirai", classe: "Classe 1", prix: "120 – 180 euros/m2", duree: "20 – 35 ans" },
                  { ess: "Pin traite autoclave cl.4", classe: "Traite cl.4", prix: "80 – 130 euros/m2", duree: "15 – 25 ans" },
                  { ess: "Composite co-extrude", classe: "N/A", prix: "100 – 180 euros/m2", duree: "20 – 25 ans" },
                  { ess: "Pose seule (bois client)", classe: "—", prix: "35 – 60 euros/m2", duree: "—" },
                  { ess: "Etancheite support (si necess.)", classe: "—", prix: "25 – 60 euros/m2", duree: "—" },
                ].map((row, i) => (
                  <tr key={row.ess} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium text-sm">{row.ess}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light text-sm">{row.classe}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium text-sm">{row.prix}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light text-sm">{row.duree}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Demarches copropriete et points de vigilance
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Verifier la charge maximale admissible du balcon avant de poser le bois (ipe : 1 100 kg/m3)",
                "Obtenir l'accord du syndic pour toute pose sur toit-terrasse ou terrasse commune",
                "Verifier l'etancheite du support avant de poser les lambourdes sur toit-terrasse",
                "Utiliser des plots reglables pour ne jamais poser les lambourdes directement sur le beton",
                "Prevoir un drainage efficace : jamais d'eau stagnante sous les lames",
                "Pour les bois exotiques : exiger systematiquement la certification FSC ou PEFC",
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
              { href: '/blog/renovation-terrasse-paris', title: 'Renovation terrasse Paris' },
              { href: '/blog/renovation-balcon-paris', title: 'Renovation balcon Paris' },
              { href: '/blog/renovation-balcon-terrasse-immeuble-paris', title: 'Renovation balcon immeuble Paris' },
              { href: '/blog/renovation-terrasse-bois-paris', title: 'Renovation terrasse bois Paris' },
              { href: '/blog/menuiserie-sur-mesure-paris', title: 'Menuiserie sur mesure Paris' },
              { href: '/blog/autorisation-travaux-copropriete-paris', title: 'Autorisation travaux copropriete' },
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
          Posez votre terrasse bois a Paris
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Ipe, pin traite, composite — pose sur mesure, finitions soignees. Devis gratuit sous 48h.
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
