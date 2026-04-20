import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Urgence Paris', item: 'https://espacedesignparis.fr/blog/renovation-urgence-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Urgence Paris : dégât des eaux, fissure & intervention rapide 2025 | Espace Design',
  description: 'Urgences rénovation à Paris : dégât des eaux, fissure apparente, chute de plâtre. Qui appeler, que faire, assurance. Guide 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-urgence-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Que faire en cas de dégât des eaux dans un appartement parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "En cas de dégât des eaux à Paris, les étapes sont les suivantes : 1) Couper l'arrivée d'eau principale (sous l'évier de cuisine ou dans la cave) pour stopper la fuite. 2) Prévenir le voisin du dessus s'il est à l'origine de la fuite, ou le syndic si c'est une partie commune. 3) Prendre des photos de tous les dégâts avant toute intervention. 4) Déclarer le sinistre à votre assurance dans les 5 jours ouvrés (délai légal). 5) Faire sécher les murs et plafonds (déshumidificateurs, ventilation) avant de rénover — minimum 3 à 6 semaines selon la profondeur du dégât. 6) Faire établir un devis de rénovation par un artisan qualifié pour la soumission à l'assureur.",
      },
    },
    {
      '@type': 'Question',
      name: 'Comment distinguer une fissure bénigne d\'une fissure dangereuse dans un appartement parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La largeur et l'évolution de la fissure sont les deux critères clés. Une fissure capillaire (moins de 0,2 mm) est superficielle et traduit un simple retrait de l'enduit : sans danger, se traite avec de l'enduit fin. Une fissure de 0,2 à 1 mm doit être surveillée (posez un témoin en plâtre pour détecter une évolution). Une fissure de plus de 2 mm qui s'élargit progressivement, qui suit les joints de maçonnerie ou qui traverse le mur de part en part peut indiquer un problème structurel sérieux. Dans ce cas, il faut faire appel à un bureau d'études structure ou à un expert bâtiment avant toute rénovation. À Paris, les immeubles haussmanniens et les constructions des années 1950-1970 sont les plus concernés par les fissures structurelles.",
      },
    },
    {
      '@type': 'Question',
      name: 'Y a-t-il un risque d\'amiante lors d\'une chute de plâtre dans un appartement parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, si l'appartement a été construit ou rénové avant le 1er juillet 1997 (date d'interdiction de l'amiante en France). Les flocages de plafond, les enduits projetés, les dalles de sol vinyle et certains colles et mortiers peuvent contenir de l'amiante. En cas de chute de plâtre dans un appartement de cette époque, ne touchez pas les débris à mains nues, aérez la pièce et contactez un professionnel pour un diagnostic amiante avant toute intervention de nettoyage ou de rénovation. Le diagnostic amiante avant travaux (DAT) est obligatoire pour tous les travaux dans les immeubles de permis de construire antérieur à juillet 1997.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Urgence Paris : dégât des eaux, fissure & intervention rapide 2025 | Espace Design',
  description: 'Urgences rénovation à Paris : dégât des eaux, fissure apparente, chute de plâtre. Qui appeler, que faire, assurance. Guide 2025.',
}

export default function ArticleRenovationUrgence() {
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
            Conseils
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Urgence Paris : dégât des eaux, fissure &amp; intervention rapide 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Dégât des eaux, fissure qui s&apos;élargit, plâtre qui tombe : certaines situations de rénovation ne peuvent pas attendre. À Paris, les immeubles anciens sont particulièrement exposés. Que faire en premier, qui appeler, comment gérer avec l&apos;assurance ? Guide d&apos;urgence complet pour agir vite et bien.
          </p>
        </div>
      </section>

      {/* Section 1 — Dégât des eaux */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Dégât des eaux : les étapes à suivre immédiatement
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le dégât des eaux est le sinistre le plus fréquent dans les appartements parisiens, notamment dans les immeubles haussmanniens où les canalisations datent parfois de plusieurs décennies. La réaction dans les premières heures conditionne l&apos;ampleur des réparations et la prise en charge assurance.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Étape 1 — Couper l\'eau immédiatement',
                  detail: "Localisez le robinet d'arrêt général de votre appartement (généralement sous l'évier de cuisine, dans la salle de bain ou dans la cave) et fermez-le dès que vous détectez une fuite active. Si la fuite vient du voisin du dessus, prévenez-le immédiatement. Si elle provient d'une partie commune (toiture, colonne), appelez le syndic en urgence.",
                },
                {
                  enjeu: 'Étape 2 — Documenter les dégâts (photos et vidéos)',
                  detail: "Photographiez et filmez l'ensemble des dégâts visibles avant toute intervention : plafond humide ou effondré, murs tachés, sol gorgé d'eau, meubles et effets personnels touchés. Ces preuves sont indispensables pour la déclaration de sinistre et l'évaluation par l'expert assurance. Ne nettoyez rien avant d'avoir tout documenté.",
                },
                {
                  enjeu: 'Étape 3 — Déclarer le sinistre dans les 5 jours',
                  detail: "Vous disposez de 5 jours ouvrés pour déclarer un dégât des eaux à votre assureur (délai légal en France). Au-delà, votre assureur peut réduire ou refuser sa prise en charge. La déclaration doit préciser : l'origine présumée de la fuite, les pièces touchées, les dommages constatés, et les coordonnées du voisin impliqué si applicable. Un constat amiable dégât des eaux doit être signé par les deux parties si la fuite vient d'un autre appartement.",
                },
                {
                  enjeu: 'Étape 4 — Sécher avant de rénover (3 à 6 semaines minimum)',
                  detail: "C'est l'erreur la plus fréquente : rénover trop tôt après un dégât des eaux. Un mur ou un plafond humide doit sécher complètement avant d'être repeint ou recouvert — sous peine de voir les moisissures et les auréoles réapparaître quelques semaines plus tard. Le séchage dure minimum 3 semaines pour un dégât léger, jusqu'à 6 à 10 semaines pour une infiltration profonde. Des déshumidificateurs professionnels accélèrent le processus.",
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

      {/* Section 2 — Fissures */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Fissures dans un appartement parisien : quand s&apos;inquiéter ?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les fissures sont monnaie courante dans les immeubles parisiens, en particulier dans les constructions des années 1950 à 1980 et les immeubles haussmanniens. Toutes ne sont pas inquiétantes — mais certaines signaux d&apos;alerte ne doivent pas être ignorés.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Fissure capillaire (moins de 0,2 mm)',
                detail: "Normale dans tout bâtiment : retrait du plâtre ou de l'enduit, dilatation thermique saisonnière. Se traite simplement avec un enduit fin avant peinture. Aucune inquiétude structurelle.",
                niveau: 'Bénigne',
              },
              {
                titre: 'Fissure fine (0,2 à 1 mm)',
                detail: "À surveiller dans le temps. Posez un témoin en plâtre (petit carré collé à cheval sur la fissure, daté) pour détecter une évolution. Si le témoin reste intact après 3 mois, la fissure est stabilisée. Traitement cosmétique suffisant.",
                niveau: 'À surveiller',
              },
              {
                titre: 'Fissure large (1 à 5 mm)',
                detail: "Peut indiquer un mouvement de structure, un tassement différentiel ou un problème en fondation. Faites appel à un expert bâtiment ou un bureau d'études structure avant toute rénovation. Ne rebouchez pas sans diagnostic.",
                niveau: 'Préoccupante',
              },
              {
                titre: 'Fissure traversante ou évolutive (plus de 5 mm)',
                detail: "Urgence structurelle potentielle. Contactez immédiatement un expert bâtiment agréé et signalez la situation au syndic. Ne réalisez aucun travail avant expertise. Dans les cas extrêmes, une évacuation préventive peut être nécessaire.",
                niveau: 'Urgence',
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.titre}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.niveau}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Plâtre et amiante + expert assurance */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Chute de plâtre, amiante et expert assurance : ce qu&apos;il faut savoir
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Une chute de plâtre dans un appartement parisien ancien n&apos;est jamais anodine. Outre le risque physique immédiat, elle peut révéler un problème structurel ou, dans les immeubles construits avant 1997, exposer au risque amiante.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Chute de plâtre : les réflexes à avoir',
                prix: 'Action immédiate',
                detail: "Sécurisez la zone (ne laissez pas d'enfants ou d'animaux accéder à la pièce), protégez les meubles et effets personnels. Si la chute est liée à un dégât des eaux, appliquez le protocole dégât des eaux. Si la cause est inconnue, faites inspecter le plafond avant de rénover — la chute peut n'être que le signal avant-coureur d'un effondrement plus large.",
              },
              {
                type: 'Risque amiante dans les immeubles avant 1997',
                prix: 'Diagnostic obligatoire',
                detail: "Dans tout immeuble dont le permis de construire est antérieur au 1er juillet 1997, un diagnostic amiante avant travaux (DAT) est obligatoire. Les flocages de plafond (projections d'amiante populaires dans les années 1960-1980), les enduits, les dalles de sol et certaines colles peuvent contenir de l'amiante. Sans diagnostic, vous ne pouvez pas légalement commencer des travaux. Le diagnostiqueur agréé doit être mandaté avant toute intervention.",
              },
              {
                type: 'Expert assurance : délai et rôle',
                prix: 'Délai 72h à 15 jours',
                detail: "Après votre déclaration de sinistre, votre assureur mandate un expert pour évaluer les dommages. Le délai légal pour la visite de l'expert est de 15 jours après la déclaration, mais en pratique il intervient souvent sous 72h à 5 jours pour les urgences. L'expert évalue : la nature des dommages, leur origine, le montant des réparations. Vous pouvez faire établir un devis d'artisan en parallèle pour être prêt à démarrer dès l'accord de l'assureur.",
              },
              {
                type: 'Devis urgent : délai 48h possible à Paris',
                prix: 'Sur demande',
                detail: "Dans les situations d'urgence (logement inhabitable, risque structurel, dégât des eaux actif), un artisan parisien spécialisé peut établir un devis sous 24 à 48h et intervenir rapidement pour les travaux de sécurisation. Les travaux de finition (peinture, revêtements) attendent la validation assurance et le séchage complet.",
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

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Priorisation des travaux urgents
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Sécurisation immédiate : étayage, bâchage, coupure des réseaux si nécessaire',
                'Diagnostic amiante obligatoire avant tout travail dans un immeuble avant 1997',
                'Séchage complet avant rénovation : ne pas repeindre sur humide',
                'Constat amiable signé entre voisins avant déclaration assurance',
                'Devis artisan en parallèle de la visite expert pour gagner du temps',
                'Travaux de finition uniquement après accord écrit de l\'assureur',
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
              { href: '/blog/diagnostic-amiante-paris', title: 'Diagnostic amiante Paris' },
              { href: '/blog/plomberie-renovation-paris', title: 'Plomberie rénovation Paris' },
              { href: '/blog/peinture-appartement-paris', title: 'Peinture appartement Paris' },
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
          Urgence rénovation à Paris : devis en 48h
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Dégât des eaux, fissure, plâtre tombé : diagnostic gratuit et devis rapide. Artisans disponibles sur Paris et Île-de-France.
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
