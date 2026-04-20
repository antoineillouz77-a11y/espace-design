import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Terrasse Paris', item: 'https://espacedesignparis.fr/blog/renovation-terrasse-paris' },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Terrasse Paris : lames, carrelage & prix 2025 | Espace Design',
  description:
    'Rénover sa terrasse à Paris : lames composite, carrelage sur plots, bois exotique. Prix au m², copropriété. Guide complet 2025.',
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Terrasse Paris : matériaux et prix 2025',
  description:
    'Rénover sa terrasse à Paris : lames composite, carrelage sur plots, bois exotique. Prix au m², copropriété. Guide complet 2025.',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-terrasse-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel revêtement choisir pour une terrasse parisienne ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Les revêtements les plus populaires pour les terrasses parisiennes : lames composite (30-80€/m² posé, très résistant, sans entretien), carrelage grand format sur plots (60-120€/m², béton ou pierre), bois exotique massif (80-150€/m², traitement annuel), bois composite premium (80-130€/m², garantie 25 ans). Le composite est le meilleur rapport qualité-prix pour les terrasses en copropriété.',
      },
    },
    {
      '@type': 'Question',
      name: 'Faut-il l\'accord de la copropriété pour rénover une terrasse à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Une terrasse en copropriété est souvent une partie privative à jouissance exclusive, mais les travaux peuvent nécessiter une autorisation de l\'AG selon leur nature. La pose de lames sur une terrasse existante ne nécessite généralement pas d\'accord. La création d\'une pergola, d\'un jardin d\'hiver ou la modification de la structure imperméabilisante nécessite un vote. Vérifiez le règlement de copropriété avant de commencer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte la rénovation d\'une terrasse à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La rénovation d\'une terrasse parisienne coûte entre 150 et 400€/m². Pour une terrasse de 15 m² : 2 250 à 6 000 €. Si l\'étanchéité est à refaire (membrane étanchéité) : ajoutez 80 à 150€/m² supplémentaires. Une terrasse de 15 m² avec étanchéité neuve, drainage et lames composite : 4 000 à 8 000 €.',
      },
    },
  ],
}

export default function ArticleRenovationTerrasseParis() {
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
            Aménagement
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Rénovation Terrasse Paris : matériaux et prix 2025
          </h1>
          <p className="text-gray-500 text-sm font-light leading-relaxed">
            Avoir une terrasse à Paris est un privilège — la rénover est un investissement
            qui en décuple la valeur d&apos;usage et la valeur immobilière. Revêtement, étanchéité,
            drainage, contraintes de copropriété : ce guide complet vous donne toutes les clés
            pour réussir la rénovation de votre terrasse parisienne, du choix des matériaux
            au budget final.
          </p>
        </div>
      </section>

      {/* Contenu article */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">

          {/* Section 1 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les revêtements de terrasse les plus utilisés à Paris
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Le choix du revêtement conditionne à la fois l&apos;esthétique, l&apos;entretien et la
              durabilité de votre terrasse. Voici les quatre grandes familles de matériaux
              adaptées aux terrasses parisiennes, avec leurs avantages et leurs limites.
            </p>

            <div className="space-y-5">
              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Les lames composites
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Le composite (mélange de fibres de bois et de résine) est devenu le revêtement
                  de terrasse le plus populaire à Paris pour les rénovations récentes. Ses atouts :
                  aucun entretien annuel, résistance aux UV et aux intempéries, imputrescible,
                  esthétique proche du bois naturel. Les gammes haut de gamme (Silvadec, Fiberon,
                  Cedral) offrent des garanties de 25 ans. Prix posé : 30 à 80 €/m² selon la
                  qualité, la largeur des lames et le mode de fixation (invisible recommandé).
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Le carrelage grand format sur plots réglables
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  La pose sur plots (dalles posées sur des supports en plastique réglables) est
                  la technique idéale pour les terrasses en copropriété : elle ne touche pas
                  l&apos;étanchéité existante, est démontable et n&apos;engendre aucun surpoids problématique.
                  Les carreaux béton, grès cérame grand format (60x60 ou 80x80 cm) ou pierre
                  naturelle offrent des rendus contemporains ou traditionnels selon le choix.
                  Prix : 60 à 120 €/m² posé, selon le carrelage sélectionné.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Le bois exotique massif
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  L&apos;ipé, le teck, le cumaru ou le bangkirai sont des bois exotiques naturellement
                  imputrescibles et très résistants. Le rendu naturel et chaleureux est
                  incomparable. En revanche, ils nécessitent un traitement à l&apos;huile de teck
                  une à deux fois par an pour conserver leur couleur chaude (sinon ils grisonnent
                  naturellement, ce que certains apprécient). Prix posé : 80 à 150 €/m² selon
                  l&apos;essence. Attention : vérifiez la certification FSC ou PEFC pour garantir
                  une exploitation responsable.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Le béton désactivé ou béton imprimé
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Pour les terrasses de plain-pied ou les grandes surfaces (maisons de ville
                  en petite couronne), le béton peut être une option : béton désactivé (granulats
                  apparents, aspect naturel), béton imprimé (imitation pierre ou bois). Ces
                  techniques nécessitent une dalle support existante ou la coulage d&apos;une dalle neuve.
                  Prix : 40 à 80 €/m² hors dalle support.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Étanchéité et drainage : les fondamentaux d&apos;une terrasse parisienne
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              À Paris, la terrasse est le plus souvent la toiture d&apos;un appartement en dessous.
              L&apos;étanchéité est donc un enjeu majeur — non seulement pour votre terrasse, mais
              pour les voisins du dessous. Avant tout choix de revêtement, l&apos;état de
              l&apos;étanchéité existante doit être diagnostiqué.
            </p>
            <ul className="space-y-3">
              {[
                {
                  poste: 'Diagnostic étanchéité',
                  fourchette: 'Gratuit à 300 €',
                  detail: 'Test à l\'eau ou inspection visuelle par un spécialiste. Indispensable avant tout projet de rénovation de terrasse sur immeuble parisien.',
                },
                {
                  poste: 'Reprise d\'étanchéité membrane bitumineuse',
                  fourchette: '80 à 120 €/m²',
                  detail: 'Pose d\'une nouvelle membrane bicouche sur l\'étanchéité existante après ragréage. Solution la plus courante pour les terrasses parisiennes de 15 à 50 m².',
                },
                {
                  poste: 'Étanchéité liquide (résine polyuréthane)',
                  fourchette: '60 à 100 €/m²',
                  detail: 'Application à la brosse ou au rouleau, sans soudure. Idéale pour les formes complexes et les évacuations. Compatible avec la plupart des revêtements.',
                },
                {
                  poste: 'Drainage et évacuations',
                  fourchette: '200 à 800 €',
                  detail: 'Vérification et reprise des siphons de terrasse, pose de grilles anti-feuilles. Un drainage insuffisant accélère la dégradation de l\'étanchéité.',
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
              Copropriété et autorisations : ce qu&apos;il faut savoir avant de commencer
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              La grande majorité des terrasses parisiennes se trouvent en copropriété. Avant
              de démarrer un chantier, il est impératif de comprendre le statut juridique de
              votre terrasse et les autorisations requises.
            </p>
            <ul className="space-y-3">
              {[
                {
                  flag: 'Partie privative à jouissance exclusive',
                  detail: 'La configuration la plus courante. Vous êtes seul à utiliser la terrasse mais la structure (dalle, étanchéité) reste une partie commune. Vous pouvez poser un revêtement sans accord AG, mais vous ne pouvez pas modifier l\'étanchéité sans l\'aval du syndic.',
                },
                {
                  flag: 'Pergola et store banne',
                  detail: 'La pose d\'un store banne (< 1,80 m de débord en général) ne nécessite pas d\'autorisation AG mais doit respecter le règlement de copropriété sur les couleurs et les modèles. Une pergola bioclimatique est généralement soumise au vote de l\'AG et à déclaration préalable en mairie.',
                },
                {
                  flag: 'Surcharge et calcul de charge',
                  detail: 'Les dalles sur plots ou le carrelage peuvent représenter un poids important (de 40 à 80 kg/m²). Vérifiez avec un bureau d\'études que la structure de votre immeuble supporte la charge avant de choisir un revêtement lourd.',
                },
                {
                  flag: 'Règlement de copropriété et façade',
                  detail: 'Dans les secteurs patrimoniaux parisiens (secteur sauvegardé, PSMV), certains matériaux ou couleurs peuvent être interdits ou soumis à l\'accord de l\'Architecte des Bâtiments de France. Renseignez-vous en mairie avant de commander.',
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
              Prix complets d&apos;une rénovation de terrasse à Paris en 2025
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Pour vous aider à cadrer votre budget, voici des exemples concrets de chantiers
              de terrasse à Paris, avec le détail des prestations incluses.
            </p>
            <ul className="space-y-3">
              {[
                {
                  poste: 'Terrasse 10 m² — pose lames composite sur plots existants',
                  fourchette: '1 500 à 3 000 €',
                  detail: 'Fourniture + pose lames composite qualité standard sur plots réglables existants en bon état. Pas de reprise d\'étanchéité.',
                },
                {
                  poste: 'Terrasse 15 m² — carrelage grand format sur plots neufs',
                  fourchette: '3 500 à 6 000 €',
                  detail: 'Fourniture carrelage grès cérame + plots réglables neufs + pose. Comprend la dépose de l\'ancien revêtement.',
                },
                {
                  poste: 'Terrasse 20 m² — rénovation complète (étanchéité + composite)',
                  fourchette: '6 000 à 12 000 €',
                  detail: 'Dépose revêtement existant + reprise étanchéité membrane + plots + lames composite premium. Le cas le plus fréquent en copropriété parisienne.',
                },
                {
                  poste: 'Terrasse 30 m² — bois exotique + étanchéité + drainage',
                  fourchette: '10 000 à 20 000 €',
                  detail: 'Projet haut de gamme incluant étanchéité neuve, reprise des évacuations, pose ipé ou teck certifié, finition soignée des plinthes et jonctions.',
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

          {/* Section 5 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Faire appel à un professionnel pour rénover sa terrasse à Paris
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              La rénovation d&apos;une terrasse parisienne fait intervenir plusieurs corps de métier :
              étancheur, carreleur ou poseur de bois, plombier pour les évacuations, voire
              électricien si vous souhaitez ajouter un éclairage extérieur. La coordination
              de ces intervenants est clé pour éviter les retards et les malfaçons.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Espace Design prend en charge l&apos;ensemble du projet de rénovation de terrasse à
              Paris : diagnostic, choix des matériaux, coordination des artisans, suivi de
              chantier. Notre équipe intervient dans tout Paris (7e, 8e, 15e, 16e, 17e) et
              en petite couronne (Neuilly, Levallois, Boulogne, Versailles). Consultez nos{' '}
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
              Questions fréquentes — Rénovation terrasse Paris
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
              { href: '/carrelage-paris', title: 'Carrelage Paris — Espace Design' },
              { href: '/blog/domotique-appartement-paris', title: 'Domotique appartement Paris — guide 2025' },
              { href: '/blog/home-staging-paris', title: 'Home staging Paris — guide 2025' },
              { href: '/renovation-appartement-paris', title: 'Rénovation appartement Paris — Espace Design' },
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
              { href: '/renovation-paris-7e', label: 'Paris 7e' },
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-9e', label: 'Paris 9e' },
              { href: '/renovation-paris-15e', label: 'Paris 15e' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-paris-17e', label: 'Paris 17e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
              { href: '/renovation-levallois-perret', label: 'Levallois-Perret' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
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
          Vous rénovez une terrasse à Paris ?
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
