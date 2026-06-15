'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Camera, BookOpen, Globe, Heart } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="bg-warm-950 min-h-screen">
      <Navigation />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-amber-600 tracking-[0.3em] uppercase text-xs">
              À propos
            </span>
            <h1 className="font-heading text-4xl md:text-6xl text-warm-100 mt-3 mb-6">
              Notre Mission
            </h1>
            <p className="text-warm-400 text-lg leading-relaxed">
              Ce musée virtuel est dédié à la préservation et à la diffusion de
              l&apos;histoire de la photographie, l&apos;une des inventions les
              plus transformatrices de l&apos;histoire humaine.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            <div className="p-8 rounded-lg bg-warm-900/30 border border-warm-800/20">
              <Camera className="w-8 h-8 text-amber-500 mb-4" />
              <h3 className="font-heading text-xl text-warm-100 mb-3">
                Patrimoine Photographique
              </h3>
              <p className="text-warm-400 text-sm leading-relaxed">
                Nous retraçons l&apos;évolution complète de la photographie,
                des premières expériences de Niépce aux technologies
                d&apos;intelligence artificielle contemporaines.
              </p>
            </div>

            <div className="p-8 rounded-lg bg-warm-900/30 border border-warm-800/20">
              <BookOpen className="w-8 h-8 text-amber-500 mb-4" />
              <h3 className="font-heading text-xl text-warm-100 mb-3">
                Contenu Éducatif
              </h3>
              <p className="text-warm-400 text-sm leading-relaxed">
                Chaque article est rédigé avec soin pour offrir un contenu
                historiquement précis et accessible, enrichi d&apos;images
                d&apos;illustration évocatrices.
              </p>
            </div>

            <div className="p-8 rounded-lg bg-warm-900/30 border border-warm-800/20">
              <Globe className="w-8 h-8 text-amber-500 mb-4" />
              <h3 className="font-heading text-xl text-warm-100 mb-3">
                Accessible à Tous
              </h3>
              <p className="text-warm-400 text-sm leading-relaxed">
                Ce musée virtuel est gratuit et ouvert à tous. Notre ambition
                est de rendre l&apos;histoire de la photographie accessible au
                plus grand nombre.
              </p>
            </div>

            <div className="p-8 rounded-lg bg-warm-900/30 border border-warm-800/20">
              <Heart className="w-8 h-8 text-amber-500 mb-4" />
              <h3 className="font-heading text-xl text-warm-100 mb-3">
                Passion & Précision
              </h3>
              <p className="text-warm-400 text-sm leading-relaxed">
                Ce projet est né de la passion pour la photographie et de la
                volonté de partager cette histoire fascinante avec le monde
                entier.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose-custom"
          >
            <h2 className="font-heading text-2xl text-warm-100 mb-6">
              L&apos;Histoire en Lumière
            </h2>

            <p className="text-warm-400 leading-relaxed mb-6">
              La photographie est bien plus qu&apos;une simple technique de
              capture d&apos;images. Elle est le témoin silencieux de notre
              histoire collective, le miroir de nos sociétés et le vecteur
              d&apos;émotions universelles. Depuis les premiers essais de
              Nicéphore Niépce dans sa propriété de Saint-Loup-de-Varennes
              jusqu&apos;aux algorithmes de photographie computationnelle de nos
              smartphones, chaque avancée a redéfini notre façon de voir et de
              comprendre le monde.
            </p>

            <p className="text-warm-400 leading-relaxed mb-6">
              Ce musée virtuel s&apos;efforce de raconter cette histoire dans
              toute sa richesse. À travers une chronologie interactive, des
              articles détaillés et une riche iconographie, nous invitons le
              visiteur à découvrir les inventeurs, les artistes et les
              innovateurs qui ont fait de la photographie ce qu&apos;elle est
              aujourd&apos;hui.
            </p>

            <p className="text-warm-400 leading-relaxed mb-6">
              Des daguerréotypes précieux aux fichiers numériques partagés
              instantanément sur les réseaux sociaux, la photographie a parcouru
              un chemin extraordinaire. Chaque époque a apporté ses révolutions :
              le collodion humide a démocratisé le portrait, le film souple a
              libéré le photographe, le numérique a aboli les frontières entre
              amateur et professionnel, et le smartphone a fait de chaque être
              humain un photographe en puissance.
            </p>

            <p className="text-warm-400 leading-relaxed">
              Nous espérons que cette exploration vous inspirera autant
              qu&apos;elle nous inspire, et qu&apos;elle vous donnera envie de
              regarder vos propres photographies — et celles des autres — avec
              un regard nouveau.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
