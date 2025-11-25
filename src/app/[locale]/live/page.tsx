import type { Metadata } from 'next'
import Link from 'next/link'
import { LocalePageProps } from '@/models/locale-page-props'
import { buildPageMetadata } from '@/lib/seo'
import { resolveLocale } from '@/lib/locale'

const versions = [
  {
    name: 'Core500 v13.10',
    metrics: { cagr: '25%', dd: '60%', leverage: '1:500' },
    href: 'core500-v13-10',
  },
  {
    name: 'Clone30 v13.12',
    metrics: { cagr: '25%', dd: '25%', leverage: '1:30' },
    href: 'clone30-v13-12',
  },
  {
    name: 'Even30 v13.13',
    metrics: { cagr: '20%', dd: '15%', leverage: '1:30' },
    href: 'even30-v13-13',
  },
]

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const locale = await resolveLocale(params)
  return buildPageMetadata({
    locale,
    title: 'ForexBot.gr | Live Performance Overview',
    description: 'Παρακολουθήστε τις live εκδόσεις ForexBot και συγκρίνετε αποτελέσματα με backtests και S&P 500.',
    path: 'live',
  })
}

export default async function LiveOverviewPage({ params }: LocalePageProps) {
  const locale = await resolveLocale(params)
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Live Απόδοση ForexBot – Επισκόπηση Εκδόσεων</h1>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {versions.map((version) => (
          <div key={version.name} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">{version.name}</h2>
            <div className="space-y-2 mb-6">
              <p><strong>CAGR:</strong> {version.metrics.cagr}</p>
              <p><strong>Max DD:</strong> {version.metrics.dd}</p>
              <p><strong>Μόχλευση:</strong> {version.metrics.leverage}</p>
            </div>
            <Link href={`/${locale}/live/${version.href}`} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Δες λεπτομέρειες
            </Link>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">LIVE vs BACKTEST: Απόδειξη Σύγκλισης</h2>
        <p>Η απόδοση live συγκλίνει με τα backtests, χωρίς curve fitting.</p>
        <Link href={`/${locale}/live/compare-live-vs-backtest`} className="text-blue-600 hover:underline">
          Δες τη σύγκριση →
        </Link>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Σύγκριση με S&P 500</h2>
        <p>Διαφορετικά μέσα, διαφορετικό ρίσκο. Η σύγκριση είναι ενδεικτική.</p>
        <Link href={`/${locale}/live/vs-sp500`} className="text-blue-600 hover:underline">
          Δες τη σύγκριση →
        </Link>
      </div>

      <p className="text-sm text-gray-600">
        ForexBot.gr δεν παρέχει επενδυτικές υπηρεσίες. Όλες οι πληροφορίες είναι ενημερωτικού χαρακτήρα.
      </p>
    </div>
  )
}
