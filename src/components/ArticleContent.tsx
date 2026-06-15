'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, Tag } from 'lucide-react'
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
}: {
  event: TimelineEvent
  prevEvent: TimelineEvent | null
  nextEvent: TimelineEvent | null
}) {
  const paragraphs = event.content.split('\n\n')

  return (
    <article className="min-h-screen pt-20">
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-950 via-warm-950/50 to-warm-950/30" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/timeline"
              className="inline-flex items-center gap-2 text-warm-400 hover:text-amber-500 transition-colors text-sm mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour à la chronologie
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="flex items-center gap-1.5 text-amber-500 text-sm">
                  <Calendar className="w-4 h-4" />
                  {event.year}
                  {event.endYear ? `–${event.endYear}` : ''}
                </span>
                <span className="flex items-center gap-1.5 text-warm-400 text-sm">
                  <Tag className="w-4 h-4" />
                  {categoryLabels[event.category]}
                </span>
                <span className="text-warm-500 text-sm">{event.era}</span>
              </div>

              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl text-warm-50 leading-tight">
                {event.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-warm-300 text-lg md:text-xl leading-relaxed mb-8 font-medium">
            {event.summary}
          </p>

          <div className="h-px bg-warm-800/50 mb-8" />

          <div className="prose-custom">
            {paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className="text-warm-400 leading-relaxed mb-6 text-base md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        <div className="h-px bg-warm-800/50 my-12" />

        <div className="flex flex-col sm:flex-row justify-between gap-4">
          {prevEvent ? (
            <Link
              href={`/article/${prevEvent.id}`}
              className="group flex-1 p-4 rounded-lg border border-warm-800/30 hover:border-amber-600/50 transition-colors"
            >
              <span className="text-warm-500 text-xs tracking-wider uppercase">
                ← Précédent
              </span>
              <p className="text-warm-200 group-hover:text-amber-500 transition-colors mt-1 font-heading">
                {prevEvent.title}
              </p>
              <span className="text-warm-600 text-xs">{prevEvent.year}</span>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          {nextEvent ? (
            <Link
              href={`/article/${nextEvent.id}`}
              className="group flex-1 p-4 rounded-lg border border-warm-800/30 hover:border-amber-600/50 transition-colors text-right"
            >
              <span className="text-warm-500 text-xs tracking-wider uppercase">
                Suivant →
              </span>
              <p className="text-warm-200 group-hover:text-amber-500 transition-colors mt-1 font-heading">
                {nextEvent.title}
              </p>
              <span className="text-warm-600 text-xs">{nextEvent.year}</span>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </div>
    </article>
  )
}
