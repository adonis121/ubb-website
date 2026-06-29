import type { Metadata } from 'next'
import Link from 'next/link'
import EnProjectsFilter from '@/components/EnProjectsFilter'

export const metadata: Metadata = {
  title: 'Projects & References | UBB Bausanierung GmbH',
  description: 'Full refurbishments, flooring works and interior fit-out in Southern Baden — documented reference projects with real figures.',
}

export default function EnProjectsPage() {
  return (
    <>
      <section className="hero hero-slim">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/en">Home</Link><span className="sep">/</span>Projects
          </div>
          <span className="kicker">References</span>
          <h1>Our Projects</h1>
          <p className="lede">Real construction sites, real numbers. Filter by service area.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <EnProjectsFilter />
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap inner">
          <h2>Your project could be <em>next</em>.</h2>
          <div className="actions">
            <Link className="btn btn-white" href="/en/contact">Start a project enquiry <span className="arrow">→</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}
