import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: "Pose Parquet Flottant Paris", item: 'https://espacedesignparis.fr/blog/pose-parquet-flottant-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Pose Parquet Flottant Paris : technique, cout & artisan 2025",
  description: "Tout savoir sur la pose de parquet flottant a Paris : preparation du support, sous-couche, technique de pose, prix au m2, marques. Artisan Paris, devis 48h.",
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/pose-parquet-flottant-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix de pose d'un parquet flottant a Paris en 2025 ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A Paris, le prix de pose d'un parquet flottant se situe generalement entre 20 et 45 euros par m2, main-d'oeuvre incluse, hors fourniture. En incluant le parquet (contrecolle ou stratifie) et la sous-couche, le budget total varie de 40 a 90 euros par m2 selon la gamme choisie. Un appartement de 60 m2 represente donc entre 2 400 et 5 400 euros en moyenne. Les surcouls habituels a Paris : access difficile (escalier etroit, absence d'ascenseur), depose de l'ancien revetement, ragrage du support.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il ragrer le sol avant de poser un parquet flottant ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, dans la grande majorite des cas parisiens. Le parquet flottant exige une planete inferieure a 2 mm sous une regle de 2 m et une humidite inferieure a 65 %. Dans les appartements anciens, les dalles beton ou les planchers en bois present souvent des irregularites qui necessite un ragrage a l'autonivelant avant la pose. Omettre cette etape fragilise les clics et provoque des deformations irreversibles du parquet apres quelques mois.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelle sous-couche choisir pour un parquet flottant a Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le choix de la sous-couche depend du contexte : sur plancher chauffant, optez pour une sous-couche a faible resistance thermique (Rt < 0,15 m2.K/W) compatible plancher chauffant. Pour un immeuble collectif parisien, une sous-couche avec isolation phonique est indispensable : mousee polyurethane haute densite (3 a 5 mm), Mupan ou Woodtec. La sous-couche avec pare-vapeur integre est recommandee en rez-de-chaussee ou sur dalle beton. Evitez les sous-couches trop epaisses (> 5 mm) qui fragilisent les systemes de clic.",
      },
    },
    {
      '@type': 'Question',
      name: "Parquet flottant ou parquet colle : que choisir pour un appartement parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le parquet flottant est plus rapide a poser (pas de temps de sechage), moins cher (20 a 40 % d'economie sur la pose) et demontable. Il convient parfaitement aux appartements en location ou aux renovations avec budget maitrise. Le parquet colle (massif ou contrecolle epais) offre une meilleure stabilite, un rendu plus noble et une duree de vie superieure (ponçage possible plusieurs fois). Dans les appartements haussmanniens avec chauffage central et forte amplitude thermique, le parquet colle est souvent preferable pour eviter les joints qui s'ouvrent.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Pose Parquet Flottant Paris : technique, cout & artisan 2025",
  description: "Tout savoir sur la pose de parquet flottant a Paris : preparation du support, sous-couche, technique de pose, prix au m2, marques. Artisan Paris, devis 48h.",
  keywords: [
    'pose parquet flottant Paris',
    'parquet flottant Paris prix',
    'artisan parquet Paris',
    'pose parquet contrecolle Paris',
    'prix parquet flottant m2 Paris',
    'sous-couche parquet Paris',
    'renovation parquet Paris',
  ],
}

export default function ArticlePoseParquetFlottantParis() {
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
            Parquet
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Pose de Parquet Flottant a Paris : guide complet artisan 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le parquet flottant est aujourd&apos;hui le revetement de sol le plus pose dans les appartements parisiens en renovation : rapide, propre, compatible plancher chauffant, disponible dans des centaines de decors. Mais sa pose cache de nombreux pieges techniques. Guide complet 2025 : preparation du support, sous-couche, technique de pose pas a pas, prix au m2 a Paris et marques recommandees.
          </p>
        </div>
      </section>

      {/* Section 1 — Preparation du support */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Etape 1 : preparation du support, la cle de la durabilite
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              La qualite du support conditionne entierement la durabilite du parquet flottant. C&apos;est l&apos;etape la plus sous-estimee des proprietaires parisiens. Un support mal prepare, c&apos;est un parquet qui crepite, se deforme ou dont les clics cedent en moins de deux ans.
            </p>
            <div className="space-y-4">
              {[
                {
                  titre: "Planete : tolerance 2 mm sous 2 m",
                  detail: "Le parquet flottant ne tolere pas les irregularites superieures a 2 mm sous une regle de 2 m. Dans les immeubles parisiens anciens (avant 1950), les dalles beton et les planchers en bois sont rarement plans. Un ragrage autonivelant est alors indispensable : on applique un primaire d'adherence, puis on coule l'autonivelant a la lisseuse. Temps de sechage : 4 a 24h selon le produit. Cout du ragrage : 8 a 18 euros/m2.",
                },
                {
                  titre: "Humidite : moins de 65 % HR et moins de 2,5 % CM",
                  detail: "L'humidite residuelle du support est l'ennemi numero 1 du parquet flottant. Elle provoque le gonflement des lames et la rupture des systemes de clic. Sur dalle beton recente ou sur plancher chauffant, toujours mesurer l'humidite avant la pose (hygrometre ou test carbure de calcium). Si l'humidite depasse 2,5 %, un pare-vapeur supplementaire est imperatif.",
                },
                {
                  titre: "Depose de l'ancien revetement",
                  detail: "On peut poser du parquet flottant sur du carrelage existant (si adherent et plan) ou sur du vinyle (si colle sans bulles). En revanche, la moquette doit toujours etre depose avant la pose. Sur parquet ancien en bois, verifier l'absence de grincements et renforcer les lames decollees avant de poser le flottant par-dessus.",
                },
                {
                  titre: "Acclimatation des lames",
                  detail: "Les lames de parquet flottant doivent etre acclimatees dans la piece pendant 48 a 72 heures avant la pose (temperature cible : 18-22 degres, humidite relative : 40-60 %). Cette etape souvent negligee permet aux lames de se stabiliser et evite les deformations post-pose dues aux variations hygrometriques de l'appartement parisien.",
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

      {/* Section 2 — Sous-couche */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Etape 2 : choisir la bonne sous-couche
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La sous-couche joue trois roles simultanement : amortir les irregularites residuelles du support, isoler phoniquement (obligation en immeuble collectif parisien) et faire office de pare-vapeur si necessaire. Le choix de la sous-couche doit etre adapte a chaque situation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                type: "Sous-couche mousse polyurethane",
                contexte: "Usage standard",
                detail: "La sous-couche la plus courante : mousse PU haute densite, 3 a 5 mm d'epaisseur. Bonne absorption des micro-irregularites, isolation phonique correcte (delta Lw 18-22 dB). Prix : 2 a 5 euros/m2. Eviter les epaisseurs superieures a 5 mm qui fragilisent les systemes de clic.",
              },
              {
                type: "Sous-couche avec pare-vapeur integre",
                contexte: "Rez-de-chaussee, dalle beton",
                detail: "Indispensable en rez-de-chaussee ou sur dalle beton susceptible de remonter de l'humidite. La membrane polyethylene integree bloque les vapeurs ascendantes. Prix : 3 a 7 euros/m2. Ne jamais omettre ce type de sous-couche dans les caves amenagees parisiennes.",
              },
              {
                type: "Sous-couche plancher chauffant",
                contexte: "Plancher chauffant eau ou electrique",
                detail: "La sous-couche doit avoir une resistance thermique Rt inferieure a 0,15 m2.K/W pour ne pas brider le plancher chauffant. Les sous-couches Mupan Thermo ou Knauf Insulation FLC sont adaptees. Epaisseur fine recommandee : 2 a 3 mm maximum.",
              },
              {
                type: "Sous-couche phonique renforcee",
                contexte: "Immeuble collectif, etages",
                detail: "En immeuble collectif parisien, la reglementation impose une isolation aux bruits d'impact entre logements (DnTw >= 55 dB). Les sous-couches phoniques renforcees (Woodtec, Acoustivox, Regupol) atteignent delta Lw 22-28 dB. Prix : 5 a 12 euros/m2. Indispensable si voisins en dessous.",
              },
            ].map((el) => (
              <div key={el.type} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-1">{el.type}</div>
                <div className="text-[#B8960C] text-xs font-medium mb-2">{el.contexte}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Technique de pose */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Technique de pose : les etapes pas a pas
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La pose d&apos;un parquet flottant suit une sequence rigoureuse. Chaque etape manquee se paie plus tard par des deformations, des grincements ou des joints ouverts. Voici le deroulement type d&apos;une pose professionnelle a Paris.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                etape: "1. Trace de l'axe de pose",
                detail: "On commence toujours par determiner le sens de pose : generalement dans le sens de la longueur de la piece ou perpendiculairement a la fenetre principale pour maximiser l'effet visuel. On trace une ligne de reference parallele au mur le plus long. Dans les appartements haussmanniens avec pieces en enfilade, la pose en biais (45 degres) peut etre envisagee pour unifier visuellement les espaces.",
              },
              {
                etape: "2. Calcul des coupes et optimisation des chutes",
                detail: "Un calcul precis avant la pose evite les rangees trop etroites le long des murs (minimum 5 cm) et optimise la consommation de lames. On prevoit 10 % de chutes pour une pose droite, 15 % en pose en biais. Le raccord en porte de communication exige un habillage (barre de seuil en T ou en Z selon la difference de niveau).",
              },
              {
                etape: "3. Pose de la sous-couche et premiere rangee",
                detail: "La sous-couche est derouplee sans chevauchement, fixee au mur par du ruban adhesif. Premiere rangee posee avec des cales d'espacement de 8 a 12 mm contre tous les murs (joint de dilatation obligatoire : le parquet flottant travaille en masse et doit pouvoir se dilater librement). La premiere rangee doit etre parfaitement droite et de niveau : elle conditionne toute la suite.",
              },
              {
                etape: "4. Emboitement des lames et decalage des joints",
                detail: "Le systeme clic (Uniclic, Valinge, Megaloc selon les marques) permet d'emboiter les lames sans colle. Les joints des lames doivent etre decales d'au moins 30 cm entre deux rangees successives (pas de joints en H, facteur de fragilite mecanique). On avance rangee par rangee, en verifiant regulierement l'equerrage.",
              },
              {
                etape: "5. Raccords en barre de seuil et finitions",
                detail: "Les barres de seuil (en T pour raccord de meme niveau, en Z pour difference de niveaux) habillent les passages de porte. Les plinthes ou quarts-de-rond masquent le joint de dilatation perimetral. Dans les appartements parisiens avec moulures en pied de mur, on peut retailler le bas de la moulure plutot que de poser une plinthe supplementaire.",
              },
            ].map((el) => (
              <div key={el.etape} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.etape}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Prix et marques */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix au m2 et marques recommandees en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le marche du parquet flottant est tres large. Voici un tableau recapitulatif des prix pratiques a Paris en 2025, fourniture et pose incluses, et les marques que nous recommandons selon les usages.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Gamme</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Produit</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix fourni+pose</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Marques</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { gamme: "Entree de gamme", produit: "Stratifie AC4 8mm", prix: "30 – 45 euros/m2", marques: "Pergo, Quick-Step Impressive" },
                  { gamme: "Milieu de gamme", produit: "Stratifie AC5 10-12mm", prix: "45 – 65 euros/m2", marques: "Tarkett, Balterio, Egger" },
                  { gamme: "Haut de gamme", produit: "Contrecolle 15mm clic", prix: "65 – 95 euros/m2", marques: "Boen, Haro, Kahrs" },
                  { gamme: "LVT/SPC vinyle", produit: "Vinyle rigide clic", prix: "35 – 70 euros/m2", marques: "Gerflor, Wineo, COREtec" },
                  { gamme: "Depose ancien sol", produit: "Option depose", prix: "+ 8 – 15 euros/m2", marques: "—" },
                  { gamme: "Ragrage support", produit: "Option ragrage", prix: "+ 8 – 18 euros/m2", marques: "—" },
                ].map((row, i) => (
                  <tr key={row.gamme + row.produit} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium text-sm">{row.gamme}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light text-sm">{row.produit}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium text-sm">{row.prix}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light text-sm">{row.marques}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Criteres de choix d&apos;un parquet flottant
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Classe AC4 minimum pour les pieces a fort passage (couloir, sejour)",
                "Epaisseur minimum 10 mm pour un bon rendu acoustique",
                "Certifications PEFC ou FSC pour un bois d'origine controlee",
                "Garantie fabricant minimum 15 ans pour les contrecolles haut de gamme",
                "Compatibilite plancher chauffant obligatoirement mentionnee sur l'emballage",
                "Bevel (chanfrein) 4V pour un aspect plus proche du parquet massif",
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
              { href: '/blog/parquet-flottant-vs-colle-paris', title: 'Parquet flottant vs colle Paris' },
              { href: '/blog/pose-parquet-paris', title: 'Pose parquet Paris' },
              { href: '/blog/renovation-parquet-paris', title: 'Renovation parquet Paris' },
              { href: '/blog/parquet-chene-paris', title: 'Parquet chene Paris' },
              { href: '/blog/sol-stratifie-paris', title: 'Sol stratifie Paris' },
              { href: '/blog/revetement-sol-appartement-paris', title: 'Revetement sol appartement Paris' },
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
          Pose de parquet flottant a Paris
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Preparation du support, sous-couche adaptee, pose soignee. Devis gratuit sous 48h.
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
