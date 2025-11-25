import type { Metadata } from 'next'
import HomeHero from '@/components/sections/HomeHero'
import HomeIntro from '@/components/sections/HomeIntro'
import HomeVersionsGrid from '@/components/sections/HomeVersionsGrid'
import HomeLiveSnapshot from '@/components/sections/HomeLiveSnapshot'
import HomeBacktestVideo from '@/components/sections/HomeBacktestVideo'
import HomeWhatIsSection from '@/components/sections/HomeWhatIsSection'
import HomeFAQTeaser from '@/components/sections/HomeFAQTeaser'
import { getTranslations, type Locale } from '@/lib/translations'
import { LocalePageProps } from '@/models/locale-page-props'
import { buildPageMetadata } from '@/lib/seo'
import { resolveLocale } from '@/lib/locale'

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const currentLocale = await resolveLocale(params)
  const t = getTranslations(currentLocale)

  return buildPageMetadata({
    locale: currentLocale,
    title: t.home.hero.title,
    description: t.home.hero.description,
  })
}

export default async function HomePage({ params }: LocalePageProps) {
  const currentLocale = await resolveLocale(params)
  const t = getTranslations(currentLocale)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ForexBot.gr",
    "url": "https://forexbot.gr",
    "description": t.home.hero.description,
    "foundingDate": "2013",
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeHero locale={currentLocale} />
      <HomeIntro locale={currentLocale} />
      <HomeVersionsGrid locale={currentLocale} />
      <HomeLiveSnapshot locale={currentLocale} />
      <HomeBacktestVideo locale={currentLocale} />
      <HomeWhatIsSection locale={currentLocale} />
      <HomeFAQTeaser locale={currentLocale} />
    </div>
  )
}
