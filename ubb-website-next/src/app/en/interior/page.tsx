import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { services as enServices } from '@/data/en/services'
import { projects as enProjects } from '@/data/en/projects'
import { serviceImages, projectImages } from '@/data/imageMap'

const cat = enServices.find((s) => s.slug === 'innenarbeiten')!

export const metadata: Metadata = {
  title: cat.metaTitle,
  description: cat.metaDescription,
}

export default function EnInteriorPage() {
  const relProjects = enProjects.filter((p) => cat.projectSlugs.includes(p.slug))
  return (
    <>
      <section className="hero hero-slim" style={{ position: 'relative', overflow: 'hidden' }}>
        {serviceImages['innenarbeiten'] && (
          <>
            <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
              <Image src={serviceImages['innenarbeiten']} alt={cat.title} fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority />
            </div>
            <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(135deg, rgba(13,27,42,.88) 0%, rgba(13,27,42,.65) 100%)' }} />
          </>
        )}
        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          <div className="breadcrumb"><Link href="/en">Home</Link><span className="sep">/</span>Interior Works</div>
          <span className="kicker">{cat.kicker}</span>
          <h1>{cat.title}</h1>
          <p className="lede">{cat.lede}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head"><span className="kicker">Services</span><h2>Four trades for a perfect fit-out.</h2></div>
          <div className="service-feat-list">
            {cat.subServices.map((s) => (
              <Link key={s.slug} className="service-feat-row" href={`/en/interior/${s.slug}`}>
                {serviceImages[s.slug] && (
                  <div className="service-feat-img">
                    <Image src={serviceImages[s.slug]} alt={s.title} fill sizes="(max-width:760px) 100vw, 340px" />
                  </div>
                )}
                <div className="service-feat-body">
                  <span className="service-feat-num">{s.num}</span>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                  <div className="tags">{s.tags.slice(0, 4).map((t) => <span key={t} className="tag-chip">{t}</span>)}</div>
                  <span className="service-feat-cta">Learn more <span className="arrow">→</span></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="section-head"><span className="kicker">Process</span><h2>How your interior fit-out works.</h2></div>
          <div className="process">
            {cat.process.map((step) => (
              <div key={step.title} className="step-card"><h3>{step.title}</h3><p>{step.description}</p></div>
            ))}
          </div>
        </div>
      </section>

      {relProjects.length > 0 && (
        <section className="section">
          <div className="wrap">
            <div className="section-head"><span className="kicker">References</span><h2>Interior projects from the region.</h2></div>
            <div className="grid cols-2">
              {relProjects.map((p) => (
                <Link key={p.slug} className="card-project" href={`/en/projects/${p.slug}`}>
                  <div className="img">
                    <Image src={projectImages[p.slug] ?? '/images/placeholder.png'} alt={p.title} fill style={{ objectFit: 'cover' }} sizes="(max-width:768px) 100vw, 50vw" />
                  </div>
                  <div className="body">
                    <div className="meta-row"><span>{p.type}</span><span>{p.year}</span></div>
                    <h3>{p.title}</h3>
                    <div className="facts">
                      <div><b>{p.area}</b>Area</div>
                      <div><b>{p.duration}</b>Duration</div>
                      <div><b>{p.trades}</b>Trades</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="cta-band">
        <div className="wrap inner">
          <h2>Spaces that <em>work</em>.</h2>
          <div className="actions">
            <Link className="btn btn-white" href="/en/contact">Start a project enquiry <span className="arrow">→</span></Link>
            <a className="btn btn-outline-light" href="tel:+4976311730287">+49 7631 1730287</a>
          </div>
        </div>
      </section>
    </>
  )
}
