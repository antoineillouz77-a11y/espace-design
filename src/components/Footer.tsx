import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

const services = [
  { href: '/renovation-salle-de-bain-paris', label: 'Salle de bain' },
  { href: '/renovation-cuisine-paris', label: 'Cuisine' },
  { href: '/peinture-paris', label: 'Peinture' },
  { href: '/parquet-paris', label: 'Parquet' },
  { href: '/carrelage-paris', label: 'Carrelage' },
  { href: '/electricite-paris', label: 'Électricité' },
  { href: '/plomberie-paris', label: 'Plomberie' },
  { href: '/menuiserie-paris', label: 'Menuiserie' },
  { href: '/isolation-paris', label: 'Isolation' },
  { href: '/platrererie-paris', label: 'Plâtrerie' },
  { href: '/decoration-interieure-paris', label: 'Décoration' },
  { href: '/amenagement-interieur-paris', label: 'Aménagement' },
  { href: '/renovation-studio-paris', label: 'Studio' },
  { href: '/renovation-maison-paris', label: 'Maison IDF' },
  { href: '/renovation-appartement-haussmannien-paris', label: 'Haussmannien' },
]

const arrondissements = [
  { href: '/renovation-paris-1er', label: '1er' },
  { href: '/renovation-paris-2e', label: '2e' },
  { href: '/renovation-paris-3e', label: '3e' },
  { href: '/renovation-paris-4e', label: '4e' },
  { href: '/renovation-paris-5e', label: '5e' },
  { href: '/renovation-paris-6e', label: '6e' },
  { href: '/renovation-paris-7e', label: '7e' },
  { href: '/renovation-paris-8e', label: '8e' },
  { href: '/renovation-paris-9e', label: '9e' },
  { href: '/renovation-paris-10e', label: '10e' },
  { href: '/renovation-paris-11e', label: '11e' },
  { href: '/renovation-paris-12e', label: '12e' },
  { href: '/renovation-paris-13e', label: '13e' },
  { href: '/renovation-paris-14e', label: '14e' },
  { href: '/renovation-paris-15e', label: '15e' },
  { href: '/renovation-paris-16e', label: '16e' },
  { href: '/renovation-paris-17e', label: '17e' },
  { href: '/renovation-paris-18e', label: '18e' },
  { href: '/renovation-paris-19e', label: '19e' },
  { href: '/renovation-paris-20e', label: '20e' },
]

const departements = [
  {
    href: '/renovation-hauts-de-seine',
    num: '92',
    label: 'Hauts-de-Seine',
    villes: ['Neuilly-sur-Seine', 'Levallois-Perret', 'Boulogne-Billancourt', 'Issy-les-Moulineaux', 'Courbevoie', 'Nanterre'],
  },
  {
    href: '/renovation-seine-saint-denis',
    num: '93',
    label: 'Seine-Saint-Denis',
    villes: ['Saint-Denis', 'Montreuil', 'Aubervilliers', 'Pantin', 'Drancy', 'Aulnay-sous-Bois'],
  },
  {
    href: '/renovation-val-de-marne',
    num: '94',
    label: 'Val-de-Marne',
    villes: ['Vincennes', 'Champigny-sur-Marne', 'Vitry-sur-Seine', 'Ivry-sur-Seine', 'Créteil'],
  },
  {
    href: '/renovation-essonne',
    num: '91',
    label: 'Essonne',
    villes: ['Massy', 'Palaiseau', 'Évry', 'Corbeil-Essonnes', 'Antony'],
  },
  {
    href: '/renovation-yvelines',
    num: '78',
    label: 'Yvelines',
    villes: ['Versailles', 'Saint-Germain-en-Laye', 'Chatou', 'Le Vésinet', 'Poissy'],
  },
  {
    href: '/renovation-val-d-oise',
    num: '95',
    label: "Val-d'Oise",
    villes: ['Cergy', 'Argenteuil', 'Épinay-sur-Seine', 'Sarcelles'],
  },
  {
    href: '/renovation-seine-et-marne',
    num: '77',
    label: 'Seine-et-Marne',
    villes: ['Meaux', 'Chelles', 'Noisy-le-Grand', 'Lagny-sur-Marne'],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">

        {/* Grille principale — 4 colonnes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Colonne 1 — Brand + Contact */}
          <div>
            <div className="font-display text-2xl font-bold text-white mb-1">ESPACE DESIGN</div>
            <div className="text-xs text-[#D4AF37] tracking-widest uppercase mb-5">Rénovation & Décoration</div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Artisan rénovateur à Paris et en Île-de-France. Belles finitions, travail soigné.
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+33611783867" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
                  <Phone size={14} />
                  06 11 78 38 67
                </a>
              </li>
              <li>
                <a href="mailto:espacedesign92@gmail.com" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
                  <Mail size={14} />
                  espacedesign92@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span>Paris & Île-de-France</span>
              </li>
            </ul>
          </div>

          {/* Colonne 2 — Navigation + Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest">Navigation</h3>
            <ul className="space-y-2 text-sm mb-8">
              {[
                { href: '/', label: 'Accueil' },
                { href: '/services', label: 'Services' },
                { href: '/realisations', label: 'Réalisations' },
                { href: '/tarifs', label: 'Tarifs' },
                { href: '/faq', label: 'FAQ' },
                { href: '/avis', label: 'Avis clients' },
                { href: '/blog', label: 'Blog' },
                { href: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-[#D4AF37] transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>

            <h3 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest">Nos prestations</h3>
            <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm">
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors text-xs leading-snug"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Colonne 3 — Paris (tous arrondissements) */}
          <div>
            <h3 className="text-white font-semibold mb-1 text-xs uppercase tracking-widest">Paris</h3>
            <p className="text-gray-500 text-xs mb-4">Tous les arrondissements</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {arrondissements.map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors text-xs"
                >
                  Paris {a.label}
                </Link>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-800">
              <h4 className="text-gray-500 text-xs uppercase tracking-widest mb-3">Types de biens</h4>
              <div className="space-y-1.5 text-xs">
                <Link href="/renovation-appartement-paris" className="block text-gray-400 hover:text-[#D4AF37] transition-colors">Appartement Paris</Link>
                <Link href="/renovation-appartement-haussmannien-paris" className="block text-gray-400 hover:text-[#D4AF37] transition-colors">Haussmannien</Link>
                <Link href="/renovation-studio-paris" className="block text-gray-400 hover:text-[#D4AF37] transition-colors">Studio</Link>
                <Link href="/renovation-maison-paris" className="block text-gray-400 hover:text-[#D4AF37] transition-colors">Maison IDF</Link>
              </div>
            </div>
          </div>

          {/* Colonne 4 — Départements Île-de-France */}
          <div>
            <h3 className="text-white font-semibold mb-1 text-xs uppercase tracking-widest">Île-de-France</h3>
            <p className="text-gray-500 text-xs mb-4">Par département</p>
            <div className="space-y-5">
              {departements.map((d) => (
                <div key={d.href}>
                  <Link href={d.href} className="flex items-center gap-2 group">
                    <span className="text-[10px] font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-1.5 py-0.5 rounded">
                      {d.num}
                    </span>
                    <span className="text-white text-xs font-medium group-hover:text-[#D4AF37] transition-colors">
                      {d.label}
                    </span>
                  </Link>
                  <div className="mt-1 ml-7 flex flex-wrap gap-x-2 gap-y-0.5">
                    {d.villes.map((v) => (
                      <span key={v} className="text-gray-600 text-[10px]">{v}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-600">
          <span>© {new Date().getFullYear()} Espace Design — SIRET 904 728 268 00015</span>
          <div className="flex gap-4 items-center">
            <Link href="/mentions-legales" className="hover:text-[#D4AF37] transition-colors">Mentions légales</Link>
            <span>·</span>
            <span>Rénovation & Décoration Intérieure · Paris & Île-de-France</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
