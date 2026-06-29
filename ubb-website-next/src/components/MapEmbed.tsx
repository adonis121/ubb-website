'use client'
import { useState } from 'react'

const MAP_URL =
  'https://maps.google.com/maps?q=Biergasse+1,+79426+Buggingen,+Germany&output=embed&hl=de&z=15'

export default function MapEmbed() {
  const [accepted, setAccepted] = useState(false)

  if (accepted) {
    return (
      <iframe
        className="map-frame"
        src={MAP_URL}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Standort UBB Bausanierung GmbH"
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
      <p>
        Um die Karte zu laden, wird eine Verbindung zu Google Maps hergestellt. Dabei werden Daten an Google LLC (USA) übertragen.
      </p>
      <button className="btn btn-primary" onClick={() => setAccepted(true)}>
        Karte laden
      </button>
    </div>
  )
}
