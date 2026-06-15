'use client'

import { motion } from 'framer-motion'

export default function IntroSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-amber-600 tracking-[0.3em] uppercase text-xs">
            Bienvenue
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-warm-100 mt-4 mb-6">
            Capturer la Lumière, Figer le Temps
          </h2>
          <p className="text-warm-400 leading-relaxed mb-6">
            Depuis la première image fixée par Nicéphore Niépce en 1826, la
            photographie n&apos;a cessé de transformer notre rapport au réel.
            Art, science et technologie se sont entrelacés pour donner naissance
            à l&apos;un des médiums les plus puissants de l&apos;histoire
            humaine.
          </p>
          <p className="text-warm-400 leading-relaxed">
            Ce musée virtuel vous invite à parcourir deux siècles
            d&apos;innovations, de découvertes et de révolutions visuelles. Des
            daguerréotypes aux images générées par intelligence artificielle,
            chaque étape raconte l&apos;histoire d&apos;une humanité en quête de
            mémoire visuelle.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
