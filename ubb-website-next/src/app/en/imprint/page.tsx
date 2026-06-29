import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Imprint | UBB Bausanierung GmbH',
  description: 'Legal imprint of UBB Bausanierung GmbH, Biergasse 1, 79426 Buggingen.',
  robots: { index: false },
}

export default function EnImprintPage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="breadcrumb" style={{ color: 'var(--slate)' }}>
          <Link href="/en" style={{ color: 'var(--slate)' }}>Home</Link>
          <span className="sep" style={{ color: 'var(--green)' }}>/</span>Imprint
        </div>
        <div className="legal-content" style={{ marginTop: '2rem' }}>
          <h1 style={{ fontSize: 'var(--text-3xl)', marginBottom: '2rem' }}>Imprint</h1>

          <h2>Information pursuant to § 5 TMG (German Telemedia Act)</h2>
          <p>
            <strong>UBB Bausanierung GmbH</strong><br />
            Biergasse 1<br />
            79426 Buggingen<br />
            Germany
          </p>
          <p>
            <strong>Commercial register:</strong> HRB 711948<br />
            <strong>Registry court:</strong> Amtsgericht Freiburg im Breisgau
          </p>
          <p>
            <strong>Represented by:</strong><br />
            Besim Hotnjani, Managing Director
          </p>

          <h2>Contact</h2>
          <p>
            Phone: <a href="tel:+4976311730287">+49 7631 1730287</a><br />
            Fax: +49 7631 1731455<br />
            Email: <a href="mailto:info@ubb-bausanierung.de">info@ubb-bausanierung.de</a>
          </p>

          <h2>VAT identification number</h2>
          <p>VAT identification number pursuant to § 27a of the German VAT Act: Please enquire directly with the company.</p>

          <h2>EU Online Dispute Resolution</h2>
          <p>
            The European Commission provides a platform for online dispute resolution (ODR):{' '}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
          <p>We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.</p>

          <h2>Liability for content</h2>
          <p>
            As a service provider, we are responsible for our own content on these pages in accordance with general law pursuant to § 7 para. 1 TMG. Pursuant to §§ 8 to 10 TMG, however, we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
          </p>

          <h2>Liability for links</h2>
          <p>
            Our website contains links to external websites of third parties over whose content we have no influence. We cannot therefore accept any liability for this third-party content. The respective provider or operator of the pages is always responsible for the content of the linked pages.
          </p>

          <h2>Copyright</h2>
          <p>
            The content and works created by the site operators on these pages are subject to German copyright law. Reproduction, editing, distribution and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator.
          </p>
        </div>
      </div>
    </section>
  )
}
