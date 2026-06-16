import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import { timelineEvents } from '@/data/timeline'

export default function Home() {
  const heroEvent = timelineEvents[0]

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-14 flex flex-col items-center justify-center min-h-screen px-6">
        <div className="flex flex-col items-center max-w-[900px] w-full">
          <h1
            className="text-center uppercase tracking-[0.25em] text-[#1a1a1a] mb-12"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: '0.25em',
            }}
          >
            Musée de la Photographie
          </h1>

          <div className="relative w-full max-w-[700px] h-[400px] bg-[#f5f5f5] mb-14">
            <Image
              src={heroEvent.image}
              alt={heroEvent.title}
              fill
              className="object-cover"
              priority
              sizes="700px"
            />
          </div>

          <Link
            href="/timeline"
            className="px-10 py-3 border border-[#1a1a1a] text-[13px] uppercase tracking-[0.2em] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors duration-200"
          >
            Entrer
          </Link>
        </div>
      </div>
    </main>
  )
}
