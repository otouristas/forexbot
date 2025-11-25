import Link from 'next/link'

interface HomeLiveSnapshotProps {
  locale: string
}

export default function HomeLiveSnapshot({ locale }: HomeLiveSnapshotProps) {
  // Mock data
  const stats = {
    initialDeposit: 10000,
    currentBalance: 12500,
    equity: 12450,
    margin: 500,
    usablePercent: 95,
    pnl: 2500,
    lastUpdate: '2025-11-25 13:00',
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Live Account Snapshot</h2>
        <div className="max-w-2xl mx-auto bg-gray-100 p-6 rounded-lg">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div><strong>Αρχική Κατάθεση:</strong> ${stats.initialDeposit}</div>
            <div><strong>Τρέχον Balance:</strong> ${stats.currentBalance}</div>
            <div><strong>Equity:</strong> ${stats.equity}</div>
            <div><strong>Margin:</strong> ${stats.margin}</div>
            <div><strong>Usable %:</strong> {stats.usablePercent}%</div>
            <div><strong>PnL:</strong> ${stats.pnl}</div>
          </div>
          <p className="text-sm text-gray-600 mb-4">Last Update: {stats.lastUpdate}</p>
          <Link
            href={`/${locale}/live/core500-v13-10`}
            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
          >
            Δες το full dashboard της v13.10 Core500
          </Link>
        </div>
      </div>
    </section>
  )
}
