'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { logoImage } from '@/data/imageMap'

const deLinks = [
  { href: '/sanierung-umbau', label: 'Sanierung & Umbau' },
  { href: '/bodenarbeiten', label: 'Bodenarbeiten' },
  { href: '/innenarbeiten', label: 'Innenarbeiten' },
  { href: '/projekte', label: 'Projekte' },
  { href: '/#ueber-uns', label: 'Über uns' },
]

const enLinks = [
  { href: '/en/renovation', label: 'Renovation' },
  { href: '/en/flooring', label: 'Flooring' },
  { href: '/en/interior', label: 'Interior' },
  { href: '/en/projects', label: 'Projects' },
  { href: '/en#about', label: 'About' },
]

// Segment-level route map (DE slug → EN slug)
const deToEn: Record<string, string> = {
  'sanierung-umbau': 'renovation',
  'bodenarbeiten': 'flooring',
  'innenarbeiten': 'interior',
  'projekte': 'projects',
  'standorte': 'locations',
  'anfrage': 'contact',
  'impressum': 'imprint',
  'datenschutz': 'privacy',
}
const enToDe: Record<string, string> = Object.fromEntries(
  Object.entries(deToEn).map(([k, v]) => [v, k])
)

function toEnUrl(p: string): string {
  if (p === '/') return '/en'
  const parts = p.split('/')           // ['', 'sanierung-umbau', 'kernsanierung']
  if (deToEn[parts[1]]) parts[1] = deToEn[parts[1]]
  return '/en' + parts.join('/')       // '/en/renovation/kernsanierung'
}

function toDeUrl(p: string): string {
  if (p === '/en' || p === '/en/') return '/'
  const without = p.replace(/^\/en/, '')  // '/renovation/kernsanierung'
  const parts = without.split('/')         // ['', 'renovation', 'kernsanierung']
  if (enToDe[parts[1]]) parts[1] = enToDe[parts[1]]
  return parts.join('/') || '/'            // '/sanierung-umbau/kernsanierung'
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const isEn = pathname.startsWith('/en')

  const navLinks = isEn ? enLinks : deLinks

  const deUrl = isEn ? toDeUrl(pathname) : pathname
  const enUrl = isEn ? pathname : toEnUrl(pathname)

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="bar">
        <Link className="logo" href={isEn ? '/en' : '/'} onClick={() => setOpen(false)}>
          <Image
            src={logoImage}
            alt="UBB Bausanierung GmbH"
            width={180}
            height={38}
            className="logo-img"
            priority
          />
        </Link>
        <nav className={`main-nav${open ? ' open' : ''}`} id="mainNav">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname.startsWith(link.href.replace(/#.*/, '')) && !link.href.includes('#') ? 'active' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-right">
          <span className="lang-switch">
            <Link href={deUrl} className={!isEn ? 'lang-active' : ''}>DE</Link>
            {' / '}
            <Link href={enUrl} className={isEn ? 'lang-active' : ''}>EN</Link>
          </span>
          <Link
            className="btn btn-primary btn-nav"
            href={isEn ? '/en/contact' : '/anfrage'}
          >
            {isEn ? 'Contact' : 'Anfrage'}
          </Link>
          <button
            className="nav-toggle"
            aria-label="Navigation öffnen"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  )
}
