import type { Metadata } from 'next'
import { LocalePageProps } from '@/models/locale-page-props'
import { buildPageMetadata } from '@/lib/seo'
import { resolveLocale } from '@/lib/locale'

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const locale = await resolveLocale(params)
  return buildPageMetadata({
    locale,
    title: 'ForexBot.gr | Versions Overview',
    description: 'Σύγκριση εκδόσεων ForexBot v13 (Core500, Clone30, Even30) με μόχλευση, drawdown και προφίλ ρίσκου.',
    path: 'versions',
  })
}

export default async function VersionsPage({ params }: LocalePageProps) {
  await resolveLocale(params)
  const versions = [
    {
      version: 'v13.10',
      name: 'Core500',
      leverage: '1:500',
      maxDD: '~60%',
      profile: 'Επιθετικό',
      application: 'Live since 2024',
    },
    {
      version: 'v13.12',
      name: 'Clone30',
      leverage: '1:30',
      maxDD: '~25%',
      profile: 'Balanced',
      application: 'Backtest 2008–2023',
    },
    {
      version: 'v13.13',
      name: 'Even30',
      leverage: '1:30',
      maxDD: '~15%',
      profile: 'Συντηρητικό',
      application: 'Live since 2025',
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Εκδόσεις ForexBot v13 – Επιθετικό vs Συντηρητικό Προφίλ</h1>

      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Έκδοση</th>
              <th className="border px-4 py-2">Όνομα</th>
              <th className="border px-4 py-2">Μόχλευση</th>
              <th className="border px-4 py-2">Max DD (στόχος)</th>
              <th className="border px-4 py-2">Προφίλ</th>
              <th className="border px-4 py-2">Εφαρμογή</th>
            </tr>
          </thead>
          <tbody>
            {versions.map((v) => (
              <tr key={v.version}>
                <td className="border px-4 py-2">{v.version}</td>
                <td className="border px-4 py-2">{v.name}</td>
                <td className="border px-4 py-2">{v.leverage}</td>
                <td className="border px-4 py-2">{v.maxDD}</td>
                <td className="border px-4 py-2">{v.profile}</td>
                <td className="border px-4 py-2">{v.application}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-lg">
        Κάθε έκδοση είναι σχεδιασμένη για διαφορετικά προφίλ ρίσκου. Επιλέξτε ανάλογα με τις προτιμήσεις σας.
        Θυμηθείτε: Όλες οι επενδύσεις ενέχουν κίνδυνο, και το ForexBot δεν είναι επενδυτική συμβουλή.
      </p>
    </div>
  )
}
