'use client'

import { useState } from 'react'

interface ContactContentProps {
  readonly locale: string
}

export default function ContactContent(_: ContactContentProps) {
  const [activeTab, setActiveTab] = useState<'about' | 'contact'>('about')

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Σχετικά & Επικοινωνία</h1>

      <div className="mb-8">
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab('about')}
            className={`px-4 py-2 text-lg font-semibold ${
              activeTab === 'about' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'
            }`}
          >
            Σχετικά
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`px-4 py-2 text-lg font-semibold ${
              activeTab === 'contact' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'
            }`}
          >
            Επικοινωνία
          </button>
        </div>

        <div className="mt-8">
          {activeTab === 'about' && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Ποιοι Είμαστε</h2>
              <p className="mb-4">
                Το ForexBot.gr είναι ένα εκπαιδευτικό project που παρουσιάζει μια αυτοματοποιημένη στρατηγική Forex.
                Ιδρύθηκε το 2013 με στόχο την έρευνα και την ανάπτυξη algorithmic trading σε διαφανείς όρους.
              </p>
              <p className="mb-4">
                Χρησιμοποιούμε third-party πλατφόρμες όπως Darwinex και Myfxbook για να εξασφαλίσουμε ανεξάρτητη
                επαλήθευση. Δεν πωλούμε προϊόντα ή υπηρεσίες – όλα τα στοιχεία είναι διαθέσιμα δωρεάν για εκπαιδευτικούς
                σκοπούς.
              </p>
              <p>Η φιλοσοφία μας: Διαφάνεια, εκπαίδευση, και υπεύθυνο trading.</p>
            </div>
          )}

          {activeTab === 'contact' && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Επικοινωνήστε Μαζί Μας</h2>
              <p className="mb-6">
                Για ερωτήσεις σχετικά με την εκπαίδευση ή τα τεχνικά στοιχεία. Δεν παρέχουμε επενδυτικές συμβουλές.
              </p>
              <form className="max-w-md">
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Όνομα</label>
                  <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Μήνυμα</label>
                  <textarea className="w-full p-2 border border-gray-300 rounded" rows={4}></textarea>
                </div>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Αποστολή
                </button>
              </form>
              <p className="mt-4 text-sm text-gray-600">Email: info@forexbot.gr | Τοποθεσία: Ελλάδα</p>
            </div>
          )}
        </div>
      </div>

      <div className="bg-yellow-100 p-4 rounded">
        <p className="text-sm">
          ForexBot.gr δεν παρέχει επενδυτικές υπηρεσίες – επικοινωνία μόνο για ενημερωτικούς και τεχνικούς σκοπούς.
        </p>
      </div>
    </div>
  )
}


