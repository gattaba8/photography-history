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
    (e: React.MouseEvent<HTMLAnchorElement>, eventId: string, imageSrc: string) => {
      e.preventDefault()

      const imgEl = e.currentTarget.querySelector('img')
      if (!imgEl || !overlayRef.current) {
        router.push(`/item/${eventId}`)
        return
      }

      const rect = imgEl.getBoundingClientRect()
      const overlay = overlayRef.current

      // Target: top-left area of the page (where the item image will be)
      const targetX = 0
      const targetY = 60 // nav height
      const targetW = Math.min(window.innerWidth * 0.5, 600)
      const targetH = targetW

      // Create the flying image
      overlay.innerHTML = ''
      const clone = document.createElement('div')
      clone.style.cssText = `
        position: fixed;
        left: ${rect.left}px;
        top: ${rect.top}px;
        width: ${rect.width}px;
        height: ${rect.height}px;
        background-image: url(${imageSrc});
        background-size: cover;
        background-position: center;
        z-index: 100;
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        border-radius: 0px;
      `
      overlay.appendChild(clone)

      // White backdrop that fades in
      const backdrop = document.createElement('div')
      backdrop.style.cssText = `
        position: fixed;
        inset: 0;
        background: white;
        z-index: 99;
        opacity: 0;
        transition: opacity 0.4s ease;
      `
      overlay.appendChild(backdrop)

      // Trigger animation on next frame
      requestAnimationFrame(() => {
        backdrop.style.opacity = '1'
        clone.style.left = `${targetX}px`
        clone.style.top = `${targetY}px`
        clone.style.width = `${targetW}px`
        clone.style.height = `${targetH}px`
      })

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

      {/* Overlay container for the flying image animation */}
      <div ref={overlayRef} />

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
                        onClick={(e) => handleItemClick(e, event.id, event.image)}
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
