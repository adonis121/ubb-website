import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import TestimonialsSlider from '@/components/TestimonialsSlider'
import EnHeroSlider from '@/components/EnHeroSlider'
import { projectImages, serviceImages } from '@/data/imageMap'

export const metadata: Metadata = {
  title: 'UBB Bausanierung | Building Renovation & Interior Fit-Out in Southern Baden',
  description: 'Full-scope renovation, conversion and interior fit-out from a single source. Since 2010 in Freiburg, Müllheim and Southern Baden. 15 specialists · 4.3★ · One contact.',
}

export default function EnglishHomePage() {
  return (
    <>
      {/* HERO */}
      <EnHeroSlider />

      {/* SERVICES */}
      <section className="section">
        <div className="wrap">
          <div className="section-head section-head-v">
            <span className="kicker">Services</span>
            <div>
              <h2>Everything from one source. One contact.</h2>
              <p>Three service areas, all trades coordinated — including partner firms for electrical and plumbing.</p>
            </div>
          </div>
          <div className="service-list">
            <Link className="service-row" href="/en/renovation">
              <span className="sr-num">01</span>
              <div className="sr-body">
                <h3>Renovation &amp; Conversion</h3>
                <p>From core renovation to demolition: we bring existing buildings back to their best.</p>
                <span className="sr-cta">Learn more →</span>
              </div>
              {serviceImages['sanierung-umbau'] && (
                <div className="sr-image">
                  <Image src={serviceImages['sanierung-umbau']} alt="" fill style={{objectFit:'cover'}} sizes="40vw" />
                </div>
              )}
            </Link>
            <Link className="service-row" href="/en/flooring">
              <span className="sr-num">02</span>
              <div className="sr-body">
                <h3>Floor Works</h3>
                <p>Screed, coatings, tiles and micro-cement — floors built to last decades, not years.</p>
                <span className="sr-cta">Learn more →</span>
              </div>
              {serviceImages['bodenarbeiten'] && (
                <div className="sr-image">
                  <Image src={serviceImages['bodenarbeiten']} alt="" fill style={{objectFit:'cover'}} sizes="40vw" />
                </div>
              )}
            </Link>
            <Link className="service-row" href="/en/interior">
              <span className="sr-num">03</span>
              <div className="sr-body">
                <h3>Interior Works</h3>
                <p>Drylining, plastering, stucco and painting — precise interior fit-out to the last detail.</p>
                <span className="sr-cta">Learn more →</span>
              </div>
              {serviceImages['innenarbeiten'] && (
                <div className="sr-image">
                  <Image src={serviceImages['innenarbeiten']} alt="" fill style={{objectFit:'cover'}} sizes="40vw" />
                </div>
              )}
            </Link>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="section alt">
        <div className="wrap">
          <div className="section-head section-head-v">
            <span className="kicker">Reference project</span>
            <div>
              <h2>See the difference.</h2>
              <p>Multi-family house, Freiburg — core renovation, 420 m², 14 weeks. Drag the slider.</p>
            </div>
          </div>
          <BeforeAfterSlider />
          <p style={{ marginTop: '1rem' }}>
            <Link className="btn btn-ghost" href="/en/projects/mfh-freiburg">Read the full project story <span className="arrow">→</span></Link>
          </p>
        </div>
      </section>

      {/* WHY UBB */}
      <section className="section dark" id="about">
        <div className="wrap">
          <div className="section-head section-head-v">
            <span className="kicker">Why UBB</span>
            <div><h2>We don't promise what we can't deliver.</h2></div>
          </div>
          <div className="grid cols-3">
            <div className="value">
              <h3>Full scope</h3>
              <p>From shell condition to final handover — all trades coordinated, including electrical and plumbing partners. You hold one conversation, not seven.</p>
            </div>
            <div className="value">
              <h3>Single contact</h3>
              <p>One number for everything. Clear communication, efficient scheduling, no responsibility ping-pong between different contractors.</p>
            </div>
            <div className="value">
              <h3>On-time delivery</h3>
              <p>A realistic plan before construction starts, completed within the agreed timeframe. Since 2010 — word gets around.</p>
            </div>
            <div className="value">
              <h3>Transparent pricing</h3>
              <p>Detailed quote before work begins. No hidden extras — changes are discussed before they are executed.</p>
            </div>
            <div className="value">
              <h3>Locally rooted</h3>
              <p>Headquartered in Buggingen since 2010. Short routes, local knowledge, personal accountability — not an anonymous out-of-region company.</p>
            </div>
            <div className="value">
              <h3>Documented quality</h3>
              <p>Photo documentation and acceptance report on every project. You always know what was done — and have proof in hand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section">
        <div className="wrap">
          <div className="section-head section-head-v">
            <span className="kicker">Projects</span>
            <div><h2>Work that speaks for itself.</h2></div>
          </div>
          <div className="projects-bento">
            {([
              { slug: 'mfh-freiburg',              type: 'Core Renovation', year: '2025', title: 'Multi-family house, Freiburg',    area: '420 m²', dur: '14 wks', trades: '6' },
              { slug: 'gewerbehalle-muellheim',     type: 'Screed Works',    year: '2025', title: 'Industrial hall, Müllheim',       area: '850 m²', dur: '3 wks',  trades: '2' },
              { slug: 'praxisumbau-bad-krozingen',  type: 'Conversion',      year: '2024', title: 'Medical practice, Bad Krozingen', area: '180 m²', dur: '8 wks',  trades: '5' },
            ] as const).map((p) => (
              <Link key={p.slug} className="card-project" href={`/en/projects/${p.slug}`}>
                <div className="img">
                  <Image src={projectImages[p.slug]} alt={p.title} fill style={{ objectFit: 'cover' }} sizes="(max-width:560px) 100vw, (max-width:860px) 50vw, (max-width:1200px) 67vw, 800px" />
                </div>
                <div className="body">
                  <div className="meta-row"><span>{p.type}</span><span>{p.year}</span></div>
                  <h3>{p.title}</h3>
                  <div className="facts">
                    <div><b>{p.area}</b>Area</div>
                    <div><b>{p.dur}</b>Duration</div>
                    <div><b>{p.trades}</b>Trades</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <p style={{ marginTop: '2rem' }}>
            <Link className="btn btn-dark" href="/en/projects">View all projects <span className="arrow">→</span></Link>
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section green">
        <div className="wrap">
          <div className="section-head section-head-v">
            <span className="kicker">Reviews</span>
            <div>
              <h2>What our clients say.</h2>
              <p>4.3 out of 5 stars from 40 Google reviews.</p>
            </div>
          </div>
          <TestimonialsSlider />
        </div>
      </section>

      {/* PROCESS */}
      <section className="section alt">
        <div className="wrap">
          <div className="section-head section-head-v">
            <span className="kicker">Process</span>
            <div>
              <h2>From enquiry to handover.</h2>
              <p>Clearly structured — so you always know what happens next.</p>
            </div>
          </div>
          <div className="process">
            <div className="step-card">
              <h3>01 — Site survey</h3>
              <p>Free on-site visit — we inspect the property, listen, and record the current state. No sales pitch, just facts.</p>
            </div>
            <div className="step-card">
              <h3>02 — Fixed-price quote</h3>
              <p>Transparent fixed-price quote with scope of work, schedule and material details. You know exactly what you are getting.</p>
            </div>
            <div className="step-card">
              <h3>03 — Construction</h3>
              <p>On-time start, daily coordination of all trades, regular updates. Your contact person is always reachable.</p>
            </div>
            <div className="step-card">
              <h3>04 — Handover</h3>
              <p>Joint walkthrough, photo documentation, acceptance report. Only when you are satisfied is the project complete.</p>
            </div>
          </div>
          <p style={{ marginTop: '2rem' }}>
            <Link className="btn btn-dark" href="/en/contact">Request a site survey <span className="arrow">→</span></Link>
          </p>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="section alt">
        <div className="wrap">
          <div className="region-split">
            <div>
              <span className="kicker">Service area</span>
              <h2>At home in Southern Baden.</h2>
              <p style={{ color: 'var(--slate)', marginTop: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                From Freiburg to Rheinfelden — UBB is your regional specialist contractor for renovation, conversion and interior fit-out across the Breisgau and Markgräflerland. Short distances, fast response times.
              </p>
              <Link className="btn btn-primary" href="/en/locations">All locations <span className="arrow">→</span></Link>
            </div>
            <div className="region-pills">
              <Link className="region-pill" href="/en/locations/freiburg"><span className="pin">▸</span>Freiburg i.B.<span className="plz">79098</span></Link>
              <Link className="region-pill" href="/en/locations/muellheim"><span className="pin">▸</span>Müllheim<span className="plz">79379</span></Link>
              <Link className="region-pill" href="/en/locations/buggingen"><span className="pin">▸</span>Buggingen<span className="plz">79426</span></Link>
              <Link className="region-pill" href="/en/locations/bad-krozingen"><span className="pin">▸</span>Bad Krozingen<span className="plz">79189</span></Link>
              <Link className="region-pill" href="/en/locations/breisach"><span className="pin">▸</span>Breisach<span className="plz">79206</span></Link>
              <Link className="region-pill" href="/en/locations/loerrach"><span className="pin">▸</span>Lörrach<span className="plz">79539</span></Link>
              <Link className="region-pill" href="/en/locations/rheinfelden"><span className="pin">▸</span>Rheinfelden<span className="plz">79618</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="wrap">
          <div className="section-head section-head-v">
            <span className="kicker">FAQ</span>
            <div><h2>Frequently asked questions.</h2></div>
          </div>
          <div className="faq">
            <details open>
              <summary>Why choose UBB for my project?</summary>
              <div className="a">Everything from one source — from screed to stucco. One contact person coordinates all trades, including partner firms for electrical and plumbing. This saves you the effort of managing multiple contractors.</div>
            </details>
            <details>
              <summary>Can UBB deliver on time and on budget?</summary>
              <div className="a">A realistic plan before construction starts, clear communication throughout, completion within the agreed timeframe. We have worked this way since 2010 — and our reviews reflect that.</div>
            </details>
            <details>
              <summary>How far in advance do I need to enquire?</summary>
              <div className="a">The earlier the better — especially for larger projects. For smaller works we often have short-notice capacity. Contact us without obligation and we will discuss availability.</div>
            </details>
            <details>
              <summary>Does UBB also carry out individual trades?</summary>
              <div className="a">Yes — even if you only need screed works, drylining or painting, we can help. Our strength lies in coordinating multiple trades from a single source.</div>
            </details>
            <details>
              <summary>Do you work for private clients?</summary>
              <div className="a">Yes — from owner-occupied homes and apartments to rental properties and commercial spaces. Our clients range from private individuals to property managers and business owners.</div>
            </details>
            <details>
              <summary>Which area does UBB cover?</summary>
              <div className="a">Our core area is Southern Baden: Freiburg, Müllheim, Buggingen, Bad Krozingen, Breisach, Lörrach and Rheinfelden. For larger projects we also travel beyond this area — just ask.</div>
            </details>
            <details>
              <summary>How sustainable is UBB's approach?</summary>
              <div className="a">Durability is the most sustainable way to build. We use low-emission materials, minimise waste through careful planning, and document every project — for full transparency with clients and authorities.</div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="wrap inner">
          <h2>Ready for your <em>project</em>?</h2>
          <div className="actions">
            <Link className="btn btn-white" href="/en/contact">Start a project inquiry <span className="arrow">→</span></Link>
            <a className="btn btn-outline-light" href="tel:+4976311730287">+49 7631 1730287</a>
          </div>
        </div>
      </section>
    </>
  )
}
