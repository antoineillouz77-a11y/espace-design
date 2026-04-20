import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Cave Paris', item: 'https://espacedesignparis.fr/blog/renovation-cave-paris' },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Cave Paris : aménagement, humidité & prix 2025 | Espace Design',
  description:
    'Rénover sa cave à Paris : traitement humidité, isolation, aménagement bureau ou chambre. Prix, réglementation copropriété. Guide complet 2025.',
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Cave Paris : aménagement, humidité & prix 2025',
  description:
    'Rénover sa cave à Paris : traitement humidité, isolation, aménagement bureau ou chambre. Prix, réglementation copropriété. Guide complet 2025.',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  datePublished: '2025-04-20',
  url: 'https://espacedesignparis.fr/blog/renovation-cave-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Peut-on transformer une cave en chambre ou bureau à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Une cave peut être transformée en local à usage professionnel ou en espace de rangement aménagé. Pour en faire un espace habitable (chambre, bureau à vivre), la hauteur sous plafond doit être d\'au moins 2,20 m et une fenêtre doit apporter de la lumière naturelle. Un permis de construire ou une déclaration préalable de travaux est généralement nécessaire. En copropriété, l\'accord de l\'assemblée générale est requis.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quel budget pour rénover une cave à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Une rénovation de cave à Paris coûte entre 500 et 1 500 € / m² selon l\'état initial et l\'usage final. Pour une cave de 15 m² transformée en local rangement / atelier, comptez 8 000 à 15 000 €. Pour une transformation en espace bureau aménagé, le budget monte à 15 000 – 25 000 €.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment traiter l\'humidité dans une cave parisienne ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le traitement de l\'humidité dans une cave passe par trois étapes : diagnostic (condensation, remontée capillaire ou infiltration), traitement de la source (injection de résine, drainage, enduit d\'étanchéité), puis isolation et ventilation adaptée. Le coût varie de 2 000 à 8 000 € selon la surface et la cause.',
      },
    },
  ],
}

export default function ArticleRenovationCave() {
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
            Guides
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Cave Paris : aménagement, humidité &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            À Paris, une cave représente souvent 10 à 30 m² inutilisés faute d&apos;aménagement.
            Humidité, obscurité, accès difficile : les obstacles sont réels mais surmontables.
            Ce guide détaille les étapes d&apos;une rénovation de cave réussie — du traitement
            de l&apos;humidité à l&apos;aménagement en bureau ou atelier — avec les prix pratiqués
            en 2025 et les points de réglementation à connaître en copropriété.
          </p>
        </div>
      </section>

      {/* Contenu article */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">

          {/* Section 1 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Diagnostic : les quatre problèmes typiques d&apos;une cave parisienne
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Avant d&apos;envisager l&apos;aménagement, il faut identifier les pathologies existantes.
              Une cave parisienne cumule souvent plusieurs problèmes qui, s&apos;ils ne sont pas
              traités en amont, rendront tout aménagement inutilisable à court terme.
            </p>
            <ul className="space-y-3">
              {[
                {
                  title: "L'humidité par remontée capillaire",
                  detail: "Le sol absorbe l'eau de la nappe phréatique ou du terrain. Les murs présentent des auréoles en partie basse, du salpêtre et des efflorescences. C'est le problème le plus courant dans les immeubles anciens parisiens.",
                },
                {
                  title: "L'humidité par condensation",
                  detail: "L'air chaud entre dans la cave, se refroidit au contact des parois froides et libère son humidité. Moisissures sur les murs et le plafond. Solution : ventilation et isolation des parois.",
                },
                {
                  title: "Les infiltrations d'eau",
                  detail: "L'eau pénètre depuis les fondations ou par les joints de maçonnerie lors de fortes pluies. Taches humides variables, plus importantes après les précipitations. Nécessite une étanchéité par l'extérieur ou un drainage.",
                },
                {
                  title: "La faible hauteur sous plafond",
                  detail: "Dans de nombreux immeubles du XIXe siècle parisien, la hauteur sous dalle des caves est inférieure à 2 m. Cela limite les possibilités d'aménagement — aucune dalle supplémentaire ne peut être coulée sans perdre encore de hauteur.",
                },
              ].map((item) => (
                <li key={item.title} className="bg-[#FAFAF8] rounded-lg p-4 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-1">{item.title}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{item.detail}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Traitement de l&apos;humidité : les solutions et leurs prix
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Le traitement de l&apos;humidité est toujours la première étape, non négociable.
              Aménager une cave sans traiter l&apos;humidité revient à peindre sur une éponge.
            </p>
            <div className="overflow-x-auto mb-5">
              <table className="w-full text-sm font-light">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 text-[#1C1C1C] font-medium">Technique</th>
                    <th className="text-left py-2 pr-4 text-[#1C1C1C] font-medium">Usage</th>
                    <th className="text-left py-2 text-[#1C1C1C] font-medium">Coût indicatif</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-600">
                  <tr>
                    <td className="py-2.5 pr-4">Enduit d&apos;étanchéité à l&apos;eau</td>
                    <td className="py-2.5 pr-4">Infiltrations légères, humidité de surface</td>
                    <td className="py-2.5">15 – 40 €/m²</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4">Injection de résine (barrière chimique)</td>
                    <td className="py-2.5 pr-4">Remontées capillaires en pied de mur</td>
                    <td className="py-2.5">80 – 200 €/ml</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4">Cuvelage béton armé</td>
                    <td className="py-2.5 pr-4">Infiltrations importantes, nappe phréatique</td>
                    <td className="py-2.5">300 – 600 €/m²</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4">Drainage périphérique</td>
                    <td className="py-2.5 pr-4">Infiltrations en pied de mur, terrain humide</td>
                    <td className="py-2.5">150 – 350 €/ml</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4">VMC ou ventilation naturelle</td>
                    <td className="py-2.5 pr-4">Condensation, mauvaise aération</td>
                    <td className="py-2.5">500 – 2 000 €</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Dans tous les cas, le diagnostic par un professionnel est indispensable avant de
              choisir la technique. Une injection de résine sur une infiltration de nappe
              phréatique est inefficace — et inversement, un cuvelage coûteux sur une simple
              condensation est un surcoût inutile.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Isolation et revêtements : ce qui fonctionne en sous-sol
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Une fois l&apos;humidité traitée, l&apos;isolation des parois et du sol conditionne
              le confort thermique et acoustique de la cave. Les matériaux et techniques
              diffèrent de ceux utilisés en logement — les contraintes d&apos;humidité résiduelle
              imposent des produits spécifiques.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Isolation des murs
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  En sous-sol, on évite la laine de verre et la laine de roche en contact
                  avec les parois humides. Préférez les panneaux de polystyrène extrudé (XPS)
                  ou les panneaux de mousse polyuréthane, imperméables à l&apos;eau. La technique
                  de doublage par rail métallique avec plaque de plâtre hydrofuge (BA18H) est
                  la plus courante. Prix : 80 à 150 € / m² fourni et posé.
                </p>
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Sol : dalle flottante ou carrelage sur plot
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Pour le sol, deux solutions principales : la dalle béton flottante sur
                  film polyane (protection contre les remontées) ou le carrelage posé sur
                  plots (permet la circulation de l&apos;air sous le revêtement). Évitez le parquet
                  bois massif en sous-sol — même traité, il travaillera avec l&apos;humidité
                  ambiante. Le carrelage grès cérame ou le béton ciré sont les finitions
                  les plus durables.
                </p>
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Éclairage : compenser l&apos;absence de lumière naturelle
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Sans lumière naturelle, l&apos;éclairage artificiel doit être pensé en plusieurs
                  niveaux : spots encastrés au plafond pour l&apos;éclairage général, appliques
                  murales pour les zones de travail, éclairage indirect pour créer de la
                  profondeur. Optez pour des ampoules à température de couleur chaude (2 700 K)
                  ou neutre (4 000 K) selon l&apos;usage.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Quels aménagements pour une cave parisienne rénovée ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Une fois assainie et isolée, la cave peut accueillir différents usages selon
              sa surface, sa hauteur sous plafond et sa situation réglementaire.
            </p>
            <ul className="space-y-3 mb-5">
              {[
                {
                  flag: 'Espace rangement optimisé',
                  detail: 'Étagères en acier galvanisé, racks modulaires, casiers à vin, vestiaire vélos. La solution la plus rapide et la moins coûteuse (2 000 à 5 000 €). Adaptée à toutes les hauteurs.',
                },
                {
                  flag: 'Atelier / buanderie',
                  detail: 'Point d\'eau, plan de travail, machine à laver, établi. Hauteur minimum recommandée : 2 m. Nécessite un raccordement plomberie (500 à 2 000 €) et un point électrique dédié.',
                },
                {
                  flag: 'Bureau ou salle de jeux',
                  detail: 'Hauteur minimum requise : 2,20 m. Isolation phonique nécessaire si l\'immeuble est occupé en journée. Climatisation réversible recommandée (la cave est fraîche en été mais froide en hiver). Budget : 15 000 à 25 000 €.',
                },
                {
                  flag: 'Cave à vin aménagée',
                  detail: 'Casiers à bouteilles, porte isotherme, hygrométrie contrôlée, éclairage basse intensité. La cave parisienne offre naturellement une température stable (12 à 15°C). Budget mobilier : 1 500 à 6 000 €.',
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
              Réglementation et copropriété : ce qu&apos;il faut savoir
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              La rénovation d&apos;une cave à Paris est encadrée par plusieurs règles qu&apos;il est
              impératif de vérifier avant de démarrer les travaux.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              {[
                'Vérifier le règlement de copropriété : certains interdisent les travaux structurels en sous-sol',
                'Toute modification de la façade ou des parties communes nécessite un vote en AG',
                'Transformation en local professionnel : autorisation de la mairie et accord copro',
                'Hauteur sous plafond > 2,20 m obligatoire pour un usage habitable légal',
                'Permis de construire si la surface habitable augmente de plus de 20 m²',
                'Déclaration préalable de travaux pour les aménagements intérieurs significatifs',
                'Règle ABF (Architecte des Bâtiments de France) en secteur sauvegardé',
                'Assurance dommages-ouvrage recommandée pour les travaux structurels',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                  <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Espace Design accompagne ses clients dans le montage des dossiers administratifs :
              déclaration préalable, demande de permis, contact avec le syndic et les ABF
              le cas échéant. Une expertise en amont évite les arrêts de chantier coûteux.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Budget rénovation cave Paris : les prix 2025
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Les fourchettes ci-dessous correspondent à des chantiers réalisés dans Paris
              intra-muros. Elles incluent la maîtrise d&apos;œuvre, les travaux et les finitions.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm font-light">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 text-[#1C1C1C] font-medium">Prestation</th>
                    <th className="text-left py-2 pr-4 text-[#1C1C1C] font-medium">Budget bas</th>
                    <th className="text-left py-2 text-[#1C1C1C] font-medium">Budget haut</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-600">
                  <tr>
                    <td className="py-2.5 pr-4">Traitement humidité (15 m²)</td>
                    <td className="py-2.5 pr-4">2 000 €</td>
                    <td className="py-2.5">8 000 €</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4">Isolation parois + sol (15 m²)</td>
                    <td className="py-2.5 pr-4">3 000 €</td>
                    <td className="py-2.5">6 000 €</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4">Électricité + éclairage</td>
                    <td className="py-2.5 pr-4">1 500 €</td>
                    <td className="py-2.5">3 500 €</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4">Aménagement rangement</td>
                    <td className="py-2.5 pr-4">2 000 €</td>
                    <td className="py-2.5">5 000 €</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4">Rénovation complète cave 15 m²</td>
                    <td className="py-2.5 pr-4">8 000 €</td>
                    <td className="py-2.5">22 000 €</td>
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
              { href: '/blog/choisir-artisan-renovation-paris', title: 'Choisir son artisan rénovateur à Paris' },
              { href: '/blog/amenagement-studio-paris', title: 'Aménagement studio Paris 2025' },
              { href: '/renovation-appartement-paris', title: 'Rénovation appartement Paris — Espace Design' },
              { href: '/contact', title: 'Devis gratuit pour votre cave' },
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
          Vous rénovez une cave à Paris ?
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
