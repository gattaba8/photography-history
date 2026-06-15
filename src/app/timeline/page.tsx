'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { eras, timelineEvents } from '@/data/timeline'

export default function TimelinePage() {
  const [showFilters, setShowFilters] = useState(false)
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  const categories = [
    { key: 'invention', label: 'Inventions' },
    { key: 'technique', label: 'Techniques' },
    { key: 'camera', label: 'Appareils' },
    { key: 'movement', label: 'Mouvements' },
    { key: 'digital', label: 'Numérique' },
    { key: 'milestone', label: 'Jalons' },
  ]

  const filtered = activeFilter
    ? timelineEvents.filter((e) => e.category === activeFilter)
    : timelineEvents

  let globalIndex = 0

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-14">
        <div className="max-w-[1400px] mx-auto px-6 pt-10 pb-6 flex items-center justify-between">
          <h1 className="text-[15px] font-medium">Chronologie</h1>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="text-[13px] text-[#999] hover:text-[#1a1a1a] transition-colors"
          >
            {showFilters ? 'Masquer les filtres' : 'Afficher les filtres'}
          </button>
        </div>

        {showFilters && (
          <div className="max-w-[1400px] mx-auto px-6 pb-6 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveFilter(null)}
              className={`px-3 py-1.5 text-[12px] border transition-colors ${
                !activeFilter
                  ? 'bg-[#1a1a1a] text-white border-[#1a1a1a]'
                  : 'bg-white text-[#666] border-[#e5e5e5] hover:border-[#999]'
              }`}
            >
              Tous
            </button>
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`px-3 py-1.5 text-[12px] border transition-colors ${
                  activeFilter === cat.key
                    ? 'bg-[#1a1a1a] text-white border-[#1a1a1a]'
                    : 'bg-white text-[#666] border-[#e5e5e5] hover:border-[#999]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        <div className="border-t border-[#e5e5e5]" />

        <div className="max-w-[1400px] mx-auto px-6">
          {eras.map((era) => {
            const eraEvents = filtered.filter((e) => e.era === era.name)
            if (eraEvents.length === 0) return null

            return (
              <section key={era.id} id={era.id}>
                <div className="pt-16 pb-8">
                  <h2 className="text-[32px] md:text-[48px] font-[family-name:var(--font-heading)] font-normal tracking-tight">
                    {era.startYear}
                    {era.endYear !== era.startYear && `–${era.endYear}`}
                  </h2>
                  <p className="text-[13px] text-[#999] mt-1">{era.name}</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 pb-16 border-b border-[#e5e5e5]">
                  {eraEvents.map((event) => {
                    globalIndex++
                    const num = String(globalIndex).padStart(3, '0')
                    return (
                      <Link
                        key={event.id}
                        href={`/article/${event.id}`}
                        className="group"
                      >
                        <div className="relative aspect-square overflow-hidden bg-[#f5f5f5] mb-3">
                          <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            className="object-cover group-hover:opacity-85 transition-opacity duration-300"
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          />
                        </div>
                        <p className="text-[11px] text-[#bbb] tabular-nums mb-0.5">
                          {num} — {event.year}
                          {event.endYear ? `–${event.endYear}` : ''}
                        </p>
                        <p className="text-[13px] text-[#1a1a1a] leading-snug group-hover:text-[#666] transition-colors">
                          {event.title}
                        </p>
                      </Link>
                    )
                  })}
                </div>
              </section>
            )
          })}
        </div>

        <footer className="border-t border-[#e5e5e5] mt-0 py-8">
          <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[12px] text-[#999]">
              Musée de la Photographie — 1826 à aujourd&apos;hui
            </p>
            <div className="flex gap-6">
              <Link
                href="/"
                className="text-[12px] text-[#999] hover:text-[#1a1a1a]"
              >
                Introduction
              </Link>
              <Link
                href="/articles"
                className="text-[12px] text-[#999] hover:text-[#1a1a1a]"
              >
                Collection
              </Link>
              <Link
                href="/about"
                className="text-[12px] text-[#999] hover:text-[#1a1a1a]"
              >
                À Propos
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
