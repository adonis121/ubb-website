import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import MapEmbed from '@/components/MapEmbed'

export const metadata: Metadata = {
  title: 'Projektanfrage | UBB Bausanierung',
  description: 'Projektanfrage in 3 Schritten — Antwort innerhalb von 48 Stunden. Oder direkt anrufen: +49 7631 1730287.',
}

export default function AnfragePage() {
  return (
    <>
      <section className="hero hero-slim">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span className="sep">/</span>Projektanfrage
          </div>
          <span className="kicker">Kontakt</span>
          <h1>Erzählen Sie uns von Ihrem Projekt.</h1>
          <p className="lede">Drei kurze Schritte — wir melden uns innerhalb von 48 Stunden mit einer ersten Einschätzung.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap two-col">
          <ContactForm />
          <aside className="contact-aside">
            <h3>Lieber direkt sprechen?</h3>
            <div className="row">
              <span className="lbl">Telefon</span>
              <a href="tel:+4976311730287">+49 7631 1730287</a>
            </div>
            <div className="row">
              <span className="lbl">WhatsApp</span>
              <a href="https://wa.me/4976311730287" target="_blank" rel="noopener noreferrer">Nachricht senden</a>
            </div>
            <div className="row">
              <span className="lbl">E-Mail</span>
              <a href="mailto:info@ubb-bausanierung.de">info@ubb-bausanierung.de</a>
            </div>
            <div className="row">
              <span className="lbl">Adresse</span>
              <span>Biergasse 1, 79426 Buggingen</span>
            </div>
            <div className="row">
              <span className="lbl">Zeiten</span>
              <span>Mo–Fr 7:00–17:00 Uhr</span>
            </div>
            <div className="row">
              <span className="lbl">Fax</span>
              <span>+49 7631 1731455</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">Firmensitz</span>
            <h2>Wo Sie uns finden.</h2>
            <p>Biergasse 1 · 79426 Buggingen · Mo–Fr 7:00–17:00 Uhr</p>
          </div>
          <MapEmbed />
        </div>
      </section>
    </>
  )
}
