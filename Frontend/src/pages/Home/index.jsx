import { Helmet } from "react-helmet-async";
import HeroSection from "./HeroSection";
import Services from "./Services";
import SpecializedPrograms from "./SpecializedPrograms";
import FeaturedTours from "./FeaturedTours";
import AboutSection from "./About";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";
import Team from "./Team";
import Gallery from "../../components/Gallery";
import Destinations from "../Destinations/Destinations";
import Contact from "../Contact/Contact";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>
          Mountain Soul Adventure | Authentic Adventure Travel in Pakistan
        </title>
        <meta
          name="description"
          content="Mountain Soul Adventure offers authentic mountain travel experiences in Pakistan. Explore expeditions, cultural journeys, and sustainable adventures with expert local guides."
        />
        <meta
          name="keywords"
          content="mountain adventure, Pakistan tours, trekking Pakistan, cultural travel, adventure travel"
        />
      </Helmet>

      <HeroSection />
      <AboutSection />
      <Services />
      <FeaturedTours />
      <Destinations />
      {/* <SpecializedPrograms /> */}
      <WhyChooseUs />
      <Testimonials />
      <Team />
      <Gallery />
      <Contact/>
    </>
  );
}
