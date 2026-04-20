import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Devis Travaux Rénovation Paris', item: 'https://espacedesignparis.fr/blog/devis-travaux-renovation-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Devis Travaux Rénovation Paris : comment comparer & éviter les pièges 2025 | Espace Design',
  description: 'Comment obtenir et comparer un devis de rénovation à Paris : CGV, prix au m², délais, assurance décennale. Guide 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/devis-travaux-renovation-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien de devis faut-il demander avant des travaux de rénovation à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Il est recommandé d\'obtenir au minimum 3 devis pour tout chantier de rénovation à Paris dépassant 5 000 €. Trois devis permettent d\'identifier le prix médian du marché, de détecter les sous-évaluations (signe de travail bâclé ou de devis complétés en cours de chantier) et les sur-évaluations. Pour les petits travaux (moins de 2 000 €), 2 devis suffisent généralement. Ne choisissez jamais uniquement sur le prix le plus bas : la réputation de l\'artisan, son assurance décennale et la clarté du devis sont des critères tout aussi importants.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qu\'est-ce que l\'assurance décennale et comment la vérifier ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'L\'assurance décennale est une assurance obligatoire pour tous les artisans du bâtiment. Elle couvre les dommages compromettant la solidité de l\'ouvrage ou le rendant impropre à sa destination pendant 10 ans après la réception des travaux. Pour la vérifier, demandez à l\'artisan son attestation d\'assurance décennale en cours de validité (document annuel avec numéro de police, compagnie d\'assurance et garanties couvertes). Vérifiez que le certificat couvre bien l\'activité effectuée (ex : carrelage, plomberie, électricité). Un artisan sans assurance décennale = risque financier total pour le propriétaire en cas de sinistre.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quel est le délai de rétractation après signature d\'un devis de travaux ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le délai de rétractation après signature d\'un devis de travaux dépend du contexte contractuel. Si le devis a été signé à domicile (démarchage ou visite de l\'artisan chez vous) : 14 jours de rétractation selon le Code de la consommation. Si vous avez signé dans les locaux de l\'artisan ou en ligne : pas de droit de rétractation légal, mais certains artisans accordent un délai commercial. En pratique, annuler un devis signé peut entraîner des frais si des commandes de matériaux ont déjà été passées. Lisez toujours les CGV avant de signer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment détecter un devis de rénovation trop bas (arnaque ou sous-évaluation) ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Plusieurs signaux d\'alerte doivent vous alerter face à un devis anormalement bas. Absence de détail : un devis global sans décomposition par poste cache souvent des prestations manquantes. Prix inférieur de plus de 30 % aux deux autres devis : signe soit d\'une sous-évaluation qui sera rattrapée en cours de chantier (devis "appel"), soit d\'une économie sur les matériaux. Pas d\'assurance décennale mentionnée. Paiement en espèces exigé. Délai de réalisation irréaliste. TVA manquante ou inexacte (10 % pour la rénovation, 20 % pour construction neuve). Absence de SIRET ou de raison sociale.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Devis Travaux Rénovation Paris : comment comparer & éviter les pièges 2025 | Espace Design',
  description: 'Comment obtenir et comparer un devis de rénovation à Paris : CGV, prix au m², délais, assurance décennale. Guide 2025.',
}

export default function ArticleDevisTravaux() {
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
            Devis Travaux Rénovation Paris : comment comparer &amp; éviter les pièges 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Obtenir un devis de rénovation à Paris est une étape décisive. Un devis mal lu, mal comparé ou signé sans précautions peut transformer un projet de rénovation en cauchemar financier. Ce guide pratique vous explique comment lire un devis, comparer plusieurs offres et identifier les artisans sérieux.
          </p>
        </div>
      </section>

      {/* Section 1 — Lire un devis */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Comment lire un devis de travaux : les éléments indispensables
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Un devis de travaux de rénovation doit comporter un certain nombre de mentions obligatoires pour être valide et engager l&apos;artisan. Voici les éléments que vous devez vérifier avant toute signature.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Identification de l\'artisan et mentions légales',
                  detail: 'Le devis doit mentionner : raison sociale ou nom et prénom de l\'artisan, adresse, numéro de SIRET, numéro d\'immatriculation au Registre des Métiers si artisan, numéro d\'assurance décennale avec nom de la compagnie. L\'absence d\'une de ces mentions doit vous alerter. Vérifiez le SIRET sur le site de l\'INSEE (annuaire-entreprises.data.gouv.fr) pour confirmer que l\'entreprise est active.',
                },
                {
                  enjeu: 'Décomposition détaillée par poste',
                  detail: 'Un bon devis détaille chaque poste séparément : démolition, maçonnerie, plomberie, électricité, carrelage, peinture, etc. Pour chaque poste, le devis précise : nature exacte de la prestation, quantités (m², ml, unités), prix unitaire, prix total. Un devis "forfait global" sans décomposition est à éviter : en cas de litige, il est impossible de vérifier ce qui était inclus ou non.',
                },
                {
                  enjeu: 'Fournitures vs pose : bien distinguer les deux',
                  detail: 'Certains devis proposent la "fourniture et pose" (l\'artisan fournit et pose les matériaux), d\'autres uniquement la "pose" (vous achetez les matériaux). Les devis fourniture et pose sont plus pratiques mais permettent moins de contrôle sur les matériaux utilisés. Les devis pose seule donnent plus de liberté sur le choix des matériaux mais impliquent un suivi des commandes et livraisons de votre côté. Vérifiez toujours ce qui est inclus.',
                },
                {
                  enjeu: 'TVA applicable',
                  detail: 'Pour les travaux de rénovation dans une résidence principale ou secondaire de plus de 2 ans, la TVA est de 10 % (taux réduit). Pour les travaux de construction neuve ou les bâtiments de moins de 2 ans, la TVA est de 20 %. Un devis en HT doit afficher le taux de TVA applicable et le montant TTC. Méfiez-vous des artisans qui proposent des prix "sans TVA" : c\'est illégal au-delà d\'un certain seuil.',
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

      {/* Section 2 — Comparer 3 devis */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Comparer 3 devis de rénovation à Paris : la méthode
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Comparer des devis de travaux n&apos;est pas aussi simple que comparer des prix. Les périmètres, les matériaux et les niveaux de finition varient souvent entre artisans. Voici comment procéder de manière rigoureuse.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Aligner les périmètres',
                solution: 'Avant de comparer les montants, vérifiez que tous les devis couvrent exactement les mêmes prestations. Créez un tableau comparatif avec chaque poste en ligne et chaque artisan en colonne. Un poste absent d\'un devis ne signifie pas qu\'il est gratuit : il sera facturé en supplément en cours de chantier ("devis appel").',
                cout: 'Étape 1',
              },
              {
                titre: 'Comparer les matériaux proposés',
                solution: 'Un devis moins cher peut cacher des matériaux d\'entrée de gamme. Demandez les références exactes des matériaux proposés (marque, référence, gamme) pour chaque poste clé : carrelage, robinetterie, équipements sanitaires, isolation. Comparez les matériaux, pas uniquement les prix.',
                cout: 'Étape 2',
              },
              {
                titre: 'Vérifier les délais et la disponibilité',
                solution: 'Un artisan qui peut démarrer immédiatement est suspect (pourquoi n\'est-il pas déjà occupé ?). Un délai de 3 à 8 semaines est normal pour un bon artisan parisien. Vérifiez la date de début et la durée estimée du chantier. Demandez si les délais sont contractuels (pénalité de retard) ou indicatifs.',
                cout: 'Étape 3',
              },
              {
                titre: 'Évaluer le sérieux de l\'artisan',
                solution: 'Au-delà du prix : vérifiez les avis Google (plus de 10 avis, note supérieure à 4,2). Demandez des références de chantiers similaires. Visitez un chantier en cours si possible. Vérifiez l\'assurance décennale. Un artisan qui prend le temps de visiter le chantier et de poser des questions avant de remettre le devis est généralement plus fiable.',
                cout: 'Étape 4',
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

      {/* Section 3 — Red flags */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Les red flags d&apos;un devis de rénovation douteux
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le marché de la rénovation à Paris concentre de nombreux acteurs sérieux mais aussi des pratiques douteuses. Voici les signaux d&apos;alerte les plus courants que nos clients nous signalent.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Prix inférieur de 30 % ou plus aux autres devis',
                prix: 'Alerte maximale',
                detail: 'Un prix anormalement bas est presque toujours le signe d\'un "devis appel" : le devis est volontairement sous-évalué pour remporter le marché, et les postes manquants seront ajoutés en cours de chantier sous forme de "travaux supplémentaires". Ce mécanisme est très courant à Paris. Méfiez-vous aussi des artisans qui acceptent de s\'aligner immédiatement sur n\'importe quel prix.',
              },
              {
                type: 'Absence d\'assurance décennale',
                prix: 'Refus recommandé',
                detail: 'L\'assurance décennale est obligatoire pour tous les artisans du bâtiment depuis la loi Spinetta de 1978. Un artisan qui ne peut pas fournir son attestation d\'assurance décennale en cours de validité expose le propriétaire à une responsabilité totale en cas de sinistre. En cas de dommage structurel sur votre appartement, vous devrez payer les réparations de votre poche sans aucun recours.',
              },
              {
                type: 'Demande de paiement comptant ou en espèces',
                prix: 'Attention',
                detail: 'Un artisan sérieux propose un échéancier de paiement clair : acompte à la commande (30 à 40 %), paiement intermédiaire à mi-chantier (30 à 40 %), solde à la réception des travaux (20 à 30 %). Une demande de paiement total en espèces ou de la totalité à l\'avance est un signal d\'alerte fort. Le paiement par chèque ou virement assure une traçabilité en cas de litige.',
              },
              {
                type: 'Devis rédigé à la main ou sans détail',
                prix: 'Méfiance',
                detail: 'Un devis rédigé à la main sur un carnet ou sans décomposition par poste ne vous protège pas en cas de litige. Sans liste détaillée des prestations, il est impossible de prouver ce qui était inclus ou non dans le prix convenu. Exigez toujours un devis informatisé, daté, signé et tamponné par l\'artisan, avec la mention "Bon pour accord" de votre côté.',
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

      {/* Section 4 — Assurance + rétractation */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Assurance décennale et délai de rétractation : vos droits
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Avant de signer tout devis de rénovation à Paris, assurez-vous de comprendre vos droits et les protections auxquelles vous pouvez prétendre.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Protection</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Durée / Conditions</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Ce qu&apos;elle couvre</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    protection: 'Garantie décennale',
                    duree: '10 ans après réception',
                    couvre: 'Dommages compromettant la solidité ou l\'usage du bâtiment',
                  },
                  {
                    protection: 'Garantie de parfait achèvement',
                    duree: '1 an après réception',
                    couvre: 'Tous les défauts signalés à la réception ou dans l\'année',
                  },
                  {
                    protection: 'Garantie biennale',
                    duree: '2 ans après réception',
                    couvre: 'Équipements dissociables de l\'ouvrage (robinetterie, VMC...)',
                  },
                  {
                    protection: 'Droit de rétractation (démarchage)',
                    duree: '14 jours',
                    couvre: 'Annulation sans frais si devis signé à domicile',
                  },
                ].map((row, i) => (
                  <tr key={row.protection} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.protection}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.duree}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.couvre}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Checklist avant de signer un devis de rénovation
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Vérifier la présence du SIRET et le statut de l\'entreprise sur annuaire-entreprises.data.gouv.fr',
                'Demander l\'attestation d\'assurance décennale en cours de validité',
                'S\'assurer que le devis détaille tous les postes (pas de devis global)',
                'Vérifier le taux de TVA appliqué (10 % pour rénovation, 20 % pour neuf)',
                'Lire les CGV avant de signer, notamment les clauses de révision de prix',
                'Exiger un PV de réception des travaux à la fin du chantier (déclenche les garanties)',
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
              { href: '/blog/prix-renovation-salle-de-bain-paris', title: 'Prix rénovation salle de bain Paris' },
              { href: '/blog/renovation-appartement-paris-11e', title: 'Rénovation appartement Paris 11e' },
              { href: '/blog/renovation-appartement-paris-14e', title: 'Rénovation appartement Paris 14e' },
              { href: '/blog/renovation-appartement-paris-18e', title: 'Rénovation appartement Paris 18e' },
              { href: '/blog/renovation-bureau-paris', title: 'Rénovation bureau Paris' },
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
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Nos zones d&apos;intervention</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-9e', label: 'Paris 9e' },
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-paris-14e', label: 'Paris 14e' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-paris-18e', label: 'Paris 18e' },
              { href: '/renovation-levallois-perret', label: 'Levallois' },
              { href: '/renovation-courbevoie', label: 'Courbevoie' },
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
          Obtenez un devis clair et détaillé sous 48h
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Artisan parisien, assuré décennale, devis gratuit et transparent. Pas de mauvaises surprises.
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
