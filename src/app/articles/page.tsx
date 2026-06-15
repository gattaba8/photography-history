'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { timelineEvents, eras } from '@/data/timeline'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Tag } from 'lucide-react'

const categoryLabels: Record<string, string> = {
  invention: 'Invention',
  technique: 'Technique',
  camera: 'Appareil',
  movement: 'Mouvement',
  digital: 'Numérique',
  milestone: 'Jalon',
}

export default function ArticlesPage() {
  const [selectedEra, setSelectedEra] = useState<string | null>(null)

  const filtered = selectedEra
    ? timelineEvents.filter((e) => e.era === selectedEra)
    : timelineEvents

  return (
    <main className="bg-warm-950 min-h-screen">
      <Navigation />

      <section className="pt-32 pb-12 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-amber-600 tracking-[0.3em] uppercase text-xs">
            Tous les articles
          </span>
          <h1 className="font-heading text-4xl md:text-6xl text-warm-100 mt-3 mb-4">
            Articles
          </h1>
          <p className="text-warm-400 max-w-xl mx-auto mb-8">
            Plongez dans l&apos;histoire complète de la photographie à travers
            nos articles détaillés.
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedEra(null)}
              className={`px-4 py-2 rounded-full text-xs tracking-wider uppercase transition-all duration-300 ${
                !selectedEra
                  ? 'bg-amber-600 text-warm-950'
                  : 'bg-warm-900/50 text-warm-400 hover:bg-warm-800/50'
              }`}
            >
              Toutes les époques
            </button>
            {eras.map((era) => (
              <button
                key={era.id}
                onClick={() => setSelectedEra(era.name)}
                className={`px-4 py-2 rounded-full text-xs tracking-wider uppercase transition-all duration-300 ${
                  selectedEra === era.name
                    ? 'bg-amber-600 text-warm-950'
                    : 'bg-warm-900/50 text-warm-400 hover:bg-warm-800/50'
                }`}
              >
                {era.name}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
            >
              <Link href={`/article/${event.id}`} className="group block">
                <div className="relative overflow-hidden rounded-lg aspect-[16/10] mb-4">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-950/70 via-transparent to-transparent" />
                </div>

                <div className="flex items-center gap-3 mb-2">
                  <span className="flex items-center gap-1 text-amber-500 text-xs">
                    <Calendar className="w-3 h-3" />
                    {event.year}
                  </span>
                  <span className="flex items-center gap-1 text-warm-500 text-xs">
                    <Tag className="w-3 h-3" />
                    {categoryLabels[event.category]}
                  </span>
                </div>

                <h3 className="font-heading text-lg text-warm-100 group-hover:text-amber-500 transition-colors mb-2">
                  {event.title}
                </h3>
                <p className="text-warm-500 text-sm line-clamp-2">
                  {event.summary}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
