import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Entrée Paris', item: 'https://espacedesignparis.fr/blog/renovation-entree-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation Entrée Paris : hall d'appartement & prix 2025 | Espace Design",
  description: "Rénover l'entrée de son appartement parisien : sol, miroir, rangements, éclairage. Prix et idées déco 2025.",
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-entree-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le budget pour rénover une entrée à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La rénovation d'une entrée à Paris coûte entre 500 et 4 000 € selon la surface et le niveau de finition. Pour une entrée de 4 m², un rafraîchissement (peinture + sol) revient à 500 – 1 200 €, une rénovation complète (sol durable + peinture + penderie sur mesure + éclairage) à 2 000 – 4 000 €, et une entrée haut de gamme avec marbre, menuiserie et éclairage encastré peut atteindre 6 000 – 10 000 €.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel revêtement de sol choisir pour une entrée parisienne ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour une entrée parisienne, privilégiez un revêtement résistant au passage intense, facile à nettoyer et esthétique. Le carrelage en grès cérame (40 à 90 €/m² posé) est la solution la plus durable et facile d'entretien. Le parquet chêne massif (80 à 180 €/m² posé) apporte chaleur et cohérence avec le reste de l'appartement. Évitez la moquette (difficile à nettoyer) et les revêtements clairs qui montrent immédiatement les traces de boue.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment agrandir visuellement une petite entrée parisienne ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Plusieurs techniques permettent d'agrandir visuellement une petite entrée : un grand miroir plein cadre face à la porte d'entrée (effet de doublement de l'espace), peinture claire sur les murs et plafond (blanc cassé, LRV > 75), sol en carrelage posé en diagonale pour allonger l'espace, éclairage bien pensé (appliques murales + spot central), mobilier suspendu au sol dégagé pour une impression d'espace. Un couloir sombre peut être transformé radicalement avec ces seules interventions.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Rénovation Entrée Paris : hall d'appartement & prix 2025 | Espace Design",
  description: "Rénover l'entrée de son appartement parisien : sol, miroir, rangements, éclairage. Prix et idées déco 2025.",
}

export default function ArticleRenovationEntree() {
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
            Aménagement
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Entrée Paris : hall d&apos;appartement & prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            L&apos;entrée d&apos;un appartement parisien donne le ton de tout l&apos;intérieur. Souvent négligée, parfois sombre et encombrée, elle peut se transformer en un espace accueillant, fonctionnel et esthétique avec les bons choix. Sol durable, rangements, éclairage et miroir : guide complet et prix 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — L'importance de l'entrée */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              L&apos;entrée parisienne : première impression et enjeux spécifiques
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              L&apos;entrée est la pièce qui reçoit le plus de passages journaliers, concentre les enjeux de rangement (manteaux, chaussures, courrier) et détermine la première impression de l&apos;appartement. Pourtant, dans les appartements parisiens, elle est souvent étroite (1,20 à 1,80 m de large), peu éclairée (absence de fenêtre) et traitée comme une zone de transit négligée.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Investir dans la rénovation de son entrée est l&apos;un des meilleurs retours sur investissement en termes d&apos;esthétique perçue : le rapport entre le budget dépensé et la transformation visuelle est plus favorable que dans n&apos;importe quelle autre pièce.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Gestion de la lumière dans un couloir sans fenêtre',
                  detail: 'La majorité des entrées parisiennes n\'ont aucune fenêtre. L\'éclairage artificiel est donc la seule source de lumière. Un couloir mal éclairé paraît sombre et étroit même s\'il est spacieux. Peinture claire, miroir réfléchissant, spots encastrés au plafond et appliques latérales : plusieurs niveaux d\'éclairage permettent de créer un espace agréable à toute heure.',
                },
                {
                  enjeu: 'Résistance aux passages intensifs',
                  detail: 'L\'entrée reçoit des chaussures boueuses, des valises, des poussettes et des vélos dans les appartements familiaux. Le sol et les murs (en particulier à hauteur de mains, à environ 90 cm) doivent être choisis pour leur résistance aux chocs et leur facilité de nettoyage. Un carrelage résistant ou un parquet traité sont indispensables.',
                },
                {
                  enjeu: 'Cohérence avec le reste de l\'appartement',
                  detail: 'L\'entrée est le premier espace visible depuis la porte d\'entrée — elle doit annoncer le style de l\'appartement et créer une transition harmonieuse vers les autres pièces. Un sol qui change brusquement, une peinture de couleur radicalement différente ou un mobilier hors de style peuvent rompre la cohérence de l\'ensemble.',
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

      {/* Section 2 — Revêtements de sol durables */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Revêtements de sol durables pour une entrée parisienne
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le sol de l&apos;entrée est soumis aux passages les plus intensifs de l&apos;appartement. Il doit allier résistance, facilité d&apos;entretien, et esthétique cohérente avec le reste du logement.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Revêtement</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix posé (€/m²)</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Résistance passage</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Entretien</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { mat: 'Carrelage grès cérame', prix: '40 – 90 €', resistance: 'Excellente', entretien: 'Très facile' },
                  { mat: 'Parquet chêne massif', prix: '80 – 180 €', resistance: 'Très bonne', entretien: 'Facile' },
                  { mat: 'Sol vinyle LVT', prix: '25 – 60 €', resistance: 'Bonne', entretien: 'Très facile' },
                  { mat: 'Carrelage grand format 60×60', prix: '60 – 120 €', resistance: 'Excellente', entretien: 'Très facile' },
                  { mat: 'Béton ciré', prix: '80 – 150 €', resistance: 'Très bonne', entretien: 'Moyen' },
                ].map((row, i) => (
                  <tr key={row.mat} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.mat}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.prix}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.resistance}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.entretien}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-[#1C1C1C] rounded-lg p-5">
            <div className="font-medium text-white text-sm mb-2">Notre recommandation pour une entrée parisienne</div>
            <div className="text-gray-400 text-sm font-light leading-relaxed">
              Si l&apos;appartement a un parquet dans le séjour, prolonger le même parquet dans l&apos;entrée crée une cohérence visuelle optimale et agrandit l&apos;espace. Si l&apos;entrée est séparée par une marche ou un changement de niveau, le carrelage en grès cérame grand format (60×60 cm minimum) est la solution la plus élégante et la plus durable.
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Rangements fonctionnels */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Rangements fonctionnels : vestiaire, penderie et meuble chaussures
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Une entrée sans rangements organisés devient rapidement un chaos de manteaux et de chaussures. Dans les appartements parisiens où l&apos;espace est précieux, chaque centimètre de rangement en entrée doit être pensé en 3D — de la tablette de rangement au plafond en passant par le sol.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Penderie encastrée sur mesure',
                prix: '1 200 – 3 000 €',
                detail: 'La meilleure solution pour les entrées de plus de 1,40 m de large. Portes coulissantes pour gagner de la place, intérieur avec penderie double, tablettes et tiroirs à chaussures. Peut intégrer un miroir en façade pour agrandir visuellement l\'espace.',
              },
              {
                type: 'Vestiaire mural compact',
                prix: '400 – 1 200 €',
                detail: 'Banquette avec espace chaussures intégré + crochets muraux + tablette supérieure. Solution idéale pour les petites entrées de moins de 1,20 m. Fonctionnel pour une famille : chacun a son espace clairement défini.',
              },
              {
                type: 'Meuble d\'entrée suspendu avec miroir',
                prix: '600 – 1 800 €',
                detail: 'Meuble bas fixé au mur, légèreté visuelle assurée par le sol dégagé. Intègre un espace chaussures et un miroir en hauteur. Parfait pour les entrées étroites où un meuble au sol réduirait encore davantage la circulation.',
              },
              {
                type: 'Solution bibliothèque-entrée',
                prix: '1 500 – 4 000 €',
                detail: 'Pour les appartements sans chambre dédiée au rangement, une bibliothèque murale intègre rangements ouverts (livres, objets déco) et rangements fermés (manteaux, chaussures). Crée une transition douce entre l\'entrée et le séjour.',
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

      {/* Section 4 — Éclairage */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Éclairage d&apos;une entrée sans lumière naturelle : solutions et prix
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;entrée parisienne sans fenêtre dépend entièrement de l&apos;éclairage artificiel pour sa luminosité et son ambiance. Un bon plan d&apos;éclairage combine plusieurs sources pour éviter les zones d&apos;ombre et créer une atmosphère chaleureuse.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Spot encastré LED au plafond',
                solution: 'Éclairage général uniforme. Idéalement orientable pour éclairer la zone de la porte et le meuble d\'entrée. Optez pour une température de couleur 2 700 – 3 000 K (blanc chaud) pour une entrée accueillante.',
                cout: '80 – 200 € / spot installé',
              },
              {
                titre: 'Applique murale',
                solution: 'Complète l\'éclairage plafond en créant une lumière latérale plus douce et chaleureuse. Positionner de chaque côté d\'un miroir pour un effet désiré. Fonctionne aussi comme éclairage de nuit à faible intensité.',
                cout: '150 – 400 € / applique installée',
              },
              {
                titre: 'Ruban LED sous-meuble',
                solution: 'Éclairage indirect sous un meuble suspendu. Crée un effet de lévitation du meuble et apporte de la lumière au sol pour retrouver ses chaussures. Très populaire dans les intérieurs contemporains.',
                cout: '100 – 250 €',
              },
              {
                titre: 'Miroir éclairant intégré',
                solution: 'Miroir avec rétroéclairage LED intégré. Combine l\'effet agrandissant du miroir et la fonction d\'éclairage. Idéal pour les entrées très petites où l\'espace pour des luminaires séparés manque.',
                cout: '200 – 600 €',
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.titre}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.cout}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.solution}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Budget */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Budget complet : prix de la rénovation d&apos;une entrée à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent pour une entrée de 4 à 6 m² à Paris, main d&apos;œuvre et matériaux inclus.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Niveau</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prestations</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget total</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    niveau: 'Rafraîchissement',
                    prestations: 'Peinture + sol vinyle ou carrelage basique',
                    total: '500 – 1 200 €',
                  },
                  {
                    niveau: 'Rénovation standard',
                    prestations: 'Sol durable + peinture + éclairage spot + meuble vestiaire',
                    total: '1 500 – 3 000 €',
                  },
                  {
                    niveau: 'Rénovation complète',
                    prestations: 'Parquet ou carrelage premium + peinture + penderie sur mesure + éclairage multi-sources + miroir',
                    total: '3 000 – 6 000 €',
                  },
                  {
                    niveau: 'Haut de gamme',
                    prestations: 'Matériaux premium (marbre, parquet massif) + menuiserie sur mesure + domotique + éclairage encastré',
                    total: '6 000 – 12 000 €',
                  },
                ].map((row, i) => (
                  <tr key={row.niveau} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.niveau}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.prestations}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils pour réussir la rénovation de son entrée
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Commencer par le sol — c\'est le poste le plus impactant visuellement et le plus durable',
                'Prévoir impérativement un grand miroir, même petit budget : il transforme l\'espace',
                'Ne pas négliger l\'éclairage — une entrée lumineuse paraît deux fois plus grande',
                'Choisir une peinture satinée ou brillante sur les murs de l\'entrée pour résister aux traces de mains',
                'Organiser les rangements avant les travaux de finition — modifier une penderie encastrée après coup est coûteux',
                'Prévoir une bonne cohérence de sol entre l\'entrée et le séjour si les deux sont visibles en même temps',
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
              { href: '/parquet-paris', title: 'Parquet Paris' },
              { href: '/carrelage-paris', title: 'Carrelage Paris' },
              { href: '/blog/renovation-chambre-paris', title: 'Rénovation chambre Paris' },
              { href: '/blog/peinture-appartement-paris', title: 'Peinture appartement Paris' },
              { href: '/blog/decoration-interieure-paris', title: 'Décoration intérieure Paris' },
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
              { href: '/renovation-paris-6e', label: 'Paris 6e' },
              { href: '/renovation-paris-7e', label: 'Paris 7e' },
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne' },
              { href: '/renovation-saint-cloud', label: 'Saint-Cloud' },
              { href: '/renovation-garches', label: 'Garches' },
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
          Votre entrée mérite une première impression parfaite
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis détaillé sous 48h. Artisans spécialisés en rénovation parisienne.
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
