import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Pose Carrelage Grand Format Paris', item: 'https://espacedesignparis.fr/blog/pose-carrelage-grand-format-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Pose Carrelage Grand Format Paris : 120x60, 120x120 & prix 2025 | Espace Design',
  description: 'Poser un carrelage grand format à Paris : 120x60, rectifié, joints fins 1mm. Artisan carreleur, prix 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/pose-carrelage-grand-format-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix de pose d\'un carrelage grand format à Paris en 2025 ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La pose d\'un carrelage grand format à Paris (120x60 ou 120x120) coûte entre 55 et 90 €/m² pour la main d\'œuvre seule. Pour un format 60x60 sur support bien préparé, comptez 35 à 55 €/m². Ces tarifs incluent l\'adhésif bi-encollé, les joints fins et la mise en place au laser. La préparation du support (ragréage autonivelant, désolidarisation sur plancher bois) est facturée en supplément : 15 à 45 €/m². Sur une surface de 30 m² en 120x60, le budget total pose (hors carreaux) tourne autour de 2 500 à 4 000 €.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle différence entre carrelage rectifié et non rectifié ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un carreau rectifié a ses bords taillés à la meule après cuisson, ce qui lui confère une précision dimensionnelle inférieure à 0,5 mm. Cette précision permet de poser des joints très fins (1 à 2 mm) sans risque d\'effet de marche entre les carreaux. Un carreau non rectifié présente des tolérances de 1 à 3 mm sur les dimensions — il nécessite des joints d\'au moins 3 mm pour absorber ces variations. Pour le grand format (60x60 et plus), le rectifié est indispensable : sans cela, les variations dimensionnelles créent des décalages visibles disgracieux sur de longues portées.',
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on poser un carrelage grand format sur un plancher chauffant à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, le carrelage grand format est compatible avec le chauffage au sol (hydraulique ou électrique), et c\'est même l\'un des meilleurs revêtements pour ce système : le grès cérame conduit très bien la chaleur et ne craint pas les variations thermiques. Conditions obligatoires : attendre au minimum 21 jours après la fin du coulage de la chape avant de poser le carrelage, et utiliser un adhésif de classe S2 (hautement déformable) pour absorber les dilatations. En appartement parisien avec plancher chauffant électrique, une natte désolidarisante (Schlüter Ditra ou équivalent) est recommandée pour protéger le système.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle épaisseur de carrelage grand format pour un usage résidentiel ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pour un usage résidentiel standard (appartement parisien), une épaisseur de 9 à 12 mm est suffisante pour les formats jusqu\'à 120x60. Pour les formats 120x120 et au-delà, préférez une épaisseur de 12 à 14 mm qui offre une meilleure résistance à la flexion (les grandes dalles peuvent se fléchir si elles sont trop minces). Les ultra-minces (3 à 6 mm) existent pour la rénovation sur sol existant, mais nécessitent un support absolument parfait et un artisan très expérimenté. En salle de bain, tenez compte du poids total (carreaux + mortier-colle) et de la portance du plancher — à vérifier sur les immeubles parisiens anciens.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Pose Carrelage Grand Format Paris : 120x60, 120x120 & prix 2025 | Espace Design',
  description: 'Poser un carrelage grand format à Paris : 120x60, rectifié, joints fins 1mm. Artisan carreleur, prix 2025.',
}

export default function ArticlePoseCarrelageGrandFormat() {
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
            Carrelage
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Pose Carrelage Grand Format Paris : 120x60, 120x120 &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le carrelage grand format (120x60, 120x120, 180x120) transforme les intérieurs parisiens : moins de joints, lignes épurées, effet monolithique. Mais sa pose dans un appartement parisien réclame une préparation du support irréprochable et un artisan carreleur spécialisé. Guide complet des techniques, formats et prix 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Formats et rectifié */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Formats disponibles et différence rectifié vs non rectifié
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le marché du carrelage grand format a explosé depuis 2018. Les fabricants (Lea Ceramiche, Rex, Ariostea, Marazzi, Fap) proposent désormais des dalles de 30 cm jusqu&apos;à 320 cm de long. En rénovation parisienne, les formats 60x60, 120x60 et 120x120 représentent 90 % des chantiers.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              La distinction rectifié vs non rectifié est fondamentale pour le grand format. Un carreau non rectifié de 60x60 présentera des variations de 2 à 3 mm entre carreaux — imperceptibles à 30 cm, mais catastrophiques à grande échelle sur un sol de séjour. Le rectifié est le standard absolu au-delà de 45 cm de côté.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Format 60x60 — Le grand format accessible',
                  detail: 'Entrée dans le grand format, le 60x60 est le plus facile à poser et à livrer dans un appartement parisien (passe dans les cages d\'escalier standard). Il convient à toutes les pièces : salle de bain, cuisine, couloir, séjour. En grès cérame rectifié, il permet un joint de 2 mm. Pose bi-encollée recommandée mais non obligatoire selon le support.',
                },
                {
                  enjeu: 'Format 120x60 — L\'effet dalle contemporaine',
                  detail: 'Le 120x60 offre un rapport longueur/largeur de 2:1 qui crée un alignement des joints visuellement dynamique. Très populaire dans les salles de bain contemporaines et les séjours ouverts. Pose bi-encollée obligatoire, ventouses de manipulation indispensables. Joint recommandé : 1,5 à 2 mm minimum. Attention : les lames de 120x60 ne passent souvent pas debout dans les cages d\'escalier — l\'artisan doit parfois les couper en deux.',
                },
                {
                  enjeu: 'Format 120x120 — L\'effet monolithique maximum',
                  detail: 'Le 120x120 donne l\'effet de dallage le plus homogène. Idéal dans les grandes entrées ou les séjours de 20 m² et plus. Logistique lourde : chaque dalle pèse 18 à 30 kg selon l\'épaisseur, la manipulation nécessite deux carreleurs et un portique à ventouses. Support parfaitement nivelé au laser. Joint minimum 1,5 mm avec coulis époxy recommandé.',
                },
                {
                  enjeu: 'Format 180x120 et grandes dalles — Réservé aux experts',
                  detail: 'Les formats 160x80, 180x120 et 320x160 cm sont réservés aux très grandes surfaces (salon de plus de 40 m², hall d\'immeuble, plateau professionnel). Logistique de chantier majeure, prix de transport et de pose élevés. En appartement parisien standard, ces formats sont rarement pertinents en raison des contraintes d\'accès et du poids.',
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

      {/* Section 2 — Joints fins et chape */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Joints fins 1 mm, chape autonivelante et sous-couche désolidarisée
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les joints fins (1 à 2 mm) sont la signature esthétique du carrelage grand format rectifié. Ils réclament un support d&apos;une planéité quasi parfaite, un adhésif de haute performance et un carreleur expérimenté. Dans un appartement parisien ancien, la préparation du support est systématiquement le premier poste de coût.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Joints fins 1 mm : conditions requises',
                solution: 'Un joint de 1 mm est techniquement possible uniquement avec un carreau rectifié de précision (tolérance dimensionnelle inférieure à 0,3 mm) et un coulis époxy (ou coulis microciment à grains très fins). La moindre variation dimensionnelle du carreau se traduit par un défaut visible à cette largeur de joint. Réservez le joint à 1 mm aux surfaces murales ou aux sols de faible surface (moins de 10 m²) où la maîtrise est totale.',
                cout: 'Joint 1 mm possible',
              },
              {
                titre: 'Chape autonivelante : standard en rénovation',
                solution: 'Dans les appartements parisiens construits avant 1980, les chapes existantes présentent souvent des écarts de niveau de 5 à 15 mm. Le ragréage autonivelant (produit fluide qui se met de niveau par gravité) corrige ces irrégularités en une seule application. Séchage : 24 h avant pose. Épaisseur minimale : 3 mm, maximale : 20 mm par passe. Pour les écarts supérieurs : deux passes ou chape traditionnelle.',
                cout: '15 – 35 €/m²',
              },
              {
                titre: 'Sous-couche désolidarisée sur plancher bois',
                solution: 'Dans les appartements haussmanniens parisiens, les planchers en bois (solives + planche) bougent selon l\'humidité. Poser du carrelage grand format directement sur un tel plancher conduit au décollement en 2 à 5 ans. Solution : natte de désolidarisation (Schlüter Ditra, Mapei Mapeguard ou équivalent) + adhésif souple S2. La natte absorbe les mouvements du bois sans les transmettre au carrelage.',
                cout: '8 – 18 €/m²',
              },
              {
                titre: 'Coulis époxy pour joints durables',
                solution: 'Le coulis époxy (résine époxyde bicomposante) offre une résistance chimique, une étanchéité et une dureté bien supérieures au coulis ciment. Indispensable pour les joints fins en zone humide (salle de bain, cuisine). Il ne jaunit pas, ne se tache pas et ne moisit pas. Inconvénients : pose plus délicate (temps d\'utilisation court, nettoyage immédiat requis) et coût plus élevé.',
                cout: '8 – 15 €/m²',
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

      {/* Section 3 — Contraintes appartement parisien */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Poser du grand format dans un appartement parisien : contraintes spécifiques
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;appartement parisien cumule des contraintes que les maisons individuelles n&apos;ont pas : cage d&apos;escalier étroite, planchers anciens, copropriété avec réglementation des travaux, horaires de chantier limités. Un artisan expérimenté en milieu urbain sait anticiper ces points.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Montée des matériaux et logistique',
                prix: 'Surcoût 5 – 15 %',
                detail: 'Un carreau 120x60 en grès cérame 10 mm pèse entre 18 et 25 kg. Au 5e étage sans ascenseur, la montée de 30 m² de carrelage représente plus d\'une tonne de matière. Prévoyez un coût de manutention renforcée. Certains carreaux ne passent pas debout dans les couloirs — l\'artisan doit les couper en chantier ou les faire passer en diagonale.',
              },
              {
                type: 'Horaires de travaux en copropriété',
                prix: 'Délai +30 %',
                detail: 'Les règlements de copropriété parisiens limitent souvent les travaux bruyants aux horaires 8h-12h / 14h-18h en semaine, et interdisent les découpes au samedi après-midi et le dimanche. La découpe à la scie à eau est particulièrement bruyante. Ces contraintes allongent la durée du chantier — à intégrer dans le planning et le budget.',
              },
              {
                type: 'Poids et portance du plancher',
                prix: 'Vérification requise',
                detail: 'Le carrelage grand format en grès cérame 12 mm pèse 25 à 35 kg/m². Avec l\'adhésif (4 à 6 kg/m²), la charge totale dépasse 30 à 40 kg/m². Dans les immeubles haussmanniens avec solives en bois, la portance est généralement suffisante, mais un diagnostic est conseillé pour les grandes surfaces ou les formats très épais. Le remplacement d\'un parquet par du carrelage dans un immeuble ancien nécessite parfois un avis de structure.',
              },
              {
                type: 'Joints de fractionnement obligatoires',
                prix: 'Inclus dans la pose',
                detail: 'Les grands formats amplifient les contraintes de dilatation thermique. Des joints de fractionnement (bande souple au coulis acrylique ou silicone) sont obligatoires selon le DTU 52.1 tous les 25 à 40 m² en sol intérieur, et obligatoirement en périphérie (sous les plinthes) et en encadrement de chaque passage de porte. Leur omission est la première cause de soulèvement du carrelage dans les années qui suivent la pose.',
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

      {/* Section 4 — Tableau des prix */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix pose carrelage grand format à Paris : tableau 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Tarifs main d&apos;œuvre pose (adhésif, coulis et joints inclus). Hors fourniture des carreaux et hors préparation du support.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Format</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Complexité</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Joint min.</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix pose / m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    format: '60x60 rectifié',
                    complexite: 'Modérée',
                    joint: '2 mm',
                    prix: '35 – 55 €',
                  },
                  {
                    format: '60x120 rectifié',
                    complexite: 'Élevée',
                    joint: '1,5 – 2 mm',
                    prix: '55 – 75 €',
                  },
                  {
                    format: '90x90 rectifié',
                    complexite: 'Élevée',
                    joint: '1,5 – 2 mm',
                    prix: '55 – 80 €',
                  },
                  {
                    format: '120x120 rectifié',
                    complexite: 'Très élevée',
                    joint: '1,5 mm',
                    prix: '70 – 95 €',
                  },
                  {
                    format: '180x120 et plus',
                    complexite: 'Expert',
                    joint: '1 – 1,5 mm',
                    prix: 'Sur devis',
                  },
                ].map((row, i) => (
                  <tr key={row.format} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.format}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.complexite}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.joint}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils pour maîtriser le budget d&apos;un chantier grand format à Paris
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Demander un devis tout compris (pose + adhésif + coulis + joints de fractionnement)',
                'Prévoir 10 à 15 % de carreaux en plus pour les coupes et la casse',
                'Intégrer la préparation du support dans le budget — souvent le poste le plus sous-estimé',
                'Choisir un coulis époxy pour les joints fins en zone humide — plus cher mais bien plus durable',
                'Vérifier la compatibilité format / cage d\'escalier avant de commander les carreaux',
                'Prévoir une natte désolidarisante sur plancher bois ou sur chauffage au sol',
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
              { href: '/blog/renovation-appartement-paris-16e', title: 'Rénovation appartement Paris 16e' },
              { href: '/blog/renovation-appartement-paris-12e', title: 'Rénovation appartement Paris 12e' },
              { href: '/blog/devis-travaux-renovation-paris', title: 'Devis travaux rénovation Paris : éviter les pièges' },
              { href: '/blog/renovation-terrasse-bois-paris', title: 'Terrasse bois Paris : ipé & composite' },
              { href: '/blog/carrelage-salle-de-bain-paris', title: 'Carrelage salle de bain Paris' },
              { href: '/blog/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain Paris' },
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
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-paris-12e', label: 'Paris 12e' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-levallois-perret', label: 'Levallois' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
              { href: '/renovation-vincennes', label: 'Vincennes' },
              { href: '/renovation-montreuil', label: 'Montreuil' },
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
          Posez votre carrelage grand format à Paris
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis détaillé sous 48h. Artisan carreleur spécialisé grand format et joints fins.
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
