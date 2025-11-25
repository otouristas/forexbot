'use client'

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface PerformanceChartProps {
  data: Array<{ date: string; equity: number; balance?: number }>
  height?: number
  showBalance?: boolean
}

export default function PerformanceChart({ data, height = 300, showBalance = false }: PerformanceChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorEquity" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#00ccff" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#00ccff" stopOpacity={0.1} />
          </linearGradient>
          {showBalance && (
            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff6b35" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ff6b35" stopOpacity={0.1} />
            </linearGradient>
          )}
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.3} />
        <XAxis
          dataKey="date"
          stroke="#6b7280"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#6b7280"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `€${(value / 1000).toFixed(0)}k`}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            border: 'none',
            borderRadius: '8px',
            color: '#fff',
          }}
          formatter={(value: number) => [`€${value.toLocaleString()}`, '']}
        />
        <Area
          type="monotone"
          dataKey="equity"
          stroke="#00ccff"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorEquity)"
        />
        {showBalance && (
          <Area
            type="monotone"
            dataKey="balance"
            stroke="#ff6b35"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorBalance)"
          />
        )}
      </AreaChart>
    </ResponsiveContainer>
  )
}

