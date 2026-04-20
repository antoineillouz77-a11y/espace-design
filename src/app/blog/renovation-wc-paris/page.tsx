import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation WC Paris', item: 'https://espacedesignparis.fr/blog/renovation-wc-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation WC Paris : carrelage, WC suspendu & prix 2025 | Espace Design',
  description: 'Rénover ses WC à Paris : carrelage, faïence, WC suspendu, lave-mains. Prix, délais, artisans. Guide complet 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-wc-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien coûte la rénovation de WC à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le coût dépend du niveau de travaux : un simple rafraîchissement (peinture hydrofuge, remplacement abattant, nouveau luminaire) revient à 500–1 500 €. Une rénovation standard incluant carrelage mural et nouveau WC suspendu se situe entre 1 500 et 3 000 €. Une rénovation complète avec dépose totale, WC suspendu, lave-mains intégré et carrelage sol/mur grand format peut atteindre 3 000–5 000 €. Ces tarifs sont valables pour Paris et la petite couronne, main d'œuvre et matériaux inclus.",
      },
    },
    {
      '@type': 'Question',
      name: "Peut-on installer un WC suspendu dans un appartement parisien ancien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, dans la grande majorité des cas. La contrainte principale est l'épaisseur du mur porteur : le bâti-support (cadre métallique qui encastre la chasse d'eau) nécessite une profondeur de 10 à 15 cm selon le modèle. Dans les immeubles haussmanniens aux cloisons en briques ou en plâtre épais, l'installation est généralement possible. En revanche, sur une cloison très mince (moins de 10 cm), une fausse cloison en carreau de plâtre peut être construite pour accueillir le bâti-support, au prix d'un léger gain sur la surface. L'artisan doit également vérifier que la colonne montante est accessible pour raccorder l'évacuation.",
      },
    },
    {
      '@type': 'Question',
      name: "Combien de temps dure la rénovation de WC ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Un rafraîchissement (peinture, accessoires) se fait en 1 journée. La pose d'un WC suspendu seul, avec carrelage mural existant, demande 1 à 2 jours. Une rénovation complète — dépose, carrelage sol et mural, WC suspendu, lave-mains, électricité — nécessite 3 à 4 jours de chantier. Comptez ensuite 24 à 48 heures de séchage du joint silicone avant première utilisation. Dans les immeubles parisiens, une coupure d'eau de quelques heures doit souvent être coordonnée avec le gardien ou la copropriété.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation WC Paris : carrelage, WC suspendu & prix 2025 | Espace Design',
  description: 'Rénover ses WC à Paris : carrelage, faïence, WC suspendu, lave-mains. Prix, délais, artisans. Guide complet 2025.',
}

export default function ArticleRenovationWC() {
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
            Plomberie
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation WC Paris : carrelage, WC suspendu & prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Rénover ses WC à Paris impose de composer avec les contraintes des immeubles anciens : colonnes montantes encastrées, faible surface au sol, cloisons en plâtre. WC suspendu, faïence, lave-mains intégré — guide complet avec prix 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Spécificités immeubles anciens */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Rénover ses WC à Paris : spécificités des immeubles anciens
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Les WC parisiens présentent des contraintes techniques propres aux bâtiments construits avant les années 1970. La colonne montante — tuyau d&apos;évacuation collectif qui court en général le long d&apos;une cloison — est souvent encastrée ou difficilement accessible, ce qui limite les options de déplacement des évacuations. Toute modification doit être coordonnée avec le syndic de copropriété et respecter les règlements sanitaires en vigueur.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              La surface est une autre contrainte majeure. Les WC indépendants dans l&apos;ancien font fréquemment moins de 1,5 m² — parfois moins d&apos;1 m². Cette configuration rend le choix du mobilier et du revêtement déterminant : chaque centimètre compte. Les tuyaux d&apos;alimentation en eau, souvent apparents ou encastrés dans des cloisons en plâtre épais, peuvent nécessiter un diagnostic avant travaux pour s&apos;assurer de leur état.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Surface typique', valeur: '0,8 – 1,5 m²', note: 'WC séparés dans l\'ancien parisien' },
                { label: 'Colonne montante', valeur: 'Collective', note: 'Modification = accord copropriété' },
                { label: 'Tuyaux encastrés', valeur: 'Diagnostic conseillé', note: 'État souvent inconnu avant dépose' },
              ].map((item) => (
                <div key={item.label} className="bg-[#FAFAF8] rounded-lg p-4 border border-gray-100 text-center">
                  <div className="text-[#B8960C] font-semibold text-lg mb-1">{item.valeur}</div>
                  <div className="text-[#1C1C1C] text-sm font-medium mb-1">{item.label}</div>
                  <div className="text-gray-500 text-xs font-light">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — WC suspendu vs WC classique */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            WC suspendu vs WC classique : avantages, installation, prix
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le WC suspendu s&apos;est imposé comme le standard de la rénovation parisienne pour une raison simple : il libère visuellement le sol, facilite le nettoyage et permet d&apos;ajuster la hauteur d&apos;assise. Mais son installation est plus complexe et plus coûteuse que celle d&apos;un WC à poser classique.
          </p>
          <div className="space-y-4">
            {[
              {
                type: 'WC suspendu',
                avantages: [
                  'Sol entièrement dégagé — nettoyage facile',
                  'Hauteur d\'assise réglable (42 à 48 cm)',
                  'Gain visuel d\'espace dans les petits WC',
                  'Réservoir encastré silencieux',
                ],
                contraintes: [
                  'Bâti-support nécessaire (10–15 cm de profondeur dans le mur)',
                  'Fausse cloison si mur trop mince',
                  'Installation plus longue (1 à 2 jours)',
                ],
                prix: 'WC : 200–600 € + bâti-support : 200–400 € + MO : 800–1 500 €',
              },
              {
                type: 'WC à poser (classique)',
                avantages: [
                  'Installation simple et rapide (demi-journée)',
                  'Moins coûteux en main d\'œuvre',
                  'Compatible avec toutes les configurations de cloisons',
                  'Nombreux modèles disponibles',
                ],
                contraintes: [
                  'Sol non dégagé — nettoyage autour du pied difficile',
                  'Hauteur fixe non ajustable',
                  'Réservoir apparent (encombrement visuel)',
                ],
                prix: 'WC : 100–400 € + MO : 200–500 €',
              },
            ].map((el) => (
              <div key={el.type} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.type}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0 text-right max-w-[200px]">{el.prix}</div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">Avantages</div>
                    <ul className="space-y-1">
                      {el.avantages.map((a) => (
                        <li key={a} className="flex items-start gap-2 text-xs text-gray-600 font-light">
                          <CheckCircle size={12} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">Points de vigilance</div>
                    <ul className="space-y-1">
                      {el.contraintes.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-xs text-gray-600 font-light">
                          <span className="w-3 h-px bg-gray-400 flex-shrink-0 mt-2" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Revêtements muraux */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Revêtements muraux : carrelage, faïence, résine et peinture hydrofuge
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le choix du revêtement mural dans les WC conditionne l&apos;ambiance, l&apos;entretien et le coût de la rénovation. Dans un espace aussi réduit, l&apos;impact visuel est immédiat — une faïence bien choisie peut transformer un WC sombre en espace lumineux et soigné.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              {
                revetement: 'Carrelage / faïence',
                description: "La valeur sûre. Imperméable, durable, facile à nettoyer. Large choix de formats (métro, grand format, zellige). Attention aux joints qui noircissent avec le temps — préférer un joint époxy coloré ou de teinte foncée dans les WC.",
                prix: '30 – 80 €/m² posé',
                ideal: 'Toutes configurations',
              },
              {
                revetement: 'Résine murale',
                description: "Sans joints, aspect lisse et contemporain. Application rapide (1 journée). Moins résistante aux chocs que le carrelage mais suffisant pour les WC. Existe en version mat ou satiné. Compatible avec chauffage mural.",
                prix: '50 – 90 €/m² posé',
                ideal: 'WC design, petit espace',
              },
              {
                revetement: 'Peinture hydrofuge',
                description: "La solution économique pour un rafraîchissement rapide. Peinture spéciale pièces humides (satin ou velours). Durée de vie 5 à 8 ans. À réserver aux espaces où l&apos;humidité reste modérée — attention aux projections directes.",
                prix: '15 – 30 €/m² posé',
                ideal: 'Budget limité, locatif',
              },
              {
                revetement: 'Papier peint vinyle',
                description: "Tendance dans les WC depuis 2022. Vinyle lavable et résistant à l&apos;humidité modérée. Pose rapide, impact visuel fort. Ne pas utiliser directement autour du WC ou en zone de projections. Se remplace facilement en cas d&apos;envie de changement.",
                prix: '20 – 60 €/m² posé',
                ideal: 'Personnalisation, locatif',
              },
            ].map((el) => (
              <div key={el.revetement} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.revetement}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.prix}</div>
                </div>
                <div className="text-gray-600 text-xs font-light leading-relaxed mb-2">{el.description}</div>
                <div className="text-xs text-gray-500 font-light">Idéal : {el.ideal}</div>
              </div>
            ))}
          </div>
          <div className="bg-[#1C1C1C] rounded-lg p-5">
            <div className="font-medium text-white text-sm mb-2">Carrelage sol dans les WC parisiens</div>
            <div className="text-gray-400 text-sm font-light leading-relaxed">
              Pour le sol, privilégiez un carrelage antidérapant (R10 minimum) avec faible épaisseur de joint pour faciliter l&apos;entretien. Les formats 20×20 cm ou hexagonaux sont tendance et s&apos;adaptent bien aux petites surfaces. Dans les immeubles anciens avec plancher bois, un ragréage est souvent nécessaire avant pose — prévoir 15 à 25 €/m² supplémentaires.
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Lave-mains */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Lave-mains intégré dans les WC : tendances, contraintes plomberie, prix
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;intégration d&apos;un lave-mains dans les WC indépendants est une tendance forte à Paris, portée par des modèles compacts (30×25 cm) adaptés aux espaces réduits. Deux solutions coexistent : le lave-mains sur réservoir (l&apos;eau de remplissage sert au lavage des mains avant d&apos;alimenter la chasse) et le lave-mains indépendant mural ou à poser.
          </p>
          <div className="space-y-3">
            {[
              {
                solution: 'Lave-mains sur réservoir (type WiCi)',
                detail: "Intégré directement sur la chasse d'eau du WC. L'eau froide qui remplit le réservoir passe d'abord par un petit évier. Économe en eau, ne nécessite pas de raccordement d'évacuation supplémentaire. Existe en remplacement du couvercle d'un WC à poser existant ou intégré au réservoir de certains WC neufs.",
                prix: '150 – 400 €',
              },
              {
                solution: 'Lave-mains mural compact (30×25 cm)',
                detail: "La solution la plus répandue en rénovation. S'installe sur n'importe quel mur avec un raccordement eau froide (alimentation) et une évacuation à prévoir vers la colonne existante. Dans les WC parisiens sans alimentation eau froide indépendante, une dérivation depuis la chasse d'eau suffit souvent.",
                prix: '80 – 300 € (matériel) + 200–500 € MO',
              },
              {
                solution: 'Lave-mains encastré dans la cloison',
                detail: "Solution haut de gamme : le lave-mains est intégré dans une niche murale, associé au bâti-support du WC suspendu. Rendu très épuré. Nécessite une cloison suffisamment épaisse (20 cm minimum) et une coordination entre plombier et plaquiste.",
                prix: '500 – 1 200 € tout compris',
              },
            ].map((el) => (
              <div key={el.solution} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.solution}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.prix}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Budget */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Budget complet : rénovation WC à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Tarifs 2025 pour Paris et petite couronne, main d&apos;œuvre et matériaux inclus. Dépose de l&apos;existant comprise. Hors éventuels travaux électriques spécifiques.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Type de rénovation</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget</th>
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Ce qui est inclus</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    type: 'Rafraîchissement',
                    budget: '500 – 1 500 €',
                    inclus: 'Peinture hydrofuge, remplacement abattant, luminaire, accessoires',
                  },
                  {
                    type: 'Rénovation standard',
                    budget: '1 500 – 3 000 €',
                    inclus: 'Carrelage mural partiel, WC suspendu ou neuf, lave-mains compact',
                  },
                  {
                    type: 'Rénovation complète',
                    budget: '3 000 – 5 000 €',
                    inclus: 'Dépose totale, carrelage sol/mur grand format, WC suspendu, bâti-support, lave-mains encastré, électricité',
                  },
                ].map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.type}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium whitespace-nowrap">{row.budget}</td>
                    <td className="px-4 py-3 text-gray-600 font-light text-xs">{row.inclus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-[#1C1C1C] rounded-lg p-5">
            <div className="font-medium text-white text-sm mb-2">Ce qui peut faire varier le budget</div>
            <ul className="space-y-2">
              {[
                "Déplacement de la colonne d'évacuation : +500 à 1 500 € (accord copropriété nécessaire)",
                "Ragréage du plancher bois avant carrelage : +15 à 25 €/m²",
                "Remplacement de la tuyauterie ancienne (plomb ou galvanisé) : +300 à 800 €",
                "Ventilation mécanique (VMC) si WC sans fenêtre : +200 à 500 €",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-gray-400 font-light">
                  <CheckCircle size={12} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
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
              { href: '/plomberie-paris', title: 'Plomberie Paris' },
              { href: '/carrelage-paris', title: 'Carrelage Paris' },
              { href: '/blog/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain Paris' },
              { href: '/blog/plomberie-appartement-paris', title: 'Plomberie appartement Paris' },
              { href: '/blog/carrelage-appartement-paris', title: 'Carrelage appartement Paris' },
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
              { href: '/renovation-paris-1er', label: 'Paris 1er' },
              { href: '/renovation-paris-2e', label: 'Paris 2e' },
              { href: '/renovation-paris-3e', label: 'Paris 3e' },
              { href: '/renovation-paris-4e', label: 'Paris 4e' },
              { href: '/renovation-paris-5e', label: 'Paris 5e' },
              { href: '/renovation-paris-6e', label: 'Paris 6e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
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
          Un projet rénovation WC à Paris ?
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit sur place. Devis détaillé sous 48h. Artisans qualifiés RGE.
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
