import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: "Rénovation Bruyères-le-Châtel (91680) — Artisan Rénovateur | Espace Design",
  description:
    "Artisan rénovateur à Bruyères-le-Châtel (91680) : pavillons, maisons de bourg, village en mutation proche technopôle. Rénovation 700-2500€/m². Devis gratuit 48h.",
  keywords: [
    'rénovation Bruyères-le-Châtel',
    'artisan rénovation Bruyères-le-Châtel',
    'renovation Bruyères-le-Châtel 91680',
    'entreprise renovation Bruyères-le-Châtel',
    'artisan Bruyères-le-Châtel Essonne',
    'rénovation maison Bruyères-le-Châtel',
    'rénovation pavillon Essonne 91',
  ],
}

const schemaLocal = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Espace Design',
  description: "Artisan rénovateur et décorateur intérieur à Bruyères-le-Châtel.",
  telephone: '+33611783867',
  url: 'https://espacedesignparis.fr/renovation-bruyeres-le-chatel',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Bruyères-le-Châtel',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bruyères-le-Châtel',
    postalCode: '91680',
    addressCountry: 'FR',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '47',
  },
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix d'une rénovation à Bruyères-le-Châtel ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le coût d'une rénovation à Bruyères-le-Châtel varie entre 700 et 1 200 €/m² pour une rénovation standard d'un pavillon ou d'une maison de bourg. Pour une rénovation complète avec finitions haut de gamme, comptez 1 200 à 2 500 €/m². Devis gratuit sous 48h.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel artisan contacter pour rénover une maison à Bruyères-le-Châtel ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Espace Design intervient régulièrement à Bruyères-le-Châtel pour la rénovation de pavillons et maisons de bourg. Artisan assuré décennale, 15 ans d'expérience, devis gratuit sous 48h, un seul interlocuteur du devis à la livraison.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment rénover un pavillon à Bruyères-le-Châtel ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La rénovation d'un pavillon à Bruyères-le-Châtel comprend généralement la mise aux normes électriques, l'isolation thermique, le remplacement des revêtements de sol et la remise à neuf des pièces d'eau. Nous gérons l'ensemble des corps de métier.",
      },
    },
    {
      '@type': 'Question',
      name: "Avez-vous une assurance décennale ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, Espace Design est couvert par une assurance décennale et une RC professionnelle. Vos travaux sont garantis 10 ans après la livraison.",
      },
    },
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Rénovation Essonne', item: 'https://espacedesignparis.fr/renovation-essonne' },
    { '@type': 'ListItem', position: 3, name: 'Bruyères-le-Châtel', item: 'https://espacedesignparis.fr/renovation-bruyeres-le-chatel' },
  ],
}

export default function RenovationBruyeresLeChatel() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocal) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />

      <section className="pt-28 sm:pt-36 pb-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Bruyères-le-Châtel — 91680</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Rénovation maison<br className="hidden sm:block" /> Bruyères-le-Châtel
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Artisan rénovateur à Bruyères-le-Châtel (91680) : pavillons, maisons de bourg, village en pleine mutation proche du technopôle de l'Essonne. Rénovation complète et finitions soignées. Devis gratuit sous 48h.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+33611783867"
              className="flex items-center justify-center gap-2 bg-[#1C1C1C] text-white px-7 py-3.5 rounded font-light text-sm tracking-wide hover:bg-[#B8960C] transition-colors duration-300"
            >
              <Phone size={15} />
              06 11 78 38 67
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 border border-[#1C1C1C] text-[#1C1C1C] px-7 py-3.5 rounded font-light text-sm tracking-wide hover:bg-[#1C1C1C] hover:text-white transition-colors duration-300"
            >
              Devis gratuit <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F2F2EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10">
            Nos services à Bruyères-le-Châtel
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Rénovation de pavillons', desc: "Remise à neuf complète de pavillons — isolation, électricité, plomberie, peinture, sols. Nous intervenons sur tous les corps de métier pour un résultat clé en main à Bruyères-le-Châtel." },
              { num: '02', title: 'Maisons de bourg', desc: "Réhabilitation et modernisation de maisons de bourg anciennes : ouverture de volumes, mise aux normes, menuiseries sur mesure. Respect du cachet du bâti local." },
              { num: '03', title: 'Finitions et décoration', desc: "Peinture, parquet, carrelage, faïence : des finitions soignées pour valoriser votre bien. Conseils personnalisés en décoration intérieure adaptés à chaque projet." },
            ].map((s) => (
              <div key={s.title} className="bg-white rounded-lg p-6 border border-gray-100">
                <div className="font-display text-3xl font-semibold text-[#D4AF37] mb-3">{s.num}</div>
                <div className="w-6 h-px bg-[#D4AF37]/50 mb-4" />
                <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-8">
            Prix rénovation à Bruyères-le-Châtel
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border border-gray-100 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#F2F2EE]">
                  <th className="px-5 py-3 font-semibold text-[#1C1C1C] font-display">Type de travaux</th>
                  <th className="px-5 py-3 font-semibold text-[#1C1C1C] font-display">Prix indicatif</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ['Peinture intérieure', '25 - 60 €/m²'],
                  ['Rénovation salle de bain', '3 500 - 12 000 €'],
                  ['Rénovation cuisine', '4 000 - 15 000 €'],
                  ['Parquet (pose + fourniture)', '45 - 95 €/m²'],
                  ['Rénovation complète pavillon', '700 - 1 200 €/m²'],
                  ['Rénovation haut de gamme', '1 200 - 2 500 €/m²'],
                ].map(([label, price]) => (
                  <tr key={label} className="bg-white hover:bg-[#FAFAF8] transition-colors">
                    <td className="px-5 py-3 text-gray-700 font-light">{label}</td>
                    <td className="px-5 py-3 text-[#B8960C] font-semibold">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-400 text-xs font-light mt-3">Tarifs indicatifs — devis gratuit personnalisé sous 48h.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10">
            Une réalisation
          </h2>
          <div className="relative rounded-xl overflow-hidden h-72 sm:h-96">
            <Image src="/images/realisations/19-sdb-mosaique-lavabo.jpg" alt="Rénovation salle de bain — artisan Bruyères-le-Châtel 91680 Essonne" fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              'Devis gratuit sous 48h',
              'Assurance décennale',
              "15+ ans d'expérience",
              'Respect des délais',
              'Finitions haut de gamme',
              'Un seul interlocuteur',
            ].map((a) => (
              <div key={a} className="flex items-center gap-2 text-sm text-gray-600 font-light">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0" />
                {a}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-8">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Quel est le prix d'une rénovation à Bruyères-le-Châtel ?",
                a: "Le coût d'une rénovation à Bruyères-le-Châtel varie entre 700 et 1 200 €/m² pour une rénovation standard d'un pavillon. Pour une rénovation complète haut de gamme, comptez 1 200 à 2 500 €/m².",
              },
              {
                q: "Quel artisan contacter pour rénover une maison à Bruyères-le-Châtel ?",
                a: "Espace Design intervient régulièrement à Bruyères-le-Châtel pour des rénovations de pavillons et maisons de bourg. Assuré décennale, devis gratuit sous 48h, un seul interlocuteur.",
              },
              {
                q: "Comment rénover un pavillon à Bruyères-le-Châtel ?",
                a: "La rénovation d'un pavillon comprend la mise aux normes électriques, l'isolation, le remplacement des sols et la remise à neuf des pièces d'eau. Nous gérons tous les corps de métier.",
              },
              {
                q: "Avez-vous une assurance décennale ?",
                a: "Oui, Espace Design est couvert par une assurance décennale et une RC professionnelle. Vos travaux sont garantis 10 ans après la livraison.",
              },
            ].map((item) => (
              <details key={item.q} className="bg-white border border-gray-100 rounded-lg p-5 group">
                <summary className="font-display text-base font-semibold text-[#1C1C1C] cursor-pointer list-none flex justify-between items-center">
                  {item.q}
                  <span className="text-[#D4AF37] text-lg ml-4 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-gray-500 text-sm leading-relaxed font-light">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Zones voisines</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: '/renovation-essonne', label: 'Essonne (91)' },
              { href: '/renovation-arpajon', label: 'Arpajon' },
              { href: '/renovation-montlhery', label: 'Montlhéry' },
              { href: '/renovation-etampes', label: 'Étampes' },
              { href: '/renovation-appartement-paris', label: 'Paris' },
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

      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Nos services</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/renovation-salle-de-bain-paris', label: 'Salle de bain' },
              { href: '/renovation-cuisine-paris', label: 'Cuisine' },
              { href: '/peinture-paris', label: 'Peinture' },
              { href: '/parquet-paris', label: 'Parquet' },
              { href: '/carrelage-paris', label: 'Carrelage' },
              { href: '/electricite-paris', label: 'Électricité' },
              { href: '/plomberie-paris', label: 'Plomberie' },
              { href: '/menuiserie-paris', label: 'Menuiserie' },
              { href: '/isolation-paris', label: 'Isolation' },
              { href: '/platrererie-paris', label: 'Plâtrerie' },
              { href: '/decoration-interieure-paris', label: 'Décoration' },
              { href: '/amenagement-interieur-paris', label: 'Aménagement' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-xs border border-gray-200 rounded px-3 py-1.5 text-gray-600 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Guides utiles</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/blog/renovation-appartement-haussmannien-paris', label: 'Appartement de standing' },
              { href: '/blog/renovation-appartement-copropriete-paris', label: 'Rénover en copropriété' },
              { href: '/blog/renovation-immeuble-ancien-paris', label: 'Immeuble ancien Paris' },
              { href: '/blog/parquet-chene-paris', label: 'Parquet chêne Paris' },
              { href: '/blog/menuiserie-sur-mesure-paris', label: 'Menuiserie sur mesure' },
              { href: '/blog/prix-renovation-appartement-paris', label: 'Prix rénovation Paris' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-xs border border-gray-200 rounded px-3 py-1.5 text-gray-600 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1C1C1C]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
            Votre projet à Bruyères-le-Châtel
          </h2>
          <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Décrivez votre projet et recevez un devis gratuit et détaillé sous 48h. Déplacement sans engagement dans toute la commune de Bruyères-le-Châtel et alentours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-7 py-3.5 rounded font-light text-sm tracking-wide hover:bg-[#c9a030] transition-colors duration-300"
            >
              Devis gratuit <ArrowRight size={13} />
            </Link>
            <a
              href="tel:+33611783867"
              className="flex items-center justify-center gap-2 border border-gray-600 text-gray-300 px-7 py-3.5 rounded font-light text-sm tracking-wide hover:border-white hover:text-white transition-colors duration-300"
            >
              <Phone size={14} />
              06 11 78 38 67
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
