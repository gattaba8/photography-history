'use client'

import { useEffect, useState, type ReactNode } from 'react'

declare global {
  interface Window {
    __flyerCleanup?: () => void
  }
}

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

export function ImageReveal({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Show image immediately — it sits behind the flyer overlay
    setVisible(true)
    // Dismiss the flying overlay once the real image is painted
    const t = setTimeout(() => {
      window.__flyerCleanup?.()
      delete window.__flyerCleanup
    }, 50)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className={className} style={{ opacity: visible ? 1 : 0 }}>
      {children}
    </div>
  )
}
