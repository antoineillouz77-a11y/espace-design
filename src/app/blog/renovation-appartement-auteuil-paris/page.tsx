import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Auteuil Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-auteuil-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Auteuil Paris 16e : haussmannien & prestige 2025 | Espace Design',
  description: "Rénover un appartement à Auteuil (Paris 16e) : immeubles haussmanniens et art déco, finitions haut de gamme, prix artisan 2025.",
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-auteuil-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quelles sont les spécificités architecturales des appartements d\'Auteuil ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le quartier Auteuil (Paris 16e) est caractérisé par une architecture de grande qualité : immeubles haussmanniens des boulevards Exelmans et Suchet, villas art déco et art nouveau (rue La Fontaine, rue Jasmin), maisons de ville avec jardins dans les voies résidentielles. Les appartements haussmanniens d'Auteuil sont souvent plus grands que dans d'autres arrondissements — les 100-200 m² sont courants — avec de belles hauteurs sous plafond (3 à 3,5 m), des moulures soignées et des parquets point de Hongrie.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quel niveau de finition pour une rénovation à Auteuil ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "À Auteuil, le marché immobilier exige un niveau de finition élevé pour valoriser le bien. Les matériaux nobles sont attendus : marbre ou pierre pour les salles de bain, parquet massif en chêne ou noyer, menuiseries sur mesure, peintures minérales ou enduits à la chaux. Les équipements (cuisine, salle de bain) doivent correspondre aux standards premium du quartier. Un niveau de rénovation trop basique risque de dévaloriser le bien par rapport aux attentes du marché local.",
      },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte la rénovation d\'un appartement à Auteuil ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "À Auteuil (Paris 16e), les prix de rénovation sont parmi les plus élevés de Paris en raison des surfaces importantes et des niveaux de finition requis : rafraîchissement entre 600 et 1 000 €/m², rénovation partielle (cuisine ou salle de bain premium) entre 1 200 et 2 500 €/m², rénovation complète standard entre 2 000 et 3 200 €/m², rénovation complète haut de gamme avec restauration des éléments d'époque entre 3 000 et 5 000 €/m².",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Auteuil Paris 16e : haussmannien & prestige 2025 | Espace Design',
  description: "Rénover un appartement à Auteuil (Paris 16e) : immeubles haussmanniens et art déco, finitions haut de gamme, prix artisan 2025.",
}

export default function ArticleAuteuil() {
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
            Quartiers
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Appartement Auteuil Paris 16e : haussmannien &amp; prestige 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Auteuil, dans le 16e arrondissement, est l&apos;un des quartiers résidentiels les plus prisés de Paris. Immeubles haussmanniens de grand standing, villas art déco, maisons de ville avec jardins — chaque bien mérite une rénovation à la hauteur de son architecture. Ce guide vous présente les enjeux et les prix d&apos;une rénovation à Auteuil.
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Auteuil : haussmannien, art déco et maisons de village
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le quartier Auteuil constitue la partie sud du 16e arrondissement, entre le bois de Boulogne et la Seine. Son architecture est d&apos;une remarquable cohérence : les grands boulevards (Exelmans, Suchet, Beauséjour) sont bordés d&apos;immeubles haussmanniens de qualité, tandis que les ruelles intérieures — hameau Boileau, villa Montmorency, square des Poètes — abritent des maisons de ville et des villas art déco d&apos;une grande rareté à Paris.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              La rue La Fontaine, avec ses immeubles Guimard (art nouveau), est un cas à part : ces bâtiments classés imposent des contraintes patrimoniales strictes pour tout projet de rénovation touchant à l&apos;extérieur. À l&apos;intérieur, les appartements haussmanniens d&apos;Auteuil offrent souvent des surfaces exceptionnelles — les 150 à 300 m² ne sont pas rares — justifiant des budgets de rénovation importants et des finitions premium.
            </p>
            <div className="space-y-3">
              {[
                'Parquets point de Hongrie ou à l\'anglaise en chêne massif — restauration plutôt que remplacement',
                'Moulures et corniches en stuc — restauration par un staffeur spécialisé',
                'Cheminées en marbre de grande valeur — à conserver et mettre en valeur',
                'Hauteurs sous plafond de 3 à 3,5 m — opportunité pour créer des rangements en mezzanine',
                'Façades classées sur les immeubles art nouveau rue La Fontaine — accord ABF obligatoire',
                'Caves souvent grandes et aménageables — opportunité de créer un espace de rangement ou de service',
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

      {/* Section prix */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix de rénovation à Auteuil en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les appartements d&apos;Auteuil sont parmi les plus valorisés de Paris. Une rénovation de qualité est un investissement rentable qui préserve et augmente la valeur du bien. Les finitions haut de gamme sont une nécessité, pas un luxe, dans ce marché.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Niveau</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prestations</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { niveau: 'Rafraîchissement premium', prestations: 'Peinture minérale, parquet huilé, luminaires design', prixM2: '600 – 1 000 €' },
                  { niveau: 'Rénovation partielle', prestations: 'Cuisine ou salle de bain haut de gamme', prixM2: '1 200 – 2 500 €' },
                  { niveau: 'Rénovation complète standard', prestations: 'Électricité, plomberie, cuisine, SDB, sols, peintures', prixM2: '2 000 – 3 200 €' },
                  { niveau: 'Rénovation prestige', prestations: 'Restauration moulures, marbre, menuiseries sur mesure', prixM2: '3 000 – 5 000 €' },
                ].map((row, i) => (
                  <tr key={row.niveau} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.niveau}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.prestations}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prixM2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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

      {/* Voir aussi */}
      <section className="py-12 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Voir aussi</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/renovation-appartement-paris', title: 'Rénovation appartement Paris' },
              { href: '/blog/renovation-appartement-paris-16e', title: 'Rénovation appartement Paris 16e' },
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénovation appartement haussmannien Paris' },
              { href: '/blog/renovation-appartement-neuilly-paris', title: 'Rénovation appartement Neuilly-sur-Seine' },
              { href: '/blog/parquet-massif-paris', title: 'Parquet massif Paris : pose & prix' },
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

      {/* CTA */}
      <section className="py-16 bg-[#D4AF37] text-center px-4">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-4">
          Vous rénovez un appartement à Auteuil ?
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Devis gratuit et détaillé sous 48h. Déplacement sans engagement dans le 16e arrondissement.
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
