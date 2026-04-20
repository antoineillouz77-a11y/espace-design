import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Artisan Agréé Paris 2025 — Certifications RGE, Qualibat & Garanties | Espace Design',
  description:
    "Pourquoi choisir un artisan agréé ou certifié à Paris ? RGE, Qualibat, assurance décennale : les garanties qui protègent vos travaux. Guide complet 2025.",
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Artisan agréé Paris',
      item: 'https://espacedesignparis.fr/blog/artisan-agree-paris',
    },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Artisan agréé à Paris : certifications, garanties et aides conditionnées",
  description:
    "RGE, Qualibat, assurance décennale : comprendre les certifications artisans à Paris et pourquoi elles protègent votre investissement.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
    logo: { '@type': 'ImageObject', url: 'https://espacedesignparis.fr/images/hero.jpg' },
  },
  url: 'https://espacedesignparis.fr/blog/artisan-agree-paris',
  datePublished: '2025-01-25',
  dateModified: '2025-04-19',
  inLanguage: 'fr-FR',
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "La certification RGE est-elle obligatoire pour tous les travaux de rénovation ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Non, la certification RGE (Reconnu Garant de l'Environnement) n'est pas obligatoire pour tous les travaux. Elle est en revanche indispensable pour que le client puisse bénéficier de certaines aides financières de l'État : MaPrimeRénov', CEE (Certificats d'Économies d'Énergie) et éco-PTZ. Sans artisan RGE, ces subventions ne sont pas accessibles.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment vérifier qu'un artisan parisien possède bien une assurance décennale ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Demandez systématiquement la copie de l'attestation d'assurance décennale en cours de validité. Vérifiez que la date de fin de validité couvre au moins la durée du chantier. Vous pouvez également appeler directement l'assureur pour confirmer que la police est active. Un artisan sérieux ne refusera jamais de vous communiquer ce document.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelle est la différence entre Qualibat et RGE pour un artisan parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Qualibat est un organisme de certification qui évalue la capacité technique et financière d'une entreprise du BTP, indépendamment de la performance énergétique. RGE est une mention qui certifie les compétences d'un artisan dans le domaine de l'efficacité énergétique et des énergies renouvelables. Les deux certifications sont complémentaires et attestent de la qualité et de la sérieux d'un artisan.",
      },
    },
  ],
}

export default function ArtisanAgreeParis() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">
          Certifications &amp; Garanties
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
          Artisan agréé à Paris : ce que ça garantit vraiment
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          RGE, Qualibat, assurance décennale, Handibat : décryptage des certifications
          artisanales à Paris et pourquoi elles protègent votre investissement mieux que
          n&apos;importe quelle promesse orale.
        </p>
      </section>

      {/* Contenu */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">

          {/* Section 1 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Quelles certifications pour un artisan rénovateur à Paris ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le terme &quot;artisan agréé&quot; recouvre en réalité plusieurs réalités différentes.
              En France, un artisan est légalement &quot;agréé&quot; dès lors qu&apos;il est immatriculé
              au répertoire des métiers. Mais au-delà de cette immatriculation de base, il existe
              des certifications plus exigeantes qui attestent réellement de la compétence technique
              et de la qualité du travail fourni. À Paris, dans un marché très concurrentiel, ces
              certifications sont des repères précieux pour distinguer les professionnels sérieux.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Voici les principales certifications et garanties à vérifier avant de confier vos
              travaux à un artisan parisien :
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1C1C1C] text-white">
                    <th className="text-left p-3 font-medium">Certification</th>
                    <th className="text-left p-3 font-medium">Ce qu'elle garantit</th>
                    <th className="text-right p-3 font-medium">Obligatoire pour</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Assurance décennale', 'Couverture des malfaçons pendant 10 ans', 'Tout chantier'],
                    ['RGE (Reconnu Garant Énergie)', 'Compétences efficacité énergétique', "MaPrimeRénov', CEE, éco-PTZ"],
                    ['Qualibat', 'Capacité technique et financière', 'Certains marchés publics'],
                    ['Handibat', "Compétences adaptation PMR", "Aides accessibilité"],
                    ['QualiPAC / QualiSol', 'Installateurs PAC et solaire', 'Aides pompes à chaleur'],
                    ['Assurance RC Pro', 'Dommages aux tiers en cours de chantier', 'Recommandée'],
                  ].map(([cert, garantie, pour], i) => (
                    <tr key={cert} className={i % 2 === 0 ? 'bg-[#FAFAF8]' : 'bg-white'}>
                      <td className="p-3 text-[#1C1C1C] font-medium text-xs">{cert}</td>
                      <td className="p-3 text-gray-600 font-light">{garantie}</td>
                      <td className="p-3 text-right text-[#B8960C] font-light text-xs">{pour}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Pourquoi les certifications artisanales sont cruciales à Paris
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le marché parisien de la rénovation est l&apos;un des plus denses de France, avec une
              concentration exceptionnelle d&apos;artisans de tous niveaux. Cette abondance d&apos;offre
              est une chance pour les propriétaires — mais aussi un risque, car elle facilite
              l&apos;installation d&apos;entreprises peu scrupuleuses. Chaque année à Paris, des centaines
              de propriétaires se retrouvent victimes d&apos;artisans non assurés, de devis gonflés
              après signature ou de travaux abandonnés en milieu de chantier.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Les certifications constituent un premier filtre objectif. Elles sont délivrées par
              des organismes indépendants (Qualibat, CERQUAL, AFNOR) après vérification des
              compétences, des références et de la situation financière de l&apos;entreprise. Un artisan
              certifié a donc passé un audit : c&apos;est une garantie minimale, mais réelle.
            </p>
            <ul className="space-y-3">
              {[
                {
                  title: 'Protection juridique renforcée',
                  detail:
                    "En cas de malfaçon constatée dans les 10 ans après la réception des travaux, l'assurance décennale prend en charge les réparations. Sans assurance, vous devez vous retourner contre l'artisan en justice — souvent long et incertain.",
                },
                {
                  title: "Accès aux aides de l'État",
                  detail:
                    "MaPrimeRénov', MaPrimeAdapt', eco-PTZ, CEE : toutes ces aides sont conditionnées au passage par un artisan RGE. Sans certification, votre dossier de subvention sera rejeté, quelle que soit la qualité des travaux réalisés.",
                },
                {
                  title: 'Compétences techniques vérifiées',
                  detail:
                    "Un artisan certifié Qualibat a démontré sa capacité à réaliser les travaux pour lesquels il est certifié. Les audits de certification vérifient les références clients, les qualifications des équipes et les équipements disponibles.",
                },
                {
                  title: "Fiabilité financière de l'entreprise",
                  detail:
                    "La certification Qualibat impose une analyse financière de l'entreprise. Un artisan certifié est moins susceptible de disparaître en milieu de chantier pour cause de faillite.",
                },
                {
                  title: 'Assurance de la conformité aux normes',
                  detail:
                    "Les artisans certifiés sont formés aux évolutions réglementaires : NF C 15-100 pour l'électricité, DTU pour le carrelage et l'étanchéité, RT2020 pour la performance thermique. Vos travaux respecteront les normes en vigueur.",
                },
                {
                  title: 'Valorisation immobilière',
                  detail:
                    "Un appartement rénové par des artisans certifiés, avec factures et assurances à l'appui, est plus facilement valorisé lors d'une revente ou d'une mise en location. Les notaires et agents immobiliers le confirment.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-3">
                  <CheckCircle size={16} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#1C1C1C] text-sm font-medium">{item.title} : </span>
                    <span className="text-gray-600 text-sm font-light">{item.detail}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3 — FAQ */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-6">
              Questions fréquentes sur les artisans agréés à Paris
            </h2>
            <div className="space-y-5">
              {schemaFAQ.mainEntity.map((q) => (
                <div key={q.name} className="border-l-2 border-[#D4AF37] pl-5">
                  <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                    {q.name}
                  </h3>
                  <p className="text-gray-600 text-sm font-light leading-relaxed">
                    {q.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Voir aussi */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-xl font-semibold text-[#1C1C1C] mb-6">Voir aussi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/choisir-artisan-renovation-paris', title: 'Comment choisir un artisan rénovateur à Paris ?', tag: 'Conseils' },
              { href: '/blog/assurance-decennale-paris', title: "L'assurance décennale à Paris : tout comprendre", tag: 'Garanties' },
              { href: '/blog/renovation-premiere-fois-paris', title: 'Guide primo-rénovateur à Paris', tag: 'Guide' },
              { href: '/blog/devis-renovation-paris', title: 'Obtenir un devis de rénovation fiable à Paris', tag: 'Devis' },
            ].map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="block p-4 bg-[#FAFAF8] border border-gray-100 rounded-lg hover:border-[#D4AF37]/40 transition-colors group"
              >
                <span className="text-[10px] uppercase tracking-widest text-[#B8960C] font-light">
                  {a.tag}
                </span>
                <p className="text-sm font-medium text-[#1C1C1C] mt-1 group-hover:text-[#B8960C] transition-colors leading-snug">
                  {a.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-xs font-light uppercase tracking-[0.25em] mb-4">
          Artisan certifié Paris
        </p>
        <h2 className="font-display text-3xl font-semibold text-white mb-4">
          Espace Design : assurances et certifications à jour
        </h2>
        <p className="text-gray-400 text-sm font-light max-w-xl mx-auto mb-8">
          Espace Design intervient à Paris avec assurance décennale en cours de validité et
          toutes les garanties nécessaires pour sécuriser vos travaux de rénovation. Devis
          détaillé gratuit sous 48h.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-7 py-3 text-sm font-medium hover:bg-[#C9A227] transition-colors"
          >
            Demander un devis
            <ArrowRight size={16} />
          </Link>
          <a
            href="tel:+33142000000"
            className="inline-flex items-center gap-2 border border-white/20 text-white px-7 py-3 text-sm font-light hover:border-[#D4AF37]/60 transition-colors"
          >
            <Phone size={16} />
            Appeler Espace Design
          </a>
        </div>
      </section>
    </>
  )
}
