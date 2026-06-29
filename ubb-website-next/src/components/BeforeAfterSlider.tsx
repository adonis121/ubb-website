'use client'
import { useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import { beforeImage, afterImage } from '@/data/imageMap'

export default function BeforeAfterSlider() {
  const ref = useRef<HTMLDivElement>(null)
  const [dragging, setDragging] = useState(false)
  const [pos, setPos] = useState(50)

  const setCut = useCallback((clientX: number) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    const p = Math.min(95, Math.max(5, ((clientX - r.left) / r.width) * 100))
    setPos(p)
  }, [])

  return (
    <div
      ref={ref}
      className="ba"
      tabIndex={0}
      role="slider"
      aria-label="Vorher/Nachher Vergleich"
      aria-valuemin={5}
      aria-valuemax={95}
      aria-valuenow={Math.round(pos)}
      onPointerDown={(e) => { setDragging(true); setCut(e.clientX); (e.target as HTMLElement).setPointerCapture(e.pointerId) }}
      onPointerMove={(e) => { if (dragging) setCut(e.clientX) }}
      onPointerUp={() => setDragging(false)}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') setPos((p) => Math.max(5, p - 5))
        if (e.key === 'ArrowRight') setPos((p) => Math.min(95, p + 5))
      }}
    >
      <div className="layer before-l">
        <Image src={beforeImage} alt="Vorher — Baustelle" fill sizes="(max-width:1200px) 100vw, 1200px" style={{ objectFit: 'cover', objectPosition: 'center' }} />
      </div>
      <div className="layer after-l" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
        <Image src={afterImage} alt="Nachher — fertiggestellt" fill sizes="(max-width:1200px) 100vw, 1200px" style={{ objectFit: 'cover', objectPosition: 'center' }} />
      </div>
      <div className="handle" style={{ left: `${pos}%` }} />
      <span className="badge b1">Vorher</span>
      <span className="badge b2">Nachher</span>
    </div>
  )
}
