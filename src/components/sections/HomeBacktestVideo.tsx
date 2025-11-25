import { getTranslations, type Locale } from '@/lib/translations'

interface HomeBacktestVideoProps {
  locale: string
}

export default function HomeBacktestVideo({ locale }: HomeBacktestVideoProps) {
  const t = getTranslations((locale as Locale) || 'el')

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
              {t.home.backtestVideo.disclaimer}
            </p>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black">
            <video
              controls
              preload="none"
              poster="/assets/videos/Forexbot.Gr-Version-13.10.jpg"
              aria-label={t.home.backtestVideo.videoLabel}
              className="w-full h-auto"
            >
              <source src="https://forexbot.gr/assets/videos/Forexbot.Gr-Version-13.10.mp4" type="video/mp4" />
              {t.home.backtestVideo.fallbackText}{' '}
              <a href="https://forexbot.gr/assets/videos/Forexbot.Gr-Version-13.10.mp4" download>
                {t.home.backtestVideo.downloadLink}
              </a>
              {' '}
              {t.home.backtestVideo.or}
              {' '}
              <a
                href="https://www.youtube.com/watch?v=XSoBh3nSeHw&t=73s&ab_channel=ForexBot"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
              .
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}

