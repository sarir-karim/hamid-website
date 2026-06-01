 import { Helmet } from 'react-helmet-async'
import { useAbout } from '../../hooks/useAPI'
import { DEFAULT_ABOUT_DATA } from './aboutData'
import AboutHero from './AboutHero'
import StorySection from './StorySection'
import MissionVisionSection from './MissionVisionSection'
import ValuesSection from './ValuesSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import Team from '../Home/Team'

// Timeline removed per request


export default function About() {

  const { data, error } = useAbout()
  const aboutData = data ?? DEFAULT_ABOUT_DATA

  if (error && !aboutData) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">About Us</h1>
          <p className="text-gray-600">Unable to load About page right now.</p>
        </div>
      </section>
    )
  }


  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: aboutData.companyName,
    description: aboutData.mission,
    url: 'https://mountainsouladventure.com',
    logo: 'https://mountainsouladventure.com/logo.png',
    foundingDate: '2010',
    areaServed: 'Pakistan',
    foundingLocation: 'Pakistan',
    mission: aboutData.mission,
    vision: aboutData.vision,
    image: aboutData.story.image,
    sameAs: [
      'https://www.facebook.com/mountainsouladventure',
      'https://www.instagram.com/mountainsouladventure',
      'https://twitter.com/mountainsoul'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      url: 'https://mountainsouladventure.com/contact'
    }
  }

  return (
    <>
      <Helmet>
        <title>{`${aboutData.companyName} - About Us | Authentic Mountain Adventures in Pakistan`}</title>
        <meta
          name="description"
          content={`Learn about ${aboutData.companyName}. Discover our mission, values, and journey of providing authentic mountain adventures and cultural experiences across Pakistan since 2010.`}
        />
        <meta
          name="keywords"
          content="about us, mountain adventure company, Pakistan travel, our story, mission, values, community-based tourism, sustainable travel"
        />
        <meta name="author" content={aboutData.companyName} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`About ${aboutData.companyName}`} />
        <meta property="og:description" content={aboutData.mission} />
        <meta property="og:image" content={aboutData.story.image} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <AboutHero />
      <StorySection story={aboutData.story} />
      <MissionVisionSection mission={aboutData.mission} vision={aboutData.vision} />
      <ValuesSection values={aboutData.values} />
      <StatsSection stats={aboutData.stats} />
      <Team />

      <CTASection />
    </>
  )
}
