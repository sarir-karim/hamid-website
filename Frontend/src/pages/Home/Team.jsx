import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import ceoPhoto from '../../assets/ceo.jpg'

export default function Team({ title = 'Our Team', aboutPage = false }) {
  const teamMembers = [
    {
      id: 'hamid-ullah',
      name: 'Hamid Ullah',
      role: 'Chief Executive Officer',
      image: ceoPhoto,
      shortBio: 'Leads the team in creating meaningful mountain travel experiences.',
      bio: 'Hamid Ullah leads the company’s work to create safe, meaningful mountain travel experiences across Pakistan. As CEO, he guides the team and its commitment to responsible travel.',
    },
    {
      id: 'member-1',
      name: 'Ahmad Khan',
      role: 'Founder & Head Guide',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      shortBio: 'Expert mountaineer with 15+ years on Pakistan’s highest peaks.',
      bio: 'Ahmad Khan is an expert mountaineer with more than 15 years of experience in Pakistan’s highest peaks. As Founder and Head Guide, he brings his mountain experience to expedition planning and guiding.',
    },
    {
      id: 'member-2',
      name: 'Fatima Ali',
      role: 'Lead Trekking Guide',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      shortBio: 'Certified guide focused on cultural and community-based travel.',
      bio: 'Fatima Ali is a certified trekking guide who specializes in cultural immersion and community-based tourism. Her work focuses on helping travelers connect thoughtfully with the communities and cultures they encounter.',
    },
    {
      id: 'member-3',
      name: 'Hassan Malik',
      role: 'Safety Officer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
      shortBio: 'Safety professional focused on responsible, well-planned adventures.',
      bio: 'Hassan Malik is a professional safety expert responsible for helping ensure adventures are planned and carried out responsibly. His focus is on safety practices and maintaining high standards across the team’s trips.',
    }
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mountain Soul Adventure Team",
    description: "Our team of expert mountaineers, guides, and professionals",
    url: "https://mountainsouladventure.com",
    employee: teamMembers.map(member => ({
      "@type": "Person",
      name: member.name,
      jobTitle: member.role,
      image: member.image
    }))
  }

  return (
    <>
      <Helmet>
        <title>Our Team - Mountain Soul Adventure</title>
        <meta 
          name="description" 
          content="Meet the expert team of mountaineers, guides, and professionals at Mountain Soul Adventure. Led by experienced experts with deep connection to Pakistan's mountains." 
        />
        <meta 
          name="keywords" 
          content="our team, mountain guides, experienced guides, team members, professional guides" 
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Team Section */}
      <section className="py-16 bg-gray-50" aria-label={title}>
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-3">
              {title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our strength lies in our people. Mountain Soul Adventure is led by experienced mountaineers, certified guides, local experts, and passionate professionals who share a deep connection with Pakistan's mountains and cultures.
            </p>
          </div>

          {/* Team Members Grid */}
          <div className={`grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 ${aboutPage ? 'lg:grid-cols-3' : 'lg:grid-cols-4'}`}>
            {teamMembers.map((member) => {
              const description = aboutPage ? member.bio : member.shortBio
              const card = (
                <article
                  id={`team-${member.id}`}
                  className="group flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white text-left shadow-sm transition-shadow duration-300 hover:shadow-md scroll-mt-28"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="mb-1 text-lg font-bold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="mb-3 text-sm font-semibold text-green-700">
                      {member.role}
                    </p>
                    {description && (
                      <p className="text-sm leading-relaxed text-gray-600">
                        {description}
                      </p>
                    )}
                  </div>
                </article>
              )

              return (
                <div key={member.id}>
                  {aboutPage ? card : (
                    <Link
                      to={`/about#team-${member.id}`}
                      aria-label={`View ${member.name}'s full profile on the About page`}
                      className="block h-full rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-700"
                    >
                      {card}
                    </Link>
                  )}
                </div>
              )
            })}
          </div>

          {/* Team CTA */}
          <div className="text-center mt-16">
           
            <Link
              to="/contact"
              className="inline-block bg-green-700 text-white px-8 py-3 rounded hover:bg-green-800 transition-colors duration-200 font-medium"
              role="button"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
