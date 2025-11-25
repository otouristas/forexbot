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
    title: `ForexBot.gr | ${t.strategy.title}`,
    description: t.strategy.description,
    path: 'strategy',
  })
}

export default async function StrategyPage({ params }: LocalePageProps) {
  const locale = await resolveLocale(params)
  const t = getTranslations(locale)

  const sections = [
    {
      key: 'strategicLogic',
      icon: '🤖',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      key: 'riskManagement',
      icon: '🛡️',
      color: 'from-green-500 to-emerald-600',
    },
    {
      key: 'pairs',
      icon: '💱',
      color: 'from-purple-500 to-violet-600',
    },
    {
      key: 'patterns',
      icon: '📈',
      color: 'from-orange-500 to-red-600',
    },
    {
      key: 'timeframes',
      icon: '⏱️',
      color: 'from-cyan-500 to-teal-600',
    },
  ] as const

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-brand-cyan-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-indigo-600 to-brand-cyan-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/brandx192.png')] opacity-5 bg-repeat" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-6xl">🧠</span>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-2">
                <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  {t.strategy.title}
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-purple-200">
                {t.strategy.subtitle}
              </h2>
            </div>
          </div>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-95">
            {t.strategy.description}
          </p>
        </div>
      </section>

      {/* Strategy Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sections.map((section) => {
                const sectionData = t.strategy.sections[section.key]
                return (
                  <div key={section.key} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    <div className={`bg-gradient-to-r ${section.color} text-white p-6`}>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">{section.icon}</span>
                        <h3 className="text-xl font-bold">{sectionData.title}</h3>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {sectionData.content}
                      </p>
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                        <p className="text-sm text-yellow-800 font-semibold">
                          {sectionData.disclaimer}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Important Disclaimer */}
      <section className="py-12 bg-gradient-to-r from-yellow-50 to-orange-50 border-t border-yellow-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-yellow-200">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">⚠️</span>
                <h3 className="text-2xl font-bold text-yellow-800">Important Legal Notice</h3>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The ForexBot strategy is presented for educational purposes only. All trading involves risk,
                  and past performance does not guarantee future results.
                </p>
                <p>
                  <strong>ForexBot.gr does not provide investment services</strong> and assumes no responsibility
                  for any investment decisions made based on this information.
                </p>
                <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 rounded-r-lg mt-6">
                  <p className="text-yellow-800 font-semibold">
                    This is educational content, not investment advice. Always conduct your own research and
                    consider consulting with qualified financial professionals.
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
