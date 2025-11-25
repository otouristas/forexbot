export default function BacktestsPage({ params }: { params: { locale: string } }) {
  const backtests = [
    {
      version: 'v13.10 Core500',
      period: '2008–2023',
      cagr: '25%',
      maxDD: '60%',
      leverage: '1:500',
      downloadLink: '#', // Placeholder
    },
    {
      version: 'v13.12 Clone30',
      period: '2008–2023',
      cagr: '25%',
      maxDD: '25%',
      leverage: '1:30',
      downloadLink: '#',
    },
    {
      version: 'v13.13 Even30',
      period: '2008–2023',
      cagr: '20%',
      maxDD: '15%',
      leverage: '1:30',
      downloadLink: '#',
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Backtests ForexBot v13 – Ιστορικά Αποτελέσματα 2008–2023</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Τι Είναι τα Backtests;</h2>
        <p className="mb-4">
          Τα backtests είναι προσομοιώσεις της στρατηγικής σε ιστορικά δεδομένα. Δεν είναι πραγματικές επενδύσεις,
          αλλά παρέχουν ένδειξη για την πιθανή απόδοση υπό παρόμοιες συνθήκες.
        </p>
        <p className="text-sm text-gray-600">
          Τα backtests περιλαμβάνουν spread, slippage, και άλλες ρεαλιστικές παραμέτρους, αλλά δεν μπορούν να προβλέψουν το μέλλον.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Αποτελέσματα Ανά Έκδοση</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {backtests.map((bt) => (
            <div key={bt.version} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{bt.version}</h3>
              <div className="space-y-2 mb-6">
                <p><strong>Περίοδος:</strong> {bt.period}</p>
                <p><strong>CAGR:</strong> {bt.cagr}</p>
                <p><strong>Max DD:</strong> {bt.maxDD}</p>
                <p><strong>Μόχλευση:</strong> {bt.leverage}</p>
              </div>
              <a href={bt.downloadLink} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Download PDF/Excel
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-yellow-100 p-4 rounded">
        <h3 className="font-bold">Σημείωση</h3>
        <p>
          Τα backtests είναι προσομοιώσεις και δεν εγγυώνται μελλοντική απόδοση.
          ForexBot.gr δεν παρέχει επενδυτικές υπηρεσίες – αυτά είναι εκπαιδευτικά στοιχεία.
        </p>
      </div>
    </div>
  )
}
