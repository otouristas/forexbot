import Link from 'next/link'
import { getTranslations, type Locale } from '@/lib/translations'

const sections = [
  {
    link: 'strategy',
    titleKey: 'title1' as const,
    contentKey: 'content1' as const,
  },
  {
    link: 'strategy',
    titleKey: 'title2' as const,
    contentKey: 'content2' as const,
  },
  {
    link: 'story',
    titleKey: 'title3' as const,
    contentKey: 'content3' as const,
  },
  {
    link: 'contact',
    titleKey: 'title4' as const,
    contentKey: 'content4' as const,
  },
]

interface HomeWhatIsSectionProps {
  locale: string
}

export default function HomeWhatIsSection({ locale }: HomeWhatIsSectionProps) {
  const t = getTranslations((locale as Locale) || 'el')

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <h2 className="text-xl font-bold mb-4 text-brand-cyan-700">
                {t.home.whatIs[section.titleKey]}
              </h2>
              <p className="mb-6 text-gray-700 leading-relaxed">{t.home.whatIs[section.contentKey]}</p>
              <Link
                href={`/${locale}/${section.link}`}
                className="text-brand-cyan-600 hover:text-brand-cyan-700 font-semibold transition-colors inline-flex items-center gap-2"
              >
                {t.home.whatIs.learnMore}
                <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
