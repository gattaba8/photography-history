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

      // Shutter container
      const shutter = document.createElement('div')
      shutter.style.cssText = 'position:fixed;inset:0;z-index:9999;overflow:hidden;'
      overlay.appendChild(shutter)

      // 6 blades closing like a camera iris
      const bladeCount = 6
      for (let i = 0; i < bladeCount; i++) {
        const blade = document.createElement('div')
        const angle = (360 / bladeCount) * i
        blade.style.cssText = `
          position:absolute;
          left:50%; top:50%;
          width:200vmax; height:200vmax;
          background:#1a1a1a;
          transform-origin: center center;
          transform: translate(-50%,-50%) rotate(${angle}deg) translateY(-100%);
          transition: transform 0.5s cubic-bezier(0.7, 0, 0.3, 1);
        `
        shutter.appendChild(blade)

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            blade.style.transform = `translate(-50%,-50%) rotate(${angle}deg) translateY(-35%)`
          })
        })
      }

      setTimeout(() => {
        router.push(`/item/${eventId}`)
      }, 500)
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
