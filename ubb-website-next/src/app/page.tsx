import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import TestimonialsSlider from '@/components/TestimonialsSlider'
import HeroSlider from '@/components/HeroSlider'
import { serviceImages, projectImages } from '@/data/imageMap'

export const metadata: Metadata = {
  title: 'UBB Bausanierung GmbH | Sanierung, Umbau & Innenausbau in Südbaden',
  description: 'Kernsanierung, Umbau und Innenausbau aus einer Hand. Seit 2010 in Freiburg, Müllheim und Südbaden. 15 Fachleute · 4,3★ · Ein Ansprechpartner.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Warum UBB für mein Bauvorhaben wählen?', acceptedAnswer: { '@type': 'Answer', text: 'Alles aus einer Hand — von Estrich bis Stuck. Ein Ansprechpartner koordiniert alle Gewerke, inklusive Partnerfirmen für Elektro und Sanitär. Das erspart Ihnen die Koordination mehrerer Betriebe und minimiert Reibungsverluste.' } },
    { '@type': 'Question', name: 'Kann UBB mein Projekt zeit- und budgetgerecht realisieren?', acceptedAnswer: { '@type': 'Answer', text: 'Realistischer Plan vor Baustart, klare Kommunikation während der Bauphase, Abschluss im vereinbarten Rahmen. Seit 2010 arbeiten wir nach diesem Prinzip — und unsere Bewertungen spiegeln das wider.' } },
    { '@type': 'Question', name: 'Wie weit im Voraus muss ich anfragen?', acceptedAnswer: { '@type': 'Answer', text: 'Je früher, desto besser — gerade für größere Projekte. Für kleinere Arbeiten haben wir oft kurzfristig Kapazitäten. Kontaktieren Sie uns unverbindlich, wir besprechen die Terminlage.' } },
    { '@type': 'Question', name: 'Führt UBB auch nur einzelne Gewerke aus?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — auch wenn Sie nur Estricharbeiten, Trockenbau oder Malerarbeiten benötigen, helfen wir Ihnen. Unsere Stärke liegt aber in der Koordination mehrerer Gewerke aus einer Hand.' } },
    { '@type': 'Question', name: 'Arbeitet UBB auch für Privatkunden?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — vom Eigenheim über Eigentumswohnungen bis zu Mietobjekten und Gewerbeflächen. Unsere Kunden reichen von Privatpersonen über Hausverwaltungen bis zu Gewerbetreibenden.' } },
    { '@type': 'Question', name: 'In welchem Gebiet ist UBB tätig?', acceptedAnswer: { '@type': 'Answer', text: 'Unser Kerngebiet ist Südbaden: Freiburg, Müllheim, Buggingen, Bad Krozingen, Breisach, Lörrach und Rheinfelden. Für größere Projekte sind wir auch darüber hinaus tätig — fragen Sie uns einfach an.' } },
    { '@type': 'Question', name: 'Wie nachhaltig arbeitet UBB?', acceptedAnswer: { '@type': 'Answer', text: 'Langlebigkeit ist die nachhaltigste Bauweise. Wir verwenden schadstoffarme Materialien, minimieren Abfall durch sorgfältige Planung und dokumentieren jedes Projekt — für Transparenz gegenüber Auftraggeber und Behörden.' } },
  ],
}

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      {/* LEISTUNGEN */}
      <section className="section">
        <div className="wrap">
          <div className="section-head section-head-v">
            <span className="kicker">Leistungen</span>
            <div>
              <h2>Alles aus einer Hand. Ein Ansprechpartner.</h2>
              <p>Drei Leistungsbereiche, alle Gewerke koordiniert — inklusive Partnerfirmen für Elektro und Sanitär.</p>
            </div>
          </div>
          <div className="service-list">
            <Link className="service-row" href="/sanierung-umbau">
              <span className="sr-num">01</span>
              <div className="sr-body">
                <h3>Sanierung &amp; Umbau</h3>
                <p>Von der Kernsanierung bis zum Abbruch: Wir bringen Bestandsgebäude in ihre beste Form.</p>
                <span className="sr-cta">Mehr erfahren →</span>
              </div>
              {serviceImages['sanierung-umbau'] && (
                <div className="sr-image">
                  <Image src={serviceImages['sanierung-umbau']} alt="" fill style={{objectFit:'cover'}} sizes="40vw" />
                </div>
              )}
            </Link>
            <Link className="service-row" href="/bodenarbeiten">
              <span className="sr-num">02</span>
              <div className="sr-body">
                <h3>Bodenarbeiten</h3>
                <p>Estrich, Beschichtung, Fliesen und Spachteltechnik — Böden für Jahrzehnte, nicht Jahre.</p>
                <span className="sr-cta">Mehr erfahren →</span>
              </div>
              {serviceImages['bodenarbeiten'] && (
                <div className="sr-image">
                  <Image src={serviceImages['bodenarbeiten']} alt="" fill style={{objectFit:'cover'}} sizes="40vw" />
                </div>
              )}
            </Link>
            <Link className="service-row" href="/innenarbeiten">
              <span className="sr-num">03</span>
              <div className="sr-body">
                <h3>Innenarbeiten</h3>
                <p>Trockenbau, Putz, Stuck und Malerarbeiten — präziser Innenausbau bis ins Detail.</p>
                <span className="sr-cta">Mehr erfahren →</span>
              </div>
              {serviceImages['innenarbeiten'] && (
                <div className="sr-image">
                  <Image src={serviceImages['innenarbeiten']} alt="" fill style={{objectFit:'cover'}} sizes="40vw" />
                </div>
              )}
            </Link>
          </div>
        </div>
      </section>

      {/* REFERENZPROJEKT */}
      <section className="section alt">
        <div className="wrap">
          <div className="section-head section-head-v">
            <span className="kicker">Referenzprojekt</span>
            <div>
              <h2>Sehen Sie den Unterschied.</h2>
              <p>Mehrfamilienhaus Freiburg — Kernsanierung, 420 m², 14 Wochen. Ziehen Sie den Regler.</p>
            </div>
          </div>
          <BeforeAfterSlider />
          <p style={{ marginTop: '1rem' }}>
            <Link className="btn btn-ghost" href="/projekte/mfh-freiburg">Zur Projektgeschichte <span className="arrow">→</span></Link>
          </p>
        </div>
      </section>

      {/* WARUM UBB */}
      <section className="section dark" id="ueber-uns">
        <div className="wrap">
          <div className="section-head section-head-v">
            <span className="kicker">Warum UBB</span>
            <div><h2>Wir versprechen nichts, was wir nicht halten.</h2></div>
          </div>
          <div className="grid cols-3">
            <div className="value">
              <h3>Komplettlösung</h3>
              <p>Vom Rohzustand bis zur finalen Ausführung — alle Gewerke koordiniert, inklusive Elektro- und Sanitärpartner. Sie führen ein Gespräch, nicht sieben.</p>
            </div>
            <div className="value">
              <h3>Ein Ansprechpartner</h3>
              <p>Eine Nummer für alles. Klare Kommunikation, effiziente Terminabstimmung, keine Zuständigkeits-Pingpongs zwischen verschiedenen Betrieben.</p>
            </div>
            <div className="value">
              <h3>Termintreue</h3>
              <p>Realistischer Plan vor Baustart, Abschluss im vereinbarten Rahmen. Seit 2010 — das spricht sich herum in der Region.</p>
            </div>
            <div className="value">
              <h3>Transparente Preise</h3>
              <p>Detailliertes Angebot vor Beginn. Keine versteckten Nachträge — Änderungen werden besprochen, bevor sie ausgeführt werden.</p>
            </div>
            <div className="value">
              <h3>Regional verwurzelt</h3>
              <p>Firmensitz in Buggingen seit 2010. Kurze Wege, lokale Kenntnisse, persönliche Verantwortung — kein anonymes Unternehmen von außerhalb.</p>
            </div>
            <div className="value">
              <h3>Qualität dokumentiert</h3>
              <p>Fotodokumentation und Abnahmeprotokoll bei jedem Projekt. Sie wissen immer, was gemacht wurde — und haben einen Nachweis in der Hand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJEKTE */}
      <section className="section">
        <div className="wrap">
          <div className="section-head section-head-v">
            <span className="kicker">Projekte</span>
            <div><h2>Arbeit, die für sich spricht.</h2></div>
          </div>
          <div className="projects-bento">
            {(['mfh-freiburg','gewerbehalle-muellheim','praxisumbau-bad-krozingen'] as const).map((slug) => {
              const meta: Record<string, {type:string;year:string;title:string;area:string;dur:string;trades:string}> = {
                'mfh-freiburg':              {type:'Kernsanierung',year:'2025',title:'Mehrfamilienhaus, Freiburg',      area:'420 m²',dur:'14 Wo.',trades:'6'},
                'gewerbehalle-muellheim':    {type:'Estricharbeiten',year:'2025',title:'Gewerbehalle, Müllheim',         area:'850 m²',dur:'3 Wo.',trades:'2'},
                'praxisumbau-bad-krozingen': {type:'Umbau',year:'2024',title:'Praxisumbau, Bad Krozingen',              area:'180 m²',dur:'8 Wo.',trades:'5'},
              }
              const m = meta[slug]
              return (
                <Link key={slug} className="card-project" href={`/projekte/${slug}`}>
                  <div className="img">
                    <Image src={projectImages[slug]} alt={m.title} fill style={{objectFit:'cover'}} sizes="(max-width:560px) 100vw, (max-width:860px) 50vw, (max-width:1200px) 67vw, 800px" />
                  </div>
                  <div className="body">
                    <div className="meta-row"><span>{m.type}</span><span>{m.year}</span></div>
                    <h3>{m.title}</h3>
                    <div className="facts">
                      <div><b>{m.area}</b>Fläche</div>
                      <div><b>{m.dur}</b>Bauzeit</div>
                      <div><b>{m.trades}</b>Gewerke</div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
          <p style={{ marginTop: '2rem' }}>
            <Link className="btn btn-dark" href="/projekte">Alle Projekte ansehen <span className="arrow">→</span></Link>
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section green">
        <div className="wrap">
          <div className="section-head section-head-v">
            <span className="kicker">Kundenstimmen</span>
            <div>
              <h2>Das sagen unsere Kunden.</h2>
              <p>4,3 von 5 Sternen aus 40 Google-Bewertungen.</p>
            </div>
          </div>
          <TestimonialsSlider />
        </div>
      </section>

      {/* EINZUGSGEBIET */}
      <section className="section alt">
        <div className="wrap">
          <div className="region-split">
            <div>
              <span className="kicker">Einzugsgebiet</span>
              <h2>In Südbaden zu Hause.</h2>
              <p style={{ color: 'var(--slate)', marginTop: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                Von Freiburg bis Rheinfelden — UBB ist Ihr regionaler Fachbetrieb für Sanierung, Umbau und Innenausbau im Breisgau und Markgräflerland. Kurze Wege, schnelle Reaktionszeiten.
              </p>
              <Link className="btn btn-primary" href="/standorte">Alle Standorte ansehen <span className="arrow">→</span></Link>
            </div>
            <div className="region-pills">
              <Link className="region-pill" href="/standorte/freiburg"><span className="pin">▸</span>Freiburg i.B.<span className="plz">79098</span></Link>
              <Link className="region-pill" href="/standorte/muellheim"><span className="pin">▸</span>Müllheim<span className="plz">79379</span></Link>
              <Link className="region-pill" href="/standorte/buggingen"><span className="pin">▸</span>Buggingen<span className="plz">79426</span></Link>
              <Link className="region-pill" href="/standorte/bad-krozingen"><span className="pin">▸</span>Bad Krozingen<span className="plz">79189</span></Link>
              <Link className="region-pill" href="/standorte/breisach"><span className="pin">▸</span>Breisach<span className="plz">79206</span></Link>
              <Link className="region-pill" href="/standorte/loerrach"><span className="pin">▸</span>Lörrach<span className="plz">79539</span></Link>
              <Link className="region-pill" href="/standorte/rheinfelden"><span className="pin">▸</span>Rheinfelden<span className="plz">79618</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROZESS */}
      <section className="section alt">
        <div className="wrap">
          <div className="section-head section-head-v">
            <span className="kicker">Ablauf</span>
            <div>
              <h2>Von der Anfrage bis zur Schlüsselübergabe.</h2>
              <p>Klar strukturiert — damit Sie wissen, was als nächstes passiert.</p>
            </div>
          </div>
          <div className="process">
            <div className="step-card">
              <h3>01 — Bestandsaufnahme</h3>
              <p>Kostenloser Ortstermin — wir besichtigen das Objekt, hören zu und erfassen den Ist-Zustand. Kein Verkaufsgespräch, nur Fakten.</p>
            </div>
            <div className="step-card">
              <h3>02 — Detailangebot</h3>
              <p>Transparentes Festpreisangebot mit Leistungsbeschreibung, Zeitplan und Materialangaben. Sie wissen genau, was Sie bekommen.</p>
            </div>
            <div className="step-card">
              <h3>03 — Bauausführung</h3>
              <p>Pünktlicher Baubeginn, tägliche Koordination aller Gewerke, regelmäßige Updates. Ihr Ansprechpartner ist immer erreichbar.</p>
            </div>
            <div className="step-card">
              <h3>04 — Abnahme & Übergabe</h3>
              <p>Gemeinsame Begehung, Fotodokumentation, Abnahmeprotokoll. Erst wenn Sie zufrieden sind, ist das Projekt abgeschlossen.</p>
            </div>
          </div>
          <p style={{ marginTop: '2rem' }}>
            <Link className="btn btn-dark" href="/anfrage">Jetzt Bestandsaufnahme anfragen <span className="arrow">→</span></Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="wrap">
          <div className="section-head section-head-v">
            <span className="kicker">FAQ</span>
            <div><h2>Häufig gestellte Fragen.</h2></div>
          </div>
          <div className="faq">
            <details open>
              <summary>Warum UBB für mein Bauvorhaben wählen?</summary>
              <div className="a">Alles aus einer Hand — von Estrich bis Stuck. Ein Ansprechpartner koordiniert alle Gewerke, inklusive Partnerfirmen für Elektro und Sanitär. Das erspart Ihnen die Koordination mehrerer Betriebe und minimiert Reibungsverluste.</div>
            </details>
            <details>
              <summary>Kann UBB mein Projekt zeit- und budgetgerecht realisieren?</summary>
              <div className="a">Realistischer Plan vor Baustart, klare Kommunikation während der Bauphase, Abschluss im vereinbarten Rahmen. Seit 2010 arbeiten wir nach diesem Prinzip — und unsere Bewertungen spiegeln das wider.</div>
            </details>
            <details>
              <summary>Wie weit im Voraus muss ich anfragen?</summary>
              <div className="a">Je früher, desto besser — gerade für größere Projekte. Für kleinere Arbeiten haben wir oft kurzfristig Kapazitäten. Kontaktieren Sie uns unverbindlich, wir besprechen die Terminlage.</div>
            </details>
            <details>
              <summary>Führt UBB auch nur einzelne Gewerke aus?</summary>
              <div className="a">Ja — auch wenn Sie nur Estricharbeiten, Trockenbau oder Malerarbeiten benötigen, helfen wir Ihnen. Unsere Stärke liegt aber in der Koordination mehrerer Gewerke aus einer Hand.</div>
            </details>
            <details>
              <summary>Arbeitet UBB auch für Privatkunden?</summary>
              <div className="a">Ja — vom Eigenheim über Eigentumswohnungen bis zu Mietobjekten und Gewerbeflächen. Unsere Kunden reichen von Privatpersonen über Hausverwaltungen bis zu Gewerbetreibenden.</div>
            </details>
            <details>
              <summary>In welchem Gebiet ist UBB tätig?</summary>
              <div className="a">Unser Kerngebiet ist Südbaden: Freiburg, Müllheim, Buggingen, Bad Krozingen, Breisach, Lörrach und Rheinfelden. Für größere Projekte sind wir auch darüber hinaus tätig — fragen Sie uns einfach an.</div>
            </details>
            <details>
              <summary>Wie nachhaltig arbeitet UBB?</summary>
              <div className="a">Langlebigkeit ist die nachhaltigste Bauweise. Wir verwenden schadstoffarme Materialien, minimieren Abfall durch sorgfältige Planung und dokumentieren jedes Projekt — für Transparenz gegenüber Auftraggeber und Behörden.</div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="wrap inner">
          <h2>Bereit für Ihr <em>Projekt</em>?</h2>
          <div className="actions">
            <Link className="btn btn-white" href="/anfrage">Projektanfrage starten <span className="arrow">→</span></Link>
            <a className="btn btn-outline-light" href="tel:+4976311730287">+49 7631 1730287</a>
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  )
}
