import NavBar from './NavBar'
import Footer from './Footer'
import LegalFooterNotice from '../legal/LegalFooterNotice'
import LegalDisclaimerModal from '../legal/LegalDisclaimerModal'

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">{children}</main>
      <LegalFooterNotice />
      <Footer />
      <LegalDisclaimerModal />
    </div>
  )
}
