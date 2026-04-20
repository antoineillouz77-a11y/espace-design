import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Carrelage Grand Format Paris', item: 'https://espacedesignparis.fr/blog/carrelage-grand-format-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Carrelage Grand Format Paris : pose 60x60 120x60 & prix 2025 | Espace Design',
  description: 'Poser du carrelage grand format à Paris (60×60, 120×60) : préparation chape, adhésif, joints minces. Prix au m² et artisan carreleur 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/carrelage-grand-format-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix de pose d\'un carrelage grand format à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La pose de carrelage grand format (60×60 ou 120×60) à Paris coûte entre 35 et 90 €/m² selon la taille du format et l'état du support. Pour un format 60×60 sur chape neuve ou support bien planifié, comptez 35–55 €/m² pour la main d'œuvre seule. Pour un 120×60 ou plus grand, la complexité de pose (bardage, ventouses, adhésif bi-encollé) porte le tarif à 55–90 €/m². Ces prix n'incluent pas les carreaux ni la préparation du support si nécessaire.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle planéité du support est requise avant la pose de grands carreaux ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La planéité est le critère critique du carrelage grand format. La norme DTU 52.1 exige une tolérance de 5 mm sous une règle de 2 mètres pour un support classique. Pour le grand format, les professionnels recommandent de viser 3 mm maximum sous 2 m. Au-delà, les carreaux basculent sur les irrégularités et l'adhésif n'assure plus une couverture suffisante — risque de décollement à moyen terme. La reprise d'une chape existante par ragréage autonivelant est souvent indispensable dans les appartements parisiens anciens.",
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on poser du carrelage grand format directement sur du carrelage existant ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Poser sur l'ancien carrelage est techniquement possible à condition que l'ancien revêtement soit parfaitement adhérent (son creux = à déposer), que la planéité soit suffisante et que la surcharge pondérale soit compatible avec la structure du plancher. À Paris, dans les immeubles anciens avec planchers en bois ou hourdis légers, le poids du grand format (souvent 15 à 25 kg/m²) peut être problématique. Un diagnostic par un artisan expérimenté est indispensable avant de décider.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Carrelage Grand Format Paris : pose 60x60 120x60 & prix 2025 | Espace Design',
  description: 'Poser du carrelage grand format à Paris (60×60, 120×60) : préparation chape, adhésif, joints minces. Prix au m² et artisan carreleur 2025.',
}

export default function ArticleCarrelageGrandFormat() {
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
            Carrelage Grand Format Paris : pose 60x60, 120x60 &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le carrelage grand format s&apos;impose dans les salles de bain et séjours parisiens rénovés : moins de joints, lignes épurées, effet premium. Mais sa pose exige une préparation du support irréprochable. Guide complet des techniques, matériaux et prix 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Avantages grands formats */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Pourquoi choisir le grand format ? Avantages et formats disponibles
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le grand format désigne généralement tout carreau dont au moins une dimension dépasse 60 cm. Les formats les plus courants en rénovation parisienne sont le 60×60, le 120×60, le 90×90 et les dalles 120×120. Chaque format répond à des enjeux esthétiques et techniques différents.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              L&apos;attrait principal du grand format est esthétique : moins de joints signifie un sol ou un mur plus uni, plus facile à entretenir, avec un effet visuel d&apos;agrandissement de l&apos;espace. Dans les appartements parisiens de taille modeste, un carrelage 90×90 ou 120×60 posé en diagonale peut transformer radicalement la perception de la pièce.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Format 60×60 — Le standard premium',
                  detail: 'Format de référence du grand format, le 60×60 est le plus accessible techniquement et financièrement. Posable par la plupart des carreleurs expérimentés, il convient aux salles de bain, cuisines et couloirs. Résistance au décollement comparable aux formats classiques sur support bien préparé. Joint recommandé : 2 mm minimum.',
                },
                {
                  enjeu: 'Format 120×60 — L\'effet dalle contemporaine',
                  detail: 'Le 120×60 donne un aspect dalle monolithique très apprécié dans les salles de bain et séjours contemporains. Sa pose nécessite des ventouses de manipulation, un adhésif bi-encollé (support + carreau) et un carreleur habitué aux grands formats. Le défi : maintenir la planéité sur une telle longueur. Joint recommandé : 1,5 à 2 mm.',
                },
                {
                  enjeu: 'Format 120×120 et plus — Le très grand format',
                  detail: 'Réservé aux grandes surfaces (séjour, entrée spacieuse), le 120×120 et les formats jusqu\'à 160×320 cm exigent une logistique de pose importante : portique de manipulation, adhésif à haute performance, support parfaitement nivelé au laser. Réservez ce choix aux artisans spécialisés en grand format.',
                },
                {
                  enjeu: 'Grès cérame rectifié — Le matériau de référence',
                  detail: 'La quasi-totalité des grands formats est en grès cérame rectifié (bords rectifiés à la meule pour une précision dimensionnelle inférieure à 0,5 mm). Cette précision permet des joints très minces (1–2 mm), renforçant l\'effet monolithique. Les versions "lappato" (mi-poli) et "mat" sont les plus prisées à Paris.',
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

      {/* Section 2 — Préparation du support */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Préparation du support : l&apos;étape clé du grand format
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La planéité du support est la condition sine qua non de la pose d&apos;un carrelage grand format. Un carreau de 120×60 posé sur une surface irrégulière va basculer sur les points hauts, créer des angles vifs dangereux et, à terme, se décoller. Les normes DTU 52.1 fixent une tolérance de 5 mm sous une règle de 2 m — les professionnels recommandent de viser moins de 3 mm pour le grand format.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Ragréage autonivelant',
                solution: 'Solution la plus courante pour corriger une chape existante irrégulière. Le produit autonivelant se répand sur la surface et s\'auto-nivelle par gravité. Idéal pour des différences de niveau inférieures à 20 mm. Séchage 24–48h avant pose du carrelage. Indispensable dans les appartements parisiens anciens.',
                cout: '15 – 30 €/m²',
              },
              {
                titre: 'Chape fluide (anhydrite ou ciment)',
                solution: 'Pour les écarts de niveau importants ou les surfaces neuves, une chape fluide coulée offre une planéité optimale. La chape anhydrite est particulièrement plane et résistante, mais nécessite un primaire spécifique avant pose du carrelage. Délai de séchage : 1 mm/jour (minimum 28 jours pour 30 mm).',
                cout: '25 – 45 €/m²',
              },
              {
                titre: 'Contrôle au laser de nivellement',
                solution: 'Un artisan sérieux contrôle la planéité au laser avant de poser le premier carreau. Ce contrôle permet d\'identifier les zones à rattraper et de définir le plan de pose optimal (point le plus haut = point de départ). Étape non négociable pour les formats supérieurs à 60×60.',
                cout: 'Inclus dans la pose',
              },
              {
                titre: 'Désolidarisation sur plancher bois',
                solution: 'Dans les appartements haussmanniens avec planchers en bois, la pose directe est déconseillée. Le plancher travaille selon les variations hygrométriques et transmet ses mouvements au carrelage. Solution : natte de désolidarisation (Schlüter Ditra ou équivalent) + adhésif souple adapté.',
                cout: '8 – 18 €/m²',
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

      {/* Section 3 — Adhésifs et techniques de pose */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Adhésifs et techniques de pose pour carrelage grand format
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le choix de l&apos;adhésif et de la technique de pose conditionne la durabilité du carrelage grand format. Un adhésif standard suffit pour les formats classiques, mais les grands carreaux exigent des produits à haute déformabilité et un encollage bi-face pour garantir un taux de couverture supérieur à 85%.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Adhésif C2TE — Le minimum requis',
                prix: '12 – 20 €/m²',
                detail: 'Mortier-colle ciment de classe C2TE (haute adhérence, glissement réduit, temps ouvert étendu). Le "T" est essentiel pour le grand format : il évite le glissement du carreau pendant la pose. Le temps ouvert allongé (au moins 30 min) laisse le temps de positionner et ajuster les grands carreaux.',
              },
              {
                type: 'Adhésif S2 — Pour les supports déformables',
                prix: '18 – 30 €/m²',
                detail: 'Mortier-colle hautement déformable (classe S2), indispensable sur plancher bois ou support chauffant. Sa flexibilité absorbe les légers mouvements du support sans transmettre les contraintes au carreau. Obligatoire sur plancher chauffant et très recommandé pour les formats supérieurs à 90 cm.',
              },
              {
                type: 'Double encollage (bi-encollage)',
                prix: 'Inclus dans la main d\'œuvre',
                detail: 'Technique consistant à encoller à la fois le support et le dos du carreau. Obligatoire pour les formats supérieurs à 60×60 selon le DTU 52.1. Le bi-encollage garantit un taux de couverture optimal et élimine les vides d\'air sous le carreau, source de rupture sous charge ponctuelle.',
              },
              {
                type: 'Joints minces et coulis époxy',
                prix: '5 – 12 €/m²',
                detail: 'Le carrelage rectifié grand format s\'associe à des joints de 1,5 à 2 mm minimum. Un joint trop fin (moins de 1 mm) augmente les risques d\'éclatement en angle. Le coulis époxy (ou époxyde) offre une étanchéité parfaite et une résistance aux taches supérieure au coulis ciment — idéal pour les sols de cuisine et salle de bain.',
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

      {/* Section 4 — Difficultés et pièges */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Difficultés spécifiques au grand format : poids, casse et manutention
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le grand format n&apos;est pas qu&apos;une question d&apos;adhésif et de planéité. La logistique de chantier est plus contraignante : un carreau de 120×60 en grès cérame 10 mm pèse entre 18 et 25 kg. Dans un appartement parisien au 5e étage sans ascenseur, la montée des matériaux représente un poste de coût non négligeable.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                enjeu: 'Poids et manutention',
                detail: 'Les carreaux supérieurs à 90×90 cm nécessitent deux poseurs pour la manipulation. Des ventouses de levage professionnelles sont indispensables pour positionner les dalles sans risquer de les briser. Prévoyez un surcoût de montée de charges si votre immeuble n\'a pas d\'ascenseur.',
              },
              {
                enjeu: 'Taux de casse élevé',
                detail: 'Les grands carreaux sont fragiles aux angles et aux chocs de transport. Prévoyez systématiquement 10 à 15% de surcouverture sur la surface à carreler (contre 5 à 7% pour un format classique). La découpe des bords nécessite une scie à eau de haute précision pour éviter l\'éclatement.',
              },
              {
                enjeu: 'Planification des joints de dilatation',
                detail: 'Les grands formats amplifiaient les contraintes liées à la dilatation thermique. Des joints de fractionnement (bande souple au coulis acrylique) sont obligatoires tous les 25 à 40 m² en sol intérieur, et en encadrement de chaque ouverture de porte. Leur absence provoque le soulèvement ou la fissuration des carreaux.',
              },
              {
                enjeu: 'Accès aux appartements parisiens',
                detail: 'Couloirs d\'immeuble étroits, cages d\'escalier à angles vifs, portes palières standards de 80 cm : dans de nombreux immeubles parisiens, les carreaux de 120×60 ou plus ne passent pas debout. L\'artisan doit parfois couper des carreaux en deux avant de les monter, puis les recoller in situ avec une résine époxy structurale.',
              },
            ].map((el) => (
              <div key={el.enjeu} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.enjeu}</div>
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
            Prix du carrelage grand format à Paris en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Tarifs main d&apos;œuvre pose uniquement (hors fourniture des carreaux et hors préparation du support).
          </p>

          {/* Price table as styled divs */}
          <div className="rounded-lg overflow-hidden border border-gray-200 mb-8">
            <div className="grid grid-cols-3 bg-[#1C1C1C] text-white px-4 py-3">
              <div className="text-xs font-light uppercase tracking-wider">Format</div>
              <div className="text-xs font-light uppercase tracking-wider text-center">Complexité</div>
              <div className="text-xs font-light uppercase tracking-wider text-center">Prix pose / m²</div>
            </div>
            {[
              { format: '30×60 (transition)', complexite: 'Standard', prix: '25 – 40 €/m²' },
              { format: '60×60', complexite: 'Modérée', prix: '35 – 55 €/m²' },
              { format: '60×90', complexite: 'Élevée', prix: '45 – 65 €/m²' },
              { format: '120×60', complexite: 'Élevée', prix: '55 – 75 €/m²' },
              { format: '90×90', complexite: 'Élevée', prix: '55 – 80 €/m²' },
              { format: '120×120', complexite: 'Très élevée', prix: '70 – 90 €/m²' },
              { format: '160×80 et plus', complexite: 'Très élevée', prix: 'Sur devis' },
            ].map((row, i) => (
              <div key={row.format} className={`grid grid-cols-3 px-4 py-3 border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}`}>
                <div className="text-sm text-[#1C1C1C] font-medium">{row.format}</div>
                <div className="text-sm text-gray-600 font-light text-center">{row.complexite}</div>
                <div className="text-sm text-[#B8960C] font-medium text-center">{row.prix}</div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils pour maîtriser le budget
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Prévoir systématiquement 10 à 15% de carreaux supplémentaires pour la casse et les coupes',
                'Intégrer la préparation du support dans le budget global — c\'est souvent le poste le plus sous-estimé',
                'Comparer les devis sur la base du prix tout compris (main d\'œuvre + adhésif + coulis + joints) et non pose seule',
                'Choisir un format adapté à la surface : un 120×60 dans une salle de bain de 5 m² donne peu de coupes entières',
                'Vérifier la compatibilité du plancher avec le poids du grand format avant de commander les carreaux',
                'Prévoir les joints de fractionnement dès la conception — les ajouter après coup est coûteux',
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
              { href: '/carrelage-paris', title: 'Carrelage Paris' },
              { href: '/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain Paris' },
              { href: '/blog/renovation-cuisine-paris', title: 'Rénovation cuisine Paris' },
              { href: '/blog/renovation-cave-parking-paris', title: 'Rénovation cave et parking Paris' },
              { href: '/blog/sol-appartement-paris', title: 'Choix du sol à Paris' },
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
              { href: '/renovation-paris-10e', label: 'Paris 10e' },
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-paris-12e', label: 'Paris 12e' },
              { href: '/renovation-paris-15e', label: 'Paris 15e' },
              { href: '/renovation-levallois-perret', label: 'Levallois' },
              { href: '/renovation-vincennes', label: 'Vincennes' },
              { href: '/renovation-saint-ouen', label: 'Saint-Ouen' },
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
          Diagnostic gratuit. Devis détaillé sous 48h. Artisan carreleur spécialisé grand format.
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
