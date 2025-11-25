'use client'

import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'

export default function LocaleSwitcher() {
  const params = useParams()
  const pathname = usePathname()
  const locale = Array.isArray(params.locale) ? params.locale[0] : params.locale || 'el'

  const switchLocale = locale === 'el' ? 'en' : 'el'
  const newPath = pathname.replace(`/${locale}`, `/${switchLocale}`)

  const getLanguageDisplay = (currentLocale: string) => {
    if (currentLocale === 'el') {
      return (
        <span className="flex items-center gap-2">
          <span className="text-lg">🇬🇧</span>
          <span className="hidden sm:inline">English</span>
        </span>
      )
    } else {
      return (
        <span className="flex items-center gap-2">
          <span className="text-lg">🇬🇷</span>
          <span className="hidden sm:inline">Ελληνικά</span>
        </span>
      )
    }
  }

  return (
    <Link
      href={newPath}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200 text-white hover:text-white font-medium"
    >
      {getLanguageDisplay(locale)}
    </Link>
  )
}
