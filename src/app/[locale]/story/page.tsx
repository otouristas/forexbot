import type { Metadata } from 'next'
import { LocalePageProps } from '@/models/locale-page-props'
import { buildPageMetadata } from '@/lib/seo'
import { resolveLocale } from '@/lib/locale'
import { getTranslations } from '@/lib/translations'

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const t = getTranslations(locale)
  return buildPageMetadata({
    locale,
    title: `ForexBot.gr | ${t.story.title}`,
    description: t.story.description,
    path: 'story',
  })
}

export default async function StoryPage({ params }: LocalePageProps) {
  const locale = await resolveLocale(params)
  const t = getTranslations(locale)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-brand-cyan-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-brand-cyan-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/brandx192.png')] opacity-5 bg-repeat" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-6xl">📚</span>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-2">
                <span className="bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
                  {t.story.title}
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-emerald-200">
                {t.story.subtitle}
              </h2>
            </div>
          </div>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-95">
            {t.story.description}
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                🏛️ {t.story.title}
              </h2>
              <p className="text-xl text-gray-600">
                {t.story.subtitle}
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-teal-400 to-brand-cyan-400"></div>

              <div className="space-y-12">
                {t.story.timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Timeline dot */}
                    <div className="absolute left-4 w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{item.year}</span>
                    </div>

                    {/* Content card */}
                    <div className="ml-20 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-6">
                        <h3 className="text-xl font-bold">{item.event}</h3>
                      </div>
                      <div className="p-6">
                        <p className="text-gray-700 mb-4 leading-relaxed">{item.description}</p>
                        <button className="text-emerald-600 hover:text-emerald-700 font-semibold hover:underline transition-colors">
                          {t.story.learnMore} →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🎯</span>
                <h3 className="text-2xl font-bold text-gray-800">{t.story.title}</h3>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  {t.story.conclusion}
                </p>
                <div className="bg-emerald-50 border-l-4 border-emerald-400 p-4 rounded-r-lg mt-6">
                  <p className="text-emerald-800 font-semibold">
                    ForexBot.gr does not provide investment services – educational content only.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
