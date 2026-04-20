import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Isolation Combles Paris Subventions', item: 'https://espacedesignparis.fr/blog/isolation-combles-subvention-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Isolation Combles Paris : subventions MaPrimeRénov & prix 2025',
  description: 'Isoler ses combles à Paris avec MaPrimeRénov : montant des aides, travaux éligibles, artisan RGE. Guide et prix 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/isolation-combles-subvention-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le montant de MaPrimeRénov pour l\'isolation des combles à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le montant de MaPrimeRénov dépend de vos revenus. Pour l\'isolation des combles perdus (souflage) : ménages très modestes (profil bleu) : 75 % des coûts, plafonnés à 25 €/m² ; ménages modestes (jaune) : 50 %, plafonnés à 20 €/m² ; ménages intermédiaires (violet) : 25 %, plafonnés à 10 €/m² ; ménages aisés (rose) : 15 %. Le CEE (Certificat d\'Économie d\'Énergie) peut compléter l\'aide selon votre fournisseur d\'énergie. Cumulé, il n\'est pas rare d\'obtenir 60 à 80 % du montant total des travaux pris en charge pour les profils les plus modestes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Faut-il obligatoirement un artisan RGE pour bénéficier des aides à l\'isolation des combles ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, c\'est une condition sine qua non. Pour bénéficier de MaPrimeRénov et des CEE, le chantier doit être réalisé par un artisan certifié RGE (Reconnu Garant de l\'Environnement). La certification RGE garantit que l\'artisan a suivi une formation sur les travaux de rénovation énergétique et respecte les règles de l\'art. Espace Design est certifié RGE et peut vous accompagner dans le montage de votre dossier de subvention.',
      },
    },
    {
      '@type': 'Question',
      name: 'Isolation des combles perdus ou des rampants : quelle solution pour Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pour des combles perdus (plancher de combles accessible mais non aménagé), l\'isolation soufflée est la solution la plus rapide et économique : la laine minérale ou la ouate de cellulose est projetée sur le plancher existant. Pour des combles aménagés ou aménageables (rampants de toiture), on pose des panneaux rigides ou de la laine minérale entre les chevrons. À Paris, les combles d\'immeubles haussmanniens sont souvent des combles perdus accessibles par trappe — idéaux pour l\'isolation soufflée.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Isolation Combles Paris : subventions MaPrimeRénov & prix 2025 | Espace Design',
  description: 'Isoler ses combles à Paris avec MaPrimeRénov : montant des aides, travaux éligibles, artisan RGE. Guide et prix 2025.',
}

export default function ArticleIsolationCombles() {
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
            Isolation Combles Paris : subventions MaPrimeRénov & prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            L&apos;isolation des combles est le geste de rénovation énergétique le plus rentable : jusqu&apos;à 30 % des déperditions thermiques d&apos;un logement parisien passent par le toit. Avec MaPrimeRénov et les CEE, une grande partie des travaux peut être prise en charge. Guide complet 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — MaPrimeRénov */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              MaPrimeRénov : montants et profils de revenus
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              MaPrimeRénov est l&apos;aide principale de l&apos;État pour la rénovation énergétique des logements. Son montant dépend du profil de revenus du ménage, défini par couleur. Pour l&apos;isolation des combles, les taux de prise en charge sont particulièrement avantageux.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              La demande se fait obligatoirement avant le début des travaux sur le site france-renov.gouv.fr. Le logement doit être une résidence principale de plus de 15 ans.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Profil Bleu — ménages très modestes',
                  detail: 'Prise en charge jusqu\'à 75 % des travaux d\'isolation. Plafond : 25 €/m² pour les combles perdus. Pour une maison de 100 m² avec combles de 80 m², l\'aide peut atteindre 2 000 €. Revenu de référence fiscal à vérifier sur le simulateur MaPrimeRénov.',
                },
                {
                  enjeu: 'Profil Jaune — ménages modestes',
                  detail: 'Prise en charge jusqu\'à 50 % des travaux d\'isolation. Plafond : 20 €/m². Cumulable avec l\'éco-prêt à taux zéro (PTZ) qui finance la part restante sans intérêts.',
                },
                {
                  enjeu: 'Profil Violet — ménages intermédiaires',
                  detail: 'Prise en charge jusqu\'à 25 % des travaux. Plafond : 10 €/m². Cumulable avec les CEE et l\'éco-prêt à taux zéro.',
                },
                {
                  enjeu: 'Profil Rose — ménages aisés',
                  detail: 'Prise en charge à 15 % des travaux. Moins avantageuse, mais cumulable avec les CEE et la TVA réduite à 5,5 % applicable sur les travaux d\'isolation.',
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

      {/* Section 2 — CEE */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            CEE (Certificats d&apos;Économie d&apos;Énergie) : une aide complémentaire
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les CEE sont une aide distincte de MaPrimeRénov, versée par les fournisseurs d&apos;énergie (EDF, Engie, TotalEnergies, etc.) qui ont l&apos;obligation légale de financer des travaux d&apos;efficacité énergétique. Ces deux aides sont cumulables et peuvent couvrir ensemble une part très significative de la facture.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Fonctionnement des CEE',
                detail: 'Vous signez un devis avec un artisan RGE avant travaux. L\'artisan ou un mandataire (ex : Hellio, Sonergie) dépose le dossier CEE auprès d\'un fournisseur d\'énergie. La prime est versée après travaux sur justificatifs (facture + attestation sur l\'honneur).',
                cout: 'Cumulable MaPrimeRénov',
              },
              {
                titre: 'Montant des CEE isolation combles',
                detail: 'Pour l\'isolation des combles perdus (résistance thermique R supérieure ou égale à 7), la prime CEE atteint 1 à 4 €/m² selon l\'offre du fournisseur et la zone climatique. À Paris (zone H1c), les primes sont parmi les plus élevées.',
                cout: '1 – 4 €/m²',
              },
              {
                titre: 'TVA réduite à 5,5 %',
                detail: 'Tous les travaux d\'isolation réalisés par un artisan qualifié bénéficient d\'une TVA à 5,5 % (au lieu de 10 % pour les travaux courants et 20 % pour le neuf). Applicable automatiquement sur la facture de l\'artisan RGE.',
                cout: 'Taux réduit automatique',
              },
              {
                titre: 'Éco-prêt à taux zéro (éco-PTZ)',
                detail: 'Prêt bancaire sans intérêts pour financer la part des travaux non couverte par les aides. Montant jusqu\'à 50 000 € pour un bouquet de travaux. Accessible même aux profils violets et roses. Remboursable sur 15 à 20 ans.',
                cout: 'Jusqu\'à 50 000 €',
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

      {/* Section 3 — Types isolation */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Isolation soufflée vs rampants : quelle technique choisir ?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La technique d&apos;isolation dépend de la configuration des combles. Les combles perdus (non aménagés) se prêtent à l&apos;isolation soufflée, rapide et économique. Les combles aménageables ou aménagés nécessitent une isolation des rampants (pentes de toiture).
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Isolation soufflée des combles perdus',
                prix: '20 – 35 €/m²',
                detail: 'Technique de loin la plus répandue à Paris. La laine minérale (laine de verre ou de roche) ou la ouate de cellulose est projetée mécaniquement sur le plancher des combles à travers une gaine. Résistance thermique cible : R supérieur ou égal à 7 m².K/W (épaisseur 30 à 40 cm). Durée du chantier : 1 journée pour 80 m².',
              },
              {
                type: 'Isolation des rampants de toiture',
                prix: '45 – 90 €/m²',
                detail: 'Pour les combles aménagés, l\'isolation est posée entre ou sous les chevrons. Deux solutions : laine minérale entre chevrons + complément sous chevrons (en plusieurs couches), ou panneaux rigides (polyuréthane, polystyrène extrudé) sous les chevrons. Résistance cible : R supérieur ou égal à 6.',
              },
              {
                type: 'Sarking (isolation en toiture-terrasse)',
                prix: '80 – 150 €/m²',
                detail: 'Pose de panneaux isolants rigides sur la charpente (au-dessus des chevrons), sous la couverture. Technique préférée lors d\'une réfection de toiture. Très performante thermiquement et élimine les ponts thermiques au niveau des chevrons.',
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

      {/* Section 4 — Matériaux */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Matériaux éligibles aux aides : laine minérale et ouate de cellulose
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Pour être éligible à MaPrimeRénov et aux CEE, l&apos;isolant doit respecter des performances thermiques minimales. Tous les matériaux ne se valent pas : voici les principales options et leurs caractéristiques.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Laine de verre soufflée',
                prix: '20 – 30 €/m²',
                detail: 'Matériau le plus courant pour l\'isolation soufflée. Légère, imputrescible, résistante au feu (classée A1). Conductivité thermique : 0,032 à 0,040 W/m.K. Éligible MaPrimeRénov et CEE. Faible impact sur la charpente (légèreté). Bonne absorption acoustique en bonus.',
              },
              {
                type: 'Ouate de cellulose soufflée',
                prix: '25 – 40 €/m²',
                detail: 'Isolant biosourcé fabriqué à partir de papier recyclé. Excellentes performances thermiques (0,038 W/m.K) et phoniques. Confort d\'été supérieur à la laine minérale grâce à son inertie. Éligible MaPrimeRénov et CEE. Sensible à l\'humidité si mal mise en oeuvre : vérifier la présence d\'un pare-vapeur.',
              },
              {
                type: 'Laine de roche en panneaux (rampants)',
                prix: '45 – 70 €/m²',
                detail: 'Pour l\'isolation des rampants de toiture. Excellente résistance au feu et aux rongeurs. Conductivité thermique : 0,034 à 0,040 W/m.K. Pose en deux couches croisées pour éliminer les ponts thermiques au niveau des chevrons. Éligible MaPrimeRénov et CEE.',
              },
            ].map((el) => (
              <div key={el.type} className="bg-white rounded-lg p-5 border border-gray-100">
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

      {/* Section 5 — Prix avant/après aides */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix isolation combles à Paris : avant et après aides 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Exemple pour des combles perdus de 80 m² dans un appartement parisien (combles soufflés, laine de verre R7).
          </p>

          <div className="grid grid-cols-1 gap-3 mb-8">
            {[
              {
                niveau: 'Coût total travaux (avant aides)',
                prestations: 'Isolation soufflée 80 m², laine de verre R7, pose artisan RGE, TVA 5,5 %',
                prix: '2 400 – 3 200 €',
              },
              {
                niveau: 'Après MaPrimeRénov Bleu (75 %)',
                prestations: 'Reste à charge ménage très modeste',
                prix: '600 – 800 €',
              },
              {
                niveau: 'Après MaPrimeRénov Jaune (50 %)',
                prestations: 'Reste à charge ménage modeste',
                prix: '1 200 – 1 600 €',
              },
              {
                niveau: 'Après MaPrimeRénov Violet (25 %)',
                prestations: 'Reste à charge ménage intermédiaire (avant CEE)',
                prix: '1 800 – 2 400 €',
              },
            ].map((row) => (
              <div key={row.niveau} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <div className="font-medium text-[#1C1C1C] text-sm mb-1">{row.niveau}</div>
                  <div className="text-gray-600 text-xs font-light">{row.prestations}</div>
                </div>
                <div className="text-[#B8960C] font-medium text-sm flex-shrink-0">{row.prix}</div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Checklist avant de lancer votre chantier
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Vérifier son profil de revenus sur le simulateur MaPrimeRénov (france-renov.gouv.fr)',
                'Déposer la demande MaPrimeRénov AVANT de signer le devis artisan',
                'Choisir un artisan certifié RGE — condition obligatoire pour toutes les aides',
                'Demander un devis mentionnant explicitement la résistance thermique R de l\'isolant',
                'Demander le cumul avec les CEE au même artisan ou à un mandataire',
                'Ne pas oublier la TVA réduite à 5,5 % — elle doit apparaître sur la facture',
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
              { href: '/isolation-paris', title: 'Isolation Paris' },
              { href: '/blog/isolation-phonique-paris', title: 'Isolation phonique Paris' },
              { href: '/blog/renovation-appartement-copropriete-paris', title: 'Rénovation appartement en copropriété' },
              { href: '/blog/renovation-appartement-mise-en-location-paris', title: 'Rénovation avant location Paris' },
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
          Isolez vos combles avec les aides de l&apos;État
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Artisan RGE certifié. Montage dossier MaPrimeRénov inclus. Devis gratuit sous 48h.
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
