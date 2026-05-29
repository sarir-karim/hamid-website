import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import SpecializedPrograms from './components/SpecializedPrograms'
import FeaturedTours from './components/FeaturedTours'
import Destinations from './components/Destinations'
import WhyChooseUs from './components/WhyChooseUs'
import About from './components/About'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className="bg-black h-[100vh]">
        <Header />
        <HeroSection />
      </div>
      <About />
      <Services />
      <SpecializedPrograms />
      <FeaturedTours />
      <Destinations />
      <WhyChooseUs />
      <Testimonials />
      <Team />
      <Gallery />
      <Contact />
      <Footer />
    </>
  )
}

export default App
