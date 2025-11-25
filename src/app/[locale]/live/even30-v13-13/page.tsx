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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-12 text-center text-brand-cyan-700">
        ForexBot v13.13 Even30 – Απόδοση μέσω Darwinex (JUZE)
      </h1>

      <section className="mb-12">
        <h2 className="text-center text-3xl font-bold mb-6">
          <span className="text-3xl mr-2">📆</span>
          <span className="bg-gradient-to-r from-brand-cyan-400 to-brand-cyan-600 bg-clip-text text-transparent">
            {locale === 'el' ? 'Μηνιαία Απόδοση' : 'Monthly Returns'}
          </span>
        </h2>
        <div className="text-center mb-6">
          <a
            href="https://www.darwinex.com/invest/JUZE?utm_source=WidgetDarwin&utm_medium=Referral&utm_campaign=WidgetReturn&utm_content=anonymous"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://prodx-widgets.s3-eu-west-1.amazonaws.com/JUZE.5.15-widgets-darwin-return-darwin-all-bg-dark-0-en.png"
              alt="Darwinex - JUZE - Ενδεικτική απόδοση στρατηγικής ForexBot v13.13"
              width={980}
              height={400}
              className="mx-auto rounded-lg shadow-xl"
              unoptimized
            />
          </a>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-700 leading-relaxed">
            {locale === 'el'
              ? 'Εξέλιξη κερδών/ζημιών σε μηνιαία βάση – όπως προκύπτει από την πραγματική διαχείριση στον λογαριασμό JUZE.'
              : 'Evolution of profits/losses on a monthly basis – as derived from actual management on the JUZE account.'}
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-center text-3xl font-bold mb-6">
          <span className="text-3xl mr-2">📈</span>
          <span className="bg-gradient-to-r from-brand-cyan-400 to-brand-cyan-600 bg-clip-text text-transparent">
            {locale === 'el' ? 'Καμπύλη Απόδοσης & Drawdown' : 'Performance Curve & Drawdown'}
          </span>
        </h2>
        <div className="text-center mb-6">
          <a
            href="https://www.darwinex.com/invest/JUZE?utm_source=WidgetDarwin&utm_medium=Referral&utm_campaign=WidgetChart&utm_content=anonymous"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://prodx-widgets.s3-eu-west-1.amazonaws.com/JUZE.5.15-widgets-darwin-chart-darwin-all-bg-dark-l-en.png"
              alt="Darwinex - JUZE - Καμπύλη απόδοσης ForexBot v13.13"
              width={980}
              height={400}
              className="mx-auto rounded-lg shadow-xl"
              unoptimized
            />
          </a>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-700 leading-relaxed">
            {locale === 'el'
              ? 'Επισκόπηση της πορείας της στρατηγικής και μεταβλητότητας κατά τη διάρκεια της λειτουργίας της.'
              : 'Overview of the strategy trajectory and volatility during its operation.'}
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-center text-3xl font-bold mb-6">
          <span className="text-3xl mr-2">📊</span>
          <span className="bg-gradient-to-r from-brand-cyan-400 to-brand-cyan-600 bg-clip-text text-transparent">
            {locale === 'el' ? 'Σύνοψη Βασικών Δεικτών' : 'Summary of Key Indicators'}
          </span>
        </h2>
        <div className="text-center mb-6">
          <a
            href="https://www.darwinex.com/invest/JUZE?utm_source=WidgetDarwin&utm_medium=Referral&utm_campaign=WidgetSummary&utm_content=anonymous"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://prodx-widgets.s3-eu-west-1.amazonaws.com/JUZE.5.15-widgets-darwin-summary-darwin-all-bg-dark-m-en.png"
              alt="Darwinex - JUZE - Βασικά στατιστικά ForexBot v13.13"
              width={980}
              height={400}
              className="mx-auto rounded-lg shadow-xl"
              unoptimized
            />
          </a>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-700 leading-relaxed">
            {locale === 'el'
              ? 'Επισκόπηση βασικών μετρικών όπως Return, Drawdown και D-Score που αξιολογούν τη συνολική απόδοση και σταθερότητα της στρατηγικής.'
              : 'Overview of key metrics such as Return, Drawdown and D-Score that assess the overall performance and stability of the strategy.'}
          </p>
        </div>
      </section>

      <div className="mb-8 max-w-4xl mx-auto bg-gray-50 p-6 rounded-lg">
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          {locale === 'el'
            ? 'Η παραπάνω ενότητα παρέχει ενδεικτική πρόσβαση σε πραγματικά στατιστικά στοιχεία της στρατηγικής ForexBot v13.13 μέσω της αδειοδοτημένης πλατφόρμας Darwinex. Οι πληροφορίες είναι προσβάσιμες από όλους και δεν συνιστούν επενδυτική σύσταση, συμβουλή ή προτροπή. Η επένδυση σε χρηματοπιστωτικά μέσα ενέχει κινδύνους απώλειας κεφαλαίου και οι προηγούμενες αποδόσεις δεν εγγυώνται μελλοντικές.'
            : 'The above section provides indicative access to real statistics of the ForexBot v13.13 strategy through the licensed Darwinex platform. The information is accessible to everyone and does not constitute investment advice, recommendation or solicitation. Investing in financial instruments involves risks of capital loss and past returns do not guarantee future ones.'}
        </p>
        <p className="text-sm text-gray-700 leading-relaxed">
          {locale === 'el'
            ? 'Τα παραπάνω widgets παρέχονται από την Darwinex. Το ForexBot.gr δεν παρέχει επενδυτικές υπηρεσίες και δεν εμπλέκεται σε καμία επενδυτική απόφαση των επισκεπτών.'
            : 'The above widgets are provided by Darwinex. ForexBot.gr does not provide investment services and is not involved in any investment decision of visitors.'}
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Περιγραφή Στρατηγικής</h2>
        <p className="mb-4">
          Η Even30 είναι η πιο συντηρητική έκδοση με μόχλευση 1:30 και στόχο drawdown κάτω του 15%.
          Εκτελείται σε πραγματικό λογαριασμό μέσω της πλατφόρμας Darwinex, παρέχοντας διαφάνεια και επαλήθευση.
        </p>
        <p>
          Η στρατηγική χρησιμοποιεί αλγόριθμους βασισμένους σε τεχνική ανάλυση για την ταυτοποίηση ευκαιριών σε βασικά νομίσματα,
          με έμφαση στην προστασία κεφαλαίου και σταθερή ανάπτυξη.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Σύγκριση με Backtests</h2>
        <p>Η απόδοση live ευθυγραμμίζεται με τα ιστορικά backtests, επιβεβαιώνοντας την αξιοπιστία της στρατηγικής.</p>
      </div>

      <div className="bg-yellow-100 p-4 rounded">
        <h3 className="font-bold">Νομική Αποποίηση</h3>
        <p>ForexBot.gr δεν παρέχει επενδυτικές υπηρεσίες. Η απόδοση του JUZE είναι διαθέσιμη για ενημερωτικούς σκοπούς μόνο μέσω Darwinex.</p>
      </div>
    </div>
  )
}
