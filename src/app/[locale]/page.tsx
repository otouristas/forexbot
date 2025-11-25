import { Metadata } from 'next'
import HomeHero from '@/components/sections/HomeHero'
import HomeVersionsGrid from '@/components/sections/HomeVersionsGrid'
import HomeLiveSnapshot from '@/components/sections/HomeLiveSnapshot'
import HomeWhatIsSection from '@/components/sections/HomeWhatIsSection'
import HomeFAQTeaser from '@/components/sections/HomeFAQTeaser'

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const { locale } = params
  const baseUrl = "https://forexbot.gr"

  if (locale === 'el') {
    return {
      title: 'ForexBot MT5 – Αλγοριθμική Στρατηγική Forex με Live Δεδομένα & Επαλήθευση',
      description: 'Γνωρίστε το ForexBot, μια αυτοματοποιημένη στρατηγική Forex με backtests 2008–2023 και live παρακολούθηση μέσω Darwinex & Myfxbook. Ενημερωτικό περιεχόμενο, όχι επενδυτική συμβουλή.',
      alternates: {
        canonical: `${baseUrl}/el`,
      },
    }
  } else {
    // Placeholder for EN
    return {
      title: 'ForexBot MT5 – Algorithmic Forex Strategy with Live Data & Verification',
      description: 'Discover ForexBot, an automated Forex strategy with backtests 2008–2023 and live monitoring via Darwinex & Myfxbook. Educational content, not investment advice.',
      alternates: {
        canonical: `${baseUrl}/en`,
      },
    }
  }
}

export default function HomePage({ params }: { params: { locale: string } }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ForexBot.gr",
    "url": "https://forexbot.gr",
    "description": "Αλγοριθμική στρατηγική Forex με live δεδομένα & επαλήθευση",
    "foundingDate": "2013",
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeHero locale={params.locale} />
      <HomeVersionsGrid locale={params.locale} />
      <HomeLiveSnapshot locale={params.locale} />
      <HomeWhatIsSection locale={params.locale} />
      <HomeFAQTeaser />
    </div>
  )
}
