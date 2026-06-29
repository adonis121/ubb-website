import type { Metadata } from 'next'
import Link from 'next/link'
import ProjectsFilter from '@/components/ProjectsFilter'

export const metadata: Metadata = {
  title: 'Projekte & Referenzen | UBB Bausanierung',
  description: 'Kernsanierungen, Estricharbeiten und Innenausbau in Südbaden — dokumentierte Referenzprojekte mit echten Zahlen.',
}

export default function ProjektePage() {
  return (
    <>
      <section className="hero hero-slim">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span className="sep">/</span>Projekte
          </div>
          <span className="kicker">Referenzen</span>
          <h1>Unsere Projekte</h1>
          <p className="lede">Echte Baustellen, echte Zahlen. Filtern Sie nach Leistungsbereich.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <ProjectsFilter />
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap inner">
          <h2>Ihr Projekt könnte das <em>nächste</em> sein.</h2>
          <div className="actions">
            <Link className="btn btn-white" href="/anfrage">Projektanfrage starten <span className="arrow">→</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}
