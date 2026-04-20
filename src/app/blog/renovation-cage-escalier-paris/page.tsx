import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Cage d\'Escalier Paris', item: 'https://espacedesignparis.fr/blog/renovation-cage-escalier-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Cage d\'Escalier Paris : peinture, carrelage & prix 2025 | Espace Design',
  description: 'Rénover la cage d\'escalier d\'un immeuble parisien : peinture, sol, éclairage, autorisations copropriété. Prix et guide artisan 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-cage-escalier-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Faut-il un vote en assemblée générale pour rénover la cage d\'escalier ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, dans la grande majorité des cas. Les travaux sur les parties communes (cage d\'escalier, couloirs, hall d\'entrée) nécessitent un vote en AG. Pour les travaux d\'entretien courants (peinture de rafraîchissement à l\'identique), une majorité simple (article 24) suffit. Pour des travaux plus importants modifiant l\'aspect ou les matériaux (changement de carrelage, réfection complète), une majorité absolue (article 25) est généralement requise. Le syndic doit inscrire le point à l\'ordre du jour et présenter au moins 3 devis.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation de cage d\'escalier à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le prix varie selon l\'ampleur des travaux et le nombre d\'étages. Pour un immeuble parisien de 5 étages : peinture seule entre 2 000 et 6 000 €, remplacement du carrelage de 4 000 à 12 000 €, réfection complète (peinture + sol + éclairage) de 8 000 à 20 000 €. Ces prix sont partagés entre les copropriétaires selon les tantièmes de chacun.',
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on rénover sa cage d\'escalier sans accord de la copropriété ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Non, sauf pour des interventions ponctuelles de nettoyage ou de petites réparations. La cage d\'escalier est une partie commune : aucun copropriétaire ne peut y réaliser des travaux de façon unilatérale. Même une simple pose de papier peint ou de peinture d\'une couleur différente de l\'existant doit être soumise au vote. Agir sans autorisation expose à une obligation de remise en état aux frais du contrevenant.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Cage d\'Escalier Paris : peinture, carrelage & prix 2025 | Espace Design',
  description: 'Rénover la cage d\'escalier d\'un immeuble parisien : peinture, sol, éclairage, autorisations copropriété. Prix et guide artisan 2025.',
}

export default function ArticleRenovationCageEscalier() {
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
              <li className="text-gray-400">Cage d&apos;escalier</li>
            </ol>
          </nav>
          <p className="text-[#D4AF37] text-[10px] font-light uppercase tracking-[0.25em] mb-4">
            Aménagement
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Cage d&apos;Escalier Paris : peinture, carrelage &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            La cage d&apos;escalier est la première impression que les visiteurs ont d&apos;un immeuble parisien. Souvent négligée faute d&apos;accord entre copropriétaires, elle peut pourtant être rénovée efficacement avec les bonnes démarches : vote en AG, choix des artisans, peinture, carrelage et éclairage LED. Guide complet et prix 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Copropriété et démarches */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Copropriété : démarches et autorisations obligatoires
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              La cage d&apos;escalier étant une partie commune de l&apos;immeuble, toute rénovation doit impérativement être votée en assemblée générale des copropriétaires (AG). Le syndic est chargé de l&apos;inscription du point à l&apos;ordre du jour et de la mise en concurrence des artisans. En règle générale, au moins 3 devis doivent être présentés aux copropriétaires avant le vote.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Le régime de majorité applicable dépend de la nature des travaux. Mieux vaut bien le connaître avant l&apos;AG pour éviter de mauvaises surprises le jour du vote.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Travaux d\'entretien courant — Majorité article 24',
                  detail: 'Peinture de rafraîchissement à l\'identique (même couleur, même finition), nettoyage des murs ou des sols. Ces travaux ne modifient pas l\'aspect général de la cage d\'escalier : une majorité simple suffit (plus de 50 % des voix des copropriétaires présents ou représentés).',
                },
                {
                  enjeu: 'Travaux modificatifs — Majorité article 25',
                  detail: 'Changement de couleur de peinture, remplacement du revêtement de sol (carrelage par un autre type), installation d\'un nouvel éclairage modifiant l\'aspect des parties communes. Ces travaux nécessitent la majorité absolue (plus de 50 % des voix de TOUS les copropriétaires, présents ou non).',
                },
                {
                  enjeu: 'Rôle du syndic et du gestionnaire',
                  detail: 'Le syndic coordonne l\'ensemble du processus : convocation AG, recueil des devis, notification du vote, sélection de l\'artisan et suivi du chantier. Il est l\'interlocuteur principal. En pratique, il vaut mieux contacter le syndic en amont pour lui proposer des artisans qualifiés susceptibles d\'être retenus.',
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

      {/* Section 2 — Peinture */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Peinture cage d&apos;escalier : techniques et finitions
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La peinture est le poste de travaux le plus fréquent dans les cages d&apos;escalier parisiennes. Elle redonne immédiatement de la luminosité et de la propreté à l&apos;espace, pour un budget maîtrisé. Mais dans une cage d&apos;escalier, la préparation des surfaces est déterminante : fissures, décollements, traces d&apos;humidité ou plinthes abîmées doivent être traités avant toute application de peinture.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Préparation des surfaces',
                detail: 'Rebouchage des fissures, ponçage, application d\'un primaire d\'accrochage sur les surfaces friables. Dans les immeubles haussmanniens, les moulures et corniches doivent être nettoyées à la brosse avant la mise en peinture.',
                cout: 'Inclus dans le prix peinture',
              },
              {
                titre: 'Peinture mate ou satinée ?',
                detail: 'La finition mate est esthétiquement préférable (moins de reflets, cache les imperfections) mais la finition satinée ou satin doux est recommandée dans les cages d\'escalier car elle résiste mieux au frottement et aux traces de mains.',
                cout: '15 – 30 €/m²',
              },
              {
                titre: 'Couleurs recommandées pour les parties communes',
                detail: 'Les tons clairs (blanc cassé, gris perle, lin clair) agrandissent visuellement la cage et maximisent la réflexion de la lumière. Dans les immeubles haussmanniens, une teinte légèrement colorée sur les moulures apporte du caractère sans surcharger.',
                cout: 'Variable selon peinture',
              },
              {
                titre: 'Spécificités des immeubles parisiens',
                detail: 'Les cages d\'escalier haussmanniennes comportent souvent des moulures en plâtre, des corniches, des rambardes en fer forgé et des sols en pierres naturelles. Ces éléments requièrent des artisans expérimentés pour éviter les bavures et respecter le caractère du bâtiment.',
                cout: 'Supplément 20 – 40 %',
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

      {/* Section 3 — Sol et carrelage */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Revêtement de sol des parties communes : carrelage et options
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le sol de la cage d&apos;escalier subit un trafic important et doit allier résistance, sécurité (antidérapant) et esthétique. À Paris, les options varient selon le style de l&apos;immeuble et le budget de la copropriété.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Carrelage grès cérame',
                prix: '40 – 80 €/m² posé',
                detail: 'Solution la plus répandue pour les parties communes. Résistant, facile à entretenir, disponible en nombreux formats et couleurs. Choisir un carrelage classé R10 ou R11 (antidérapant) pour les escaliers. Format 30x30 ou 60x60 cm selon la taille des paliers.',
              },
              {
                type: 'Pierre naturelle (Burgundy, Comblanchien)',
                prix: '80 – 180 €/m² posé',
                detail: 'Option haut de gamme, cohérente avec l\'architecture haussmannienne. La pierre calcaire donne un aspect très élégant mais nécessite un traitement hydrofuge et un entretien régulier. Adaptée aux immeubles classés ou de standing.',
              },
              {
                type: 'Réfection des marches d\'escalier',
                prix: '60 – 150 €/marche',
                detail: 'Les marches abîmées ou ébréchées peuvent être réparées avec du mortier de réfection, recouvertes d\'un nez-de-marche en inox ou remplacées par des carreaux spéciaux. Chaque marche doit répondre aux normes de sécurité (hauteur max 18 cm, profondeur min 25 cm).',
              },
              {
                type: 'Plinthe et raccords',
                prix: '15 – 35 €/ml posé',
                detail: 'Les plinthes assurent la jonction propre entre le sol et le mur. Dans les parties communes, les plinthes en grès cérame ou en pierre assortie au sol sont préférables aux plinthes en PVC, plus fragiles en cas de trafic intense.',
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

      {/* Section 4 — Éclairage LED */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Éclairage LED : moderniser la cage d&apos;escalier et réduire les charges
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;éclairage des parties communes représente une part significative des charges de copropriété. Le remplacement des anciens luminaires par des LED avec détecteur de présence permet de réduire la consommation électrique de 70 à 80 %, tout en améliorant la sécurité et le confort. Ce poste est souvent le premier à déclencher l&apos;accord des copropriétaires car le retour sur investissement est rapide.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'LED avec détecteur de présence',
                detail: 'S\'allume automatiquement au passage et s\'éteint après un délai réglable (30 s à 5 min). Économie : 75 à 85 % vs ampoules classiques. Durée de vie : 25 000 à 50 000 heures.',
                cout: '80 – 200 € / niveau',
              },
              {
                titre: 'LED avec minuterie',
                detail: 'Solution plus simple et moins coûteuse. La lumière reste allumée un temps fixe après activation. Moins économique que le détecteur de présence mais suffisante dans les cages d\'escalier peu fréquentées.',
                cout: '50 – 120 € / niveau',
              },
              {
                titre: 'Éclairage de sécurité (BAES)',
                detail: 'Bloc autonome d\'éclairage de sécurité obligatoire dans les immeubles collectifs. S\'active automatiquement en cas de coupure de courant. Réglementation ERP (établissement recevant du public) pour les immeubles de grande hauteur (IGH).',
                cout: '150 – 300 € / bloc',
              },
              {
                titre: 'Éclairage décoratif de palier',
                detail: 'Appliques murales LED de design, luminaires suspendus dans les halls d\'entrée. Valorise l\'immeuble et crée une identité visuelle. Budget supplémentaire à prévoir pour les prises de courant ou alimentations dédiées.',
                cout: '200 – 600 € / palier',
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

      {/* Section 5 — Prix tableau */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix de rénovation d&apos;une cage d&apos;escalier à Paris en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les estimations ci-dessous concernent un immeuble parisien de 5 étages avec 5 paliers. Les prix incluent main d&apos;œuvre et fournitures.
          </p>

          {/* Price grid */}
          <div className="mb-8 space-y-2">
            <div className="grid grid-cols-3 bg-[#1C1C1C] text-white rounded-t-lg px-4 py-3 text-xs font-light uppercase tracking-wider">
              <div>Prestation</div>
              <div className="text-center">Prix unitaire</div>
              <div className="text-right">Total estimé</div>
            </div>
            {[
              { prestation: 'Peinture murs (rafraîchissement)', unite: '15 – 25 €/m²', total: '1 500 – 4 000 €' },
              { prestation: 'Peinture complète avec préparation', unite: '25 – 40 €/m²', total: '3 000 – 6 000 €' },
              { prestation: 'Carrelage sols paliers', unite: '40 – 80 €/m²', total: '2 000 – 6 000 €' },
              { prestation: 'Réfection marches escalier', unite: '60 – 150 €/marche', total: '1 500 – 5 000 €' },
              { prestation: 'Éclairage LED avec détecteurs', unite: '80 – 200 €/niveau', total: '400 – 1 200 €' },
              { prestation: 'Rénovation complète (peinture + sol + lumière)', unite: '—', total: '8 000 – 20 000 €' },
            ].map((row, i) => (
              <div
                key={row.prestation}
                className={`grid grid-cols-3 px-4 py-3 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'} border border-gray-100`}
              >
                <div className="text-[#1C1C1C] font-light">{row.prestation}</div>
                <div className="text-center text-[#B8960C] font-medium">{row.unite}</div>
                <div className="text-right text-gray-600 font-light">{row.total}</div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Points de vigilance avant de voter les travaux
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Exiger des artisans certifiés RGE ou qualifiés Qualibat pour les travaux importants',
                'Prévoir une retenue de garantie de 5 % pendant 12 mois après réception des travaux',
                'Vérifier que les artisans sont couverts par une assurance décennale et RC professionnelle',
                'Planifier les travaux hors vacances scolaires pour limiter la gêne des résidents',
                'Faire protéger les boîtes aux lettres, interphones et vitres avant le démarrage',
                'Demander un planning précis avec phasage par étage pour maintenir l\'accès permanent',
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
              { href: '/peinture-paris', title: 'Peinture Paris — artisan peintre' },
              { href: '/carrelage-paris', title: 'Carrelage Paris — pose et réfection' },
              { href: '/platrererie-paris', title: 'Plâtrerie Paris — enduits et doublage' },
              { href: '/blog/renovation-couloir-paris', title: 'Rénovation couloir Paris' },
              { href: '/blog/faux-plafond-paris', title: 'Faux plafond Paris — guide complet' },
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
          Rénovez la cage d&apos;escalier de votre immeuble à Paris
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Devis gratuit pour syndics et copropriétés. Peinture, carrelage, éclairage LED. Intervention sous 2 semaines.
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
