import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Humidité Appartement Paris', item: 'https://espacedesignparis.fr/blog/humidite-appartement-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Humidité Appartement Paris : causes, traitement & artisan 2025 | Espace Design',
  description: "Traiter l'humidité dans un appartement parisien : remontées capillaires, condensation, infiltrations. Solutions et prix artisan 2025.",
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/humidite-appartement-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix d'un traitement anti-humidité à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le coût d'un traitement anti-humidité à Paris varie selon le type et l'ampleur du problème. Pour la condensation (VMC + enduit assainissant) : 800 à 3 000 €. Pour les remontées capillaires (injection de résine + enduit) : 150 à 300 €/ml de mur traité, soit 3 000 à 8 000 € pour un appartement moyen. Pour les infiltrations par façade ou toiture : 2 000 à 15 000 € selon l'ampleur. Un diagnostic préalable gratuit permet d'identifier précisément le type d'humidité avant tout devis.",
      },
    },
    {
      '@type': 'Question',
      name: 'Comment savoir si mon appartement parisien souffre de remontées capillaires ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les remontées capillaires se manifestent par des taches d'humidité en bas des murs (jusqu'à 1,20 m de hauteur), des efflorescences blanches (salpêtre) sur les murs en pierre ou brique, un cloquage de la peinture au niveau des plinthes, et une odeur de moisi persistante même par temps sec. Ce phénomène est fréquent dans les immeubles parisiens anciens (avant 1950) sans hydrofuge de fondation. Contrairement à la condensation, les taches ne disparaissent pas en aérant.",
      },
    },
    {
      '@type': 'Question',
      name: "L'humidité est-elle à la charge du propriétaire ou du locataire ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La responsabilité dépend de l'origine de l'humidité. Les remontées capillaires, infiltrations par façade ou toiture, et défauts d'isolation sont à la charge du propriétaire (vices structurels). La condensation causée par un mode de vie inadapté (absence de ventilation, séchage du linge en intérieur) est imputée au locataire. Un expert peut établir l'origine lors d'un litige. Le propriétaire doit garantir un logement décent (non humide) : une humidité structurelle non traitée peut justifier une réduction de loyer.",
      },
    },
    {
      '@type': 'Question',
      name: 'La VMC double flux résout-elle les problèmes d\'humidité à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La VMC double flux est très efficace contre la condensation, qui est le type d'humidité le plus répandu dans les appartements parisiens modernes bien isolés. Elle renouvelle l'air intérieur en continu, extrait l'humidité produite par la vie quotidienne (cuisine, douche, respiration) et préchauffé l'air entrant. Coût d'installation : 2 500 à 5 000 € pour un appartement de 50 à 80 m². En revanche, elle n'agit pas sur les remontées capillaires ni sur les infiltrations, qui nécessitent des traitements spécifiques.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Humidité Appartement Paris : causes, traitement & artisan 2025 | Espace Design",
  description: "Traiter l'humidité dans un appartement parisien : remontées capillaires, condensation, infiltrations. Solutions et prix artisan 2025.",
}

export default function ArticleHumiditeAppartement() {
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
            Guides
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Humidité Appartement Paris : causes, traitement et artisan 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            L&apos;humidité est l&apos;un des problèmes les plus courants dans les appartements parisiens, notamment dans le bâti ancien. Condensation, remontées capillaires, infiltrations : identifier correctement la cause est indispensable avant tout traitement. Guide complet 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Les 3 types d'humidité */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les 3 types d&apos;humidité dans un appartement parisien
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Chaque type d&apos;humidité a des causes, des symptômes et des solutions radicalement différents. Confondre condensation et remontées capillaires conduit à des traitements inefficaces et des dépenses inutiles. Le diagnostic est l&apos;étape la plus importante.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              À Paris, les immeubles haussmanniens (pierre de taille, planchers bois) sont particulièrement exposés aux remontées capillaires dans les caves et rez-de-chaussée. Les immeubles des années 1960-1980 (béton, peu ventilés) souffrent davantage de condensation. Les combles et terrasses sont exposés aux infiltrations.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Type 1 : Condensation (le plus fréquent)',
                  detail: 'Apparaît sur les vitres, les murs froids et les ponts thermiques. Causée par un excès d\'humidité intérieure (cuisine, salle de bain, respiration) combiné à une ventilation insuffisante. Symptômes : buée sur les vitres le matin, moisissures noires dans les angles haut des pièces, odeur de renfermé. Traitement : amélioration VMC, déhumidificateur, enduit assainissant.',
                },
                {
                  enjeu: 'Type 2 : Remontées capillaires',
                  detail: 'L\'eau du sol remonte dans les murs par capillarité, comme dans une éponge. Fréquente dans les immeubles parisiens anciens sans barrière hydrofuge. Symptômes : taches en bas des murs (0 à 1,20 m), salpêtre blanc, peinture qui cloque au niveau des plinthes, odeur de cave persistante. Traitement : injection de résine hydrofuge + enduit assainissant.',
                },
                {
                  enjeu: 'Type 3 : Infiltrations',
                  detail: 'L\'eau pénètre depuis l\'extérieur : façade fissurée, toiture défectueuse, terrasse mal étanchée, joint de fenêtre dégradé. Symptômes : taches qui apparaissent ou s\'aggravent lors des pluies, traces en haut des murs ou au plafond (infiltration toiture), humidité localisée autour des fenêtres. Traitement : réparation de la source (façade, toiture, joints) avant tout traitement intérieur.',
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

      {/* Section 2 — Diagnostic */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Diagnostic humidité : traces, moisissures et salpêtre
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Avant tout traitement, il est indispensable d&apos;identifier précisément l&apos;origine de l&apos;humidité. Quelques tests simples permettent déjà d&apos;orienter le diagnostic sans faire appel à un expert.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Test du film plastique',
                solution: 'Coller un carré de film plastique hermétiquement sur le mur humide pendant 48h. Si de la condensation se forme à l\'intérieur du film (côté mur) : remontées capillaires ou infiltration. Si la condensation se forme à l\'extérieur (côté pièce) : condensation atmosphérique.',
                cout: 'Gratuit',
              },
              {
                titre: 'Hygromètre électronique',
                solution: 'Mesurer le taux d\'humidité relative de l\'air. Un taux normal est de 40 à 60%. Au-delà de 70%, le risque de moisissures est élevé. Un hygromètre à 15 € en bricolage permet un premier diagnostic fiable en quelques heures.',
                cout: '15 – 50 €',
              },
              {
                titre: 'Analyse du salpêtre',
                solution: 'Les efflorescences blanches sur les murs (salpêtre, nitrates) sont le signe caractéristique de remontées capillaires ou d\'humidité persistante dans les murs en pierre ou brique. Elles indiquent une migration de l\'eau chargée en minéraux à travers la maçonnerie.',
                cout: 'Observation visuelle',
              },
              {
                titre: 'Diagnostic professionnel',
                solution: 'Un artisan qualifié utilise des détecteurs d\'humidité à sonde (mesure l\'humidité en profondeur dans les murs) et une caméra thermique (identifie les ponts thermiques et les zones froides propices à la condensation). Indispensable avant travaux importants.',
                cout: 'Gratuit sur devis',
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

      {/* Section 3 — Solutions par type */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Solutions et traitements selon le type d&apos;humidité
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Il n&apos;existe pas de solution universelle. Chaque type d&apos;humidité exige un traitement adapté. Appliquer un enduit assainissant sur des remontées capillaires sans traiter la source ne résoudra rien — l&apos;humidité reviendra dans les 6 à 18 mois.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Condensation : VMC + enduit assainissant',
                prix: '800 – 4 000 €',
                detail: 'Première action : vérifier et remettre en état la VMC (simple flux) ou installer une VMC double flux. Deuxième action : traiter les zones touchées par les moisissures avec un produit antifongique, puis appliquer un enduit assainissant respirant et une peinture microperforée. Troisième action : corriger les ponts thermiques (doublage isolant) pour supprimer les surfaces froides.',
              },
              {
                type: 'Remontées capillaires : injection de résine',
                prix: '150 – 300 €/ml',
                detail: 'Technique la plus efficace : injection de résine hydrofuge sous pression dans des perforations horizontales réalisées dans le mur (tous les 10 cm). La résine polymérise et crée une barrière imperméable permanente. Ensuite, démolition des enduits contaminés (minimum 30 cm au-dessus de la zone humide) et application d\'un enduit assainissant de drainage.',
              },
              {
                type: 'Infiltrations : traitement de la source',
                prix: '500 – 15 000 €',
                detail: 'Priorité absolue : traiter la source avant tout travail intérieur. Selon l\'origine : rejointoiement de façade ou hydrofugation (500 à 3 000 €), réfection d\'étanchéité de terrasse (80 à 150 €/m²), remplacement des fenêtres (600 à 1 200 €/unité), réfection de toiture (30 à 80 €/m²). Sans traitement de la source, tout travail intérieur sera inutile.',
              },
              {
                type: 'Enduit assainissant : finition après traitement',
                prix: '20 – 50 €/m²',
                detail: 'L\'enduit assainissant (à base de chaux hydraulique ou de ciment blanc) est appliqué après traitement de la source d\'humidité. Il est perméable à la vapeur d\'eau (respirant), résiste aux efflorescences, et crée une finition saine. Il ne remplace pas le traitement de la cause mais constitue la finition durable après assainissement.',
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

      {/* Section 4 — Budget */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Budget traitement humidité à Paris : récapitulatif des prix 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent pour un appartement parisien, main d&apos;œuvre et matériaux inclus.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Traitement</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix unitaire</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget type</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Durabilité</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    traitement: 'VMC simple flux (remplacement)',
                    unite: '400 – 800 €',
                    budget: '400 – 800 €',
                    duree: '15 ans',
                  },
                  {
                    traitement: 'VMC double flux (installation)',
                    unite: '2 500 – 5 000 €',
                    budget: '2 500 – 5 000 €',
                    duree: '20 ans',
                  },
                  {
                    traitement: 'Injection résine capillaires',
                    unite: '150 – 300 €/ml',
                    budget: '3 000 – 8 000 €',
                    duree: 'Permanente',
                  },
                  {
                    traitement: 'Enduit assainissant',
                    unite: '20 – 50 €/m²',
                    budget: '800 – 3 000 €',
                    duree: '15 – 20 ans',
                  },
                  {
                    traitement: 'Hydrofugation façade',
                    unite: '15 – 35 €/m²',
                    budget: '1 500 – 5 000 €',
                    duree: '10 – 15 ans',
                  },
                  {
                    traitement: 'Étanchéité terrasse',
                    unite: '80 – 150 €/m²',
                    budget: '2 000 – 6 000 €',
                    duree: '10 – 20 ans',
                  },
                ].map((row, i) => (
                  <tr key={row.traitement} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.traitement}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.unite}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.budget}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.duree}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Ce qu&apos;il ne faut pas faire face à l&apos;humidité
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Ne pas repeindre par-dessus des moisissures sans traitement antifongique préalable',
                'Ne pas appliquer un enduit étanche (ciment) sur des remontées capillaires — l\'humidité remontera encore plus haut',
                'Ne pas acheter un déshumidificateur comme seule solution durable — c\'est un palliatif',
                'Ne pas traiter côté intérieur sans identifier et colmater la source extérieure',
                'Ne pas négliger la ventilation — c\'est souvent la solution la plus simple et la moins coûteuse',
                'Ne pas confondre condensation et infiltration — les traitements sont opposés',
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

      {/* Guides connexes */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Guides connexes</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/isolation-phonique-paris', title: 'Isolation phonique Paris' },
              { href: '/blog/isolation-thermique-appartement-paris', title: 'Isolation thermique appartement Paris' },
              { href: '/blog/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain Paris' },
              { href: '/blog/renovation-appartement-ancien-paris', title: 'Rénovation appartement ancien Paris' },
              { href: '/blog/renovation-cave-paris', title: 'Rénovation cave Paris' },
              { href: '/blog/peinture-enduit-paris', title: 'Peinture et enduit Paris' },
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
          Traitez l&apos;humidité de votre appartement parisien
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Identification précise de la source. Devis détaillé sous 48h.
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
