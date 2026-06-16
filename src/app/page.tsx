'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { timelineEvents } from '@/data/timeline'

function ShutterButton({ onClick }: { onClick: () => void }) {
  const [pressed, setPressed] = useState(false)

  return (
    <button
      onClick={() => {
        setPressed(true)
        setTimeout(onClick, 600)
      }}
      className="group relative w-[80px] h-[80px] cursor-pointer"
      aria-label="Entrer dans le musée"
    >
      {/* Outer ring */}
      <div className="absolute inset-0 rounded-full border-[3px] border-[#1a1a1a] group-hover:border-[#ff6600] transition-colors duration-300" />

      {/* Shutter blades — 6 triangles forming an iris */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-[6px] w-[calc(100%-12px)] h-[calc(100%-12px)]"
      >
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <polygon
            key={i}
            points="50,50 35,15 65,15"
            fill={pressed ? '#1a1a1a' : '#1a1a1a'}
            opacity={pressed ? 1 : 0.08}
            transform={`rotate(${angle} 50 50)`}
            className="transition-all duration-300"
            style={{
              opacity: pressed ? 1 : undefined,
              transitionDelay: pressed ? `${i * 30}ms` : '0ms',
            }}
          />
        ))}
        {/* Center dot */}
        <circle
          cx="50"
          cy="50"
          r={pressed ? 0 : 8}
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="1.5"
          className="transition-all duration-300 group-hover:stroke-[#ff6600]"
        />
      </svg>

      {/* Inner shutter ring */}
      <div
        className="absolute inset-[8px] rounded-full border border-[#e5e5e5] group-hover:border-[#ff6600]/30 transition-colors duration-300"
      />
    </button>
  )
}

function ShutterOverlay({ active }: { active: boolean }) {
  if (!active) return null

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* The 6 shutter blades closing from the edges */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="absolute bg-[#1a1a1a]"
          style={{
            width: '120%',
            height: '120%',
            left: '50%',
            top: '50%',
            transformOrigin: 'center center',
            transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateY(-85%)`,
            animation: `shutterClose 0.5s ease-in-out ${i * 40}ms forwards`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes shutterClose {
          from {
            transform: translate(-50%, -50%) rotate(var(--r)) translateY(-85%);
          }
          to {
            transform: translate(-50%, -50%) rotate(var(--r)) translateY(-25%);
          }
        }
      `}</style>

      {/* Simple black overlay that fades in */}
      <div
        className="absolute inset-0 bg-[#1a1a1a]"
        style={{
          animation: 'fadeToBlack 0.4s ease-in 0.2s forwards',
          opacity: 0,
        }}
      />
      <style jsx>{`
        @keyframes fadeToBlack {
          to { opacity: 1; }
        }
      `}</style>
    </div>
  )
}

export default function Home() {
  const [shutterActive, setShutterActive] = useState(false)
  const router = useRouter()
  const heroEvent = timelineEvents[0]

  const handleEnter = () => {
    setShutterActive(true)
    setTimeout(() => router.push('/timeline'), 800)
  }

  return (
    <main className="min-h-screen bg-white">
      <ShutterOverlay active={shutterActive} />

      <div className="flex flex-col items-center justify-center min-h-screen px-6">
        <div className="flex flex-col items-center max-w-[900px] w-full">
          <h1
            className="text-center uppercase tracking-[0.25em] text-[#1a1a1a] mb-12"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: '0.25em',
            }}
          >
            Musée de la Photographie
          </h1>

          <div className="relative w-full max-w-[700px] h-[400px] bg-[#f5f5f5] mb-14">
            <Image
              src={heroEvent.image}
              alt={heroEvent.title}
              fill
              className="object-cover"
              priority
              sizes="700px"
            />
          </div>

          <ShutterButton onClick={handleEnter} />

          <p className="mt-4 text-[11px] text-[#bbb] uppercase tracking-[0.2em]">
            Entrer dans le musée
          </p>
        </div>
      </div>
    </main>
  )
}
