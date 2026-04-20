import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Cuisine Studio Paris', item: 'https://espacedesignparis.fr/blog/renovation-cuisine-studio-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Cuisine Studio Paris : aménager une kitchenette 2025 | Espace Design',
  description: 'Créer ou rénover une cuisine dans un studio parisien : kitchenette encastrée, rangements optimisés, électroménager compact. Prix 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-cuisine-studio-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel budget prévoir pour une kitchenette dans un studio parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le budget d'une kitchenette dans un studio parisien varie de 2 000 à 8 000 € tout compris (meuble, électroménager, plomberie, électricité, pose). Une kitchenette basique avec meuble IKEA et électroménager d'entrée de gamme démarre à 2 000-3 500 €. Une kitchenette sur mesure avec électroménager intégré et finitions soignées monte à 5 000-8 000 €. Comptez 1 000-2 000 € supplémentaires si une arrivée d'eau doit être créée ou si une hotte à extraction doit être posée.",
      },
    },
    {
      '@type': 'Question',
      name: 'Comment intégrer une hotte dans un studio sans gaine d\'extraction ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dans un studio parisien sans gaine d'extraction accessible, deux solutions existent : la hotte à recyclage (filtre à charbon actif qui filtre l'air et le restitue dans la pièce — efficace sur les graisses, moins sur les odeurs fortes) et la hotte aspirante avec création d'une gaine vers la façade ou la VMC existante. La hotte à recyclage est plus simple à installer (pas de percement) mais doit être placée à 65-75 cm au-dessus de la plaque. Coût : 200-600 € pour le matériel, 150-300 € de pose. La hotte avec gaine extérieure est plus efficace mais nécessite l'accord du syndic de copropriété.",
      },
    },
    {
      '@type': 'Question',
      name: 'Faut-il déclarer une kitchenette en mairie à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La création d'une kitchenette dans un studio déjà raccordé à l'eau ne nécessite pas de déclaration en mairie si aucune modification de la surface habitable n'est effectuée. En revanche, si la kitchenette implique des travaux sur les parties communes (gaine VMC, colonne de plomberie en cage d'escalier), l'accord de l'assemblée générale de copropriété est requis. Pour un studio en location, le locataire doit obtenir l'accord du propriétaire avant tout travaux. La TVA réduite à 10 % s'applique sur les travaux d'amélioration dans les logements de plus de 2 ans.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Cuisine Studio Paris : aménager une kitchenette 2025 | Espace Design',
  description: 'Créer ou rénover une cuisine dans un studio parisien : kitchenette encastrée, rangements optimisés, électroménager compact. Prix 2025.',
}

export default function ArticleCuisineStudio() {
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
            Cuisine
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Cuisine Studio Paris : aménager une kitchenette en 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Dans un studio parisien, chaque centimètre compte. Créer ou rénover une cuisine dans moins de 30 m² impose des choix d&apos;électroménager compact, de rangements verticaux et d&apos;agencement optimisé. Guide complet pour réussir votre kitchenette parisienne en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Contraintes studio */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les contraintes spécifiques du studio parisien
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Un studio parisien tourne en moyenne autour de 20 à 28 m². La cuisine y est souvent réduite à un coin intégré au séjour ou absente du tout — le locataire vivant avec un simple réchaud. Rénover ou créer une vraie cuisine fonctionnelle dans cet espace demande de trancher entre deux approches très différentes.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Coin cuisine ouvert sur le séjour',
                  detail: 'Solution la plus courante dans les studios parisiens. La cuisine s\'intègre à la pièce de vie par un meuble linéaire sur 1 à 2 mètres. Avantages : pas de cloison, gain de luminosité, espace ressenti plus grand. Inconvénients : les odeurs de cuisson se diffusent dans la pièce, une hotte performante est indispensable. Coût : 2 000 – 5 000 €.',
                },
                {
                  enjeu: 'Kitchenette encastrée (coin fermé ou niche)',
                  detail: 'La cuisine est isolée dans une niche ou derrière une cloison coulissante. Elle peut être fermée quand elle n\'est pas utilisée — idéal pour les studios meublés destinés à la location. Nécessite souvent de créer une cloison légère (carreau de plâtre ou plaque de plâtre). Coût : 3 000 – 7 000 € selon les travaux de maçonnerie.',
                },
                {
                  enjeu: 'Kitchen bar / îlot mobile',
                  detail: 'Pour les studios sans emplacement dédié, un îlot mobile ou un bar cuisine sur roulettes permet de créer un espace de préparation des repas réversible. Combiné à une plaque induction portable et un mini-four, cette solution évite les travaux de plomberie si une arrivée d\'eau n\'est pas à portée. Coût : 800 – 2 500 €.',
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

      {/* Section 2 — Électroménager compact */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Électroménager compact : les bons choix pour un studio
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;électroménager compact a considérablement progressé en qualité et en fonctionnalités. Les dimensions standards sont désormais bien établies et compatibles avec des cuisines de seulement 1 mètre de large. Voici les choix recommandés pour maximiser la fonctionnalité dans un minimum d&apos;espace.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Plaque induction 2 feux (30 cm)',
                solution: 'À privilégier sur les plaques gaz (pas de raccordement, pas de risque). La plaque 2 feux 30 cm s\'encastre dans un meuble de 40 cm de large. Puissance suffisante pour une utilisation quotidienne solo ou en couple. Marques fiables : Bosch, Brandt, Siemens.',
                cout: '150 – 400 €',
              },
              {
                titre: 'Four compact encastrable (45 cm)',
                solution: 'Le four compact 45 cm s\'encastre sous le plan de travail ou en colonne. Volume de 43-50 litres, suffisant pour la plupart des préparations. Privilégiez un modèle combiné micro-ondes/four pour encore plus de polyvalence. Consommation énergétique à vérifier (classe A+).',
                cout: '300 – 800 €',
              },
              {
                titre: 'Lave-vaisselle 45 cm (6-9 couverts)',
                solution: 'Le lave-vaisselle 45 cm consomme autant d\'eau que le 60 cm mais lave 6-9 couverts au lieu de 12-14. Pour un studio, la fréquence d\'utilisation compense la capacité réduite. Certains modèles top de gamme intègrent un sèche-vaisselle à zeolithe (pas de condensation).',
                cout: '400 – 900 €',
              },
              {
                titre: 'Réfrigérateur combiné 55 cm ou sous plan',
                solution: 'Le réfrigérateur sous plan (85 cm de hauteur) libère la hauteur du meuble pour des rangements supplémentaires. Le combiné 55 cm offre un meilleur compromis capacité/encombrement (130-180 L réfrigérateur + 30-50 L congélateur). Privilégiez un modèle No Frost pour éviter le givrage.',
                cout: '350 – 700 €',
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

      {/* Section 3 — Rangements verticaux */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Rangements verticaux et crédence : exploiter chaque centimètre
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Dans une kitchenette de studio, les rangements au sol sont limités. La solution : exploiter la hauteur sous plafond et la crédence pour multiplier les espaces de rangement sans empiéter sur la surface au sol.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Meubles hauts jusqu\'au plafond',
                prix: '600 – 1 800 €',
                detail: 'Les meubles hauts standard mesurent 72 cm de hauteur, laissant un espace perdu entre le meuble et le plafond. Opter pour des meubles jusqu\'au plafond (hauteur 90-100 cm) ou ajouter des plénums au-dessus des meubles existants permet de stocker les ustensiles peu utilisés (appareils de cuisson saisonniers, réserves alimentaires). Gain de rangement : +30 à 40 %.',
              },
              {
                type: 'Crédence avec niches et accroche-ustensiles',
                prix: '200 – 600 €',
                detail: 'La crédence n\'est pas seulement une protection des murs — elle devient un espace de rangement actif avec barres magnétiques pour couteaux, niches pour épices, porte-rouleau papier intégré, crochets pour ustensiles. Une crédence en inox brossé ou en verre trempé cumule esthétique et praticité dans un minimum d\'épaisseur.',
              },
              {
                type: 'Rangements sous évier optimisés',
                prix: '100 – 350 €',
                detail: 'L\'espace sous évier est souvent sous-exploité. Des organisateurs modulables (paniers coulissants, tiroirs extractibles, tuyauterie contournée) permettent d\'y stocker produits ménagers, sacs poubelle et accessoires de nettoyage de manière organisée. Coût faible pour un gain d\'organisation important.',
              },
              {
                type: 'Plan de travail extensible / rabattable',
                prix: '150 – 500 €',
                detail: 'Un plan de travail rabattable (fixé au mur, relevable via charnières) se plie contre le mur quand il n\'est pas utilisé. Idéal pour créer une surface de préparation supplémentaire de 40-60 cm qui ne gêne pas la circulation au quotidien. Peut servir de table à manger en position dépliée.',
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

      {/* Section 4 — Prix */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix kitchenette studio Paris 2025 : tout compris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous incluent meuble cuisine, électroménager, plomberie, électricité et pose. Hors création d&apos;arrivée d&apos;eau si absente (supplément 500-1 500 €) et hors travaux de maçonnerie (cloison, niche).
          </p>
          <div className="grid grid-cols-1 gap-3 mb-8">
            {[
              {
                niveau: 'Kitchenette basique',
                prestations: 'Meuble linéaire 1 m, plaque 2 feux, mini-réfrigérateur, évier simple.',
                prixTotal: '2 000 – 3 500 €',
                detail: 'Meuble kit type grande surface + électroménager entrée de gamme',
              },
              {
                niveau: 'Kitchenette standard',
                prestations: 'Meuble 1,5 m, plaque induction, four compact, réfrigérateur combiné, hotte à recyclage.',
                prixTotal: '3 500 – 5 500 €',
                detail: 'Électroménager milieu de gamme, finitions soignées',
              },
              {
                niveau: 'Kitchenette complète',
                prestations: 'Meuble 2 m, plaque induction, four, lave-vaisselle 45 cm, réfrigérateur, hotte extraction.',
                prixTotal: '5 500 – 8 000 €',
                detail: 'Électroménager intégré, plan de travail stratifié ou quartz',
              },
              {
                niveau: 'Kitchenette sur mesure',
                prestations: 'Meuble menuisé sur mesure, crédence sur mesure, électroménager haut de gamme, rangements optimisés.',
                prixTotal: '8 000 – 15 000 €',
                detail: 'Pour studio haut de gamme ou investissement locatif premium',
              },
            ].map((row) => (
              <div key={row.niveau} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                  <div className="font-medium text-[#1C1C1C] text-sm">{row.niveau}</div>
                  <div className="text-[#B8960C] text-sm font-semibold flex-shrink-0">{row.prixTotal}</div>
                </div>
                <div className="text-gray-600 text-xs font-light mb-1">{row.prestations}</div>
                <div className="text-gray-500 text-xs font-light italic">{row.detail}</div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils pour bien planifier sa kitchenette
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Vérifier l\'emplacement de l\'arrivée d\'eau et de l\'évacuation avant de choisir l\'implantation',
                'Prévoir un circuit électrique dédié pour le four et le lave-vaisselle (norme NF C 15-100)',
                'Mesurer la hauteur sous plafond réelle — souvent inférieure à 2,50 m dans les immeubles anciens parisiens',
                'Opter pour une plaque induction plutôt que gaz dans les petits espaces (sécurité, entretien)',
                'Choisir une couleur de meubles en accord avec le séjour — la cuisine ouverte doit former un ensemble cohérent',
                'Prévoir l\'éclairage sous-meuble dès la conception (LED intégré, prise cachée derrière le meuble haut)',
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
              { href: '/renovation-cuisine-paris', title: 'Rénovation cuisine Paris' },
              { href: '/plomberie-paris', title: 'Plomberie Paris' },
              { href: '/blog/renovation-avant-vente-paris', title: 'Rénovation avant vente Paris' },
              { href: '/blog/devis-renovation-en-ligne-paris', title: 'Devis rénovation Paris' },
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
      <section className="py-10 bg-white border-t border-gray-100">
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
          Aménagez votre cuisine de studio à Paris
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis détaillé sous 48h. Spécialistes cuisine et kitchenette en Île-de-France.
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
