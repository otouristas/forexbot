import { notFound } from 'next/navigation'
import MainLayout from '@/components/layout/MainLayout'

export const metadata = {
  title: 'ForexBot.gr',
}

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  if (locale !== 'el' && locale !== 'en') {
    notFound()
  }

  return (
    <html lang={locale}>
      <body>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  )
}
