import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '404 — Seite nicht gefunden | UBB Bausanierung GmbH',
  description: 'Diese Seite existiert nicht. Zurück zur Startseite von UBB Bausanierung GmbH.',
}

export default function NotFound() {
  return (
    <section className="hero hero-slim" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <div className="wrap" style={{ textAlign: 'center', padding: '4rem 1.5rem' }}>
        <span className="kicker">Fehler 404</span>
        <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', marginBlock: '1rem 1.5rem' }}>
          Seite nicht <em>gefunden.</em>
        </h1>
        <p className="lede" style={{ maxWidth: '40ch', margin: '0 auto 2.5rem' }}>
          Die gesuchte Seite existiert nicht oder wurde verschoben. Starten Sie neu von der Startseite.
        </p>
        <div className="actions" style={{ justifyContent: 'center' }}>
          <Link className="btn btn-primary" href="/">
            Zur Startseite <span className="arrow">→</span>
          </Link>
          <Link className="btn btn-outline" href="/anfrage">
            Anfrage stellen
          </Link>
        </div>
      </div>
    </section>
  )
}
