'use client'

import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'

export default function LocaleSwitcher() {
  const { locale } = useParams()
  const pathname = usePathname()

  const switchLocale = locale === 'el' ? 'en' : 'el'
  const newPath = pathname.replace(`/${locale}`, `/${switchLocale}`)

  return (
    <Link href={newPath} className="text-white hover:underline">
      {locale === 'el' ? 'English' : 'Ελληνικά'}
    </Link>
  )
}
