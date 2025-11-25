import type { Metadata } from 'next'
import { LocalePageProps } from '@/models/locale-page-props'
import { buildPageMetadata } from '@/lib/seo'
import { resolveLocale } from '@/lib/locale'

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const locale = await resolveLocale(params)
  return buildPageMetadata({
    locale,
    title: 'ForexBot.gr | Legal Disclaimer',
    description: 'Νομική αποποίηση ευθύνης ForexBot.gr για εκπαιδευτικό περιεχόμενο και κινδύνους Forex.',
    path: 'legal/disclaimer',
  })
}

export default async function DisclaimerPage({ params }: LocalePageProps) {
  await resolveLocale(params)
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Νομική Αποποίηση Ευθύνης</h1>

      <div className="prose prose-lg">
        <p>
          Το ForexBot.gr είναι μια εκπαιδευτική πλατφόρμα που παρουσιάζει πληροφορίες σχετικά με μια αυτοματοποιημένη στρατηγική Forex.
          Όλες οι πληροφορίες παρέχονται για εκπαιδευτικούς και ενημερωτικούς σκοπούς μόνο.
        </p>

        <h2>Δεν Είναι Επενδυτική Συμβουλή</h2>
        <p>
          Τα περιεχόμενα αυτού του ιστότοπου δεν αποτελούν επενδυτική συμβουλή, σύσταση ή πρόσκληση για αγορά ή πώληση χρηματοοικονομικών προϊόντων.
          Οι αποφάσεις επένδυσης πρέπει να λαμβάνονται μετά από ανεξάρτητη έρευνα και συμβουλή από εξειδικευμένο χρηματοοικονομικό σύμβουλο.
        </p>

        <h2>Κίνδυνος Απώλειας Κεφαλαίου</h2>
        <p>
          Το trading σε Forex ενέχει σημαντικό κίνδυνο απώλειας κεφαλαίου. Οι ιστορικές αποδόσεις δεν εγγυώνται μελλοντικά αποτελέσματα.
          Είναι πιθανό να χάσετε μέρος ή το σύνολο του επενδυμένου κεφαλαίου.
        </p>

        <h2>Διαφάνεια και Εκπαίδευση</h2>
        <p>
          Στόχος μας είναι η παροχή διαφανούς και εκπαιδευτικής πληροφόρησης σχετικά με το algorithmic trading.
          Χρησιμοποιούμε third-party πλατφόρμες για ανεξάρτητη επαλήθευση των αποτελεσμάτων.
        </p>

        <h2>Νομική Ευθύνη</h2>
        <p>
          Το ForexBot.gr δεν φέρει ευθύνη για οποιαδήποτε απώλεια προκύψει από τη χρήση των πληροφοριών αυτού του ιστότοπου.
          Η χρήση γίνεται με δική σας ευθύνη.
        </p>
      </div>
    </div>
  )
}
