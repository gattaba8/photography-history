'use client'

import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import { timelineEvents } from '@/data/timeline'

export default function Home() {
  const featured = timelineEvents.filter((_, i) => i % 5 === 0).slice(0, 6)

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-14">
        <div className="relative h-[85vh] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1920&q=80"
            alt="Histoire de la photographie"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl lg:text-8xl text-[#1a1a1a] mb-6 italic">
              Musée de la Photographie
            </h1>
            <p className="text-[#444] text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              Deux siècles d&apos;innovation. De la camera obscura à
              l&apos;intelligence artificielle.
            </p>
            <Link
              href="/timeline"
              className="px-8 py-3 bg-[#1a1a1a] text-white text-sm tracking-wide hover:bg-[#333] transition-colors"
            >
              Entrer dans le Musée
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 py-24">
        <div className="max-w-2xl mb-16">
          <p className="text-[15px] text-[#666] leading-relaxed">
            La photographie est l&apos;une des inventions les plus
            transformatrices de l&apos;histoire humaine. Depuis la première image
            fixée par Nicéphore Niépce en 1826, elle n&apos;a cessé de
            transformer notre rapport au réel. Ce musée virtuel retrace
            l&apos;intégralité de cette histoire fascinante.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {featured.map((event, i) => (
            <Link
              key={event.id}
              href={`/article/${event.id}`}
              className="group"
            >
              <div className="relative aspect-square overflow-hidden bg-[#f5f5f5] mb-3">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:opacity-90 transition-opacity duration-300"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
              <p className="text-[11px] text-[#999] tabular-nums">
                {String(i + 1).padStart(3, '0')}
              </p>
              <p className="text-[13px] text-[#1a1a1a] leading-snug">
                {event.title}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/timeline"
            className="text-sm text-[#666] hover:text-[#1a1a1a] transition-colors underline underline-offset-4"
          >
            Voir la chronologie complète →
          </Link>
        </div>
      </section>

      <footer className="border-t border-[#e5e5e5] py-8">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-[#999]">
            Musée de la Photographie — 1826 à aujourd&apos;hui
          </p>
          <div className="flex gap-6">
            <Link
              href="/timeline"
              className="text-[12px] text-[#999] hover:text-[#1a1a1a]"
            >
              Chronologie
            </Link>
            <Link
              href="/articles"
              className="text-[12px] text-[#999] hover:text-[#1a1a1a]"
            >
              Collection
            </Link>
            <Link
              href="/about"
              className="text-[12px] text-[#999] hover:text-[#1a1a1a]"
            >
              À Propos
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
