'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import type { TimelineEvent } from '@/data/timeline'

const categoryLabels: Record<string, string> = {
  invention: 'Invention',
  technique: 'Technique',
  camera: 'Appareil',
  movement: 'Mouvement',
  digital: 'Numérique',
  milestone: 'Jalon',
}

export default function ArticleContent({
  event,
  prevEvent,
  nextEvent,
  index,
}: {
  event: TimelineEvent
  prevEvent: TimelineEvent | null
  nextEvent: TimelineEvent | null
  index: number
}) {
  const paragraphs = event.content.split('\n\n')

  return (
    <article className="min-h-screen pt-14">
      <div className="max-w-[1400px] mx-auto px-6 pt-8 pb-4">
        <Link
          href="/timeline"
          className="inline-flex items-center gap-1.5 text-[13px] text-[#999] hover:text-[#1a1a1a] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Chronologie
        </Link>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 pb-20">
        <div className="relative aspect-square overflow-hidden bg-[#f5f5f5]">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="lg:pt-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[11px] text-[#bbb] tabular-nums">
              {String(index + 1).padStart(3, '0')}
            </span>
            <span className="text-[11px] text-[#bbb]">—</span>
            <span className="text-[11px] text-[#999]">
              {categoryLabels[event.category]}
            </span>
          </div>

          <h1 className="text-[28px] md:text-[36px] font-[family-name:var(--font-heading)] font-normal tracking-tight leading-tight mb-3">
            {event.title}
          </h1>

          <p className="text-[14px] text-[#999] mb-6">
            {event.year}
            {event.endYear ? `–${event.endYear}` : ''} · {event.era}
          </p>

          <p className="text-[15px] text-[#444] leading-relaxed mb-8 font-medium">
            {event.summary}
          </p>

          <div className="border-t border-[#e5e5e5] pt-8">
            {paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className="text-[14px] text-[#555] leading-[1.8] mb-5"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[#e5e5e5]">
        <div className="max-w-[1400px] mx-auto px-6 py-10 grid grid-cols-2 gap-6">
          {prevEvent ? (
            <Link
              href={`/article/${prevEvent.id}`}
              className="group"
            >
              <span className="text-[11px] text-[#bbb]">← Précédent</span>
              <p className="text-[14px] text-[#1a1a1a] group-hover:text-[#666] transition-colors mt-1">
                {prevEvent.title}
              </p>
              <span className="text-[11px] text-[#bbb]">{prevEvent.year}</span>
            </Link>
          ) : (
            <div />
          )}

          {nextEvent ? (
            <Link
              href={`/article/${nextEvent.id}`}
              className="group text-right"
            >
              <span className="text-[11px] text-[#bbb]">Suivant →</span>
              <p className="text-[14px] text-[#1a1a1a] group-hover:text-[#666] transition-colors mt-1">
                {nextEvent.title}
              </p>
              <span className="text-[11px] text-[#bbb]">{nextEvent.year}</span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </article>
  )
}
