import { notFound } from 'next/navigation'
import MainLayout from '@/components/layout/MainLayout'

export const metadata = {
  title: 'ForexBot.gr',
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  
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
