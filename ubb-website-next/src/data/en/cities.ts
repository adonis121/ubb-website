export type City = {
  slug: string
  name: string
  plz: string
  headline: string
  intro: string
  description: string
  projectSlugs: string[]
  faq: { question: string; answer: string }[]
  metaTitle: string
  metaDescription: string
}

export const cities: City[] = [
  {
    slug: 'freiburg',
    name: 'Freiburg im Breisgau',
    plz: '79098–79117',
    headline: 'Building Renovation & Conversion in Freiburg im Breisgau',
    intro: 'As a regional specialist contractor from Southern Baden, UBB knows the building stock of Freiburg intimately — from the late 19th-century period buildings in the Stühlinger district to the post-war architecture of Weingarten and the modern developments of the Vauban quarter.',
    description: 'Freiburg is our most important market. We have carried out full refurbishments on residential buildings, fitted out commercial spaces and completely renovated period apartments. We know the combination of historic building stock and modern expectations inside out.',
    projectSlugs: ['mfh-freiburg', 'altbau-rheinfelden'],
    faq: [
      { question: 'How quickly can UBB be on site in Freiburg?', answer: 'With our office in Buggingen (15 minutes to the south), we can typically be with you within 24 hours — for surveys, quotations and emergencies.' },
      { question: 'Which districts does UBB serve in Freiburg?', answer: 'All districts and suburbs: Altstadt, Stühlinger, Wiehre, Haslach, Landwasser, Weingarten, Vauban, Rieselfeld, Littenweiler, Zähringen and all others.' },
      { question: 'Does UBB work for property management companies?', answer: 'Yes — we work for several property management companies in Freiburg and offer fast response times, reliable communication and documented billing.' },
    ],
    metaTitle: 'Building Renovation & Conversion Freiburg | UBB Bausanierung GmbH',
    metaDescription: 'Full refurbishment, conversion and interior fit-out in Freiburg im Breisgau — regionally established since 2010. Request a survey now.',
  },
  {
    slug: 'muellheim',
    name: 'Müllheim',
    plz: '79379',
    headline: 'Building Renovation & Conversion in Müllheim (Markgräflerland)',
    intro: 'Müllheim lies in the heart of the Markgräflerland wine-growing region — and right in the core territory of UBB. From a vineyard estate to an industrial hall: we know the local building stock and the specific requirements of the region.',
    description: 'In Müllheim we have fitted industrial screed in commercial halls and carried out full refurbishments on existing buildings, among other projects. Our immediate proximity to the company headquarters in Buggingen means short distances and fast response times.',
    projectSlugs: ['gewerbehalle-muellheim'],
    faq: [
      { question: 'How long is the travel time from UBB to Müllheim?', answer: 'Our office in Buggingen is only 5 km from Müllheim — we are on site within 10 minutes.' },
      { question: 'Does UBB also carry out commercial projects in Müllheim?', answer: 'Yes — commercial and industrial work is an important part of our portfolio. From industrial halls to retail spaces.' },
    ],
    metaTitle: 'Building Renovation & Conversion Müllheim | UBB Bausanierung GmbH',
    metaDescription: 'Full refurbishment, screed works and interior fit-out in Müllheim (Markgräflerland) — UBB Bausanierung, your regional specialist contractor.',
  },
  {
    slug: 'buggingen',
    name: 'Buggingen',
    plz: '79426',
    headline: 'Building Renovation & Conversion in Buggingen',
    intro: 'Buggingen is our home base. UBB Bausanierung GmbH, Biergasse 1, is the starting point for all construction sites across Southern Baden.',
    description: 'As a locally based company, we have known the building stock in Buggingen and the surrounding area since 2010. Short distances, personal contact and direct availability are our strengths right on our own doorstep.',
    projectSlugs: [],
    faq: [
      { question: 'Where is UBB based?', answer: 'Our registered office is at Biergasse 1, 79426 Buggingen. You can reach us there Monday to Friday from 7:00–17:00.' },
      { question: 'Does UBB also take on small jobs in Buggingen?', answer: 'Yes — including smaller repairs and individual services. Get in touch with us directly: +49 7631 1730287.' },
    ],
    metaTitle: 'Building Renovation & Conversion Buggingen | UBB Bausanierung GmbH',
    metaDescription: 'UBB Bausanierung GmbH in Buggingen — full refurbishment, flooring works and interior fit-out on your doorstep. Registered office: Biergasse 1.',
  },
  {
    slug: 'bad-krozingen',
    name: 'Bad Krozingen',
    plz: '79189',
    headline: 'Building Renovation & Conversion in Bad Krozingen',
    intro: 'Bad Krozingen, with its mix of spa facilities, residential buildings and commercial properties, places particular demands on building renovation and interior fit-out — demands we understand and meet.',
    description: 'In Bad Krozingen we have carried out, among other projects, a medical practice conversion and renovated several residential buildings. The proximity to Freiburg and Müllheim makes Bad Krozingen a regular part of our service area.',
    projectSlugs: ['praxisumbau-bad-krozingen'],
    faq: [
      { question: 'Does UBB also carry out accessible conversions in Bad Krozingen?', answer: 'Yes — accessible conversion is a particular focus, especially for older owner-occupiers and healthcare facilities. We are familiar with the requirements of DIN 18040.' },
      { question: 'Can UBB convert medical practices and healthcare facilities?', answer: 'Yes — we have converted several practices and healthcare rooms. Hygiene and accessibility requirements are familiar territory for us.' },
    ],
    metaTitle: 'Building Renovation & Conversion Bad Krozingen | UBB Bausanierung GmbH',
    metaDescription: 'Full refurbishment, conversion and interior fit-out in Bad Krozingen — UBB Bausanierung, your specialist contractor for residential and commercial properties.',
  },
  {
    slug: 'breisach',
    name: 'Breisach am Rhein',
    plz: '79206',
    headline: 'Building Renovation & Conversion in Breisach am Rhein',
    intro: 'Breisach am Rhein — the border town between the Black Forest and Alsace — has a diverse building stock: historic town centre, modern residential developments and commercial premises. UBB is active in all sectors.',
    description: 'In Breisach we have completely fitted out an office floor from shell stage and carried out renovation works in the historic town centre. The border location makes Breisach an interesting market with a high level of construction activity.',
    projectSlugs: ['bueroflaeche-breisach'],
    faq: [
      { question: 'Does UBB also work for commercial tenants in Breisach?', answer: 'Yes — office, practice and retail fit-outs for commercial tenants are a regular part of our work. We coordinate all trades.' },
      { question: 'How far is Breisach from the UBB office?', answer: 'Approximately 20 km — about 25 minutes by road. We are on construction sites in the region every day.' },
    ],
    metaTitle: 'Building Renovation & Conversion Breisach am Rhein | UBB Bausanierung GmbH',
    metaDescription: 'Interior fit-out, full refurbishment and conversion in Breisach am Rhein — UBB Bausanierung GmbH, your regional specialist contractor.',
  },
  {
    slug: 'loerrach',
    name: 'Lörrach',
    plz: '79539',
    headline: 'Building Renovation & Conversion in Lörrach',
    intro: 'Lörrach is the urban centre of the southern Markgräflerland — with a high proportion of period building stock and considerable conversion activity. UBB has been regularly on site in Lörrach for years.',
    description: 'In Lörrach we have fitted polished screed in a loft apartment and carried out several renovation projects in the town centre, among other work. We are well versed in combining historic building fabric with contemporary design ambitions.',
    projectSlugs: ['loft-loerrach'],
    faq: [
      { question: 'Is UBB active in Lörrach and the tri-border region?', answer: 'Yes — Lörrach and the entire region up to the Swiss border are within our service area.' },
      { question: 'Does UBB carry out polished screed projects in Lörrach?', answer: 'Yes — polished screed and seamless design floors are particularly popular in Lörrach. We have already completed several projects there.' },
    ],
    metaTitle: 'Building Renovation & Conversion Lörrach | UBB Bausanierung GmbH',
    metaDescription: 'Full refurbishment, flooring works and interior fit-out in Lörrach — UBB Bausanierung GmbH, your specialist contractor for Southern Baden.',
  },
  {
    slug: 'rheinfelden',
    name: 'Rheinfelden (Baden)',
    plz: '79618',
    headline: 'Building Renovation & Conversion in Rheinfelden (Baden)',
    intro: 'Rheinfelden sits right on the Rhine, a border town with Switzerland, with a large stock of period buildings and a growing residential market. UBB has renovated period buildings and carried out interior fit-outs there.',
    description: 'In Rheinfelden we comprehensively renovated a late 19th-century residential building — resolving damp damage, restoring stucco ceilings and laying new floors, among other works. The border location and high proportion of period stock make Rheinfelden an attractive market.',
    projectSlugs: ['altbau-rheinfelden'],
    faq: [
      { question: 'Does UBB also work on the Swiss side of Rheinfelden?', answer: 'No — we operate exclusively on the German side (Rheinfelden Baden).' },
      { question: 'Does UBB have experience with late 19th-century period buildings?', answer: 'Yes — period buildings with stucco ceilings, damp damage and historic fabric are a core area of our work.' },
    ],
    metaTitle: 'Building Renovation & Conversion Rheinfelden (Baden) | UBB Bausanierung GmbH',
    metaDescription: 'Building renovation, period building refurbishment and interior fit-out in Rheinfelden (Baden) — UBB Bausanierung GmbH, your regional specialist contractor.',
  },
]
