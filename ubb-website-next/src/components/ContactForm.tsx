'use client'
import { useState } from 'react'

// Replace with your actual Formspree form ID after signing up at formspree.io
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

type FormData = {
  art: string
  plz: string
  objektart: string
  flaeche: string
  start: string
  name: string
  kontakt: string
  beschreibung: string
}

const initialData: FormData = {
  art: 'Kernsanierung',
  plz: '',
  objektart: 'Wohnung',
  flaeche: '100–250 m²',
  start: 'So bald wie möglich',
  name: '',
  kontakt: '',
  beschreibung: '',
}

export default function ContactForm() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<FormData>(initialData)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const update = (field: keyof FormData, value: string) =>
    setData((d) => ({ ...d, [field]: value }))

  const handleSubmit = async () => {
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          Projektart: data.art,
          Postleitzahl: data.plz,
          Objektart: data.objektart,
          Fläche: data.flaeche,
          Wunschstart: data.start,
          Name: data.name,
          Kontakt: data.kontakt,
          Beschreibung: data.beschreibung,
        }),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder rufen Sie uns an.')
      }
    } catch {
      setError('Keine Verbindung. Bitte rufen Sie uns direkt an: +49 7631 1730287')
    }
    setSubmitting(false)
  }

  if (submitted) {
    return (
      <div className="form-card form-success">
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
        <h2>Anfrage gesendet.</h2>
        <p>Wir melden uns innerhalb von 48 Stunden mit einer ersten Einschätzung.</p>
        <a className="btn btn-primary" href="/">Zurück zur Startseite</a>
      </div>
    )
  }

  return (
    <div className="form-card">
      <div className="steps">
        <div className={`step${step >= 1 ? ' done' : ''}`} />
        <div className={`step${step >= 2 ? ' done' : ''}`} />
        <div className={`step${step >= 3 ? ' done' : ''}`} />
      </div>

      {step === 1 && (
        <div>
          <div className="field">
            <label>Um welches Projekt geht es?</label>
            <div className="radio-cards">
              {['Kernsanierung', 'Umbau', 'Bodenarbeiten', 'Innenausbau'].map((art) => (
                <label key={art}>
                  <input
                    type="radio"
                    name="art"
                    checked={data.art === art}
                    onChange={() => update('art', art)}
                  />
                  <span>{art}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="field">
            <label>Postleitzahl des Objekts</label>
            <input
              type="text"
              placeholder="z. B. 79106"
              value={data.plz}
              onChange={(e) => update('plz', e.target.value)}
            />
            <div className="hint">Wir sind in Freiburg, Müllheim, Lörrach &amp; Umgebung tätig.</div>
          </div>
          <button className="btn btn-primary" onClick={() => setStep(2)}>
            Weiter <span className="arrow">→</span>
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <div className="field">
            <label>Objektart</label>
            <select value={data.objektart} onChange={(e) => update('objektart', e.target.value)}>
              <option>Wohnung</option>
              <option>Einfamilienhaus</option>
              <option>Mehrfamilienhaus</option>
              <option>Gewerbeobjekt</option>
              <option>Öffentliches Gebäude</option>
            </select>
          </div>
          <div className="field">
            <label>Ungefähre Fläche</label>
            <select value={data.flaeche} onChange={(e) => update('flaeche', e.target.value)}>
              <option>bis 100 m²</option>
              <option>100–250 m²</option>
              <option>250–500 m²</option>
              <option>über 500 m²</option>
            </select>
          </div>
          <div className="field">
            <label>Gewünschter Start</label>
            <select value={data.start} onChange={(e) => update('start', e.target.value)}>
              <option>So bald wie möglich</option>
              <option>In 1–3 Monaten</option>
              <option>In 3–6 Monaten</option>
              <option>Noch offen</option>
            </select>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn btn-outline" onClick={() => setStep(1)}>Zurück</button>
            <button className="btn btn-primary" onClick={() => setStep(3)}>
              Weiter <span className="arrow">→</span>
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <div className="field">
            <label>Ihr Name</label>
            <input
              type="text"
              placeholder="Vor- und Nachname"
              value={data.name}
              onChange={(e) => update('name', e.target.value)}
            />
          </div>
          <div className="field">
            <label>Telefon oder E-Mail</label>
            <input
              type="text"
              placeholder="So erreichen wir Sie am besten"
              value={data.kontakt}
              onChange={(e) => update('kontakt', e.target.value)}
            />
          </div>
          <div className="field">
            <label>Kurzbeschreibung (optional)</label>
            <textarea
              rows={4}
              placeholder="Was ist geplant? Gibt es einen Wunschtermin?"
              value={data.beschreibung}
              onChange={(e) => update('beschreibung', e.target.value)}
            />
          </div>
          {error && (
            <p style={{ color: 'var(--error)', fontSize: 'var(--text-sm)', marginBottom: '1rem' }}>
              {error}
            </p>
          )}
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn btn-outline" onClick={() => setStep(2)}>Zurück</button>
            <button
              className="btn btn-primary"
              onClick={handleSubmit}
              disabled={submitting || !data.name || !data.kontakt}
            >
              {submitting ? 'Wird gesendet…' : <>Anfrage absenden <span className="arrow">→</span></>}
            </button>
          </div>
          <p style={{ fontSize: 'var(--text-xs)', color: 'var(--slate)', marginTop: '1rem' }}>
            Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer{' '}
            <a href="/datenschutz" style={{ color: 'var(--green)' }}>Datenschutzerklärung</a> zu.
          </p>
        </div>
      )}
    </div>
  )
}
