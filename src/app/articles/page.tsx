'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { timelineEvents, eras } from '@/data/timeline'

export default function ArticlesPage() {
  const [selectedEra, setSelectedEra] = useState<string | null>(null)
  const [showFilters, setShowFilters] = useState(false)

  const filtered = selectedEra
    ? timelineEvents.filter((e) => e.era === selectedEra)
    : timelineEvents

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-14">
        <div className="max-w-[1400px] mx-auto px-6 pt-10 pb-6 flex items-center justify-between">
          <h1 className="text-[15px] font-medium">
            Collection ({filtered.length} articles)
          </h1>
          <div className="flex items-center gap-6">
            <Link
              href="/timeline"
              className="text-[13px] text-[#999] hover:text-[#1a1a1a] transition-colors"
            >
              Chronologie
            </Link>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="text-[13px] text-[#999] hover:text-[#1a1a1a] transition-colors"
            >
              {showFilters ? 'Masquer les filtres' : 'Filtrer par époque'}
            </button>
          </div>
        </div>

        {showFilters && (
          <div className="max-w-[1400px] mx-auto px-6 pb-6 flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedEra(null)}
              className={`px-3 py-1.5 text-[12px] border transition-colors ${
                !selectedEra
                  ? 'bg-[#1a1a1a] text-white border-[#1a1a1a]'
                  : 'bg-white text-[#666] border-[#e5e5e5] hover:border-[#999]'
              }`}
            >
              Toutes les époques
            </button>
            {eras.map((era) => (
              <button
                key={era.id}
                onClick={() => setSelectedEra(era.name)}
                className={`px-3 py-1.5 text-[12px] border transition-colors ${
                  selectedEra === era.name
                    ? 'bg-[#1a1a1a] text-white border-[#1a1a1a]'
                    : 'bg-white text-[#666] border-[#e5e5e5] hover:border-[#999]'
                }`}
              >
                {era.name}
              </button>
            ))}
          </div>
        )}

        <div className="border-t border-[#e5e5e5]" />

        <div className="max-w-[1400px] mx-auto px-6 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-10">
            {filtered.map((event, i) => (
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
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                </div>
                <p className="text-[11px] text-[#bbb] tabular-nums mb-0.5">
                  {String(i + 1).padStart(3, '0')} — {event.year}
                </p>
                <p className="text-[13px] text-[#1a1a1a] leading-snug group-hover:text-[#666] transition-colors">
                  {event.title}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <footer className="border-t border-[#e5e5e5] py-8">
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
                href="/timeline"
                className="text-[12px] text-[#999] hover:text-[#1a1a1a]"
              >
                Chronologie
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
