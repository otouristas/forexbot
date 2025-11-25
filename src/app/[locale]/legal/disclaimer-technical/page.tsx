import type { Metadata } from 'next'
import { LocalePageProps } from '@/models/locale-page-props'
import { buildPageMetadata } from '@/lib/seo'
import { resolveLocale } from '@/lib/locale'

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const locale = await resolveLocale(params)
  return buildPageMetadata({
    locale,
    title: 'ForexBot.gr | Technical Disclaimer',
    description: 'Τεχνικά όρια backtesting, live διαφοροποιήσεις και τεχνολογικοί κίνδυνοι της στρατηγικής.',
    path: 'legal/disclaimer-technical',
  })
}

export default async function DisclaimerTechnicalPage({ params }: LocalePageProps) {
  await resolveLocale(params)
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Τεχνική Πολιτική Disclaimer</h1>

      <div className="prose prose-lg">
        <p>
          Αυτή η σελίδα περιγράφει τις τεχνικές παραμέτρους και περιορισμούς της στρατηγικής ForexBot.
        </p>

        <h2>Backtesting Limitations</h2>
        <p>
          Τα backtests πραγματοποιούνται σε ιστορικά δεδομένα και μπορεί να μην αντικατοπτρίζουν μελλοντικές συνθήκες αγοράς.
          Παράγοντες όπως slippage, spread, και market impact δεν μπορούν να προβλεφθούν πλήρως.
        </p>

        <h2>Live Trading Differences</h2>
        <p>
          Η απόδοση σε live trading μπορεί να διαφέρει από τα backtests λόγω πραγματικών συνθηκών εκτέλεσης.
          Η στρατηγική προσαρμόζεται δυναμικά, αλλά δεν εγγυάται ίδια αποτελέσματα.
        </p>

        <h2>Τεχνολογικοί Κίνδυνοι</h2>
        <p>
          Πιθανοί τεχνικοί κίνδυνοι περιλαμβάνουν διακοπές σύνδεσης, σφάλματα λογισμικού, ή αλλαγές σε broker APIs.
          Η στρατηγική περιλαμβάνει fail-safes, αλλά η τεχνολογία δεν είναι αλάνθαστη.
        </p>
      </div>
    </div>
  )
}
