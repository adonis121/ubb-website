import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { cities } from '@/data/en/cities'
import { projects } from '@/data/en/projects'
import { services } from '@/data/en/services'
import { serviceImages, projectImages } from '@/data/imageMap'

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params
  const c = cities.find((x) => x.slug === city)
  if (!c) return {}
  return { title: c.metaTitle, description: c.metaDescription }
}

export default async function EnCityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params
  const c = cities.find((x) => x.slug === city)
  if (!c) notFound()

  const relProjects = projects.filter((p) => c.projectSlugs.includes(p.slug))

  const serviceLinks: Record<string, string> = {
    'sanierung-umbau': '/en/renovation',
    'bodenarbeiten': '/en/flooring',
    'innenarbeiten': '/en/interior',
  }

  return (
    <>
      <section className="hero hero-slim">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/en">Home</Link>
            <span className="sep">/</span>
            <Link href="/en/locations">Locations</Link>
            <span className="sep">/</span>
            {c.name}
          </div>
          <span className="kicker">Service area — {c.plz}</span>
          <h1>{c.headline}</h1>
          <p className="lede">{c.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid-2col">
          <div>
            <span className="kicker">About this location</span>
            <h2>UBB in {c.name}.</h2>
            <p style={{ color: 'var(--slate)', marginTop: '1rem', lineHeight: 1.7 }}>{c.description}</p>
            <div className="actions" style={{ marginTop: '2rem' }}>
              <Link className="btn btn-primary" href="/en/contact">Start an enquiry <span className="arrow">→</span></Link>
              <a className="btn btn-outline" href="tel:+4976311730287">+49 7631 1730287</a>
            </div>
          </div>
          <div className="contact-card">
            <h3>Direct contact</h3>
            <ul className="contact-list">
              <li><strong>Phone</strong><a href="tel:+4976311730287">+49 7631 1730287</a></li>
              <li><strong>WhatsApp</strong><a href="https://wa.me/4976311730287">Start chat</a></li>
              <li><strong>Email</strong><a href="mailto:info@ubb-bausanierung.de">info@ubb-bausanierung.de</a></li>
              <li><strong>Registered office</strong>Biergasse 1, 79426 Buggingen</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">Services</span>
            <h2>What we offer in {c.name}.</h2>
          </div>
          <div className="service-feat-list">
            {services.map((s) => (
              <Link key={s.slug} className="service-feat-row" href={serviceLinks[s.slug] ?? '/en'}>
                {serviceImages[s.slug] && (
                  <div className="service-feat-img">
                    <Image src={serviceImages[s.slug]} alt={s.title} fill sizes="(max-width:760px) 100vw, 340px" />
                  </div>
                )}
                <div className="service-feat-body">
                  <span className="service-feat-num">{s.num}</span>
                  <h3>{s.title}</h3>
                  <p>{s.lede}</p>
                  <div className="tags">{s.tags.slice(0, 4).map((t) => <span key={t} className="tag-chip">{t}</span>)}</div>
                  <span className="service-feat-cta">Learn more <span className="arrow">→</span></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {relProjects.length > 0 && (
        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <span className="kicker">References</span>
              <h2>Projects in {c.name}.</h2>
            </div>
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
            <h2>Frequently asked questions — {c.name}.</h2>
          </div>
          <div className="faq">
            {c.faq.map((item) => (
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
          <h2><em>Your project in {c.name} — start now.</em></h2>
          <div className="actions">
            <Link className="btn btn-white" href="/en/contact">Start an enquiry <span className="arrow">→</span></Link>
            <a className="btn btn-outline-light" href="tel:+4976311730287">+49 7631 1730287</a>
          </div>
        </div>
      </section>
    </>
  )
}
