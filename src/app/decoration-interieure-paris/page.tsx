import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Décoration Intérieure Paris — Décorateur, Styles & Devis | Espace Design',
  description:
    'Décorateur intérieur à Paris. Conseil en décoration, choix des matériaux, mood board, coordination des travaux. Haussmannien, contemporain, luxe discret. Devis gratuit 48h.',
  keywords: [
    'décoration intérieure Paris',
    'décorateur intérieur Paris',
    'architecte intérieur Paris',
    'conseil décoration Paris',
    'interior design Paris',
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://espacedesignparis.fr/services' },
    { '@type': 'ListItem', position: 3, name: 'Décoration intérieure Paris', item: 'https://espacedesignparis.fr/decoration-interieure-paris' },
  ],
}

const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Décoration Intérieure Paris',
  provider: {
    '@type': 'HomeAndConstructionBusiness',
    name: 'Espace Design',
    telephone: '+33611783867',
    url: 'https://espacedesignparis.fr',
  },
  areaServed: { '@type': 'City', name: 'Paris' },
  priceRange: '2000-15000',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix d'un décorateur intérieur à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Un décorateur à Paris facture entre 80 et 150 €/h. Pour un forfait décoration d'un 2 pièces, comptez 2 000 à 5 000 €. Pour un grand appartement, 5 000 à 15 000 €. Espace Design intègre le conseil en décoration dans le devis de rénovation globale — pas d'honoraires séparés.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelle est la différence entre décorateur et architecte d'intérieur ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le décorateur travaille sur les couleurs, matériaux et mobilier. L'architecte d'intérieur peut modifier la structure (cloisons, ouvertures) et déposer des permis. Espace Design combine les deux : nous gérons aussi bien le conseil esthétique que l'exécution des travaux lourds.",
      },
    },
    {
      '@type': 'Question',
      name: "Quels sont les styles tendance dans les appartements parisiens en 2025 ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les styles les plus demandés à Paris : l'haussmannien revisité (moulures + mobilier contemporain), le minimalisme parisien (palette neutre, matières nobles), le Japandi (fusion japonais-scandinave), l'éclectique vintage, et le quiet luxury (matériaux premium sans ostentation).",
      },
    },
  ],
}

const styles = [
  {
    title: 'Haussmannien revisité',
    desc: "Moulures et parquet d'époque rencontrent un mobilier contemporain. L'élégance parisienne réinterprétée avec modernité.",
  },
  {
    title: 'Minimalisme parisien',
    desc: "Palette neutre, matières nobles, lignes épurées. Chaque élément est choisi pour sa qualité, rien n'est superflu.",
  },
  {
    title: 'Japandi',
    desc: 'La fusion du wabi-sabi japonais et de la fonctionnalité scandinave. Sérénité, matériaux naturels, proportions maîtrisées.',
  },
  {
    title: 'Éclectique vintage',
    desc: "Mélange d'époques et de styles assumé. Pièces chinées, couleurs profondes, personnalité affirmée.",
  },
  {
    title: 'Quiet luxury',
    desc: "Matériaux premium (pierre, laiton, velours) sans ostentation. Le luxe discret qui se ressent mais ne s'exhibe pas.",
  },
]

export default function DecorationInterieureParis() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
      />

      {/* Hero compact */}
      <section className="pt-28 sm:pt-36 pb-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Décoration & Design</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Décoration intérieure Paris
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Décorateur intérieur à Paris. Conseil, mood board, sélection de matériaux, coordination des travaux. Haussmannien, contemporain, quiet luxury. Devis gratuit sous 48h.
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

      {/* Styles */}
      <section className="py-20 bg-[#F2F2EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10">
            Styles & signatures
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {styles.map((s, i) => (
              <div key={s.title} className="bg-white rounded-lg p-6 border border-gray-100">
                <div className="font-display text-3xl font-semibold text-[#D4AF37] mb-3">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="w-6 h-px bg-[#D4AF37]/50 mb-4" />
                <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prestations */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-8">
            Nos prestations décoration
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Consultation initiale et écoute du projet',
              'Mood board et palette de couleurs',
              'Sélection matériaux et mobilier',
              'Plan 3D de l\'espace',
              'Coordination avec les artisans',
              'Suivi chantier et ajustements',
              'Sourcing mobilier et luminaires',
              'Livraison clé en main',
            ].map((p) => (
              <div key={p} className="flex items-center gap-2 text-sm text-gray-600 font-light">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0" />
                {p}
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
                q: "Quel est le prix d'un décorateur intérieur à Paris ?",
                a: "Un décorateur à Paris facture entre 80 et 150 €/h. Pour un forfait décoration d'un 2 pièces, comptez 2 000 à 5 000 €. Pour un grand appartement, 5 000 à 15 000 €. Espace Design intègre le conseil en décoration dans le devis de rénovation globale — pas d'honoraires séparés.",
              },
              {
                q: "Quelle est la différence entre décorateur et architecte d'intérieur ?",
                a: "Le décorateur travaille sur les couleurs, matériaux et mobilier. L'architecte d'intérieur peut modifier la structure (cloisons, ouvertures) et déposer des permis. Espace Design combine les deux : nous gérons aussi bien le conseil esthétique que l'exécution des travaux lourds.",
              },
              {
                q: "Quels sont les styles tendance dans les appartements parisiens en 2025 ?",
                a: "Les styles les plus demandés à Paris : l'haussmannien revisité (moulures + mobilier contemporain), le minimalisme parisien (palette neutre, matières nobles), le Japandi (fusion japonais-scandinave), l'éclectique vintage, et le quiet luxury (matériaux premium sans ostentation).",
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

      {/* Zones */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Zones d'intervention</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: '/renovation-paris-6e', label: 'Paris 6e' },
              { href: '/renovation-paris-7e', label: 'Paris 7e' },
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-15e', label: 'Paris 15e' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-paris-17e', label: 'Paris 17e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
              { href: '/renovation-levallois-perret', label: 'Levallois-Perret' },
              { href: '/renovation-versailles', label: 'Versailles' },
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

      {/* Voir aussi */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Voir aussi</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/blog/decoration-interieure-paris', label: 'Guide décoration intérieure Paris' },
              { href: '/amenagement-interieur-paris', label: 'Aménagement intérieur' },
              { href: '/menuiserie-paris', label: 'Menuiserie sur mesure' },
              { href: '/peinture-paris', label: 'Peinture Paris' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-xs border border-gray-200 rounded px-3 py-1.5 text-gray-600 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Voir aussi */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Ressources utiles</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/blog/decoration-interieure-paris', label: 'Guide décoration intérieure Paris' },
              { href: '/blog/home-staging-paris', label: 'Home staging Paris' },
              { href: '/blog/renovation-chambre-paris', label: 'Rénovation chambre Paris' },
              { href: '/blog/renovation-entree-paris', label: "Rénovation entrée Paris" },
              { href: '/amenagement-interieur-paris', label: 'Aménagement intérieur' },
              { href: '/tarifs', label: 'Nos tarifs' },
              { href: '/avis', label: 'Avis clients' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-xs border border-gray-200 rounded px-3 py-1.5 text-gray-600 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1C1C1C]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
            Votre projet de décoration à Paris
          </h2>
          <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Décrivez votre projet, votre style et vos contraintes. Devis gratuit et détaillé sous 48h. Déplacement sans engagement dans tout Paris.
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
