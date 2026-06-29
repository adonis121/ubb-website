import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/data/projects'
import { projectImages } from '@/data/imageMap'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: `${project.title} — ${project.type} | UBB Bausanierung`,
    description: project.lede,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  return (
    <>
      <section className="hero hero-slim" style={{ position: 'relative', overflow: 'hidden' }}>
        {projectImages[project.slug] && (
          <>
            <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
              <Image src={projectImages[project.slug]} alt={project.title} fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority />
            </div>
            <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(135deg, rgba(13,27,42,.88) 0%, rgba(13,27,42,.65) 100%)' }} />
          </>
        )}
        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/projekte">Projekte</Link>
            <span className="sep">/</span>
            {project.title}
          </div>
          <span className="kicker">{project.type}</span>
          <h1>{project.title}</h1>
          <p className="lede">{project.lede}</p>
        </div>
      </section>

      <div className="facts-band">
        <div className="wrap">
          <div className="facts-grid">
            <div className="f"><span>Ort</span><b>{project.location}</b></div>
            <div className="f"><span>Jahr</span><b>{project.year}</b></div>
            <div className="f"><span>Fläche</span><b>{project.area}</b></div>
            <div className="f"><span>Bauzeit</span><b>{project.duration}</b></div>
            <div className="f"><span>Gewerke</span><b>{project.trades}</b></div>
          </div>
        </div>
      </div>

      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">Vorher / Nachher</span>
            <h2>Sehen Sie den Unterschied.</h2>
            <p>Ziehen Sie den Regler, um Vorher und Nachher zu vergleichen.</p>
          </div>
          <BeforeAfterSlider />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="two-col">
            <div className="narrative">
              <h2>Ausgangslage</h2>
              <p>{project.challenge}</p>
              <h2>Unsere Lösung</h2>
              <p>{project.solution}</p>
              <h2>Ergebnis</h2>
              <p>{project.result}</p>
            </div>
            <aside>
              <div className="city-stat-box">
                <h3>Projektdaten</h3>
                <div className="stat-row"><span className="lbl">Typ</span><span>{project.type}</span></div>
                <div className="stat-row"><span className="lbl">Ort</span><span>{project.location}</span></div>
                <div className="stat-row"><span className="lbl">Jahr</span><span>{project.year}</span></div>
                <div className="stat-row"><span className="lbl">Fläche</span><span>{project.area}</span></div>
                <div className="stat-row"><span className="lbl">Bauzeit</span><span>{project.duration}</span></div>
                <div className="stat-row"><span className="lbl">Gewerke</span><span>{project.trades}</span></div>
              </div>
              <div style={{ marginTop: '1.5rem' }}>
                <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '.12em', color: 'var(--slate)', marginBottom: '1rem' }}>Beteiligte Leistungen</h4>
                <div className="tags" style={{ gap: '8px' }}>
                  {project.services.map((s) => (
                    <span key={s} className="tag-chip">{s}</span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap inner">
          <h2>Ähnliches Projekt <em>geplant</em>?</h2>
          <div className="actions">
            <Link className="btn btn-white" href="/anfrage">Projektanfrage starten <span className="arrow">→</span></Link>
            <a className="btn btn-outline-light" href="tel:+4976311730287">+49 7631 1730287</a>
          </div>
        </div>
      </section>
    </>
  )
}
