import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingWhatsApp from './FloatingWhatsApp'
import ScrollToTopButton, { ScrollRestoration } from './ScrollToTop'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollRestoration />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTopButton />
    </div>
  )
}
