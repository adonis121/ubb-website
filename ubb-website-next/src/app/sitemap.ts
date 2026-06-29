import type { MetadataRoute } from 'next'

const BASE = 'https://www.ubb-bausanierung.de'

const deServiceSlugs = ['sanierung-umbau', 'bodenarbeiten', 'innenarbeiten']
const deSubServices: Record<string, string[]> = {
  'sanierung-umbau': ['bausanierung', 'kernsanierung', 'umbau', 'abbrucharbeiten'],
  'bodenarbeiten':   ['estricharbeiten', 'bodengestaltung', 'bodenbeschichtung', 'spachteltechniken', 'fliesenarbeiten', 'bodenbelaege'],
  'innenarbeiten':   ['putz-stuck', 'trockenbau', 'gipserarbeiten', 'malerarbeiten'],
}
const enServiceSlugs = ['renovation', 'flooring', 'interior']
const enSubServices: Record<string, string[]> = {
  'renovation': ['bausanierung', 'kernsanierung', 'umbau', 'abbrucharbeiten'],
  'flooring':   ['estricharbeiten', 'bodengestaltung', 'bodenbeschichtung', 'spachteltechniken', 'fliesenarbeiten', 'bodenbelaege'],
  'interior':   ['putz-stuck', 'trockenbau', 'gipserarbeiten', 'malerarbeiten'],
}
const projectSlugs = ['mfh-freiburg', 'gewerbehalle-muellheim', 'praxisumbau-bad-krozingen', 'loft-loerrach', 'bueroflaeche-breisach', 'altbau-rheinfelden']
const citySlugs = ['freiburg', 'muellheim', 'buggingen', 'bad-krozingen', 'breisach', 'loerrach', 'rheinfelden']

function entry(path: string, priority: number, freq: MetadataRoute.Sitemap[number]['changeFrequency'] = 'monthly'): MetadataRoute.Sitemap[number] {
  return { url: `${BASE}${path}`, lastModified: new Date(), changeFrequency: freq, priority }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const map: MetadataRoute.Sitemap = [
    entry('/', 1.0, 'weekly'),
    entry('/projekte', 0.9, 'weekly'),
    entry('/standorte', 0.8),
    entry('/anfrage', 0.8),
    entry('/en', 0.9, 'weekly'),
    entry('/en/projects', 0.8, 'weekly'),
    entry('/en/locations', 0.7),
    entry('/en/contact', 0.7),
    entry('/impressum', 0.2),
    entry('/datenschutz', 0.2),
    entry('/en/imprint', 0.2),
    entry('/en/privacy', 0.2),
  ]

  deServiceSlugs.forEach((s) => {
    map.push(entry(`/${s}`, 0.85))
    deSubServices[s].forEach((sub) => map.push(entry(`/${s}/${sub}`, 0.75)))
  })

  enServiceSlugs.forEach((s) => {
    map.push(entry(`/en/${s}`, 0.8))
    enSubServices[s].forEach((sub) => map.push(entry(`/en/${s}/${sub}`, 0.7)))
  })

  projectSlugs.forEach((slug) => {
    map.push(entry(`/projekte/${slug}`, 0.8, 'monthly'))
    map.push(entry(`/en/projects/${slug}`, 0.75, 'monthly'))
  })

  citySlugs.forEach((slug) => {
    map.push(entry(`/standorte/${slug}`, 0.75))
  })

  citySlugs.forEach((slug) => {
    map.push(entry(`/en/locations/${slug}`, 0.65))
  })

  return [...new Map(map.map((e) => [e.url, e])).values()]
}
