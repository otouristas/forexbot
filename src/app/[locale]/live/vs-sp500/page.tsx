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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Σύγκριση ForexBot vs S&P 500 – Διαφορετικά Μέσα, Διαφορετικό Ρίσκο</h1>

      <div className="mb-8">
        <p className="text-lg mb-4">
          Η σύγκριση μεταξύ ForexBot και S&P 500 είναι ενδεικτική και δεν υποδηλώνει ποιος είναι &quot;καλύτερος&quot;.
          Τα δύο είναι διαφορετικά επενδυτικά μέσα με διαφορετικά προφίλ ρίσκου και απόδοσης.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Equity Curves (Normalized)</h2>
        <div className="bg-gray-200 h-64 flex items-center justify-center">
          <p>Normalized Equity Chart: ForexBot vs S&P 500</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Ανάλυση Ρίσκου</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">ForexBot</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Υψηλότερη μεταβλητότητα λόγω μόχλευσης</li>
              <li>24/5 trading hours</li>
              <li>Πιθανότητα υψηλότερων αποδόσεων</li>
              <li>Ανάγκη για ενεργητική διαχείριση</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">S&P 500</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Χαμηλότερη μεταβλητότητα</li>
              <li>Market hours only</li>
              <li>Σταθερότητα και dividend yields</li>
              <li>Παθητική επένδυση</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Πότε να Επιλέξετε Κάθε Μέσο</h2>
        <p className="mb-4">
          <strong>ForexBot:</strong> Για επενδυτές που αναζητούν υψηλότερες αποδόσεις και είναι διατεθειμένοι να αναλάβουν μεγαλύτερο ρίσκο,
          με εμπειρία σε leveraged trading.
        </p>
        <p>
          <strong>S&P 500:</strong> Για μακροπρόθεσμες επενδύσεις με έμφαση στη σταθερότητα και τη διαφοροποίηση.
        </p>
      </div>

      <div className="bg-yellow-100 p-4 rounded">
        <h3 className="font-bold">Σημαντική Σημείωση</h3>
        <p>
          Αυτή η σύγκριση είναι εκπαιδευτική και δεν αποτελεί επενδυτική συμβουλή.
          Τα παρελθοντικά αποτελέσματα δεν εγγυώνται μελλοντική απόδοση.
          ForexBot.gr δεν συστήνει συγκεκριμένες επενδυτικές αποφάσεις.
        </p>
      </div>
    </div>
  )
}
