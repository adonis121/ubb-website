import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { projects } from '@/data/en/projects'
import { projectImages } from '@/data/imageMap'
import Image from 'next/image'
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

export default async function EnProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  return (
    <>
      <section className="hero hero-slim" style={{ position: 'relative', overflow: 'hidden' }}>
        {projectImages[project.slug] && (
          <>
            <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
              <Image src={projectImages[project.slug]} alt={project.title} fill style={{ objectFit: 'cover' }} priority />
            </div>
            <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(135deg, rgba(13,27,42,.88) 0%, rgba(13,27,42,.65) 100%)' }} />
          </>
        )}
        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          <div className="breadcrumb">
            <Link href="/en">Home</Link>
            <span className="sep">/</span>
            <Link href="/en/projects">Projects</Link>
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
            <div className="f"><span>Location</span><b>{project.location}</b></div>
            <div className="f"><span>Year</span><b>{project.year}</b></div>
            <div className="f"><span>Area</span><b>{project.area}</b></div>
            <div className="f"><span>Duration</span><b>{project.duration}</b></div>
            <div className="f"><span>Trades</span><b>{project.trades}</b></div>
          </div>
        </div>
      </div>

      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">Before / After</span>
            <h2>See the difference.</h2>
            <p>Drag the slider to compare before and after.</p>
          </div>
          <BeforeAfterSlider />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="two-col">
            <div className="narrative">
              <h2>Starting Position</h2>
              <p>{project.challenge}</p>
              <h2>Our Solution</h2>
              <p>{project.solution}</p>
              <h2>Result</h2>
              <p>{project.result}</p>
            </div>
            <aside>
              <div className="city-stat-box">
                <h3>Project Data</h3>
                <div className="stat-row"><span className="lbl">Type</span><span>{project.type}</span></div>
                <div className="stat-row"><span className="lbl">Location</span><span>{project.location}</span></div>
                <div className="stat-row"><span className="lbl">Year</span><span>{project.year}</span></div>
                <div className="stat-row"><span className="lbl">Area</span><span>{project.area}</span></div>
                <div className="stat-row"><span className="lbl">Duration</span><span>{project.duration}</span></div>
                <div className="stat-row"><span className="lbl">Trades</span><span>{project.trades}</span></div>
              </div>
              <div style={{ marginTop: '1.5rem' }}>
                <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '.12em', color: 'var(--slate)', marginBottom: '1rem' }}>Services involved</h4>
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
          <h2>Similar project <em>planned</em>?</h2>
          <div className="actions">
            <Link className="btn btn-white" href="/en/contact">Start a project enquiry <span className="arrow">→</span></Link>
            <a className="btn btn-outline-light" href="tel:+4976311730287">+49 7631 1730287</a>
          </div>
        </div>
      </section>
    </>
  )
}
