import Link from 'next/link'
import Accordion from '../ui/Accordion'
import { getTranslations, type Locale } from '@/lib/translations'

interface HomeFAQTeaserProps {
  locale: string
}

export default function HomeFAQTeaser({ locale }: HomeFAQTeaserProps) {
  const t = getTranslations((locale as Locale) || 'el')

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-brand-cyan-700">
          {t.home.faq.title}
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion items={t.home.faq.items} />
          <div className="text-center mt-8">
            <Link
              href={`/${locale}/faqs`}
              className="text-brand-cyan-600 hover:text-brand-cyan-700 font-semibold transition-colors inline-flex items-center gap-2"
            >
              {t.home.faq.seeAll}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
