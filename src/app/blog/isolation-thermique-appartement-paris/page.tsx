import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Isolation Thermique Appartement Paris', item: 'https://espacedesignparis.fr/blog/isolation-thermique-appartement-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Isolation Thermique Appartement Paris : ITI, fenêtres & DPE 2025 | Espace Design',
  description: 'Isoler son appartement à Paris : isolation intérieure, fenêtres double vitrage, DPE. Aides MaPrimeRénov\' et prix au m² 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/isolation-thermique-appartement-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix de l\'isolation thermique d\'un appartement à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le prix de l\'isolation thermique d\'un appartement à Paris dépend des travaux engagés. Pour l\'isolation intérieure des murs (ITI) : 60 à 120 €/m² posé. Pour le remplacement des fenêtres en double vitrage : 400 à 900 € par fenêtre selon le modèle. Pour l\'isolation du plancher bas sur cave : 30 à 70 €/m². Pour un appartement de 60 m² avec murs mitoyens à isoler et 5 fenêtres à remplacer, comptez entre 15 000 et 35 000 € de travaux. Ces coûts peuvent être significativement réduits par les aides MaPrimeRénov\' (jusqu\'à 75 % pour les ménages modestes), les CEE et la TVA à 5,5 % sur les travaux d\'isolation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mon appartement est classé F ou G au DPE — suis-je obligé de faire des travaux ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depuis 2025, les logements classés G au DPE sont interdits à la location (contrats nouveaux et renouvelés). Les logements classés F seront à leur tour interdits à la location dès 2028. Si vous êtes propriétaire-bailleur, vous avez donc l\'obligation légale de réaliser des travaux de rénovation énergétique pour mettre votre bien en conformité. Si vous êtes propriétaire-occupant, aucune obligation légale n\'existe actuellement, mais les logements F et G sont de plus en plus difficiles à revendre à bonne valeur. L\'audit énergétique (obligatoire pour les classes F et G depuis 2023 en cas de vente) oriente vers les travaux prioritaires.',
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on isoler les murs d\'un appartement en copropriété à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, l\'isolation par l\'intérieur (ITI) ne nécessite pas d\'autorisation de la copropriété car elle ne touche pas aux parties communes. En revanche, l\'isolation par l\'extérieur (ITE) — qui modifie la façade — nécessite un vote en assemblée générale à la majorité absolue. À Paris, l\'ITE est souvent impossible dans les immeubles haussmanniens ou soumise à des contraintes ABF très strictes. L\'ITI est donc la solution retenue dans 90 % des appartements parisiens. Attention : les copropriétés exigent parfois un sous-couche acoustique sous le sol lors de travaux, lisez votre règlement de copropriété avant de commencer.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Isolation Thermique Appartement Paris : ITI, fenêtres & DPE 2025 | Espace Design',
  description: 'Isoler son appartement à Paris : isolation intérieure, fenêtres double vitrage, DPE. Aides MaPrimeRénov\' et prix au m² 2025.',
}

export default function ArticleIsolationThermique() {
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
            Isolation
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Isolation Thermique Appartement Paris : ITI, fenêtres &amp; DPE 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Interdiction de louer les logements classés G depuis 2025, puis F dès 2028 : l&apos;isolation thermique est devenue une urgence pour de nombreux propriétaires parisiens. ITI, fenêtres double vitrage, MaPrimeRénov&apos; — guide complet avec les prix réels et les aides disponibles en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — DPE et enjeux légaux */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              DPE et interdiction de location : ce qui change en 2025 et 2028
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le calendrier de l&apos;interdiction de location des passoires thermiques est désormais en vigueur. Il concerne aussi bien les nouveaux contrats de location que les renouvellements.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              À Paris, le parc locatif privé compte un nombre important de logements classés E, F ou G — des appartements haussmanniens souvent mal isolés, aux fenêtres anciennes et aux murs en pierre sans isolation intérieure. La mise aux normes est donc un enjeu massif pour les propriétaires bailleurs parisiens.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Logements G : interdits à la location depuis 2025',
                  detail: 'Depuis le 1er janvier 2025, les logements dont la consommation énergétique dépasse 450 kWh/m²/an (classe G+) ne peuvent plus faire l\'objet d\'un nouveau contrat de location. En 2025, l\'ensemble des logements G sont concernés. Les contrats en cours ne sont pas immédiatement résiliables, mais le propriétaire ne peut pas augmenter le loyer à partir de 2022.',
                },
                {
                  enjeu: 'Logements F : interdits à la location dès 2028',
                  detail: 'Les logements classés F (consommation entre 331 et 450 kWh/m²/an) seront interdits à la location en 2028. Les propriétaires bailleurs ont donc jusqu\'à cette date pour engager des travaux de rénovation énergétique. L\'audit énergétique (obligatoire depuis 2023 lors de la vente des biens F et G) permet d\'identifier les travaux prioritaires.',
                },
                {
                  enjeu: 'L\'audit énergétique : point de départ du projet',
                  detail: 'Avant tout travaux d\'isolation, faire réaliser un audit énergétique par un professionnel certifié (300 à 600 €) permet d\'identifier les postes de déperditions les plus importants et de prioriser les travaux. L\'audit est obligatoire pour les biens classés F et G mis en vente. Il conditionne également certaines aides MaPrimeRénov\'.',
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

      {/* Section 2 — Solutions d'isolation */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Solutions d&apos;isolation pour un appartement parisien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Dans un appartement parisien, les options d&apos;isolation sont contraintes par la copropriété et les réglementations patrimoniales (ABF). Voici les solutions réalistes, du plus efficace au plus accessible.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'ITI — Isolation thermique par l\'intérieur',
                detail: 'Doublage des murs extérieurs avec laine de roche 100 mm + plaque de plâtre (BA13). Perte de surface : 10 à 12 cm par mur traité. Gain thermique important (résistance thermique R = 2,5 à 3 m²K/W). Solution adaptée à tous les appartements parisiens. Éligible TVA 5,5 % et MaPrimeRénov\'.',
                cout: '60 – 120 €/m²',
              },
              {
                titre: 'Remplacement des fenêtres',
                detail: 'Double vitrage 4/16/4 ou triple vitrage selon orientation. Cadres PVC (économique) ou aluminium thermolaqué (esthétique). En secteur ABF : cadres bois imposés en façade sur rue. Survitrage collé sur l\'existant possible si le cadre est en bon état (200 à 400 € par fenêtre). Éligible MaPrimeRénov\'.',
                cout: '400 – 900 €/fenêtre',
              },
              {
                titre: 'Isolation du plancher bas sur cave',
                detail: 'Pose de panneaux XPS (polystyrène extrudé) ou laine de roche sous le plancher en contact avec une cave ou un vide sanitaire. Gain de 10 à 15 % sur la facture de chauffage. Travaux rapides (1 à 2 jours pour un appartement de 60 m²). Éligible MaPrimeRénov\'.',
                cout: '30 – 70 €/m²',
              },
              {
                titre: 'Isolation du plafond (sous combles)',
                detail: 'Pour les appartements en dernier étage, l\'isolation du plancher des combles perdus est le geste le plus rentable : jusqu\'à 25 % d\'économies sur le chauffage. Soufflage de laine de verre (R = 7 à 10) dans les combles perdus. Éligible à l\'aide "Coup de pouce isolation" et MaPrimeRénov\'.',
                cout: '20 – 40 €/m²',
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

      {/* Section 3 — Aides financières */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Aides financières 2025 : MaPrimeRénov&apos;, CEE et TVA réduite
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Plusieurs dispositifs permettent de réduire significativement le coût des travaux d&apos;isolation. Ils sont cumulables sous conditions.
          </p>
          <div className="space-y-4 mb-8">
            {[
              {
                type: 'MaPrimeRénov\' — selon couleur du ménage',
                detail: 'L\'aide varie selon les revenus du ménage (4 catégories : bleu, jaune, violet, rose). Pour l\'isolation des murs (ITI) : jusqu\'à 75 €/m² pour les ménages très modestes (bleu), 40 €/m² pour les ménages modestes (jaune), 20 €/m² pour les classes moyennes (violet). Les ménages aisés (rose) ne sont plus éligibles à MaPrimeRénov\' geste par geste depuis 2024.',
                montant: 'Jusqu\'à 75 €/m²',
              },
              {
                type: 'CEE — Certificats d\'Économies d\'Énergie',
                detail: 'Les CEE permettent d\'obtenir une prime versée par les fournisseurs d\'énergie (EDF, Total Energies, Engie...) en échange de travaux d\'économies d\'énergie. Cumulables avec MaPrimeRénov\'. Pour l\'isolation des murs : 2 à 6 €/m² selon les offres. Démarche gratuite via des plateformes agréées ou directement auprès du fournisseur d\'énergie.',
                montant: '2 – 6 €/m²',
              },
              {
                type: 'TVA réduite à 5,5 %',
                detail: 'Tous les travaux d\'isolation thermique réalisés dans un logement achevé depuis plus de 2 ans bénéficient automatiquement du taux réduit de TVA à 5,5 % (au lieu de 10 % pour la rénovation classique et 20 % en standard). Cette réduction s\'applique sur les matériaux ET la main d\'œuvre. Elle s\'applique de plein droit, sans demande préalable.',
                montant: 'TVA 5,5 % auto',
              },
            ].map((el) => (
              <div key={el.type} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.type}</div>
                  <div className="text-[#B8960C] text-sm font-medium flex-shrink-0">{el.montant}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Tableau des prix */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Tableau des prix d&apos;isolation thermique à Paris : 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Prix moyens constatés en Île-de-France, fourniture et pose incluses, hors aides.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Travaux</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix unitaire</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Aide max (bleu)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    travaux: 'ITI murs extérieurs (laine de roche + BA13)',
                    prix: '60 – 120 €/m²',
                    aide: 'Jusqu\'à 75 €/m²',
                  },
                  {
                    travaux: 'Fenêtre double vitrage (PVC)',
                    prix: '400 – 650 €/unité',
                    aide: 'Jusqu\'à 100 €/fenêtre',
                  },
                  {
                    travaux: 'Fenêtre double vitrage (bois, imposé ABF)',
                    prix: '650 – 900 €/unité',
                    aide: 'Jusqu\'à 100 €/fenêtre',
                  },
                  {
                    travaux: 'Plancher bas sur cave (XPS)',
                    prix: '30 – 70 €/m²',
                    aide: 'Jusqu\'à 20 €/m²',
                  },
                  {
                    travaux: 'Isolation combles perdus (soufflage)',
                    prix: '20 – 40 €/m²',
                    aide: 'Jusqu\'à 25 €/m²',
                  },
                  {
                    travaux: 'Survitrage collé (sans changement de cadre)',
                    prix: '200 – 400 €/unité',
                    aide: 'Non éligible',
                  },
                ].map((row, i) => (
                  <tr key={row.travaux} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.travaux}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prix}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.aide}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Points de vigilance pour l&apos;isolation dans un appartement parisien
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Vérifier si l\'immeuble est en secteur ABF avant de commander des fenêtres',
                'Lire le règlement de copropriété : certains imposent une sous-couche acoustique sous le sol',
                'Ne pas isoler les murs sans traiter la ventilation (risque de moisissures)',
                'Faire réaliser un audit énergétique avant les travaux pour optimiser les aides',
                'Faire appel à une entreprise certifiée RGE (obligatoire pour MaPrimeRénov\')',
                'Déposer la demande de MaPrimeRénov\' avant le démarrage des travaux',
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
              { href: '/blog/isolation-phonique-paris', title: 'Isolation phonique Paris' },
              { href: '/blog/renovation-maison-ancienne-paris', title: 'Rénovation maison ancienne Paris' },
              { href: '/blog/isolation-combles-subvention-paris', title: 'Isolation combles Paris' },
              { href: '/blog/renovation-fenetre-paris', title: 'Rénovation fenêtre Paris' },
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
              { href: '/renovation-paris-15e', label: 'Paris 15e' },
              { href: '/renovation-paris-17e', label: 'Paris 17e' },
              { href: '/renovation-levallois-perret', label: 'Levallois' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly' },
              { href: '/renovation-courbevoie', label: 'Courbevoie' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne' },
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
          Améliorez le DPE de votre appartement parisien
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Artisan certifié RGE. Aide au montage MaPrimeRénov&apos;. Devis gratuit sous 48h.
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
