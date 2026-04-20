import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Domotique appartement Paris', item: 'https://espacedesignparis.fr/blog/domotique-appartement-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Domotique Appartement Paris : prix, installation & marques 2025',
  description: "Domotique dans un appartement parisien : volets automatiques, éclairage connecté, thermostat, interphone vidéo. Prix et installation. Guide 2025.",
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/domotique-appartement-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Combien coûte l'installation de la domotique dans un appartement à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Une installation domotique dans un appartement parisien coûte entre 3 000 et 20 000 € selon le niveau d'automatisation. Un package de base (thermostat connecté + volets + éclairage dans 3 pièces) revient à 3 000-6 000 €. Un système complet avec gestion centralisée, volets, éclairage, sécurité et chauffage dans tout l'appartement : 10 000 à 20 000 €.",
      },
    },
    {
      '@type': 'Question',
      name: "La domotique est-elle compatible avec un appartement haussmannien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui. Les solutions sans-fil (Z-Wave, Zigbee, WiFi) permettent d'installer la domotique sans travaux de gros œuvre. Idéal dans les appartements en copropriété ou classés. Seule contrainte : l'alimentation électrique des actionneurs (volets, stores) peut nécessiter une mise aux normes électrique préalable.",
      },
    },
    {
      '@type': 'Question',
      name: "Quels sont les équipements domotiques les plus utiles dans un appartement parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Par ordre de popularité : 1. Thermostat connecté (économies de chauffage immédiates), 2. Volets motorisés (confort quotidien, sécurité), 3. Éclairage connecté (scènes lumière, économies), 4. Serrure connectée (Airbnb, téléservice), 5. Interphone vidéo (sécurité, accès à distance). Ces 5 équipements représentent 80% des installations parisiennes.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Domotique Appartement Paris : prix, installation & marques 2025',
  description: "Domotique dans un appartement parisien : volets automatiques, éclairage connecté, thermostat, interphone vidéo. Prix et installation. Guide 2025.",
}

export default function ArticleDomotiqueAppartement() {
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
            Domotique Appartement Paris : prix, installation & marques 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Volets motorisés, éclairage connecté, thermostat intelligent, serrure connectée — la domotique transforme le quotidien dans un appartement parisien. Tour d&apos;horizon des solutions, des prix et des marques en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Protocoles */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Fil ou sans-fil ? Les protocoles domotiques expliqués
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Le choix du protocole domotique conditionne l&apos;ampleur des travaux et la fiabilité du système. Dans un appartement parisien — souvent en copropriété avec des murs épais en pierre — le sans-fil est généralement préféré pour limiter les modifications.
            </p>
            <div className="space-y-4">
              {[
                {
                  proto: 'WiFi',
                  usage: 'Thermostat, interphone, caméra, petits équipements',
                  avantage: 'Très facile à installer, compatible smartphone, large choix de produits',
                  inconvenient: 'Dépend du routeur, consommation électrique, sécurité à renforcer',
                },
                {
                  proto: 'Zigbee',
                  usage: 'Éclairage, capteurs, prises connectées',
                  avantage: 'Faible consommation, maillage réseau (chaque appareil étend la portée), open source',
                  inconvenient: 'Nécessite un hub (bridge) centralisateur comme Philips Hue ou IKEA Dirigera',
                },
                {
                  proto: 'Z-Wave',
                  usage: 'Volets, alarme, gestion multiroom complète',
                  avantage: 'Très fiable, fréquence dédiée (pas de conflit WiFi), excellent maillage',
                  inconvenient: 'Hub obligatoire, moins de produits grand public, coût plus élevé',
                },
                {
                  proto: 'Radio Fréquence (io-homecontrol / RTS)',
                  usage: 'Volets Somfy, stores motorisés',
                  avantage: 'Technologie éprouvée, Somfy est le leader du volet motorisé en France',
                  inconvenient: 'Écosystème fermé, compatible uniquement produits Somfy',
                },
              ].map((el) => (
                <div key={el.proto} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-3">{el.proto}</div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-gray-600 font-light">
                    <div><span className="text-[#1C1C1C] font-medium">Usage : </span>{el.usage}</div>
                    <div><span className="text-[#1C1C1C] font-medium">Avantage : </span>{el.avantage}</div>
                    <div><span className="text-[#1C1C1C] font-medium">Limite : </span>{el.inconvenient}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tableau prix par équipement */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Tableau des prix par équipement domotique
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1C1C1C] text-white">
                    <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Équipement</th>
                    <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Matériel</th>
                    <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Installation</th>
                    <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Total estimé</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { eq: 'Thermostat connecté', mat: '150 – 350 €', install: '150 – 250 €', total: '300 – 600 €' },
                    { eq: 'Volet motorisé (par volet)', mat: '250 – 600 €', install: '150 – 300 €', total: '400 – 900 €' },
                    { eq: 'Éclairage connecté (3 pièces)', mat: '300 – 800 €', install: '200 – 400 €', total: '500 – 1 200 €' },
                    { eq: 'Serrure connectée', mat: '200 – 600 €', install: '100 – 200 €', total: '300 – 800 €' },
                    { eq: 'Interphone vidéo IP', mat: '300 – 800 €', install: '200 – 400 €', total: '500 – 1 200 €' },
                    { eq: 'Alarme connectée complète', mat: '500 – 1 500 €', install: '300 – 600 €', total: '800 – 2 100 €' },
                  ].map((row, i) => (
                    <tr key={row.eq} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                      <td className="px-4 py-3 text-[#1C1C1C] font-light">{row.eq}</td>
                      <td className="px-4 py-3 text-center text-gray-600 font-light">{row.mat}</td>
                      <td className="px-4 py-3 text-center text-gray-600 font-light">{row.install}</td>
                      <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Marques */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Les marques domotiques recommandées à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le marché domotique est vaste. Voici les marques que nous installons le plus souvent dans les appartements parisiens, pour leur fiabilité et leur compatibilité entre produits.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                marque: 'Somfy',
                domaine: 'Volets, stores, portails',
                avis: "Leader incontesté en France. La télécommande Somfy est un standard dans les appartements parisiens. Compatibilité avec Alexa, Google Home et Apple HomeKit via la box Tahoma.",
              },
              {
                marque: 'Legrand / Netatmo',
                domaine: 'Électricité connectée, thermostat',
                avis: "Legrand est le référent de l'électricité en France. Le thermostat Netatmo (racheté par Legrand) est l'un des plus fiables du marché, avec une interface exemplaire.",
              },
              {
                marque: 'Philips Hue',
                domaine: 'Éclairage connecté',
                avis: "L'écosystème Hue (protocole Zigbee) est le plus complet du marché. Ambiances, scènes, synchronisation TV. Compatible avec tous les assistants vocaux.",
              },
              {
                marque: 'Schneider Electric',
                domaine: 'Tableaux connectés, gestion énergie',
                avis: "Pour aller plus loin dans la gestion de l'énergie : tableau électrique connecté, suivi de consommation en temps réel, délestage automatique. Très apprécié dans les logements avec pompe à chaleur.",
              },
              {
                marque: 'Yale / Nuki',
                domaine: 'Serrures connectées',
                avis: "Deux solutions fiables pour la serrure connectée. Nuki se pose sur la serrure existante sans modifier la porte — idéal en copropriété. Yale nécessite le remplacement du cylindre pour une intégration plus poussée.",
              },
              {
                marque: 'Doorbird / Comelit',
                domaine: 'Interphone vidéo IP',
                avis: "Doorbird est la référence des interphones vidéo connectés haut de gamme. Comelit est davantage orienté résidentiel collectif. Les deux permettent de voir et d'ouvrir depuis son smartphone partout dans le monde.",
              },
            ].map((el) => (
              <div key={el.marque} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-1">{el.marque}</div>
                <div className="text-[#B8960C] text-xs font-light mb-2">{el.domaine}</div>
                <div className="text-gray-600 text-xs font-light leading-relaxed">{el.avis}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Haussmannien + Aides */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Domotique sans travaux : la solution idéale en copropriété
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              L&apos;un des freins à la domotique dans les appartements parisiens est la crainte des travaux importants. Bonne nouvelle : les solutions sans-fil (Zigbee, Z-Wave, WiFi) permettent d&apos;installer la quasi-totalité des équipements domotiques sans percement, sans tirage de câbles supplémentaires et sans modification des gaines existantes.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Seule contrainte réelle : les volets motorisés nécessitent une alimentation électrique au niveau de la fenêtre. Si votre tableau électrique est récent, cette alimentation est souvent déjà prévue. Sinon, un électricien crée un circuit dédié — travaux légers intégrés dans la rénovation ou réalisés de façon indépendante.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Thermostat connecté : pose en 30 minutes, aucun câble supplémentaire',
                'Éclairage Hue : remplace simplement les ampoules existantes',
                'Serrure Nuki : se fixe sur l\'intérieur de la serrure sans perçage de porte',
                'Capteurs de fenêtre : adhésif, aucune modification',
                'Caméra intérieure : simple prise secteur',
                'Box domotique : branchée en RJ45 sur votre box internet',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                  <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Aides financières pour la domotique
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              La domotique en elle-même ne bénéficie pas d&apos;aides directes spécifiques. En revanche, certains équipements associés à une démarche d&apos;efficacité énergétique sont éligibles :
            </p>
            <ul className="space-y-3">
              {[
                { item: 'Thermostat connecté programmable', aide: 'Éligible aux certificats CEE (Coup de pouce chauffage) et parfois à MaPrimeRénov\' en combinaison avec d\'autres travaux.' },
                { item: 'Volets motorisés associés à un double vitrage', aide: 'L\'ensemble fenêtre + volets peut être intégré dans un dossier MaPrimeRénov\' de rénovation thermique globale.' },
                { item: 'Éco-PTZ', aide: 'Financement jusqu\'à 30 000 € sans intérêts pour l\'ensemble d\'un projet de rénovation énergétique incluant la domotique thermique.' },
              ].map((el) => (
                <li key={el.item} className="bg-[#FAFAF8] rounded-lg p-4 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-1">{el.item}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.aide}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Voir aussi */}
      <section className="py-12 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Voir aussi</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/electricite-paris', title: 'Électricité Paris' },
              { href: '/blog/electricite-appartement-paris', title: 'Électricité appartement Paris' },
              { href: '/renovation-appartement-paris', title: 'Rénovation appartement Paris' },
              { href: '/isolation-paris', title: 'Isolation Paris' },
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
              { href: '/renovation-paris-6e', label: 'Paris 6e' },
              { href: '/renovation-paris-7e', label: 'Paris 7e' },
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-paris-17e', label: 'Paris 17e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
              { href: '/renovation-levallois-perret', label: 'Levallois-Perret' },
              { href: '/renovation-versailles', label: 'Versailles' },
              { href: '/renovation-saint-germain-en-laye', label: 'Saint-Germain-en-Laye' },
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
          Rendre votre appartement parisien intelligent
        </h2>
        <p className="text-gray-400 text-sm font-light mb-8">
          Audit domotique gratuit. Installation par des électriciens certifiés. Prise en main incluse.
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
