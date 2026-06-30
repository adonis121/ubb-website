import type { Metadata } from 'next'
import Link from 'next/link'
import { cities } from '@/data/en/cities'

export const metadata: Metadata = {
  title: 'Service Areas in Southern Baden | UBB Bausanierung GmbH',
  description: 'UBB Bausanierung GmbH works in Freiburg, Müllheim, Lörrach, Rheinfelden and across the Southern Baden region. Overview of all locations.',
}

export default function EnLocationsPage() {
  return (
    <>
      <section className="hero hero-slim">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/en">Home</Link>
            <span className="sep">/</span>
            Locations
          </div>
          <span className="kicker">Service Area: Southern Baden</span>
          <h1>Where we work.</h1>
          <p className="lede">From Freiburg to Rheinfelden — UBB is the regional specialist contractor for renovation, conversion and interior fit-out across the whole of Southern Baden.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head section-head-v">
            <span className="kicker">7 Towns</span>
            <div><h2>Our service areas.</h2></div>
          </div>
          <div className="grid cols-3">
            {cities.map((c) => (
              <Link key={c.slug} className="card-city" href={`/en/locations/${c.slug}`}>
                <div className="city-header">
                  <h3>{c.name}</h3>
                  <span className="plz">{c.plz}</span>
                </div>
                <p>{c.intro.slice(0, 120)}…</p>
                <span className="link-arrow">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap inner-narrow">
          <div className="section-head section-head-v">
            <span className="kicker">Coverage</span>
            <div><h2>Not on the list? We still come to you.</h2></div>
          </div>
          <p>Our core territory covers the Breisgau and the Markgräflerland wine region. For larger projects we travel further afield — just get in touch.</p>
          <div className="actions" style={{ marginTop: '2rem' }}>
            <Link className="btn btn-primary" href="/en/contact">Start an enquiry <span className="arrow">→</span></Link>
            <a className="btn btn-outline" href="tel:+4976311730287">+49 7631 1730287</a>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap inner">
          <h2><em>Regionally rooted. Precisely delivered.</em></h2>
          <div className="actions">
            <Link className="btn btn-white" href="/en/contact">Start an enquiry <span className="arrow">→</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}
