import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-14 flex items-center justify-center min-h-[80vh]">
        <div className="text-center px-6">
          <p className="text-[11px] text-[#bbb] mb-4">404</p>
          <h1 className="text-[28px] font-[family-name:var(--font-heading)] font-normal mb-4">
            Page Introuvable
          </h1>
          <p className="text-[14px] text-[#999] mb-8">
            Cette page n&apos;existe pas ou a été déplacée.
          </p>
          <Link
            href="/"
            className="text-[13px] text-[#666] hover:text-[#1a1a1a] underline underline-offset-4 transition-colors"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </main>
  )
}
