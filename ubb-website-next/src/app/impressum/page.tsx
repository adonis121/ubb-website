import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Impressum | UBB Bausanierung GmbH',
  description: 'Impressum der UBB Bausanierung GmbH, Biergasse 1, 79426 Buggingen.',
  robots: { index: false },
}

export default function ImpressumPage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="breadcrumb" style={{ color: 'var(--slate)' }}>
          <Link href="/" style={{ color: 'var(--slate)' }}>Home</Link><span className="sep" style={{ color: 'var(--green)' }}>/</span>Impressum
        </div>
        <div className="legal-content" style={{ marginTop: '2rem' }}>
          <h1 style={{ fontSize: 'var(--text-3xl)', marginBottom: '2rem' }}>Impressum</h1>

          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            <strong>UBB Bausanierung GmbH</strong><br />
            Biergasse 1<br />
            79426 Buggingen
          </p>
          <p>
            <strong>Handelsregister:</strong> HRB 711948<br />
            <strong>Registergericht:</strong> Amtsgericht Freiburg im Breisgau
          </p>
          <p>
            <strong>Vertreten durch:</strong><br />
            Besim Hotnjani, Geschäftsführer
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: <a href="tel:+4976311730287">+49 7631 1730287</a><br />
            Telefax: +49 7631 1731455<br />
            E-Mail: <a href="mailto:info@ubb-bausanierung.de">info@ubb-bausanierung.de</a>
          </p>

          <h2>Umsatzsteuer-ID</h2>
          <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: Bitte beim Unternehmen erfragen.</p>

          <h2>EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
          <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

          <h2>Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>

          <h2>Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>

          <h2>Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </div>
      </div>
    </section>
  )
}
