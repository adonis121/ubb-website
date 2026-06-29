import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | UBB Bausanierung GmbH',
  description: 'Datenschutzerklärung der UBB Bausanierung GmbH.',
  robots: { index: false },
}

export default function DatenschutzPage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="breadcrumb" style={{ color: 'var(--slate)' }}>
          <Link href="/" style={{ color: 'var(--slate)' }}>Home</Link>
          <span className="sep" style={{ color: 'var(--green)' }}>/</span>Datenschutz
        </div>
        <div className="legal-content" style={{ marginTop: '2rem' }}>
          <h1 style={{ fontSize: 'var(--text-3xl)', marginBottom: '2rem' }}>Datenschutzerklärung</h1>

          <h2>1. Datenschutz auf einen Blick</h2>
          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>

          <h3>Datenerfassung auf dieser Website</h3>
          <p>
            <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber: UBB Bausanierung GmbH, Biergasse 1, 79426 Buggingen, Telefon: +49 7631 1730287, E-Mail: info@ubb-bausanierung.de.
          </p>

          <h2>2. Hosting</h2>
          <p>
            Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Die Nutzung des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
          </p>

          <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
          <h3>Datenschutz</h3>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>

          <h3>Hinweis zur verantwortlichen Stelle</h3>
          <p>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
            UBB Bausanierung GmbH<br />
            Biergasse 1<br />
            79426 Buggingen<br />
            Telefon: +49 7631 1730287<br />
            E-Mail: info@ubb-bausanierung.de
          </p>

          <h3>Speicherdauer</h3>
          <p>
            Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben.
          </p>

          <h2>4. Datenerfassung auf dieser Website</h2>
          <h3>Kontaktformular</h3>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
          <p>
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
          </p>
          <p>
            Die Daten, die Sie im Kontaktformular eingeben, verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen — insbesondere Aufbewahrungsfristen — bleiben unberührt.
          </p>
          <p>
            Unser Kontaktformular nutzt den Dienst Formspree (Formspree Inc., USA). Bitte beachten Sie die Datenschutzerklärung von Formspree unter{' '}
            <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
              https://formspree.io/legal/privacy-policy
            </a>.
          </p>

          <h3>Server-Log-Dateien</h3>
          <p>
            Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse.
          </p>
          <p>
            Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Diese Daten werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO erhoben. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website.
          </p>

          <h2>5. Cookies</h2>
          <p>
            Diese Website verwendet ausschließlich technisch notwendige Cookies. Es werden keine Tracking-, Analyse- oder Werbe-Cookies eingesetzt.
          </p>
          <p>
            Beim ersten Besuch erscheint ein Cookie-Hinweisbanner. Ihre Entscheidung (Akzeptieren oder Ablehnen) wird in Ihrem Browser unter dem Schlüssel <code>ubb_cookie_consent</code> im lokalen Speicher (localStorage) festgehalten. Dieser Eintrag enthält keine personenbezogenen Daten und wird nicht an Server übertragen. Sie können ihn jederzeit über die Entwicklertools Ihres Browsers löschen, woraufhin der Hinweis beim nächsten Besuch erneut erscheint.
          </p>
          <p>
            Rechtsgrundlage für die Verwendung technisch notwendiger Cookies ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am technischen Betrieb der Website).
          </p>

          <h2>6. Fonts</h2>
          <p>
            Diese Website verwendet Schriftarten, die beim Abruf der Seite lokal ausgeliefert werden (self-hosted). Es werden keine Anfragen an externe Font-Server gesendet.
          </p>

          <h2>7. Ihre Rechte</h2>
          <p>Sie haben jederzeit das Recht auf:</p>
          <ul>
            <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten (Art. 15 DSGVO)</li>
            <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
            <li>Löschung Ihrer personenbezogenen Daten (Art. 17 DSGVO)</li>
            <li>Einschränkung der Datenverarbeitung (Art. 18 DSGVO)</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruch gegen die Datenverarbeitung (Art. 21 DSGVO)</li>
          </ul>
          <p>
            Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.
          </p>
          <p>
            Zur Geltendmachung Ihrer Rechte wenden Sie sich bitte an: info@ubb-bausanierung.de
          </p>
        </div>
      </div>
    </section>
  )
}
