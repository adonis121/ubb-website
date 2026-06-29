'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  const isEn = pathname.startsWith('/en')

  if (isEn) {
    return (
      <footer className="site-footer">
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <div className="footer-brand">UBB<span>.</span> Bausanierung</div>
              <p>
                Biergasse 1 · 79426 Buggingen<br />
                Germany<br />
                +49 7631 1730287<br />
                info@ubb-bausanierung.de
              </p>
            </div>
            <div>
              <h4>Services</h4>
              <Link href="/en/renovation">Renovation &amp; Conversion</Link>
              <Link href="/en/flooring">Floor Works</Link>
              <Link href="/en/interior">Interior Works</Link>
              <Link href="/en/projects">Projects</Link>
            </div>
            <div>
              <h4>Company</h4>
              <Link href="/en#about">About UBB</Link>
              <Link href="/en/projects">References</Link>
              <Link href="/en/locations">Locations</Link>
              <Link href="/">Deutsch</Link>
            </div>
            <div>
              <h4>Contact</h4>
              <Link href="/en/contact">Project enquiry</Link>
              <a href="tel:+4976311730287">+49 7631 1730287</a>
              <a href="mailto:info@ubb-bausanierung.de">info@ubb-bausanierung.de</a>
              <a href="https://www.instagram.com/ubb.bausanierung" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
          <div className="footer-legal">
            <span>© 2026 UBB Bausanierung GmbH · HRB 711948, Amtsgericht Freiburg</span>
            <span>
              <Link href="/en/imprint" style={{ color: 'inherit' }}>Imprint</Link>
              {' · '}
              <Link href="/en/privacy" style={{ color: 'inherit' }}>Privacy Policy</Link>
            </span>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">UBB<span>.</span> Bausanierung</div>
            <p>
              Biergasse 1 · 79426 Buggingen<br />
              +49 7631 1730287<br />
              info@ubb-bausanierung.de
            </p>
          </div>
          <div>
            <h4>Leistungen</h4>
            <Link href="/sanierung-umbau">Sanierung &amp; Umbau</Link>
            <Link href="/bodenarbeiten">Bodenarbeiten</Link>
            <Link href="/innenarbeiten">Innenarbeiten</Link>
            <Link href="/projekte">Projekte</Link>
          </div>
          <div>
            <h4>Unternehmen</h4>
            <Link href="/#ueber-uns">Über uns</Link>
            <Link href="/projekte">Referenzen</Link>
            <Link href="/standorte">Standorte</Link>
            <Link href="/en">English</Link>
          </div>
          <div>
            <h4>Kontakt</h4>
            <Link href="/anfrage">Projektanfrage</Link>
            <a href="tel:+4976311730287">+49 7631 1730287</a>
            <a href="mailto:info@ubb-bausanierung.de">info@ubb-bausanierung.de</a>
            <a href="https://www.instagram.com/ubb.bausanierung" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
        <div className="footer-legal">
          <span>© 2026 UBB Bausanierung GmbH · HRB 711948, Amtsgericht Freiburg</span>
          <span>
            <Link href="/impressum" style={{ color: 'inherit' }}>Impressum</Link>
            {' · '}
            <Link href="/datenschutz" style={{ color: 'inherit' }}>Datenschutz</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
