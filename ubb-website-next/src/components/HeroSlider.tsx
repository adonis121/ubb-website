'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { heroImage, serviceImages } from '@/data/imageMap'

interface Slide {
  image: string
  kicker: string
  heading: React.ReactNode
  lede: string
  cta: string
  ctaHref: string
  cta2: string
  ctaHref2: string
}

const SLIDES: Slide[] = [
  {
    image: heroImage,
    kicker: 'Bausanierung · Südbaden · seit 2010',
    heading: <>Substanz, die <em>Generationen</em> überdauert.</>,
    lede: 'Kernsanierung, Umbau und Innenausbau aus einer Hand. Ein Ansprechpartner, 15 Fachleute, ein Standard: Ihrer.',
    cta: 'Projektanfrage starten',
    ctaHref: '/anfrage',
    cta2: 'Projekte ansehen',
    ctaHref2: '/projekte',
  },
  {
    image: serviceImages['bodenarbeiten'] ?? heroImage,
    kicker: 'Bodenarbeiten · Estrich & Beschichtung',
    heading: <>Böden, die <em>Jahrzehnte</em> halten.</>,
    lede: 'Estrich, Beschichtung, Fliesen und Spachteltechnik — präzise Bodenarbeiten für anspruchsvolle Wohn- und Gewerbeflächen.',
    cta: 'Bodenarbeiten ansehen',
    ctaHref: '/bodenarbeiten',
    cta2: 'Anfrage stellen',
    ctaHref2: '/anfrage',
  },
  {
    image: serviceImages['innenarbeiten'] ?? heroImage,
    kicker: 'Innenausbau · Trockenbau & Putz',
    heading: <>Innenausbau <em>bis ins Detail</em>.</>,
    lede: 'Trockenbau, Putz, Stuck und Malerarbeiten — alle Gewerke koordiniert, ein Ansprechpartner für alles.',
    cta: 'Innenarbeiten ansehen',
    ctaHref: '/innenarbeiten',
    cta2: 'Anfrage stellen',
    ctaHref2: '/anfrage',
  },
]

const INTERVAL = 6000
const PAUSE_DURATION = 9000

export default function HeroSlider() {
  const [active, setActive] = useState(0)
  const isPaused = useRef(false)
  const pauseTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const go = useCallback((index: number) => {
    setActive(((index % SLIDES.length) + SLIDES.length) % SLIDES.length)
    isPaused.current = true
    if (pauseTimer.current) clearTimeout(pauseTimer.current)
    pauseTimer.current = setTimeout(() => { isPaused.current = false }, PAUSE_DURATION)
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      if (!isPaused.current) setActive(a => (a + 1) % SLIDES.length)
    }, INTERVAL)
    return () => {
      clearInterval(id)
      if (pauseTimer.current) clearTimeout(pauseTimer.current)
    }
  }, [])

  const slide = SLIDES[active]

  return (
    <section className="hero-split" aria-label="Hero">

      {/* ── Left: content panel ── */}
      <div className="hs-panel">
        <span className="hs-watermark" aria-hidden>
          {String(active + 1).padStart(2, '0')}
        </span>

        <div id="slide-panel" role="tabpanel" aria-labelledby={`slide-tab-${active}`} className="hs-content">
          <div key={active} className="hs-anim">
            <span className="hs-kicker">{slide.kicker}</span>
            <h1 className="hs-heading">{slide.heading}</h1>
            <p className="hs-lede">{slide.lede}</p>
          </div>
          <div className="hs-ctas">
            <Link className="btn btn-primary" href={slide.ctaHref}>
              {slide.cta} <span className="arrow">→</span>
            </Link>
            <Link className="btn btn-outline-light" href={slide.ctaHref2}>
              {slide.cta2}
            </Link>
          </div>
        </div>

        <div className="hs-footer">
          <div className="hs-segs" role="tablist">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                id={`slide-tab-${i}`}
                role="tab"
                aria-selected={i === active}
                aria-controls="slide-panel"
                aria-label={`Folie ${i + 1}`}
                className={`hs-seg${i === active ? ' active' : ''}`}
                onClick={() => go(i)}
              />
            ))}
          </div>
          <span className="hs-count">
            {String(active + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
          </span>
          <div className="hs-nav">
            <button className="hs-btn" onClick={() => go(active - 1)} aria-label="Vorheriges">‹</button>
            <button className="hs-btn" onClick={() => go(active + 1)} aria-label="Nächstes">›</button>
          </div>
        </div>
      </div>

      {/* ── Right: image stack ── */}
      <div className="hs-images" aria-hidden>
        {SLIDES.map((s, i) => (
          <div key={i} className={`hs-img${i === active ? ' active' : ''}`}>
            {i === 0
              ? <Image src={s.image} alt="" fill priority sizes="(max-width:820px) 100vw, 56vw" style={{ objectFit: 'cover', objectPosition: 'center' }} />
              : <Image src={s.image} alt="" fill sizes="(max-width:820px) 100vw, 56vw" style={{ objectFit: 'cover', objectPosition: 'center' }} />
            }
          </div>
        ))}
      </div>

    </section>
  )
}
