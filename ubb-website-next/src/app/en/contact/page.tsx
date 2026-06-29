import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import MapEmbed from '@/components/MapEmbed'

export const metadata: Metadata = {
  title: 'Project Enquiry | UBB Bausanierung',
  description: 'Project enquiry in 3 steps — response within 48 hours. Or call us directly: +49 7631 1730287.',
}

export default function EnContactPage() {
  return (
    <>
      <section className="hero hero-slim">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/en">Home</Link><span className="sep">/</span>Contact
          </div>
          <span className="kicker">Contact</span>
          <h1>Tell us about your project.</h1>
          <p className="lede">Three short steps — we will get back to you within 48 hours with an initial assessment.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap two-col">
          <ContactForm />
          <aside className="contact-aside">
            <h3>Prefer to speak directly?</h3>
            <div className="row">
              <span className="lbl">Phone</span>
              <a href="tel:+4976311730287">+49 7631 1730287</a>
            </div>
            <div className="row">
              <span className="lbl">WhatsApp</span>
              <a href="https://wa.me/4976311730287" target="_blank" rel="noopener noreferrer">Send a message</a>
            </div>
            <div className="row">
              <span className="lbl">Email</span>
              <a href="mailto:info@ubb-bausanierung.de">info@ubb-bausanierung.de</a>
            </div>
            <div className="row">
              <span className="lbl">Address</span>
              <span>Biergasse 1, 79426 Buggingen, Germany</span>
            </div>
            <div className="row">
              <span className="lbl">Hours</span>
              <span>Mon–Fri 7:00–17:00</span>
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
            <span className="kicker">Our location</span>
            <h2>Where to find us.</h2>
            <p>Biergasse 1 · 79426 Buggingen · Mon–Fri 7:00–17:00</p>
          </div>
          <MapEmbed />
        </div>
      </section>
    </>
  )
}
