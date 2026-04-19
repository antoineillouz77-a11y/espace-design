import Link from 'next/link'
import Image from 'next/image'
import { Phone, Star, CheckCircle, ArrowRight, MapPin } from 'lucide-react'

const services = [
  {
    title: 'Rénovation complète',
    desc: 'Transformation totale de votre appartement ou maison : gros œuvre, second œuvre, finitions. Un seul interlocuteur, du début à la fin.',
    icon: '🏗️',
  },
  {
    title: 'Décoration intérieure',
    desc: 'Conception de votre espace selon vos goûts et votre budget. Agencement, matériaux, couleurs — un rendu professionnel et personnalisé.',
    icon: '🎨',
  },
  {
    title: 'Finitions haut de gamme',
    desc: 'Notre spécialité : les finitions soignées qui font la différence. Peinture, revêtements, pose de carrelage, menuiserie — le détail compte.',
    icon: '✨',
  },
]

const atouts = [
  'Devis gratuit et détaillé sous 48h',
  'Artisan qualifié, 15+ ans d\'expérience',
  'Belles finitions garanties',
  'Respect des délais',
  'Assurance décennale',
  'Paris & toute l\'Île-de-France',
]

const temoignages = [
  {
    nom: 'Sophie M.',
    quartier: 'Paris 15e',
    note: 5,
    texte: 'Patrick a rénové notre salon et notre cuisine. Un travail exceptionnel, des finitions parfaites. Je recommande sans hésiter.',
  },
  {
    nom: 'Marc & Isabelle T.',
    quartier: 'Boulogne-Billancourt',
    note: 5,
    texte: 'Rénovation complète de notre appartement en 3 semaines. Sérieux, propre, ponctuel. Le résultat dépasse nos attentes.',
  },
  {
    nom: 'Karim B.',
    quartier: 'Paris 17e',
    note: 5,
    texte: 'Excellent artisan. À l\'écoute, de bon conseil, et un sens du détail rare. Les finitions sont vraiment au top.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#1C1C1C]" aria-hidden="true" />
        <Image
          src="/images/hero.jpg"
          alt="Rénovation salon Paris — Espace Design"
          fill
          className="object-cover object-center opacity-45"
          priority
          sizes="100vw"
        />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-24">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-medium tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            <MapPin size={12} />
            Paris & Île-de-France
          </div>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Votre intérieur,{' '}
            <span className="text-[#D4AF37]">réinventé.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Artisan rénovateur et décorateur intérieur à Paris. Des finitions
            haut de gamme, un travail soigné, un résultat qui vous ressemble.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+33611783867"
              className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-semibold text-base hover:bg-[#c9a030] transition-colors"
            >
              <Phone size={18} />
              06 11 78 38 67
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 border border-white/40 text-white px-8 py-4 rounded font-medium text-base hover:bg-white/10 transition-colors"
            >
              Demander un devis gratuit
              <ArrowRight size={16} />
            </Link>
          </div>
          <p className="text-gray-500 text-sm mt-6">Réponse sous 24h — Devis gratuit</p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-gray-500" />
        </div>
      </section>

      {/* Atouts rapides */}
      <section className="bg-[#D4AF37] py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {['Devis gratuit 48h', 'Assurance décennale', '15+ ans d\'expérience', 'Paris & Île-de-France'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-[#1C1C1C] text-sm font-medium py-1">
                <CheckCircle size={14} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-28 bg-[#FAFAF8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#B8960C] text-sm font-medium uppercase tracking-widest mb-3">Nos prestations</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1C1C1C]">
              Ce que nous faisons
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-lg p-8 border border-gray-100 hover:border-[#D4AF37]/40 hover:shadow-md transition-all"
              >
                <div className="text-4xl mb-5">{s.icon}</div>
                <h3 className="font-display text-xl font-bold text-[#1C1C1C] mb-3">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#B8960C] hover:text-[#1C1C1C] transition-colors"
            >
              Voir tous nos services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Réalisations preview */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#B8960C] text-sm font-medium uppercase tracking-widest mb-3">Portfolio</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1C1C1C]">
              Nos réalisations
            </h2>
            <p className="text-gray-500 mt-3 text-sm">Chaque chantier est unique — voici quelques exemples de notre travail.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {[
              { src: '/images/realisations/01-salon-parisien-bibliotheque.jpg', label: 'Salon & bibliothèque', lieu: 'Paris 7e', tall: true },
              { src: '/images/realisations/04-terrasse-vue-paris.jpg', label: 'Terrasse vue Paris', lieu: 'Paris 9e', tall: false },
              { src: '/images/realisations/09-chambre-tete-lit.jpg', label: 'Chambre sur-mesure', lieu: 'Paris 11e', tall: false },
              { src: '/images/realisations/07-open-space-cuisine.jpg', label: 'Open space cuisine', lieu: 'Paris 12e', tall: false },
              { src: '/images/realisations/12-salle-bain.jpg', label: 'Salle de bain', lieu: 'Paris 10e', tall: false },
              { src: '/images/realisations/10-appartement-globe.jpg', label: 'Rénovation complète', lieu: 'Paris 3e', tall: false },
            ].map((item, i) => (
              <div
                key={i}
                className={`${item.tall ? 'h-72' : 'h-52'} rounded-lg overflow-hidden relative group cursor-pointer shadow-sm`}
              >
                <Image
                  src={item.src}
                  alt={`${item.label} — ${item.lieu}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-white text-xs font-semibold">{item.label}</div>
                  <div className="text-[#D4AF37] text-xs">{item.lieu}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/realisations"
              className="inline-flex items-center gap-2 bg-[#1C1C1C] text-white px-6 py-3 rounded text-sm font-medium hover:bg-[#B8960C] transition-colors"
            >
              Voir toutes les réalisations <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Atouts */}
      <section className="py-20 sm:py-28 bg-[#F2F2EE]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#B8960C] text-sm font-medium uppercase tracking-widest mb-3">Pourquoi nous choisir</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1C1C1C] mb-6">
                L&apos;artisanat au service de vos rêves
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Espace Design, c&apos;est plus de 15 ans d&apos;expérience dans la rénovation et la
                décoration intérieure à Paris et en Île-de-France. Notre signature : des finitions
                irréprochables, un suivi personnalisé, et un respect total de votre espace et de votre budget.
              </p>
              <ul className="space-y-3">
                {atouts.map((a) => (
                  <li key={a} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-[#B8960C] flex-shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href="tel:+33611783867"
                  className="inline-flex items-center gap-2 bg-[#1C1C1C] text-white px-6 py-3 rounded text-sm font-medium hover:bg-[#B8960C] transition-colors"
                >
                  <Phone size={15} />
                  Appeler Patrick
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '15+', label: 'années d\'expérience' },
                { value: '200+', label: 'chantiers réalisés' },
                { value: '40+', label: 'avis clients 5★' },
                { value: '100%', label: 'clients satisfaits' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="font-display text-4xl font-bold text-[#B8960C] mb-2">{stat.value}</div>
                  <div className="text-xs text-gray-500 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#B8960C] text-sm font-medium uppercase tracking-widest mb-3">Avis clients</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1C1C1C]">
              Ils nous font confiance
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {temoignages.map((t, i) => (
              <div key={i} className="bg-[#FAFAF8] rounded-lg p-6 border border-gray-100">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.note }).map((_, j) => (
                    <Star key={j} size={14} className="fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">&ldquo;{t.texte}&rdquo;</p>
                <div>
                  <div className="font-semibold text-sm text-[#1C1C1C]">{t.nom}</div>
                  <div className="text-xs text-gray-400">{t.quartier}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone intervention */}
      <section className="py-14 bg-[#1C1C1C]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-2 text-[#D4AF37] mb-4">
            <MapPin size={16} />
            <span className="text-sm font-medium uppercase tracking-widest">Zone d&apos;intervention</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
            Paris & toute l&apos;Île-de-France
          </h2>
          <p className="text-gray-400 text-sm mb-6">
            Nous intervenons dans tous les arrondissements de Paris ainsi que dans les communes
            environnantes : Boulogne, Levallois, Neuilly, Vincennes, Saint-Denis, et toute la couronne parisienne.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-6 py-3 rounded text-sm font-semibold hover:bg-[#c9a030] transition-colors"
          >
            Demander un devis gratuit <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 sm:py-28 bg-[#FAFAF8]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1C1C1C] mb-4">
            Votre projet commence ici
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Décrivez-nous votre projet — rénovation, décoration, aménagement — et recevez un devis
            gratuit et détaillé sous 48h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-[#1C1C1C] text-white px-8 py-4 rounded font-semibold hover:bg-[#B8960C] transition-colors"
            >
              Devis gratuit <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+33611783867"
              className="flex items-center justify-center gap-2 border border-[#1C1C1C] text-[#1C1C1C] px-8 py-4 rounded font-medium hover:bg-[#1C1C1C] hover:text-white transition-colors"
            >
              <Phone size={16} />
              06 11 78 38 67
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
