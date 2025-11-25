import Link from 'next/link'
import { getTranslations, type Locale } from '@/lib/translations'
import PerformanceChart from '@/components/charts/PerformanceChart'

interface VersionData {
  id: string
  nameKey: 'core500' | 'clone30' | 'even30'
  href: string
  chartData: Array<{ date: string; equity: number }>
}

const versions: VersionData[] = [
  {
    id: 'core500-v13-10',
    nameKey: 'core500',
    href: 'live/core500-v13-10',
    chartData: [
      { date: 'Jan', equity: 10000 },
      { date: 'Mar', equity: 12000 },
      { date: 'Jun', equity: 15000 },
      { date: 'Sep', equity: 17000 },
      { date: 'Dec', equity: 18671 },
    ],
  },
  {
    id: 'clone30-v13-12',
    nameKey: 'clone30',
    href: 'live/clone30-v13-12',
    chartData: [
      { date: 'Jan', equity: 10000 },
      { date: 'Mar', equity: 10500 },
      { date: 'Jun', equity: 11200 },
      { date: 'Sep', equity: 12000 },
      { date: 'Dec', equity: 12500 },
    ],
  },
  {
    id: 'even30-v13-13',
    nameKey: 'even30',
    href: 'live/even30-v13-13',
    chartData: [
      { date: 'Jan', equity: 10000 },
      { date: 'Mar', equity: 10350 },
      { date: 'Jun', equity: 10700 },
      { date: 'Sep', equity: 11000 },
      { date: 'Dec', equity: 11250 },
    ],
  },
]

interface HomeVersionsGridProps {
  locale: string
}

export default function HomeVersionsGrid({ locale }: HomeVersionsGridProps) {
  const t = getTranslations((locale as Locale) || 'el')

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-brand-cyan-700">
          {t.home.versions.title}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {versions.map((version) => {
            const v = t.home.versions[version.nameKey]
            return (
              <div
                key={version.id}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-2">🔹</span>
                  <h3 className="text-xl font-bold text-brand-cyan-600">{v.name}</h3>
                </div>
                <div className="mb-6 h-32">
                  <PerformanceChart data={version.chartData} height={120} />
                </div>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex justify-between">
                    <span className="text-gray-600">{v.cagr}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">{v.maxDD}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">{v.leverage}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">{v.stopOut}</span>
                  </li>
                  <li className="text-xs text-gray-500 mt-3 pt-3 border-t">
                    {v.application}
                  </li>
                </ul>
                <Link
                  href={`/${locale}/${version.href}`}
                  className="block w-full bg-gradient-to-r from-brand-cyan-500 to-brand-cyan-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-brand-cyan-600 hover:to-brand-cyan-700 transition-all duration-300 text-center shadow-md hover:shadow-lg"
                >
                  {t.home.versions.seeDetails}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
