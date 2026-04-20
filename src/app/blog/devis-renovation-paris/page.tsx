import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Devis rénovation Paris', item: 'https://espacedesignparis.fr/blog/devis-renovation-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Devis Rénovation Paris : comment obtenir et comparer 3 devis 2025',
  description: 'Comment obtenir un bon devis de rénovation à Paris ? Que comparer, les pièges à éviter, les garanties à demander. Guide pratique 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/devis-renovation-paris',
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
        text: "Il est recommandé d'obtenir au minimum 3 devis pour tout travaux dépassant 3 000 €. Pour une rénovation complète, visez 3 à 5 artisans ou entreprises générales. Comparez les mêmes prestations ligne par ligne — un devis moins cher peut omettre des postes importants comme la reprise des sols ou la mise aux normes électrique.",
      },
    },
    {
      '@type': 'Question',
      name: 'Que doit contenir un devis de rénovation ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Un devis sérieux doit comporter : le détail des travaux poste par poste (quantités, matériaux, temps de pose), le prix HT et TTC, le taux de TVA applicable (10% pour travaux dans logements de plus de 2 ans), les délais de réalisation, la durée de validité du devis (3 mois standard), et les coordonnées + numéro SIRET de l'entreprise.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quel est le délai pour obtenir un devis à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Un artisan sérieux à Paris visite le chantier sous 1 à 5 jours ouvrés et remet le devis détaillé sous 48 à 72h après la visite. Méfiez-vous des devis remis sans visite ou sur la base de photos — la visite physique est indispensable pour chiffrer correctement les travaux.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Devis Rénovation Paris : comment obtenir et comparer 3 devis 2025',
  description: 'Comment obtenir un bon devis de rénovation à Paris ? Que comparer, les pièges à éviter, les garanties à demander. Guide pratique 2025.',
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
            Conseils
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Devis Rénovation Paris : comment obtenir et comparer 3 devis en 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Comment obtenir un bon devis de rénovation à Paris ? Que comparer, les pièges à éviter, les garanties à demander. Guide pratique 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Ce que doit contenir un bon devis */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Ce qu&apos;un bon devis de rénovation doit contenir
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Un devis de rénovation n&apos;est pas qu&apos;un chiffre global. C&apos;est un document contractuel qui détaille chaque poste de travaux. Un devis flou est une source de litiges. Voici les éléments indispensables à vérifier avant de signer.
            </p>
            <ul className="space-y-3">
              {[
                { item: 'Détail poste par poste', detail: "Chaque prestation doit être listée séparément : démolition, maçonnerie, plomberie, électricité, carrelage, peinture. Une ligne \"rénovation complète : 15 000 €\" est insuffisante." },
                { item: 'Quantités et matériaux précis', detail: "\"Pose parquet 45 m² chêne 14 mm — 2 160 € HT\" est un bon niveau de détail. Sans les quantités, vous ne pouvez pas comparer deux devis." },
                { item: 'Prix HT et TTC', detail: "Les artisans facturent en HT mais vous payez TTC. La TVA à 10 % s'applique aux travaux de rénovation dans un logement de plus de 2 ans. Vérifiez que le taux indiqué est correct." },
                { item: 'Délais de réalisation', detail: "Date de démarrage, durée prévisionnelle, jalon de fin. Un planning précis protège les deux parties en cas de retard." },
                { item: 'Durée de validité', detail: "3 mois est la norme. Au-delà, les prix des matériaux peuvent évoluer et le devis devenir caduc." },
                { item: 'Numéro SIRET et mentions légales', detail: "Nom commercial, adresse, numéro SIRET, mention de l'assurance décennale avec numéro de police. Ces éléments permettent de vérifier la légitimité de l'entreprise." },
              ].map((el) => (
                <li key={el.item} className="bg-[#FAFAF8] rounded-lg p-4 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-1">{el.item}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 2 — Tableau comparaison */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Comment comparer trois devis ligne par ligne
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Comparer des devis est un exercice délicat : deux artisans ne découpent pas toujours les postes de la même façon. Voici une méthode simple pour ne pas vous faire piéger.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1C1C1C] text-white">
                    <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Poste</th>
                    <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Artisan A</th>
                    <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Artisan B</th>
                    <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Artisan C</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { poste: 'Démolition cloisons', a: '1 200 €', b: 'Inclus', c: '900 €' },
                    { poste: 'Électricité mise aux normes', a: '3 500 €', b: '—', c: '3 200 €' },
                    { poste: 'Plomberie salle de bain', a: '2 800 €', b: '2 600 €', c: '2 900 €' },
                    { poste: 'Carrelage (fourni + pose)', a: '4 200 €', b: '3 900 €', c: 'Hors fourniture' },
                    { poste: 'Peinture', a: '2 100 €', b: '1 800 €', c: '2 000 €' },
                    { poste: 'TOTAL TTC estimé', a: '16 100 €', b: '12 400 €*', c: '14 800 €*' },
                  ].map((row, i) => (
                    <tr key={row.poste} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                      <td className="px-4 py-3 text-[#1C1C1C] font-light">{row.poste}</td>
                      <td className="px-4 py-3 text-center text-gray-600 font-light">{row.a}</td>
                      <td className="px-4 py-3 text-center text-gray-600 font-light">{row.b}</td>
                      <td className="px-4 py-3 text-center text-gray-600 font-light">{row.c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-xs font-light italic mb-4">
              * L&apos;artisan B n&apos;a pas chiffré l&apos;électricité, l&apos;artisan C excluait la fourniture des matériaux. Le devis le moins cher n&apos;est pas le plus avantageux.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              La méthode : créez un tableau avec tous les postes identifiés. Renseignez chaque devis poste par poste. Identifiez les postes manquants ou inclus dans une ligne fourre-tout. Revenez vers chaque artisan pour clarifier les zones d&apos;ombre avant de décider.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 — Pièges */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Les 5 pièges du devis trop bas
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Un devis anormalement bas n&apos;est jamais une bonne nouvelle. Voici les cinq raisons les plus fréquentes — et comment les repérer avant de signer.
          </p>
          <div className="space-y-4">
            {[
              {
                num: '01',
                titre: 'Les postes oubliés volontairement',
                texte: "L'artisan n'inclut pas la dépose des anciens revêtements, la protection des parties communes ou la mise aux normes électrique. Ces postes réapparaissent sous forme d'avenants une fois le chantier démarré.",
              },
              {
                num: '02',
                titre: 'Les matériaux bas de gamme non spécifiés',
                texte: "\"Carrelage fourni et posé\" sans préciser la qualité du carrelage. Vous vous retrouvez avec un grès cérame à 6 €/m² là où vous attendiez un format 60×60 de qualité.",
              },
              {
                num: '03',
                titre: 'La main-d\'œuvre non déclarée',
                texte: "L'artisan sous-traite à des équipes non déclarées pour compresser les coûts. Vous n'avez aucun recours en cas de malfaçon et vous êtes potentiellement complice de travail dissimulé.",
              },
              {
                num: '04',
                titre: 'L\'absence de garantie décennale',
                texte: "Sans assurance décennale, vous portez le risque seul pendant 10 ans. Un effondrement de cloison, une inondation due à une soudure mal faite — aucun recours possible.",
              },
              {
                num: '05',
                titre: 'Le devis volontairement incomplet pour obtenir le marché',
                texte: "Technique connue : un premier devis attractif pour décrocher le contrat, puis une série d'avenants qui font doubler la facture finale. Demandez toujours un devis \"tout compris\" avec une clause de prix ferme et définitif.",
              },
            ].map((el) => (
              <div key={el.num} className="flex gap-4 bg-white rounded-lg p-5 border border-gray-100">
                <span className="font-display text-2xl font-semibold text-[#D4AF37]/40 flex-shrink-0 leading-none">{el.num}</span>
                <div>
                  <div className="font-medium text-[#1C1C1C] text-sm mb-1">{el.titre}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.texte}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Questions à poser + TVA + Garanties */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les questions à poser à l&apos;artisan avant de signer
            </h2>
            <ul className="space-y-3">
              {[
                'Votre assurance décennale couvre-t-elle bien ce type de travaux ? Pouvez-vous me fournir l\'attestation ?',
                'Le prix du devis est-il ferme et définitif, ou susceptible d\'évoluer selon l\'avancement du chantier ?',
                'Qui réalisera concrètement les travaux — vos propres équipes ou des sous-traitants ?',
                'Quel est votre délai de disponibilité pour démarrer le chantier ?',
                'Comment gérez-vous les avenants en cas de travaux supplémentaires imprévus ?',
                'Avez-vous des références de chantiers similaires que je pourrais visiter ou pour lesquels vous pouvez me donner un contact client ?',
              ].map((q) => (
                <li key={q} className="flex items-start gap-3 text-sm text-gray-600 font-light">
                  <span className="text-[#D4AF37] font-medium flex-shrink-0">→</span>
                  {q}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              TVA à 10 % : comment en bénéficier
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Pour les travaux de rénovation dans un logement achevé depuis plus de 2 ans, le taux de TVA applicable est de 10 % au lieu de 20 % — une économie substantielle sur des chantiers importants. Conditions à respecter :
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Le logement doit être achevé depuis plus de 2 ans',
                'Les travaux doivent concerner l\'amélioration, la transformation ou l\'entretien du bâti',
                'Les matériaux représentent moins de 50 % du coût total TTC',
                'L\'artisan doit être capable de justifier l\'application du taux réduit',
                'Certains travaux (construction de vérandas, suréélévation) restent à 20 %',
                'L\'attestation client (formulaire fiscal) peut être demandée par l\'artisan',
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
              Les garanties à exiger avant de démarrer
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Au-delà du devis, trois garanties encadrent légalement les travaux de rénovation en France.
            </p>
            <div className="space-y-4">
              {[
                {
                  titre: 'Garantie décennale (10 ans)',
                  texte: "Obligatoire pour tous les artisans du bâtiment. Elle couvre les dommages qui compromettent la solidité de l'ouvrage ou le rendent impropre à l'usage. Vérifiez que l'attestation est en cours de validité et que le chantier entre dans le périmètre couvert.",
                },
                {
                  titre: 'Garantie biennale (2 ans)',
                  texte: "Couvre les éléments d'équipement dissociables de la construction : volets, chaudière, robinetterie. Elle est automatique dès lors que l'artisan a réalisé les travaux dans le cadre d'un contrat écrit.",
                },
                {
                  titre: 'Garantie de parfait achèvement (1 an)',
                  texte: "Pendant 1 an à compter de la réception du chantier, l'artisan est tenu de réparer tout désordre signalé par le maître d'ouvrage, quelle qu'en soit la cause. Signalez par écrit (email ou lettre recommandée) tout défaut constaté.",
                },
              ].map((el) => (
                <div key={el.titre} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.titre}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.texte}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Délai de rétractation : 14 jours pour les contrats signés à domicile
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Si le contrat est conclu hors établissement (c&apos;est-à-dire chez vous, et non dans les locaux de l&apos;artisan), vous bénéficiez d&apos;un délai de rétractation de 14 jours calendaires. L&apos;artisan est tenu de vous informer de ce droit et de vous remettre un formulaire de rétractation. Sans cette information, le délai est porté à 12 mois. Ce droit s&apos;applique même si vous avez déjà signé le devis et versé un acompte.
            </p>
          </div>
        </div>
      </section>

      {/* Voir aussi */}
      <section className="py-12 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Voir aussi</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/choisir-artisan-renovation-paris', title: 'Choisir un artisan rénovateur à Paris' },
              { href: '/blog/prix-renovation-appartement-paris', title: 'Prix rénovation Paris 2025' },
              { href: '/renovation-appartement-paris', title: 'Rénovation appartement Paris' },
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
          Besoin d&apos;un devis de rénovation à Paris ?
        </h2>
        <p className="text-gray-400 text-sm font-light mb-8">
          Devis détaillé poste par poste remis sous 48h. Déplacement gratuit sans engagement.
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
