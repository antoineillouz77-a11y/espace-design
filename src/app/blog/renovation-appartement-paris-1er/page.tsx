import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Paris 1er', item: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-1er' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Paris 1er : artisan & prix 2025 | Espace Design',
  description: 'Rénovation appartement dans le 1er arrondissement de Paris : Louvre, Châtelet, Les Halles. Artisan local, devis gratuit 48h.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-1er',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix d'une rénovation dans le 1er arrondissement de Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le 1er arrondissement est l'un des plus chers de Paris pour la rénovation. Les prix varient entre 2 000 et 4 500 €/m² selon l'ampleur des travaux et la nature du bien. Une rénovation légère (peinture, parquet, salle de bain) débute autour de 1 200 à 1 800 €/m². Une rénovation complète d'un appartement de 60 m² dans un immeuble classé proche du Louvre — incluant plâtrerie de prestige, parquet sur mesure, cuisine haute gamme, électricité et plomberie — peut facilement dépasser 200 000 €. Les contraintes ABF, les immeubles entièrement classés et les exigences des copropriétés de prestige sont les principaux facteurs de surcoût.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quelles sont les contraintes ABF dans le 1er arrondissement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le 1er arrondissement est intégralement couvert par des périmètres de protection des Monuments Historiques (Louvre, Sainte-Chapelle, Palais-Royal). Les Architectes des Bâtiments de France exercent un contrôle très strict sur tout ce qui est visible depuis l'extérieur : couleur et style des fenêtres, volets, matériaux de façade, balcons. Toute modification de menuiserie extérieure nécessite une déclaration préalable de travaux, soumise à l'avis conforme de l'ABF. Cet avis peut imposer des matériaux spécifiques (bois peint en teinte historique, double vitrage aux proportions identiques aux fenêtres d'origine) et rallonger les délais de 2 à 4 mois.",
      },
    },
    {
      '@type': 'Question',
      name: 'Faut-il un architecte pour rénover dans le 1er arrondissement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Un architecte n'est pas obligatoire pour les travaux intérieurs inférieurs à 150 m² de surface de plancher créée. En revanche, dans le 1er arrondissement, il est fortement recommandé de faire appel à un architecte du patrimoine ou à un maître d'oeuvre expérimenté : les interactions avec l'ABF et le dépôt de déclarations préalables nécessitent une parfaite connaissance des règles du Plan de Sauvegarde et de Mise en Valeur. Les copropriétés de prestige du 1er exigent souvent des dossiers de travaux très complets avant d'autoriser les chantiers.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Paris 1er : artisan & prix 2025 | Espace Design',
  description: 'Rénovation appartement dans le 1er arrondissement de Paris : Louvre, Châtelet, Les Halles. Artisan local, devis gratuit 48h.',
}

export default function ArticleRenovationParis1er() {
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
            Paris
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Appartement Paris 1er : artisan &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Louvre, Palais-Royal, Châtelet, Les Halles : le 1er arrondissement est le coeur historique de Paris et l&apos;un des plus réglementés de France. Immeubles entièrement classés, ABF omniprésents, copropriétés de prestige exigeantes — rénover dans le 1er requiert une expertise particulière. Guide complet pour vos travaux en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Spécificités du 1er */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Louvre, Palais-Royal, Les Halles : les spécificités du 1er arrondissement
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le 1er arrondissement est l&apos;arrondissement le moins peuplé de Paris (moins de 17 000 habitants) mais l&apos;un des plus denses en monuments historiques classés. Le Louvre, le Palais-Royal, la Sainte-Chapelle, le Pont-Neuf et les jardins des Tuileries constituent autant de périmètres de protection qui couvrent la quasi-totalité de l&apos;arrondissement.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Le parc immobilier du 1er est dominé par des immeubles des 17e, 18e et 19e siècles, avec quelques constructions modernes autour des Halles. Les appartements sont souvent de grande taille (plus de 80 m²), avec des hauteurs sous plafond remarquables (3 à 4 m dans les étages nobles), des parquets anciens en point de Hongrie et des éléments architecturaux de prestige (moulures, cheminées en marbre, boiseries).
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Immeubles entièrement classés aux Monuments Historiques',
                  detail: "Plusieurs immeubles du 1er arrondissement sont classés ou inscrits dans leur intégralité — non seulement la façade mais aussi les parties communes intérieures (escaliers, hall, caves voûtées). Toute modification, même minime, nécessite une autorisation de la Direction Régionale des Affaires Culturelles (DRAC) et un suivi par un architecte du patrimoine.",
                },
                {
                  enjeu: 'Contrôle ABF très strict — déclarations préalables systématiques',
                  detail: "Dans le 1er arrondissement, l'avis de l'Architecte des Bâtiments de France est requis pour tout changement visible depuis la rue : fenêtres, volets, devantures, balcons. L'ABF peut imposer des matériaux spécifiques (bois peint, double vitrage discret, zinc) et refuser des modifications jugées incompatibles avec le caractère historique de l'immeuble. Le délai de réponse est de 2 à 4 mois.",
                },
                {
                  enjeu: 'Copropriétés de prestige — règlements très contraignants',
                  detail: "Les copropriétés du 1er arrondissement ont souvent des règlements très détaillés sur les travaux autorisés : choix des revêtements de sol (parquet imposé, carrelage parfois interdit), interdiction de modifier les cloisons porteuses sans étude préalable, obligations acoustiques renforcées. Avant tout projet, lire attentivement le règlement de copropriété est indispensable.",
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

      {/* Section 2 — Travaux courants */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Travaux courants dans le 1er arrondissement : rénovation de prestige
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La rénovation dans le 1er arrondissement est presque toujours une rénovation de prestige, avec des exigences de finition et de matériaux très élevées. Voici les prestations les plus demandées.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Restauration parquet point de Hongrie',
                detail: "Les parquets anciens en point de Hongrie des appartements du 1er méritent une restauration soignée. Ponçage, rebouchage des lames abîmées à l'identique (chêne massif de récupération), vitrification ou huilage : une restauration bien faite donne une seconde vie à ces parquets d'exception.",
                cout: '40 – 90 €/m²',
              },
              {
                titre: 'Restauration moulures et ornements',
                detail: "Les plafonds à caissons, les corniches à oves, les rosaces et les moulures des appartements du 1er sont des éléments patrimoniaux à conserver. Un plâtrier ornemaniste spécialisé peut reproduire à l'identique les parties manquantes ou endommagées.",
                cout: '150 – 400 €/ml',
              },
              {
                titre: 'Rénovation salle de bain haut de gamme',
                detail: "Dans le 1er arrondissement, les salles de bain sont souvent rénovées avec des matériaux de très haute qualité : marbre de Carrare, robinetterie de marque, douche à l'italienne XL, baignoire îlot. La plomberie doit être entièrement refaite pour supporter ces équipements.",
                cout: '15 000 – 40 000 €',
              },
              {
                titre: 'Mise aux normes électrique complète',
                detail: "Les appartements anciens du 1er nécessitent une mise aux normes NF C 15-100 complète : tableau électrique neuf, mise à la terre, circuits dédiés, éclairage LED à variateur. Dans les immeubles classés, le passage des câbles doit être réalisé sans dommage pour les murs en pierre.",
                cout: '5 000 – 15 000 €',
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.titre}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.cout}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Isolation et contraintes patrimoniales */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Isolation et amélioration thermique dans le 1er arrondissement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;isolation d&apos;un appartement dans le 1er arrondissement est soumise à des contraintes patrimoniales spécifiques. L&apos;isolation par l&apos;extérieur est quasi impossible sur les immeubles classés. Seule l&apos;isolation par l&apos;intérieur est réalisable, avec des matériaux adaptés à la pierre ancienne.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Isolation intérieure sur murs anciens',
                prix: '100 – 180 €/m²',
                detail: "Sur les murs en pierre de taille des immeubles du 1er, l'isolation intérieure doit utiliser des matériaux respirants : laine de bois, chanvre ou liège expansé. Les isolants synthétiques fermés (polystyrène) sont proscrits car ils emprisonnent l'humidité dans la pierre et provoquent des dégradations irréversibles. L'épaisseur du doublage (8 à 12 cm) réduit légèrement la surface habitable.",
              },
              {
                type: 'Remplacement des fenêtres — contraintes ABF',
                prix: '800 – 2 500 € par fenêtre',
                detail: "Dans le 1er arrondissement, le remplacement des fenêtres est soumis à l'avis de l'ABF. Les nouvelles menuiseries doivent respecter les proportions et l'aspect des fenêtres d'origine : bois peint en teinte imposée, petits-bois si présents à l'origine, double vitrage à faible épaisseur de lame d'air. Le PVC est généralement refusé dans les immeubles classés.",
              },
              {
                type: "Amélioration DPE sans toucher à l'extérieur",
                prix: 'Gain 1 à 2 classes DPE',
                detail: "Il est possible d'améliorer significativement le DPE d'un appartement du 1er sans modification extérieure : isolation du plancher bas, isolation du plafond (sous les combles ou le toit), remplacement de la chaudière par un système à condensation ou une pompe à chaleur air-air, et installation d'une VMC hygro-réglable. Ces travaux ne nécessitent pas d'avis ABF.",
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

      {/* Section 4 — Budget et prix */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix de rénovation dans le 1er arrondissement : budget 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent pour un appartement ancien du 1er arrondissement, main d&apos;oeuvre et matériaux inclus. Les surcoûts liés aux contraintes ABF et copropriété peuvent représenter 15 à 25 % du budget total.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Type de rénovation</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Travaux inclus</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix /m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget 60 m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    type: 'Légère',
                    travaux: 'Peinture + parquet restauré + salle de bain',
                    prixM2: '1 200 – 1 800 €',
                    budget: '72 000 – 108 000 €',
                  },
                  {
                    type: 'Standard',
                    travaux: 'Peinture + parquet + cuisine + électricité partielle',
                    prixM2: '1 800 – 2 500 €',
                    budget: '108 000 – 150 000 €',
                  },
                  {
                    type: 'Complète',
                    travaux: "Tout corps d'état : électricité NF C 15-100, plomberie, sol, moulures, cuisine, salle de bain",
                    prixM2: '2 500 – 3 500 €',
                    budget: '150 000 – 210 000 €',
                  },
                  {
                    type: 'Prestige',
                    travaux: 'Complète + restauration patrimoine, matériaux nobles, sur mesure, architecte',
                    prixM2: '3 500 – 6 000 €',
                    budget: '210 000 – 360 000 €',
                  },
                ].map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.type}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.travaux}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prixM2}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.budget}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils pour rénover dans le 1er arrondissement
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Consulter l'ABF avant toute décision sur les fenêtres ou la façade — un refus peut bloquer tout le projet",
                "Lire le règlement de copropriété avant l'achat : certaines restrictions sont très contraignantes",
                "Faire appel à un plâtrier ornemaniste pour restaurer les moulures plutôt que les supprimer",
                "Utiliser des matériaux respirants pour l'isolation des murs en pierre (laine de bois, chanvre)",
                "Anticiper des délais plus longs : ABF, copropriété et artisans spécialisés allongent les plannings",
                "Conserver les éléments patrimoniaux (cheminées, parquet, boiseries) qui valorisent le bien",
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
              { href: '/renovation-appartement-paris', title: 'Rénovation appartement Paris' },
              { href: '/blog/renovation-appartement-paris-2e', title: 'Rénovation appartement Paris 2e' },
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénovation appartement haussmannien' },
              { href: '/blog/renovation-maison-ancienne-paris', title: 'Rénovation maison ancienne Paris' },
              { href: '/contact', title: 'Demander un devis gratuit' },
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
              { href: '/renovation-paris-2e', label: 'Paris 2e' },
              { href: '/renovation-paris-3e', label: 'Paris 3e' },
              { href: '/renovation-paris-4e', label: 'Paris 4e' },
              { href: '/renovation-paris-5e', label: 'Paris 5e' },
              { href: '/renovation-paris-6e', label: 'Paris 6e' },
              { href: '/renovation-paris-7e', label: 'Paris 7e' },
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
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
          Rénovez votre appartement dans le 1er arrondissement
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Artisans spécialisés en immeubles classés et rénovation de prestige. Devis gratuit sous 48h.
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
