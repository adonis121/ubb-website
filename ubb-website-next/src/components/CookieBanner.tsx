'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const KEY = 'ubb_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const pathname = usePathname()
  const isEn = pathname.startsWith('/en')

  useEffect(() => {
    if (!localStorage.getItem(KEY)) setVisible(true)
  }, [])

  const accept = () => { localStorage.setItem(KEY, 'accepted'); setVisible(false) }
  const decline = () => { localStorage.setItem(KEY, 'declined'); setVisible(false) }

  if (!visible) return null

  return (
    <div
      className="cookie-banner"
      role="dialog"
      aria-modal="false"
      aria-label={isEn ? 'Cookie notice' : 'Cookie-Hinweis'}
    >
      <p>
        {isEn ? (
          <>
            This website uses technically necessary cookies only — no tracking, no advertising.{' '}
            <Link href="/en/privacy">Privacy Policy</Link>
          </>
        ) : (
          <>
            Diese Website verwendet ausschließlich technisch notwendige Cookies — kein Tracking, keine Werbung.{' '}
            <Link href="/datenschutz">Datenschutzerklärung</Link>
          </>
        )}
      </p>
      <div className="cookie-actions">
        <button className="btn btn-outline btn-sm cookie-decline" onClick={decline}>
          {isEn ? 'Decline' : 'Ablehnen'}
        </button>
        <button className="btn btn-primary btn-sm" onClick={accept}>
          {isEn ? 'Accept' : 'Akzeptieren'}
        </button>
      </div>
    </div>
  )
}
