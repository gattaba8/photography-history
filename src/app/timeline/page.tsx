'use client'

import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import { eras, timelineEvents } from '@/data/timeline'

export default function TimelinePage() {
  // Group events by era
  const eventsByEra = eras.map((era) => ({
    era,
    events: timelineEvents
      .filter((event) => event.era === era.id)
      .sort((a, b) => a.year - b.year),
  }))

  return (
    <main className="min-h-screen bg-white">
      <Navigation currentView="timeline" />

      {/* Scrollbar-hiding styles */}
      <style jsx global>{`
        .timeline-scroll::-webkit-scrollbar {
          display: none;
        }
        .timeline-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="pt-[100px] pb-12 px-6">
        {/* Horizontal scrolling container */}
        <div className="timeline-scroll flex overflow-x-auto" style={{ scrollBehavior: 'smooth' }}>
          {eventsByEra.map(({ era, events }, eraIndex) => {
            // Calculate column width based on number of items
            // At ~90px per item with ~16px gap, up to 3 items per row
            const itemsPerRow = 3
            const cols = Math.min(events.length, itemsPerRow)
            const minWidth = Math.max(280, cols * (90 + 16) + 60)

            return (
              <div
                key={era.id}
                className="flex-shrink-0"
                style={{
                  minWidth: `${minWidth}px`,
                  borderLeft: eraIndex > 0 ? '1px solid #e5e5e5' : 'none',
                }}
              >
                <div className="px-6 pt-2 pb-8">
                  {/* Year header */}
                  <div className="mb-8">
                    <h2
                      className="font-[family-name:var(--font-heading)] text-[42px] font-bold text-[#1a1a1a] leading-none tabular-nums"
                    >
                      {era.startYear}
                    </h2>
                    <p className="text-[11px] text-[#999] mt-1 tracking-wide">
                      {era.name}
                    </p>
                  </div>

                  {/* Items grid — flex-wrap for 2-3 items per row */}
                  <div className="flex flex-wrap gap-4">
                    {events.map((event) => (
                      <Link
                        key={event.id}
                        href={`/item/${event.id}`}
                        className="block group"
                      >
                        <div className="relative w-[90px] h-[90px] overflow-hidden bg-[#f5f5f5]">
                          <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            className="object-cover group-hover:opacity-75 transition-opacity duration-200"
                            sizes="90px"
                          />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}

          {/* Trailing whitespace */}
          <div className="flex-shrink-0 w-24" />
        </div>
      </div>
    </main>
  )
}
