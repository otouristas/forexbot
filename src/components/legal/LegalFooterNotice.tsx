import Link from 'next/link'

export default function LegalFooterNotice() {
  return (
    <div className="bg-yellow-100 border-t border-yellow-300 p-4 text-center text-sm">
      <p className="text-gray-700">
        ForexBot.gr δεν παρέχει επενδυτικές υπηρεσίες. Όλες οι πληροφορίες είναι ενημερωτικού χαρακτήρα και δεν αποτελούν χρηματοοικονομική συμβουλή.
      </p>
      <div className="mt-2 space-x-4">
        <Link href="/legal/disclaimer" className="text-blue-600 hover:underline">
          Νομική Αποποίηση
        </Link>
        <Link href="/legal/disclaimer-technical" className="text-blue-600 hover:underline">
          Τεχνική Πολιτική Disclaimer
        </Link>
      </div>
    </div>
  )
}
