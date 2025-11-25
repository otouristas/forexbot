export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2025 ForexBot.gr. Όλα τα δικαιώματα διατηρούνται.</p>
        <div className="mt-2 space-x-4">
          <a href="/legal/disclaimer" className="hover:underline">Νομική Αποποίηση</a>
          <a href="/legal/terms-of-use" className="hover:underline">Όροι Χρήσης</a>
          <a href="/legal/privacy-cookies" className="hover:underline">Πολιτική Απορρήτου</a>
        </div>
      </div>
    </footer>
  )
}
