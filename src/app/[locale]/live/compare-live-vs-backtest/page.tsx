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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-brand-cyan-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-brand-cyan-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/brandx192.png')] opacity-5 bg-repeat" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-6xl">🔍</span>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-2">
                <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                  Live vs Backtest
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-cyan-200">
                Έλεγχος Σύγκλισης & Επικύρωσης
              </h2>
            </div>
          </div>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-95">
            Ελέγξτε πώς τα live δεδομένα ForexBot συμφωνούν με τα backtests μέσω γραφημάτων και σημείων ελέγχου
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-green-300">&lt;1%</div>
                <div className="text-sm opacity-90">Απόκλιση</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-300">100%</div>
                <div className="text-sm opacity-90">Σύγκλιση</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-300">Επικυρωμένο</div>
                <div className="text-sm opacity-90">Αποτέλεσμα</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                🎬 Επεξήγηση Σύγκλισης Live vs Backtest
              </h2>
              <p className="text-xl text-gray-600">
                Βίντεο ανάλυσης που εξηγεί τη σημασία της σύγκλισης και πώς επιτυγχάνεται
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 shadow-xl">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center shadow-2xl">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">▶️</div>
                  <h3 className="text-2xl font-bold mb-2">Live vs Backtest Convergence Analysis</h3>
                  <p className="text-gray-300">Επεξήγηση της μεθοδολογίας επικύρωσης</p>
                  <div className="mt-6 flex items-center justify-center gap-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">VIDEO</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-300">15:30 λεπτά</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-xl">🎯</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Στόχος του Βίντεο</h4>
                  <p className="text-sm text-gray-600">Εξήγηση γιατί η σύγκλιση είναι κρίσιμη για την αξιοπιστία</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-xl">📊</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Δεδομένα & Μετρικές</h4>
                  <p className="text-sm text-gray-600">Παρουσίαση των μεθόδων μέτρησης σύγκλισης</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-xl">✅</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Αποτελέσματα</h4>
                  <p className="text-sm text-gray-600">Επίδειξη της επιτυχούς επικύρωσης</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Convergence Points */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                🔑 Κύρια Σημεία Σύγκλισης
              </h2>
              <p className="text-lg text-gray-600">
                Τα θεμελιώδη στοιχεία που εξασφαλίζουν την αξιοπιστία των αποτελεσμάτων
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">📈</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Curve Fitting Avoidance</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Η στρατηγική αναπτύχθηκε με αυστηρά κριτήρια για να αποφευχθεί το over-fitting στα ιστορικά δεδομένα.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                  <p className="text-blue-800 text-sm">
                    Αποφυγή προσαρμογής σε παρελθοντικά δεδομένα που δεν θα επαναληφθούν
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">🛡️</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Risk Management Consistency</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Τα ίδια πρωτόκολλα stop-loss και position sizing εφαρμόζονται τόσο σε backtests όσο και σε live trading.
                </p>
                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                  <p className="text-green-800 text-sm">
                    Ενιαία διαχείριση ρίσκου σε όλες τις συνθήκες
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">🌊</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Market Conditions</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Η απόδοση live ευθυγραμμίζεται στα αναμενόμενα από τα backtests σε παρόμοιες αγοραστικές συνθήκες.
                </p>
                <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
                  <p className="text-purple-800 text-sm">
                    Σταθερότητα απόδοσης σε διάφορες αγοραστικές καταστάσεις
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">📏</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Deviation Analysis</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Οι αποκλίσεις είναι μικρότερες του 1%, εντός των αναμενόμενων ορίων για algorithmic trading.
                </p>
                <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
                  <p className="text-orange-800 text-sm">
                    Ελάχιστες αποκλίσεις που επιβεβαιώνουν την ακρίβεια
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Chart */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                📊 Γραφική Αναπαράσταση Σύγκλισης
              </h2>
              <p className="text-xl text-gray-600">
                Οπτική σύγκριση των καμπυλών απόδοσης μεταξύ backtest και live trading
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">📈</span>
                  <div>
                    <h3 className="text-2xl font-bold">Equity Curve Comparison</h3>
                    <p className="text-indigo-100">Backtest vs Live Performance Curves</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-white">Overlapping</div>
                    <div className="text-xs text-indigo-100">Καμπύλες</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-green-300">&lt;1%</div>
                    <div className="text-xs text-indigo-100">Μέση Απόκλιση</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-blue-300">Επικυρωμένο</div>
                    <div className="text-xs text-indigo-100">Αποτέλεσμα</div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="aspect-[16/9] bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📊</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Equity Curve Comparison Chart</h3>
                    <p className="text-gray-600">Γραφική αναπαράσταση σύγκλισης Backtest vs Live</p>
                    <div className="mt-6 flex items-center justify-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-blue-500 rounded"></div>
                        <span className="text-sm text-gray-600">Backtest</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-green-500 rounded"></div>
                        <span className="text-sm text-gray-600">Live</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Link & Conclusion */}
      <section className="py-16 bg-gradient-to-r from-brand-cyan-600 to-brand-cyan-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Κατανοήστε τη Στρατηγική</h2>
          <p className="text-xl mb-8 opacity-95 max-w-3xl mx-auto">
            Μάθετε περισσότερα για τη λογική και τη μεθοδολογία που επιτυγχάνει αυτή τη σύγκλιση
          </p>
          <Link
            href={`/${locale}/strategy`}
            className="bg-white text-brand-cyan-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
          >
            Δες τη λογική της στρατηγικής
          </Link>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">✅</span>
                <h3 className="text-2xl font-bold text-gray-800">Συμπέρασμα Επικύρωσης</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Αυτή η σύγκριση αποδεικνύει τη ρεαλιστικότητα των backtests και την αξιοπιστία της στρατηγικής σε πραγματικές συνθήκες.
                Η σύγκλιση μικρότερη του 1% επιβεβαιώνει ότι τα προσομοιωμένα αποτελέσματα αντιστοιχούν στην πραγματικότητα.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <p className="text-yellow-800 font-semibold">
                  ForexBot.gr δεν εγγυάται μελλοντική απόδοση. Τα παρελθοντικά αποτελέσματα δεν προβλέπουν το μέλλον.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
