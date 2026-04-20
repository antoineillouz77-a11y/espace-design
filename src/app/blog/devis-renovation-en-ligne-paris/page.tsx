import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Devis Rénovation Paris', item: 'https://espacedesignparis.fr/blog/devis-renovation-en-ligne-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Devis Rénovation Paris : comment obtenir un bon devis en 2025 | Espace Design',
  description: 'Obtenir un devis de rénovation à Paris : comment comparer artisans, questions à poser, pièges à éviter. Guide pratique 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/devis-renovation-en-ligne-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien de devis demander pour une rénovation à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le minimum recommandé est 3 devis pour toute rénovation dépassant 3 000 €. Pour des travaux importants (15 000 € et plus), demandez 4 à 5 devis. Pourquoi 3 minimum ? Le premier devis vous donne une référence de prix, le deuxième permet de valider ou d'infirmer cette référence, le troisième révèle les écarts importants qui signalent soit une sous-traitance à prévoir, soit une incompréhension du cahier des charges. À Paris, les écarts de prix entre artisans peuvent atteindre 40 à 80 % pour des prestations identiques — comparer est indispensable.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quel délai pour recevoir un devis de rénovation à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Un artisan sérieux répond à une demande de devis sous 7 à 14 jours ouvrables. Un devis bâclé reçu en 24h sans visite du chantier est un signal d'alarme — un bon devis nécessite une visite sur place pour mesurer et évaluer correctement l'état du support. Si vous n'avez pas de retour sous 3 semaines, l'artisan n'est probablement pas disponible dans votre délai souhaité. En haute saison (mai-septembre à Paris), les carnets de commandes sont pleins et certains artisans refusent de nouveaux chantiers — prévoir 3 à 6 mois à l'avance.",
      },
    },
    {
      '@type': 'Question',
      name: 'Un devis de rénovation est-il gratuit à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, le devis de rénovation est légalement gratuit en France, sauf si l'artisan vous l'indique explicitement à l'avance (ce qui est très rare). En pratique, la visite sur place est incluse dans la démarche de devis sans facturation. Certains architectes d'intérieur ou maîtres d'oeuvre peuvent facturer une prestation de conseil ou d'esquisse en amont de la réalisation du devis — c'est une pratique normale et légitime qui doit être annoncée clairement. Pour un artisan (peintre, carreleur, plombier), la visite et le devis sont systématiquement gratuits.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Devis Rénovation Paris : comment obtenir un bon devis en 2025 | Espace Design',
  description: 'Obtenir un devis de rénovation à Paris : comment comparer artisans, questions à poser, pièges à éviter. Guide pratique 2025.',
}

export default function ArticleDevisRenovation() {
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
            Prix &amp; Budgets
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Devis Rénovation Paris : comment obtenir un bon devis en 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Obtenir un devis de rénovation à Paris sans se faire piéger demande de la méthode. Nombre de devis à comparer, éléments à vérifier, questions à poser à l&apos;artisan, red flags à identifier : guide pratique complet pour bien choisir votre prestataire en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Nombre de devis */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Combien de devis demander et comment organiser la consultation ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              À Paris, le marché artisanal est très hétérogène : les écarts de prix entre entreprises peuvent atteindre 50 à 80 % pour des prestations identiques. Comparer sérieusement est la seule façon d&apos;éviter de payer trop cher — ou de choisir un prestataire sous-dimensionné pour votre chantier.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: '3 devis minimum (obligatoire au-dessus de 3 000 €)',
                  detail: 'Trois devis permettent d\'identifier la médiane de marché, de repérer les prestataires qui se sous-évaluent (risque de malfaçon ou de surcoûts en cours de chantier) et ceux qui surfacturent. Pour des travaux entre 3 000 et 15 000 €, 3 devis sont suffisants. Pour les chantiers importants, 4 à 5 prestataires consultés permettent une comparaison encore plus robuste.',
                },
                {
                  enjeu: 'Remettre un cahier des charges écrit à chaque artisan',
                  detail: 'Pour comparer des devis, il faut que tous les artisans consultés aient répondu au même besoin. Préparez un document décrivant précisément les travaux : surface à traiter, matériaux souhaités, contraintes d\'accès, calendrier souhaité. Sans ce document, chaque artisan interprétera différemment le chantier et les devis seront incomparables.',
                },
                {
                  enjeu: 'Imposer une visite sur place avant le devis',
                  detail: 'Refusez tout devis établi sans visite du chantier. Sans visite, l\'artisan ne peut pas évaluer l\'état du support, les contraintes d\'accès (étage, ascenseur, monte-charge), les éventuels travaux préparatoires nécessaires. Un devis sans visite est incomplet et constitue souvent un premier prix d\'appel qui sera majoré en cours de chantier.',
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

      {/* Section 2 — Éléments d'un bon devis */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Les éléments d&apos;un bon devis de rénovation
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Un devis professionnel et complet doit permettre de comprendre exactement ce qui est inclus et ce qui ne l&apos;est pas. Un devis vague ou en forfait global sans détail est un signal d&apos;alarme important.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Détail poste par poste',
                solution: 'Chaque type de travail doit apparaître sur une ligne distincte avec quantité (m², unité, ml), prix unitaire et prix total. Ex : "Peinture murs : 45 m² × 18 €/m² = 810 €". Cette décomposition permet de comparer artisan par artisan et d\'identifier les postes où l\'un est moins cher que l\'autre.',
                obligatoire: 'Obligatoire',
              },
              {
                titre: 'TVA mentionnée et calculée',
                solution: 'Vérifiez le taux de TVA appliqué : 10 % pour les travaux d\'amélioration dans un logement de plus de 2 ans, 20 % pour les constructions neuves ou extensions. Un artisan qui propose un devis HT sans TVA alors que votre bien est éligible à 10 % peut vous induire en erreur sur le prix final.',
                obligatoire: 'Légalement requis',
              },
              {
                titre: 'Délais et planning indicatif',
                solution: 'Un bon devis mentionne la durée prévisionnelle du chantier et la date de démarrage souhaitée. Sans engagement de délai, vous n\'avez aucun levier si le chantier traîne. Exigez une mention de pénalités de retard pour les chantiers importants.',
                obligatoire: 'Fortement recommandé',
              },
              {
                titre: 'Références assurances',
                solution: 'Le devis ou les documents annexes doivent mentionner : numéro de SIRET, assurance responsabilité civile professionnelle, assurance décennale pour les travaux de bâtiment. Sans ces éléments, vous n\'avez aucun recours en cas de dommage. Vérifiez la validité de l\'attestation décennale sur le site de l\'assureur.',
                obligatoire: 'Indispensable',
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.titre}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.obligatoire}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.solution}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Questions à poser */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Questions à poser à l&apos;artisan lors de la visite
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La visite de devis est l&apos;occasion d&apos;évaluer non seulement le prix mais aussi la sérieux, l&apos;expérience et la fiabilité de l&apos;artisan. Ces questions vous permettront de faire la différence entre un prestataire de qualité et un opportuniste.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Sur l\'expérience et les références',
                prix: 'Évaluation qualitative',
                detail: '"Avez-vous des références de chantiers similaires à Paris ?" / "Pouvez-vous me montrer des photos de réalisations récentes ?" / "Depuis combien d\'années exercez-vous ?" Un artisan solide propose spontanément ses références. Un refus de communiquer des exemples de travaux passés est un signal d\'alerte.',
              },
              {
                type: 'Sur l\'assurance décennale',
                prix: 'Vérification obligatoire',
                detail: '"Pouvez-vous me remettre une attestation d\'assurance décennale à jour ?" L\'attestation doit mentionner les travaux couverts (peinture, carrelage, plomberie, etc.), la période de validité, et le nom de l\'assureur. Vérifiez en appelant l\'assureur que la police est bien active. Refus ou hésitation = refus de ce prestataire.',
              },
              {
                type: 'Sur la sous-traitance',
                prix: 'Transparence requise',
                detail: '"Allez-vous sous-traiter une partie des travaux ?" Si oui, qui, et à quel taux ? La sous-traitance n\'est pas un problème en soi — les grands chantiers l\'utilisent systématiquement. Mais vous devez savoir qui interviendra dans votre logement. Un artisan qui refuse de répondre à cette question clairement mérite d\'être écarté.',
              },
              {
                type: 'Sur le calendrier et les impératifs',
                prix: 'Planning chantier',
                detail: '"Quelle est votre disponibilité ?" / "Combien d\'équipes interviendront en même temps ?" / "Comment gérez-vous les inévitables aléas de chantier (découverte de dégâts cachés, délai fournisseur) ?" Un artisan expérimenté a une réponse claire à ces questions — il les gère régulièrement.',
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

      {/* Section 4 — Red flags et délais */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Red flags à éviter et délais de réponse attendus
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le marché parisien de la rénovation est traversé par de nombreux prestataires peu scrupuleux. Ces signaux d&apos;alarme vous permettront d&apos;éviter les mauvaises surprises avant même de signer.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-3">Signaux d&apos;alarme</h3>
              <div className="space-y-3">
                {[
                  'Devis anormalement bas (30-40 % sous les autres) — sous-évaluation ou matériaux de mauvaise qualité',
                  'Demande de paiement en espèces ou acompte total avant démarrage',
                  'Pas d\'assurance décennale ou refus de la communiquer',
                  'Devis sans visite du chantier ni mesures précises',
                  'Pression pour signer rapidement ("offre valable 48h")',
                  'Absence de SIRET ou numéro de TVA non vérifiable',
                  'Réponse en moins de 24h sans visite — devis générique non personnalisé',
                  'Démarchage à domicile non sollicité',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                    <div className="w-3.5 h-3.5 rounded-full border border-red-300 flex-shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-3">Bons signes</h3>
              <div className="space-y-3">
                {[
                  'Visite sur place proposée spontanément avant le devis',
                  'Attestation décennale remise sans hésitation',
                  'Devis détaillé poste par poste avec quantités et prix unitaires',
                  'Références clients disponibles sur demande',
                  'Délai de réponse devis : 7-14 jours (signe qu\'il est bien chargé)',
                  'Demande d\'acompte de 20-30 % maximum au démarrage',
                  'Mention claire des travaux non inclus et des éventuels suppléments',
                  'Artisan posant des questions sur vos contraintes et votre calendrier',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                    <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
            Délais habituels pour un devis de rénovation à Paris
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {[
              {
                niveau: 'Petits travaux (peinture, carrelage)',
                prestations: 'Visite rapide, devis court.',
                delai: '5 – 10 jours ouvrables',
              },
              {
                niveau: 'Rénovation partielle (cuisine ou SDB)',
                prestations: 'Visite détaillée, plans et calculs.',
                delai: '10 – 15 jours ouvrables',
              },
              {
                niveau: 'Rénovation complète d\'appartement',
                prestations: 'Plusieurs visites, métrés, consultation fournisseurs.',
                delai: '15 – 21 jours ouvrables',
              },
              {
                niveau: 'Chantier multi-corps d\'état',
                prestations: 'Coordination de plusieurs artisans, planning global.',
                delai: '3 – 5 semaines',
              },
            ].map((row) => (
              <div key={row.niveau} className="bg-white rounded-lg p-4 border border-gray-100 flex gap-4 items-start">
                <div className="flex-1">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-1">{row.niveau}</div>
                  <div className="text-gray-600 text-xs font-light">{row.prestations}</div>
                </div>
                <div className="text-[#B8960C] text-sm font-semibold flex-shrink-0 text-right">{row.delai}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Comment comparer */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Comment comparer efficacement les devis reçus
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Comparer des devis de rénovation n&apos;est pas aussi simple que comparer le total final. Un devis moins cher peut inclure des matériaux bas de gamme ou exclure des travaux que les autres ont intégrés. Voici la méthode pour une comparaison rigoureuse.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Créer un tableau comparatif poste par poste — ne comparez jamais seulement le total',
              'Vérifier que chaque devis inclut les mêmes prestations (dépose, évacuation déchets, protection des sols)',
              'Comparer les marques et références de matériaux — une peinture haut de gamme coûte 3x plus qu\'une entrée de gamme',
              'Demander des précisions écrites sur les postes flous ("fournitures comprises" — lesquelles ?)',
              'Vérifier les conditions de paiement : éviter les artisans demandant 50 % ou plus d\'acompte',
              'Ne pas choisir automatiquement le moins cher — prendre le meilleur rapport qualité/prix/références',
              'Négocier sans honte : 5 à 10 % de marge est habituelle, au-delà vous risquez de dégrader la qualité',
              'Exiger que les modifications négociées soient inscrites par écrit avant signature',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
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
              { href: '/blog/renovation-avant-vente-paris', title: 'Rénovation avant vente Paris' },
              { href: '/blog/peinture-beton-cire-paris', title: 'Béton ciré Paris' },
              { href: '/blog/renovation-cuisine-studio-paris', title: 'Cuisine studio Paris' },
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
          Obtenez un devis rénovation sérieux à Paris
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Visite sur place gratuite. Devis détaillé poste par poste sous 10 jours. Assurance décennale incluse.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 bg-[#1C1C1C] text-white px-7 py-3.5 rounded font-light text-sm tracking-wide hover:bg-black transition-colors"
          >
            Demander un devis <ArrowRight size={13} />
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
