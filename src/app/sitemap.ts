import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://forexbot.gr'
  const locales = ['el', 'en'] as const

  const pages = [
    // Main pages
    { path: '', priority: 1, changeFrequency: 'weekly' as const },
    { path: 'live', priority: 0.9, changeFrequency: 'daily' as const },
    { path: 'backtests', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: 'versions', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: 'strategy', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: 'story', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: 'faqs', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: 'contact', priority: 0.6, changeFrequency: 'monthly' as const },

    // Live sub-pages
    { path: 'live/core500-v13-10', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: 'live/clone30-v13-12', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: 'live/even30-v13-13', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: 'live/compare-live-vs-backtest', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: 'live/vs-sp500', priority: 0.7, changeFrequency: 'monthly' as const },

    // Legal pages
    { path: 'legal/disclaimer', priority: 0.5, changeFrequency: 'yearly' as const },
    { path: 'legal/disclaimer-technical', priority: 0.5, changeFrequency: 'yearly' as const },
    { path: 'legal/privacy-cookies', priority: 0.5, changeFrequency: 'yearly' as const },
    { path: 'legal/terms-of-use', priority: 0.5, changeFrequency: 'yearly' as const },
  ]

  const sitemap: MetadataRoute.Sitemap = []

  // Generate entries for both locales
  locales.forEach(locale => {
    pages.forEach(page => {
      sitemap.push({
        url: `${baseUrl}/${locale}${page.path ? `/${page.path}` : ''}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
      })
    })
  })

  return sitemap
}
