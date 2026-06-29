const testimonials = [
  {
    stars: 5,
    quote: 'Komplettsanierung unserer Wohnung — termingerecht, sauber, ein Ansprechpartner für alles. Genau das, was versprochen wurde.',
    name: 'M. K.',
    role: 'Kernsanierung · Bad Krozingen',
    initials: 'MK',
  },
  {
    stars: 5,
    quote: 'Estricharbeiten im Gewerbeobjekt inkl. Fußbodenheizung. Professionelle Abwicklung von Angebot bis Abnahme — keine Überraschungen bei der Rechnung.',
    name: 'S. B.',
    role: 'Estricharbeiten · Freiburg',
    initials: 'SB',
  },
  {
    stars: 5,
    quote: 'Umbau meiner Arztpraxis lief reibungslos — UBB hat alle Gewerke koordiniert, sodass wir nach nur 8 Wochen wieder öffnen konnten. Sehr empfehlenswert.',
    name: 'Dr. T. H.',
    role: 'Praxisumbau · Bad Krozingen',
    initials: 'TH',
  },
  {
    stars: 5,
    quote: 'Trockenbau, Putz und Malerarbeiten im Altbau — alles in einem Zug erledigt. Das Team war verlässlich, pünktlich und hat wirklich sauber gearbeitet.',
    name: 'R. W.',
    role: 'Innenausbau · Lörrach',
    initials: 'RW',
  },
  {
    stars: 5,
    quote: 'Sichtestrich im Loft — das Ergebnis sieht fantastisch aus. Herr Hotnjani hat uns von Anfang an gut beraten und alle Optionen erklärt. Klare Weiterempfehlung.',
    name: 'K. M.',
    role: 'Sichtestrich · Freiburg',
    initials: 'KM',
  },
  {
    stars: 4,
    quote: 'Altbausanierung in Rheinfelden — Feuchteschäden, Stuckdecken, neue Böden. UBB hat alles in einem Schritt gemacht und das Haus wieder in Schuss gebracht.',
    name: 'J. F.',
    role: 'Altbausanierung · Rheinfelden',
    initials: 'JF',
  },
]

export default function TestimonialsSlider() {
  return (
    <div className="t-grid">
      {testimonials.map((t) => (
        <div key={t.name} className="card-t">
          <span className="t-open">&ldquo;</span>
          <div className="t-stars">
            {'★'.repeat(t.stars)}{'☆'.repeat(5 - t.stars)}
          </div>
          <blockquote>{t.quote}</blockquote>
          <div className="t-foot">
            <div className="t-av">{t.initials}</div>
            <div>
              <div className="t-name">{t.name}</div>
              <div className="t-role">{t.role}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
