import type { Metadata } from 'next'
import Link from 'next/link'
import Accordion from '@/components/ui/Accordion'
import { LocalePageProps } from '@/models/locale-page-props'
import { buildPageMetadata } from '@/lib/seo'
import { resolveLocale } from '@/lib/locale'
import { getTranslations } from '@/lib/translations'

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const t = getTranslations(locale)
  return buildPageMetadata({
    locale,
    title: `ForexBot.gr | ${t.home.faq.title}`,
    description: `Answers about the ForexBot strategy, backtests, risk and business model.`,
    path: 'faqs',
  })
}

export default async function FAQsPage({ params }: LocalePageProps) {
  await resolveLocale(params)

  const faqItems = [
    {
      title: 'Πώς λειτουργεί το ForexBot και τι το χαρακτηρίζει;',
      content: (
        <div>
          <p className="main-paragraph mb-4">
            Το ForexBot έχει σχεδιαστεί με βάση ιστορικά δεδομένα και πραγματική απόδοση, αποφεύγοντας στρατηγικές όπως martingale, grids ή <q>μη-προσαρμοσμένους δείκτες</q>. Αντίθετα, βασίζεται σε:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
            <li>📚 Αναγνώριση μοτίβων μετά από ανακοινώσεις ειδήσεων, όχι σε <q>μαγικούς</q> δείκτες</li>
            <li>🧪 Πολυετείς δοκιμές (2008–2024), συμπεριλαμβανομένων ακραίων γεγονότων όπως η <q>Black Monday</q></li>
            <li>📡 Επαλήθευση απόδοσης μέσω τρίτων (Darwinex, Myfxbook)</li>
            <li>🧠 Διαφορετικές εκδόσεις με προσαρμοσμένο προφίλ ρίσκου</li>
          </ul>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
            <p className="text-sm text-yellow-800">
              ⚠️ Η προηγούμενη απόδοση δεν αποτελεί ένδειξη ή εγγύηση μελλοντικών αποτελεσμάτων. Το περιεχόμενο παρέχεται αποκλειστικά για ενημερωτικούς σκοπούς.
            </p>
          </div>
        </div>
      ),
      emoji: '🤖'
    },
    {
      title: 'Πώς μπορώ να είμαι σίγουρος ότι το backtest δεν είναι προσαρμοσμένο υπερβολικά (curve-fitted);',
      content: (
        <div>
          <p className="main-paragraph mb-4">
            Ο ίδιος αλγόριθμος εφαρμόζεται τόσο στις ιστορικές δοκιμές όσο και στις ζωντανές συναλλαγές — χωρίς ετήσια επαναβελτιστοποίηση ή ειδικές παραμετροποιήσεις ανά νόμισμα. Η σύγκλιση μεταξύ ιστορικής και ζωντανής απόδοσης αξιολογείται διαρκώς.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
            <p className="text-sm text-yellow-800">
              ⚠️ Οι επενδυτικές αποφάσεις πρέπει να βασίζονται σε πολυπαραγοντική αξιολόγηση. Συνίσταται η επιβεβαίωση αποτελεσμάτων μέσω ανεξάρτητων παρόχων (π.χ. Myfxbook).
            </p>
          </div>
        </div>
      ),
      emoji: '📊'
    },
    {
      title: 'Τα αποτελέσματα βασίζονται σε ζωντανούς λογαριασμούς ή σε demo;',
      content: (
        <div>
          <p className="main-paragraph mb-4">
            Οι βασικές αποδόσεις που αναφέρονται σε αυτήν την ιστοσελίδα τεκμηριώνονται μέσω πραγματικών (live) λογαριασμών με πραγματικό κεφάλαιο. Τα αποτελέσματα από λογαριασμούς demo παρουσιάζονται μόνο στα πλαίσια τεχνικών δοκιμών ή προσομοιώσεων και επισημαίνονται ως τέτοια.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
            <p className="text-sm text-yellow-800">
              ⚠️ Πριν λάβετε οποιαδήποτε απόφαση, ελέγξτε την αξιοπιστία των στοιχείων μέσω ανεξάρτητων πηγών.
            </p>
          </div>
        </div>
      ),
      emoji: '💰'
    },
    {
      title: 'Είναι η στρατηγική υπερβολικά μοχλευμένη ή ριψοκίνδυνη;',
      content: (
        <div>
          <p className="main-paragraph mb-4">
            Το ForexBot προσφέρει διαφορετικές εκδόσεις, καθεμία εκ των οποίων έχει προκαθορισμένα όρια για μέγιστο επιτρεπόμενο drawdown και χρήση περιθωρίου:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
            <li>🔺 v13.10: Υψηλό ρίσκο/απόδοση (~50% μέγιστο DD, ~80% μέσο CAGR)</li>
            <li>🟢 v13.13: Μέτριο ρίσκο (~15% DD, ~15% CAGR)</li>
          </ul>
          <p className="main-paragraph mb-4">
            Η εφαρμοζόμενη μόχλευση εξαρτάται από το επιτρεπόμενο όριο κάθε πλατφόρμας (π.χ. 1:30 σε ρυθμιζόμενους με ESMA, 1:500 σε διεθνείς brokers).
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
            <p className="text-sm text-yellow-800">
              ⚠️ Το επίπεδο ρίσκου δεν προσδιορίζεται αποκλειστικά από τη μόχλευση, αλλά από τη διαχείριση του συνολικού χαρτοφυλακίου. Δεν αποτελεί σύσταση επένδυσης.
            </p>
          </div>
        </div>
      ),
      emoji: '⚠️'
    },
    {
      title: 'Πώς διαχειρίζεται το σύστημα τις καταρρεύσεις της αγοράς;',
      content: (
        <div>
          <p className="main-paragraph mb-4">
            Το ForexBot έχει δοκιμαστεί — θεωρητικά και πρακτικά — σε ακραίες περιόδους, όπως:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
            <li>📉 Χρηματοπιστωτική Κρίση 2008</li>
            <li>💶 Κρίση Χρέους Ευρωζώνης</li>
            <li>🦠 Κατάρρευση COVID (2020)</li>
            <li>🪙 Black Monday 2024 (+121% απόδοση σε 1 μήνα σε πραγματικό λογαριασμό)</li>
          </ul>
          <p className="main-paragraph mb-4">
            Το σύστημα ενεργοποιείται <strong>μόνο όταν έχει υποχωρήσει η ακραία μεταβλητότητα</strong>, ώστε να αποφευχθεί η τυχαία έκθεση σε μη προβλέψιμες καταστάσεις. Περιλαμβάνει:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
            <li>📛 Εσωτερική λογική διακοπής σε περίοδο κρίσης</li>
            <li>📉 Υπολογισμός κινδύνου μέσω VaR (Value at Risk)</li>
            <li>🚫 Αποφυγή martingale ή κλιμακωτού ανοίγματος θέσεων</li>
          </ul>
          <p className="main-paragraph mb-4">
            Κάθε θέση βασίζεται σε συγκεκριμένα στατιστικά πλεονεκτήματα που έχουν αναγνωριστεί ιστορικά. Αν δεν υπάρχει πλεονέκτημα, δεν τοποθετείται καμία συναλλαγή.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
            <p className="text-sm text-yellow-800">
              ⚠️ Η διαχείριση κινδύνου εφαρμόζεται σε επίπεδο <strong>χαρτοφυλακίου</strong>, όχι μεμονωμένα ανά συναλλαγή. Τα παραπάνω δεν αποτελούν πρόβλεψη απόδοσης ή σύσταση.
            </p>
          </div>
        </div>
      ),
      emoji: '📈'
    },
    {
      title: 'Πόσο διαφανές είναι το ForexBot;',
      content: (
        <div>
          <p className="main-paragraph mb-4">
            Όλα τα αποτελέσματα από ζωντανούς λογαριασμούς είναι διαθέσιμα δημόσια μέσω αξιόπιστων, ανεξάρτητων πλατφορμών:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
            <li>✅ <strong>Myfxbook</strong> (με πλήρες, επαληθευμένο ιστορικό συναλλαγών)</li>
            <li>✅ <strong>Darwinex</strong> (FCA-ρυθμιζόμενη πλατφόρμα επενδυτικών περιουσιακών στοιχείων – DARWINs)</li>
          </ul>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
            <p className="text-sm text-yellow-800">
              ⚠️ Δεν διαχειριζόμαστε κεφάλαια τρίτων. Δεν παρέχουμε επενδυτικές υπηρεσίες ούτε προωθούμε επενδυτικά προϊόντα.
            </p>
          </div>
        </div>
      ),
      emoji: '🔍'
    },
    {
      title: 'Υπάρχουν προστασίες απέναντι σε slippage, gaps ή καθυστερήσεις εκτέλεσης;',
      content: (
        <div>
          <p className="main-paragraph mb-4">
            Το ForexBot είναι σχεδιασμένο για να αποφεύγει την εκτέλεση εν μέσω ακραίων συνθηκών ρευστότητας. Κάθε συναλλαγή λαμβάνει χώρα μετά από σημαντικά μακροοικονομικά γεγονότα, με χρήση SL/TP που προσαρμόζεται δυναμικά στη μεταβλητότητα.
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
            <li>⏱️ Συμβατό με ECN/STP brokers</li>
            <li>⚠️ Προσαρμοσμένο για καθυστερήσεις εκτέλεσης έως 400ms</li>
            <li>📉 Δοκιμασμένο σε σενάρια αύξησης spread και slippage</li>
          </ul>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
            <p className="text-sm text-yellow-800">
              ⚠️ Το slippage είναι υπαρκτός παράγοντας στην πραγματική διαπραγμάτευση και δεν μπορεί να εξαλειφθεί πλήρως. Η αρχιτεκτονική του ForexBot στοχεύει στον περιορισμό του, όχι στην εξάλειψή του.
            </p>
          </div>
        </div>
      ),
      emoji: '⚡'
    },
    {
      title: 'Ποιο είναι το επιχειρηματικό μοντέλο πίσω από το ForexBot;',
      content: (
        <div>
          <p className="main-paragraph mb-4">
            Το ForexBot δεν προσφέρει άμεση διαχείριση κεφαλαίων και δεν λειτουργεί ως επενδυτικός φορέας. Αντιθέτως, παρέχεται μέσω τρίτων, ρυθμιζόμενων ή εξειδικευμένων πλατφορμών:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
            <li>🇬🇧 <strong>Darwinex</strong> (FCA-ρυθμιζόμενη πλατφόρμα, όπου η στρατηγική εκφράζεται ως επενδύσιμο περιουσιακό στοιχείο – DARWIN)</li>
          </ul>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
            <p className="text-sm text-yellow-800">
              ⚠️ Το ForexBot δεν αποτελεί χρηματοοικονομικό προϊόν ούτε επενδυτική υπηρεσία κατά την έννοια της MiFID II ή των κανονισμών της ESMA. Είναι μια αυτοματοποιημένη στρατηγική, την οποία ο κάθε χρήστης ακολουθεί με δική του ευθύνη.
            </p>
          </div>
        </div>
      ),
      emoji: '💼'
    },
    {
      title: 'Ποιο είναι το μεγαλύτερο drawdown που έχει καταγραφεί;',
      content: (
        <div>
          <p className="main-paragraph mb-4">
            📉 Καταγεγραμμένα μέγιστα drawdowns ανά έκδοση:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
            <li>🔺 <strong>v13.10</strong>: ~50% (σε εξαιρετικά υψηλό ρίσκο, χωρίς stop-out)</li>
            <li>🟢 <strong>v13.13</strong>: ~15% (σε συνθήκες μέτριου ρίσκου)</li>
          </ul>
          <p className="main-paragraph mb-4">
            Κάθε έκδοση διαθέτει προκαθορισμένα όρια drawdown και ελέγχους έκθεσης, ώστε να περιορίζεται η ζημιά σε περιόδους αβεβαιότητας.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
            <p className="text-sm text-yellow-800">
              ⚠️ Τα drawdowns είναι αναμενόμενα στο trading και δεν μπορούν να εξαλειφθούν — μόνο να διαχειριστούν. Δεν εγγυόμαστε την αποφυγή ζημιών.
            </p>
          </div>
        </div>
      ),
      emoji: '📉'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-brand-cyan-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-cyan-600 via-brand-cyan-700 to-brand-cyan-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/brandx192.png')] opacity-5 bg-repeat" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-5xl">❓</span>
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-white to-brand-cyan-200 bg-clip-text text-transparent">
                Συχνές Ερωτήσεις
              </span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-95">
            Όλες οι απαντήσεις για τη στρατηγική ForexBot, τα backtests, το ρίσκο και το επιχειρηματικό μοντέλο
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-brand-cyan-600 to-brand-cyan-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Έχετε περισσότερες ερωτήσεις&hellip;</h2>
          <p className="text-xl mb-8 opacity-95">Επικοινωνήστε μαζί μας για περισσότερες λεπτομέρειες</p>
          <Link
            href="/el/contact"
            className="bg-white text-brand-cyan-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
          >
            Επικοινωνία
          </Link>
        </div>
      </section>
    </div>
  )
}
