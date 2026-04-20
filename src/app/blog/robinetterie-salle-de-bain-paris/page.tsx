import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Robinetterie Salle de Bain Paris', item: 'https://espacedesignparis.fr/blog/robinetterie-salle-de-bain-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Robinetterie Salle de Bain Paris : choix, pose & prix 2025 | Espace Design',
  description: 'Choisir et poser sa robinetterie de salle de bain à Paris : mitigeur, thermostat, douche, baignoire. Prix, marques, artisan plombier 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/robinetterie-salle-de-bain-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix de remplacement d\'un mitigeur de salle de bain à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le remplacement d\'un mitigeur de lavabo à Paris coûte en moyenne entre 150 et 400 €, main d\'œuvre et robinetterie incluses. Pour un mitigeur d\'entrée de gamme (80-150 €) + pose (80-150 €) : 160 à 300 €. Pour un mitigeur de marque (Hansgrohe, Grohe, Roca) à 150-400 € + pose : 230 à 550 €. Pour un mitigeur thermostatique haut de gamme : 600 à 1 500 € tout compris.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pourquoi la robinetterie parisienne se détarttre-t-elle si vite ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'L\'eau parisienne est particulièrement calcaire (dureté entre 25 et 35 °f — degrés français — selon les arrondissements). Ce calcaire se dépose sur les aérateurs, les flexibles, les cartouches et l\'intérieur des robinets, réduisant le débit et abîmant les joints. Solutions : détartrage régulier au vinaigre blanc, installation d\'un adoucisseur d\'eau ou d\'un filtre anti-calcaire en entrée de colonne. Les robinets en laiton massif et les finitions PVD résistent mieux au calcaire que le chrome classique.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mitigeur thermostatique ou mitigeur classique : que choisir pour une douche à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le mitigeur thermostatique maintient une température constante même si quelqu\'un tire de l\'eau ailleurs dans l\'appartement (chasse d\'eau, lave-linge). C\'est un vrai confort dans les immeubles parisiens où les variations de pression sont fréquentes. Il se programme une fois et protège contre les brûlures (idéal avec des enfants). Inconvénient : plus cher à l\'achat (200 à 600 €) et à la pose. Le mitigeur classique est suffisant pour une salle de bain peu fréquentée ou si les variations de pression sont limitées.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Robinetterie Salle de Bain Paris : choix, pose & prix 2025 | Espace Design',
  description: 'Choisir et poser sa robinetterie de salle de bain à Paris : mitigeur, thermostat, douche, baignoire. Prix, marques, artisan plombier 2025.',
}

export default function ArticleRobinetterieSalleDeBain() {
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
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-[11px] text-gray-500 font-light">
              <li><Link href="/" className="hover:text-[#D4AF37] transition-colors">Accueil</Link></li>
              <li className="text-gray-600">/</li>
              <li><Link href="/blog" className="hover:text-[#D4AF37] transition-colors">Blog</Link></li>
              <li className="text-gray-600">/</li>
              <li className="text-gray-400">Robinetterie salle de bain</li>
            </ol>
          </nav>
          <p className="text-[#D4AF37] text-[10px] font-light uppercase tracking-[0.25em] mb-4">
            Salle de bain
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Robinetterie Salle de Bain Paris : choix, pose &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Choisir sa robinetterie de salle de bain à Paris, c&apos;est arbitrer entre esthétique, durabilité et budget — tout en tenant compte de la dureté de l&apos;eau parisienne, particulièrement agressive pour les cartouches et les finitions chromées. Guide complet : types, matériaux, marques, prix et conseils de pose pour 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Types de robinetterie */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Types de robinetterie salle de bain : mitigeur, thermostatique, monotrou
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le marché de la robinetterie offre une variété de configurations adaptées à chaque installation. Avant de choisir, il faut impérativement vérifier le nombre de trous disponibles sur le meuble vasque ou la baignoire, la distance entre les trous (entraxe), et la pression de l&apos;eau dans l&apos;appartement.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Mitigeur monotrou (le plus courant)',
                  detail: 'Un seul orifice dans le plan de travail ou le lavabo. Commande eau chaude et froide par un levier unique. Solution universelle, large choix de designs, entretien facile. Idéal pour les meubles de salle de bain standard. Cartouche à remplacer tous les 10 à 15 ans.',
                },
                {
                  enjeu: 'Robinetterie 3 trous (ponte ou col de cygne)',
                  detail: 'Deux poignées séparées (eau chaude et froide) et un bec central. Style rétro ou classique très adapté aux salles de bain haussmanniennes. Entraxe standard 150 mm ou 200 mm. Robinets en laiton massif chromé ou doré pour un rendu authentique.',
                },
                {
                  enjeu: 'Mitigeur thermostatique (douche ou bain)',
                  detail: 'Régulation de la température indépendante du débit. Idéal dans les immeubles parisiens où les fluctuations de pression sont fréquentes. Protection anti-brûlure (blocage à 38°C). Durée de vie : 20 à 25 ans si l\'eau est adoucie. Investissement rentabilisé en économies d\'eau (moins de réglage au démarrage).',
                },
                {
                  enjeu: 'Robinetterie à encastrer (douche)',
                  detail: 'Corps de robinet intégré dans le mur (corps encastrable), seule la façade est visible. Esthétique épurée et contemporaine, très tendance dans les salles de bain rénovées. Nécessite une plomberie spécifique lors du chantier. Entretien plus complexe en cas de panne (accès par panneau de visite).',
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

      {/* Section 2 — Matériaux et finitions */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Matériaux et finitions : chrome, laiton, mat noir, doré
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La finition de la robinetterie impacte autant le rendu esthétique que la résistance dans le temps, notamment face au calcaire parisien. Voici les principales options disponibles en 2025.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Chrome brillant',
                detail: 'La finition classique et la plus économique. Facile à nettoyer, très disponible. Inconvénient : les traces d\'eau et de calcaire sont très visibles. À préférer avec un filtre anti-calcaire en amont.',
                cout: '80 – 300 €',
              },
              {
                titre: 'Laiton brossé ou mat',
                detail: 'Tendance déco forte en 2025. Aspect chaleureux et intemporel. Le laiton naturel se patine avec le temps (aspect bronze). Le laiton brossé PVD est plus stable et résiste mieux au calcaire et aux produits ménagers.',
                cout: '200 – 800 €',
              },
              {
                titre: 'Noir mat',
                detail: 'Très tendance dans les salles de bain contemporaines et industrielles. Finition PVD (dépôt physique en phase vapeur) : très résistante aux rayures et au calcaire. À associer à des joints noirs et des accessoires assortis pour un résultat cohérent.',
                cout: '250 – 1 000 €',
              },
              {
                titre: 'Or brossé ou doré',
                detail: 'Style luxueux, très adapté aux appartements haussmanniens rénovés avec goût. Finition PVD garantie 10 à 20 ans selon les marques. Éviter les finitions dorées bas de gamme (placage superficiel qui s\'écaille rapidement). Marques recommandées : Hansgrohe Axor, Grohe Atrio, Villeroy & Boch.',
                cout: '400 – 1 500 €',
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

      {/* Section 3 — Eau parisienne */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            L&apos;eau parisienne et le calcaire : protéger sa robinetterie
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;eau distribuée à Paris est d&apos;une dureté élevée (entre 25 et 35 degrés français selon les zones). Ce calcaire se dépose progressivement dans les cartouches, les aérateurs et les flexibles, réduisant le débit et abîmant les joints internes. Quelques solutions préventives permettent de doubler la durée de vie de la robinetterie.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Adoucisseur d\'eau individuel',
                prix: '800 – 1 500 €',
                detail: 'Élimine quasi totalement le calcaire de tout le circuit d\'eau de l\'appartement. Installation sous l\'évier ou dans un placard technique. Sel à rajouter tous les 1 à 3 mois selon la consommation. Solution idéale pour les appartements parisiens anciens avec vieilles canalisations.',
              },
              {
                type: 'Filtre anti-calcaire à polyphosphate',
                prix: '80 – 200 €',
                detail: 'Filtre compact installé en entrée de colonne ou sous l\'évier. Réduit le dépôt de tartre sans supprimer totalement la dureté. Cartouche à remplacer annuellement. Moins efficace qu\'un adoucisseur mais bien plus économique à l\'installation.',
              },
              {
                type: 'Détartrage régulier de la robinetterie',
                prix: 'Gratuit ou 50 – 100 €',
                detail: 'Démontage et trempage des aérateurs dans du vinaigre blanc dilué. À faire tous les 6 à 12 mois à Paris. Les cartouches de mitigeur doivent être vérifiées tous les 5 ans. Un remplacement de cartouche coûte 30 à 80 € (pièce + pose) et évite le remplacement total du robinet.',
              },
              {
                type: 'Choisir des robinets adaptés à l\'eau dure',
                prix: 'Inclus dans le choix',
                detail: 'Préférer les cartouches céramique (plus résistantes que les cartouches caoutchouc), les corps en laiton massif (non poreux), et les finitions PVD (résistantes aux produits détartrants). Marques adaptées à l\'eau parisienne : Grohe, Hansgrohe, Ideal Standard, Roca.',
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

      {/* Section 4 — Pose plombier */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Pose par un artisan plombier : ce qui est inclus
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le remplacement d&apos;une robinetterie peut sembler simple mais nécessite plusieurs compétences : couper l&apos;eau, déposer l&apos;ancien robinet, adapter les raccords si les normes ont changé, tester l&apos;étanchéité et s&apos;assurer de la compatibilité avec le meuble ou la paroi. Un artisan qualifié sécurise l&apos;intervention et garantit l&apos;étanchéité.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Coupure d\'eau et dépose de l\'ancien robinet',
                detail: 'Fermeture du robinet d\'arrêt sectionneur (sous l\'évier ou en colonne), dépressurisation, dépose de l\'ancienne robinetterie. Si les vannes d\'arrêt sont vétustes ou coincées (très fréquent dans les appartements parisiens anciens), un remplacement des vannes est souvent nécessaire.',
                cout: '50 – 120 € (pose seule)',
              },
              {
                titre: 'Pose et raccordement du nouveau robinet',
                detail: 'Fixation sur le meuble ou la paroi, raccordement sur les alimentation eau chaude et froide (flexibles de raccordement fournis ou non selon le robinet). Serrage aux couples recommandés pour éviter les fuites à terme. Mise en eau et vérification d\'étanchéité systématique.',
                cout: '80 – 200 € (pose seule)',
              },
              {
                titre: 'Remplacement des flexibles de raccordement',
                detail: 'Les flexibles vieillissent et sont la 1ère cause de dégâts des eaux en appartement parisien. Un remplacement préventif lors de chaque changement de robinetterie est fortement recommandé. Flexibles inox tressé : durée de vie 10 à 15 ans.',
                cout: '15 – 40 € / paire',
              },
              {
                titre: 'Test d\'étanchéité et mise en service',
                detail: 'Remise en eau progressive, vérification de l\'absence de fuite sur tous les raccords, réglage du débit de l\'aérateur, test de la régulation de température (thermostatique). L\'artisan doit signer un bon d\'intervention précisant les garanties.',
                cout: 'Inclus dans la pose',
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

      {/* Section 5 — Prix */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix robinetterie salle de bain à Paris en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous incluent la fourniture du robinet et la main d&apos;œuvre de pose pour un appartement parisien.
          </p>

          {/* Price grid */}
          <div className="mb-8 space-y-2">
            <div className="grid grid-cols-3 bg-[#1C1C1C] text-white rounded-t-lg px-4 py-3 text-xs font-light uppercase tracking-wider">
              <div>Prestation</div>
              <div className="text-center">Robinetterie seule</div>
              <div className="text-right">Tout compris posé</div>
            </div>
            {[
              { prestation: 'Mitigeur lavabo entrée de gamme', fourniture: '80 – 150 €', total: '160 – 300 €' },
              { prestation: 'Mitigeur lavabo milieu de gamme (Grohe, Hansgrohe)', fourniture: '150 – 350 €', total: '250 – 500 €' },
              { prestation: 'Mitigeur lavabo haut de gamme / design', fourniture: '300 – 800 €', total: '400 – 1 000 €' },
              { prestation: 'Mitigeur douche encastrable', fourniture: '200 – 600 €', total: '500 – 1 500 €' },
              { prestation: 'Mitigeur thermostatique douche', fourniture: '250 – 700 €', total: '450 – 1 200 €' },
              { prestation: 'Robinetterie baignoire (bec + mitigeur)', fourniture: '300 – 900 €', total: '500 – 1 500 €' },
            ].map((row, i) => (
              <div
                key={row.prestation}
                className={`grid grid-cols-3 px-4 py-3 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'} border border-gray-100`}
              >
                <div className="text-[#1C1C1C] font-light">{row.prestation}</div>
                <div className="text-center text-[#B8960C] font-medium">{row.fourniture}</div>
                <div className="text-right text-gray-600 font-light">{row.total}</div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils pour bien choisir sa robinetterie
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Vérifier l\'entraxe des orifices existants avant toute commande (standard 150 mm)',
                'Préférer les cartouches céramique aux cartouches O-ring pour la longévité',
                'Choisir une marque avec SAV en France pour les pièces détachées',
                'Ne pas oublier les flexibles de raccordement dans le budget (souvent non inclus)',
                'Coordonner la finition robinetterie avec les accessoires (porte-serviettes, miroir, sèche-serviettes)',
                'Prévoir un robinet d\'arrêt neuf si l\'appartement a plus de 20 ans',
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
              { href: '/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain Paris' },
              { href: '/plomberie-paris', title: 'Plomberie Paris — artisan plombier' },
              { href: '/blog/renovation-douche-italienne-paris', title: 'Douche à l\'italienne Paris' },
              { href: '/blog/carrelage-paris', title: 'Carrelage salle de bain Paris' },
              { href: '/blog/renovation-salle-de-bain-petit-budget', title: 'Rénovation salle de bain petit budget' },
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
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-9e', label: 'Paris 9e' },
              { href: '/renovation-paris-10e', label: 'Paris 10e' },
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
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
          Faites poser votre robinetterie par un artisan parisien
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Devis gratuit. Remplacement robinetterie sous 48h. Artisan plombier qualifié à Paris et Île-de-France.
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
