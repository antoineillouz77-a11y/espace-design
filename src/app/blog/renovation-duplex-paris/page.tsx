import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Duplex Paris', item: 'https://espacedesignparis.fr/blog/renovation-duplex-paris' },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Duplex Paris : prix, aménagement & guide 2025 | Espace Design',
  description:
    'Rénover un duplex parisien : mezzanine, escalier, décloisonnement, hauteur sous plafond. Prix et guide complet 2025.',
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Duplex Paris : prix et aménagement 2025',
  description:
    'Rénover un duplex parisien : mezzanine, escalier, décloisonnement, hauteur sous plafond. Prix et guide complet 2025.',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-duplex-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien coûte la rénovation d\'un duplex à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La rénovation d\'un duplex parisien coûte entre 1 500 et 3 500 €/m² selon le niveau de finition. Pour un duplex de 80 m², prévoyez 120 000 à 280 000 € en rénovation complète. Les spécificités d\'un duplex (double hauteur, escalier, mezzanine) représentent un surcoût de 15 à 25% par rapport à un appartement standard.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment aménager l\'escalier d\'un duplex parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'L\'escalier d\'un duplex peut être entièrement repensé lors d\'une rénovation : escalier droit en bois massif (3 000 à 8 000 €), escalier hélicoïdal design (5 000 à 15 000 €), escalier suspendu avec garde-corps en verre (8 000 à 20 000 €). Le garde-corps doit respecter les normes de sécurité (hauteur mini 1 m, espacement max 18 cm entre barreaux).',
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on créer une mezzanine dans un duplex ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, mais la création d\'une mezzanine nécessite une hauteur sous plafond d\'au moins 4,80 m (2,20 m sous et au-dessus). À Paris, les duplex haussmanniens ont souvent des hauteurs de 5 à 7 m, ce qui permet une mezzanine spacieuse. Coût : 8 000 à 25 000 € selon la surface et les matériaux (bois, métal, béton). Il faut également prévoir l\'escalier d\'accès et la résistance du plancher.',
      },
    },
  ],
}

export default function ArticleDuplexParis() {
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
      <section className="pt-28 sm:pt-36 pb-12 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">
            Guides
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Rénovation Duplex Paris : prix et aménagement 2025
          </h1>
          <p className="text-gray-500 text-sm font-light leading-relaxed">
            Rénover un duplex à Paris est un projet à fort potentiel — et à fort enjeu. Double
            hauteur, escalier intérieur, mezzanine possible : ces espaces sur deux niveaux offrent
            des opportunités d&apos;aménagement rares dans la capitale. Ce guide vous donne tous les
            repères pour réussir votre projet de rénovation de duplex parisien, du budget aux
            choix techniques.
          </p>
        </div>
      </section>

      {/* Contenu article */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">

          {/* Section 1 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les types de duplex à Paris
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Le terme &quot;duplex&quot; recouvre des réalités très différentes à Paris. Avant de
              définir un projet de rénovation, il est essentiel de bien identifier la configuration
              de votre bien, car chaque type implique des contraintes et des opportunités
              spécifiques.
            </p>

            <div className="space-y-5">
              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Le loft duplex
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Issu de la transformation d&apos;anciens ateliers ou entrepôts, le loft duplex
                  se caractérise par une double hauteur sous plafond (5 à 8 m) et un espace
                  ouvert au rez-de-chaussée. La mezzanine est souvent déjà présente ou facilement
                  créable. Ces biens se trouvent principalement dans les 10e, 11e et 13e
                  arrondissements de Paris. La rénovation d&apos;un loft duplex doit valoriser le
                  volume tout en apportant confort thermique et acoustique.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  L&apos;appartement haussmannien sur deux niveaux
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Certains immeubles haussmanniens comportent des appartements qui s&apos;étendent
                  sur deux étages, reliés par un escalier intérieur privatif. Ces duplex conservent
                  les codes haussmanniens (parquet, moulures, hautes fenêtres) et nécessitent
                  souvent une rénovation lourde : mise aux normes électriques, reprise de la
                  plomberie sur les deux niveaux, restauration des éléments anciens.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  La maison de ville avec appartement duplex
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Dans les arrondissements périphériques (15e, 16e, 20e) et en petite couronne
                  (Neuilly, Boulogne, Vincennes), des petites maisons de ville ont été divisées
                  en appartements duplex sur rez-de-chaussée et premier étage. Ces biens bénéficient
                  parfois d&apos;un jardin ou d&apos;une terrasse, et présentent des configurations
                  de plain-pied au rez-de-chaussée avec chambres à l&apos;étage.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Le duplex en dernier étage avec toiture
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Parmi les configurations les plus prisées à Paris : le duplex en attique, avec
                  dernier étage et combles aménagés. Ces biens offrent souvent des terrasses et
                  une vue dégagée. La rénovation implique un travail sur la charpente, l&apos;isolation
                  de toiture et parfois la création de velux ou de lucarnes (soumise à l&apos;accord
                  de l&apos;ABF selon les secteurs).
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Aménagement d&apos;un duplex : mezzanine, escalier, hauteur sous plafond
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              La rénovation d&apos;un duplex est l&apos;occasion de repenser entièrement la
              distribution des espaces. Voici les postes clés à étudier avec votre architecte
              ou maître d&apos;oeuvre.
            </p>
            <ul className="space-y-3">
              {[
                {
                  poste: 'Création ou agrandissement d\'une mezzanine',
                  fourchette: '8 000 à 25 000 €',
                  detail: 'Nécessite une hauteur libre d\'au moins 2,20 m sous et au-dessus. La structure peut être en bois, métal ou béton. Prévoir également l\'escalier d\'accès et les garde-corps.',
                },
                {
                  poste: 'Escalier intérieur sur mesure',
                  fourchette: '3 000 à 20 000 €',
                  detail: 'Escalier droit bois (3 000-8 000 €), hélicoïdal design (5 000-15 000 €), suspendu avec garde-corps verre (8 000-20 000 €). L\'escalier est souvent l\'élément architectural central du duplex.',
                },
                {
                  poste: 'Décloisonnement niveau inférieur',
                  fourchette: '5 000 à 15 000 €',
                  detail: 'Ouverture du séjour-cuisine en rez-de-chaussée pour créer un plateau ouvert. Si mur porteur : étude de structure + IPN nécessaires (8 000-18 000 €).',
                },
                {
                  poste: 'Isolation et acoustique',
                  fourchette: '80 à 150 €/m²',
                  detail: 'Un duplex présente souvent des problèmes acoustiques entre les deux niveaux. L\'isolation du plancher intermédiaire est prioritaire, surtout dans les lofts.',
                },
              ].map((item) => (
                <li key={item.poste} className="bg-[#FAFAF8] rounded-lg p-4 border border-gray-100">
                  <div className="flex justify-between items-start mb-1">
                    <div className="font-medium text-[#1C1C1C] text-sm">{item.poste}</div>
                    <div className="text-[#B8960C] text-sm font-medium whitespace-nowrap ml-4">{item.fourchette}</div>
                  </div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{item.detail}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Prix d&apos;une rénovation de duplex à Paris en 2025
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Le coût de rénovation d&apos;un duplex à Paris dépend de l&apos;état initial du bien,
              de sa configuration et du niveau de finition souhaité. Les spécificités d&apos;un duplex
              (double hauteur, escalier, mezzanine) engendrent un surcoût de 15 à 25% par rapport
              à un appartement classique de même surface.
            </p>
            <ul className="space-y-3">
              {[
                {
                  flag: 'Rafraîchissement (peinture, sols, luminaires)',
                  detail: '400 à 800 €/m² — Pour un duplex en bon état nécessitant une remise au goût du jour sans travaux structurels.',
                },
                {
                  flag: 'Rénovation partielle (salle de bain ou cuisine)',
                  detail: '800 à 1 500 €/m² — Remplacement d\'une pièce d\'eau ou refonte de la cuisine, sans toucher à la structure du duplex.',
                },
                {
                  flag: 'Rénovation complète standard',
                  detail: '1 500 à 2 500 €/m² — Électricité, plomberie, cuisine, salle de bain, sols, peintures sur les deux niveaux.',
                },
                {
                  flag: 'Rénovation complète avec transformation (mezzanine, escalier sur mesure)',
                  detail: '2 500 à 3 500 €/m² — Inclut la reconfiguration structurelle, l\'escalier design et les finitions haut de gamme.',
                },
              ].map((item) => (
                <li key={item.flag} className="flex gap-3">
                  <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#1C1C1C] text-sm font-medium">{item.flag} : </span>
                    <span className="text-gray-600 text-sm font-light">{item.detail}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Cas pratiques de rénovation de duplex parisiens
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Pour illustrer les fourchettes de prix et les enjeux techniques, voici trois
              exemples représentatifs de projets réalisés à Paris.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              <strong className="text-[#1C1C1C] font-medium">Loft duplex 65 m² — Paris 11e :</strong>{' '}
              Rénovation complète d&apos;un ancien atelier avec création de mezzanine (chambre + salle
              de bain) et escalier suspendu en acier. Isolation des murs et du plancher
              intermédiaire. Budget total : 180 000 €, soit 2 770 €/m².
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              <strong className="text-[#1C1C1C] font-medium">Appartement haussmannien duplex 90 m² — Paris 7e :</strong>{' '}
              Réfection complète des deux niveaux : parquets pont de Hongrie restaurés, moulures
              remises en état, électricité entièrement refaite, création d&apos;une salle de bain en
              marbre. Escalier en chêne massif sur mesure. Budget total : 270 000 €, soit 3 000 €/m².
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              <strong className="text-[#1C1C1C] font-medium">Duplex en dernier étage 75 m² — Paris 15e :</strong>{' '}
              Rénovation et ouverture de la cuisine sur le séjour au rez-de-chaussée, création
              de deux chambres à l&apos;étage, installation de 3 velux (accord copropriété obtenu).
              Isolation de toiture complète. Budget total : 150 000 €, soit 2 000 €/m².
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Faire appel à un artisan spécialisé dans les duplex parisiens
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              La rénovation d&apos;un duplex exige des corps de métier capables de travailler sur
              deux niveaux en simultané, de coordonner menuisiers, électriciens et plombiers, et
              de gérer des hauteurs de travail importantes. Un artisan généraliste sans expérience
              dans ce type de bien peut sous-estimer les délais et les coûts de manière
              significative.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Espace Design intervient régulièrement sur des duplex dans toute la capitale et la
              petite couronne. Notre équipe maîtrise les configurations à double hauteur, la pose
              d&apos;escaliers sur mesure et la création de mezzanines. Consultez nos{' '}
              <Link href="/realisations" className="text-[#B8960C] hover:underline">
                réalisations
              </Link>{' '}
              ou{' '}
              <Link href="/contact" className="text-[#B8960C] hover:underline">
                demandez un devis gratuit
              </Link>
              .
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-6">
              Questions fréquentes — Rénovation duplex Paris
            </h2>
            <div className="space-y-4">
              {schemaFaq.mainEntity.map((item) => (
                <div key={item.name} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-2">{item.name}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{item.acceptedAnswer.text}</div>
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
              { href: '/amenagement-interieur-paris', title: 'Aménagement intérieur Paris — Espace Design' },
              { href: '/menuiserie-paris', title: 'Menuiserie Paris — Espace Design' },
              { href: '/blog/verriere-interieure-paris', title: 'Vérière intérieure Paris — guide 2025' },
              { href: '/blog/renovation-escalier-paris', title: 'Rénovation escalier Paris — guide 2025' },
              { href: '/blog/renovation-loft-paris', title: 'Rénovation loft Paris — guide 2025' },
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
              { href: '/renovation-paris-3e', label: 'Paris 3e' },
              { href: '/renovation-paris-4e', label: 'Paris 4e' },
              { href: '/renovation-paris-6e', label: 'Paris 6e' },
              { href: '/renovation-paris-7e', label: 'Paris 7e' },
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-paris-15e', label: 'Paris 15e' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
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
          Vous rénovez un duplex à Paris ?
        </h2>
        <p className="text-gray-400 text-sm font-light mb-8">
          Devis gratuit et détaillé sous 48h. Déplacement sans engagement dans tout Paris et petite couronne.
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
