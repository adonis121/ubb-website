export type Project = {
  slug: string
  title: string
  location: string
  type: string
  category: 'sanierung' | 'boden' | 'innen' | 'umbau'
  year: number
  area: string
  duration: string
  trades: number
  lede: string
  challenge: string
  solution: string
  result: string
  services: string[]
}

export const projects: Project[] = [
  {
    slug: 'mfh-freiburg',
    title: 'Residential Building, Freiburg',
    location: 'Freiburg im Breisgau',
    type: 'Full Refurbishment',
    category: 'sanierung',
    year: 2025,
    area: '420 m²',
    duration: '14 weeks',
    trades: 6,
    lede: 'Complete full refurbishment of a residential building dating from the 1960s — from strip-out through to turnkey handover.',
    challenge: 'The building had outdated electrical installations, damp damage in the basement and worn-out floor build-ups in all four residential units. At the same time, works in occupied neighbouring units had to be kept as low-noise as possible.',
    solution: 'We refurbished the four units in sequence, keeping two units habitable at all times. All trades were coordinated by UBB — electrical and plumbing via partner companies, screed, drylining and decorating by our own team.',
    result: 'All four units were completed within 14 weeks — on budget and without a single variation order.',
    services: ['Full Refurbishment', 'Screed Works', 'Drylining', 'Plaster & Stucco', 'Decorating Works', 'Floor Coverings'],
  },
  {
    slug: 'gewerbehalle-muellheim',
    title: 'Commercial Hall, Müllheim',
    location: 'Müllheim (Markgräflerland)',
    type: 'Screed Works',
    category: 'boden',
    year: 2025,
    area: '850 m²',
    duration: '3 weeks',
    trades: 2,
    lede: 'Industrial screed in a production hall — including epoxy coating for a chemical-resistant surface.',
    challenge: 'Ongoing operations in adjacent hall sections demanded strict dust management and a surface that could be walked on quickly.',
    solution: 'Fast-setting screed followed by epoxy coating in two phases, so that one section was always available.',
    result: 'Completed 2 days ahead of programme. The hall was brought back into service without any operational interruption.',
    services: ['Screed Works', 'Floor Coatings'],
  },
  {
    slug: 'praxisumbau-bad-krozingen',
    title: 'Medical Practice Conversion, Bad Krozingen',
    location: 'Bad Krozingen',
    type: 'Conversion',
    category: 'umbau',
    year: 2024,
    area: '180 m²',
    duration: '8 weeks',
    trades: 5,
    lede: 'Conversion of a commercial space into a modern medical practice — new floor plan, accessible design, new building services.',
    challenge: 'A structurally significant wall opening for the reception area, and compliance with hygiene and accessibility requirements for medical premises.',
    solution: 'Structural engineering partner for the wall opening, followed by drylining, new plumbing installation, level accessible floor and high-quality wall finishes.',
    result: 'The practice was handed over on time for the planned opening date. All statutory requirements were met.',
    services: ['Conversion', 'Drylining', 'Screed Works', 'Tiling Works', 'Decorating Works'],
  },
  {
    slug: 'loft-loerrach',
    title: 'Loft Apartment, Lörrach',
    location: 'Lörrach',
    type: 'Polished Screed',
    category: 'boden',
    year: 2024,
    area: '140 m²',
    duration: '2 weeks',
    trades: 1,
    lede: 'Polished screed in a converted industrial loft — seamless surface with individual mineral pigmentation.',
    challenge: 'The existing substrate was uneven and cracked. The pigmentation had to be matched exactly in a single application pass.',
    solution: 'Substrate preparation, self-levelling compound, then industrial screed with mineral pigmentation and a multi-coat sealer.',
    result: 'A seamless transition between the original concrete walls and the new floor — the character of the loft was preserved and enhanced.',
    services: ['Decorative Flooring', 'Screed Works'],
  },
  {
    slug: 'bueroflaeche-breisach',
    title: 'Office Space, Breisach',
    location: 'Breisach am Rhein',
    type: 'Interior Fit-out',
    category: 'innen',
    year: 2024,
    area: '310 m²',
    duration: '6 weeks',
    trades: 4,
    lede: 'Complete interior fit-out of a shell space to create a modern office floor — drylining, acoustic ceilings, plaster and decorating.',
    challenge: 'High acoustic performance requirements between office cells and a very tight programme set by the tenant.',
    solution: 'Acoustic walls with double boarding and resilient mounting, suspended acoustic ceilings and decorating in Q3 quality.',
    result: 'Handover 3 days ahead of programme. Sound insulation was confirmed by acoustic measurement.',
    services: ['Drylining', 'Skim Plastering', 'Decorating Works', 'Floor Coverings'],
  },
  {
    slug: 'altbau-rheinfelden',
    title: 'Period Building, Rheinfelden',
    location: 'Rheinfelden (Baden)',
    type: 'Building Renovation',
    category: 'sanierung',
    year: 2023,
    area: '260 m²',
    duration: '10 weeks',
    trades: 5,
    lede: 'Comprehensive renovation of a late 19th-century residential building — damp remediation, plaster and new floor build-ups.',
    challenge: 'Rising damp on the ground floor, failing plaster throughout the stairwell and severely worn floors.',
    solution: 'Horizontal damp barrier by injection, new renovation plaster on the ground floor, restoration of stucco ceilings in the stairwell, new floor tiles.',
    result: 'The building was successfully dried out and its appearance significantly improved. All residential units remained occupied throughout.',
    services: ['Building Renovation', 'Plaster & Stucco', 'Tiling Works', 'Screed Works', 'Decorating Works'],
  },
]
