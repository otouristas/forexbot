import Link from 'next/link'

export default function Clone30V1312Page({ params }: { params: { locale: string } }) {
  const stats = [
    { label: 'Backtest Period', value: '2008–2023' },
    { label: 'CAGR', value: '25%' },
    { label: 'Max DD', value: '25%' },
    { label: 'Leverage', value: '1:30' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">ForexBot v13.12 Clone30 – Backtest & Προφίλ Ρίσκου</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Επισκόπηση</h2>
        <p className="mb-4">
          Η έκδοση Clone30 είναι μια συντηρητική προσέγγιση με μόχλευση 1:30 και εστίαση σε σταθερή απόδοση με χαμηλό drawdown.
          Προς το παρόν είναι διαθέσιμη μόνο σε backtest, με πιθανή live εφαρμογή στο μέλλον.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Στατιστικά Backtest</h2>
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
          Δες όλα τα backtests →
        </Link>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Προφίλ Ρίσκου</h2>
        <p>Ιδανική για επενδυτές με μέτρια ανοχή ρίσκου, προσφέροντας ισορροπία μεταξύ απόδοσης και σταθερότητας.</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Εκτιμώμενη Διαθεσιμότητα Live</h2>
        <p>Η live εφαρμογή της Clone30 είναι υπό εξέλιξη και αναμένεται να είναι διαθέσιμη το επόμενο τρίμηνο.</p>
      </div>

      <div className="bg-yellow-100 p-4 rounded">
        <h3 className="font-bold">Νομική Αποποίηση</h3>
        <p>Το ForexBot.gr δεν παρέχει επενδυτικές υπηρεσίες. Τα backtests είναι προσομοιώσεις και δεν εγγυώνται μελλοντική απόδοση.</p>
      </div>
    </div>
  )
}
