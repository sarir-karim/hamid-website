import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Close menu when a link is clicked
  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/tours', label: 'Tours' },
    { to: '/programs', label: 'Programs' },
    { to: '/destinations', label: 'Destinations' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' }

  ]


  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 md:px-10 py-4 md:py-5">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 no-underline hover:opacity-80 transition-opacity"
          aria-label="Mountain Soul Adventure Home"
        >
          <div className="text-green-700 text-2xl font-bold" aria-hidden="true">▲</div>
          <span className="text-gray-900 font-semibold text-sm md:text-lg">Mountain Soul Adventure</span>
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 z-20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className={`w-6 h-0.5 bg-green-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-green-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-green-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Desktop Navigation */}
        <nav 
          className="hidden md:flex gap-8 items-center w-1/2" 
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-green-700 hover:text-green-900 no-underline text-sm transition-colors duration-200 ${
                  isActive ? 'font-semibold text-green-900' : ''
                }`
              }
              onClick={handleNavClick}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Book Now Button */}
        <Link 
          to="/book-now"
          className="hidden md:inline-flex bg-green-900 text-white px-6 py-2 rounded hover:bg-green-800 transition-colors duration-200 font-medium text-sm"
          aria-label="Book a tour now"
        >
          Book Now
        </Link>

        {/* Mobile Navigation Menu */}
        {isMobile && isMenuOpen && (
          <nav 
            className="absolute top-full left-0 right-0 bg-white shadow-lg flex flex-col gap-0 py-4 md:hidden"
            aria-label="Mobile Navigation"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-green-700 hover:bg-green-50 hover:text-green-900 no-underline px-6 py-3 transition-colors duration-200 text-sm border-b border-gray-100 ${
                    isActive ? 'font-semibold text-green-900' : ''
                  }`
                }
                onClick={handleNavClick}
              >
                {link.label}
              </NavLink>
            ))}
            <Link 
              to="/contact"
              className="bg-green-900 text-white mx-4 my-2 px-6 py-2 rounded hover:bg-green-800 transition-colors duration-200 font-medium text-sm text-center"
              aria-label="Book a tour now"
              onClick={handleNavClick}
            >
              Book Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
