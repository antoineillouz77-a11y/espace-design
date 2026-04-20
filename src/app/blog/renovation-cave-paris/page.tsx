import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: "Rénovation Cave Paris : transformer une cave en espace habitable 2025",
  description: "Aménager une cave parisienne en studio, bureau ou chambre : réglementation, isolation, électricité, prix 2025. Artisan Paris.",
  keywords: [
    "rénovation cave Paris",
    "aménagement cave appartement Paris",
    "transformer cave habitable Paris",
    "cave en studio Paris",
    "cave en bureau Paris",
    "prix rénovation cave Paris",
    "réglementation cave habitable Paris",
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation Cave Paris : transformer votre cave en studio ou bureau",
  description: "Aménager une cave parisienne en studio, bureau ou chambre : réglementation, isolation, électricité, prix 2025. Artisan Paris.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
  url: 'https://espacedesignparis.fr/blog/renovation-cave-paris',
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Peut-on habiter légalement une cave à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, sous conditions strictes : hauteur sous plafond minimale de 1,80 m (idéalement 2,20 m selon la loi Carrez pour être comptabilisé en surface habitable), ventilation mécanique conforme, éclairage suffisant et déclaration préalable en mairie. Le règlement de copropriété peut également restreindre l'usage d'habitation en sous-sol. Un cabinet d'architecte ou votre mairie peut confirmer la faisabilité pour votre situation précise.",
      },
    },
    {
      '@type': 'Question',
      name: "Combien coûte la rénovation d'une cave en studio ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour une cave de 15 à 25 m², le budget de transformation en studio habitable se situe entre 15 000 et 35 000 €. Ce montant comprend : traitement de l'humidité, isolation sol/murs/plafond, VMC, installation électrique, plomberie si salle de bain, cloisons, revêtements et menuiseries. Si des travaux d'étanchéité lourds sont nécessaires (drainage périphérique, cuvelage complet), prévoir 5 000 à 15 000 € supplémentaires.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il un permis de construire pour aménager une cave à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour une surface inférieure à 20 m², une déclaration préalable de travaux suffit en mairie de Paris. Au-delà de 20 m² de surface créée, ou si les travaux modifient le volume bâti (création d'une fenêtre en façade, agrandissement de soupiraux), un permis de construire peut être requis. Dans les secteurs sauvegardés ou en présence d'un immeuble classé, l'accord de l'Architecte des Bâtiments de France est nécessaire.",
      },
    },
    {
      '@type': 'Question',
      name: "Combien de temps durent les travaux de rénovation d'une cave ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La durée varie de 6 à 12 semaines selon l'ampleur du projet. Une cave déjà saine transformée en bureau simple prend 4 à 6 semaines. Un aménagement complet en studio (avec traitement humidité, plomberie, électricité, isolation et finitions) demande 8 à 12 semaines. Les travaux d'étanchéité lourds (drainage périphérique) peuvent allonger ce délai de 2 à 3 semaines supplémentaires.",
      },
    },
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: "Rénovation Cave Paris", item: 'https://espacedesignparis.fr/blog/renovation-cave-paris' },
  ],
}

export default function ArticleRenovationCaveParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-12 bg-[#1C1C1C]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#D4AF37] text-[10px] font-light uppercase tracking-[0.25em] mb-4">
            Aménagement
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Cave Paris : transformer votre cave en studio ou bureau
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            À Paris, chaque mètre carré compte. Transformer une cave en studio, bureau ou chambre est une opportunité
            souvent sous-estimée — à condition de respecter la réglementation, de traiter l&apos;humidité et de réaliser
            des travaux complets. Ce guide 2025 vous détaille les étapes, les contraintes et les prix réels.
          </p>
        </div>
      </section>

      {/* Section 1 — Contexte parisien */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les caves parisiennes : un potentiel immobilier inexploité
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Paris compte des dizaines de milliers de caves situées en rez-de-chaussée surélevé ou en sous-sol
              de plain-pied. Dans les immeubles haussmanniens, les caves sont souvent de taille généreuse (15 à
              40 m²), avec des voûtes en briques ou des murs en pierre de taille. Dans les immeubles des années
              1960-1990, elles présentent des hauteurs sous plafond de 1,80 m à 2,50 m.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              La condition sine qua non pour envisager un aménagement en espace de vie est la hauteur sous plafond.
              La réglementation sanitaire française fixe un minimum de <strong className="text-[#1C1C1C]">1,80 m</strong> pour
              un usage quelconque, et de <strong className="text-[#1C1C1C]">2,20 m</strong> pour que la surface soit
              comptabilisée comme habitable au sens de la loi Carrez. En dessous de 1,80 m, seul un usage de stockage
              ou de local technique est envisageable.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Le contexte parisien présente un avantage majeur : le prix au m² élevé de la capitale (8 000 à 15 000 €/m²
              selon l&apos;arrondissement) rend la valorisation d&apos;une cave rentable même après un investissement de
              15 000 à 35 000 €. Un studio de 20 m² créé en sous-sol peut représenter 160 000 à 300 000 € de valeur
              ajoutée sur votre bien.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { stat: '1,80 m', label: "Hauteur minimale réglementaire pour tout usage" },
              { stat: '2,20 m', label: "Hauteur pour surface loi Carrez habitable" },
              { stat: '< 20 m²', label: "Déclaration préalable suffisante en mairie" },
            ].map((el) => (
              <div key={el.stat} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100 text-center">
                <div className="font-display text-2xl font-semibold text-[#D4AF37] mb-2">{el.stat}</div>
                <div className="text-gray-600 text-xs font-light leading-relaxed">{el.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Réglementation */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Est-il légal d&apos;habiter une cave à Paris ?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La transformation d&apos;une cave en logement est encadrée par plusieurs textes réglementaires.
            Voici ce que vous devez vérifier avant de lancer les travaux :
          </p>
          <div className="space-y-4">
            {[
              {
                titre: 'Réglementation sanitaire départementale',
                detail: "Le Règlement Sanitaire Départemental de Paris (RSD) interdit l'habitation dans des pièces dont la hauteur est inférieure à 1,80 m. Pour être louée ou vendue comme surface habitable (loi Carrez), la pièce doit atteindre 2,20 m. Une cave à 2 m peut être utilisée comme bureau personnel mais ne sera pas comptabilisée officiellement en surface habitable.",
              },
              {
                titre: "Autorisation de la copropriété",
                detail: "Si votre cave est une annexe privative, vous devrez obtenir l'accord de l'assemblée générale pour tout changement de destination (rangement → habitation) ou pour les travaux qui impactent les parties communes (percement de mur porteur, création d'un accès depuis l'appartement, modification des canalisations communes). Le règlement de copropriété peut interdire l'habitation en sous-sol.",
              },
              {
                titre: "Déclaration préalable ou permis de construire",
                detail: "Pour une surface créée inférieure à 20 m², une déclaration préalable de travaux est obligatoire si vous modifiez l'aspect extérieur (agrandissement de soupiraux) ou changez la destination du local. Au-delà de 20 m², un permis de construire est requis. Dans les secteurs sauvegardés (Marais, Île Saint-Louis, Montmartre), l'accord de l'Architecte des Bâtiments de France est nécessaire.",
              },
              {
                titre: "Ventilation et éclairage obligatoires",
                detail: "Toute pièce habitable doit disposer d'un éclairage naturel (surface vitrée = 1/6e de la surface au sol minimum) et d'une ventilation mécanique contrôlée. En cave, cela implique souvent l'agrandissement ou la création de soupiraux et l'installation d'une VMC double flux — contraintes techniques majeures qui impactent le budget.",
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.titre}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Travaux indispensables */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Les travaux indispensables pour aménager une cave à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Transformer une cave en espace de vie ne s&apos;improvise pas. Voici les interventions
            incontournables, dans leur ordre logique d&apos;exécution :
          </p>

          <div className="space-y-5">
            <div>
              <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                1. Traitement de l&apos;humidité
              </h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                C&apos;est la priorité absolue. Les murs en pierre meulière ou en calcaire des caves parisiennes sont
                poreux et absorbent les remontées capillaires ou les infiltrations latérales. Sans traitement préalable,
                aucun revêtement ne tiendra durablement. Les solutions vont de l&apos;injection de résine hydrofuge
                (150-300 €/ml) à la pose d&apos;un drain périphérique (2 000-6 000 €), en passant par l&apos;enduit de
                cuvelage (30-60 €/m²). Un diagnostic humidité par un professionnel est indispensable.
              </p>
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                2. Isolation sol, murs et plafond
              </h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                Le sous-sol est naturellement froid et les ponts thermiques sont nombreux. L&apos;isolation doit couvrir
                le sol (plancher chauffant ou isolation sous chape), les murs (panneaux rigides PIR ou laine de roche
                en doublage) et le plafond (faux plafond isolé ou projection de mousse). Budget isolation complète
                pour 20 m² : 3 000 à 6 000 €.
              </p>
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                3. Ventilation mécanique (VMC)
              </h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                Obligatoire pour tout usage habitable, la VMC double flux est recommandée en cave car elle
                renouvelle l&apos;air sans créer de déperdition thermique. Elle contrôle également l&apos;hygrométrie
                et évite la condensation. Coût installation VMC double flux : 1 500 à 4 000 €.
              </p>
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                4. Installation électrique mise aux normes NF C 15-100
              </h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                Une cave rénovée nécessite une installation électrique complète : tableau électrique, circuits
                éclairage, prises, chauffage électrique ou plancher chauffant, VMC. En cave humide, les normes
                imposent des matériaux étanches (IP44 minimum) et une liaison équipotentielle. Coût installation
                électrique complète : 2 000 à 4 500 € pour 20 m².
              </p>
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                5. Évacuations et plomberie (si salle de bain ou cuisine)
              </h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                Pour un studio complet, il faut prévoir les évacuations eaux usées (souvent par pompe de relevage
                car le sous-sol est sous le niveau du collecteur) et l&apos;alimentation eau chaude/froide. La pompe
                de relevage représente 800 à 2 000 €. La plomberie complète (douche, lavabo, WC) d&apos;une cave
                de 20 m² : 3 000 à 7 000 €.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Tableau des prix */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix d&apos;une rénovation de cave à Paris en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les tarifs ci-dessous correspondent à des caves parisiennes en état brut, nécessitant l&apos;ensemble
            des travaux. Si votre cave est déjà traitée contre l&apos;humidité, déduisez 3 000 à 10 000 €.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Type d&apos;aménagement</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">15 m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">25 m²</th>
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Travaux inclus</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    type: 'Cave brute → bureau',
                    p15: '8 000 – 15 000 €',
                    p25: '12 000 – 22 000 €',
                    travaux: 'Humidité, isolation, électricité, VMC, sol, peinture',
                  },
                  {
                    type: 'Cave brute → studio complet',
                    p15: '15 000 – 28 000 €',
                    p25: '25 000 – 45 000 €',
                    travaux: '+ plomberie, salle de bain, cuisine, cloisons',
                  },
                  {
                    type: 'Cave brute → chambre',
                    p15: '12 000 – 22 000 €',
                    p25: '18 000 – 35 000 €',
                    travaux: '+ soupiraux, accès, mise aux normes habitation',
                  },
                  {
                    type: 'Cave → salle de sport',
                    p15: '10 000 – 20 000 €',
                    p25: '16 000 – 30 000 €',
                    travaux: 'Sol amortissant, miroirs, ventilation renforcée',
                  },
                  {
                    type: 'Cave → cave à vin',
                    p15: '5 000 – 12 000 €',
                    p25: '8 000 – 20 000 €',
                    travaux: 'Isolation thermique, casiers, hygrométrie contrôlée',
                  },
                ].map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium text-sm">{row.type}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium text-sm">{row.p15}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium text-sm">{row.p25}</td>
                    <td className="px-4 py-3 text-gray-600 font-light text-xs">{row.travaux}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs font-light italic mt-3">
            Prix TTC Paris 2025. Hors étanchéité lourde (drainage périphérique) si nécessaire : ajouter 5 000 à 15 000 €.
          </p>
        </div>
      </section>

      {/* Section 5 — Réalisations */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Nos réalisations cave à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Espace Design intervient régulièrement sur des projets de rénovation de caves à Paris.
            Voici deux exemples de réalisations récentes :
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#FAFAF8] rounded-lg p-6 border border-gray-100">
              <div className="text-[#D4AF37] text-xs font-medium uppercase tracking-widest mb-3">Paris 4e — Le Marais</div>
              <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">Cave 15 m² en bureau</h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed mb-4">
                Cave en pierre de taille de 15 m², hauteur 2,30 m. Traitement remontées capillaires par injection
                de résine, isolation murs et plafond, installation VMC double flux, électricité complète, sol en
                béton ciré, éclairage LED intégré. Résultat : bureau professionnel lumineux et fonctionnel.
              </p>
              <div className="text-[#B8960C] text-sm font-semibold">Budget : 14 500 €</div>
              <div className="text-gray-500 text-xs font-light mt-1">Durée : 7 semaines</div>
            </div>
            <div className="bg-[#FAFAF8] rounded-lg p-6 border border-gray-100">
              <div className="text-[#D4AF37] text-xs font-medium uppercase tracking-widest mb-3">Paris 18e — Montmartre</div>
              <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">Cave 20 m² en studio</h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed mb-4">
                Cave de 20 m², hauteur 2,10 m, anciennement inondée. Cuvelage complet des murs, création de
                soupiraux agrandis, VMC double flux, plancher chauffant électrique, salle de bain avec pompe
                de relevage, cloisons placo, cuisine équipée. Déclaration préalable déposée en mairie.
              </p>
              <div className="text-[#B8960C] text-sm font-semibold">Budget : 32 000 €</div>
              <div className="text-gray-500 text-xs font-light mt-1">Durée : 11 semaines</div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-4">
              Notre expertise en rénovation de cave
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Diagnostic humidité et préconisations",
                "Traitement étanchéité et cuvelage",
                "Isolation thermique et acoustique sous-sol",
                "Électricité mise aux normes NF C 15-100",
                "VMC double flux et ventilation",
                "Plomberie et pompe de relevage",
                "Aménagement sur-mesure (bureau, studio, cave à vin)",
                "Démarches copropriété et déclaration mairie",
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
          <div className="space-y-4">
            {schemaFAQ.mainEntity.map((q) => (
              <div key={q.name} className="bg-white rounded-lg p-5 border border-gray-100">
                <p className="font-medium text-[#1C1C1C] text-sm mb-2">{q.name}</p>
                <p className="text-gray-600 text-sm font-light leading-relaxed">{q.acceptedAnswer.text}</p>
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
              { href: '/blog/isolation-acoustique-appartement-paris', title: "Isolation acoustique appartement Paris" },
              { href: '/blog/renovation-sous-sol-paris', title: "Rénovation sous-sol Paris" },
              { href: '/blog/budget-renovation-paris-2025', title: "Budget rénovation Paris 2025" },
              { href: '/blog/humidite-appartement-paris', title: "Traiter l'humidité appartement Paris" },
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
              { href: '/renovation-paris-5e', label: 'Paris 5e' },
              { href: '/renovation-paris-6e', label: 'Paris 6e' },
              { href: '/renovation-paris-7e', label: 'Paris 7e' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-paris-17e', label: 'Paris 17e' },
              { href: '/renovation-paris-18e', label: 'Paris 18e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
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

      {/* CTA */}
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
          Votre projet de rénovation de cave à Paris
        </h2>
        <p className="text-gray-400 text-sm font-light mb-8">
          Diagnostic humidité gratuit. Devis détaillé sous 48h. Sans engagement.
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
