import { getTranslations, type Locale } from '@/lib/translations'

interface LiveKPISectionProps {
  locale: string
  stats: {
    initialDeposit: string
    balance: string
    profit: string
    gain: string
    drawdown: string
    monthly: string
    pf: string
    pips: string
    tracking: string
    views: string
    myfxbookUrl: string
  }
}

export default function LiveKPISection({ locale, stats }: LiveKPISectionProps) {
  const t = getTranslations((locale as Locale) || 'el')

  return (
    <div className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-xl shadow-2xl">
      <h2 className="text-center mb-8">
        <span className="text-3xl mr-2">📊</span>
        <span className="text-3xl font-bold bg-gradient-to-r from-brand-cyan-400 to-brand-cyan-600 bg-clip-text text-transparent">
          {t.live.kpi.title}
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        <div className="text-brand-cyan-400">
          💲 Αρχική κατάθεση: <span className="text-white font-semibold">{stats.initialDeposit}</span>
        </div>
        <div className="text-brand-cyan-400">
          📈 Καθαρό Κεφάλαιο: <span className="text-white font-semibold" id="balance">{stats.balance}</span>
        </div>
        <div className="text-brand-cyan-400">
          Καθαρό Κέρδος: <span className="text-white font-semibold" id="profit">{stats.profit}</span>
        </div>
        <div className="text-brand-cyan-400">
          📈 Κερδοφορία: <span className="text-white font-semibold" id="liveGain">{stats.gain}</span>
        </div>
        <div className="text-brand-cyan-400">
          📉 Μέγιστη πτώση: <span className="text-white font-semibold" id="liveDrawdown">{stats.drawdown}</span>
        </div>
        <div className="text-brand-cyan-400">
          📆 Μηνιαίος Μ.Ο Κέρδους: <span className="text-white font-semibold" id="monthly">{stats.monthly}</span>
        </div>
        <div className="text-brand-cyan-400">
          🔥 Συντελεστής Κέρδους: <span className="text-white font-semibold" id="livePF">{stats.pf}</span>
        </div>
        <div className="text-brand-cyan-400">
          📍 Μονάδες που παίχτηκαν: <span className="text-white font-semibold" id="pips">{stats.pips}</span>
        </div>
        <div className="text-brand-cyan-400">
          ⭐ Ακόλουθοι στο MyFxBook: <span className="text-white font-semibold" id="tracking">{stats.tracking}</span>
        </div>
        <div className="text-brand-cyan-400">
          👁️ Βλέματα στο MyFxBook: <span className="text-white font-semibold" id="myfxViews">{stats.views}</span>
        </div>
        <div className="md:col-span-2 lg:col-span-3 flex justify-center mt-4">
          <a
            href={stats.myfxbookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-brand-orange-500 to-brand-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-brand-orange-600 hover:to-brand-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            MyFxBook
          </a>
        </div>
      </div>
    </div>
  )
}


