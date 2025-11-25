import Link from 'next/link'

const versions = [
  {
    id: 'core500-v13-10',
    name: 'Core500 – v13.10',
    leverage: '1:500',
    maxDD: '~60%',
    cagr: '~25%',
    stopOut: 'Custom',
    application: 'Live since 2024',
    href: 'live/core500-v13-10',
  },
  {
    id: 'clone30-v13-12',
    name: 'Clone30 – v13.12',
    leverage: '1:30',
    maxDD: '~25%',
    cagr: '~25%',
    stopOut: 'Standard',
    application: 'Backtest 2008–2023',
    href: 'live/clone30-v13-12',
  },
  {
    id: 'even30-v13-13',
    name: 'Even30 – v13.13',
    leverage: '1:30',
    maxDD: '~15%',
    cagr: '~20%',
    stopOut: 'Standard',
    application: 'Live since 2025',
    href: 'live/even30-v13-13',
  },
]

interface HomeVersionsGridProps {
  locale: string
}

export default function HomeVersionsGrid({ locale }: HomeVersionsGridProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Εκδόσεις ForexBot</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {versions.map((version) => (
            <div key={version.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{version.name}</h3>
              <div className="space-y-2 mb-6">
                <p><strong>Μόχλευση:</strong> {version.leverage}</p>
                <p><strong>Max DD:</strong> {version.maxDD}</p>
                <p><strong>CAGR:</strong> {version.cagr}</p>
                <p><strong>Stop-Out:</strong> {version.stopOut}</p>
                <p><strong>Εφαρμογή:</strong> {version.application}</p>
              </div>
              <Link
                href={`/${locale}/${version.href}`}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Δες λεπτομέρειες
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
