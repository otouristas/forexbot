import Accordion from '@/components/ui/Accordion'

export default function FAQsPage({ params }: { params: { locale: string } }) {
  const faqGroups = {
    strategy: [
      {
        title: 'Τι είναι η στρατηγική του ForexBot;',
        content: 'Το ForexBot χρησιμοποιεί αλγόριθμους βασισμένους σε τεχνική ανάλυση, Fibonacci levels, και risk management για αυτόματες συναλλαγές σε Forex.',
      },
      {
        title: 'Πώς λειτουργεί η αυτόματη εκτέλεση;',
        content: 'Η στρατηγική αναλύει δεδομένα σε πραγματικό χρόνο και εκτελεί συναλλαγές μέσω MetaTrader 5 όταν πληρούνται συγκεκριμένα κριτήρια.',
      },
    ],
    backtests: [
      {
        title: 'Τι είναι τα backtests;',
        content: 'Τα backtests είναι προσομοιώσεις της στρατηγικής σε ιστορικά δεδομένα για να εκτιμηθεί η πιθανή απόδοση.',
      },
      {
        title: 'Πόσο ακριβή είναι τα backtests;',
        content: 'Τα backtests περιλαμβάνουν spread, slippage, και άλλες παραμέτρους, αλλά δεν μπορούν να προβλέψουν το μέλλον με ακρίβεια.',
      },
      {
        title: 'Πώς συγκρίνεται το live με τα backtests;',
        content: 'Η απόδοση live ευθυγραμμίζεται με τα backtests, με μικρές αποκλίσεις λόγω πραγματικών συνθηκών αγοράς.',
      },
    ],
    risk: [
      {
        title: 'Ποιος είναι ο κίνδυνος απώλειας;',
        content: 'Όλες οι επενδύσεις στο Forex ενέχουν κίνδυνο. Το ForexBot χρησιμοποιεί risk management, αλλά δεν εγγυάται κέρδη.',
      },
      {
        title: 'Ποια είναι η μέγιστη drawdown;',
        content: 'Ανάλογα με την έκδοση: Core500 ~60%, Clone30 ~25%, Even30 ~15%.',
      },
    ],
    business: [
      {
        title: 'Πώς χρηματοδοτείται το ForexBot;',
        content: 'Το ForexBot είναι αυτοχρηματοδοτούμενο και επικεντρώνεται στην εκπαίδευση και διαφάνεια, όχι στην πώληση προϊόντων.',
      },
      {
        title: 'Γιατί δημοσιεύονται τα αποτελέσματα;',
        content: 'Για να παρέχουμε διαφάνεια και εκπαίδευση στον χώρο του algorithmic trading.',
      },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Συχνές Ερωτήσεις</h1>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-6">Στρατηγική</h2>
          <Accordion items={faqGroups.strategy} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Backtests & Live</h2>
          <Accordion items={faqGroups.backtests} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Ρίσκο</h2>
          <Accordion items={faqGroups.risk} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Επιχειρηματικό Μοντέλο</h2>
          <Accordion items={faqGroups.business} />
        </section>
      </div>
    </div>
  )
}
