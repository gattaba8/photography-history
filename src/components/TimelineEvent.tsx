'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import type { TimelineEvent as TimelineEventType } from '@/data/timeline'

const categoryColors: Record<string, string> = {
  invention: 'bg-amber-600',
  technique: 'bg-blue-600',
  camera: 'bg-emerald-600',
  movement: 'bg-rose-600',
  digital: 'bg-violet-600',
  milestone: 'bg-orange-600',
}

const categoryLabels: Record<string, string> = {
  invention: 'Invention',
  technique: 'Technique',
  camera: 'Appareil',
  movement: 'Mouvement',
  digital: 'Numérique',
  milestone: 'Jalon',
}

export default function TimelineEvent({
  event,
  index,
}: {
  event: TimelineEventType
  index: number
}) {
  const isLeft = index % 2 === 0

  return (
    <div className="relative flex items-center justify-center mb-16 md:mb-24">
      <div className="hidden md:block absolute left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-amber-500 border-4 border-warm-950 z-10 shadow-[0_0_12px_rgba(245,158,11,0.5)]" />
      <div className="md:hidden absolute left-6 w-3 h-3 rounded-full bg-amber-500 border-3 border-warm-950 z-10 shadow-[0_0_10px_rgba(245,158,11,0.4)]" />

      <div
        className={`w-full md:w-[calc(50%-2rem)] ${
          isLeft ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
        } pl-14 md:pl-0`}
      >
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Link href={`/article/${event.id}`} className="group block">
            <div className="relative overflow-hidden rounded-lg mb-4 aspect-[16/10]">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-950/80 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 flex gap-2">
                <span
                  className={`px-3 py-1 text-xs font-medium text-white rounded-full ${
                    categoryColors[event.category]
                  }`}
                >
                  {categoryLabels[event.category]}
                </span>
              </div>
              <div className="absolute bottom-4 left-4">
                <span className="text-amber-500 font-heading text-3xl font-bold">
                  {event.year}
                  {event.endYear ? `–${event.endYear}` : ''}
                </span>
              </div>
            </div>

            <h3 className="font-heading text-xl md:text-2xl text-warm-100 mb-2 group-hover:text-amber-500 transition-colors duration-300">
              {event.title}
            </h3>
            <p className="text-warm-400 text-sm leading-relaxed line-clamp-3">
              {event.summary}
            </p>

            <span className="inline-block mt-3 text-amber-600 text-sm tracking-wider uppercase group-hover:text-amber-400 transition-colors">
              Lire l&apos;article →
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
