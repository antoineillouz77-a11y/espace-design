import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Devis Rénovation en Ligne Paris', item: 'https://espacedesignparis.fr/blog/devis-renovation-en-ligne-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Devis Rénovation en Ligne Paris : comment obtenir & comparer 2025 | Espace Design',
  description: 'Obtenir un devis rénovation à Paris : que doit contenir un bon devis, comment comparer, pièges à éviter. Guide artisan 2025.',
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
      name: 'Que doit obligatoirement contenir un devis de rénovation à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Un devis de rénovation valide doit obligatoirement mentionner : les coordonnées complètes de l'artisan (raison sociale, SIRET, assurance décennale), la date d'émission et la durée de validité du devis, la description détaillée de chaque prestation avec le détail fourniture et main d'oeuvre séparés, les quantités et unités (m², ml, forfait), le montant HT et TTC avec le taux de TVA applicable (10% pour la rénovation, 20% pour les constructions neuves), et le délai prévisionnel d'exécution des travaux.",
      },
    },
    {
      '@type': 'Question',
      name: 'Comment comparer plusieurs devis de rénovation sans se faire piéger ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour comparer correctement des devis de rénovation parisiens : vérifiez que chaque poste est décrit de façon identique (même matériaux, mêmes surfaces), méfiez-vous du moins-disant qui peut omettre des prestations essentielles (dépose, évacuation des gravats, protection des sols), vérifiez que les matériaux sont nommés précisément (marque, référence, épaisseur), et assurez-vous que chaque artisan est couvert par une assurance décennale et une garantie de parfait achèvement. Un devis 30% moins cher que les autres est souvent un signal d'alerte.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle est la différence entre arrhes et acompte dans un devis travaux ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les arrhes et l'acompte ont des régimes juridiques opposés. Les arrhes permettent à chaque partie de renoncer au contrat : le client perd ses arrhes s'il se désiste, l'artisan rembourse le double s'il annule. L'acompte, en revanche, engage définitivement les deux parties : le contrat est formé dès le versement. Pour des travaux de rénovation, l'acompte est la pratique standard. Un acompte de 30% au démarrage est courant et protège l'artisan pour l'achat des matériaux. Ne jamais verser plus de 30% avant le démarrage des travaux.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Devis Rénovation en Ligne Paris : comment obtenir & comparer 2025 | Espace Design',
  description: 'Obtenir un devis rénovation à Paris : que doit contenir un bon devis, comment comparer, pièges à éviter. Guide artisan 2025.',
}

export default function ArticleDevisRenovationEnLigne() {
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
            Devis Rénovation en Ligne Paris : comment obtenir et comparer 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Obtenir un devis de rénovation à Paris n&apos;est pas difficile — le comprendre et le comparer correctement, c&apos;est une autre histoire. Que doit contenir un bon devis ? Comment détecter un devis incomplet ou trompeur ? Guide complet pour éviter les pièges et choisir le bon artisan en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les éléments indispensables d&apos;un devis de rénovation à Paris
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Un devis de rénovation n&apos;est pas un simple chiffrage — c&apos;est un document contractuel qui engage l&apos;artisan. En France, le devis doit respecter des mentions légales obligatoires. À Paris, où les chantiers sont souvent complexes (copropriété, appartements anciens, accès difficile), un devis détaillé est votre meilleure protection.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Un devis vague avec des formules comme &quot;rénovation complète appartement — forfait 15 000 €&quot; ne vaut rien juridiquement. En cas de litige, vous ne pourrez pas prouver ce qui était inclus ou non.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: "Identification de l'artisan",
                  detail: "Raison sociale, adresse, numéro SIRET, numéro d'assurance décennale avec nom de l'assureur et numéro de police. Sans ces informations, impossible de vérifier la légalité de l'entreprise ni de faire jouer les garanties en cas de problème après travaux.",
                },
                {
                  enjeu: 'Description détaillée de chaque prestation',
                  detail: "Chaque poste doit détailler : nature exacte des travaux, matériaux utilisés (marque, référence, épaisseur), quantités précises (m², ml, unité), et distinction fourniture / pose. Exemple : \"Pose parquet stratifié AC4 — 12 mm — fourniture + pose : 65 €/m² — surface : 45 m²\".",
                },
                {
                  enjeu: 'Prix HT, TVA et TTC',
                  detail: "Le taux de TVA applicable dépend de la nature des travaux : 10% pour la rénovation de logements de plus de 2 ans, 20% pour les constructions neuves et certains travaux d'amélioration. Le devis doit mentionner le taux appliqué à chaque ligne pour que vous puissiez vérifier sa cohérence.",
                },
                {
                  enjeu: "Délai d'exécution et conditions de paiement",
                  detail: "Date de début des travaux, durée prévisionnelle, jalons de paiement (acompte au démarrage, appels de fonds à l'avancement, solde à la réception). Un échéancier clair protège les deux parties et permet un suivi rigoureux du chantier.",
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
            Comment comparer des devis de rénovation parisiens sans se tromper
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Comparer des devis de rénovation est un exercice délicat : deux devis au même prix peuvent cacher des prestations très différentes. Voici les points de vigilance essentiels pour une comparaison fiable.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Attention au moins-disant',
                solution: "Un devis 30 à 40% moins cher que la concurrence cache presque toujours quelque chose : matériaux bon marché non mentionnés, prestations omises (dépose, évacuation des gravats, protection des sols), ou main d'oeuvre non déclarée. Le moins-disant est rarement une bonne affaire sur un chantier parisien.",
                cout: "Signal d'alerte",
              },
              {
                titre: 'Vérifier le périmètre exact',
                solution: "Chaque artisan inclut ou exclut des postes différents. L'un inclut l'évacuation des gravats, l'autre non. L'un inclut les finitions (baguettes, plinthes, joints), l'autre non. Toujours lister les exclusions explicites et les comparer entre devis avant de conclure.",
                cout: 'Point critique',
              },
              {
                titre: 'Identifier les matériaux précisément',
                solution: 'Un devis doit nommer les matériaux : "peinture acrylique mate" est insuffisant. Pour les revêtements de sol, exiger la marque, la référence et les caractéristiques techniques (classe d\'usure, épaisseur). La précision des matériaux garantit la qualité finale.',
                cout: 'Point critique',
              },
              {
                titre: "Vérifier l'assurance décennale",
                solution: "L'assurance décennale couvre les dommages structurels pendant 10 ans après la réception des travaux. Sans elle, vous n'avez aucun recours en cas de malfaçon grave. Demandez la copie de l'attestation et vérifiez qu'elle couvre bien les travaux prévus.",
                cout: 'Obligatoire',
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

      {/* Section 3 */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Arrhes, acompte et garanties légales : ce que vous devez savoir
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Avant de signer un devis de rénovation à Paris, comprendre les notions d&apos;arrhes, d&apos;acompte et de garanties légales vous permettra d&apos;éviter des litiges coûteux et de connaître vos droits en cas de problème.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Arrhes vs acompte',
                prix: 'Distinction juridique clé',
                detail: "Les arrhes permettent à chacun de renoncer au contrat (le client perd ses arrhes, l'artisan rembourse le double). L'acompte engage définitivement les deux parties. Dans la rénovation, l'acompte est la pratique standard. Ne jamais verser plus de 30% avant le démarrage des travaux.",
              },
              {
                type: 'Délai de rétractation',
                prix: '14 jours',
                detail: "Pour tout contrat signé à votre domicile (devis signé lors d'une visite), vous bénéficiez d'un délai de rétractation de 14 jours sans pénalité (loi Hamon). L'artisan doit vous remettre un formulaire de rétractation. Pour les devis signés en agence ou par voie électronique, vérifiez les conditions du contrat.",
              },
              {
                type: 'Garantie de parfait achèvement',
                prix: '1 an',
                detail: "Pendant 1 an après la réception des travaux, l'artisan est tenu de corriger gratuitement tous les désordres signalés par le client. Cette garantie couvre les malfaçons visibles et les défauts de conformité signalés à la réception ou notifiés par courrier recommandé dans l'année suivante.",
              },
              {
                type: 'Garantie décennale',
                prix: '10 ans',
                detail: "La garantie décennale couvre les dommages compromettant la solidité de l'ouvrage ou le rendant impropre à sa destination (fissures structurelles, infiltrations, effondrement). Elle est obligatoire pour tous les artisans du bâtiment intervenant sur le gros oeuvre, l'étanchéité et les éléments indissociables.",
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

      {/* Section 4 — Checklist */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Checklist : les 10 points à vérifier avant de signer un devis
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Avant de signer votre devis de rénovation parisien, passez cette checklist en revue. Chaque point manquant est une raison de demander une précision ou un avenant avant de vous engager.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'SIRET et assurance décennale présents et vérifiables',
              'Chaque prestation décrite avec matériaux, quantités et unités',
              'Fourniture et main d\'oeuvre détaillées séparément',
              'TVA à 10% appliquée (rénovation de plus de 2 ans)',
              "Délai d'exécution et date de démarrage mentionnés",
              'Acompte inférieur ou égal à 30% du montant total',
              'Modalités de paiement et jalons définis',
              'Exclusions et travaux non prévus listés explicitement',
              'Durée de validité du devis précisée (généralement 3 mois)',
              'Délai de rétractation mentionné si signature à domicile',
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
              { href: '/renovation-appartement-paris', title: 'Rénovation appartement Paris' },
              { href: '/blog/budget-renovation-paris-2025', title: 'Budget rénovation Paris 2025' },
              { href: '/blog/choisir-artisan-renovation-paris', title: 'Choisir son artisan à Paris' },
              { href: '/blog/renovation-avant-vente-paris', title: 'Rénovation avant vente Paris' },
              { href: '/contact', title: 'Obtenir un devis gratuit' },
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
          Obtenez un devis de rénovation détaillé à Paris
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Devis gratuit et détaillé sous 48h. Descriptif poste par poste. Artisan certifié, assurance décennale incluse.
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
