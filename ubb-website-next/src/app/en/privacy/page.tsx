import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | UBB Bausanierung GmbH',
  description: 'Privacy policy of UBB Bausanierung GmbH.',
  robots: { index: false },
}

export default function EnPrivacyPage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="breadcrumb" style={{ color: 'var(--slate)' }}>
          <Link href="/en" style={{ color: 'var(--slate)' }}>Home</Link>
          <span className="sep" style={{ color: 'var(--green)' }}>/</span>Privacy Policy
        </div>
        <div className="legal-content" style={{ marginTop: '2rem' }}>
          <h1 style={{ fontSize: 'var(--text-3xl)', marginBottom: '2rem' }}>Privacy Policy</h1>

          <h2>1. Data protection at a glance</h2>
          <h3>General information</h3>
          <p>The following notes provide a simple overview of what happens to your personal data when you visit this website. Personal data is any data by which you can be personally identified.</p>

          <h3>Data collection on this website</h3>
          <p>
            <strong>Who is responsible for data collection on this website?</strong><br />
            Data processing on this website is carried out by the website operator: UBB Bausanierung GmbH, Biergasse 1, 79426 Buggingen, Germany. Phone: +49 7631 1730287, Email: info@ubb-bausanierung.de.
          </p>

          <h2>2. Hosting</h2>
          <p>This website is hosted externally. Personal data collected on this website is stored on the host's servers. Hosting is used for the purpose of fulfilling contracts with our potential and existing customers (Art. 6 para. 1 lit. b GDPR) and in the interest of secure, fast and efficient provision of our online offer by a professional provider (Art. 6 para. 1 lit. f GDPR).</p>

          <h2>3. General information and mandatory disclosures</h2>
          <h3>Data protection</h3>
          <p>We take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy.</p>

          <h3>Note on the responsible party</h3>
          <p>
            The responsible party for data processing on this website is:<br /><br />
            UBB Bausanierung GmbH<br />
            Biergasse 1<br />
            79426 Buggingen<br />
            Phone: +49 7631 1730287<br />
            Email: info@ubb-bausanierung.de
          </p>

          <h3>Retention period</h3>
          <p>Unless a specific retention period has been stated within this privacy policy, your personal data will remain with us until the purpose for data processing no longer applies. If you assert a legitimate request for deletion or revoke consent to data processing, your data will be deleted unless we have other legally permissible reasons for storing your personal data.</p>

          <h2>4. Data collection on this website</h2>
          <h3>Contact form</h3>
          <p>If you send us enquiries via the contact form, your details from the enquiry form, including the contact details you provided there, will be stored by us for the purpose of processing the enquiry and in the event of follow-up questions. We do not share this data without your consent.</p>
          <p>The processing of this data is based on Art. 6 para. 1 lit. b GDPR, if your request is related to the performance of a contract or is necessary to carry out pre-contractual measures. In all other cases, the processing is based on our legitimate interest in the effective processing of the enquiries addressed to us (Art. 6 para. 1 lit. f GDPR) or on your consent (Art. 6 para. 1 lit. a GDPR).</p>
          <p>Our contact form uses the service Formspree (Formspree Inc., USA). Please note the Formspree privacy policy at{' '}
            <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
              https://formspree.io/legal/privacy-policy
            </a>.
          </p>

          <h3>Server log files</h3>
          <p>The provider of the pages automatically collects and stores information in so-called server log files, which your browser automatically transmits to us. These are: browser type and browser version, operating system used, referrer URL, hostname of the accessing computer, time of the server request, IP address.</p>

          <h2>5. Cookies</h2>
          <p>This website uses technically necessary cookies only. No tracking, analytics, or advertising cookies are used.</p>
          <p>
            On your first visit, a cookie notice banner is shown. Your choice (Accept or Decline) is stored in your browser under the key <code>ubb_cookie_consent</code> in localStorage. This entry contains no personal data and is not transmitted to any server. You can delete it at any time via your browser's developer tools, which will cause the banner to reappear on your next visit.
          </p>
          <p>
            The legal basis for technically necessary cookies is Art. 6 para. 1 lit. f GDPR (legitimate interest in the technical operation of the website).
          </p>

          <h2>6. Fonts</h2>
          <p>This website uses fonts that are delivered locally when the page is accessed (self-hosted). No requests are sent to external font servers.</p>

          <h2>7. Your rights</h2>
          <p>You have the right at any time to:</p>
          <ul>
            <li>Access information about your personal data stored with us (Art. 15 GDPR)</li>
            <li>Rectification of incorrect data (Art. 16 GDPR)</li>
            <li>Deletion of your personal data (Art. 17 GDPR)</li>
            <li>Restriction of data processing (Art. 18 GDPR)</li>
            <li>Data portability (Art. 20 GDPR)</li>
            <li>Objection to data processing (Art. 21 GDPR)</li>
          </ul>
          <p>You also have the right to complain to a data protection supervisory authority about our processing of your personal data.</p>
          <p>To exercise your rights, please contact: info@ubb-bausanierung.de</p>
        </div>
      </div>
    </section>
  )
}
