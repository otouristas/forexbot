import type { Metadata } from 'next'
import Image from 'next/image'
import { LocalePageProps } from '@/models/locale-page-props'
import { buildPageMetadata } from '@/lib/seo'
import { resolveLocale } from '@/lib/locale'

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const locale = await resolveLocale(params)
  return buildPageMetadata({
    locale,
    title: 'ForexBot.gr | Even30 v13.13 Live Stats',
    description: 'Παρακολουθήστε πραγματικά widgets Darwinex για την έκδοση Even30 v13.13 και μάθετε το προφίλ ρίσκου της.',
    path: 'live/even30-v13-13',
  })
}

export default async function Even30V1313Page({ params }: LocalePageProps) {
  const locale = await resolveLocale(params)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-brand-cyan-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-cyan-600 via-brand-cyan-700 to-brand-cyan-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/brandx192.png')] opacity-5 bg-repeat" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-6xl">📊</span>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-2">
                <span className="bg-gradient-to-r from-white to-brand-cyan-200 bg-clip-text text-transparent">
                  ForexBot v13.13
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-brand-cyan-200">
                Even30 – Απόδοση μέσω Darwinex
              </h2>
            </div>
          </div>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-95">
            Παρακολουθήστε πραγματικά widgets Darwinex για την έκδοση Even30 v13.13 και μάθετε το προφίλ ρίσκου της
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-brand-orange-400">1:30</div>
                <div className="text-sm opacity-90">Μόχλευση</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">~15%</div>
                <div className="text-sm opacity-90">Max Drawdown</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">Μέτριο</div>
                <div className="text-sm opacity-90">Ρίσκο</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-brand-cyan-50 to-brand-cyan-100 rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-center mb-6 text-brand-cyan-800">
                🛡️ Συντηρητική Στρατηγική Even30
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-brand-cyan-700">Βασικά Χαρακτηριστικά</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-brand-cyan-500 rounded-full"></span>
                      <span>Μόχλευση 1:30 (συντηρητική)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-brand-cyan-500 rounded-full"></span>
                      <span>Μέγιστο Drawdown ~15%</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-brand-cyan-500 rounded-full"></span>
                      <span>Σταθερή μηνιαία απόδοση</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-brand-cyan-500 rounded-full"></span>
                      <span>24/7 αυτόματη εκτέλεση</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-brand-cyan-700">Πλεονεκτήματα</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>Χαμηλότερο ρίσκο</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>Σταθερότητα σε κρίσεις</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>Διαφάνεια μέσω Darwinex</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>Επαληθευμένα αποτελέσματα</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Widgets Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">

            {/* Monthly Returns Widget */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-brand-cyan-600 to-brand-cyan-700 text-white p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">📆</span>
                  <div>
                    <h3 className="text-2xl font-bold">Μηνιαία Απόδοση</h3>
                    <p className="text-brand-cyan-100">Εξέλιξη κερδών/ζημιών σε μηνιαία βάση</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <a
                    href="https://www.darwinex.com/invest/JUZE?utm_source=WidgetDarwin&utm_medium=Referral&utm_campaign=WidgetReturn&utm_content=anonymous"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform hover:scale-105"
                  >
                    <Image
                      src="https://prodx-widgets.s3-eu-west-1.amazonaws.com/JUZE.5.15-widgets-darwin-return-darwin-all-bg-dark-0-en.png"
                      alt="Darwinex - JUZE - Ενδεικτική απόδοση στρατηγικής ForexBot v13.13"
                      width={980}
                      height={400}
                      className="mx-auto rounded-lg shadow-lg"
                      unoptimized
                    />
                  </a>
                </div>
                <div className="max-w-3xl mx-auto text-center">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Εξέλιξη κερδών/ζημιών σε μηνιαία βάση – όπως προκύπτει από την πραγματική διαχείριση στον λογαριασμό JUZE μέσω Darwinex.
                  </p>
                </div>
              </div>
            </div>

            {/* Performance Curve Widget */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-brand-orange-500 to-brand-orange-600 text-white p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">📈</span>
                  <div>
                    <h3 className="text-2xl font-bold">Καμπύλη Απόδοσης & Drawdown</h3>
                    <p className="text-orange-100">Πορεία της στρατηγικής και μεταβλητότητα</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <a
                    href="https://www.darwinex.com/invest/JUZE?utm_source=WidgetDarwin&utm_medium=Referral&utm_campaign=WidgetChart&utm_content=anonymous"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform hover:scale-105"
                  >
                    <Image
                      src="https://prodx-widgets.s3-eu-west-1.amazonaws.com/JUZE.5.15-widgets-darwin-chart-darwin-all-bg-dark-l-en.png"
                      alt="Darwinex - JUZE - Καμπύλη απόδοσης ForexBot v13.13"
                      width={980}
                      height={400}
                      className="mx-auto rounded-lg shadow-lg"
                      unoptimized
                    />
                  </a>
                </div>
                <div className="max-w-3xl mx-auto text-center">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Επισκόπηση της πορείας της στρατηγικής και μεταβλητότητας κατά τη διάρκεια της λειτουργίας της. Η καμπύλη δείχνει την εξέλιξη του κεφαλαίου και τα σημεία μέγιστης απόσυρσης.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Metrics Widget */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">📊</span>
                  <div>
                    <h3 className="text-2xl font-bold">Βασικά Στατιστικά</h3>
                    <p className="text-green-100">Σύνοψη βασικών δεικτών απόδοσης</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <a
                    href="https://www.darwinex.com/invest/JUZE?utm_source=WidgetDarwin&utm_medium=Referral&utm_campaign=WidgetSummary&utm_content=anonymous"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform hover:scale-105"
                  >
                    <Image
                      src="https://prodx-widgets.s3-eu-west-1.amazonaws.com/JUZE.5.15-widgets-darwin-summary-darwin-all-bg-dark-m-en.png"
                      alt="Darwinex - JUZE - Βασικά στατιστικά ForexBot v13.13"
                      width={980}
                      height={400}
                      className="mx-auto rounded-lg shadow-lg"
                      unoptimized
                    />
                  </a>
                </div>
                <div className="max-w-3xl mx-auto text-center">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Επισκόπηση βασικών μετρικών όπως Return, Drawdown και D-Score που αξιολογούν τη συνολική απόδοση και σταθερότητα της στρατηγικής ForexBot v13.13.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Comparison & Strategy Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <h2 className="text-3xl font-bold text-center mb-6 text-blue-800">🔄 Σύγκριση με Backtests</h2>
              <p className="text-lg text-center text-gray-700 leading-relaxed">
                Η απόδοση live ευθυγραμμίζεται με τα ιστορικά backtests, επιβεβαιώνοντας την αξιοπιστία της στρατηγικής.
                Η σύγκλιση μεταξύ προσομοιώσεων και πραγματικών αποτελεσμάτων αποτελεί κρίσιμο δείκτη ποιότητας.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
                <h3 className="text-2xl font-bold mb-4 text-green-800">✅ Πλεονεκτήματα Even30</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl mt-1">•</span>
                    <span className="text-gray-700">Συντηρητική μόχλευση 1:30</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl mt-1">•</span>
                    <span className="text-gray-700">Μέγιστο drawdown περιορισμένο στο 15%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl mt-1">•</span>
                    <span className="text-gray-700">Ιδανική για μέτριο ρίσκο</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl mt-1">•</span>
                    <span className="text-gray-700">Σταθερή μηνιαία απόδοση</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-100">
                <h3 className="text-2xl font-bold mb-4 text-orange-800">⚠️ Σημαντικές Προειδοποιήσεις</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 text-xl mt-1">•</span>
                    <span className="text-gray-700">Δεν εγγυάται κέρδη</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 text-xl mt-1">•</span>
                    <span className="text-gray-700">Παρελθοντική απόδοση ≠ μέλλον</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 text-xl mt-1">•</span>
                    <span className="text-gray-700">Κίνδυνος απώλειας κεφαλαίου</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 text-xl mt-1">•</span>
                    <span className="text-gray-700">Ενημερωτική χρήση μόνο</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-12 bg-gradient-to-r from-yellow-50 to-orange-50 border-t border-yellow-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-yellow-200">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">⚖️</span>
                <h3 className="text-2xl font-bold text-yellow-800">Νομική Αποποίηση Ευθύνης</h3>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Η παραπάνω ενότητα παρέχει ενδεικτική πρόσβαση σε πραγματικά στατιστικά στοιχεία της στρατηγικής ForexBot v13.13 μέσω της αδειοδοτημένης πλατφόρμας Darwinex. Οι πληροφορίες είναι προσβάσιμες από όλους και δεν συνιστούν επενδυτική σύσταση, συμβουλή ή προτροπή.
                </p>
                <p>
                  Η επένδυση σε χρηματοπιστωτικά μέσα ενέχει κινδύνους απώλειας κεφαλαίου και οι προηγούμενες αποδόσεις δεν εγγυώνται μελλοντικές. Τα παραπάνω widgets παρέχονται από την Darwinex. Το ForexBot.gr δεν παρέχει επενδυτικές υπηρεσίες και δεν εμπλέκεται σε καμία επενδυτική απόφαση των επισκεπτών.
                </p>
                <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 rounded-r-lg mt-6">
                  <p className="text-yellow-800 font-semibold">
                    Μην επενδύετε περισσότερα από όσα μπορείτε να αντέξετε να χάσετε. Συμβουλευτείτε επαγγελματικό σύμβουλο πριν από οποιαδήποτε επένδυση.
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
