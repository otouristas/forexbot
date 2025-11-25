interface HomeHeroProps {
  locale: string
}

export default function HomeHero({ locale }: HomeHeroProps) {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          ForexBot MT5 – Αλγοριθμική στρατηγική Forex με live δεδομένα & επαλήθευση
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Γνωρίστε το ForexBot, μια αυτοματοποιημένη στρατηγική Forex με backtests 2008–2023 και live παρακολούθηση μέσω Darwinex & Myfxbook.
          Ενημερωτικό περιεχόμενο, όχι επενδυτική συμβουλή.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Link
            href={`/${locale}/live`}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Δες τη ζωντανή απόδοση
          </Link>
          <Link
            href={`/${locale}/strategy`}
            className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
          >
            Δες πώς λειτουργεί
          </Link>
        </div>
        <p className="text-sm opacity-80">
          Δεν παρέχονται επενδυτικές υπηρεσίες – ενημερωτικό περιεχόμενο.
        </p>
      </div>
    </section>
  )
}
