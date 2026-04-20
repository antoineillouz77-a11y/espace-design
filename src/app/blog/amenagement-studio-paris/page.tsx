import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Aménagement Studio Paris', item: 'https://espacedesignparis.fr/blog/amenagement-studio-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Aménagement Studio Paris : optimiser l'espace & décoration 2025",
  description: "Aménager un studio parisien de 15 à 35 m² : lit escamotable, cloisons coulissantes, mobilier sur-mesure, rangements. Idées et prix 2025.",
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/amenagement-studio-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Comment agrandir visuellement un studio parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour agrandir visuellement un studio : utilisez des miroirs grand format pour doubler la luminosité, optez pour une palette de couleurs claires (blanc, beige, gris clair), choisissez des meubles sur pieds qui dégagent le sol, installez des rideaux du sol au plafond pour hausser la pièce. Un lit mezzanine libère 12 à 15 m² supplémentaires de surface au sol, idéal pour les studios jusqu'à 25 m².",
      },
    },
    {
      '@type': 'Question',
      name: 'Lit escamotable ou mezzanine pour un studio parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour un studio de moins de 20 m² et hauteur sous plafond standard (2,50 m), le lit escamotable (1 500 à 3 000€) est préférable : il disparaît pendant la journée et transforme la chambre en salon. La mezzanine (2 500 à 5 000€) convient aux studios avec hauteur sous plafond supérieure à 2,80 m. Les deux solutions s'intègrent dans un aménagement sur-mesure pour maximiser le rangement.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quel budget pour aménager un studio parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'aménagement complet d'un studio parisien de 20 m² coûte entre 8 000 et 25 000 € selon les finitions. Budget minimal (IKEA + peinture) : 3 000-5 000€. Budget intermédiaire (mobilier semi sur-mesure + carrelage) : 8 000-15 000€. Budget haut de gamme (sur-mesure intégral) : 15 000-30 000€. Espace Design propose des solutions sur-mesure adaptées à tous les budgets.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Aménagement Studio Paris : optimiser l'espace & décoration 2025",
  description: "Aménager un studio parisien de 15 à 35 m² : lit escamotable, cloisons coulissantes, mobilier sur-mesure, rangements. Idées et prix 2025.",
}

export default function ArticleAmenagementStudio() {
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
            Studios
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Aménagement Studio Paris : optimiser l&apos;espace & décoration 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Aménager un studio parisien de 15 à 35 m² est un exercice d&apos;ingéniosité. Lit escamotable, mezzanine, mobilier sur-mesure, cloisons coulissantes : ce guide vous donne toutes les solutions pour transformer votre studio en un espace fonctionnel, confortable et esthétique.
          </p>
        </div>
      </section>

      {/* Section 1 — Principes */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les 5 principes pour optimiser un studio parisien
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Un studio bien aménagé est avant tout un studio bien pensé. Avant de choisir les meubles, définissez les zones fonctionnelles et les priorités selon votre usage quotidien.
            </p>
            <div className="space-y-4">
              {[
                {
                  principe: '1. Définir les zones fonctionnelles',
                  detail: 'Même dans 20 m², un studio doit avoir des zones distinctes : espace nuit (lit), espace vie (salon/bureau), espace cuisine (coin cuisine), espace rangement. La délimitation peut être visuelle (tapis, changement de revêtement) ou physique (rideau, cloison coulissante, meuble de séparation).',
                },
                {
                  principe: '2. Exploiter la hauteur sous plafond',
                  detail: 'Dans un studio parisien avec plafond à 2,60 m ou plus, la verticalité est votre alliée. Étagères du sol au plafond, lit mezzanine si la hauteur le permet (2,80 m minimum), rangements surélevés : exploiter le volume en hauteur double la surface de rangement disponible.',
                },
                {
                  principe: '3. Multiplexer les usages',
                  detail: 'Chaque meuble doit idéalement remplir deux fonctions : lit escamotable avec bureau intégré, banquette avec coffre, table escamotable murale, canapé convertible avec rangements. Le mobilier "transformable" est l\'outil clé du petit espace.',
                },
                {
                  principe: '4. Travailler avec la lumière',
                  detail: 'La lumière naturelle agrandit visuellement l\'espace. Évitez les rideaux épais, préférez des stores vénitiens ou des voilages. Ajoutez des miroirs face à la fenêtre pour réfléchir la lumière. En éclairage artificiel, multipliez les sources pour éviter l\'effet "pièce unique".',
                },
                {
                  principe: '5. Limiter les couleurs et les matières',
                  detail: 'Dans un petit espace, la cohérence visuelle crée une impression de calme et d\'espace. Limitez-vous à 2 ou 3 couleurs + 2 ou 3 matières (bois, blanc, béton, lin). Évitez les motifs chargés sur les murs et optez pour un revêtement de sol uniforme dans tout le studio.',
                },
              ].map((el) => (
                <div key={el.principe} className="bg-[#FAFAF8] rounded-lg p-4 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-1">{el.principe}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tableau budgets */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Budget aménagement studio parisien selon la surface
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1C1C1C] text-white">
                    <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Surface</th>
                    <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget minimal</th>
                    <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget intermédiaire</th>
                    <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Sur-mesure</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { surface: '15 – 18 m²', mini: '3 000 – 5 000 €', inter: '6 000 – 10 000 €', surmes: '12 000 – 18 000 €' },
                    { surface: '18 – 25 m²', mini: '4 000 – 7 000 €', inter: '8 000 – 15 000 €', surmes: '15 000 – 25 000 €' },
                    { surface: '25 – 35 m²', mini: '5 000 – 9 000 €', inter: '10 000 – 18 000 €', surmes: '18 000 – 35 000 €' },
                  ].map((row, i) => (
                    <tr key={row.surface} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                      <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.surface}</td>
                      <td className="px-4 py-3 text-center text-gray-600 font-light">{row.mini}</td>
                      <td className="px-4 py-3 text-center text-gray-600 font-light">{row.inter}</td>
                      <td className="px-4 py-3 text-center text-[#B8960C] font-light">{row.surmes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-xs font-light italic mt-3">
              Aménagement + mobilier + revêtements, hors travaux lourds (électricité, plomberie). Prix TTC Paris.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 — Solutions mobilier */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Lit escamotable, mezzanine, canapé convertible : quelle solution choisir ?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La zone nuit est la contrainte centrale de tout studio. Le choix entre lit escamotable, mezzanine et canapé convertible dépend de la hauteur sous plafond, de la surface disponible et de l&apos;usage.
          </p>
          <div className="space-y-5">
            <div>
              <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-3">
                Le lit escamotable (lit abattant ou lit Murphy)
              </h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                Le lit escamotable se replie dans un meuble mural et libère toute la surface au sol pendant la journée. Il se décline en version simple ou intégré dans un système complet : bureau rabattable, canapé, étagères, rangements. La surface récupérée est de 3 à 5 m² pour un lit double. Budget : 1 500 à 5 000 € selon la qualité et les éléments intégrés. Délai de fabrication sur-mesure : 3 à 6 semaines. Condition : plafond minimum 2,40 m.
              </p>
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-3">
                La mezzanine : gagner de la surface au sol
              </h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                La mezzanine est idéale dans les studios avec une hauteur sous plafond de 2,80 m ou plus — ce qui concerne de nombreux appartements parisiens anciens. Elle permet de placer le lit en hauteur et de libérer toute la surface au sol pour le bureau, le salon ou le dressing. Budget : 2 500 à 5 000 € pour une mezzanine avec escalier ou échelle. Si la surface créée dépasse 5 m², une déclaration préalable de travaux est requise.
              </p>
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-3">
                Le canapé convertible : solution économique
              </h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                Le canapé convertible reste la solution la plus économique et la plus simple à mettre en œuvre. Les modèles haut de gamme offrent un vrai confort de couchage avec matelas de qualité (12 à 16 cm d&apos;épaisseur). À réserver aux studios utilisés ponctuellement ou aux petits budgets. Choisissez un modèle de qualité (Dunlopillo, Tréca) pour un usage quotidien — budget 1 200 à 3 000 €.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Décoration */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Décoration d&apos;un studio parisien : les règles d&apos;or
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              La décoration d&apos;un studio doit amplifier l&apos;impression d&apos;espace tout en créant une atmosphère chaleureuse et personnelle. Voici les règles essentielles.
            </p>
            <ul className="space-y-3">
              {[
                {
                  regle: 'Le sol continu',
                  detail: 'Un revêtement de sol identique dans tout le studio (parquet, béton ciré, carrelage grand format) crée une continuité visuelle qui agrandit l\'espace. Évitez les ruptures de sol entre pièces.',
                },
                {
                  regle: 'Les murs clairs (pas forcément blancs)',
                  detail: 'Préférez un blanc cassé, un beige nude ou un gris clair légèrement chaud. Vous pouvez accentuer un seul mur avec une couleur plus soutenue (vert sauge, terracotta, bleu canard) pour créer un point focal sans écraser l\'espace.',
                },
                {
                  regle: 'Les miroirs stratégiquement placés',
                  detail: 'Un grand miroir (hauteur totale du mur) face à la fenêtre réfléchit la lumière naturelle et double visuellement la profondeur de la pièce. Misez sur un grand format impactant plutôt que plusieurs petits miroirs décoratifs.',
                },
                {
                  regle: 'Les textiles pour créer la chaleur',
                  detail: 'Un studio avec peu de meubles peut paraître froid. Compensez avec des textiles chaleureux : plaid, coussins, tapis épais. Le tapis délimite la zone salon — choisissez une taille généreuse (au moins 160×230 cm) pour éviter l\'effet "timbre-poste".',
                },
                {
                  regle: 'Le rangement caché',
                  detail: 'Optimisez les rangements cachés : coffre sous le lit, ottoman avec rangement, mobilier de cuisine avec tiroirs organisés, dressing derrière rideau ou porte coulissante. L\'objectif : tout ranger sans que ça se voit.',
                },
              ].map((item) => (
                <li key={item.regle} className="bg-[#FAFAF8] rounded-lg p-4 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-1">{item.regle}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{item.detail}</div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Ce qu&apos;Espace Design réalise pour votre studio
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Conception complète du plan d\'aménagement',
                'Mobilier sur-mesure fabriqué en atelier',
                'Mezzanine et lit escamotable intégrés',
                'Revêtements sols et murs (parquet, béton ciré, carrelage)',
                'Peinture et finitions — pose de rideaux et stores',
                'Coordination électricité, plomberie si nécessaire',
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

      {/* Voir aussi */}
      <section className="py-12 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Voir aussi</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/renovation-studio-paris', title: 'Rénovation studio Paris — Espace Design' },
              { href: '/amenagement-interieur-paris', title: 'Aménagement intérieur Paris' },
              { href: '/menuiserie-paris', title: 'Menuiserie Paris — mobilier sur-mesure' },
              { href: '/blog/renovation-studio-paris', title: 'Guide rénovation studio Paris' },
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
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Nos zones d&apos;intervention</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { href: '/renovation-paris-5e', label: 'Paris 5e' },
              { href: '/renovation-paris-6e', label: 'Paris 6e' },
              { href: '/renovation-paris-9e', label: 'Paris 9e' },
              { href: '/renovation-paris-10e', label: 'Paris 10e' },
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-paris-18e', label: 'Paris 18e' },
              { href: '/renovation-paris-19e', label: 'Paris 19e' },
              { href: '/renovation-paris-20e', label: 'Paris 20e' },
              { href: '/renovation-montreuil', label: 'Montreuil' },
              { href: '/renovation-vincennes', label: 'Vincennes' },
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
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
          Transformez votre studio parisien
        </h2>
        <p className="text-gray-400 text-sm font-light mb-8">
          Conception + aménagement sur-mesure. Devis gratuit sous 48h.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-7 py-3.5 rounded font-light text-sm tracking-wide hover:bg-[#c9a030] transition-colors"
          >
            Devis gratuit <ArrowRight size={13} />
          </Link>
          <a
            href="tel:+33611783867"
            className="flex items-center justify-center gap-2 border border-gray-600 text-gray-300 px-7 py-3.5 rounded font-light text-sm tracking-wide hover:border-white hover:text-white transition-colors"
          >
            <Phone size={14} />
            06 11 78 38 67
          </a>
        </div>
      </section>
    </>
  )
}
