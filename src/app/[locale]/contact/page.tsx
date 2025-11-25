import type { Metadata } from 'next'
import ContactContent from '@/components/sections/ContactContent'
import { buildPageMetadata } from '@/lib/seo'
import { LocalePageProps } from '@/models/locale-page-props'
import { resolveLocale } from '@/lib/locale'
import { getTranslations } from '@/lib/translations'

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const t = getTranslations(locale)
  return buildPageMetadata({
    locale,
    title: `ForexBot.gr | ${t.contact.title}`,
    description: t.contact.description,
    path: 'contact',
  })
}

export default async function ContactPage({ params }: LocalePageProps) {
  const locale = await resolveLocale(params)
  return <ContactContent locale={locale} />
}
