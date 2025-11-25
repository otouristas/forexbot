'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import LocaleSwitcher from './LocaleSwitcher'
import { getTranslations, type Locale } from '@/lib/translations'

const navItemsKeys = [
  { href: '', key: 'home' },
  { href: 'live', key: 'live' },
  { href: 'backtests', key: 'backtests' },
  { href: 'versions', key: 'versions' },
  { href: 'strategy', key: 'strategy' },
  { href: 'story', key: 'story' },
  { href: 'faqs', key: 'faqs' },
  { href: 'contact', key: 'contact' },
]

export default function NavBar() {
  const params = useParams()
  const locale = Array.isArray(params.locale) ? params.locale[0] : params.locale || 'el'
  const t = getTranslations((locale as Locale) || 'el')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const formatLabel = (value: string): string => {
    if (locale === 'el') {
      return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    }
    return value
  }

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="bg-gradient-to-r from-brand-cyan-700 to-brand-cyan-600 text-white shadow-lg border-b border-brand-cyan-400/40">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center gap-4">
          <Link href={`/${locale}`} className="flex items-center hover:opacity-90 transition-opacity">
            <Image
              src="/assets/brandx192.png"
              alt="ForexBot Logo"
              width={96}
              height={96}
              className="object-contain drop-shadow-xl"
              priority
              unoptimized
            />
          </Link>
          <nav className="hidden lg:block flex-1">
            <ul className="flex justify-center space-x-8 text-base font-semibold tracking-wide uppercase">
              {navItemsKeys.map((item) => {
                const navKey = item.key as keyof typeof t.nav
                return (
                  <li key={item.href}>
                    <Link
                      href={`/${locale}/${item.href}`}
                      className="hover:text-brand-cyan-200 transition-colors"
                    >
                      {formatLabel(t.nav[navKey] || item.key)}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
          <button
            type="button"
            className="lg:hidden flex flex-col justify-center items-center w-12 h-12 rounded-lg border border-white/40 bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Toggle navigation menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="w-7 h-0.5 bg-white mb-1.5" />
            <span className="w-7 h-0.5 bg-white mb-1.5" />
            <span className="w-7 h-0.5 bg-white" />
          </button>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6 space-y-6">
            <nav>
              <ul className="flex flex-col space-y-4 text-lg font-semibold">
                {navItemsKeys.map((item) => {
                  const navKey = item.key as keyof typeof t.nav
                  const href = `/${locale}/${item.href}`
                  return (
                    <li key={item.href}>
                      <Link
                        href={href}
                        onClick={closeMenu}
                        className="block py-1 text-white/90 hover:text-white transition-colors"
                      >
                        {formatLabel(t.nav[navKey] || item.key)}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>
            <div className="border-t border-white/20 pt-4">
              <p className="text-sm uppercase tracking-wide mb-3 text-white/70">Language</p>
              <LocaleSwitcher />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
