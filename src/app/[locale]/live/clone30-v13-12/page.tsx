import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { LocalePageProps } from '@/models/locale-page-props'
import { buildPageMetadata } from '@/lib/seo'
import { resolveLocale } from '@/lib/locale'

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const locale = await resolveLocale(params)
  return buildPageMetadata({
    locale,
    title: 'ForexBot.gr | Clone30 v13.12 Backtest Profile',
    description: 'Συντηρητικό προφίλ Clone30 v13.12 με μόχλευση 1:30, στατιστικά backtest και νομικές σημειώσεις.',
    path: 'live/clone30-v13-12',
  })
}

export default async function Clone30V1312Page({ params }: LocalePageProps) {
  const locale = await resolveLocale(params)
  const stats = [
    { label: 'Backtest Period', value: '2008–2023', icon: '📅' },
    { label: 'CAGR', value: '25%', icon: '📈' },
    { label: 'Max DD', value: '25%', icon: '📉' },
    { label: 'Leverage', value: '1:30', icon: '⚖️' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-brand-cyan-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-cyan-600 via-brand-cyan-700 to-brand-cyan-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/brandx192.png')] opacity-5 bg-repeat" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-6xl">🔬</span>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-2">
                <span className="bg-gradient-to-r from-white to-brand-cyan-200 bg-clip-text text-transparent">
                  ForexBot v13.12
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-brand-cyan-200">
                Clone30 – Backtest Analysis
              </h2>
            </div>
          </div>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-95">
            Συντηρητικό προφίλ Clone30 v13.12 με μόχλευση 1:30, στατιστικά backtest και νομικές σημειώσεις
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-brand-orange-400">{stat.value}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-brand-cyan-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-brand-cyan-100">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">🎯</span>
                <h2 className="text-3xl font-bold text-brand-cyan-800">Συντηρητική Στρατηγική Clone30</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Η έκδοση Clone30 είναι μια συντηρητική προσέγγιση με μόχλευση 1:30 και εστίαση σε σταθερή απόδοση με χαμηλό drawdown.
                    Προς το παρόν είναι διαθέσιμη μόνο σε backtest, με πιθανή live εφαρμογή στο μέλλον.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      <span className="text-gray-700">Μόχλευση 1:30 για χαμηλότερο ρίσκο</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      <span className="text-gray-700">Drawdown περιορισμένο στο 25%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      <span className="text-gray-700">Σταθερή ετήσια απόδοση 25%</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-brand-cyan-700">Προφίλ Ρίσκου</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Επίπεδο Ρίσκου:</span>
                      <span className="font-semibold text-green-600">Μέτριο</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Max Drawdown:</span>
                      <span className="font-semibold text-orange-600">25%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Αναμενόμενη Απόδοση:</span>
                      <span className="font-semibold text-blue-600">25% CAGR</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Κατάσταση:</span>
                      <span className="font-semibold text-yellow-600">Backtest Only</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S&P 500 Comparison */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                📊 Σύγκριση με S&P 500
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Η απόδοση της Clone30 σε σχέση με τον δείκτη S&P 500 κατά την περίοδο backtest (2008-2023)
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">🏛️</span>
                  <div>
                    <h3 className="text-2xl font-bold">ForexBot vs S&P 500</h3>
                    <p className="text-blue-100">Σύγκριση αποδόσεων 2008-2023</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold text-white mb-1">25%</div>
                    <div className="text-sm text-blue-100">ForexBot CAGR</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold text-white mb-1">~10%</div>
                    <div className="text-sm text-blue-100">S&P 500 CAGR</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold text-white mb-1">2.5x</div>
                    <div className="text-sm text-blue-100">Απόδοση Ratio</div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-6">
                  <Image
                    src="https://forexbot.gr/assets/images/s&p.png"
                    alt="Σύγκριση με S&P 500 - ForexBot Clone30 vs S&P 500 Performance 2008-2023"
                    width={1200}
                    height={600}
                    className="w-full h-auto rounded-xl shadow-lg border border-gray-200"
                    unoptimized
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                    <h4 className="text-lg font-semibold mb-3 text-green-800">✅ Πλεονεκτήματα ForexBot</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>Υψηλότερη ετήσια απόδοση (25% vs 10%)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>Μικρότερη μεταβλητότητα σε κρίσεις</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>24/7 διαπραγμάτευση</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                    <h4 className="text-lg font-semibold mb-3 text-blue-800">📈 Σημαντικά Σημεία</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>Συνεπής απόδοση σε bear markets</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>Διαφοροποιημένο χαρτοφυλάκιο νομισμάτων</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>Αυτόματη διαχείριση ρίσκου</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Backtest Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">📊 Λεπτομερή Στατιστικά Backtest</h2>
              <p className="text-lg text-gray-600">Αναλυτικά στοιχεία απόδοσης για την περίοδο 2008-2023</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800">Βασικά Μετρικά Απόδοσης</h3>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={stat.label} className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{stat.icon}</span>
                        <span className="font-semibold text-gray-700">{stat.label}</span>
                      </div>
                      <div className="text-2xl font-bold text-brand-cyan-600">{stat.value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <Link
                    href={`/${locale}/backtests`}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-cyan-500 to-brand-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-brand-cyan-600 hover:to-brand-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Δες όλα τα backtests
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Live Availability */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-yellow-200">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">🚀</span>
                <div>
                  <h2 className="text-2xl font-bold text-yellow-800">Εκτιμώμενη Διαθεσιμότητα Live</h2>
                  <p className="text-yellow-700">Προετοιμασία για ζωντανή εφαρμογή</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Η live εφαρμογή της Clone30 είναι υπό εξέλιξη και αναμένεται να είναι διαθέσιμη το επόμενο τρίμηνο.
                  Η μετάβαση από backtest σε live trading απαιτεί προσεκτική επικύρωση και compliance checks.
                </p>
                <div className="flex items-center gap-2 text-yellow-700">
                  <span className="text-xl">⏳</span>
                  <span className="font-semibold">Αναμενόμενη κυκλοφορία: Q2 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-12 bg-gradient-to-r from-red-50 to-pink-50 border-t border-red-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-red-200">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">⚖️</span>
                <h3 className="text-2xl font-bold text-red-800">Νομική Αποποίηση Ευθύνης</h3>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Το ForexBot.gr δεν παρέχει επενδυτικές υπηρεσίες. Τα backtests είναι προσομοιώσεις βασισμένες σε ιστορικά δεδομένα
                  και δεν εγγυώνται μελλοντική απόδοση ή απουσία ζημιών.
                </p>
                <div className="bg-red-100 border-l-4 border-red-400 p-4 rounded-r-lg">
                  <p className="text-red-800 font-semibold">
                    ⚠️ Η διαπραγμάτευση Forex ενέχει σημαντικό κίνδυνο απώλειας κεφαλαίου.
                    Μην επενδύετε χρήματα που δεν μπορείτε να χάσετε.
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
