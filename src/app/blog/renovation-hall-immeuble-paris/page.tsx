import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Hall d\'Immeuble Paris', item: 'https://espacedesignparis.fr/blog/renovation-hall-immeuble-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation Hall d'Immeuble Paris : syndic, vote & prix 2025 | Espace Design",
  description: "Rénover le hall d'un immeuble à Paris : procédure vote en AG, travaux parties communes, choix artisan syndic. Prix et guide 2025.",
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-hall-immeuble-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel vote est nécessaire pour rénover le hall d'un immeuble parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La rénovation du hall d'un immeuble en copropriété nécessite un vote en Assemblée Générale. La majorité requise dépend de la nature des travaux : majorité simple article 24 (plus de 50% des voix présentes et représentées) pour l'entretien courant et les petits travaux de rafraîchissement (peinture, changement de moquette) ; majorité absolue article 25 (plus de 50% de toutes les voix de la copropriété, présents ou non) pour des travaux plus importants (remplacement du revêtement de sol, installation d'éclairage automatique). En cas de doute, consultez votre syndic qui qualifiera les travaux.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel est le prix de rénovation d'un hall d'immeuble à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix de rénovation d'un hall d'immeuble à Paris varie de 2 000 à 30 000 € selon la surface, les matériaux choisis et l'ampleur des travaux. Pour un hall de 15 m² : peinture seule = 1 500–3 000 €, peinture + sol vinyle = 3 000–6 000 €, rénovation complète avec carrelage, peinture et éclairage = 6 000–15 000 €, rénovation haut de gamme avec pierre, boiseries et interphone vidéo = 15 000–30 000 €. Ces tarifs incluent la main d'œuvre et les matériaux.",
      },
    },
    {
      '@type': 'Question',
      name: "Un copropriétaire peut-il faire rénover le hall sans passer par le syndic ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Non, un copropriétaire ne peut pas faire réaliser des travaux dans les parties communes (dont le hall) sans l'accord de la copropriété. Les parties communes appartiennent à l'ensemble des copropriétaires. Seul le syndic, mandaté par l'AG, peut commander des travaux dans ces espaces. Toute intervention non autorisée peut faire l'objet d'une remise en état aux frais du copropriétaire fautif. La seule exception concerne les travaux d'urgence décidés par le syndic sans vote préalable (article 18 de la loi du 10 juillet 1965).",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Rénovation Hall d'Immeuble Paris : syndic, vote & prix 2025 | Espace Design",
  description: "Rénover le hall d'un immeuble à Paris : procédure vote en AG, travaux parties communes, choix artisan syndic. Prix et guide 2025.",
}

export default function ArticleRenovationHallImmeuble() {
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
            Rénovation Hall d&apos;Immeuble Paris : syndic, vote &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le hall d&apos;entrée est la première image de l&apos;immeuble : il conditionne le confort des résidents et la valeur des appartements. Mais rénover les parties communes impose de respecter la procédure de copropriété. Guide complet : vote en AG, choix des matériaux, artisan syndic et prix 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Procédure syndic et vote */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Procédure de vote en copropriété pour rénover un hall
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Rénover le hall d&apos;un immeuble parisien ne s&apos;improvise pas : le hall est une partie commune, propriété indivise de tous les copropriétaires. Toute décision de travaux doit être votée en Assemblée Générale, selon des règles de majorité définies par la loi du 10 juillet 1965.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              La première étape est d&apos;inscrire la question à l&apos;ordre du jour de la prochaine AG via une demande au syndic. La demande doit être accompagnée d&apos;au moins deux devis d&apos;artisans (exigence réglementaire au-dessus d&apos;un seuil fixé par le règlement de copropriété ou par décret). Un devis d&apos;Espace Design peut être présenté en AG pour appuyer votre proposition.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Majorité article 24 — Travaux d\'entretien courant',
                  detail: 'Travaux de rafraîchissement sans modification : repeindre les murs et plafonds du hall à l\'identique, remplacer un luminaire défectueux, nettoyer et décaper le sol. Vote acquis à la majorité des voix des copropriétaires présents, représentés ou ayant voté par correspondance. Majorité la plus facile à atteindre.',
                },
                {
                  enjeu: 'Majorité article 25 — Travaux d\'amélioration',
                  detail: 'Travaux modifiant l\'aspect ou les équipements : changement du revêtement de sol (carrelage → pierre), installation d\'un interphone vidéo, création d\'un sas d\'entrée, remplacement des boîtes aux lettres. Vote acquis à la majorité absolue des droits de vote de TOUS les copropriétaires (même absents). Majorité plus difficile à obtenir.',
                },
                {
                  enjeu: 'Urgence — Article 18',
                  detail: 'Le syndic peut engager des travaux sans vote préalable en cas d\'urgence absolue (infiltration d\'eau active, dégradation de la sécurité des résidents). Il doit informer les copropriétaires dans les meilleurs délais et soumettre les dépenses à ratification lors de la prochaine AG.',
                },
                {
                  enjeu: 'Droit d\'opposition et minorité de blocage',
                  detail: 'En article 25, si la majorité absolue n\'est pas atteinte mais que les voix favorables représentent au moins un tiers des droits, un second vote à la majorité de l\'article 24 peut être organisé immédiatement. Ce mécanisme dit "passerelle" évite le blocage des travaux nécessaires.',
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

      {/* Section 2 — Matériaux hall */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Matériaux pour un hall d&apos;immeuble parisien : durabilité et esthétique
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le hall d&apos;immeuble subit un trafic intensif : passages quotidiens de tous les résidents, livraisons, intrusions de saleté et d&apos;humidité depuis l&apos;extérieur. Les matériaux choisis doivent concilier durabilité, facilité d&apos;entretien et esthétique adaptée au standing de l&apos;immeuble.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Pierre naturelle (calcaire, marbre)',
                solution: 'Matériau de référence dans les immeubles haussmanniens, la pierre apporte noblesse et durabilité. Calcaire de Bourgogne, marbre blanc de Carrare ou pierre de Comblanchien. Nécessite un traitement hydrofuge régulier. Résiste très bien au trafic si choisie dans une finition adoucie ou bouchardée (antidérapant).',
                cout: '80 – 200 €/m²',
              },
              {
                titre: 'Carrelage grès cérame grands formats',
                solution: 'Alternative économique à la pierre, le grès cérame imitation marbre ou béton convient parfaitement aux halls de standing intermédiaire. Formats 60×60 ou 120×60 pour un effet contemporain. Résistance à l\'abrasion R9 minimum recommandée. Entretien simple à la serpillière.',
                cout: '35 – 90 €/m²',
              },
              {
                titre: 'Peinture murs et plafond',
                solution: 'Peinture mat ou velours lessivable (norme EN 13300 classe 2 minimum pour les parties communes). Les peintures avec résistance renforcée aux frottements et aux graffitis sont recommandées en zone de passage. Teintes neutres (blanc, gris perle, beige) favorisent la luminosité.',
                cout: '15 – 35 €/m²',
              },
              {
                titre: 'Revêtement mural lambris ou miroir',
                solution: 'Les lambris en MDF laqué ou en bois naturel en soubassement protègent les murs des chocs et égratignures dues aux vélos et poussettes. Un miroir en pied de cage d\'escalier agrandit visuellement l\'espace et améliore la luminosité dans les halls sombres sur cour.',
                cout: '40 – 120 €/m²',
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

      {/* Section 3 — Éclairage et équipements */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Éclairage LED, interphone et équipements parties communes
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La rénovation du hall est l&apos;occasion d&apos;améliorer simultanément les équipements techniques : éclairage, interphonie, boîtes aux lettres. Ces postes peuvent être regroupés dans un seul vote en AG pour simplifier la procédure et optimiser les délais.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Éclairage LED à détection de présence',
                prix: '300 – 1 500 €',
                detail: 'Le remplacement des anciennes ampoules ou néons par des spots LED à détecteur de mouvement réduit la consommation électrique des parties communes de 60 à 80%. La mise en lumière automatique améliore la sécurité (hall toujours éclairé à l\'entrée d\'un résident). Durée de vie : 25 000 à 50 000 heures.',
              },
              {
                type: 'Interphone vidéo numérique',
                prix: '1 500 – 5 000 €',
                detail: 'Le remplacement d\'un interphone analogique par un système vidéo numérique améliore la sécurité et le confort. Les systèmes modernes permettent la gestion via smartphone depuis l\'extérieur (réception de colis, visiteurs). Installation : câblage par l\'électricien, boîtier extérieur et combinés intérieurs par appartement.',
              },
              {
                type: 'Boîtes aux lettres normalisées',
                prix: '800 – 3 000 €',
                detail: 'La norme NF D 27-404 impose des dimensions minimales (26 × 23 cm) pour les boîtes aux lettres. Si les boîtes existantes ne sont pas aux normes, la renovation du hall est l\'occasion de les remplacer. Les boîtes en acier inoxydable avec serrure individuelle sont le standard actuel des immeubles rénovés.',
              },
              {
                type: 'Digicode et sécurisation de l\'accès',
                prix: '500 – 2 000 €',
                detail: 'Installation d\'un digicode à code ou à badge sans contact (technologie RFID) en remplacement d\'une serrure mécanique simple. Permet la gestion des accès (résidents, prestataires, gardien) et l\'historique des entrées. Compatible avec les systèmes d\'interphone vidéo modernes.',
              },
            ].map((el) => (
              <div key={el.type} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.type}</div>
                  <div className="text-[#B8960C] text-sm font-medium flex-shrink-0">{el.prix}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Choisir son artisan */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Choisir l&apos;artisan pour un hall d&apos;immeuble : syndic vs gré à gré
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le syndic de copropriété propose généralement ses artisans référencés — qui facturent parfois une commission ou des tarifs supérieurs au marché. Les copropriétaires ont le droit de proposer leurs propres artisans en AG, à condition de fournir les devis avant le vote. Voici comment naviguer entre les deux options.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                enjeu: 'Artisan présenté par le syndic',
                detail: 'Avantages : artisan connu du syndic, références dans l\'immeuble ou le quartier, facilité de suivi via le syndic. Inconvénients : tarifs parfois négociés défavorablement, peu de choix, risque de marge cachée du syndic. Vérifiez systématiquement que le devis présenté est signé directement par l\'artisan et non via une plateforme intermédiaire.',
              },
              {
                enjeu: 'Artisan proposé par les copropriétaires',
                detail: 'Tout copropriétaire peut demander l\'inscription à l\'ordre du jour de l\'AG d\'un devis alternatif. L\'AG vote sur les différents devis et choisit librement. Cette procédure nécessite d\'anticiper : demande d\'inscription à l\'AG au moins 21 jours avant la réunion avec le devis joint.',
              },
              {
                enjeu: 'Vérifications indispensables',
                detail: 'Quelle que soit la source, exiger de l\'artisan : attestation Kbis à jour, attestation assurance décennale + responsabilité civile professionnelle (vérifier la date de validité), références de chantiers de parties communes similaires, garantie de reprise à l\'identique en cas de sinistre pendant les travaux.',
              },
            ].map((el) => (
              <div key={el.enjeu} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.enjeu}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Budget */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix de rénovation d&apos;un hall d&apos;immeuble à Paris en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Tarifs indicatifs pour un hall de 15 à 20 m², main d&apos;œuvre et matériaux inclus.
          </p>

          {/* Price table as styled divs */}
          <div className="rounded-lg overflow-hidden border border-gray-200 mb-8">
            <div className="grid grid-cols-3 bg-[#1C1C1C] text-white px-4 py-3">
              <div className="text-xs font-light uppercase tracking-wider">Niveau de rénovation</div>
              <div className="text-xs font-light uppercase tracking-wider text-center">Prestations incluses</div>
              <div className="text-xs font-light uppercase tracking-wider text-center">Prix total</div>
            </div>
            {[
              { niveau: 'Rafraîchissement', prestations: 'Peinture murs + plafond', prix: '1 500 – 3 000 €' },
              { niveau: 'Standard', prestations: 'Peinture + sol vinyle ou carrelage économique', prix: '3 000 – 7 000 €' },
              { niveau: 'Complet', prestations: 'Peinture + carrelage grès + éclairage LED + interphone', prix: '7 000 – 15 000 €' },
              { niveau: 'Haut de gamme', prestations: 'Pierre naturelle + enduit décoratif + domotique + mobilier', prix: '15 000 – 30 000 €' },
              { niveau: 'Boîtes aux lettres', prestations: 'Remplacement bloc boîtes aux lettres inox', prix: '800 – 3 000 €' },
              { niveau: 'Éclairage seul', prestations: 'Remplacement luminaires par LED + détecteurs', prix: '300 – 1 500 €' },
            ].map((row, i) => (
              <div key={row.niveau} className={`grid grid-cols-3 px-4 py-3 border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}`}>
                <div className="text-sm text-[#1C1C1C] font-medium">{row.niveau}</div>
                <div className="text-sm text-gray-600 font-light text-center">{row.prestations}</div>
                <div className="text-sm text-[#B8960C] font-medium text-center">{row.prix}</div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Comment faire voter un projet de rénovation en AG
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Obtenir minimum 2 devis avant l\'AG — exigence réglementaire au-dessus du seuil de consultation',
                'Inscrire le point à l\'ordre du jour au moins 21 jours avant l\'AG via lettre recommandée au syndic',
                'Joindre les devis à la convocation pour que les copropriétaires puissent les analyser avant de voter',
                'Présenter les bénéfices concrets : valorisation des appartements, économies d\'énergie, confort résidents',
                'Proposer un plan de financement (appel de fonds exceptionnel ou prélèvement sur provisions)',
                'Anticiper les délais : entre vote AG et démarrage des travaux, prévoir 2 à 4 mois minimum',
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
              { href: '/amenagement-paris', title: 'Aménagement Paris' },
              { href: '/peinture-paris', title: 'Peinture Paris' },
              { href: '/carrelage-paris', title: 'Carrelage Paris' },
              { href: '/blog/moulures-paris', title: 'Restauration moulures Paris' },
              { href: '/blog/renovation-cave-parking-paris', title: 'Rénovation cave et parking Paris' },
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
              { href: '/renovation-paris-10e', label: 'Paris 10e' },
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-paris-17e', label: 'Paris 17e' },
              { href: '/renovation-levallois-perret', label: 'Levallois' },
              { href: '/renovation-courbevoie', label: 'Courbevoie' },
              { href: '/renovation-saint-ouen', label: 'Saint-Ouen' },
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
          Obtenez un devis pour rénover votre hall d&apos;immeuble
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Devis détaillé présentable en AG sous 48h. Artisans référencés syndics parisiens.
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
