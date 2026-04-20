import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Chauffage Appartement Paris', item: 'https://espacedesignparis.fr/blog/chauffage-appartement-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Chauffage Appartement Paris : remplacement, prix & aides 2025',
  description: "Changer son chauffage à Paris : radiateurs à inertie, plancher chauffant, pompe à chaleur. Prix, aides MaPrimeRénov', copropriété. Guide 2025.",
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/chauffage-appartement-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel chauffage choisir pour un appartement parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dans un appartement parisien en copropriété, le remplacement du chauffage individuel dépend du type d'installation collective. Si vous avez des radiateurs électriques : remplacez-les par des radiateurs à inertie (1 200 à 2 500€ pour un T3). Si vous avez une chaudière individuelle : optez pour une chaudière à condensation gaz (3 500-5 000€) ou une pompe à chaleur air/air (4 000-8 000€). Un plancher chauffant électrique coûte 80 à 120€/m².",
      },
    },
    {
      '@type': 'Question',
      name: 'Les aides pour changer son chauffage à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "En 2025, plusieurs aides sont disponibles : MaPrimeRénov' (jusqu'à 5 000€ pour une pompe à chaleur), prime Coup de pouce énergie (500 à 1 500€), TVA à 5,5% sur les équipements et pose, CEE (Certificats d'Économies d'Énergie). Ces aides sont cumulables et peuvent couvrir 30 à 50% du coût total. Condition : faire appel à un artisan RGE.",
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on installer un plancher chauffant dans un appartement ancien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'installation d'un plancher chauffant électrique est possible dans tout appartement, y compris les haussmanniens, à condition que le plancher supporte le poids (rarement problématique). Le plancher chauffant hydraulique est plus complexe en rénovation car il nécessite de raccorder au circuit de chauffage central. Comptez 80 à 150€/m² posé pour un plancher chauffant électrique.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Chauffage Appartement Paris : remplacement, prix & aides 2025",
  description: "Changer son chauffage à Paris : radiateurs à inertie, plancher chauffant, pompe à chaleur. Prix, aides MaPrimeRénov', copropriété. Guide 2025.",
}

export default function ArticleChauffageAppartement() {
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
            Rénovation
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Chauffage Appartement Paris : remplacement, prix & aides 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Changer son système de chauffage à Paris est une décision économique et confortable. Radiateurs à inertie, pompe à chaleur, plancher chauffant : ce guide compare toutes les solutions adaptées aux appartements parisiens, avec les prix et les aides 2025 disponibles.
          </p>
        </div>
      </section>

      {/* Section 1 — Solutions de chauffage */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les solutions de chauffage pour un appartement parisien en 2025
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Le choix du système de chauffage dépend de plusieurs facteurs : type d&apos;installation en copropriété (chauffage collectif ou individuel), surface de l&apos;appartement, niveau d&apos;isolation existant et budget disponible. Voici le comparatif des principales solutions.
            </p>
            <div className="space-y-4">
              {[
                {
                  solution: 'Radiateurs électriques à inertie',
                  cout: '1 500 – 3 000 € (T3)',
                  avantages: 'Installation simple, pas de travaux lourds, programmation fine par pièce, inertie thermique douce.',
                  inconvenients: 'Coût de fonctionnement plus élevé que PAC ou gaz. À éviter dans des appartements mal isolés.',
                  ideal: 'Appartements de moins de 60 m², studios, logements bien isolés.',
                },
                {
                  solution: 'Chaudière individuelle à condensation gaz',
                  cout: '3 500 – 6 000 €',
                  avantages: 'Rendement élevé (90-110%), confort thermique optimal, eau chaude et chauffage combinés, prix de l\'énergie gaz (sous réserve d\'évolution).',
                  inconvenients: 'Dépendant du gaz (réseau à terme, empreinte carbone), entretien annuel obligatoire.',
                  ideal: 'Appartements avec chaudière individuelle à remplacer, T3 et plus, chauffage central existant.',
                },
                {
                  solution: 'Pompe à chaleur air/air (climatisation réversible)',
                  cout: '2 500 – 8 000 €',
                  avantages: 'Chauffage ET climatisation en un seul équipement, COP 3 à 5 (1 kWh électrique = 3 à 5 kWh de chaleur), fonctionnement silencieux.',
                  inconvenients: 'Nécessite l\'accord de la copropriété pour l\'unité extérieure, moins efficace en dessous de -5°C.',
                  ideal: 'Appartements en étage avec accès terrasse ou façade, zones climatiques douces (Paris).',
                },
                {
                  solution: 'Plancher chauffant électrique',
                  cout: '80 – 150 €/m²',
                  avantages: 'Confort thermique maximum (chaleur douce par le sol), zéro encombrement, compatibilité avec tous les revêtements (carrelage, parquet, béton ciré).',
                  inconvenients: 'Coût installation plus élevé, inertie importante (montée en température lente), consommation électrique.',
                  ideal: 'Salle de bain, pièces à vivre avec carrelage, lofts, rénovations complètes.',
                },
              ].map((el) => (
                <div key={el.solution} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="flex items-center justify-between gap-4 mb-2 flex-wrap">
                    <div className="font-medium text-[#1C1C1C] text-sm">{el.solution}</div>
                    <div className="text-[#B8960C] text-xs font-medium">{el.cout}</div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                    <div>
                      <div className="text-xs text-green-700 font-medium mb-1">Avantages</div>
                      <div className="text-gray-600 text-xs font-light leading-relaxed">{el.avantages}</div>
                    </div>
                    <div>
                      <div className="text-xs text-red-600 font-medium mb-1">Limites</div>
                      <div className="text-gray-600 text-xs font-light leading-relaxed">{el.inconvenients}</div>
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-[#B8960C] font-light">Idéal pour : {el.ideal}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tableau comparatif */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Comparatif des coûts de chauffage par an à Paris
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1C1C1C] text-white">
                    <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Système</th>
                    <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Investissement</th>
                    <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Coût annuel (70 m²)</th>
                    <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Aides dispo.</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { sys: 'Radiateurs inertie', invest: '1 500 – 3 000 €', annuel: '1 400 – 2 200 €', aides: 'TVA 5,5%' },
                    { sys: 'Chaudière condensation gaz', invest: '3 500 – 6 000 €', annuel: '900 – 1 400 €', aides: 'CEE + TVA 5,5%' },
                    { sys: 'PAC air/air (clim réversible)', invest: '2 500 – 8 000 €', annuel: '400 – 800 €', aides: 'MaPrimeRénov\' + CEE' },
                    { sys: 'PAC air/eau', invest: '8 000 – 15 000 €', annuel: '500 – 900 €', aides: 'MaPrimeRénov\' jusqu\'à 5 000€' },
                    { sys: 'Plancher chauffant électrique', invest: '80 – 150 €/m²', annuel: '1 000 – 1 800 €', aides: 'TVA 5,5%' },
                  ].map((row, i) => (
                    <tr key={row.sys} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                      <td className="px-4 py-3 text-[#1C1C1C] font-light">{row.sys}</td>
                      <td className="px-4 py-3 text-center text-gray-600 font-light">{row.invest}</td>
                      <td className="px-4 py-3 text-center text-gray-600 font-light">{row.annuel}</td>
                      <td className="px-4 py-3 text-center text-[#B8960C] font-light text-xs">{row.aides}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-xs font-light italic mt-3">
              Estimations sur la base des tarifs énergie 2025. Variables selon la consommation réelle et le niveau d&apos;isolation de l&apos;appartement.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 — Aides financières */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Les aides pour changer son chauffage à Paris en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            En 2025, plusieurs dispositifs permettent de réduire le coût du remplacement ou de l&apos;installation d&apos;un nouveau système de chauffage. Ces aides sont cumulables sous conditions.
          </p>
          <div className="space-y-5">
            <div>
              <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                MaPrimeRénov&apos; — jusqu&apos;à 5 000 € pour une pompe à chaleur
              </h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                MaPrimeRénov&apos; est l&apos;aide principale de l&apos;État pour la rénovation énergétique. Pour l&apos;installation d&apos;une pompe à chaleur individuelle, le montant peut atteindre 5 000 € selon les revenus du foyer (barème 2025). Condition essentielle : l&apos;artisan doit être certifié RGE (Reconnu Garant de l&apos;Environnement). La démarche se fait en ligne sur maprimerenov.gouv.fr avant le début des travaux.
              </p>
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                Prime Coup de pouce énergie — 500 à 1 500 €
              </h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                Le dispositif Coup de Pouce Chauffage (anciennement Prime Énergie) permet de bénéficier d&apos;une aide supplémentaire pour le remplacement d&apos;une chaudière au fioul ou au charbon. Versée directement par les fournisseurs d&apos;énergie (EDF, Engie, TotalEnergies) dans le cadre des CEE. Cumulable avec MaPrimeRénov&apos;.
              </p>
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                TVA à 5,5% sur les travaux de chauffage
              </h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                L&apos;installation d&apos;un système de chauffage dans un logement de plus de 2 ans bénéficie de la TVA réduite à 5,5% (au lieu de 10% pour les travaux standard et 20% taux normal). Cette réduction s&apos;applique sur la fourniture et la pose. Elle concerne les radiateurs à inertie, plancher chauffant, pompes à chaleur et chaudières à condensation.
              </p>
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                Éco-prêt à taux zéro (Éco-PTZ)
              </h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                L&apos;Éco-PTZ permet d&apos;emprunter jusqu&apos;à 50 000 € sans intérêts pour financer des travaux de rénovation énergétique, dont le remplacement du système de chauffage. Accordé par les banques partenaires, il est cumulable avec MaPrimeRénov&apos; depuis 2020. Durée de remboursement : jusqu&apos;à 20 ans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Chauffage collectif vs individuel + conseils */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Chauffage collectif vs chauffage individuel : que faire ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              À Paris, de nombreux immeubles en copropriété fonctionnent avec un chauffage collectif (chaufferie commune en sous-sol ou réseau de chaleur). Dans ce cas, vous ne pouvez pas simplement changer votre système de chauffage sans l&apos;accord de la copropriété.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-3">Chauffage collectif</div>
                <ul className="space-y-2">
                  {[
                    'Le syndic gère la chaudière ou le réseau de chaleur',
                    'Vous payez via les charges de copropriété',
                    'Régulation par pièce possible avec vannes thermostatiques',
                    'Déconnexion individuelle possible sous conditions (DTU 65.14)',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                      <CheckCircle size={12} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-3">Chauffage individuel</div>
                <ul className="space-y-2">
                  {[
                    'Vous êtes libre de choisir et remplacer votre équipement',
                    'Maîtrise complète des réglages et de la consommation',
                    'Accès aux aides individuelles (MaPrimeRénov\')',
                    'Attention aux règlements de copropriété (unité extérieure PAC)',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                      <CheckCircle size={12} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Ce qu&apos;Espace Design propose pour votre chauffage
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Diagnostic thermique gratuit avant travaux',
                'Artisans certifiés RGE — éligibilité aux aides garantie',
                'Coordination électricité + plomberie + chauffage',
                'Accompagnement démarches MaPrimeRénov\' et CEE',
                'Devis détaillé avec simulation économies d\'énergie',
                'TVA à 5,5% appliquée sur fournitures et pose',
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
              { href: '/isolation-paris', title: 'Isolation Paris — Espace Design' },
              { href: '/electricite-paris', title: 'Électricité Paris — Espace Design' },
              { href: '/blog/isolation-thermique-appartement-paris', title: 'Isolation thermique appartement Paris' },
              { href: '/blog/renovation-appartement-ancien-paris', title: 'Rénovation appartement ancien Paris' },
              { href: '/blog/renovation-fenetre-paris', title: 'Rénovation fenêtres Paris' },
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
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
              { href: '/renovation-versailles', label: 'Versailles' },
              { href: '/renovation-saint-germain-en-laye', label: 'Saint-Germain-en-Laye' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
              { href: '/renovation-rueil-malmaison', label: 'Rueil-Malmaison' },
              { href: '/renovation-sevres', label: 'Sèvres' },
              { href: '/renovation-meudon', label: 'Meudon' },
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
          Optimisez le chauffage de votre appartement parisien
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Devis gratuit. Artisans RGE. Aides MaPrimeRénov&apos; accompagnées. Économisez jusqu&apos;à 50% sur votre facture.
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
            className="flex items-center justify-center gap-2 border border-[#1C1C1C]/40 text-[#1C1C1C] px-7 py-3.5 rounded font-light text-sm tracking-wide hover:border-[#1C1C1C] transition-colors"
          >
            <Phone size={14} />
            06 11 78 38 67
          </a>
        </div>
      </section>
    </>
  )
}
