import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { services } from '@/data/services'
import { projects } from '@/data/projects'
import { serviceImages, projectImages } from '@/data/imageMap'

const cat = services.find((s) => s.slug === 'bodenarbeiten')!

export function generateStaticParams() {
  return cat.subServices.map((s) => ({ service: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const { service } = await params
  const sub = cat.subServices.find((s) => s.slug === service)
  if (!sub) return {}
  return { title: sub.metaTitle, description: sub.metaDescription }
}

export default async function ServiceSubPage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params
  const sub = cat.subServices.find((s) => s.slug === service)
  if (!sub) notFound()

  const relProjects = projects.filter((p) => cat.projectSlugs.includes(p.slug)).slice(0, 2)

  return (
    <>
      <section className="hero hero-slim" style={{ position: 'relative', overflow: 'hidden' }}>
        {serviceImages[sub.slug] && (
          <>
            <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
              <Image src={serviceImages[sub.slug]} alt={sub.title} fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority />
            </div>
            <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(135deg, rgba(13,27,42,.88) 0%, rgba(13,27,42,.65) 100%)' }} />
          </>
        )}
        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/bodenarbeiten">Bodenarbeiten</Link>
            <span className="sep">/</span>
            {sub.title}
          </div>
          <span className="kicker">{sub.num} — Bodenarbeiten</span>
          <h1>{sub.title}</h1>
          <p className="lede">{sub.lede}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">Leistungsumfang</span>
            <h2>Was wir für Sie übernehmen.</h2>
          </div>
          <ul className="checklist">
            {sub.leistungsumfang.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">Ablauf</span>
            <h2>So läuft Ihr Projekt.</h2>
          </div>
          <div className="process">
            {sub.process.map((step) => (
              <div key={step.title} className="step-card">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {relProjects.length > 0 && (
        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <span className="kicker">Referenzen</span>
              <h2>Bodenprojekte aus der Region.</h2>
            </div>
            <div className="grid cols-2">
              {relProjects.map((p) => (
                <Link key={p.slug} className="card-project" href={`/projekte/${p.slug}`}>
                  <div className="img">
                    <Image src={projectImages[p.slug] ?? '/images/placeholder.png'} alt={p.title} fill style={{objectFit:'cover'}} sizes="(max-width:768px) 100vw, 50vw" />
                  </div>
                  <div className="body">
                    <div className="meta-row"><span>{p.type}</span><span>{p.year}</span></div>
                    <h3>{p.title}</h3>
                    <div className="facts">
                      <div><b>{p.area}</b>Fläche</div>
                      <div><b>{p.duration}</b>Bauzeit</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">FAQ</span>
            <h2>Häufige Fragen zu {sub.title}.</h2>
          </div>
          <div className="faq">
            {sub.faq.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <div className="a">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap inner">
          <h2><em>{sub.cta}</em></h2>
          <div className="actions">
            <Link className="btn btn-white" href="/anfrage">Anfrage starten <span className="arrow">→</span></Link>
            <a className="btn btn-outline-light" href="tel:+4976311730287">+49 7631 1730287</a>
          </div>
        </div>
      </section>
    </>
  )
}
