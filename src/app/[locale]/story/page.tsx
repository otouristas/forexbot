import type { Metadata } from 'next'
import { LocalePageProps } from '@/models/locale-page-props'
import { buildPageMetadata } from '@/lib/seo'
import { resolveLocale } from '@/lib/locale'

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const locale = await resolveLocale(params)
  return buildPageMetadata({
    locale,
    title: 'ForexBot.gr | Story & Timeline',
    description: 'Ανακαλύψτε τα βασικά ορόσημα του ForexBot από το 2013 μέχρι σήμερα με έμφαση στη διαφάνεια.',
    path: 'story',
  })
}

export default async function StoryPage({ params }: LocalePageProps) {
  await resolveLocale(params)
  const timeline = [
    {
      year: 2013,
      event: 'Ανακάλυψη του βιβλίου DiNapoli Levels',
      description: 'Η αρχή της έρευνας σε Fibonacci-based trading.',
    },
    {
      year: 2018,
      event: 'Πραγματοποίηση της δυνατότητας algorithmic trading',
      description: 'Αναγνώριση της σημασίας της αυτοματοποίησης.',
    },
    {
      year: 2019,
      event: 'Δημιουργία πρώτου demo λογαριασμού',
      description: 'Έναρξη δοκιμών σε πραγματικές συνθήκες.',
    },
    {
      year: 2023,
      event: 'Εκκίνηση live trading',
      description: 'Μετάβαση σε πραγματικά κεφάλαια με πλήρη διαφάνεια.',
    },
    {
      year: 2025,
      event: 'Εκτόξευση dual versions (Core500 & Even30)',
      description: 'Προσαρμογή σε διαφορετικά προφίλ ρίσκου.',
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Η Ιστορία του ForexBot</h1>

      <div className="space-y-8">
        {timeline.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 text-white px-3 py-1 rounded-full font-bold">
                {item.year}
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-2">{item.event}</h2>
                <p className="mb-4">{item.description}</p>
                <button className="text-blue-600 hover:underline">Περισσότερα</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <p className="text-lg">
          Το ForexBot είναι αποτέλεσμα ετών έρευνας και ανάπτυξης, με έμφαση στη διαφάνεια και την εκπαίδευση.
          Δεν είναι ένα μαγικό εργαλείο, αλλά ένα εργαλείο για την κατανόηση και την εφαρμογή algorithmic trading.
        </p>
      </div>
    </div>
  )
}
