import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Carreaux de Ciment Paris', item: 'https://espacedesignparis.fr/blog/carreaux-ciment-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Carreaux de Ciment Paris : pose, entretien & prix artisan 2025",
  description: "Poser des carreaux de ciment a Paris : pose, jointoiement, traitement hydrofuge, entretien, prix artisan au m2 2025. Devis gratuit Espace Design.",
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/carreaux-ciment-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix de pose de carreaux de ciment a Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix de pose des carreaux de ciment a Paris varie de 80 a 150 euros par m2 pour la main d'oeuvre seule, hors fourniture des carreaux. La fourniture de carreaux de ciment de qualite se situe entre 50 et 150 euros par m2 (carreaux standard 20x20 cm, motifs courants). Pour des carreaux sur mesure ou des motifs complexes, comptez 150 a 400 euros par m2 de fourniture. Budget total (fourniture + pose + traitement) : 150 a 400 euros par m2 selon la qualite des carreaux et la complexite du motif. Un sol d'entree de 6 m2 revient ainsi a 900 a 2 400 euros tout compris.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment entretenir des carreaux de ciment a Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'entretien des carreaux de ciment requiert des produits adaptes : nettoyer avec un savon au pH neutre dilue dans de l'eau tiede, jamais avec du vinaigre, du citron ou des produits acides qui deteriorent la surface. Recharger le traitement hydrofuge tous les 2 a 3 ans (application d'un impregnateur specialise en 2 couches). En cas de tache, intervenir immediatement avec un chiffon doux. Pour les taches rebelles, un professionnel peut realiser un ponçage leger et une reapplication du traitement. Un carreau de ciment bien entretenu garde son aspect pendant 30 a 50 ans.",
      },
    },
    {
      '@type': 'Question',
      name: "Les carreaux de ciment conviennent-ils a la salle de bain a Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, les carreaux de ciment conviennent a la salle de bain mais avec des precautions specifiques. En zone humide, le traitement hydrofuge est absolument indispensable (2 a 3 couches d'impregnateur specialise) et doit etre renouvele regulierement. Le jointoiement doit etre realise avec un coulis epoxy resistant a l'humidite. Eviter les modeles a motifs tres poreux en douche directe. Les carreaux de ciment sont particulierement apprecies pour les sols de salle de bain et les entrees (motifs geometriques ou floraux) mais sont moins recommandes pour les murs de douche ou l'entretien serait trop contraignant.",
      },
    },
    {
      '@type': 'Question',
      name: "Peut-on poser des carreaux de ciment sur du carrelage existant ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, la pose de carreaux de ciment sur du carrelage existant est possible a condition que l'ancien carrelage soit parfaitement colle (aucun son creux), plan (tolerance 3 mm sous la regle de 2 m) et que la hauteur supplementaire n'est pas incompatible avec les huisseries et les plinthes. Les joints du carrelage existant doivent etre rebouches avec un enduit de ragrage fin pour eviter qu'ils n'apparaissent a travers les nouveaux carreaux de ciment. La colle utilisee doit etre adaptee aux carreaux de ciment (colle bi-composant ou colle specifique carreau de ciment). Epaisseur totale ajoutee : environ 10 a 15 mm.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Carreaux de Ciment Paris : pose, entretien & prix artisan 2025 | Espace Design",
  description: "Poser des carreaux de ciment a Paris : pose, jointoiement, traitement hydrofuge, entretien, prix artisan au m2 2025. Devis gratuit Espace Design.",
  keywords: ["carreaux de ciment Paris", "pose carreaux de ciment Paris", "prix carreaux de ciment Paris", "artisan carrelage Paris", "carreaux ciment sol entree Paris 2025"],
}

export default function ArticleCarreauxCimentParis() {
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
            Sol & revetements
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Poser des Carreaux de Ciment a Paris : guide complet artisan 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Les carreaux de ciment connaissent un retour en grace spectaculaire dans les appartements parisiens. Entrees, salles de bain, cuisines, couloirs — leurs motifs geometriques et leurs couleurs vibrantes apportent une personnalite unique a chaque piece. Guide complet sur la pose, le traitement, l&apos;entretien et les prix 2025.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-[#1C1C1C] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { val: '80 €/m²', label: 'Prix mini pose seule' },
              { val: '400 €/m²', label: 'Prix haut de gamme tout compris' },
              { val: '50 ans', label: 'Duree de vie si bien entretenu' },
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
            Les carreaux de ciment a Paris : un materiau d&apos;epoque qui revient en force
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            Les carreaux de ciment sont un materiau authentiquement parisien : les plus beaux immeubles haussmanniens et art-deco en conservent encore dans leurs halls d&apos;entree, leurs escaliers et leurs salles de bain. Fabriques a la main depuis la fin du XIXe siecle, ils sont composes d&apos;une couche decorative en ciment teinté (pigments mineraux) et d&apos;une couche de fond en ciment hydraulique.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            La tendance deco 2024-2025 les place parmi les revetements les plus demandes dans les projets de renovation a Paris, en particulier pour les entrees d&apos;appartement, les salles de bain retro-chic et les cuisines avec credence. Leur caractere artisanal, leurs motifs uniques et leur duree de vie exceptionnelle en font un choix premium.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            Cependant, les carreaux de ciment sont un materiau exigeant : ils necessitent une pose rigoureuse, un traitement hydrofuge adapte et un entretien regulier. Une mauvaise pose ou l&apos;absence de traitement peut conduire a des taches permanentes des les premieres semaines.
          </p>
        </div>
      </section>

      {/* Section 2 — Avantages */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Avantages et inconvenients des carreaux de ciment a Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Avant de se lancer, il est important de bien evaluer ce que les carreaux de ciment apportent — et ce qu&apos;ils demandent.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: "Avantages",
                items: [
                  "Esthetique unique et intemporelle : aucun revetement industriel ne replique leur rendu artisanal",
                  "Duree de vie exceptionnelle : 30 a 50 ans voire plus si bien entretenu (des carreaux poses en 1900 sont encore en place)",
                  "Materiaux naturels (ciment, pigments mineraux, sable) sans plastique ni resine",
                  "Forte valeur ajoutee a la revente : un appartement avec carreaux de ciment originaux ou neufs se vend plus cher",
                  "Chaque lot est unique : les micro-variations de teinte et de motif creent un sol qui ne ressemble a aucun autre",
                ],
              },
              {
                titre: "Inconvenients et contraintes",
                items: [
                  "Materiau poreux : sans traitement hydrofuge, les taches sont absorbees en quelques minutes",
                  "Fragile aux acides : vinaigre, citron, certains produits menagers attaquent definitivement la surface",
                  "Prix eleve : 150 a 400 euros/m2 tout compris, bien au-dessus du carrelage standard",
                  "Entretien regulier : recharge du traitement hydrofuge tous les 2 a 3 ans",
                  "Pose technique : necessite un artisan experimente — une pose ratee est difficile a rattraper sans tout deccoller",
                ],
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-3">{el.titre}</div>
                <div className="space-y-2">
                  {el.items.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                      <CheckCircle size={13} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Pose */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Pose de carreaux de ciment a Paris : les etapes cles
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La pose de carreaux de ciment est plus delicate que celle d&apos;un carrelage standard. Chaque etape doit etre respectee pour garantir un resultat durable.
          </p>
          <div className="space-y-4 mb-8">
            {[
              {
                etape: "1 — Preparation du support",
                detail: "Le support doit etre plan (tolerance 3 mm sous la regle de 2 m), sec, propre et solide. Un ragrage autonivelant est applique si necessaire. Le support ne doit pas presenter de risques de retrait ou de flexion (plancher bois : renforcement ou chape de compensation). En renovation, si l'ancien carrelage est en bon etat, il peut servir de support apres bouchage des joints.",
              },
              {
                etape: "2 — Impregnation prealable des carreaux",
                detail: "Avant pose, chaque carreau de ciment est enduit d'un impregnateur specialise (impregnateur a base de solvant ou a base d'eau selon les recommandations du fabricant). Cette protection prealable est indispensable pour empecher la colle de migrer dans le carreau et d'y laisser des halos permanents. C'est une etape que beaucoup d'artisans non specialises negligent — avec des consequences desastreuses.",
              },
              {
                etape: "3 — Collage avec colle adaptee",
                detail: "La colle doit etre speciale carreaux de ciment (bi-composant ou colle blanche souple C2TE minimum). La colle grise classique est a proscrire : elle peut tacher la face decorative si elle remonte dans les pores du carreau. La colle est peigne au dos du carreau (cote) et le carreau est pose a joints reguliers (espaceur 2 mm minimum). Les carreaux de ciment ne tolerent pas les joints trop fins.",
              },
              {
                etape: "4 — Jointoiement",
                detail: "Le jointoiement est effectue 24 a 48h apres la pose, une fois la colle seche. Le coulis doit etre de la meme nuance que le motif dominant (ou neutre gris clair). En zone humide, un coulis epoxy est recommande. Le jointtoiement est effectue a la racle en caoutchouc, puis le surplus est efface immediatement au chiffon humide (ne pas laisser secher sur les carreaux). Un voile de ciment persistant peut etre elimine avec un produit specialise.",
              },
              {
                etape: "5 — Traitement hydrofuge (obligatoire)",
                detail: "C'est l'etape la plus critique. Apres sechage complet du coulis (48 a 72h), l'impregnateur hydrofuge est applique en 2 a 3 couches au rouleau mousse ou au chiffon. Chaque couche seche 4 a 6h avant la suivante. Le traitement penetre dans les pores du ciment et cree une barriere invisible contre les liquides. Sans ce traitement, les premiers renversements laisseront des taches permanentes.",
              },
              {
                etape: "6 — Finition cire ou huile",
                detail: "Optionnel mais recommande : une couche de finition (cire naturelle ou huile dure) apres l'impregnateur renforce l'impermeabilite et apporte un leger aspect satine tres typique des carreaux de ciment anciens. La cire s'applique en une couche fine et se polit a la machine ou a la main. Elle devra etre reappliquee tous les 2 a 3 ans.",
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

      {/* Section 4 — Prix */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix carreaux de ciment Paris 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Prix tout compris (fourniture carreaux + colle + coulis + impregnateur + pose + traitement) par un artisan specialise a Paris.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Type / Application</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Fourniture carreaux</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Total pose comprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "Sol entree / couloir (motifs classiques)", fourniture: "50 – 120 €/m2", total: "150 – 250 €/m2" },
                  { type: "Sol salon (grands carreaux 30x30)", fourniture: "80 – 150 €/m2", total: "180 – 300 €/m2" },
                  { type: "Sol salle de bain (+ traitement epoxy)", fourniture: "80 – 150 €/m2", total: "200 – 350 €/m2" },
                  { type: "Credence cuisine (pose mural)", fourniture: "80 – 200 €/m2", total: "200 – 400 €/m2" },
                  { type: "Carreaux sur mesure (motifs personnalises)", fourniture: "150 – 400 €/m2", total: "280 – 600 €/m2" },
                  { type: "Ragrage prealable (si necessaire)", fourniture: "—", total: "15 – 30 €/m2 en plus" },
                  { type: "Recharge traitement hydrofuge (annuel)", fourniture: "20 – 50 €/m2 (produit)", total: "50 – 120 €/m2" },
                ].map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.type}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.fourniture}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
            <div className="font-medium text-[#1C1C1C] text-sm mb-3">Comment economiser sur les carreaux de ciment a Paris</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Privilegier un motif repandu (etoile mauresque, damier, fleur de lune) : stock disponible, pas de surcoût fabrication",
                "Acheter avec 10% de surplus (chutes, casse) mais eviter de sur-commander : les carreaux de ciment ne se retournent pas",
                "Combiner avec du carrelage grand format : carreaux de ciment uniquement en zones de decoration (entree, SDB)",
                "Comparer plusieurs fabricants : espagnols, marocains, francais — qualite variable, ecarts de prix de 1 a 3",
                "Choisir un artisan specialise : un professionnel experimente va plus vite et genere moins de casse",
                "Planifier a l'avance : commande sur mesure = 3 a 6 semaines de delai, evite les frais de livraison express",
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

      {/* Section 5 — Entretien */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Entretien carreaux de ciment : guide pratique
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;entretien des carreaux de ciment n&apos;est pas complique, mais il est specifique. Quelques regles simples suffisent a les garder beaux pendant des decennies.
          </p>
          <div className="space-y-4">
            {[
              {
                type: "Nettoyage quotidien",
                detail: "Balayer ou passer l'aspirateur pour eliminer le sable et les gravier qui pourraient rayer la surface. Nettoyer avec une serpillere legerement humide et un savon pH neutre dilue. Ne jamais utiliser de produits acides (vinaigre, citron, bicarbonate effervescent), de javel, de nettoyants a base d'alcool ou de solvants. Ces produits deteriorent irreversiblement le traitement de surface et peuvent attaquer le ciment lui-meme.",
              },
              {
                type: "Recharge du traitement hydrofuge",
                detail: "Tous les 2 a 3 ans (plus souvent si zone de fort passage), reappliquer l'impregnateur hydrofuge. Nettoyer le sol a fond, le laisser secher completement (48h minimum), puis appliquer 2 couches d'impregnateur a 6h d'intervalle. Certains impregnateurs permettent une application directement sur le sol propre sans decirage prealable. Coût du traitement en DIY : 20 a 50 euros par m2 de produit.",
              },
              {
                type: "Traitement des taches",
                detail: "Si une tache est encore fraiche, essuyer immediatement sans frotter avec un chiffon absorbant. Pour une tache ancienne, selon la nature : tache grasse (detergent neutre concentre, laisser agir 15 min), tache de vin ou cafe (cristaux de soude dilues, avec extreme prudence sur les carreaux clairs), tache de rouille (produit specialise sans acide). En cas de doute, faire appel a un professionnel plutot que de risquer d'aggraver la tache.",
              },
              {
                type: "Renovation d'un sol ancien en carreaux de ciment",
                detail: "Un sol en carreaux de ciment ternis ou taches peut souvent etre rénove sans depose : un artisan realise un ponçage leger (grain 120 a 220) qui elimine la couche de surface degradee, puis reapplique le traitement complet (impregnateur + cire). Le resultat est spectaculaire. Certains carreaux feles ou casses peuvent etre remplaces individuellement si des pieces de remplacement sont disponibles. Coût renovation : 30 a 80 euros/m2.",
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
              { href: '/blog/carrelage-salle-de-bain-paris', title: 'Carrelage salle de bain Paris' },
              { href: '/blog/carrelage-zellige-paris', title: 'Zellige Paris' },
              { href: '/blog/beton-cire-paris', title: 'Beton cire Paris' },
              { href: '/blog/revetement-sol-appartement-paris', title: 'Revetement sol appartement Paris' },
              { href: '/blog/renovation-salle-de-bain-paris', title: 'Renovation salle de bain Paris' },
              { href: '/blog/renovation-entree-appartement-paris', title: 'Renovation entree appartement Paris' },
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
          Faire poser vos carreaux de ciment par un artisan parisien specialise
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Espace Design : pose carreaux de ciment dans tout Paris, traitement hydrofuge inclus, devis gratuit 48h.
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
