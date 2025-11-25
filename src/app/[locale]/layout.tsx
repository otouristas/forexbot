import { notFound } from 'next/navigation'
import MainLayout from '@/components/layout/MainLayout'
import { LocalePageProps } from '@/models/locale-page-props'
import { resolveLocale } from '@/lib/locale'

export const metadata = {
  title: 'ForexBot.gr',
}

interface LocaleLayoutProps extends LocalePageProps {
  readonly children: React.ReactNode
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  try {
    const locale = await resolveLocale(params)
    if (!locale || (locale !== 'el' && locale !== 'en')) {
      notFound()
    }

    return <MainLayout>{children}</MainLayout>
  } catch (error) {
    console.error('LocaleLayout error:', error)
    notFound()
  }
}
