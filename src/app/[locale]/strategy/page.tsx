export default function StrategyPage({ params }: { params: { locale: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Τεχνικά – ForexBot Στρατηγική</h1>

      <nav className="mb-8">
        <ul className="flex space-x-4 border-b">
          <li><a href="#strategic-logic" className="text-blue-600 hover:underline">Η Λογική</a></li>
          <li><a href="#risk-management" className="text-blue-600 hover:underline">Διαχείριση Ρίσκου</a></li>
          <li><a href="#pairs" className="text-blue-600 hover:underline">Ισοτιμίες</a></li>
          <li><a href="#patterns" className="text-blue-600 hover:underline">Μοτίβα</a></li>
          <li><a href="#timeframes" className="text-blue-600 hover:underline">Timeframes</a></li>
        </ul>
      </nav>

      <section id="strategic-logic" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Η Στρατηγική Λογική</h2>
        <p>Το ForexBot χρησιμοποιεί αλγόριθμους βασισμένους σε τεχνική ανάλυση και DiNapoli levels για την εκτέλεση συναλλαγών.</p>
        <p className="text-sm text-gray-600 mt-2">Εκπαιδευτική παρουσίαση – όχι επενδυτική συμβουλή.</p>
      </section>

      <section id="risk-management" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Διαχείριση Ρίσκου</h2>
        <p>Εφαρμόζονται αυστηρά όρια ρίσκου, συμπεριλαμβανομένων stop-loss και position sizing.</p>
        <p className="text-sm text-gray-600 mt-2">Εκπαιδευτική παρουσίαση – όχι επενδυτική συμβουλή.</p>
      </section>

      <section id="pairs" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Ισοτιμίες</h2>
        <p>Εστιάζεται σε major pairs όπως EUR/USD, GBP/USD, κλπ.</p>
        <p className="text-sm text-gray-600 mt-2">Εκπαιδευτική παρουσίαση – όχι επενδυτική συμβουλή.</p>
      </section>

      <section id="patterns" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Μοτίβα</h2>
        <p>Αναγνώριση patterns όπως head and shoulders, triangles, κλπ.</p>
        <p className="text-sm text-gray-600 mt-2">Εκπαιδευτική παρουσίαση – όχι επενδυτική συμβουλή.</p>
      </section>

      <section id="timeframes" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Timeframes</h2>
        <p>Χρησιμοποιούνται multiple timeframes για επιβεβαίωση σήματος.</p>
        <p className="text-sm text-gray-600 mt-2">Εκπαιδευτική παρουσίαση – όχι επενδυτική συμβουλή.</p>
      </section>
    </div>
  )
}
