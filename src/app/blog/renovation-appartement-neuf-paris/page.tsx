import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Neuf Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-neuf-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Neuf Paris : aménagement & personnalisation 2025 | Espace Design',
  description: 'Personnaliser un appartement neuf à Paris avant emménagement : peinture, parquet, placards. Prix et conseils artisan 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-neuf-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Pourquoi rénover un appartement neuf avant d\'emménager à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Un appartement neuf est livré dans un état standard défini par le promoteur : peinture blanche basique, sol béton brut ou revêtement générique, cuisine non équipée dans beaucoup de cas. Personnaliser avant l'emménagement présente trois avantages majeurs : les travaux sont plus simples (pas de meubles à déplacer, pas d'occupants), les artisans travaillent dans de meilleures conditions et plus vite, et vous évitez de vivre dans un appartement en chantier. Le délai idéal est entre la livraison et l'installation des meubles, soit une fenêtre de 4 à 8 semaines selon l'ampleur des travaux.",
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on poser du parquet sur un sol béton dans un appartement neuf à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, et c'est même l'une des demandes les plus fréquentes dans les appartements neufs parisiens. La condition principale est que le béton soit sec et stabilisé (minimum 28 jours après coulage, idéalement 60 jours). Pour le parquet flottant, une sous-couche résiliente est posée directement sur le béton : elle assure l'isolation acoustique (obligatoire en copropriété) et compense les légères irrégularités du sol. Pour un parquet collé ou cloué, un ragréage préalable est nécessaire si la planéité est inférieure à 3 mm sous la règle de 2 mètres.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quel est le budget moyen pour personnaliser un appartement neuf à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le budget de personnalisation d'un appartement neuf à Paris varie selon la surface et le niveau de finition souhaité. Pour un T2 de 40 m², comptez : 1 500 à 3 000 € pour une peinture complète (murs + plafonds), 3 500 à 6 000 € pour un parquet flottant avec sous-couche, 2 000 à 5 000 € pour des placards sur mesure dans une chambre, et 4 000 à 10 000 € pour une cuisine sur mesure. Le budget global d'un appartement neuf de 40 à 60 m² personnalisé correctement se situe entre 15 000 et 30 000 €.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Neuf Paris : aménagement & personnalisation 2025 | Espace Design',
  description: 'Personnaliser un appartement neuf à Paris avant emménagement : peinture, parquet, placards. Prix et conseils artisan 2025.',
}

export default function ArticleRenovationAppartementNeuf() {
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
            Aménagement
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Appartement Neuf Paris : aménagement &amp; personnalisation 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Un appartement neuf à Paris est livré en état standard : peinture blanche, sol béton, cuisine vide. Personnaliser avant d&apos;emménager est le moment idéal — les artisans travaillent librement, sans meubles à protéger. Peinture, parquet, placards sur mesure, cuisine : guide complet pour transformer votre neuf en intérieur unique.
          </p>
        </div>
      </section>

      {/* Section 1 — Neuf vs Ancien */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Appartement neuf vs ancien à Paris : ce qui change pour les travaux
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Travailler dans un appartement neuf est différent — et souvent plus simple — que dans un appartement ancien. Pas de diagnostic amiante, électricité aux normes RT2012 ou RE2020, plomberie neuve : les contraintes techniques sont réduites. En revanche, les délais de séchage du béton et la garantie décennale du promoteur sont des points d&apos;attention spécifiques.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Pas d\'amiante ni de plomb',
                  detail: "Dans un appartement neuf, aucun diagnostic amiante (avant 1997) ni plomb (avant 1949) n'est requis. Les artisans travaillent sans contraintes de désamiantage, ce qui simplifie les chantiers et réduit les coûts. C'est un avantage considérable par rapport à la rénovation d'immeubles haussmanniens ou de bâtiments d'après-guerre.",
                },
                {
                  enjeu: 'Installation électrique aux normes',
                  detail: "Un appartement neuf est livré avec une installation électrique conforme aux normes NFC 15-100 : tableau électrique récent, prise de terre dans toutes les pièces, circuit dédié cuisine. Pas besoin de mise aux normes. En revanche, si vous souhaitez ajouter des prises, des spots encastrés ou modifier la disposition, des travaux d'électricité complémentaires restent nécessaires.",
                },
                {
                  enjeu: 'Béton frais : respecter les délais de séchage',
                  detail: "Le béton ou la chape d'un appartement neuf doit être suffisamment sec avant de poser un parquet ou un carrelage. Le délai standard est de 28 jours minimum après coulage (mesure à l'humidimètre : taux inférieur à 3 % CM). Un sol trop humide sous un parquet collé provoquera des décollements et des gonflements. Votre artisan doit impérativement vérifier ce point avant de commencer.",
                },
                {
                  enjeu: 'Garantie décennale et travaux de personnalisation',
                  detail: "Les travaux réalisés dans le cadre de la personnalisation avant réception (TMA — Travaux Modificatifs Acquéreurs) sont souvent pris en charge par le promoteur. Après réception, les travaux réalisés par vos artisans sont couverts par leur propre garantie décennale. Veillez à ne pas effectuer des travaux qui annuleraient la garantie décennale du promoteur (modification structurelle, percement de façade).",
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

      {/* Section 2 — Travaux de personnalisation */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Travaux de personnalisation dans un appartement neuf parisien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            80 % des acquéreurs d&apos;appartements neufs à Paris réalisent au minimum une peinture avant d&apos;emménager. Beaucoup vont plus loin : parquet flottant, placards sur mesure, cuisine équipée. Voici les postes les plus demandés par ordre de fréquence.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Peinture — le travail le plus demandé',
                detail: "La peinture standard du promoteur est souvent mate, blanche et sans caractère. Repeindre avant l'installation des meubles est la solution la plus rentable : pas de protection à poser, travail rapide, résultat immédiat. Comptez 20 à 35 €/m² de surface murale, main d'oeuvre incluse.",
                cout: '20 – 35 €/m²',
              },
              {
                titre: 'Parquet flottant sur béton',
                detail: "Poser un parquet flottant en chêne sur le béton brut du promoteur est la demande numéro un après la peinture. La sous-couche résiliente (obligatoire en copropriété pour l'isolation acoustique) est posée directement sur le béton sec. Épaisseur recommandée : 10 mm minimum pour le confort. Comptez 60 à 120 €/m² posé (parquet + sous-couche + main d'oeuvre).",
                cout: '60 – 120 €/m²',
              },
              {
                titre: 'Placards sur mesure',
                detail: "Les appartements neufs sont rarement équipés de rangements suffisants. Un dressing ou un placard sur mesure dans chaque chambre (portes coulissantes miroir ou en bois laqué, organisation intérieure : étagères, penderie, tiroirs) optimise chaque centimètre. Comptez 1 500 à 4 000 € par placard de chambre selon la largeur.",
                cout: '1 500 – 4 000 €',
              },
              {
                titre: 'Cuisine sur mesure',
                detail: "Beaucoup de promoteurs livrent les appartements neufs avec un simple espace cuisine (plomberie et électricité prévues). Commander une cuisine sur mesure auprès d'un artisan menuisier plutôt qu'un cuisiniste grande surface permet d'obtenir une qualité supérieure, des dimensions parfaitement adaptées et un délai souvent plus court. Comptez 5 000 à 15 000 € selon l'équipement.",
                cout: '5 000 – 15 000 €',
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.titre}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.cout}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Budget et planning */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Budget et planning : organiser les travaux dans un appartement neuf parisien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le budget moyen de personnalisation d&apos;un appartement neuf à Paris se situe entre 15 000 et 40 000 € selon la surface et le niveau de finition. L&apos;ordre des corps de métier est important pour ne pas refaire deux fois le même travail.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Étape</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Corps de métier</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Délai</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget T2 (40 m²)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    etape: '1. Électricité complémentaire',
                    metier: 'Électricien',
                    delai: '1 – 2 jours',
                    budget: '500 – 1 500 €',
                  },
                  {
                    etape: '2. Peinture murs et plafonds',
                    metier: 'Peintre',
                    delai: '3 – 5 jours',
                    budget: '2 000 – 4 000 €',
                  },
                  {
                    etape: '3. Parquet ou carrelage',
                    metier: 'Parqueteur / Carreleur',
                    delai: '2 – 4 jours',
                    budget: '3 000 – 6 000 €',
                  },
                  {
                    etape: '4. Placards et menuiseries',
                    metier: 'Menuisier / Ébéniste',
                    delai: '2 – 3 jours',
                    budget: '2 000 – 6 000 €',
                  },
                  {
                    etape: '5. Cuisine sur mesure',
                    metier: 'Menuisier / Cuisiniste',
                    delai: '1 – 2 jours (pose)',
                    budget: '5 000 – 15 000 €',
                  },
                ].map((row, i) => (
                  <tr key={row.etape} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.etape}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.metier}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.delai}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.budget}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils pour organiser le chantier avant emménagement
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Prévoir les travaux dès la signature de l\'acte de vente — délais artisans à Paris : 4 à 8 semaines',
                'Vérifier l\'humidité du béton avant de poser le parquet (taux inférieur à 3 % CM)',
                'Commencer par l\'électricité complémentaire, puis la peinture, puis les sols',
                'Ne pas installer les meubles IKEA avant les travaux de peinture et de sol',
                'Prévoir un plan côté précis des placards avant la commande (délai fabrication : 3 à 6 semaines)',
                'Conserver les plans du promoteur pour localiser les réseaux dans les murs',
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
              { href: '/blog/parquet-chene-paris', title: 'Parquet chêne Paris' },
              { href: '/blog/peinture-appartement-paris', title: 'Peinture appartement Paris' },
              { href: '/menuiserie-paris', title: 'Menuiserie sur mesure Paris' },
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
          Personnalisez votre appartement neuf avant d&apos;emménager
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Devis gratuit sous 48h. Planning travaux optimisé avant emménagement. Artisans disponibles sur Paris et Île-de-France.
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
