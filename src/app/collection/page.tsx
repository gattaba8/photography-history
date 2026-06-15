'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import { timelineEvents, eras } from '@/data/timeline'

export default function CollectionPage() {
  const [showFilters, setShowFilters] = useState(false)
  const [activeEra, setActiveEra] = useState<string | null>(null)

  const filtered = activeEra
    ? timelineEvents.filter((e) => e.era === activeEra)
    : timelineEvents

  return (
    <main className="min-h-screen bg-white">
      <Navigation currentView="collection" />

      <div className="pt-14">
        <div className="max-w-[1400px] mx-auto px-6 py-10">
          {/* Header row */}
          <div className="flex items-center justify-between mb-8">
            <h1
              className="text-[13px] uppercase tracking-[0.15em] text-[#1a1a1a]"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}
            >
              Collection
              <span className="ml-2 text-[#999]">{filtered.length}</span>
            </h1>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="text-[12px] tracking-wide text-[#999] hover:text-[#1a1a1a] transition-colors cursor-pointer"
            >
              {showFilters ? 'Masquer les filtres' : 'Afficher les filtres'}
            </button>
          </div>

          {/* Filter buttons */}
          {showFilters && (
            <div className="flex flex-wrap gap-2 mb-8">
              <button
                onClick={() => setActiveEra(null)}
                className={`px-3 py-1.5 rounded-full text-[11px] tracking-wide border transition-colors cursor-pointer ${
                  activeEra === null
                    ? 'border-[#1a1a1a] text-[#1a1a1a] bg-[#f5f5f5]'
                    : 'border-[#e5e5e5] text-[#999] hover:text-[#1a1a1a] hover:border-[#ccc]'
                }`}
              >
                Toutes
              </button>
              {eras.map((era) => (
                <button
                  key={era.id}
                  onClick={() => setActiveEra(era.id)}
                  className={`px-3 py-1.5 rounded-full text-[11px] tracking-wide border transition-colors cursor-pointer ${
                    activeEra === era.id
                      ? 'border-[#1a1a1a] text-[#1a1a1a] bg-[#f5f5f5]'
                      : 'border-[#e5e5e5] text-[#999] hover:text-[#1a1a1a] hover:border-[#ccc]'
                  }`}
                >
                  {era.name}
                </button>
              ))}
            </div>
          )}

          {/* Dense image grid */}
          <div
            className="grid gap-1"
            style={{
              gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
            }}
          >
            {filtered.map((event) => (
              <Link
                key={event.id}
                href={`/item/${event.id}`}
                className="relative aspect-square overflow-hidden bg-[#f5f5f5] hover:opacity-80 transition-opacity duration-200"
              >
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
