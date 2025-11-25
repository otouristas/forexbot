'use client'

import Link from 'next/link'
import { getTranslations, type Locale } from '@/lib/translations'
import PerformanceChart from '@/components/charts/PerformanceChart'

interface HomeLiveSnapshotProps {
  locale: string
}

export default function HomeLiveSnapshot({ locale }: HomeLiveSnapshotProps) {
  const t = getTranslations((locale as Locale) || 'el')

  const stats = {
    initialDeposit: 10000.32,
    currentBalance: 18671.86,
    equity: 18671.86,
    margin: 0.0,
    usablePercent: 100.0,
    pnl: 0.0,
    lastUpdate: '20/10/2025, 04:31:00',
  }

  const performanceData = [
    { date: '2024-01', equity: 10000 },
    { date: '2024-04', equity: 12000 },
    { date: '2024-07', equity: 14500 },
    { date: '2024-10', equity: 16500 },
    { date: '2025-01', equity: 18000 },
    { date: '2025-04', equity: 18671 },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-brand-cyan-700">
          {t.home.liveSnapshot.title}
        </h2>
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold mb-6 text-brand-cyan-600">
              {t.home.liveSnapshot.accountOverview}
            </h3>
            <div className="mb-8 bg-white rounded-lg p-4 shadow-inner">
              {/* Desktop/Tablet Table View */}
              <div className="hidden md:block">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-brand-cyan-200">
                      <th className="text-left py-3 px-4 text-brand-cyan-700 font-semibold">
                        {t.home.liveSnapshot.started}
                      </th>
                      <th className="text-left py-3 px-4 text-brand-cyan-700 font-semibold">
                        {t.home.liveSnapshot.balance}
                      </th>
                      <th className="text-left py-3 px-4 text-brand-cyan-700 font-semibold">
                        {t.home.liveSnapshot.equity}
                      </th>
                      <th className="text-left py-3 px-4 text-brand-cyan-700 font-semibold">
                        {t.home.liveSnapshot.margin}
                      </th>
                      <th className="text-left py-3 px-4 text-brand-cyan-700 font-semibold">
                        {t.home.liveSnapshot.usable}
                      </th>
                      <th className="text-left py-3 px-4 text-brand-cyan-700 font-semibold">
                        {t.home.liveSnapshot.pnl}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4">{stats.initialDeposit.toLocaleString('el-GR')} €</td>
                      <td className="py-4 px-4 font-semibold text-brand-cyan-600">
                        {stats.currentBalance.toLocaleString('el-GR')} €
                      </td>
                      <td className="py-4 px-4">{stats.equity.toLocaleString('el-GR')} €</td>
                      <td className="py-4 px-4">{stats.margin.toLocaleString('el-GR')} €</td>
                      <td className="py-4 px-4 text-green-600 font-semibold">
                        {stats.usablePercent.toFixed(2)} %
                      </td>
                      <td className="py-4 px-4">{stats.pnl.toLocaleString('el-GR')} €</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Mobile Card View */}
              <div className="md:hidden space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-sm text-brand-cyan-700 font-semibold mb-1">
                      {t.home.liveSnapshot.started}
                    </div>
                    <div className="text-lg font-bold text-gray-800">
                      {stats.initialDeposit.toLocaleString('el-GR')} €
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-sm text-brand-cyan-700 font-semibold mb-1">
                      {t.home.liveSnapshot.balance}
                    </div>
                    <div className="text-lg font-bold text-brand-cyan-600">
                      {stats.currentBalance.toLocaleString('el-GR')} €
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-sm text-brand-cyan-700 font-semibold mb-1">
                      {t.home.liveSnapshot.equity}
                    </div>
                    <div className="text-lg font-bold text-gray-800">
                      {stats.equity.toLocaleString('el-GR')} €
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-sm text-brand-cyan-700 font-semibold mb-1">
                      {t.home.liveSnapshot.margin}
                    </div>
                    <div className="text-lg font-bold text-gray-800">
                      {stats.margin.toLocaleString('el-GR')} €
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-sm text-brand-cyan-700 font-semibold mb-1">
                      {t.home.liveSnapshot.usable}
                    </div>
                    <div className="text-lg font-bold text-green-600">
                      {stats.usablePercent.toFixed(2)} %
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-sm text-brand-cyan-700 font-semibold mb-1">
                      {t.home.liveSnapshot.pnl}
                    </div>
                    <div className="text-lg font-bold text-gray-800">
                      {stats.pnl.toLocaleString('el-GR')} €
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-4 text-brand-cyan-600">
                {t.home.liveSnapshot.noOpenPositions}
              </h4>
            </div>
            <div className="mb-6 bg-white rounded-lg p-4 shadow-inner">
              <PerformanceChart data={performanceData} height={250} showBalance={false} />
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-600">
                {t.home.liveSnapshot.lastUpdate}: {stats.lastUpdate}
              </p>
              <Link
                href={`/${locale}/live/core500-v13-10`}
                className="bg-gradient-to-r from-brand-orange-500 to-brand-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-brand-orange-600 hover:to-brand-orange-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                {t.home.liveSnapshot.seeChart}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
