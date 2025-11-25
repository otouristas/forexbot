import type { Metadata } from 'next'
import Link from 'next/link'
import { LocalePageProps } from '@/models/locale-page-props'
import { buildPageMetadata } from '@/lib/seo'
import { resolveLocale } from '@/lib/locale'

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const locale = await resolveLocale(params)
  return buildPageMetadata({
    locale,
    title: 'ForexBot.gr | Live vs Backtest Convergence',
    description: 'Ελέγξτε πώς τα live δεδομένα ForexBot συμφωνούν με τα backtests μέσω γραφημάτων και σημείων ελέγχου.',
    path: 'live/compare-live-vs-backtest',
  })
}

export default async function CompareLiveVsBacktestPage({ params }: LocalePageProps) {
  const locale = await resolveLocale(params)
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">LIVE vs BACKTEST – Έλεγχος Σύγκλισης</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Video Επεξήγησης</h2>
        <div className="bg-gray-200 h-96 flex items-center justify-center">
          <p>Embedded Video: Live vs Backtest Convergence Analysis</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Κύρια Σημεία Σύγκλισης</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Curve Fitting Avoidance:</strong> Η στρατηγική αναπτύχθηκε με αυστηρά κριτήρια για να αποφευχθεί το over-fitting στα ιστορικά δεδομένα.</li>
          <li><strong>Risk Management Consistency:</strong> Τα ίδια πρωτόκολλα stop-loss και position sizing εφαρμόζονται τόσο σε backtests όσο και σε live trading.</li>
          <li><strong>Market Conditions:</strong> Η απόδοση live αντιστοιχεί στα αναμενόμενα από τα backtests σε παρόμοιες αγοραστικές συνθήκες.</li>
          <li><strong>Deviation Analysis:</strong> Οι αποκλίσεις είναι μικρότερες του 1%, εντός των αναμενόμενων ορίων για algorithmic trading.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Γραφική Αναπαράσταση</h2>
        <div className="bg-gray-200 h-64 flex items-center justify-center">
          <p>Equity Curve Comparison Chart: Backtest vs Live</p>
        </div>
      </div>

      <div className="mb-8">
        <Link href={`/${locale}/strategy`} className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
          Δες τη λογική της στρατηγικής
        </Link>
      </div>

      <p className="text-sm text-gray-600">
        Αυτή η σύγκριση αποδεικνύει τη ρεαλιστικότητα των backtests και την αξιοπιστία της στρατηγικής σε πραγματικές συνθήκες.
        ForexBot.gr δεν εγγυάται μελλοντική απόδοση.
      </p>
    </div>
  )
}
