import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Chambre Paris', item: 'https://espacedesignparis.fr/blog/renovation-chambre-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Chambre Paris : aménagement, rangements & prix 2025 | Espace Design',
  description: 'Rénover une chambre à Paris : parquet, peinture, placards sur mesure, isolation phonique. Prix au m² et guide complet 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-chambre-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien coûte la rénovation d\'une chambre à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La rénovation d'une chambre à Paris coûte entre 150 et 600 € par m² selon le niveau de finition. Pour une chambre de 12 m² : un rafraîchissement (peinture + sol) revient à 1 800 – 3 000 €, une rénovation standard (parquet + peinture + électricité) à 4 000 – 7 000 €, et une rénovation haut de gamme avec dressing sur mesure à 8 000 – 15 000 €. Les placards encastrés représentent souvent 30 à 40 % du budget total.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quel sol choisir pour une chambre parisienne ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour une chambre parisienne, le parquet en bois massif ou contrecollé est la solution la plus plébiscitée (80 à 200 €/m² posé). Il apporte chaleur et confort acoustique. La moquette reste intéressante pour l'isolation phonique et thermique (30 à 80 €/m² posé). Le carrelage est moins courant mais adapté aux chambres en rez-de-chaussée humide. Dans les appartements haussmanniens, conserver ou restaurer le parquet existant est souvent la meilleure option.",
      },
    },
    {
      '@type': 'Question',
      name: 'Comment créer un dressing dans une petite chambre parisienne ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dans une petite chambre parisienne (8 à 12 m²), plusieurs solutions existent : le placard encastré dans une niche ou une alcôve (utilise l'espace mort sans empiéter sur la surface habitable), la cloison dressing (séparation légère avec une rangée de penderies, coût : 2 000 – 4 000 €), ou la conversion d'un recoin sous combles en dressing ouvert. L'astuce parisienne : exploiter la hauteur sous plafond (souvent 2,70 à 3,20 m) avec des armoires du sol au plafond, gain de 40 % de rangement par rapport aux meubles standard.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Chambre Paris : aménagement, rangements & prix 2025 | Espace Design',
  description: 'Rénover une chambre à Paris : parquet, peinture, placards sur mesure, isolation phonique. Prix au m² et guide complet 2025.',
}

export default function ArticleRenovationChambre() {
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
            Rénovation Chambre Paris : aménagement, rangements & prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Rénover une chambre à Paris implique de composer avec des volumes souvent contraints, une lumière naturelle limitée et des murs anciens chargés d&apos;histoire. Parquet, peinture, placards encastrés, isolation phonique : guide complet et prix au m² pour 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Enjeux spécifiques */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Rénovation chambre à Paris : enjeux spécifiques
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              La chambre parisienne type oscille entre 9 et 16 m² dans les appartements haussmanniens, souvent orientée sur cour (lumière indirecte), avec des plafonds hauts (2,70 à 3,20 m) et des murs en plâtre sur lattis bois qui cachent parfois de mauvaises surprises. Cette configuration spécifique impose des choix techniques adaptés.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Trois enjeux principaux structurent chaque projet de rénovation de chambre à Paris : optimiser la lumière naturelle disponible (peintures claires, miroirs, choix du sol), maximiser les rangements sans réduire la surface habitable, et traiter l&apos;isolation phonique dans des immeubles anciens aux planchers souvent très conducteurs.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Volumes et hauteur sous plafond',
                  detail: "Les hauteurs sous plafond parisiennes (2,70 à 3,20 m) sont une ressource précieuse. Exploitez-les avec des rangements du sol au plafond, qui offrent 40 à 60 % de volume supplémentaire par rapport aux meubles standards. En revanche, les surfaces au sol sont souvent réduites : chaque choix de mobilier doit être pensé en termes de dégagement de circulation.",
                },
                {
                  enjeu: 'Lumière dans les chambres sur cour',
                  detail: "Une chambre parisienne orientée sur cour reçoit une lumière diffuse et indirecte. Pour la compenser : peintures dans les tons blanc cassé ou lin clair (LRV > 70), sol clair en chêne naturel ou en parquet blanchi, miroirs positionnés en face de la fenêtre. Évitez les teintes sombres au sol qui absorbent la lumière disponible.",
                },
                {
                  enjeu: 'Murs anciens et finitions',
                  detail: "Les murs en plâtre sur lattis bois des immeubles haussmanniens sont irréguliers, souvent fissurés et présentent une absorption inégale. Un enduit de ragréage est généralement nécessaire avant toute peinture de qualité. Comptez 15 à 30 €/m² pour la préparation des murs, souvent sous-estimée dans les devis.",
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

      {/* Section 2 — Revêtements de sol */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Revêtements de sol : parquet, carrelage ou moquette ?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le choix du revêtement de sol conditionne l&apos;ambiance, le confort acoustique et la valeur de revente du bien. En chambre parisienne, trois options dominent le marché, chacune avec ses avantages et ses contraintes techniques.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Revêtement</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix posé (€/m²)</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Confort acoustique</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Durée de vie</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { mat: 'Parquet chêne massif', prix: '80 – 200 €', acoustique: 'Bon', duree: '50+ ans' },
                  { mat: 'Parquet contrecollé', prix: '50 – 120 €', acoustique: 'Moyen', duree: '20 – 30 ans' },
                  { mat: 'Moquette velours', prix: '30 – 80 €', acoustique: 'Excellent', duree: '10 – 15 ans' },
                  { mat: 'Carrelage grès cérame', prix: '40 – 100 €', acoustique: 'Faible', duree: '30+ ans' },
                  { mat: 'Sol vinyle LVT', prix: '25 – 60 €', acoustique: 'Moyen', duree: '15 – 20 ans' },
                ].map((row, i) => (
                  <tr key={row.mat} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.mat}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.prix}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.acoustique}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.duree}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-[#1C1C1C] rounded-lg p-5">
            <div className="font-medium text-white text-sm mb-2">Notre recommandation pour une chambre parisienne</div>
            <div className="text-gray-400 text-sm font-light leading-relaxed">
              Si un parquet en chêne massif est déjà présent, restaurez-le plutôt que de le remplacer (ponçage + vitrification : 25 à 45 €/m²). C&apos;est souvent la meilleure option qualité/prix et la plus valorisante à la revente. Si vous partez d&apos;un support nu, le parquet contrecollé offre le meilleur rapport qualité/prix pour une chambre.
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Rangements */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Aménagement des rangements : placards encastrés et dressing sur mesure
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Dans une chambre parisienne où chaque mètre carré compte, les rangements encastrés sont la solution reine. Ils optimisent l&apos;espace mort (alcôves, angles, sous-combles) et libèrent le sol pour la circulation.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Placard encastré dans une alcôve',
                prix: '800 – 2 500 €',
                detail: "Solution idéale quand la chambre dispose d'une niche ou d'une alcôve existante. Portes battantes ou coulissantes, aménagement intérieur sur mesure (penderie, tablettes, tiroirs). Ne réduit pas la surface habitable.",
              },
              {
                type: 'Dressing cloison (espace dédié)',
                prix: '2 000 – 5 000 €',
                detail: "Création d'une cloison légère en placoplâtre pour isoler un espace dressing. Idéal dans les chambres de 15 m² et plus. Permet une organisation optimale avec zones penderie, tiroirs et rangements à chaussures.",
              },
              {
                type: 'Armoire du sol au plafond sur mesure',
                prix: '3 000 – 8 000 €',
                detail: "Meuble menuisé sur mesure occupant toute la hauteur sous plafond. Façades avec portes miroir pour agrandir visuellement la pièce. Volume de rangement 2 à 3 fois supérieur à une armoire standard.",
              },
              {
                type: 'Tête de lit avec rangements intégrés',
                prix: '1 500 – 4 000 €',
                detail: "Solution tout-en-un combinant tête de lit, chevets flottants et rangements en hauteur. Très tendance dans les petites chambres parisiennes pour libérer les murs latéraux.",
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

      {/* Section 4 — Isolation phonique */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Isolation phonique et thermique d&apos;une chambre parisienne
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;isolation phonique est l&apos;un des principaux points de vigilance dans les immeubles parisiens anciens. Les planchers en bois transmettent facilement les bruits d&apos;impact, et les murs mitoyens laissent passer les bruits aériens. Une chambre bien isolée acoustiquement améliore considérablement la qualité de vie et la valeur du bien.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Isolation du plancher',
                solution: 'Sous-couche résiliente sous parquet flottant ou moquette, chape sèche ou béton allégé pour les bruits d\'impact. Gain : 15 à 25 dB.',
                cout: '20 – 50 €/m²',
              },
              {
                titre: 'Isolation des murs mitoyens',
                solution: 'Doublage en placoplâtre + laine de roche 45 mm ou laine de verre acoustique. Perte de 4 à 6 cm par mur traité. Gain : 40 à 50 dB.',
                cout: '60 – 120 €/m²',
              },
              {
                titre: 'Isolation du plafond',
                solution: 'Faux-plafond désolidarisé avec suspentes anti-vibrations + laine minérale. Traite les bruits d\'impact des voisins du dessus.',
                cout: '80 – 150 €/m²',
              },
              {
                titre: 'Isolation thermique des fenêtres',
                solution: 'Remplacement des fenêtres simple vitrage par du double vitrage ou ajout d\'un survitrage intérieur (non invasif, autorisé en copropriété).',
                cout: '200 – 600 € / fenêtre',
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
          <div className="bg-[#1C1C1C] rounded-lg p-5">
            <div className="font-medium text-white text-sm mb-2">Bon à savoir — Autorisation copropriété</div>
            <div className="text-gray-400 text-sm font-light leading-relaxed">
              Le remplacement de fenêtres sur les façades d&apos;un immeuble en copropriété nécessite généralement une autorisation en assemblée générale. Le survitrage intérieur (appliqué côté appartement) est souvent la solution la plus simple car il ne modifie pas l&apos;aspect extérieur du bâtiment.
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Budget */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Budget complet : prix au m² selon niveau de finition
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent pour une chambre de 12 m² à Paris, main d&apos;œuvre et matériaux inclus, hors dépose d&apos;anciens revêtements (compter 15 à 25 €/m² supplémentaires si nécessaire).
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Niveau</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prestations</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Total 12 m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    niveau: 'Rafraîchissement',
                    prestations: 'Peinture murs + plafond, sol vinyle ou moquette',
                    prixM2: '150 – 200 €',
                    total: '1 800 – 2 400 €',
                  },
                  {
                    niveau: 'Rénovation standard',
                    prestations: 'Parquet contrecollé, peinture préparée, électricité mise aux normes',
                    prixM2: '300 – 450 €',
                    total: '3 600 – 5 400 €',
                  },
                  {
                    niveau: 'Rénovation complète',
                    prestations: 'Parquet massif, enduit, peinture haut de gamme, placard encastré',
                    prixM2: '450 – 600 €',
                    total: '5 400 – 7 200 €',
                  },
                  {
                    niveau: 'Haut de gamme',
                    prestations: 'Matériaux premium, dressing sur mesure, isolation phonique, éclairage encastré',
                    prixM2: '600 – 900 €',
                    total: '7 200 – 10 800 €',
                  },
                ].map((row, i) => (
                  <tr key={row.niveau} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.niveau}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.prestations}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prixM2}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8">
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils pour maîtriser son budget
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Obtenir 3 devis détaillés avec descriptif de travaux précis, pas seulement un forfait global',
                'Préserver le parquet existant si possible — la restauration coûte 3 à 5 fois moins que le remplacement',
                'Grouper les travaux chambre avec d\'autres pièces pour réduire les coûts de déplacement et de protection',
                'Choisir des placards sur mesure en menuiserie artisanale plutôt que les grandes enseignes pour des volumes atypiques',
                'Prévoir 10 à 15 % de budget imprévus pour les mauvaises surprises derrière les murs anciens',
                'Une bonne préparation des murs (ragréage, enduit) vaut toujours la peine — elle double la durée de la peinture',
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
              { href: '/menuiserie-paris', title: 'Menuiserie sur mesure Paris' },
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénover un appartement haussmannien' },
              { href: '/blog/parquet-massif-paris', title: 'Parquet massif Paris' },
              { href: '/blog/renovation-loft-paris', title: 'Rénovation loft Paris' },
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
              { href: '/renovation-versailles', label: 'Versailles' },
              { href: '/renovation-saint-germain-en-laye', label: 'Saint-Germain-en-Laye' },
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
          Votre chambre mérite un aménagement sur mesure
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
