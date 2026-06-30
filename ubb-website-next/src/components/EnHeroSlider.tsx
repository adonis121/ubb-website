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
    kicker: 'Building Renovation · Southern Baden · since 2010',
    heading: <>Substance that <em>lasts</em> generations.</>,
    lede: 'Full-scope renovation, conversion and interior fit-out from a single source. One contact person, 15 specialists, one standard: yours.',
    cta: 'Start a project inquiry',
    ctaHref: '/en/contact',
    cta2: 'View projects',
    ctaHref2: '/en/projects',
  },
  {
    image: serviceImages['bodenarbeiten'] ?? heroImage,
    kicker: 'Floor Works · Screed & Coatings',
    heading: <>Floors built to <em>last decades</em>.</>,
    lede: 'Screed, coatings, tiles and micro-cement — precise floor works for demanding residential and commercial spaces.',
    cta: 'Explore floor works',
    ctaHref: '/en/flooring',
    cta2: 'Request advice',
    ctaHref2: '/en/contact',
  },
  {
    image: serviceImages['innenarbeiten'] ?? heroImage,
    kicker: 'Interior Fit-Out · Drylining & Plastering',
    heading: <>Interior fit-out <em>to the last detail</em>.</>,
    lede: 'Drylining, plastering, stucco and painting — all trades coordinated, one contact person for everything.',
    cta: 'Explore interior works',
    ctaHref: '/en/interior',
    cta2: 'Request advice',
    ctaHref2: '/en/contact',
  },
]

const INTERVAL = 6000
const PAUSE_DURATION = 9000

export default function EnHeroSlider() {
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

      {/* Left: content panel */}
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
                aria-label={`Slide ${i + 1}`}
                className={`hs-seg${i === active ? ' active' : ''}`}
                onClick={() => go(i)}
              />
            ))}
          </div>
          <span className="hs-count">
            {String(active + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
          </span>
          <div className="hs-nav">
            <button className="hs-btn" onClick={() => go(active - 1)} aria-label="Previous">‹</button>
            <button className="hs-btn" onClick={() => go(active + 1)} aria-label="Next">›</button>
          </div>
        </div>
      </div>

      {/* Right: image stack */}
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
