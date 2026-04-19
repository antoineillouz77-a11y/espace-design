import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation salle de bain à Paris', item: 'https://espacedesignparis.fr/blog/renovation-salle-de-bain-paris' },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Salle de Bain Paris — Prix, Idées & Artisan | Espace Design',
  description:
    'Rénovation de salle de bain à Paris : prix moyen, idées déco, choix des matériaux, durée des travaux. Artisan spécialisé Paris et Île-de-France. Devis gratuit.',
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation salle de bain à Paris',
  description:
    'Prix, idées et conseils pour rénover une salle de bain à Paris. Artisan spécialisé, devis gratuit sous 48h.',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-salle-de-bain-paris',
}

export default function ArticleSalleDeBain() {
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

      {/* Hero article */}
      <section className="pt-28 sm:pt-36 pb-12 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">
            Guide & Conseils
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Rénovation salle de bain à Paris
          </h1>
          <p className="text-gray-500 text-sm font-light leading-relaxed">
            La salle de bain est l&apos;une des pièces les plus importantes à rénover dans un
            appartement parisien. Elle concentre des enjeux techniques (plomberie, étanchéité,
            ventilation) et esthétiques (matériaux, lumière, agencement) qui nécessitent une
            expertise spécifique. Espace Design vous guide dans ce projet.
          </p>
        </div>
      </section>

      {/* Contenu article */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">

          {/* Section 1 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Prix d&apos;une rénovation de salle de bain à Paris
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Le coût d&apos;une rénovation de salle de bain à Paris varie considérablement selon
              la taille de la pièce, le niveau de prestation souhaité et l&apos;état des
              installations existantes. Voici les fourchettes que nous observons sur nos chantiers :
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {[
                {
                  label: 'Salle de bain économique',
                  price: '5 000 – 8 000 €',
                  desc: 'Carrelage standard, sanitaires Leroy Merlin, robinetterie entrée de gamme. Pour une petite salle de bain (3-5 m²).',
                },
                {
                  label: 'Salle de bain intermédiaire',
                  price: '8 000 – 15 000 €',
                  desc: 'Douche à l\'italienne, meuble vasque suspendu, carrelage moyen de gamme. Le rapport qualité-prix optimal.',
                },
                {
                  label: 'Salle de bain haut de gamme',
                  price: '15 000 – 35 000 €',
                  desc: 'Marbre, robinetterie design, douche de pluie, baignoire îlot, éclairage LED intégré. Pour les projets d\'exception.',
                },
              ].map((item) => (
                <div key={item.label} className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-5">
                  <div className="text-[#B8960C] text-xs font-light uppercase tracking-widest mb-1">
                    {item.label}
                  </div>
                  <div className="font-display text-lg font-semibold text-[#1C1C1C] mb-2">
                    {item.price}
                  </div>
                  <p className="text-gray-500 text-xs font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Ces budgets incluent la main d&apos;œuvre, les matériaux et les fournitures sanitaires.
              À Paris, la main d&apos;œuvre représente en moyenne 50 à 60 % du coût total d&apos;une
              rénovation de salle de bain — un poste difficile à comprimer sans compromettre
              la qualité des finitions.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les étapes d&apos;une rénovation de salle de bain
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Une rénovation de salle de bain à Paris suit un ordre précis. Chez Espace Design,
              nous coordonnons chaque corps de métier pour éviter les temps morts et respecter
              les délais annoncés.
            </p>
            <ol className="space-y-3">
              {[
                { num: '01', title: 'Démolition', detail: 'Dépose de l\'ancien carrelage, de la baignoire, des équipements sanitaires. Parfois démolition d\'une cloison pour agrandir la pièce.' },
                { num: '02', title: 'Plomberie brute', detail: 'Déplacement ou création des arrivées d\'eau (eau froide, eau chaude) et des évacuations. Étape clé pour repenser le plan.' },
                { num: '03', title: 'Électricité', detail: 'Installation de circuits dédiés, respect des zones d\'humidité (IP44 minimum), préparation des saignées pour les spots et le chauffe-serviettes.' },
                { num: '04', title: 'Étanchéité', detail: 'Bande à joint sur les murs, chape d\'égalisation du sol, membrane d\'étanchéité autour de la douche. Une étape critique souvent bâclée.' },
                { num: '05', title: 'Carrelage et faïence', detail: 'Pose du carrelage sol (antidérapant obligatoire dans la douche), faïence murale, joints. Le choix du format et de la pose impacte la perception de l\'espace.' },
                { num: '06', title: 'Finitions et équipements', detail: 'Pose de la douche ou baignoire, du meuble vasque, du WC suspendu, de la robinetterie, des accessoires et de la ventilation.' },
              ].map((step) => (
                <li key={step.num} className="flex gap-4">
                  <span className="font-display text-2xl font-semibold text-[#D4AF37]/60 flex-shrink-0 w-8">{step.num}</span>
                  <div>
                    <span className="text-[#1C1C1C] text-sm font-medium">{step.title} : </span>
                    <span className="text-gray-600 text-sm font-light">{step.detail}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Tendances et idées déco pour une salle de bain à Paris
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Les Parisiens ont des goûts affirmés en matière de décoration de salle de bain.
              Voici les tendances que nous observons le plus souvent dans nos chantiers parisiens.
            </p>

            <div className="space-y-5">
              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  La douche à l&apos;italienne
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  C&apos;est la demande numéro un dans les salles de bain parisiennes. La douche
                  à l&apos;italienne, ou douche de plain-pied, donne une impression d&apos;espace
                  et facilite l&apos;entretien. Elle nécessite une descente de siphon — prévoir
                  une chape sèche ou humide selon la configuration du plancher.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Les carreaux de ciment et le grand format
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Les carreaux de ciment apportent une touche artisanale et colorée. Les
                  grandes dalles (60×60, 80×80 ou 120×60) donnent de la profondeur aux
                  petites salles de bain et réduisent le nombre de joints — un avantage
                  d&apos;entretien non négligeable.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Le béton ciré
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Apprécié pour son aspect monolithique et son élégance discrète, le béton
                  ciré s&apos;applique sur les murs et les sols. Il demande une main experte et
                  une application rigoureuse de plusieurs couches de résine de protection.
                  Espace Design maîtrise cette technique depuis de nombreuses années.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Le marbre et la pierre naturelle
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Marbre blanc de Carrare, pierre de Bourgogne, travertin — les matériaux
                  nobles restent intemporels dans une salle de bain haut de gamme. Ils
                  s&apos;associent parfaitement avec la robinetterie dorée ou en laiton brossé
                  pour un résultat luxueux et cohérent.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Durée des travaux et organisation du chantier
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              La durée d&apos;une rénovation de salle de bain à Paris dépend de la complexité
              des travaux et du nombre d&apos;artisans mobilisés. En règle générale :
            </p>
            <ul className="space-y-2 mb-4">
              {[
                'Rafraîchissement simple (carrelage + équipements) : 5 à 7 jours',
                'Rénovation complète sans déplacement de plomberie : 10 à 14 jours',
                'Rénovation complète avec déplacement de colonnes ou création de douche à l\'italienne : 3 à 4 semaines',
                'Rénovation haut de gamme avec marbre et sur-mesure : 4 à 6 semaines',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-gray-600 font-light">
                  <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Pendant le chantier, la salle de bain est inutilisable. Si votre appartement
              dispose d&apos;un WC séparé, c&apos;est déjà un avantage. Nous planifions toujours
              les chantiers pour minimiser la gêne, notamment en regroupant les phases
              les plus intrusives.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Pourquoi faire appel à un seul artisan pour votre salle de bain ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              La rénovation de salle de bain mobilise plusieurs compétences : plomberie,
              électricité, carrelage, peinture, pose de meuble. Beaucoup de propriétaires
              tentent de coordonner eux-mêmes plusieurs artisans — une source de stress et
              souvent de dépassement de budget quand les plannings s&apos;enchaînent mal.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Chez Espace Design, nous prenons en charge l&apos;ensemble des corps de métier.
              Un seul interlocuteur pour toutes les décisions, un seul contrat, une seule
              responsabilité. Si un problème survient — fuite, carrelage décollé, défaut
              d&apos;étanchéité — nous l&apos;assumons entièrement.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Consultez nos{' '}
              <Link href="/realisations" className="text-[#B8960C] hover:underline">
                réalisations de salles de bain
              </Link>{' '}
              ou{' '}
              <Link href="/contact" className="text-[#B8960C] hover:underline">
                demandez un devis gratuit
              </Link>{' '}
              — nous nous déplaçons dans tout Paris et l&apos;Île-de-France.
            </p>
          </div>

        </div>
      </section>

      {/* Zones */}
      <section className="py-12 bg-[#F2F2EE]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-xl font-semibold text-[#1C1C1C] mb-4">
            Rénovation d&apos;appartement par arrondissement
          </h2>
          <p className="text-gray-500 text-sm font-light mb-5">
            Nous intervenons dans tous les arrondissements de Paris. Consultez la page de votre secteur.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              { href: '/renovation-paris-6e', label: 'Paris 6e' },
              { href: '/renovation-paris-7e', label: 'Paris 7e' },
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-15e', label: 'Paris 15e' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-paris-17e', label: 'Paris 17e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
              { href: '/renovation-versailles', label: 'Versailles' },
              { href: '/renovation-appartement-paris', label: 'Tous les arrondissements' },
            ].map((z) => (
              <Link
                key={z.href}
                href={z.href}
                className="text-xs text-gray-600 bg-white border border-gray-200 px-3 py-1.5 rounded hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors"
              >
                {z.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Voir aussi */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Voir aussi</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/renovation-salle-de-bain-paris', label: 'Rénovation salle de bain Paris' },
              { href: '/carrelage-paris', label: 'Carrelage Paris' },
              { href: '/plomberie-paris', label: 'Plomberie Paris' },
              { href: '/blog/carrelage-appartement-paris', label: 'Guide carrelage appartement' },
              { href: '/blog/prix-renovation-appartement-paris', label: 'Prix rénovation Paris' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-xs border border-gray-200 rounded px-3 py-1.5 text-gray-600 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
          Un projet de rénovation à Paris ?
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
