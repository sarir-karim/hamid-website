import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/Home'
import About from './pages/About/About'
import ContactPage from './pages/Contact/ContactPage'
import Destinations from './pages/Destinations/Destinations'
import DestinationPage from './pages/Destinations/DestinationPage'
import Tours from './pages/Tours/Tours'
import TourDetails from './pages/Tours/TourDetails'
import DestinationDetails from './pages/Destinations/DestinationDetails'
import Programs from './pages/Programs/Programs'
import Gallery from './pages/Gallery/Gallery'
import BookNow from './pages/BookNow'

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />

      <main className="min-h-[calc(100vh-120px)]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/tours/:tourSlug" element={<TourDetails />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/destinations" element={<DestinationPage />} />
          <Route path="/destinations/:destinationId" element={<DestinationDetails />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book-now" element={<BookNow />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App

