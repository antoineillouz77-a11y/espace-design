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

export const metadata: Metadata = {
  title: 'Aménagement Studio Paris : optimiser l\'espace & décoration 2025 | Espace Design',
  description:
    'Aménager un studio parisien de 15 à 35 m² : lit escamotable, mezzanine, mobilier sur-mesure, rangements. Idées et prix 2025.',
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Aménagement Studio Paris : optimiser l\'espace & décoration 2025',
  description:
    'Aménager un studio parisien de 15 à 35 m² : lit escamotable, mezzanine, mobilier sur-mesure, rangements. Idées et prix 2025.',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  datePublished: '2025-04-20',
  url: 'https://espacedesignparis.fr/blog/amenagement-studio-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel budget prévoir pour aménager un studio parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pour un studio de 20 m², comptez entre 8 000 € et 20 000 € selon le niveau de finition. Un lit escamotable sur-mesure représente 3 000 à 6 000 €, une mezzanine 4 000 à 9 000 €.',
      },
    },
    {
      '@type': 'Question',
      name: 'Faut-il une autorisation pour installer une mezzanine dans un studio parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pour une mezzanine de moins de 5 m² sans modification structurelle, aucune autorisation n\'est nécessaire. Au-delà, une déclaration préalable de travaux ou un permis de construire peut être requis. En copropriété, vérifiez le règlement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment agrandir visuellement un studio de 15 m² ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Peinture claire ou blanc cassé, miroirs grands formats, éclairage en plusieurs points, mobilier surélevé sur pieds, stores plutôt que rideaux lourds, et rangements intégrés du sol au plafond sont les techniques les plus efficaces.',
      },
    },
  ],
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

      {/* Hero article */}
      <section className="pt-28 sm:pt-36 pb-12 bg-[#1C1C1C]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">
            Studios
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Aménagement Studio Paris : optimiser l&apos;espace &amp; décoration 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Un studio parisien de 15 à 35 m² peut devenir un appartement fonctionnel, confortable et
            esthétique — à condition d&apos;en penser chaque centimètre. Lit escamotable, mezzanine,
            mobilier sur-mesure, rangements planchers-plafond : ce guide passe en revue les solutions
            les plus efficaces et leurs prix réels en 2025.
          </p>
        </div>
      </section>

      {/* Contenu article */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">

          {/* Section 1 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Diagnostic : les contraintes spécifiques d&apos;un studio parisien
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Avant de lancer les travaux, il faut accepter la réalité du studio parisien : faible
              hauteur sous plafond (2,30 à 2,50 m en moyenne dans les immeubles des années 60-70),
              fenêtres parfois petites, distribution peu flexible et règlement de copropriété
              contraignant. Ces paramètres conditionnent directement les solutions envisageables.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Dans un immeuble haussmannien, les plafonds atteignent souvent 2,70 à 3 m : la mezzanine
              devient réaliste. Dans un studio des années 70, à 2,35 m de hauteur, seul le mobilier
              compact et le lit escamotable sont viables. Mesurer avant de choisir, c&apos;est
              économiser des milliers d&apos;euros.
            </p>
            <div className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
              <p className="text-[#1C1C1C] text-sm font-medium mb-3">Hauteur sous plafond et solutions compatibles</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-gray-600 font-light">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 pr-4 text-[#1C1C1C] font-medium">Hauteur</th>
                      <th className="text-left py-2 pr-4 text-[#1C1C1C] font-medium">Solutions adaptées</th>
                      <th className="text-left py-2 text-[#1C1C1C] font-medium">À éviter</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="py-2 pr-4">&lt; 2,40 m</td>
                      <td className="py-2 pr-4">Lit escamotable, canapé-lit, mobilier bas</td>
                      <td className="py-2">Mezzanine</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">2,40 – 2,60 m</td>
                      <td className="py-2 pr-4">Lit escamotable, rangements plafond, bureau suspendu</td>
                      <td className="py-2">Mezzanine standard</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">&gt; 2,70 m</td>
                      <td className="py-2 pr-4">Mezzanine, lit en hauteur, bibliothèque sur-mesure</td>
                      <td className="py-2">Rien à éviter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Le lit escamotable : la solution reine du studio parisien
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Le lit escamotable — ou lit abattant — reste la transformation la plus radicale pour
              un studio. Le jour, il disparaît dans une armoire murale ; la nuit, il s&apos;abaisse
              en quelques secondes. Le gain de surface au sol est immédiat : un lit double
              (140 × 190 cm) libère 2,7 m² utilisables en journée.
            </p>
            <ul className="space-y-3 mb-5">
              {[
                {
                  title: 'Lit escamotable vertical simple',
                  detail: 'Le plus courant. Le matelas pivote à la verticale dans une caisse murale. Prix : 1 500 à 3 500 € en série, 3 000 à 6 000 € sur-mesure avec bibliothèques et bureau intégrés.',
                },
                {
                  title: 'Lit escamotable horizontal',
                  detail: 'Adapté aux plafonds bas. Le matelas bascule horizontalement. Moins encombrant en hauteur. Prix similaire au modèle vertical.',
                },
                {
                  title: 'Lit escamotable avec canapé',
                  detail: 'Le canapé reste en place quand le lit est abaissé — il pivote automatiquement. Idéal pour les studios où il faut préserver l\'espace salon. Budget : 4 000 à 8 000 €.',
                },
              ].map((item) => (
                <li key={item.title} className="bg-[#FAFAF8] rounded-lg p-4 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-1">{item.title}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{item.detail}</div>
                </li>
              ))}
            </ul>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Pour un résultat optimal, le lit escamotable est toujours intégré dans une composition
              sur-mesure incluant rangements, bureau repliant et parfois éclairage intégré. Un menuisier
              ou un cuisiniste spécialisé peut concevoir l&apos;ensemble en 3 à 4 semaines.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              La mezzanine : doubler la surface quand la hauteur le permet
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Dans un studio avec 2,70 m ou plus sous plafond, la mezzanine est la transformation la
              plus spectaculaire en termes de surface utilisable. Elle crée un espace nuit ou bureau
              suspendu sans empiéter sur la surface au sol.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              {[
                'Espace nuit en hauteur : 140 à 160 cm minimum sous la mezzanine pour circuler',
                'Bureau intégré sous la mezzanine : gain d\'1,5 à 2 m²',
                'Rangements escalier : chaque marche est un tiroir',
                'Garde-corps : obligatoire et décoratif (acier, bois, verre)',
                'Éclairage dédié : spots encastrés ou guirlandes',
                'Isolation acoustique entre niveaux si nécessaire',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                  <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le prix d&apos;une mezzanine en bois avec escalier et garde-corps varie entre 4 000 et
              9 000 € selon la surface et les matériaux. En métal industriel, comptez 6 000 à 12 000 €.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Attention : une mezzanine de plus de 5 m² nécessite une déclaration préalable de travaux.
              En copropriété, vérifiez le règlement avant de signer le devis — certains interdisent
              les modifications affectant la structure.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Rangements : du sol au plafond, pas un centimètre perdu
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Dans un studio parisien, le mobilier de rangement standard est un ennemi : il prend
              de la place sans en créer. L&apos;objectif est d&apos;utiliser toute la hauteur de la
              pièce, du plancher au plafond, et de libérer le maximum de surface au sol.
            </p>
            <ul className="space-y-3">
              {[
                {
                  flag: 'Bibliothèque plafond sur-mesure',
                  detail: 'Du sol au plafond, avec une bibliothèque escabeau. Gain : 2 à 4 m² de rangement vertical. Prix : 1 500 à 4 000 € selon la largeur.',
                },
                {
                  flag: 'Niches encastrées dans les cloisons',
                  detail: 'Dans les cloisons de distribution, des niches de 10 à 20 cm de profondeur remplacent des meubles. Idéales pour livres, hi-fi, objets de décoration.',
                },
                {
                  flag: 'Lit plateforme avec rangements intégrés',
                  detail: 'Le lit repose sur une plateforme avec tiroirs. Chaque tiroir remplace une armoire. Économique et efficace pour les petits budgets.',
                },
                {
                  flag: 'Couloir transformé en vestiaire',
                  detail: 'Le couloir d\'entrée, souvent négligé, peut accueillir une penderie sur-mesure de 30 à 40 cm de profondeur. Gain de rangements vêtements sans empiéter sur la pièce principale.',
                },
              ].map((item) => (
                <li key={item.flag} className="flex gap-3">
                  <span className="text-[#B8960C] font-medium flex-shrink-0 text-sm">→</span>
                  <div>
                    <span className="text-[#1C1C1C] text-sm font-medium">{item.flag} : </span>
                    <span className="text-gray-600 text-sm font-light">{item.detail}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Décoration : agrandir visuellement l&apos;espace
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              L&apos;aménagement résout les contraintes fonctionnelles. La décoration corrige les
              contraintes visuelles. Ces principes, appliqués méthodiquement, transforment la
              perception d&apos;un studio sans toucher aux murs.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Couleurs et revêtements
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Blanc cassé, beige chaud, gris clair — les teintes claires reflètent la lumière
                  naturelle et agrandissent visuellement la pièce. Peindre le plafond légèrement
                  plus clair que les murs donne une impression de hauteur supplémentaire.
                  Un mur d&apos;accent foncé peut créer de la profondeur sans alourdir.
                </p>
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Miroirs et lumière
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Un grand miroir pleine hauteur en face d&apos;une fenêtre double la luminosité
                  perçue. L&apos;éclairage en plusieurs points (spots plafond + lampadaire + éclairage
                  indirect) crée de la profondeur et évite l&apos;effet &quot;caverne&quot; d&apos;un
                  unique plafonnier central.
                </p>
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Mobilier sur pieds
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Le mobilier surélevé sur pieds — canapé, lit, commodes — laisse voir le sol et
                  crée une continuité visuelle. Effet immédiat sur la perception de la surface.
                  À l&apos;inverse, le mobilier posé au sol cloisonne visuellement la pièce.
                </p>
              </div>
            </div>
          </div>

          {/* Section 6 — Prix */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Budget aménagement studio Paris : les prix 2025
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Les prix indiqués sont des fourchettes basées sur des chantiers réalisés à Paris en
              2024-2025. Ils incluent la fourniture et la pose.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm font-light">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 text-[#1C1C1C] font-medium">Solution</th>
                    <th className="text-left py-2 pr-4 text-[#1C1C1C] font-medium">Budget bas</th>
                    <th className="text-left py-2 text-[#1C1C1C] font-medium">Budget haut</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-600">
                  <tr>
                    <td className="py-2.5 pr-4">Lit escamotable (série)</td>
                    <td className="py-2.5 pr-4">1 500 €</td>
                    <td className="py-2.5">3 500 €</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4">Lit escamotable (sur-mesure + bureau)</td>
                    <td className="py-2.5 pr-4">3 000 €</td>
                    <td className="py-2.5">7 000 €</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4">Mezzanine bois</td>
                    <td className="py-2.5 pr-4">4 000 €</td>
                    <td className="py-2.5">9 000 €</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4">Mezzanine métal</td>
                    <td className="py-2.5 pr-4">6 000 €</td>
                    <td className="py-2.5">12 000 €</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4">Bibliothèque plafond sur-mesure</td>
                    <td className="py-2.5 pr-4">1 500 €</td>
                    <td className="py-2.5">4 000 €</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4">Rénovation complète studio 20 m²</td>
                    <td className="py-2.5 pr-4">8 000 €</td>
                    <td className="py-2.5">20 000 €</td>
                  </tr>
                </tbody>
              </table>
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
              { href: '/blog/prix-renovation-appartement-paris', title: 'Prix d\'une rénovation à Paris en 2025' },
              { href: '/blog/choisir-artisan-renovation-paris', title: 'Comment choisir son artisan rénovateur' },
              { href: '/blog/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain à Paris' },
              { href: '/renovation-appartement-paris', title: 'Rénovation appartement Paris — Espace Design' },
              { href: '/contact', title: 'Devis gratuit pour votre studio' },
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
              { href: '/renovation-paris-6e', label: '6e' },
              { href: '/renovation-paris-7e', label: '7e' },
              { href: '/renovation-paris-8e', label: '8e' },
              { href: '/renovation-paris-15e', label: '15e' },
              { href: '/renovation-paris-16e', label: '16e' },
              { href: '/renovation-paris-17e', label: '17e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
              { href: '/renovation-levallois-perret', label: 'Levallois-Perret' },
              { href: '/renovation-versailles', label: 'Versailles' },
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
          Vous aménagez un studio à Paris ?
        </h2>
        <p className="text-gray-400 text-sm font-light mb-8">
          Devis gratuit et détaillé sous 48h. Déplacement sans engagement.
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
