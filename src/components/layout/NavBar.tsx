'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import LocaleSwitcher from './LocaleSwitcher'

const navItems = [
  { href: '', label: 'Αρχική' },
  { href: 'live', label: 'Live' },
  { href: 'backtests', label: 'Backtests' },
  { href: 'versions', label: 'Εκδόσεις' },
  { href: 'strategy', label: 'Τεχνικά' },
  { href: 'story', label: 'Ιστορία' },
  { href: 'faqs', label: 'Ερωτήσεις' },
  { href: 'contact', label: 'Σχετικά & Επικοινωνία' },
]

export default function NavBar() {
  const { locale } = useParams()

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href={`/${locale}`} className="text-xl font-bold">
          ForexBot.gr
        </Link>
        <nav>
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={`/${locale}/${item.href}`} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <LocaleSwitcher />
      </div>
    </header>
  )
}
