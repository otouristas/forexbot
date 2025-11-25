'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useParams, usePathname } from 'next/navigation'
import LocaleSwitcher from './LocaleSwitcher'
import { getTranslations, type Locale } from '@/lib/translations'

const navItemsKeys = [
  { href: '', key: 'home' },
  {
    href: 'live',
    key: 'live',
    hasDropdown: true,
    dropdownItems: [
      { href: 'live/even30-v13-13', label: 'Even30 v13.13' },
      { href: 'live/clone30-v13-12', label: 'Clone30 v13.12' },
      { href: 'live/core500-v13-10', label: 'Core500 v13.10' },
      { href: 'live/compare-live-vs-backtest', label: 'Live vs Backtest' },
      { href: 'live/vs-sp500', label: 'Vs S&P 500' },
    ]
  },
  { href: 'backtests', key: 'backtests' },
  { href: 'versions', key: 'versions' },
  { href: 'strategy', key: 'strategy' },
  { href: 'story', key: 'story' },
  { href: 'faqs', key: 'faqs' },
  { href: 'contact', key: 'contact' },
]

export default function NavBar() {
  const params = useParams()
  const pathname = usePathname()
  const locale = Array.isArray(params.locale) ? params.locale[0] : params.locale || 'el'
  const t = getTranslations((locale as Locale) || 'el')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLiveDropdownOpen, setIsLiveDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLLIElement>(null)

  const formatLabel = (value: string): string => {
    if (locale === 'el') {
      return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    }
    return value
  }

  const closeMenu = () => setIsMenuOpen(false)
  const closeDropdown = () => setIsLiveDropdownOpen(false)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLiveDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

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

                if (item.hasDropdown) {
                  return (
                    <li key={item.href} className="relative" ref={dropdownRef}>
                      <button
                        onClick={() => setIsLiveDropdownOpen(!isLiveDropdownOpen)}
                        className="flex items-center gap-2 hover:text-brand-cyan-200 transition-colors focus:outline-none"
                      >
                        {formatLabel(t.nav[navKey] || item.key)}
                        <svg
                          className={`w-4 h-4 transition-transform ${isLiveDropdownOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {isLiveDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-50">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.href}
                              href={`/${locale}/${dropdownItem.href}`}
                              onClick={closeDropdown}
                              className="block px-4 py-3 text-gray-800 hover:bg-brand-cyan-50 hover:text-brand-cyan-700 transition-colors text-sm"
                            >
                              <div className="font-medium">{dropdownItem.label}</div>
                              <div className="text-xs text-gray-500 mt-1">
                                {dropdownItem.href.includes('even30') && '🛡️ Συντηρητική - 15% DD'}
                                {dropdownItem.href.includes('clone30') && '⚖️ Μέτρια - 25% DD'}
                                {dropdownItem.href.includes('core500') && '🔥 Υψηλή - 60% DD'}
                                {dropdownItem.href.includes('compare') && '📊 Σύγκριση αποτελεσμάτων'}
                                {dropdownItem.href.includes('vs-sp500') && '🏛️ Μετοχικός δείκτης'}
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </li>
                  )
                }

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
          <div className="hidden lg:block">
            <LocaleSwitcher />
          </div>
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

                  if (item.hasDropdown) {
                    return (
                      <li key={item.href} className="space-y-2">
                        <div className="text-white/90 font-semibold">
                          {formatLabel(t.nav[navKey] || item.key)}
                        </div>
                        <ul className="ml-4 space-y-2">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <li key={dropdownItem.href}>
                              <Link
                                href={`/${locale}/${dropdownItem.href}`}
                                onClick={closeMenu}
                                className="block py-1 text-white/70 hover:text-white transition-colors text-base"
                              >
                                <div className="font-medium">{dropdownItem.label}</div>
                                <div className="text-xs text-white/50 mt-0.5">
                                  {dropdownItem.href.includes('even30') && '🛡️ Conservative - 15% DD'}
                                  {dropdownItem.href.includes('clone30') && '⚖️ Moderate - 25% DD'}
                                  {dropdownItem.href.includes('core500') && '🔥 Aggressive - 60% DD'}
                                  {dropdownItem.href.includes('compare') && '📊 Performance Comparison'}
                                  {dropdownItem.href.includes('vs-sp500') && '🏛️ Stock Index'}
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    )
                  }

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
