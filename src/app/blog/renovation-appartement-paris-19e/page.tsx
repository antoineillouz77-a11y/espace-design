import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Paris 19e', item: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-19e' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Paris 19e : Buttes-Chaumont, Belleville & prix 2025 | Espace Design',
  description: 'Artisan rénovation Paris 19e arrondissement. Buttes-Chaumont, Belleville, La Villette, quartiers en mutation. Prix 2025, devis sous 48h.',
  datePublished: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-19e',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix au m² pour rénover un appartement dans le 19e arrondissement de Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dans le 19e arrondissement, les prix de rénovation varient de 400 à 600 €/m² pour un simple rafraîchissement et de 1 000 à 1 900 €/m² pour une rénovation complète. Le 19e étant l\'un des arrondissements les moins chers de Paris (prix d\'achat 8 000–10 500 €/m²), les investisseurs réalisent souvent des rénovations complètes pour maximiser la valeur locative. Le ratio rénovation/valorisation est parmi les meilleurs de Paris dans les secteurs Buttes-Chaumont et Crimée.',
      },
    },
    {
      '@type': 'Question',
      name: 'Le 19e est-il un bon arrondissement pour investir et rénover ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le 19e arrondissement est l\'un des secteurs les plus dynamiques de Paris pour l\'investissement avec rénovation. Les prix d\'achat sont parmi les plus bas de Paris intra-muros (8 000–10 500 €/m²) et la demande locative est forte, portée par les étudiants, les jeunes actifs et les familles attirées par les espaces verts (Buttes-Chaumont, La Villette). La gentrification accélérée du 19e (notamment autour de Belleville et du canal de l\'Ourcq) fait monter les prix post-rénovation significativement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quels sont les types d\'immeubles qu\'on trouve dans le 19e arrondissement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le 19e présente une grande diversité architecturale : immeubles haussmanniens dans les secteurs Buttes-Chaumont et Bolivar, immeubles de faubourg populaires (3–5 étages sans ascenseur) dans Belleville et Crimée, quelques HLM et cités de la fin des années 60, et quelques opérations récentes le long du canal de l\'Ourcq. Les appartements dans les immeubles anciens (avant 1948) sont souvent dans un état nécessitant une rénovation complète, représentant les meilleures opportunités d\'investissement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelles aides financières peut-on obtenir pour rénover dans le 19e arrondissement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le 19e arrondissement est éligible à toutes les aides nationales de rénovation énergétique : MaPrimeRénov (jusqu\'à 70 % du coût de l\'isolation pour les ménages modestes), CEE (Certificats d\'Économies d\'Énergie) sur l\'isolation et le chauffage, éco-PTZ (prêt à taux zéro jusqu\'à 50 000 €), TVA à 5,5 % sur les travaux d\'amélioration de la performance énergétique. Certains logements situés dans des Quartiers Prioritaires de la Ville (QPV) peuvent bénéficier d\'aides complémentaires de la Ville de Paris.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Paris 19e : Buttes-Chaumont, Belleville & prix 2025 | Espace Design',
  description: 'Artisan rénovation Paris 19e arrondissement. Buttes-Chaumont, Belleville, La Villette, prix 2025. Devis gratuit sous 48h.',
  keywords: [
    'rénovation appartement paris 19e',
    'artisan rénovation 19e arrondissement',
    'rénovation buttes-chaumont paris',
    'travaux appartement belleville 19e',
    'prix rénovation paris 19e 2025',
    'rénovation la villette paris',
    'entrepreneur rénovation paris 19',
  ],
}

export default function ArticleRenovationParis19() {
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
            Paris 19e arrondissement
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Appartement Paris 19e : Buttes-Chaumont, Belleville &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Buttes-Chaumont, Belleville, La Villette, Crimée, canal de l&apos;Ourcq : le 19e arrondissement est l&apos;un des quartiers parisiens en mutation les plus rapides. Anciens faubourgs populaires en pleine gentrification, mix d&apos;immeubles anciens et de constructions modernes, forte demande locative et prix d&apos;achat encore accessibles. Espace Design intervient dans tout le 19e, devis sous 48h.
          </p>
        </div>
      </section>

      {/* Section 1 — Quartiers */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Le parc immobilier du 19e : anciens faubourgs en pleine transformation
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le 19e arrondissement présente l&apos;un des parcs immobiliers les plus hétérogènes de Paris. Ancienne commune de Belleville annexée en 1860, le 19e a longtemps été un arrondissement populaire et ouvrier. Il connaît depuis les années 2010 une gentrification accélérée, notamment autour des Buttes-Chaumont, de Belleville et du canal de l&apos;Ourcq, qui en fait l&apos;un des meilleurs secteurs pour l&apos;investissement immobilier avec rénovation.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Buttes-Chaumont – Bolivar : le secteur le plus valorisé du 19e',
                  detail: 'Le quartier des Buttes-Chaumont est le plus prisé du 19e. Les immeubles y sont principalement haussmanniens et de rapport des années 1890–1930, avec des appartements familiaux (60–100 m²) en bon état général. La proximité du parc des Buttes-Chaumont, l\'un des plus grands de Paris, constitue un attrait majeur. Les prix post-rénovation peuvent atteindre 10 500–12 000 €/m², justifiant des rénovations complètes ambitieuses.',
                },
                {
                  enjeu: 'Belleville – Jourdain : gentrification et mix culturel',
                  detail: 'Belleville est à cheval sur les 19e et 20e arrondissements. Le secteur est en pleine transformation, attirant artistes, bobos et jeunes actifs. Le parc immobilier mêle immeubles de faubourg populaires (souvent sans ascenseur, 3–5 étages), quelques haussmanniens tardifs et des opérations récentes. Les appartements dans leur jus sont encore nombreux et représentent d\'excellentes opportunités d\'investissement.',
                },
                {
                  enjeu: 'La Villette – Crimée – canal de l\'Ourcq : renouveau urbain',
                  detail: 'Le secteur La Villette et les bords du canal de l\'Ourcq connaissent une transformation urbaine profonde depuis la réhabilitation des anciens entrepôts. Le tissu résidentiel est varié : logements sociaux, immeubles de rapport des années 50–70, et quelques constructions récentes. C\'est le secteur le plus abordable du 19e (8 000–9 500 €/m²) et celui avec le plus fort potentiel de hausse à moyen terme.',
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
            Types de travaux les plus demandés dans le 19e arrondissement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le profil du 19e génère une forte demande de rénovation complète, notamment de la part des investisseurs attirés par les prix d&apos;achat encore accessibles et la demande locative soutenue.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Rénovation complète investisseur (logement dans son jus)',
                solution: 'Le 19e est l\'arrondissement des appartements dans leur jus : papier peint d\'origine, cuisine 1970, plomberie en plomb, électricité hors normes. Rénovation totale en vue de mise en location ou revente : dépose complète, remplacement tous réseaux, cuisine, salle de bain, sols, peinture. Livraison clé en main.',
                cout: '1 000 – 1 800 €/m²',
              },
              {
                titre: 'Réfection plomberie complète (plomb et acier)',
                solution: 'Les immeubles d\'avant 1949 du 19e ont souvent des canalisations en plomb à remplacer (obligatoire pour la mise en location). Les immeubles des années 50–70 ont des colonnes en acier galvanisé corrodées. Remplacement complet par du cuivre ou du PER, mise aux normes des évacuations, nouveau chauffe-eau.',
                cout: '5 000 – 15 000 €',
              },
              {
                titre: 'Création salle de bain dans les petits appartements',
                solution: 'Nombreux sont les studios et 2 pièces du 19e sans salle de bain indépendante (WC sur palier hérité des immeubles ouvriers). Création d\'une salle d\'eau ex nihilo dans un espace dédié : gestion hydraulique, aération, isolation. Transformation radicale de la valeur locative.',
                cout: '7 000 – 16 000 €',
              },
              {
                titre: 'Réfection électrique complète',
                solution: 'Remplacement des installations électriques vétustes (fils en coton, absence de mise à la terre) dans les immeubles anciens du 19e. Nouveau tableau aux normes NF C 15-100, circuits dédiés cuisine et salle de bain, prises USB, préparation VMC. Incontournable avant toute mise en location.',
                cout: '4 000 – 11 000 €',
              },
              {
                titre: 'Rénovation partielle pour bailleur (optimisation DPE)',
                solution: 'Pour les bailleurs dont le bien est classé F ou G, rénovation ciblée sur la performance énergétique : isolation des murs (doublage intérieur), remplacement des fenêtres, nouveau système de chauffage (pompe à chaleur). Objectif : passer en classe D ou C pour continuer à louer après 2025.',
                cout: '700 – 1 400 €/m²',
              },
              {
                titre: 'Rafraîchissement pour vente rapide',
                solution: 'Mise en valeur d\'un appartement avant vente : peinture toutes pièces (couleurs neutres), remplacement du sol (stratifié ou parquet flottant), nettoyage et relooking de la cuisine et salle de bain. Résultat : appartement présentable, vendu 10 à 15 % plus cher qu\'en l\'état.',
                cout: '400 – 600 €/m²',
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

      {/* Section 3 — Contraintes */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Contraintes et spécificités de la rénovation dans le 19e arrondissement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La rénovation dans le 19e présente des défis liés à l&apos;état du bâti ancien et aux contraintes logistiques des immeubles sans ascenseur. Voici les points à anticiper.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Immeubles sans ascenseur : logistique de chantier',
                prix: 'Surcoût 10 – 20 %',
                detail: 'La majorité des immeubles anciens de Belleville et Crimée n\'ont pas d\'ascenseur. La livraison des matériaux lourds (carrelage, baignoire, chauffe-eau) et l\'évacuation des gravats se font à la main dans les escaliers étroits. Ce surcoût logistique est anticipé dans nos devis et inclus dans le prix final.',
              },
              {
                type: 'Plomb, amiante et diagnostics obligatoires',
                prix: '200 – 600 € (diagnostics)',
                detail: 'Les immeubles anciens du 19e (très nombreux bâtiments d\'avant 1949) sont soumis au diagnostic plomb (CREP) et amiante avant travaux. La présence de plomb dans les peintures et les canalisations est fréquente. En cas de détection, les modes opératoires de démolition sont stricts. Ces diagnostics sont à réaliser avant tout démarrage de chantier.',
              },
              {
                type: 'Copropriétés en difficulté : syndics bénévoles',
                prix: 'Délai variable',
                detail: 'Certaines copropriétés du 19e (notamment les petits immeubles de faubourg) fonctionnent avec des syndics bénévoles peu disponibles. Les délais d\'obtention des autorisations de travaux peuvent être longs. Notre coordinateur de travaux vous accompagne dans ces démarches et peut relancer le syndic si nécessaire.',
              },
              {
                type: 'Réseaux collectifs partagés et colonnes montantes',
                prix: 'Coordination syndic obligatoire',
                detail: 'Dans les petits immeubles anciens du 19e, les colonnes montantes d\'eau et les évacuations collectives sont souvent partagées entre plusieurs appartements. Toute intervention sur ces réseaux nécessite une coordination avec les voisins et le syndic, et parfois une coupure d\'eau pour toute la colonne. Cette contrainte est anticipée dans notre planning de chantier.',
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
            Prix rénovation appartement Paris 19e : tableau récapitulatif 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Estimations main d&apos;œuvre et matériaux inclus, pour des appartements type du 19e arrondissement de Paris.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Niveau</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prestations</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Total 50 m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    niveau: 'Rafraîchissement',
                    prestations: 'Peinture + sol + petites réparations',
                    prixM2: '400 – 600 €',
                    total: '20 000 – 30 000 €',
                  },
                  {
                    niveau: 'Rénovation partielle',
                    prestations: 'Cuisine ou SDB + peinture + sol',
                    prixM2: '650 – 1 100 €',
                    total: '32 000 – 55 000 €',
                  },
                  {
                    niveau: 'Rénovation complète',
                    prestations: 'Cuisine + SDB + électricité + plomberie + sols',
                    prixM2: '1 000 – 1 700 €',
                    total: '50 000 – 85 000 €',
                  },
                  {
                    niveau: 'Haut de gamme',
                    prestations: 'Tout compris + matériaux premium + isolation',
                    prixM2: '1 700 – 2 400 €',
                    total: '85 000 – 120 000 €',
                  },
                ].map((row, i) => (
                  <tr key={row.niveau} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.niveau}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.prestations}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prixM2}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Checklist avant de démarrer une rénovation dans le 19e
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Commander le diagnostic plomb (CREP) et amiante avant travaux',
                'Vérifier la présence d\'un ascenseur et anticiper le surcoût logistique',
                'Consulter le règlement de copropriété et identifier le syndic responsable',
                'Prévoir la coordination pour les coupures d\'eau sur colonnes communes',
                'Vérifier la classe DPE et l\'éligibilité aux aides MaPrimeRénov',
                'Anticiper 15 % de budget pour les imprévus dans les immeubles anciens',
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

      {/* Section 5 — Exemples chantiers */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Exemples de chantiers réalisés dans le 19e arrondissement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Quelques réalisations représentatives dans les différents secteurs du 19e.
          </p>
          <div className="space-y-4">
            {[
              {
                titre: '3 pièces 65 m² Buttes-Chaumont — rénovation investisseur',
                description: 'Rénovation complète d\'un appartement dans son jus pour investisseur : dépose complète, remplacement canalisations en plomb, électricité aux normes, cuisine neuve ouverte sur séjour, salle de bain complète avec douche italienne, parquet flottant chêne, peinture. Mis en location 3 semaines après livraison. Budget : 78 000 €. Durée : 9 semaines.',
                highlight: 'Loyer +35 % par rapport au bien non rénové',
              },
              {
                titre: 'Studio 28 m² Belleville — optimisation locative',
                description: 'Rénovation totale d\'un studio pour LMNP : création salle d\'eau (WC sur palier intégré), cuisine compacte équipée, lit escamotable avec rangements, peinture, stratifié. Travaux réalisés en 4e étage sans ascenseur, avec monte-matériaux en façade. Budget : 26 000 €. Durée : 5 semaines.',
                highlight: 'Immeuble sans ascenseur géré — livraison en 5 semaines',
              },
              {
                titre: 'Appartement familial 80 m² Crimée — rénovation énergétique',
                description: 'Rénovation complète axée DPE : isolation des murs par doublage intérieur, remplacement des fenêtres simple vitrage, pompe à chaleur air/air, sol isolant, peinture. Passage de classe G à classe C. Aides MaPrimeRénov déduites. Budget net : 68 000 €. Durée : 11 semaines.',
                highlight: 'Classe G → C — bien relancé en location légalement',
              },
            ].map((ex) => (
              <div key={ex.titre} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{ex.titre}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed mb-3">{ex.description}</div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={13} className="text-[#B8960C] flex-shrink-0" />
                  <span className="text-[#B8960C] text-xs font-medium">{ex.highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Avantages artisan local */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Pourquoi choisir Espace Design pour rénover dans le 19e arrondissement ?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le 19e arrondissement est l&apos;un de nos secteurs de prédilection. Nous y intervenons régulièrement pour des investisseurs, des primo-accédants et des bailleurs souhaitant mettre leur bien aux normes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                titre: 'Spécialiste des immeubles anciens sans ascenseur',
                detail: 'Nos équipes sont rodées aux chantiers dans les immeubles sans ascenseur : monte-matériaux, organisation logistique, horaires de livraison. Le surcoût est anticipé dans le devis, sans mauvaise surprise.',
              },
              {
                titre: 'Accompagnement aides MaPrimeRénov',
                detail: 'Nous accompagnons nos clients dans le montage des dossiers d\'aides pour la rénovation énergétique (MaPrimeRénov, CEE, éco-PTZ). Nos devis précisent le coût net après aides pour vous permettre de décider en toute connaissance.',
              },
              {
                titre: 'Expertise investisseur : rentabilité maximisée',
                detail: 'Nous avons accompagné des dizaines d\'investisseurs dans le 19e. Notre approche : maximiser l\'attractivité locative pour le budget investi. Matériaux durables, finitions soignées, délais tenus.',
              },
              {
                titre: 'Chantier clé en main, zéro gestion',
                detail: 'Un seul interlocuteur pour tous les corps de métier. Nous coordonnons tout : plombier, électricien, carreleur, peintre, menuisier. Vous recevez les clés du bien rénové, sans avoir géré le moindre artisan.',
              },
            ].map((a) => (
              <div key={a.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{a.titre}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{a.detail}</div>
              </div>
            ))}
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
              { href: '/blog/renovation-appartement-paris-18e', title: 'Rénovation appartement Paris 18e' },
              { href: '/blog/renovation-appartement-paris-20e', title: 'Rénovation appartement Paris 20e' },
              { href: '/blog/renovation-appartement-paris-10e', title: 'Rénovation appartement Paris 10e' },
              { href: '/blog/investissement-locatif-renovation-paris', title: 'Investissement locatif rénovation Paris' },
              { href: '/blog/isolation-thermique-appartement-paris', title: 'Isolation thermique appartement Paris' },
              { href: '/blog/renovation-appartement-ancien-paris', title: 'Rénovation appartement ancien Paris' },
              { href: '/blog/prix-renovation-appartement-paris', title: 'Prix rénovation appartement Paris' },
              { href: '/renovation-paris', title: 'Rénovation appartement Paris' },
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
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Nos zones d&apos;intervention proches</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { href: '/renovation-paris-18e', label: 'Paris 18e' },
              { href: '/renovation-paris-20e', label: 'Paris 20e' },
              { href: '/renovation-paris-10e', label: 'Paris 10e' },
              { href: '/renovation-pantin', label: 'Pantin' },
              { href: '/renovation-aubervilliers', label: 'Aubervilliers' },
              { href: '/renovation-pre-saint-gervais', label: 'Pré-Saint-Gervais' },
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
          Rénover votre appartement dans le 19e arrondissement
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis sous 48h. Expertise investisseurs et rénovation complète.
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
