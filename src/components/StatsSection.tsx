'use client'

import { motion } from 'framer-motion'
import { Camera, Clock, BookOpen, Image } from 'lucide-react'

const stats = [
  {
    icon: Clock,
    value: '200',
    suffix: ' ans',
    label: "d'histoire",
  },
  {
    icon: Camera,
    value: '35',
    suffix: '+',
    label: 'événements clés',
  },
  {
    icon: BookOpen,
    value: '7',
    suffix: '',
    label: 'époques majeures',
  },
  {
    icon: Image,
    value: '∞',
    suffix: '',
    label: "d'images capturées",
  },
]

export default function StatsSection() {
  return (
    <section className="py-20 px-6 border-y border-warm-800/20">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <stat.icon className="w-6 h-6 text-amber-600 mx-auto mb-3" />
            <div className="font-heading text-3xl md:text-4xl text-warm-100">
              {stat.value}
              <span className="text-amber-500">{stat.suffix}</span>
            </div>
            <p className="text-warm-500 text-sm mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
