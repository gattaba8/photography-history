import { Camera } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-warm-800/30 bg-warm-950">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Camera className="w-5 h-5 text-amber-500" />
              <span className="font-heading text-lg text-warm-100">
                Histoire de la Photographie
              </span>
            </div>
            <p className="text-warm-500 text-sm leading-relaxed">
              Un musée virtuel dédié à l&apos;exploration de deux siècles
              d&apos;innovation photographique, de la camera obscura à
              l&apos;intelligence artificielle.
            </p>
          </div>

          <div>
            <h4 className="text-warm-200 font-medium mb-4 tracking-wider uppercase text-sm">
              Navigation
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-warm-500 hover:text-amber-500 text-sm transition-colors"
              >
                Accueil
              </Link>
              <Link
                href="/timeline"
                className="text-warm-500 hover:text-amber-500 text-sm transition-colors"
              >
                Chronologie
              </Link>
              <Link
                href="/articles"
                className="text-warm-500 hover:text-amber-500 text-sm transition-colors"
              >
                Articles
              </Link>
              <Link
                href="/about"
                className="text-warm-500 hover:text-amber-500 text-sm transition-colors"
              >
                À Propos
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-warm-200 font-medium mb-4 tracking-wider uppercase text-sm">
              Époques
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                href="/timeline#pionniers"
                className="text-warm-500 hover:text-amber-500 text-sm transition-colors"
              >
                Les Pionniers (1826–1860)
              </Link>
              <Link
                href="/timeline#collodion"
                className="text-warm-500 hover:text-amber-500 text-sm transition-colors"
              >
                L&apos;Âge du Collodion (1851–1880)
              </Link>
              <Link
                href="/timeline#democratisation"
                className="text-warm-500 hover:text-amber-500 text-sm transition-colors"
              >
                La Démocratisation (1880–1920)
              </Link>
              <Link
                href="/timeline#age-dor"
                className="text-warm-500 hover:text-amber-500 text-sm transition-colors"
              >
                L&apos;Âge d&apos;Or (1920–1960)
              </Link>
              <Link
                href="/timeline#revolution-slr"
                className="text-warm-500 hover:text-amber-500 text-sm transition-colors"
              >
                Révolution SLR (1960–1990)
              </Link>
              <Link
                href="/timeline#numerique"
                className="text-warm-500 hover:text-amber-500 text-sm transition-colors"
              >
                L&apos;Ère Numérique (1990–2010)
              </Link>
              <Link
                href="/timeline#smartphone"
                className="text-warm-500 hover:text-amber-500 text-sm transition-colors"
              >
                L&apos;Ère du Smartphone (2010–2026)
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-warm-800/30 mt-12 pt-8 text-center">
          <p className="text-warm-600 text-xs">
            © {new Date().getFullYear()} Histoire de la Photographie — Musée
            Virtuel. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
