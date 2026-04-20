import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Suresnes (92150) — Artisan Rénovateur | Espace Design',
  description:
    'Artisan rénovateur à Suresnes (92150) — appartements et maisons des années 50-80, immeubles en bord de Seine et quartier du Mont-Valérien. Rénovation complète, décoration. Devis gratuit 48h.',
  keywords: [
    'rénovation Suresnes',
    'artisan rénovation Suresnes 92150',
    'rénovation appartement Suresnes',
    'entreprise rénovation Suresnes',
    'renovation 92150',
    'artisan Suresnes hauts-de-seine',
  ],
}

const schemaLocal = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Espace Design',
  description: 'Artisan rénovateur à Suresnes — rénovation appartements et maisons des années 50-80, finitions haut de gamme.',
  telephone: '+33611783867',
  email: 'espacedesign92@gmail.com',
  url: 'https://espacedesignparis.fr/renovation-suresnes',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Suresnes',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Suresnes',
    postalCode: '92150',
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
      name: 'Quel est le délai pour obtenir un devis à Suresnes ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nous répondons à toutes les demandes de devis sous 48h. Le déplacement est gratuit et sans engagement à Suresnes et dans toute la région.',
      },
    },
    {
      '@type': 'Question',
      name: "Quel est le prix d'une rénovation complète à Suresnes ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le coût d'une rénovation complète à Suresnes varie entre 800 et 1 400 €/m² selon l'état du bien. Les appartements des années 50-80 nécessitent souvent une remise aux normes électrique et plomberie. Pour les finitions haut de gamme, comptez 1 800 à 2 500 €/m². Devis personnalisé sous 48h.",
      },
    },
    {
      '@type': 'Question',
      name: 'Avez-vous une assurance décennale ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, Espace Design est couvert par une assurance décennale et une assurance responsabilité civile professionnelle. Nos garanties vous protègent pendant 10 ans après la livraison des travaux.',
      },
    },
    {
      '@type': 'Question',
      name: 'Intervenez-vous à Suresnes ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, nous intervenons régulièrement à Suresnes — bords de Seine, plateau du Mont-Valérien, quartier des Bois — et dans les villes voisines : Puteaux, Courbevoie, Nanterre, Paris 16e. Devis gratuit sous 48h.",
      },
    },
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Hauts-de-Seine (92)', item: 'https://espacedesignparis.fr/renovation-hauts-de-seine' },
    { '@type': 'ListItem', position: 3, name: 'Suresnes', item: 'https://espacedesignparis.fr/renovation-suresnes' },
  ],
}

export default function RenovationSuresnes() {
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

      {/* Hero compact */}
      <section className="pt-28 sm:pt-36 pb-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Hauts-de-Seine — Suresnes 92150</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Rénovation appartement<br className="hidden sm:block" /> Suresnes
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Artisan rénovateur à Suresnes — entre Seine et Mont-Valérien. Rénovation complète, décoration sur-mesure, mise aux normes. Appartements et maisons des années 50-80. Devis gratuit sous 48h.
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

      {/* Intro locale */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Votre artisan rénovateur à Suresnes
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Coincée entre la Seine et la colline du <strong>Mont-Valérien</strong>, Suresnes est une ville en pleine
            transformation. Le parc immobilier y est majoritairement composé d'appartements construits entre les années
            1950 et 1980 — des biens solides mais qui nécessitent souvent une rénovation profonde : mise aux normes
            électriques et plomberie, remplacement des menuiseries, isolation thermique, redistribution des espaces.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Espace Design accompagne les propriétaires et investisseurs sureznois dans la rénovation et la valorisation
            de leurs biens. Que vous souhaitiez rénover entièrement un appartement avant mise en location ou en vente,
            rafraîchir votre intérieur avec de nouvelles peintures et un parquet, ou transformer complètement votre salle
            de bain et votre cuisine, nous vous apportons une solution clé en main avec un seul interlocuteur.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Notre proximité avec
            <Link href="/renovation-puteaux" className="text-[#B8960C] hover:underline mx-1">Puteaux</Link>,
            <Link href="/renovation-courbevoie" className="text-[#B8960C] hover:underline mx-1">Courbevoie</Link>,
            <Link href="/renovation-nanterre" className="text-[#B8960C] hover:underline mx-1">Nanterre</Link> et
            <Link href="/renovation-paris-16e" className="text-[#B8960C] hover:underline mx-1">Paris 16e</Link>
            nous permet d'intervenir rapidement sur toute la rive droite de la Seine.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Devis gratuit sous 48h',
              'Assurance décennale',
              "15+ ans d'expérience",
              'Respect des délais',
              'Finitions haut de gamme',
              'Un seul interlocuteur',
            ].map((a) => (
              <div key={a} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[#F2F2EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10">
            Nos services à Suresnes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Rénovation complète',
                desc: "Du sol au plafond : électricité mise aux normes, plomberie, cloisons, isolation, peinture. Idéal pour les appartements des années 50-80 à Suresnes.",
              },
              {
                num: '02',
                title: 'Salle de bain & cuisine',
                desc: "Rénovation complète de votre salle de bain et cuisine : conception, carrelage, faïence, robinetterie, menuiseries sur-mesure. Résultat garanti.",
              },
              {
                num: '03',
                title: 'Finitions & décoration',
                desc: "Parquet, peinture décorative, éclairage architectural, menuiseries. Transformez votre appartement sureznois en espace de vie élégant et contemporain.",
              },
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

      {/* Photo réalisation */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10">
            Une réalisation récente
          </h2>
          <div className="relative rounded-xl overflow-hidden h-72 sm:h-96">
            <Image
              src="/images/realisations/18-salon-renovation-complete.jpg"
              alt="Salon rénové avec finitions haut de gamme — rénovation appartement Suresnes 92150"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        </div>
      </section>

      {/* Atouts */}
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

      {/* FAQ */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-8">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'Quel est le délai pour obtenir un devis à Suresnes ?',
                a: 'Nous répondons à toutes les demandes sous 48h. Le déplacement est gratuit et sans engagement à Suresnes.',
              },
              {
                q: "Quel est le prix d'une rénovation complète à Suresnes ?",
                a: "Le coût varie entre 800 et 1 400 €/m² pour une rénovation standard. Pour des finitions haut de gamme, comptez 1 800 à 2 500 €/m². Devis personnalisé sous 48h.",
              },
              {
                q: 'Avez-vous une assurance décennale ?',
                a: 'Oui, Espace Design est couvert par une assurance décennale et une RC professionnelle. Vos travaux sont garantis 10 ans.',
              },
              {
                q: 'Intervenez-vous à Suresnes ?',
                a: "Oui, nous intervenons régulièrement à Suresnes et dans les villes voisines : Puteaux, Courbevoie, Nanterre, Paris 16e. Devis gratuit sous 48h.",
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

      {/* Zones voisines */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Zones voisines</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: '/renovation-puteaux', label: 'Puteaux' },
              { href: '/renovation-courbevoie', label: 'Courbevoie' },
              { href: '/renovation-nanterre', label: 'Nanterre' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-saint-cloud', label: 'Saint-Cloud' },
              { href: '/renovation-hauts-de-seine', label: 'Hauts-de-Seine (92)' },
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

      {/* Voir aussi — services */}
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

      {/* CTA */}
      {/* Articles liés */}
      <section className="py-10 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Guides utiles</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/blog/renovation-appartement-copropriete-paris', label: 'Rénover en copropriété' },
              { href: '/blog/prix-renovation-appartement-paris', label: 'Prix rénovation Paris' },
              { href: '/blog/renovation-appartement-haussmannien-paris', label: 'Appartement haussmannien' },
              { href: '/blog/renovation-3-pieces-paris', label: 'Budget 3 pièces Paris' },
              { href: '/blog/peinture-appartement-paris', label: 'Peinture appartement Paris' },
              { href: '/blog/isolation-acoustique-appartement-paris', label: 'Isolation acoustique' },
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
            Votre projet à Suresnes
          </h2>
          <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Décrivez votre projet et recevez un devis gratuit et détaillé sous 48h.
            Déplacement sans engagement à Suresnes et dans tout le 92.
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
