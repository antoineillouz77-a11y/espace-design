import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: "Rénovation Chambre Paris 2025 : tendances, idées & prix artisan",
  description: "Rénover sa chambre à Paris en 2025. Tendances déco, matériaux, placards sur mesure, parquet, éclairage. Prix artisan. Devis gratuit 48h.",
  keywords: ["rénovation chambre Paris 2025", "chambre tendances 2025", "artisan chambre Paris", "rénovation chambre appartement Paris"],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation Chambre Paris 2025 : tendances, idées & prix artisan",
  description: "Guide complet pour rénover sa chambre à Paris en 2025. Tendances, matériaux, prix artisan.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel budget pour rénover une chambre à Paris en 2025 ?",
      acceptedAnswer: { '@type': 'Answer', text: "Le budget dépend de l'ampleur des travaux : comptez 150-300€/m² pour une rénovation complète (peinture, parquet, électricité), ou 50-100€/m² pour une simple remise à neuf (peinture uniquement)." }
    },
    {
      '@type': 'Question',
      name: "Quelles sont les tendances chambre 2025 à Paris ?",
      acceptedAnswer: { '@type': 'Answer', text: "En 2025, les tendances s'orientent vers les couleurs naturelles (terre, taupe, sauge), les matériaux durables (bois massif, lin), l'éclairage tamisé et les placards sur mesure intégrés." }
    },
    {
      '@type': 'Question',
      name: "Faut-il vider la chambre avant les travaux ?",
      acceptedAnswer: { '@type': 'Answer', text: "Oui, pour une rénovation complète il faut vider entièrement la pièce. Nous pouvons vous conseiller sur la protection du mobilier restant si seule la peinture est concernée." }
    },
    {
      '@type': 'Question',
      name: "Combien de temps pour rénover une chambre à Paris ?",
      acceptedAnswer: { '@type': 'Answer', text: "Une rénovation complète de chambre prend généralement 5 à 10 jours selon la surface et les travaux (parquet, peinture, électricité, placards). Nous établissons un planning précis dès le devis." }
    },
  ],
}

export default function RenovationChambreParis2025Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Chambre · Tendances 2025</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
          Rénovation Chambre Paris 2025
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Tendances, idées et prix pour rénover votre chambre à Paris en 2025. Artisan qualifié, devis gratuit sous 48h.
        </p>
      </section>

      {/* Tendances */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Tendances chambre 2025 à Paris</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            En 2025, les chambres parisiennes s&apos;orientent vers des palettes naturelles et apaisantes : tons terreux (taupe, ocre), verts sauge, bleus nuit. Les matériaux durables et authentiques sont privilégiés — parquet chêne massif, lin, coton, rotin. L&apos;éclairage indirect (appliques, lampes de chevet intégrées) remplace les plafonniers agressifs.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Les Parisiens optimisent aussi l&apos;espace : placards sur mesure du sol au plafond, têtes de lit avec rangements intégrés, dressing en alcôve. Dans les petits appartements haussmanniens, nous créons des solutions intelligentes qui doublent la capacité de rangement sans empiéter sur la surface habitable.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {[
              { title: 'Couleurs 2025', desc: 'Taupe, sauge, bleu nuit, terracotta — palettes naturelles et apaisantes' },
              { title: 'Matériaux nobles', desc: 'Parquet chêne massif, enduit à la chaux, lin, coton biologique' },
              { title: 'Éclairage tamisé', desc: 'Appliques murales, lampes intégrées, éclairage indirect LED' },
              { title: 'Rangements sur mesure', desc: 'Placards sol-plafond, dressing en alcôve, tête de lit avec niches' },
            ].map((item) => (
              <div key={item.title} className="bg-[#FAFAF8] rounded p-4 border border-gray-100">
                <h3 className="font-semibold text-[#1C1C1C] text-sm mb-1">{item.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travaux */}
      <section className="py-14 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-6">Quels travaux pour votre chambre ?</h2>
          <div className="space-y-4">
            {[
              {
                titre: 'Peinture et revêtements muraux',
                desc: "Préparation des murs (rebouchage, enduit), application de 2 couches de peinture ou d'un enduit décoratif. Nous utilisons des peintures sans COV, idéales pour la chambre.",
                prix: '35–60 €/m²',
              },
              {
                titre: 'Parquet et sol',
                desc: "Pose de parquet massif, contrecollé ou flottant, ou remplacement d'un carrelage. Ponçage et vitrification d'un parquet existant pour lui redonner éclat.",
                prix: '60–120 €/m²',
              },
              {
                titre: 'Placards et dressing sur mesure',
                desc: "Conception et installation de placards coulissants ou de dressings aménagés. Optimisation totale de l'espace avec accessoires de rangement intégrés.",
                prix: '800–3 000 € selon taille',
              },
              {
                titre: 'Électricité et éclairage',
                desc: "Mise aux normes électrique, ajout de prises USB, création de points lumineux (appliques, spots encastrés), installation de variateurs.",
                prix: '200–800 € selon besoins',
              },
            ].map((item) => (
              <div key={item.titre} className="bg-white rounded p-5 border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-[#1C1C1C] text-sm">{item.titre}</h3>
                  <span className="text-[#B8960C] text-xs font-medium ml-4 flex-shrink-0">{item.prix}</span>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prix */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-6">Budget rénovation chambre Paris 2025</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { niveau: 'Essentiel', desc: 'Peinture + petites réparations', prix: '50–100 €/m²', tag: 'Rafraîchissement' },
              { niveau: 'Confort', desc: 'Peinture + parquet + éclairage', prix: '150–250 €/m²', tag: 'Rénovation partielle' },
              { niveau: 'Premium', desc: 'Rénovation complète + placards', prix: '250–400 €/m²', tag: 'Rénovation totale' },
            ].map((item) => (
              <div key={item.niveau} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-200 text-center">
                <p className="text-[10px] text-[#B8960C] uppercase tracking-widest mb-2">{item.tag}</p>
                <h3 className="font-bold text-[#1C1C1C] mb-2">{item.niveau}</h3>
                <p className="text-gray-500 text-xs mb-3">{item.desc}</p>
                <p className="text-[#B8960C] font-semibold text-sm">{item.prix}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-xs mt-4">Prix indicatifs pour une chambre de 12–15m² à Paris. Devis gratuit et personnalisé sous 48h.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-6">Questions fréquentes</h2>
          <div className="space-y-4">
            {schemaFAQ.mainEntity.map((item) => (
              <div key={item.name} className="bg-white rounded p-5 border border-gray-200">
                <h3 className="font-semibold text-[#1C1C1C] text-sm mb-2">{item.name}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liens internes */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Articles liés</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/blog/renovation-salon-paris', label: 'Rénovation salon Paris' },
              { href: '/blog/pose-parquet-flottant-paris', label: 'Pose parquet flottant' },
              { href: '/blog/peinture-interieure-paris', label: 'Peinture intérieure Paris' },
              { href: '/blog/budget-renovation-appartement-paris', label: 'Budget rénovation appartement' },
              { href: '/parquet-paris', label: 'Service parquet' },
              { href: '/peinture-paris', label: 'Service peinture' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-xs border border-gray-200 rounded px-3 py-1.5 text-gray-600 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-3xl font-bold text-white mb-4">Rénovez votre chambre en 2025</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">
          Devis gratuit sous 48h — artisan qualifié, assurance décennale, finitions soignées.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">
            Devis gratuit <ArrowRight size={16} />
          </Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors">
            <Phone size={16} />06 11 78 38 67
          </a>
        </div>
      </section>
    </>
  )
}
