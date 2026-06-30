import type { Metadata } from 'next'
import Link from 'next/link'
import { cities } from '@/data/cities'

export const metadata: Metadata = {
  title: 'Einsatzgebiete in Südbaden | UBB Bausanierung GmbH',
  description: 'UBB Bausanierung GmbH ist in Freiburg, Müllheim, Lörrach, Rheinfelden und der gesamten Region Südbaden tätig. Alle Standorte im Überblick.',
}

export default function StandortePage() {
  return (
    <>
      <section className="hero hero-slim">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            Standorte
          </div>
          <span className="kicker">Einsatzgebiet Südbaden</span>
          <h1>Wo wir arbeiten.</h1>
          <p className="lede">Von Freiburg bis Rheinfelden — UBB ist der regionale Fachbetrieb für Bausanierung, Umbau und Innenausbau in der gesamten Region Südbaden.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head section-head-v">
            <span className="kicker">7 Städte</span>
            <div><h2>Unsere Einsatzgebiete.</h2></div>
          </div>
          <div className="grid cols-3">
            {cities.map((c) => (
              <Link key={c.slug} className="card-city" href={`/standorte/${c.slug}`}>
                <div className="city-header">
                  <h3>{c.name}</h3>
                  <span className="plz">{c.plz}</span>
                </div>
                <p>{c.intro.slice(0, 120)}…</p>
                <span className="link-arrow">Mehr erfahren →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap inner-narrow">
          <div className="section-head section-head-v">
            <span className="kicker">Einzugsgebiet</span>
            <div><h2>Nicht dabei? Wir kommen trotzdem.</h2></div>
          </div>
          <p>Unser Kerngebiet umfasst den Breisgau und das Markgräflerland. Für größere Projekte fahren wir auch darüber hinaus — sprechen Sie uns an.</p>
          <div className="actions" style={{ marginTop: '2rem' }}>
            <Link className="btn btn-primary" href="/anfrage">Anfrage starten <span className="arrow">→</span></Link>
            <a className="btn btn-outline" href="tel:+4976311730287">+49 7631 1730287</a>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap inner">
          <h2><em>Regional verwurzelt. Präzise ausgeführt.</em></h2>
          <div className="actions">
            <Link className="btn btn-white" href="/anfrage">Anfrage starten <span className="arrow">→</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}
