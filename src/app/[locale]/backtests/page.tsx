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
    title: `ForexBot.gr | ${t.nav.backtests} 2008-2023`,
    description: t.backtestVideo.disclaimer,
    path: 'backtests',
  })
}

export default async function BacktestsPage({ params }: LocalePageProps) {
  await resolveLocale(params)
  const backtests = [
    {
      version: 'v13.10 Core500',
      period: '2008–2023',
      cagr: '25%',
      maxDD: '60%',
      leverage: '1:500',
      risk: 'Υψηλό',
      description: 'Η πιο επιθετική έκδοση με υψηλή μόχλευση και στόχο μέγιστης απόδοσης',
      color: 'from-red-500 to-red-600',
      icon: '🔥'
    },
    {
      version: 'v13.12 Clone30',
      period: '2008–2023',
      cagr: '25%',
      maxDD: '25%',
      leverage: '1:30',
      risk: 'Μέτριο',
      description: 'Ισορροπημένη έκδοση με καλό συνδυασμό ρίσκου και απόδοσης',
      color: 'from-orange-500 to-orange-600',
      icon: '⚖️'
    },
    {
      version: 'v13.13 Even30',
      period: '2008–2023',
      cagr: '20%',
      maxDD: '15%',
      leverage: '1:30',
      risk: 'Χαμηλό',
      description: 'Συντηρητική έκδοση με έμφαση στην προστασία κεφαλαίου',
      color: 'from-green-500 to-green-600',
      icon: '🛡️'
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-brand-cyan-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-indigo-600 to-brand-cyan-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/brandx192.png')] opacity-5 bg-repeat" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-6xl">📊</span>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-2">
                <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  Backtests ForexBot v13
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-purple-200">
                Ιστορικά Αποτελέσματα 2008–2023
              </h2>
            </div>
          </div>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-95">
            Δείτε τα ιστορικά αποτελέσματα ForexBot v13 με αναλυτικά CAGR, Max Drawdown και δείκτες
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-green-300">15 χρόνια</div>
                <div className="text-sm opacity-90">Δεδομένα</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-300">3 εκδόσεις</div>
                <div className="text-sm opacity-90">Στρατηγικές</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-300">Επικυρωμένα</div>
                <div className="text-sm opacity-90">Αποτελέσματα</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What are Backtests */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-blue-100">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">🔬</span>
                <h2 className="text-3xl font-bold text-blue-800">Τι Είναι τα Backtests;</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Τα backtests είναι προσομοιώσεις της στρατηγικής σε ιστορικά δεδομένα. Δεν είναι πραγματικές επενδύσεις,
                  αλλά παρέχουν ένδειξη για την πιθανή απόδοση υπό παρόμοιες συνθήκες αγοράς.
                </p>
                <div className="bg-blue-100 border-l-4 border-blue-400 p-4 rounded-r-lg">
                  <p className="text-blue-800 font-semibold">
                    Τα backtests περιλαμβάνουν spread, slippage, και άλλες ρεαλιστικές παραμέτρους,
                    αλλά δεν μπορούν να προβλέψουν το μέλλον με ακρίβεια.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Backtest Results */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                📈 Αποτελέσματα Ανά Έκδοση
              </h2>
              <p className="text-xl text-gray-600">
                Αναλυτικά στατιστικά στοιχεία για κάθε έκδοση της στρατηγικής
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {backtests.map((bt) => (
                <div key={bt.version} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                  <div className={`bg-gradient-to-r ${bt.color} text-white p-6`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{bt.icon}</span>
                      <h3 className="text-xl font-bold">{bt.version}</h3>
                    </div>
                    <p className="text-sm opacity-90">{bt.description}</p>
                  </div>

                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-gray-800">{bt.cagr}</div>
                        <div className="text-xs text-gray-600">CAGR</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-gray-800">{bt.maxDD}</div>
                        <div className="text-xs text-gray-600">Max DD</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-gray-800">{bt.leverage}</div>
                        <div className="text-xs text-gray-600">Μόχλευση</div>
                      </div>
                      <div className={`bg-gradient-to-r ${bt.color} rounded-lg p-3 text-center text-white`}>
                        <div className="text-lg font-bold">{bt.risk}</div>
                        <div className="text-xs opacity-90">Ρίσκο</div>
                      </div>
                    </div>

                    <div className="text-center mb-4">
                      <span className="text-sm text-gray-600">Περίοδος: {bt.period}</span>
                    </div>

                    <button className="w-full bg-gradient-to-r from-gray-600 to-gray-700 text-white py-3 rounded-lg font-semibold hover:from-gray-700 hover:to-gray-800 transition-all duration-300">
                      Download PDF/Excel
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Download All Button */}
            <div className="text-center">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-orange-100 max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <span className="text-5xl">📦</span>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-gray-800">Λήψη Όλων των Reports</h3>
                    <p className="text-gray-600">Backtests και Excel αναλύσεις σε ένα αρχείο</p>
                  </div>
                </div>
                <a
                  href="https://forexbot.gr/assets/backtests/backtests.zip"
                  download
                  className="bg-gradient-to-r from-brand-orange-500 to-brand-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-brand-orange-600 hover:to-brand-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg inline-flex items-center gap-3"
                >
                  <span>⬇️</span>
                  Λήψη Backtest και Excel Reports
                  <span>📊</span>
                </a>
                <p className="text-sm text-gray-500 mt-4">
                  ZIP αρχείο ~25MB - Περιλαμβάνει όλα τα διαγράμματα και αναλύσεις
                </p>
              </div>
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
                <h3 className="text-2xl font-bold text-yellow-800">Σημαντική Νομική Σημείωση</h3>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Τα backtests είναι προσομοιώσεις βασισμένες σε ιστορικά δεδομένα και δεν εγγυώνται μελλοντική απόδοση.
                  Πρόκειται αποκλειστικά για εκπαιδευτικά στοιχεία που δείχνουν πώς θα είχε αποδώσει η στρατηγική στο παρελθόν.
                </p>
                <p>
                  <strong>ForexBot.gr δεν παρέχει επενδυτικές υπηρεσίες</strong> και δεν αναλαμβάνει καμία ευθύνη για τυχόν
                  επενδυτικές αποφάσεις που μπορεί να λάβετε με βάση αυτά τα δεδομένα.
                </p>
                <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 rounded-r-lg mt-6">
                  <p className="text-yellow-800 font-semibold">
                    Τα παρελθοντικά αποτελέσματα δεν αποτελούν εγγύηση μελλοντικών αποδόσεων.
                    Η διαπραγμάτευση Forex ενέχει σημαντικό κίνδυνο απώλειας κεφαλαίου.
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
