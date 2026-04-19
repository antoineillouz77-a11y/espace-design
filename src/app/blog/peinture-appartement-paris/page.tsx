import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Peinture appartement Paris', item: 'https://espacedesignparis.fr/blog/peinture-appartement-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Peinture appartement Paris : prix, conseils et artisans en 2025',
  description: 'Prix d\'une peinture d\'appartement à Paris, conseils pour choisir ses couleurs et son artisan peintre. Tarifs au m², types de peintures, délais.',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
    logo: { '@type': 'ImageObject', url: 'https://espacedesignparis.fr/images/hero.jpg' },
  },
  url: 'https://espacedesignparis.fr/blog/peinture-appartement-paris',
  datePublished: '2025-03-01',
  dateModified: '2025-04-19',
  inLanguage: 'fr-FR',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une peinture d\'appartement à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'La peinture d\'appartement à Paris coûte entre 25 et 45 €/m² pour une peinture standard (2 couches). Une peinture haut de gamme avec préparation soignée revient à 45-80 €/m². Pour des effets décoratifs (stucco, béton ciré, enduit) le prix peut atteindre 80 à 200 €/m².' },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps faut-il pour peindre un appartement à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Un studio ou 2 pièces prend généralement 3 à 5 jours pour un artisan. Pour un 3-4 pièces, comptez 1 à 2 semaines. Ces délais incluent la préparation des surfaces (rebouchage, enduit, ponçage) qui représente souvent la moitié du temps de chantier.' },
    },
    {
      '@type': 'Question',
      name: 'Quelles couleurs choisir pour un appartement parisien ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pour les petits appartements, les teintes claires (blanc cassé, grège, taupe) maximisent la luminosité et l\'impression d\'espace. Dans les appartements haussmanniens, une teinte légèrement colorée (vert sauge, bleu dusty, terracotta) en accord avec les moulures apporte du cachet. Évitez les couleurs trop foncées au plafond.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Peinture Appartement Paris — Prix, Conseils & Artisan | Espace Design',
  description:
    'Prix d\'une peinture d\'appartement à Paris en 2025 : tarifs au m², types de peintures, conseils couleurs. Artisan peintre Paris, devis gratuit 48h.',
  keywords: [
    'peinture appartement Paris',
    'artisan peintre Paris',
    'prix peinture Paris',
    'peinture intérieure Paris',
    'refaire peinture appartement Paris',
    'peintre appartement Paris',
  ],
}

export default function ArticlePeintureAppartement() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }} />

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-12 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">
            Guide & Conseils
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Peinture appartement Paris : prix, conseils et artisans en 2025
          </h1>
          <p className="text-gray-500 text-sm font-light leading-relaxed">
            Refaire la peinture d&apos;un appartement à Paris est l&apos;un des travaux les plus fréquents —
            et l&apos;un des plus visibles. Un artisan peintre compétent fait toute la différence entre un
            résultat ordinaire et un intérieur qui paraît neuf et lumineux. Voici tout ce qu&apos;il faut
            savoir sur les prix, les peintures et le choix de votre artisan peintre à Paris.
          </p>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">

          {/* Section 1 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Prix d&apos;une peinture d&apos;appartement à Paris en 2025
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le prix d&apos;une peinture d&apos;appartement à Paris varie selon plusieurs facteurs :
              l&apos;état des surfaces, la qualité des peintures choisies, le nombre de couches nécessaires
              et l&apos;accès au chantier. Voici les tarifs moyens pratiqués par les artisans peintres
              parisiens en 2025, fourniture comprise.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {[
                {
                  label: 'Peinture simple',
                  price: '25 – 45 €/m²',
                  desc: 'Surfaces en bon état, 2 couches de peinture acrylique standard. Idéal pour un appartement récent ou déjà bien entretenu.',
                },
                {
                  label: 'Peinture complète',
                  price: '45 – 80 €/m²',
                  desc: 'Préparation des surfaces (rebouchage, ponçage), sous-couche, 2 couches peinture premium. Pour la majorité des appartements parisiens.',
                },
                {
                  label: 'Peinture décorative',
                  price: '80 – 200 €/m²',
                  desc: 'Enduits, béton ciré, matières, faux marbre, effets métallisés, dorures. Pour les intérieurs d\'exception.',
                },
              ].map((item) => (
                <div key={item.label} className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-5">
                  <div className="text-[#B8960C] text-xs font-light uppercase tracking-widest mb-1">
                    {item.label}
                  </div>
                  <div className="font-display text-lg font-semibold text-[#1C1C1C] mb-2">{item.price}</div>
                  <p className="text-gray-500 text-xs font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Ces prix sont exprimés au m² de surface peinte (murs + plafonds comptés séparément).
              Pour un appartement de 50 m² à Paris avec des pièces standard, la peinture complète
              (murs et plafonds) représente environ 250 m² de surface à peindre — soit un budget
              total de 11 000 à 20 000 € pour une peinture haut de gamme bien préparée.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Étapes d&apos;une peinture d&apos;appartement réussie à Paris
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Une belle peinture se prépare autant qu&apos;elle s&apos;exécute. La qualité du résultat final
              dépend à 60% de la préparation des surfaces. Un artisan peintre sérieux ne saute
              jamais cette étape, même si elle rallonge le chantier.
            </p>

            <div className="space-y-4">
              {[
                {
                  step: '01',
                  title: 'Protection du mobilier et des sols',
                  desc: 'Le mobilier est déplacé ou recouvert, les sols sont protégés par des bâches, les menuiseries et plinthes sont masquées. Un chantier propre est un chantier sérieux.',
                },
                {
                  step: '02',
                  title: 'Préparation des surfaces',
                  desc: 'Rebouchage des fissures et trous avec enduit, ponçage des aspérités, lessivage si nécessaire pour dégraisser. Sur les murs anciens, ce travail peut prendre plus de temps que la peinture elle-même.',
                },
                {
                  step: '03',
                  title: 'Sous-couche',
                  desc: 'Application d\'une sous-couche adaptée au support (béton, plâtre, bois, métal) qui améliore l\'adhérence et l\'homogénéité de la couche de finition.',
                },
                {
                  step: '04',
                  title: 'Couches de finition',
                  desc: 'Application de 2 couches de peinture de finition. La première couche est séchée complètement avant la deuxième — en général 4 heures minimum.',
                },
                {
                  step: '05',
                  title: 'Finitions et retouches',
                  desc: 'Détails aux angles, plinthes, reprises. Nettoyage du chantier, démasquage. Inspection finale avec le client.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="font-display text-2xl font-semibold text-[#D4AF37] flex-shrink-0 w-8">{item.step}</div>
                  <div>
                    <div className="font-semibold text-sm text-[#1C1C1C] mb-1">{item.title}</div>
                    <p className="text-gray-600 text-sm font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Choisir ses couleurs de peinture pour un appartement parisien
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le choix des couleurs est souvent la partie la plus angoissante pour les propriétaires.
              Quelques principes simples permettent d&apos;éviter les faux pas dans les appartements parisiens,
              souvent petits et peu lumineux.
            </p>
            <ul className="space-y-3">
              {[
                {
                  title: 'Blanc : choisir la bonne nuance',
                  detail: 'Il n\'existe pas un blanc mais des dizaines. Un blanc trop froid peut rendre un salon froid et clinique. Un blanc cassé légèrement chaud (craie, lin) flatte davantage les appartements parisiens avec leurs moulures et parquets blonds.',
                },
                {
                  title: 'Couleurs sombres dans les petites pièces',
                  detail: 'Contrairement aux idées reçues, une couleur sombre bien choisie peut agrandir visuellement une petite pièce en créant de la profondeur. Le bleu nuit, le vert sauge profond ou le gris anthracite fonctionnent très bien dans les couloirs et salles de bain parisiennes.',
                },
                {
                  title: 'Un mur d\'accent pour les grands espaces',
                  detail: 'Dans un séjour ou une chambre avec de la surface, peindre un seul mur dans une couleur forte (terracotta, bleu paon, bordeaux) crée un point focal élégant sans alourdir la pièce.',
                },
                {
                  title: 'Tester avant de valider',
                  detail: 'Les nuanciers en boutique et les écrans ne rendent pas justice aux couleurs dans un appartement réel. Toujours tester 2 ou 3 nuances sur une surface de 50 × 50 cm, dans différentes conditions de lumière, avant de commander les bidons.',
                },
              ].map((item) => (
                <li key={item.title} className="bg-[#FAFAF8] rounded-lg p-4">
                  <div className="font-semibold text-sm text-[#1C1C1C] mb-1">{item.title}</div>
                  <p className="text-gray-500 text-sm font-light leading-relaxed">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Peinture chez Espace Design : notre approche
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Chez Espace Design, la peinture est bien plus qu&apos;une prestation annexe — c&apos;est
              souvent la touche finale qui fait toute la différence sur un chantier. Nous travaillons
              exclusivement avec des peintures professionnelles (Tollens, V33, Seigneurie) et
              appliquons systématiquement une sous-couche adaptée.
            </p>
            <ul className="space-y-2">
              {[
                'Conseil couleurs inclus dans le devis',
                'Peintures professionnelles Classe A+',
                'Préparation soignée des surfaces avant toute pose',
                'Protection complète du mobilier et des sols',
                'Finitions aux angles et plinthes irréprochables',
                'Nettoyage du chantier à la livraison',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-gray-600 font-light">
                  <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-600 text-sm leading-relaxed font-light mt-4">
              Consultez nos{' '}
              <Link href="/realisations" className="text-[#B8960C] hover:underline">
                réalisations
              </Link>{' '}
              ou{' '}
              <Link href="/contact" className="text-[#B8960C] hover:underline">
                demandez un devis gratuit
              </Link>{' '}
              pour votre projet de peinture à Paris.
            </p>
          </div>

        </div>
      </section>

      {/* Voir aussi */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-xl font-semibold text-[#1C1C1C] mb-6">Voir aussi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/prix-renovation-appartement-paris', title: 'Prix rénovation appartement Paris 2025', tag: 'Prix' },
              { href: '/blog/renovation-parquet-paris', title: 'Parquet à Paris : pose et rénovation', tag: 'Sols' },
              { href: '/blog/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain Paris', tag: 'Salle de bain' },
              { href: '/blog/choisir-artisan-renovation-paris', title: 'Choisir son artisan rénovateur', tag: 'Conseils' },
            ].map((a) => (
              <Link key={a.href} href={a.href} className="block p-4 bg-[#FAFAF8] border border-gray-100 rounded-lg hover:border-[#D4AF37]/40 transition-colors group">
                <span className="text-[10px] uppercase tracking-widest text-[#B8960C] font-light">{a.tag}</span>
                <p className="text-sm font-medium text-[#1C1C1C] mt-1 group-hover:text-[#B8960C] transition-colors leading-snug">{a.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Zones */}
      <section className="py-12 bg-[#F2F2EE]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-xl font-semibold text-[#1C1C1C] mb-4">
            Peinture appartement par arrondissement
          </h2>
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
              { href: '/renovation-appartement-paris', label: 'Tous Paris' },
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

      {/* CTA */}
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
          Un projet de peinture à Paris ?
        </h2>
        <p className="text-gray-400 text-sm font-light mb-8">
          Devis gratuit et détaillé sous 48h. Déplacement sans engagement dans tout Paris.
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
