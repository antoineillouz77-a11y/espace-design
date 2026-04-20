import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Plomberie Appartement Paris', item: 'https://espacedesignparis.fr/blog/plomberie-appartement-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Plomberie Appartement Paris : prix, réfection & urgence 2025',
  description: 'Rénovation plomberie Paris : remplacement colonnes, salle de bain, prix au m², délais. Plombier agréé Paris et Île-de-France. Guide complet 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/plomberie-appartement-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien coûte une réfection de plomberie à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La réfection complète de la plomberie d\'un appartement parisien coûte entre 5 000 et 20 000 € selon la surface et la vétusté des installations. Pour une salle de bain complète : comptez 3 000 à 8 000 € pour la plomberie seule. Le remplacement d\'une colonne montante ou des tuyaux en plomb (avant 1948) représente 2 000 à 6 000 € supplémentaires.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment savoir si ma plomberie doit être refaite ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Plusieurs signes indiquent une plomberie à refaire : canalisations en plomb (obligatoirement à remplacer depuis 2013), pression insuffisante, fuites récurrentes, robinetterie rouillée, tuyaux en acier galvanisé corrodés. Dans les immeubles parisiens avant 1970, la plomberie est souvent en mauvais état et doit être entièrement reprise lors d\'une rénovation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Plombier Paris : quel délai pour une rénovation complète ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Une rénovation plomberie complète (salle de bain + cuisine + colonnes) prend entre 5 et 15 jours selon la surface. Une salle de bain seule : 3 à 5 jours. Prévoyez d\'être sans eau chaude pendant 1 à 2 jours lors du remplacement des colonnes. Espace Design coordonne plomberie et second œuvre pour minimiser les délais.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Plomberie Appartement Paris : prix, réfection & urgence 2025',
  description: 'Rénovation plomberie Paris : remplacement colonnes, salle de bain, prix au m², délais. Plombier agréé Paris et Île-de-France. Guide complet 2025.',
}

export default function ArticlePlomberieAppartement() {
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
            Plomberie
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Plomberie Appartement Paris : prix, réfection & urgence 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            La plomberie est l&apos;un des postes les plus critiques d&apos;une rénovation à Paris. Tuyaux en plomb, colonnes vétustes, pression insuffisante : ce guide vous aide à comprendre quand et comment rénover la plomberie de votre appartement, avec les prix 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Diagnostic */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Quand faut-il rénover la plomberie d&apos;un appartement parisien ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              La plomberie d&apos;un appartement parisien peut durer 30 à 50 ans selon les matériaux. Mais dans les immeubles anciens — haussmanniens, années 30-50 ou années 60-70 — les canalisations arrivent en fin de vie et présentent des risques sanitaires ou de dégâts des eaux. Voici les signaux d&apos;alerte à surveiller.
            </p>
            <ul className="space-y-3">
              {[
                {
                  signal: 'Tuyaux en plomb',
                  detail: 'Présents dans les immeubles construits avant 1948, les tuyaux en plomb sont interdits depuis 2013 pour l\'alimentation en eau potable. Leur présence oblige à un remplacement complet des canalisations d\'eau froide et chaude. Un diagnostiqueur immobilier peut les identifier lors d\'une vente.',
                },
                {
                  signal: 'Pression insuffisante aux robinets',
                  detail: 'Une faible pression dans un appartement parisien peut indiquer des canalisations entartrées (tuyaux galvanisés), une colonne montante vétuste ou un problème de réseau copropriété. Avant de commander des travaux, faites mesurer la pression au compteur (doit être entre 2 et 4 bars).',
                },
                {
                  signal: 'Fuites répétitives sous évier ou derrière WC',
                  detail: 'Des fuites récurrentes sur les raccords indiquent des joints usés mais aussi parfois des tuyaux fragilisés par l\'oxydation. Si votre plombier intervient plus de deux fois par an au même endroit, une réfection préventive est souvent plus économique.',
                },
                {
                  signal: 'Eau chaude longue à arriver ou insuffisante',
                  detail: 'Ce symptôme peut indiquer un chauffe-eau vétuste (durée de vie 10-15 ans), une chaudière individuelle en fin de vie, ou un cumulus entartré. Vérifiez l\'âge de votre équipement : au-delà de 12 ans, un remplacement préventif est recommandé.',
                },
                {
                  signal: 'Humidité chronique dans les murs',
                  detail: 'Des traces d\'humidité sur les cloisons, notamment en salle de bain ou cuisine, peuvent signaler une fuite cachée dans les gaines techniques. Un diagnostic thermographique permet de localiser la fuite sans ouvrir les murs.',
                },
              ].map((item) => (
                <li key={item.signal} className="bg-[#FAFAF8] rounded-lg p-4 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-1">{item.signal}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{item.detail}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Tableau prix */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Prix de rénovation plomberie à Paris en 2025
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1C1C1C] text-white">
                    <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Prestation</th>
                    <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix indicatif</th>
                    <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Délai</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { prestation: 'Remplacement chauffe-eau électrique (100L)', prix: '600 – 1 200 €', delai: '1 jour' },
                    { prestation: 'Remplacement chaudière individuelle gaz', prix: '2 500 – 5 000 €', delai: '1 à 2 jours' },
                    { prestation: 'Réfection plomberie salle de bain (sans carrelage)', prix: '3 000 – 8 000 €', delai: '3 à 5 jours' },
                    { prestation: 'Remplacement tuyaux en plomb (T3 60 m²)', prix: '5 000 – 12 000 €', delai: '5 à 8 jours' },
                    { prestation: 'Réfection plomberie complète appartement 80 m²', prix: '8 000 – 20 000 €', delai: '8 à 15 jours' },
                    { prestation: 'Remplacement colonne montante (copropriété)', prix: '2 000 – 6 000 €', delai: '2 à 4 jours' },
                    { prestation: 'Création salle de bain (plomberie seule)', prix: '4 000 – 9 000 €', delai: '4 à 6 jours' },
                    { prestation: 'Débouchage canalisation (urgence)', prix: '150 – 400 €', delai: 'Même jour' },
                  ].map((row, i) => (
                    <tr key={row.prestation} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                      <td className="px-4 py-3 text-[#1C1C1C] font-light">{row.prestation}</td>
                      <td className="px-4 py-3 text-center text-[#B8960C] font-light">{row.prix}</td>
                      <td className="px-4 py-3 text-center text-gray-600 font-light">{row.delai}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-xs font-light italic mt-3">
              Prix TTC main d&apos;œuvre + fournitures pour Paris et petite couronne. Variables selon la configuration et l&apos;accessibilité.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 — Types de travaux */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Les principaux travaux de plomberie dans un appartement parisien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les travaux de plomberie dans un appartement parisien se répartissent en trois grandes catégories : la réfection des canalisations, le remplacement des équipements sanitaires et l&apos;installation de nouveaux équipements.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-3">
                Remplacement des canalisations vétustes
              </h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed mb-3">
                Dans les immeubles parisiens construits avant 1970, les canalisations sont souvent en plomb (eau potable) ou en acier galvanisé (eau chaude). Le remplacement consiste à tirer de nouvelles canalisations en cuivre (rénovation classique) ou en PER — polyéthylène réticulé (solution plus économique et rapide, idéale en rénovation). Le PER se glisse dans les gaines existantes sans démolition lourde.
              </p>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                Le remplacement des tuyaux en plomb est obligatoire depuis le 25 décembre 2013 pour les réseaux de distribution d&apos;eau potable. En pratique, dans les copropriétés parisiennes, ce remplacement est souvent réalisé lors des grandes rénovations d&apos;appartement ou imposé par le syndic.
              </p>
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-3">
                Réfection complète salle de bain
              </h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                La rénovation d&apos;une salle de bain à Paris implique plusieurs corps de métier : plombier (canalisations et robinetterie), carreleur (sols et murs), électricien (VMC, prises étanches, sèche-serviette). La plomberie seule représente 30 à 40% du budget total d&apos;une salle de bain rénovée. Comptez 3 000 à 8 000 € pour la plomberie d&apos;une salle de bain de 5 à 8 m² (canalisations, receveur, bac douche, lavabo, WC suspendu, robinetterie).
              </p>
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-3">
                Création d&apos;une salle de bain supplémentaire
              </h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                Créer une salle de bain dans un espace qui n&apos;en avait pas (chambre, débarras, couloir) est possible dans presque tous les appartements parisiens, à condition d&apos;être à moins de 3 à 5 mètres d&apos;une colonne existante. Le raccordement à l&apos;évacuation est l&apos;opération la plus contraignante : il faut créer une pente suffisante et, parfois, installer une pompe de relevage (400 à 800 € supplémentaires).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Copropriété et réglementation */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Plomberie en copropriété parisienne : ce qu&apos;il faut savoir
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Dans un immeuble en copropriété, la plomberie se divise entre parties privatives (dans votre appartement) et parties communes (colonnes montantes, canalisations dans les murs communs). Cette distinction est essentielle pour savoir qui prend en charge les travaux et les éventuels sinistres.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  titre: 'Parties privatives (votre responsabilité)',
                  items: [
                    'Canalisations dans vos murs intérieurs',
                    'Robinetterie et sanitaires',
                    'Chauffe-eau ou chaudière individuelle',
                    'Raccordements aux colonnes (depuis le robinet d\'arrêt privatif)',
                  ],
                },
                {
                  titre: 'Parties communes (copropriété)',
                  items: [
                    'Colonnes montantes d\'eau froide et chaude',
                    'Colonnes d\'évacuation principales',
                    'Canalisations dans les murs porteurs partagés',
                    'Compteur général et réseau principal',
                  ],
                },
              ].map((bloc) => (
                <div key={bloc.titre} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-3">{bloc.titre}</div>
                  <ul className="space-y-1">
                    {bloc.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                        <CheckCircle size={12} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Nos conseils pour réussir votre rénovation plomberie
            </h2>
            <ul className="space-y-3">
              {[
                {
                  conseil: 'Demandez toujours un devis détaillé',
                  detail: 'Un devis de plomberie sérieux détaille les matériaux utilisés (cuivre vs PER, marque des équipements), les jours de main d\'œuvre et les travaux de remise en état (carrelage, cloisons). Méfiez-vous des devis globaux sans détail.',
                },
                {
                  conseil: 'Coupez l\'eau avant tout sinistre',
                  detail: 'En cas de fuite importante, le robinet d\'arrêt général de votre appartement se trouve généralement sous l\'évier de cuisine ou dans la colonne en entrée. Repérez-le maintenant pour agir vite en cas d\'urgence.',
                },
                {
                  conseil: 'Profitez d\'une rénovation pour refaire la plomberie',
                  detail: 'Si vous rénovez votre salle de bain ou votre cuisine, c\'est le bon moment pour remplacer toutes les canalisations cachées dans les murs. Le coût marginal est faible car les murs sont déjà ouverts.',
                },
                {
                  conseil: 'Vérifiez les normes NF P45-204 et DTU 60.1',
                  detail: 'Les travaux de plomberie doivent respecter les DTU (Documents Techniques Unifiés) en vigueur. Un plombier qualifié les connaît. Demandez une attestation de conformité à la fin des travaux, notamment si vous êtes locataire ou en copropriété.',
                },
              ].map((item) => (
                <li key={item.conseil} className="bg-[#FAFAF8] rounded-lg p-4 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-1">{item.conseil}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{item.detail}</div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Pourquoi confier votre plomberie à Espace Design ?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Plombiers qualifiés et assurés décennale',
                'Devis détaillé remis sous 48h',
                'Coordination plomberie + second œuvre (carrelage, peinture)',
                'Respect des normes DTU 60.1 et copropriété',
                'Gestion des démarches syndic si nécessaire',
                'Urgence plomberie Paris — intervention rapide',
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
              { href: '/plomberie-paris', title: 'Plomberie Paris — Espace Design' },
              { href: '/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain Paris' },
              { href: '/blog/renovation-salle-de-bain-paris', title: 'Guide rénovation salle de bain Paris' },
              { href: '/blog/renovation-appartement-ancien-paris', title: 'Rénovation appartement ancien Paris' },
              { href: '/electricite-paris', title: 'Électricité Paris — Espace Design' },
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
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-9e', label: 'Paris 9e' },
              { href: '/renovation-paris-10e', label: 'Paris 10e' },
              { href: '/renovation-paris-15e', label: 'Paris 15e' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
              { href: '/renovation-issy-les-moulineaux', label: 'Issy-les-Moulineaux' },
              { href: '/renovation-levallois-perret', label: 'Levallois-Perret' },
              { href: '/renovation-courbevoie', label: 'Courbevoie' },
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
          Rénovation plomberie à Paris
        </h2>
        <p className="text-gray-400 text-sm font-light mb-8">
          Devis gratuit sous 48h. Plombiers qualifiés et assurés. Coordination complète des travaux.
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
