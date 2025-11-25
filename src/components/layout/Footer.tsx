'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { getTranslations, type Locale } from '@/lib/translations'

const navEntries = [
  { key: 'home', path: '' },
  { key: 'live', path: 'live' },
  { key: 'backtests', path: 'backtests' },
  { key: 'versions', path: 'versions' },
  { key: 'strategy', path: 'strategy' },
  { key: 'story', path: 'story' },
  { key: 'faqs', path: 'faqs' },
  { key: 'contact', path: 'contact' },
]

export default function Footer() {
  const params = useParams()
  const locale = Array.isArray(params.locale) ? params.locale[0] : params.locale || 'el'
  const t = getTranslations((locale as Locale) || 'el')

  const legalLinks = [
    { label: t.footer.disclaimer, href: `/${locale}/legal/disclaimer` },
    { label: 'Technical Disclaimer', href: `/${locale}/legal/disclaimer-technical` },
    { label: t.footer.terms, href: `/${locale}/legal/terms-of-use` },
    { label: t.footer.privacy, href: `/${locale}/legal/privacy-cookies` },
  ]

  return (
    <footer className="bg-gradient-to-b from-gray-950 to-gray-900 text-white py-16 border-t border-gray-800 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-4">
          <div className="md:col-span-1">
            <Link href={`/${locale}`} className="inline-flex items-center">
              <Image
                src="/assets/brandx192.png"
                alt="ForexBot Logo"
                width={120}
                height={120}
                className="rounded-2xl shadow-2xl bg-white/10 p-4"
                unoptimized
              />
            </Link>
            <p className="text-gray-400 mt-6 text-sm leading-relaxed">
              Αλγοριθμική στρατηγική Forex με επαληθευμένα live δεδομένα, backtests 2008–2023 και εκπαιδευτικό
              περιεχόμενο για υπεύθυνους traders.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wide text-brand-cyan-300">Explore</h3>
            <ul className="space-y-2 text-sm">
              {navEntries.map((item) => {
                const label = t.nav[item.key as keyof typeof t.nav] || item.key
                const href = item.path ? `/${locale}/${item.path}` : `/${locale}`
                return (
                  <li key={item.key}>
                    <Link href={href} className="text-gray-300 hover:text-white transition-colors">
                      {label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wide text-brand-cyan-300">Legal</h3>
            <ul className="space-y-2 text-sm">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wide text-brand-cyan-300">Stay Informed</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Παρακολούθησε τα live KPIs, σύγκρινε backtests και διάβασε τις τεχνικές αναλύσεις της στρατηγικής.
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center bg-brand-cyan-500 hover:bg-brand-cyan-400 transition-colors text-gray-900 font-semibold px-5 py-3 rounded-lg"
            >
              Επικοινωνία & Updates →
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  )
}
