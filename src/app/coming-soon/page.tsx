import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coming Soon - ForexBot.gr',
  description: 'We are working on something amazing. Stay tuned!',
}

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Coming Soon</h1>
          <p className="text-lg text-gray-600">
            We&apos;re working on something amazing.
          </p>
        </div>

        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <svg
              className="w-8 h-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="text-gray-500">
            Our website is currently under maintenance and will be back soon.
          </p>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-400">
            ForexBot.gr - Algorithmic Forex Strategy
          </p>
        </div>
      </div>
    </div>
  )
}
