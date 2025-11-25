import type { Metadata } from 'next'
import { LocalePageProps } from '@/models/locale-page-props'
import { buildPageMetadata } from '@/lib/seo'
import { resolveLocale } from '@/lib/locale'

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const locale = await resolveLocale(params)
  return buildPageMetadata({
    locale,
    title: 'ForexBot.gr | ForexBot vs S&P 500',
    description: 'Ενημερωτική σύγκριση ForexBot με τον δείκτη S&P 500 με ανάλυση ρίσκου και χρήσης.',
    path: 'live/vs-sp500',
  })
}

export default async function VsSP500Page({ params }: LocalePageProps) {
  await resolveLocale(params)
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-brand-cyan-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-teal-600 to-brand-cyan-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/brandx192.png')] opacity-5 bg-repeat" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-6xl">🏛️</span>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-2">
                <span className="bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                  ForexBot vs S&P 500
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-green-200">
                Διαφορετικά Μέσα, Διαφορετικό Ρίσκο
              </h2>
            </div>
          </div>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-95">
            Ενημερωτική σύγκριση ForexBot με τον δείκτη S&P 500 με ανάλυση ρίσκου και χρήσης
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-yellow-300">Algorithmic</div>
                <div className="text-sm opacity-90">ForexBot</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-300">vs</div>
                <div className="text-sm opacity-90">Σύγκριση</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-300">Traditional</div>
                <div className="text-sm opacity-90">S&P 500</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-blue-100">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">📊</span>
                <h2 className="text-3xl font-bold text-blue-800">Ενδεικτική Σύγκριση</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Η σύγκριση μεταξύ ForexBot και S&P 500 είναι ενδεικτική και δεν υποδηλώνει ποιος είναι <q>καλύτερος</q>.
                Τα δύο είναι διαφορετικά επενδυτικά μέσα με διαφορετικά προφίλ ρίσκου και απόδοσης.
                Κάθε ένα εξυπηρετεί διαφορετικές επενδυτικές ανάγκες και στόχους.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Chart */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                📈 Καμπύλες Απόδοσης (Normalized)
              </h2>
              <p className="text-xl text-gray-600">
                Σύγκριση εξέλιξης κεφαλαίου μεταξύ ForexBot και S&P 500 στην ίδια περίοδο
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-green-600 to-teal-700 text-white p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">📊</span>
                  <div>
                    <h3 className="text-2xl font-bold">Normalized Performance Comparison</h3>
                    <p className="text-green-100">ForexBot vs S&P 500 - Same Starting Point</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-4 gap-4 mt-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-white">$100,000</div>
                    <div className="text-xs text-green-100">Αρχικό Κεφάλαιο</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-yellow-300">2008-2023</div>
                    <div className="text-xs text-green-100">Περίοδος</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-blue-300">Normalized</div>
                    <div className="text-xs text-green-100">Κλίμακα</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-purple-300">Comparison</div>
                    <div className="text-xs text-green-100">Σύγκριση</div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="aspect-[16/9] bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📈</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Normalized Equity Chart</h3>
                    <p className="text-gray-600 mb-4">ForexBot vs S&P 500 Performance Comparison</p>
                    <div className="flex items-center justify-center gap-6">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-brand-cyan-500 rounded"></div>
                        <span className="text-sm font-semibold text-gray-700">ForexBot</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-green-500 rounded"></div>
                        <span className="text-sm font-semibold text-gray-700">S&P 500</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Analysis */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                ⚖️ Ανάλυση Ρίσκου & Χαρακτηριστικών
              </h2>
              <p className="text-lg text-gray-600">
                Κατανόηση των διαφορών μεταξύ algorithmic trading και traditional investing
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-brand-cyan-50 to-blue-50 rounded-2xl p-8 shadow-xl border border-brand-cyan-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-brand-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">🤖</span>
                  </div>
                  <h3 className="text-2xl font-bold text-brand-cyan-800">ForexBot</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 text-xl mt-1">⚠️</span>
                    <div>
                      <div className="font-semibold text-gray-800">Υψηλότερη Μεταβλητότητα</div>
                      <div className="text-sm text-gray-600">Λόγω μόχλευσης και 24/5 trading</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-500 text-xl mt-1">🕐</span>
                    <div>
                      <div className="font-semibold text-gray-800">Συνεχής Διαπραγμάτευση</div>
                      <div className="text-sm text-gray-600">24 ώρες την ημέρα, 5 ημέρες την εβδομάδα</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-xl mt-1">📈</span>
                    <div>
                      <div className="font-semibold text-gray-800">Πιθανότητα Υψηλότερων Αποδόσεων</div>
                      <div className="text-sm text-gray-600">Με αντίστοιχα υψηλότερο ρίσκο</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-500 text-xl mt-1">⚙️</span>
                    <div>
                      <div className="font-semibold text-gray-800">Ενεργητική Διαχείριση</div>
                      <div className="text-sm text-gray-600">Αλγόριθμοι και risk management</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-xl border border-green-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">🏛️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-800">S&P 500</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-xl mt-1">✅</span>
                    <div>
                      <div className="font-semibold text-gray-800">Χαμηλότερη Μεταβλητότητα</div>
                      <div className="text-sm text-gray-600">Διαφοροποιημένο χαρτοφυλάκιο μετοχών</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-500 text-xl mt-1">📅</span>
                    <div>
                      <div className="font-semibold text-gray-800">Market Hours Only</div>
                      <div className="text-sm text-gray-600">Διαπραγμάτευση μόνο σε ώρες λειτουργίας</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-yellow-500 text-xl mt-1">💰</span>
                    <div>
                      <div className="font-semibold text-gray-800">Dividends & Σταθερότητα</div>
                      <div className="text-sm text-gray-600">Τακτικά μερίσματα και μακροπρόθεσμη ανάπτυξη</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gray-500 text-xl mt-1">😴</span>
                    <div>
                      <div className="font-semibold text-gray-800">Παθητική Επένδυση</div>
                      <div className="text-sm text-gray-600">Buy & hold στρατηγική</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Choose Each */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                🎯 Πότε να Επιλέξετε Κάθε Μέσο
              </h2>
              <p className="text-lg text-gray-600">
                Σωστή επιλογή ανάλογα με το προφίλ και τους στόχους σας
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-brand-cyan-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-brand-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold text-brand-cyan-800">Επιλέξτε ForexBot όταν:</h3>
                </div>
                <div className="bg-brand-cyan-50 rounded-xl p-6">
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    <strong>Αναζητάτε υψηλότερες αποδόσεις</strong> και είστε διατεθειμένοι να αναλάβετε μεγαλύτερο ρίσκο,
                    με εμπειρία σε leveraged trading και algorithmic strategies.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-white rounded-lg p-4 border border-brand-cyan-200">
                      <h4 className="font-semibold text-brand-cyan-800 mb-2">Ιδανικό για:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Εμπειροτέρους επενδυτές</li>
                        <li>• Υψηλή ανοχή ρίσκου</li>
                        <li>• Ενεργητική διαχείριση</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-brand-cyan-200">
                      <h4 className="font-semibold text-brand-cyan-800 mb-2">Πλεονεκτήματα:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Υψηλότερες πιθανές αποδόσεις</li>
                        <li>• Συνεχής διαπραγμάτευση</li>
                        <li>• Αυτοματοποιημένη εκτέλεση</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">🌱</span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-800">Επιλέξτε S&P 500 όταν:</h3>
                </div>
                <div className="bg-green-50 rounded-xl p-6">
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    <strong>Επενδύετε μακροπρόθεσμα</strong> με έμφαση στη σταθερότητα και τη διαφοροποίηση.
                    Ιδανικό για συντηρητικούς επενδυτές που προτιμούν παθητική στρατηγική.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-white rounded-lg p-4 border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-2">Ιδανικό για:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Μακροπρόθεσμους επενδυτές</li>
                        <li>• Συντηρητικό προφίλ ρίσκου</li>
                        <li>• Παθητική επένδυση</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-2">Πλεονεκτήματα:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Χαμηλότερο ρίσκο</li>
                        <li>• Τακτικά μερίσματα</li>
                        <li>• Διαφοροποίηση</li>
                      </ul>
                    </div>
                  </div>
                </div>
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
                  Αυτή η σύγκριση είναι <strong>αποκλειστικά εκπαιδευτική</strong> και δεν αποτελεί επενδυτική συμβουλή,
                  σύσταση ή προτροπή για οποιαδήποτε επενδυτική ενέργεια.
                </p>
                <p>
                  Τα παρελθοντικά αποτελέσματα <strong>δεν εγγυώνται μελλοντική απόδοση</strong>.
                  Κάθε επενδυτική απόφαση πρέπει να βασίζεται σε προσωπική έρευνα και συμβουλή εξειδικευμένου επαγγελματία.
                </p>
                <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 rounded-r-lg mt-6">
                  <p className="text-yellow-800 font-semibold">
                    ForexBot.gr δεν συστήνει συγκεκριμένες επενδυτικές αποφάσεις και δεν αναλαμβάνει καμία ευθύνη
                    για τυχόν ζημιές που μπορεί να προκύψουν από την χρήση αυτών των πληροφοριών.
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
