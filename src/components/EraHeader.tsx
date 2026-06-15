'use client'

import { motion } from 'framer-motion'
import type { Era } from '@/data/timeline'

export default function EraHeader({ era }: { era: Era }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="relative py-16 md:py-24 text-center"
      id={era.id}
    >
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-warm-800/0 via-amber-600/50 to-warm-800/0 hidden md:block" />
      <span className="text-amber-600 tracking-[0.4em] uppercase text-xs font-medium">
        {era.startYear} — {era.endYear}
      </span>
      <h2 className="font-heading text-3xl md:text-5xl text-warm-100 mt-3 mb-4">
        {era.name}
      </h2>
      <p className="text-warm-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
        {era.description}
      </p>
    </motion.div>
  )
}
