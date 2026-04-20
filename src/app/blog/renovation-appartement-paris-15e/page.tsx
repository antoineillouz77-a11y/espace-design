import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Paris 15e', item: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-15e' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Paris 15e : Montparnasse, Beaugrenelle & prix 2025 | Espace Design',
  description: 'Artisan rénovation Paris 15e arrondissement. Montparnasse, Beaugrenelle, Vaugirard, plus grand arrondissement de Paris. Prix 2025, devis sous 48h.',
  datePublished: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-15e',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix au m² pour rénover un appartement dans le 15e arrondissement de Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dans le 15e arrondissement, le plus grand de Paris, les prix de rénovation se situent entre 400 et 650 €/m² pour un rafraîchissement (peinture, sol) et 1 200 à 2 200 €/m² pour une rénovation complète. La forte proportion d\'appartements familiaux (70–120 m²) dans des immeubles des années 1950–1980 tire les prix vers le milieu de gamme : une rénovation complète standard coûte généralement 1 200 à 1 700 €/m². Les appartements haussmanniens autour de Montparnasse ou de la rue de Vaugirard atteignent 1 800 à 2 500 €/m² pour des prestations haut de gamme.',
      },
    },
    {
      '@type': 'Question',
      name: 'Le 15e arrondissement est-il intéressant pour un investissement locatif avec rénovation ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le 15e est l\'un des arrondissements parisiens les plus populaires pour l\'investissement locatif, grâce à sa forte population, ses nombreuses familles et sa proximité avec les quartiers d\'affaires (La Défense, Montparnasse). Les appartements familiaux (3–4 pièces) bien rénovés se louent très bien. Le rendement locatif brut se situe généralement entre 3,5 et 4,5 %, ce qui est correct pour Paris. L\'achat d\'un bien à rénover (15–20 % sous le marché) suivi d\'une rénovation complète permet de maximiser la valeur locative.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelles sont les contraintes de rénovation dans les immeubles des années 60–70 du 15e ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Les immeubles des années 1960–1980 qui dominent une grande partie du 15e présentent des défis spécifiques : présence possible d\'amiante dans les revêtements (diagnostic obligatoire avant 1997), installations électriques vieillissantes (souvent en 2×10A, insuffisant pour les usages modernes), plomberie en acier galvanisé corrodé, VMC désuète ou absente. Ces points constituent souvent un "paquet" à traiter ensemble lors d\'une rénovation, ce qui permet d\'optimiser les coûts de main d\'œuvre.',
      },
    },
    {
      '@type': 'Question',
      name: 'Faut-il un permis de construire pour rénover un appartement dans le 15e ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La plupart des travaux intérieurs (peinture, sol, cuisine, salle de bain, électricité, plomberie) ne nécessitent aucune autorisation administrative. Une déclaration préalable de travaux est requise si vous souhaitez modifier l\'aspect extérieur du bâtiment (remplacement fenêtres, remplacement volets). Un permis de construire est nécessaire uniquement si vous créez plus de 20 m² de surface de plancher ou modifiez la structure porteuse. Dans les copropriétés, l\'accord de la copropriété est toujours requis pour les travaux sur parties communes.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Paris 15e : Montparnasse, Beaugrenelle & prix 2025 | Espace Design',
  description: 'Artisan rénovation Paris 15e arrondissement. Montparnasse, Beaugrenelle, Vaugirard, prix 2025. Devis gratuit sous 48h.',
  keywords: [
    'rénovation appartement paris 15e',
    'artisan rénovation 15e arrondissement',
    'rénovation montparnasse paris',
    'travaux appartement beaugrenelle',
    'prix rénovation paris 15e 2025',
    'rénovation vaugirard paris',
    'entrepreneur rénovation paris 15',
  ],
}

export default function ArticleRenovationParis15() {
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
            Paris 15e arrondissement
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Appartement Paris 15e : Montparnasse, Beaugrenelle &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Montparnasse, Beaugrenelle, Vaugirard, Convention, Javel : le 15e est le plus grand arrondissement de Paris et le plus peuplé. Son parc immobilier diversifié — haussmannien au nord-est, résidences modernes des années 60–80 au sud et à l&apos;ouest — génère une demande de rénovation soutenue. Espace Design intervient dans tout le 15e, devis sous 48h.
          </p>
        </div>
      </section>

      {/* Section 1 — Quartiers */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Le parc immobilier du 15e : le plus grand arrondissement de Paris
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Avec 236 000 habitants et 8,5 km², le 15e arrondissement est le plus grand et le plus peuplé de Paris. Son tissu urbain est très diversifié : haussmannien classique autour de Montparnasse et de la rue de Vaugirard, résidences modernes des années 1960–1980 dans les secteurs Convention et Javel, et quelques opérations récentes autour de Beaugrenelle. Cette diversité se reflète directement dans les types de rénovations demandées.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Montparnasse – Vaugirard : haussmannien et immeubles de standing',
                  detail: 'Le secteur nord-est du 15e, autour de Montparnasse et de la rue de Vaugirard, concentre les appartements les plus valorisés : haussmanniens avec hauts plafonds, moulures et parquets anciens, proximité immédiate des transports et commerces. La demande de rénovation porte sur la modernisation des équipements (cuisine, salle de bain) tout en préservant le cachet architectural. Prix au m² : 11 000–13 500 €/m² post-rénovation.',
                },
                {
                  enjeu: 'Beaugrenelle – Front de Seine : tours modernes et résidences récentes',
                  detail: 'Le secteur Beaugrenelle, face à la Seine, associe des tours de bureaux reconverties et des résidences modernes des années 1970–1980. Les appartements y sont spacieux mais aux finitions souvent datées. La rénovation vise à moderniser entièrement les intérieurs (cuisine ouverte, salle de bain contemporaine, isolation phonique) pour exploiter les volumes généreux et les vues. Prix au m² : 10 000–12 000 €/m².',
                },
                {
                  enjeu: 'Convention – Javel – Dupleix : le 15e résidentiel',
                  detail: 'Le centre et le sud du 15e sont dominés par des immeubles de rapport des années 1950–1970 et quelques haussmanniens tardifs. C\'est le secteur le plus abordable du 15e (9 000–11 000 €/m²) et le plus porteur pour les investisseurs. Les appartements familiaux (70–100 m²) y sont très demandés à la location, notamment par les familles attirées par les nombreuses écoles et parcs.',
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
            Types de travaux les plus demandés dans le 15e arrondissement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La taille du 15e et la diversité de son parc immobilier génèrent un volume important de chantiers de rénovation, des studios étudiants aux grands appartements familiaux.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Rénovation appartement familial (70–100 m²)',
                solution: 'Le 15e est l\'arrondissement des familles. La demande porte sur la rénovation des grands appartements : cuisine ouverte sur séjour, 2 salles de bain, chambres optimisées avec rangements intégrés, électricité aux normes. Un programme de 3 à 4 pièces bien rénové dans le 15e se loue ou se revend rapidement.',
                cout: '1 200 – 2 000 €/m²',
              },
              {
                titre: 'Réfection cuisine avec ouverture sur salon',
                solution: 'L\'ouverture de la cuisine sur le salon est la demande la plus fréquente dans le 15e. Suppression ou allègement de la cloison séparatrice, création d\'un îlot ou d\'un bar, nouveau plan de travail, installation électroménager encastrable. Résultat : appartement lumineux et convivial, très valorisé sur le marché.',
                cout: '8 000 – 22 000 €',
              },
              {
                titre: 'Rénovation salle de bain avec douche italienne',
                solution: 'Remplacement de la baignoire par une douche à l\'italienne : receveur extra-plat, paroi vitrée, robinetterie encastrée. Dans les appartements du 15e avec 2 salles de bain, transformation de la 2e en salle d\'eau compacte. Résultat immédiat sur la valeur locative.',
                cout: '8 000 – 20 000 €',
              },
              {
                titre: 'Isolation thermique et phonique',
                solution: 'Les appartements des immeubles des années 60–80 dans le 15e souffrent souvent d\'une isolation insuffisante (thermique et phonique). Doublage des murs périphériques, traitement du plancher (dalle flottante), remplacement des menuiseries. Amélioration du confort et de l\'étiquette DPE, favorable à la revente et à la location.',
                cout: '60 – 150 €/m² de surface traitée',
              },
              {
                titre: 'Mise aux normes électrique complète',
                solution: 'Les tableaux électriques vétustes sont très courants dans les immeubles des années 60–70 du 15e. Remplacement du tableau général, création des circuits dédiés (cuisine, salle de bain, informatique), mise à la terre, pose de prises aux normes. Indispensable avant tout autre travail pour éviter les reprises.',
                cout: '4 500 – 12 000 €',
              },
              {
                titre: 'Rénovation complète pour mise en location ou revente',
                solution: 'Rénovation globale pour maximiser la valeur du bien : cuisine, salle de bain, électricité, plomberie, sols, peinture. Notre approche : devis global avec planning détaillé, matériaux durables et esthétiques, finitions soignées. Livraison clé en main dans les délais annoncés.',
                cout: '1 100 – 1 800 €/m²',
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
            Contraintes et spécificités de la rénovation dans le 15e arrondissement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le 15e arrondissement présente des contraintes variées selon le type de bâti. Voici les points de vigilance que notre équipe anticipe systématiquement.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Amiante dans les immeubles des années 60–80',
                prix: '200 – 500 € (diagnostic) + surcoût désamiantage',
                detail: 'La majorité des immeubles des années 1960–1980 du 15e peut contenir de l\'amiante dans les revêtements de sol (dalles vinyle), les colles et les joints. Un diagnostic amiante avant travaux est obligatoire pour tous les bâtiments construits avant juillet 1997. En cas de détection, le désamiantage est réalisé par une entreprise certifiée, avec un surcoût de 20 à 40 % sur la démolition concernée.',
              },
              {
                type: 'Copropriétés : restrictions horaires et autorisations',
                prix: 'Délai +2 à 6 semaines',
                detail: 'Dans les grandes copropriétés du 15e (immeubles des années 60–80 avec 50 à 200 logements), les règlements de copropriété imposent souvent des horaires stricts (lundi–vendredi, 8h–17h30) et des procédures de dépôt de matériaux en parties communes. Les modifications de cloisons portantes ou les travaux sur colonnes montantes nécessitent un accord préalable du syndic.',
              },
              {
                type: 'Logistique dans les grandes résidences',
                prix: 'Variable selon configuration',
                detail: 'Les grandes résidences du 15e (tours, barres) ont souvent des règles précises sur l\'utilisation des monte-charges et ascenseurs pour les travaux. La coordination avec le gardien et le syndic est indispensable. Notre équipe établit un plan logistique détaillé (livraisons, évacuation gravats, stockage matériaux) en accord avec la copropriété.',
              },
              {
                type: 'DPE et rénovation énergétique (logements G et F)',
                prix: 'Aides MaPrimeRénov disponibles',
                detail: 'Le 15e comprend de nombreux logements classés F ou G au DPE (Diagnostic de Performance Énergétique), notamment dans les immeubles des années 60–70. Ces logements ne pourront plus être mis en location à partir de 2025 (G) et 2028 (F). La rénovation énergétique (isolation, fenêtres, chauffage) est donc urgente pour les bailleurs. Des aides (MaPrimeRénov, CEE) sont disponibles.',
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
            Prix rénovation appartement Paris 15e : tableau récapitulatif 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Estimations main d&apos;œuvre et matériaux inclus, pour des appartements type du 15e arrondissement de Paris.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Niveau</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prestations</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Total 75 m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    niveau: 'Rafraîchissement',
                    prestations: 'Peinture + sol + petites réparations',
                    prixM2: '400 – 600 €',
                    total: '30 000 – 45 000 €',
                  },
                  {
                    niveau: 'Rénovation partielle',
                    prestations: 'Cuisine ou SDB + peinture + sol',
                    prixM2: '700 – 1 200 €',
                    total: '52 000 – 90 000 €',
                  },
                  {
                    niveau: 'Rénovation complète',
                    prestations: 'Cuisine + SDB + électricité + plomberie + sols',
                    prixM2: '1 100 – 1 800 €',
                    total: '82 000 – 135 000 €',
                  },
                  {
                    niveau: 'Haut de gamme',
                    prestations: 'Tout compris + matériaux premium + isolation + domotique',
                    prixM2: '1 800 – 2 500 €',
                    total: '135 000 – 187 500 €',
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
              Checklist avant de démarrer une rénovation dans le 15e
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Commander le diagnostic amiante (obligatoire pour tout bâtiment avant 1997)',
                'Vérifier la classe DPE du logement et les obligations de rénovation énergétique',
                'Consulter le règlement de copropriété pour les horaires et restrictions',
                'Obtenir l\'accord du syndic pour les travaux sur parties communes ou réseaux',
                'Vérifier la conformité du tableau électrique avant tout autre travail',
                'Prévoir 10 à 15 % de budget pour les imprévus selon l\'état du bien',
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
            Exemples de chantiers réalisés dans le 15e arrondissement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Quelques réalisations représentatives de notre activité dans le 15e arrondissement.
          </p>
          <div className="space-y-4">
            {[
              {
                titre: 'Appartement familial 90 m² — secteur Convention',
                description: 'Rénovation complète d\'un 4 pièces pour famille avec enfants : ouverture cuisine/salon, nouvelle salle de bain principale avec douche italienne, création d\'une 2e salle d\'eau, remplacement complet de l\'électricité, parquet flottant chêne huilé, peinture. Durée : 12 semaines. Budget total : 128 000 €.',
                highlight: 'Famille relogée pendant travaux — livraison clé en main',
              },
              {
                titre: '2 pièces 52 m² Beaugrenelle — investissement locatif',
                description: 'Rénovation complète d\'un appartement vue Seine pour investisseur : cuisine ouverte sur séjour, salle de bain entièrement rénovée, parquet stratifié, peinture, électricité mise aux normes, remplacement radiateurs. Mis en location en 3 semaines après livraison. Budget : 52 000 €. Durée : 7 semaines.',
                highlight: 'Mis en location en 3 semaines — loyer optimisé',
              },
              {
                titre: 'Haussmannien 110 m² Montparnasse — rénovation haut de gamme',
                description: 'Rénovation complète d\'un bel haussmannien pour propriétaires occupants : cuisine sur mesure avec équipements Miele, 2 salles de bain en marbre, parquet point de Hongrie restauré, moulures conservées et repeintes, domotique Legrand. Budget : 245 000 €. Durée : 16 semaines.',
                highlight: 'Rénovation haut de gamme — valorisation +180 000 €',
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
            Pourquoi choisir Espace Design pour rénover dans le 15e arrondissement ?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le 15e arrondissement représente l&apos;un de nos marchés principaux. Nous y intervenons régulièrement dans tous les secteurs, du haussmannien de Montparnasse aux résidences modernes de Javel.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                titre: 'Volume de chantiers dans le 15e',
                detail: 'Grâce à notre volume d\'activité dans le 15e, nous connaissons les syndics, les contraintes des principales résidences et les fournisseurs locaux. Cette connaissance se traduit par des délais raccourcis et des coûts optimisés pour nos clients.',
              },
              {
                titre: 'Rénovation énergétique et DPE',
                detail: 'Face à l\'urgence de la rénovation énergétique des logements classés F et G, nous proposons des solutions complètes (isolation, fenêtres, chauffage) avec accompagnement dans les démarches d\'aides (MaPrimeRénov, CEE, éco-PTZ).',
              },
              {
                titre: 'Gestion de projet clé en main',
                detail: 'Un seul interlocuteur pour l\'ensemble des corps de métier : maçonnerie, plomberie, électricité, carrelage, menuiserie, peinture. Coordination des artisans, planning de chantier, suivi quotidien. Vous êtes informé en temps réel de l\'avancement.',
              },
              {
                titre: 'Devis transparent, pas de mauvaises surprises',
                detail: 'Nos devis détaillent chaque poste de travaux. Le prix est ferme et définitif hors imprévus signalés et chiffrés immédiatement. Notre taux de satisfaction client dépasse 95 % grâce à cette transparence.',
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
              { href: '/blog/renovation-appartement-paris-14e', title: 'Rénovation appartement Paris 14e' },
              { href: '/blog/renovation-appartement-paris-16e', title: 'Rénovation appartement Paris 16e' },
              { href: '/blog/renovation-appartement-paris-7e', title: 'Rénovation appartement Paris 7e' },
              { href: '/blog/isolation-thermique-appartement-paris', title: 'Isolation thermique appartement Paris' },
              { href: '/blog/renovation-cuisine-ouverte-paris', title: 'Rénovation cuisine ouverte Paris' },
              { href: '/blog/douche-italienne-paris', title: 'Douche italienne Paris' },
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
              { href: '/renovation-paris-7e', label: 'Paris 7e' },
              { href: '/renovation-paris-14e', label: 'Paris 14e' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-issy-les-moulineaux', label: 'Issy-les-Moulineaux' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
              { href: '/renovation-vanves', label: 'Vanves' },
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
          Rénover votre appartement dans le 15e arrondissement
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis sous 48h. Expertise appartements familiaux et immeubles modernes.
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
