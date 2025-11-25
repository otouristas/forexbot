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
    title: `ForexBot.gr | ${t.versions.title}`,
    description: t.versions.description,
    path: 'versions',
  })
}

export default async function VersionsPage({ params }: LocalePageProps) {
  const locale = await resolveLocale(params)
  const t = getTranslations(locale)

  const versionsData = [
    {
      key: 'core500',
      icon: '🔥',
      color: 'from-red-500 to-red-600',
      risk: 'High Risk',
    },
    {
      key: 'clone30',
      icon: '⚖️',
      color: 'from-orange-500 to-orange-600',
      risk: 'Moderate Risk',
    },
    {
      key: 'even30',
      icon: '🛡️',
      color: 'from-green-500 to-green-600',
      risk: 'Low Risk',
    },
  ] as const

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-brand-cyan-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-cyan-600 via-brand-cyan-700 to-brand-cyan-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/brandx192.png')] opacity-5 bg-repeat" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-6xl">📊</span>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-2">
                <span className="bg-gradient-to-r from-white to-brand-cyan-200 bg-clip-text text-transparent">
                  {t.versions.title}
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-brand-cyan-200">
                {t.versions.subtitle}
              </h2>
            </div>
          </div>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-95">
            {t.versions.description}
          </p>
        </div>
      </section>

      {/* Versions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                📈 {t.versions.title}
              </h2>
              <p className="text-xl text-gray-600">
                {t.versions.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {versionsData.map((version) => {
                const versionData = t.versions.versions[version.key]
                return (
                  <div key={version.key} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    <div className={`bg-gradient-to-r ${version.color} text-white p-6`}>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">{version.icon}</span>
                        <h3 className="text-xl font-bold">{versionData.name}</h3>
                      </div>
                      <p className="text-sm opacity-90">{version.risk}</p>
                    </div>

                    <div className="p-6">
                      <div className="grid grid-cols-1 gap-4 mb-6">
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-sm text-gray-600">{t.versions.tableHeaders.version}</div>
                          <div className="text-lg font-bold text-gray-800">{versionData.version}</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-sm text-gray-600">{t.versions.tableHeaders.leverage}</div>
                          <div className="text-lg font-bold text-gray-800">{versionData.leverage}</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-sm text-gray-600">{t.versions.tableHeaders.maxDD}</div>
                          <div className="text-lg font-bold text-gray-800">{versionData.maxDD}</div>
                        </div>
                        <div className={`bg-gradient-to-r ${version.color} rounded-lg p-3 text-center text-white`}>
                          <div className="text-sm opacity-90">{t.versions.tableHeaders.profile}</div>
                          <div className="text-lg font-bold">{versionData.profile}</div>
                        </div>
                      </div>

                      <div className="text-center mb-4">
                        <span className="text-sm text-gray-600">{t.versions.tableHeaders.application}: {versionData.application}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
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
                <span className="text-3xl">⚠️</span>
                <h3 className="text-2xl font-bold text-gray-800">{t.versions.title}</h3>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  {t.versions.conclusion}
                </p>
                <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 rounded-r-lg mt-6">
                  <p className="text-yellow-800 font-semibold">
                    {t.versions.disclaimer}
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
