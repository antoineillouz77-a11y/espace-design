import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Prix Rénovation Salle de Bain Paris', item: 'https://espacedesignparis.fr/blog/prix-renovation-salle-de-bain-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Prix Rénovation Salle de Bain Paris : tarifs détaillés 2025 | Espace Design',
  description: "Prix rénovation salle de bain à Paris : petite surface 3m², carrelage mural, meuble vasque, douche italienne. Tarifs artisan 2025.",
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/prix-renovation-salle-de-bain-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix d'une rénovation de salle de bain à Paris en 2025 ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "À Paris, le prix d'une rénovation de salle de bain varie selon la surface et le niveau de prestations. Pour une petite salle de bain de 3 m², comptez 3 000 à 6 000 € pour un basique, 6 000 à 10 000 € pour un niveau intermédiaire avec douche à l'italienne. Pour une salle de bain de 6 à 8 m², le budget passe à 8 000 – 15 000 € en intermédiaire et 15 000 – 30 000 € en premium avec marbre, robinetterie haut de gamme et baignoire îlot. Ces prix incluent main d'oeuvre et matériaux.",
      },
    },
    {
      '@type': 'Question',
      name: "Combien coûte une douche à l'italienne à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La création d'une douche à l'italienne à Paris coûte entre 2 000 et 8 000 € selon la taille et les matériaux. Douche à l'italienne basique (receveur extra-plat 80×80, paroi verre simple, carrelage standard) : 2 000 – 3 500 €. Douche italienne intermédiaire (receveur 90×120 ou bac à douche encastré, paroi verre 10 mm, carrelage qualité) : 3 500 – 5 500 €. Douche italienne premium (sol en marbre, paroi sans bord apparent, robinetterie Hansgrohe ou Dornbracht, niche éclairée) : 5 500 – 8 000 €. Ces prix incluent la pose et le raccordement plomberie.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il vider complètement la salle de bain pour la rénover ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour une rénovation complète (nouveau carrelage, nouvelle plomberie, nouvelle électricité), oui : tout doit être déposé — anciens carrelages, sanitaires, meubles. Cette mise à nu permet de vérifier l'état de l'étanchéité, de la plomberie et des gaines électriques. Pour un simple rafraîchissement (peinture, remplacement du meuble vasque, nouvelle robinetterie), il est possible d'intervenir sans dépose complète. Espace Design fait un diagnostic avant travaux pour vous indiquer ce qui doit obligatoirement être repris.",
      },
    },
    {
      '@type': 'Question',
      name: "Combien de temps dure la rénovation d'une salle de bain à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Une rénovation complète d'une salle de bain de 4 à 6 m² à Paris prend généralement 10 à 20 jours ouvrés selon la complexité (démolition, plomberie, électricité, carrelage, pose des équipements, peinture). Le carrelage à lui seul nécessite 48 à 72h de séchage entre la pose et le rejointoiement. La salle de bain est hors service pendant toute la durée des travaux : prévoir un accès à une autre salle d'eau ou s'organiser en conséquence.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Prix Rénovation Salle de Bain Paris : tarifs détaillés 2025 | Espace Design',
  description: "Prix rénovation salle de bain à Paris : petite surface 3m², carrelage mural, meuble vasque, douche italienne. Tarifs artisan 2025.",
}

export default function ArticlePrixRenovationSalleDeBain() {
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
            Salle de bain
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Prix Rénovation Salle de Bain Paris : tarifs détaillés 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Combien coûte vraiment la rénovation d&apos;une salle de bain à Paris ? Des petites surfaces de 3 m² aux grandes salles de bain prestige, des simples rafraîchissements aux rénovations complètes avec douche à l&apos;italienne et marbre : guide des tarifs 2025 par poste, par niveau de finition, et par surface.
          </p>
        </div>
      </section>

      {/* Section 1 — Tableau des prix par niveau */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix rénovation salle de bain Paris : tableau par niveau de finition
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent main d&apos;œuvre et matériaux inclus, pour une rénovation complète à Paris (dépose des anciens équipements, plomberie, électricité, carrelage, pose des nouveaux équipements). Ils n&apos;incluent pas les éventuels travaux de maçonnerie lourde ni les déplacements de cloisons.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Niveau</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">3 m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">5 m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">8 m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    niveau: "Basique",
                    s3: "3 000 – 5 000 €",
                    s5: "5 000 – 8 000 €",
                    s8: "8 000 – 12 000 €",
                  },
                  {
                    niveau: "Intermédiaire",
                    s3: "5 000 – 8 000 €",
                    s5: "8 000 – 13 000 €",
                    s8: "13 000 – 20 000 €",
                  },
                  {
                    niveau: "Premium",
                    s3: "8 000 – 15 000 €",
                    s5: "13 000 – 22 000 €",
                    s8: "20 000 – 35 000 €",
                  },
                  {
                    niveau: "Luxe / Marbre",
                    s3: "15 000 – 25 000 €",
                    s5: "22 000 – 40 000 €",
                    s8: "35 000 – 60 000 €",
                  },
                ].map((row, i) => (
                  <tr key={row.niveau} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.niveau}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.s3}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.s5}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.s8}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-4">
            {[
              {
                enjeu: "Niveau Basique — fonctionnel et propre",
                detail: "Carrelage céramique standard (20 – 40 €/m²), meuble vasque sur pied ou encastré d'entrée de gamme, douche avec bac à poser, robinetterie économique. Tout neuf et fonctionnel, sans recherche esthétique particulière. Idéal pour une mise en location ou un premier logement.",
              },
              {
                enjeu: "Niveau Intermédiaire — le meilleur rapport qualité-prix",
                detail: "Carrelage grès cérame (40 – 80 €/m²), douche à l'italienne avec receveur extra-plat, meuble vasque suspendu, robinetterie milieu de gamme (Grohe, Jacob Delafon). Rendu soigné et moderne, durabilité satisfaisante. Le niveau le plus souvent choisi à Paris pour une rénovation principale.",
              },
              {
                enjeu: "Niveau Premium — finitions haut de gamme",
                detail: "Carrelage grand format ou pierre naturelle (80 – 200 €/m²), douche à l'italienne XL sans bord apparent, meuble vasque sur mesure, robinetterie Hansgrohe Axor ou Duravit, miroir rétroéclairé, plancher chauffant, niche éclairée. Pour les appartements de standing.",
              },
              {
                enjeu: "Niveau Luxe / Marbre — le summum parisien",
                detail: "Marbre Carrare ou Calacatta au sol et aux murs, robinetterie Dornbracht ou Vola, baignoire îlot en fonte, douche à l'italienne 120×120 cm, éclairage architectural, chauffage au sol hydraulique. Réservé aux appartements du 7e, 8e, 16e et 17e arrondissements.",
              },
            ].map((el) => (
              <div key={el.enjeu} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.enjeu}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Prix par poste */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix détaillés par poste de travaux
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Pour mieux comprendre et maîtriser votre budget, voici le détail des principaux postes d&apos;une rénovation de salle de bain à Paris, avec les fourchettes de prix pratiquées en 2025.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: "Carrelage sol",
                detail: "Pose carrelage céramique standard : 40 – 60 €/m². Carrelage grès cérame 60×60 cm : 60 – 100 €/m². Pierre naturelle ou marbre : 150 – 350 €/m². Béton ciré : 80 – 150 €/m². Inclut dépose de l'ancien carrelage, ragréage si nécessaire, pose et joints.",
                cout: "40 – 350 €/m²",
              },
              {
                titre: "Carrelage mural",
                detail: "Carrelage mural céramique : 35 – 70 €/m². Carrelage métro ou zellige : 70 – 150 €/m². Grand format grès cérame 60×120 cm : 80 – 160 €/m². Marbre mural (plaquettes ou dalles) : 200 – 500 €/m². Inclut pose et joints, hors dépose si recollage sur l'existant.",
                cout: "35 – 500 €/m²",
              },
              {
                titre: "Plomberie",
                detail: "Remplacement robinetterie simple : 200 – 600 €. Remplacement complet plomberie salle de bain (alimentations + évacuations) : 1 500 – 4 000 €. Déplacement d'un point d'eau (WC, douche, vasque) : 500 – 1 500 €. Création d'un point d'eau supplémentaire : 800 – 2 000 €.",
                cout: "200 – 4 000 €",
              },
              {
                titre: "Électricité",
                detail: "Mise aux normes électricité salle de bain (zones NF C 15-100, liaisons équipotentielles) : 600 – 1 500 €. Création point lumineux encastré : 150 – 300 €/spot. Plancher chauffant électrique (hors carrelage) : 60 – 100 €/m². Sèche-serviettes électrique posé : 200 – 600 €.",
                cout: "600 – 1 500 €",
              },
              {
                titre: "Meuble vasque et robinetterie",
                detail: "Meuble vasque suspendu entrée de gamme : 300 – 800 €. Meuble vasque design milieu de gamme : 800 – 2 000 €. Meuble sur mesure menuiserie : 2 000 – 6 000 €. Robinetterie basique : 80 – 200 €. Robinetterie intermédiaire (Grohe, Hansgrohe) : 300 – 800 €. Robinetterie luxe (Dornbracht, Vola) : 1 000 – 5 000 €.",
                cout: "380 – 11 000 €",
              },
              {
                titre: "VMC et ventilation",
                detail: "La ventilation mécanique est obligatoire dans les salles de bain. Remplacement d'un extracteur VMC simple flux : 200 – 500 €. Installation VMC double flux (confort accru, économies d'énergie) : 1 500 – 4 000 € pour l'appartement entier. Indispensable pour éviter condensation et moisissures.",
                cout: "200 – 4 000 €",
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.titre}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.cout}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Douche italienne vs baignoire */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Douche à l&apos;italienne ou baignoire : que choisir à Paris ?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Dans les petites surfaces parisiennes, le choix entre douche à l&apos;italienne et baignoire conditionne l&apos;ensemble de l&apos;aménagement. Chaque option a ses avantages selon la surface disponible, l&apos;usage prévu et le profil des occupants.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: "Douche à l'italienne — le choix contemporain",
                prix: "2 000 – 8 000 €",
                detail: "La douche à l'italienne est aujourd'hui le standard des rénovations parisiennes. Elle agrandit visuellement la salle de bain (sol continu, sans bac saillant), facilite l'accès (PMR), et se pose dans des surfaces dès 3 m². Contrainte : elle nécessite une chape d'abaissement du sol (+ 500 à 1 500 €) et une évacuation en siphon de sol, ce qui peut poser problème dans les appartements en étage avec chape existante mince.",
              },
              {
                type: "Baignoire encastrée — le classique parisien",
                prix: "1 500 – 6 000 €",
                detail: "La baignoire encastrée (ou encaissée dans une tablette maçonnée) reste prisée dans les appartements familiaux et les rénovations haussmanniennes. Elle nécessite une surface minimale de 4 m² et s'associe souvent à une douche séparée dans les grandes salles de bain. Coût : baignoire acrylique encastrée posée : 1 500 – 3 000 €. Baignoire en fonte émaillée : 3 000 – 6 000 €.",
              },
              {
                type: "Baignoire îlot — le luxe parisien",
                prix: "5 000 – 20 000 €",
                detail: "La baignoire îlot est la pièce maîtresse des salles de bain de prestige du 7e, 8e et 16e. Elle nécessite une surface d'au moins 10 m² pour ne pas sembler écrasée. Matériaux : résine de synthèse, fonte émaillée, pierre naturelle. La robinetterie se pose au sol (robinet de sol) ou au plafond (robinet plafond) — ce qui implique une conception soignée des alimentations.",
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

      {/* Section 4 — Conseils et checklist */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Conseils pour bien budgéter sa rénovation de salle de bain à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La salle de bain est l&apos;une des pièces les plus complexes à rénover : plomberie, électricité, carrelage et équipements doivent être coordonnés dans un espace souvent restreint. Voici les points essentiels à maîtriser pour éviter les mauvaises surprises.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              "Toujours faire un diagnostic de l'étanchéité existante avant de recarreler",
              "Prévoir 10 à 15 % de carrelage supplémentaire pour les chutes et les remplacements futurs",
              "Intégrer la mise aux normes électriques NF C 15-100 dès la rénovation (liaisons équipotentielles obligatoires)",
              "Ne jamais poser de nouveau carrelage sur un ancien décollé — risque de remontées d'humidité",
              "Vérifier la capacité de débit d'eau chaude avant de choisir une grande douche à l'italienne",
              "Anticiper la VMC — une salle de bain mal ventilée développe des moisissures en 6 mois",
              "Demander un devis détaillé par poste pour comparer les offres entre artisans",
              "Faire réaliser l'étanchéité sous carrelage (Schlüter, membrane KERDI) pour une durabilité maximale",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-100">
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-3">
              Prix au m² salle de bain rénovée à Paris (tous postes inclus)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#FAFAF8]">
                    <th className="text-left px-3 py-2 font-medium text-[#1C1C1C] text-xs">Niveau</th>
                    <th className="text-center px-3 py-2 font-medium text-[#1C1C1C] text-xs">Prix / m²</th>
                    <th className="text-center px-3 py-2 font-medium text-[#1C1C1C] text-xs">Matériaux types</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { niveau: "Basique", prix: "1 000 – 1 800 €", mat: "Céramique, acrylique, robinetterie économique" },
                    { niveau: "Intermédiaire", prix: "1 800 – 2 800 €", mat: "Grès cérame, douche italienne, Grohe/Hansgrohe" },
                    { niveau: "Premium", prix: "2 800 – 4 500 €", mat: "Grand format, douche XL, Axor/Jacob Delafon" },
                    { niveau: "Luxe", prix: "4 500 – 7 500 €", mat: "Marbre, Dornbracht/Vola, baignoire îlot" },
                  ].map((row, i) => (
                    <tr key={row.niveau} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                      <td className="px-3 py-2 text-[#1C1C1C] font-medium text-sm">{row.niveau}</td>
                      <td className="px-3 py-2 text-center text-[#B8960C] font-medium text-sm">{row.prix}</td>
                      <td className="px-3 py-2 text-center text-gray-600 font-light text-xs">{row.mat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
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
              { href: '/blog/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain Paris' },
              { href: '/blog/douche-italienne-paris', title: 'Douche à l\'italienne Paris' },
              { href: '/blog/carrelage-salle-de-bain-paris', title: 'Carrelage salle de bain Paris' },
              { href: '/blog/renovation-appartement-paris-7e', title: 'Rénovation appartement Paris 7e' },
              { href: '/blog/renovation-appartement-paris-16e', title: 'Rénovation appartement Paris 16e' },
              { href: '/blog/renovation-salle-de-bain-petite-surface-paris', title: 'Salle de bain petite surface Paris' },
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
              { href: '/renovation-paris-7e', label: 'Paris 7e' },
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-paris-12e', label: 'Paris 12e' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
              { href: '/renovation-levallois-perret', label: 'Levallois-Perret' },
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
          Obtenez un devis pour votre salle de bain à Paris
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis détaillé par poste sous 48h. Artisans spécialisés salle de bain Paris.
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
