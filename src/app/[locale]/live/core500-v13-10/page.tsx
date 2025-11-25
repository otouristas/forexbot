import Link from 'next/link'

export default function Core500V1310Page({ params }: { params: { locale: string } }) {
  const stats = [
    { label: 'Κατάθεση', value: '$10,000' },
    { label: 'Καθαρό Κεφάλαιο', value: '$12,500' },
    { label: 'Drawdown', value: '5%' },
    { label: 'PnL', value: '$2,500' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">ForexBot v13.10 Core500 – Ζωντανή Απόδοση & Πραγματικά Στατιστικά</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Live Chart</h2>
        <div className="bg-gray-200 h-64 flex items-center justify-center">
          <p>Live Chart Embed from Myfxbook (Placeholder)</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Πραγματικά Στατιστικά Επίδοσης</h2>
        <table className="min-w-full bg-white border">
          <tbody>
            {stats.map((stat) => (
              <tr key={stat.label}>
                <td className="border px-4 py-2 font-semibold">{stat.label}</td>
                <td className="border px-4 py-2">{stat.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link href={`/${params.locale}/backtests`} className="text-blue-600 hover:underline mt-4 inline-block">
          Δες backtest από το 2008
        </Link>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Προφίλ Ρίσκου</h2>
        <p>Αυτή η έκδοση είναι για επιθετικούς επενδυτές με υψηλή ανοχή ρίσκου, χρησιμοποιώντας μόχλευση 1:500.</p>
      </div>

      <div className="bg-yellow-100 p-4 rounded">
        <h3 className="font-bold">Νομική Αποποίηση</h3>
        <p>Το ForexBot.gr δεν παρέχει επενδυτικές υπηρεσίες. Αυτά τα δεδομένα είναι για ενημερωτικούς σκοπούς μόνο. Οι επενδύσεις στο Forex ενέχουν υψηλό κίνδυνο απώλειας κεφαλαίου.</p>
      </div>
    </div>
  )
}
