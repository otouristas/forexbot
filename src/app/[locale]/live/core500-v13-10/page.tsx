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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-brand-cyan-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-orange-500 via-brand-orange-600 to-red-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/brandx192.png')] opacity-5 bg-repeat" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-6xl">🔥</span>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-2">
                <span className="bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
                  ForexBot v13.10
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-orange-200">
                Core500 – High Performance
              </h2>
            </div>
          </div>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-95">
            Παρακολούθηση στατιστικών Myfxbook για την έκδοση Core500 v13.10 με κέρδη, drawdown και πινακίδες
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-green-300">86.7%</div>
                <div className="text-sm opacity-90">Συνολική Απόδοση</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-300">26%</div>
                <div className="text-sm opacity-90">Max Drawdown</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-300">Υψηλό</div>
                <div className="text-sm opacity-90">Επίπεδο Ρίσκου</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg border border-orange-100">
              <h2 className="text-3xl font-bold text-center mb-6 text-orange-800">
                🚀 Υψηλής Απόδοσης Στρατηγική Core500
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-orange-700">Βασικά Χαρακτηριστικά</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <span>Υψηλή μόχλευση για μέγιστη απόδοση</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <span>Drawdown έως 50% (υψηλού ρίσκου)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <span>Στόχος ετήσιας απόδοσης 80%+</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <span>Επαληθευμένα αποτελέσματα Myfxbook</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-orange-700">Για Ποιους Είναι;</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span>Έμπειρους traders με υψηλή ανοχή ρίσκου</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span>Επενδυτές που αναζητούν υψηλές αποδόσεις</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span>Όσους καταλαβαίνουν το leveraged trading</span>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
                    <p className="text-red-800 text-sm font-semibold">
                      ⚠️ Μόνο για έμπειρους επενδυτές με υψηλή ανοχή ρίσκου
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Chart */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                📈 Ζωντανή Καμπύλη Απόδοσης
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Πραγματικά δεδομένα από το Myfxbook account με tracking σε πραγματικό χρόνο
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-orange-600 to-red-700 text-white p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">📊</span>
                  <div>
                    <h3 className="text-2xl font-bold">Equity Curve - Live Performance</h3>
                    <p className="text-orange-100">Εξέλιξη κεφαλαίου σε πραγματικό χρόνο</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-4 gap-4 mt-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-white">{stats.balance}</div>
                    <div className="text-xs text-orange-100">Τρέχον Υπόλοιπο</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-green-300">{stats.gain}</div>
                    <div className="text-xs text-orange-100">Συνολική Απόδοση</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-blue-300">{stats.monthly}</div>
                    <div className="text-xs text-orange-100">Μηνιαία Απόδοση</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-purple-300">{stats.pf}</div>
                    <div className="text-xs text-orange-100">Profit Factor</div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="chart-wrapper bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <canvas
                    id="chart2"
                    className="w-full"
                    style={{ boxSizing: 'border-box', display: 'block', height: '542px', width: '100%' }}
                    width="980"
                    height="542"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KPI Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">📊 Λεπτομερή Στατιστικά Myfxbook</h2>
              <p className="text-lg text-gray-600">Επαληθευμένα στοιχεία από ανεξάρτητη πλατφόρμα</p>
            </div>

            <div className="mb-12">
              <LiveKPISection locale={locale} stats={stats} />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
                <h3 className="text-2xl font-bold mb-6 text-green-800">✅ Ισχυρά Σημεία</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl mt-1">📈</span>
                    <div>
                      <div className="font-semibold text-gray-800">Εξαιρετική Απόδοση</div>
                      <div className="text-sm text-gray-600">86.7% κέρδος σε πραγματικό λογαριασμό</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl mt-1">⭐</span>
                    <div>
                      <div className="font-semibold text-gray-800">Υψηλή Αξιολόγηση</div>
                      <div className="text-sm text-gray-600">6 αστέρια στο Myfxbook community</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl mt-1">👁️</span>
                    <div>
                      <div className="font-semibold text-gray-800">Δημοφιλής</div>
                      <div className="text-sm text-gray-600">Πάνω από 1,200 προβολές</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-100">
                <h3 className="text-2xl font-bold mb-6 text-orange-800">⚠️ Σημεία Προσοχής</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 text-xl mt-1">📉</span>
                    <div>
                      <div className="font-semibold text-gray-800">Υψηλό Drawdown</div>
                      <div className="text-sm text-gray-600">Μέγιστη απώλεια 26%</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 text-xl mt-1">🎯</span>
                    <div>
                      <div className="font-semibold text-gray-800">Για Ειδικούς</div>
                      <div className="text-sm text-gray-600">Απαιτεί εμπειρία σε υψηλό ρίσκο</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 text-xl mt-1">💰</span>
                    <div>
                      <div className="font-semibold text-gray-800">Όχι για Όλους</div>
                      <div className="text-sm text-gray-600">Μόνο για όσους αντέχουν ζημιές</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Warning */}
      <section className="py-12 bg-gradient-to-r from-red-50 to-pink-50 border-t border-red-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-red-200">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">⚠️</span>
                <h3 className="text-2xl font-bold text-red-800">Σημαντική Προειδοποίηση Ρίσκου</h3>
              </div>
              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                <p className="text-red-800 leading-relaxed mb-4">
                  <strong>Η παρακολούθηση της ζωντανής απόδοσης δεν αποτελεί επενδυτική σύσταση.</strong> Η χρήση της στρατηγικής συνεπάγεται σημαντικό ρίσκο απώλειας κεφαλαίου.
                </p>
                <p className="text-red-800 font-semibold text-lg">
                  Μην επενδύετε περισσότερα από όσα μπορείτε να αντέξετε να χάσετε.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Backtest Link */}
      <section className="py-16 bg-gradient-to-r from-brand-cyan-600 to-brand-cyan-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Δες την Ιστορική Απόδοση</h2>
          <p className="text-xl mb-8 opacity-95">Σύγκρινε τα live αποτελέσματα με τα backtests από το 2008</p>
          <Link
            href={`/${locale}/backtests`}
            className="bg-white text-brand-cyan-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
          >
            Δες το διάγραμμα από το 2023 ➔
          </Link>
        </div>
      </section>
    </div>
  )
}
