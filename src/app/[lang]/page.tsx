'use client'

import { useRef } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Image from 'next/image'
import { timelineEvents } from '@/data/timeline'
import { t } from '@/i18n/ui'
import type { Locale } from '@/i18n/config'

export default function Home() {
  const router = useRouter()
  const params = useParams()
  const lang = (params.lang as Locale) || 'en'
  const overlayRef = useRef<HTMLDivElement>(null)
  const heroEvent = timelineEvents[0]

  function localePath(path: string) {
    return lang === 'fr' ? `/fr${path}` : path
  }

  const handleEnter = () => {
    if (!overlayRef.current) return
    const overlay = overlayRef.current
    overlay.innerHTML = ''

    const container = document.createElement('div')
    container.style.cssText = 'position:fixed;inset:0;z-index:9999;pointer-events:none;'
    overlay.appendChild(container)

    const top = document.createElement('div')
    top.style.cssText = `position:absolute;left:0;right:0;top:0;height:50%;background:#1a1a1a;transform:translateY(-100%);transition:transform 0.45s cubic-bezier(0.65,0,0.35,1);`
    const bottom = document.createElement('div')
    bottom.style.cssText = `position:absolute;left:0;right:0;bottom:0;height:50%;background:#1a1a1a;transform:translateY(100%);transition:transform 0.45s cubic-bezier(0.65,0,0.35,1);`
    container.appendChild(top)
    container.appendChild(bottom)

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        top.style.transform = 'translateY(0)'
        bottom.style.transform = 'translateY(0)'
      })
    })

    setTimeout(() => router.push(localePath('/timeline')), 450)
  }

  return (
    <main className="min-h-screen bg-white">
      <div ref={overlayRef} />
      <div className="flex flex-col items-center justify-center min-h-screen px-6">
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
            {t(lang, 'site.title')}
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

          <button
            onClick={handleEnter}
            className="px-10 py-3 border border-[#1a1a1a] text-[13px] uppercase tracking-[0.2em] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors duration-200 cursor-pointer"
          >
            {t(lang, 'home.enter')}
          </button>
        </div>
      </div>
    </main>
  )
}
