import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Remise aux Normes Électrique Paris', item: 'https://espacedesignparis.fr/blog/remise-aux-normes-electrique-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Remise aux Normes Électriques Paris : NF C 15-100 & prix 2025 | Espace Design',
  description: "Remettre aux normes l'électricité d'un appartement à Paris : NF C 15-100, tableau divisionnaire, prise de terre. Prix 2025.",
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  url: 'https://espacedesignparis.fr/blog/remise-aux-normes-electrique-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "La remise aux normes électrique est-elle obligatoire pour vendre un appartement à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Non, la remise aux normes n'est pas légalement obligatoire pour vendre. En revanche, un diagnostic électrique est obligatoire pour tout appartement de plus de 15 ans mis en vente (depuis 2009). Si ce diagnostic révèle des anomalies (absence de DDR, pas de prise de terre, tableau vétuste), l'acheteur peut s'en servir pour négocier le prix ou demander une mise aux normes avant la vente. Une installation conforme NF C 15-100 valorise significativement le bien.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel est le prix d'une remise aux normes électrique à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix d'une remise aux normes électrique à Paris varie selon la surface et l'état de l'installation existante. Pour un studio (20-30 m²) : 1 500 – 3 000 €. Pour un appartement 2-3 pièces (40-70 m²) : 3 000 – 6 000 €. Pour un appartement 4-5 pièces (80-120 m²) : 5 000 – 10 000 €. Ces prix incluent le remplacement du tableau électrique, la pose des DDR 30 mA, la mise à la terre des prises et circuits, et les saignées si nécessaire.",
      },
    },
    {
      '@type': 'Question',
      name: "Qu'est-ce que la norme NF C 15-100 et pourquoi est-elle importante ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La norme NF C 15-100 est la norme française qui régit les installations électriques dans les locaux d'habitation. Elle définit notamment : le nombre minimal de circuits dédiés par pièce (6 circuits minimum en cuisine), la présence obligatoire de disjoncteurs différentiels 30 mA, la mise à la terre de toutes les prises, les sections de câbles selon les usages, et les règles d'implantation des prises et interrupteurs. Elle a été révisée en 2002 et en 2015. Toute installation antérieure à 2002 est considérée comme non conforme.",
      },
    },
    {
      '@type': 'Question',
      name: "Combien de temps prend la remise aux normes électrique d'un appartement parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La durée dépend de la surface et de l'ampleur des travaux. Pour un studio ou 2 pièces avec installation partielle : 2 à 4 jours. Pour un appartement 3-4 pièces avec refonte complète : 4 à 8 jours. Si des saignées dans les murs sont nécessaires (ancien appartement sans gaines), il faut compter 1 à 2 jours supplémentaires pour les enduits et ragréages. Prévoyez également 1 à 2 semaines pour obtenir le certificat de conformité Consuel.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Remise aux Normes Électriques Paris : NF C 15-100 & prix 2025 | Espace Design',
  description: "Remettre aux normes l'électricité d'un appartement à Paris : NF C 15-100, tableau divisionnaire, prise de terre. Prix 2025.",
}

export default function ArticleRemiseNormesElectriqueParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }} />

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-12 bg-[#1C1C1C]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#D4AF37] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Électricité</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Remise aux Normes Électriques Paris : NF C 15-100 & prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            De nombreux appartements parisiens — haussmanniens, immeubles des années 1960-1980 — disposent d&apos;installations électriques vétustes et non conformes à la norme NF C 15-100. Risques, obligations lors de la vente, travaux à prévoir et prix réels 2025 par un électricien parisien certifié.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les obligations de la norme NF C 15-100 dans un appartement parisien
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              La norme NF C 15-100 définit les règles de sécurité minimales pour les installations électriques résidentielles en France. Dans les appartements parisiens anciens, nombre de ces règles ne sont pas respectées, exposant les occupants à des risques d&apos;électrocution, d&apos;incendie ou de surintensité.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Le parc immobilier parisien compte une proportion élevée d&apos;installations électriques antérieures à 1980, voire à 1970. Ces installations utilisent souvent des câbles en aluminium (dangereux), des fusibles à cartouche (insuffisants), et ne disposent pas de mise à la terre.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Tableau électrique et disjoncteurs différentiels',
                  detail: "Le tableau divisionnaire doit comporter des disjoncteurs différentiels 30 mA (DDR) protégeant chaque circuit. Ces dispositifs coupent l'alimentation en cas de fuite de courant, protégeant des électrocutions. Un tableau vétuste avec fusibles à plomb ou disjoncteurs sans DDR est non conforme NF C 15-100.",
                },
                {
                  enjeu: 'Mise à la terre des prises',
                  detail: "Toutes les prises de courant doivent être équipées d'une fiche de terre (prise 2P+T). La mise à la terre connecte les masses métalliques des appareils au réseau de terre de l'immeuble, évitant les chocs électriques. Dans les appartements anciens sans prise de terre, une installation complète du circuit de terre est nécessaire.",
                },
                {
                  enjeu: 'Nombre de circuits dédiés',
                  detail: "La norme impose un minimum de 6 circuits dédiés pour la cuisine seule : éclairage, prises de courant, four/plaque (circuit dédié 32A), lave-vaisselle, réfrigérateur, micro-ondes. Les appartements haussmanniens avec un seul circuit pour toute la cuisine sont très courants et dangereux.",
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

      {/* Section 2 */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Diagnostic électrique et vente immobilière à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Depuis 2009, le diagnostic électrique est obligatoire pour tout logement de plus de 15 ans mis en vente. Il est réalisé par un diagnostiqueur certifié et fait partie du Dossier de Diagnostic Technique (DDT) remis à l&apos;acheteur.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Diagnostic électrique (DDT)',
                detail: "Obligatoire à la vente pour tout logement de plus de 15 ans. Le diagnostiqueur vérifie le tableau, les DDR, la terre, les prises, les circuits salle de bain. Il classe les anomalies en A (danger immédiat) et B (non-conformité sans danger immédiat). Durée de validité : 3 ans.",
                cout: '80 – 150 €',
              },
              {
                titre: 'Impact sur la négociation',
                detail: "Un rapport avec de nombreuses anomalies de type A peut refroidir les acheteurs ou justifier une négociation du prix. Une remise aux normes préalable à la vente se rentabilise souvent par un meilleur prix de vente et une vente plus rapide.",
                cout: 'Valorisation du bien',
              },
              {
                titre: 'Certificat Consuel',
                detail: "Après remise aux normes, le certificat Consuel atteste de la conformité de l'installation. Il est exigé par Enedis pour la mise en service ou l'augmentation de puissance. Il rassure les acheteurs et les assureurs.",
                cout: '150 – 200 €',
              },
              {
                titre: 'DPE et rénovation électrique',
                detail: "Le chauffage électrique impacte le DPE (Diagnostic de Performance Énergétique). Un appartement chauffé à l'électricité avec une installation vétuste (convecteurs anciens) sera mal classé. La remise aux normes associée à des radiateurs à inertie améliore le confort et peut améliorer le DPE.",
                cout: 'Impact sur DPE',
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

      {/* Section 3 */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Travaux électriques spécifiques aux appartements parisiens
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les contraintes des appartements parisiens — murs épais en pierre, planchers bois anciens, hauteurs sous plafond variables — rendent les travaux d&apos;électricité plus complexes qu&apos;ailleurs.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Saignées dans les murs en pierre',
                prix: '30 – 60 €/ml de saignée',
                detail: "Dans les immeubles haussmanniens, les murs porteurs en pierre de taille ou meulière rendent les saignées laborieuses et coûteuses. Alternativement, les câbles peuvent être posés en apparent sous goulotte PVC ou moulure bois (plus esthétique). Le passage dans les planchers bois (entre deux étages) nécessite une coordination avec les travaux de sol.",
              },
              {
                type: 'Salle de bain : zone IPXX',
                prix: '500 – 1 500 €',
                detail: "La salle de bain est la pièce la plus réglementée : volumes de sécurité (0, 1, 2, 3) définissant les matériels autorisés, DDR 30 mA obligatoire sur le circuit, pas de prise de courant dans le volume 1, liaison équipotentielle entre toutes les masses métalliques. Dans les petites salles de bain parisiennes, la conformité est souvent le premier poste à traiter.",
              },
              {
                type: 'Tableau électrique : remplacement complet',
                prix: '800 – 2 000 €',
                detail: "Le remplacement complet du tableau est souvent nécessaire dans les appartements des années 1960-1990 (tableau à fusibles, tableau sans DDR). Le nouveau tableau doit intégrer : disjoncteur de branchement, interrupteur différentiel de tête 30 mA ou 500 mA, disjoncteurs par circuit, rangement organisé par pièce.",
              },
              {
                type: 'Domotique et smart home',
                prix: '1 000 – 5 000 €',
                detail: "La remise aux normes est l'occasion idéale pour intégrer une installation domotique : interrupteurs connectés, prises USB, éclairage pilotable, thermostat intelligent. Le câblage neuf facilite l'intégration de ces équipements. Un appartement parisien connecté se loue et se vend mieux.",
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

      {/* Budget table */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix remise aux normes électrique à Paris par surface (2025)
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Prix indicatifs main d&apos;œuvre + matériaux, refonte complète de l&apos;installation (câblage + tableau + prises + interrupteurs).
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Surface</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Type logement</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Circuits à prévoir</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix estimatif</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { surface: '20 – 30 m²', type: 'Studio', circuits: '8 – 10', prix: '1 500 – 3 000 €' },
                  { surface: '40 – 60 m²', type: '2-3 pièces', circuits: '12 – 16', prix: '3 000 – 5 500 €' },
                  { surface: '60 – 80 m²', type: '3-4 pièces', circuits: '16 – 20', prix: '4 500 – 7 000 €' },
                  { surface: '80 – 120 m²', type: '4-5 pièces', circuits: '20 – 28', prix: '6 000 – 10 000 €' },
                  { surface: '120 m² et +', type: 'Grand appartement', circuits: '28+', prix: 'Sur devis' },
                ].map((row, i) => (
                  <tr key={row.surface} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.surface}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.type}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.circuits}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">Conseils pour bien préparer sa remise aux normes</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Faites réaliser le diagnostic électrique avant de demander un devis — il identifie précisément les anomalies",
                "Groupez la remise aux normes avec d'autres travaux (peinture, sol) pour limiter les perturbations",
                "Exigez une attestation de conformité Consuel à la fin des travaux",
                "Vérifiez que l'électricien est titulaire de la qualification Qualifelec ou équivalente",
                "Anticipez l'ajout de prises USB, RJ45 et prises extérieures lors de la refonte complète",
                "La puissance souscrite (kVA) doit être adaptée aux usages actuels (cuisine équipée, chauffage électrique)",
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
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-6 text-center">Questions fréquentes</p>
          <div className="space-y-6">
            {schemaFaq.mainEntity.map((q) => (
              <div key={q.name} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-3">{q.name}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{q.acceptedAnswer.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides connexes */}
      <section className="py-12 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Guides connexes</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/renovation-appartement-paris-13e', title: 'Rénovation appartement Paris 13e' },
              { href: '/blog/renovation-appartement-paris-15e', title: 'Rénovation appartement Paris 15e' },
              { href: '/blog/renovation-appartement-paris-17e', title: 'Rénovation appartement Paris 17e' },
              { href: '/blog/renovation-immeuble-paris', title: 'Rénovation immeuble Paris' },
              { href: '/blog/domotique-appartement-paris', title: 'Domotique appartement Paris' },
              { href: '/blog/renovation-bureau-paris', title: 'Rénovation bureau Paris' },
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

      {/* CTA */}
      <section className="py-16 bg-[#D4AF37] text-center px-4">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-4">
          Remettre aux normes l&apos;électricité de votre appartement parisien
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Électriciens certifiés NF C 15-100. Devis sous 48h.
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
