import type { Metadata } from 'next'
import { LocalePageProps } from '@/models/locale-page-props'
import { buildPageMetadata } from '@/lib/seo'
import { resolveLocale } from '@/lib/locale'

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const locale = await resolveLocale(params)
  return buildPageMetadata({
    locale,
    title: 'ForexBot.gr | Terms of Use',
    description: 'Όροι χρήσης για την πρόσβαση στο ForexBot.gr και τα εκπαιδευτικά του περιεχόμενα.',
    path: 'legal/terms-of-use',
  })
}

export default async function TermsOfUsePage({ params }: LocalePageProps) {
  await resolveLocale(params)
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Όροι Χρήσης</h1>

      <div className="prose prose-lg">
        <p>Καλώς ήρθατε στο ForexBot.gr. Χρησιμοποιώντας αυτόν τον ιστότοπο, συμφωνείτε με τους παρακάτω όρους.</p>

        <h2>Αποδοχή Όρων</h2>
        <p>
          Η πρόσβαση και χρήση του ιστότοπου υπόκειται στην αποδοχή αυτών των όρων.
          Αν δεν συμφωνείτε, παρακαλώ μην χρησιμοποιήσετε τον ιστότοπο.
        </p>

        <h2>Πνευματική Ιδιοκτησία</h2>
        <p>
          Το περιεχόμενο του ιστότοπου προστατεύεται από δικαιώματα πνευματικής ιδιοκτησίας.
          Επιτρέπεται η προσωπική χρήση, όχι η εμπορική αναπαραγωγή χωρίς άδεια.
        </p>

        <h2>Περιορισμός Ευθύνης</h2>
        <p>
          Το ForexBot.gr δεν ευθύνεται για οποιαδήποτε άμεση ή έμμεση ζημία από τη χρήση του ιστότοπου.
        </p>

        <h2>Τροποποιήσεις</h2>
        <p>
          Διατηρούμε το δικαίωμα τροποποίησης των όρων ανά πάσα στιγμή.
          Η συνέχιση χρήσης σημαίνει αποδοχή των νέων όρων.
        </p>
      </div>
    </div>
  )
}
