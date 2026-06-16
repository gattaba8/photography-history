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

      const thumb = e.currentTarget.querySelector('img') as HTMLImageElement | null
      if (!thumb || !overlayRef.current) {
        router.push(`/item/${eventId}`)
        return
      }

      const rect = thumb.getBoundingClientRect()
      const src = thumb.src
      const overlay = overlayRef.current

      // Hide the original thumbnail
      thumb.style.opacity = '0'

      // Create elements
      overlay.innerHTML = ''
      overlay.style.pointerEvents = 'auto'

      // Backdrop — starts transparent
      const backdrop = document.createElement('div')
      backdrop.style.cssText = `
        position:fixed; inset:0; z-index:98;
        background:white; opacity:0;
        transition: opacity 0.45s ease;
      `
      overlay.appendChild(backdrop)

      // Flying image — starts at thumbnail position, persists until item page loads
      const flyer = document.createElement('div')
      flyer.style.cssText = `
        position:fixed; z-index:9999;
        left:${rect.left}px; top:${rect.top}px;
        width:${rect.width}px; height:${rect.height}px;
        background: url("${src}") center/cover no-repeat;
        transition: left 0.55s cubic-bezier(0.22, 1, 0.36, 1),
                    top 0.55s cubic-bezier(0.22, 1, 0.36, 1),
                    width 0.55s cubic-bezier(0.22, 1, 0.36, 1),
                    height 0.55s cubic-bezier(0.22, 1, 0.36, 1);
      `
      overlay.appendChild(flyer)

      // Store flyer reference so the item page can dismiss it
      window.__flyerCleanup = () => {
        flyer.style.opacity = '0'
        flyer.style.transition = 'opacity 0.15s ease'
        setTimeout(() => { overlay.innerHTML = ''; overlay.style.pointerEvents = 'none' }, 200)
      }

      // Compute target — must match item page layout exactly:
      // Layout: pt-[60px] nav, max-w-[1200px] mx-auto px-6 py-10,
      //         mb-10 back link (~56px), then grid 2 cols gap-16
      // Left col: no bg, aspect-square image flush to top
      const pageWidth = window.innerWidth
      const maxW = Math.min(1200, pageWidth - 48)
      const marginLeft = (pageWidth - maxW) / 2
      const gap = pageWidth >= 768 ? 64 : 40
      const colWidth = (maxW - gap) / 2

      const targetLeft = marginLeft + 24
      const targetTop = 161 // measured from actual item page render
      const targetSize = colWidth

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          backdrop.style.opacity = '0.85'
          flyer.style.left = `${targetLeft}px`
          flyer.style.top = `${targetTop}px`
          flyer.style.width = `${targetSize}px`
          flyer.style.height = `${targetSize}px`
          flyer.style.boxShadow = '0 25px 60px rgba(0,0,0,0.15)'
        })
      })

      setTimeout(() => {
        router.push(`/item/${eventId}`)
      }, 550)
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
