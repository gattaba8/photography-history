'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import { timelineEvents, eras } from '@/data/timeline'

export default function Home() {
  const [hoveredEra, setHoveredEra] = useState<string | null>(null)
  const heroEvent = timelineEvents[0]

  return (
    <main className="min-h-screen bg-white">
      <Navigation currentView={null} />

      <div className="pt-14 flex flex-col items-center justify-center min-h-screen px-6">
        <div className="flex flex-col items-center max-w-[900px] w-full">
          {/* Site title */}
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
            Mus&eacute;e de la Photographie
          </h1>

          {/* Hero image */}
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

          {/* Era chips */}
          <div className="flex flex-wrap justify-center gap-3">
            {eras.map((era) => (
              <Link
                key={era.id}
                href={`/timeline#${era.id}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#e5e5e5] text-[12px] tracking-wide text-[#666] hover:text-[#1a1a1a] hover:border-[#ccc] transition-all duration-200"
                onMouseEnter={() => setHoveredEra(era.id)}
                onMouseLeave={() => setHoveredEra(null)}
              >
                <span
                  className="w-[10px] h-[10px] rounded-full border-2 transition-colors duration-200 flex-shrink-0"
                  style={{
                    borderColor: hoveredEra === era.id ? '#e67e22' : '#ccc',
                    backgroundColor: hoveredEra === era.id ? '#e67e22' : 'transparent',
                  }}
                />
                {era.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
