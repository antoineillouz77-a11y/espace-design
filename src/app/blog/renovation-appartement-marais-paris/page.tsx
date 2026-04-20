import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Marais Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-marais-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Marais Paris 3e 4e : charme & modernité 2025 | Espace Design',
  description: 'Rénover dans le Marais (3e-4e) : poutres apparentes, loft, studio converti. Contraintes patrimoine, prix artisan 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-marais-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quelles sont les contraintes de rénovation dans le Marais ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le Marais (Paris 3e et 4e) est classé secteur sauvegardé : toute modification de l'aspect extérieur (fenêtres, ravalement, couleurs) nécessite l'accord de l'Architecte des Bâtiments de France (ABF). Le délai d'instruction est de 2 à 3 mois. À l'intérieur, les travaux sont libres dans la plupart des cas, mais les structures historiques (poutres, murs en pierre de taille) doivent être préservées selon le règlement de copropriété.",
      },
    },
    {
      '@type': 'Question',
      name: 'Comment mettre en valeur les poutres apparentes dans un appartement du Marais ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les poutres en chêne apparentes des immeubles du Marais sont un atout architectural majeur. Pour les mettre en valeur : sablage ou brossage pour révéler le bois brut, application d'une huile ou d'un lasure transparent, peinture blanche ou grise pour un résultat contemporain contrasté. Évitez d'encoffrer les poutres — elles constituent une valeur ajoutée importante. Le traitement d'une poutre coûte 200 à 600 € selon sa longueur et son état.",
      },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte la rénovation d\'un appartement dans le Marais ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les appartements du Marais (Paris 3e et 4e) sont souvent des immeubles du XVIIe-XVIIIe siècle avec des contraintes spécifiques. Comptez 1 800 à 3 000 €/m² en rénovation complète selon l'état du bien et le niveau de finition. La restauration des poutres apparentes, des parquets anciens et des murs en pierre justifie ce positionnement premium. Un rafraîchissement simple (peinture, sol, luminaires) revient à 400 à 800 €/m².",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Marais Paris 3e 4e : charme & modernité 2025 | Espace Design',
  description: 'Rénover dans le Marais (3e-4e) : poutres apparentes, loft, studio converti. Contraintes patrimoine, prix artisan 2025.',
}

export default function ArticleMarais() {
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
            Rénovation Appartement Marais Paris 3e 4e : charme &amp; modernité 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Rénover un appartement dans le Marais est un projet à part. Entre le secteur sauvegardé, les immeubles du XVIIe et XVIIIe siècle et les exigences des Architectes des Bâtiments de France, chaque chantier demande une expertise spécifique. Poutres apparentes, murs en pierre, lofts reconvertis — ce guide vous donne toutes les clés.
          </p>
        </div>
      </section>

      {/* Section 1 — Profil du quartier */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Le Marais : secteur sauvegardé et bâti historique exceptionnel
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le Marais (Paris 3e et 4e arrondissements) est l&apos;un des rares quartiers parisiens classé en totalité secteur sauvegardé. Ce statut vise à préserver le patrimoine architectural des XVIIe et XVIIIe siècles et impose des contraintes spécifiques que tout propriétaire souhaitant rénover doit connaître avant de démarrer.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Les immeubles du Marais présentent souvent des poutres en chêne apparentes, des planchers en bois massif, des murs en pierre de taille et des cours intérieures lumineuses. Ces éléments constituent le caractère du bien — et peuvent être valorisés plutôt que dissimulés lors de la rénovation.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Accord ABF pour les modifications extérieures',
                  detail: 'Toute modification visible depuis la rue — remplacement de fenêtres, ravalement de façade, changement de couleur, installation d&apos;un velux en toiture — nécessite l&apos;accord préalable de l&apos;ABF. Le délai d&apos;instruction est de 2 à 3 mois et doit être anticipé dans le planning du chantier.',
                },
                {
                  enjeu: 'Poutres apparentes et planchers en bois massif',
                  detail: 'Les immeubles du Marais présentent souvent des poutres en chêne et des planchers anciens. Ces éléments constituent non seulement le caractère du bien, mais parfois des protections imposées par le règlement de copropriété ou le plan de sauvegarde. Un bon artisan saura les valoriser.',
                },
                {
                  enjeu: 'Murs en pierre de taille — isolation et percements',
                  detail: 'Les murs en pierre de taille sont peu isolants thermiquement mais difficiles à isoler sans perdre de surface. L&apos;isolation par l&apos;intérieur (doublage) est possible mais réduit la surface de 7 à 10 cm par mur. L&apos;abattage d&apos;un mur porteur en pierre nécessite une étude de structure et la pose d&apos;un IPN.',
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

      {/* Section 2 — Poutres et lofts */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Poutres apparentes, lofts et studios convertis : les projets phares du Marais
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le Marais est particulièrement propice aux projets de transformation qui mêlent charme de l&apos;ancien et modernité contemporaine. Voici les interventions les plus courantes et leurs coûts.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Mise en valeur des poutres apparentes',
                solution: 'Sablage ou brossage pour révéler le bois brut, application d&apos;une huile ou d&apos;un lasure transparent, ou peinture blanche pour un effet contemporain contrasté. Éviter d&apos;encoffrer les poutres — elles constituent une valeur ajoutée importante dans le Marais.',
                cout: '200 – 600 €/poutre',
              },
              {
                titre: 'Création d\'un loft dans un ancien atelier',
                solution: 'Les anciens ateliers et entrepôts du Marais offrent des hauteurs sous plafond de 4 à 6 m. La transformation en loft implique : cloisonnement partiel (chambre en mezzanine), cuisine ouverte, verrière intérieure, parquet ou béton ciré. Budget complet : 2 000 à 3 500 €/m².',
                cout: '2 000 – 3 500 €/m²',
              },
              {
                titre: 'Abattage mur porteur en pierre',
                solution: 'L&apos;abattage d&apos;un mur porteur en pierre de taille nécessite une étude de structure, l&apos;obtention d&apos;un permis de construire si nécessaire, et la pose d&apos;un IPN (poutre métallique). Impossible d&apos;improviser sur ce poste — erreur irréversible et coûteuse.',
                cout: '8 000 – 18 000 €',
              },
              {
                titre: 'Valorisation des cours intérieures',
                solution: 'Les cours intérieures des immeubles du Marais apportent une lumière précieuse dans des appartements souvent orientés sur rue étroite. Agrandir une fenêtre donnant sur cour (avec accord ABF si visible), poser un vitrage au sol ou créer une verrière peut transformer l&apos;apport lumineux.',
                cout: '3 000 – 12 000 €',
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
            Prix d&apos;une rénovation dans le Marais en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La rénovation dans le Marais est plus coûteuse qu&apos;ailleurs à Paris, pour deux raisons principales : la complexité technique des immeubles anciens et le niveau de finition attendu dans ce quartier premium.
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
                    prestations: 'Peinture, sol, luminaires — sans modifier les installations',
                    prixM2: '400 – 800 €',
                  },
                  {
                    niveau: 'Rénovation partielle',
                    prestations: 'Salle de bain ou cuisine — finitions adaptées à l\'ancien',
                    prixM2: '800 – 1 500 €',
                  },
                  {
                    niveau: 'Rénovation complète standard',
                    prestations: 'Électricité, plomberie, cuisine, SDB, sols, peintures',
                    prixM2: '1 800 – 2 500 €',
                  },
                  {
                    niveau: 'Rénovation avec restauration patrimoine',
                    prestations: 'Parquet, poutres, moulures + matériaux nobles (pierre, marbre)',
                    prixM2: '2 500 – 3 500 €',
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
              Points de vigilance spécifiques au Marais
            </h3>
            <div className="space-y-3">
              {[
                'Murs porteurs en pierre de taille — abattage 8 000 à 18 000 € avec étude de structure obligatoire',
                'Parquets anciens en chêne — restauration (ponçage + vernis) : 600 à 1 200 € pour éviter le remplacement',
                'Hauteurs sous plafond de 3 m à 4,50 m — opportunité créative, mais travaux en hauteur plus coûteux',
                'Installations électriques d\'époque — mise aux normes : 8 000 à 15 000 € pour un 80 m²',
                'Isolation thermique difficile — murs en pierre peu isolants, doublage réduit la surface de 7 à 10 cm',
                'Délai ABF de 2 à 3 mois pour toute modification extérieure — anticiper dès la phase de projet',
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
              { href: '/blog/renovation-appartement-ancien-paris', title: 'Rénover un appartement ancien à Paris' },
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénovation appartement haussmannien Paris' },
              { href: '/blog/renovation-appartement-bastille-paris', title: 'Rénovation appartement Bastille Paris' },
              { href: '/blog/verriere-interieure-paris', title: 'Verrière intérieure Paris : prix & pose' },
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
              { href: '/renovation-paris-3e', label: 'Paris 3e' },
              { href: '/renovation-paris-4e', label: 'Paris 4e' },
              { href: '/renovation-paris-1e', label: 'Paris 1er' },
              { href: '/renovation-paris-2e', label: 'Paris 2e' },
              { href: '/renovation-paris-5e', label: 'Paris 5e' },
              { href: '/renovation-paris-6e', label: 'Paris 6e' },
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-paris-12e', label: 'Paris 12e' },
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
          Vous rénovez un appartement dans le Marais ?
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Devis gratuit et détaillé sous 48h. Déplacement sans engagement dans le 3e et 4e.
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
