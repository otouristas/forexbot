import Link from 'next/link'

const sections = [
  {
    title: 'Τι είναι το ForexBot;',
    link: 'strategy',
    content: 'Μια αυτοματοποιημένη στρατηγική Forex βασισμένη σε αλγοριθμική ανάλυση.',
  },
  {
    title: 'Πώς λειτουργεί στην πράξη;',
    link: 'strategy',
    content: 'Χρησιμοποιεί τεχνική ανάλυση και risk management για αυτόματες συναλλαγές.',
  },
  {
    title: 'Γιατί σχεδιάστηκε;',
    link: 'story',
    content: 'Για να παρέχει διαφανή και επαληθεύσιμη απόδοση στο Forex trading.',
  },
  {
    title: 'Ποιοι βρίσκονται πίσω από αυτό;',
    link: 'contact',
    content: 'Μια ομάδα ειδικών με εμπειρία στο algorithmic trading και DiNapoli levels.',
  },
]

interface HomeWhatIsSectionProps {
  locale: string
}

export default function HomeWhatIsSection({ locale }: HomeWhatIsSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
              <p className="mb-4">{section.content}</p>
              <Link href={`/${locale}/${section.link}`} className="text-blue-600 hover:underline">
                Μάθε περισσότερα →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
