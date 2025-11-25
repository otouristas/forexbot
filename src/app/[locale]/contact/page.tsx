import type { Metadata } from 'next'
import ContactContent from '@/components/sections/ContactContent'
import { buildPageMetadata } from '@/lib/seo'
import { LocalePageProps } from '@/models/locale-page-props'
import { resolveLocale } from '@/lib/locale'

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const locale = await resolveLocale(params)
  return buildPageMetadata({
    locale,
    title: 'ForexBot.gr | About & Contact',
    description: 'Συστηθείτε στην ομάδα του ForexBot.gr και επικοινωνήστε για τεχνικές ή εκπαιδευτικές ερωτήσεις.',
    path: 'contact',
  })
}

export default async function ContactPage({ params }: LocalePageProps) {
  const locale = await resolveLocale(params)
  return <ContactContent locale={locale} />
}
