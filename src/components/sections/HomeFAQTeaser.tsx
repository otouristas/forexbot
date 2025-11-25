import Link from 'next/link'
import Accordion from '../ui/Accordion'

const faqItems = [
  {
    title: 'Τι είναι το ForexBot;',
    content: 'Το ForexBot είναι μια αυτοματοποιημένη στρατηγική Forex που χρησιμοποιεί αλγόριθμους για συναλλαγές.',
  },
  {
    title: 'Πώς μπορώ να δω τα live αποτελέσματα;',
    content: 'Μπορείτε να δείτε τα live αποτελέσματα μέσω των σελίδων Live, όπου παρουσιάζονται δεδομένα από Myfxbook και Darwinex.',
  },
  {
    title: 'Υπάρχει κίνδυνος απώλειας κεφαλαίου;',
    content: 'Όλες οι επενδύσεις στο Forex ενέχουν κίνδυνο. Το ForexBot δεν εγγυάται κέρδη και δεν είναι επενδυτική συμβουλή.',
  },
  {
    title: 'Πού μπορώ να βρω περισσότερες πληροφορίες;',
    content: 'Επισκεφθείτε τις σελίδες Strategy, Story, και FAQs για περισσότερες λεπτομέρειες.',
  },
]

export default function HomeFAQTeaser() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Συχνές Ερωτήσεις</h2>
        <div className="max-w-2xl mx-auto">
          <Accordion items={faqItems} />
          <div className="text-center mt-6">
            <Link href="/el/faqs" className="text-blue-600 hover:underline">
              Δες όλες τις ερωτήσεις →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
