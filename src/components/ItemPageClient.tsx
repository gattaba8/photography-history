'use client'

import { useEffect, useState, type ReactNode } from 'react'

export function FadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(t)
  }, [delay])

  return (
    <div
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
      }}
    >
      {children}
    </div>
  )
}

export function ShutterReveal({ children }: { children: ReactNode }) {
  const [phase, setPhase] = useState<'closed' | 'opening' | 'done'>('closed')

  useEffect(() => {
    requestAnimationFrame(() => setPhase('opening'))
    const t = setTimeout(() => setPhase('done'), 700)
    return () => clearTimeout(t)
  }, [])

  if (phase === 'done') return <>{children}</>

  return (
    <>
      {children}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = (360 / 6) * i
          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                width: '200vmax',
                height: '200vmax',
                background: '#1a1a1a',
                transformOrigin: 'center center',
                transform:
                  phase === 'closed'
                    ? `translate(-50%,-50%) rotate(${angle}deg) translateY(-35%)`
                    : `translate(-50%,-50%) rotate(${angle}deg) translateY(-100%)`,
                transition: 'transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            />
          )
        })}
      </div>
    </>
  )
}
