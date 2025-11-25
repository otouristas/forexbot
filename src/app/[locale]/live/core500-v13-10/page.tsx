import type { Metadata } from 'next'
import Link from 'next/link'
import LiveKPISection from '@/components/sections/LiveKPISection'
import { LocalePageProps } from '@/models/locale-page-props'
import { buildPageMetadata } from '@/lib/seo'
import { resolveLocale } from '@/lib/locale'

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const locale = await resolveLocale(params)
  return buildPageMetadata({
    locale,
    title: 'ForexBot.gr | Core500 v13.10 Live KPIs',
    description: 'Παρακολούθηση στατιστικών Myfxbook για την έκδοση Core500 v13.10 με κέρδη, drawdown και πινακίδες.',
    path: 'live/core500-v13-10',
  })
}

export default async function Core500V1310Page({ params }: LocalePageProps) {
  const locale = await resolveLocale(params)

  const stats = {
    initialDeposit: '$10,000.32',
    balance: '$18,671.86',
    profit: '$8,671.54',
    gain: '86.7%',
    drawdown: '26%',
    monthly: '2.83%',
    pf: '1.50',
    pips: '5,929.9',
    tracking: '⭐⭐⭐⭐⭐⭐',
    views: '1,224',
    myfxbookUrl: 'https://www.myfxbook.com/members/giannis/funded-instatrader/10605583',
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-12 text-center text-brand-cyan-700">
        ForexBot v13.10 Core500 – Ζωντανή Απόδοση & Πραγματικά Στατιστικά
      </h1>

      <div className="mb-12">
        <div className="chart-wrapper bg-white rounded-xl shadow-lg p-4">
          <canvas
            id="chart2"
            className="w-full"
            style={{ boxSizing: 'border-box', display: 'block', height: '542px', width: '100%' }}
            width="980"
            height="542"
          />
        </div>
      </div>

      <div className="mb-12">
        <LiveKPISection locale={locale} stats={stats} />
      </div>

      <div className="mb-8">
        <p
          className="text-sm opacity-75 text-center max-w-4xl mx-auto"
          style={{
            fontSize: '0.85em',
            opacity: 0.75,
            color: '#ffaa00',
            marginTop: '30px',
            textAlign: 'center',
          }}
        >
          ⚠️ Η παρακολούθηση της ζωντανής απόδοσης δεν αποτελεί επενδυτική σύσταση. Η χρήση της στρατηγικής συνεπάγεται
          ρίσκο.{' '}
          <strong>Μην επενδύετε περισσότερα από όσα μπορείτε να αντέξετε να χάσετε.</strong>
        </p>
      </div>

      <div className="text-center">
        <Link
          href={`/${locale}/backtests`}
          className="bg-gradient-to-r from-brand-cyan-500 to-brand-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-brand-cyan-600 hover:to-brand-cyan-700 transition-all duration-300 shadow-md hover:shadow-lg inline-block"
        >
          Δες το διάγραμμα απο το 2023 ➔
        </Link>
      </div>
    </div>
  )
}
