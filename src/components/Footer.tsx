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
  { href: '/renovation-paris-1er', label: 'Paris 1er' },
  { href: '/renovation-paris-2e', label: 'Paris 2e' },
  { href: '/renovation-paris-3e', label: 'Paris 3e' },
  { href: '/renovation-paris-4e', label: 'Paris 4e' },
  { href: '/renovation-paris-5e', label: 'Paris 5e' },
  { href: '/renovation-paris-6e', label: 'Paris 6e' },
  { href: '/renovation-paris-7e', label: 'Paris 7e' },
  { href: '/renovation-paris-8e', label: 'Paris 8e' },
  { href: '/renovation-paris-9e', label: 'Paris 9e' },
  { href: '/renovation-paris-10e', label: 'Paris 10e' },
  { href: '/renovation-paris-11e', label: 'Paris 11e' },
  { href: '/renovation-paris-12e', label: 'Paris 12e' },
  { href: '/renovation-paris-13e', label: 'Paris 13e' },
  { href: '/renovation-paris-14e', label: 'Paris 14e' },
  { href: '/renovation-paris-15e', label: 'Paris 15e' },
  { href: '/renovation-paris-16e', label: 'Paris 16e' },
  { href: '/renovation-paris-17e', label: 'Paris 17e' },
  { href: '/renovation-paris-18e', label: 'Paris 18e' },
  { href: '/renovation-paris-19e', label: 'Paris 19e' },
  { href: '/renovation-paris-20e', label: 'Paris 20e' },
]

const villes = [
  { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
  { href: '/renovation-levallois-perret', label: 'Levallois-Perret' },
  { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
  { href: '/renovation-issy-les-moulineaux', label: 'Issy-les-Moulineaux' },
  { href: '/renovation-saint-cloud', label: 'Saint-Cloud' },
  { href: '/renovation-courbevoie', label: 'Courbevoie' },
  { href: '/renovation-asnieres-sur-seine', label: 'Asnières-sur-Seine' },
  { href: '/renovation-suresnes', label: 'Suresnes' },
  { href: '/renovation-puteaux', label: 'Puteaux' },
  { href: '/renovation-nanterre', label: 'Nanterre' },
  { href: '/renovation-rueil-malmaison', label: 'Rueil-Malmaison' },
  { href: '/renovation-meudon', label: 'Meudon' },
  { href: '/renovation-clamart', label: 'Clamart' },
  { href: '/renovation-montrouge', label: 'Montrouge' },
  { href: '/renovation-malakoff', label: 'Malakoff' },
  { href: '/renovation-chatillon', label: 'Châtillon' },
  { href: '/renovation-vanves', label: 'Vanves' },
  { href: '/renovation-clichy', label: 'Clichy' },
  { href: '/renovation-colombes', label: 'Colombes' },
  { href: '/renovation-bagneux', label: 'Bagneux' },
  { href: '/renovation-bobigny', label: 'Bobigny' },
  { href: '/renovation-aulnay-sous-bois', label: 'Aulnay-sous-Bois' },
  { href: '/renovation-tremblay-en-france', label: 'Tremblay-en-France' },
  { href: '/renovation-rosny-sous-bois', label: 'Rosny-sous-Bois' },
  { href: '/renovation-drancy', label: 'Drancy' },
  { href: '/renovation-bondy', label: 'Bondy' },
  { href: '/renovation-choisy-le-roi', label: 'Choisy-le-Roi' },
  { href: '/renovation-vitry-sur-seine', label: 'Vitry-sur-Seine' },
  { href: '/renovation-champigny-sur-marne', label: 'Champigny-sur-Marne' },
  { href: '/renovation-villeneuve-saint-georges', label: 'Villeneuve-Saint-Georges' },
  { href: '/renovation-antony', label: 'Antony' },
  { href: '/renovation-garches', label: 'Garches' },
  { href: '/renovation-sevres', label: 'Sèvres' },
  { href: '/renovation-vincennes', label: 'Vincennes' },
  { href: '/renovation-saint-mande', label: 'Saint-Mandé' },
  { href: '/renovation-fontenay-sous-bois', label: 'Fontenay-sous-Bois' },
  { href: '/renovation-nogent-sur-marne', label: 'Nogent-sur-Marne' },
  { href: '/renovation-saint-maur-des-fosses', label: 'Saint-Maur-des-Fossés' },
  { href: '/renovation-maisons-alfort', label: 'Maisons-Alfort' },
  { href: '/renovation-joinville-le-pont', label: 'Joinville-le-Pont' },
  { href: '/renovation-charenton-le-pont', label: 'Charenton-le-Pont' },
  { href: '/renovation-ivry-sur-seine', label: 'Ivry-sur-Seine' },
  { href: '/renovation-gentilly', label: 'Gentilly' },
  { href: '/renovation-versailles', label: 'Versailles' },
  { href: '/renovation-saint-germain-en-laye', label: 'Saint-Germain-en-Laye' },
  { href: '/renovation-le-vesinet', label: 'Le Vésinet' },
  { href: '/renovation-chatou', label: 'Chatou' },
  { href: '/renovation-saint-denis', label: 'Saint-Denis' },
  { href: '/renovation-montreuil', label: 'Montreuil' },
  { href: '/renovation-pantin', label: 'Pantin' },
  { href: '/renovation-aubervilliers', label: 'Aubervilliers' },
  { href: '/renovation-bagnolet', label: 'Bagnolet' },
  { href: '/renovation-massy', label: 'Massy' },
  { href: '/renovation-palaiseau', label: 'Palaiseau' },
  { href: '/renovation-argenteuil', label: 'Argenteuil' },
  { href: '/renovation-cergy', label: 'Cergy' },
  { href: '/renovation-epinay-sur-seine', label: 'Épinay-sur-Seine' },
  { href: '/renovation-noisy-le-grand', label: 'Noisy-le-Grand' },
  { href: '/renovation-chatenay-malabry', label: 'Châtenay-Malabry' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="font-display text-2xl font-bold text-white mb-1">
              ESPACE DESIGN
            </div>
            <div className="text-xs text-[#D4AF37] tracking-widest uppercase mb-4">
              Rénovation & Décoration
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
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

          {/* Navigation + Services */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2 text-sm mb-6">
              {[
                { href: '/', label: 'Accueil' },
                { href: '/services', label: 'Services' },
                { href: '/realisations', label: 'Réalisations' },
                { href: '/renovation-appartement-paris', label: 'Rénovation Paris' },
                { href: '/renovation-hauts-de-seine', label: 'Hauts-de-Seine (92)' },
                { href: '/renovation-val-de-marne', label: 'Val-de-Marne (94)' },
                { href: '/renovation-seine-saint-denis', label: 'Seine-Saint-Denis (93)' },
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

            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2 text-sm">
              {services.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-[#D4AF37] transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Paris 1er–10e */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Paris 1er–10e</h3>
            <ul className="space-y-2 text-sm">
              {arrondissements.slice(0, 10).map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-[#D4AF37] transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Paris 11e–20e */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Paris 11e–20e</h3>
            <ul className="space-y-2 text-sm">
              {arrondissements.slice(10).map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-[#D4AF37] transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Île-de-France */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Île-de-France</h3>
            <ul className="space-y-2 text-sm">
              {villes.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-[#D4AF37] transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

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
