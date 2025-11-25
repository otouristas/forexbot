export default function Even30V1313Page({ params }: { params: { locale: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">ForexBot v13.13 Even30 – Απόδοση μέσω Darwinex (JUZE)</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Live Performance Dashboard</h2>
        <div className="bg-gray-200 h-64 flex items-center justify-center mb-4">
          <p>Monthly Returns Widget (Darwinex)</p>
        </div>
        <div className="bg-gray-200 h-64 flex items-center justify-center mb-4">
          <p>Equity & Drawdown Chart (Darwinex)</p>
        </div>
        <div className="bg-gray-200 h-64 flex items-center justify-center">
          <p>Key Metrics Table (Darwinex)</p>
        </div>
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
