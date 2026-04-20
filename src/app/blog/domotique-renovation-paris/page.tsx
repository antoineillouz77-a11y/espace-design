import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Domotique Rénovation Paris', item: 'https://espacedesignparis.fr/blog/domotique-renovation-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Domotique Rénovation Paris : store, éclairage & thermostat connecté 2025',
  description: 'Intégrer la domotique lors d\'une rénovation à Paris : store motorisé, éclairage LED connecté, thermostat, volets. Prix et guide 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/domotique-renovation-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le budget pour intégrer la domotique lors d\'une rénovation à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pour un appartement parisien de 60 à 80 m², un système domotique complet (stores motorisés, éclairage connecté, thermostat intelligent, volets) coûte entre 2 000 et 8 000 €. Un équipement partiel — thermostat connecté + éclairage LED connecté dans le séjour — peut se faire à partir de 500 – 1 500 €. L\'intégration pendant les travaux de rénovation permet d\'économiser 30 à 50 % par rapport à une installation a posteriori, grâce à la pose simultanée des gaines et câblages.',
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on installer la domotique dans un appartement ancien parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, la domotique sans fil (Z-Wave, Zigbee, RF) est particulièrement adaptée aux appartements anciens parisiens où passer de nouvelles gaines est difficile ou coûteux. Les stores motorisés radio, les interrupteurs connectés (remplacement de l\'interrupteur existant) et les thermostats filaires ou sans fil s\'installent sans démolition. La solution filaire reste préférable lors d\'une rénovation complète pour sa fiabilité et ses performances à long terme.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle marque de store motorisé choisir pour un appartement parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Somfy est la référence en France pour les stores motorisés et volets roulants, avec une gamme complète allant de 300 à 800 € par store installé. Les moteurs Somfy io-homecontrol sont compatibles avec les principales applications domotiques (Apple HomeKit, Google Home, Amazon Alexa). Pour les stores à bandes verticales ou stores vénitiens, la marque Hunter Douglas propose également des solutions motorisées de qualité. Le choix du moteur (filaire ou radio) dépend de l\'accessibilité des gaines lors de la rénovation.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Domotique Rénovation Paris : store, éclairage & thermostat connecté 2025',
  description: 'Intégrer la domotique lors d\'une rénovation à Paris : store motorisé, éclairage LED connecté, thermostat, volets. Prix et guide 2025.',
}

export default function ArticleDomotiqueRenovation() {
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
            Électricité
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Domotique Rénovation Paris : store, éclairage &amp; thermostat connecté 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Intégrer la domotique pendant une rénovation est la meilleure décision que vous puissiez prendre : moins coûteuse, plus propre, plus fiable. Stores motorisés, éclairage LED connecté, thermostat intelligent, volets roulants — guide complet pour un appartement parisien connecté en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Pourquoi intégrer pendant les travaux */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Pourquoi intégrer la domotique pendant la rénovation ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le moment idéal pour installer la domotique dans un appartement parisien, c&apos;est pendant les travaux de second œuvre — quand les murs sont ouverts, le plafond accessible et les électriciens déjà sur place. Intervenir après coup coûte deux à trois fois plus cher et implique des saignées, des reprises de peinture et des passages de câbles visibles.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              La règle d&apos;or : faire passer des gaines vides (gaines ICTA) dans les murs et plafonds lors des travaux de plâtrerie, même si vous n&apos;installez pas les équipements tout de suite. Ces gaines coûtent quelques centaines d&apos;euros à intégrer pendant les travaux et permettent d&apos;installer n&apos;importe quel câblage domotique ultérieurement sans démolition.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Gaines vides et boîtiers d\'encastrement',
                  detail: 'Prévoir des gaines ICTA 20 ou 25 mm entre le tableau électrique et chaque zone domotique (stores, éclairage, volets). Installer des boîtiers d\'encastrement 55 mm (profondeur suffisante pour les micromodules domotiques) partout où des interrupteurs ou prises sont prévus. Coût additionnel : 300 – 800 € pour un appartement complet.',
                },
                {
                  enjeu: 'Câblage éclairage en position centrale',
                  detail: 'Pour les spots encastrés connectés, le câblage doit être prévu en position centrale (un câble par spot ou par groupe de 5 spots maximum). Le câblage en guirlande standard ne permet pas l\'adressage individuel des spots — cette erreur oblige à refaire le câblage si l\'on veut un éclairage connecté ultérieurement.',
                },
                {
                  enjeu: 'Alimentation dédiée stores et volets',
                  detail: 'Chaque store motorisé ou volet roulant motorisé nécessite une alimentation 230V dédiée (phase + neutre + terre). Prévoir un câble 1,5 mm² par motorisation, raccordé au tableau électrique sur un disjoncteur dédié. Cette installation est obligatoire avant la pose des doublages et plafonds.',
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

      {/* Section 2 — Stores motorisés */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Stores motorisés à Paris : Somfy et alternatives
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Dans un appartement parisien haussmannien avec de hautes fenêtres, les stores motorisés sont à la fois un confort quotidien et un atout pour la gestion thermique. La motorisation permet de programmer les stores en fonction de l&apos;heure et de l&apos;ensoleillement.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Store vénitien motorisé',
                solution: 'Contrôle de l\'orientation des lames en plus de la montée/descente. Idéal pour les pièces orientées sud ou ouest à Paris. Moteur radio Somfy compatible smartphone. Temps de pose : 2h par store.',
                cout: '400 – 700 €/store',
              },
              {
                titre: 'Store à bandes verticales motorisé',
                solution: 'Pour les grandes baies vitrées et portes-fenêtres. Motorisation silencieuse (moteur tubulaire). Compatible avec les systèmes de scénarios (lever du soleil = ouverture automatique).',
                cout: '350 – 600 €/store',
              },
              {
                titre: 'Store enrouleur occultant motorisé',
                solution: 'Pour les chambres (obscurcissement total) ou les bureaux (anti-reflet sur écran). Toile occultante disponible dans toutes les dimensions. Moteur filaire ou radio selon accessibilité.',
                cout: '300 – 500 €/store',
              },
              {
                titre: 'Volet roulant motorisé (coffre rénovation)',
                solution: 'Pour les appartements en rez-de-chaussée ou sur rue. Moteur tubulaire 45 ou 50 Nm selon la largeur du volet. Compatible avec les commandes centralisées et les scénarios automatiques.',
                cout: '500 – 900 €/volet',
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.titre}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.cout}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.solution}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Éclairage connecté */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Éclairage LED connecté : spots, ambiances et scénarios
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;éclairage connecté transforme l&apos;ambiance d&apos;un appartement parisien : variation d&apos;intensité, changement de température de couleur, scénarios programmés (soirée cinéma, réveil progressif). Deux approches existent selon le niveau de rénovation.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Spots LED encastrés adressables (Philips Hue)',
                prix: '40 – 80 €/spot',
                detail: 'Remplacement direct des spots existants sans modification du câblage. Chaque spot devient pilotable individuellement via l\'application Hue. Nécessite un pont Hue (60 €) pour la connectivité. Possible sans rénovation, mais l\'intégration pendant les travaux permet un câblage propre et centralisé.',
              },
              {
                type: 'Micromodules domotiques (Legrand Céliane, Fibaro)',
                prix: '80 – 150 €/module',
                detail: 'S\'intègrent dans les boîtiers d\'encastrement existants derrière les interrupteurs. Compatible avec n\'importe quelle ampoule. Protocoles Z-Wave ou Zigbee pour une communication fiable. Idéal pour rendre un éclairage standard connecté sans remplacer les luminaires.',
              },
              {
                type: 'Système filaire KNX (haut de gamme)',
                prix: '150 – 300 €/point lumineux',
                detail: 'Standard professionnel européen pour la domotique résidentielle haut de gamme. Câblage dédié entre chaque composant et un bus central. Fiabilité maximale, évolutivité totale. Nécessite une installation pendant les travaux (câblage impossible a posteriori). Compatible avec toutes les interfaces.',
              },
              {
                type: 'Ruban LED connecté (ambiances)',
                prix: '30 – 80 €/mètre linéaire',
                detail: 'Éclairage indirect intégré dans les faux-plafonds, meubles ou cornières lors de la rénovation. Variation RGB ou blanc dynamique selon le modèle. Intégré aux scénarios domotiques (lever de soleil, soirée). Nécessite une alimentation 12 ou 24V intégrée dans le faux-plafond.',
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

      {/* Section 4 — Thermostat connecté */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Thermostat connecté : Netatmo, Nest et alternatives
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
            Le thermostat connecté est l&apos;équipement domotique au retour sur investissement le plus rapide : les économies d&apos;énergie réalisées (15 à 25 % sur la facture de chauffage) amortissent le coût d&apos;achat en 1 à 2 ans.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Netatmo Smart Thermostat',
                prix: '150 – 200 €',
                detail: 'Marque française (filiale Legrand), très présent dans les appartements parisiens. Compatible avec les chaudières gaz (la majorité des immeubles parisiens), les planchers chauffants et les systèmes bi-zones. Contrôle par app ou voix (Alexa, Google, Siri). Installation en remplacement du thermostat existant — sans travaux si l\'appartement est déjà câblé.',
              },
              {
                type: 'Google Nest Learning Thermostat',
                prix: '180 – 250 €',
                detail: 'Apprentissage automatique des habitudes et adaptation du planning de chauffage en conséquence. Compatible avec la plupart des chaudières européennes. Détecteur de présence intégré (passage en mode éco si personne à la maison). S\'intègre parfaitement dans un écosystème Google Home.',
              },
              {
                type: 'Thermostats avec vannes connectées (Tado, Evohome)',
                prix: '300 – 600 € (kit complet)',
                detail: 'Pour les appartements avec radiateurs à eau (immeubles haussmanniens typiques). Vannes thermostatiques connectées sur chaque radiateur, pilotées individuellement. Permet un chauffage pièce par pièce avec gestion fine de la consommation. Plus complexe à installer, souvent réalisé pendant la rénovation plomberie.',
              },
            ].map((el) => (
              <div key={el.type} className="bg-white rounded-lg p-5 border border-gray-100">
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

      {/* Section 5 — Budget global */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Budget domotique global pour un appartement parisien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent pour un appartement parisien de 60 à 80 m², fourniture et pose incluses, lors d&apos;une rénovation complète.
          </p>

          <div className="mb-8">
            <div className="grid grid-cols-3 gap-0 bg-[#1C1C1C] rounded-t-lg">
              <div className="px-4 py-3 text-white text-xs font-light uppercase tracking-wider">Équipement</div>
              <div className="px-4 py-3 text-white text-xs font-light uppercase tracking-wider text-center">Budget indicatif</div>
              <div className="px-4 py-3 text-white text-xs font-light uppercase tracking-wider text-center">Priorité</div>
            </div>
            {[
              { eq: 'Thermostat connecté', budget: '150 – 300 €', prio: 'Haute', even: true },
              { eq: 'Éclairage connecté (séjour + chambre)', budget: '500 – 1 500 €', prio: 'Moyenne', even: false },
              { eq: 'Stores motorisés (3 stores)', budget: '1 200 – 2 500 €', prio: 'Confort', even: true },
              { eq: 'Volets roulants motorisés (2)', budget: '1 000 – 1 800 €', prio: 'Sécurité', even: false },
              { eq: 'Système domotique centralisé (hub + app)', budget: '200 – 800 €', prio: 'Option', even: true },
              { eq: 'Installation complète (appartement 60 m²)', budget: '2 000 – 8 000 €', prio: 'Total', even: false },
            ].map((row) => (
              <div key={row.eq} className={`grid grid-cols-3 gap-0 border-b border-gray-100 ${row.even ? 'bg-white' : 'bg-[#FAFAF8]'}`}>
                <div className="px-4 py-3 text-[#1C1C1C] font-medium text-sm">{row.eq}</div>
                <div className="px-4 py-3 text-center text-[#B8960C] font-medium text-sm">{row.budget}</div>
                <div className="px-4 py-3 text-center text-gray-600 font-light text-sm">{row.prio}</div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils pour bien planifier sa domotique en rénovation
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Toujours prévoir des gaines vides supplémentaires — elles ne coûtent presque rien et évitent de tout casser ensuite',
                'Choisir un protocole domotique unique (Z-Wave ou Zigbee) pour éviter la multiplication des ponts/concentrateurs',
                'Commencer par le thermostat connecté : retour sur investissement le plus rapide',
                'Intégrer les prises 230V de motorisation avant la pose des doublages et plafonds',
                'Prévoir un tableau électrique avec des disjoncteurs dédiés pour chaque zone domotique',
                'Tester la compatibilité de chaque équipement avec votre assistant vocal avant achat',
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
              { href: '/electricite-paris', title: 'Électricité Paris' },
              { href: '/blog/renovation-bureau-paris', title: 'Rénovation bureau Paris' },
              { href: '/blog/renovation-complete-appartement-paris', title: 'Rénovation complète appartement Paris' },
              { href: '/blog/isolation-phonique-paris', title: 'Isolation phonique Paris' },
              { href: '/blog/renovation-immeuble-ancien-paris', title: 'Rénovation immeuble ancien Paris' },
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
          Intégrez la domotique dans votre rénovation parisienne
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis détaillé sous 48h. Artisans spécialisés en rénovation et électricité Paris.
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
