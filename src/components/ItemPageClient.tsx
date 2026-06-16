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
  const [open, setOpen] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    requestAnimationFrame(() => setOpen(true))
    const t = setTimeout(() => setDone(true), 600)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      {children}
      {!done && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 9999, pointerEvents: 'none' }}>
          <div
            style={{
              position: 'absolute',
              left: 0, right: 0, top: 0, height: '50%',
              background: '#1a1a1a',
              transform: open ? 'translateY(-100%)' : 'translateY(0)',
              transition: 'transform 0.5s cubic-bezier(0.65, 0, 0.35, 1)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 0, right: 0, bottom: 0, height: '50%',
              background: '#1a1a1a',
              transform: open ? 'translateY(100%)' : 'translateY(0)',
              transition: 'transform 0.5s cubic-bezier(0.65, 0, 0.35, 1)',
            }}
          />
        </div>
      )}
    </>
  )
}
