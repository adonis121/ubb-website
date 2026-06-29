'use client'
import { useState } from 'react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

type FormData = {
  type: string
  postcode: string
  buildingType: string
  area: string
  start: string
  name: string
  contact: string
  description: string
}

const initialData: FormData = {
  type: 'Core renovation',
  postcode: '',
  buildingType: 'Apartment',
  area: '100–250 m²',
  start: 'As soon as possible',
  name: '',
  contact: '',
  description: '',
}

export default function EnContactForm() {
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
          'Project type': data.type,
          Postcode: data.postcode,
          'Building type': data.buildingType,
          Area: data.area,
          'Desired start': data.start,
          Name: data.name,
          Contact: data.contact,
          Description: data.description,
        }),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try again or call us directly.')
      }
    } catch {
      setError('No connection. Please call us directly: +49 7631 1730287')
    }
    setSubmitting(false)
  }

  if (submitted) {
    return (
      <div className="form-card form-success">
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
        <h2>Enquiry sent.</h2>
        <p>We will get back to you within 48 hours with an initial assessment.</p>
        <a className="btn btn-primary" href="/en">Back to home</a>
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
            <label>What type of project is it?</label>
            <div className="radio-cards">
              {['Core renovation', 'Conversion', 'Floor works', 'Interior fit-out'].map((type) => (
                <label key={type}>
                  <input
                    type="radio"
                    name="type"
                    checked={data.type === type}
                    onChange={() => update('type', type)}
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="field">
            <label>Postcode of the property</label>
            <input
              type="text"
              placeholder="e.g. 79106"
              value={data.postcode}
              onChange={(e) => update('postcode', e.target.value)}
            />
            <div className="hint">We operate in Freiburg, Müllheim, Lörrach &amp; the surrounding region.</div>
          </div>
          <button className="btn btn-primary" onClick={() => setStep(2)}>
            Next <span className="arrow">→</span>
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <div className="field">
            <label>Building type</label>
            <select value={data.buildingType} onChange={(e) => update('buildingType', e.target.value)}>
              <option>Apartment</option>
              <option>Detached house</option>
              <option>Multi-family building</option>
              <option>Commercial property</option>
              <option>Public building</option>
            </select>
          </div>
          <div className="field">
            <label>Approximate area</label>
            <select value={data.area} onChange={(e) => update('area', e.target.value)}>
              <option>up to 100 m²</option>
              <option>100–250 m²</option>
              <option>250–500 m²</option>
              <option>over 500 m²</option>
            </select>
          </div>
          <div className="field">
            <label>Desired start</label>
            <select value={data.start} onChange={(e) => update('start', e.target.value)}>
              <option>As soon as possible</option>
              <option>In 1–3 months</option>
              <option>In 3–6 months</option>
              <option>Not yet decided</option>
            </select>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn btn-outline" onClick={() => setStep(1)}>Back</button>
            <button className="btn btn-primary" onClick={() => setStep(3)}>
              Next <span className="arrow">→</span>
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <div className="field">
            <label>Your name</label>
            <input
              type="text"
              placeholder="First and last name"
              value={data.name}
              onChange={(e) => update('name', e.target.value)}
            />
          </div>
          <div className="field">
            <label>Phone or email</label>
            <input
              type="text"
              placeholder="Best way to reach you"
              value={data.contact}
              onChange={(e) => update('contact', e.target.value)}
            />
          </div>
          <div className="field">
            <label>Brief description (optional)</label>
            <textarea
              rows={4}
              placeholder="What is planned? Is there a preferred date?"
              value={data.description}
              onChange={(e) => update('description', e.target.value)}
            />
          </div>
          {error && (
            <p style={{ color: 'var(--error)', fontSize: 'var(--text-sm)', marginBottom: '1rem' }}>
              {error}
            </p>
          )}
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn btn-outline" onClick={() => setStep(2)}>Back</button>
            <button
              className="btn btn-primary"
              onClick={handleSubmit}
              disabled={submitting || !data.name || !data.contact}
            >
              {submitting ? 'Sending…' : <>Send enquiry <span className="arrow">→</span></>}
            </button>
          </div>
          <p style={{ fontSize: 'var(--text-xs)', color: 'var(--slate)', marginTop: '1rem' }}>
            By submitting you agree to the processing of your data in accordance with our{' '}
            <a href="/en/privacy" style={{ color: 'var(--green)' }}>Privacy Policy</a>.
          </p>
        </div>
      )}
    </div>
  )
}
