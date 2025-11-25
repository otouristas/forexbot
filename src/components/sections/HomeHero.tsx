import Link from 'next/link'
import { getTranslations, type Locale } from '@/lib/translations'

interface HomeHeroProps {
  locale: string
}

export default function HomeHero({ locale }: HomeHeroProps) {
  const t = getTranslations((locale as Locale) || 'el')

  return (
    <section className="relative bg-gradient-to-br from-brand-cyan-600 via-brand-cyan-700 to-brand-cyan-800 text-white py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/assets/brandx192.png')] opacity-5 bg-repeat" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {t.home.hero.title}
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed opacity-95">
          {t.home.hero.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href={`/${locale}/live`}
            className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {t.home.hero.ctaLive}
          </Link>
          <Link
            href={`/${locale}/strategy`}
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brand-cyan-700 transition-all duration-300 transform hover:scale-105"
          >
            {t.home.hero.ctaStrategy}
          </Link>
        </div>
        <p className="text-sm opacity-80 max-w-2xl mx-auto">
          {t.home.hero.disclaimer}
        </p>
      </div>
    </section>
  )
}
