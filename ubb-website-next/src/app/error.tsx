'use client'

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <section className="hero hero-slim" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <div className="wrap" style={{ textAlign: 'center', padding: '4rem 1.5rem' }}>
        <span className="kicker">Fehler</span>
        <h1 style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', marginBlock: '1rem 1.5rem' }}>
          Etwas ist <em>schiefgelaufen.</em>
        </h1>
        <p className="lede" style={{ maxWidth: '40ch', margin: '0 auto 2.5rem' }}>
          Es ist ein unerwarteter Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.
        </p>
        <div className="actions" style={{ justifyContent: 'center' }}>
          <button className="btn btn-primary" onClick={reset}>
            Erneut versuchen
          </button>
          <a className="btn btn-outline" href="tel:+4976311730287">
            +49 7631 1730287
          </a>
        </div>
      </div>
    </section>
  )
}
