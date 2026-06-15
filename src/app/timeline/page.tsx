'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import EraHeader from '@/components/EraHeader'
import TimelineEvent from '@/components/TimelineEvent'
import Footer from '@/components/Footer'
import { eras, timelineEvents } from '@/data/timeline'
import { motion } from 'framer-motion'

export default function TimelinePage() {
  const [filter, setFilter] = useState<string | null>(null)
  const categories = [
    { key: null, label: 'Tous' },
    { key: 'invention', label: 'Inventions' },
    { key: 'technique', label: 'Techniques' },
    { key: 'camera', label: 'Appareils' },
    { key: 'movement', label: 'Mouvements' },
    { key: 'digital', label: 'Numérique' },
    { key: 'milestone', label: 'Jalons' },
  ]

  const filteredEvents = filter
    ? timelineEvents.filter((e) => e.category === filter)
    : timelineEvents

  return (
    <main className="bg-warm-950 min-h-screen">
      <Navigation />

      <section className="pt-32 pb-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-amber-600 tracking-[0.3em] uppercase text-xs">
            1826 — Aujourd&apos;hui
          </span>
          <h1 className="font-heading text-4xl md:text-6xl text-warm-100 mt-3 mb-4">
            Chronologie
          </h1>
          <p className="text-warm-400 max-w-xl mx-auto mb-8">
            Explorez deux siècles d&apos;innovation photographique à travers les
            événements qui ont façonné cet art.
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key ?? 'all'}
                onClick={() => setFilter(cat.key)}
                className={`px-4 py-2 rounded-full text-xs tracking-wider uppercase transition-all duration-300 ${
                  filter === cat.key
                    ? 'bg-amber-600 text-warm-950'
                    : 'bg-warm-900/50 text-warm-400 hover:bg-warm-800/50 hover:text-warm-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="relative max-w-6xl mx-auto px-6">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-warm-800/0 via-warm-700/30 to-warm-800/0" />
        <div className="md:hidden absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-warm-800/0 via-warm-700/30 to-warm-800/0" />

        {eras.map((era) => {
          const eraEvents = filteredEvents.filter(
            (e) => e.era === era.name
          )
          if (eraEvents.length === 0) return null

          return (
            <div key={era.id}>
              <EraHeader era={era} />
              {eraEvents.map((event, idx) => (
                <TimelineEvent key={event.id} event={event} index={idx} />
              ))}
            </div>
          )
        })}
      </section>

      <Footer />
    </main>
  )
}
