import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Maison Ancienne Paris', item: 'https://espacedesignparis.fr/blog/renovation-maison-ancienne-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Maison Ancienne Paris : pierres, poutres & contraintes 2025 | Espace Design',
  description: 'Rénover une maison ancienne à Paris : contraintes ABF, pierres de taille, poutres apparentes, amiante. Guide artisan 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-maison-ancienne-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le surcoût lié à l'amiante lors de la rénovation d'une maison ancienne à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le surcoût lié à la présence d'amiante dans une maison ancienne à Paris dépend de la quantité et de la localisation des matériaux amiantés. Le diagnostic amiante avant travaux (obligatoire pour toute maison dont le permis de construire est antérieur au 1er juillet 1997) coûte entre 150 et 400 €. Si de l'amiante est détecté, le désamiantage représente un surcoût de 50 à 200 €/m² pour les surfaces traitées — soit 5 000 à 30 000 € pour une maison moyenne selon l'ampleur de la contamination. Ce coût est souvent sous-estimé lors du budget de rénovation. Le désamiantage doit être réalisé par une entreprise certifiée amiante (mention SS4).",
      },
    },
    {
      '@type': 'Question',
      name: "Peut-on isoler les murs en pierre d'une maison ancienne à Paris sans les abîmer ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, mais avec les bons matériaux. Les murs en pierre de taille ou en moellons des maisons anciennes parisiennes sont des matériaux respirants : ils absorbent et restituent l'humidité naturellement. Pour les isoler sans créer de désordres (condensation, moisissures, efflorescence), il faut impérativement utiliser des matériaux compatibles avec la vapeur d'eau : laine de bois, chanvre, liège expansé ou chaux-chanvre. Les isolants synthétiques à cellules fermées (polystyrène, polyuréthane) sont à proscrire car ils piègent l'humidité dans la paroi et provoquent des dégâts à terme. L'isolation doit être posée sur une ossature bois légère avec un pare-vapeur hygrovariable.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il des autorisations spéciales pour rénover une maison ancienne à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Cela dépend de la localisation et de la nature des travaux. Si la maison est dans un secteur protégé (périmètre de 500 m autour d'un monument historique) ou dans un site patrimonial remarquable, l'avis de l'Architecte des Bâtiments de France est requis pour toute modification visible depuis l'extérieur : façade, fenêtres, volets, toiture, couleur de peinture, balcons. Pour les travaux intérieurs (isolation, plomberie, électricité, cloisons), aucune autorisation spécifique n'est nécessaire sauf si vous créez de la surface (permis de construire au-delà de 20 m²) ou si la maison est elle-même classée aux Monuments Historiques.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Maison Ancienne Paris : pierres, poutres & contraintes 2025 | Espace Design',
  description: 'Rénover une maison ancienne à Paris : contraintes ABF, pierres de taille, poutres apparentes, amiante. Guide artisan 2025.',
}

export default function ArticleRenovationMaisonAncienneParis() {
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
            Guides
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Maison Ancienne Paris : pierres, poutres &amp; contraintes 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Rénover une maison ancienne à Paris est un projet à la fois passionnant et complexe. Murs en pierre de taille, poutres apparentes, parquets d&apos;époque, présence possible d&apos;amiante, contraintes ABF et surcoûts spécifiques au bâti ancien : ce guide vous prépare à chaque étape de votre chantier en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Types de maisons anciennes */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Types de maisons anciennes à Paris : meulière, haussmannienne, de ville
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Paris et la petite couronne concentrent plusieurs typologies de maisons anciennes, chacune avec ses caractéristiques constructives et ses enjeux de rénovation spécifiques.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Maison meulière (fin 19e – début 20e siècle)',
                  detail: "La maison meulière, construite en moellons de meulière (roche siliceuse grise-beige), est typique de la petite couronne parisienne (Vincennes, Nogent, Montreuil, Saint-Maur). Ses murs épais (50 à 60 cm) offrent une bonne inertie thermique mais une isolation médiocre. Les planchers sont souvent en bois sur solives, les charpentes en bois avec une couverture en ardoise ou en tuile. Le risque amiante est élevé dans les maisons meulières rénovées entre 1950 et 1997.",
                },
                {
                  enjeu: 'Maison haussmannienne de ville (milieu 19e siècle)',
                  detail: "Les maisons de ville de l'époque haussmannienne (1850-1880) ont des murs en pierre de taille calcaire, des planchers en bois avec lambourdes et parquet en chêne massif, des hauteurs sous plafond de 2,80 à 3,50 m et des éléments décoratifs soignés (moulures, cheminées en marbre, ferronneries). La rénovation de ces maisons nécessite une attention particulière à la préservation des éléments patrimoniaux.",
                },
                {
                  enjeu: 'Maison de ville ancienne (17e-18e siècle)',
                  detail: "Les maisons les plus anciennes de Paris intra-muros (Marais, Montmartre) ont des structures en pans de bois (colombages) ou en pierre de taille, des planchers sur solives très épaisses, des escaliers en bois sculptés et des caves voûtées. Ces maisons sont souvent partiellement ou totalement classées aux Monuments Historiques. La rénovation est très encadrée et nécessite des artisans spécialisés.",
                },
              ].map((el) => (
                <div key={el.enjeu} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.enjeu}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Murs en pierre et poutres */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Murs en pierre et poutres apparentes : traitement et conservation
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les deux éléments les plus emblématiques d&apos;une maison ancienne parisienne — les murs en pierre et les poutres apparentes — méritent une attention particulière, tant pour leur aspect esthétique que pour leur traitement technique.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: "Isolation des murs en pierre par l'intérieur",
                detail: "L'isolation par l'intérieur (ITI) est la seule option dans une maison ancienne sans modifier l'aspect extérieur. Il faut impérativement utiliser des matériaux respirants (laine de bois, chanvre, liège) pour éviter la condensation dans la paroi. Un pare-vapeur hygrovariable est obligatoire. L'épaisseur du doublage (8 à 14 cm) réduit légèrement la surface habitable.",
                cout: '80 – 160 €/m²',
              },
              {
                titre: 'Enduit chaux sur murs en pierre',
                detail: "Si vous souhaitez conserver l'aspect pierre apparente ou un enduit traditionnel, la chaux naturelle est le matériau de référence : compatible avec la pierre calcaire ou la meulière, elle régule naturellement l'humidité et ne piège pas les sels. Un enduit chaux bien réalisé dure plusieurs décennies.",
                cout: '30 – 70 €/m²',
              },
              {
                titre: 'Traitement des poutres en bois',
                detail: "Les poutres apparentes d'une maison ancienne peuvent être en chêne massif, en sapin ou en châtaignier. Avant tout traitement esthétique, il faut vérifier leur état structurel (absence de pourriture, de trous de vrillette) et les traiter contre les insectes xylophages. Un traitement curatif (injection ou badigeon) est ensuite appliqué avant la finition (brou de noix, huile, lasure ou peinture).",
                cout: '20 – 60 €/ml',
              },
              {
                titre: 'Conservation vs remplacement des poutres',
                detail: "Une poutre ancienne en chêne massif de qualité vaut bien plus qu'une poutre neuve en pin. Avant de la remplacer, faire évaluer son état par un charpentier : une poutre saine peut souvent être conservée et traitée. Si le remplacement est inévitable (pourriture profonde, section insuffisante), choisir une essence similaire (chêne, châtaignier) pour respecter l'authenticité du bâtiment.",
                cout: 'Remplacement : 200 – 600 €/ml',
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

      {/* Section 3 — Amiante et diagnostics */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Diagnostic amiante et surcoûts avant travaux dans une maison ancienne
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Toute maison dont le permis de construire est antérieur au 1er juillet 1997 peut contenir de l&apos;amiante. Le diagnostic amiante avant travaux est obligatoire et conditionne le budget de rénovation.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Diagnostic amiante avant travaux (obligatoire)',
                prix: '150 – 400 €',
                detail: "Le diagnostic amiante avant travaux (DAAT) est obligatoire avant tout chantier dans un bien dont le permis de construire est antérieur au 1er juillet 1997. Il est réalisé par un diagnostiqueur certifié et porte sur tous les matériaux susceptibles de contenir de l'amiante : dalles de sol vinyle, colles, flocages, calorifugeages, enduits à la perle, toitures en fibrociment. Le rapport liste les matériaux avec amiante et leur état de conservation.",
              },
              {
                type: 'Désamiantage — surcoût selon ampleur',
                prix: '50 – 200 €/m²',
                detail: "Si de l'amiante est détecté, le désamiantage est obligatoire avant les travaux. Il doit être réalisé par une entreprise certifiée amiante (mention SS4). Le coût dépend du type de matériau (friable ou non) et de la surface à traiter. Les dalles vinyle amiantées (fréquentes dans les maisons des années 1960-1980) coûtent 30 à 80 €/m² à retirer.",
              },
              {
                type: 'Autres diagnostics obligatoires avant travaux',
                prix: 'Pack : 400 – 800 €',
                detail: "Avant de rénover une maison ancienne à Paris, plusieurs diagnostics sont recommandés ou obligatoires : diagnostic plomb (sur les peintures dans les logements construits avant 1949), diagnostic termites (dans les zones déclarées par arrêté préfectoral), état de l'installation intérieure de gaz (si plus de 15 ans) et diagnostic de performance énergétique (DPE).",
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

      {/* Section 4 — Budget et prix */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix de rénovation d&apos;une maison ancienne à Paris : budget 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent pour une maison ancienne parisienne (meulière ou pierre de taille), main d&apos;oeuvre et matériaux inclus. Les surcoûts spécifiques au bâti ancien (amiante, poutres, pierres, contraintes ABF) peuvent représenter 15 à 30 % du budget total.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Type de rénovation</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Travaux inclus</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix /m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget 90 m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    type: 'Légère',
                    travaux: 'Peinture + parquet + salle de bain + cuisine',
                    prixM2: '800 – 1 300 €',
                    budget: '72 000 – 117 000 €',
                  },
                  {
                    type: 'Standard',
                    travaux: 'Peinture + sol + cuisine + électricité + plomberie partielles',
                    prixM2: '1 300 – 2 000 €',
                    budget: '117 000 – 180 000 €',
                  },
                  {
                    type: 'Complète',
                    travaux: "Tout corps d'état : électricité NF C 15-100, plomberie, sol, isolation, murs, cuisine, salle de bain",
                    prixM2: '2 000 – 3 000 €',
                    budget: '180 000 – 270 000 €',
                  },
                  {
                    type: 'Avec désamiantage',
                    travaux: 'Complète + diagnostics + désamiantage + surcoûts bâti ancien',
                    prixM2: '2 500 – 4 500 €',
                    budget: '225 000 – 405 000 €',
                  },
                ].map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.type}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.travaux}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prixM2}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.budget}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils pour rénover une maison ancienne à Paris
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Faire réaliser le diagnostic amiante avant travaux dès l'achat — il peut modifier le budget significativement",
                "Ne jamais isoler des murs en pierre avec du polystyrène ou du polyuréthane — utiliser des matériaux respirants",
                "Faire évaluer les poutres par un charpentier avant de décider de les garder ou les remplacer",
                "Vérifier si la maison est en zone ABF avant tout projet de modification de façade ou de fenêtres",
                "Conserver les éléments authentiques (carreaux de ciment, tommettes, garde-corps forgés) — ils ont de la valeur",
                "Prévoir une réserve de budget de 15 à 20 % pour les imprévus, fréquents dans le bâti ancien",
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
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-6 text-center">Questions fréquentes</p>
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

      {/* Voir aussi */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Voir aussi</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/renovation-maison-paris', title: 'Rénovation maison Paris' },
              { href: '/blog/isolation-thermique-appartement-paris', title: 'Isolation thermique Paris' },
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénovation appartement haussmannien' },
              { href: '/blog/renovation-parquet-paris', title: 'Rénovation parquet Paris' },
              { href: '/contact', title: 'Demander un devis gratuit' },
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
      <section className="py-10 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Nos zones d&apos;intervention</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { href: '/renovation-vincennes', label: 'Vincennes' },
              { href: '/renovation-montreuil', label: 'Montreuil' },
              { href: '/renovation-saint-maur-des-fosses', label: 'Saint-Maur' },
              { href: '/renovation-nogent-sur-marne', label: 'Nogent-sur-Marne' },
              { href: '/renovation-levallois-perret', label: 'Levallois' },
              { href: '/renovation-courbevoie', label: 'Courbevoie' },
              { href: '/renovation-saint-denis', label: 'Saint-Denis' },
              { href: '/renovation-pantin', label: 'Pantin' },
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
          Rénovez votre maison ancienne à Paris
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Artisans spécialisés en bâti ancien, pierres de taille et poutres apparentes. Devis gratuit sous 48h.
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
