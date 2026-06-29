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
    title: 'Mehrfamilienhaus, Freiburg',
    location: 'Freiburg im Breisgau',
    type: 'Kernsanierung',
    category: 'sanierung',
    year: 2025,
    area: '420 m²',
    duration: '14 Wo.',
    trades: 6,
    lede: 'Vollständige Kernsanierung eines Mehrfamilienhauses aus den 1960er-Jahren — von der Entkernung bis zur schlüsselfertigen Übergabe.',
    challenge: 'Das Gebäude hatte veraltete Elektroinstallationen, Feuchteschäden im Keller und abgenutzte Bodenaufbauten in allen vier Wohneinheiten. Gleichzeitig sollte der Eingriff bei bewohnten Nachbareinheiten möglichst lärmarm erfolgen.',
    solution: 'Wir haben die vier Wohneinheiten nacheinander saniert, sodass zwei Einheiten stets bewohnbar blieben. Alle Gewerke wurden durch UBB koordiniert — Elektro und Sanitär über Partnerunternehmen, Estrich, Trockenbau und Malerarbeiten durch unser eigenes Team.',
    result: 'Alle vier Einheiten wurden innerhalb von 14 Wochen fertiggestellt — im vereinbarten Kostenrahmen und ohne eine einzige Nachtragsposition.',
    services: ['Kernsanierung', 'Estricharbeiten', 'Trockenbau', 'Putz & Stuck', 'Malerarbeiten', 'Fußbodenbeläge'],
  },
  {
    slug: 'gewerbehalle-muellheim',
    title: 'Gewerbehalle, Müllheim',
    location: 'Müllheim (Markgräflerland)',
    type: 'Estricharbeiten',
    category: 'boden',
    year: 2025,
    area: '850 m²',
    duration: '3 Wo.',
    trades: 2,
    lede: 'Industrieestrich in einer Produktionshalle — inklusive Epoxidbeschichtung für chemikalienresistente Oberflächen.',
    challenge: 'Laufender Betrieb in angrenzenden Hallenabschnitten erforderte striktes Staubmanagement und eine schnell begehbare Oberfläche.',
    solution: 'Schnellestrich mit anschließender Epoxidbeschichtung in zwei Etappen, sodass ein Abschnitt immer verfügbar blieb.',
    result: 'Fertigstellung 2 Tage vor Plantermin. Die Halle konnte ohne Betriebsunterbrechung in Betrieb genommen werden.',
    services: ['Estricharbeiten', 'Bodenbeschichtung'],
  },
  {
    slug: 'praxisumbau-bad-krozingen',
    title: 'Praxisumbau, Bad Krozingen',
    location: 'Bad Krozingen',
    type: 'Umbau',
    category: 'umbau',
    year: 2024,
    area: '180 m²',
    duration: '8 Wo.',
    trades: 5,
    lede: 'Umbau einer Gewerbefläche zur modernen Arztpraxis — Grundrissänderung, Barrierefreiheit, neue Haustechnik.',
    challenge: 'Statisch relevanter Wanddurchbruch für den Empfangsbereich sowie die Einhaltung der Hygiene- und Barrierefreiheitsanforderungen für Arztpraxen.',
    solution: 'Statikpartner für den Wanddurchbruch, anschließend Trockenbau, neue Sanitärinstallation, barrierefreie Bodenebene und hochwertige Wandgestaltung.',
    result: 'Praxis wurde pünktlich zum geplanten Praxisstart übergeben. Alle behördlichen Anforderungen erfüllt.',
    services: ['Umbau', 'Trockenbau', 'Estricharbeiten', 'Fliesenarbeiten', 'Malerarbeiten'],
  },
  {
    slug: 'loft-loerrach',
    title: 'Loft-Wohnung, Lörrach',
    location: 'Lörrach',
    type: 'Sichtestrich',
    category: 'boden',
    year: 2024,
    area: '140 m²',
    duration: '2 Wo.',
    trades: 1,
    lede: 'Polierter Sichtestrich in einem umgenutzten Industrieloft — fugenlose Oberfläche mit individueller Pigmentierung.',
    challenge: 'Der vorhandene Untergrund war uneben und wies Risse auf. Die Pigmentierung musste in einem einzigen Arbeitsgang exakt getroffen werden.',
    solution: 'Untergrundaufbereitung, Ausgleichsmasse, dann Industrieestrich mit mineralischer Pigmentierung und mehrschichtiger Versiegelung.',
    result: 'Nahtloser Übergang zwischen alten Betonwänden und neuem Boden — der Charakter des Lofts wurde erhalten und aufgewertet.',
    services: ['Bodengestaltung', 'Estricharbeiten'],
  },
  {
    slug: 'bueroflaeche-breisach',
    title: 'Bürofläche, Breisach',
    location: 'Breisach am Rhein',
    type: 'Innenausbau',
    category: 'innen',
    year: 2024,
    area: '310 m²',
    duration: '6 Wo.',
    trades: 4,
    lede: 'Kompletter Innenausbau einer Rohbaufläche zur modernen Büroetage — Trockenbau, Akustikdecken, Putz und Malerarbeiten.',
    challenge: 'Hohe Anforderungen an Schallschutz zwischen den Bürozellen sowie ein sehr enger Terminplan des Mieters.',
    solution: 'Schallschutzwände mit Doppelbeplankung und elastischer Lagerung, abgehängte Akustikdecken und anschließende Malerarbeiten in Q3-Qualität.',
    result: 'Übergabe 3 Tage früher als geplant. Schalldämmung wurde messtechnisch bestätigt.',
    services: ['Trockenbau', 'Gipserarbeiten', 'Malerarbeiten', 'Bodenbeläge'],
  },
  {
    slug: 'altbau-rheinfelden',
    title: 'Altbau, Rheinfelden',
    location: 'Rheinfelden (Baden)',
    type: 'Bausanierung',
    category: 'sanierung',
    year: 2023,
    area: '260 m²',
    duration: '10 Wo.',
    trades: 5,
    lede: 'Umfassende Bausanierung eines gründerzeitlichen Mehrfamilienhauses — Feuchtigkeitssanierung, Putz und neue Bodenaufbauten.',
    challenge: 'Aufsteigende Feuchtigkeit im Erdgeschoss, abgängige Putzflächen im gesamten Treppenhaus und stark abgenutzte Böden.',
    solution: 'Horizontalabdichtung durch Injektionsverfahren, neuer Sanierputz im EG, Restaurierung der Stuckdecken im Treppenhaus, neue Bodenfliesen.',
    result: 'Das Gebäude wurde trocken gelegt und optisch aufgewertet. Alle Wohneinheiten konnten weiterhin bewohnt bleiben.',
    services: ['Bausanierung', 'Putz & Stuck', 'Fliesenarbeiten', 'Estricharbeiten', 'Malerarbeiten'],
  },
]
