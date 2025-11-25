'use client'

import { useState, useEffect } from 'react'

export default function LegalDisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('forexbot_disclaimer_accepted_v2025_06')
    if (!accepted) {
      setIsOpen(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('forexbot_disclaimer_accepted_v2025_06', 'true')
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md mx-4">
        <h2 className="text-lg font-bold mb-4">Νομική Αποποίηση Ευθύνης</h2>
        <p className="text-sm mb-4">
          Το ForexBot.gr είναι μια ενημερωτική πλατφόρμα που παρουσιάζει μια αυτοματοποιημένη στρατηγική Forex. Δεν παρέχουμε επενδυτικές υπηρεσίες ή συμβουλές. Όλες οι πληροφορίες είναι για εκπαιδευτικούς σκοπούς μόνο.
        </p>
        <div className="flex space-x-4">
          <button
            onClick={accept}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Έχω ενημερωθεί και αποδέχομαι
          </button>
          <a
            href="/legal/disclaimer"
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Διαβάστε περισσότερα
          </a>
        </div>
      </div>
    </div>
  )
}
