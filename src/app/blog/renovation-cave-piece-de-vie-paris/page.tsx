import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Rénovation cave en pièce de vie Paris',
      item: 'https://espacedesignparis.fr/blog/renovation-cave-piece-de-vie-paris',
    },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation cave en pièce de vie à Paris : guide complet 2025',
  description:
    "Transformer votre cave parisienne en pièce de vie habitable : studio, salle de jeux, bureau. Conseils techniques, démarches administratives et prix indicatifs.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://espacedesignparis.fr/blog/renovation-cave-piece-de-vie-paris',
  },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Faut-il un permis de construire pour aménager une cave à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Si l'aménagement crée plus de 20 m² de surface habitable supplémentaire, un permis de construire est requis. En dessous, une simple déclaration préalable de travaux suffit. Votre copropriété peut également imposer des conditions spécifiques — consultez le règlement de copropriété avant de commencer.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle hauteur sous plafond minimale pour une cave habitable à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La réglementation française impose une hauteur sous plafond d'au moins 2,20 m pour qu'une pièce soit considérée comme habitable. Si votre cave est plus basse, il est parfois possible de creuser le sol ou d'abaisser la dalle, mais cela représente des travaux importants (entre 500 et 1 500 €/m²).",
      },
    },
    {
      '@type': 'Question',
      name: "Combien coûte en moyenne la transformation d'une cave en studio à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le budget pour transformer une cave de 20 à 30 m² en studio à Paris varie entre 25 000 et 55 000 € selon l'état initial, l'isolation nécessaire, la création de salle de bain et la finition souhaitée. Ce montant inclut les travaux d'électricité, plomberie, isolation, cloisons et revêtements.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation cave en pièce de vie Paris | Espace Design',
  description:
    "Transformez votre cave parisienne en pièce de vie habitable : studio, bureau, salle de jeux. Artisan qualifié, devis gratuit 48h. Espace Design Paris.",
}

export default function RenovationCavePieceDeVieParis() {
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
          Blog Rénovation
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
          Rénovation cave en pièce de vie à Paris
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Votre cave est un espace inexploité qui peut devenir un vrai atout : studio indépendant,
          bureau calme, salle de jeux ou chambre d&apos;appoint. Guide complet pour réussir ce
          projet à Paris en 2025.
        </p>
      </section>

      {/* Content */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Pourquoi aménager sa cave à Paris ?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Dans la capitale, chaque mètre carré est précieux. Transformer une cave inutilisée en
            pièce de vie peut ajouter 10 à 30 m² habitables à votre logement, augmenter
            significativement la valeur de votre bien et vous offrir un espace fonctionnel sans
            déménager. Les caves parisiennes, souvent construites en pierre de taille, disposent
            déjà d&apos;une excellente inertie thermique — un avantage naturel pour le confort
            estival.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Cependant, ce type de chantier exige une préparation rigoureuse : vérification de la
            hauteur sous plafond, traitement de l&apos;humidité, mise aux normes électrique,
            ventilation réglementaire et, selon les cas, obtention d&apos;une autorisation
            administrative. Espace Design Paris accompagne ses clients de A à Z, du diagnostic
            initial jusqu&apos;à la remise des clés.
          </p>

          <h2 className="font-display text-xl font-semibold text-[#1C1C1C] mb-4">
            Étapes clés de la rénovation
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            La première phase est toujours un diagnostic humidité : infiltrations latérales, remontées
            capillaires ou condensation nécessitent des traitements différents (injection de résine,
            membrane d&apos;étanchéité, drains périmétraux). Vient ensuite l&apos;isolation
            thermique et phonique des murs et du plafond, indispensable pour le confort et
            la conformité aux normes RE2020. La création d&apos;une ventilation mécanique contrôlée
            (VMC) est obligatoire pour tout espace de vie en sous-sol.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Une fois la structure assainie, les travaux d&apos;électricité, de plomberie (si salle de
            bain) et de cloisons peuvent démarrer. Le choix du revêtement de sol est crucial en
            cave : carrelage sur chape, parquet flottant sur sous-couche isolante ou béton ciré
            résistant à l&apos;humidité résiduelle. L&apos;éclairage est un facteur déterminant
            pour compenser l&apos;absence de lumière naturelle — nous conseillons les solutions
            LED à spectre lumière du jour (4 000 K).
          </p>

          {/* Price table */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="px-4 py-2 text-left font-medium">Prestation</th>
                  <th className="px-4 py-2 text-left font-medium">Prix indicatif</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { p: 'Diagnostic humidité + traitement étanchéité', v: '80 – 200 €/m²' },
                  { p: 'Isolation murs et plafond (laine de verre + BA13)', v: '60 – 120 €/m²' },
                  { p: 'Installation VMC double flux', v: '1 500 – 3 500 €' },
                  { p: 'Mise aux normes électrique complète', v: '3 000 – 7 000 €' },
                  { p: 'Cloisons, revêtements sol et peinture', v: '150 – 300 €/m²' },
                  { p: 'Création salle de bain (plomberie + carrelage)', v: '5 000 – 12 000 €' },
                  { p: 'Rénovation complète cave 20 m² (clé en main)', v: '25 000 – 45 000 €' },
                ].map((r, i) => (
                  <tr key={r.p} className={i % 2 === 0 ? 'bg-[#FAFAF8]' : 'bg-white'}>
                    <td className="px-4 py-2 text-gray-700">{r.p}</td>
                    <td className="px-4 py-2 text-gray-600">{r.v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Diagnostic humidité offert',
              'Traitement anti-humidité garanti 10 ans',
              'Mise aux normes électrique NF C 15-100',
              'Isolation conforme RE2020',
              'Artisans qualifiés RGE et assurés',
              'Devis détaillé poste par poste',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-xl font-semibold text-[#1C1C1C] mt-6 mb-4">FAQ</h2>
          <div className="space-y-3">
            {schemaFAQ.mainEntity.map((faq) => (
              <div key={faq.name} className="border border-gray-200 rounded p-3">
                <p className="font-semibold text-[#1C1C1C] mb-1 text-sm">{faq.name}</p>
                <p className="text-xs text-gray-600">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-3xl font-bold text-white mb-4">
          Votre cave mérite un nouveau souffle
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">
          Devis gratuit sous 48h — artisan qualifié, assurance décennale.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors"
          >
            Devis gratuit <ArrowRight size={16} />
          </Link>
          <a
            href="tel:+33611783867"
            className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"
          >
            <Phone size={16} />
            06 11 78 38 67
          </a>
        </div>
      </section>
    </>
  )
}
