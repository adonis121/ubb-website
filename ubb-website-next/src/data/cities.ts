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
    headline: 'Bausanierung & Umbau in Freiburg im Breisgau',
    intro: 'Als regionaler Fachbetrieb aus Südbaden kennt UBB die Bausubstanz Freiburgs — vom Gründerzeit-Altbau im Stühlinger bis zur Nachkriegsarchitektur in Weingarten und modernen Neubauten im Vauban.',
    description: 'Freiburg ist unser wichtigster Markt. Wir haben dort Mehrfamilienhäuser kernsaniert, Gewerbeflächen ausgebaut und Altbauwohnungen von Grund auf renoviert. Die Mischung aus Altbausubstanz und modernen Ansprüchen kennen wir genau.',
    projectSlugs: ['mfh-freiburg', 'altbau-rheinfelden'],
    faq: [
      { question: 'Wie schnell kann UBB in Freiburg vor Ort sein?', answer: 'Als Betrieb aus Buggingen (15 Min. südlich) sind wir in der Regel innerhalb von 24 Stunden bei Ihnen — für Bestandsaufnahmen, Angebote und Notfälle.' },
      { question: 'Welche Stadtteile betreut UBB in Freiburg?', answer: 'Alle Stadtteile und Vororte: Altstadt, Stühlinger, Wiehre, Haslach, Landwasser, Weingarten, Vauban, Rieselfeld, Littenweiler, Zähringen und alle weiteren.' },
      { question: 'Arbeitet UBB auch für Hausverwaltungen?', answer: 'Ja — wir sind für mehrere Hausverwaltungen in Freiburg aktiv und bieten rasche Reaktionszeiten, verlässliche Kommunikation und dokumentierte Abrechnung.' },
    ],
    metaTitle: 'Bausanierung & Umbau Freiburg | UBB Bausanierung GmbH',
    metaDescription: 'Kernsanierung, Umbau und Innenausbau in Freiburg im Breisgau — seit 2010 regional verwurzelt. Jetzt Bestandsaufnahme anfragen.',
  },
  {
    slug: 'muellheim',
    name: 'Müllheim',
    plz: '79379',
    headline: 'Bausanierung & Umbau in Müllheim (Markgräflerland)',
    intro: 'Müllheim liegt im Herzen des Markgräflerlands — und damit im Kerngebiet von UBB. Vom Weinbauernanwesen bis zur Gewerbehalle: Wir kennen die lokale Bausubstanz und die spezifischen Anforderungen der Region.',
    description: 'In Müllheim haben wir unter anderem Gewerbehallen mit Industrieestrich ausgestattet und Bestandsgebäude kernsaniert. Die direkte Nachbarschaft zu unserem Firmensitz in Buggingen ermöglicht kurze Wege und schnelle Reaktionszeiten.',
    projectSlugs: ['gewerbehalle-muellheim'],
    faq: [
      { question: 'Wie lange ist die Fahrtzeit von UBB nach Müllheim?', answer: 'Unser Firmensitz in Buggingen liegt nur 5 km von Müllheim entfernt — wir sind in 10 Minuten vor Ort.' },
      { question: 'Führt UBB auch Gewerbeprojekte in Müllheim durch?', answer: 'Ja — Gewerbe und Industrie sind ein wichtiger Teil unseres Portfolios. Von der Gewerbehalle bis zur Ladenfläche.' },
    ],
    metaTitle: 'Bausanierung & Umbau Müllheim | UBB Bausanierung GmbH',
    metaDescription: 'Kernsanierung, Estricharbeiten und Innenausbau in Müllheim (Markgräflerland) — UBB Bausanierung, Ihr regionaler Fachbetrieb.',
  },
  {
    slug: 'buggingen',
    name: 'Buggingen',
    plz: '79426',
    headline: 'Bausanierung & Umbau in Buggingen',
    intro: 'Buggingen ist unser Firmensitz — hier sind wir zu Hause. UBB Bausanierung GmbH, Biergasse 1, ist der Ausgangspunkt für alle Baustellen in Südbaden.',
    description: 'Als ortsansässiger Betrieb kennen wir die Bausubstanz in Buggingen und der näheren Umgebung seit 2010. Kurze Wege, persönlicher Kontakt und direkte Verfügbarkeit sind unsere Stärken vor der eigenen Haustür.',
    projectSlugs: [],
    faq: [
      { question: 'Wo ist UBB ansässig?', answer: 'Unser Firmensitz ist in der Biergasse 1, 79426 Buggingen. Sie können uns dort montags bis freitags von 7:00–17:00 Uhr erreichen.' },
      { question: 'Nimmt UBB auch kleine Aufträge in Buggingen an?', answer: 'Ja — auch kleinere Reparaturen und Einzelleistungen. Sprechen Sie uns direkt an: +49 7631 1730287.' },
    ],
    metaTitle: 'Bausanierung & Umbau Buggingen | UBB Bausanierung GmbH',
    metaDescription: 'UBB Bausanierung GmbH in Buggingen — Kernsanierung, Bodenarbeiten und Innenausbau direkt vor Ort. Firmensitz: Biergasse 1.',
  },
  {
    slug: 'bad-krozingen',
    name: 'Bad Krozingen',
    plz: '79189',
    headline: 'Bausanierung & Umbau in Bad Krozingen',
    intro: 'Bad Krozingen mit seiner Mischung aus Kurbetrieb, Wohnbebauung und Gewerbeanlagen stellt besondere Anforderungen an Bausanierung und Innenausbau — Anforderungen, die wir kennen und erfüllen.',
    description: 'Wir haben in Bad Krozingen unter anderem einen Praxisumbau für eine Arztpraxis realisiert und mehrere Wohngebäude saniert. Die Nähe zu Freiburg und Müllheim macht Bad Krozingen zu einem festen Teil unseres Einzugsgebiets.',
    projectSlugs: ['praxisumbau-bad-krozingen'],
    faq: [
      { question: 'Führt UBB auch barrierefreie Umbauten in Bad Krozingen durch?', answer: 'Ja — barrierefreier Umbau ist ein Schwerpunkt, besonders für ältere Eigentümer und Gesundheitseinrichtungen. Wir kennen die Anforderungen der DIN 18040.' },
      { question: 'Kann UBB Arztpraxen und Gesundheitseinrichtungen umbauen?', answer: 'Ja — wir haben mehrere Praxen und Gesundheitsräume umgebaut. Hygiene- und Barrierefreiheitsanforderungen sind uns vertraut.' },
    ],
    metaTitle: 'Bausanierung & Umbau Bad Krozingen | UBB Bausanierung GmbH',
    metaDescription: 'Kernsanierung, Umbau und Innenausbau in Bad Krozingen — UBB Bausanierung, Ihr Fachbetrieb für Wohn- und Gewerbeobjekte.',
  },
  {
    slug: 'breisach',
    name: 'Breisach am Rhein',
    plz: '79206',
    headline: 'Bausanierung & Umbau in Breisach am Rhein',
    intro: 'Breisach am Rhein — Grenzstadt zwischen Schwarzwald und Elsass — hat eine vielfältige Bausubstanz: Altstadt, Neubauviertel und Gewerbeansiedlungen. UBB ist in allen Bereichen aktiv.',
    description: 'In Breisach haben wir eine Bürofläche im Rohbau komplett ausgebaut und Sanierungsarbeiten in der Altstadt durchgeführt. Die Grenzlage macht Breisach zu einem interessanten Markt mit hoher Bauaktivität.',
    projectSlugs: ['bueroflaeche-breisach'],
    faq: [
      { question: 'Arbeitet UBB auch für Gewerbemieter in Breisach?', answer: 'Ja — Büro-, Praxis- und Ladenausbauten für Gewerbemieter sind ein fester Bestandteil unserer Arbeit. Wir koordinieren alle Gewerke.' },
      { question: 'Wie weit ist Breisach vom UBB-Firmensitz entfernt?', answer: 'Ca. 20 km — Fahrtzeit etwa 25 Minuten. Wir sind täglich auf Baustellen in der Region.' },
    ],
    metaTitle: 'Bausanierung & Umbau Breisach am Rhein | UBB Bausanierung GmbH',
    metaDescription: 'Innenausbau, Kernsanierung und Umbau in Breisach am Rhein — UBB Bausanierung GmbH, Ihr regionaler Fachbetrieb.',
  },
  {
    slug: 'loerrach',
    name: 'Lörrach',
    plz: '79539',
    headline: 'Bausanierung & Umbau in Lörrach',
    intro: 'Lörrach ist das urbane Zentrum des südlichen Markgräflerlands — mit einem hohen Anteil an Altbausubstanz und reger Umbautätigkeit. UBB ist seit Jahren regelmäßig auf Baustellen in Lörrach vertreten.',
    description: 'In Lörrach haben wir unter anderem ein Loft-Apartment mit Sichtestrich ausgestattet und mehrere Sanierungen in der Innenstadt durchgeführt. Die Kombination aus Altbau und modernen Designwünschen beherrschen wir.',
    projectSlugs: ['loft-loerrach'],
    faq: [
      { question: 'Ist UBB in Lörrach und dem Dreiländereck aktiv?', answer: 'Ja — Lörrach und die gesamte Region bis zur Schweizer Grenze gehören zu unserem Einzugsgebiet.' },
      { question: 'Führt UBB auch Sichtestrich-Projekte in Lörrach durch?', answer: 'Ja — Sichtestrich und fugenlose Designböden sind in Lörrach besonders gefragt. Wir haben dort bereits mehrere Projekte realisiert.' },
    ],
    metaTitle: 'Bausanierung & Umbau Lörrach | UBB Bausanierung GmbH',
    metaDescription: 'Kernsanierung, Bodenarbeiten und Innenausbau in Lörrach — UBB Bausanierung GmbH, Ihr Fachbetrieb für Südbaden.',
  },
  {
    slug: 'rheinfelden',
    name: 'Rheinfelden (Baden)',
    plz: '79618',
    headline: 'Bausanierung & Umbau in Rheinfelden (Baden)',
    intro: 'Rheinfelden liegt direkt am Rhein, Grenzstadt zur Schweiz, mit viel Altbaubestand und einem wachsenden Wohnungsmarkt. UBB hat dort Altbauten saniert und Innenausbauten realisiert.',
    description: 'In Rheinfelden haben wir unter anderem einen Gründerzeit-Altbau umfassend saniert — Feuchteschäden behoben, Stuckdecken restauriert, neue Böden verlegt. Die Grenzlage und der hohe Altbauanteil machen Rheinfelden zu einem attraktiven Markt.',
    projectSlugs: ['altbau-rheinfelden'],
    faq: [
      { question: 'Betreut UBB auch die Schweizer Seite von Rheinfelden?', answer: 'Nein — wir sind ausschließlich auf der deutschen Seite tätig (Rheinfelden Baden).' },
      { question: 'Hat UBB Erfahrung mit Gründerzeit-Altbauten?', answer: 'Ja — Altbauten mit Stuckdecken, Feuchtigkeitsschäden und historischer Bausubstanz sind ein Schwerpunkt unserer Arbeit.' },
    ],
    metaTitle: 'Bausanierung & Umbau Rheinfelden (Baden) | UBB Bausanierung GmbH',
    metaDescription: 'Bausanierung, Altbaurenovierung und Innenausbau in Rheinfelden (Baden) — UBB Bausanierung GmbH, Ihr regionaler Fachbetrieb.',
  },
]
