import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Pigalle Paris 9e 18e', item: 'https://espacedesignparis.fr/blog/renovation-appartement-pigalle-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation Appartement Pigalle Paris 9e/18e : artisan & prix 2025 | Espace Design",
  description: "Rénover un appartement à Pigalle (Paris 9e/18e) : immeubles haussmanniens, caves, combles aménageables. Prix artisan 2025, conseils et devis gratuit.",
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-pigalle-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quels types de biens trouve-t-on dans le quartier Pigalle (Paris 9e et 18e) ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le quartier Pigalle (à cheval sur le 9e et le 18e arrondissements) est dominé par les immeubles haussmanniens construits entre 1850 et 1900 : appartements avec parquets en chêne, moulures, cheminées et hauteurs sous plafond de 3 à 3,50 m. On trouve également des immeubles de rapport plus modestes, quelques ateliers d'artistes reconvertis en logements atypiques, et des appartements mansardés sous les toits (combles) avec un fort potentiel d'aménagement.",
      },
    },
    {
      '@type': 'Question',
      name: "Peut-on aménager les combles ou la cave d'un appartement à Pigalle ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'aménagement des combles à Pigalle (9e-18e) est possible sous conditions : il faut que la hauteur sous rampant soit suffisante (au minimum 1,80 m sur une superficie habitable d'au moins 14 m²), et obtenir une déclaration préalable ou un permis de construire selon la surface créée. Pour les caves, leur transformation en espace habitable est encadrée par le Plan Local d'Urbanisme de Paris (PLU) — il faut un éclairement naturel direct (fenêtre en façade ou soupirail). Une étude préalable avec un architecte ou un artisan expérimenté est recommandée.",
      },
    },
    {
      '@type': 'Question',
      name: "Les appartements à Pigalle sont-ils soumis à des contraintes ABF ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le quartier Pigalle est situé au pied de la butte Montmartre, classée secteur sauvegardé. Les appartements en façade sur les rues principales (boulevard de Clichy, rue Lepic côté 18e) peuvent être soumis à l'avis des Architectes des Bâtiments de France (ABF) pour les travaux extérieurs — changement de fenêtres, ravalement, balcons. Pour les travaux strictement intérieurs, aucune contrainte ABF ne s'applique. Notre équipe maîtrise les règles propres au secteur et peut vous conseiller sur vos démarches.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Rénovation Appartement Pigalle Paris 9e/18e : artisan & prix 2025",
  description: "Rénover un appartement à Pigalle (Paris 9e/18e) : immeubles haussmanniens, caves, combles aménageables. Prix artisan 2025, conseils et devis gratuit.",
  keywords: ['rénovation appartement Pigalle', 'artisan Paris 9e', 'rénovation Paris 18e', 'appartement haussmannien Pigalle', 'aménagement combles Paris 18e'],
}

export default function ArticlePigalle() {
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
            Rénover un Appartement à Pigalle Paris 9e/18e : guide complet 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Pigalle est l&apos;un des quartiers les plus atypiques de Paris : à cheval sur le 9e et le 18e arrondissements, au pied de la butte Montmartre, il concentre de magnifiques immeubles haussmanniens, des ateliers d&apos;artistes reconvertis, des appartements mansardés sous les toits et des caves aménageables. Ce guide vous aide à préparer votre projet de rénovation dans ce quartier d&apos;exception.
          </p>
        </div>
      </section>

      {/* Section 1 — Profil du quartier */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Le parc immobilier de Pigalle : Haussmannien, ateliers et combles
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le quartier Pigalle tire son caractère de son positionnement géographique unique : entre les grandes artères haussmanniennes du 9e (boulevard de Clichy, rue Fontaine, rue Notre-Dame-de-Lorette) et les ruelles pentues du 18e qui montent vers Montmartre. Ce positionnement crée une mixité architecturale rare à Paris.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              La mutation du quartier Pigalle en &quot;SoPi&quot; (South Pigalle) depuis les années 2010 a profondément changé sa réputation : bars branchés, galeries d&apos;art, restaurants gastronomiques et boutiques de créateurs ont investi le secteur, portant les prix de l&apos;immobilier et rendant la rénovation des appartements encore plus rentable.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: "Immeubles haussmanniens : le grand style parisien",
                  detail: "Le 9e arrondissement et la partie basse du 18e sont dominés par de beaux immeubles haussmanniens construits entre 1850 et 1900. Les appartements offrent des volumes généreux (3 à 3,50 m sous plafond), des parquets point de Hongrie ou bâtons rompus, des moulures en stuc, des cheminées en marbre et des fenêtres à petits carreaux. Ces biens, souvent divisés ou mal entretenus, offrent un formidable potentiel de restauration.",
                },
                {
                  enjeu: "Ateliers d'artistes : esprit bohème et volumes atypiques",
                  detail: "Pigalle et ses environs (rue Lepic, rue Caulaincourt, Nouvelle-Athènes) abritent de nombreux anciens ateliers d'artistes, convertis en appartements atypiques avec de grandes verrières en toiture, des hauteurs sous plafond de 4 à 6 m et des accès par coursive. Ces espaces uniques nécessitent une rénovation spécialisée pour en préserver le caractère tout en apportant confort et modernité.",
                },
                {
                  enjeu: "Combles aménageables : créer de la surface habitable",
                  detail: "Les immeubles haussmanniens de Pigalle disposent souvent de combles sous les toits mansardés (chambres de bonne, greniers, combles perdus) avec un fort potentiel d'aménagement. L'aménagement des combles en studio ou chambre supplémentaire peut créer 10 à 30 m² de surface habitable supplémentaire — un investissement très rentable dans ce quartier.",
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

      {/* Section 2 — Travaux courants */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Travaux de rénovation les plus demandés à Pigalle en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Dans le quartier Pigalle (9e et 18e), les projets de rénovation couvrent aussi bien la restauration d&apos;appartements haussmanniens que l&apos;aménagement de combles ou la transformation d&apos;ateliers en logements contemporains.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Restauration appartement haussmannien',
                solution: "Ponçage et vitrification du parquet point de Hongrie, remise en état des moulures en stuc (rejointoiement, peinture), restauration des cheminées, mise aux normes électrique complète et modernisation des pièces d'eau — en conservant le caractère d'origine.",
                cout: '1 200 – 2 200 €/m²',
              },
              {
                titre: 'Aménagement combles mansardés',
                solution: "Isolation thermique et phonique des rampants (laine de verre ou panneaux PIR), pose d'un velux de toiture, création d'une salle de bain mansardée, cloisons et aménagement intérieur. Projet soumis à déclaration préalable selon la surface créée.",
                cout: '1 500 – 2 500 €/m²',
              },
              {
                titre: 'Transformation cave en espace fonctionnel',
                solution: "Traitement de l'humidité (injection de résine, cuvelage), isolation, électricité, sol en béton ciré ou carrelage, éclairage LED — la cave aménagée devient débarras, salle de sport ou espace de rangement structuré. Sous réserve d'un éclairage naturel direct conforme au PLU pour les espaces habitables.",
                cout: '800 – 1 500 €/m²',
              },
              {
                titre: 'Rénovation salle de bain style contemporain',
                solution: "Dans les appartements haussmanniens de Pigalle, la salle de bain est souvent vétuste ou inexistante (ancienne cuisine reconvertie). Création ou rénovation complète : douche à l'italienne, vasque suspendue, carrelage grand format, niche de rangement — le tout en conservant le caractère haussmannien de l'appartement.",
                cout: '6 000 – 15 000 €',
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

      {/* Section 3 — Prix */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix rénovation appartement Pigalle Paris 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix de rénovation à Pigalle (9e et 18e) dépendent du type de bien et du niveau de finition. Les appartements haussmanniens nécessitent une attention particulière pour la conservation des éléments d&apos;époque.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Niveau</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Description</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    niveau: 'Rafraîchissement',
                    prestations: 'Peinture, sol, éclairage — sans modifier les installations',
                    prixM2: '400 – 700 €',
                  },
                  {
                    niveau: 'Rénovation complète standard',
                    prestations: 'Électricité, plomberie, cuisine, SDB, sols, peintures',
                    prixM2: '1 000 – 1 800 €',
                  },
                  {
                    niveau: 'Haussmannien avec restauration',
                    prestations: 'Parquet POH, moulures, cheminées + rénovation complète',
                    prixM2: '1 200 – 2 200 €',
                  },
                  {
                    niveau: 'Aménagement combles ou cave',
                    prestations: 'Création de surface habitable, isolation, SDB',
                    prixM2: '1 500 – 2 500 €',
                  },
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

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Pourquoi rénover à Pigalle est un excellent investissement ?
            </h3>
            <div className="space-y-3">
              {[
                "Quartier SoPi en pleine mutation — valorisation immobilière forte et continue depuis 2015",
                "Parc haussmannien de caractère — appartements rénovés très recherchés à la location et à la vente",
                "Combles et caves souvent aménageables — création de surface habitable sans extension",
                "Métro Pigalle (lignes 2 et 12), Blanche, Abbesses — accessibilité excellente",
                "Proximité Montmartre et secteur touristique — fort attrait pour la location saisonnière",
                "Artisans spécialisés en rénovation haussmannienne et combles disponibles dans le 9e",
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
              { href: '/renovation-appartement-paris-18e', title: 'Rénovation appartement Paris 18e' },
              { href: '/blog/renovation-appartement-montmartre-paris', title: 'Rénovation appartement Montmartre Paris' },
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénovation appartement haussmannien Paris' },
              { href: '/blog/amenagement-combles-perdus-paris', title: 'Aménagement combles perdus Paris' },
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
              { href: '/renovation-paris-9e', label: 'Paris 9e' },
              { href: '/renovation-paris-18e', label: 'Paris 18e' },
              { href: '/renovation-paris-2e', label: 'Paris 2e' },
              { href: '/renovation-paris-10e', label: 'Paris 10e' },
              { href: '/renovation-paris-17e', label: 'Paris 17e' },
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-clichy', label: 'Clichy' },
              { href: '/renovation-saint-ouen', label: 'Saint-Ouen' },
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
          Vous rénovez un appartement à Pigalle ?
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Haussmannien, combles, atelier d&apos;artiste — devis gratuit sous 48h dans le 9e et 18e arrondissement.
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
