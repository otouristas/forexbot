import { getTranslations, type Locale } from '@/lib/translations'

interface HomeIntroProps {
  locale: string
}

export default function HomeIntro({ locale }: HomeIntroProps) {
  const t = getTranslations((locale as Locale) || 'el')

  return (
    <section className="py-16 bg-gradient-to-br from-brand-cyan-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl leading-relaxed text-gray-800 text-center">
            {t.home.intro.paragraph}
          </p>
        </div>
      </div>
    </section>
  )
}

