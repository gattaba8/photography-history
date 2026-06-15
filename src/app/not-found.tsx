import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <main className="bg-warm-950 min-h-screen">
      <Navigation />
      <section className="pt-40 pb-24 px-6 text-center min-h-[70vh] flex items-center justify-center">
        <div>
          <span className="text-amber-600 tracking-[0.3em] uppercase text-xs">
            Erreur 404
          </span>
          <h1 className="font-heading text-5xl md:text-7xl text-warm-100 mt-3 mb-6">
            Page Introuvable
          </h1>
          <p className="text-warm-400 max-w-md mx-auto mb-8">
            Cette page n&apos;existe pas ou a été déplacée. Retournez explorer
            l&apos;histoire de la photographie.
          </p>
          <Link
            href="/"
            className="px-8 py-4 bg-amber-600 hover:bg-amber-500 text-warm-950 font-medium tracking-wider uppercase text-sm transition-all duration-300 rounded inline-block"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}
