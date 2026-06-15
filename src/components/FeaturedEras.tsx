'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { eras } from '@/data/timeline'

const eraImages: Record<string, string> = {
  pionniers:
    'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=600&q=80',
  collodion:
    'https://images.unsplash.com/photo-1554844453-7ea2a137b529?w=600&q=80',
  democratisation:
    'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&q=80',
  'age-dor':
    'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&q=80',
  'revolution-slr':
    'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80',
  numerique:
    'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=600&q=80',
  smartphone:
    'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=600&q=80',
}

export default function FeaturedEras() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber-600 tracking-[0.3em] uppercase text-xs">
            Sept époques majeures
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-warm-100 mt-3">
            Parcourez les Grandes Époques
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {eras.map((era, i) => (
            <motion.div
              key={era.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/timeline#${era.id}`}
                className="group block relative overflow-hidden rounded-lg aspect-[3/4]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${eraImages[era.id] || ''})`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-950 via-warm-950/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-amber-500 text-xs tracking-widest uppercase">
                    {era.startYear} — {era.endYear}
                  </span>
                  <h3 className="font-heading text-xl text-warm-100 mt-1 group-hover:text-amber-500 transition-colors">
                    {era.name}
                  </h3>
                  <p className="text-warm-500 text-xs mt-2 line-clamp-2">
                    {era.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
