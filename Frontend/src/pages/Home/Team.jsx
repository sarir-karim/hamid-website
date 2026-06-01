import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function Team() {
  const teamMembers = [
    {
      id: 'member-1',
      name: 'Ahmad Khan',
      role: 'Founder & Head Guide',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      bio: 'Expert mountaineer with 15+ years of experience in Pakistan\'s highest peaks'
    },
    {
      id: 'member-2',
      name: 'Fatima Ali',
      role: 'Lead Trekking Guide',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      bio: 'Certified guide specializing in cultural immersion and community-based tourism'
    },
    {
      id: 'member-3',
      name: 'Hassan Malik',
      role: 'Safety Officer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
      bio: 'Professional safety expert ensuring all adventures meet international standards'
    },
    {
      id: 'member-4',
      name: 'Ayesha Rahman',
      role: 'Community Liaison',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
      bio: 'Cultural ambassador dedicated to sustainable tourism and local empowerment'
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
      <section className="py-16 bg-gray-50" aria-label="Our Team">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-3">
              Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our strength lies in our people. Mountain Soul Adventure is led by experienced mountaineers, certified guides, local experts, and passionate professionals who share a deep connection with Pakistan's mountains and cultures.
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <article 
                key={member.id}
                className="text-center group"
              >
                {/* Profile Image */}
                <div className="mb-6 flex justify-center">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-green-700 font-medium text-sm mb-3">
                  {member.role}
                </p>

                {/* Bio */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </article>
            ))}
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
