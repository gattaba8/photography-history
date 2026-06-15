'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1920&q=80)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-warm-950/80 via-warm-950/60 to-warm-950" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-amber-500 tracking-[0.3em] uppercase text-sm mb-6"
        >
          Musée Virtuel
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl text-warm-50 mb-6 leading-tight"
        >
          Histoire de la
          <br />
          <span className="text-amber-500">Photographie</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-warm-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          De la camera obscura aux smartphones, explorez deux siècles
          d&apos;innovation qui ont transformé notre façon de voir le monde.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/timeline"
            className="px-8 py-4 bg-amber-600 hover:bg-amber-500 text-warm-950 font-medium tracking-wider uppercase text-sm transition-all duration-300 rounded"
          >
            Explorer la Chronologie
          </Link>
          <Link
            href="/articles"
            className="px-8 py-4 border border-warm-700 hover:border-amber-600 text-warm-300 hover:text-amber-500 font-medium tracking-wider uppercase text-sm transition-all duration-300 rounded"
          >
            Lire les Articles
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-warm-500" />
        </motion.div>
      </motion.div>
    </section>
  )
}
