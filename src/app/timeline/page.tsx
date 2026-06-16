'use client'

import { useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import { eras, timelineEvents } from '@/data/timeline'

export default function TimelinePage() {
  const router = useRouter()
  const overlayRef = useRef<HTMLDivElement>(null)

  const eventsByEra = eras.map((era) => ({
    era,
    events: timelineEvents
      .filter((event) => event.era === era.id)
      .sort((a, b) => a.year - b.year),
  }))

  const handleItemClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, eventId: string) => {
      e.preventDefault()
      if (!overlayRef.current) {
        router.push(`/item/${eventId}`)
        return
      }

      const overlay = overlayRef.current
      overlay.innerHTML = ''
      overlay.style.pointerEvents = 'auto'

      const container = document.createElement('div')
      container.style.cssText = 'position:fixed;inset:0;z-index:9999;pointer-events:none;'
      overlay.appendChild(container)

      const top = document.createElement('div')
      top.style.cssText = `
        position:absolute; left:0; right:0; top:0; height:50%;
        background:#1a1a1a;
        transform: translateY(-100%);
        transition: transform 0.45s cubic-bezier(0.65, 0, 0.35, 1);
      `
      const bottom = document.createElement('div')
      bottom.style.cssText = `
        position:absolute; left:0; right:0; bottom:0; height:50%;
        background:#1a1a1a;
        transform: translateY(100%);
        transition: transform 0.45s cubic-bezier(0.65, 0, 0.35, 1);
      `
      container.appendChild(top)
      container.appendChild(bottom)

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          top.style.transform = 'translateY(0)'
          bottom.style.transform = 'translateY(0)'
        })
      })

      setTimeout(() => {
        router.push(`/item/${eventId}`)
      }, 450)
    },
    [router]
  )

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <style jsx global>{`
        .timeline-scroll::-webkit-scrollbar { display: none; }
        .timeline-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div ref={overlayRef} style={{ pointerEvents: 'none' }} />

      <div className="pt-[76px] pb-12 px-6">
        <div className="timeline-scroll flex overflow-x-auto" style={{ scrollBehavior: 'smooth' }}>
          {eventsByEra.map(({ era, events }, eraIndex) => {
            const itemsPerRow = 3
            const cols = Math.min(events.length, itemsPerRow)
            const minWidth = Math.max(280, cols * (90 + 16) + 60)

            return (
              <div
                key={era.id}
                id={era.id}
                className="flex-shrink-0"
                style={{
                  minWidth: `${minWidth}px`,
                  borderLeft: eraIndex > 0 ? '1px solid #e5e5e5' : 'none',
                }}
              >
                <div className="px-6 pt-2 pb-8">
                  <div className="mb-8">
                    <h2 className="font-[family-name:var(--font-heading)] text-[42px] font-bold text-[#1a1a1a] leading-none tabular-nums">
                      {era.startYear}
                    </h2>
                    <p className="text-[11px] text-[#999] mt-1 tracking-wide">
                      {era.name}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {events.map((event) => (
                      <a
                        key={event.id}
                        href={`/item/${event.id}`}
                        className="block group cursor-pointer"
                        onClick={(e) => handleItemClick(e, event.id)}
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
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
          <div className="flex-shrink-0 w-24" />
        </div>
      </div>
    </main>
  )
}
