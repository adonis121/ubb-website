'use client'
import { useState } from 'react'

const MAP_URL =
  'https://maps.google.com/maps?q=Biergasse+1,+79426+Buggingen,+Germany&output=embed&hl=de&z=15'

const copy = {
  de: {
    notice: 'Um die Karte zu laden, wird eine Verbindung zu Google Maps hergestellt. Dabei werden Daten an Google LLC (USA) übertragen.',
    button: 'Karte laden',
    title: 'Standort UBB Bausanierung GmbH',
  },
  en: {
    notice: 'Loading the map establishes a connection to Google Maps. Data will be transferred to Google LLC (USA).',
    button: 'Load map',
    title: 'UBB Bausanierung GmbH — location',
  },
}

export default function MapEmbed({ lang = 'de' }: { lang?: 'de' | 'en' }) {
  const [accepted, setAccepted] = useState(false)
  const t = copy[lang]

  if (accepted) {
    return (
      <iframe
        className="map-frame"
        src={MAP_URL}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={t.title}
      />
    )
  }

  return (
    <div className="map-consent">
      <div className="map-icon">📍</div>
      <div>
        <strong>UBB Bausanierung GmbH</strong>
        Biergasse 1 · 79426 Buggingen
      </div>
      <p>{t.notice}</p>
      <button className="btn btn-primary" onClick={() => setAccepted(true)}>
        {t.button}
      </button>
    </div>
  )
}
