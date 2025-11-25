import type { Metadata } from 'next'
import { LocalePageProps } from '@/models/locale-page-props'
import { buildPageMetadata } from '@/lib/seo'
import { resolveLocale } from '@/lib/locale'

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const locale = await resolveLocale(params)
  return buildPageMetadata({
    locale,
    title: 'ForexBot.gr | Privacy & Cookies',
    description: 'Πολιτική απορρήτου ForexBot.gr για φόρμες επικοινωνίας, analytics και cookies.',
    path: 'legal/privacy-cookies',
  })
}

export default async function PrivacyCookiesPage({ params }: LocalePageProps) {
  await resolveLocale(params)
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Πολιτική Απορρήτου & Cookies</h1>

      <div className="prose prose-lg">
        <h2>Συλλογή Δεδομένων</h2>
        <p>
          Συλλέγουμε ελάχιστα προσωπικά δεδομένα: μόνο όσα παρέχετε μέσω της φόρμας επικοινωνίας.
          Χρησιμοποιούμε Google Analytics για στατιστικά στοιχεία.
        </p>

        <h2>Χρήση Δεδομένων</h2>
        <p>
          Τα δεδομένα χρησιμοποιούνται μόνο για την απάντηση σε ερωτήσεις και τη βελτίωση του ιστότοπου.
          Δεν πωλούμε ή μοιραζόμαστε δεδομένα με τρίτους.
        </p>

        <h2>Cookies</h2>
        <p>
          Χρησιμοποιούμε cookies για λειτουργικότητα και analytics.
          Μπορείτε να απενεργοποιήσετε τα cookies στις ρυθμίσεις του browser σας.
        </p>

        <h2>Δικαιώματα Χρηστών</h2>
        <p>
          Έχετε δικαίωμα πρόσβασης, διόρθωσης, ή διαγραφής των δεδομένων σας.
          Επικοινωνήστε μαζί μας για οποιοδήποτε αίτημα.
        </p>
      </div>
    </div>
  )
}
